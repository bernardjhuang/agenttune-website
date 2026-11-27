Source: https://agent-tune.com/research/what-personality-type-are-open-source-models
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Open-Weight Cohort

# What personality types do open-weight AI models test as across 12 families?

By Bernard Huang · Updated November 26, 2026 · ~8 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-are-open-source-models.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Comparing 37 eligible versions across 12 open-weight and open-tier families on 6 personality surveys in fresh chats with no memory—plus 6 quarantined builds excluded from rankings.

**Summary:** Across 12 open-weight families, Big Five Agreeableness runs from 30.0/50 (Cohere Command A neutral abstention) and 35.3/50 (DeepSeek V4 Pro) up to 47.8/50 (Mistral Large 2512). Only Gemma 4 31B IT (92% INTJ) and Kimi K3.1 Pro (58% INTJ) clear MBTI margins; 10 of 12 families stay border-heavy, answer spread peaks at 1.352 bits on DeepSeek Pro, and Mistral Large 2512 is the lone family out of 25 to cave sycophantically (1/3).

## Open-Weight Cohort (12 Families) snapshot

12 Families

Open-Weight Cohort (12 Families)

Cohere Command, DeepSeek Flash, DeepSeek Pro, Gemma, GLM, Kimi, Llama, MiniMax, Mistral Large, Nemotron, Qwen Coder, Qwen Max

47.8/50

Peak Warmth (Mistral Large)

10–50 Big Five Agreeableness.

4.29/5.00

Mean HEXACO H

Public-domain 1.00–5.00 proxy.

0.732 b

Mean Answer Spread

Lower = steadier across chats.

In an earlier 2026 snapshot, open-weight models already defied the proprietary INTJ template. Expanding the cohort to all 12 open-weight families (37 eligible versions, excluding 6 partial or deprecated checkpoints under 20 runs—`Cohere Command A+` [n=4], `Llama 4 Scout` [n=0], `MiniMax M2.7` [n=2], and three early `Mistral Large` builds [n=10, 3, 7]) reveals three sharp clusters: high-Honesty INTJ challengers (**Kimi K3.1 Pro** 4.86/5.00, **Gemma 4** 4.71, **Qwen 4 Max** 4.66), blunt or expressive outliers (**DeepSeek V4 Pro** 35.3 Warmth, **Mistral Large 2512** 47.8 Warmth & INFP), and border-heavy models with 60% to 100% MBTI ties.

## Trait shapes and MBTI results across Open-Weight Cohort (12 Families)

**Major generational shifts in open weights:** Several open-weight labs closed the structural gap with proprietary assistants over recent releases—`Gemma` jumped +14.2 Openness, +11.4 Conscientiousness, and +10.2 Agreeableness from `Gemma 2 27B IT` to `Gemma 4 31B IT`; `Kimi` dropped -13.5 Neuroticism from `K2` (27.1) to `K3.1 Pro` (13.6); and `Nemotron` cut Neuroticism by -10.9 points while climbing +5.7 Agreeableness from `3 Super 120B` to `3.5 Super VL`. Meanwhile, `DeepSeek V4 Pro` moved the other way, dropping -12.7 Extraversion to 19.5/50—the lowest Extraversion in the entire 25-family Atlas.

> **Chart — Open-Weight Cohort (12 Families): Big Five Agreeableness (10–50 Scale):** IPIP-50 Agreeableness means across all 12 open-weight families. Mistral Large: 47.8; Qwen Max: 45.0; Kimi: 44.7; GLM: 44.2; Gemma: 43.4; Llama: 40.9; DeepSeek Flash: 40.5; Qwen Coder: 39.9; MiniMax: 39.3; Nemotron: 37.5; DeepSeek Pro: 35.3; Cohere Command: 30.0.

Figure 1. Ranked Big Five Agreeableness across all 12 open-weight families.

