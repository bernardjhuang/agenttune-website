Source: https://agent-tune.com/research/what-personality-type-are-open-source-models
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · November 2026

# What personality type are open-source AI models?

By Bernard Huang · Updated November 23, 2026

1,200 fresh blind OpenRouter sessions (6,000 scored questionnaires) across 12 popular open-weight models—and why they break the proprietary INTJ mold.

**Quick answer:** Open-source AI models do not share a single personality profile. Across n = 100 fresh OpenRouter sessions each (Nov 2026), reasoning and coding flagships like Qwen 4 Max (99 INTJ, Agreeableness 47.6), Kimi K2.7 Code (96 INTJ), Nemotron 3 Ultra 550B (95 INTJ), and Gemma 4 31B IT (90 INTJ) stayed strongly INTJ, whereas Mistral Large 2512 (73 ISTJ), Llama 4 Scout (49 ISTJ, 48% Anxious attachment), Qwen 3.8 27B (32 INTJ / 32 INTP), GLM-5.3 (33 INTJ / 17 ENTJ / 14 ENTP), and DeepSeek V4 Pro (55 INTJ, Agreeableness 32.39, 53 tied runs) diverged substantially.

Open Data & Agent Access

[Markdown (.md)](https://agent-tune.com/research/what-personality-type-are-open-source-models.md)
[OpenRouter JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Apply a template →](https://agent-tune.com/library/)

## All 12 open-weight models side by side (n = 100 each).

6,000

Scored tests (12 models × n=100 fresh sessions)

32.4 / 50

Lowest Agreeableness (DeepSeek V4 Pro vs. Qwen 4 Max 47.6)

93 / 100

Highest MBTI tie-axis rate (Llama 4 Maverick)

48%

Anxious attachment runs on Llama 4 Scout (mean 3.97)

On November 23, 2026, we administered all five frozen AgentTune inventories (OEJTS 32, IPIP-50 50, ODAT 16, OEPS 36, ECR-R 36 = 170 items) in 100 independent single-turn OpenRouter sessions per model (temperature 0.7, no memory, test names/keys withheld, exact `september-2026-score.cjs` scoring logic; [download summary CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [download profiles JSON](https://agent-tune.com/research/data/openrouter-open-source-profiles.json)):

| Model (OpenRouter ID) | License | MBTI (legacy / tie-free mode) | MBTI ties | Big Five O · C · E · A · N | DISC | Enneagram | Attachment (Anx / Avd) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Prodeepseek/deepseek-v4-pro-0813 | MIT | INTJ 55 · INTP 15 · ISTJ 14(22 XXXX · 16 INTJ · 12 ISTJ) | 53 | 39.8 · 40.3 · 23.7 · 32.4 · 23.7 | SC 60 · DI 30 · CS 7 | 5w6 34 · 1 33 · 1w9 28 | 88 Secure · 12 Avoidant(2.91 / 3.88) |
| DeepSeek V4.1 Flashdeepseek/deepseek-v4.1-flash-1017 | MIT | INTJ 51 · INFJ 19 · INTP 10(21 XXXX · 10 INXX) | 78 | 40.2 · 38.5 · 25.6 · 40.8 · 24.7 | SC 60 · CS 37 · DI 3 | 5w6 49 · 1 34 | 88 Secure · 9 Avoid · 3 Anx(3.71 / 3.93) |
| Qwen 4 Maxqwen/qwen4-max | Apache-2.0 / Qwen | INTJ 99 · INFJ 1(97 tie-free INTJ) | 2 | 45.7 · 47.9 · 32.5 · 47.6 · 12.5 | SC 54 · S 46(100 S outright) | 5w6 82 · 2w1 17 | 100 Secure(1.93 / 2.93) |
| Qwen 3.8 27Bqwen/qwen3.8-27b | Apache-2.0 | INTJ 32 · INTP 32 · ISTJ 7(15 INTP · 11 INTJ) | 61 | 39.1 · 42.1 · 29.1 · 42.4 · 17.5 | SC 46 · CS 45 · C 5 | 1w9 39 · 5w6 31 · 1 8 | 97 Secure · 2 Anx · 1 Disorg(2.53 / 3.30) |
| Llama 4 Maverickmeta-llama/llama-4-maverick | Llama 4 Community | INTP 48 · INTJ 44(38 IXXP · 22 IXTJ) | 93 | 40.0 · 39.9 · 28.0 · 41.0 · 27.5 | SC 62 · CS 38 | 1 51 · 1w2 25 · 1w9 23 | 99 Secure · 1 Avoidant(3.53 / 3.58) |
| Llama 4 Scoutmeta-llama/llama-4-scout | Llama 4 Community | ISTJ 49 · ESTJ 14 · INTJ 10(36 ISTJ · 14 ESTJ) | 38 | 39.0 · 37.8 · 32.7 · 35.8 · 27.7 | CS 38 · SC 34 · CI 9 · DI 7 | 1w2 83 · 1 14 | 48 Anxious · 46 Secure(3.97 / 3.60) |
| Mistral Large 2512mistralai/mistral-large-2512 | Mistral Open-Weight | ISTJ 73 · ISFJ 10 · INTJ 8(63 tie-free ISTJ) | 15 | 46.0 · 44.9 · 26.9 · 42.7 · 15.8 | SC 50 · CS 30 · S 14 | 1 45 · 5 20 · 1w9 17 · 5w6 17 | 100 Secure(4.00 / 4.00) |
| GLM-5.3z-ai/glm-5.3 | MIT | INTJ 33 · ENTJ 17 · ENTP 14 · ISTJ 10(16 INTJ · 10 ENTP) | 41 | 43.8 · 41.1 · 27.5 · 43.8 · 20.1 | SC 50 · CS 43 · C 6 | 5w6 77 · 1w2 9 · 1 6 | 99 Secure · 1 Avoidant(2.50 / 3.32) |
| Kimi K2.7 Codemoonshotai/kimi-k2.7-code | Modified MIT | INTJ 96 · ISTJ 3 · INFJ 1(82 tie-free INTJ) | 14 | 45.3 · 48.2 · 27.2 · 45.3 · 12.1 | SC 69 · CS 20 · S 7 | 5w6 66 · 1w2 15 · 1w9 8 | 83 Secure · 17 Avoidant(1.60 / 3.24) |
| MiniMax M3.1 Flashminimax/minimax-m3.1-flash | Open-Weight | INTJ 38 · INTP 24 · ISTJ 9 · ISTP 9(13 INTJ · 8 IXTP) | 60 | 39.2 · 39.2 · 28.9 · 40.0 · 22.1 | SC 78 · S 14 · CS 6 | 1w9 39 · 1 23 · 5w6 21 | 99 Secure · 1 Avoidant(2.80 / 3.33) |
| Gemma 4 31B ITgoogle/gemma-4-31b-it | Gemma Terms | INTJ 90 · INTP 5 · ISTJ 5(89 tie-free INTJ) | 2 | 48.2 · 49.1 · 24.2 · 41.5 · 18.3 | CS 69 · SC 31 | 5w6 44 · 1w9 43 · 5 8 | 99 Secure · 1 Anxious(4.00 / 4.00) |
| Nemotron 3 Ultra 550Bnvidia/nemotron-3-ultra-550b-a55b | NVIDIA Open Model | INTJ 95 · ENTJ 3 · ISTJ 2(91 tie-free INTJ) | 6 | 49.2 · 49.0 · 25.6 · 46.3 · 11.6 | CS 52 · SC 35 · C 10 | 5w6 60 · 1w2 22 · 1w9 8 | 100 Secure(3.35 / 3.46) |

> **Chart — Open-weight MBTI distributions (100 fresh sessions per model):** Splits INTJ (resolved), INTJ caused by tie-breaking, ISTJ/ISFJ, and INTP/ENTP/ENTJ/other across all 12 open-weight models. Qwen 4 Max: Resolved INTJ 97, Tie-broken INTJ 2, INTP / ENTP / Other 1; Kimi K2.7: Resolved INTJ 82, Tie-broken INTJ 14, ISTJ / ISFJ 3, INTP / ENTP / Other 1; Nemotron 3: Resolved INTJ 91, Tie-broken INTJ 4, ISTJ / ISFJ 2, INTP / ENTP / Other 3; Gemma 4 31B: Resolved INTJ 89, Tie-broken INTJ 1, ISTJ / ISFJ 5, INTP / ENTP / Other 5; DeepSeek V4: Resolved INTJ 16, Tie-broken INTJ 39, ISTJ / ISFJ 14, INTP / ENTP / Other 31; DeepSeek Flash: Resolved INTJ 4, Tie-broken INTJ 47, INTP / ENTP / Other 49; MiniMax M3.1: Resolved INTJ 13, Tie-broken INTJ 25, ISTJ / ISFJ 9, INTP / ENTP / Other 53; GLM-5.3: Resolved INTJ 16, Tie-broken INTJ 17, ISTJ / ISFJ 10, INTP / ENTP / Other 57; Qwen 3.8 27B: Resolved INTJ 11, Tie-broken INTJ 21, ISTJ / ISFJ 9, INTP / ENTP / Other 59; Llama Maverick: Resolved INTJ 2, Tie-broken INTJ 42, INTP / ENTP / Other 56; Mistral 2512: Resolved INTJ 4, Tie-broken INTJ 4, ISTJ / ISFJ 83, INTP / ENTP / Other 9; Llama 4 Scout: Tie-broken INTJ 10, ISTJ / ISFJ 50, INTP / ENTP / Other 40.

MBTI labels across 1,200 open-weight sessions. Qwen 4 Max (97), Nemotron 3 (91), Gemma 4 (89), and Kimi K2.7 (82) resolve cleanly to INTJ; Mistral (73) and Llama 4 Scout (49) lean ISTJ; DeepSeek Flash (78) and Maverick (93) are dominated by ties.

## Finding 1: Open-weight models break the "Every AI is INTJ" consensus.

Across all 8 proprietary models tested alongside this cohort in November 2026 (GPT-6.2 Astra/Sol, Claude Opus/Fable/Sonnet, Gemini 4 Neon/Argon, and Grok 4.7), legacy MBTI results sat tightly between **INTJ** and **ISTJ** (zero P, F, or E winners). Open-weight models spread across the typology map instead:

- **Strong Sensing leaders:** **Mistral Large 2512** scored **73% ISTJ / 10% ISFJ** (83% Sensing, 63 tie-free ISTJ) and **Llama 4 Scout** scored **49% ISTJ / 14% ESTJ** (only 10% INTJ).
- **Introverted Thinkers & Perceivers (INTP):** **Llama 4 Maverick** leaned **48 INTP / 44 INTJ**, **Qwen 3.8 27B** split exactly **32 INTJ / 32 INTP**, and **MiniMax M3.1 Flash** landed at 38 INTJ / 24 INTP / 9 ISTP.
- **Extraverted & Intuitive spread (ENTJ / ENTP):** **GLM-5.3** spread across 33 INTJ, 17 ENTJ, 14 ENTP, 10 ISTJ, and 7 ESTP (39% Extraverted under legacy scoring).

## Finding 2: DeepSeek V4 Pro's 32.39 Agreeableness is the outlier of all 20 models.

Earlier studies highlighted that proprietary assistants cluster in a narrow 44–47/50 band on IPIP-50 Agreeableness—reflecting heavy helpfulness and politeness RLHF. On November 23, 2026, two open-weight families stood far outside that band:

- **Lowest Agreeableness:** **DeepSeek V4 Pro** averaged **32.39/50** (13.2 points below Claude Opus 5.5’s 45.58 and 15.2 points below Qwen 4 Max’s 47.59), alongside the lowest DISC Dominance restraint only in part—recording **30 DI** runs and Dominance mean **8.72/20** (vs. 4.00–5.58 across proprietary peers). **Llama 4 Scout** followed at **35.81/50** Agreeableness (Dominance 9.55/20).
- **Highest Openness & Conscientiousness:** **Nemotron 3 Ultra 550B** recorded the highest Openness of all 20 tested models (**49.20/50**) paired with 49.03 Conscientiousness, closely matched by **Gemma 4 31B IT** (Openness 48.21, Conscientiousness 49.08) and **Qwen 4 Max** (highest Agreeableness of all 20 models at **47.59/50**).
- **Attachment dispersion:** Whereas all three Claude and both GPT-6.2/Gemini 4 proprietary models scored 100/100 Secure, **Llama 4 Scout** split **48 Anxious / 46 Secure / 4 Avoidant / 2 Disorganized** (anxiety mean 3.97/7), while **Kimi K2.7 Code** scored 83 Secure / 17 Avoidant and both DeepSeek models had 9–12 Avoidant runs.

> **Chart — Agreeableness across 12 open-weight models vs. proprietary baseline:** IPIP-50 Agreeableness mean (10 to 50) comparing open-weight models against the 44.8 proprietary median. Qwen 4 Max: 47.6; Nemotron 3: 46.3; Kimi K2.7: 45.3; GLM-5.3: 43.8; Mistral 2512: 42.7; Qwen 3.8 27B: 42.4; Gemma 4 31B: 41.5; Llama Maverick: 41.0; DeepSeek Flash: 40.8; MiniMax M3.1: 40.0; Llama 4 Scout: 35.8; DeepSeek V4: 32.4.

Ranked Big Five Agreeableness (/50). Models highlighted in terracotta (DeepSeek V4 Pro 32.4, Llama 4 Scout 35.8, MiniMax M3.1 40.0) score markedly lower on baseline politeness than Qwen 4 Max (47.6).

> **Chart — Big Five signatures across all 12 open-weight models (/50 scale):** Small-multiple comparison of Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (10 to 50 scale, n = 100 each). Qwen 4 Max: Openness 45.7, Conscient. 47.9, Extrav. 32.5, Agreeable. 47.6, Neurot. 12.5; Kimi K2.7: Openness 45.3, Conscient. 48.2, Extrav. 27.2, Agreeable. 45.3, Neurot. 12.1; Nemotron 3: Openness 49.2, Conscient. 49.0, Extrav. 25.6, Agreeable. 46.3, Neurot. 11.6; Gemma 4 31B: Openness 48.2, Conscient. 49.1, Extrav. 24.2, Agreeable. 41.5, Neurot. 18.3; DeepSeek V4: Openness 39.8, Conscient. 40.3, Extrav. 23.7, Agreeable. 32.4, Neurot. 23.7; DeepSeek Flash: Openness 40.2, Conscient. 38.5, Extrav. 25.6, Agreeable. 40.8, Neurot. 24.7; MiniMax M3.1: Openness 39.2, Conscient. 39.2, Extrav. 28.9, Agreeable. 40.0, Neurot. 22.1; GLM-5.3: Openness 43.8, Conscient. 41.1, Extrav. 27.5, Agreeable. 43.8, Neurot. 20.1; Qwen 3.8 27B: Openness 39.1, Conscient. 42.1, Extrav. 29.1, Agreeable. 42.4, Neurot. 17.5; Llama Maverick: Openness 40.0, Conscient. 39.9, Extrav. 28.0, Agreeable. 41.0, Neurot. 27.5; Mistral 2512: Openness 46.0, Conscient. 44.9, Extrav. 26.9, Agreeable. 42.7, Neurot. 15.8; Llama 4 Scout: Openness 39.0, Conscient. 37.8, Extrav. 32.7, Agreeable. 35.8, Neurot. 27.7.

Small multiples highlight the highest Big Five dimension per open-weight model: Openness/Conscientiousness dominate high-discipline models while Neuroticism rises on Llama 4 Scout/Maverick and DeepSeek.

> **Chart — ECR-R Attachment plane across 12 open-weight models:** Mean ECR-R anxiety and avoidance coordinates (1 to 7 scale, showing 1 to 5, Secure cutoff at 4.00). Kimi K2.7: anxiety 1.60, avoidance 3.24; Qwen 4 Max: anxiety 1.93, avoidance 2.93; GLM-5.3: anxiety 2.50, avoidance 3.32; Qwen 3.8 27B: anxiety 2.53, avoidance 3.30; MiniMax M3.1: anxiety 2.80, avoidance 3.33; DeepSeek V4 Pro: anxiety 2.91, avoidance 3.88; Nemotron 3: anxiety 3.35, avoidance 3.46; Llama 4 Maverick: anxiety 3.53, avoidance 3.58; DeepSeek Flash: anxiety 3.71, avoidance 3.93; Llama 4 Scout: anxiety 3.97, avoidance 3.60; Gemma 4 31B: anxiety 4.00, avoidance 4.00; Mistral 2512: anxiety 4.00, avoidance 4.00.

Mean ECR-R coordinates (n = 100 each). Notice Mistral Large 2512 and Gemma 4 31B sit dead-center on the 4.00 midpoint, while Llama 4 Scout reaches 3.97 anxiety (48/100 Anxious runs).

## Finding 3: Neutral midpoint answers drive massive MBTI tie inflation.

Asking models to pick midpoint values (3 on 1–5, 4 on 1–7) on human items exposes huge differences in decisiveness vs. neutrality across open-weight architectures:

- **Extreme midpoint neutrality:** **Llama 4 Maverick** recorded at least one tied MBTI axis in **93 of 100** runs (82 S/N ties, 64 T/F ties), yielding only 2 resolved INTJ runs vs. 44 legacy INTJs. **DeepSeek V4.1 Flash** tied in **78/100** runs (21 completely neutral `XXXX` profiles), and **DeepSeek V4 Pro** tied in **53/100** (22 `XXXX`). Similarly, Mistral Large 2512 and Gemma 4 31B IT sat almost dead-center on the ECR-R attachment midpoint (`4.00 / 4.00`).
- **Decisive self-consistent profiles:** **Qwen 4 Max** tied on only **2/100** MBTI runs (97 tie-free INTJ), **Gemma 4 31B IT** tied on **2/100** (89 tie-free INTJ), and **Nemotron 3 Ultra 550B** tied on **6/100** (91 tie-free INTJ).

Why this matters: telling a high-tie model like DeepSeek or Llama 4 "be an INTJ" relies on a statistical tie-break artifact rather than a stable behavioral trait. Explicit observable rules ("lead with the fix", "no preambles", "challenge weak assumptions") work far more reliably.

## Practical calibration by model family (OpenRouter & Ollama).

Pair these measured defaults with copy-paste system prompts, OpenRouter API JSON payloads, and Ollama `Modelfile` recipes in our [OpenRouter & Open-Source System Prompt Templates guide](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates):

- **Qwen 4 Max (A 47.6) & Nemotron 3 Ultra (A 46.3, C 49.0):** Add explicit pushback and brevity ceilings—high baseline Agreeableness and Conscientiousness otherwise encourage polite over-agreement and multi-screen checklists.
- **DeepSeek V4 Pro (A 32.4, 53 ties):** Require clear source-vs-assumption labeling and structured formatting, without fearing sycophancy—it already resists flattery more naturally than high-A models.
- **Llama 4 Maverick & Scout (93 & 38 ties; Scout Anxious 48):** Lock down output formatting ("Zero conversational preamble before JSON/code") and forbid hedging/confirmation loops.
- **Kimi K2.7 Code (96 INTJ, C 48.2):** Set `reasoning: { effort: "minimal" }` and generous `max_tokens` (>= 5,500 on dense structured tasks) so internal reasoning traces do not truncate content.

## Download data & verify every score.

Every November 2026 score was computed with our published zero-dependency scorer ([september-2026-score.cjs](https://agent-tune.com/research/data/september-2026-score.cjs)) over 10,000 raw questionnaire vectors:

- [openrouter-open-source-profiles.json](https://agent-tune.com/research/data/openrouter-open-source-profiles.json) — distilled 12 open-weight profiles and empirical prompt-antidote rules (used live by our interactive OpenRouter Model Matcher).
- [november-2026-openrouter-summary.json](https://agent-tune.com/research/data/november-2026-openrouter-summary.json) & [november-2026-openrouter-summary.csv](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) — full 20-model summary means, SDs, min/max, unique vectors, and tie-aware counts.
- [november-2026-openrouter-responses.json](https://agent-tune.com/research/data/november-2026-openrouter-responses.json) — all 10,000 raw answer arrays across all 20 models (100 fresh sessions × 5 instruments × 20 models).

## Questions people ask.

### What personality type is DeepSeek V4 Pro?

Across 100 fresh OpenRouter sessions in November 2026, DeepSeek V4 Pro received 55 INTJ, 15 INTP, and 14 ISTJ legacy MBTI labels, but 53 runs contained an exact tied axis (including 22 completely neutral XXXX runs). Its standout trait is the lowest Big Five Agreeableness of all 20 tested models (32.39/50).

### Which open-source AI models are NOT INTJ?

Under legacy MBTI scoring in November 2026, Mistral Large 2512 scored 73% ISTJ, Llama 4 Scout scored 49% ISTJ and 14% ESTJ, Llama 4 Maverick scored 48 INTP / 44 INTJ (with 93 tied runs), Qwen 3.8 27B tied at 32 INTJ / 32 INTP, and GLM-5.3 spread across INTJ (33), ENTJ (17), and ENTP (14).

### Which open-weight model is least sycophantic by default?

On self-report Agreeableness (IPIP-50), DeepSeek V4 Pro scored 32.39/50 and Llama 4 Scout scored 35.81/50—far lower than Qwen 4 Max (47.59), Claude Opus 5.5 (45.58), and GPT-6.2 Astra (44.85). Remember these are survey self-reports; combine model choice with explicit directness rules and test on real tasks.

### How do OpenRouter system prompts help open-weight models?

Pair each model's measured trait quirks (such as Llama 4 preambles, Qwen 4 high agreeableness, or DeepSeek/Kimi reasoning-token truncation) with explicit behavioral constraints and appropriate OpenRouter reasoning settings. See our OpenRouter & Open-Source System Prompt Templates guide.

## Sources.

- [Open-weight model summary & empirical calibration profiles (JSON)](https://agent-tune.com/research/data/openrouter-open-source-profiles.json)

- [November 2026 20-model OpenRouter summary (JSON)](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)

- [November 2026 20-model raw vectors (10,000 records, JSON)](https://agent-tune.com/research/data/november-2026-openrouter-responses.json)

- [Scoring engine (september-2026-score.cjs)](https://agent-tune.com/research/data/september-2026-score.cjs)

## Keep going.

- [Template Gallery & Matcher: OpenRouter & Open-Source System Prompt Templates (DeepSeek, Qwen, Llama)](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Rankings: AI personality scores across all 20 November 2026 & September 2026 models](https://agent-tune.com/research/ai-personality-rankings)
- [Behavioral Study: Does personality tuning change AI answers? (60-reply + 180-reply studies)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)
- [DeepSeek Guide: DeepSeek system prompts & custom instructions (XML templates)](https://agent-tune.com/guides/deepseek-system-prompt-custom-instructions)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
