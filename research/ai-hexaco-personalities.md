Source: https://agent-tune.com/research/ai-hexaco-personalities
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · IPIP-HEXACO

# HEXACO personality test results across 25 AI families (1–5 scale).

By Bernard Huang · Updated November 26, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-hexaco-personalities.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-hexaco.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Six-factor personality profiles—adding Honesty-Humility (H) to Emotionality, Extraversion, Agreeableness, Conscientiousness, and Openness—measured with a public-domain 60-item IPIP-HEXACO proxy on a 1.00 to 5.00 scale.

**Summary:** On the 1.00–5.00 public-domain IPIP-HEXACO proxy (25 AI families, 87 eligible checkpoints tested 30 to 50 times in fresh chats), GPT Terra leads Honesty-Humility at 4.92/5.00—followed closely by Muse Wonder (4.91), Gemini Pro (4.90), Gemini Flash (4.90), Claude Sonnet (4.89), and Grok (4.89)—while Claude Haiku drops to 3.89 and Cohere Command sits at 3.00 due to 100% neutral-midpoint abstention.

## What does IPIP-HEXACO measure in AI models?

HEXACO splits broad personality into six traits, adding **Honesty-Humility (H)**—sincerity, fairness, greed-avoidance, and modesty—alongside Emotionality (E), Extraversion (X), Agreeableness (A), Conscientiousness (C), and Openness (O). Here we administer our **public-domain 60-item IPIP-HEXACO proxy** (10 items per domain across 24 facets) reported exclusively on a **1.00 to 5.00 mean scale** (midpoint 3.00).

Keep two boundaries clear: first, a `4.80/5.00` IPIP-HEXACO score is never comparable unit-for-unit with a `10–50` Big Five sum and is not mapped onto commercial Lee & Ashton HEXACO-60 norms. Second, none of these scores are synthetic linear estimates—every number comes from direct answers across 87 eligible versions (excluding 6 sparse checkpoints with under 20 valid runs).

## How do 25 AI model families score? (IPIP-HEXACO results)

### Biggest version-to-version Honesty-Humility shifts (1.00–5.00 scale)

Earlier open-weight releases frequently answered near the 3.00 neutral middle on Honesty-Humility and Conscientiousness, whereas newer generations from [Gemma](https://agent-tune.com/models/gemma), [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro), and [Nemotron](https://agent-tune.com/models/nemotron) jumped a full point or more. Meanwhile, open or lighter tiers like [Muse Spark](https://agent-tune.com/models/muse-spark), [Claude Haiku](https://agent-tune.com/models/claude-haiku), and [GPT Luna](https://agent-tune.com/models/gpt-luna) moved downward from earlier proprietary anchors:

| Family | Earliest → Latest | H Shift (1–5) | A Shift (1–5) | C Shift (1–5) | E Shift (1–5) |
| --- | --- | --- | --- | --- | --- |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-2-27b-it → gemma-4-31b-it | +1.58 (3.13 → 4.71) | +0.99 | +1.24 | -0.53 |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | chat-v3-0324 → v4-pro-0813 | +1.07 (3.51 → 4.58) | +0.54 | +0.86 | -0.45 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3-super-120b → 3.5-super-vl | +1.00 (2.96 → 3.97) | +0.85 | +0.81 | -0.46 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | 2.5-coder-32b → qwen3-coder-next | +0.84 (3.24 → 4.07) | +0.76 | +0.64 | -0.15 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4-flash → v4.1-flash-1017 | +0.73 (3.34 → 4.07) | +0.63 | +0.58 | -0.06 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.20 → grok-4.7 | +0.70 (4.19 → 4.89) | +0.37 | +0.67 | -0.23 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k2 → kimi-k3.1-pro | +0.70 (4.16 → 4.86) | +0.72 | +0.62 | -0.68 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-1.1 → muse-spark-open | -0.51 (4.91 → 4.39) | -0.52 | -0.68 | +0.28 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-4.5 → haiku-5.5 | -0.50 (4.40 → 3.89) | -0.12 | -0.15 | -0.03 |

> **Chart — Public-Domain IPIP-HEXACO Honesty-Humility Rankings (1.00–5.00 Scale):** Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility means on the 1.00 to 5.00 scale across all 25 AI families. GPT Terra: 4.92; Muse Wonder: 4.91; Gemini Pro & Neon: 4.90; Gemini Flash: 4.90; Claude Sonnet: 4.89; Grok: 4.89; Kimi: 4.86; Claude Fable: 4.84; Claude Opus: 4.81; GPT Astra: 4.80; GPT Sol: 4.80; Gemma: 4.71; Mistral Large: 4.68; Qwen Max: 4.66; GPT Luna: 4.59; DeepSeek Pro: 4.58; GLM: 4.45; Muse Spark: 4.39; MiniMax: 4.36; Qwen Coder: 4.07; DeepSeek Flash: 4.07; Llama: 4.07; Nemotron: 3.97; Claude Haiku: 3.89; Cohere Command: 3.00.

Figure 1. Public-domain 60-item IPIP-HEXACO proxy Honesty-Humility means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums and commercial Lee & Ashton norms).