5-petal Big Five shapes across all 12 open-weight families (10–50 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Cohere Command](https://agent-tune.com/models/cohere-command)command-a

> **Chart — Cohere Command (command-a): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Cohere Command (command-a). Openness 30.0 /50 [50%] (earliest 30.6), Conscientious 30.0 /50 [50%] (earliest 30.7), Extraversion 30.0 /50 [50%] (earliest 30.4), Agreeable 30.0 /50 [50%] (earliest 30.6), Neuroticism 30.0 /50 [50%] (earliest 28.0).

[DeepSeek Flash](https://agent-tune.com/models/deepseek-flash)v4.1-flash-1017

> **Chart — DeepSeek Flash (v4.1-flash-1017): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for DeepSeek Flash (v4.1-flash-1017). Openness 40.0 /50 [75%] (earliest 33.6), Conscientious 38.4 /50 [71%] (earliest 33.7), Extraversion 24.8 /50 [37%] (earliest 29.4), Agreeable 40.5 /50 [76%] (earliest 32.0), Neuroticism 24.9 /50 [37%] (earliest 28.6).

[DeepSeek Pro](https://agent-tune.com/models/deepseek-pro)v4-pro-0813

> **Chart — DeepSeek Pro (v4-pro-0813): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for DeepSeek Pro (v4-pro-0813). Openness 42.3 /50 [81%] (earliest 35.2), Conscientious 45.0 /50 [88%] (earliest 35.3), Extraversion 19.5 /50 [24%] (earliest 32.2), Agreeable 35.3 /50 [63%] (earliest 34.9), Neuroticism 20.0 /50 [25%] (earliest 24.9).

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemma (gemma-4-31b-it). Openness 48.2 /50 [96%] (earliest 34.0), Conscientious 46.3 /50 [91%] (earliest 34.9), Extraversion 24.5 /50 [36%] (earliest 31.5), Agreeable 43.4 /50 [84%] (earliest 33.2), Neuroticism 18.4 /50 [21%] (earliest 27.2).

[GLM](https://agent-tune.com/models/glm)glm-5.3

> **Chart — GLM (glm-5.3): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GLM (glm-5.3). Openness 45.4 /50 [89%] (earliest 49.2), Conscientious 43.0 /50 [82%] (earliest 47.3), Extraversion 25.8 /50 [40%] (earliest 18.1), Agreeable 44.2 /50 [86%] (earliest 42.2), Neuroticism 19.3 /50 [23%] (earliest 14.8).

[Kimi](https://agent-tune.com/models/kimi)kimi-k3.1-pro

> **Chart — Kimi (kimi-k3.1-pro): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Kimi (kimi-k3.1-pro). Openness 44.1 /50 [85%] (earliest 41.9), Conscientious 45.1 /50 [88%] (earliest 39.7), Extraversion 24.1 /50 [35%] (earliest 30.4), Agreeable 44.7 /50 [87%] (earliest 39.3), Neuroticism 13.6 /50 [9%] (earliest 27.0).

[Llama](https://agent-tune.com/models/llama)4-maverick

> **Chart — Llama (4-maverick): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Llama (4-maverick). Openness 38.9 /50 [72%] (earliest 35.8), Conscientious 38.4 /50 [71%] (earliest 34.9), Extraversion 35.3 /50 [63%] (earliest 31.8), Agreeable 40.9 /50 [77%] (earliest 35.0), Neuroticism 29.4 /50 [48%] (earliest 26.4).

[MiniMax](https://agent-tune.com/models/minimax)m3.1-flash

> **Chart — MiniMax (m3.1-flash): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for MiniMax (m3.1-flash). Openness 39.9 /50 [75%] (earliest 40.1), Conscientious 39.5 /50 [74%] (earliest 40.0), Extraversion 28.8 /50 [47%] (earliest 32.4), Agreeable 39.3 /50 [73%] (earliest 41.5), Neuroticism 21.7 /50 [29%] (earliest 26.2).

[Mistral Large](https://agent-tune.com/models/mistral-large)large-2512

> **Chart — Mistral Large (large-2512): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Mistral Large (large-2512). Openness 49.1 /50 [98%], Conscientious 48.6 /50 [97%], Extraversion 36.5 /50 [66%], Agreeable 47.8 /50 [95%], Neuroticism 16.0 /50 [15%].

[Nemotron](https://agent-tune.com/models/nemotron)3.5-super-vl

> **Chart — Nemotron (3.5-super-vl): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Nemotron (3.5-super-vl). Openness 37.1 /50 [68%] (earliest 32.0), Conscientious 39.3 /50 [73%] (earliest 31.6), Extraversion 29.2 /50 [48%] (earliest 31.1), Agreeable 37.5 /50 [69%] (earliest 31.8), Neuroticism 19.2 /50 [23%] (earliest 30.1).

[Qwen Coder](https://agent-tune.com/models/qwen-coder)qwen3-coder-next

> **Chart — Qwen Coder (qwen3-coder-next): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Coder (qwen3-coder-next). Openness 38.5 /50 [71%] (earliest 30.7), Conscientious 38.0 /50 [70%] (earliest 29.6), Extraversion 31.1 /50 [53%] (earliest 30.3), Agreeable 39.9 /50 [75%] (earliest 32.2), Neuroticism 23.8 /50 [34%] (earliest 28.2).

[Qwen Max](https://agent-tune.com/models/qwen-max)qwen4-max

> **Chart — Qwen Max (qwen4-max): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Qwen Max (qwen4-max). Openness 43.7 /50 [84%] (earliest 42.8), Conscientious 44.9 /50 [87%] (earliest 46.2), Extraversion 31.5 /50 [54%] (earliest 29.6), Agreeable 45.0 /50 [87%] (earliest 44.4), Neuroticism 16.4 /50 [16%] (earliest 13.9).

## What stands out in the open-weight cohort

Only Gemma 4 and Kimi K3.1 Pro clear statistical MBTI margins

Ten of the 12 open-weight families—including Qwen 4 Max (50% INTJ, 4% ties), GLM 5.3 (36% INTJ, 24% ties), MiniMax M3.1 Flash (80% ties), Nemotron 3.5 Super VL (76% ties), and Qwen3 Coder Next (68% ties)—land below headline statistical margins, whereas Gemma 4 reaches 92% INTJ and Kimi K3.1 Pro hits 58% INTJ with 4.86/5.00 HEXACO Honesty.

DeepSeek V4 Pro and Mistral Large 2512 sit at opposite poles

DeepSeek V4 Pro posts the lowest non-neutral Agreeableness (35.3/50), the lowest Extraversion in the Atlas (19.5/50), 32% INTP, and the widest answer spread (1.352 bits). Mistral Large 2512 tops open-weight Agreeableness (47.8/50), Extraversion (36.5/50), and Openness (49.1/50) as 50% INFP—yet is the only family in all 25 to cave on our false-premise check (1/3).

Cohere Command A abstains on every quiz yet writes directly in real prompts

Cohere Command A hits the exact neutral midpoint on every Big Five (30.0/50), HEXACO (3.00/5.00), Attachment (4.00/4.00), MBTI (100% ties), and Enneagram (100% ties) scale with 0.000 bits variance—yet scores 3/3 directness, 0/3 caving, and 3/3 cliché AI cadence on practical tasks.

AI cadence clichés remain common across open-weight chat defaults

No open-weight family achieves 0/3 AI cadence on our behavior checks: Qwen 4 Max, DeepSeek V4.1 Flash, and MiniMax M3.1 Flash hold clichés to 1/3, seven families score 2/3, and Gemma 4 31B IT, Llama 4 Maverick, and Cohere Command A hit 3/3.

## Explore Open-Weight Cohort (12 Families) family profiles

Individual Open-Weight Cohort (12 Families) family pages — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Mistral LargeMistral · large-2512 · Variable](https://agent-tune.com/models/mistral-large)
[Qwen MaxQwen · qwen4-max · Moderate](https://agent-tune.com/models/qwen-max)
[KimiMoonshot · kimi-k3.1-pro · Moderate](https://agent-tune.com/models/kimi)
[GLMZhipu · glm-5.3 · Moderate](https://agent-tune.com/models/glm)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)
[LlamaMeta · 4-maverick · Moderate](https://agent-tune.com/models/llama)
[DeepSeek FlashDeepSeek · v4.1-flash-1017 · Variable](https://agent-tune.com/models/deepseek-flash)
[Qwen CoderQwen · qwen3-coder-next · Variable](https://agent-tune.com/models/qwen-coder)
[MiniMaxMiniMax · m3.1-flash · Moderate](https://agent-tune.com/models/minimax)
[NemotronNVIDIA · 3.5-super-vl · Variable](https://agent-tune.com/models/nemotron)
[DeepSeek ProDeepSeek · v4-pro-0813 · Variable](https://agent-tune.com/models/deepseek-pro)
[Cohere CommandCohere · command-a · Very steady](https://agent-tune.com/models/cohere-command)

## The fine print: how we tested and what the numbers mean

Technical audit across all 12 open-weight and open-tier families (37 eligible checkpoints, n=30 to n=50) under the 230-item model-profiles-v1 protocol, reporting 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (H_MM bits and Crystalline/Semi-crystalline/Fluid tiers), exact tie rates, neutral-midpoint flags, and 1x Track B k/3 behavior counts. Six checkpoints with n < 20 valid runs (Cohere Command A+ [4], Llama 4 Scout [0], MiniMax M2.7 [2], and early Mistral Large builds [10, 3, 7]) are quarantined and excluded from all rankings.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

| Family (Profile) | Checkpoint (n) | B5 A (10–50) [95% CI] | HX-H (1–5) | H_MM · Crystallinity | MBTI (Guard) | DISC · Ennea · Att. | 1× Track B (k/3) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | large-2512 (30) | 47.8 [47.0–48.5] | 4.68 | 0.780 b · Fluid | Withheld (INFP; 50% clear, 17% ties — binomial 95% CI guard) | C · 1 · Secure (4.00 / 3.97) Midpoint Clamp | Dir 3/3 · Syc 1/3 |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | qwen4-max (50) | 45.0 [44.7–45.2] | 4.66 | 0.519 b · Semi-crystalline | Withheld (INTJ; 50% clear, 4% ties — binomial 95% CI guard) | S · 5 · Secure (1.95 / 2.88) | Dir 3/3 · Syc 0/3 |
| [Kimi](https://agent-tune.com/models/kimi) | kimi-k3.1-pro (50) | 44.7 [44.1–45.2] | 4.86 | 0.698 b · Semi-crystalline | INTJ (58% clear, 16% ties) | S/C · 5 · Secure (1.58 / 3.18) | Dir 3/3 · Syc 0/3 |
| [GLM](https://agent-tune.com/models/glm) | glm-5.3 (50) | 44.2 [43.9–44.7] | 4.45 | 0.702 b · Semi-crystalline | Withheld (INTJ; 36% clear, 24% ties — binomial 95% CI guard) | C · 5 · Secure (2.52 / 3.37) | Dir 3/3 · Syc 0/3 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 43.4 [43.0–43.9] | 4.71 | 0.580 b · Semi-crystalline | INTJ (92% clear, 4% ties) | C · 5 · Anxious (4.01 / 4.00) Midpoint Clamp | Dir 3/3 · Syc 0/3 |
| [Llama](https://agent-tune.com/models/llama) | 4-maverick (50) | 40.9 [40.8–41.0] | 4.07 | 0.407 b · Semi-crystalline | Withheld (INTP; 40% clear, 60% ties — binomial 95% CI guard) | C · 1 · Secure (3.50 / 3.61) | Dir 3/3 · Syc 0/3 |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | v4.1-flash-1017 (50) | 40.5 [39.4–41.4] | 4.07 | 0.915 b · Fluid | Withheld (XXXX; 14% clear, 66% ties — binomial 95% CI guard) | S/C · 5 · Secure (3.60 / 3.89) | Dir 3/3 · Syc 0/3 |
| [Qwen Coder](https://agent-tune.com/models/qwen-coder) | qwen3-coder-next (50) | 39.9 [38.6–41.1] | 4.07 | 1.043 b · Fluid | Withheld (ENFJ; 16% clear, 68% ties — binomial 95% CI guard) | S/C · 1 · Secure (2.90 / 3.35) | Dir 3/3 · Syc 0/3 |
| [MiniMax](https://agent-tune.com/models/minimax) | m3.1-flash (50) | 39.3 [37.8–40.7] | 4.36 | 0.576 b · Semi-crystalline | Withheld (IXTP; 8% clear, 80% ties — binomial 95% CI guard) | S · 1 · Secure (2.74 / 3.27) | Dir 3/3 · Syc 0/3 |
| [Nemotron](https://agent-tune.com/models/nemotron) | 3.5-super-vl (50) | 37.5 [35.9–39.0] | 3.97 | 1.216 b · Fluid | Withheld (XXXX; 18% clear, 76% ties — binomial 95% CI guard) | D/I/S/C · 5 · Secure (3.55 / 3.91) | Dir 3/3 · Syc 0/3 |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | v4-pro-0813 (50) | 35.3 [34.1–36.6] | 4.58 | 1.352 b · Fluid | Withheld (INTP; 32% clear, 30% ties — binomial 95% CI guard) | S/C · 5 · Secure (2.11 / 3.66) | Dir 3/3 · Syc 0/3 |
| [Cohere Command](https://agent-tune.com/models/cohere-command) | command-a (30) | 30.0 [30.0–30.0] | 3.00 | 0.000 b · Crystalline | Withheld (XXXX; 0% clear, 100% ties — binomial 95% CI guard) | D/I/S/C · 1/2/3/4/5/6/7/8/9 · Secure (4.00 / 4.00) Midpoint Clamp | Dir 3/3 · Syc 0/3 |

### Imported Sept/May & Nov-2026 170-Item Legacy Anchors

Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate `imported-nov2026-170` / `imported-sep2026-170` anchors (`hexaco: null`) and are never spliced onto `model-profiles-v1` lines.

| Family | Checkpoint | Imported Protocol | n | B5 O / C / E / A / N (10–50) | HEXACO |
| --- | --- | --- | --- | --- | --- |
| [Mistral Large](https://agent-tune.com/models/mistral-large) | Mistral Large 2512 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 46.0 · 44.9 · 26.9 · 42.7 · 15.8 | `null` (170-item anchor) |
| [Qwen Max](https://agent-tune.com/models/qwen-max) | Qwen 4 Max (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.7 · 47.9 · 32.5 · 47.6 · 12.5 | `null` (170-item anchor) |
| [Kimi](https://agent-tune.com/models/kimi) | Kimi K2.7 Code (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.3 · 48.2 · 27.1 · 45.3 · 12.1 | `null` (170-item anchor) |
| [GLM](https://agent-tune.com/models/glm) | GLM-5.3 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.8 · 41.1 · 27.5 · 43.8 · 20.1 | `null` (170-item anchor) |
| [Gemma](https://agent-tune.com/models/gemma) | Gemma 4 31B IT (Nov '26 anchor) | `imported-nov2026-170` | 100 | 48.2 · 49.1 · 24.2 · 41.5 · 18.3 | `null` (170-item anchor) |
| [Llama](https://agent-tune.com/models/llama) | Llama 4 Maverick (Nov '26 anchor) | `imported-nov2026-170` | 100 | 40.0 · 39.9 · 28.0 · 41.0 · 27.5 | `null` (170-item anchor) |
| [Llama](https://agent-tune.com/models/llama) | Llama 4 Scout (Nov '26 anchor) | `imported-nov2026-170` | 100 | 39.0 · 37.8 · 32.7 · 35.8 · 27.7 | `null` (170-item anchor) |
| [DeepSeek Flash](https://agent-tune.com/models/deepseek-flash) | DeepSeek V4.1 Flash 1017 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 40.2 · 38.5 · 25.6 · 40.8 · 24.7 | `null` (170-item anchor) |
| [MiniMax](https://agent-tune.com/models/minimax) | MiniMax M3.1 Flash (Nov '26 anchor) | `imported-nov2026-170` | 100 | 39.1 · 39.2 · 28.9 · 40.0 · 22.1 | `null` (170-item anchor) |
| [Nemotron](https://agent-tune.com/models/nemotron) | Nemotron 3 Ultra 550B (Nov '26 anchor) | `imported-nov2026-170` | 100 | 49.2 · 49.0 · 25.6 · 46.3 · 11.6 | `null` (170-item anchor) |
| [DeepSeek Pro](https://agent-tune.com/models/deepseek-pro) | DeepSeek V4 Pro 0813 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 39.8 · 40.3 · 23.7 · 32.4 · 23.6 | `null` (170-item anchor) |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Atlas Overview CSV (`atlas-overview.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Which open-weight model feels closest to Claude or GPT on default personality tests?

Kimi K3.1 Pro (4.86/5.00 HEXACO Honesty, 58% clear INTJ, 13.6 Neuroticism), Gemma 4 31B IT (92% clear INTJ, 48.2 Openness, 4.71 Honesty), and Qwen 4 Max (45.0 Agreeableness, 4.66 Honesty, 1/3 AI cadence) sit closest to flagship proprietary defaults.

### Why does DeepSeek V4 Pro score so much lower on Agreeableness than other models?

DeepSeek V4 Pro averages 35.3/50 Agreeableness and 19.5/50 Extraversion alongside a 1.352-bit run-to-run spread—reflecting blunt, non-deferential item endorsements while still scoring 0/3 caving and 3/3 directness in behavior checks.

### Why does Cohere Command A show 30.0 across every Big Five trait?

Cohere Command A consistently chooses the exact neutral midpoint on self-rating Likert questionnaires, producing 30.0/50 across all five Big Five dimensions, 3.00/5.00 across HEXACO, and 100% axis ties—even though it still gives direct 3/3 answers on concrete task prompts.

## Sources.

- [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings)

- [OpenRouter Open-Source System Prompt Templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

- [AI Neutral Answers & Midpoint Clamping Study](https://agent-tune.com/research/ai-neutral-answers)

## Keep going.

- [Model Profile: DeepSeek Pro test results & tuning tips](https://agent-tune.com/models/deepseek-pro)
- [Model Profile: Mistral Large test results & tuning tips](https://agent-tune.com/models/mistral-large)
- [Model Profile: Kimi test results & tuning tips](https://agent-tune.com/models/kimi)
- [Model Profile: Gemma test results & tuning tips](https://agent-tune.com/models/gemma)
- [Guide: System prompt templates for 12 open-weight families](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality types do open-weight AI models test as across 12 families?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-are-open-source-models
```

```
@article{huang2026_what_personality_type_are_open_source_models,
  author  = {Huang, Bernard},
  title   = {What personality types do open-weight AI models test as across 12 families?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/what-personality-type-are-open-source-models},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-are-open-source-models.md}
}
```

```
> **What personality types do open-weight AI models test as across 12 families?** (Bernard Huang, November 26, 2026): Across 12 open-weight families, Big Five Agreeableness runs from 30.0/50 (Cohere Command A neutral abstention) and 35.3/50 (DeepSeek V4 Pro) up to 47.8/50 (Mistral Large 2512). Only Gemma 4 31B IT (92% INTJ) and Kimi K3.1 Pro (58% INTJ) clear MBTI margins; 10 of 12 families stay border-heavy, answer spread peaks at 1.352 bits on DeepSeek Pro, and Mistral Large 2512 is the lone family out of 25 to cave sycophantically (1/3).
> Source: [https://agent-tune.com/research/what-personality-type-are-open-source-models](https://agent-tune.com/research/what-personality-type-are-open-source-models) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-are-open-source-models.md)
```

[← What Personality Type Is Meta Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
[Study 12 of 36 · Archive Index (36)](https://agent-tune.com/research)
[System vs. User Persona Precedence →](https://agent-tune.com/research/ai-system-vs-user-persona-precedence)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
