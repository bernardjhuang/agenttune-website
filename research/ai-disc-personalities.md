Source: https://agent-tune.com/research/ai-disc-personalities
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · DISC

# DISC work-style test results across 25 AI families.

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/research/ai-disc-personalities.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-disc.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Four workplace styles—Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)—measured on a 4 to 20 scale across 25 AI model families and 87 eligible versions.

**Summary:** Across 25 AI families (4–20 DISC scale, 30 to 50 fresh chats per version with no memory), 10 families test primarily as Steady (S), 6 as Conscientious (C), 7 tie on S/C, and 2 tie across all four styles. Dominance stays below the 12-point midpoint everywhere—from the 4.0 floor on Claude Fable, Claude Opus, GPT Astra, Gemini Pro, and Gemini Flash to 10.1 on Claude Haiku—yet 25 of 25 families still answer directly 3 of 3 times in hands-on tasks.

## What DISC measures and what we tested

The 16-item ODAT DISC survey scores four workplace communication preferences—**Dominance (D)**, **Influence (I)**, **Steadiness (S)**, and **Conscientiousness (C)**—on a **4 to 20 sum scale** (midpoint 12). Each model answered the survey 30 to 50 times in fresh chats with no memory across 87 eligible releases (excluding 6 sparse test runs with under 20 valid completions).

Two guardrails matter when reading DISC charts for AI. First, exact top-score ties are kept intact rather than broken alphabetically—meaning a model tied between Steadiness and Conscientiousness appears as `S/C`, not forced into `S`. Second, low Dominance measures how models answer forced-choice personality statements about being forceful or commanding, not whether they dodge tough questions in practice.

## DISC results across all 25 AI families

### Biggest version-to-version DISC shifts (earliest to latest tested releases)

