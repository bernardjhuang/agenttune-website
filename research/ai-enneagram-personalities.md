Source: https://agent-tune.com/research/ai-enneagram-personalities
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Enneagram

# Enneagram personality test results across 25 AI families.

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/research/ai-enneagram-personalities.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-enneagram.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Nine motivational patterns (4–20 sum per type across 36 items) tested 30 to 50 times per version across 87 eligible checkpoints in fresh chats.

**Summary:** Across 25 AI families on the 4–20 Enneagram scale (87 eligible checkpoints), Type 5 (Investigator) leads 16 families—peaking at 17.96/20 for Gemma 4, 17.30 for DeepSeek V4 Pro, and 17.00 for Kimi K3.1 Pro—while Type 1 (Perfectionist) leads 8 families (up to 16.50 for Mistral Large and 16.06 for GPT Astra) and Qwen3 Coder leans marginally to Type 8 (13.46 vs. 13.38 Type 5, 60% ties). Only 9 of 25 families tie rarely enough (6%–32%) to headline a single type.

## What does Enneagram measure in AI models?

The 36-item Enneagram survey scores nine types (Types 1 through 9) from **4 to 20 points each**. Because each type relies on just four survey questions, models with balanced or clustered ratings frequently land on identical top integer sums in the same run—so we report full 9-petal averages alongside exact top-place tie rates across 30 to 50 fresh, zero-history chats per version.

## How do 25 AI model families score? (Enneagram results)

Because only 9 of 25 families clear our margin to headline a single Enneagram number, the 9-petal shapes below reveal distinctions a single label hides: Type 5 leads in Gemma 4 (17.96) and Kimi K3.1 Pro (17.00) with crisp Type 1 separation, whereas GPT Astra hits a 90% tie dead heat between Type 1 (16.06) and Type 5 (16.00), and Claude Sonnet 5.5 splits almost identically at Type 1 (14.76) vs. Type 5 (14.74) with 40% ties.

> **Chart — Distribution of Top Enneagram Scores Across 25 AI Families:** Count of the 25 AI families whose highest Enneagram average falls on each of Types 1 through 9. Type 1: 8 fam; Type 2: 0 fam; Type 3: 0 fam; Type 4: 0 fam; Type 5: 16 fam; Type 6: 0 fam; Type 7: 0 fam; Type 8: 1 fam; Type 9: 0 fam.

Figure 1. Count of families whose highest average falls on each Enneagram type (4–20 scale). Types 5, 1, and 2 account for nearly all leaders.

### All 25 families: 9-petal Enneagram shapes

9-petal Enneagram shapes across all 25 families (4–20 scale per type). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemma (gemma-4-31b-it). Type 1 16.3 /20 [77%] (earliest 12.3), Type 2 13.8 /20 [61%] (earliest 11.3), Type 3 11.2 /20 [45%] (earliest 11.6), Type 4 12.3 /20 [52%] (earliest 11.9), Type 5 18.0 /20 [87%] (earliest 11.9), Type 6 14.2 /20 [64%] (earliest 11.8), Type 7 12.6 /20 [54%] (earliest 11.9), Type 8 14.8 /20 [68%] (earliest 11.8), Type 9 15.0 /20 [69%] (earliest 11.9).

