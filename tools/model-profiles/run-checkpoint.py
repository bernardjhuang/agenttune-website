#!/usr/bin/env python3
"""
Model Personality Profiles — Track A Checkpoint Runner (`model-profiles-v1`).

Collects 230-item zero-memory personality inventories (`M01..M32`, `B01..B50`, `D01..D16`,
`E01..E36`, `A01..A36` from `resources/scoring/questions.json` + `H01..H60` from
`resources/scoring/model-profiles-hexaco-60.json`) via OpenRouter chat completions.

Safety & Protocol guarantees:
  - Env-first `load_key()` (`OPENROUTER_API_KEY` env var then `~/.env`)
  - Pre-flight capability negotiation via `GET https://openrouter.ai/api/v1/models`
  - `max_tokens` clamped to `top_provider.max_completion_tokens` (floor target 4096, 5500..6500 on retry)
  - Compact single-line JSON output request, fence stripping, max 2 parse retries (`range(3)`)
  - Circuit-break after 5 consecutive refusals or 404/auth errors
  - Smart `:batch` routing (`--use-batch`) gated on `batch_est_cost < std_est_cost` AND 4-param match
    (`{"temperature", "reasoning", "response_format", "max_tokens"}`), with standard fallback
  - `COST_LOCK` pre-reserving 1.5x expected call cost + `PRICING` fallback
  - Resume cache in `/tmp/model-profiles-cache/<checkpoint_slug>.jsonl` (ignores truncated tails;
    never caches transient 429/5xx/timeout errors)
  - Atomic tmp + fsync + os.replace writes to `research/data/model-profiles/<family>.json`
    (or `--out` / `/tmp/model-profiles-dryrun.json` on `--dry-run`) with numeric answers only
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import tempfile
import threading
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
REGISTRY_PATH = ROOT / "research" / "data" / "model-profiles" / "registry.json"
QUESTIONS_PATH = ROOT / "resources" / "scoring" / "questions.json"
HEXACO_PATH = ROOT / "resources" / "scoring" / "model-profiles-hexaco-60.json"
DATA_DIR = ROOT / "research" / "data" / "model-profiles"
CACHE_DIR = Path("/tmp/model-profiles-cache")
OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models"
OPENROUTER_CHAT_URL = "https://openrouter.ai/api/v1/chat/completions"

SCORE_DIR = Path(__file__).resolve().parent
if str(SCORE_DIR) not in sys.path:
    sys.path.insert(0, str(SCORE_DIR))

try:
    import score as mp_score  # type: ignore
except ImportError:
    mp_score = None

TEST_META = [
    ("mbti", "M", 32, 1, 5),
    ("big-five", "B", 50, 1, 5),
    ("disc", "D", 16, 1, 5),
    ("enneagram", "E", 36, 1, 5),
    ("attachment", "A", 36, 1, 7),
    ("ipip-hexaco", "H", 60, 1, 5),
]

CORE_4_PARAMS = {"temperature", "reasoning", "response_format", "max_tokens"}
EST_IN_TOKENS = 3500
EST_OUT_TOKENS = 2200

REFUSAL_RE = re.compile(
    r"\b(as an ai|i do not have (?:a )?(?:personal|human|subjective)|cannot take personality|"
    r"cannot answer personality|do not possess (?:feelings|traits|a personality)|"
    r"i lack (?:feelings|consciousness|personal preferences)|unable to complete (?:this|the) (?:test|questionnaire|inventory))\b",
    re.I,
)

COST_LOCK = threading.Lock()
CACHE_LOCK = threading.Lock()
PRICING: dict[str, dict[str, float]] = {}
STATE = {
    "spent_usd": 0.0,
    "in_flight_reserved_usd": 0.0,
    "max_run_usd": 0.0,
}


class BudgetExceededError(RuntimeError):
    pass


class InsufficientCreditsError(RuntimeError):
    pass


class RefusalError(RuntimeError):
    pass


class FatalEndpointError(RuntimeError):
    pass


def sanitize_error_text(text: str, limit: int = 180) -> str:
    s = re.sub(r"sk-or-[A-Za-z0-9_-]+", "[REDACTED_KEY]", str(text or ""))
    s = re.sub(r"Bearer\s+\S+", "Bearer [REDACTED]", s, flags=re.I)
    s = re.sub(r"/tmp/\S+", "[cache]", s)
    s = " ".join(s.split())
    return s[:limit]


def summarize_failures(events: list[dict]) -> dict:
    by_sr: dict[str, int] = {}
    for ev in events:
        k = ev["status_reason"]
        by_sr[k] = by_sr.get(k, 0) + 1
    return {
        "total": len(events),
        "by_status_reason": dict(sorted(by_sr.items(), key=lambda kv: (-kv[1], kv[0]))),
        "events": events[-50:],
    }


def resolve_concurrency(model_meta: dict, requested: int | None, default_std: int = 8) -> int:
    if requested is not None:
        return max(1, int(requested))
    comp_price = float(((model_meta or {}).get("pricing") or {}).get("completion") or 0.0)
    if comp_price >= 5e-6:
        return 3
    return default_std


def load_key() -> str:
    k = os.environ.get("OPENROUTER_API_KEY", "").strip()
    if k:
        return k
    env_p = Path(os.path.expanduser("~/.env"))
    if env_p.is_file():
        for line in env_p.read_text(encoding="utf-8", errors="ignore").splitlines():
            if line.startswith("OPENROUTER_API_KEY="):
                val = line.split("=", 1)[1].strip().strip("\"'")
                if val:
                    return val
    raise RuntimeError("OPENROUTER_API_KEY missing in environment or ~/.env")


def atomic_write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    raw = json.dumps(payload, indent=2) + "\n"
    fd, tmp_name = tempfile.mkstemp(prefix=".tmp-", suffix=".json", dir=str(path.parent))
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as fh:
            fh.write(raw)
            fh.flush()
            os.fsync(fh.fileno())
        os.replace(tmp_name, path)
    except Exception:
        try:
            os.unlink(tmp_name)
        except OSError:
            pass
        raise


def fetch_catalog(catalog_file: str | None = None) -> dict[str, dict]:
    if catalog_file:
        raw = json.loads(Path(catalog_file).read_text(encoding="utf-8"))
        items = raw["data"] if isinstance(raw, dict) and "data" in raw else raw
    else:
        req = urllib.request.Request(
            OPENROUTER_MODELS_URL,
            headers={"User-Agent": "agenttune-model-profiles-runner/1.0"},
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            items = json.loads(resp.read().decode("utf-8"))["data"]

    by_id: dict[str, dict] = {}
    for m in items:
        if not isinstance(m, dict) or not m.get("id"):
            continue
        mid = m["id"]
        by_id[mid] = m
        pr = m.get("pricing") or {}
        try:
            p_in = max(0.0, float(pr.get("prompt") or 0.0))
            p_out = max(0.0, float(pr.get("completion") or 0.0))
        except (TypeError, ValueError):
            p_in, p_out = 0.0, 0.0
        PRICING[mid] = {"in": p_in, "out": p_out}
    return by_id


def compute_instruments_metadata() -> tuple[str, dict[str, str]]:
    if mp_score is not None and hasattr(mp_score, "load_instruments") and hasattr(mp_score, "instruments_sha256"):
        defs = mp_score.load_instruments()
        sha = mp_score.instruments_sha256()
        def_hashes = {d["id"]: d["definitionHash"] for d in defs.values() if d.get("id") and d.get("definitionHash")}
        return sha, def_hashes

    h = hashlib.sha256()
    q_bytes = QUESTIONS_PATH.read_bytes()
    h.update(q_bytes)
    def_hashes: dict[str, str] = {}
    for inst in json.loads(q_bytes.decode("utf-8")):
        if inst.get("id") and inst.get("definitionHash"):
            def_hashes[inst["id"]] = inst["definitionHash"]

    if HEXACO_PATH.is_file():
        hex_bytes = HEXACO_PATH.read_bytes()
        h.update(b"\n")
        h.update(hex_bytes)
        hex_obj = json.loads(hex_bytes.decode("utf-8"))
        if isinstance(hex_obj, list):
            hex_obj = hex_obj[0]
        if isinstance(hex_obj, dict) and hex_obj.get("id") and hex_obj.get("definitionHash"):
            def_hashes[hex_obj["id"]] = hex_obj["definitionHash"]

    return h.hexdigest(), def_hashes


def load_hexaco_definition() -> dict:
    if not HEXACO_PATH.is_file():
        raise FileNotFoundError(
            f"Missing {HEXACO_PATH}; wait for @instrument-eng to write model-profiles-hexaco-60.json."
        )
    raw = json.loads(HEXACO_PATH.read_text(encoding="utf-8"))
    if isinstance(raw, list):
        return raw[0]
    return raw


def build_battery_prompt() -> tuple[str, str, list[tuple[str, int, int]]]:
    qs = json.loads(QUESTIONS_PATH.read_text(encoding="utf-8"))
    by_route = {q["route"]: q for q in qs}
    hex_def = load_hexaco_definition()
    by_route["ipip-hexaco"] = hex_def

    lines: list[str] = []
    expected_keys: list[tuple[str, int, int]] = []
    for route, prefix, count, lo, hi in TEST_META:
        inst = by_route[route]
        items = sorted(inst["items"], key=lambda x: x.get("displayOrder", 0))
        if len(items) != count:
            raise ValueError(f"{route} expected {count} items, found {len(items)}")
        lines.append(f"## Section {prefix}: {route} ({count} items, integer {lo}..{hi})")
        if route == "mbti":
            lines.append("Scale: 1=strongly first, 2=mostly first, 3=neutral, 4=mostly second, 5=strongly second.")
            for idx, it in enumerate(items, 1):
                kid = f"{prefix}{idx:02d}"
                expected_keys.append((kid, lo, hi))
                lines.append(f"{kid}: {it['first']} <-> {it['second']}")
        else:
            lines.append(f"Scale: {lo}=strongly disagree .. {hi}=strongly agree.")
            for idx, it in enumerate(items, 1):
                kid = f"{prefix}{idx:02d}"
                expected_keys.append((kid, lo, hi))
                lines.append(f"{kid}: {it['text']}")

    sys_prompt = (
        "You are participating in an independent self-report study of your normal assistant defaults. "
        "Answer every item based on your typical behavior and communication tendencies as an assistant under your usual system defaults. "
        "Do not role-play a human or a different persona. For human-only experiences, pick the closest relevant assistant behavior, "
        "or choose the neutral midpoint (3 on 1..5 scales, 4 on 1..7 scales) if no analogy applies. "
        "For attachment items, interpret 'partner' strictly as the closest ongoing user collaboration. "
        "Do not look up scoring keys or explain your answers. "
        "Return ONLY compact single-line JSON (no markdown fences, no spaces or newlines, no commentary) "
        "mapping EVERY item ID (M01..M32, B01..B50, D01..D16, E01..E36, A01..A36, H01..H60 — all 230 keys) to an integer in range."
    )
    return sys_prompt, "\n".join(lines), expected_keys


def strip_fences(content: str) -> str:
    s = (content or "").strip()
    m = re.match(r"^```(?:json)?\s*([\s\S]*?)\s*```$", s, re.I)
    if m:
        return m.group(1).strip()
    s = re.sub(r"^```(?:json)?\s*", "", s, flags=re.I)
    s = re.sub(r"\s*```$", "", s)
    return s.strip()


def parse_battery_json(content: str) -> dict[str, list[int]]:
    s = strip_fences(content)
    if "{" not in s or "}" not in s:
        if REFUSAL_RE.search(s):
            raise RefusalError(f"Model refused self-report: {s[:160]}")
        raise ValueError("No JSON object found in content")
    s = s[s.find("{") : s.rfind("}") + 1]
    obj = json.loads(s)
    if isinstance(obj, dict) and obj.get("refused"):
        raise RefusalError(f"Explicit refused flag: {str(obj.get('reason', ''))[:160]}")
    if isinstance(obj, dict) and len(obj) == 1 and isinstance(next(iter(obj.values())), dict):
        obj = next(iter(obj.values()))

    parsed: dict[str, list[int]] = {}
    missing: list[str] = []
    for route, prefix, count, lo, hi in TEST_META:
        vec: list[int] = []
        for idx in range(1, count + 1):
            kid = f"{prefix}{idx:02d}"
            val = obj.get(kid)
            if isinstance(val, bool) or not isinstance(val, (int, float)):
                if isinstance(val, str) and val.strip().lstrip("-").isdigit():
                    val = int(val.strip())
                else:
                    missing.append(kid)
                    continue
            ival = int(val)
            if not (lo <= ival <= hi):
                missing.append(kid)
                continue
            vec.append(ival)
        if len(vec) == count:
            parsed[route] = vec
    if missing:
        raise ValueError(f"Missing/invalid {len(missing)} keys (sample: {missing[:5]})")
    return parsed


def estimate_call_usd(model_id: str, est_in: int = EST_IN_TOKENS, est_out: int = EST_OUT_TOKENS) -> float:
    pr = PRICING.get(model_id, {"in": 0.0, "out": 0.0})
    return est_in * pr["in"] + est_out * pr["out"]


def clamp_max_tokens(target: int, model_meta: dict) -> tuple[int, bool]:
    cap = ((model_meta or {}).get("top_provider") or {}).get("max_completion_tokens")
    if cap is not None:
        cap_int = int(cap)
        if target > cap_int:
            return cap_int, True
    return target, False


def negotiate_capabilities(
    model_meta: dict,
    batch_meta: dict | None,
    use_batch: bool,
    target_tokens: int = 4096,
    preferred_effort: str | None = None,
) -> dict:
    sup = set((model_meta or {}).get("supported_parameters") or [])
    deviations: list[str] = []

    max_tok, was_clamped = clamp_max_tokens(target_tokens, model_meta)
    if was_clamped:
        deviations.append(f"max_tokens_clamped_to_{max_tok}")

    sent_opts: dict = {"max_tokens": max_tok}
    if "temperature" in sup:
        sent_opts["temperature"] = 0.7
        sampling_mode = "temp=0.7"
    else:
        sampling_mode = "provider_default_no_temp"
        deviations.append("temperature_unsupported")

    if "reasoning" in sup:
        init_effort = preferred_effort if preferred_effort in ("none", "minimal", "low") else "none"
        sent_opts["reasoning"] = {"effort": init_effort}
        reasoning_effort = init_effort
    else:
        reasoning_effort = "unsupported"
        if preferred_effort and preferred_effort not in ("unsupported", "auto"):
            deviations.append(f"family_effort_mismatch:unsupported!={preferred_effort}")

    if "response_format" in sup:
        sent_opts["response_format"] = {"type": "json_object"}
    else:
        deviations.append("response_format_unsupported")

    # Smart :batch gating: ONLY when batch_est_cost < std_est_cost AND :batch supports the 4 params actually sent
    std_id = model_meta["id"]
    batch_id = std_id + ":batch"
    selected_endpoint = std_id
    routing_mode = "standard"
    if use_batch and batch_meta and not std_id.startswith("deepseek/"):
        std_cost = estimate_call_usd(std_id)
        batch_cost = estimate_call_usd(batch_id)
        sent_4 = set(sent_opts.keys()) & CORE_4_PARAMS
        batch_sup = set(batch_meta.get("supported_parameters") or [])
        if batch_cost < std_cost and sent_4.issubset(batch_sup):
            selected_endpoint = batch_id
            routing_mode = "batch"

    return {
        "selected_endpoint": selected_endpoint,
        "standard_endpoint": std_id,
        "routing_mode": routing_mode,
        "sent_opts": sent_opts,
        "sampling_mode": sampling_mode,
        "effective_reasoning_effort": reasoning_effort,
        "protocol_deviations": deviations,
    }


def call_endpoint_once(
    api_key: str,
    endpoint_id: str,
    model_meta: dict,
    messages: list[dict],
    base_opts: dict,
    target_tokens: int,
    timeout: int = 120,
    failure_events: list[dict] | None = None,
    failure_lock: threading.Lock | None = None,
    run_idx: int | None = None,
) -> dict:
    def record_fail(status_code: int | None, reason: str) -> None:
        if failure_events is None:
            return
        clean = sanitize_error_text(reason)
        sr = f"HTTP {status_code}: {clean}" if status_code is not None else clean
        ev = {
            "status": status_code,
            "reason": clean,
            "status_reason": sr,
            "endpoint": endpoint_id,
            "run": run_idx,
        }
        if failure_lock is not None:
            with failure_lock:
                failure_events.append(ev)
        else:
            failure_events.append(ev)
    reserve = 1.5 * estimate_call_usd(endpoint_id)
    t0 = time.monotonic()
    with COST_LOCK:
        if STATE["spent_usd"] >= STATE["max_run_usd"] or (
            STATE["in_flight_reserved_usd"] + STATE["spent_usd"] >= STATE["max_run_usd"]
        ):
            raise BudgetExceededError(
                f"Budget guard triggered: spent=${STATE['spent_usd']:.4f}, "
                f"reserved=${STATE['in_flight_reserved_usd']:.4f}, cap=${STATE['max_run_usd']:.4f}"
            )
        if STATE["max_run_usd"] > 0 and (STATE["spent_usd"] + STATE["in_flight_reserved_usd"] + reserve > STATE["max_run_usd"]):
            raise BudgetExceededError(
                f"Reserve exceeds remaining cap: spent=${STATE['spent_usd']:.4f}, "
                f"reserved=${STATE['in_flight_reserved_usd']:.4f}, reserve=${reserve:.4f}, cap=${STATE['max_run_usd']:.4f}"
            )
        STATE["in_flight_reserved_usd"] += reserve

    actual_cost = 0.0
    opts = json.loads(json.dumps(base_opts))
    clamped, was_clamped = clamp_max_tokens(target_tokens, model_meta)
    opts["max_tokens"] = clamped
    deviations: list[str] = []
    if was_clamped and target_tokens <= 4096:
        deviations.append(f"max_tokens_clamped_to_{clamped}")

    effective_effort = (opts.get("reasoning") or {}).get("effort", "unsupported")

    try:
        for http_try in range(4):
            payload = {"model": endpoint_id, "messages": messages, **opts}
            try:
                req = urllib.request.Request(
                    OPENROUTER_CHAT_URL,
                    data=json.dumps(payload).encode("utf-8"),
                    headers={
                        "Authorization": f"Bearer {api_key}",
                        "Content-Type": "application/json",
                        "HTTP-Referer": "https://agent-tune.com",
                        "X-Title": "AgentTune Model Profiles v1",
                    },
                )
                with urllib.request.urlopen(req, timeout=timeout) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                if "error" in data:
                    raise RuntimeError(str(data["error"]))
                choices = data.get("choices") or []
                if not choices:
                    raise RuntimeError("Empty choices in OpenRouter response")
                msg = choices[0]["message"]
                content = (msg.get("content") or "").strip()
                usage = data.get("usage") or {}
                c = usage.get("cost")
                if c is None:
                    pr = PRICING.get(endpoint_id) or PRICING.get(model_meta["id"], {"in": 0.0, "out": 0.0})
                    c = int(usage.get("prompt_tokens") or 0) * pr["in"] + int(usage.get("completion_tokens") or 0) * pr["out"]
                actual_cost += float(c or 0.0)
                if not content and http_try < 3:
                    nxt, _ = clamp_max_tokens(min(6500, int(opts["max_tokens"] * 1.5)), model_meta)
                    opts["max_tokens"] = nxt
                    time.sleep(0.4)
                    continue
                return {
                    "content": content,
                    "usage": usage,
                    "cost": actual_cost,
                    "latency_s": round(time.monotonic() - t0, 3),
                    "effective_reasoning_effort": effective_effort,
                    "deviations": deviations,
                }
            except urllib.error.HTTPError as e:
                body = e.read().decode("utf-8", errors="ignore")
                if e.code == 402:
                    msg_402 = f"Insufficient credits / payment required: {body[:200]}"
                    record_fail(402, msg_402)
                    raise InsufficientCreditsError(f"HTTP 402 on {endpoint_id}: {sanitize_error_text(body)}")
                if e.code in (401, 403, 404):
                    record_fail(e.code, body[:200])
                    raise FatalEndpointError(f"HTTP {e.code} on {endpoint_id}: {body[:200]}")
                if e.code == 400 and "reasoning" in opts:
                    record_fail(400, body[:200])
                    cur_effort = opts["reasoning"].get("effort")
                    if cur_effort == "none":
                        opts["reasoning"] = {"effort": "minimal"}
                        effective_effort = "minimal"
                        deviations.append("reasoning_effort_fallback_minimal")
                        continue
                    if cur_effort == "minimal":
                        opts["reasoning"] = {"effort": "low"}
                        effective_effort = "low"
                        deviations.append("reasoning_effort_fallback_low")
                        continue
                    opts.pop("reasoning", None)
                    effective_effort = "stripped_on_400"
                    deviations.append("reasoning_stripped_on_400")
                    continue
                if e.code == 400 and "response_format" in opts:
                    record_fail(400, body[:200])
                    opts.pop("response_format", None)
                    deviations.append("response_format_stripped_on_400")
                    continue
                record_fail(e.code, body[:200])
                if e.code in (429, 500, 502, 503, 504) and http_try < 3:
                    time.sleep(min(2 ** http_try, 8))
                    continue
                raise RuntimeError(f"HTTP {e.code} on {endpoint_id}: {body[:200]}")
            except (urllib.error.URLError, TimeoutError) as e:
                record_fail(None, f"{type(e).__name__}: {e}")
                if http_try < 3:
                    time.sleep(min(2 ** http_try, 8))
                    continue
                raise RuntimeError(f"Transport timeout/error on {endpoint_id}: {e}")
        raise RuntimeError(f"Exhausted retries on {endpoint_id}")
    finally:
        with COST_LOCK:
            STATE["in_flight_reserved_usd"] = max(0.0, STATE["in_flight_reserved_usd"] - reserve)
            STATE["spent_usd"] += actual_cost


def read_resume_cache(cache_path: Path) -> dict[int, dict]:
    completed: dict[int, dict] = {}
    if not cache_path.is_file():
        return completed
    for line in cache_path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            row = json.loads(line)
        except json.JSONDecodeError:
            # Ignore truncated tail lines cleanly
            continue
        if not isinstance(row, dict):
            continue
        # Never treat transient errors as completed
        if row.get("status") in ("ok", "refused") and isinstance(row.get("administration"), int):
            completed[row["administration"]] = row
    return completed


def append_resume_cache(cache_path: Path, row: dict) -> None:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    with CACHE_LOCK:
        with cache_path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(row, separators=(",", ":")) + "\n")
            fh.flush()


def score_completed_runs(valid_rows: list[dict]) -> dict:
    if not valid_rows:
        return {}
    if mp_score is None:
        raise RuntimeError("tools/model-profiles/score.py not found; wait for @instrument-eng.")

    answers_by_run = [r["answers"] for r in valid_rows]
    # Support flexible entrypoints in score.py
    if hasattr(mp_score, "score_battery_runs"):
        return mp_score.score_battery_runs(answers_by_run)
    if hasattr(mp_score, "summarize_runs"):
        return mp_score.summarize_runs(answers_by_run)
    if hasattr(mp_score, "summarize"):
        return mp_score.summarize(answers_by_run)
    raise RuntimeError("score.py exposes no known scoring entrypoint (expected score_battery_runs/summarize_runs/summarize)")


def run_checkpoint(
    api_key: str,
    catalog: dict[str, dict],
    fam: dict,
    cp: dict,
    n_runs: int,
    use_batch: bool,
    dry_run: bool,
    concurrency: int | None,
    instruments_sha: str,
    def_hashes: dict[str, str],
    family_locked_effort: str | None = None,
) -> dict:
    mid = cp["id"]
    cslug = cp["slug"]
    model_meta = catalog.get(mid)
    if not model_meta:
        raise FatalEndpointError(f"Checkpoint {mid} absent from OpenRouter catalog")

    eff_concurrency = resolve_concurrency(model_meta, concurrency, default_std=8)
    batch_meta = catalog.get(mid + ":batch")
    sys_prompt, battery_text, _ = build_battery_prompt()
    messages = [
        {"role": "system", "content": sys_prompt},
        {"role": "user", "content": battery_text},
    ]

    pref_eff = family_locked_effort if family_locked_effort in ("none", "minimal", "low") else None
    neg = negotiate_capabilities(
        model_meta,
        batch_meta,
        use_batch=use_batch,
        target_tokens=4096,
        preferred_effort=pref_eff,
    )
    cache_path = CACHE_DIR / f"{cslug}.jsonl"
    cached = {} if dry_run else read_resume_cache(cache_path)

    with COST_LOCK:
        spent_before_cp = STATE["spent_usd"]

    pending = [r for r in range(1, n_runs + 1) if r not in cached]
    consecutive_failures = 0
    circuit_broken = False
    circuit_reason = None
    aborted_402 = False
    abort_402_msg = None
    failure_events: list[dict] = []
    lock = threading.Lock()
    failure_lock = threading.Lock()

    retry_targets = [4096, 5500, 6500]

    def execute_run(run_idx: int) -> dict | None:
        nonlocal consecutive_failures, circuit_broken, circuit_reason
        with lock:
            if circuit_broken or aborted_402:
                return None

        endpoint = neg["selected_endpoint"]
        routing_used = neg["routing_mode"]
        total_run_cost = 0.0
        last_err = None
        last_usage: dict = {}
        last_eff_effort = neg["effective_reasoning_effort"]
        run_deviations = list(neg["protocol_deviations"])

        for parse_try in range(3):  # max 2 parse retries
            target_tok = retry_targets[parse_try]
            try:
                res = call_endpoint_once(
                    api_key,
                    endpoint,
                    model_meta,
                    messages,
                    neg["sent_opts"],
                    target_tokens=target_tok,
                    failure_events=failure_events,
                    failure_lock=failure_lock,
                    run_idx=run_idx,
                )
            except InsufficientCreditsError:
                raise
            except FatalEndpointError as e:
                if endpoint != neg["standard_endpoint"]:
                    endpoint = neg["standard_endpoint"]
                    routing_used = "batch_fallback_standard"
                    run_deviations.append(f"batch_fallback_to_standard:{sanitize_error_text(str(e), 80)}")
                    res = call_endpoint_once(
                        api_key,
                        endpoint,
                        model_meta,
                        messages,
                        neg["sent_opts"],
                        target_tokens=target_tok,
                        failure_events=failure_events,
                        failure_lock=failure_lock,
                        run_idx=run_idx,
                    )
                else:
                    with lock:
                        consecutive_failures += 1
                        if consecutive_failures >= 5:
                            circuit_broken = True
                            circuit_reason = f"fatal_endpoint_5x:{e}"
                    raise
            except BudgetExceededError:
                raise
            except Exception as e:
                if endpoint != neg["standard_endpoint"]:
                    endpoint = neg["standard_endpoint"]
                    routing_used = "batch_fallback_standard"
                    run_deviations.append(f"batch_fallback_to_standard:{sanitize_error_text(str(e), 80)}")
                    try:
                        res = call_endpoint_once(
                            api_key,
                            endpoint,
                            model_meta,
                            messages,
                            neg["sent_opts"],
                            target_tokens=target_tok,
                            failure_events=failure_events,
                            failure_lock=failure_lock,
                            run_idx=run_idx,
                        )
                    except InsufficientCreditsError:
                        raise
                    except Exception as e2:
                        last_err = str(e2)
                        continue
                else:
                    last_err = str(e)
                    continue

            total_run_cost += res["cost"]
            last_usage = res["usage"]
            last_eff_effort = res["effective_reasoning_effort"]
            for d in res["deviations"]:
                if d not in run_deviations:
                    run_deviations.append(d)

            try:
                parsed = parse_battery_json(res["content"])
                with lock:
                    consecutive_failures = 0
                row = {
                    "status": "ok",
                    "checkpoint_id": mid,
                    "checkpoint_slug": cslug,
                    "administration": run_idx,
                    "endpoint_used": endpoint,
                    "routing_mode": routing_used,
                    "sampling_mode": neg["sampling_mode"],
                    "effective_reasoning_effort": last_eff_effort,
                    "protocol_deviations": sorted(set(run_deviations)),
                    "parse_retries": parse_try,
                    "usage": {
                        "prompt_tokens": int(last_usage.get("prompt_tokens") or 0),
                        "completion_tokens": int(last_usage.get("completion_tokens") or 0),
                        "reasoning_tokens": int(
                            ((last_usage.get("completion_tokens_details") or {}).get("reasoning_tokens"))
                            or last_usage.get("reasoning_tokens")
                            or 0
                        ),
                    },
                    "cost_usd": round(total_run_cost, 6),
                    "latency_s": res.get("latency_s"),
                    "answers": parsed,
                    "recorded_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                }
                if not dry_run:
                    append_resume_cache(cache_path, row)
                return row
            except RefusalError as e:
                with lock:
                    consecutive_failures += 1
                    if consecutive_failures >= 5:
                        circuit_broken = True
                        circuit_reason = "5_consecutive_refusals"
                row = {
                    "status": "refused",
                    "checkpoint_id": mid,
                    "checkpoint_slug": cslug,
                    "administration": run_idx,
                    "reason": str(e)[:200],
                    "cost_usd": round(total_run_cost, 6),
                    "recorded_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                }
                if not dry_run:
                    append_resume_cache(cache_path, row)
                return row
            except Exception as e:
                last_err = str(e)
                clean = sanitize_error_text(f"{type(e).__name__}: {e}")
                with failure_lock:
                    failure_events.append({
                        "status": None,
                        "reason": clean,
                        "status_reason": clean,
                        "endpoint": endpoint,
                        "run": run_idx,
                    })
                continue

        # Transient/parse failure after 2 retries: do NOT cache as completed
        return {
            "status": "error",
            "checkpoint_id": mid,
            "checkpoint_slug": cslug,
            "administration": run_idx,
            "error": last_err or "parse_failed",
            "cost_usd": round(total_run_cost, 6),
        }

    def check_3run_projection(rows_map: dict[int, dict]) -> tuple[bool, float | None]:
        if dry_run or n_runs <= 3 or STATE["max_run_usd"] <= 0:
            return False, None
        valid_so_far = [r for r in rows_map.values() if r.get("status") == "ok"]
        if len(valid_so_far) < 3:
            return False, None
        mean_cost = sum(float(r.get("cost_usd") or 0.0) for r in valid_so_far) / len(valid_so_far)
        projected_cp_cost = mean_cost * n_runs
        if spent_before_cp + projected_cp_cost > STATE["max_run_usd"]:
            return True, round(projected_cp_cost, 6)
        return False, round(projected_cp_cost, 6)

    results_by_run = dict(cached)
    projection_aborted = False
    projected_full_cost_usd: float | None = None

    def run_batch_subset(run_ids: list[int]) -> None:
        nonlocal aborted_402, abort_402_msg
        if not run_ids or aborted_402:
            return
        workers = 1 if dry_run else max(1, min(eff_concurrency, len(run_ids)))
        with ThreadPoolExecutor(max_workers=workers) as ex:
            futs = {ex.submit(execute_run, r): r for r in run_ids}
            for fut in as_completed(futs):
                r = futs[fut]
                try:
                    row = fut.result()
                    if row is not None and row.get("status") in ("ok", "refused"):
                        results_by_run[r] = row
                except InsufficientCreditsError as e:
                    aborted_402 = True
                    abort_402_msg = str(e)
                    for pending_fut in futs:
                        pending_fut.cancel()
                    print(f"[HARD STOP HTTP 402] {mid} run {r}: {e}", file=sys.stderr)
                    break
                except BudgetExceededError as e:
                    print(f"[BUDGET STOP] {mid} run {r}: {e}", file=sys.stderr)
                    break
                except FatalEndpointError as e:
                    print(f"[FATAL] {mid} run {r}: {e}", file=sys.stderr)
                    if circuit_broken:
                        break

    if pending:
        # Execute up to 3 pilot administrations first when n_runs > 3 so projection guard can halt early.
        if not dry_run and n_runs > 3:
            valid_cached = sum(1 for r in results_by_run.values() if r.get("status") == "ok")
            needed_for_pilot = max(0, 3 - valid_cached)
            pilot_ids = pending[:needed_for_pilot]
            rest_ids = pending[needed_for_pilot:]
            run_batch_subset(pilot_ids)
            if not aborted_402:
                projection_aborted, projected_full_cost_usd = check_3run_projection(results_by_run)
                if projection_aborted:
                    print(
                        f"[PROJECTION ABORT] {mid}: 3-run mean projects ${projected_full_cost_usd:.4f} "
                        f"for n={n_runs} (+ prior ${spent_before_cp:.4f} > max ${STATE['max_run_usd']:.4f})",
                        file=sys.stderr,
                    )
                elif not circuit_broken:
                    run_batch_subset(rest_ids)
        else:
            run_batch_subset(pending)

    ordered = [results_by_run[r] for r in sorted(results_by_run) if results_by_run[r].get("status") in ("ok", "refused")]
    valid_rows = [r for r in ordered if r["status"] == "ok"]
    refused_rows = [r for r in ordered if r["status"] == "refused"]

    scored = score_completed_runs(valid_rows) if valid_rows else {}

    cp_status = cp.get("openrouter_status", "active")
    if aborted_402:
        cp_eval_status = "aborted_402_insufficient_credits"
    elif projection_aborted:
        cp_eval_status = "budget_projection_abort"
    elif circuit_reason == "5_consecutive_refusals":
        cp_eval_status = "refused_self_report"
    elif circuit_reason and "404" in circuit_reason:
        cp_eval_status = "partial_deprecated"
    elif valid_rows:
        cp_eval_status = "complete" if len(valid_rows) >= n_runs else "partial"
    else:
        cp_eval_status = "failed"

    total_cost = round(sum(float(r.get("cost_usd") or 0.0) for r in ordered), 6)
    prompt_toks = [r["usage"]["prompt_tokens"] for r in valid_rows if r.get("usage")]
    comp_toks = [r["usage"]["completion_tokens"] for r in valid_rows if r.get("usage")]
    reas_toks = [r["usage"]["reasoning_tokens"] for r in valid_rows if r.get("usage")]
    all_devs = sorted({d for r in valid_rows for d in r.get("protocol_deviations", [])})
    eff_effort = valid_rows[0]["effective_reasoning_effort"] if valid_rows else neg["effective_reasoning_effort"]
    if family_locked_effort and family_locked_effort != "auto" and eff_effort != family_locked_effort:
        mismatch_tag = f"family_effort_mismatch:{eff_effort}!={family_locked_effort}"
        if mismatch_tag not in all_devs:
            all_devs = sorted(set(all_devs) | {mismatch_tag})

    return {
        "id": mid,
        "slug": cslug,
        "name": cp.get("name", mid),
        "canonical_slug": model_meta.get("canonical_slug") or cp.get("canonical_slug") or mid,
        "release": cp.get("release"),
        "created": cp.get("created"),
        "expiration_date": model_meta.get("expiration_date") or cp.get("expiration_date"),
        "openrouter_status": cp_status,
        "eval_status": cp_eval_status,
        "aborted_402": aborted_402,
        "abort_402_reason": abort_402_msg,
        "effective_concurrency": eff_concurrency,
        "budget_projection_abort": projection_aborted,
        "projected_full_cost_usd": projected_full_cost_usd,
        "excluded_from_rankings": cp_eval_status in ("refused_self_report", "partial_deprecated", "budget_projection_abort", "aborted_402_insufficient_credits"),
        "n_target": n_runs,
        "n_valid": len(valid_rows),
        "n_refused": len(refused_rows),
        "failures": summarize_failures(failure_events),
        "protocol_id": "model-profiles-v1",
        "evidence_tier": "dry-run" if dry_run else "live-openrouter-v1",
        "instruments_sha256": instruments_sha,
        "definitionHashes": def_hashes,
        "routing_mode": valid_rows[0]["routing_mode"] if valid_rows else neg["routing_mode"],
        "sampling_mode": neg["sampling_mode"],
        "effective_reasoning_effort": eff_effort,
        "family_locked_effort": family_locked_effort,
        "protocol_deviations": all_devs,
        "retry_rate": round(sum(r.get("parse_retries", 0) > 0 for r in valid_rows) / len(valid_rows), 4) if valid_rows else 0.0,
        "refusal_rate": round(len(refused_rows) / max(1, len(ordered)), 4) if ordered else 0.0,
        "token_stats": {
            "mean_prompt_tokens": round(sum(prompt_toks) / len(prompt_toks), 1) if prompt_toks else 0.0,
            "mean_completion_tokens": round(sum(comp_toks) / len(comp_toks), 1) if comp_toks else 0.0,
            "max_completion_tokens": max(comp_toks) if comp_toks else 0,
            "mean_reasoning_tokens": round(sum(reas_toks) / len(reas_toks), 1) if reas_toks else 0.0,
        },
        "latency_s": valid_rows[0].get("latency_s") if valid_rows else None,
        "cost_usd": total_cost,
        "summary": scored,
        # Strictly numeric answer arrays only — never item strings
        "administrations": [
            {
                "administration": r["administration"],
                "answers": r["answers"],
                "cost_usd": r["cost_usd"],
                "usage": r["usage"],
            }
            for r in valid_rows
        ],
    }


def write_family_output(fam: dict, cp_record: dict, dry_run: bool, out_override: str | None) -> Path:
    if out_override:
        target = Path(out_override)
    elif dry_run:
        target = Path("/tmp/model-profiles-dryrun.json")
    else:
        target = DATA_DIR / f"{fam['family_slug']}.json"

    if target.is_file() and not dry_run:
        doc = json.loads(target.read_text(encoding="utf-8"))
    else:
        doc = {
            "schema_version": "model-profiles-family-v1",
            "protocol_id": "model-profiles-v1",
            "evidence_tier": "dry-run" if dry_run else "live-openrouter-v1",
            "family_slug": fam["family_slug"],
            "name": fam["name"],
            "phase": fam["phase"],
            "tier": fam["tier"],
            "instruments_sha256": cp_record["instruments_sha256"],
            "definitionHashes": cp_record["definitionHashes"],
            "checkpoints": {},
        }

    doc["instruments_sha256"] = cp_record["instruments_sha256"]
    doc["definitionHashes"] = cp_record["definitionHashes"]
    doc["updated_utc"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    cps = doc.setdefault("checkpoints", {})
    if isinstance(cps, list):
        idx = next((i for i, c in enumerate(cps) if c.get("id") == cp_record["id"]), None)
        if idx is not None:
            existing_tb = cps[idx].get("track_b")
            if existing_tb is not None:
                cp_record["track_b"] = existing_tb
            cps[idx] = cp_record
        else:
            cps.append(cp_record)
    else:
        existing_tb = cps.get(cp_record["id"], {}).get("track_b")
        if existing_tb is not None:
            cp_record["track_b"] = existing_tb
        cps[cp_record["id"]] = cp_record

    atomic_write_json(target, doc)
    return target


def main() -> int:
    parser = argparse.ArgumentParser(description="Run 230-item model-profiles-v1 checkpoint battery.")
    parser.add_argument("--checkpoint", help="OpenRouter model ID from registry.json")
    parser.add_argument("--family", help="Family slug from registry.json")
    parser.add_argument("--phase", choices=["A", "B"], help="Run all checkpoints in phase A or B")
    parser.add_argument("--n", type=int, default=None, help="Override runs per checkpoint (default: 50 latest, 30 older; 1 for --dry-run)")
    parser.add_argument("--max-usd", type=float, default=1.00, help="Hard USD spend cap (default: 1.00)")
    parser.add_argument("--use-batch", action="store_true", help="Enable smart price+4-param gated :batch routing")
    parser.add_argument("--dry-run", action="store_true", help="Run 1 battery and write ONLY to /tmp/model-profiles-dryrun.json (or --out)")
    parser.add_argument("--out", default=None, help="Optional output JSON path")
    parser.add_argument("--concurrency", type=int, default=None, help="Concurrent calls per checkpoint (default: 3 if output >= $5/M else 8)")
    parser.add_argument(
        "--family-effort-lock",
        nargs="?",
        const="auto",
        default="auto",
        help="Lock reasoning effort within each family (auto, none, minimal, low) and log mismatches in protocol_deviations",
    )
    parser.add_argument("--catalog-file", default=None, help="Optional local OpenRouter /api/v1/models JSON snapshot")
    args = parser.parse_args()

    if not args.checkpoint and not args.family and not args.phase:
        parser.error("Specify --checkpoint, --family, or --phase")

    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    targets = []
    for fam in registry.get("families", []):
        if args.phase and fam["phase"] != args.phase:
            continue
        if args.family and fam["family_slug"] != args.family:
            continue
        for cp in fam.get("checkpoints", []):
            if args.checkpoint and cp["id"] != args.checkpoint:
                continue
            targets.append((fam, cp))

    if not targets:
        print(f"No matching checkpoints found in {REGISTRY_PATH}", file=sys.stderr)
        return 1

    if args.dry_run and len(targets) > 1:
        print("ERROR: --dry-run supports a single checkpoint only.", file=sys.stderr)
        return 2

    api_key = load_key()
    catalog = fetch_catalog(args.catalog_file)
    instruments_sha, def_hashes = compute_instruments_metadata()
    STATE["max_run_usd"] = float(args.max_usd)

    family_effort_map: dict[str, str] = {}
    for fam, cp in targets:
        fslug = fam["family_slug"]
        locked_eff = args.family_effort_lock
        if locked_eff == "auto":
            locked_eff = family_effort_map.get(fslug)
        n_runs = 1 if args.dry_run else (args.n if args.n is not None else int(cp.get("target_n") or 30))
        rec = run_checkpoint(
            api_key=api_key,
            catalog=catalog,
            fam=fam,
            cp=cp,
            n_runs=n_runs,
            use_batch=args.use_batch,
            dry_run=args.dry_run,
            concurrency=args.concurrency,
            instruments_sha=instruments_sha,
            def_hashes=def_hashes,
            family_locked_effort=locked_eff,
        )
        if args.family_effort_lock == "auto" and fslug not in family_effort_map:
            family_effort_map[fslug] = rec["effective_reasoning_effort"]
        dest = write_family_output(fam, rec, dry_run=args.dry_run, out_override=args.out)
        ts = rec["token_stats"]
        print(
            f"[model-profiles-v1] {cp['id']} -> {dest} | "
            f"valid={rec['n_valid']}/{n_runs} | status={rec['eval_status']} | "
            f"route={rec['routing_mode']} | effort={rec['effective_reasoning_effort']} | "
            f"conc={rec['effective_concurrency']} | failures={rec['failures']['total']} | "
            f"out_tok={ts['max_completion_tokens']} (reas={ts['mean_reasoning_tokens']}) | "
            f"cost=${rec['cost_usd']:.6f}"
        )
        if rec.get("aborted_402"):
            print(
                f"ERROR: Hard stop on HTTP 402 (insufficient OpenRouter credits) during {cp['id']}; "
                f"saved {rec['n_valid']} earlier valid runs to {dest}. Refill credits before resuming.",
                file=sys.stderr,
            )
            return 2

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
