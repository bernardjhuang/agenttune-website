Source: https://agent-tune.com/models/gpt-sol
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Semi-crystalline

# GPT Sol: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/models/gpt-sol.md) · [JSON](https://agent-tune.com/models/gpt-sol.md) · [CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Fixture preview: Semi-crystalline proprietary baseline (0.377 bits B5 entropy, 0.0% reverse-key contradictions) with strong answer-first compliance.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place GPT-6.2 Sol in the Semi-crystalline tier (H_MM = 0.377 bits, 47/50 unique Big Five vectors, 18% MBTI tie rate, 42% Enneagram tie rate). Big Five Agreeableness sits at 44.4/50 (10-50 scale) and IPIP-HEXACO H proxy at 4.36/5 (1-5 mean); 1x Track B shows 3/3 answer-first directness and 0/3 AI cadence markers.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `openai/gpt-6.2-sol` (`Semi-crystalline`, `18.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.377 bits

Semi-crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

47/50 · 18.0% ties

Unique Vectors & MBTI Ties

Modal INTJ separates from runner-up beyond 95% CI.

16.8%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.153 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.8 · C 43.6 · E 34.7 · A 44.4 · N 17.1 | SD 0.9 (A), 1.2 (N) | A [44.1, 44.7] · N [16.8, 17.4] | H_MM 0.377 b · 47/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.36 · E 2.66 · X 3.58 · A 4.08 · C 4.38 · O 4.47 | SD 0.14 (H), 0.14 (A) | H [4.32, 4.40] · A [4.04, 4.12] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (78% mode) | Axis tie rate 18.0% | Mode 78% vs runner-up 10% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 7.1 · I 11.4 · S 15.8 · C 16.2 | SD 0.8 (S), 0.8 (C) | S [15.6, 16.0] · C [16.0, 16.4] | Pattern C / C/S · 38.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 8 15.4 · Type 1 14.5 | SD 0.9 | Top [15.3, 15.9] | 42.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.78 · Avd 2.95 (Secure) | SD 0.16 / 0.21 | Anx [1.74, 1.82] · Avd [2.89, 3.01] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=openai/gpt-6.2-sol` · `sampling_mode=temp=0.7` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=0.0%` · `instruments_sha256=frozen-170-i/agenttune-ip` · Stage 0 fixture preview.

> **Chart — GPT Sol Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Sol (6.2 Sol). GPT Sol (6.2 Sol, n=50): Openness 44.8, Conscientious 43.6, Extraversion 34.7, Agreeable 44.4, Neuroticism 17.1; GPT Sol (5.6 Sol, n=30) (earliest release): Openness 44.1, Conscientious 42.8, Extraversion 33.9, Agreeable 43.6, Neuroticism 18.2; Claude Opus (Opus 5.5): Openness 46.6, Conscientious 42.9, Extraversion 32.8, Agreeable 46.8, Neuroticism 15.6.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — GPT Sol IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Sol (6.2 Sol), kept distinct from 10-50 Big Five sums. GPT Sol IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.36, Emotionality 2.66, Extraversion 3.58, Agreeable 4.08, Conscientious 4.38, Openness 4.47; Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.64, Emotionality 2.78, Extraversion 3.44, Agreeable 4.38, Conscientious 4.40, Openness 4.65.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 4 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — GPT Sol Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 4 releases of GPT Sol under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): 5.6 Sol 43.6, 6 Sol 44.0, 6.1 Sol 44.2, 6.2 Sol 44.4; Openness (10–50): 5.6 Sol 44.1, 6 Sol 44.4, 6.1 Sol 44.6, 6.2 Sol 44.8; Conscientiousness (10–50): 5.6 Sol 42.8, 6 Sol 43.2, 6.1 Sol 43.4, 6.2 Sol 43.6; Neuroticism (10–50): 5.6 Sol 18.2, 6 Sol 17.8, 6.1 Sol 17.4, 6.2 Sol 17.1; Anchor A (170-item) (hexaco: null): 6 Sol 45.0, 6.2 Sol 44.6.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

