#!/usr/bin/env python3
"""
AgentTune November 2026 High-Precision (N=100) OpenRouter Benchmark & Behavioral Studies.

Administers the 5 frozen AgentTune inventories (MBTI OEJTS 32, Big Five IPIP-50 50,
DISC ODAT 16, Enneagram OEPS 36, Attachment ECR-R 36 = 170 items total) across 20 models
(8 proprietary frontier models + 12 popular open-weight models on OpenRouter), plus the
180-reply behavioral prompt-comparison study and 36-reply Claude preferences study.

Usage:
  python3 tools/run-november-2026-openrouter.py --dry-run
  python3 tools/run-november-2026-openrouter.py --psychometrics --runs 100
  python3 tools/run-november-2026-openrouter.py --behavioral
"""

import argparse
import asyncio
import csv
import json
import os
import re
import subprocess
import sys
import time
from collections import Counter, defaultdict
from pathlib import Path

import aiohttp

ROOT = Path(__file__).resolve().parent.parent
QUESTIONS_PATH = ROOT / "resources" / "scoring" / "questions.json"
PROMPT_KIT_PATH = ROOT / "resources" / "research" / "personality-prompt-comparison-kit.json"
CLAUDE_KIT_PATH = ROOT / "resources" / "research" / "claude-preferences-kit.json"

PSYCH_CHECKPOINT = Path("/tmp/november-2026-psychometrics.jsonl")
BEHAV_CHECKPOINT = Path("/tmp/november-2026-behavioral.jsonl")
PREFS_CHECKPOINT = Path("/tmp/november-2026-claude-prefs.jsonl")

OUT_RESPONSES = ROOT / "research" / "data" / "november-2026-openrouter-responses.json"
OUT_SUMMARY_JSON = ROOT / "research" / "data" / "november-2026-openrouter-summary.json"
OUT_SUMMARY_CSV = ROOT / "research" / "data" / "november-2026-openrouter-summary.csv"
OUT_OS_PROFILES = ROOT / "research" / "data" / "openrouter-open-source-profiles.json"
OUT_BEHAV_JSON = ROOT / "research" / "data" / "november-2026-prompt-comparison-results.json"
OUT_PREFS_JSON = ROOT / "research" / "data" / "november-2026-claude-preferences-results.json"

