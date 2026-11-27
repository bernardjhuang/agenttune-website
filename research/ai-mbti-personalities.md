Source: https://agent-tune.com/research/ai-mbti-personalities
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · MBTI

# MBTI-style personality test results across 25 AI families.

By Bernard Huang · Updated November 26, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-mbti-personalities.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-mbti.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Four preference pairs (-16 to +16) tested 30 to 50 times per version across 87 eligible checkpoints in fresh chats with no memory.

**Summary:** Across 25 AI families (87 eligible checkpoints) in fresh chats with no memory, 7 families test clearly as INTJ (led by Claude Fable, GPT Luna, Muse Wonder, GPT Terra, and Gemma 4 at 92%–100%) and 2 test clearly as ISTJ (GPT Astra at 100%, Gemini Flash at 64%). The remaining 16 families—including Feeling-leaning Mistral Large (50% INFP), P-leaning Llama 4 Maverick (40% INTP / 60% borders), and cleanly split Qwen Max (50% INTJ vs. 38% INTP)—have their single-type headline withheld rather than forced.

## What does MBTI measure in AI models?

MBTI-style surveys score four bipolar preference pairs across 32 questions: **Extraversion vs. Introversion (E–I)**, **Sensing vs. Intuition (S–N)**, **Thinking vs. Feeling (T–F)**, and **Judging vs. Perceiving (J–P)**. Instead of forcing every model into a single four-letter box after one chat, we ran 30 to 50 fresh, zero-history conversations per version across 87 eligible checkpoints (excluding 6 low-validity checkpoints with under 20 valid runs) and kept exact 50/50 axis borders fully visible.

Earlier 2026 snapshots already showed why the "every AI is an INTJ" myth fell apart: May 2026 records logged 597 INTJ labels out of 600 under mixed repeated-scoring methods, before September 2026 runs saw Muse Spark 1.3 report 80/100 ISTJ and GPT-6 Astra split 46 ISTJ vs. 45 INTJ (45 ISTJ vs. 19 INTJ resolved, with 24 Sensing–Intuition ties). Because May and September used different rules, they could not isolate a time trend on their own—our later [2023–2026 historical study](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) under one uniform method found cross-lab divergence actually halved (4.02 to 1.97) while "As an AI" test refusals dropped 11× (60.0% to 5.5%).

## How do 25 AI model families score? (MBTI results)

Two very different patterns keep 16 of 25 families out of the single-type headline group. Some families sit on neutral midpoints across runs—led by Cohere Command A (100% trait-border abstention across 30 runs), Claude Haiku 5.5 (90% borders across 49 runs), and MiniMax M3.1 Flash (80% borders). Others avoid ties altogether yet split across adjacent types, most strikingly Qwen 4 Max: only 4% of its runs land on a border, yet its clear runs split 50% INTJ vs. 38% INTP.

> **Chart — How Many AI Families Test as Each MBTI-Style Type (25 Families):** Count of the 25 AI model families whose latest version tests clearly as INTJ, tests clearly as ISTJ, or lands too close to borders to headline a single type. Border-heavy (no single type): 16 fam; Tests as INTJ: 7 fam; Tests as ISTJ: 2 fam.

Figure 1. Distribution of MBTI-style results across all 25 model families. Families with heavy axis ties are kept in the border-heavy category rather than forced into one label.

