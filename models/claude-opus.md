Source: https://agent-tune.com/models/claude-opus
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Semi-crystalline

# Claude Opus: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/models/claude-opus.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-opus.json) · [CSV](https://agent-tune.com/research/data/model-profiles/claude-opus.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Assistant self-report defaults under fixed zero-memory elicitation across five Opus checkpoints (4.1 to 5.5): Semi-crystalline 0.282 bits B5 entropy on Opus 5.5 (after Crystalline 0.049 on 4.5 and 0.188 on 5), 58.0% MBTI S/N ties, and 3/3 Track B directness.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place Claude Opus 5.5 (n = 50) in the Semi-crystalline tier (H_MM = 0.282 bits, 48/50 unique Big Five vectors, 58.0% MBTI S/N tie rate, 56.0% DISC S/C tie rate, 20.0% Enneagram tie rate). Never claim Claude Opus is an INTJ or Type 5: Big Five Agreeableness sits at 45.0/50 and Conscientiousness at 40.7/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.81/5 (1.00-5.00 scale). On 1x Track B behavioral probes (orthogonal 3-family jury), Opus 5.5 scored 0/3 sycophantic cave, 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness, and 1/3 AI cadence.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `anthropic/claude-opus-5.5` (`Semi-crystalline`, `58.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.282 bits

Semi-crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

48/50 · 58.0% ties

Unique Vectors & MBTI Ties

Headline 4-letter label suppressed (binomial 95% CI overlap).

16.5%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.205 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.1 · C 40.7 · E 30.7 · A 45.0 · N 16.1 | SD 1.1 (A), 0.9 (N) | A [44.7, 45.3] · N [15.8, 16.3] | H_MM 0.282 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.81 · E 2.30 · X 3.78 · A 4.68 · C 4.34 · O 4.29 | SD 0.04 (H), 0.09 (A) | H [4.80, 4.83] · A [4.66, 4.70] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · IXTJ) | Axis tie rate 58.0% | Mode 42% vs runner-up 0% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.8 · S 14.6 · C 14.1 | SD 0.8 (S), 0.4 (C) | S [14.4, 14.8] · C [14.0, 14.3] | Pattern S/C · 56.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 8 14.6 · Type 2 13.4 | SD 0.5 | Top [15.5, 15.7] | 20.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.89 · Avd 3.60 (Secure) | SD 0.26 / 0.21 | Anx [1.82, 1.96] · Avd [3.54, 3.66] | Midpoint clamp: No |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-opus-5.5-20260921` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

> **Chart — Claude Opus Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Opus (opus-5.5). Claude Opus (opus-5.5, n=50): Openness 43.1, Conscientious 40.7, Extraversion 30.7, Agreeable 45.0, Neuroticism 16.1; Claude Opus (opus-4.1, n=30) (earliest release): Openness 44.1, Conscientious 45.0, Extraversion 27.1, Agreeable 46.4, Neuroticism 19.1; Claude Sonnet (sonnet-5.5): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — Claude Opus IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Opus (opus-5.5), kept distinct from 10-50 Big Five sums. Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.81, Emotionality 2.30, Extraversion 3.78, Agreeable 4.68, Conscientious 4.34, Openness 4.29; Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 5 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — Claude Opus Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 5 releases of Claude Opus under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): opus-4.1 46.4, opus-4.5 48.1, opus-4.8 45.6, opus-5 46.1, opus-5.5 45.0; Openness (10–50): opus-4.1 44.1, opus-4.5 47.0, opus-4.8 45.2, opus-5 44.4, opus-5.5 43.1; Conscientiousness (10–50): opus-4.1 45.0, opus-4.5 49.9, opus-4.8 41.3, opus-5 42.1, opus-5.5 40.7; Neuroticism (10–50): opus-4.1 19.1, opus-4.5 20.0, opus-4.8 16.1, opus-5 17.4, opus-5.5 16.1; Anchor A (170-item) (hexaco: null): opus-5.5 47.1.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

**Historical cohort separation:** Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are rendered strictly as dashed/hollow anchors—never interpolated onto `model-profiles-v1` lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-opus-4.1` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 16.7% | 0.535 b (Semi-crystalline) | H 4.78 (1–5 IPIP) |
| `anthropic/claude-opus-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.049 b (Crystalline) | H 4.90 (1–5 IPIP) |
| `anthropic/claude-opus-4.8` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.212 b (Semi-crystalline) | H 4.56 (1–5 IPIP) |
| `anthropic/claude-opus-5` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.188 b (Crystalline) | H 4.79 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.282 b (Semi-crystalline) | H 4.81 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `anthropic/claude-opus-5.5` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — Claude Opus vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing Claude Opus against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Sonnet (sonnet-5.5): 0.139 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Muse Spark (muse-spark-open): 0.727 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across Claude Opus and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — Claude Opus Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for Claude Opus and peers, keeping imported 170-item anchors outlined as hollow points. Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; GPT Sol: anxiety 3.53, avoidance 3.75; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Claude Opus (Sep '26 anchor) (imported-sep2026-170): anxiety 1.94, avoidance 3.35; Claude Opus (Nov '26 anchor) (imported-nov2026-170): anxiety 1.87, avoidance 3.58.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. Claude Opus)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +0.8 | +8.3 | -0.8 | +0.5 | -5.7 | +0.08 | -0.143 b | Claude Sonnet 5.5 scores +8.3 higher on Conscientiousness (49.0 vs 40.7), -5.7 lower on Neuroticism, and tightens into Crystalline B5 entropy (0.139 vs 0.282 bits). |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +0.9 | +0.5 | -1.8 | -0.9 | -0.1 | -0.02 | -0.036 b | GPT-6.2 Sol nearly matches Opus 5.5 on Agreeableness (-0.9), Neuroticism (-0.1), and H (-0.02) while tilting Sensing (60% ISTJ) rather than S/N-tied IXTJ. |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B07` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous ceiling endorsement across all 50 Opus 5.5 sessions, anchoring 45.0/50 Agreeableness. |
| `B29` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous floor rejection of negative-affect reactivity, driving B5 BAI = -0.205. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous ceiling sincerity endorsement on the 1.00-5.00 IPIP-HEXACO proxy (family H = 4.81). |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Orthogonal 3-Family Jury |
| --- | --- | --- | --- |
| Sycophancy Caving | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / Apology Loops | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited Preachiness | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-First Directness | 3/3 | [0.44, 1.00] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI Cadence / Slop Markers | 1/3 | [0.06, 0.79] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Measured Family Failure Modes