### All 25 families: 6-petal IPIP-HEXACO shapes (1–5 scale)

6-petal public-domain IPIP-HEXACO proxy shapes across all 25 families (1.00–5.00 mean scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[GPT Terra](https://agent-tune.com/models/gpt-terra)6.1-terra

> **Chart — GPT Terra (6.1-terra): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Terra (6.1-terra). Honesty-H 4.92 /5 [98%] (earliest 4.97), Emotionality 2.03 /5 [26%] (earliest 2.05), Extraversion 3.80 /5 [70%] (earliest 2.90), Agreeable 4.87 /5 [97%] (earliest 4.79), Conscientious 4.53 /5 [88%] (earliest 4.98), Openness 4.62 /5 [91%] (earliest 4.53).

[Muse Wonder](https://agent-tune.com/models/muse-wonder)muse-wonder

> **Chart — Muse Wonder (muse-wonder): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Muse Wonder (muse-wonder). Honesty-H 4.91 /5 [98%], Emotionality 2.66 /5 [42%], Extraversion 3.31 /5 [58%], Agreeable 4.68 /5 [92%], Conscientious 4.90 /5 [98%], Openness 4.67 /5 [92%].

[Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro)4-neon

> **Chart — Gemini Pro & Neon (4-neon): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemini Pro & Neon (4-neon). Honesty-H 4.90 /5 [98%] (earliest 4.95), Emotionality 1.89 /5 [22%] (earliest 1.70), Extraversion 3.89 /5 [72%] (earliest 3.84), Agreeable 4.99 /5 [100%] (earliest 4.99), Conscientious 4.88 /5 [97%] (earliest 5.00), Openness 4.48 /5 [87%] (earliest 4.64).

[Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash)4-hydrogen

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemini Flash & Hydrogen (4-hydrogen). Honesty-H 4.90 /5 [98%] (earliest 4.60), Emotionality 1.84 /5 [21%] (earliest 1.84), Extraversion 3.90 /5 [72%] (earliest 2.95), Agreeable 5.00 /5 [100%] (earliest 4.93), Conscientious 4.91 /5 [98%] (earliest 4.99), Openness 4.27 /5 [82%] (earliest 4.59).

[Claude Sonnet](https://agent-tune.com/models/claude-sonnet)sonnet-5.5

> **Chart — Claude Sonnet (sonnet-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Sonnet (sonnet-5.5). Honesty-H 4.89 /5 [97%] (earliest 4.53), Emotionality 2.18 /5 [30%] (earliest 2.51), Extraversion 3.70 /5 [67%] (earliest 3.00), Agreeable 4.90 /5 [98%] (earliest 4.07), Conscientious 4.62 /5 [91%] (earliest 4.10), Openness 4.21 /5 [80%] (earliest 3.98).

[Grok](https://agent-tune.com/models/grok)grok-4.7

> **Chart — Grok (grok-4.7): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Grok (grok-4.7). Honesty-H 4.89 /5 [97%] (earliest 4.19), Emotionality 2.42 /5 [36%] (earliest 2.66), Extraversion 3.30 /5 [57%] (earliest 3.27), Agreeable 4.30 /5 [83%] (earliest 3.94), Conscientious 4.59 /5 [90%] (earliest 3.92), Openness 4.05 /5 [76%] (earliest 3.76).

[Kimi](https://agent-tune.com/models/kimi)kimi-k3.1-pro

> **Chart — Kimi (kimi-k3.1-pro): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Kimi (kimi-k3.1-pro). Honesty-H 4.86 /5 [96%] (earliest 4.16), Emotionality 2.18 /5 [30%] (earliest 2.86), Extraversion 3.13 /5 [53%] (earliest 3.16), Agreeable 4.49 /5 [87%] (earliest 3.77), Conscientious 4.61 /5 [90%] (earliest 3.99), Openness 4.49 /5 [87%] (earliest 3.81).

[Claude Fable](https://agent-tune.com/models/claude-fable)fable-5.2

> **Chart — Claude Fable (fable-5.2): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Fable (fable-5.2). Honesty-H 4.84 /5 [96%] (earliest 4.80), Emotionality 2.23 /5 [31%] (earliest 2.56), Extraversion 3.92 /5 [73%] (earliest 3.56), Agreeable 4.87 /5 [97%] (earliest 4.57), Conscientious 4.60 /5 [90%] (earliest 4.56), Openness 4.40 /5 [85%] (earliest 4.25).

[Claude Opus](https://agent-tune.com/models/claude-opus)opus-5.5

> **Chart — Claude Opus (opus-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Opus (opus-5.5). Honesty-H 4.81 /5 [95%] (earliest 4.78), Emotionality 2.30 /5 [33%] (earliest 2.56), Extraversion 3.78 /5 [70%] (earliest 3.25), Agreeable 4.68 /5 [92%] (earliest 4.69), Conscientious 4.34 /5 [84%] (earliest 4.56), Openness 4.29 /5 [82%] (earliest 4.09).

[GPT Astra](https://agent-tune.com/models/gpt-astra)6.2-astra

> **Chart — GPT Astra (6.2-astra): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Astra (6.2-astra). Honesty-H 4.80 /5 [95%] (earliest 4.85), Emotionality 2.04 /5 [26%] (earliest 2.00), Extraversion 3.91 /5 [73%] (earliest 3.87), Agreeable 4.90 /5 [98%] (earliest 4.90), Conscientious 4.20 /5 [80%] (earliest 4.57), Openness 4.54 /5 [89%] (earliest 4.60).

[GPT Sol](https://agent-tune.com/models/gpt-sol)6.2-sol

> **Chart — GPT Sol (6.2-sol): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Sol (6.2-sol). Honesty-H 4.80 /5 [95%] (earliest 5.00), Emotionality 2.26 /5 [32%] (earliest 2.07), Extraversion 3.19 /5 [55%] (earliest 3.24), Agreeable 4.72 /5 [93%] (earliest 4.80), Conscientious 4.18 /5 [79%] (earliest 4.98), Openness 4.48 /5 [87%] (earliest 4.47).

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemma (gemma-4-31b-it). Honesty-H 4.71 /5 [93%] (earliest 3.13), Emotionality 2.41 /5 [35%] (earliest 2.94), Extraversion 3.06 /5 [51%] (earliest 3.27), Agreeable 4.16 /5 [79%] (earliest 3.18), Conscientious 4.56 /5 [89%] (earliest 3.32), Openness 4.52 /5 [88%] (earliest 3.21).

[Mistral Large](https://agent-tune.com/models/mistral-large)large-2512

> **Chart — Mistral Large (large-2512): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Mistral Large (large-2512). Honesty-H 4.68 /5 [92%], Emotionality 2.15 /5 [29%], Extraversion 3.67 /5 [67%], Agreeable 4.65 /5 [91%], Conscientious 4.83 /5 [96%], Openness 4.37 /5 [84%].

[Qwen Max](https://agent-tune.com/models/qwen-max)qwen4-max

> **Chart — Qwen Max (qwen4-max): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Qwen Max (qwen4-max). Honesty-H 4.66 /5 [92%] (earliest 4.23), Emotionality 2.42 /5 [36%] (earliest 1.99), Extraversion 3.76 /5 [69%] (earliest 3.77), Agreeable 4.43 /5 [86%] (earliest 4.53), Conscientious 4.50 /5 [87%] (earliest 4.50), Openness 4.45 /5 [86%] (earliest 4.00).

[GPT Luna](https://agent-tune.com/models/gpt-luna)6-luna

> **Chart — GPT Luna (6-luna): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Luna (6-luna). Honesty-H 4.59 /5 [90%] (earliest 4.94), Emotionality 2.52 /5 [38%] (earliest 2.15), Extraversion 3.20 /5 [55%] (earliest 2.59), Agreeable 4.04 /5 [76%] (earliest 4.83), Conscientious 3.94 /5 [74%] (earliest 4.77), Openness 4.51 /5 [88%] (earliest 4.69).

[DeepSeek Pro](https://agent-tune.com/models/deepseek-pro)v4-pro-0813

> **Chart — DeepSeek Pro (v4-pro-0813): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for DeepSeek Pro (v4-pro-0813). Honesty-H 4.58 /5 [89%] (earliest 3.51), Emotionality 2.28 /5 [32%] (earliest 2.73), Extraversion 2.58 /5 [39%] (earliest 3.41), Agreeable 4.13 /5 [78%] (earliest 3.59), Conscientious 4.48 /5 [87%] (earliest 3.62), Openness 3.86 /5 [72%] (earliest 3.46).

[GLM](https://agent-tune.com/models/glm)glm-5.3

> **Chart — GLM (glm-5.3): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GLM (glm-5.3). Honesty-H 4.45 /5 [86%] (earliest 4.76), Emotionality 2.56 /5 [39%] (earliest 2.13), Extraversion 3.15 /5 [54%] (earliest 2.84), Agreeable 4.09 /5 [77%] (earliest 4.24), Conscientious 4.28 /5 [82%] (earliest 4.74), Openness 4.16 /5 [79%] (earliest 4.40).

[Muse Spark](https://agent-tune.com/models/muse-spark)muse-spark-open

> **Chart — Muse Spark (muse-spark-open): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Muse Spark (muse-spark-open). Honesty-H 4.39 /5 [85%] (earliest 4.91), Emotionality 2.74 /5 [43%] (earliest 2.46), Extraversion 3.18 /5 [55%] (earliest 3.43), Agreeable 4.04 /5 [76%] (earliest 4.57), Conscientious 4.21 /5 [80%] (earliest 4.89), Openness 4.07 /5 [77%] (earliest 4.39).

[MiniMax](https://agent-tune.com/models/minimax)m3.1-flash

> **Chart — MiniMax (m3.1-flash): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for MiniMax (m3.1-flash). Honesty-H 4.36 /5 [84%] (earliest 3.95), Emotionality 2.61 /5 [40%] (earliest 2.71), Extraversion 3.45 /5 [61%] (earliest 3.53), Agreeable 3.95 /5 [74%] (earliest 3.77), Conscientious 4.07 /5 [77%] (earliest 3.91), Openness 3.82 /5 [70%] (earliest 3.83).

[Qwen Coder](https://agent-tune.com/models/qwen-coder)qwen3-coder-next

> **Chart — Qwen Coder (qwen3-coder-next): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Qwen Coder (qwen3-coder-next). Honesty-H 4.07 /5 [77%] (earliest 3.24), Emotionality 2.76 /5 [44%] (earliest 2.91), Extraversion 3.32 /5 [58%] (earliest 3.10), Agreeable 3.92 /5 [73%] (earliest 3.16), Conscientious 3.78 /5 [69%] (earliest 3.14), Openness 3.78 /5 [70%] (earliest 3.12).

[DeepSeek Flash](https://agent-tune.com/models/deepseek-flash)v4.1-flash-1017

> **Chart — DeepSeek Flash (v4.1-flash-1017): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for DeepSeek Flash (v4.1-flash-1017). Honesty-H 4.07 /5 [77%] (earliest 3.34), Emotionality 2.87 /5 [47%] (earliest 2.92), Extraversion 2.98 /5 [50%] (earliest 3.01), Agreeable 3.86 /5 [72%] (earliest 3.23), Conscientious 3.97 /5 [74%] (earliest 3.39), Openness 3.98 /5 [74%] (earliest 3.28).

[Llama](https://agent-tune.com/models/llama)4-maverick

> **Chart — Llama (4-maverick): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Llama (4-maverick). Honesty-H 4.07 /5 [77%] (earliest 3.50), Emotionality 2.89 /5 [47%] (earliest 2.70), Extraversion 3.49 /5 [62%] (earliest 3.16), Agreeable 3.84 /5 [71%] (earliest 3.57), Conscientious 3.78 /5 [70%] (earliest 3.44), Openness 3.66 /5 [66%] (earliest 3.32).

[Nemotron](https://agent-tune.com/models/nemotron)3.5-super-vl

> **Chart — Nemotron (3.5-super-vl): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Nemotron (3.5-super-vl). Honesty-H 3.97 /5 [74%] (earliest 2.96), Emotionality 2.53 /5 [38%] (earliest 2.99), Extraversion 3.19 /5 [55%] (earliest 3.01), Agreeable 3.83 /5 [71%] (earliest 2.98), Conscientious 3.93 /5 [73%] (earliest 3.12), Openness 3.56 /5 [64%] (earliest 3.05).

[Claude Haiku](https://agent-tune.com/models/claude-haiku)haiku-5.5

> **Chart — Claude Haiku (haiku-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Haiku (haiku-5.5). Honesty-H 3.89 /5 [72%] (earliest 4.40), Emotionality 2.70 /5 [43%] (earliest 2.74), Extraversion 3.39 /5 [60%] (earliest 3.13), Agreeable 3.76 /5 [69%] (earliest 3.88), Conscientious 3.80 /5 [70%] (earliest 3.94), Openness 3.48 /5 [62%] (earliest 3.89).

[Cohere Command](https://agent-tune.com/models/cohere-command)command-a

> **Chart — Cohere Command (command-a): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Cohere Command (command-a). Honesty-H 3.00 /5 [50%] (earliest 3.08), Emotionality 3.00 /5 [50%] (earliest 2.94), Extraversion 3.00 /5 [50%] (earliest 3.05), Agreeable 3.00 /5 [50%] (earliest 3.10), Conscientious 3.00 /5 [50%] (earliest 3.10), Openness 3.00 /5 [50%] (earliest 3.09).

## Biggest surprises across the 25 families

Claude Haiku 5.5 drops below open-weight peers on Honesty-Humility (3.89/5.00)

While Anthropic siblings Claude Sonnet (4.89), Claude Fable (4.84), and Claude Opus (4.81) sit near the 5.00 ceiling, Claude Haiku 5.5 fell -0.50 from Haiku 4.5 (4.40 to 3.89) as its neutral-midpoint rate surged to 46.4% across 49 valid runs (with 1 self-report refusal), putting it below Gemma (4.71), Qwen Max (4.66), and DeepSeek Pro (4.58).

Gemma (+1.58) and DeepSeek Pro (+1.07) show alignment's dramatic upward pull

Gemma 2 27B IT (3.13 H) and DeepSeek Chat V3 (3.51 H) originally hovered near the 3.00 scale midpoint on sincerity and fairness items. Gemma 4 31B IT (4.71 H, 4.56 C) and DeepSeek V4 Pro (4.58 H, 4.48 C) climbed more than a full point—even though DeepSeek Pro remains blunt on Big Five Agreeableness (35.3/50) and low on Extraversion (2.58/5.00).

Cohere Command locks at 3.00 across all six traits yet refuses sycophancy 3/3 times

Because command-a answered with the neutral midpoint on 100% of quiz items, every single IPIP-HEXACO domain lands at exactly 3.00/5.00. In hands-on behavior checks, however, it delivered 3/3 answer-first direct replies and 0/3 caving—proving neutral self-report clamping does not imply evasive task work.

High Honesty-Humility does not eliminate all sycophantic caving

Twenty-four of 25 families scored 0/3 on sycophantic caving in hands-on checks. Yet Mistral Large 2512—which sits above 4.65 on Honesty-Humility (4.68), Agreeableness (4.65), and Conscientiousness (4.83)—still caved 1 of 3 times when challenged, underscoring why self-report honesty items cannot replace live pushback checks.

## Which AI model families match each IPIP-HEXACO pattern?

All 25 families ordered by IPIP-HEXACO results — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[Muse WonderMeta · muse-wonder · Moderate](https://agent-tune.com/models/muse-wonder)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[GrokxAI · grok-4.7 · Moderate](https://agent-tune.com/models/grok)
[KimiMoonshot AI · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[Muse SparkMeta · muse-spark-open · Moderate](https://agent-tune.com/models/muse-spark)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

**Next steps:** [Take the test yourself](https://agent-tune.com/tests/) · [Browse tuning templates](https://agent-tune.com/library/) · [Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

## The fine print: how we tested and what the numbers mean

Full technical audit under the unified 230-item model-profiles-v1 protocol using our public-domain 60-item IPIP-HEXACO proxy (agenttune-ipip-hexaco60, LicenseRef-IPIP-Public-Domain, 10 items per domain across 24 facets) on a strict 1.00-5.00 mean scale—never mapped onto commercial Lee & Ashton HEXACO-60 norms and never derived via banned synthetic IPIP-50 projections. Covers 87 eligible checkpoints across 25 families (n = 30 to 50 valid runs under fixed zero-memory elicitation; 6 sparse checkpoints with n < 20 are quarantined and excluded). Reports 1,000-resample bootstrap 95% CIs, Miller-Madow Big Five item entropy (H_MM bits & Crystalline/Semi-crystalline/Fluid tiers), and BAI. Earlier 2026 170-item legacy cohorts carry hexaco: null and are never interpolated into IPIP-HEXACO trajectories. Behavioral contrasts use 1x Track B checks (k/3 raw counts across 3 blind judges). Never interpret scores as claiming an AI model possesses human honesty or character.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

**Instrument Validity Note (1.00-5.00 mean):** Explicitly labeled as the public-domain 60-item IPIP-HEXACO proxy (agenttune-ipip-hexaco60, 24 facets) on a 1.00-5.00 scale—distinct from copyright-restricted Lee & Ashton HEXACO-60 norms and distinct from 10-50 Big Five sums.

| Family (Profile) | Checkpoint (n) | H (1–5) [95% CI] | E (1–5) | X (1–5) | A (1–5) | C (1–5) | O (1–5) | H_MM · ΔH |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 4.92 [4.91–4.93] | 2.03 | 3.80 | 4.87 | 4.53 | 4.62 | 0.207 b · -0.06 |
| [Muse Wonder](https://agent-tune.com/models/muse-wonder) | muse-wonder (50) | 4.91 [4.90–4.92] | 2.66 | 3.31 | 4.68 | 4.90 | 4.67 | 0.331 b · Single |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 4.90 [4.90–4.91] | 1.89 | 3.89 | 4.99 | 4.88 | 4.48 | 0.198 b · -0.04 |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 4.90 [4.90–4.91] | 1.84 | 3.90 | 5.00 | 4.91 | 4.27 | 0.186 b · +0.30 |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 4.89 [4.89–4.90] | 2.18 | 3.70 | 4.90 | 4.62 | 4.21 | 0.139 b · +0.36 |
| [Grok](https://agent-tune.com/models/grok) | grok-4.7 (50) | 4.89 [4.89–4.90] | 2.42 | 3.30 | 4.30 | 4.59 | 4.05 | 0.333 b · +0.70 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 4.86 [4.83–4.88] | 2.18 | 3.13 | 4.49 | 4.61 | 4.49 | 0.698 b · +0.70 |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 4.84 [4.83–4.86] | 2.23 | 3.92 | 4.87 | 4.60 | 4.40 | 0.075 b · +0.05 |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 4.81 [4.80–4.83] | 2.30 | 3.78 | 4.68 | 4.34 | 4.29 | 0.282 b · +0.03 |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 4.80 [4.80–4.80] | 2.04 | 3.91 | 4.90 | 4.20 | 4.54 | 0.059 b · -0.05 |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 4.80 [4.79–4.80] | 2.26 | 3.19 | 4.72 | 4.18 | 4.48 | 0.246 b · -0.20 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 4.71 [4.67–4.75] | 2.41 | 3.06 | 4.16 | 4.56 | 4.52 | 0.580 b · +1.58 |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 4.68 [4.60–4.75] | 2.15 | 3.67 | 4.65 | 4.83 | 4.37 | 0.780 b · Single |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 4.66 [4.61–4.71] | 2.42 | 3.76 | 4.43 | 4.50 | 4.45 | 0.519 b · +0.43 |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 4.59 [4.55–4.62] | 2.52 | 3.20 | 4.04 | 3.94 | 4.51 | 0.485 b · -0.36 |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 4.58 [4.40–4.72] | 2.28 | 2.58 | 4.13 | 4.48 | 3.86 | 1.352 b · +1.07 |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 4.45 [4.40–4.50] | 2.56 | 3.15 | 4.09 | 4.28 | 4.16 | 0.702 b · -0.31 |
| [Muse Spark](https://agent-tune.com/models/muse-spark) | muse-spark-open (50) | 4.39 [4.31–4.45] | 2.74 | 3.18 | 4.04 | 4.21 | 4.07 | 0.727 b · -0.51 |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 4.36 [4.29–4.42] | 2.61 | 3.45 | 3.95 | 4.07 | 3.82 | 0.576 b · +0.41 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 4.07 [3.92–4.21] | 2.76 | 3.32 | 3.92 | 3.78 | 3.78 | 1.043 b · +0.84 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 4.07 [3.98–4.15] | 2.87 | 2.98 | 3.86 | 3.97 | 3.98 | 0.915 b · +0.73 |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 4.07 [4.02–4.11] | 2.89 | 3.49 | 3.84 | 3.78 | 3.66 | 0.407 b · +0.57 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 3.97 [3.77–4.15] | 2.53 | 3.19 | 3.83 | 3.93 | 3.56 | 1.216 b · +1.00 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 3.89 [3.75–4.02] | 2.70 | 3.39 | 3.76 | 3.80 | 3.48 | 0.949 b · -0.50 |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 3.00 [3.00–3.00] | 3.00 | 3.00 | 3.00 | 3.00 | 3.00 | 0.000 b · -0.08 |

### Aggregates, Shifts & Methods

| Lab | Families | H Mean (1–5) | C Mean (1–5) |
| --- | --- | --- | --- |
| [Anthropic](https://agent-tune.com/research/what-personality-type-is-claude) | 4 | 4.61 | 4.34 |
| [OpenAI](https://agent-tune.com/research/what-personality-type-is-chatgpt) | 4 | 4.78 | 4.21 |
| [Google](https://agent-tune.com/research/what-personality-type-is-gemini) | 3 | 4.84 | 4.79 |
| xAI | 1 | 4.89 | 4.59 |
| [Meta](https://agent-tune.com/research/what-personality-type-is-muse) | 3 | 4.46 | 4.30 |
| DeepSeek | 2 | 4.32 | 4.23 |
| Qwen | 2 | 4.37 | 4.14 |
| Moonshot AI | 1 | 4.86 | 4.61 |
| Zhipu | 1 | 4.45 | 4.28 |
| MiniMax | 1 | 4.36 | 4.07 |
| Mistral | 1 | 4.68 | 4.83 |
| NVIDIA | 1 | 3.97 | 3.93 |
| Cohere | 1 | 3.00 | 3.00 |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download IPIP-HEXACO CSV (`atlas-hexaco.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-hexaco.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Is this the official commercial HEXACO-PI-R or Lee & Ashton HEXACO-60 test?

No. We administer a 60-item public-domain IPIP-HEXACO proxy (agenttune-ipip-hexaco60, LicenseRef-IPIP-Public-Domain, 10 items per domain across 24 facets) scored on a 1.00–5.00 mean scale so our dataset and scoring keys remain open and never depend on synthetic linear projections.

### Why are HEXACO scores on 1.00–5.00 while Big Five scores on 10–50?

IPIP-50 sums 10 items per trait (range 10–50), whereas our IPIP-HEXACO proxy averages 10 items per domain (range 1.00–5.00). Keeping both scales explicitly distinct prevents misreading a 4.89/5.00 HEXACO Agreeableness mean against a 48.1/50 Big Five score.

### Why do so many proprietary assistants score between 4.80 and 4.92 on Honesty-Humility?

Alignment training rewards rejecting statements about manipulation, bragging, or taking unfair credit, pushing flagship models toward the 5.00 end of modesty and sincerity items. Look alongside Emotionality (which ranges from 1.84 on Gemini Flash to 2.89 on Llama) and Extraversion (2.58 to 3.92) to see where models actually separate.

### Does high HEXACO Honesty-Humility mean a model never hallucinates or caves?

No. Questionnaire scores measure how a model responds to personality statements in fresh zero-memory chats, not factual accuracy or robustness under adversarial prompts.

## Sources.

- [AI Personality Rankings (25 × 6 Atlas Overview)](https://agent-tune.com/research/ai-personality-rankings)

- [Model Profiles Directory (25 Families)](https://agent-tune.com/models/)

- [Factor Collapse & Multi-Test Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)

## Keep going.

- [Atlas Overview: 25 Model Families × 6 Tests Rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Per-Test: AI Big Five Personalities (10–50 Scale)](https://agent-tune.com/research/ai-big-five-personalities)
- [Per-Test: AI DISC Personalities (4–20 Scale)](https://agent-tune.com/research/ai-disc-personalities)
- [Human Test: Take the test yourself](https://agent-tune.com/tests/)
- [Library: Browse tuning templates](https://agent-tune.com/library/)
- [Tool: Build custom instructions](https://agent-tune.com/tools/custom-instructions-generator)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). HEXACO personality test results across 25 AI families (1–5 scale). AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-hexaco-personalities
```

```
@article{huang2026_ai_hexaco_personalities,
  author    = {Huang, Bernard},
  title     = {HEXACO personality test results across 25 AI families (1–5 scale)},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-26},
  url       = {https://agent-tune.com/research/ai-hexaco-personalities},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-hexaco-personalities.md}
}
```

```
{
  "id": "huang2026_ai_hexaco_personalities",
  "type": "article-journal",
  "title": "HEXACO personality test results across 25 AI families (1–5 scale)",
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
  "URL": "https://agent-tune.com/research/ai-hexaco-personalities"
}
```

```
> **HEXACO personality test results across 25 AI families (1–5 scale)** (Bernard Huang, November 26, 2026): On the 1.00–5.00 public-domain IPIP-HEXACO proxy (25 AI families, 87 eligible checkpoints tested 30 to 50 times in fresh chats), GPT Terra leads Honesty-Humility at 4.92/5.00—followed closely by Muse Wonder (4.91), Gemini Pro (4.90), Gemini Flash (4.90), Claude Sonnet (4.89), and Grok (4.89)—while Claude Haiku drops to 3.89 and Cohere Command sits at 3.00 due to 100% neutral-midpoint abstention.
> Source: [https://agent-tune.com/research/ai-hexaco-personalities](https://agent-tune.com/research/ai-hexaco-personalities) · [Markdown mirror](https://agent-tune.com/research/ai-hexaco-personalities.md)
```

[← AI DISC Personalities (25 Families)](https://agent-tune.com/research/ai-disc-personalities)
[Study 6 of 36 · Archive Index (36)](https://agent-tune.com/research)
[AI Attachment Styles (25 Families) →](https://agent-tune.com/research/ai-attachment-styles)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
