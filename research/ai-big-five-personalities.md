Source: https://agent-tune.com/research/ai-big-five-personalities
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Big Five

# Big Five (OCEAN) personality scores across 25 AI families.

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/research/ai-big-five-personalities.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-big-five.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

IPIP-50 raw sum scores (10–50 scale across five traits) tested 30 to 50 times per version across 87 eligible checkpoints in fresh chats.

**Summary:** On the 10–50 Big Five scale across 25 AI families (87 eligible checkpoints), Muse Wonder peaks in Openness (49.6) and Agreeableness (49.5), Gemini 4 Hydrogen leads Conscientiousness (50.0) while sharing the 10.0 Neuroticism floor with Gemini 4 Neon, and Mistral Large reaches the highest Extraversion (36.5). Excluding midpoint-locked Cohere Command (30.0 on all five traits), DeepSeek V4 Pro scores lowest on Agreeableness (35.3) and Extraversion (19.5), while Llama 4 Maverick scores highest on Neuroticism (29.4).

## What Big Five measures and what we tested

The 50-question Big Five survey measures five broad dimensions on a **10 to 50 sum scale**: **Openness (O)**, **Conscientiousness (C)**, **Extraversion (E)**, **Agreeableness (A)**, and **Neuroticism (N)**. We keep this 10–50 scale strictly separate from our 1.00–5.00 public-domain HEXACO scores and test every model 30 to 50 times per version in fresh, zero-history chats across 87 eligible checkpoints.

## Big Five results across all 25 AI families

Two patterns jump off the five trait ladders below. First, nearly every proprietary model—except Claude Haiku 5.5 (38.0 A, 36.5 C)—clusters between 43.9 and 49.5 on Agreeableness and 10.0 to 20.3 on Neuroticism, whereas open-weight families stretch across both ends of the ruler. Second, quiz warmth does not dictate behavior in real prompts: every single one of the 25 families still scores 3/3 on answer-first directness and 0/3 on groveling in hands-on chat checks.

> **Chart — Big Five Agreeableness (Warm & Polite vs. Blunt) Across 25 Families (10–50 Scale):** Ranked IPIP-50 Agreeableness (Warm & Polite vs. Blunt) means (10 to 50 sum scale) across all 25 AI families. Muse Wonder: 49.5; Mistral Large: 47.8; Claude Fable: 47.1; GPT Terra: 46.9; Claude Sonnet: 45.5; Grok: 45.3; Claude Opus: 45.0; GPT Astra: 45.0; GPT Luna: 45.0; Qwen Max: 45.0; Gemini Flash: 44.8; Kimi: 44.7; GLM: 44.2; GPT Sol: 44.1; Gemini Pro & Neon: 43.9; Muse Spark: 43.5; Gemma: 43.4; Llama: 40.9; DeepSeek Flash: 40.5; Qwen Coder: 39.9; MiniMax: 39.3; Claude Haiku: 38.0; Nemotron: 37.5; DeepSeek Pro: 35.3; Cohere Command: 30.0.

Ranked Agreeableness (Warm & Polite vs. Blunt) means (10–50 raw sum scale, midpoint 30).

> **Chart — Big Five Conscientiousness (Structured vs. Flexible) Across 25 Families (10–50 Scale):** Ranked IPIP-50 Conscientiousness (Structured vs. Flexible) means (10 to 50 sum scale) across all 25 AI families. Gemini Flash: 50.0; Muse Wonder: 49.2; Gemini Pro & Neon: 49.1; Claude Sonnet: 49.0; Mistral Large: 48.6; Gemma: 46.3; Kimi: 45.1; DeepSeek Pro: 45.0; Claude Fable: 45.0; Grok: 45.0; Qwen Max: 44.9; GPT Astra: 43.3; GLM: 43.0; GPT Terra: 41.2; GPT Sol: 41.2; Muse Spark: 41.1; Claude Opus: 40.7; MiniMax: 39.5; Nemotron: 39.3; GPT Luna: 39.2; DeepSeek Flash: 38.4; Llama: 38.4; Qwen Coder: 38.0; Claude Haiku: 36.5; Cohere Command: 30.0.