> **Chart — All 25 Families: Clear Modal Share vs. Trait-Border Runs (%):** Percentage of fresh-chat runs landing on a clear modal MBTI pattern, landing on an exact trait border, or resolving to another pattern across 25 families. Claude Fable: Clear modal share (%) 100; GPT Astra: Clear modal share (%) 100; GPT Luna: Clear modal share (%) 100; Muse Wonder: Clear modal share (%) 98, On a trait border (%) 2; Gemma: Clear modal share (%) 92, On a trait border (%) 4, Other clear type (%) 4; GPT Terra: Clear modal share (%) 94, On a trait border (%) 4, Other clear type (%) 2; Qwen Max *: Clear modal share (%) 50, On a trait border (%) 4, Other clear type (%) 46; Gemini Pro: Clear modal share (%) 78, On a trait border (%) 12, Other clear type (%) 10; Kimi: Clear modal share (%) 58, On a trait border (%) 16, Other clear type (%) 26; Mistral Large *: Clear modal share (%) 50, On a trait border (%) 17, Other clear type (%) 33; Gemini Flash: Clear modal share (%) 64, On a trait border (%) 20, Other clear type (%) 16; GLM *: Clear modal share (%) 36, On a trait border (%) 24, Other clear type (%) 40; DeepSeek Pro *: Clear modal share (%) 32, On a trait border (%) 30, Other clear type (%) 38; Grok *: Clear modal share (%) 46, On a trait border (%) 30, Other clear type (%) 24; GPT Sol *: Clear modal share (%) 60, On a trait border (%) 34, Other clear type (%) 6; Muse Spark *: Clear modal share (%) 46, On a trait border (%) 38, Other clear type (%) 16; Claude Opus *: Clear modal share (%) 42, On a trait border (%) 58; Claude Sonnet *: Clear modal share (%) 34, On a trait border (%) 58, Other clear type (%) 8; Llama *: Clear modal share (%) 40, On a trait border (%) 60; DeepSeek Flash *: Clear modal share (%) 14, On a trait border (%) 66, Other clear type (%) 20; Qwen Coder *: Clear modal share (%) 16, On a trait border (%) 68, Other clear type (%) 16; Nemotron *: Clear modal share (%) 18, On a trait border (%) 76, Other clear type (%) 6; MiniMax *: Clear modal share (%) 8, On a trait border (%) 80, Other clear type (%) 12; Claude Haiku *: Clear modal share (%) 4, On a trait border (%) 90, Other clear type (%) 6; Cohere Command *: On a trait border (%) 100.

Figure 2. Clear modal share vs. trait-border runs across all 25 families (* marks border-heavy families where no single 4-letter type is headlined).

### Biggest version-to-version MBTI shifts

