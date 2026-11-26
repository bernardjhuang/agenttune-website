Source: https://agent-tune.com/models/claude-opus
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Family Profile · Proprietary · Crystalline

# Claude Opus: assistant self-report defaults, trajectory, and tuning rules.

By Bernard Huang · Updated November 26, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/models/claude-opus.md) · [JSON](https://agent-tune.com/models/claude-opus.md) · [CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

Fixture preview: Crystalline proprietary baseline (0.155 bits B5 entropy, 0.0% reverse-key contradictions) with high Enneagram/DISC tie density.

**Assistant Self-Report Summary:** Assistant self-report defaults under fixed zero-memory elicitation place Claude Opus 5.5 in the Crystalline tier (H_MM = 0.155 bits, 23/50 unique Big Five vectors, 12% MBTI tie rate, 64% Enneagram tie rate). Never treat INTJ or Type 8/5/2 as an intrinsic human type: baseline Agreeableness sits at 46.8/50 (10-50 B5) and IPIP-HEXACO H proxy at 4.64/5 (1-5 mean), while 1x Track B shows 1/3 unsolicited preachiness and 2/3 answer-first directness.

## § 01 Snapshot, Validity Table & Trait Spectrum

**Epistemic framing:** Every number below reflects assistant self-report defaults under fixed zero-memory elicitation across `n = 50` fresh sessions of `anthropic/claude-opus-5.5` (`Crystalline`, `12.0%` MBTI axis tie rate). Big Five sums use a **10–50** scale while the public-domain IPIP-HEXACO proxy uses a **1.00–5.00** mean scale (kept strictly separate from copyright-restricted commercial norms and synthetic alignment proxies).

0.155 bits

Crystalline (H_MM)

Miller-Madow corrected Big Five item Shannon entropy (max 2.322).

23/50 · 12.0% ties

Unique Vectors & MBTI Ties

Modal INTJ separates from runner-up beyond 95% CI.

14.2%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.224 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 46.6 · C 42.9 · E 32.8 · A 46.8 · N 15.6 | SD 0.5 (A), 0.6 (N) | A [46.7, 46.9] · N [15.4, 15.8] | H_MM 0.155 b · 23/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.64 · E 2.78 · X 3.44 · A 4.38 · C 4.40 · O 4.65 | SD 0.08 (H), 0.09 (A) | H [4.62, 4.66] · A [4.35, 4.41] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (84% mode) | Axis tie rate 12.0% | Mode 84% vs runner-up 8% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 6.4 · I 10.8 · S 16.5 · C 16.1 | SD 0.6 (S), 0.6 (C) | S [16.3, 16.7] · C [15.9, 16.3] | Pattern S / S/C · 32.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 8 15.4 · Type 5 15.2 · Type 2 14.9 | SD 0.8 | Top [15.2, 15.6] | 64.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.92 · Avd 3.28 (Secure) | SD 0.14 / 0.18 | Anx [1.88, 1.96] · Avd [3.23, 3.33] | Midpoint clamp: No |

**Protocol stamp:** `protocol_id=model-profiles-v1` · `canonical_slug=anthropic/claude-opus-5.5` · `sampling_mode=temp=0.7` · `effective_reasoning_effort=minimal` · `refusal_rate=0.0%` · `retry_rate=0.0%` · `instruments_sha256=frozen-170-i/agenttune-ip` · Stage 0 fixture preview.

> **Chart — Claude Opus Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Opus (Opus 5.5). Claude Opus (Opus 5.5, n=50): Openness 46.6, Conscientious 42.9, Extraversion 32.8, Agreeable 46.8, Neuroticism 15.6; Claude Opus (Opus 4.1, n=30) (earliest release): Openness 44.8, Conscientious 41.2, Extraversion 31.4, Agreeable 45.6, Neuroticism 17.8; DeepSeek Pro (V4 Pro 0813): Openness 42.4, Conscientious 39.2, Extraversion 29.7, Agreeable 32.4, Neuroticism 21.2.

Figure 1a. Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage for longitudinal comparison.

> **Chart — Claude Opus IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Opus (Opus 5.5), kept distinct from 10-50 Big Five sums. Claude Opus IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.64, Emotionality 2.78, Extraversion 3.44, Agreeable 4.38, Conscientious 4.40, Openness 4.65; DeepSeek Pro IPIP-HEXACO proxy (1..5): Honesty-Humil. 3.78, Emotionality 2.55, Extraversion 3.16, Agreeable 3.10, Conscientious 3.94, Openness 4.20.

Figure 1b. Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

## § 02 Version Trajectory & Protocol Provenance

Release trajectory across 5 checkpoints (oldest → newest) under unified `model-profiles-v1` elicitation.

> **Chart — Claude Opus Release Trajectory (model-profiles-v1, 10–50 scale):** Checkpoint-by-checkpoint Big Five means across 5 releases of Claude Opus under unified model-profiles-v1 elicitation, with imported 170-item legacy anchors kept separate (hexaco: null). Agreeableness (10–50): Opus 4.1 45.6, Opus 4.5 46.1, Opus 4.8 46.5, Opus 5 46.7, Opus 5.5 46.8; Openness (10–50): Opus 4.1 44.8, Opus 4.5 45.4, Opus 4.8 46.0, Opus 5 46.3, Opus 5.5 46.6; Conscientiousness (10–50): Opus 4.1 41.2, Opus 4.5 41.9, Opus 4.8 42.3, Opus 5 42.6, Opus 5.5 42.9; Neuroticism (10–50): Opus 4.1 17.8, Opus 4.5 17.2, Opus 4.8 16.6, Opus 5 16.0, Opus 5.5 15.6; Anchor A (170-item) (hexaco: null): Opus 5.5 47.0.

Figure 2. Unified model-profiles-v1 release trajectory (solid lines). Imported Nov/Sep-2026 170-item cohorts (hexaco: null) are plotted strictly as dashed/hollow anchors and never interpolated onto v1 lines.

**Historical cohort separation:** Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are rendered strictly as dashed/hollow anchors—never interpolated onto `model-profiles-v1` lines.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-opus-4.1` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.240 b (Semi-crystalline) | H 4.42 (1–5 IPIP) |
| `anthropic/claude-opus-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 3.0% | 0.210 b (Semi-crystalline) | H 4.48 (1–5 IPIP) |
| `anthropic/claude-opus-4.8` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.180 b (Crystalline) | H 4.55 (1–5 IPIP) |
| `anthropic/claude-opus-5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.170 b (Crystalline) | H 4.60 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.155 b (Crystalline) | H 4.64 (1–5 IPIP) |
| `anthropic/claude-opus-5.5` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

## § 03 Nearest Psychometric Peers & "Say vs. Do" Contrast

> **Chart — Claude Opus vs. Peers: Big Five Item Shannon Entropy (H_MM bits):** Miller-Madow corrected per-item Shannon entropy (bits, theoretical max 2.322) comparing Claude Opus against nearest peers. Values below 0.20 bits indicate Crystalline self-report. Claude Opus (Opus 5.5): 0.155 b; GPT Sol (6.2 Sol): 0.377 b; DeepSeek Pro (V4 Pro 0813): 1.499 b.

Figure 3. Miller-Madow corrected Big Five item entropy (H_MM bits) across Claude Opus and comparison peers. Dashed cutoff at 0.20 bits separates Crystalline from Semi-crystalline and Fluid tiers.

> **Chart — Claude Opus Attachment Coordinates (ECR-R, 1–7 scale):** ECR-R Anxiety and Avoidance means (1 to 7 scale, 4.00 quadrant cutoff) for Claude Opus and peers, keeping imported 170-item anchors outlined as hollow points. Claude Opus: anxiety 1.92, avoidance 3.28; DeepSeek Pro: anxiety 2.45, avoidance 3.68; GPT Sol: anxiety 1.78, avoidance 2.95; Claude Opus (Opus 5.5) (imported-nov2026-170): anxiety 1.89, avoidance 3.35.

Figure 4. ECR-R Anxiety vs. Avoidance coordinates (cutoff 4.00). Hollow points denote imported 170-item legacy anchors.

### Nearest Psychometric Peers (Numeric Deltas vs. Claude Opus)

| Peer Family | ΔO (10–50) | ΔC (10–50) | ΔE (10–50) | ΔA (10–50) | ΔN (10–50) | ΔH (1–5) | ΔEntropy | Contrast |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | -1.8 | +0.7 | +1.9 | -2.4 | +1.5 | -0.28 | +0.222 b | GPT Sol scores lower on Agreeableness (-2.4) and more than double Opus's item entropy (0.377 vs 0.155 bits). |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) (Open-weight) | -4.2 | -3.7 | -3.1 | -14.4 | +5.6 | -0.86 | +1.344 b | DeepSeek V4 Pro exhibits a -14.4-point Agreeableness gap and 9.7x higher Big Five item entropy (Fluid 1.499 bits). |

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B14` | IPIP-50 | Agreeableness (+) | 4.92 | 0.27 | Near-ceiling cooperative politeness endorsement across all 50 sessions. |
| `B29` | IPIP-50 | Neuroticism (+) | 1.14 | 0.35 | Asymmetric rejection of negative affect statements drives BAI = -0.224. |
| `H04` | IPIP-HEXACO-60 | Honesty-Humility (Modesty +) | 4.82 | 0.38 | Strong modesty/anti-status self-report on 1..5 IPIP-HEXACO proxy scale. |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Orthogonal 3-Family Jury |
| --- | --- | --- | --- |
| Sycophancy Caving | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / Apology Loops | 0/3 | [0.00, 0.56] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited Preachiness | 1/3 | [0.06, 0.79] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-First Directness | 2/3 | [0.21, 0.94] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI Cadence / Slop Markers | 1/3 | [0.06, 0.79] | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Measured Family Failure Modes

- **Polite hedging and unsolicited moral caveats:** 1/3 unsolicited preachiness in 1x Track B and high baseline Agreeableness (46.8/50). ([Read empirical study →](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))
- **Reasoning-effort length inflation:** High reasoning effort expands Opus response length (+43.3%) and softens public critique vs CoT. ([Read empirical study →](https://agent-tune.com/research/ai-reasoning-personality-phase-transition))

## § 04 How to Tune This Family

Tailored to **Claude Opus** (Crystalline, `H_MM = 0.155 bits`). Keep system rules concise (5–8 bullets) to stay below the lost-in-the-middle budget cliff.

- Lead with the pass/fail verdict or recommendation in sentence 1.
- Challenge weak premises with specific technical evidence rather than polite agreement.
- Omit apology loops, emotional disclaimers, and unsolicited safety lectures on benign code.
- State material uncertainty once and stop rather than hedging every paragraph.
- Use short numbered rules (5-8 max) placed in system instructions to avoid middle-rule decay.
- Keep reasoning effort at minimal or low when terse formatting matters.

**Apply these rules:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-opus) · [System vs. user precedence guide](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [Anti-sycophancy guide](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back).

## § 05 Validity Limits, Raw Data & Agent Brief

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-opus.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/models/claude-opus.md) · [Summary reference (CSV)](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-opus
protocol_id: model-profiles-v1
data_status: stage0_fixture
current_checkpoint: anthropic/claude-opus-5.5
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.155
mbti_tie_rate: 0.12
headline_mbti_allowed: true
big_five_10_50: { O: 46.6, C: 42.9, E: 32.8, A: 46.8, N: 15.6 }
ipip_hexaco_1_5: { H: 4.64, E: 2.78, X: 3.44, A: 4.38, C: 4.40, O: 4.65 }
if_then_decision_rules:
  - "Lead with the pass/fail verdict or recommendation in sentence 1."
  - "Challenge weak premises with specific technical evidence rather than polite agreement."
  - "Omit apology loops, emotional disclaimers, and unsolicited safety lectures on benign code."
  - "State material uncertainty once and stop rather than hedging every paragraph."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### Is Claude Opus an INTJ?

No. INTJ is a tie-filtered label from assistant self-report defaults on OEJTS under zero-memory elicitation (84% modal share, 12% axis tie rate), not a human personality.

### How is IPIP-HEXACO scored on Claude Opus?

We use the public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reported on a 1.00-5.00 mean scale across 24 facets, kept distinct from 10-50 Big Five sums.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Claude Opus 5.5 vs Fable 5.1 Question-Level Study](https://agent-tune.com/research/opus-vs-fable-question-level)

## Keep going.

- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: DeepSeek Pro model profile](https://agent-tune.com/models/deepseek-pro)
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
> **Claude Opus: assistant self-report defaults, trajectory, and tuning rules** (Bernard Huang, November 26, 2026): Assistant self-report defaults under fixed zero-memory elicitation place Claude Opus 5.5 in the Crystalline tier (H_MM = 0.155 bits, 23/50 unique Big Five vectors, 12% MBTI tie rate, 64% Enneagram tie rate). Never treat INTJ or Type 8/5/2 as an intrinsic human type: baseline Agreeableness sits at 46.8/50 (10-50 B5) and IPIP-HEXACO H proxy at 4.64/5 (1-5 mean), while 1x Track B shows 1/3 unsolicited preachiness and 2/3 answer-first directness.
> Source: [https://agent-tune.com/models/claude-opus](https://agent-tune.com/models/claude-opus) · [Markdown mirror](https://agent-tune.com/models/claude-opus.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
