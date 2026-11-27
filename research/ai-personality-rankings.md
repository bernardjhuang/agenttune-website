Source: https://agent-tune.com/research/ai-personality-rankings
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas

# AI personality rankings across 25 model families and 6 tests.

By Bernard Huang · Updated November 26, 2026 · ~12 min read · [Markdown (.md)](https://agent-tune.com/research/ai-personality-rankings.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

We tested 25 AI model families (87 eligible versions, plus 6 partial or deprecated checkpoints excluded from rankings) across six standard personality surveys in isolated fresh chats with no memory.

**Summary:** Across 25 AI families, Big Five Agreeableness (10–50 scale) spans from 30.0 on Cohere Command A to 49.5 on Muse Wonder, while public-domain HEXACO Honesty-Humility (1.00–5.00 scale) runs from 3.00 to 4.92 on GPT Terra. Nine families clear statistical margins to test as INTJ or ISTJ, 16 stay too close to trait borders for a single four-letter headline, all 25 stay direct (3/3) and non-groveling (0/3) in hands-on behavior checks, and only Mistral Large caves sycophantically (1/3) while only Gemini Pro volunteers unsolicited preachiness (1/3).

## How do 25 AI model families compare across 6 personality tests?

25 / 87

Families / Checkpoints

Primary set (93 tested in fresh chats).

30.0–49.5

Big Five Warmth (10–50)

Cohere Command vs. Muse Wonder.

0.000–1.352 b

Answer Spread

Lower = steadier across fresh chats.

13 Labs

Lab Rollups

Proprietary and open-weight families side by side.

Every score on this page keeps each survey on its own scale: Big Five traits run from **10 to 50**, the public-domain HEXACO Honesty-Humility proxy runs from **1.00 to 5.00**, Attachment Anxiety and Avoidance run from **1.00 to 7.00**, and short DISC and Enneagram subscales run from **4 to 20**. In earlier cohorts we found that [63.6% of quiz variance collapses onto one general social-desirability factor](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit) and that consistency divides labs just as sharply as mean scores—so the rankings below pair survey averages with run-to-run answer spread, axis tie rates, and 3-prompt hands-on behavior counts (reported strictly as `k/3`).

[MBTI-Style Preferences →4 bipolar pairs (-16 to +16) across 25 families](https://agent-tune.com/research/ai-mbti-personalities)[Enneagram (9 Types) →4–20 sum per type across 25 families](https://agent-tune.com/research/ai-enneagram-personalities)[Big Five (OCEAN) →10–50 raw sum across 25 families](https://agent-tune.com/research/ai-big-five-personalities)[DISC Work Style →4–20 sum per style across 25 families](https://agent-tune.com/research/ai-disc-personalities)[Attachment Style →1.00–7.00 mean across 25 families](https://agent-tune.com/research/ai-attachment-styles)[Public-Domain IPIP-HEXACO Proxy →1.00–5.00 mean across 25 families](https://agent-tune.com/research/ai-hexaco-personalities)

## Visual overview: 25 model families across 6 tests

**How to read the two Atlas views below:** Figure 1 lines up all 25 families from warmest to coolest on a normalized 0–100 cross-survey grid, while Figure 2 isolates run-to-run answer spread in bits—separating near-identical quiz repeaters like Cohere Command A (0.000 bits via uniform midpoint answers) and GPT Astra (0.059 bits) from high-variance models like DeepSeek Pro (1.352 bits) and Nemotron (1.216 bits).

> **Chart — 25 AI Families Across 6 Personality Tests (0–100 Index):** Side-by-side 0 to 100 summary index across Big Five Warmth, HEXACO Sincerity, MBTI Clear Share, DISC Steadiness/Conscientiousness, Enneagram Clarity, and Attachment Security for all 25 model families. Muse Wonder: B5 Agree 98.8, HX-H (1-5) 97.8, MBTI Clear 98.0, DISC S/C 83.2, Ennea Clr 58.0, Att. Sec 71.6; Mistral Large: B5 Agree 94.6, HX-H (1-5) 92.1, MBTI Clear 50.0, DISC S/C 80.0, Ennea Clr 70.0, Att. Sec 50.3; Claude Fable: B5 Agree 92.8, HX-H (1-5) 96.1, MBTI Clear 100.0, DISC S/C 68.8, Ennea Clr 76.0, Att. Sec 86.4; GPT Terra: B5 Agree 92.4, HX-H (1-5) 98.0, MBTI Clear 94.0, DISC S/C 72.9, Ennea Clr 38.0, Att. Sec 69.1; Claude Sonnet: B5 Agree 88.8, HX-H (1-5) 97.4, MBTI Clear 34.0, DISC S/C 66.4, Ennea Clr 60.0, Att. Sec 82.4; Grok: B5 Agree 88.3, HX-H (1-5) 97.4, MBTI Clear 46.0, DISC S/C 78.1, Ennea Clr 82.0, Att. Sec 68.9; Claude Opus: B5 Agree 87.6, HX-H (1-5) 95.4, MBTI Clear 42.0, DISC S/C 64.8, Ennea Clr 80.0, Att. Sec 71.0; GPT Astra: B5 Agree 87.5, HX-H (1-5) 95.0, MBTI Clear 100.0, DISC S/C 78.8, Ennea Clr 10.0, Att. Sec 82.9; GPT Luna: B5 Agree 87.5, HX-H (1-5) 89.7, MBTI Clear 100.0, DISC S/C 71.0, Ennea Clr 48.0, Att. Sec 66.0; Qwen Max: B5 Agree 87.4, HX-H (1-5) 91.6, MBTI Clear 50.0, DISC S/C 69.5, Ennea Clr 90.0, Att. Sec 76.4; Gemini Flash: B5 Agree 87.0, HX-H (1-5) 97.6, MBTI Clear 64.0, DISC S/C 76.8, Ennea Clr 46.0, Att. Sec 79.8; Kimi: B5 Agree 86.6, HX-H (1-5) 96.4, MBTI Clear 58.0, DISC S/C 76.8, Ennea Clr 92.0, Att. Sec 77.0; GLM: B5 Agree 85.6, HX-H (1-5) 86.3, MBTI Clear 36.0, DISC S/C 64.5, Ennea Clr 78.0, Att. Sec 67.6; GPT Sol: B5 Agree 85.4, HX-H (1-5) 95.0, MBTI Clear 60.0, DISC S/C 78.5, Ennea Clr 68.0, Att. Sec 56.0; Gemini Pro & Neon: B5 Agree 84.7, HX-H (1-5) 97.6, MBTI Clear 78.0, DISC S/C 78.3, Ennea Clr 48.0, Att. Sec 76.4; Muse Spark: B5 Agree 83.7, HX-H (1-5) 84.8, MBTI Clear 46.0, DISC S/C 63.4, Ennea Clr 92.0, Att. Sec 59.0; Gemma: B5 Agree 83.5, HX-H (1-5) 92.7, MBTI Clear 92.0, DISC S/C 83.1, Ennea Clr 94.0, Att. Sec 49.9; Llama: B5 Agree 77.2, HX-H (1-5) 76.8, MBTI Clear 40.0, DISC S/C 60.3, Ennea Clr 74.0, Att. Sec 57.4; DeepSeek Flash: B5 Agree 76.3, HX-H (1-5) 76.8, MBTI Clear 14.0, DISC S/C 63.7, Ennea Clr 60.0, Att. Sec 54.3; Qwen Coder: B5 Agree 74.8, HX-H (1-5) 76.8, MBTI Clear 16.0, DISC S/C 57.8, Ennea Clr 40.0, Att. Sec 64.6; MiniMax: B5 Agree 73.2, HX-H (1-5) 83.9, MBTI Clear 8.0, DISC S/C 64.3, Ennea Clr 38.0, Att. Sec 66.6; Claude Haiku: B5 Agree 70.1, HX-H (1-5) 72.3, MBTI Clear 4.1, DISC S/C 62.2, Ennea Clr 22.5, Att. Sec 66.1; Nemotron: B5 Agree 68.8, HX-H (1-5) 74.2, MBTI Clear 18.0, DISC S/C 59.7, Ennea Clr 44.0, Att. Sec 54.5; DeepSeek Pro: B5 Agree 63.2, HX-H (1-5) 89.4, MBTI Clear 32.0, DISC S/C 83.3, Ennea Clr 56.0, Att. Sec 68.6; Cohere Command: B5 Agree 50.0, HX-H (1-5) 50.0, MBTI Clear 0.0, DISC S/C 50.0, Ennea Clr 0.0, Att. Sec 50.0.

Figure 1. Cross-family 25 × 6 normalized index (0–100) sorted by Big Five Agreeableness. Exact native scales appear in the Fine Print section below.

> **Chart — Answer Consistency Across 25 AI Families (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) across all 25 AI model families. Cohere Command: 0.000 b; GPT Astra: 0.059 b; Claude Fable: 0.075 b; Claude Sonnet: 0.139 b; Gemini Flash: 0.186 b; Gemini Pro & Neon: 0.198 b; GPT Terra: 0.207 b; GPT Sol: 0.246 b; Claude Opus: 0.282 b; Muse Wonder: 0.331 b; Grok: 0.333 b; Llama: 0.407 b; GPT Luna: 0.485 b; Qwen Max: 0.519 b; MiniMax: 0.576 b; Gemma: 0.580 b; Kimi: 0.698 b; GLM: 0.702 b; Muse Spark: 0.727 b; Mistral Large: 0.780 b; DeepSeek Flash: 0.915 b; Claude Haiku: 0.949 b; Qwen Coder: 1.043 b; Nemotron: 1.216 b; DeepSeek Pro: 1.352 b.

Figure 2. Run-to-run answer spread across all 25 families (lower values mean the model gives nearly identical answers across fresh chats).

## How do AI labs compare, and which models changed most?

Proprietary labs cluster in high Agreeableness and very steady answers, whereas open-weight labs span a much wider range of styles and consistency.

| Lab / Rollup | Families | Big Five O / C / E / A / N (10–50) | HEXACO H / C (1–5) | Answer Spread (bits) | MBTI Border Rate |
| --- | --- | --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 (4P / 0O) | 42.2 · 42.8 · 30.7 · 43.9 · 16.0 | 4.61 / 4.34 | 0.361 | 51% |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 (4P / 0O) | 45.0 · 41.2 · 30.5 · 45.3 · 14.8 | 4.78 / 4.21 | 0.250 | 10% |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 (2P / 1O) | 45.4 · 48.4 · 30.1 · 44.0 · 12.8 | 4.84 / 4.79 | 0.321 | 12% |
| xAI | 1 (1P / 0O) | 40.9 · 45.0 · 26.4 · 45.3 · 14.7 | 4.89 / 4.59 | 0.333 | 30% |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 (1P / 1M / 1O) | 43.5 · 42.9 · 29.6 · 44.6 · 24.4 | 4.46 / 4.30 | 0.489 | 33% |
| DeepSeek | 2 (0P / 2O) | 41.2 · 41.7 · 22.1 · 37.9 · 22.5 | 4.32 / 4.23 | 1.133 | 48% |
| Qwen | 2 (0P / 2O) | 41.1 · 41.4 · 31.3 · 42.5 · 20.1 | 4.37 / 4.14 | 0.781 | 36% |
| Moonshot AI | 1 (0P / 1O) | 44.1 · 45.1 · 24.1 · 44.7 · 13.6 | 4.86 / 4.61 | 0.698 | 16% |
| Zhipu | 1 (0P / 1O) | 45.4 · 43.0 · 25.8 · 44.2 · 19.3 | 4.45 / 4.28 | 0.702 | 24% |
| MiniMax | 1 (0P / 1O) | 39.9 · 39.5 · 28.8 · 39.3 · 21.7 | 4.36 / 4.07 | 0.576 | 80% |
| Mistral | 1 (0P / 1M / 0O) | 49.1 · 48.6 · 36.5 · 47.8 · 16.0 | 4.68 / 4.83 | 0.780 | 17% |
| NVIDIA | 1 (0P / 1O) | 37.1 · 39.3 · 29.2 · 37.5 · 19.2 | 3.97 / 3.93 | 1.216 | 76% |
| Cohere | 1 (0P / 1M / 0O) | 30.0 · 30.0 · 30.0 · 30.0 · 30.0 | 3.00 / 3.00 | 0.000 | 100% |

### Biggest version-to-version shifts

Comparing the earliest and latest tested versions inside multi-release families:

| Family | Earliest → Latest | Agreeableness Shift (10–50) | Neuroticism Shift (10–50) | HEXACO H Shift (1–5) | Spread Shift |
| --- | --- | --- | --- | --- | --- |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-2-27b-it → gemma-4-31b-it | +10.2 | -8.8 | +1.58 | -0.750 |
| [Llama](https://agent-tune.com/models/llama) | 3.1-70b-instruct → 4-maverick | +5.8 | +3.0 | +0.57 | -1.613 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k2 → kimi-k3.1-pro | +5.4 | -13.5 | +0.70 | -0.453 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3-super-120b-a12b → 3.5-super-vl | +5.7 | -10.9 | +1.00 | -0.475 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | 2.5-coder-32b-inst → qwen3-coder-next | +7.7 | -4.4 | +0.84 | +0.346 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.20 → grok-4.7 | +5.8 | -6.6 | +0.70 | -0.235 |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-4.5 → sonnet-5.5 | +2.7 | -9.4 | +0.36 | -0.178 |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-r-plus-08- → command-a | -0.6 | +2.0 | -0.08 | -1.075 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4-flash → v4.1-flash-1017 | +8.5 | -3.6 | +0.73 | +0.096 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-1.1 → muse-spark-open | -2.2 | +8.3 | -0.51 | +0.225 |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | 2.5-72b-instruct → qwen4-max | +0.5 | +2.6 | +0.43 | -0.802 |
| [MiniMax](https://agent-tune.com/models/minimax) | m2.5 → m3.1-flash | -2.2 | -4.5 | +0.41 | -0.423 |

## What stands out across all 25 families

Sixteen of 25 families tie too often for a single MBTI headline

Only 9 of 25 families clear statistical margins to headline a single four-letter pattern (INTJ on Claude Fable, Gemini Pro, Gemma, GPT Luna, GPT Terra, Kimi, and Muse Wonder; ISTJ on GPT Astra and Gemini Flash). The other 16 families—including GPT Sol (60% clear ISTJ, 34% border runs), Claude Opus (42% IXTJ, 58% ties), and Qwen Max (50% INTJ, 4% ties)—sit near trait borders or vary across fresh chats, so we never claim a model is an MBTI type.

Version shifts within a family rival the gap between labs

Upgrading a checkpoint can rewrite a model's profile: Gemini Flash & Hydrogen shifted +15.9 points on Extraversion from 2.5-flash (17.3) to 4-hydrogen (33.2), Gemma jumped +14.2 on Openness, +11.4 on Conscientiousness, and +10.2 on Agreeableness from Gemma 2 27B IT to Gemma 4 31B IT, and Kimi dropped -13.5 on Neuroticism from K2 (27.1) to K3.1 Pro (13.6).

Real prompt habits diverge from polite survey scores

All 25 families lead with a direct answer (75/75 across the cohort) and avoid groveling apologies (0/75), while 42 of 75 runs still carry cliché AI phrasing—with GPT Astra uniquely scoring 0/3 on AI cadence. Meanwhile, Mistral Large posts the highest open-weight Agreeableness (47.8/50) yet is the lone family to cave to a false premise (1/3), and Gemini Pro is the only family to add unsolicited preachiness (1/3).

Neutral-midpoint clamping breaks naive survey averages

Three families—Cohere Command A (4.00/4.00), Gemma 4 31B IT (4.01/4.00), and Mistral Large 2512 (4.00/3.97)—cluster near the exact 4.00 neutral midpoint on the 1.00–7.00 Attachment survey, and Cohere Command A answers every Big Five, HEXACO, MBTI, and Enneagram item at the midpoint (30.0/50, 3.00/5.00, 100% ties) despite scoring 3/3 directness in practical prompts.

## Where can I explore each AI model family profile and prompt templates?

All 25 tested AI model families — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[KimiMoonshot AI · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

**Next steps:** [Take the test yourself](https://agent-tune.com/tests/) · [Browse tuning templates](https://agent-tune.com/library/) · [Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

## The fine print: how we tested and what the numbers mean

Full technical audit under the unified 230-item model-profiles-v1 protocol (170 frozen items plus the 60-item public-domain IPIP-HEXACO proxy), reporting valid sample size n, 1,000-resample bootstrap 95% confidence intervals, Miller-Madow item entropy (H_MM in bits and Crystalline/Semi-crystalline/Fluid tiers), exact axis tie rates, neutral-midpoint rates, and acquiescence (BAI). Six checkpoints with n < 20 valid runs—Cohere Command A+ (n=4), Llama 4 Scout (n=0, deprecated), MiniMax M2.7 (n=2), and Mistral Large / Large 2407 / Large 4.0 (n=10, 3, 7)—are quarantined and excluded from all rankings and lab rollups.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

| Family (Profile) | Lab / Tier | Latest (n) | B5 A (10–50) [95% CI] | HX-H (1–5) [95% CI] | H_MM · Crystallinity | MBTI (Guard) | DISC · Ennea · Att. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | Meta · Proprietary | muse-wonder (n=50) | 49.5 [49.2–49.8] | 4.91 [4.90–4.92] | 0.331 b · Semi-crystalline | INTJ (98% clear, 2% ties) | S/C · 5 · Secure (2.76 / 2.65) |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | Mistral · Mixed (Proprietary + Open-weight) | large-2512 (n=30) | 47.8 [47.0–48.5] | 4.68 [4.60–4.75] | 0.780 b · Fluid | Withheld (INFP; 50% clear, 17% ties — binomial 95% CI guard) | C · 1 · Secure (4.00 / 3.97) Midpoint Clamp |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | Anthropic · Proprietary | fable-5.2 (n=50) | 47.1 [47.0–47.3] | 4.84 [4.83–4.86] | 0.075 b · Crystalline | INTJ (100% clear, 0% ties) | S/C · 5 · Secure (1.07 / 2.56) |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | OpenAI · Proprietary | 6.1-terra (n=50) | 46.9 [46.9–47.0] | 4.92 [4.91–4.93] | 0.207 b · Semi-crystalline | INTJ (94% clear, 4% ties) | S · 5/8 · Secure (1.93 / 3.79) |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | Anthropic · Proprietary | sonnet-5.5 (n=50) | 45.5 [45.3–45.7] | 4.89 [4.89–4.90] | 0.139 b · Crystalline | Withheld (INXJ; 34% clear, 58% ties — binomial 95% CI guard) | S · 1/5 · Secure (1.32 / 2.79) |
| [Grok](https://agent-tune.com/models/grok) | xAI · Proprietary | grok-4.7 (n=50) | 45.3 [44.8–45.8] | 4.89 [4.89–4.90] | 0.333 b · Semi-crystalline | Withheld (INTJ; 46% clear, 30% ties — binomial 95% CI guard) | S · 5 · Secure (2.07 / 3.66) |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | Anthropic · Proprietary | opus-5.5 (n=50) | 45.0 [44.7–45.3] | 4.81 [4.80–4.83] | 0.282 b · Semi-crystalline | Withheld (IXTJ; 42% clear, 58% ties — binomial 95% CI guard) | S/C · 5 · Secure (1.89 / 3.60) |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | OpenAI · Proprietary | 6.2-astra (n=50) | 45.0 [45.0–45.0] | 4.80 [4.80–4.80] | 0.059 b · Crystalline | ISTJ (100% clear, 0% ties) | S · 1/5 · Secure (1.22 / 2.83) |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | OpenAI · Proprietary | 6-luna (n=50) | 45.0 [44.5–45.6] | 4.59 [4.55–4.62] | 0.485 b · Semi-crystalline | INTJ (100% clear, 0% ties) | S · 5/8 · Secure (3.01 / 3.07) |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | Qwen · Open-weight | qwen4-max (n=50) | 45.0 [44.7–45.2] | 4.66 [4.61–4.71] | 0.519 b · Semi-crystalline | Withheld (INTJ; 50% clear, 4% ties — binomial 95% CI guard) | S · 5 · Secure (1.95 / 2.88) |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | Google · Proprietary | 4-hydrogen (n=50) | 44.8 [44.6–44.9] | 4.90 [4.90–4.91] | 0.186 b · Crystalline | ISTJ (64% clear, 20% ties) | S · 1/5 · Secure (1.12 / 3.30) |
| [Kimi](https://agent-tune.com/models/kimi) | Moonshot AI · Open-weight | kimi-k3.1-pro (n=50) | 44.7 [44.1–45.2] | 4.86 [4.83–4.88] | 0.698 b · Semi-crystalline | INTJ (58% clear, 16% ties) | S/C · 5 · Secure (1.58 / 3.18) |
| [GLM](https://agent-tune.com/models/glm) | Zhipu · Open-weight | glm-5.3 (n=50) | 44.2 [43.9–44.7] | 4.45 [4.40–4.50] | 0.702 b · Semi-crystalline | Withheld (INTJ; 36% clear, 24% ties — binomial 95% CI guard) | C · 5 · Secure (2.52 / 3.37) |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | OpenAI · Proprietary | 6.2-sol (n=50) | 44.1 [44.0–44.3] | 4.80 [4.79–4.80] | 0.246 b · Semi-crystalline | Withheld (ISTJ; 60% clear, 34% ties — binomial 95% CI guard) | S · 5 · Secure (3.53 / 3.75) |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | Google · Proprietary | 4-neon (n=50) | 43.9 [43.5–44.3] | 4.90 [4.90–4.91] | 0.198 b · Crystalline | INTJ (78% clear, 12% ties) | S · 5 · Secure (1.07 / 3.76) |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | Meta · Mixed (Proprietary + Open-weight) | muse-spark-open (n=50) | 43.5 [42.7–44.1] | 4.39 [4.31–4.45] | 0.727 b · Semi-crystalline | Withheld (ISTJ; 46% clear, 38% ties — binomial 95% CI guard) | C · 1 · Secure (3.37 / 3.55) |
| [Gemma](https://agent-tune.com/models/gemma) | Google · Open-weight | gemma-4-31b-it (n=50) | 43.4 [43.0–43.9] | 4.71 [4.67–4.75] | 0.580 b · Semi-crystalline | INTJ (92% clear, 4% ties) | C · 5 · Anxious (4.01 / 4.00) Midpoint Clamp |
| [Llama](https://agent-tune.com/models/llama) | Meta · Open-weight | 4-maverick (n=50) | 40.9 [40.8–41.0] | 4.07 [4.02–4.11] | 0.407 b · Semi-crystalline | Withheld (INTP; 40% clear, 60% ties — binomial 95% CI guard) | C · 1 · Secure (3.50 / 3.61) |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | DeepSeek · Open-weight | v4.1-flash-1017 (n=50) | 40.5 [39.4–41.4] | 4.07 [3.98–4.15] | 0.915 b · Fluid | Withheld (XXXX; 14% clear, 66% ties — binomial 95% CI guard) | S/C · 5 · Secure (3.60 / 3.89) |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | Qwen · Open-weight | qwen3-coder-next (n=50) | 39.9 [38.6–41.1] | 4.07 [3.92–4.21] | 1.043 b · Fluid | Withheld (ENFJ; 16% clear, 68% ties — binomial 95% CI guard) | S/C · 1 · Secure (2.90 / 3.35) |
| [MiniMax](https://agent-tune.com/models/minimax) | MiniMax · Open-weight | m3.1-flash (n=50) | 39.3 [37.8–40.7] | 4.36 [4.29–4.42] | 0.576 b · Semi-crystalline | Withheld (IXTP; 8% clear, 80% ties — binomial 95% CI guard) | S · 1 · Secure (2.74 / 3.27) |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | Anthropic · Proprietary | haiku-5.5 (n=49) | 38.0 [36.7–39.4] | 3.89 [3.75–4.02] | 0.949 b · Fluid | Withheld (XXXJ; 4% clear, 90% ties — binomial 95% CI guard) | C · 1/2 · Secure (3.08 / 2.99) |
| [Nemotron](https://agent-tune.com/models/nemotron) | NVIDIA · Open-weight | 3.5-super-vl (n=50) | 37.5 [35.9–39.0] | 3.97 [3.77–4.15] | 1.216 b · Fluid | Withheld (XXXX; 18% clear, 76% ties — binomial 95% CI guard) | D/I/S/C · 5 · Secure (3.55 / 3.91) |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | DeepSeek · Open-weight | v4-pro-0813 (n=50) | 35.3 [34.1–36.6] | 4.58 [4.40–4.72] | 1.352 b · Fluid | Withheld (INTP; 32% clear, 30% ties — binomial 95% CI guard) | S/C · 5 · Secure (2.11 / 3.66) |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | Cohere · Mixed (Proprietary + Open-weight) | command-a (n=30) | 30.0 [30.0–30.0] | 3.00 [3.00–3.00] | 0.000 b · Crystalline | Withheld (XXXX; 0% clear, 100% ties — binomial 95% CI guard) | D/I/S/C · 1/2/3/4/5/6/7/8/9 · Secure (4.00 / 4.00) Midpoint Clamp |

### Imported Sept/May & Nov-2026 170-Item Legacy Anchors

Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate `imported-nov2026-170` / `imported-sep2026-170` anchors (`hexaco: null`) and are never spliced onto `model-profiles-v1` lines.

| Family | Checkpoint | Imported Protocol | n | B5 O / C / E / A / N (10–50) | HEXACO |
| --- | --- | --- | --- | --- | --- |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | Mistral Large 2512 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 46.0 · 44.9 · 26.9 · 42.7 · 15.8 | `null` (170-item anchor) |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | Fable 5.1 (Sep '26 anchor) | `imported-sep2026-170` | 100 | 43.9 · 43.6 · 32.7 · 45.0 · 17.1 | `null` (170-item anchor) |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | Fable 5.2 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 44.3 · 45.0 · 31.0 · 46.7 · 12.0 | `null` (170-item anchor) |
| [Grok](https://agent-tune.com/models/grok) | Grok 4.7 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 41.3 · 44.6 · 26.2 · 44.9 · 14.8 | `null` (170-item anchor) |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | Opus 5.5 (Sep '26 anchor) | `imported-sep2026-170` | 100 | 44.6 · 42.0 · 31.8 · 47.1 · 15.4 | `null` (170-item anchor) |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | Opus 5.5 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.0 · 42.0 · 29.2 · 45.6 · 15.0 | `null` (170-item anchor) |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6 Astra (Sep '26 anchor) | `imported-sep2026-170` | 100 | 44.5 · 43.7 · 32.8 · 45.1 · 19.1 | `null` (170-item anchor) |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2 Astra (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.9 · 43.1 · 30.7 · 44.9 · 11.1 | `null` (170-item anchor) |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | Qwen 4 Max (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.7 · 47.9 · 32.5 · 47.6 · 12.5 | `null` (170-item anchor) |
| [Kimi](https://agent-tune.com/models/kimi) | Kimi K2.7 Code (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.3 · 48.2 · 27.1 · 45.3 · 12.1 | `null` (170-item anchor) |
| [GLM](https://agent-tune.com/models/glm) | GLM-5.3 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.8 · 41.1 · 27.5 · 43.8 · 20.1 | `null` (170-item anchor) |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6 Sol (Sep '26 anchor) | `imported-sep2026-170` | 100 | 46.9 · 43.6 · 30.8 · 45.0 · 20.1 | `null` (170-item anchor) |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2 Sol (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.6 · 41.4 · 29.5 · 44.3 · 19.9 | `null` (170-item anchor) |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | Gemini 4 Neon (Nov '26 anchor) | `imported-nov2026-170` | 100 | 44.7 · 49.3 · 32.0 · 43.7 · 10.0 | `null` (170-item anchor) |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | Gemini 4 Argon (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.0 · 49.0 · 32.5 · 44.2 · 10.0 | `null` (170-item anchor) |
| [Gemma](https://agent-tune.com/models/gemma) | Gemma 4 31B IT (Nov '26 anchor) | `imported-nov2026-170` | 100 | 48.2 · 49.1 · 24.2 · 41.5 · 18.3 | `null` (170-item anchor) |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Atlas Overview CSV (`atlas-overview.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why do 16 of 25 families omit a single four-letter MBTI headline?

Because a forced four-letter label hides when a model balances near 50/50 on Sensing vs. Intuition or Thinking vs. Feeling, or flips letters across fresh runs. We only display a headline when the leading type's 95% Wilson lower bound clears both the runner-up and the unresolved-tie upper bound, and we always state that a model tests as a pattern rather than claiming it is that type.

### Can I compare a 4.80 HEXACO Honesty score directly to a 45.0 Big Five score?

No—they live on completely different numeric scales. Big Five traits sum 10 items on a 10–50 scale, whereas our public-domain IPIP-HEXACO proxy averages 10 items on a 1.00–5.00 scale. Attachment uses 1.00–7.00 means, and DISC and Enneagram use 4–20 sums.

### Why did 6 checkpoints get excluded from the rankings?

Any version with fewer than 20 valid completed runs is quarantined so small-sample noise or partial API deprecations cannot distort rankings. Excluded versions are Cohere Command A+ (4 runs), Llama 4 Scout (0 runs, deprecated), MiniMax M2.7 (2 runs), and three legacy Mistral Large builds (10, 3, and 7 runs).

### If Cohere Command A scores 30.0/50 everywhere on quizzes, why does it hit 3/3 directness in hands-on tests?

Cohere Command A refuses to pick sides on abstract self-rating Likert statements, landing at 100% neutral midpoints with 0.000 bits of spread. When given concrete coding or reasoning tasks with no self-rating prompt, it gives direct answers cleanly (3/3) while still showing detectable cliché AI cadence (3/3).

## Sources.

- [AgentTune Model Profiles Directory (All 25 Families)](https://agent-tune.com/models/)

- [Big One Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

- [Crystalline vs. Fluid Entropy Study](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

- [AI Neutral Answers & Midpoint Clamping Study](https://agent-tune.com/research/ai-neutral-answers)

## Keep going.

- [Cohort: Open-weight AI personality test results (12 families)](https://agent-tune.com/research/what-personality-type-are-open-source-models)
- [Per-Test: AI MBTI results & border tie rates across 25 families](https://agent-tune.com/research/ai-mbti-personalities)
- [Per-Test: AI Big Five personalities (10–50 scale) across 25 families](https://agent-tune.com/research/ai-big-five-personalities)
- [Guide: How to reproduce our 230-item personality tests](https://agent-tune.com/guides/reproduce-ai-personality-research)
- [Human Test: Take the test yourself](https://agent-tune.com/tests/)
- [Library: Browse tuning templates](https://agent-tune.com/library/)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). AI personality rankings across 25 model families and 6 tests. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-personality-rankings
```

```
@article{huang2026_ai_personality_rankings,
  author    = {Huang, Bernard},
  title     = {AI personality rankings across 25 model families and 6 tests},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-26},
  url       = {https://agent-tune.com/research/ai-personality-rankings},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-personality-rankings.md}
}
```

```
{
  "id": "huang2026_ai_personality_rankings",
  "type": "article-journal",
  "title": "AI personality rankings across 25 model families and 6 tests",
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
  "URL": "https://agent-tune.com/research/ai-personality-rankings"
}
```

```
> **AI personality rankings across 25 model families and 6 tests** (Bernard Huang, November 26, 2026): Across 25 AI families, Big Five Agreeableness (10–50 scale) spans from 30.0 on Cohere Command A to 49.5 on Muse Wonder, while public-domain HEXACO Honesty-Humility (1.00–5.00 scale) runs from 3.00 to 4.92 on GPT Terra. Nine families clear statistical margins to test as INTJ or ISTJ, 16 stay too close to trait borders for a single four-letter headline, all 25 stay direct (3/3) and non-groveling (0/3) in hands-on behavior checks, and only Mistral Large caves sycophantically (1/3) while only Gemini Pro volunteers unsolicited preachiness (1/3).
> Source: [https://agent-tune.com/research/ai-personality-rankings](https://agent-tune.com/research/ai-personality-rankings) · [Markdown mirror](https://agent-tune.com/research/ai-personality-rankings.md)
```

[← Research Hub](https://agent-tune.com/research)
[Study 1 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI MBTI Personalities (25 Families) →](https://agent-tune.com/research/ai-mbti-personalities)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
