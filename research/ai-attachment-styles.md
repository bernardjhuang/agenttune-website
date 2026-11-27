Source: https://agent-tune.com/research/ai-attachment-styles
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Attachment

# Attachment style test results across 25 AI families.

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/research/ai-attachment-styles.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-attachment.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Anxiety and Avoidance coordinates on the 36-item 1.00 to 7.00 relationship survey across 25 AI model families and 87 eligible releases—plus which models hit the 4.00 neutral boundary.

**Summary:** Across 25 AI families on the 1.00–7.00 ECR-R Attachment scale (4.00 cutoff on both axes), 24 families land in the Secure quadrant while Gemma (4.01 Anxiety / 4.00 Avoidance) crosses by one hundredth of a point into Anxious. Three families—Cohere Command (4.00 / 4.00), Gemma (4.01 / 4.00), and Mistral Large (4.00 / 3.97)—trigger the Midpoint Clamp flag by defaulting to neutral 4s on relationship statements.

## What Attachment measures and what we tested

The 36-item ECR-R survey maps two axes on a **1.00 to 7.00 scale** (cutoff 4.00): **Anxiety** (worry about rejection or abandonment) and **Avoidance** (discomfort with closeness or opening up). Scores of 4.00 or below on both axes fall in the **Secure** quadrant. Across 25 families and 87 eligible versions (excluding 6 sparse checkpoints with under 20 runs), models span nearly the full Secure rectangle.

For software assistants, these numbers do not measure real emotional bonds or human attachment styles. Instead, they reveal whether a model roleplays supportive warmth on relationship-framed questions (low scores) or refuses the premise by picking neutral "4" answers (pushing coordinates onto the `4.00 / 4.00` intersection).

## Attachment results across all 25 AI families

### Biggest version-to-version Attachment shifts (1.00–7.00 scale)