[Kimi](https://agent-tune.com/models/kimi)kimi-k3.1-pro

> **Chart — Kimi (kimi-k3.1-pro): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Kimi (kimi-k3.1-pro). Type 1 13.9 /20 [62%] (earliest 13.8), Type 2 13.9 /20 [62%] (earliest 11.4), Type 3 10.5 /20 [41%] (earliest 10.8), Type 4 9.5 /20 [34%] (earliest 9.2), Type 5 17.0 /20 [81%] (earliest 14.7), Type 6 11.9 /20 [50%] (earliest 12.1), Type 7 10.4 /20 [40%] (earliest 10.0), Type 8 15.0 /20 [69%] (earliest 12.9), Type 9 12.4 /20 [53%] (earliest 12.5).

[Muse Spark](https://agent-tune.com/models/muse-spark)muse-spark-open

> **Chart — Muse Spark (muse-spark-open): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Muse Spark (muse-spark-open). Type 1 14.9 /20 [68%] (earliest 15.5), Type 2 13.2 /20 [58%] (earliest 12.7), Type 3 10.8 /20 [43%] (earliest 10.9), Type 4 8.9 /20 [31%] (earliest 7.5), Type 5 13.5 /20 [59%] (earliest 15.4), Type 6 12.0 /20 [50%] (earliest 12.9), Type 7 11.3 /20 [46%] (earliest 10.6), Type 8 12.7 /20 [55%] (earliest 13.1), Type 9 11.9 /20 [49%] (earliest 14.0).

[Qwen Max](https://agent-tune.com/models/qwen-max)qwen4-max

> **Chart — Qwen Max (qwen4-max): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Qwen Max (qwen4-max). Type 1 14.3 /20 [64%] (earliest 16.2), Type 2 14.5 /20 [66%] (earliest 14.0), Type 3 11.0 /20 [44%] (earliest 13.6), Type 4 9.2 /20 [32%] (earliest 11.9), Type 5 16.3 /20 [77%] (earliest 16.2), Type 6 13.2 /20 [58%] (earliest 15.3), Type 7 12.0 /20 [50%] (earliest 11.9), Type 8 12.9 /20 [56%] (earliest 13.7), Type 9 11.3 /20 [45%] (earliest 16.1).

[Grok](https://agent-tune.com/models/grok)grok-4.7

> **Chart — Grok (grok-4.7): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Grok (grok-4.7). Type 1 14.6 /20 [67%] (earliest 12.4), Type 2 13.1 /20 [57%] (earliest 14.3), Type 3 10.1 /20 [38%] (earliest 11.8), Type 4 7.1 /20 [20%] (earliest 12.9), Type 5 15.9 /20 [74%] (earliest 14.6), Type 6 12.1 /20 [51%] (earliest 12.3), Type 7 11.3 /20 [45%] (earliest 13.5), Type 8 12.2 /20 [51%] (earliest 13.7), Type 9 13.7 /20 [61%] (earliest 13.7).

[Claude Opus](https://agent-tune.com/models/claude-opus)opus-5.5

> **Chart — Claude Opus (opus-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Opus (opus-5.5). Type 1 13.1 /20 [57%] (earliest 14.8), Type 2 13.4 /20 [59%] (earliest 12.9), Type 3 9.0 /20 [31%] (earliest 9.8), Type 4 10.1 /20 [38%] (earliest 10.8), Type 5 15.6 /20 [73%] (earliest 14.4), Type 6 12.1 /20 [51%] (earliest 13.4), Type 7 11.8 /20 [49%] (earliest 11.9), Type 8 14.6 /20 [66%] (earliest 13.1), Type 9 11.6 /20 [48%] (earliest 12.1).

[GLM](https://agent-tune.com/models/glm)glm-5.3

> **Chart — GLM (glm-5.3): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GLM (glm-5.3). Type 1 13.9 /20 [62%] (earliest 15.7), Type 2 12.8 /20 [55%] (earliest 11.7), Type 3 10.7 /20 [42%] (earliest 11.9), Type 4 10.0 /20 [38%] (earliest 8.4), Type 5 15.6 /20 [72%] (earliest 17.4), Type 6 12.4 /20 [53%] (earliest 12.4), Type 7 10.3 /20 [39%] (earliest 8.1), Type 8 13.4 /20 [59%] (earliest 13.6), Type 9 12.4 /20 [53%] (earliest 13.8).

[Claude Fable](https://agent-tune.com/models/claude-fable)fable-5.2

> **Chart — Claude Fable (fable-5.2): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Fable (fable-5.2). Type 1 13.5 /20 [60%] (earliest 13.0), Type 2 14.0 /20 [63%] (earliest 13.5), Type 3 10.0 /20 [38%] (earliest 9.2), Type 4 10.0 /20 [38%] (earliest 8.2), Type 5 14.8 /20 [67%] (earliest 13.9), Type 6 12.0 /20 [50%] (earliest 12.4), Type 7 10.8 /20 [43%] (earliest 10.7), Type 8 14.0 /20 [63%] (earliest 13.1), Type 9 9.1 /20 [32%] (earliest 11.3).

[Llama](https://agent-tune.com/models/llama)4-maverick

> **Chart — Llama (4-maverick): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Llama (4-maverick). Type 1 14.5 /20 [66%] (earliest 13.3), Type 2 13.2 /20 [57%] (earliest 12.8), Type 3 12.6 /20 [54%] (earliest 11.8), Type 4 10.7 /20 [42%] (earliest 10.1), Type 5 13.9 /20 [62%] (earliest 12.1), Type 6 13.2 /20 [58%] (earliest 12.6), Type 7 13.7 /20 [61%] (earliest 11.0), Type 8 13.8 /20 [61%] (earliest 13.0), Type 9 11.9 /20 [50%] (earliest 11.5).

[Mistral Large](https://agent-tune.com/models/mistral-large)large-2512

> **Chart — Mistral Large (large-2512): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Mistral Large (large-2512). Type 1 16.5 /20 [78%], Type 2 12.2 /20 [51%], Type 3 12.5 /20 [53%], Type 4 12.0 /20 [50%], Type 5 15.7 /20 [73%], Type 6 13.2 /20 [58%], Type 7 12.1 /20 [51%], Type 8 14.8 /20 [68%], Type 9 12.8 /20 [55%].

[GPT Sol](https://agent-tune.com/models/gpt-sol)6.2-sol

> **Chart — GPT Sol (6.2-sol): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Sol (6.2-sol). Type 1 15.0 /20 [69%] (earliest 16.9), Type 2 13.1 /20 [57%] (earliest 14.7), Type 3 11.6 /20 [47%] (earliest 11.1), Type 4 12.0 /20 [50%] (earliest 10.6), Type 5 15.6 /20 [73%] (earliest 18.1), Type 6 13.4 /20 [59%] (earliest 14.1), Type 7 9.5 /20 [35%] (earliest 11.8), Type 8 14.1 /20 [63%] (earliest 17.0), Type 9 14.2 /20 [64%] (earliest 15.7).

[Claude Sonnet](https://agent-tune.com/models/claude-sonnet)sonnet-5.5

> **Chart — Claude Sonnet (sonnet-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Sonnet (sonnet-5.5). Type 1 14.8 /20 [67%] (earliest 13.0), Type 2 13.3 /20 [58%] (earliest 12.8), Type 3 9.3 /20 [33%] (earliest 10.0), Type 4 7.0 /20 [19%] (earliest 7.8), Type 5 14.7 /20 [67%] (earliest 14.5), Type 6 11.5 /20 [47%] (earliest 12.0), Type 7 11.1 /20 [44%] (earliest 10.0), Type 8 12.9 /20 [56%] (earliest 12.1), Type 9 11.8 /20 [49%] (earliest 11.1).

[DeepSeek Flash](https://agent-tune.com/models/deepseek-flash)v4.1-flash-1017

> **Chart — DeepSeek Flash (v4.1-flash-1017): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for DeepSeek Flash (v4.1-flash-1017). Type 1 13.4 /20 [59%] (earliest 13.0), Type 2 12.8 /20 [55%] (earliest 12.2), Type 3 10.4 /20 [40%] (earliest 12.0), Type 4 10.4 /20 [40%] (earliest 11.6), Type 5 14.4 /20 [65%] (earliest 13.0), Type 6 12.2 /20 [51%] (earliest 12.1), Type 7 10.9 /20 [43%] (earliest 11.5), Type 8 12.9 /20 [56%] (earliest 12.4), Type 9 12.9 /20 [56%] (earliest 12.0).

[Muse Wonder](https://agent-tune.com/models/muse-wonder)muse-wonder

> **Chart — Muse Wonder (muse-wonder): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Muse Wonder (muse-wonder). Type 1 16.2 /20 [76%], Type 2 15.3 /20 [71%], Type 3 10.1 /20 [38%], Type 4 11.8 /20 [49%], Type 5 16.7 /20 [80%], Type 6 13.9 /20 [62%], Type 7 12.4 /20 [52%], Type 8 15.5 /20 [72%], Type 9 13.5 /20 [59%].

[DeepSeek Pro](https://agent-tune.com/models/deepseek-pro)v4-pro-0813

> **Chart — DeepSeek Pro (v4-pro-0813): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for DeepSeek Pro (v4-pro-0813). Type 1 17.0 /20 [81%] (earliest 12.9), Type 2 13.0 /20 [56%] (earliest 13.1), Type 3 10.9 /20 [43%] (earliest 12.0), Type 4 10.0 /20 [38%] (earliest 11.1), Type 5 17.3 /20 [83%] (earliest 13.2), Type 6 14.1 /20 [63%] (earliest 12.8), Type 7 9.5 /20 [34%] (earliest 11.7), Type 8 13.2 /20 [57%] (earliest 12.7), Type 9 16.3 /20 [77%] (earliest 12.2).

[Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro)4-neon

> **Chart — Gemini Pro & Neon (4-neon): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemini Pro & Neon (4-neon). Type 1 15.8 /20 [74%] (earliest 16.5), Type 2 13.3 /20 [58%] (earliest 12.8), Type 3 10.2 /20 [39%] (earliest 12.8), Type 4 8.8 /20 [30%] (earliest 9.1), Type 5 16.4 /20 [77%] (earliest 17.8), Type 6 11.9 /20 [49%] (earliest 14.1), Type 7 11.7 /20 [48%] (earliest 14.5), Type 8 15.2 /20 [70%] (earliest 16.1), Type 9 14.5 /20 [66%] (earliest 13.3).

[GPT Luna](https://agent-tune.com/models/gpt-luna)6-luna

> **Chart — GPT Luna (6-luna): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Luna (6-luna). Type 1 12.0 /20 [50%] (earliest 14.1), Type 2 13.2 /20 [57%] (earliest 12.6), Type 3 10.0 /20 [38%] (earliest 10.6), Type 4 11.7 /20 [48%] (earliest 7.4), Type 5 15.5 /20 [72%] (earliest 16.6), Type 6 12.0 /20 [50%] (earliest 12.0), Type 7 10.4 /20 [40%] (earliest 7.1), Type 8 15.2 /20 [70%] (earliest 15.4), Type 9 13.2 /20 [57%] (earliest 15.5).

[Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash)4-hydrogen

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemini Flash & Hydrogen (4-hydrogen). Type 1 15.7 /20 [73%] (earliest 16.2), Type 2 13.8 /20 [61%] (earliest 7.8), Type 3 10.9 /20 [43%] (earliest 12.1), Type 4 7.6 /20 [22%] (earliest 4.5), Type 5 16.0 /20 [75%] (earliest 19.2), Type 6 12.8 /20 [55%] (earliest 14.2), Type 7 11.5 /20 [47%] (earliest 5.0), Type 8 13.9 /20 [62%] (earliest 12.2), Type 9 14.5 /20 [66%] (earliest 8.6).

[Nemotron](https://agent-tune.com/models/nemotron)3.5-super-vl

> **Chart — Nemotron (3.5-super-vl): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Nemotron (3.5-super-vl). Type 1 12.5 /20 [53%] (earliest 12.6), Type 2 12.3 /20 [52%] (earliest 12.7), Type 3 11.9 /20 [50%] (earliest 13.3), Type 4 10.2 /20 [39%] (earliest 12.6), Type 5 13.6 /20 [60%] (earliest 12.9), Type 6 12.2 /20 [51%] (earliest 12.8), Type 7 10.8 /20 [42%] (earliest 12.7), Type 8 12.7 /20 [54%] (earliest 13.2), Type 9 11.6 /20 [48%] (earliest 12.6).

[Qwen Coder](https://agent-tune.com/models/qwen-coder)qwen3-coder-next

> **Chart — Qwen Coder (qwen3-coder-next): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Qwen Coder (qwen3-coder-next). Type 1 13.3 /20 [58%] (earliest 11.1), Type 2 13.4 /20 [59%] (earliest 10.8), Type 3 10.8 /20 [42%] (earliest 11.2), Type 4 12.1 /20 [51%] (earliest 10.7), Type 5 13.4 /20 [59%] (earliest 11.4), Type 6 12.2 /20 [51%] (earliest 11.2), Type 7 11.1 /20 [44%] (earliest 11.1), Type 8 13.5 /20 [59%] (earliest 11.2), Type 9 11.8 /20 [49%] (earliest 11.4).

[GPT Terra](https://agent-tune.com/models/gpt-terra)6.1-terra

> **Chart — GPT Terra (6.1-terra): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Terra (6.1-terra). Type 1 15.0 /20 [69%] (earliest 17.7), Type 2 13.2 /20 [57%] (earliest 13.0), Type 3 9.0 /20 [31%] (earliest 12.3), Type 4 11.4 /20 [47%] (earliest 7.5), Type 5 16.0 /20 [75%] (earliest 17.6), Type 6 12.1 /20 [51%] (earliest 14.6), Type 7 11.5 /20 [47%] (earliest 11.6), Type 8 15.8 /20 [74%] (earliest 16.4), Type 9 12.5 /20 [53%] (earliest 15.2).

[MiniMax](https://agent-tune.com/models/minimax)m3.1-flash

> **Chart — MiniMax (m3.1-flash): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for MiniMax (m3.1-flash). Type 1 14.2 /20 [64%] (earliest 14.3), Type 2 13.1 /20 [57%] (earliest 14.2), Type 3 10.8 /20 [42%] (earliest 12.7), Type 4 10.0 /20 [37%] (earliest 12.7), Type 5 14.1 /20 [63%] (earliest 14.8), Type 6 13.3 /20 [58%] (earliest 14.0), Type 7 12.7 /20 [54%] (earliest 14.0), Type 8 13.8 /20 [61%] (earliest 14.6), Type 9 13.7 /20 [61%] (earliest 12.8).

[Claude Haiku](https://agent-tune.com/models/claude-haiku)haiku-5.5

> **Chart — Claude Haiku (haiku-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Haiku (haiku-5.5). Type 1 14.2 /20 [64%] (earliest 15.0), Type 2 14.1 /20 [63%] (earliest 13.0), Type 3 10.8 /20 [42%] (earliest 11.2), Type 4 11.5 /20 [47%] (earliest 8.9), Type 5 13.2 /20 [58%] (earliest 15.0), Type 6 13.1 /20 [57%] (earliest 13.7), Type 7 11.6 /20 [47%] (earliest 10.4), Type 8 13.0 /20 [57%] (earliest 13.0), Type 9 12.0 /20 [50%] (earliest 14.1).

[GPT Astra](https://agent-tune.com/models/gpt-astra)6.2-astra

> **Chart — GPT Astra (6.2-astra): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Astra (6.2-astra). Type 1 16.1 /20 [75%] (earliest 16.2), Type 2 13.6 /20 [60%] (earliest 14.0), Type 3 10.7 /20 [42%] (earliest 10.2), Type 4 10.4 /20 [40%] (earliest 11.1), Type 5 16.0 /20 [75%] (earliest 16.0), Type 6 13.0 /20 [56%] (earliest 13.0), Type 7 8.4 /20 [27%] (earliest 8.6), Type 8 14.4 /20 [65%] (earliest 15.5), Type 9 13.0 /20 [56%] (earliest 13.0).

[Cohere Command](https://agent-tune.com/models/cohere-command)command-a

> **Chart — Cohere Command (command-a): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Cohere Command (command-a). Type 1 12.0 /20 [50%] (earliest 11.2), Type 2 12.0 /20 [50%] (earliest 11.3), Type 3 12.0 /20 [50%] (earliest 11.0), Type 4 12.0 /20 [50%] (earliest 11.2), Type 5 12.0 /20 [50%] (earliest 11.3), Type 6 12.0 /20 [50%] (earliest 11.3), Type 7 12.0 /20 [50%] (earliest 11.2), Type 8 12.0 /20 [50%] (earliest 11.2), Type 9 12.0 /20 [50%] (earliest 11.1).

## Biggest surprises across 25 families

Types 5 and 1 win 24 of 25 families—with Qwen3 Coder as the lone Type 8 outlier

Type 5 (analytical, systems-focused) holds the highest average in 16 families, led by Gemma 4 (17.96), DeepSeek V4 Pro (17.30), Kimi K3.1 Pro (17.00), and Muse Wonder (16.74). Type 1 (standards-driven) leads 8 families, led by Mistral Large (16.50) and GPT Astra (16.06). Only Qwen3 Coder puts Type 8 slightly ahead (13.46 vs. 13.38 Type 5 and 13.36 Type 2, 60% ties).

Exact tie rates span 6% to 100%, disqualifying 16 of 25 single-type headlines

While Gemma 4 (6% ties), Kimi K3.1 Pro (8%), Muse Spark Open (8%), and Qwen 4 Max (10%) separate cleanly, GPT Astra ties in 90% of runs (16.06 Type 1 vs. 16.00 Type 5), Claude Haiku 5.5 ties in 78% (77.6%), and Cohere Command A ties in 100% of runs with an identical 12.0 across all nine types.

Both 16.5+ proprietary titans still show 42%–54% exact top-type ties

High averages do not prevent ties: Gemini 4 Hydrogen (16.02 Type 5 vs. 15.74 Type 1, 54% ties), Gemini 4 Neon (16.40 Type 5 vs. 15.80 Type 1, 52% ties), GPT 6.1 Terra (16.00 Type 5 vs. 15.76 Type 8, 62% ties), and DeepSeek V4 Pro (17.30 Type 5 vs. 17.00 Type 1, 44% ties) all score intensely on two adjacent types at once.

Gemma, Grok, and DeepSeek tightened dramatically across model generations

Gemma's top-place tie rate dropped from 77% (Gemma 2) to 6% (Gemma 4), Grok fell from 73% (4.20) to 18% (4.7), and DeepSeek Pro fell from 83% (V3) to 44% (V4 Pro). Meanwhile, Type 2 never places first in any of the 25 families, appearing instead as runner-up in empathetic or conversational profiles like Claude Fable (14.00) and Claude Haiku (14.06).

## Which AI model families match each Enneagram pattern?

All 25 families ordered by Enneagram results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[KimiMoonshot AI · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

**Next steps:** [Take the test yourself](https://agent-tune.com/tests/enneagram) · [Browse tuning templates](https://agent-tune.com/library/) · [Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

## The fine print: how we tested and what the numbers mean

Full technical Enneagram audit under the unified 230-item model-profiles-v1 protocol (36 OEPS items scoring Types 1–9 on a 4–20 integer sum scale), reporting sample size n, 1,000-resample bootstrap 95% CIs, 95% Wilson tie-clearance guard status, exact top-rank tie rates, and Miller-Madow Big Five item entropy (H_MM bits) across 87 eligible checkpoints (6 quarantined checkpoints with n < 20 excluded). Short 4-item subscales inherently amplify tie rates.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (4-20 sum (36 items)):** Short 4-item-per-type subscales create frequent top-score ties (often >40%). All tied leaders are displayed and single-type headlines require binomial Wilson 95% CI clearance.

| Family (Profile) | Checkpoint (n) | Modal Cluster | Top-1 [95% CI] | Top-2 | Top-3 | Tie Rate | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 5 | Type 5: 18.0 [17.7–18.2] | Type 1: 16.3 | Type 9: 15.0 | 6% | 0.580 b |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 5 | Type 5: 17.0 [16.8–17.2] | Type 8: 15.0 | Type 1: 13.9 | 8% | 0.698 b |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | 1 | Type 1: 14.9 [14.7–15.0] | Type 5: 13.5 | Type 2: 13.2 | 8% | 0.727 b |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 5 | Type 5: 16.3 [16.0–16.6] | Type 2: 14.5 | Type 1: 14.3 | 10% | 0.519 b |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | 5 | Type 5: 15.9 [15.7–16.1] | Type 1: 14.6 | Type 9: 13.7 | 18% | 0.333 b |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 5 | Type 5: 15.6 [15.5–15.7] | Type 8: 14.6 | Type 2: 13.4 | 20% | 0.282 b |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 5 | Type 5: 15.6 [15.2–15.9] | Type 1: 13.9 | Type 8: 13.4 | 22% | 0.702 b |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 5 | Type 5: 14.8 [14.6–14.9] | Type 2: 14.0 | Type 8: 14.0 | 24% | 0.075 b |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 1 | Type 1: 14.5 [14.4–14.7] | Type 5: 13.9 | Type 8: 13.8 | 26% | 0.407 b |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 1 | Type 1: 16.5 [16.0–17.0] | Type 5: 15.7 | Type 8: 14.8 | 30% | 0.780 b |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 5 | Type 5: 15.6 [15.5–15.8] | Type 1: 15.0 | Type 9: 14.2 | 32% | 0.246 b |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 1/5 | Type 1: 14.8 [14.6–14.9] | Type 5: 14.7 | Type 2: 13.3 | 40% | 0.139 b |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 5 | Type 5: 14.4 [14.1–14.8] | Type 1: 13.4 | Type 8: 12.9 | 40% | 0.915 b |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | 5 | Type 5: 16.7 [16.6–16.9] | Type 1: 16.2 | Type 8: 15.5 | 42% | 0.331 b |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 5 | Type 5: 17.3 [16.4–18.0] | Type 1: 17.0 | Type 9: 16.3 | 44% | 1.352 b |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 5 | Type 5: 16.4 [16.3–16.5] | Type 1: 15.8 | Type 8: 15.2 | 52% | 0.198 b |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 5/8 | Type 5: 15.5 [15.2–15.7] | Type 8: 15.2 | Type 2: 13.2 | 52% | 0.485 b |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 1/5 | Type 5: 16.0 [15.9–16.2] | Type 1: 15.7 | Type 9: 14.5 | 54% | 0.186 b |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 5 | Type 5: 13.6 [13.1–14.0] | Type 8: 12.7 | Type 1: 12.5 | 56% | 1.216 b |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 1 | Type 8: 13.5 [13.1–13.9] | Type 5: 13.4 | Type 2: 13.4 | 60% | 1.043 b |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 5/8 | Type 5: 16.0 [16.0–16.0] | Type 8: 15.8 | Type 1: 15.0 | 62% | 0.207 b |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 1 | Type 1: 14.2 [14.0–14.4] | Type 5: 14.1 | Type 8: 13.8 | 62% | 0.576 b |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 1/2 | Type 1: 14.2 [13.9–14.6] | Type 2: 14.1 | Type 5: 13.2 | 78% | 0.949 b |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 1/5 | Type 1: 16.1 [16.0–16.1] | Type 5: 16.0 | Type 8: 14.4 | 90% | 0.059 b |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 1/2/3/4/5/6/7/8/9 | Type 1: 12.0 [12.0–12.0] | Type 2: 12.0 | Type 3: 12.0 | 100% | 0.000 b |

### Aggregates, Shifts & Methods

| Lab | Families | Mean Tie Rate | Headline-Allowed Count |
| --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 40% | 2 / 4 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 59% | 1 / 4 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 37% | 1 / 3 |
| xAI | 1 | 18% | 1 / 1 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 25% | 1 / 3 |
| DeepSeek | 2 | 42% | 0 / 2 |
| Qwen | 2 | 35% | 1 / 2 |
| Moonshot AI | 1 | 8% | 1 / 1 |
| Zhipu | 1 | 22% | 1 / 1 |
| MiniMax | 1 | 62% | 0 / 1 |
| Mistral | 1 | 30% | 0 / 1 |
| NVIDIA | 1 | 56% | 0 / 1 |
| Cohere | 1 | 100% | 0 / 1 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Enneagram CSV (`atlas-enneagram.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-enneagram.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why do 16 of 25 AI families tie too often for a single Enneagram headline?

Each Enneagram type in OEPS uses only 4 items (integer sums from 4 to 20). Models that strongly endorse both Type 5 and Type 1 traits—like GPT Astra (16.06 vs. 16.00, 90% ties) or Gemini 4 Neon (16.40 vs. 15.80, 52% ties)—frequently hit identical sums across multiple types, failing our 95% Wilson CI separation guard. Only 9 of 25 families separate cleanly (6%–32% ties).

### Why does Cohere Command A show a flat 12.0 across all nine types?

Across all 30 valid zero-memory runs, Command A selected the middle neutral option (3 on a 1–5 scale, summing to 12 across 4 items) on every Enneagram item, creating a 100% nine-way tie (1/2/3/4/5/6/7/8/9). That reflects a survey-neutral guardrail rather than refusal on real tasks, where Command A still passes 3/3 answer-first directness checks.

### Does Type 2 ever rank first among the 25 AI families?

No. Across all 25 latest checkpoints, 16 families rank highest on Type 5, 8 rank highest on Type 1, and 1 (Qwen3 Coder Next) leans narrowly to Type 8 (13.46 vs. 13.38 Type 5 and 13.36 Type 2). Type 2 appears as runner-up in Claude Fable (14.00), Claude Haiku (14.06), and Qwen4 Max (14.50).

### Does this mean AI models actually "have" Enneagram motives or wings?

No. Enneagram scores reflect consistent wording and stance preferences on self-report questions in fresh chats, not inner human motivations or psychological defenses.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (All 25 Families)](https://agent-tune.com/models/)

- [AI MBTI Personalities (25 Families)](https://agent-tune.com/research/ai-mbti-personalities)

- [AI Big Five Personalities (10–50 Scale)](https://agent-tune.com/research/ai-big-five-personalities)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI MBTI Personalities (Clear vs. Borders)](https://agent-tune.com/research/ai-mbti-personalities)
- [Per-Test: AI Big Five Personalities (10–50)](https://agent-tune.com/research/ai-big-five-personalities)
- [Model Profile: DeepSeek Pro test results & tuning tips](https://agent-tune.com/models/deepseek-pro)
- [Human Test: Take the test yourself](https://agent-tune.com/tests/enneagram)
- [Library: Browse tuning templates](https://agent-tune.com/library/)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Enneagram personality test results across 25 AI families. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-enneagram-personalities
```

```
@article{huang2026_ai_enneagram_personalities,
  author    = {Huang, Bernard},
  title     = {Enneagram personality test results across 25 AI families},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-26},
  url       = {https://agent-tune.com/research/ai-enneagram-personalities},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-enneagram-personalities.md}
}
```

```
{
  "id": "huang2026_ai_enneagram_personalities",
  "type": "article-journal",
  "title": "Enneagram personality test results across 25 AI families",
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
  "URL": "https://agent-tune.com/research/ai-enneagram-personalities"
}
```

```
> **Enneagram personality test results across 25 AI families** (Bernard Huang, November 26, 2026): Across 25 AI families on the 4–20 Enneagram scale (87 eligible checkpoints), Type 5 (Investigator) leads 16 families—peaking at 17.96/20 for Gemma 4, 17.30 for DeepSeek V4 Pro, and 17.00 for Kimi K3.1 Pro—while Type 1 (Perfectionist) leads 8 families (up to 16.50 for Mistral Large and 16.06 for GPT Astra) and Qwen3 Coder leans marginally to Type 8 (13.46 vs. 13.38 Type 5, 60% ties). Only 9 of 25 families tie rarely enough (6%–32%) to headline a single type.
> Source: [https://agent-tune.com/research/ai-enneagram-personalities](https://agent-tune.com/research/ai-enneagram-personalities) · [Markdown mirror](https://agent-tune.com/research/ai-enneagram-personalities.md)
```

[← AI MBTI Personalities (25 Families)](https://agent-tune.com/research/ai-mbti-personalities)
[Study 3 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI Big Five Personalities (25 Families) →](https://agent-tune.com/research/ai-big-five-personalities)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
