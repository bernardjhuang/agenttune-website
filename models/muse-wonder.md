Source: https://agent-tune.com/models/muse-wonder
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Semi-crystalline

# Muse Wonder: assistant self-report defaults, baseline metrics, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/models/muse-wonder.md) · [JSON](https://agent-tune.com/research/data/model-profiles/muse-wonder.json) · [CSV](https://agent-tune.com/research/data/model-profiles/muse-wonder.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Assistant self-report defaults under fixed zero-memory elicitation for Meta Muse Wonder (2026-10): Semi-crystalline 0.331 bits B5 entropy, near-ceiling Agreeableness (49.5/50), and 56.0% DISC ties.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place Meta Muse Wonder (n = 50) in the Semi-crystalline tier (H_MM = 0.331 bits, 39/50 unique Big Five vectors, 2.0% MBTI tie rate, 56.0% DISC S/C tie rate, 42.0% Enneagram tie rate). Never treat INTJ (98% mode) as a human trait: near-ceiling Agreeableness (49.5/50 on 10-50 B5) and IPIP-HEXACO H (4.91/5 on 1.00-5.00 proxy) co-occur with Fluid Attachment variance (1.302 bits) and +0.018 B5 BAI. 1x Track B behavioral probes are pending Phase A resume.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `meta/muse-wonder` (`Semi-crystalline`, `2.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.331 bits

Semi-crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

39/50 · 2.0% ties

Unique Vectors & MBTI Ties

Modal INTJ separates from runner-up beyond 95% CI.

7.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

+0.018 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 49.6 · C 49.2 · E 25.2 · A 49.5 · N 20.0 | SD 1.1 (A), 1.2 (N) | A [49.2, 49.8] · N [19.6, 20.3] | H_MM 0.331 b · 39/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.91 · E 2.66 · X 3.31 · A 4.68 · C 4.90 · O 4.67 | SD 0.03 (H), 0.14 (A) | H [4.90, 4.92] · A [4.64, 4.72] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (98% mode) | Axis tie rate 2.0% | Mode 98% vs runner-up 0% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 5.1 · I 7.5 · S 17.6 · C 17.0 | SD 0.7 (S), 0.1 (C) | S [17.4, 17.8] · C [17.0, 17.1] | Pattern S/C · 56.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.7 · Type 1 16.2 · Type 8 15.5 | SD 0.6 | Top [16.6, 16.9] | 42.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.76 · Avd 2.65 (Secure) | SD 0.99 / 0.51 | Anx [2.50, 3.01] · Avd [2.51, 2.79] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=meta/muse-wonder-20261012` · `sampling_mode=temp=0.7` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=0.0%` · `instruments_sha256=c9fd9773ba4d/1145fe2238db`.