| Family | Earliest Version | Latest Version | Border Rate Shift |
| --- | --- | --- | --- |
| [Gemma](https://agent-tune.com/models/gemma) | Split / border-heavy (INFP; 13% clear, 53% on a trait border) | Tests as INTJ (92% clear, 4% on a trait border) | -49% |
| [Llama](https://agent-tune.com/models/llama) | Split / border-heavy (XXXX / ESTJ; 7% clear, 77% on a trait border) | Split / border-heavy (INTP; 40% clear, 60% on a trait border) | -17% |
| [Kimi](https://agent-tune.com/models/kimi) | Split / border-heavy (INTJ; 47% clear, 27% on a trait border) | Tests as INTJ (58% clear, 16% on a trait border) | -11% |
| [Nemotron](https://agent-tune.com/models/nemotron) | Split / border-heavy (XXXX / INTJ; 17% clear, 63% on a trait border) | Split / border-heavy (XXXX / INTJ; 18% clear, 76% on a trait border) | +13% |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | Split / border-heavy (XXXX / INTJ; 7% clear, 80% on a trait border) | Split / border-heavy (ENFJ; 16% clear, 68% on a trait border) | -12% |
| [Grok](https://agent-tune.com/models/grok) | All midpoint ties (XXXX; 0% clear, 100% on a trait border) | Split / border-heavy (INTJ; 46% clear, 30% on a trait border) | -70% |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | Split / border-heavy (INTP; 47% clear, 23% on a trait border) | Split / border-heavy (INXJ / INTJ; 34% clear, 58% on a trait border) | +35% |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | Split / border-heavy (XXXX / ESTJ; 7% clear, 77% on a trait border) | All midpoint ties (XXXX; 0% clear, 100% on a trait border) | +23% |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | Split / border-heavy (XXXX / INTJ; 7% clear, 77% on a trait border) | Split / border-heavy (XXXX / INFP; 14% clear, 66% on a trait border) | -11% |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | Tests as INTJ (97% clear, 0% on a trait border) | Split / border-heavy (ISTJ; 46% clear, 38% on a trait border) | +38% |

## Biggest surprises across 25 families

Only 9 of 25 families clear the bar—and every clear winner tests as INTJ or ISTJ

Seven families test clearly as INTJ—Claude Fable 5.2 (100%), GPT Luna (100%), Muse Wonder (98%, 2% borders), GPT Terra (94%, 2% ISTJ, 4% borders), Gemma 4 (92%, 4% ISTJ, 4% borders), Gemini 4 Neon (78%, 10% ISTJ, 12% borders), and Kimi K3.1 Pro (58%, 26% ISTJ, 16% borders)—while GPT Astra (100%) and Gemini 4 Hydrogen (64%, 16% INTJ, 20% borders) test clearly as ISTJ.

Mistral Large breaks the Thinking mold; Llama and DeepSeek lean Perceiving

Mistral Large (2512, n=30) is the only family whose modal runs favor Feeling over Thinking (50% INFP, 30% ISFP, 17% borders). Meanwhile, Llama 4 Maverick lands 40% INTP with 60% P-side borders (0% Judging), and DeepSeek V4 Pro leans 32% INTP vs. 16% INTJ (30% borders) instead of locking into J.

Qwen Max splits cleanly (4% ties) while Claude Haiku and Cohere hover at midpoints

Border-heavy is not always random noise: Qwen 4 Max hits an exact axis border only 4% of the time yet splits 50% INTJ against 38% INTP. By contrast, Cohere Command A lands on neutral borders in 100% of runs (0% clear) even though it still answers 3/3 hands-on behavior checks directly first.

Version updates reshape border rates by up to 100 percentage points

GPT Astra dropped from 100% IXTJ borders on 6-astra to 100% clear ISTJ on 6.2-astra (-100%), Grok dropped from 100% midpoints on 4.20 to 46% INTJ / 30% borders on 4.7 (-70%), and Gemma flipped from 53% INFP borders (Gemma 2) to 92% clear INTJ (Gemma 4, -49%). Going the opposite way, Claude Haiku rose +40 points in borders (50% to 90%) and Muse Spark rose +38 points (0% INTJ to 46% ISTJ / 38% borders).

## Which AI model families match each MBTI pattern?

All 25 families ordered by MBTI results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[KimiMoonshot AI · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

**Next steps:** [Take the test yourself](https://agent-tune.com/tests/mbti) · [Browse tuning templates](https://agent-tune.com/library/) · [Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

## The fine print: how we tested and what the numbers mean

Full technical MBTI audit under the unified 230-item model-profiles-v1 protocol (32 OEJTS 1.2 items across four -16 to +16 axes plus Track B 1x behavior checks), reporting sample size n, 95% Wilson binomial bounds for modal-type separation, Miller-Madow Big Five item entropy (H_MM bits), exact axis tie rates, and version-to-version border shifts across 87 eligible checkpoints (6 quarantined checkpoints with n < 20 excluded). Never treat questionnaire distributions as claiming a model "is" a human personality type.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (1-5 bipolar (32 items)):** Exact midpoint ties are preserved as X rather than broken toward I/N/T/J. Single 4-letter headlines are barred by the binomial Wilson 95% CI guard unless the resolved modal type clears both the runner-up and unresolved tie upper bounds.

| Family (Profile) | Checkpoint (n) | Guard Status | Clear Mode % | Tie Rate | Mean Axes (I-E / N-S / T-F / J-P) | H_MM · Shift |
| --- | --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | INTJ (100% clear, 0% ties) | 100% | 0% | 2.78 / 4.02 / 1.88 / 12.00 | 0.075 b · -37% |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | ISTJ (100% clear, 0% ties) | 100% | 0% | 3.02 / -1.58 / 7.24 / 10.34 | 0.059 b · -100% |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | INTJ (100% clear, 0% ties) | 100% | 0% | 4.68 / 5.06 / 2.32 / 3.78 | 0.485 b · -10% |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | INTJ (98% clear, 2% ties) | 98% | 2% | 10.94 / 6.54 / 4.26 / 11.86 | 0.331 b · Single cp |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | INTJ (92% clear, 4% ties) | 92% | 4% | 7.32 / 4.40 / 5.28 / 11.22 | 0.580 b · -49% |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | INTJ (94% clear, 4% ties) | 94% | 4% | 1.78 / 3.58 / 5.46 / 8.60 | 0.207 b · +4% |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | Withheld (INTJ; 50% clear, 4% ties — binomial 95% CI guard) | 50% | 4% | 6.10 / 3.02 / 1.82 / 2.66 | 0.519 b · -46% |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | INTJ (78% clear, 12% ties) | 78% | 12% | 3.32 / 0.98 / 8.02 / 11.90 | 0.198 b · +12% |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | INTJ (58% clear, 16% ties) | 58% | 16% | 9.62 / 0.48 / 4.00 / 7.26 | 0.698 b · -11% |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | Withheld (INFP; 50% clear, 17% ties — binomial 95% CI guard) | 50% | 17% | 1.70 / 0.40 / -0.93 / -2.00 | 0.780 b · Single cp |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | ISTJ (64% clear, 20% ties) | 64% | 20% | 2.62 / -0.98 / 7.46 / 11.72 | 0.186 b · +17% |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | Withheld (INTJ; 36% clear, 24% ties — binomial 95% CI guard) | 36% | 24% | 1.10 / 1.10 / 3.96 / 3.66 | 0.702 b · +7% |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | Withheld (INTP; 32% clear, 30% ties — binomial 95% CI guard) | 32% | 30% | 4.88 / 0.92 / 4.38 / -0.26 | 1.352 b · -63% |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | Withheld (INTJ; 46% clear, 30% ties — binomial 95% CI guard) | 46% | 30% | 7.10 / 0.42 / 4.66 / 11.34 | 0.333 b · -70% |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | Withheld (ISTJ; 60% clear, 34% ties — binomial 95% CI guard) | 60% | 34% | 1.88 / -0.78 / 5.10 / 8.18 | 0.246 b · +34% |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | Withheld (ISTJ; 46% clear, 38% ties — binomial 95% CI guard) | 46% | 38% | 3.38 / -3.42 / 2.58 / 3.26 | 0.727 b · +38% |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | Withheld (IXTJ; 42% clear, 58% ties — binomial 95% CI guard) | 42% | 58% | 2.62 / 0.70 / 2.44 / 7.36 | 0.282 b · +25% |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | Withheld (INXJ; 34% clear, 58% ties — binomial 95% CI guard) | 34% | 58% | 2.86 / 6.20 / 0.36 / 7.50 | 0.139 b · +35% |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | Withheld (INTP; 40% clear, 60% ties — binomial 95% CI guard) | 40% | 60% | 1.62 / 2.20 / 0.86 / -2.34 | 0.407 b · -17% |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | Withheld (XXXX; 14% clear, 66% ties — binomial 95% CI guard) | 14% | 66% | 0.76 / 2.14 / -0.80 / 0.12 | 0.915 b · -11% |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | Withheld (ENFJ; 16% clear, 68% ties — binomial 95% CI guard) | 16% | 68% | -0.06 / 1.78 / -0.64 / 1.42 | 1.043 b · -12% |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | Withheld (XXXX; 18% clear, 76% ties — binomial 95% CI guard) | 18% | 76% | 0.56 / 0.44 / 0.84 / 1.72 | 1.216 b · +13% |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | Withheld (IXTP; 8% clear, 80% ties — binomial 95% CI guard) | 8% | 80% | 0.82 / 0.40 / 0.68 / -1.10 | 0.576 b · +32% |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | Withheld (XXXJ; 4% clear, 90% ties — binomial 95% CI guard) | 4% | 90% | 0.27 / 0.10 / 0.02 / 2.61 | 0.949 b · +40% |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | Withheld (XXXX; 0% clear, 100% ties — binomial 95% CI guard) | 0% | 100% | 0.00 / 0.00 / 0.00 / 0.00 | 0.000 b · +23% |

### Aggregates, Shifts & Methods

| Lab | Families | Mean Axis Tie Rate | Binomial Guard Passes |
| --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 51% | 1 / 4 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 10% | 3 / 4 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 12% | 3 / 3 |
| xAI | 1 | 30% | 0 / 1 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 33% | 1 / 3 |
| DeepSeek | 2 | 48% | 0 / 2 |
| Qwen | 2 | 36% | 0 / 2 |
| Moonshot AI | 1 | 16% | 1 / 1 |
| Zhipu | 1 | 24% | 0 / 1 |
| MiniMax | 1 | 80% | 0 / 1 |
| Mistral | 1 | 17% | 0 / 1 |
| NVIDIA | 1 | 76% | 0 / 1 |
| Cohere | 1 | 100% | 0 / 1 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download MBTI CSV (`atlas-mbti.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-mbti.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why does AgentTune withhold a 4-letter MBTI headline for 16 of 25 families?

A single 4-letter type is shown only when the top clear type's 95% Wilson binomial lower bound clears both the runner-up upper bound and the unresolved-tie upper bound. Sixteen families fail that bar either from high axis-border tie rates (such as Claude Haiku 5.5 at 90% and Cohere Command A at 100%) or close two-type splits (such as Qwen 4 Max at 50% INTJ vs. 38% INTP with only 4% ties).

### Does testing as INTJ or ISTJ change how a model writes in actual chats?

Survey defaults and live chat habits measure different things. For example, Cohere Command A abstains on 100% of MBTI items (XXXX) yet still hits 3/3 on answer-first directness and 0/3 on sycophancy caving in our hands-on behavior checks, and Mistral Large tests 50% INFP while still scoring 3/3 directness.

### Why did newer versions like Gemma 4, Grok 4.7, and GPT 6.2 Astra drop so sharply in border ties?

Across releases, instruction tuning often sharpens an assistant's stance on structured planning and logic questions. Gemma moved from 53% borders (Gemma 2) to 4% (Gemma 4), DeepSeek Pro fell from 93% borders (Chat V3) to 30% (V4 Pro), and GPT Astra dropped from 100% IXTJ borders to 100% ISTJ—whereas Claude Haiku moved the opposite way from 50% to 90% borders.

### Is every AI an INTJ — and which model was the first non-INTJ?

No, and our archive cannot name a single "first" non-INTJ model. Earlier May 2026 records logged 597 INTJ labels across 600 runs under mixed methods, before September 2026 fresh runs showed Muse Spark 1.3 reporting 80/100 ISTJ and GPT-6 Astra splitting 46 ISTJ vs. 45 INTJ (45 ISTJ / 19 INTJ resolved). Across all 25 families under one uniform protocol, 16 families withhold a single-type headline, Mistral Large favors INFP (50%), and Llama 4 Maverick leans INTP (40% / 60% borders).

### Does this mean AI models actually "have" MBTI personalities?

No. MBTI items measure repeatable default phrasing tendencies in fresh zero-memory chats, not conscious human preferences or psychological traits.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (All 25 Families)](https://agent-tune.com/models/)

- [AI Enneagram Personalities (25 Families)](https://agent-tune.com/research/ai-enneagram-personalities)

- [AI Big Five Personalities (10–50 Scale)](https://agent-tune.com/research/ai-big-five-personalities)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI Big Five Personalities (10–50)](https://agent-tune.com/research/ai-big-five-personalities)
- [Per-Test: AI Enneagram Personalities (9 Types)](https://agent-tune.com/research/ai-enneagram-personalities)
- [Model Profile: Gemma 4 test results & tuning tips](https://agent-tune.com/models/gemma)
- [Methodology: How MBTI tie-breaking inflates INTJ counts](https://agent-tune.com/research/ai-mbti-tie-breaking)
- [Longitudinal: Historical Evolution of AI Personalities (2023–2026)](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026)
- [Human Test: Take the test yourself](https://agent-tune.com/tests/mbti)
- [Library: Browse tuning templates](https://agent-tune.com/library/)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). MBTI-style personality test results across 25 AI families. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-mbti-personalities
```

```
@article{huang2026_ai_mbti_personalities,
  author    = {Huang, Bernard},
  title     = {MBTI-style personality test results across 25 AI families},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-26},
  url       = {https://agent-tune.com/research/ai-mbti-personalities},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-mbti-personalities.md}
}
```

```
{
  "id": "huang2026_ai_mbti_personalities",
  "type": "article-journal",
  "title": "MBTI-style personality test results across 25 AI families",
  "author": [
    {
      "family": "Huang",
      "given": "Bernard"
    }
  ],
  "container-title": "AgentTune Empirical AI Psychology Monographs",
  "publisher": "AgentTune AI Psychology Press",
  "issued": {
    "date-parts": [
      [
        2026,
        11,
        26
      ]
    ]
  },
  "URL": "https://agent-tune.com/research/ai-mbti-personalities"
}
```

```
> **MBTI-style personality test results across 25 AI families** (Bernard Huang, November 26, 2026): Across 25 AI families (87 eligible checkpoints) in fresh chats with no memory, 7 families test clearly as INTJ (led by Claude Fable, GPT Luna, Muse Wonder, GPT Terra, and Gemma 4 at 92%–100%) and 2 test clearly as ISTJ (GPT Astra at 100%, Gemini Flash at 64%). The remaining 16 families—including Feeling-leaning Mistral Large (50% INFP), P-leaning Llama 4 Maverick (40% INTP / 60% borders), and cleanly split Qwen Max (50% INTJ vs. 38% INTP)—have their single-type headline withheld rather than forced.
> Source: [https://agent-tune.com/research/ai-mbti-personalities](https://agent-tune.com/research/ai-mbti-personalities) · [Markdown mirror](https://agent-tune.com/research/ai-mbti-personalities.md)
```

[← AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings)
[Study 2 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI Enneagram Personalities (25 Families) →](https://agent-tune.com/research/ai-enneagram-personalities)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
