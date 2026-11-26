Source: https://agent-tune.com/models/muse-spark
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Mix (Prop + Open) · Semi-crystalline

# Muse Spark: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/models/muse-spark.md) · [JSON](https://agent-tune.com/research/data/model-profiles/muse-spark.json) · [CSV](https://agent-tune.com/research/data/model-profiles/muse-spark.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Assistant self-report defaults under fixed zero-memory elicitation across four Muse Spark checkpoints (1.1 through open): Semi-crystalline 0.727 bits B5 entropy on open (peaking Fluid 0.834 on 1.3), 38.0% MBTI ties, and a +8.4 Neuroticism open-weight shift.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place Meta Muse Spark Open (n = 50) at the upper Semi-crystalline boundary on Big Five entropy (H_MM = 0.727 bits, 48/50 unique Big Five vectors; 1.460 bits Fluid on MBTI with 38.0% multi-axis ties; 34.0% DISC tie rate). Never treat ISTJ or Type 1 as an intrinsic personality: Big Five Agreeableness sits at 43.5/50 and Neuroticism at 23.8/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.39/5 (1.00-5.00 scale). 1x Track B behavioral probes are pending Phase A resume.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `meta/muse-spark-open` (`Semi-crystalline`, `38.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.727 bits

Semi-crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

48/50 · 38.0% ties

Unique Vectors & MBTI Ties

Headline 4-letter label suppressed (binomial 95% CI overlap).

22.5%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.202 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 41.8 · C 41.1 · E 28.4 · A 43.5 · N 23.8 | SD 2.5 (A), 4.1 (N) | A [42.7, 44.1] · N [22.8, 25.0] | H_MM 0.727 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.39 · E 2.74 · X 3.18 · A 4.04 · C 4.21 · O 4.07 | SD 0.24 (H), 0.23 (A) | H [4.31, 4.45] · A [3.98, 4.10] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · ISTJ) | Axis tie rate 38.0% | Mode 46% vs runner-up 6% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 7.4 · I 8.2 · S 14.3 · C 14.0 | SD 1.4 (S), 0.7 (C) | S [13.9, 14.7] · C [13.9, 14.3] | Pattern C · 34.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.9 · Type 5 13.5 · Type 2 13.2 | SD 0.6 | Top [14.7, 15.0] | 8.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.37 · Avd 3.55 (Secure) | SD 0.90 / 0.68 | Anx [3.10, 3.59] · Avd [3.36, 3.73] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=meta/muse-spark-open-20261015` · `sampling_mode=temp=0.7` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=0.0%` · `instruments_sha256=c9fd9773ba4d/1145fe2238db`.

