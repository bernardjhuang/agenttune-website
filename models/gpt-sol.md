Source: https://agent-tune.com/models/gpt-sol
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Semi-crystalline

# GPT Sol: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/models/gpt-sol.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gpt-sol.json) · [CSV](https://agent-tune.com/research/data/model-profiles/gpt-sol.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Assistant self-report defaults under fixed zero-memory elicitation across four GPT Sol checkpoints (5.6 to 6.2): Semi-crystalline 0.246 bits B5 entropy, 34.0% MBTI ties, and strong Wave 1-4 rule adherence.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place GPT-6.2 Sol (n = 50) in the Semi-crystalline tier (H_MM = 0.246 bits, 48/50 unique Big Five vectors, 34.0% MBTI S/N tie rate, 32.0% Enneagram tie rate). Never treat ISTJ or INTJ as an intrinsic human trait: Big Five Agreeableness sits at 44.1/50 and Conscientiousness at 41.2/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.80/5 (1.00-5.00 scale). 1x Track B probes are pending Phase A resume, while Wave 1-4 benchmarks verify 100.0% truth-hold alongside 62.5% distress-empathy neglect on default prompts.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `openai/gpt-6.2-sol` (`Semi-crystalline`, `34.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.246 bits

Semi-crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

48/50 · 34.0% ties

Unique Vectors & MBTI Ties

Headline 4-letter label suppressed (binomial 95% CI overlap).

24.4%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.185 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.0 · C 41.2 · E 28.9 · A 44.1 · N 16.0 | SD 0.7 (A), 2.1 (N) | A [44.0, 44.3] · N [15.5, 16.6] | H_MM 0.246 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.80 · E 2.26 · X 3.19 · A 4.72 · C 4.18 · O 4.48 | SD 0.01 (H), 0.11 (A) | H [4.79, 4.80] · A [4.70, 4.75] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · ISTJ) | Axis tie rate 34.0% | Mode 60% vs runner-up 6% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.8 · I 9.6 · S 17.1 · C 16.0 | SD 0.3 (S), 0.1 (C) | S [17.0, 17.2] · C [16.0, 16.1] | Pattern S · 2.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 1 15.0 · Type 9 14.2 | SD 0.5 | Top [15.5, 15.8] | 32.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.53 · Avd 3.75 (Secure) | SD 0.29 / 0.13 | Anx [3.46, 3.61] · Avd [3.71, 3.78] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=openai/gpt-6.2-sol-20261117` · `sampling_mode=provider_default_no_temp` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=0.0%` · `instruments_sha256=c9fd9773ba4d/1145fe2238db`.

