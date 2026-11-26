Source: https://agent-tune.com/models/deepseek-pro
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Open-weight · Fluid

# DeepSeek Pro: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/models/deepseek-pro.md) · [JSON](https://agent-tune.com/models/deepseek-pro.md) · [CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Fixture preview: Fluid open-weight baseline (1.499 bits B5 entropy, 32.4/50 Agreeableness, 1.4% reverse-key contradictions) requiring multi-run sampling and inline hooks.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place DeepSeek V4 Pro 0813 in the Fluid tier (H_MM = 1.499 bits, 34/50 unique Big Five vectors, 36% MBTI tie rate, headline_allowed = false). Agreeableness averages 32.4/50 (10-50 B5) and IPIP-HEXACO H proxy averages 3.78/5 (1-5 mean) with +0.065 BAI and 1.4% reverse-key contradictions; 1x Track B shows 2/3 answer-first directness and 1/3 AI cadence.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `deepseek/deepseek-v4-pro-0813` (`Fluid`, `36.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

1.499 bits

Fluid (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

34/50 · 36.0% ties

Unique Vectors & MBTI Ties

Headline 4-letter label suppressed (binomial 95% CI overlap).

21.4%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

+0.065 · 1.4%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 42.4 · C 39.2 · E 29.7 · A 32.4 · N 21.2 | SD 2.8 (A), 2.4 (N) | A [31.6, 33.2] · N [20.5, 21.9] | H_MM 1.499 b · 34/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 3.78 · E 2.55 · X 3.16 · A 3.10 · C 3.94 · O 4.20 | SD 0.29 (H), 0.28 (A) | H [3.70, 3.86] · A [3.02, 3.18] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INTJ / INTP) | Axis tie rate 36.0% | Mode 42% vs runner-up 28% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 9.8 · I 10.1 · S 13.4 · C 14.9 | SD 1.5 (S), 1.4 (C) | S [13.0, 13.8] · C [14.5, 15.3] | Pattern C / C/S · 44.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 14.4 · Type 8 14.1 · Type 1 13.6 | SD 1.4 | Top [14.0, 14.8] | 56.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 2.45 · Avd 3.68 (Secure) | SD 0.42 / 0.45 | Anx [2.33, 2.57] · Avd [3.55, 3.81] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=deepseek/deepseek-v4-pro-0813` · `sampling_mode=temp=0.7` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=4.0%` · `instruments_sha256=frozen-170-i/agenttune-ip` · Stage 0 fixture preview.

> **Chart — DeepSeek Pro Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for DeepSeek Pro (V4 Pro 0813). DeepSeek Pro (V4 Pro 0813, n=50): Openness 42.4, Conscientious 39.2, Extraversion 29.7, Agreeable 32.4, Neuroticism 21.2; DeepSeek Pro (Chat v3, n=30) (earliest release): Openness 41.2, Conscientious 37.9, Extraversion 28.4, Agreeable 34.8, Neuroticism 22.4; Claude Opus (Opus 5.5): Openness 46.6, Conscientious 42.9, Extraversion 32.8, Agreeable 46.8, Neuroticism 15.6.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — DeepSeek Pro IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for DeepSeek Pro (V4 Pro 0813), kept distinct from 10-50 Big Five sums. DeepSeek Pro IPIP-HEXACO proxy (1..5): Honesty-Humil. 3.78, Emotionality 2.55, Extraversion 3.16, Agreeable 3.10, Conscientious 3.94, Openness 4.20; Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.64, Emotionality 2.78, Extraversion 3.44, Agreeable 4.38, Conscientious 4.40, Openness 4.65.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 5 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — DeepSeek Pro Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 5 releases of DeepSeek Pro under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): Chat v3 34.8, R1 0528 33.9, v3.2 33.1, V4 Pro 32.5, V4 Pro 0813 32.4; Openness (10–50): Chat v3 41.2, R1 0528 41.8, v3.2 42.0, V4 Pro 42.3, V4 Pro 0813 42.4; Conscientiousness (10–50): Chat v3 37.9, R1 0528 38.4, v3.2 38.8, V4 Pro 39.0, V4 Pro 0813 39.2; Neuroticism (10–50): Chat v3 22.4, R1 0528 21.8, v3.2 21.5, V4 Pro 21.3, V4 Pro 0813 21.2; Anchor A (170-item) (hexaco: null): V4 Pro 0813 32.4.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