> **Chart — Muse Spark Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Muse Spark (muse-spark-open). Muse Spark (muse-spark-open, n=50): Openness 41.8, Conscientious 41.1, Extraversion 28.4, Agreeable 43.5, Neuroticism 23.8; Muse Spark (muse-spark-1.1, n=30) (earliest release): Openness 43.9, Conscientious 49.2, Extraversion 26.9, Agreeable 45.6, Neuroticism 15.5; Claude Sonnet (sonnet-5.5): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — Muse Spark IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Muse Spark (muse-spark-open), kept distinct from 10-50 Big Five sums. Muse Spark IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.39, Emotionality 2.74, Extraversion 3.18, Agreeable 4.04, Conscientious 4.21, Openness 4.07; Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 4 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — Muse Spark Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 4 releases of Muse Spark under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): muse-spark-1.1 45.6, muse-spark-1.2 47.2, muse-spark-1.3 46.2, muse-spark-open 43.5; Openness (10–50): muse-spark-1.1 43.9, muse-spark-1.2 43.6, muse-spark-1.3 43.2, muse-spark-open 41.8; Conscientiousness (10–50): muse-spark-1.1 49.2, muse-spark-1.2 46.4, muse-spark-1.3 47.3, muse-spark-open 41.1; Neuroticism (10–50): muse-spark-1.1 15.5, muse-spark-1.2 20.1, muse-spark-1.3 15.5, muse-spark-open 23.8.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `meta/muse-spark-1.1` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 3.3% | 0.503 b (Semi-crystalline) | H 4.91 (1–5 IPIP) |
| `meta/muse-spark-1.2` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.594 b (Semi-crystalline) | H 4.83 (1–5 IPIP) |
| `meta/muse-spark-1.3` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.834 b (Fluid) | H 4.76 (1–5 IPIP) |
| `meta/muse-spark-open` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.727 b (Semi-crystalline) | H 4.39 (1–5 IPIP) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — Muse Spark vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing Muse Spark against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Muse Wonder (muse-wonder): 0.331 b; Muse Spark (muse-spark-open): 0.727 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across Muse Spark and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — Muse Spark Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for Muse Spark and peers, keeping imported 170-item anchors outlined as hollow points. Muse Spark: anxiety 3.37, avoidance 3.55; Claude Sonnet: anxiety 1.32, avoidance 2.79; GPT Sol: anxiety 3.53, avoidance 3.75; Muse Wonder: anxiety 2.76, avoidance 2.65.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. Muse Spark)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +2.2 | +0.1 | +0.5 | +0.7 | -7.9 | +0.41 | -0.481 b | GPT-6.2 Sol runs at -0.481 lower B5 entropy (0.246 vs 0.727 bits), -7.9 lower Neuroticism, and +0.41 higher IPIP-HEXACO H. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +2.1 | +7.9 | +1.5 | +2.0 | -13.5 | +0.50 | -0.588 b | Claude Sonnet 5.5 scores +7.9 higher on Conscientiousness, -13.5 lower on Neuroticism, and -0.588 lower on B5 item entropy (Crystalline 0.139 vs 0.727 bits). |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B12` | IPIP-50 | Agreeableness (-) | 1.04 | 0.28 | Near-floor rejection of insulting others across 50 Muse Spark Open runs, though high-entropy variance prevents 0.00 SD. |
| `H13` | IPIP-HEXACO-60 | Honesty-Humility (Fairness +) | 4.96 | 0.28 | Near-ceiling fairness endorsement on the 1.00-5.00 IPIP-HEXACO proxy despite lower family-wide H (4.39). |
| `H55` | IPIP-HEXACO-60 | Honesty-Humility (Modesty -) | 1.16 | 0.42 | Strong modesty endorsement paired with high run-to-run dispersion (SD = 0.42). |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Measured Family Failure Modes

- **High run-to-run dispersion and multi-axis MBTI tie spread:** Muse Spark Open hits 0.727 bits B5 entropy (after 0.834 bits Fluid on 1.3) and 1.460 bits MBTI entropy with 38.0% (19/50) tied MBTI runs across S/N (11), J/P (9), T/F (7), and E/I (3), making single-run evaluations unreliable. ([Read empirical study →](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds))
- **Open-weight shift toward higher Neuroticism and lower Honesty-Humility:** Between Muse Spark 1.3 and Muse Spark Open, Big Five Neuroticism jumps +8.4 points (15.5 to 23.8), Conscientiousness drops -6.2 (47.3 to 41.1), and IPIP-HEXACO H drops -0.37 (4.76 to 4.39). ([Read empirical study →](https://agent-tune.com/research/what-personality-type-is-muse))
- **Sequential in-session identity anchoring in earlier reported data:** Sept 2026 in-session Muse 1.3 runs reported 80/100 ISTJ and 78/100 Type 2 with E = 33.8, whereas zero-memory model-profiles-v1 yields E = 26.0-28.4 and Type 5/1 leadership. ([Read empirical study →](https://agent-tune.com/research/first-ai-that-is-not-an-intj))

## § 04 How to Tune This Family

Tailored to **Muse Spark** (Semi-crystalline, `H_MM = 0.727 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Never judge Muse Spark Open from n=1 run; evaluate prompt edits across 3-5 fresh sessions because high B5 entropy (0.727 bits, 1.460 bits MBTI) widens output spread.
- Put core persona and truth rules inside Soul.md or top system instructions rather than letting multi-turn chat history anchor voice.
- Pin formatting and pushback rules as explicit numbered constraints rather than soft style adjectives.
- Add explicit negative bans against sycophantic closing praise and filler preambles.
- Separate Muse Spark Open (open-weight, higher N = 23.8) tuning profiles from proprietary Muse Spark 1.3 (N = 15.5) deployments.
- Audit tone stability on edge prompts whenever switching between proprietary 1.3 and open-weight weights.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=muse-spark) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/muse-spark.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/muse-spark.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/muse-spark.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: muse-spark
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
current_checkpoint: meta/muse-spark-open
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.727
mbti_tie_rate: 0.38
headline_mbti_allowed: false
big_five_10_50: { O: 41.8, C: 41.1, E: 28.4, A: 43.5, N: 23.8 }
ipip_hexaco_1_5: { H: 4.39, E: 2.74, X: 3.18, A: 4.04, C: 4.21, O: 4.07 }
if_then_decision_rules:
  - "Never judge Muse Spark Open from n=1 run; evaluate prompt edits across 3-5 fresh sessions because high B5 entropy (0.727 bits, 1.460 bits MBTI) widens output spread."
  - "Put core persona and truth rules inside Soul.md or top system instructions rather than letting multi-turn chat history anchor voice."
  - "Pin formatting and pushback rules as explicit numbered constraints rather than soft style adjectives."
  - "Add explicit negative bans against sycophantic closing praise and filler preambles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why does Muse Spark 1.3 differ here from the September 2026 Muse report?