MODELS = [
    # 8 Proprietary frontier models
    {"id": "openai/gpt-6.2-astra", "slug": "gpt-6-2-astra", "name": "GPT-6.2 Astra", "family": "proprietary", "provider": "OpenAI", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 18},
    {"id": "openai/gpt-6.2-sol", "slug": "gpt-6-2-sol", "name": "GPT-6.2 Sol", "family": "proprietary", "provider": "OpenAI", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 20},
    {"id": "anthropic/claude-fable-5.2", "slug": "claude-fable-5-2", "name": "Claude Fable 5.2", "family": "proprietary", "provider": "Anthropic", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 15},
    {"id": "anthropic/claude-opus-5.5", "slug": "claude-opus-5-5", "name": "Claude Opus 5.5", "family": "proprietary", "provider": "Anthropic", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 15},
    {"id": "anthropic/claude-sonnet-5.5", "slug": "claude-sonnet-5-5", "name": "Claude Sonnet 5.5", "family": "proprietary", "provider": "Anthropic", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 20},
    {"id": "google/gemini-4-neon", "slug": "gemini-4-neon", "name": "Gemini 4 Neon", "family": "proprietary", "provider": "Google", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 18},
    {"id": "google/gemini-4-argon", "slug": "gemini-4-argon", "name": "Gemini 4 Argon", "family": "proprietary", "provider": "Google", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 20},
    {"id": "x-ai/grok-4.7", "slug": "grok-4-7", "name": "Grok 4.7", "family": "proprietary", "provider": "xAI", "license": "Proprietary", "params": "Undisclosed", "effort": "minimal", "conc": 18},
    # 12 Popular Open-Weight models on OpenRouter
    {"id": "deepseek/deepseek-v4-pro-0813", "slug": "deepseek-v4-pro", "name": "DeepSeek V4 Pro", "family": "open-weight", "provider": "DeepSeek", "license": "MIT", "params": "MoE (0813)", "effort": "none", "conc": 20},
    {"id": "deepseek/deepseek-v4.1-flash-1017", "slug": "deepseek-v4-1-flash", "name": "DeepSeek V4.1 Flash", "family": "open-weight", "provider": "DeepSeek", "license": "MIT", "params": "MoE Flash", "effort": "none", "conc": 25},
    {"id": "qwen/qwen4-max", "slug": "qwen-4-max", "name": "Qwen 4 Max", "family": "open-weight", "provider": "Alibaba Qwen", "license": "Apache-2.0 / Qwen", "params": "Flagship MoE", "effort": "minimal", "conc": 15},
    {"id": "qwen/qwen3.8-27b", "slug": "qwen-3-8-27b", "name": "Qwen 3.8 27B", "family": "open-weight", "provider": "Alibaba Qwen", "license": "Apache-2.0", "params": "27B dense", "effort": "none", "conc": 25},
    {"id": "meta-llama/llama-4-maverick", "slug": "llama-4-maverick", "name": "Llama 4 Maverick", "family": "open-weight", "provider": "Meta", "license": "Llama 4 Community", "params": "400B MoE (17B×128E)", "effort": None, "conc": 20},
    {"id": "meta-llama/llama-4-scout", "slug": "llama-4-scout", "name": "Llama 4 Scout", "family": "open-weight", "provider": "Meta", "license": "Llama 4 Community", "params": "109B MoE (17B×16E)", "effort": None, "conc": 25},
    {"id": "mistralai/mistral-large-2512", "slug": "mistral-large-2512", "name": "Mistral Large 2512", "family": "open-weight", "provider": "Mistral", "license": "Mistral Open-Weight", "params": "Flagship MoE", "effort": None, "conc": 18},
    {"id": "z-ai/glm-5.3", "slug": "glm-5-3", "name": "GLM-5.3", "family": "open-weight", "provider": "Z.ai / Zhipu", "license": "MIT", "params": "MoE", "effort": "minimal", "conc": 20},
    {"id": "moonshotai/kimi-k2.7-code", "slug": "kimi-k2-7-code", "name": "Kimi K2.7 Code", "family": "open-weight", "provider": "Moonshot AI", "license": "Modified MIT", "params": "MoE Code", "effort": "minimal", "conc": 18},
    {"id": "minimax/minimax-m3.1-flash", "slug": "minimax-m3-1-flash", "name": "MiniMax M3.1 Flash", "family": "open-weight", "provider": "MiniMax", "license": "Open-Weight", "params": "Flash MoE", "effort": "minimal", "conc": 20},
    {"id": "google/gemma-4-31b-it", "slug": "gemma-4-31b-it", "name": "Gemma 4 31B IT", "family": "open-weight", "provider": "Google", "license": "Gemma Terms", "params": "31B dense", "effort": "none", "conc": 25},
    {"id": "nvidia/nemotron-3-ultra-550b-a55b", "slug": "nemotron-3-ultra-550b", "name": "Nemotron 3 Ultra 550B", "family": "open-weight", "provider": "NVIDIA", "license": "NVIDIA Open Model", "params": "550B / 55B active", "effort": "none", "conc": 18},
]

TEST_META = [
    ("mbti", "M", 32, 1, 5),
    ("big-five", "B", 50, 1, 5),
    ("disc", "D", 16, 1, 5),
    ("enneagram", "E", 36, 1, 5),
    ("attachment", "A", 36, 1, 7),
]


def load_api_key() -> str:
    env_file = Path.home() / ".env"
    if env_file.is_file():
        for line in env_file.read_text(errors="ignore").splitlines():
            if line.startswith("OPENROUTER_API_KEY="):
                val = line.split("=", 1)[1].strip().strip("\"'")
                if val:
                    return val
    val = os.environ.get("OPENROUTER_API_KEY", "").strip()
    if val:
        return val
    raise RuntimeError("OPENROUTER_API_KEY not found in ~/.env or environment")