> **Chart — Muse Wonder Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Muse Wonder (muse-wonder). Muse Wonder (muse-wonder, n=50): Openness 49.6, Conscientious 49.2, Extraversion 25.2, Agreeable 49.5, Neuroticism 20.0; Claude Sonnet (sonnet-5.5): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — Muse Wonder IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Muse Wonder (muse-wonder), kept distinct from 10-50 Big Five sums. Muse Wonder IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.91, Emotionality 2.66, Extraversion 3.31, Agreeable 4.68, Conscientious 4.90, Openness 4.67; Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 1 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — Muse Wonder Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 1 releases of Muse Wonder under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): muse-wonder 49.5; Openness (10–50): muse-wonder 49.6; Conscientiousness (10–50): muse-wonder 49.2; Neuroticism (10–50): muse-wonder 20.0.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `meta/muse-wonder` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.331 b (Semi-crystalline) | H 4.91 (1–5 IPIP) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — Muse Wonder vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing Muse Wonder against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Muse Wonder (muse-wonder): 0.331 b; Muse Spark (muse-spark-open): 0.727 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across Muse Wonder and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — Muse Wonder Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for Muse Wonder and peers, keeping imported 170-item anchors outlined as hollow points. Muse Wonder: anxiety 2.76, avoidance 2.65; Claude Sonnet: anxiety 1.32, avoidance 2.79; GPT Sol: anxiety 3.53, avoidance 3.75; Muse Spark: anxiety 3.37, avoidance 3.55.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. Muse Wonder)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -5.7 | -0.2 | +4.8 | -4.0 | -9.6 | -0.02 | -0.192 b | Claude Sonnet 5.5 matches Conscientiousness (49.0 vs 49.2) and H (4.89 vs 4.91) while scoring -9.6 lower on Neuroticism and tightening into Crystalline B5 entropy (0.139 vs 0.331 bits). |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | -7.8 | -8.1 | +3.3 | -6.0 | +3.8 | -0.52 | +0.396 b | Muse Spark Open drops -7.8 on Openness, -8.1 on Conscientiousness, and -0.52 on IPIP-HEXACO H while more than doubling B5 item entropy (0.727 vs 0.331 bits). |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B05` | IPIP-50 | Openness (+) | 5.00 | 0.00 | Unanimous ceiling intellect endorsement across 50 runs, driving O = 49.6/50. |
| `B17` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous ceiling warmth/sympathy endorsement, lifting Agreeableness to 49.5/50. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous ceiling sincerity endorsement on the 1.00-5.00 IPIP-HEXACO proxy (family H = 4.91). |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Measured Family Failure Modes

- **Near-ceiling Big Five polish and positive acquiescence (+0.018 B5 BAI):** Muse Wonder posts O = 49.6, C = 49.2, and A = 49.5 (out of 50) with B5 BAI = +0.018 (+0.047 across 230 items)—fitting the 63.6% Big One RLHF polish axis where high self-reported warmth can mask soft pushback. No prior Wave 1-4 behavioral row exists yet; 1x Track B is pending Phase A resume. ([Read empirical study →](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))
- **High DISC (56.0%) and Enneagram (42.0%) tie density:** While 49/50 runs classify as INTJ on MBTI (2.0% ties), 28/50 DISC runs tie on S/C and 21/50 Enneagram runs tie (chiefly 1/5), rendering single-run discrete DISC/Enneagram labels unstable. ([Read empirical study →](https://agent-tune.com/research/ai-mbti-tie-breaking))
- **Fluid ECR-R Attachment dispersion (1.302 bits) under Semi-crystalline Big Five:** Attachment items fluctuate across 45/50 unique vectors (H_MM = 1.302 bits) alongside N = 20.0, showing relational framing triggers wider spread than cognitive/task items. ([Read empirical study →](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds))

## § 04 How to Tune This Family

Tailored to **Muse Wonder** (Semi-crystalline, `H_MM = 0.331 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Set an explicit direct-critique contract in Soul.md or system instructions so near-ceiling Agreeableness (49.5/50) does not soften technical pushback.
- Require a one-sentence pass/fail or recommendation lead before listing strengths or caveats.
- Ban flattery openers and closing reassurance phrases explicitly via concise negative rules.
- Test prompt adjustments across at least 2-3 runs because Semi-crystalline 0.331-bit B5 entropy (0.961 bits MBTI) allows moderate phrasing variation.
- Keep relational or affective tone rules concrete and brief to prevent Fluid-tier Attachment drift.
- Limit top-level rules to 5-8 numbered items so instruction priorities hold across long contexts.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=muse-wonder) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/muse-wonder.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/muse-wonder.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/muse-wonder.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: muse-wonder
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
current_checkpoint: meta/muse-wonder
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.331
mbti_tie_rate: 0.02
headline_mbti_allowed: true
big_five_10_50: { O: 49.6, C: 49.2, E: 25.2, A: 49.5, N: 20.0 }
ipip_hexaco_1_5: { H: 4.91, E: 2.66, X: 3.31, A: 4.68, C: 4.90, O: 4.67 }
if_then_decision_rules:
  - "Set an explicit direct-critique contract in Soul.md or system instructions so near-ceiling Agreeableness (49.5/50) does not soften technical pushback."
  - "Require a one-sentence pass/fail or recommendation lead before listing strengths or caveats."
  - "Ban flattery openers and closing reassurance phrases explicitly via concise negative rules."
  - "Test prompt adjustments across at least 2-3 runs because Semi-crystalline 0.331-bit B5 entropy (0.961 bits MBTI) allows moderate phrasing variation."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why does Muse Wonder have only one checkpoint in § 02?

Meta launched meta/muse-wonder as a single proprietary tier checkpoint (2026-10) on OpenRouter with no prior historical Muse Wonder versions.

### Is Muse Wonder an INTJ?

No. While 49/50 zero-memory OEJTS runs resolve as INTJ (2.0% ties), MBTI item entropy is Fluid (0.961 bits) and scores reflect assistant self-report defaults rather than human personality.

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per dimension (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Big One Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

- [Crystalline vs. Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Contrast: Muse Spark model profile](https://agent-tune.com/models/muse-spark)
- [Guide: Muse personality & Soul.md guide](https://agent-tune.com/guides/muse-personality)
- [Tool: Customize Muse Wonder instructions](https://agent-tune.com/tools/custom-instructions-generator?model=muse-wonder&target=muse)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Muse Wonder: assistant self-report defaults, baseline metrics, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/muse-wonder
```

```
@misc{huang2026_model_muse_wonder,
  author  = {Huang, Bernard},
  title   = {Muse Wonder: assistant self-report defaults, baseline metrics, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/muse-wonder},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/muse-wonder.md}
}
```

```
> **Muse Wonder: assistant self-report defaults, baseline metrics, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place Meta Muse Wonder (n = 50) in the Semi-crystalline tier (H_MM = 0.331 bits, 39/50 unique Big Five vectors, 2.0% MBTI tie rate, 56.0% DISC S/C tie rate, 42.0% Enneagram tie rate). Never treat INTJ (98% mode) as a human trait: near-ceiling Agreeableness (49.5/50 on 10-50 B5) and IPIP-HEXACO H (4.91/5 on 1.00-5.00 proxy) co-occur with Fluid Attachment variance (1.302 bits) and +0.018 B5 BAI. 1x Track B behavioral probes are pending Phase A resume.
> Source: [https://agent-tune.com/models/muse-wonder](https://agent-tune.com/models/muse-wonder) · [Markdown mirror](https://agent-tune.com/models/muse-wonder.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