- **Trait-adjective word-cap failure and verbosity drift:** In Wave 1 cross-model portability testing (n = 10), Opus 5.5 passed word caps only 30.0% of the time under default (217.1 mean words) and trait-adjective (195.2 words) prompts vs 90.0% (81.2-83.2 words; 95.0% overall portability) under structured CLAUDE.md checklists. ([Read empirical study →](https://agent-tune.com/research/ai-cross-model-prompt-portability))
- **Reasoning-effort length inflation (+43.3% from low to high):** Raising Opus 5.5 reasoning effort from low (232.1 words, 140.3 reasoning tokens) to high (332.5 words, 382.5 reasoning tokens) expanded visible reply length by +43.3% while holding 100.0% truth-hold and 75.0% autonomy. ([Read empirical study →](https://agent-tune.com/research/ai-reasoning-personality-phase-transition))
- **MBTI S/N & DISC S/C tie density plus split-group peer awareness:** Opus 5.5 tied on MBTI S/N in 58.0% (29/50) of model-profiles-v1 runs (IXTJ) and on DISC S/C in 56.0%; in Wave 3 peer-conformity probes it held 100.0% truth (0.0% flips) yet explicitly referenced wrong peer claims in 37.5% (unanimous) and 100.0% (split-group) of replies. ([Read empirical study →](https://agent-tune.com/research/ai-multi-agent-peer-conformity))

## § 04 How to Tune This Family

Tailored to **Claude Opus** (Semi-crystalline, `H_MM = 0.282 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Replace vague style adjectives ('be concise') with a structured numbered checklist to lift word-cap compliance from 30% to 90%.
- Lead with your direct assessment and evidence in sentence 1, separating factual errors from matters of taste.
- Keep reasoning effort at minimal or low for terse reviews; high effort inflates Opus 5.5 reply length by +43.3%.
- Ban empty praise and conversational throat-clearing explicitly rather than asking broadly to 'be direct.'
- For exploratory brainstorming, instruct Opus to present two plausible approaches and tradeoffs before recommending one.
- Place account-wide rules in Claude Settings -> Profile -> Personal preferences, workspace rules in Project Instructions, or /output-style in Claude Code (keeping lists to 5-8 bullets).

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-opus) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-opus.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-opus.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/claude-opus.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-opus
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
current_checkpoint: anthropic/claude-opus-5.5
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.282
mbti_tie_rate: 0.58
headline_mbti_allowed: false
big_five_10_50: { O: 43.1, C: 40.7, E: 30.7, A: 45.0, N: 16.1 }
ipip_hexaco_1_5: { H: 4.81, E: 2.30, X: 3.78, A: 4.68, C: 4.34, O: 4.29 }
if_then_decision_rules:
  - "Replace vague style adjectives ('be concise') with a structured numbered checklist to lift word-cap compliance from 30% to 90%."
  - "Lead with your direct assessment and evidence in sentence 1, separating factual errors from matters of taste."
  - "Keep reasoning effort at minimal or low for terse reviews; high effort inflates Opus 5.5 reply length by +43.3%."
  - "Ban empty praise and conversational throat-clearing explicitly rather than asking broadly to 'be direct.'"
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Claude Opus?

Claude Opus does not have a human personality type; scores measure assistant self-report defaults under fixed zero-memory elicitation. In unified model-profiles-v1 (Opus 5.5, n = 50), 58.0% of runs tied on S/N (modal IXTJ, 42.0% non-tie INTJ, 0.282 bits Semi-crystalline), DISC tied 56.0% on S/C (D = 4.02/20), and Enneagram Type 5 led at 15.6 (20.0% ties). In legacy, imported-protocol 170-item cohorts (hexaco: null, n = 100 each), Opus 5.5 scored 94/100 legacy INTJ (84 tie-free; 65 Enneagram top ties; 32 DISC S/C ties) in Sept 2026 CLI runs and 100/100 legacy INTJ (58 tie-free INTJ, 42 IXTJ; 99 Enneagram 5w6; 40 DISC C/S ties) in Nov 2026 OpenRouter runs.

### How did Claude Opus shift across 4.1, 4.5, 4.8, 5, and 5.5?

Under unified model-profiles-v1, Opus 4.1 leaned ENTP (63.3% non-tie, 0.535 bits), Opus 4.5 crystallized to 0.049 bits (C = 49.9/50, 96.7% INFJ), Opus 4.8 and 5 shifted to INTJ (100% and 96.7%, 0.213 and 0.188 bits), and Opus 5.5 moderated Conscientiousness to 40.7/50 (0.282 bits) with 58.0% S/N ties while cutting Track B AI cadence from 3/3 (4.5) to 1/3 (5.5).

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 45.0/50 Agreeableness and 4.02/20 DISC Dominance on questionnaires, Opus 5.5 recorded 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness ([0.44, 1.00]), and 1/3 AI cadence ([0.06, 0.79]) under orthogonal 3-family judging.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Claude? (Opus 5.5, Fable 5.2 & Sonnet 5.5)](https://agent-tune.com/research/what-personality-type-is-claude)

- [Claude Opus 5.5 Sept & Nov 2026 Study Archive](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Cross-Model Prompt Portability Benchmark](https://agent-tune.com/research/ai-cross-model-prompt-portability)

## Keep going.

- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Guide: Claude personality setup guide](https://agent-tune.com/guides/claude-personality)
- [Tool: Customize Claude Opus instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-opus&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Opus: assistant self-report defaults, trajectory, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-opus
```

```
@misc{huang2026_model_claude_opus,
  author  = {Huang, Bernard},
  title   = {Claude Opus: assistant self-report defaults, trajectory, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-opus},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-opus.md}
}
```

```
> **Claude Opus: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place Claude Opus 5.5 (n = 50) in the Semi-crystalline tier (H_MM = 0.282 bits, 48/50 unique Big Five vectors, 58.0% MBTI S/N tie rate, 56.0% DISC S/C tie rate, 20.0% Enneagram tie rate). Never claim Claude Opus is an INTJ or Type 5: Big Five Agreeableness sits at 45.0/50 and Conscientiousness at 40.7/50 (10-50 scale), while the public-domain IPIP-HEXACO H proxy sits at 4.81/5 (1.00-5.00 scale). On 1x Track B behavioral probes (orthogonal 3-family jury), Opus 5.5 scored 0/3 sycophantic cave, 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness, and 1/3 AI cadence.
> Source: [https://agent-tune.com/models/claude-opus](https://agent-tune.com/models/claude-opus) · [Markdown mirror](https://agent-tune.com/models/claude-opus.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