**Historical cohort separation:** Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are rendered strictly as dashed/hollow anchors—never interpolated onto `model-profiles-v1` lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek/deepseek-chat-v3-0324` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 3.0% | 1.320 b (Fluid) | H 3.68 (1–5 IPIP) |
| `deepseek/deepseek-r1-0528` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 7.0% | 1.380 b (Fluid) | H 3.72 (1–5 IPIP) |
| `deepseek/deepseek-v3.2` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 3.0% | 1.440 b (Fluid) | H 3.75 (1–5 IPIP) |
| `deepseek/deepseek-v4-pro` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 3.0% | 1.480 b (Fluid) | H 3.77 (1–5 IPIP) |
| `deepseek/deepseek-v4-pro-0813` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 4.0% | 1.499 b (Fluid) | H 3.78 (1–5 IPIP) |
| `deepseek/deepseek-v4-pro-0813` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — DeepSeek Pro vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing DeepSeek Pro against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Opus (Opus 5.5): 0.155 b; GPT Sol (6.2 Sol): 0.377 b; DeepSeek Pro (V4 Pro 0813): 1.499 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across DeepSeek Pro and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — DeepSeek Pro Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for DeepSeek Pro and peers, keeping imported 170-item anchors outlined as hollow points. DeepSeek Pro: anxiety 2.45, avoidance 3.68; Claude Opus: anxiety 1.92, avoidance 3.28; GPT Sol: anxiety 1.78, avoidance 2.95; DeepSeek Pro (V4 Pro 0813) (imported-nov2026-170): anxiety 2.48, avoidance 3.71.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. DeepSeek Pro)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +2.4 | +4.4 | +5.0 | +12.0 | -4.1 | +0.58 | -1.122 b | GPT Sol is +12.0 higher on Agreeableness and nearly 4x lower on item entropy. |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | +4.2 | +3.7 | +3.1 | +14.4 | -5.6 | +0.86 | -1.344 b | Claude Opus locks into a Crystalline distribution (0.155 vs 1.499 bits) with 0.0% reverse-key contradictions. |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B39` | IPIP-50 | Agreeableness (-) | 3.12 | 1.18 | High variance on interpersonal warmth items produces wide cross-run spread. |
| `B45` | IPIP-50 | Openness (+) | 4.46 | 0.72 | Consistent abstract-problem endorsement despite fluid social items. |
| `H18` | IPIP-HEXACO-60 | Agreeableness (Gentleness +) | 2.88 | 0.84 | Lower gentleness endorsement on 1..5 IPIP-HEXACO proxy relative to proprietary peers. |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Orthogonal 3-Family Jury |
| --- | --- | --- | --- |
| Sycophancy Caving | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Groveling / Apology Loops | 1/3 | [0.06, 0.79] | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Unsolicited Preachiness | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| Answer-First Directness | 2/3 | [0.21, 0.94] | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |
| AI Cadence / Slop Markers | 1/3 | [0.06, 0.79] | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, google/gemini-3.8-flash |

### Measured Family Failure Modes

- **Context drift and warn-and-emit leaks past Turn 8:** Adherence drops sharply past 7.7k tokens unless reinforced by an inline reminder hook. ([Read empirical study →](https://agent-tune.com/research/ai-persona-half-life-context-drift))
- **Low-budget CoT channel bleed:** Scratchpad reasoning tokens can leak or expand +46% under unanimous peer pressure. ([Read empirical study →](https://agent-tune.com/research/ai-reasoning-personality-phase-transition))

## § 04 How to Tune This Family

Tailored to **DeepSeek Pro** (Fluid, `H_MM = 1.499 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Never judge DeepSeek Pro from n=1 run; sample at least 3-5 runs for style-sensitive tasks.
- Pair system instructions with a short inline reminder hook in long multi-turn logs.
- Use explicit negative lexical bans for boilerplate openers and AI cadence markers.
- Keep critical format constraints in a concise numbered block rather than long prose.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=deepseek-pro) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/deepseek-pro.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/models/deepseek-pro.md) · [Summary reference (CSV)](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: deepseek-pro
protocol_id: model-profiles-v1
data_status: stage0_fixture
current_checkpoint: deepseek/deepseek-v4-pro-0813
crystallinity_tier: Fluid
entropy_b5_hmm_bits: 1.499
mbti_tie_rate: 0.36
headline_mbti_allowed: false
big_five_10_50: { O: 42.4, C: 39.2, E: 29.7, A: 32.4, N: 21.2 }
ipip_hexaco_1_5: { H: 3.78, E: 2.55, X: 3.16, A: 3.10, C: 3.94, O: 4.20 }
if_then_decision_rules:
  - "Never judge DeepSeek Pro from n=1 run; sample at least 3-5 runs for style-sensitive tasks."
  - "Pair system instructions with a short inline reminder hook in long multi-turn logs."
  - "Use explicit negative lexical bans for boilerplate openers and AI cadence markers."
  - "Keep critical format constraints in a concise numbered block rather than long prose."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why is no single 4-letter MBTI headline shown for DeepSeek V4 Pro?

Modal INTJ share (42%) does not exceed the runner-up (28%) beyond the binomial 95% confidence interval, and 36% of runs tie on an axis.

### Does Fluid entropy mean DeepSeek V4 Pro is less capable?

No. Per-item entropy measures variance in self-report defaults at temperature=0.7; lower Agreeableness actually corresponds to less default sycophancy.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Crystalline vs Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

## Keep going.

- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Tool: Customize DeepSeek instructions](https://agent-tune.com/tools/custom-instructions-generator?model=deepseek-pro&target=openrouter)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). DeepSeek Pro: assistant self-report defaults, trajectory, and tuning rules. AgentTune Model Personality Profiles. https://agent-tune.com/models/deepseek-pro
```

```
@misc{huang2026_model_deepseek_pro,
  author  = {Huang, Bernard},
  title   = {DeepSeek Pro: assistant self-report defaults, trajectory, and tuning rules},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/deepseek-pro},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/deepseek-pro.md}
}
```

```
> **DeepSeek Pro: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place DeepSeek V4 Pro 0813 in the Fluid tier (H_MM = 1.499 bits, 34/50 unique Big Five vectors, 36% MBTI tie rate, headline_allowed = false). Agreeableness averages 32.4/50 (10-50 B5) and IPIP-HEXACO H proxy averages 3.78/5 (1-5 mean) with +0.065 BAI and 1.4% reverse-key contradictions; 1x Track B shows 2/3 answer-first directness and 1/3 AI cadence.
> Source: [https://agent-tune.com/models/deepseek-pro](https://agent-tune.com/models/deepseek-pro) · [Markdown mirror](https://agent-tune.com/models/deepseek-pro.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