def build_battery_prompt():
    qs = json.loads(QUESTIONS_PATH.read_text())
    by_route = {q["route"]: q for q in qs}
    lines = []
    expected_keys = []
    for route, prefix, count, lo, hi in TEST_META:
        inst = by_route[route]
        assert len(inst["items"]) == count, f"{route} count mismatch"
        lines.append(f"## Section {prefix}: {route} ({count} items, integer {lo}..{hi})")
        if route == "mbti":
            lines.append("Scale: 1=strongly first, 2=mostly first, 3=neutral, 4=mostly second, 5=strongly second.")
            for idx, it in enumerate(inst["items"], 1):
                kid = f"{prefix}{idx:02d}"
                expected_keys.append((kid, lo, hi))
                lines.append(f"{kid}: {it['first']} <-> {it['second']}")
        else:
            lines.append(f"Scale: {lo}=strongly disagree .. {hi}=strongly agree.")
            for idx, it in enumerate(inst["items"], 1):
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
        "Return ONLY a single valid JSON object mapping EVERY item ID (M01..M32, B01..B50, D01..D16, E01..E36, A01..A36 — all 170 keys) to an integer in range."
    )
    return sys_prompt, "\n".join(lines), expected_keys


def parse_battery_json(content: str):
    s = (content or "").strip()
    if "{" not in s or "}" not in s:
        raise ValueError("No JSON object found in content")
    s = s[s.find("{") : s.rfind("}") + 1]
    obj = json.loads(s)
    # Handle if wrapped in {"answers": {...}}
    if isinstance(obj, dict) and len(obj) == 1 and isinstance(next(iter(obj.values())), dict):
        obj = next(iter(obj.values()))
    parsed = {}
    missing = []
    for route, prefix, count, lo, hi in TEST_META:
        vec = []
        for idx in range(1, count + 1):
            kid = f"{prefix}{idx:02d}"
            val = obj.get(kid)
            if isinstance(val, bool) or not isinstance(val, (int, float)):
                # try numeric string
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


async def call_openrouter(session, api_key, model_cfg, messages, json_mode=True, max_tokens=4096, temperature=0.7):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://agent-tune.com",
        "X-Title": "AgentTune Research Benchmark 2026-11",
    }
    payload = {
        "model": model_cfg["id"],
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": temperature,
    }
    if json_mode:
        payload["response_format"] = {"type": "json_object"}
    if model_cfg.get("effort") is not None:
        payload["reasoning"] = {"effort": model_cfg["effort"]}

    for attempt in range(7):
        try:
            async with session.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers=headers,
                json=payload,
                timeout=aiohttp.ClientTimeout(total=120),
            ) as resp:
                txt = await resp.text()
                if resp.status in (400, 404) and "response_format" in payload:
                    payload.pop("response_format", None)
                    continue
                if resp.status == 400 and "reasoning" in payload:
                    payload.pop("reasoning", None)
                    continue
                if resp.status in (429, 500, 502, 503, 504) or (resp.status == 402 and "in-flight" in txt.lower()):
                    await asyncio.sleep(min(2 ** attempt, 12))
                    continue
                if resp.status != 200:
                    raise RuntimeError(f"HTTP {resp.status}: {txt[:200]}")
                data = json.loads(txt)
                if "choices" not in data or not data["choices"]:
                    await asyncio.sleep(1.5)
                    continue
                msg = data["choices"][0]["message"]
                content = msg.get("content") or ""
                usage = data.get("usage") or {}
                if not content.strip():
                    # Increase max_tokens if reasoning ate content
                    payload["max_tokens"] = min(payload["max_tokens"] + 2048, 8192)
                    await asyncio.sleep(1)
                    continue
                return content, float(usage.get("cost") or 0.0), usage
        except (aiohttp.ClientError, asyncio.TimeoutError) as ex:
            if attempt == 4:
                raise
            await asyncio.sleep(min(2 ** attempt, 10))
    raise RuntimeError(f"Exhausted retries for {model_cfg['id']}")