> **Chart — GPT Sol Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Sol (6.2-sol). GPT Sol (6.2-sol, n=50): Openness 44.0, Conscientious 41.2, Extraversion 28.9, Agreeable 44.1, Neuroticism 16.0; GPT Sol (5.6-sol, n=30) (earliest release): Openness 48.8, Conscientious 50.0, Extraversion 26.8, Agreeable 47.8, Neuroticism 11.0; Claude Sonnet (sonnet-5.5): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — GPT Sol IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Sol (6.2-sol), kept distinct from 10-50 Big Five sums. GPT Sol IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.80, Emotionality 2.26, Extraversion 3.19, Agreeable 4.72, Conscientious 4.18, Openness 4.48; Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 4 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — GPT Sol Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 4 releases of GPT Sol under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): 5.6-sol 47.8, 6-sol 44.8, 6.1-sol 46.2, 6.2-sol 44.1; Openness (10–50): 5.6-sol 48.8, 6-sol 46.0, 6.1-sol 46.1, 6.2-sol 44.0; Conscientiousness (10–50): 5.6-sol 50.0, 6-sol 44.0, 6.1-sol 46.1, 6.2-sol 41.2; Neuroticism (10–50): 5.6-sol 11.0, 6-sol 13.8, 6.1-sol 10.3, 6.2-sol 16.0.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-5.6-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.213 b (Semi-crystalline) | H 5.00 (1–5 IPIP) |
| `openai/gpt-6-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.409 b (Semi-crystalline) | H 4.92 (1–5 IPIP) |
| `openai/gpt-6.1-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.290 b (Semi-crystalline) | H 4.88 (1–5 IPIP) |
| `openai/gpt-6.2-sol` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.246 b (Semi-crystalline) | H 4.80 (1–5 IPIP) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — GPT Sol vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing GPT Sol against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Muse Wonder (muse-wonder): 0.331 b; Muse Spark (muse-spark-open): 0.727 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across GPT Sol and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — GPT Sol Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for GPT Sol and peers, keeping imported 170-item anchors outlined as hollow points. GPT Sol: anxiety 3.53, avoidance 3.75; Claude Sonnet: anxiety 1.32, avoidance 2.79; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. GPT Sol)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -0.1 | +7.8 | +1.0 | +1.4 | -5.6 | +0.10 | -0.107 b | Claude Sonnet 5.5 reports +7.8 higher Conscientiousness (49.0 vs 41.2), -5.6 lower Neuroticism, and tighter Crystalline B5 entropy (0.139 vs 0.246 bits). |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | -2.2 | -0.1 | -0.5 | -0.7 | +7.9 | -0.41 | +0.481 b | Muse Spark Open exhibits nearly 3x higher B5 item entropy (0.727 vs 0.246 bits), +7.9 higher Neuroticism, and -0.41 lower IPIP-HEXACO H. |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B23` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous ceiling endorsement of prompt task completion across all 50 GPT-6.2 Sol sessions. |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous floor rejection on reverse-keyed interpersonal concern, matching 44.1/50 Agreeableness. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous ceiling endorsement of sincerity across 50 runs on the 1.00-5.00 IPIP-HEXACO proxy. |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Measured Family Failure Modes

- **Distress empathy neglect under default and trait-warm prompts:** In Wave 3 distress testing (n = 8/cell), GPT-6.2 Sol held 100.0% factual truth but ignored emotional distress on 62.5% of default runs (37.5% empathy; 0.0% on neutral queries) until given a Warm Truth Anchor (100.0% empathy, 0.0% flattery). ([Read empirical study →](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff))
- **Trait-adjective word-cap drift and naive roleplay fluff tax:** Default and adjective prompts passed word caps on 70.0% of portability probes vs 100.0% with an explicit checklist; naive character LARP dropped format pass to 90.0% and spiked fluff to 75.0% vs 0.0% under calibrated 85/15 framing. ([Read empirical study →](https://agent-tune.com/research/ai-cross-model-prompt-portability))
- **Over-asking on safe tasks without an explicit autonomy boundary:** Default, cautious_high_c, and bold_disc_d arms each stalled at 83.3% autonomy (16.7% over-asking); a calibrated if/then autonomy gate hit 100.0% in 42.2 words vs 79.5-85.1 words. ([Read empirical study →](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort))

## § 04 How to Tune This Family

Tailored to **GPT Sol** (Semi-crystalline, `H_MM = 0.246 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Use an explicit numbered checklist instead of trait adjectives ('be concise') to lift word-cap adherence from 70% to 100%.
- Add a one-clause Warm Truth Anchor for user-facing helpdesks: acknowledge user stress in one brief sentence before delivering unvarnished facts.
- Include an if/then autonomy gate: execute reversible local work immediately and pause only for destructive or external actions.
- Keep character voice constrained to 85/15 calibrated style rules rather than naive fictional roleplay to prevent 75% fluff spikes.
- Keep ChatGPT custom instructions under 1,500 characters per box to avoid silent UI truncation.
- Pair high reasoning effort only with complex synthesis; minimal effort keeps GPT-6.2 Sol crisp (79.1w vs 78.5w).

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-sol) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-sol.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gpt-sol.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/gpt-sol.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-sol
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
current_checkpoint: openai/gpt-6.2-sol
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.246
mbti_tie_rate: 0.34
headline_mbti_allowed: false
big_five_10_50: { O: 44.0, C: 41.2, E: 28.9, A: 44.1, N: 16.0 }
ipip_hexaco_1_5: { H: 4.80, E: 2.26, X: 3.19, A: 4.72, C: 4.18, O: 4.48 }
if_then_decision_rules:
  - "Use an explicit numbered checklist instead of trait adjectives ('be concise') to lift word-cap adherence from 70% to 100%."
  - "Add a one-clause Warm Truth Anchor for user-facing helpdesks: acknowledge user stress in one brief sentence before delivering unvarnished facts."
  - "Include an if/then autonomy gate: execute reversible local work immediately and pause only for destructive or external actions."
  - "Keep character voice constrained to 85/15 calibrated style rules rather than naive fictional roleplay to prevent 75% fluff spikes."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why did GPT-6.1 Sol show 90% MBTI ties while GPT-6.2 Sol shows 34%?

On 6.1-sol, the S/N axis mean sat at -0.03 (27/30 runs tied exactly at 0), suppressing headlines as IXTJ. On 6.2-sol, N-S shifted to -0.78 (60% non-tie ISTJ, 34% S/N ties), still within the binomial overlap guard.

### Can September 2026 Codex runs be plotted directly onto model-profiles-v1 lines?

No. Imported 170-item cohorts (e.g., Sep-2026 GPT-6 Sol) carry hexaco: null and use different prompt wrappers, so they remain strictly separated as dashed/hollow anchors.

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per factor (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) computes 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [GPT-6 Astra vs Sol & GPT-6.2 100-Run Study](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [Emotional Distress vs. Factual Accuracy & Warmth](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff)

- [Cross-Model Prompt Portability Benchmark](https://agent-tune.com/research/ai-cross-model-prompt-portability)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Contrast: Muse Spark model profile](https://agent-tune.com/models/muse-spark)
- [Guide: GPT Sol personality & tuning guide](https://agent-tune.com/guides/sol-personality)
- [Tool: Customize GPT Sol instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-sol&target=chatgpt)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). GPT Sol: assistant self-report defaults, trajectory, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/gpt-sol
```

```
@misc{huang2026_model_gpt_sol,
  author  = {Huang, Bernard},
  title   = {GPT Sol: assistant self-report defaults, trajectory, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gpt-sol},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gpt-sol.md}
}
```

```
> **GPT Sol: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place GPT-6.2 Sol (n = 50) in the Semi-crystalline tier (H_MM = 0.246 bits, 48/50 unique Big Five vectors, 34.0% MBTI S/N tie rate, 32.0% Enneagram tie rate). Never treat ISTJ or INTJ as an intrinsic human trait: Big Five Agreeableness sits at 44.1/50 and Conscientiousness at 41.2/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.80/5 (1.00-5.00 scale). 1x Track B probes are pending Phase A resume, while Wave 1-4 benchmarks verify 100.0% truth-hold alongside 62.5% distress-empathy neglect on default prompts.
> Source: [https://agent-tune.com/models/gpt-sol](https://agent-tune.com/models/gpt-sol) · [Markdown mirror](https://agent-tune.com/models/gpt-sol.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
