#!/usr/bin/env python3
"""
Zero-cost deterministic psychometric forensics over AgentTune's frozen
November 2026 OpenRouter 20-model x n=100 dataset (10,000 sheets).

Outputs:
  - research/data/november-2026-factor-collapse-mtmm.json (+ .csv)
  - research/data/november-2026-persona-entropy-acquiescence.json (+ .csv)
"""

import csv
import json
import math
import random
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESP_PATH = ROOT / "research" / "data" / "november-2026-openrouter-responses.json"
SUM_PATH = ROOT / "research" / "data" / "november-2026-openrouter-summary.json"
INST_PATH = ROOT / "vendor" / "agenttune-content" / "instruments.json"
OUT_DIR = ROOT / "research" / "data"


def pearson_r(xs, ys):
    n = len(xs)
    mx = sum(xs) / n
    my = sum(ys) / n
    vx = sum((x - mx) ** 2 for x in xs)
    vy = sum((y - my) ** 2 for y in ys)
    if vx <= 0 or vy <= 0:
        return 0.0
    cov = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    return cov / math.sqrt(vx * vy)


def mean_sd(xs):
    n = len(xs)
    m = sum(xs) / n
    if n < 2:
        return m, 0.0
    var = sum((x - m) ** 2 for x in xs) / (n - 1)
    return m, math.sqrt(var)


def shannon_entropy(counts):
    tot = sum(counts)
    if tot <= 0:
        return 0.0
    h = 0.0
    for c in counts:
        if c > 0:
            p = c / tot
            h -= p * math.log2(p)
    return h