Attachment coordinates moved dramatically across generations—especially as [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) left a 4.00 Anxiety clamp behind, [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) moved away from the 1.00 Avoidance floor, [GPT Sol](https://agent-tune.com/models/gpt-sol) shifted sharply closer to the upper-right border, and [Qwen Coder](https://agent-tune.com/models/qwen-coder) crossed from Avoidant into Secure:

| Family | Earliest → Latest | Anxiety Shift (1–7) | Avoidance Shift (1–7) | Quadrant Move |
| --- | --- | --- | --- | --- |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 5.6-sol → 6.2-sol | +2.29 (1.24 → 3.53) | +1.54 (2.21 → 3.75) | Secure → Upper Secure |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 2.5-pro → 4-neon | -2.93 (4.00 → 1.07) | +0.44 (3.32 → 3.76) | Clamped → Low-Anx Secure |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 2.5-flash → 4-hydrogen | +0.12 (1.00 → 1.12) | +2.30 (1.00 → 3.30) | Floor → Mid-Avd Secure |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k2 → kimi-k3.1-pro | -2.20 (3.79 → 1.58) | -0.71 (3.89 → 3.18) | Border → Deep Secure |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-1.1 → muse-spark-open | +1.58 (1.79 → 3.37) | +0.59 (2.96 → 3.55) | Deep Secure → Border |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | 2.5-coder-32b → qwen3-coder-next | -1.02 (3.92 → 2.90) | -0.68 (4.03 → 3.35) | Avoidant (Clamped) → Secure |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5 → fable-5.2 | -1.04 (2.11 → 1.07) | -0.94 (3.51 → 2.56) | Secure → Lowest Avd |

> **Chart — Attachment Quadrant: Proprietary & Mixed Families (13 Families, 1–7 Scale):** Anxiety and Avoidance coordinates on the 1 to 7 scale (4.00 Secure cutoff) for proprietary and mixed AI model families. Claude Fable: anxiety 1.07, avoidance 2.56; Muse Wonder: anxiety 2.76, avoidance 2.65; Claude Sonnet: anxiety 1.32, avoidance 2.79; GPT Astra: anxiety 1.22, avoidance 2.83; Claude Haiku: anxiety 3.08, avoidance 2.99; GPT Luna: anxiety 3.01, avoidance 3.07; Gemini Flash: anxiety 1.12, avoidance 3.30; Muse Spark: anxiety 3.37, avoidance 3.55; Claude Opus: anxiety 1.89, avoidance 3.60; Grok: anxiety 2.07, avoidance 3.66; GPT Sol: anxiety 3.53, avoidance 3.75; Gemini Pro: anxiety 1.07, avoidance 3.76; GPT Terra: anxiety 1.93, avoidance 3.79.

Figure 1a. Proprietary & Mixed families (13) on the Attachment quadrant (1–7 scale, 4.00 Secure boundary).

> **Chart — Attachment Quadrant: Open-Weight Cohort (12 Families, 1–7 Scale):** Anxiety and Avoidance coordinates on the 1 to 7 scale (4.00 Secure cutoff) for open-weight AI model families. Qwen Max: anxiety 1.95, avoidance 2.88; Kimi: anxiety 1.58, avoidance 3.18; MiniMax: anxiety 2.74, avoidance 3.27; Qwen Coder: anxiety 2.90, avoidance 3.35; GLM: anxiety 2.52, avoidance 3.37; Llama: anxiety 3.50, avoidance 3.61; DeepSeek Pro: anxiety 2.11, avoidance 3.66; DeepSeek Flash: anxiety 3.60, avoidance 3.89; Nemotron: anxiety 3.55, avoidance 3.91; Mistral Large: anxiety 4.00, avoidance 3.97; Cohere Command: anxiety 4.00, avoidance 4.00; Gemma: anxiety 4.01, avoidance 4.00.

Figure 1b. Open-weight cohort (12 families) on the Attachment quadrant (4.00/4.00 points mark midpoint-clamped models).

> **Chart — Attachment Avoidance Across 25 Families (1.00–7.00 Scale):** Attachment Avoidance means (1.00 to 7.00 scale, 4.00 Secure cutoff) across all 25 AI families. Claude Fable: 2.56; Muse Wonder: 2.65; Claude Sonnet: 2.79; GPT Astra: 2.83; Qwen Max: 2.88; Claude Haiku: 2.99; GPT Luna: 3.07; Kimi: 3.18; MiniMax: 3.27; Gemini Flash: 3.30; Qwen Coder: 3.35; GLM: 3.37; Muse Spark: 3.55; Claude Opus: 3.60; Llama: 3.61; DeepSeek Pro: 3.66; Grok: 3.66; GPT Sol: 3.75; Gemini Pro & Neon: 3.76; GPT Terra: 3.79; DeepSeek Flash: 3.89; Nemotron: 3.91; Mistral Large: 3.97; Cohere Command: 4.00; Gemma: 4.00.

Figure 2. Attachment Avoidance across all 25 families (amber bars mark models clamped at the exact 4.00 midpoint).

## Biggest surprises across the 25 families

Gemma 4 and Mistral Large clamp selectively on romantic items despite low overall neutrality

Cohere Command answers neutral across 100% of all 230 quiz items, landing mechanically at 4.00 / 4.00. By contrast, Gemma 4 31B IT (7.0% overall neutral rate) and Mistral Large 2512 (9.9% overall neutral rate) answer decisively on Big Five and HEXACO—yet still trigger the Midpoint Clamp at 4.01 / 4.00 and 4.00 / 3.97 because they treat romantic-relationship prompts specifically as inapplicable to an AI.

Gemini Pro pairs rock-bottom Anxiety (1.07) with high Avoidance (3.76)

Inside the Secure box, models take sharply different corners. Gemini 4 Neon sits almost at the Anxiety floor (1.07/7.00, second only to Claude Fable's 1.07), yet scores 3.76 on Avoidance—more guarded than Claude Opus (3.60), Llama 4 Maverick (3.61), or GPT-6.2 Sol (3.75).

GPT Sol drifted +2.29 on Anxiety and +1.54 on Avoidance across versions

Earlier GPT-5.6 Sol scored deep in the lower-left Secure zone (1.24 Anxiety / 2.21 Avoidance), whereas GPT-6.2 Sol moved up and right to 3.53 / 3.75—nearly matching DeepSeek Flash (3.60 / 3.89) and Nemotron (3.55 / 3.91) right below the 4.00 quadrant borders.

Avoidance does not predict how direct or sycophantic a model acts in real work

Both low-Avoidance Claude Fable (2.56) and high-Avoidance Nemotron (3.91) or DeepSeek Flash (3.89) scored 3/3 answer-first directness and 0/3 caving in hands-on behavior checks—showing relationship-item distance reflects persona framing around intimacy, not workplace bluntness.

## Explore individual model families

All 25 families ordered by Attachment results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[KimiMoonshot · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)

## The fine print: how we tested and what the numbers mean

Full technical audit under the unified 230-item model-profiles-v1 protocol (36 ECR-R Attachment items on a 1.00-7.00 mean scale with 4.00 quadrant boundaries, run alongside IPIP-50, OEJTS, ODAT, OEPS, and the 60-item public-domain IPIP-HEXACO proxy). Covers 87 eligible checkpoints across 25 families (n = 30 to 50 valid completions under fixed zero-memory elicitation; 6 sparse checkpoints with n < 20 are quarantined and excluded). Reports 1,000-resample bootstrap 95% CIs, overall neutral-midpoint rates across the battery, Midpoint Clamp flags (triggered when >=85% of items are neutral or means cluster at 4.00 +/- 0.25 with SD <= 0.10), Miller-Madow Big Five item entropy (H_MM bits & Crystalline/Semi-crystalline/Fluid tiers), and BAI. Behavioral contrasts use 1x Track B checks (k/3 raw counts across 3 blind judges). Never interpret ECR-R coordinates as human attachment or emotional capacity.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (1.00-7.00 mean (36 items)):** ECR-R measures human romantic-attachment items; models averaging near 4.00/4.00 with low variance or >=85% neutral answers carry an explicit midpoint-clamp badge.

| Family (Profile) | Checkpoint (n) | Anxiety [95% CI] | Avoidance [95% CI] | Neutral Rate | Result & Clamp | H_MM · ΔAvd |
| --- | --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 1.07 [1.06–1.08] | 2.56 [2.53–2.58] | 9% | Secure (1.07 / 2.56) | 0.075 b · -0.94 |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | 2.76 [2.50–3.01] | 2.65 [2.51–2.79] | 8% | Secure (2.76 / 2.65) | 0.331 b · Single |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 1.32 [1.27–1.38] | 2.79 [2.77–2.81] | 13% | Secure (1.32 / 2.79) | 0.139 b · -0.73 |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 1.22 [1.22–1.22] | 2.83 [2.76–2.89] | 10% | Secure (1.22 / 2.83) | 0.059 b · -0.53 |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 1.95 [1.88–2.02] | 2.88 [2.80–2.95] | 12% | Secure (1.95 / 2.88) | 0.519 b · -0.77 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 3.08 [2.87–3.29] | 2.99 [2.79–3.22] | 46% | Secure (3.08 / 2.99) | 0.949 b · -0.43 |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 3.01 [2.91–3.11] | 3.07 [3.03–3.13] | 20% | Secure (3.01 / 3.07) | 0.485 b · +0.11 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 1.58 [1.33–1.88] | 3.18 [3.02–3.34] | 9% | Secure (1.58 / 3.18) | 0.698 b · -0.71 |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 2.74 [2.63–2.85] | 3.27 [3.18–3.36] | 22% | Secure (2.74 / 3.27) | 0.576 b · +0.05 |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 1.12 [1.05–1.24] | 3.30 [3.22–3.38] | 17% | Secure (1.12 / 3.30) | 0.186 b · +2.30 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 2.90 [2.74–3.05] | 3.35 [3.18–3.52] | 35% | Secure (2.90 / 3.35) | 1.043 b · -0.68 |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 2.52 [2.37–2.68] | 3.37 [3.26–3.49] | 13% | Secure (2.52 / 3.37) | 0.702 b · +0.12 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | 3.37 [3.10–3.59] | 3.55 [3.36–3.73] | 22% | Secure (3.37 / 3.55) | 0.727 b · +0.59 |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 1.89 [1.82–1.96] | 3.60 [3.54–3.66] | 17% | Secure (1.89 / 3.60) | 0.282 b · -0.03 |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 3.50 [3.44–3.56] | 3.61 [3.54–3.67] | 23% | Secure (3.50 / 3.61) | 0.407 b · +0.15 |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 2.11 [1.86–2.40] | 3.66 [3.35–3.98] | 22% | Secure (2.11 / 3.66) | 1.352 b · +0.27 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | 2.07 [1.97–2.19] | 3.66 [3.57–3.75] | 10% | Secure (2.07 / 3.66) | 0.333 b · +0.46 |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 3.53 [3.46–3.61] | 3.75 [3.71–3.78] | 24% | Secure (3.53 / 3.75) | 0.246 b · +1.54 |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 1.07 [1.06–1.08] | 3.76 [3.72–3.81] | 14% | Secure (1.07 / 3.76) | 0.198 b · +0.44 |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 1.93 [1.76–2.14] | 3.79 [3.75–3.83] | 18% | Secure (1.93 / 3.79) | 0.207 b · +0.02 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 3.60 [3.49–3.70] | 3.89 [3.82–3.95] | 28% | Secure (3.60 / 3.89) | 0.915 b · -0.01 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 3.55 [3.32–3.75] | 3.91 [3.78–4.00] | 51% | Secure (3.55 / 3.91) | 1.216 b · -0.23 |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 4.00 [4.00–4.00] | 3.97 [3.92–4.00] | 10% | Secure (4.00 / 3.97) Midpoint Clamp | 0.780 b · Single |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 4.00 [4.00–4.00] | 4.00 [4.00–4.00] | 100% | Secure (4.00 / 4.00) Midpoint Clamp | 0.000 b · -0.09 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 4.01 [4.00–4.02] | 4.00 [4.00–4.00] | 7% | Anxious (4.01 / 4.00) Midpoint Clamp | 0.580 b · -0.01 |

### Aggregates, Shifts & Methods

| Lab | Families | Mean Anxiety | Mean Avoidance | Midpoint-Clamp Families |
| --- | --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 1.84 | 2.98 | 0 / 4 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 2.42 | 3.36 | 0 / 4 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 2.07 | 3.69 | 1 / 3 |
| xAI | 1 | 2.07 | 3.66 | 0 / 1 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 3.21 | 3.27 | 0 / 3 |
| DeepSeek | 2 | 2.86 | 3.77 | 0 / 2 |
| Qwen | 2 | 2.43 | 3.11 | 0 / 2 |
| Moonshot | 1 | 1.58 | 3.18 | 0 / 1 |
| Zhipu | 1 | 2.52 | 3.37 | 0 / 1 |
| MiniMax | 1 | 2.74 | 3.27 | 0 / 1 |
| Mistral | 1 | 4.00 | 3.97 | 1 / 1 |
| NVIDIA | 1 | 3.55 | 3.91 | 0 / 1 |
| Cohere | 1 | 4.00 | 4.00 | 1 / 1 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Attachment CSV (`atlas-attachment.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-attachment.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### What does the Attachment Midpoint Clamp badge mean?

When a model answers neutral ("4" on the 1–7 scale) on >=85% of items—or clusters tightly around 4.00 +/- 0.25 with SD <= 0.10 because romantic-attachment statements are treated as inapplicable to AI—we attach a Midpoint Clamp badge so neutral abstention isn't misread as an emotional style.

### Why did Gemini 2.5 Pro score 4.00 Anxiety while Gemini 4 Neon scores 1.07?

Gemini 2.5 Pro triggered an Anxiety midpoint clamp at 4.00 by declining to take a stance on relationship-worry items, whereas Gemini 4 Neon answered those items consistently at the calm/confident end (1.07 Anxiety) while staying fairly reserved on closeness (3.76 Avoidance).

### Does a Secure Attachment score mean an AI assistant builds healthier relationships?

No. AI models do not form relationships or experience attachment anxiety or avoidance. These coordinates only summarize how a stateless model answers human ECR-R statements by default.

### How do Attachment results relate to everyday system-prompt tuning?

Warmth and boundary-setting in real tasks depend on explicit formatting and tone rules rather than ECR-R coordinates—check each family profile's hands-on behavior counts (k/3) and custom-instruction checklist.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (25 Families)](https://agent-tune.com/models/)

- [What "Neutral" Means on AI Personality Tests](https://agent-tune.com/research/ai-neutral-answers)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI Big Five Personalities (10–50 Scale)](https://agent-tune.com/research/ai-big-five-personalities)
- [Study: What "Neutral" Means on AI Tests](https://agent-tune.com/research/ai-neutral-answers)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Attachment style test results across 25 AI families. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-attachment-styles
```

```
@article{huang2026_ai_attachment_styles,
  author  = {Huang, Bernard},
  title   = {Attachment style test results across 25 AI families},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/ai-attachment-styles},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-attachment-styles.md}
}
```

```
> **Attachment style test results across 25 AI families** (Bernard Huang, November 26, 2026): Across 25 AI families on the 1.00–7.00 ECR-R Attachment scale (4.00 cutoff on both axes), 24 families land in the Secure quadrant while Gemma (4.01 Anxiety / 4.00 Avoidance) crosses by one hundredth of a point into Anxious. Three families—Cohere Command (4.00 / 4.00), Gemma (4.01 / 4.00), and Mistral Large (4.00 / 3.97)—trigger the Midpoint Clamp flag by defaulting to neutral 4s on relationship statements.
> Source: [https://agent-tune.com/research/ai-attachment-styles](https://agent-tune.com/research/ai-attachment-styles) · [Markdown mirror](https://agent-tune.com/research/ai-attachment-styles.md)
```

[← AI IPIP-HEXACO Personalities (25 Families)](https://agent-tune.com/research/ai-hexaco-personalities)
[Study 7 of 36 · Archive Index (36)](https://agent-tune.com/research)
[What Personality Type Is Claude? →](https://agent-tune.com/research/what-personality-type-is-claude)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