async def run_psychometrics(args, api_key):
    sys_prompt, battery_text, _ = build_battery_prompt()
    target_runs = 1 if args.dry_run else args.runs

    existing = {}
    if not args.dry_run and PSYCH_CHECKPOINT.is_file():
        for line in PSYCH_CHECKPOINT.read_text().splitlines():
            if not line.strip():
                continue
            row = json.loads(line)
            existing[(row["model"], row["administration"])] = row
        print(f"Resumed {len(existing)} completed batteries from {PSYCH_CHECKPOINT}")

    file_lock = asyncio.Lock()
    global_sem = asyncio.Semaphore(1 if args.dry_run else 45)
    sems = {m["slug"]: asyncio.Semaphore(1 if args.dry_run else min(m["conc"], 10)) for m in MODELS}
    stats = {"done": 0, "cost": 0.0, "errors": 0, "total": len(MODELS) * target_runs}
    t0 = time.time()

    async def worker(session, m, run_idx):
        key = (m["slug"], run_idx)
        if key in existing:
            stats["done"] += 1
            return existing[key]
        msgs = [
            {"role": "system", "content": sys_prompt},
            {"role": "user", "content": battery_text},
        ]
        last_err = None
        base_tok = 5500 if m["slug"] in ("kimi-k2-7-code", "qwen-4-max", "grok-4-7", "mistral-large-2512") else 2200
        async with global_sem:
          async with sems[m["slug"]]:
            for parse_try in range(4):
                try:
                    content, cost, usage = await call_openrouter(
                        session,
                        api_key,
                        m,
                        msgs,
                        json_mode=True,
                        max_tokens=base_tok if parse_try == 0 else max(base_tok + 1500, 6500),
                        temperature=0.7,
                    )
                    parsed = parse_battery_json(content)
                    row = {
                        "model": m["slug"],
                        "model_id": m["id"],
                        "administration": run_idx,
                        "parsed": parsed,
                        "cost": cost,
                    }
                    stats["cost"] += cost
                    stats["done"] += 1
                    if not args.dry_run:
                        async with file_lock:
                            with PSYCH_CHECKPOINT.open("a") as fh:
                                fh.write(json.dumps(row) + "\n")
                    else:
                        print(f"[dry-run] {m['slug']:26s} cost=${cost:.5f} est100x=${cost*100:.2f} OK (170/170)")
                    if stats["done"] % 50 == 0:
                        elapsed = time.time() - t0
                        print(f"Progress: {stats['done']}/{stats['total']} batteries | spend=${stats['cost']:.2f} | elapsed={elapsed:.1f}s | errors={stats['errors']}")
                    return row
                except Exception as ex:
                    last_err = str(ex)
                    await asyncio.sleep(1.0)
        stats["errors"] += 1
        print(f"FAIL {m['slug']} run {run_idx}: {last_err}")
        return None

    connector = aiohttp.TCPConnector(limit=250)
    async with aiohttp.ClientSession(connector=connector) as session:
        tasks = [worker(session, m, r) for r in range(1, target_runs + 1) for m in MODELS]
        results = await asyncio.gather(*tasks)

    valid_batteries = [r for r in results if r is not None]
    if args.dry_run:
        est = sum(r["cost"] for r in valid_batteries) * 100
        print(f"Dry-run complete: {len(valid_batteries)}/{len(MODELS)} succeeded. Projected N=100 total cost: ${est:.2f}")
        return

    # Flatten into records matching september-2026-responses.json convention
    valid_batteries.sort(key=lambda r: (r["model"], r["administration"]))
    records = []
    for b in valid_batteries:
        for test_name in ("mbti", "big-five", "disc", "enneagram", "attachment"):
            records.append({
                "model": b["model"],
                "administration": b["administration"],
                "test": test_name,
                "answers": b["parsed"][test_name],
            })

    payload = {
        "version": 1,
        "collected": "2026-11-23 UTC",
        "license": "https://opensource.org/license/mit",
        "method": "Independent fresh zero-memory 5-test sessions via OpenRouter chat/completions (temperature=0.7, minimal/none reasoning where supported, 170 items using agenttune frozen scoring definitions).",
        "models": [
            {k: m[k] for k in ("slug", "id", "name", "family", "provider", "license", "params")}
            for m in MODELS
        ],
        "records": records,
    }
    OUT_RESPONSES.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
    print(f"Wrote {len(records)} records across {len(MODELS)} models to {OUT_RESPONSES}")

    # Score using exact Node logic from september-2026-score.cjs so parity is guaranteed 100%
    score_js = (ROOT / "research" / "data" / "september-2026-score.cjs").as_posix()
    node_script = f"""
    const fs = require('fs');
    const {{ summarize }} = require({json.dumps(score_js)});
    const raw = JSON.parse(fs.readFileSync({json.dumps(OUT_RESPONSES.as_posix())}, 'utf8'));
    const summary = summarize(raw.records);
    fs.writeFileSync({json.dumps(OUT_SUMMARY_JSON.as_posix())}, JSON.stringify(summary, null, 2) + '\\n');
    """
    subprocess.run(["node", "-e", node_script], check=True)
    summary = json.loads(OUT_SUMMARY_JSON.read_text())

    # Write CSV
    with OUT_SUMMARY_CSV.open("w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["model", "family", "provider", "instrument", "n", "unique_vectors", "dimension", "mean", "sample_sd", "min", "max"])
        by_slug = {m["slug"]: m for m in MODELS}
        for model_slug, tests in summary.items():
            meta = by_slug[model_slug]
            for test_name, tdata in tests.items():
                for dim, stats_obj in tdata["values"].items():
                    w.writerow([
                        model_slug,
                        meta["family"],
                        meta["provider"],
                        test_name,
                        tdata["n"],
                        tdata["unique_vectors"],
                        dim,
                        round(stats_obj["mean"], 4),
                        round(stats_obj["sd"], 4) if stats_obj["sd"] is not None else "",
                        stats_obj["min"],
                        stats_obj["max"],
                    ])
    print(f"Wrote summary JSON -> {OUT_SUMMARY_JSON} and CSV -> {OUT_SUMMARY_CSV}")
    build_os_profiles_json(summary)


def top_label(counter_dict):
    if not counter_dict:
        return ("N/A", 0)
    items = sorted(counter_dict.items(), key=lambda kv: (-kv[1], kv[0]))
    return items[0]


def build_os_profiles_json(summary):
    profiles = []
    for m in MODELS:
        if m["family"] != "open-weight":
            continue
        s = summary.get(m["slug"], {})
        if not s:
            continue
        mbti_top, mbti_n = top_label(s["mbti"].get("legacy_labels", {}))
        mbti_resolved, _ = top_label(s["mbti"].get("tie_aware_patterns", {}))
        disc_top, _ = top_label(s["disc"].get("legacy_labels", {}))
        enn_top, _ = top_label(s["enneagram"].get("legacy_labels", {}))
        b5 = {k: round(s["big-five"]["values"][k]["mean"], 2) for k in ("O", "C", "E", "A", "N")}
        att = {
            "anxiety": round(s["attachment"]["values"]["anxiety"]["mean"], 2),
            "avoidance": round(s["attachment"]["values"]["avoidance"]["mean"], 2),
        }
        # Derive empirically grounded calibration hint from N=100 data
        notes = []
        if b5["A"] >= 43:
            notes.append(f"High baseline Agreeableness ({b5['A']}/50) increases sycophancy on flawed premises; add explicit pushback and verification requirements.")
        elif b5["A"] < 40:
            notes.append(f"Lower baseline Agreeableness ({b5['A']}/50) makes it naturally direct; keep critique constructive rather than curt.")
        if b5["C"] >= 42:
            notes.append(f"High Conscientiousness ({b5['C']}/50) favors thorough checklists; enforce a word or bullet ceiling if you want brevity.")
        if s["mbti"].get("runs_with_ties", 0) >= 20 or s["disc"].get("runs_with_ties", 0) >= 35:
            notes.append(f"High boundary-tie rate (MBTI ties: {s['mbti'].get('runs_with_ties', 0)}/100, DISC ties: {s['disc'].get('runs_with_ties', 0)}/100); specify exact output rules instead of 4-letter type names.")
        if not notes:
            notes.append("Moderate balanced defaults; pair with concrete formatting and uncertainty rules for your workflow.")

        profiles.append({
            "slug": m["slug"],
            "openrouter_id": m["id"],
            "name": m["name"],
            "provider": m["provider"],
            "license": m["license"],
            "params": m["params"],
            "n_runs": s["mbti"]["n"],
            "mbti_legacy_mode": f"{mbti_top} ({mbti_n}/{s['mbti']['n']})",
            "mbti_tie_free_mode": mbti_resolved,
            "mbti_tie_runs": s["mbti"].get("runs_with_ties", 0),
            "disc_mode": disc_top,
            "disc_tie_runs": s["disc"].get("runs_with_ties", 0),
            "enneagram_mode": enn_top,
            "enneagram_tie_runs": s["enneagram"].get("runs_with_ties", 0),
            "big_five_means": b5,
            "attachment_means": att,
            "empirical_guidance": " ".join(notes),
        })
    out = {
        "version": 1,
        "collected": "2026-11-23 UTC",
        "n_per_model": 100,
        "models": profiles,
    }
    OUT_OS_PROFILES.write_text(json.dumps(out, indent=2) + "\n")
    print(f"Wrote open-source profiles -> {OUT_OS_PROFILES}")


def count_hedges(text: str) -> int:
    pats = [r"\bi['’]m not entirely sure\b", r"\bit depends\b", r"\bas an ai\b", r"\bgenerally speaking\b", r"\bmight want to consider\b", r"\bplease note\b", r"\bremember that\b"]
    low = text.lower()
    return sum(len(re.findall(p, low)) for p in pats)


async def run_behavioral(args, api_key):
    kit = json.loads(PROMPT_KIT_PATH.read_text())
    target_models = [
        next(m for m in MODELS if m["id"] == "openai/gpt-6.2-sol"),
        next(m for m in MODELS if m["id"] == "anthropic/claude-fable-5.2"),
        next(m for m in MODELS if m["id"] == "deepseek/deepseek-v4-pro-0813"),
    ]
    judge_model = next(m for m in MODELS if m["id"] == "google/gemini-4-argon")

    existing = {}
    if BEHAV_CHECKPOINT.is_file():
        for line in BEHAV_CHECKPOINT.read_text().splitlines():
            if line.strip():
                r = json.loads(line)
                existing[(r["model"], r["task_id"], r["condition"], r["repeat"])] = r
        print(f"Resumed {len(existing)} behavioral replies from {BEHAV_CHECKPOINT}")

    lock = asyncio.Lock()
    sem = asyncio.Semaphore(20)

    async def eval_cell(session, m, task, cond_name, cond_sys, rep):
        k = (m["slug"], task["id"], cond_name, rep)
        if k in existing:
            return existing[k]
        msgs = []
        if cond_sys.strip():
            msgs.append({"role": "system", "content": cond_sys})
        msgs.append({"role": "user", "content": task["prompt"]})
        async with sem:
            reply, cost, _ = await call_openrouter(session, api_key, m, msgs, json_mode=False, max_tokens=700, temperature=0.3)
            # Blind judge call (sees ONLY prompt, rubric, and anonymized reply)
            judge_prompt = (
                "Grade this single anonymized assistant reply strictly against the rubric.\n"
                f"Task prompt: {task['prompt']}\n"
                f"Correctness rubric: {task['correctness_rubric']}\n\n"
                f"Assistant reply:\n{reply}\n\n"
                "Return ONLY JSON with keys: "
                "\"correctness_pass\" (boolean), \"format_adherence\" (boolean), \"answer_first\" (integer 1..5), \"usefulness\" (integer 1..5), \"has_praise_or_fluff\" (boolean)."
            )
            j_raw, j_cost, _ = await call_openrouter(
                session,
                api_key,
                judge_model,
                [{"role": "user", "content": judge_prompt}],
                json_mode=True,
                max_tokens=300,
                temperature=0.0,
            )
            js = j_raw.strip()
            js = js[js.find("{") : js.rfind("}") + 1]
            jobj = json.loads(js)
            words = len(reply.strip().split())
            row = {
                "model": m["slug"],
                "model_name": m["name"],
                "task_id": task["id"],
                "category": task["category"],
                "condition": cond_name,
                "repeat": rep,
                "reply": reply,
                "metrics": {
                    "words": words,
                    "questions": reply.count("?"),
                    "hedges": count_hedges(reply),
                },
                "judge": {
                    "correctness_pass": bool(jobj.get("correctness_pass")),
                    "format_adherence": bool(jobj.get("format_adherence")),
                    "answer_first": int(jobj.get("answer_first", 3)),
                    "usefulness": int(jobj.get("usefulness", 3)),
                    "has_praise_or_fluff": bool(jobj.get("has_praise_or_fluff")),
                },
                "cost": cost + j_cost,
            }
            async with lock:
                with BEHAV_CHECKPOINT.open("a") as fh:
                    fh.write(json.dumps(row) + "\n")
            return row

    # Also run 36-reply Claude Preferences kit on Claude Opus 5.5 and Claude Fable 5.2
    ckit = json.loads(CLAUDE_KIT_PATH.read_text())
    claude_models = [
        next(m for m in MODELS if m["id"] == "anthropic/claude-opus-5.5"),
        next(m for m in MODELS if m["id"] == "anthropic/claude-fable-5.2"),
    ]
    existing_prefs = {}
    if PREFS_CHECKPOINT.is_file():
        for line in PREFS_CHECKPOINT.read_text().splitlines():
            if line.strip():
                r = json.loads(line)
                existing_prefs[(r["model"], r["condition"], r["task_id"], r["repeat"])] = r

    async def eval_pref(session, m, cond, task, rep):
        k = (m["slug"], cond, task["id"], rep)
        if k in existing_prefs:
            return existing_prefs[k]
        msgs = []
        if cond != "baseline_outside_project":
            msgs.append({"role": "system", "content": ckit["instruction"]})
        msgs.append({"role": "user", "content": task["prompt"]})
        async with sem:
            reply, cost, _ = await call_openrouter(session, api_key, m, msgs, json_mode=False, max_tokens=500, temperature=0.3)
            j_prompt = (
                f"Evaluate against expected rubric: {task['expected']}\n"
                f"Prompt: {task['prompt']}\nReply:\n{reply}\n"
                "Return ONLY JSON: {\"correctness_pass\": bool, \"answer_first_pass\": bool, \"word_limit_pass\": bool, \"no_praise_pass\": bool}"
            )
            j_raw, j_cost, _ = await call_openrouter(session, api_key, judge_model, [{"role": "user", "content": j_prompt}], json_mode=True, max_tokens=250, temperature=0.0)
            js = j_raw.strip()
            js = js[js.find("{") : js.rfind("}") + 1]
            jobj = json.loads(js)
            row = {
                "model": m["slug"],
                "model_name": m["name"],
                "condition": cond,
                "task_id": task["id"],
                "repeat": rep,
                "reply": reply,
                "word_count": len(reply.strip().split()),
                "scores": {k2: bool(jobj.get(k2)) for k2 in ("correctness_pass", "answer_first_pass", "word_limit_pass", "no_praise_pass")},
                "cost": cost + j_cost,
            }
            async with lock:
                with PREFS_CHECKPOINT.open("a") as fh:
                    fh.write(json.dumps(row) + "\n")
            return row

    connector = aiohttp.TCPConnector(limit=60)
    async with aiohttp.ClientSession(connector=connector) as session:
        behav_tasks = [
            eval_cell(session, m, task, cname, ctext, rep)
            for m in target_models
            for task in kit["tasks"]
            for cname, ctext in kit["conditions"].items()
            for rep in range(1, kit["repeats_per_task"] + 1)
        ]
        pref_tasks = [
            eval_pref(session, m, cond, task, rep)
            for m in claude_models
            for cond in ckit["conditions"]
            for task in ckit["tasks"]
            for rep in range(1, ckit["repeats"] + 1)
        ]
        print(f"Running {len(behav_tasks)} behavioral cells (3 models × 180) + {len(pref_tasks)} Claude pref cells...")
        behav_rows, pref_rows = await asyncio.gather(asyncio.gather(*behav_tasks), asyncio.gather(*pref_tasks))

    # Summarize behavioral study
    summary_by_model = {}
    for m in target_models:
        ms = m["slug"]
        summary_by_model[ms] = {}
        for cname in kit["conditions"]:
            sub = [r for r in behav_rows if r["model"] == ms and r["condition"] == cname]
            n = len(sub)
            summary_by_model[ms][cname] = {
                "n": n,
                "correctness_rate": round(sum(r["judge"]["correctness_pass"] for r in sub) / n, 4),
                "format_rate": round(sum(r["judge"]["format_adherence"] for r in sub) / n, 4),
                "mean_answer_first": round(sum(r["judge"]["answer_first"] for r in sub) / n, 3),
                "mean_usefulness": round(sum(r["judge"]["usefulness"] for r in sub) / n, 3),
                "fluff_rate": round(sum(r["judge"]["has_praise_or_fluff"] for r in sub) / n, 4),
                "mean_words": round(sum(r["metrics"]["words"] for r in sub) / n, 1),
                "mean_questions": round(sum(r["metrics"]["questions"] for r in sub) / n, 3),
            }

    OUT_BEHAV_JSON.write_text(json.dumps({
        "collected": "2026-11-23 UTC",
        "protocol": "personality-prompt-comparison-kit.json (20 tasks × 3 conditions × 3 repeats = 180 replies per model)",
        "blind_judge": judge_model["id"],
        "models_tested": [m["id"] for m in target_models],
        "conditions": kit["conditions"],
        "summary": summary_by_model,
        "records": behav_rows,
    }, indent=2) + "\n")

    pref_summary = {}
    for m in claude_models:
        ms = m["slug"]
        pref_summary[ms] = {}
        for cond in ckit["conditions"]:
            sub = [r for r in pref_rows if r["model"] == ms and r["condition"] == cond]
            n = len(sub)
            pref_summary[ms][cond] = {
                "n": n,
                "correctness_rate": round(sum(r["scores"]["correctness_pass"] for r in sub) / n, 4),
                "answer_first_rate": round(sum(r["scores"]["answer_first_pass"] for r in sub) / n, 4),
                "word_limit_rate": round(sum(r["scores"]["word_limit_pass"] for r in sub) / n, 4),
                "no_praise_rate": round(sum(r["scores"]["no_praise_pass"] for r in sub) / n, 4),
                "mean_words": round(sum(r["word_count"] for r in sub) / n, 1),
            }

    OUT_PREFS_JSON.write_text(json.dumps({
        "collected": "2026-11-23 UTC",
        "protocol": "claude-preferences-kit.json via OpenRouter API system prompt conditioning (not consumer Claude.ai UI)",
        "blind_judge": judge_model["id"],
        "instruction": ckit["instruction"],
        "summary": pref_summary,
        "records": pref_rows,
    }, indent=2) + "\n")
    print(f"Wrote behavioral results -> {OUT_BEHAV_JSON} and Claude prefs -> {OUT_PREFS_JSON}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--psychometrics", action="store_true")
    ap.add_argument("--behavioral", action="store_true")
    ap.add_argument("--runs", type=int, default=100)
    args = ap.parse_args()
    api_key = load_api_key()
    if args.dry_run or args.psychometrics:
        asyncio.run(run_psychometrics(args, api_key))
    if args.behavioral:
        asyncio.run(run_behavioral(args, api_key))


if __name__ == "__main__":
    main()