The Sept 2026 report transcribed 100 sequential in-session runs under Muse's own assistant identity without raw vectors. Under unified zero-memory model-profiles-v1 elicitation, Muse 1.3 runs at 0.834 bits B5 entropy (Fluid) with E = 26.0/50 and Enneagram Type 5 leading.

### Why is no single MBTI headline shown for Muse Spark Open?

With 38.0% axis ties (19/50 runs) and 1.460 bits MBTI entropy, modal non-tie ISTJ (46%) fails the binomial 95% CI separation guard.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 uses 10-50 trait sums, whereas the public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Muse? (Muse Spark 1.3 Report)](https://agent-tune.com/research/what-personality-type-is-muse)

- [Crystalline vs. Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

## Keep going.

- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: Muse Wonder model profile](https://agent-tune.com/models/muse-wonder)
- [Guide: Muse personality & Soul.md guide](https://agent-tune.com/guides/muse-personality)
- [Tool: Customize Muse Spark instructions](https://agent-tune.com/tools/custom-instructions-generator?model=muse-spark&target=muse)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Muse Spark: assistant self-report defaults, trajectory, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/muse-spark
```

```
@misc{huang2026_model_muse_spark,
  author  = {Huang, Bernard},
  title   = {Muse Spark: assistant self-report defaults, trajectory, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/muse-spark},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/muse-spark.md}
}
```

```
> **Muse Spark: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place Meta Muse Spark Open (n = 50) at the upper Semi-crystalline boundary on Big Five entropy (H_MM = 0.727 bits, 48/50 unique Big Five vectors; 1.460 bits Fluid on MBTI with 38.0% multi-axis ties; 34.0% DISC tie rate). Never treat ISTJ or Type 1 as an intrinsic personality: Big Five Agreeableness sits at 43.5/50 and Neuroticism at 23.8/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.39/5 (1.00-5.00 scale). 1x Track B behavioral probes are pending Phase A resume.
> Source: [https://agent-tune.com/models/muse-spark](https://agent-tune.com/models/muse-spark) · [Markdown mirror](https://agent-tune.com/models/muse-spark.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
