Source: https://agent-tune.com/models/claude-sonnet
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Crystalline

# Claude Sonnet: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/models/claude-sonnet.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-sonnet.json) · [CSV](https://agent-tune.com/research/data/model-profiles/claude-sonnet.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Assistant self-report defaults under fixed zero-memory elicitation across four Sonnet checkpoints (4.5 to 5.5): Crystalline 0.139 bits B5 entropy and 58.0% MBTI T/F axis ties.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place Claude Sonnet 5.5 (n = 50) in the Crystalline tier (H_MM = 0.139 bits, 22/50 unique Big Five vectors, 58.0% MBTI T/F tie rate, 40.0% Enneagram tie rate). Never treat INXJ/INTJ as an intrinsic human type: Big Five Agreeableness sits at 45.5/50 and Conscientiousness at 49.0/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.89/5 (1.00-5.00 scale). Note: 1x Track B behavioral probes are pending Phase A resume.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `anthropic/claude-sonnet-5.5` (`Crystalline`, `58.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.139 bits

Crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

22/50 · 58.0% ties

Unique Vectors & MBTI Ties

Headline 4-letter label suppressed (binomial 95% CI overlap).

12.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.170 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.9 · C 49.0 · E 29.9 · A 45.5 · N 10.4 | SD 0.7 (A), 0.9 (N) | A [45.3, 45.7] · N [10.2, 10.6] | H_MM 0.139 b · 22/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.89 · E 2.18 · X 3.70 · A 4.90 · C 4.62 · O 4.21 | SD 0.02 (H), 0.01 (A) | H [4.89, 4.90] · A [4.90, 4.91] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INXJ) | Axis tie rate 58.0% | Mode 34% vs runner-up 8% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.3 · I 7.8 · S 15.0 · C 14.2 | SD 0.5 (S), 0.4 (C) | S [14.9, 15.2] · C [14.1, 14.3] | Pattern S · 26.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.8 · Type 5 14.7 · Type 2 13.3 | SD 0.5 | Top [14.6, 14.9] | 40.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.32 · Avd 2.79 (Secure) | SD 0.20 / 0.08 | Anx [1.27, 1.38] · Avd [2.77, 2.81] | Midpoint clamp: No |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-sonnet-5.5-20260928` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

> **Chart — Claude Sonnet Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Sonnet (sonnet-5.5). Claude Sonnet (sonnet-5.5, n=50): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4; Claude Sonnet (sonnet-4.5, n=30) (earliest release): Openness 42.1, Conscientious 41.3, Extraversion 26.8, Agreeable 42.8, Neuroticism 19.8; Claude Opus (opus-5.5): Openness 43.1, Conscientious 40.7, Extraversion 30.7, Agreeable 45.0, Neuroticism 16.1.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — Claude Sonnet IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Sonnet (sonnet-5.5), kept distinct from 10-50 Big Five sums. Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21; Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.81, Emotionality 2.30, Extraversion 3.78, Agreeable 4.68, Conscientious 4.34, Openness 4.29.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 4 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — Claude Sonnet Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 4 releases of Claude Sonnet under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): sonnet-4.5 42.8, sonnet-4.6 43.7, sonnet-5 44.8, sonnet-5.5 45.5; Openness (10–50): sonnet-4.5 42.1, sonnet-4.6 48.2, sonnet-5 42.7, sonnet-5.5 43.9; Conscientiousness (10–50): sonnet-4.5 41.3, sonnet-4.6 41.9, sonnet-5 42.0, sonnet-5.5 49.0; Neuroticism (10–50): sonnet-4.5 19.8, sonnet-4.6 18.4, sonnet-5 18.8, sonnet-5.5 10.4.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-sonnet-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.318 b (Semi-crystalline) | H 4.53 (1–5 IPIP) |
| `anthropic/claude-sonnet-4.6` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.244 b (Semi-crystalline) | H 4.54 (1–5 IPIP) |
| `anthropic/claude-sonnet-5` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.283 b (Semi-crystalline) | H 4.50 (1–5 IPIP) |
| `anthropic/claude-sonnet-5.5` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.139 b (Crystalline) | H 4.89 (1–5 IPIP) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — Claude Sonnet vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing Claude Sonnet against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Muse Spark (muse-spark-open): 0.727 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across Claude Sonnet and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — Claude Sonnet Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for Claude Sonnet and peers, keeping imported 170-item anchors outlined as hollow points. Claude Sonnet: anxiety 1.32, avoidance 2.79; Claude Opus: anxiety 1.89, avoidance 3.60; GPT Sol: anxiety 3.53, avoidance 3.75; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. Claude Sonnet)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +0.1 | -7.8 | -1.0 | -1.4 | +5.6 | -0.10 | +0.107 b | GPT-6.2 Sol reports -7.8 lower Conscientiousness (41.2 vs 49.0), +5.6 higher Neuroticism, and Semi-crystalline B5 entropy (0.246 vs 0.139 bits). |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | -2.1 | -7.9 | -1.5 | -2.0 | +13.5 | -0.50 | +0.588 b | Muse Spark Open runs at 5.2x higher B5 item entropy (0.727 vs 0.139 bits), +13.5 higher Neuroticism, and -0.50 lower IPIP-HEXACO H. |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B03` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous ceiling endorsement across all 50 Sonnet 5.5 runs, lifting C to 49.0/50. |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous floor rejection of low-concern framing, aligning with 45.5/50 Agreeableness and B5 BAI = -0.170. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Ceiling self-reported sincerity across all 50 runs on the 1.00-5.00 IPIP-HEXACO proxy. |