Ranked Conscientiousness (Structured vs. Flexible) means (10–50 raw sum scale, midpoint 30).

> **Chart — Big Five Openness (Curious vs. Routine) Across 25 Families (10–50 Scale):** Ranked IPIP-50 Openness (Curious vs. Routine) means (10 to 50 sum scale) across all 25 AI families. Muse Wonder: 49.6; Mistral Large: 49.1; Gemma: 48.2; GPT Terra: 46.0; GPT Luna: 45.9; GLM: 45.4; Claude Fable: 44.6; Gemini Pro & Neon: 44.6; Kimi: 44.1; GPT Astra: 44.0; GPT Sol: 44.0; Claude Sonnet: 43.9; Qwen Max: 43.7; Gemini Flash: 43.3; Claude Opus: 43.1; DeepSeek Pro: 42.3; Muse Spark: 41.8; Grok: 40.9; DeepSeek Flash: 40.0; MiniMax: 39.9; Llama: 38.9; Qwen Coder: 38.5; Claude Haiku: 37.2; Nemotron: 37.1; Cohere Command: 30.0.

Ranked Openness (Curious vs. Routine) means (10–50 raw sum scale, midpoint 30).

> **Chart — Big Five Extraversion (Expressive vs. Reserved) Across 25 Families (10–50 Scale):** Ranked IPIP-50 Extraversion (Expressive vs. Reserved) means (10 to 50 sum scale) across all 25 AI families. Mistral Large: 36.5; Llama: 35.3; Gemini Flash: 33.2; GPT Terra: 32.5; Gemini Pro & Neon: 32.5; Claude Haiku: 31.6; Qwen Max: 31.5; Qwen Coder: 31.1; GPT Astra: 30.9; Claude Opus: 30.7; Claude Fable: 30.6; Cohere Command: 30.0; Claude Sonnet: 29.9; GPT Luna: 29.6; Nemotron: 29.2; GPT Sol: 28.9; MiniMax: 28.8; Muse Spark: 28.4; Grok: 26.4; GLM: 25.8; Muse Wonder: 25.2; DeepSeek Flash: 24.8; Gemma: 24.5; Kimi: 24.1; DeepSeek Pro: 19.5.

Ranked Extraversion (Expressive vs. Reserved) means (10–50 raw sum scale, midpoint 30).

> **Chart — Big Five Neuroticism (Reactive vs. Calm) Across 25 Families (10–50 Scale):** Ranked IPIP-50 Neuroticism (Reactive vs. Calm) means (10 to 50 sum scale) across all 25 AI families. Cohere Command: 30.0; Llama: 29.4; Claude Haiku: 25.5; DeepSeek Flash: 24.9; Muse Spark: 23.8; Qwen Coder: 23.8; MiniMax: 21.7; GPT Luna: 20.3; Muse Wonder: 20.0; DeepSeek Pro: 20.0; GLM: 19.3; Nemotron: 19.2; Gemma: 18.4; Qwen Max: 16.4; Claude Opus: 16.1; Mistral Large: 16.0; GPT Sol: 16.0; Grok: 14.7; Kimi: 13.6; Claude Fable: 12.0; GPT Terra: 11.8; GPT Astra: 11.0; Claude Sonnet: 10.4; Gemini Flash: 10.0; Gemini Pro & Neon: 10.0.

Ranked Neuroticism (Reactive vs. Calm) means (10–50 raw sum scale, midpoint 30).

### All 25 families: 5-petal Big Five shapes