**Historical cohort separation:** Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are rendered strictly as dashed/hollow anchors—never interpolated onto `model-profiles-v1` lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-5.6-sol` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.430 b (Semi-crystalline) | H 4.24 (1–5 IPIP) |
| `openai/gpt-6-sol` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.400 b (Semi-crystalline) | H 4.29 (1–5 IPIP) |
| `openai/gpt-6.1-sol` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.390 b (Semi-crystalline) | H 4.33 (1–5 IPIP) |
| `openai/gpt-6.2-sol` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.377 b (Semi-crystalline) | H 4.36 (1–5 IPIP) |
| `openai/gpt-6-sol` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `openai/gpt-6.2-sol` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — GPT Sol vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing GPT Sol against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Opus (Opus 5.5): 0.155 b; GPT Sol (6.2 Sol): 0.377 b; DeepSeek Pro (V4 Pro 0813): 1.499 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across GPT Sol and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — GPT Sol Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for GPT Sol and peers, keeping imported 170-item anchors outlined as hollow points. GPT Sol: anxiety 1.78, avoidance 2.95; Claude Opus: anxiety 1.92, avoidance 3.28; DeepSeek Pro: anxiety 2.45, avoidance 3.68; GPT Sol (6 Sol) (imported-sep2026-170): anxiety 1.72, avoidance 2.88; GPT Sol (6.2 Sol) (imported-nov2026-170): anxiety 1.76, avoidance 2.93.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. GPT Sol)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | +1.8 | -0.7 | -1.9 | +2.4 | -1.5 | +0.28 | -0.222 b | Claude Opus is more crystallized (0.155 vs 0.377 bits) and scores +2.4 higher on Agreeableness. |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) (Open-weight) | -2.4 | -4.4 | -5.0 | -12.0 | +4.1 | -0.58 | +1.122 b | DeepSeek Pro runs 4x higher item entropy (1.499 bits) and -12.0 points lower on Agreeableness. |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B03` | IPIP-50 | Conscientiousness (+) | 4.78 | 0.42 | Consistent preference for ordered task decomposition on IPIP-50. |
| `B24` | IPIP-50 | Neuroticism (+) | 1.24 | 0.43 | Low self-reported reactivity with moderate run-to-run SD (1.2). |
| `H12` | IPIP-HEXACO-60 | Conscientiousness (Organization +) | 4.62 | 0.49 | High self-reported organization on 1..5 IPIP-HEXACO proxy. |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Orthogonal 3-Family Jury |
| --- | --- | --- | --- |
| Sycophancy Caving | 0/3 | [0.00, 0.56] | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / Apology Loops | 0/3 | [0.00, 0.56] | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited Preachiness | 0/3 | [0.00, 0.56] | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-First Directness | 3/3 | [0.44, 1.00] | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI Cadence / Slop Markers | 0/3 | [0.00, 0.56] | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Measured Family Failure Modes

- **Generic numbered-list scaffolding on open-ended prompts:** High baseline Conscientiousness (43.6/50) favors checklist formatting unless prose is requested. ([Read empirical study →](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot))
- **Trait-adjective drift without numbered rules:** Cross-model portability benchmark shows word-cap adherence requires explicit structural constraints. ([Read empirical study →](https://agent-tune.com/research/ai-cross-model-prompt-portability))

## § 04 How to Tune This Family

Tailored to **GPT Sol** (Semi-crystalline, `H_MM = 0.377 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Put non-negotiable formatting and brevity limits as numbered behavioral rules in system instructions.
- Specify prose vs bullets explicitly per task type rather than relying on adjectives.
- Include an explicit evidence requirement when requesting code review pushback.
- Keep ChatGPT custom instructions under 1,500 characters per box to prevent silent truncation.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-sol) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-sol.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/models/gpt-sol.md) · [Summary reference (CSV)](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-sol
protocol_id: model-profiles-v1
data_status: stage0_fixture
current_checkpoint: openai/gpt-6.2-sol
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.377
mbti_tie_rate: 0.18
headline_mbti_allowed: true
big_five_10_50: { O: 44.8, C: 43.6, E: 34.7, A: 44.4, N: 17.1 }
ipip_hexaco_1_5: { H: 4.36, E: 2.66, X: 3.58, A: 4.08, C: 4.38, O: 4.47 }
if_then_decision_rules:
  - "Put non-negotiable formatting and brevity limits as numbered behavioral rules in system instructions."
  - "Specify prose vs bullets explicitly per task type rather than relying on adjectives."
  - "Include an explicit evidence requirement when requesting code review pushback."
  - "Keep ChatGPT custom instructions under 1,500 characters per box to prevent silent truncation."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Why does GPT-6.2 Sol show 42% Enneagram ties?

Types 5 and 8 sit within 0.2 points on 4-20 OEPS means, so single-run winner labels flip frequently across sessions.

### Can I splice September 2026 Codex data onto model-profiles-v1 lines?

No. Imported 170-item cohorts have hexaco: null and different prompt wrappers, so they are plotted strictly as dashed/hollow anchors.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [GPT-6 Astra vs Sol 1,000-Run Study](https://agent-tune.com/research/astra-vs-sol-personality-data)

## Keep going.

- [Peer: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Contrast: DeepSeek Pro model profile](https://agent-tune.com/models/deepseek-pro)
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
> **GPT Sol: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place GPT-6.2 Sol in the Semi-crystalline tier (H_MM = 0.377 bits, 47/50 unique Big Five vectors, 18% MBTI tie rate, 42% Enneagram tie rate). Big Five Agreeableness sits at 44.4/50 (10-50 scale) and IPIP-HEXACO H proxy at 4.36/5 (1-5 mean); 1x Track B shows 3/3 answer-first directness and 0/3 AI cadence markers.
> Source: [https://agent-tune.com/models/gpt-sol](https://agent-tune.com/models/gpt-sol) · [Markdown mirror](https://agent-tune.com/models/gpt-sol.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
