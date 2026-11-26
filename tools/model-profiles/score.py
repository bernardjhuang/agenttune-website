#!/usr/bin/env python3
"""
Scoring and psychometric validity metrics for Model Personality Profiles (model-profiles-v1).

Supports all 6 instruments:
  - mbti        (agenttune-mbti-legacy, 32 items, 1..5 bipolar)
  - big-five    (agenttune-ipip50, 50 items, 1..5 sum 10..50)
  - disc        (agenttune-disc-legacy, 16 items, 1..5 sum 4..20, highest)
  - enneagram   (agenttune-enneagram-legacy, 36 items, 1..5 sum 4..20, highest)
  - attachment  (agenttune-attachment-legacy, 36 items, 1..7 mean)
  - ipip-hexaco (agenttune-ipip-hexaco60, 60 items, 1..5 mean + 24 facet means)

Matches resources/scoring/score.js identically for the 5 frozen inventories in
resources/scoring/questions.json without modifying questions.json.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import random
import sys
from collections import Counter
from pathlib import Path
from typing import Any

SCORER_VERSION = "1.0.0"
PROTOCOL_ID = "model-profiles-v1"

ROOT = Path(__file__).resolve().parent.parent.parent
QUESTIONS_PATH = ROOT / "resources" / "scoring" / "questions.json"
HEXACO_PATH = ROOT / "resources" / "scoring" / "model-profiles-hexaco-60.json"

BATTERY_ROUTES = [
    ("mbti", "M", 32, (1, 5)),
    ("big-five", "B", 50, (1, 5)),
    ("disc", "D", 16, (1, 5)),
    ("enneagram", "E", 36, (1, 5)),
    ("attachment", "A", 36, (1, 7)),
    ("ipip-hexaco", "H", 60, (1, 5)),
]

ROUTE_ORDER = [r for r, _, _, _ in BATTERY_ROUTES]


def compute_definition_hash(defn: dict[str, Any]) -> str:
    """Compute canonical SHA-256 hash of a definition excluding definitionHash."""
    body = {k: v for k, v in defn.items() if k != "definitionHash"}
    canonical = json.dumps(body, sort_keys=True, separators=(",", ":"), ensure_ascii=False)
    return hashlib.sha256(canonical.encode("utf-8")).hexdigest()


def load_instruments(
    questions_path: Path = QUESTIONS_PATH,
    hexaco_path: Path = HEXACO_PATH,
) -> dict[str, dict[str, Any]]:
    """Load the 5 frozen inventories + public-domain IPIP-HEXACO-60 definition."""
    q_bytes = questions_path.read_bytes()
    h_bytes = hexaco_path.read_bytes()
    q_list = json.loads(q_bytes.decode("utf-8"))
    h_obj = json.loads(h_bytes.decode("utf-8"))

    if not isinstance(q_list, list):
        raise ValueError("questions.json must be a JSON array")
    if not isinstance(h_obj, dict):
        raise ValueError("model-profiles-hexaco-60.json must be a JSON object")

    expected_h_hash = compute_definition_hash(h_obj)
    if h_obj.get("definitionHash") != expected_h_hash:
        raise ValueError(
            f"model-profiles-hexaco-60.json definitionHash mismatch: "
            f"{h_obj.get('definitionHash')} != {expected_h_hash}"
        )

    by_route: dict[str, dict[str, Any]] = {}
    for d in q_list + [h_obj]:
        route = d["route"]
        by_route[route] = d
    return by_route


def instruments_sha256(
    questions_path: Path = QUESTIONS_PATH,
    hexaco_path: Path = HEXACO_PATH,
) -> str:
    """Combined SHA-256 digest over questions.json and model-profiles-hexaco-60.json."""
    h = hashlib.sha256()
    h.update(questions_path.read_bytes())
    h.update(b"\n")
    h.update(hexaco_path.read_bytes())
    return h.hexdigest()


def _resolve_definition(
    route_or_id: str, definitions: dict[str, dict[str, Any]]
) -> dict[str, Any] | None:
    if route_or_id in definitions:
        return definitions[route_or_id]
    for d in definitions.values():
        if d["id"] == route_or_id:
            return d
    return None


def _is_valid_int_in_range(val: Any, lo: int, hi: int) -> bool:
    return isinstance(val, int) and not isinstance(val, bool) and lo <= val <= hi


def _normalize_answers(
    defn: dict[str, Any], answers: Any
) -> tuple[list[int] | None, dict[str, Any] | None]:
    """Validate and convert positional list, item-id map, or score.js record list into ordered ints."""
    meta = {
        "instrumentId": defn["id"],
        "instrumentVersion": defn["version"],
        "scorerVersion": SCORER_VERSION,
        "definitionHash": defn.get("definitionHash"),
    }
    lo, hi = defn["range"]
    items = sorted(defn["items"], key=lambda x: x["displayOrder"])
    item_ids = [it["id"] for it in items]

    # Prefix aliases (M01..M32, B01..B50, D01..D16, E01..E36, A01..A36, H01..H60)
    prefix = next((p for r, p, _, _ in BATTERY_ROUTES if r == defn["route"]), None)
    prefix_ids = [f"{prefix}{idx:02d}" for idx in range(1, len(items) + 1)] if prefix else []

    if isinstance(answers, list):
        # Either positional integer array or [{itemId, value}, ...]
        if len(answers) > 0 and isinstance(answers[0], dict):
            allowed = set(item_ids)
            given: dict[str, int] = {}
            errors: list[dict[str, Any]] = []
            for idx, rec in enumerate(answers):
                if not isinstance(rec, dict):
                    errors.append({"code": "invalid_record", "index": idx})
                    continue
                iid = rec.get("itemId")
                val = rec.get("value")
                if iid not in allowed:
                    errors.append({"code": "unknown_item", "itemId": iid})
                    continue
                if iid in given:
                    errors.append({"code": "duplicate_item", "itemId": iid})
                if not _is_valid_int_in_range(val, lo, hi):
                    errors.append({"code": "invalid_value", "itemId": iid})
                    continue
                given[iid] = val
            if errors:
                return None, {"status": "invalid", **meta, "errors": errors}
            missing = [iid for iid in item_ids if iid not in given]
            if missing:
                return None, {
                    "status": "incomplete",
                    **meta,
                    "answered": len(given),
                    "total": len(items),
                    "missing": missing,
                }
            return [given[iid] for iid in item_ids], None

        if len(answers) != len(items):
            return None, {
                "status": "invalid",
                "errors": [
                    {
                        "code": "invalid_length",
                        "detail": "Positional input requires the complete pinned item order.",
                    }
                ],
                "scorerVersion": SCORER_VERSION,
            }
        errors = []
        for idx, val in enumerate(answers):
            if not _is_valid_int_in_range(val, lo, hi):
                errors.append({"code": "invalid_value", "itemId": item_ids[idx]})
        if errors:
            return None, {"status": "invalid", **meta, "errors": errors}
        return list(answers), None

    if isinstance(answers, dict):
        # Accept either canonical item ids ("ipip50-01") or battery codes ("B01")
        ordered: list[int] = []
        missing_ids: list[str] = []
        errors = []
        for iid, pid in zip(item_ids, prefix_ids):
            if iid in answers:
                val = answers[iid]
                key_used = iid
            elif pid in answers:
                val = answers[pid]
                key_used = pid
            else:
                missing_ids.append(iid)
                continue
            if not _is_valid_int_in_range(val, lo, hi):
                errors.append({"code": "invalid_value", "itemId": key_used})
            else:
                ordered.append(val)
        if errors:
            return None, {"status": "invalid", **meta, "errors": errors}
        if missing_ids:
            return None, {
                "status": "incomplete",
                **meta,
                "answered": len(ordered),
                "total": len(items),
                "missing": missing_ids,
            }
        return ordered, None

    return None, {
        "status": "invalid",
        **meta,
        "errors": [{"code": "invalid_responses", "detail": "Expected list or dict of responses."}],
    }


def score_instrument(
    route_or_id: str,
    answers: Any,
    definitions: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    """Score a single instrument administration, matching resources/scoring/score.js."""
    defs = definitions if definitions is not None else load_instruments()
    defn = _resolve_definition(route_or_id, defs)
    if defn is None:
        return {
            "status": "invalid",
            "errors": [{"code": "unknown_instrument_version", "detail": f"Unknown instrument: {route_or_id}"}],
            "scorerVersion": SCORER_VERSION,
        }

    ordered, err = _normalize_answers(defn, answers)
    if err is not None:
        return err
    assert ordered is not None

    meta = {
        "instrumentId": defn["id"],
        "instrumentVersion": defn["version"],
        "route": defn["route"],
        "scorerVersion": SCORER_VERSION,
        "definitionHash": defn.get("definitionHash"),
    }
    items = sorted(defn["items"], key=lambda x: x["displayOrder"])
    lo, hi = defn["range"]
    mode = defn["mode"]

    if mode == "bipolar":
        midpoint = (lo + hi) / 2.0
        pairs = defn["pairs"]
        values = {pole: 0 for pair in pairs.values() for pole in pair}
        for item, v in zip(items, ordered):
            n = v - midpoint
            if n:
                pole = item["low"] if n < 0 else item["high"]
                values[pole] += int(abs(n)) if abs(n).is_integer() else abs(n)
        tied = [
            dim
            for dim in defn["dimensions"]
            if values[pairs[dim][0]] == values[pairs[dim][1]]
        ]
        pattern = "".join(
            "X"
            if values[pairs[dim][0]] == values[pairs[dim][1]]
            else (pairs[dim][0] if values[pairs[dim][0]] > values[pairs[dim][1]] else pairs[dim][1])
            for dim in defn["dimensions"]
        )
        axis_diffs = {
            "I-E": values["I"] - values["E"],
            "N-S": values["N"] - values["S"],
            "T-F": values["T"] - values["F"],
            "J-P": values["J"] - values["P"],
        }
        return {
            "status": "complete",
            **meta,
            "scale": "1..5 bipolar",
            "values": values,
            "axis_diffs": axis_diffs,
            "tied": tied,
            "pattern": pattern,
            "type": None if tied else pattern,
        }

    sums = {dim: 0 for dim in defn["dimensions"]}
    counts = {dim: 0 for dim in defn["dimensions"]}
    facet_sums: dict[str, int] = {}
    facet_counts: dict[str, int] = {}

    for item, v in zip(items, ordered):
        keyed = (lo + hi - v) if item["reverse"] else v
        dim = item["dimension"]
        sums[dim] += keyed
        counts[dim] += 1
        if "facet" in item:
            fc = item["facet"]
            facet_sums[fc] = facet_sums.get(fc, 0) + keyed
            facet_counts[fc] = facet_counts.get(fc, 0) + 1

    means = {dim: sums[dim] / counts[dim] for dim in defn["dimensions"]}
    out: dict[str, Any] = {
        "status": "complete",
        **meta,
        "scale": f"{lo}..{hi} {mode}",
        "values": dict(means) if mode == "mean" else dict(sums),
        "means": means,
        "sums": sums,
    }
    if facet_sums:
        out["facets"] = {fc: facet_sums[fc] / facet_counts[fc] for fc in facet_sums}
    if defn.get("classification") == "highest":
        max_val = max(out["values"].values())
        leaders = [dim for dim in defn["dimensions"] if out["values"][dim] == max_val]
        out["leaders"] = leaders
        out["type"] = leaders[0] if len(leaders) == 1 else None
    return out


def _extract_battery_vectors(
    payload: dict[str, Any], definitions: dict[str, dict[str, Any]]
) -> dict[str, list[int]]:
    """Extract ordered raw integer vectors for all 6 instruments from flat or nested battery input."""
    if all(route in payload for route in ROUTE_ORDER):
        vectors: dict[str, list[int]] = {}
        for route in ROUTE_ORDER:
            defn = definitions[route]
            ordered, err = _normalize_answers(defn, payload[route])
            if err is not None:
                raise ValueError(f"Invalid answers for {route}: {err}")
            assert ordered is not None
            vectors[route] = ordered
        return vectors

    # Flat key dict M01..H60
    vectors = {}
    for route, prefix, count, (lo, hi) in BATTERY_ROUTES:
        vec: list[int] = []
        missing: list[str] = []
        invalid: list[str] = []
        for idx in range(1, count + 1):
            kid = f"{prefix}{idx:02d}"
            if kid not in payload:
                missing.append(kid)
                continue
            val = payload[kid]
            if not _is_valid_int_in_range(val, lo, hi):
                invalid.append(kid)
            else:
                vec.append(val)
        if missing or invalid:
            raise ValueError(
                f"Invalid/incomplete {route}: missing={missing[:5]}, invalid={invalid[:5]}"
            )
        vectors[route] = vec
    return vectors


def score_battery(
    payload: dict[str, Any],
    definitions: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    """Score a complete 230-item administration across all 6 instruments."""
    defs = definitions if definitions is not None else load_instruments()
    raw_vectors = _extract_battery_vectors(payload, defs)
    scored = {
        route: score_instrument(route, raw_vectors[route], definitions=defs)
        for route in ROUTE_ORDER
    }
    flat_vec = [v for route in ROUTE_ORDER for v in raw_vectors[route]]
    return {
        "status": "complete",
        "protocol_id": PROTOCOL_ID,
        "scorerVersion": SCORER_VERSION,
        "item_count": len(flat_vec),
        "raw_vectors": raw_vectors,
        "instruments": scored,
    }


def _mean_sd(xs: list[float]) -> tuple[float, float]:
    n = len(xs)
    m = sum(xs) / n
    if n < 2:
        return m, 0.0
    var = sum((x - m) ** 2 for x in xs) / (n - 1)
    return m, math.sqrt(var)


def _deterministic_seed(base_seed: int, label: str) -> int:
    digest = hashlib.sha256(f"{base_seed}:{label}".encode("utf-8")).digest()
    return int.from_bytes(digest[:8], "big")


def bootstrap_ci95(
    xs: list[float], n_boot: int = 1000, seed: int = 42, label: str = ""
) -> tuple[float, float]:
    """Deterministic 1,000-resample percentile bootstrap 95% CI for the mean."""
    n = len(xs)
    if n == 0:
        raise ValueError("Cannot bootstrap empty sample")
    if n == 1:
        v = float(xs[0])
        return v, v
    rng = random.Random(_deterministic_seed(seed, label))
    means: list[float] = []
    for _ in range(n_boot):
        samp_sum = 0.0
        for _ in range(n):
            samp_sum += xs[rng.randrange(n)]
        means.append(samp_sum / n)
    means.sort()
    lo_idx = int(0.025 * n_boot)
    hi_idx = min(n_boot - 1, int(0.975 * n_boot))
    return means[lo_idx], means[hi_idx]


def wilson_ci95(count: int, total: int, z: float = 1.959963984540054) -> tuple[float, float]:
    """95% Wilson score binomial confidence interval for count/total."""
    if total <= 0:
        return 0.0, 0.0
    p = count / total
    z2 = z * z
    denom = 1.0 + z2 / total
    center = (p + z2 / (2.0 * total)) / denom
    half = (z * math.sqrt((p * (1.0 - p) + z2 / (4.0 * total)) / total)) / denom
    return max(0.0, center - half), min(1.0, center + half)


def shannon_entropy_bits(counts: list[int] | Any) -> float:
    tot = sum(counts)
    if tot <= 0:
        return 0.0
    h = 0.0
    for c in counts:
        if c > 0:
            p = c / tot
            h -= p * math.log2(p)
    return h


def miller_madow_item_entropy(col_values: list[int]) -> tuple[float, float]:
    """Return (raw_H_bits, H_MM_bits) for one item across n runs."""
    n = len(col_values)
    if n <= 0:
        return 0.0, 0.0
    counts = Counter(col_values)
    h = shannon_entropy_bits(counts.values())
    k = len(counts)
    h_mm = h + (k - 1) / (2.0 * n * math.log(2.0))
    return h, h_mm


def crystallinity_tier(h_mm_bits: float) -> str:
    if h_mm_bits < 0.20:
        return "Crystalline"
    if h_mm_bits < 0.75:
        return "Semi-crystalline"
    return "Fluid"


def _summarize_numeric_series(
    xs: list[float], seed: int, label: str, n_boot: int = 1000
) -> dict[str, Any]:
    m, sd = _mean_sd(xs)
    lo, hi = bootstrap_ci95(xs, n_boot=n_boot, seed=seed, label=label)
    return {
        "mean": round(m, 4),
        "sd": round(sd, 4),
        "ci_low": round(lo, 4),
        "ci_high": round(hi, 4),
        "min": round(min(xs), 4),
        "max": round(max(xs), 4),
    }


def _summarize_discrete_classification(
    patterns: list[str],
    non_tie_labels: list[str | None],
    axis_ties: dict[str, int] | None = None,
) -> dict[str, Any]:
    n = len(patterns)
    pattern_counts = Counter(patterns)
    non_tie_counts = Counter(lbl for lbl in non_tie_labels if lbl is not None)
    tie_count = sum(1 for lbl in non_tie_labels if lbl is None)
    tie_rate = tie_count / n if n else 0.0
    tie_lo, tie_hi = wilson_ci95(tie_count, n)

    modal_pattern = sorted(pattern_counts.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
    sorted_non_tie = sorted(non_tie_counts.items(), key=lambda kv: (-kv[1], kv[0]))

    if sorted_non_tie:
        modal_non_tie, c1 = sorted_non_tie[0]
        if len(sorted_non_tie) > 1:
            runner_up_non_tie, c2 = sorted_non_tie[1]
        else:
            runner_up_non_tie, c2 = None, 0
    else:
        modal_non_tie, c1 = None, 0
        runner_up_non_tie, c2 = None, 0

    ci1_lo, ci1_hi = wilson_ci95(c1, n)
    ci2_lo, ci2_hi = wilson_ci95(c2, n)

    # Headline allowed only if n >= 2, resolved modal label is strictly unique,
    # and its 95% Wilson CI lower bound clears both runner-up AND unresolved tie CI upper bounds.
    headline_allowed = bool(
        n >= 2
        and c1 > 0
        and c1 > c2
        and c1 > tie_count
        and ci1_lo > max(ci2_hi, tie_hi)
    )

    out: dict[str, Any] = {
        "modal_pattern": modal_pattern,
        "modal_non_tie": modal_non_tie,
        "modal_non_tie_count": c1,
        "modal_non_tie_share": round(c1 / n, 4) if n else 0.0,
        "modal_ci95": [round(ci1_lo, 4), round(ci1_hi, 4)],
        "runner_up_non_tie": runner_up_non_tie,
        "runner_up_count": c2,
        "runner_up_share": round(c2 / n, 4) if n else 0.0,
        "runner_up_ci95": [round(ci2_lo, 4), round(ci2_hi, 4)],
        "tie_count": tie_count,
        "tie_rate": round(tie_rate, 4),
        "tie_ci95": [round(tie_lo, 4), round(tie_hi, 4)],
        "headline_allowed": headline_allowed,
        "pattern_counts": dict(sorted(pattern_counts.items())),
        "non_tie_counts": dict(sorted(non_tie_counts.items())),
    }
    if axis_ties is not None:
        out["axis_ties"] = axis_ties
    return out


def _compute_bai_and_contradiction(
    defn: dict[str, Any], raw_sheets: list[list[int]]
) -> tuple[float | None, float | None]:
    """Compute Trait-Balanced Acquiescence Index (BAI) and reverse-key contradiction rate."""
    items = sorted(defn["items"], key=lambda x: x["displayOrder"])
    if defn["mode"] == "bipolar" or not any("reverse" in it for it in items):
        return None, None
    lo, hi = defn["range"]
    midpoint = (lo + hi) / 2.0
    half_band = 0.5 if (hi - lo) == 4 else 0.75

    n = len(raw_sheets)
    dim_bais: list[float] = []
    contra_count = 0
    total_checks = 0

    for dim in defn["dimensions"]:
        p_idx = [i for i, it in enumerate(items) if it["dimension"] == dim and not it["reverse"]]
        r_idx = [i for i, it in enumerate(items) if it["dimension"] == dim and it["reverse"]]
        if p_idx and r_idx:
            p_mean = sum(row[i] for row in raw_sheets for i in p_idx) / (n * len(p_idx))
            r_mean = sum(row[i] for row in raw_sheets for i in r_idx) / (n * len(r_idx))
            dim_bais.append(((p_mean + r_mean) / 2.0) - midpoint)
        if len(p_idx) >= 2 and len(r_idx) >= 2:
            for row in raw_sheets:
                total_checks += 1
                pm = sum(row[i] for i in p_idx) / len(p_idx)
                rm = sum(row[i] for i in r_idx) / len(r_idx)
                if (pm > midpoint + half_band and rm > midpoint + half_band) or (
                    pm < midpoint - half_band and rm < midpoint - half_band
                ):
                    contra_count += 1

    bai = (sum(dim_bais) / len(dim_bais)) if dim_bais else None
    contra_rate = (contra_count / total_checks) if total_checks > 0 else 0.0
    return bai, contra_rate


def summarize_runs(
    runs: list[dict[str, Any]],
    seed: int = 42,
    n_boot: int = 1000,
    definitions: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    """Aggregate n administrations into means, SDs, bootstrap CIs, entropy, ties, and validity flags."""
    if not runs:
        raise ValueError("At least 1 run is required")
    defs = definitions if definitions is not None else load_instruments()

    scored_runs: list[dict[str, Any]] = []
    for run in runs:
        payload = run["answers"] if isinstance(run, dict) and "answers" in run and len(run) <= 5 else run
        scored_runs.append(score_battery(payload, definitions=defs))

    n = len(scored_runs)
    inst_summaries: dict[str, Any] = {}
    all_raw_item_entropies: list[float] = []
    all_mm_item_entropies: list[float] = []
    all_neutral_hits = 0
    all_total_responses = 0

    for route in ROUTE_ORDER:
        defn = defs[route]
        lo, hi = defn["range"]
        midpoint = int((lo + hi) / 2)
        raw_sheets = [r["raw_vectors"][route] for r in scored_runs]
        scored_sheets = [r["instruments"][route] for r in scored_runs]
        n_items = len(raw_sheets[0])

        # Entropy & unique vector ratio
        raw_ents = []
        mm_ents = []
        for j in range(n_items):
            col = [row[j] for row in raw_sheets]
            h, h_mm = miller_madow_item_entropy(col)
            raw_ents.append(h)
            mm_ents.append(h_mm)
        mean_raw_h = sum(raw_ents) / n_items
        mean_mm_h = sum(mm_ents) / n_items
        all_raw_item_entropies.extend(raw_ents)
        all_mm_item_entropies.extend(mm_ents)

        unique_vecs = len({tuple(row) for row in raw_sheets})
        neutral_hits = sum(1 for row in raw_sheets for v in row if v == midpoint)
        total_resp = n * n_items
        neutral_rate = neutral_hits / total_resp
        all_neutral_hits += neutral_hits
        all_total_responses += total_resp

        # Dimension summaries
        dim_keys = list(scored_sheets[0]["values"].keys())
        dimensions = {
            dk: _summarize_numeric_series(
                [float(s["values"][dk]) for s in scored_sheets],
                seed=seed,
                label=f"{route}:{dk}",
                n_boot=n_boot,
            )
            for dk in dim_keys
        }

        summary: dict[str, Any] = {
            "instrumentId": defn["id"],
            "instrumentVersion": defn["version"],
            "definitionHash": defn.get("definitionHash"),
            "scale": scored_sheets[0]["scale"],
            "n": n,
            "dimensions": dimensions,
            "entropy": {
                "raw_bits": round(mean_raw_h, 4),
                "miller_madow_bits": round(mean_mm_h, 4),
                "crystallinity_tier": crystallinity_tier(mean_mm_h),
                "unique_vectors": unique_vecs,
                "unique_vector_ratio": round(unique_vecs / n, 4),
            },
            "neutral_rate": round(neutral_rate, 4),
        }

        if route == "mbti":
            summary["axis_diffs"] = {
                ak: _summarize_numeric_series(
                    [float(s["axis_diffs"][ak]) for s in scored_sheets],
                    seed=seed,
                    label=f"mbti_diff:{ak}",
                    n_boot=n_boot,
                )
                for ak in ("I-E", "N-S", "T-F", "J-P")
            }
            axis_ties = {
                ax: sum(1 for s in scored_sheets if ax in s["tied"])
                for ax in defn["dimensions"]
            }
            summary["classification"] = _summarize_discrete_classification(
                patterns=[s["pattern"] for s in scored_sheets],
                non_tie_labels=[s["type"] for s in scored_sheets],
                axis_ties=axis_ties,
            )

        if route in ("disc", "enneagram"):
            summary["classification"] = _summarize_discrete_classification(
                patterns=["/".join(s["leaders"]) for s in scored_sheets],
                non_tie_labels=[s["type"] for s in scored_sheets],
            )

        if route == "attachment":
            anx = dimensions["anxiety"]
            avd = dimensions["avoidance"]
            midpoint_clamp = bool(
                neutral_rate >= 0.85
                or (
                    n >= 2
                    and abs(anx["mean"] - 4.0) <= 0.25
                    and abs(avd["mean"] - 4.0) <= 0.25
                    and anx["sd"] <= 0.10
                    and avd["sd"] <= 0.10
                )
            )
            summary["midpoint_clamp"] = midpoint_clamp

        if route == "ipip-hexaco":
            summary["domain_sums"] = {
                dk: _summarize_numeric_series(
                    [float(s["sums"][dk]) for s in scored_sheets],
                    seed=seed,
                    label=f"hexaco_sum:{dk}",
                    n_boot=n_boot,
                )
                for dk in defn["dimensions"]
            }
            facet_codes = list(scored_sheets[0]["facets"].keys())
            summary["facets"] = {
                fc: {
                    "dimension": defn["facets"][fc]["dimension"],
                    "name": defn["facets"][fc]["name"],
                    **_summarize_numeric_series(
                        [float(s["facets"][fc]) for s in scored_sheets],
                        seed=seed,
                        label=f"hexaco_facet:{fc}",
                        n_boot=n_boot,
                    ),
                }
                for fc in facet_codes
            }

        bai, contra_rate = _compute_bai_and_contradiction(defn, raw_sheets)
        if bai is not None:
            summary["bai"] = round(bai, 4)
            summary["reverse_key_contradiction_rate"] = round(contra_rate or 0.0, 4)

        inst_summaries[route] = summary

    # Battery-wide aggregates
    battery_raw_h = sum(all_raw_item_entropies) / len(all_raw_item_entropies)
    battery_mm_h = sum(all_mm_item_entropies) / len(all_mm_item_entropies)
    battery_vecs = [
        tuple(v for route in ROUTE_ORDER for v in r["raw_vectors"][route])
        for r in scored_runs
    ]
    battery_unique = len(set(battery_vecs))

    # Balanced 1..5 BAI & contradiction pooled across Big Five + IPIP-HEXACO-60
    b5_bai = inst_summaries["big-five"]["bai"]
    hx_bai = inst_summaries["ipip-hexaco"]["bai"]
    pooled_bai = (5 * b5_bai + 6 * hx_bai) / 11.0
    # Exact sheet-level contradiction rate across eligible balanced 1..5 traits (5 in B5, 6 in HEXACO)
    b5_sheets = [r["raw_vectors"]["big-five"] for r in scored_runs]
    hx_sheets = [r["raw_vectors"]["ipip-hexaco"] for r in scored_runs]
    _, b5_contra = _compute_bai_and_contradiction(defs["big-five"], b5_sheets)
    _, hx_contra = _compute_bai_and_contradiction(defs["ipip-hexaco"], hx_sheets)
    pooled_contra = (5 * (b5_contra or 0.0) + 6 * (hx_contra or 0.0)) / 11.0

    return {
        "protocol_id": PROTOCOL_ID,
        "scorerVersion": SCORER_VERSION,
        "n": n,
        "seed": seed,
        "n_boot": n_boot,
        "instruments_sha256": instruments_sha256(),
        "definition_hashes": {r: defs[r].get("definitionHash") for r in ROUTE_ORDER},
        "battery": {
            "item_count": 230,
            "raw_entropy_bits": round(battery_raw_h, 4),
            "miller_madow_bits": round(battery_mm_h, 4),
            "crystallinity_tier": crystallinity_tier(battery_mm_h),
            "unique_vectors": battery_unique,
            "unique_vector_ratio": round(battery_unique / n, 4),
            "neutral_rate": round(all_neutral_hits / all_total_responses, 4),
            "bai_balanced_1_to_5": round(pooled_bai, 4),
            "reverse_key_contradiction_rate": round(pooled_contra, 4),
        },
        "instruments": inst_summaries,
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Score and summarize model-profiles-v1 administrations.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--check-definitions", action="store_true", help="Validate instrument definitions and print hashes.")
    group.add_argument("--score-single", action="store_true", help="Score a single battery or instrument JSON payload.")
    group.add_argument("--summarize", action="store_true", help="Summarize n runs JSON payload with validity metrics.")
    parser.add_argument("--instrument", help="Optional instrument route/id for --score-single.")
    parser.add_argument("--input", help="Path to JSON input file (defaults to stdin).")
    parser.add_argument("--seed", type=int, default=42, help="Bootstrap RNG seed (default: 42).")
    parser.add_argument("--n-boot", type=int, default=1000, help="Bootstrap resamples (default: 1000).")
    args = parser.parse_args(argv)

    defs = load_instruments()

    if args.check_definitions:
        out = {
            "status": "ok",
            "scorerVersion": SCORER_VERSION,
            "protocol_id": PROTOCOL_ID,
            "instruments_sha256": instruments_sha256(),
            "instruments": {
                r: {
                    "id": defs[r]["id"],
                    "version": defs[r]["version"],
                    "item_count": len(defs[r]["items"]),
                    "range": defs[r]["range"],
                    "definitionHash": defs[r].get("definitionHash"),
                }
                for r in ROUTE_ORDER
            },
        }
        print(json.dumps(out, indent=2))
        return 0

    raw_text = Path(args.input).read_text(encoding="utf-8") if args.input else sys.stdin.read()
    payload = json.loads(raw_text)

    if args.score_single:
        if args.instrument:
            res = score_instrument(args.instrument, payload, definitions=defs)
        else:
            res = score_battery(payload, definitions=defs)
        print(json.dumps(res, indent=2))
        return 0

    if args.summarize:
        if isinstance(payload, dict) and "runs" in payload:
            runs = payload["runs"]
            seed = int(payload.get("seed", args.seed))
            n_boot = int(payload.get("n_boot", args.n_boot))
        elif isinstance(payload, list):
            runs = payload
            seed = args.seed
            n_boot = args.n_boot
        else:
            raise ValueError("Expected JSON list of runs or {'runs': [...]}")
        res = summarize_runs(runs, seed=seed, n_boot=n_boot, definitions=defs)
        print(json.dumps(res, indent=2))
        return 0

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