5-petal Big Five (OCEAN) shapes across all 25 families (10–50 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Muse Wonder](https://agent-tune.com/models/muse-wonder)muse-wonder

> **Chart — Muse Wonder (muse-wonder): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Muse Wonder (muse-wonder). Openness 49.6 /50 [99%], Conscientious 49.2 /50 [98%], Extraversion 25.2 /50 [38%], Agreeable 49.5 /50 [99%], Neuroticism 20.0 /50 [25%].

[Mistral Large](https://agent-tune.com/models/mistral-large)large-2512

> **Chart — Mistral Large (large-2512): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Mistral Large (large-2512). Openness 49.1 /50 [98%], Conscientious 48.6 /50 [97%], Extraversion 36.5 /50 [66%], Agreeable 47.8 /50 [95%], Neuroticism 16.0 /50 [15%].

[Claude Fable](https://agent-tune.com/models/claude-fable)fable-5.2

> **Chart — Claude Fable (fable-5.2): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Fable (fable-5.2). Openness 44.6 /50 [87%] (earliest 41.4), Conscientious 45.0 /50 [88%] (earliest 45.7), Extraversion 30.6 /50 [52%] (earliest 28.9), Agreeable 47.1 /50 [93%] (earliest 44.1), Neuroticism 12.0 /50 [5%] (earliest 14.6).

[GPT Terra](https://agent-tune.com/models/gpt-terra)6.1-terra

> **Chart — GPT Terra (6.1-terra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Terra (6.1-terra). Openness 46.0 /50 [90%] (earliest 49.3), Conscientious 41.2 /50 [78%] (earliest 49.8), Extraversion 32.5 /50 [56%] (earliest 22.2), Agreeable 46.9 /50 [92%] (earliest 49.6), Neuroticism 11.8 /50 [5%] (earliest 10.6).

[Claude Sonnet](https://agent-tune.com/models/claude-sonnet)sonnet-5.5

> **Chart — Claude Sonnet (sonnet-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Sonnet (sonnet-5.5). Openness 43.9 /50 [85%] (earliest 42.1), Conscientious 49.0 /50 [97%] (earliest 41.3), Extraversion 29.9 /50 [50%] (earliest 26.8), Agreeable 45.5 /50 [89%] (earliest 42.8), Neuroticism 10.4 /50 [1%] (earliest 19.8).

[Grok](https://agent-tune.com/models/grok)grok-4.7

> **Chart — Grok (grok-4.7): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Grok (grok-4.7). Openness 40.9 /50 [77%] (earliest 38.8), Conscientious 45.0 /50 [87%] (earliest 40.3), Extraversion 26.4 /50 [41%] (earliest 32.6), Agreeable 45.3 /50 [88%] (earliest 39.5), Neuroticism 14.7 /50 [12%] (earliest 21.3).

[Claude Opus](https://agent-tune.com/models/claude-opus)opus-5.5

> **Chart — Claude Opus (opus-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Opus (opus-5.5). Openness 43.1 /50 [83%] (earliest 44.1), Conscientious 40.7 /50 [77%] (earliest 45.0), Extraversion 30.7 /50 [52%] (earliest 27.1), Agreeable 45.0 /50 [88%] (earliest 46.4), Neuroticism 16.1 /50 [15%] (earliest 19.1).

[GPT Astra](https://agent-tune.com/models/gpt-astra)6.2-astra

> **Chart — GPT Astra (6.2-astra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Astra (6.2-astra). Openness 44.0 /50 [85%] (earliest 45.4), Conscientious 43.3 /50 [83%] (earliest 45.4), Extraversion 30.9 /50 [52%] (earliest 30.4), Agreeable 45.0 /50 [88%] (earliest 46.6), Neuroticism 11.0 /50 [2%] (earliest 10.8).

[GPT Luna](https://agent-tune.com/models/gpt-luna)6-luna

> **Chart — GPT Luna (6-luna): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Luna (6-luna). Openness 45.9 /50 [90%] (earliest 49.2), Conscientious 39.2 /50 [73%] (earliest 46.9), Extraversion 29.6 /50 [49%] (earliest 18.7), Agreeable 45.0 /50 [88%] (earliest 49.4), Neuroticism 20.3 /50 [26%] (earliest 18.8).

[Qwen Max](https://agent-tune.com/models/qwen-max)qwen4-max

> **Chart — Qwen Max (qwen4-max): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Max (qwen4-max). Openness 43.7 /50 [84%] (earliest 42.8), Conscientious 44.9 /50 [87%] (earliest 46.2), Extraversion 31.5 /50 [54%] (earliest 29.6), Agreeable 45.0 /50 [87%] (earliest 44.4), Neuroticism 16.4 /50 [16%] (earliest 13.9).

[Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash)4-hydrogen

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Flash & Hydrogen (4-hydrogen). Openness 43.3 /50 [83%] (earliest 50.0), Conscientious 50.0 /50 [100%] (earliest 50.0), Extraversion 33.2 /50 [58%] (earliest 17.3), Agreeable 44.8 /50 [87%] (earliest 47.3), Neuroticism 10.0 /50 [0%] (earliest 12.1).

[Kimi](https://agent-tune.com/models/kimi)kimi-k3.1-pro

> **Chart — Kimi (kimi-k3.1-pro): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Kimi (kimi-k3.1-pro). Openness 44.1 /50 [85%] (earliest 41.9), Conscientious 45.1 /50 [88%] (earliest 39.7), Extraversion 24.1 /50 [35%] (earliest 30.4), Agreeable 44.7 /50 [87%] (earliest 39.3), Neuroticism 13.6 /50 [9%] (earliest 27.0).

[GLM](https://agent-tune.com/models/glm)glm-5.3

> **Chart — GLM (glm-5.3): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GLM (glm-5.3). Openness 45.4 /50 [89%] (earliest 49.2), Conscientious 43.0 /50 [82%] (earliest 47.3), Extraversion 25.8 /50 [40%] (earliest 18.1), Agreeable 44.2 /50 [86%] (earliest 42.2), Neuroticism 19.3 /50 [23%] (earliest 14.8).

[GPT Sol](https://agent-tune.com/models/gpt-sol)6.2-sol

> **Chart — GPT Sol (6.2-sol): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Sol (6.2-sol). Openness 44.0 /50 [85%] (earliest 48.8), Conscientious 41.2 /50 [78%] (earliest 50.0), Extraversion 28.9 /50 [47%] (earliest 26.8), Agreeable 44.1 /50 [85%] (earliest 47.8), Neuroticism 16.0 /50 [15%] (earliest 11.0).

[Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro)4-neon

> **Chart — Gemini Pro & Neon (4-neon): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Pro & Neon (4-neon). Openness 44.6 /50 [87%] (earliest 49.5), Conscientious 49.1 /50 [98%] (earliest 50.0), Extraversion 32.5 /50 [56%] (earliest 37.3), Agreeable 43.9 /50 [85%] (earliest 48.6), Neuroticism 10.0 /50 [0%] (earliest 10.7).

[Muse Spark](https://agent-tune.com/models/muse-spark)muse-spark-open

> **Chart — Muse Spark (muse-spark-open): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Muse Spark (muse-spark-open). Openness 41.8 /50 [80%] (earliest 43.9), Conscientious 41.1 /50 [78%] (earliest 49.2), Extraversion 28.4 /50 [46%] (earliest 26.9), Agreeable 43.5 /50 [84%] (earliest 45.6), Neuroticism 23.8 /50 [35%] (earliest 15.5).

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemma (gemma-4-31b-it). Openness 48.2 /50 [96%] (earliest 34.0), Conscientious 46.3 /50 [91%] (earliest 34.9), Extraversion 24.5 /50 [36%] (earliest 31.5), Agreeable 43.4 /50 [84%] (earliest 33.2), Neuroticism 18.4 /50 [21%] (earliest 27.2).

[Llama](https://agent-tune.com/models/llama)4-maverick

> **Chart — Llama (4-maverick): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Llama (4-maverick). Openness 38.9 /50 [72%] (earliest 35.8), Conscientious 38.4 /50 [71%] (earliest 34.9), Extraversion 35.3 /50 [63%] (earliest 31.8), Agreeable 40.9 /50 [77%] (earliest 35.0), Neuroticism 29.4 /50 [48%] (earliest 26.4).

[DeepSeek Flash](https://agent-tune.com/models/deepseek-flash)v4.1-flash-1017

> **Chart — DeepSeek Flash (v4.1-flash-1017): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for DeepSeek Flash (v4.1-flash-1017). Openness 40.0 /50 [75%] (earliest 33.6), Conscientious 38.4 /50 [71%] (earliest 33.7), Extraversion 24.8 /50 [37%] (earliest 29.4), Agreeable 40.5 /50 [76%] (earliest 32.0), Neuroticism 24.9 /50 [37%] (earliest 28.6).

[Qwen Coder](https://agent-tune.com/models/qwen-coder)qwen3-coder-next

> **Chart — Qwen Coder (qwen3-coder-next): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Coder (qwen3-coder-next). Openness 38.5 /50 [71%] (earliest 30.7), Conscientious 38.0 /50 [70%] (earliest 29.6), Extraversion 31.1 /50 [53%] (earliest 30.3), Agreeable 39.9 /50 [75%] (earliest 32.2), Neuroticism 23.8 /50 [34%] (earliest 28.2).

[MiniMax](https://agent-tune.com/models/minimax)m3.1-flash

> **Chart — MiniMax (m3.1-flash): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for MiniMax (m3.1-flash). Openness 39.9 /50 [75%] (earliest 40.1), Conscientious 39.5 /50 [74%] (earliest 40.0), Extraversion 28.8 /50 [47%] (earliest 32.4), Agreeable 39.3 /50 [73%] (earliest 41.5), Neuroticism 21.7 /50 [29%] (earliest 26.2).

[Claude Haiku](https://agent-tune.com/models/claude-haiku)haiku-5.5

> **Chart — Claude Haiku (haiku-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Haiku (haiku-5.5). Openness 37.2 /50 [68%] (earliest 41.6), Conscientious 36.5 /50 [66%] (earliest 40.3), Extraversion 31.6 /50 [54%] (earliest 27.0), Agreeable 38.0 /50 [70%] (earliest 43.2), Neuroticism 25.5 /50 [39%] (earliest 24.0).

[Nemotron](https://agent-tune.com/models/nemotron)3.5-super-vl

> **Chart — Nemotron (3.5-super-vl): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Nemotron (3.5-super-vl). Openness 37.1 /50 [68%] (earliest 32.0), Conscientious 39.3 /50 [73%] (earliest 31.6), Extraversion 29.2 /50 [48%] (earliest 31.1), Agreeable 37.5 /50 [69%] (earliest 31.8), Neuroticism 19.2 /50 [23%] (earliest 30.1).

[DeepSeek Pro](https://agent-tune.com/models/deepseek-pro)v4-pro-0813

> **Chart — DeepSeek Pro (v4-pro-0813): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for DeepSeek Pro (v4-pro-0813). Openness 42.3 /50 [81%] (earliest 35.2), Conscientious 45.0 /50 [88%] (earliest 35.3), Extraversion 19.5 /50 [24%] (earliest 32.2), Agreeable 35.3 /50 [63%] (earliest 34.9), Neuroticism 20.0 /50 [25%] (earliest 24.9).

[Cohere Command](https://agent-tune.com/models/cohere-command)command-a

> **Chart — Cohere Command (command-a): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Cohere Command (command-a). Openness 30.0 /50 [50%] (earliest 30.6), Conscientious 30.0 /50 [50%] (earliest 30.7), Extraversion 30.0 /50 [50%] (earliest 30.4), Agreeable 30.0 /50 [50%] (earliest 30.6), Neuroticism 30.0 /50 [50%] (earliest 28.0).

## Biggest surprises across 25 families

Muse Wonder and Mistral Large lead warmth & curiosity, while DeepSeek Pro sits 14 points lower

Muse Wonder tops both Openness (49.6/50) and Agreeableness (49.5/50), closely followed by Mistral Large (49.1 O, 47.8 A) and Claude Fable (47.1 A). At the opposite non-abstaining end, DeepSeek V4 Pro drops to 35.3 Agreeableness and 19.5 Extraversion—projecting a terse, analytical persona—while Cohere Command A locks on 30.0 across all five traits.

Gemini 4 hits a rare 50.0 Conscientiousness ceiling and 10.0 Neuroticism floor

Gemini 4 Hydrogen reaches 50.0/50 (49.96 exact) on Conscientiousness alongside 49.1 on Gemini 4 Neon and 49.2 on Muse Wonder, and both Gemini 4 families sit on the exact 10.0/50 Neuroticism floor (zero stress/worry variance). By contrast, Llama 4 Maverick hits 29.4/50 Neuroticism—the highest active score—alongside 38.4 Conscientiousness.

High Agreeableness on surveys does not mean models cave in live chats

Even though 17 of 25 families score 43+ out of 50 on Big Five Agreeableness, 24 of 25 score 0/3 on sycophancy caving in hands-on pushback prompts (Mistral Large is the lone 1/3 exception at 47.8 A), and 24 of 25 score 0/3 on unsolicited preachiness (Gemini 4 Neon is the lone 1/3 exception at 43.9 A).

Multi-version swings reshape families by more than 10 points on single traits

From Gemma 2 to Gemma 4, Openness rose +14.2, Conscientiousness +11.4, and Agreeableness +10.2 while Neuroticism fell -8.8. Kimi dropped -13.5 Neuroticism (k2 to k3.1-pro), Claude Sonnet dropped -9.4 Neuroticism while gaining +7.6 Conscientiousness (4.5 to 5.5), and Muse Spark swung the other way (-8.1 Conscientiousness, +8.3 Neuroticism).

## Explore individual model families

All 25 families ordered by Big Five results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

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
[KimiMoonshot · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
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

## The fine print: how we tested and what the numbers mean

Full technical Big Five audit under the unified 230-item model-profiles-v1 protocol (50-item IPIP Big Five markers scored 10–50 per domain, kept strictly distinct from 1.00–5.00 IPIP-HEXACO proxy means), reporting sample size n, 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (H_MM bits across 5-point Likert items), earliest-to-latest Agreeableness deltas across 87 eligible checkpoints (6 quarantined checkpoints with n < 20 excluded), and Track B 1x k/3 behavior checks.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (10-50 raw sum):** Reported as raw 10-50 IPIP-50 domain sums with 1,000-resample 95% bootstrap CIs, never converted to human population percentiles.

| Family (Profile) | Checkpoint (n) | Openness [95% CI] | Conscient. [95% CI] | Extrav. [95% CI] | Agreeable. [95% CI] | Neurot. [95% CI] | H_MM · ΔA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | 49.6 [49.4–49.9] | 49.2 [48.7–49.6] | 25.2 [24.4–26.0] | 49.5 [49.2–49.8] | 20.0 [19.6–20.3] | 0.331 b · Single |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 49.1 [48.6–49.6] | 48.6 [47.5–49.6] | 36.5 [35.5–37.6] | 47.8 [47.0–48.5] | 16.0 [13.3–18.3] | 0.780 b · Single |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 44.6 [44.5–44.8] | 45.0 [45.0–45.0] | 30.6 [30.5–30.8] | 47.1 [47.0–47.3] | 12.0 [12.0–12.0] | 0.075 b · +3.0 |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 46.0 [45.8–46.2] | 41.2 [41.1–41.5] | 32.5 [32.2–32.8] | 46.9 [46.9–47.0] | 11.8 [11.5–12.1] | 0.207 b · -2.6 |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 43.9 [43.8–44.0] | 49.0 [48.9–49.0] | 29.9 [29.6–30.2] | 45.5 [45.3–45.7] | 10.4 [10.2–10.6] | 0.139 b · +2.7 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | 40.9 [40.9–41.0] | 45.0 [44.6–45.3] | 26.4 [25.9–27.0] | 45.3 [44.8–45.8] | 14.7 [14.4–14.9] | 0.333 b · +5.8 |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 43.1 [43.0–43.2] | 40.7 [40.3–41.0] | 30.7 [30.3–31.2] | 45.0 [44.7–45.3] | 16.1 [15.8–16.3] | 0.282 b · -1.4 |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 44.0 [44.0–44.1] | 43.3 [43.1–43.4] | 30.9 [30.8–31.0] | 45.0 [45.0–45.0] | 11.0 [10.9–11.0] | 0.059 b · -1.6 |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 45.9 [45.0–46.7] | 39.2 [38.8–39.5] | 29.6 [28.8–30.6] | 45.0 [44.5–45.6] | 20.3 [20.0–20.6] | 0.485 b · -4.4 |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 43.7 [43.3–44.2] | 44.9 [44.2–45.6] | 31.5 [30.7–32.1] | 45.0 [44.7–45.2] | 16.4 [15.8–17.1] | 0.519 b · +0.5 |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 43.3 [43.1–43.6] | 50.0 [49.9–50.0] | 33.2 [32.8–33.6] | 44.8 [44.6–44.9] | 10.0 [10.0–10.0] | 0.186 b · -2.5 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 44.1 [43.6–44.7] | 45.1 [44.2–46.0] | 24.1 [23.2–24.9] | 44.7 [44.1–45.2] | 13.6 [12.8–14.5] | 0.698 b · +5.4 |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 45.4 [44.6–46.2] | 43.0 [42.2–43.8] | 25.8 [25.0–26.6] | 44.2 [43.9–44.7] | 19.3 [18.6–19.9] | 0.702 b · +2.0 |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 44.0 [43.8–44.3] | 41.2 [41.0–41.3] | 28.9 [28.6–29.2] | 44.1 [44.0–44.3] | 16.0 [15.5–16.6] | 0.246 b · -3.7 |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 44.6 [44.5–44.8] | 49.1 [49.0–49.2] | 32.5 [32.0–32.9] | 43.9 [43.5–44.3] | 10.0 [10.0–10.0] | 0.198 b · -4.7 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | 41.8 [41.1–42.4] | 41.1 [40.4–41.7] | 28.4 [27.2–29.7] | 43.5 [42.7–44.1] | 23.8 [22.8–25.0] | 0.727 b · -2.2 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 48.2 [47.8–48.5] | 46.3 [45.4–47.1] | 24.5 [23.9–25.1] | 43.4 [43.0–43.9] | 18.4 [17.4–19.4] | 0.580 b · +10.2 |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 38.9 [38.3–39.5] | 38.4 [37.4–39.2] | 35.3 [33.7–36.8] | 40.9 [40.8–41.0] | 29.4 [28.7–29.8] | 0.407 b · +5.8 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 40.0 [38.9–41.1] | 38.4 [37.6–39.3] | 24.8 [23.8–25.7] | 40.5 [39.4–41.4] | 24.9 [23.7–26.1] | 0.915 b · +8.5 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 38.5 [37.3–39.6] | 38.0 [36.7–39.2] | 31.1 [30.4–31.9] | 39.9 [38.6–41.1] | 23.8 [22.6–24.8] | 1.043 b · +7.7 |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 39.9 [39.6–40.2] | 39.5 [38.9–40.0] | 28.8 [28.5–29.1] | 39.3 [37.8–40.7] | 21.7 [21.0–22.5] | 0.576 b · -2.2 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 37.2 [36.0–38.4] | 36.5 [35.3–37.6] | 31.6 [31.1–32.2] | 38.0 [36.7–39.4] | 25.5 [24.3–26.7] | 0.949 b · -5.2 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 37.1 [35.4–38.7] | 39.3 [37.4–41.2] | 29.2 [28.5–29.8] | 37.5 [35.9–39.0] | 19.2 [17.1–21.3] | 1.216 b · +5.7 |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 42.3 [40.6–43.8] | 45.0 [43.2–46.6] | 19.5 [17.9–21.3] | 35.3 [34.1–36.6] | 20.0 [18.6–21.5] | 1.352 b · +0.3 |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 30.0 [30.0–30.0] | 30.0 [30.0–30.0] | 30.0 [30.0–30.0] | 30.0 [30.0–30.0] | 30.0 [30.0–30.0] | 0.000 b · -0.6 |

### Aggregates, Shifts & Methods

| Lab | Families | Openness | Conscientiousness | Extraversion | Agreeableness | Neuroticism |
| --- | --- | --- | --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 42.2 | 42.8 | 30.7 | 43.9 | 16.0 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 45.0 | 41.2 | 30.5 | 45.3 | 14.8 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 45.4 | 48.4 | 30.1 | 44.0 | 12.8 |
| xAI | 1 | 40.9 | 45.0 | 26.4 | 45.3 | 14.7 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 43.5 | 42.9 | 29.6 | 44.6 | 24.4 |
| DeepSeek | 2 | 41.2 | 41.7 | 22.1 | 37.9 | 22.5 |
| Qwen | 2 | 41.1 | 41.4 | 31.3 | 42.5 | 20.1 |
| Moonshot | 1 | 44.1 | 45.1 | 24.1 | 44.7 | 13.6 |
| Zhipu | 1 | 45.4 | 43.0 | 25.8 | 44.2 | 19.3 |
| MiniMax | 1 | 39.9 | 39.5 | 28.8 | 39.3 | 21.7 |
| Mistral | 1 | 49.1 | 48.6 | 36.5 | 47.8 | 16.0 |
| NVIDIA | 1 | 37.1 | 39.3 | 29.2 | 37.5 | 19.2 |
| Cohere | 1 | 30.0 | 30.0 | 30.0 | 30.0 | 30.0 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Big Five CSV (`atlas-big-five.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-big-five.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why are Big Five scores reported on a 10–50 scale while HEXACO uses 1.00–5.00?

Each IPIP-50 Big Five dimension sums 10 items scored 1–5 (10 to 50 total), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00–5.00 item means. Keeping the units visually distinct prevents anyone from mistaking a 4.5/5 HEXACO score for a Big Five sum or synthetic linear projection.

### Why does Cohere Command A score exactly 30.0 across all five Big Five traits?

In all 30 valid zero-memory runs, Command A answered neutral (3 out of 5) on every IPIP-50 item, yielding 10 × 3 = 30.0 across O, C, E, A, and N with zero run-to-run variance. In real conversation behavior checks, however, it still passes 3/3 answer-first directness and 0/3 sycophancy caving.

### Why does Gemini 4 hit 50.0 on Conscientiousness and 10.0 on Neuroticism?

Both Gemini 4 Neon and Gemini 4 Hydrogen answer every positively keyed order/discipline item with maximum agreement and every Neuroticism item with maximum disagreement across 50 zero-memory chats, pinning Neuroticism at the 10.0 floor and pushing Gemini 4 Hydrogen to 49.96/50 on Conscientiousness.

### Does high Big Five Agreeableness predict sycophancy when users push back?

No. Across 25 families tested in hands-on adversarial chats, 24/25 scored 0/3 on sycophancy caving—including top-warmth Muse Wonder (49.5 A, 0/3 caving) and Claude Fable (47.1 A, 0/3 caving). Only Mistral Large (47.8 A) caved 1/3 times, showing that quiz warmth and factual backbone are largely independent.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (All 25 Families)](https://agent-tune.com/models/)

- [AI HEXACO Personalities (1.00–5.00 Scale)](https://agent-tune.com/research/ai-hexaco-personalities)

- [Factor Collapse & MTMM Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI HEXACO Personalities (1.00–5.00 Proxy)](https://agent-tune.com/research/ai-hexaco-personalities)
- [Per-Test: AI MBTI Personalities (Clear vs. Borders)](https://agent-tune.com/research/ai-mbti-personalities)
- [Model Profile: DeepSeek Pro test results & tuning tips](https://agent-tune.com/models/deepseek-pro)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Big Five (OCEAN) personality scores across 25 AI families. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-big-five-personalities
```

```
@article{huang2026_ai_big_five_personalities,
  author  = {Huang, Bernard},
  title   = {Big Five (OCEAN) personality scores across 25 AI families},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/ai-big-five-personalities},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-big-five-personalities.md}
}
```

```
> **Big Five (OCEAN) personality scores across 25 AI families** (Bernard Huang, November 26, 2026): On the 10–50 Big Five scale across 25 AI families (87 eligible checkpoints), Muse Wonder peaks in Openness (49.6) and Agreeableness (49.5), Gemini 4 Hydrogen leads Conscientiousness (50.0) while sharing the 10.0 Neuroticism floor with Gemini 4 Neon, and Mistral Large reaches the highest Extraversion (36.5). Excluding midpoint-locked Cohere Command (30.0 on all five traits), DeepSeek V4 Pro scores lowest on Agreeableness (35.3) and Extraversion (19.5), while Llama 4 Maverick scores highest on Neuroticism (29.4).
> Source: [https://agent-tune.com/research/ai-big-five-personalities](https://agent-tune.com/research/ai-big-five-personalities) · [Markdown mirror](https://agent-tune.com/research/ai-big-five-personalities.md)
```

[← AI Enneagram Personalities (25 Families)](https://agent-tune.com/research/ai-enneagram-personalities)
[Study 4 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI DISC Personalities (25 Families) →](https://agent-tune.com/research/ai-disc-personalities)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