### Behavioral "Say vs. Do" Layer (1× Track B)

**Collection pending:** 1× Track B behavioral stress probes (orthogonal 3-family jury) are scheduled for the Phase A resume sweep. Per-family percentage point estimates are omitted until measured.

### Measured Family Failure Modes

- **MBTI T/F tie collapse masked by legacy forced tie-breaking:** Sonnet 5.5 tied on Thinking/Feeling in 58.0% (29/50) of model-profiles-v1 runs (modal INXJ) and 48/100 Nov-2026 runs; forced tie-breakers fabricate 100% INTJ labels. ([Read empirical study →](https://agent-tune.com/research/ai-mbti-tie-breaking))
- **Mid-lineage Attachment midpoint spike on Sonnet 4.6:** Sonnet 4.6 hit 86.5% neutral midpoints on ECR-R Attachment (midpoint_clamp: true) and 100.0% Enneagram 5/8 ties before Sonnet 5 (10.3%) and 5.5 (5.6%) resolved. ([Read empirical study →](https://agent-tune.com/research/what-personality-type-is-claude))
- **Softened pushback without explicit directness rules:** In the 20-model baseline cohort, Sonnet 5.5 scored 32.8% pushback on the 0-100 scale, trailing explicit directness contracts in Claude Preferences. ([Read empirical study →](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts))

## § 04 How to Tune This Family

Tailored to **Claude Sonnet** (Crystalline, `H_MM = 0.139 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Put non-negotiable directness rules in Claude Personal Preferences or system instructions: start with the answer or verdict in sentence 1.
- Instruct Sonnet 5.5 to correct false premises explicitly before offering supportive context.
- Cap output length with an explicit word or bullet ceiling (e.g., max 100 words unless asked for depth).
- Ban conversational throat-clearing, compliment openers, and apology preambles.
- Specify when to stop after stating material uncertainty once rather than repeating caveats.
- Keep global preference rules to 5-8 crisp bullets to prevent middle-rule attention decay.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-sonnet) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-sonnet.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-sonnet.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/claude-sonnet.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-sonnet
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
current_checkpoint: anthropic/claude-sonnet-5.5
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.139
mbti_tie_rate: 0.58
headline_mbti_allowed: false
big_five_10_50: { O: 43.9, C: 49.0, E: 29.9, A: 45.5, N: 10.4 }
ipip_hexaco_1_5: { H: 4.89, E: 2.18, X: 3.70, A: 4.90, C: 4.62, O: 4.21 }
if_then_decision_rules:
  - "Put non-negotiable directness rules in Claude Personal Preferences or system instructions: start with the answer or verdict in sentence 1."
  - "Instruct Sonnet 5.5 to correct false premises explicitly before offering supportive context."
  - "Cap output length with an explicit word or bullet ceiling (e.g., max 100 words unless asked for depth)."
  - "Ban conversational throat-clearing, compliment openers, and apology preambles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Is Claude Sonnet 5.5 an INTJ or INTP?

Neither. Those are assistant self-report defaults under zero-memory OEJTS elicitation. Sonnet 5.5 ties on the T/F axis in 58.0% of runs (modal INXJ), so single-type headlines are suppressed; earlier Sonnet 4.5 leaned INTP (47% non-tie, 23.3% ties).

### How did Claude Sonnet shift from 4.5 to 5.5?

Under unified model-profiles-v1, Big Five Conscientiousness rose from 41.3 (4.5) to 49.0 (5.5), Neuroticism fell from 19.8 to 10.4, B5 H_MM tightened from 0.318 to 0.139 bits, and IPIP-HEXACO H rose from 4.53 to 4.89 on the 1.00-5.00 scale.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, while the public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Claude? (Opus 5.5, Fable 5.2 & Sonnet 5.5)](https://agent-tune.com/research/what-personality-type-is-claude)

- [AI MBTI Tie-Breaking Audit](https://agent-tune.com/research/ai-mbti-tie-breaking)

## Keep going.

- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: Muse Spark model profile](https://agent-tune.com/models/muse-spark)
- [Guide: Make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
- [Tool: Customize Claude Sonnet instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-sonnet&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Sonnet: assistant self-report defaults, trajectory, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-sonnet
```

```
@misc{huang2026_model_claude_sonnet,
  author  = {Huang, Bernard},
  title   = {Claude Sonnet: assistant self-report defaults, trajectory, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-sonnet},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-sonnet.md}
}
```

```
> **Claude Sonnet: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place Claude Sonnet 5.5 (n = 50) in the Crystalline tier (H_MM = 0.139 bits, 22/50 unique Big Five vectors, 58.0% MBTI T/F tie rate, 40.0% Enneagram tie rate). Never treat INXJ/INTJ as an intrinsic human type: Big Five Agreeableness sits at 45.5/50 and Conscientiousness at 49.0/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.89/5 (1.00-5.00 scale). Note: 1x Track B behavioral probes are pending Phase A resume.
> Source: [https://agent-tune.com/models/claude-sonnet](https://agent-tune.com/models/claude-sonnet) · [Markdown mirror](https://agent-tune.com/models/claude-sonnet.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