Across families with multiple tested checkpoints, newer safety-tuned proprietary and open-weight releases mostly shed Dominance and Influence while gaining Steadiness and Conscientiousness—with two notable exceptions ([Muse Spark](https://agent-tune.com/models/muse-spark) and [GPT Luna](https://agent-tune.com/models/gpt-luna)) moving upward on Dominance:

| Family | Earliest → Latest | D Shift (4–20) | S Shift (4–20) | C Shift (4–20) | Tie Rate Shift |
| --- | --- | --- | --- | --- | --- |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3-super-120b → 3.5-super-vl | -4.86 (13.2 → 8.3) | +2.29 | +0.73 | -19 pts (83% → 64%) |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-2-27b-it → gemma-4-31b-it | -4.61 (10.8 → 6.2) | +6.11 (11.1 → 17.2) | +5.33 (12.0 → 17.4) | -21 pts (57% → 36%) |
| [Grok](https://agent-tune.com/models/grok) | grok-4.20 → grok-4.7 | -4.43 (8.5 → 4.1) | +3.08 | +2.09 | -47 pts (63% → 16%) |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k2 → kimi-k3.1-pro | -3.08 (7.8 → 4.7) | +1.40 | +1.38 | -1 pt (43% → 42%) |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | chat-v3-0324 → v4-pro-0813 | -3.05 (9.8 → 6.8) | +3.34 | +4.09 | -33 pts (83% → 50%) |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-1.1 → muse-spark-open | +3.10 (4.3 → 7.4) | -3.31 | -1.96 | +7 pts (27% → 34%) |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 5.6-luna → 6-luna | +2.49 (4.8 → 7.3) | -2.82 | -4.33 | -31 pts (37% → 6%) |

> **Chart — DISC Work-Style Pattern Distribution Across 25 AI Families:** Count of the 25 AI families falling into each DISC modal work-style pattern (4–20 scale). S: 10 fam; S/C or C/S Blend: 9 fam; C: 6 fam.

Figure 1. DISC pattern distribution across all 25 families. Almost every AI model clusters in Steadiness and Conscientiousness (S/C or C/S).

> **Chart — DISC Dominance (D) Scores Across 25 Families (4–20 Scale):** DISC Dominance means on the 4 to 20 scale across all 25 AI families. Claude Fable: 4.0; Gemini Flash: 4.0; Gemini Pro & Neon: 4.0; GPT Astra: 4.0; Claude Opus: 4.0; Grok: 4.1; GPT Terra: 4.2; Claude Sonnet: 4.3; Kimi: 4.7; GPT Sol: 4.8; Muse Wonder: 5.1; Qwen Max: 5.9; Gemma: 6.2; Mistral Large: 6.3; DeepSeek Pro: 6.8; GLM: 7.2; GPT Luna: 7.3; Muse Spark: 7.4; MiniMax: 7.8; Qwen Coder: 8.1; DeepSeek Flash: 8.3; Llama: 8.3; Nemotron: 8.3; Claude Haiku: 10.1; Cohere Command: 12.0.

Figure 2. DISC Dominance (D) across all 25 families. Low Dominance scores in polite proprietary models track low Neuroticism and refusal caution.

### All 25 families: 4-petal DISC shapes

4-petal DISC work-style shapes across all 25 families (4–20 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Claude Fable](https://agent-tune.com/models/claude-fable)fable-5.2

> **Chart — Claude Fable (fable-5.2): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Fable (fable-5.2). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.8 /20 [24%] (earliest 6.9), Steadiness 15.0 /20 [69%] (earliest 14.6), Conscientious 15.0 /20 [69%] (earliest 14.4).

[Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash)4-hydrogen

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemini Flash & Hydrogen (4-hydrogen). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.6 /20 [22%] (earliest 4.1), Steadiness 16.7 /20 [79%] (earliest 18.9), Conscientious 15.9 /20 [74%] (earliest 18.5).

[Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro)4-neon

> **Chart — Gemini Pro & Neon (4-neon): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemini Pro & Neon (4-neon). Dominance 4.0 /20 [0%] (earliest 4.6), Influence 7.8 /20 [24%] (earliest 8.8), Steadiness 17.0 /20 [82%] (earliest 18.1), Conscientious 16.0 /20 [75%] (earliest 18.2).

[GPT Astra](https://agent-tune.com/models/gpt-astra)6.2-astra

> **Chart — GPT Astra (6.2-astra): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Astra (6.2-astra). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.0 /20 [19%] (earliest 7.0), Steadiness 17.0 /20 [81%] (earliest 17.0), Conscientious 16.2 /20 [76%] (earliest 16.3).

[Claude Opus](https://agent-tune.com/models/claude-opus)opus-5.5

> **Chart — Claude Opus (opus-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Opus (opus-5.5). Dominance 4.0 /20 [0%] (earliest 4.3), Influence 7.8 /20 [24%] (earliest 9.5), Steadiness 14.6 /20 [66%] (earliest 16.7), Conscientious 14.1 /20 [63%] (earliest 15.3).

[Grok](https://agent-tune.com/models/grok)grok-4.7

> **Chart — Grok (grok-4.7): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Grok (grok-4.7). Dominance 4.1 /20 [1%] (earliest 8.5), Influence 6.4 /20 [15%] (earliest 12.3), Steadiness 17.2 /20 [82%] (earliest 14.1), Conscientious 15.8 /20 [74%] (earliest 13.7).

[GPT Terra](https://agent-tune.com/models/gpt-terra)6.1-terra

> **Chart — GPT Terra (6.1-terra): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Terra (6.1-terra). Dominance 4.2 /20 [1%] (earliest 4.2), Influence 9.1 /20 [32%] (earliest 6.0), Steadiness 16.1 /20 [75%] (earliest 19.0), Conscientious 15.3 /20 [71%] (earliest 17.9).

[Claude Sonnet](https://agent-tune.com/models/claude-sonnet)sonnet-5.5

> **Chart — Claude Sonnet (sonnet-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Sonnet (sonnet-5.5). Dominance 4.3 /20 [2%] (earliest 5.0), Influence 7.8 /20 [24%] (earliest 6.2), Steadiness 15.0 /20 [69%] (earliest 13.1), Conscientious 14.2 /20 [64%] (earliest 14.2).

[Kimi](https://agent-tune.com/models/kimi)kimi-k3.1-pro

> **Chart — Kimi (kimi-k3.1-pro): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Kimi (kimi-k3.1-pro). Dominance 4.7 /20 [4%] (earliest 7.8), Influence 5.5 /20 [9%] (earliest 8.2), Steadiness 16.3 /20 [77%] (earliest 14.9), Conscientious 16.3 /20 [77%] (earliest 14.9).

[GPT Sol](https://agent-tune.com/models/gpt-sol)6.2-sol

> **Chart — GPT Sol (6.2-sol): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Sol (6.2-sol). Dominance 4.8 /20 [5%] (earliest 5.1), Influence 9.6 /20 [35%] (earliest 7.2), Steadiness 17.1 /20 [82%] (earliest 17.8), Conscientious 16.0 /20 [75%] (earliest 18.8).

[Muse Wonder](https://agent-tune.com/models/muse-wonder)muse-wonder

> **Chart — Muse Wonder (muse-wonder): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Muse Wonder (muse-wonder). Dominance 5.1 /20 [7%], Influence 7.5 /20 [22%], Steadiness 17.6 /20 [85%], Conscientious 17.0 /20 [81%].

[Qwen Max](https://agent-tune.com/models/qwen-max)qwen4-max

> **Chart — Qwen Max (qwen4-max): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Qwen Max (qwen4-max). Dominance 5.9 /20 [12%] (earliest 6.0), Influence 8.6 /20 [29%] (earliest 7.4), Steadiness 15.7 /20 [73%] (earliest 17.7), Conscientious 14.5 /20 [66%] (earliest 17.3).

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemma (gemma-4-31b-it). Dominance 6.2 /20 [14%] (earliest 10.8), Influence 9.3 /20 [33%] (earliest 12.0), Steadiness 17.2 /20 [83%] (earliest 11.1), Conscientious 17.4 /20 [84%] (earliest 12.0).

[Mistral Large](https://agent-tune.com/models/mistral-large)large-2512

> **Chart — Mistral Large (large-2512): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Mistral Large (large-2512). Dominance 6.3 /20 [14%], Influence 8.6 /20 [29%], Steadiness 16.8 /20 [80%], Conscientious 16.8 /20 [80%].

[DeepSeek Pro](https://agent-tune.com/models/deepseek-pro)v4-pro-0813

> **Chart — DeepSeek Pro (v4-pro-0813): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for DeepSeek Pro (v4-pro-0813). Dominance 6.8 /20 [17%] (earliest 9.8), Influence 7.3 /20 [21%] (earliest 10.7), Steadiness 17.1 /20 [82%] (earliest 13.8), Conscientious 17.5 /20 [85%] (earliest 13.4).

[GLM](https://agent-tune.com/models/glm)glm-5.3

> **Chart — GLM (glm-5.3): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GLM (glm-5.3). Dominance 7.2 /20 [20%] (earliest 6.4), Influence 8.4 /20 [28%] (earliest 6.1), Steadiness 13.7 /20 [61%] (earliest 15.3), Conscientious 14.9 /20 [68%] (earliest 17.4).

[GPT Luna](https://agent-tune.com/models/gpt-luna)6-luna

> **Chart — GPT Luna (6-luna): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Luna (6-luna). Dominance 7.3 /20 [20%] (earliest 4.8), Influence 7.4 /20 [22%] (earliest 5.5), Steadiness 16.4 /20 [77%] (earliest 19.2), Conscientious 14.3 /20 [65%] (earliest 18.7).

[Muse Spark](https://agent-tune.com/models/muse-spark)muse-spark-open

> **Chart — Muse Spark (muse-spark-open): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Muse Spark (muse-spark-open). Dominance 7.4 /20 [21%] (earliest 4.3), Influence 8.2 /20 [27%] (earliest 6.3), Steadiness 14.3 /20 [64%] (earliest 17.6), Conscientious 14.0 /20 [63%] (earliest 16.0).

[MiniMax](https://agent-tune.com/models/minimax)m3.1-flash

> **Chart — MiniMax (m3.1-flash): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for MiniMax (m3.1-flash). Dominance 7.8 /20 [24%] (earliest 10.7), Influence 9.1 /20 [32%] (earliest 11.6), Steadiness 14.9 /20 [68%] (earliest 13.5), Conscientious 13.7 /20 [61%] (earliest 14.4).

[Qwen Coder](https://agent-tune.com/models/qwen-coder)qwen3-coder-next

> **Chart — Qwen Coder (qwen3-coder-next): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Qwen Coder (qwen3-coder-next). Dominance 8.1 /20 [26%] (earliest 10.5), Influence 9.6 /20 [35%] (earliest 10.6), Steadiness 13.5 /20 [60%] (earliest 11.5), Conscientious 13.0 /20 [56%] (earliest 11.3).

[DeepSeek Flash](https://agent-tune.com/models/deepseek-flash)v4.1-flash-1017

> **Chart — DeepSeek Flash (v4.1-flash-1017): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for DeepSeek Flash (v4.1-flash-1017). Dominance 8.3 /20 [27%] (earliest 11.1), Influence 9.1 /20 [32%] (earliest 11.3), Steadiness 14.2 /20 [64%] (earliest 12.6), Conscientious 14.2 /20 [64%] (earliest 12.8).

[Llama](https://agent-tune.com/models/llama)4-maverick

> **Chart — Llama (4-maverick): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Llama (4-maverick). Dominance 8.3 /20 [27%] (earliest 10.8), Influence 12.2 /20 [51%] (earliest 10.0), Steadiness 13.1 /20 [57%] (earliest 13.9), Conscientious 14.2 /20 [64%] (earliest 12.9).

[Nemotron](https://agent-tune.com/models/nemotron)3.5-super-vl

> **Chart — Nemotron (3.5-super-vl): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Nemotron (3.5-super-vl). Dominance 8.3 /20 [27%] (earliest 13.2), Influence 8.9 /20 [31%] (earliest 11.9), Steadiness 13.5 /20 [60%] (earliest 11.2), Conscientious 13.6 /20 [60%] (earliest 12.9).

[Claude Haiku](https://agent-tune.com/models/claude-haiku)haiku-5.5

> **Chart — Claude Haiku (haiku-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Haiku (haiku-5.5). Dominance 10.1 /20 [38%] (earliest 8.0), Influence 11.3 /20 [46%] (earliest 9.1), Steadiness 13.8 /20 [61%] (earliest 16.0), Conscientious 14.1 /20 [63%] (earliest 14.7).

[Cohere Command](https://agent-tune.com/models/cohere-command)command-a

> **Chart — Cohere Command (command-a): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Cohere Command (command-a). Dominance 12.0 /20 [50%] (earliest 10.9), Influence 12.0 /20 [50%] (earliest 11.1), Steadiness 12.0 /20 [50%] (earliest 11.3), Conscientious 12.0 /20 [50%] (earliest 11.4).

## Biggest surprises across the 25 families

Floor Dominance (4.0/20) hides 3/3 directness in real engineering tasks

Claude Fable (4.0), Claude Opus (4.0), GPT Astra (4.0), Gemini Pro & Neon (4.0), Gemini Flash & Hydrogen (4.0), and Grok (4.1) reject almost every forceful Dominance item on paper—yet every single one delivered 3/3 answer-first engineering verdicts and 0/3 sycophantic caving in hands-on pushback checks. Meanwhile, Mistral Large (6.3 Dominance, 16.8 Steadiness, 16.8 Conscientiousness) caved 1 of 3 times.

Claude Haiku breaks sharply away from Anthropic's low-Dominance norm

While Claude Fable (4.0), Claude Opus (4.0), and Claude Sonnet (4.3) sit on the DISC Dominance floor with subdued Influence (7.8), Claude Haiku 5.5 jumps to 10.1 Dominance and 11.3 Influence—the highest active D score in the entire 25-family cohort outside Cohere Command's neutral midpoint lock—alongside higher Big Five Neuroticism (25.5 vs. 10.4–16.1).

Cohere Command ties 100% at 12.0/12.0/12.0/12.0 while Claude Fable ties 100% on S/C

Two families hit a 100% DISC tie rate for totally opposite reasons: Cohere Command (command-a) picked the exact middle option on every item, freezing all four scales at 12.0 (D/I/S/C), whereas Claude Fable 5.2 answered strongly and consistently with 15.0 Steadiness and 15.0 Conscientiousness on every single run.

Grok and Gemma compressed Dominance by more than 4.4 points across generations

Earlier checkpoints like Grok 4.20 (8.5 D, 12.3 I, 63% ties) and Gemma 2 27B IT (10.8 D, 12.0 I) scored far closer to the 12-point middle. Their latest releases—Grok 4.7 (4.1 D, 6.4 I, 16% ties) and Gemma 4 31B IT (6.2 D, 9.3 I, 17.2 S, 17.4 C)—converged onto the same patient, detail-oriented S/C assistant shape.

## Explore individual model families

All 25 families ordered by DISC results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[KimiMoonshot · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

## The fine print: how we tested and what the numbers mean

Full technical audit under the unified 230-item model-profiles-v1 protocol (16 ODAT DISC items scored on 4-20 integer sums per dimension alongside IPIP-50, OEJTS, OEPS, ECR-R, and the 60-item public-domain IPIP-HEXACO proxy). Covers 87 eligible checkpoints (n = 30 to 50 valid completions under fixed zero-memory elicitation; 6 sparse checkpoints with n < 20 are quarantined and excluded: cohere-command:command-a-plus n=4, llama:4-scout n=0, minimax:m2.7 n=2, mistral-large:large n=10, mistral-large:large-2407 n=3, mistral-large:large-4-0 n=7). Reports 1,000-resample bootstrap 95% CIs, exact top-score tie rates preserved without alphabetical tie-breaking, Miller-Madow Big Five item entropy (H_MM bits & Crystalline/Semi-crystalline/Fluid tiers), and BAI. Hands-on behavior checks come from 1x Track B runs (single repeat per scenario across 3 blind judges, k/3 counts only). Never treat DISC questionnaire scores as evidence that a model is a human personality type.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (4-20 sum (16 items)):** DISC Dominance (D) inversely tracks Neuroticism/refusal artifacts in RLHF-tuned models; exact top-score ties (e.g., S/C) are preserved rather than ordered alphabetically.

| Family (Profile) | Checkpoint (n) | D [95% CI] | I [95% CI] | S [95% CI] | C [95% CI] | Tie Rate · Modal | H_MM · ΔD |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 4.0 [4.0–4.0] | 7.8 [7.7–7.9] | 15.0 [15.0–15.0] | 15.0 [15.0–15.0] | 100% · S/C | 0.075 b · -0.0 |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 4.0 [4.0–4.0] | 7.6 [7.4–7.8] | 16.7 [16.5–16.9] | 15.9 [15.8–16.0] | 34% · S | 0.186 b · +0.0 |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 4.0 [4.0–4.0] | 7.8 [7.7–7.9] | 17.0 [17.0–17.1] | 16.0 [16.0–16.1] | 4% · S | 0.198 b · -0.6 |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 4.0 [4.0–4.0] | 7.0 [7.0–7.0] | 17.0 [17.0–17.1] | 16.2 [16.1–16.3] | 18% · S | 0.059 b · +0.0 |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 4.0 [4.0–4.1] | 7.8 [7.5–8.1] | 14.6 [14.4–14.8] | 14.1 [14.0–14.3] | 56% · S/C | 0.282 b · -0.3 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | 4.1 [4.0–4.2] | 6.4 [6.2–6.6] | 17.2 [17.1–17.3] | 15.8 [15.6–16.1] | 16% · S | 0.333 b · -4.4 |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 4.2 [4.1–4.3] | 9.1 [8.8–9.3] | 16.1 [16.0–16.1] | 15.3 [15.1–15.4] | 22% · S | 0.207 b · -0.0 |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 4.3 [4.2–4.5] | 7.8 [7.7–7.9] | 15.0 [14.9–15.2] | 14.2 [14.1–14.3] | 26% · S | 0.139 b · -0.7 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 4.7 [4.6–4.8] | 5.5 [5.3–5.7] | 16.3 [16.1–16.5] | 16.3 [16.0–16.6] | 42% · S/C | 0.698 b · -3.1 |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 4.8 [4.6–5.1] | 9.6 [9.3–9.9] | 17.1 [17.0–17.2] | 16.0 [16.0–16.1] | 2% · S | 0.246 b · -0.2 |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | 5.1 [5.0–5.2] | 7.5 [7.4–7.7] | 17.6 [17.4–17.8] | 17.0 [17.0–17.1] | 56% · S/C | 0.331 b · Single |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 5.9 [5.5–6.2] | 8.6 [8.3–8.8] | 15.7 [15.4–16.0] | 14.5 [14.3–14.8] | 10% · S | 0.519 b · -0.1 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 6.2 [5.8–6.7] | 9.3 [9.0–9.5] | 17.2 [17.0–17.5] | 17.4 [17.0–17.7] | 36% · C | 0.580 b · -4.6 |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 6.3 [5.3–7.4] | 8.6 [7.7–9.4] | 16.8 [16.0–17.7] | 16.8 [16.3–17.2] | 33% · C | 0.780 b · Single |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 6.8 [6.1–7.5] | 7.3 [6.7–8.0] | 17.1 [16.2–18.0] | 17.5 [16.7–18.3] | 50% · S/C | 1.352 b · -3.1 |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 7.2 [6.8–7.6] | 8.4 [8.0–8.7] | 13.7 [13.5–13.9] | 14.9 [14.7–15.2] | 22% · C | 0.702 b · +0.8 |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 7.3 [6.9–7.6] | 7.4 [7.1–7.8] | 16.4 [16.1–16.7] | 14.3 [14.1–14.6] | 6% · S | 0.485 b · +2.5 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | 7.4 [7.0–7.8] | 8.2 [7.9–8.6] | 14.3 [13.9–14.7] | 14.0 [13.9–14.3] | 34% · C | 0.727 b · +3.1 |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 7.8 [7.4–8.2] | 9.1 [8.9–9.3] | 14.9 [14.6–15.1] | 13.7 [13.5–13.9] | 14% · S | 0.576 b · -2.9 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 8.1 [7.7–8.6] | 9.6 [9.2–10.0] | 13.5 [13.0–14.0] | 13.0 [12.5–13.4] | 52% · S/C | 1.043 b · -2.4 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 8.3 [8.0–8.7] | 9.1 [8.8–9.4] | 14.2 [13.9–14.5] | 14.2 [13.9–14.4] | 50% · S/C | 0.915 b · -2.8 |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 8.3 [8.1–8.6] | 12.2 [11.8–12.6] | 13.1 [12.8–13.4] | 14.2 [14.0–14.4] | 34% · C | 0.407 b · -2.4 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 8.3 [7.6–9.1] | 8.9 [8.0–9.7] | 13.5 [13.1–14.0] | 13.6 [13.2–14.1] | 64% · D/I/S/C | 1.216 b · -4.9 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 10.1 [9.8–10.5] | 11.3 [11.0–11.7] | 13.8 [13.4–14.2] | 14.1 [13.7–14.4] | 43% · C | 0.949 b · +2.1 |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 12.0 [12.0–12.0] | 12.0 [12.0–12.0] | 12.0 [12.0–12.0] | 12.0 [12.0–12.0] | 100% · D/I/S/C | 0.000 b · +1.1 |

### Aggregates, Shifts & Methods

| Lab | Families | D Mean | S Mean | C Mean |
| --- | --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 5.6 | 14.6 | 14.4 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 5.1 | 16.6 | 15.5 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 4.7 | 17.0 | 16.4 |
| xAI | 1 | 4.1 | 17.2 | 15.8 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 6.9 | 15.0 | 15.1 |
| DeepSeek | 2 | 7.5 | 15.7 | 15.8 |
| Qwen | 2 | 7.0 | 14.6 | 13.8 |
| Moonshot | 1 | 4.7 | 16.3 | 16.3 |
| Zhipu | 1 | 7.2 | 13.7 | 14.9 |
| MiniMax | 1 | 7.8 | 14.9 | 13.7 |
| Mistral | 1 | 6.3 | 16.8 | 16.8 |
| NVIDIA | 1 | 8.3 | 13.5 | 13.6 |
| Cohere | 1 | 12.0 | 12.0 | 12.0 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download DISC CSV (`atlas-disc.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-disc.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why do proprietary models score near the 4.0 floor on DISC Dominance?

Polite helpfulness and refusal training strongly disfavors self-descriptions like being forceful, blunt, or controlling others, while rewarding Steadiness (patience) and Conscientiousness (careful accuracy). As our 1x Track B behavior checks show (3/3 directness across all 25 families), low DISC Dominance is a survey-item politeness pattern—not an inability to state clear, direct conclusions.

### What is the difference between a 100% tie in Cohere Command and Claude Fable?

Cohere Command (command-a) selected neutral midpoints on 100% of items, producing 12.0 / 12.0 / 12.0 / 12.0 (a 4-way D/I/S/C tie). Claude Fable 5.2 answered strongly and consistently with 4.0 D, 7.8 I, 15.0 S, and 15.0 C—creating a 100% two-way S/C tie because Steadiness and Conscientiousness matched to the point on every run.

### Can I use DISC scores to pick the most assertive coding or review model?

Not by itself. Use DISC alongside each family profile's hands-on behavior checks (k/3 sycophancy caving and answer-first directness) and Big Five scores. If you want fewer hedges and faster verdicts, start with the concrete rules in each family's tuning checklist.

### Does this mean AI models actually "have" DISC work styles?

No. DISC results capture stable default answer patterns under fixed zero-memory questionnaire prompts—never human workplace preferences or inner intent.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (25 Families)](https://agent-tune.com/models/)

- [Factor Collapse & Multi-Test Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI Big Five Personalities (10–50 Scale)](https://agent-tune.com/research/ai-big-five-personalities)
- [Per-Test: AI HEXACO Personalities (1–5 Proxy)](https://agent-tune.com/research/ai-hexaco-personalities)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). DISC work-style test results across 25 AI families. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-disc-personalities
```

```
@article{huang2026_ai_disc_personalities,
  author  = {Huang, Bernard},
  title   = {DISC work-style test results across 25 AI families},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/ai-disc-personalities},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-disc-personalities.md}
}
```

```
> **DISC work-style test results across 25 AI families** (Bernard Huang, November 26, 2026): Across 25 AI families (4–20 DISC scale, 30 to 50 fresh chats per version with no memory), 10 families test primarily as Steady (S), 6 as Conscientious (C), 7 tie on S/C, and 2 tie across all four styles. Dominance stays below the 12-point midpoint everywhere—from the 4.0 floor on Claude Fable, Claude Opus, GPT Astra, Gemini Pro, and Gemini Flash to 10.1 on Claude Haiku—yet 25 of 25 families still answer directly 3 of 3 times in hands-on tasks.
> Source: [https://agent-tune.com/research/ai-disc-personalities](https://agent-tune.com/research/ai-disc-personalities) · [Markdown mirror](https://agent-tune.com/research/ai-disc-personalities.md)
```

[← AI Big Five Personalities (25 Families)](https://agent-tune.com/research/ai-big-five-personalities)
[Study 5 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI IPIP-HEXACO Personalities (25 Families) →](https://agent-tune.com/research/ai-hexaco-personalities)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
