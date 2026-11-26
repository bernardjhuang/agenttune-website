#!/usr/bin/env python3
"""
Detect new OpenRouter model releases and deprecation status for Model Personality Profiles.

Read-only by default:
  - Polls https://openrouter.ai/api/v1/models
  - Verifies all 93 known_ids in research/data/model-profiles/registry.json exist
  - Warns on expiration_date metadata
  - Scans per-family regexes while filtering ':', specialty suffixes, ignored_ids,
    and deduplicating canonical_slug and trailing -YYYYMMDD / -MMDD suffixes
  - Estimates $/run at n=50 from live pricing (standard & smart :batch)

Flags:
  --sync-status         Atomically update openrouter_status / expiration_date in registry.json (still $0)
  --confirm-spend       Explicit gate required before invoking run-checkpoint.py on new releases
  --max-usd <float>     Hard spend cap (required alongside --confirm-spend)
  --catalog-file <path> Optional local OpenRouter models JSON snapshot for offline verification
  --json                Emit machine-readable JSON diff
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
REGISTRY_PATH = ROOT / "research" / "data" / "model-profiles" / "registry.json"
RUNNER_PATH = Path(__file__).resolve().parent / "run-checkpoint.py"
OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models"

COLON_SUFFIX_RE = re.compile(r":(?:free|batch|extended|beta|thinking|nitro|floor)$", re.I)
SPECIALTY_SUFFIX_RE = re.compile(
    r"-(?:preview|beta|alpha|thinking|legal|content-safety|vl|image|audio|tts|embed|guard|codex)$",
    re.I,
)
TRAILING_DATE_RE = re.compile(r"-\d{4,8}$")

EST_IN_TOKENS = 3500
EST_OUT_TOKENS = 2200
CORE_4_PARAMS = {"temperature", "reasoning", "response_format", "max_tokens"}


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


def fetch_catalog(catalog_file: str | None = None) -> list[dict]:
    if catalog_file:
        raw = json.loads(Path(catalog_file).read_text(encoding="utf-8"))
        return raw["data"] if isinstance(raw, dict) and "data" in raw else raw
    req = urllib.request.Request(
        OPENROUTER_MODELS_URL,
        headers={"User-Agent": "agenttune-model-profiles-detector/1.0"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data["data"]


def safe_price(val) -> float | None:
    if val is None:
        return None
    try:
        p = float(val)
    except (TypeError, ValueError):
        return None
    if p < 0:
        return None
    return p


def estimate_run_cost(model_obj: dict, batch_obj: dict | None, n: int = 50) -> dict:
    pr = model_obj.get("pricing") or {}
    p_in = safe_price(pr.get("prompt"))
    p_out = safe_price(pr.get("completion"))
    if p_in is None or p_out is None:
        return {"std_usd": None, "batch_usd": None, "batch_eligible": False}

    std_one = EST_IN_TOKENS * p_in + EST_OUT_TOKENS * p_out
    std_usd = round(std_one * n, 4)

    batch_usd = None
    batch_eligible = False
    if batch_obj:
        bpr = batch_obj.get("pricing") or {}
        bp_in = safe_price(bpr.get("prompt"))
        bp_out = safe_price(bpr.get("completion"))
        if bp_in is not None and bp_out is not None:
            b_one = EST_IN_TOKENS * bp_in + EST_OUT_TOKENS * bp_out
            b_total = round(b_one * n, 4)
            std_sent = set(model_obj.get("supported_parameters") or []) & CORE_4_PARAMS
            batch_sup = set(batch_obj.get("supported_parameters") or [])
            if b_one < std_one and std_sent.issubset(batch_sup):
                batch_eligible = True
            batch_usd = b_total

    return {
        "std_usd": std_usd,
        "batch_usd": batch_usd,
        "batch_eligible": batch_eligible,
    }


def is_filtered_variant(model_id: str) -> bool:
    if ":" in model_id or COLON_SUFFIX_RE.search(model_id):
        return True
    if SPECIALTY_SUFFIX_RE.search(model_id):
        return True
    return False


def analyze(registry: dict, catalog: list[dict], n_runs: int = 50) -> dict:
    by_id = {m["id"]: m for m in catalog if isinstance(m, dict) and m.get("id")}

    verified_count = 0
    missing_known = []
    expiring_warnings = []
    status_changes = []
    new_releases = []

    for fam in registry.get("families", []):
        fam_slug = fam["family_slug"]
        prefix = fam["provider_prefix"]
        inc_re = re.compile(fam["include_regex"])
        exc_re = re.compile(fam["exclude_regex"]) if fam.get("exclude_regex") else None
        known_ids = fam.get("known_ids", [])
        known_set = set(known_ids)
        ignored_set = set(fam.get("ignored_ids", []))
        known_cs = set(fam.get("known_canonical_slugs", []))
        known_bases = {TRAILING_DATE_RE.sub("", kid) for kid in known_ids}
        min_created = int(fam.get("min_created") or 0)

        # 1. Verify known_ids exist & inspect deprecation/expiration_date
        for cp in fam.get("checkpoints", []):
            kid = cp["id"]
            m = by_id.get(kid)
            if not m:
                missing_known.append({"family": fam_slug, "id": kid})
                new_status = "removed_from_openrouter"
                exp_date = cp.get("expiration_date")
            else:
                verified_count += 1
                exp_date = m.get("expiration_date")
                new_status = "deprecated_scheduled" if exp_date else "active"
                if exp_date:
                    est = estimate_run_cost(m, by_id.get(kid + ":batch"), n=n_runs)
                    expiring_warnings.append({
                        "family": fam_slug,
                        "id": kid,
                        "expiration_date": exp_date,
                        "est_50_std_usd": est["std_usd"],
                        "est_50_batch_usd": est["batch_usd"],
                    })

            if cp.get("openrouter_status") != new_status or cp.get("expiration_date") != exp_date:
                status_changes.append({
                    "family": fam_slug,
                    "id": kid,
                    "old_status": cp.get("openrouter_status"),
                    "new_status": new_status,
                    "expiration_date": exp_date,
                })

        # 2. Scan catalog for genuinely new untracked releases
        seen_cs = set(known_cs)
        seen_bases = set(known_bases)
        candidates = []
        for m in catalog:
            mid = m.get("id", "")
            if not mid or is_filtered_variant(mid):
                continue
            if not mid.startswith(prefix):
                continue
            if mid in known_set or mid in ignored_set:
                continue
            if int(m.get("created") or 0) < min_created:
                continue
            if not inc_re.search(mid):
                continue
            if exc_re and exc_re.search(mid):
                continue
            cs = m.get("canonical_slug") or mid
            base = TRAILING_DATE_RE.sub("", mid)
            if cs in seen_cs or base in seen_bases:
                continue
            seen_cs.add(cs)
            seen_bases.add(base)
            candidates.append(m)

        candidates.sort(key=lambda x: (int(x.get("created") or 0), x["id"]))
        for m in candidates:
            mid = m["id"]
            est = estimate_run_cost(m, by_id.get(mid + ":batch"), n=n_runs)
            new_releases.append({
                "family": fam_slug,
                "phase": fam.get("phase"),
                "id": mid,
                "canonical_slug": m.get("canonical_slug") or mid,
                "created": int(m.get("created") or 0),
                "expiration_date": m.get("expiration_date"),
                "est_50_std_usd": est["std_usd"],
                "est_50_batch_usd": est["batch_usd"],
                "batch_eligible": est["batch_eligible"],
            })

    return {
        "checked_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "catalog_count": len(catalog),
        "registry_families": len(registry.get("families", [])),
        "registry_checkpoints": sum(len(f.get("known_ids", [])) for f in registry.get("families", [])),
        "verified_known_ids": verified_count,
        "missing_known_ids": missing_known,
        "expiring_warnings": expiring_warnings,
        "status_changes": status_changes,
        "new_releases": new_releases,
    }


def sync_registry_status(registry: dict, catalog: list[dict]) -> int:
    by_id = {m["id"]: m for m in catalog if isinstance(m, dict) and m.get("id")}
    updated = 0
    for fam in registry.get("families", []):
        exp_map = {}
        for cp in fam.get("checkpoints", []):
            kid = cp["id"]
            m = by_id.get(kid)
            if not m:
                new_status = "removed_from_openrouter"
                exp_date = cp.get("expiration_date")
            else:
                exp_date = m.get("expiration_date")
                new_status = "deprecated_scheduled" if exp_date else "active"
                if m.get("canonical_slug"):
                    cp["canonical_slug"] = m["canonical_slug"]
            if exp_date:
                exp_map[kid] = exp_date
            if cp.get("openrouter_status") != new_status or cp.get("expiration_date") != exp_date:
                cp["openrouter_status"] = new_status
                cp["expiration_date"] = exp_date
                updated += 1
        fam["expiration_dates"] = exp_map
        fam["known_canonical_slugs"] = [cp["canonical_slug"] for cp in fam.get("checkpoints", [])]
    return updated


def print_report(report: dict, n_runs: int) -> None:
    print(
        f"Registry check ({report['checked_utc']}): "
        f"{report['registry_families']} families, "
        f"{report['verified_known_ids']}/{report['registry_checkpoints']} known_ids verified "
        f"(OpenRouter catalog: {report['catalog_count']} entries)."
    )
    if report["missing_known_ids"]:
        print(f"WARNING — Missing from OpenRouter ({len(report['missing_known_ids'])}):")
        for item in report["missing_known_ids"]:
            print(f"  - [{item['family']}] {item['id']}")
    else:
        print("All 93 known_ids present on OpenRouter.")

    if report["expiring_warnings"]:
        print(f"Expiration warnings ({len(report['expiring_warnings'])}):")
        for w in report["expiring_warnings"]:
            b_str = f", batch~${w['est_50_batch_usd']:.2f}" if w["est_50_batch_usd"] is not None else ""
            s_str = f"${w['est_50_std_usd']:.2f}" if w["est_50_std_usd"] is not None else "n/a"
            print(f"  - [{w['family']}] {w['id']} expires {w['expiration_date']} (n={n_runs} est: std={s_str}{b_str})")

    if report["status_changes"]:
        print(f"Pending openrouter_status updates ({len(report['status_changes'])}):")
        for ch in report["status_changes"]:
            print(f"  - [{ch['family']}] {ch['id']}: {ch['old_status']} -> {ch['new_status']}")

    if report["new_releases"]:
        print(f"New untracked candidate releases ({len(report['new_releases'])}):")
        for nr in report["new_releases"]:
            s_str = f"${nr['est_50_std_usd']:.2f}" if nr["est_50_std_usd"] is not None else "n/a"
            b_str = f" (batch~${nr['est_50_batch_usd']:.2f})" if nr["batch_eligible"] and nr["est_50_batch_usd"] is not None else ""
            print(f"  + [{nr['family']}] {nr['id']} | est n={n_runs}: {s_str}{b_str}")
    else:
        print("New untracked candidate releases: 0")


def main() -> int:
    parser = argparse.ArgumentParser(description="Read-only OpenRouter release & status detector for Model Profiles.")
    parser.add_argument("--registry", default=str(REGISTRY_PATH), help="Path to registry.json")
    parser.add_argument("--catalog-file", default=None, help="Optional local OpenRouter /api/v1/models JSON file")
    parser.add_argument("--n", type=int, default=50, help="Target runs per checkpoint for $/run cost estimate (default: 50)")
    parser.add_argument("--sync-status", action="store_true", help="Atomically update openrouter_status in registry.json (no spend)")
    parser.add_argument("--confirm-spend", action="store_true", help="Explicitly authorize invoking run-checkpoint.py on new releases")
    parser.add_argument("--max-usd", type=float, default=None, help="Required hard USD cap when --confirm-spend is set")
    parser.add_argument("--use-batch", action="store_true", help="Pass --use-batch if --confirm-spend triggers collection")
    parser.add_argument("--json", action="store_true", help="Print JSON output")
    args = parser.parse_args()

    if args.confirm_spend and (args.max_usd is None or args.max_usd <= 0):
        print("ERROR: --confirm-spend requires --max-usd > 0.", file=sys.stderr)
        return 2

    reg_path = Path(args.registry)
    registry = json.loads(reg_path.read_text(encoding="utf-8"))
    catalog = fetch_catalog(args.catalog_file)
    report = analyze(registry, catalog, n_runs=args.n)

    if args.sync_status:
        n_updated = sync_registry_status(registry, catalog)
        if n_updated:
            registry["last_status_sync_utc"] = report["checked_utc"]
            atomic_write_json(reg_path, registry)
        report["synced_status_updates"] = n_updated

    if args.json:
        print(json.dumps(report, indent=2))
    else:
        print_report(report, args.n)
        if args.sync_status:
            print(f"Synced registry status updates: {report.get('synced_status_updates', 0)}")

    if args.confirm_spend:
        if not report["new_releases"]:
            print("No new candidate releases to collect; $0 spent.")
            return 0
        for nr in report["new_releases"]:
            cmd = [
                sys.executable,
                str(RUNNER_PATH),
                "--checkpoint", nr["id"],
                "--family", nr["family"],
                "--n", str(args.n),
                "--max-usd", f"{args.max_usd:.4f}",
            ]
            if args.use_batch:
                cmd.append("--use-batch")
            print(f"Executing: {' '.join(cmd)}")
            subprocess.run(cmd, check=True)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