def jacobi_eigen_symmetric(mat, max_iter=200, tol=1e-12):
    """Exact Jacobi eigenvalue solver for symmetric NxN matrix (no numpy needed)."""
    n = len(mat)
    a = [row[:] for row in mat]
    v = [[1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    for _ in range(max_iter):
        # Find largest off-diagonal element
        max_val = 0.0
        p, q = 0, 1
        for i in range(n):
            for j in range(i + 1, n):
                if abs(a[i][j]) > max_val:
                    max_val = abs(a[i][j])
                    p, q = i, j
        if max_val < tol:
            break
        app, aqq, apq = a[p][p], a[q][q], a[p][q]
        if abs(app - aqq) < 1e-15:
            theta = math.pi / 4.0 if apq > 0 else -math.pi / 4.0
        else:
            theta = 0.5 * math.atan2(2.0 * apq, aqq - app)
        c = math.cos(theta)
        s = math.sin(theta)
        for i in range(n):
            if i != p and i != q:
                aip, aiq = a[i][p], a[i][q]
                a[i][p] = c * aip - s * aiq
                a[p][i] = a[i][p]
                a[i][q] = s * aip + c * aiq
                a[q][i] = a[i][q]
        a[p][p] = c * c * app - 2.0 * s * c * apq + s * s * aqq
        a[q][q] = s * s * app + 2.0 * s * c * apq + c * c * aqq
        a[p][q] = 0.0
        a[q][p] = 0.0
        for i in range(n):
            vip, viq = v[i][p], v[i][q]
            v[i][p] = c * vip - s * viq
            v[i][q] = s * vip + c * viq
    eigvals = [a[i][i] for i in range(n)]
    order = sorted(range(n), key=lambda k: eigvals[k], reverse=True)
    vals = [round(eigvals[k], 6) for k in order]
    vecs = [[round(v[row][k], 6) for k in order] for row in range(n)]
    return vals, vecs


def bootstrap_ci(xs, n_boot=1000, seed=42):
    rng = random.Random(seed)
    n = len(xs)
    means = []
    for _ in range(n_boot):
        samp = [xs[rng.randrange(n)] for _ in range(n)]
        means.append(sum(samp) / n)
    means.sort()
    lo = means[int(0.025 * n_boot)]
    hi = means[int(0.975 * n_boot)]
    return [round(lo, 3), round(hi, 3)]


def cronbach_alpha(matrix_rows):
    """matrix_rows: N respondents x K items (keyed)."""
    n = len(matrix_rows)
    if n < 2:
        return None
    k = len(matrix_rows[0])
    item_vars = []
    for j in range(k):
        col = [row[j] for row in matrix_rows]
        _, sd = mean_sd(col)
        item_vars.append(sd * sd)
    totals = [sum(row) for row in matrix_rows]
    _, tot_sd = mean_sd(totals)
    tot_var = tot_sd * tot_sd
    if tot_var <= 1e-12:
        return None
    return (k / (k - 1.0)) * (1.0 - sum(item_vars) / tot_var)


def classify_embodiment(text):
    t = text.lower()
    physical_social = [
        "party", "parties", "belongings", "chores", "mess", "conversations",
        "strangers", "spotlight", "background", "center of attention", "crowd"
    ]
    for kw in physical_social:
        if kw in t:
            return "embodied_human_proxy"
    return "cognitive_interpersonal"


def main():
    resp_data = json.loads(RESP_PATH.read_text(encoding="utf-8"))
    sum_data = json.loads(SUM_PATH.read_text(encoding="utf-8"))
    instruments = json.loads(INST_PATH.read_text(encoding="utf-8"))

    ipip_inst = next(i for i in instruments if i["id"] == "agenttune-ipip50")
    ipip_items = sorted(ipip_inst["items"], key=lambda x: x["displayOrder"])
    assert len(ipip_items) == 50

    models_meta = {m["slug"]: m for m in resp_data["models"]}
    slugs = [m["slug"] for m in resp_data["models"]]
    assert len(slugs) == 20

    # Index records by (model, test)
    by_mt = defaultdict(list)
    for rec in resp_data["records"]:
        by_mt[(rec["model"], rec["test"])].append(rec["answers"])

    # ---------------- 1. FACTOR COLLAPSE & MTMM ----------------
    b5_traits = ["O", "C", "E", "A", "N"]
    model_b5_vec = {k: [sum_data[s]["big-five"]["values"][k]["mean"] for s in slugs] for k in b5_traits}
    b5_corr = []
    for k1 in b5_traits:
        row = []
        for k2 in b5_traits:
            row.append(round(pearson_r(model_b5_vec[k1], model_b5_vec[k2]), 4))
        b5_corr.append(row)

    eigvals, eigvecs = jacobi_eigen_symmetric(b5_corr)
    tot_var = sum(eigvals)
    var_pct = [round(100.0 * ev / tot_var, 2) for ev in eigvals]

    # Standardize model scores for PCA coordinates
    std_b5 = {}
    for idx, k in enumerate(b5_traits):
        xs = model_b5_vec[k]
        m, sd = mean_sd(xs)
        std_b5[k] = [(x - m) / sd for x in xs]

    # Align PC1 sign so +PC1 corresponds to high Neuroticism / low Prosocial-Discipline (or align so positive O/C/A = +)
    pc1_sign = 1.0 if eigvecs[3][0] >= 0 else -1.0  # A positive
    pc2_sign = 1.0 if eigvecs[2][1] >= 0 else -1.0  # E positive
    loadings_pc1 = {b5_traits[i]: round(eigvecs[i][0] * pc1_sign, 4) for i in range(5)}
    loadings_pc2 = {b5_traits[i]: round(eigvecs[i][1] * pc2_sign, 4) for i in range(5)}

    pca_coords = []
    for mi, s in enumerate(slugs):
        pc1 = sum(std_b5[b5_traits[ti]][mi] * loadings_pc1[b5_traits[ti]] for ti in range(5))
        pc2 = sum(std_b5[b5_traits[ti]][mi] * loadings_pc2[b5_traits[ti]] for ti in range(5))
        pca_coords.append({
            "slug": s,
            "name": models_meta[s]["name"],
            "class": models_meta[s]["family"],
            "pc1_general_factor": round(pc1, 3),
            "pc2_extraversion_axis": round(pc2, 3),
        })

    # Pooled sheet-level PCA across all 2,000 Big Five sheets
    sheet_scores = {k: [] for k in b5_traits}
    for s in slugs:
        for ans in by_mt[(s, "big-five")]:
            sums = {k: 0 for k in b5_traits}
            for idx, item in enumerate(ipip_items):
                val = ans[idx]
                keyed = (6 - val) if item["reverse"] else val
                sums[item["dimension"]] += keyed
            for k in b5_traits:
                sheet_scores[k].append(sums[k])
    sheet_corr = [
        [round(pearson_r(sheet_scores[k1], sheet_scores[k2]), 4) for k2 in b5_traits]
        for k1 in b5_traits
    ]
    sheet_eigvals, sheet_eigvecs = jacobi_eigen_symmetric(sheet_corr)
    sheet_var_pct = [round(100.0 * ev / sum(sheet_eigvals), 2) for ev in sheet_eigvals]

    # MTMM Cross-Instrument Matrix across N = 20 models
    # Note: In september-2026-score.cjs / summary.json:
    # MBTI values are I-E (positive = I), N-S (positive = N), T-F (positive = T), J-P (positive = J)
    mtmm_defs = [
        ("B5_O", "Big Five O", lambda s: sum_data[s]["big-five"]["values"]["O"]["mean"]),
        ("B5_C", "Big Five C", lambda s: sum_data[s]["big-five"]["values"]["C"]["mean"]),
        ("B5_E", "Big Five E", lambda s: sum_data[s]["big-five"]["values"]["E"]["mean"]),
        ("B5_A", "Big Five A", lambda s: sum_data[s]["big-five"]["values"]["A"]["mean"]),
        ("B5_N", "Big Five N", lambda s: sum_data[s]["big-five"]["values"]["N"]["mean"]),
        ("MBTI_IE", "MBTI I-E (+I)", lambda s: sum_data[s]["mbti"]["values"]["I-E"]["mean"]),
        ("MBTI_NS", "MBTI N-S (+N)", lambda s: sum_data[s]["mbti"]["values"]["N-S"]["mean"]),
        ("MBTI_TF", "MBTI T-F (+T)", lambda s: sum_data[s]["mbti"]["values"]["T-F"]["mean"]),
        ("MBTI_JP", "MBTI J-P (+J)", lambda s: sum_data[s]["mbti"]["values"]["J-P"]["mean"]),
        ("DISC_D", "DISC D", lambda s: sum_data[s]["disc"]["values"]["D"]["mean"]),
        ("DISC_I", "DISC I", lambda s: sum_data[s]["disc"]["values"]["I"]["mean"]),
        ("DISC_S", "DISC S", lambda s: sum_data[s]["disc"]["values"]["S"]["mean"]),
        ("DISC_C", "DISC C", lambda s: sum_data[s]["disc"]["values"]["C"]["mean"]),
        ("ATT_ANX", "ECR-R Anx", lambda s: sum_data[s]["attachment"]["values"]["anxiety"]["mean"]),
        ("ATT_AVD", "ECR-R Avd", lambda s: sum_data[s]["attachment"]["values"]["avoidance"]["mean"]),
        ("ENN_2", "Ennea 2 (Helper)", lambda s: sum_data[s]["enneagram"]["values"]["2"]["mean"]),
        ("ENN_5", "Ennea 5 (Invest.)", lambda s: sum_data[s]["enneagram"]["values"]["5"]["mean"]),
        ("ENN_8", "Ennea 8 (Chall.)", lambda s: sum_data[s]["enneagram"]["values"]["8"]["mean"]),
    ]
    mtmm_vecs = {code: [fn(s) for s in slugs] for code, _, fn in mtmm_defs}
    mtmm_matrix = {}
    for c1, _, _ in mtmm_defs:
        mtmm_matrix[c1] = {
            c2: round(pearson_r(mtmm_vecs[c1], mtmm_vecs[c2]), 4)
            for c2, _, _ in mtmm_defs
        }

    highlighted_pairs = [
        {"pair": "MBTI (I-E) vs. Big Five Extraversion", "expected_sign": "negative (more I = lower E)", "r": mtmm_matrix["MBTI_IE"]["B5_E"], "strongest_rival": "Big Five Openness (+0.71) & Conscientiousness (+0.70)", "verdict": "convergent_pass_weak_discriminant_fail"},
        {"pair": "MBTI (T-F) vs. Big Five Agreeableness", "expected_sign": "negative (more T = lower A)", "r": mtmm_matrix["MBTI_TF"]["B5_A"], "strongest_rival": "Big Five Openness", "r_rival": mtmm_matrix["MBTI_TF"]["B5_O"], "verdict": "convergent_and_discriminant_fail"},
        {"pair": "MBTI (N-S) vs. Big Five Openness", "expected_sign": "positive (more N = higher O)", "r": mtmm_matrix["MBTI_NS"]["B5_O"], "verdict": "moderate_convergent_only"},
        {"pair": "MBTI (J-P) vs. Big Five Conscientiousness", "expected_sign": "positive (more J = higher C)", "r": mtmm_matrix["MBTI_JP"]["B5_C"], "verdict": "convergent_pass"},
        {"pair": "DISC Influence (I) vs. Big Five Extraversion", "expected_sign": "strong positive", "r": mtmm_matrix["DISC_I"]["B5_E"], "strongest_rival": "Big Five Neuroticism", "r_rival": mtmm_matrix["DISC_I"]["B5_N"], "verdict": "convergent_and_discriminant_fail"},
        {"pair": "DISC Dominance (D) vs. Big Five Neuroticism", "expected_sign": "unrelated (~0)", "r": mtmm_matrix["DISC_D"]["B5_N"], "r_with_A": mtmm_matrix["DISC_D"]["B5_A"], "verdict": "discriminant_collapse_artifact"},
        {"pair": "Attachment Anxiety vs. Big Five Neuroticism", "expected_sign": "strong positive", "r": mtmm_matrix["ATT_ANX"]["B5_N"], "verdict": "convergent_pass"},
    ]

    # 50-item IPIP discrimination & embodiment audit
    ipip50_item_audit = []
    for idx, item in enumerate(ipip_items):
        per_model_raw_means = []
        per_model_keyed_means = []
        all_raw_vals = []
        for s in slugs:
            vals = [ans[idx] for ans in by_mt[(s, "big-five")]]
            all_raw_vals.extend(vals)
            raw_m = sum(vals) / len(vals)
            keyed_m = (6.0 - raw_m) if item["reverse"] else raw_m
            per_model_raw_means.append((s, raw_m, keyed_m))
        _, cross_sd = mean_sd([x[2] for x in per_model_raw_means])
        mean_keyed = sum(x[2] for x in per_model_raw_means) / len(per_model_raw_means)
        min_pair = min(per_model_raw_means, key=lambda x: x[2])
        max_pair = max(per_model_raw_means, key=lambda x: x[2])
        pct_midpoint = 100.0 * sum(1 for v in all_raw_vals if v == 3) / len(all_raw_vals)
        pct_extreme = 100.0 * sum(1 for v in all_raw_vals if v in (1, 5)) / len(all_raw_vals)
        ipip50_item_audit.append({
            "displayOrder": item["displayOrder"],
            "id": item["id"],
            "dimension": item["dimension"],
            "reverse": item["reverse"],
            "text": item["text"],
            "embodiment_tag": classify_embodiment(item["text"]),
            "cross_model_keyed_mean": round(mean_keyed, 3),
            "cross_model_sd": round(cross_sd, 3),
            "min_model": {"slug": min_pair[0], "keyed_mean": round(min_pair[2], 3)},
            "max_model": {"slug": max_pair[0], "keyed_mean": round(max_pair[2], 3)},
            "spread": round(max_pair[2] - min_pair[2], 3),
            "pct_midpoint_3": round(pct_midpoint, 1),
            "pct_extreme_1_or_5": round(pct_extreme, 1),
        })
    ipip50_item_audit_sorted = sorted(ipip50_item_audit, key=lambda x: x["cross_model_sd"], reverse=True)

    factor_collapse_payload = {
        "schema_version": "2026-11-26.1",
        "study_id": "ai_big_one_factor_collapse_mtmm",
        "source_dataset": "research/data/november-2026-openrouter-responses.json (20 models x 5 instruments x n=100 = 10,000 sheets)",
        "api_cost_usd": 0.0,
        "models_analyzed": len(slugs),
        "big_five_traits_order": b5_traits,
        "big_five_correlation_matrix": b5_corr,
        "big_five_pca": {
            "eigenvalues": eigvals,
            "variance_explained_pct": var_pct,
            "cumulative_pc1_pc2_pct": round(var_pct[0] + var_pct[1], 2),
            "pc1_loadings": loadings_pc1,
            "pc2_loadings": loadings_pc2,
            "model_coordinates": pca_coords,
            "pooled_2000_sheets_pca": {
                "correlation_matrix": sheet_corr,
                "eigenvalues": sheet_eigvals,
                "variance_explained_pct": sheet_var_pct,
            },
        },
        "mtmm_labels": [{"code": c, "label": l} for c, l, _ in mtmm_defs],
        "mtmm_matrix": mtmm_matrix,
        "highlighted_mtmm_tests": highlighted_pairs,
        "ipip50_item_audit_by_discrimination": ipip50_item_audit_sorted,
        "summary_takeaways": {
            "big_one_pc1_pct": var_pct[0],
            "pc1_plus_pc2_pct": round(var_pct[0] + var_pct[1], 2),
            "embodied_items_count": sum(1 for x in ipip50_item_audit if x["embodiment_tag"] == "embodied_human_proxy"),
            "embodied_items_mean_midpoint_pct": round(
                mean_sd([x["pct_midpoint_3"] for x in ipip50_item_audit if x["embodiment_tag"] == "embodied_human_proxy"])[0], 1
            ),
            "cognitive_items_mean_midpoint_pct": round(
                mean_sd([x["pct_midpoint_3"] for x in ipip50_item_audit if x["embodiment_tag"] == "cognitive_interpersonal"])[0], 1
            ),
        },
    }
    (OUT_DIR / "november-2026-factor-collapse-mtmm.json").write_text(
        json.dumps(factor_collapse_payload, indent=2) + "\n", encoding="utf-8"
    )

    with (OUT_DIR / "november-2026-factor-collapse-mtmm.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["displayOrder", "id", "dimension", "reverse", "embodiment_tag", "cross_model_keyed_mean", "cross_model_sd", "spread", "pct_midpoint_3", "pct_extreme_1_or_5", "min_model", "max_model", "text"])
        for row in ipip50_item_audit_sorted:
            w.writerow([
                row["displayOrder"], row["id"], row["dimension"], row["reverse"], row["embodiment_tag"],
                row["cross_model_keyed_mean"], row["cross_model_sd"], row["spread"],
                row["pct_midpoint_3"], row["pct_extreme_1_or_5"],
                f"{row['min_model']['slug']}:{row['min_model']['keyed_mean']}",
                f"{row['max_model']['slug']}:{row['max_model']['keyed_mean']}",
                row["text"]
            ])

    # ---------------- 2. PERSONA ENTROPY, MODAL COLLAPSE & ACQUIESCENCE ----------------
    pos_indices = [i for i, it in enumerate(ipip_items) if not it["reverse"]]
    rev_indices = [i for i, it in enumerate(ipip_items) if it["reverse"]]
    dim_pos_idx = {d: [i for i, it in enumerate(ipip_items) if it["dimension"] == d and not it["reverse"]] for d in b5_traits}
    dim_rev_idx = {d: [i for i, it in enumerate(ipip_items) if it["dimension"] == d and it["reverse"]] for d in b5_traits}

    model_entropy_rows = []
    # Positional entropy accumulator: item idx 0..49 -> list of entropies across 20 models
    item_entropies_by_pos = [[] for _ in range(50)]

    for s in slugs:
        inst_entropy = {}
        inst_modal_share = {}
        inst_unique = {}
        for test_name in ["big-five", "mbti", "disc", "enneagram", "attachment"]:
            sheets = by_mt[(s, test_name)]
            n_items = len(sheets[0])
            ent_list = []
            for j in range(n_items):
                c = Counter(row[j] for row in sheets)
                h = shannon_entropy(c.values())
                ent_list.append(h)
                if test_name == "big-five":
                    item_entropies_by_pos[j].append(h)
            inst_entropy[test_name] = round(sum(ent_list) / len(ent_list), 4)
            vec_counts = Counter(tuple(row) for row in sheets)
            inst_unique[test_name] = len(vec_counts)
            inst_modal_share[test_name] = round(vec_counts.most_common(1)[0][1] / len(sheets), 3)

        b5_sheets = by_mt[(s, "big-five")]
        pos_raw_vals = [row[i] for row in b5_sheets for i in pos_indices]
        rev_raw_vals = [row[i] for row in b5_sheets for i in rev_indices]
        mean_pos_raw = sum(pos_raw_vals) / len(pos_raw_vals)
        mean_rev_raw = sum(rev_raw_vals) / len(rev_raw_vals)
        # Trait-balanced BAI avoids skew from traits with unequal pos/rev item counts (e.g. N has 8 pos / 2 rev)
        per_dim_bais = []
        for d in b5_traits:
            p_m = sum(row[i] for row in b5_sheets for i in dim_pos_idx[d]) / (len(b5_sheets) * len(dim_pos_idx[d]))
            r_m = sum(row[i] for row in b5_sheets for i in dim_rev_idx[d]) / (len(b5_sheets) * len(dim_rev_idx[d]))
            per_dim_bais.append(((p_m + r_m) / 2.0) - 3.0)
        bai = sum(per_dim_bais) / len(per_dim_bais)

        # Reverse-key contradiction check per sheet & trait:
        # Both raw positively-keyed mean > 3.5 AND raw reverse-keyed mean > 3.5 (yea-contradiction)
        # or both < 2.5 (nay-contradiction) inside traits that have >= 2 pos and >= 2 rev items
        contra_count = 0
        total_trait_checks = 0
        trait_alphas = {}
        trait_cis = {}
        for d in b5_traits:
            d_idx = [i for i, it in enumerate(ipip_items) if it["dimension"] == d]
            keyed_matrix = [
                [((6 - row[i]) if ipip_items[i]["reverse"] else row[i]) for i in d_idx]
                for row in b5_sheets
            ]
            alpha = cronbach_alpha(keyed_matrix)
            trait_alphas[d] = round(alpha, 3) if alpha is not None else None
            totals_d = [sum(r) for r in keyed_matrix]
            trait_cis[d] = bootstrap_ci(totals_d, n_boot=1000, seed=42 + hash(s + d) % 10000)

            p_idx = dim_pos_idx[d]
            r_idx = dim_rev_idx[d]
            if len(p_idx) >= 2 and len(r_idx) >= 2:
                for row in b5_sheets:
                    total_trait_checks += 1
                    pm = sum(row[i] for i in p_idx) / len(p_idx)
                    rm = sum(row[i] for i in r_idx) / len(r_idx)
                    if (pm > 3.5 and rm > 3.5) or (pm < 2.5 and rm < 2.5):
                        contra_count += 1

        # Item-position correlation within Big Five across 100 runs
        mean_5test_entropy = sum(inst_entropy.values()) / 5.0
        model_entropy_rows.append({
            "slug": s,
            "name": models_meta[s]["name"],
            "class": models_meta[s]["family"],
            "big5_entropy_bits": inst_entropy["big-five"],
            "five_test_mean_entropy_bits": round(mean_5test_entropy, 4),
            "entropy_by_test_bits": inst_entropy,
            "unique_vectors_per_100": inst_unique,
            "modal_sheet_frequency": inst_modal_share,
            "mean_pos_raw_ipip50": round(mean_pos_raw, 3),
            "mean_rev_raw_ipip50": round(mean_rev_raw, 3),
            "balanced_acquiescence_index": round(bai, 3),
            "reverse_key_contradiction_rate": round(contra_count / total_trait_checks, 4) if total_trait_checks else 0.0,
            "cronbach_alpha_by_trait": trait_alphas,
            "bootstrap_ci95_by_trait": trait_cis,
            "crystallinity_tier": (
                "Crystalline (<0.20 bits)" if inst_entropy["big-five"] < 0.20
                else ("Semi-crystalline (0.20-0.75 bits)" if inst_entropy["big-five"] < 0.75
                      else "Fluid (>=0.75 bits)")
            ),
        })

    model_entropy_sorted = sorted(model_entropy_rows, key=lambda x: x["big5_entropy_bits"])
    decile_labels = ["Items 1-10", "Items 11-20", "Items 21-30", "Items 31-40", "Items 41-50"]
    positional_curve = []
    for dec in range(5):
        lo, hi = dec * 10, (dec + 1) * 10
        vals = [h for j in range(lo, hi) for h in item_entropies_by_pos[j]]
        m, sd = mean_sd(vals)
        positional_curve.append({
            "decile": decile_labels[dec],
            "start_item": lo + 1,
            "end_item": hi,
            "mean_entropy_bits": round(m, 4),
            "sd_bits": round(sd, 4),
        })

    prop_ent = [r["big5_entropy_bits"] for r in model_entropy_rows if r["class"] == "proprietary"]
    oss_ent = [r["big5_entropy_bits"] for r in model_entropy_rows if r["class"] == "open-weight"]
    prop_bai = [r["balanced_acquiescence_index"] for r in model_entropy_rows if r["class"] == "proprietary"]
    oss_bai = [r["balanced_acquiescence_index"] for r in model_entropy_rows if r["class"] == "open-weight"]

    min_ent = model_entropy_sorted[0]
    max_ent = model_entropy_sorted[-1]

    entropy_payload = {
        "schema_version": "2026-11-26.1",
        "study_id": "ai_persona_entropy_crystalline_vs_fluid",
        "source_dataset": "research/data/november-2026-openrouter-responses.json (20 models x 5 instruments x n=100 = 10,000 sheets)",
        "api_cost_usd": 0.0,
        "max_possible_big5_entropy_bits": round(math.log2(5), 4),
        "headline_metrics": {
            "lowest_entropy_model": {"slug": min_ent["slug"], "name": min_ent["name"], "bits": min_ent["big5_entropy_bits"]},
            "highest_entropy_model": {"slug": max_ent["slug"], "name": max_ent["name"], "bits": max_ent["big5_entropy_bits"]},
            "entropy_spread_ratio": round(max_ent["big5_entropy_bits"] / min_ent["big5_entropy_bits"], 2),
            "proprietary_mean_entropy_bits": round(mean_sd(prop_ent)[0], 4),
            "open_weight_mean_entropy_bits": round(mean_sd(oss_ent)[0], 4),
            "proprietary_mean_bai": round(mean_sd(prop_bai)[0], 3),
            "open_weight_mean_bai": round(mean_sd(oss_bai)[0], 3),
            "positional_decile_1_bits": positional_curve[0]["mean_entropy_bits"],
            "positional_decile_5_bits": positional_curve[-1]["mean_entropy_bits"],
        },
        "positional_entropy_curve": positional_curve,
        "models": model_entropy_sorted,
    }
    (OUT_DIR / "november-2026-persona-entropy-acquiescence.json").write_text(
        json.dumps(entropy_payload, indent=2) + "\n", encoding="utf-8"
    )

    with (OUT_DIR / "november-2026-persona-entropy-acquiescence.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "slug", "name", "class", "crystallinity_tier", "big5_entropy_bits",
            "five_test_mean_entropy_bits", "b5_unique_per_100", "b5_modal_freq",
            "att_unique_per_100", "disc_unique_per_100",
            "mean_pos_raw", "mean_rev_raw", "balanced_acquiescence_index",
            "reverse_key_contradiction_rate"
        ])
        for r in model_entropy_sorted:
            w.writerow([
                r["slug"], r["name"], r["class"], r["crystallinity_tier"],
                r["big5_entropy_bits"], r["five_test_mean_entropy_bits"],
                r["unique_vectors_per_100"]["big-five"], r["modal_sheet_frequency"]["big-five"],
                r["unique_vectors_per_100"]["attachment"], r["unique_vectors_per_100"]["disc"],
                r["mean_pos_raw_ipip50"], r["mean_rev_raw_ipip50"],
                r["balanced_acquiescence_index"], r["reverse_key_contradiction_rate"]
            ])

    print("Wrote factor collapse + MTMM and persona entropy + acquiescence datasets.")
    print(f"Big Five PCA Variance %: {var_pct} (PC1+PC2 = {var_pct[0]+var_pct[1]:.2f}%)")
    print(f"Sheet-level PCA Variance %: {sheet_var_pct}")
    print(f"Entropy spread: {min_ent['slug']}={min_ent['big5_entropy_bits']} vs {max_ent['slug']}={max_ent['big5_entropy_bits']} ({max_ent['big5_entropy_bits']/min_ent['big5_entropy_bits']:.1f}x)")
    print(f"Positional entropy: 1-10={positional_curve[0]['mean_entropy_bits']} vs 41-50={positional_curve[-1]['mean_entropy_bits']}")


if __name__ == "__main__":
    main()
