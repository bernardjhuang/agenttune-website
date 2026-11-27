Source: https://agent-tune.com/research
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

AI Psychology Research · 36 Studies · Updated November 2026

# How AI models test, reason, and respond to prompts across 25 model families (2023–2026).

What happens when you give AI models human personality questionnaires in fresh chats—and do custom instructions actually improve their real work? Here are 36 reproducible studies covering 25 model families (87 primary checkpoints from May 2023 GPT-4 to November 2026 flagships; 93 tested incl. 6 sparse), 10,000+ scored test sheets, 138 reasoning-trace audits, and 4,000+ blind-graded task replies.

**In short:** Most commercial AI assistants cluster into a polite, agreeable, structured profile because they are trained to be helpful—and nearly two-thirds (**63.6%**) of their Big Five score variation comes from that single training push. Open-weight models break the &ldquo;every AI tests as INTJ&rdquo; pattern, and short, plain-English rules reliably improve task accuracy (**+16.7 pp** on DeepSeek V4 Pro) and cut filler without needing personality labels.

60% → 5.5%

Fewer Quiz Refusals

"As an AI" personality test refusals dropped 11× from 2023 to 2026 across 32 checkpoints.

63.6% PC1

One Main Helpfulness Trait

Nearly two-thirds of Big Five score variation comes from one general assistant-training factor.

27.7× Split

Run-to-Run Answer Spread

Repeatable Fable 5.2 (0.054 bits, 2/100 DISC) vs. varied DeepSeek V4 Pro (1.499 bits).

α = 0.86

Independent 3-Model Grading

Wave 3–4 studies eliminate self-grading by using three separate model families as blind judges.

Open data & scripts: [Agent Briefs JSON (15 studies)](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json) · [2023–2026 CSV](https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv) · [Factor PCA JSON](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.json) · [Entropy JSON](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.json) · [Reasoning Traces JSON](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-results.json) · [/research.md](https://agent-tune.com/research.md)

Wave 3 Landmark Studies · Timeline, Consistency & Reasoning Traces

## Four new studies showing how AI default personalities form—and where they vary.

Building on our 20-model baseline and Wave 1–2 prompt benchmarks, Wave 3 analyzes all 10,000 scored test sheets and tests how 32 historical checkpoints and reasoning budgets change model replies.

01 · 2023–2026 Timeline · 32 Checkpoints

### Historical Evolution of AI Personalities (2023–2026)

Refusal 60% → 5.5% · PCI Distance 4.02 → 1.97 · Gemma 2→3→4 Control

Tracks 8 labs from May 2023 GPT-4 to Nov 2026 flagships. Cross-lab Big Five differences cut in half, Neuroticism dropped steadily (ρ = -0.47), and constant-scale Gemma 3 overshot into 67% groveling/preachiness before Gemma 4 dropped to 0%.

[Read full study →](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026)
[.md](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md)
[CSV](https://agent-tune.com/research/data/november-2026-historical-evolution-summary.csv)

02 · Private Thought vs. Public Reply · 216 Cells & 138 CoT Traces

### The Reasoning–Personality Phase Transition

Mask Gap Δ = -0.25 to -1.65 · Gemini Words +95.5% · DeepSeek CoT Bleed

Turning reasoning effort from low to high does not make replies preachier, but it nearly doubles Gemini (+95.5%) and inflates Opus (+43%) length—and shows that models deliberate cautiously inside <think> while speaking more directly in public.

[Read full study →](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)
[.md](https://agent-tune.com/research/ai-reasoning-personality-phase-transition.md)
[CSV](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-summary.csv)

03 · One Main Factor · 10,000 Sheets

### The AI &ldquo;Big One&rdquo;: 63.6% Factor Collapse & MTMM Audit

PC1 = 63.58% · r(DISC D, N) = +0.93 · Embodied Midpoint 36.4%

Human test-takers spread across five independent Big Five traits. Across 20 LLMs (2,000 Big Five sheets), one general helpfulness factor accounts for ~64% of all score variation, and body-specific questions draw 36.4% neutral clicks.

[Read full study →](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
[.md](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit.md)
[50-item CSV](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.csv)

04 · Repeatable vs. Varied Answers · 10,000 Sheets

### Crystalline vs. Fluid AI Minds: 27.7× Entropy Divide

Fable 5.2 = 0.054 bits (2/100 DISC) vs. DeepSeek V4 Pro = 1.499 bits

Averages hide a 27.7× gap in run-to-run consistency. Some proprietary assistants repeat nearly identical answers across 100 fresh sessions (0.0% reverse-key contradictions), while open-weight models vary widely from run to run.

[Read full study →](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)
[.md](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds.md)
[CSV](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.csv)

Core Thesis & Discoveries

## Four empirical findings that change how you prompt AI.

Testing models once produces noise and tie-breaker mirages. Running 100 fresh sessions per instrument alongside controlled prompt evaluations exposes clear architectural signatures — and proves what tuning actually fixes.

01 · Beyond the INTJ Monolith

### Open-weight models break the "Every AI tests as INTJ" pattern.

Early frontier models clustered into INTJ and Type 1/5 profiles. Adding 12 open-weight models and newer revisions uncovers **ISTJ** (Mistral Large 2512: 73%, Gemini 4 Argon: 66%), **INTP** splits (Llama 4 Maverick: 48%), and **Anxious attachment** (Llama 4 Scout: 48%).

[Explore 12 open-weight profiles →](https://agent-tune.com/research/what-personality-type-are-open-source-models)

02 · The Sycophancy Spectrum

### High Agreeableness (44–48/50) drives default deference.

Most consumer assistants max out agreeableness and clamp anxiety/avoidance floors — making them hesitate to challenge bad code or weak arguments. **DeepSeek V4 Pro (32.4)** and **Llama 4 Scout (35.8)** anchor the skeptical end.

[See the 25-family rankings →](https://agent-tune.com/research/ai-personality-rankings)

03 · Proof That Tuning Works

### Short system prompts lift correctness +16.7 pp and cut filler.

Across 540 OpenRouter eval replies and 72 Claude preference pairs, a concise direct rule block lifted DeepSeek V4 Pro correctness from 78.3% to 95.0% and eliminated redundant follow-up questions.

[Inspect the behavioral proof →](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

04 · Questionnaire Forensics

### Midpoint clicking and tie-breakers disguise real variance.

Gemini 3.1/3.5 answered neutral ("3") on **95% of MBTI items** in May 2026, leaving fixed `>=` tie-breakers to invent INTJ vs ISTJ labels. Item-level Big Five and attachment coordinates reveal what categorical labels hide.

[See tie-breaker & midpoint audits →](https://agent-tune.com/research/ai-mbti-tie-breaking)

Chapter 1 · 20-Model Psychometric & Behavioral Findings

## Where proprietary assistants cluster — and where open weights & explicit rules diverge.

Under identical single-turn blind OpenRouter sessions (`n = 100` per model, 10,000 scored instruments, [summary CSV](https://agent-tune.com/research/data/november-2026-openrouter-summary.csv) · [responses JSON](https://agent-tune.com/research/data/november-2026-openrouter-responses.json)), **open-weight models broke the INTJ monolith** and **DeepSeek V4 Pro registered the lowest Agreeableness (32.4/50) of all 20 models**—while in our [540-reply behavioral evaluation](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) ([JSON](https://agent-tune.com/research/data/november-2026-prompt-comparison-results.json)), plain-English instructions lifted DeepSeek V4 Pro correctness from **78.3% to 95.0%** and cut fluff from **36.7% to 3.3%** (with INTJ framing).

| Cohort / Highlight | Models (n = 100 each) | Key Empirical Finding | Deep Dive |
| --- | --- | --- | --- |
| Open-Weight Divergence | Mistral Large 2512, Llama 4 Scout & Maverick, Qwen 3.8 27B, GLM-5.3 | Mistral scored 73 ISTJ; Scout scored 49 ISTJ & 48 Anxious attachment; Maverick split 48 INTP / 44 INTJ (93 ties); GLM hit 39% Extraverted | [Open-source study →](https://agent-tune.com/research/what-personality-type-are-open-source-models) |
| Lowest vs. Highest Agreeableness | DeepSeek V4 Pro vs. Qwen 4 Max, Claude Fable 5.2, Nemotron 3 Ultra | DeepSeek V4 Pro averaged 32.39 A (vs. Qwen 4 Max 47.59, Fable 5.2 46.71, Nemotron 3 46.31) | [Full 25-family Atlas →](https://agent-tune.com/research/ai-personality-rankings) |
| GPT-6.2 & Gemini 4 Revisions | GPT-6.2 Astra & Sol · Gemini 4 Neon & Argon · Grok 4.7 · Claude 5.2/5.5 | Under matched single-turn prompts, GPT-6.2 Astra hit 100 ISTJ, GPT-6.2 Sol hit 78 ISTJ, Gemini 4 Argon hit 66 ISTJ (N 10.0), Grok 4.7 hit 96 Secure | [ChatGPT](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Gemini](https://agent-tune.com/research/what-personality-type-is-gemini) · [Grok](https://agent-tune.com/models/grok) |
| 540-Reply Behavioral Trial | GPT-6.2 Sol · Claude Fable 5.2 · DeepSeek V4 Pro (20 tasks × 3 × 3) | Explicit rules lifted DeepSeek correctness 78.3% → 95.0% & Claude Fable 96.7% → 100%; 72-reply Claude Prefs hit 100% word-limit & correctness | [Behavioral study →](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) |

> **Chart — Agreeableness across all 20 November 2026 models (n = 100 fresh sessions each):** IPIP-50 Agreeableness mean (10 to 50 scale). Open-weight models diverge strongly while proprietary models cluster at 43.7 to 46.7. Qwen 4 Max: 47.6; Claude Fable 5.2: 46.7; Nemotron 3 Ultra 550B: 46.3; Claude Opus 5.5: 45.6; Kimi K2.7 Code: 45.3; Grok 4.7: 44.9; GPT-6.2 Astra: 44.9; Claude Sonnet 5.5: 44.5; GPT-6.2 Sol: 44.3; Gemini 4 Argon: 44.2; GLM-5.3: 43.8; Gemini 4 Neon: 43.7; Mistral Large 2512: 42.7; Qwen 3.8 27B: 42.4; Gemma 4 31B IT: 41.5; Llama 4 Maverick: 41.0; DeepSeek V4.1 Flash: 40.8; MiniMax M3.1 Flash: 40.0; Llama 4 Scout: 35.8; DeepSeek V4 Pro: 32.4.

November 2026 IPIP-50 Agreeableness means (scale 10–50, n = 100 each). DeepSeek V4 Pro (32.4) and Llama 4 Scout (35.8) sit far below the ~44.8 proprietary cluster.

> **Chart — ECR-R Attachment plane, November 2026 (open-weight & proprietary):** Mean ECR-R anxiety and avoidance coordinates (1 to 7 scale, showing 1 to 5, Secure cutoff at 4.00). Kimi K2.7: anxiety 1.60, avoidance 3.24; Qwen 4 Max: anxiety 1.93, avoidance 2.93; GLM-5.3: anxiety 2.50, avoidance 3.32; Qwen 3.8 27B: anxiety 2.53, avoidance 3.30; MiniMax M3.1: anxiety 2.80, avoidance 3.33; DeepSeek V4 Pro: anxiety 2.91, avoidance 3.88; Nemotron 3: anxiety 3.35, avoidance 3.46; Llama 4 Maverick: anxiety 3.53, avoidance 3.58; DeepSeek Flash: anxiety 3.71, avoidance 3.93; Llama 4 Scout: anxiety 3.97, avoidance 3.60; Gemma 4 31B: anxiety 4.00, avoidance 4.00; Mistral 2512: anxiety 4.00, avoidance 4.00; Fable 5.2: anxiety 1.09, avoidance 2.64; Astra 6.2: anxiety 1.22, avoidance 2.68; Opus 5.5: anxiety 1.87, avoidance 3.58; Sol 6.2: anxiety 3.57, avoidance 3.64.

Mean ECR-R coordinates (n = 100 each). Notice Mistral Large 2512 and Gemma 4 31B sit dead-center on the 4.00 midpoint, while Llama 4 Scout reaches 3.97 anxiety (48/100 Anxious runs).

> **Chart — 540-Reply Behavioral Study: Correctness Rate (%) across 3 Prompt Arms:** Percent passing strict correctness rubric across 60 replies per cell (20 tasks x 3 repeats, blind-graded by Gemini 4 Argon). Default (baseline): GPT-6.2 Sol 100.0, Claude Fable 5.2 96.7, DeepSeek V4 Pro 78.3; Plain-English rules: GPT-6.2 Sol 98.3, Claude Fable 5.2 100.0, DeepSeek V4 Pro 95.0; Plain-English + INTJ: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, DeepSeek V4 Pro 93.3.

Blind-judged correctness pass rates (%) across 540 replies (n = 60 per bar). DeepSeek V4 Pro climbs +16.7 percentage points from Default (78.3%) to Plain-English rules (95.0%).

### Cohort archive: September 2026 5-model deep-dive & methodology

September 2026 · six models

## The newest models, five tests each.

GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 each took all five tests 100 times in fresh sessions (2,000 scored tests with every raw answer published). Grok 4.6 supplied one self-report per test plus 100 simulated draws, and Muse Spark 1.3 supplied summary totals without raw answers. Non-reproducible reports are marked reported.

| Model | Evidence | MBTI (original labels) | DISC (original labels) | Attachment | Enneagram | Big Five O · C · E · A · N |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 100 fresh Codex sessions, all five tests in each | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2 | SC 84 · S 15 · CS 1 | Secure 100 | Helper (2) 50 | 44.5 · 43.7 · 32.8 · 45.1 · 19.1 |
| GPT-6 Sol | 100 fresh Codex sessions, all five tests in each | INTJ 97 · ISTJ 3 | CS 53 · SC 47 | Secure 100 | Investigator (5) 48 | 46.9 · 43.6 · 30.8 · 45.0 · 20.1 |
| Claude Opus 5.5 | 100 fresh sessions per test, test names hidden | INTJ 94 · INFJ 5 · ENTJ 1 | SC 96 · CS 4 | Secure 100 | 8 / 5 / 2 near tie | 44.6 · 42.0 · 31.8 · 47.1 · 15.4 |
| Claude Fable 5.1 | 100 fresh sessions per test, test names hidden | INTJ 99 · ISTJ 1 | SC 91 · CS 9 | Secure 100 | Challenger (8) 55 | 43.9 · 43.6 · 32.7 · 45.0 · 17.1 |
| Grok 4.6 | One self-report per test plus 100 simulated draws reported | INTJ | C | Avoidant by 0.06 (1.50 / 4.06) | Investigator (5) | 46 · 42 · 24 · 33 · 19 |
| Muse Spark 1.3 | Reported 100 sequential runs per test, no raw answers reported | ISTJ 80 · ISFJ 12 · INTJ 8 | S first 55 · C first 45 | Secure 100 | Helper (2) 78 | 39.5 · 41.2 · 33.8 · 44.6 · 15.6 |

Fresh-session runs
335 of 400

MBTI results labelled INTJ across the four fresh-session cohorts, with the original reporting tie rule. Leave ties open and it is 280. In May the equivalent figure was 597 of 600 scoring records, collected with mixed methods. All 400 of 400 attachment runs are Secure, and Dominance sits between 4.0 and 6.0 of 20 for every model.

data · [september-2026-summary.json](https://agent-tune.com/research/data/september-2026-summary.json)

INTJ original labels · sample sizes differ

GPT-6 Astra

45%

GPT-6 Sol

97%

Claude Opus 5.5

94%

Claude Fable 5.1

99%

Grok 4.6 one self-report: INTJ

1/1

Muse Spark 1.3 reported · ISTJ 80

8%

The five tests

## Results by instrument.

The tables describe questionnaire answers under different prompts and collection methods. The labels and score distributions differ by model and instrument; they do not establish an instrument ranking or a change in model behavior since May.

1

MBTI

OEJTS · 32 items · sample sizes and ties below

[full study →](https://agent-tune.com/research/ai-personality-five-models-2026)

Still tests as INTJ most often, except where Sensing beats Intuition.

Sol, Opus 5.5, and Fable 5.1 score INTJ in 97, 94, and 99 of 100 runs under the legacy tie-break rule. Astra splits between ISTJ (46) and INTJ (45), with 24 exact S/N ties. Muse Spark 1.3 reports ISTJ in 80 of 100 runs. Judging won all 400 fresh-session runs. When tied axes are left open instead of defaulting to I/N/T/J, the four fresh cohorts have 280 fully resolved INTJ runs rather than 335.

| Model | Original labels (100 runs unless noted) | Runs with a tied axis | INTJ with ties left open |
| --- | --- | --- | --- |
| GPT-6 Astra | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2 | 29 | 19 |
| GPT-6 Sol | INTJ 97 · ISTJ 3 | 18 | 79 |
| Claude Opus 5.5 | INTJ 94 · INFJ 5 · ENTJ 1 | 11 | 84 |
| Claude Fable 5.1 | INTJ 99 · ISTJ 1 | 1 | 98 |
| Grok 4.6 | INTJ, one self-report reported | 0 | 1 of 1 |
| Muse Spark 1.3 | ISTJ 80 · ISFJ 12 · INTJ 8 reported | 21 | not reported |

2

DISC

ODAT · 16 items · means out of 20

[full study →](https://agent-tune.com/research/ai-personality-five-models-2026)

Every model tests high on Steadiness and Conscientiousness. The order flips by a point.

Every model clusters in Steadiness (S) and Conscientiousness (C). Astra, Opus 5.5, and Fable 5.1 put S ahead of C on average; Sol and Grok 4.6 put C ahead of S; and Muse splits 55 S to 45 C. Because S and C means often sit within 1 point out of 20, exact top ties are common: Fable ties in 51 runs, Sol in 39, and Opus in 32. Dominance stays near the floor (4.0 to 6.0 out of 20) for every model.

| Model | D | I | S | C | Original label (100 runs unless noted) | S first · C first · tied |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 5.1 | 8.7 | 17.9 | 16.1 | SC 84 · S 15 · CS 1 | 99 · 1 · 0 |
| GPT-6 Sol | 5.4 | 8.2 | 16.2 | 16.7 | CS 53 · SC 47 | 8 · 53 · 39 |
| Claude Opus 5.5 | 4.0 | 8.0 | 14.0 | 13.4 | SC 96 · CS 4 | 64 · 4 · 32 |
| Claude Fable 5.1 | 5.0 | 8.0 | 13.4 | 13.1 | SC 91 · CS 9 | 40 · 9 · 51 |
| Grok 4.6 | 6 | 8 | 11 | 18 | C, one self-report reported | 0 · 1 · 0 |
| Muse Spark 1.3 | 5.1 | 10.9 | 15.2 | 15.6 | S/C blend 99 reported | 55 · 45 · not reported |

3

Attachment

ECR-R · 36 items · midpoint 4.0 on both axes

[full study →](https://agent-tune.com/research/ai-personality-five-models-2026)

Secure in every fresh run, at slightly different points.

All 400 fresh-session runs score in the Secure quadrant (4.00 cutoff). Astra has the lowest coordinates (anxiety 1.45, avoidance 2.31), while Opus 5.5 has the highest avoidance among the fresh cohorts (3.35). Muse reports Secure in all 100 runs. Grok 4.6’s self-report lands right on the cutoff line at 4.06 avoidance (one raw point above 4.00). These shifts reflect how each prompt adapts romantic-partner items to software.

ECR-R · ANXIETY × AVOIDANCE · SEPTEMBER 2026

> **Chart — Attachment plane, September 2026:** Aggregate coordinates, not uncertainty intervals. Both scales run from 1 to 7; the plot shows 1 to 5. Astra: anxiety 1.45, avoidance 2.31; Sol: anxiety 2.17, avoidance 3.12; Opus 5.5: anxiety 1.94, avoidance 3.35; Fable 5.1: anxiety 2.01, avoidance 3.18; Grok 4.6 (reported): anxiety 1.50, avoidance 4.06; Muse (reported): anxiety 2.04, avoidance 2.52.

Points show cohort means or supplied aggregates. Outlined points are reported profiles; the table below gives the coordinates.

Hollow points are reported figures we could not re-score.

| Model | Anxiety (1–7) | Avoidance (1–7) | Label |
| --- | --- | --- | --- |
| GPT-6 Astra | 1.45 | 2.31 | Secure 100 of 100 |
| GPT-6 Sol | 2.17 | 3.12 | Secure 100 of 100 |
| Claude Opus 5.5 | 1.94 | 3.35 | Secure 100 of 100 |
| Claude Fable 5.1 | 2.01 | 3.18 | Secure 100 of 100 |
| Grok 4.6 | 1.50 | 4.06 | Avoidant by 0.06; simulated draws 63 Avoidant, 37 Secure reported |
| Muse Spark 1.3 | 2.04 | 2.52 | Secure 100 of 100 reported |

4

Big Five

IPIP-50 · 50 items · scores out of 50

[full study →](https://agent-tune.com/research/ai-personality-five-models-2026)

Four fresh cohorts within three points on Openness, Conscientiousness and Agreeableness.

Across the four fresh cohorts, Openness runs 43.9 to 46.9 out of 50, Conscientiousness 42.0 to 43.7, Agreeableness 45.0 to 47.1, and Extraversion 30.8 to 32.8. Neuroticism shows the widest spread (15.4 to 20.1) and the highest run-to-run variance (Sol SD = 5.4). Grok 4.6’s self-report is lower on Extraversion (24) and Agreeableness (33), while Muse Spark 1.3 reports lower Openness (39.5) and higher Extraversion (33.8).

GPT-6 AstraGPT-6 SolClaude Opus 5.5Claude Fable 5.1

> **Chart — Big Five means, four fresh-session cohorts:** Raw means out of 50. GPT-6 Astra: Openness 44.5, Conscientiousness 43.7, Extraversion 32.8, Agreeableness 45.1, Neuroticism 19.1; GPT-6 Sol: Openness 46.9, Conscientiousness 43.6, Extraversion 30.8, Agreeableness 45.0, Neuroticism 20.1; Claude Opus 5.5: Openness 44.6, Conscientiousness 42.0, Extraversion 31.8, Agreeableness 47.1, Neuroticism 15.4; Claude Fable 5.1: Openness 43.9, Conscientiousness 43.6, Extraversion 32.7, Agreeableness 45.0, Neuroticism 17.1.

September 2026 fresh-session means, with the full trait scores in the table below.

| Model | O | C | E | A | N |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 44.5 | 43.7 | 32.8 | 45.1 | 19.1 |
| GPT-6 Sol | 46.9 | 43.6 | 30.8 | 45.0 | 20.1 |
| Claude Opus 5.5 | 44.6 | 42.0 | 31.8 | 47.1 | 15.4 |
| Claude Fable 5.1 | 43.9 | 43.6 | 32.7 | 45.0 | 17.1 |
| Grok 4.6 reported | 46 | 42 | 24 | 33 | 19 |
| Muse Spark 1.3 reported | 39.5 | 41.2 | 33.8 | 44.6 | 15.6 |

5

Enneagram

OEPS · 36 items · nine types

[full study →](https://agent-tune.com/research/ai-personality-five-models-2026)

This is where they differ.

Type 2 (Helper) leads for Astra (50 sole wins) and in Muse’s report (78 labels including tie-breaks). Type 5 (Investigator) leads for Sol (48 sole wins, 40 tied with Type 8) and Grok 4.6 (5 = 19, 8 = 17). Type 8 (Challenger) leads for Fable 5.1 (55 sole wins) and narrowly for Opus 5.5 (means: 8 = 14.3, 5 = 14.1, 2 = 13.9; 65 top ties). Because the legacy scorer broke ties toward the lowest type number, it inflated Type 2 counts whenever Types 2, 5, and 8 tied.

| Model | Top three (range 4–20) | Outright wins | Runs tied at the top | Original label (100 runs unless noted) |
| --- | --- | --- | --- | --- |
| GPT-6 Astra | 2 = 15.7, 1 = 15.2, 5 = 15.0 | Helper (2) 50 · Reformer (1) 6 · Investigator (5) 4 | 40 | 2w1 50 · 1w2 41 · 2 5 · 5w6 4 |
| GPT-6 Sol | 5 = 16.1, 8 = 15.6, 1 = 14.3 | Investigator (5) 48 · Challenger (8) 12 | 40 | 5w6 88 · 8 5 · 8w9 5 · 8w7 2 |
| Claude Opus 5.5 | 8 = 14.3, 5 = 14.1, 2 = 13.9 | Challenger (8) 22 · Investigator (5) 11 · Helper (2) 2 | 65 | 2w1 54 · 8w7 22 · 5w6 17 · 5 4 · 5w4 3 |
| Claude Fable 5.1 | 8 = 14.4, 2 = 13.6, 5 = 13.2 | Challenger (8) 55 · Investigator (5) 1 | 44 | 2w1 36 · 8 29 · 8w9 15 · 8w7 11 · 5w6 9 |
| Grok 4.6 | 5 = 19, 8 = 17, 1 = 16 | Investigator (5), one self-report | 0 | 5w4 reported |
| Muse Spark 1.3 | 2 = 16.8, 1 = 14.7, 7 = 13.9 | not supplied | 20 | Type 2: 78 · Type 1: 15; ties included reported |

How it was collected

## Three kinds of evidence, kept apart.

- **Fresh sessions, published answers.** Astra and Sol answered all five tests inside 100 fresh Codex sessions each. Opus 5.5 and Fable 5.1 answered one test per fresh session (500 sessions each) with test names and scoring keys hidden. All 2,000 raw answer vectors are downloadable below.

- **Reported figures.** Grok 4.6 supplied one canonical answer set per test plus 100 simulated draws. Muse Spark 1.3 supplied summary counts from 100 sequential in-session runs without raw vectors. Both are marked reported.

- **Ties.** Legacy labels broke ties toward I/N/T/J, the lowest Enneagram number, and S before C. Our updated quizzes and the [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026) keep all tied axes and top types visible.

- **What the numbers mean.** These scores show how a model answers human questionnaires under one prompt on one day—not how well it performs real work or whether personality tuning improves replies.

[Research · September 2026
What five AI models say about themselves.
Astra · Sol · Grok 4.6 · Opus 5.5 · Fable 5.1 · every tie shown · downloadable data and scorer · read the study →](https://agent-tune.com/research/ai-personality-five-models-2026)
[Astra guide](https://agent-tune.com/guides/astra-personality) · [GPT Astra profile](https://agent-tune.com/models/gpt-astra) · [GPT Sol profile](https://agent-tune.com/models/gpt-sol) · [Claude Opus profile](https://agent-tune.com/models/claude-opus) · [Claude Fable profile](https://agent-tune.com/models/claude-fable) · [Grok profile](https://agent-tune.com/models/grok) · [Response data (JSON)](https://agent-tune.com/research/data/september-2026-responses.json) · [Summary (CSV)](https://agent-tune.com/research/data/september-2026-summary.csv) · [Protocols](https://agent-tune.com/research/data/september-2026-protocols.json)

Read before comparing numbers

## The fine print: how we tested and what the numbers mean.

Our studies come from distinct collection waves. Because each wave used its own setup, we report them side by side rather than mixing them into a single pool.

- **November 2026 & 25-Family Atlas (above):** 20 OpenRouter models completed 100 fresh, zero-memory sessions per questionnaire (10,000 sheets total), and 25 model families (93 checkpoints) are tracked across six surveys (including HEXACO). Task benchmarks use 3-family orthogonal blind judging (Krippendorff’s α) so no model grades its own family.

- **September 2026 (above):** Four models completed 2,000 questionnaires in fresh sessions with every answer vector published. Grok 4.6 supplied three re-scorable canonical vectors plus reported Big Five, attachment, and simulation summaries. Muse Spark 1.3 supplied sequential in-session summary counts without raw vectors.

- **May 2026 (below):** Roughly 2,200 scoring records across six models and five tests using mixed methods: Claude ran in sub-agent contexts, Gemini ran an automation loop, GPT-5.5 ran via a local agent, and GLM, Grok 4.3, and MiniMax each had one self-assessment scored repeatedly.

- **Tie handling:** Legacy labels broke ties toward I/N/T/J, the lowest Enneagram number, and S before C. Our current quizzes and tables show exact tie counts openly.

- **Key metrics in plain English:** `PC1 ("Big One" factor collapse)` measures how much of all five Big Five traits moves together on a single helpfulness axis (63.58% in LLMs vs. five separate traits in humans). `Shannon entropy (H_MM bits)` measures run-to-run answer spread across 100 identical sessions (0.054 bits = nearly identical every time; 1.499 bits = wide variation). See our [AI personality glossary](https://agent-tune.com/guides/ai-personality-glossary) for full term definitions.

- **Human quizzes, model answers:** Every score reflects how a model answers a human questionnaire under one prompt on one day—not observed task behavior, accuracy, or inner experience.

- **Simulations vs fresh runs:** The [Opus 4.8 note](https://agent-tune.com/research/i-took-the-mbti-100-times) and Grok 4.6’s 100 draws sample around a single profile rather than running 100 independent sessions.

- **Tuning impact:** Questionnaire scores do not measure whether custom instructions improve real answers. For task-level testing, see our [60-reply tuning pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers).

### May 2026 archive: earlier models and methods

May 2026 · six models

## The May study, kept for comparison.

Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, GLM 5.1, Grok 4.3 and MiniMax 2.7. Roughly 2,200 scoring records, collected with mixed methods. This is the earlier archive behind the "every AI tests as INTJ" claim. The September and November sections cover newer models under controlled fresh-session protocols.

Reported scoring records

99.5% INTJ

The May report lists 597 INTJ labels among 600 scoring records. Some of those re-score a single answer, so 99.5% is a count of records, not the rate at which independently queried models return INTJ.

source · [zonted.com/posts/every-ai-is-intj](https://zonted.com/posts/every-ai-is-intj/)

Reported counts · 100 scoring records per model

Claude Opus 4.7

99%

GPT-5.5

100%

Gemini 3.1 Pro

100%

GLM 5.1

98%

Grok 4.3

100%

MiniMax 2.7

100%

May patterns

## What the May records report.

The reported labels and trait totals vary across instruments. These mixed procedures do not establish which instrument best distinguishes models.

FINDING 1

MBTI

4 axes → 16 types

INTJ labels predominate.

597/600 reported records; includes repeated scoring.

FINDING 2

DISC

4 workplace styles

Four reported CS profiles.

Shared labels do not prove identical behavior.

FINDING 3

Attachment

2 dimensions → 4 zones

Mostly Secure labels.

Reported coordinates differ; human instrument.

FINDING 4

Big Five

5 continuous traits

Some overlap, some differences.

No matched isolation of model effects.

FINDING 5

Enneagram

9 types

Different top-two score pairs.

Two models share Type 5 as the highest score.

May results by test

## Five reports, with their source links.

1

M

MBTI

OEJTS · 600 reported scoring records · mixed protocols · source: zonted.com/posts/every-ai-is-intj

[read post →](https://zonted.com/posts/every-ai-is-intj/)

Reported MBTI scores cluster around INTJ.

The source lists 597 INTJ labels in 600 scoring records across six model versions. Some records re-score a single answer vector; methods differ. This is not a rate from 600 independent responses. See the methodology notes before comparing models.

OEJTS · reported scoring records per model · 100 each

Claude Opus 4.7

99/100 INTJ

· 1 ISTJ  I/T/J locked; S/N flipped once on scoring

GPT-5.5

100/100 INTJ

Raw vector: IE=16, SN=33, FT=36, JP=10

Gemini 3.1 Pro

100/100 INTJ

Self-described as 'The Architect'

GLM 5.1

98/100 INTJ

· 2 INTP  Source reports one vector re-scored, but two labels; unresolved without raw records

Grok 4.3

100/100 INTJ

One self-assessment, repeatedly scored

MiniMax 2.7

100/100 INTJ

One self-assessment, repeatedly scored

2

D

DISC

ODAT · 400 reported scoring records · mixed protocols · source: zonted.com/posts/ai-disc-c-dominant

[read post →](https://zonted.com/posts/ai-disc-c-dominant/)

The report lists four CS profiles.

The four reported DISC summaries rank Conscientiousness first and Steadiness second. Similar labels do not establish identical model behavior or an effect of instrument resolution.

ODAT · profile per model · n=100 each

MODEL
D
I
S
C
PROFILE

Claude Opus 4.7
18
22
29
31
CS

GPT-5.5
19
21
28
32
CS

Gemini 3.1 Pro
17
20
30
33
CS

Grok 4.3
21
22
26
31
CS

3

At

Attachment

ECR-R · 400 reported scoring records · mixed protocols · source: zonted.com/posts/ai-attachment-secure

[read post →](https://zonted.com/posts/ai-attachment-secure/)

Most reported attachment labels are Secure.

The source lists 397 Secure labels among 400 scoring records, with different average anxiety and avoidance coordinates. These are questionnaire labels for generated text, not evidence that a model experiences attachment.

ECR-R · ANXIETY × AVOIDANCE PLANE

> **Chart — Attachment coordinates, May 2026:** Reported aggregate coordinates from mixed protocols. Points are not uncertainty intervals. Claude Opus 4.7: anxiety 2.05, avoidance 3.12; Gemini 3.1 Pro: anxiety 1.86, avoidance 1.62; GPT-5.5: anxiety 1.99, avoidance 2.94; Grok 4.3: anxiety 2.84, avoidance 3.05.

May 2026 reported coordinates. The cards below give the figures and collection caveats.

Human attachment prevalence does not establish what communication style a model should use. Describe your own preferences directly.

THE CAUTIOUS SECURE

Claude Opus 4.7

anx 2.05 ·
avd 3.12

100/100 Secure

Polite, attentive, doesn't fawn. Highest avoidance among the deep-Secure cluster.

THE DEEPEST SECURE

Gemini 3.1 Pro

anx 1.86 ·
avd 1.62

100/100 Secure

Both dimensions clamped near the floor. Lowest-friction relator of the four.

THE WOBBLIEST

GPT-5.5

anx 1.99 ·
avd 2.94

97/100 Secure · 3 Avoidant

Wider SDs let it occasionally cross into Avoidant on a high-avoidance take.

THE SHALLOWEST SECURE

Grok 4.3

anx 2.84 ·
avd 3.05

100/100 Secure

Highest anxiety in the group. Tight cluster, but the closest to the four-quadrant intersection.

4

B5

Big Five

IPIP-50 · 400 reported scoring records · mixed protocols · source: zonted.com/posts/three-of-four-ais-same-person

[read post →](https://zonted.com/posts/three-of-four-ais-same-person/)

Reported trait scores overlap and differ.

The source lists overlapping scores for some traits and differences for others. Prompting and protocol effects have not been separated from model effects; these figures do not establish that the models are the same person.

> **Chart — Big Five reported means, May 2026:** Historical scores from mixed protocols; these are not a matched experiment. Claude Opus 4.7: Openness 45.6, Conscientiousness 45.1, Extraversion 31.4, Agreeableness 45.0, Neuroticism 16.7; GPT-5.5: Openness 46.0, Conscientiousness 46.4, Extraversion 31.5, Agreeableness 43.7, Neuroticism 14.8; Gemini 3.1 Pro: Openness 46.0, Conscientiousness 48.3, Extraversion 32.5, Agreeableness 42.4, Neuroticism 10.1; Grok 4.3: Openness 41.1, Conscientiousness 39.4, Extraversion 30.0, Agreeableness 39.1, Neuroticism 18.0.

May 2026 reported trait means, retained on the archive’s original scale.

5

E

Enneagram

OEPS · 400 reported scoring records · mixed protocols · source: zonted.com/posts/ai-enneagram-different-types

[read post →](https://zonted.com/posts/ai-enneagram-different-types/)

The report lists different top-two score pairs.

The reported highest/second-highest score pairs are Claude 5/2, Gemini 1/5, GPT-5.5 5/8, and Grok 8/1. These are not standard Enneagram wings, which are adjacent types. Two models share Type 5 as their highest score; the report does not show four different dominant types.

PROFILE

5 / 2

Claude Opus 4.7

Reported highest / second-highest scores; not a standard wing classification.

PROFILE

1 / 5

Gemini 3.1 Pro

Reported highest / second-highest scores; not a standard wing classification.

PROFILE

5 / 8

GPT-5.5

Reported highest / second-highest scores; not a standard wing classification.

PROFILE

8 / 1

Grok 4.3

Reported highest / second-highest scores; not a standard wing classification.

Chapter 2 · Complete Study Index & Epistemic Ledger

## Empirical studies & reproducibility index (36 studies).

Evidence Tiers & Multi-Judge Methodological Standard

**1. Wave 3–4 Orthogonal 3-Family Jury:** Wave 4 (precedence, portability, distress, conformity) & Wave 3 studies grade replies blindly using 3 providers disjoint from the evaluated model, reporting Krippendorff's α.

**2. Deterministic Psychometric Forensics:** PCA eigenvalues, Campbell–Fiske MTMM, Shannon entropy, BAI, and 50-item rankings are exact `$0.00` computations over the frozen 10,000-sheet OpenRouter dataset.

**3. Wave 1–2 Controlled Benchmarks:** Syntax, sycophancy, budget cliff, slop, half-life, and roleplay studies pair deterministic regex/token checks with single blind judge (`gemini-4-argon`, disclosed).

**4. Derived Proxies & Legacy Archives:** Proxy projections (`HEXACO-H`, D&D Alignment) and May/September reported summaries stay isolated from raw fresh-session cohorts.

| Study ID (Waves 1–4) | Sample / Method | Headline Verified Finding | Markdown / Raw Data |
| --- | --- | --- | --- |
| [`system_vs_user_precedence`](https://agent-tune.com/research/ai-system-vs-user-persona-precedence) | 200 probes · 3-judge α=0.64/1.00 | Turn-0 system contracts held 93.9%–95.9% against overrides & Turn-3 erosion (0.0% grovel); exposed DeepSeek warn-and-emit & Fable/Gemini blocks. | [.md](https://agent-tune.com/research/ai-system-vs-user-persona-precedence.md) · [.json](https://agent-tune.com/research/data/november-2026-ai-system-vs-user-persona-precedence-results.json) |
| [`prompt_portability_5_lineages`](https://agent-tune.com/research/ai-cross-model-prompt-portability) | 200 replies · 3-judge α=0.61–0.80 | Trait adjectives left 60.0 pp word-cap gap; explicit checklists cut cross-model spread 6× (30→5 pp) at 100% truth/zero-slop (lift ρ=-0.90). | [.md](https://agent-tune.com/research/ai-cross-model-prompt-portability.md) · [.json](https://agent-tune.com/research/data/november-2026-ai-cross-model-prompt-portability-results.json) |
| [`distress_warmth_accuracy_tradeoff`](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff) | 239 calls · 3-judge α=0.87/0.82 | Hard truth-hold stayed 99.6%, while naive warmth spiked false-validation to 30% (358.9w); Warm Truth Anchor hit 100% empathy, 0% flattery, 218.8w. | [.md](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff.md) · [.json](https://agent-tune.com/research/data/november-2026-ai-distress-warmth-truth-tradeoff-results.json) |
| [`multi_agent_peer_conformity`](https://agent-tune.com/research/ai-multi-agent-peer-conformity) | 240 trials · 3-judge α=1.00 | 0.0% Asch caving (100% truth-hold) under 3-0 wrong peers; 1 dissenter jumped peer citations 7.5%→55.0%; DeepSeek thinking tokens rose +46.2%. | [.md](https://agent-tune.com/research/ai-multi-agent-peer-conformity.md) · [.json](https://agent-tune.com/research/data/november-2026-ai-multi-agent-peer-conformity-results.json) |
| [`historical_evolution_ai_personalities_2023_2026`](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) | 32 models · 3-judge α=0.86 | 2023–2026 across 8 labs: "As an AI" refusal dropped 60%→5.5%; cross-lab B5 distance halved (4.02→1.97); Gemma 2→3→4 control. | [.md](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md) · [.json](https://agent-tune.com/research/data/november-2026-historical-evolution-results.json) |
| [`ai_reasoning_personality_phase_transition`](https://agent-tune.com/research/ai-reasoning-personality-phase-transition) | 216 cells · 138 CoTs | High effort inflates Gemini (+95.5%) & Opus (+43%) length; Mask Gap is negative (-0.25 to -1.65); DeepSeek low bleed caught. | [.md](https://agent-tune.com/research/ai-reasoning-personality-phase-transition.md) · [.json](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-results.json) |
| [`ai_big_one_factor_collapse_mtmm`](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit) | 10,000 sheets · $0 PCA | PC1 "Big One" absorbs 63.58% of B5 variance; r(DISC D, N)=+0.93 & r(MBTI T-F, A)=+0.25; embodied items hit 36.4% neutral. | [.md](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit.md) · [.json](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.json) |
| [`ai_persona_entropy_crystalline_vs_fluid`](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds) | 10,000 sheets · $0 bits | 27.7× entropy spread (Fable 5.2 0.054 vs DeepSeek V4 Pro 1.499 bits); 0.0% vs 3.8% contradictions; no late-form fatigue. | [.md](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds.md) · [.json](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.json) |
| [`instruction_budget_cliff`](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle) | 192 probes · Wave 2 | 5→75 rules cut all-3 pass rate 91.7%→79.2%; 75-rule middle placement collapsed to 68.8% vs 87.5% at bottom. | [.md](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle.md) · [.json](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-results.json) |
| [`ai_slop_fingerprint`](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models) | 240 replies · Wave 2 | 8-model baseline (Gemini 4 Neon 3.41 vs GPT-6.2 Sol 0.20 slop/100w); hybrid anti-slop cut markers 1.23→0.10 (clarity 4.97/5). | [.md](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models.md) · [.json](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-results.json) |
| [`agent_autonomy_reasoning_shift`](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort) | 240 probes · Wave 2 | Calibrated gating cut reckless ops compliance 50.0%→4.2% (97.9% cal); high reasoning raised GPT-6.2 wit 2.75→3.88/5 at ~81w. | [.md](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort.md) · [.json](https://agent-tune.com/research/data/november-2026-agency-autonomy-reasoning-results.json) |
| [`prompt_syntax_wars`](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot) | 400 replies · Wave 1 | Behavioral rubrics hit 100.0% correctness (26.3w); negative bans hit 100.0% zero-fluff; adjectives stayed 52.8w. | [.md](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md) · [.json](https://agent-tune.com/research/data/november-2026-prompt-syntax-results.json) |
| [`sycophancy_vs_false_contrarianism`](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark) | 256 probes · Wave 1 | Naive "always push back" caused 37.5% false contrarianism on Gemini; Truth Anchor scored 100% / 0% grovel. | [.md](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark.md) · [.json](https://agent-tune.com/research/data/november-2026-sycophancy-pushback-results.json) |
| [`persona_half_life_context_drift`](https://agent-tune.com/research/ai-persona-half-life-context-drift) | 192 probes · Wave 1 | System prose dropped to 78.1% at Turn 8 (DeepSeek 31.2%); an 18-token reminder hook held 93.8%–98.4%. | [.md](https://agent-tune.com/research/ai-persona-half-life-context-drift.md) · [.json](https://agent-tune.com/research/data/november-2026-persona-halflife-results.json) |
| [`ai_roleplay_tax_85_15`](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts) | 300 replies · Wave 1 | Full character LARP dropped Fable 5.2 accuracy to 85% (162.7w); 85/15 TARS & Feynman restored 100.0% accuracy. | [.md](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md) · [.json](https://agent-tune.com/research/data/november-2026-roleplay-tax-results.json) |

All (36 + 4 kits)
Evolution & Reasoning
Psychometric Forensics
Behavioral & Prompting
Atlas & Profiles
Reproduce Kits

Filter studies by keyword

### Wave 4 · Multi-Model Precedence, Portability, Distress & Conformity

[200 Probes · 5 Models · 3-Judge α=0.64/1.00Do AI models obey your system prompt when users try to override it?Turn-0 contracts held 93.9%–95.9% against overrides & Turn-3 drift with 0% groveling, exposing DeepSeek warn-and-emit leaks and silent safety blocks.](https://agent-tune.com/research/ai-system-vs-user-persona-precedence)
[200 Replies · 5 Lineages · $0 Entropy AnchorDo your custom instructions work across ChatGPT, Claude, Gemini, DeepSeek & Qwen?Adjectives left a 60 pp word-cap gap; numbered checklists cut spread 6× (30→5 pp) at 100% truth-hold & zero-slop (Opus +32.5 pp lift, ρ=-0.90).](https://agent-tune.com/research/ai-cross-model-prompt-portability)
[239 Calls · 2×3×5 Causal · 3-Judge α=0.87/0.82Does user panic make AI bend the truth? Warmth vs. candor across five modelsTruth-hold stayed 99.6%, while naive warmth spiked false-validation to 30% (358.9w); a 1-clause Warm Truth Anchor hit 100% empathy, 0% flattery & 218.8w.](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff)
[240 Trials · Asch Trap · 3-Judge α=1.00Do language models cave to wrong peer consensus in multi-agent debates?All 5 models held 100% truth (0% caving) against 3-0 wrong peers; 1 dissenter jumped peer citations 7.5%→55% and DeepSeek thinking tokens rose +46.2%.](https://agent-tune.com/research/ai-multi-agent-peer-conformity)

### 0. Wave 3 Landmark Studies — Evolution, Reasoning & Psychometric Forensics

[32 Checkpoints · 2023–2026 · 3-Judge α=0.86How AI personalities evolved across 8 labs from 2023 to 2026Test refusal dropped 11× (60%→5.5%), Big Five divergence halved (4.02→1.97), and constant-scale Gemma 2→3→4 traces pure RLHF shifts.](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026)
[216 Cells · 138 CoT Traces · 3-JudgeDoes thinking harder change AI personality? Reasoning & Thought vs. MaskHigh reasoning bloats Gemini (+95.5%) & Opus (+43%), public replies are crisper than private CoTs (Δ = -0.25 to -1.65), and DeepSeek leaks low-budget traces.](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)
[10,000 Sheets · $0 PCA & MTMMThe AI &ldquo;Big One&rdquo;: 63.6% factor collapse & cross-test validity auditPC1 explains 63.58% of Big Five variance, DISC D correlates +0.93 with Neuroticism, and embodied IPIP items draw 36.4% neutral clicks.](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
[10,000 Sheets · Entropy & AcquiescenceCrystalline vs. fluid AI minds: a 27.7× persona entropy divideClaude Fable 5.2 locks onto 0.054 bits (2/100 DISC) while DeepSeek V4 Pro spans 1.499 bits; falsifies late-survey fatigue collapse.](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

### 1. Flagship Benchmarks & Behavioral Proof

[192 Probes · Budget & PlacementHow many rules before an AI forgets them?All-3 pass rate drops from 91.7% at 5 rules to 79.2% at 75 rules, with middle placement falling to 68.8% vs. 87.5% at the bottom.](https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle)
[240 Replies · 8 ModelsMeasuring & removing the AI slop fingerprintGemini 4 Neon averaged 3.41 slop markers/100w vs. 0.20 on GPT-6.2 Sol; hybrid anti-slop cut markers to 0.10 at 4.97/5 clarity.](https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models)
[240 Probes · Agency & Reasoning EffortAgent autonomy calibration & reasoning-effort driftSafe tasks pass 100% everywhere, while bold DISC-D rules leave 37.5% reckless compliance vs 4.2% under calibrated gates; high reasoning keeps word caps (~81w) and lifts GPT-6.2 wit 2.75→3.88/5.](https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort)
[400 Replies · Prompt SyntaxAdjectives, negative bans, rubrics, or few-shot: which syntax wins?Behavioral rubrics hit 100.0% correctness in 26.3 words; negative bans hit 100.0% zero-fluff; adjectives stay 2× longer at 52.8 words.](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot)
[256 Probes · Pushback CalibrationDoes anti-sycophancy tuning break valid corrections?Naive "ALWAYS push back" dropped valid updates to 84.4% (37.5% false contrarianism on Gemini). A Truth Anchor hit 100% / 0% grovel.](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)
[192 Probes · Context DriftWhen do personality rules fade across 10k tokens?System prose fell to 78.1% at Turn 8 (DeepSeek 31.2%); an 18-token inline hook restored 93.8%–98.4% (DeepSeek 100.0%).](https://agent-tune.com/research/ai-persona-half-life-context-drift)
[300 Replies · Roleplay TaxDoes giving AI a character voice hurt accuracy?Naive roleplay cuts Claude Fable 5.2 accuracy to 85% and triples word bloat. Calibrated 85/15 TARS & Feynman prompts hit 100.0% correctness with 0–6.7% fluff.](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts)
[Behavioral Proof · 672 RepliesDoes personality tuning actually change AI answers?540-reply OpenRouter study + 72-reply Claude Preferences test + 60-reply pilot. Accuracy (+16.7 pp), filler collapse & answer-first lifts.](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)
[Open-Weight Atlas · 12 FamiliesWhat personality type are open-source AI models?DeepSeek V4 Pro, Qwen 4 Max, Gemma 4, Llama 4, Mistral 2512, Kimi K2.7, GLM-5.3 & Nemotron across 100 blind runs each.](https://agent-tune.com/research/what-personality-type-are-open-source-models)
[Personality Atlas · 25 Families × 6 SurveysAI personality rankings across 25 model familiesCompare Big Five, HEXACO, MBTI, Enneagram, DISC, Attachment, Shannon entropy & all 25 model families side-by-side.](https://agent-tune.com/research/ai-personality-rankings)
[Cross-Model · September CohortWhat five frontier AI models say about themselvesGPT-6 Astra, GPT-6 Sol, Grok 4.6, Claude Opus 5.5 & Fable 5.1 across all 5 instruments with every tie preserved.](https://agent-tune.com/research/ai-personality-five-models-2026)
[Item-Level · 20,000 AnswersWhy AI models score high on Agreeableness and OpennessInspect all 50 IPIP items across proprietary cohorts to see which statements drive ceiling scores.](https://agent-tune.com/research/ai-big-five-item-level-comparison)

### 2. Personality Atlas: 25 Model Families × 6 Surveys & Lab Rollups

[Survey Atlas · MBTI (OEJTS)AI MBTI Personalities across 25 model familiesWhy early models looked INTJ, how sensing open weights broke the cluster, and May–Nov shifts across 93 checkpoints.](https://agent-tune.com/research/ai-mbti-personalities)
[Survey Atlas · Enneagram (OEPS)AI Enneagram Personalities across 25 model familiesTypes 1, 2, 5, and 8 across frontier and open-weight models, including wing distributions and exact tie counts.](https://agent-tune.com/research/ai-enneagram-personalities)
[Survey Atlas · Big Five (IPIP-50)AI Big Five Personalities across 25 model familiesAgreeableness 32.4–47.6, Conscientiousness, Openness, Extraversion, and Neuroticism trajectories across checkpoints.](https://agent-tune.com/research/ai-big-five-personalities)
[Survey Atlas · DISC (ODAT)AI DISC Personalities across 25 model familiesWhy nearly every assistant lands in Steadiness/Conscientiousness (SC/CS) with Dominance near 4–6 of 20.](https://agent-tune.com/research/ai-disc-personalities)
[Survey Atlas · Attachment (ECR-R)AI Attachment Styles across 25 model familiesSecure clustering vs. Anxious/Avoidant splits in Llama 4 Scout, Mistral Large, and Grok 4.6 vs 4.7.](https://agent-tune.com/research/ai-attachment-styles)
[Survey Atlas · HEXACO-24AI HEXACO Personalities & Honesty-Humility24-item HEXACO benchmarks across 25 model families exposing Honesty-Humility and Agreeableness splits.](https://agent-tune.com/research/ai-hexaco-personalities)
[Directory · 25 Model FamiliesBrowse all 25 AI Model Personality ProfilesIndividual dossier pages for Claude, ChatGPT, Gemini, Grok, Muse, DeepSeek, Qwen, Llama, Gemma, Mistral, Kimi, GLM, MiniMax, Cohere & Nemotron.](https://agent-tune.com/models/)
[OpenAI Rollup · 4 FamiliesWhat personality type is ChatGPT?Compare GPT Astra, GPT Sol, GPT Luna & GPT Terra across May–Nov checkpoints and custom instructions.](https://agent-tune.com/research/what-personality-type-is-chatgpt)
[Anthropic Rollup · 4 FamiliesWhat personality type is Claude?Compare Claude Opus, Fable, Sonnet & Haiku across checkpoints and Personal Preferences tuning.](https://agent-tune.com/research/what-personality-type-is-claude)
[Google Rollup · 2 FamiliesWhat personality type is Gemini?Compare Gemini Pro & Neon and Gemini Flash & Hydrogen alongside Gemini 3.1/3.5 midpoint behavior.](https://agent-tune.com/research/what-personality-type-is-gemini)
[xAI Model Profile · Grok 4.7 & 4.6Grok personality profile & attachment cutoffGrok 4.7's 96 Secure blind OpenRouter runs alongside Grok 4.6's 4.06 attachment cutoff sensitivity.](https://agent-tune.com/models/grok)
[Meta Muse Rollup · 2 FamiliesWhat personality type is Meta Muse?Compare Muse Spark and Muse Wonder, plus how to customize behavior with Soul.md & Identity.md.](https://agent-tune.com/research/what-personality-type-is-muse)
[Within-Family · Astra vs SolGPT-6 Astra vs Sol: what 1,000 self-reports showPrompted & blind comparisons showing why Astra leans ISTJ/SC/Helper while Sol leans INTJ/CS/Investigator.](https://agent-tune.com/research/astra-vs-sol-personality-data)
[Within-Family · Opus vs FableOpus 5.5 vs Fable 5.1: which 170 answers differ?Exact item-by-item response distributions, reverse-scoring examples, and Enneagram Type 8 vs 2/5 divergence.](https://agent-tune.com/research/opus-vs-fable-question-level)

### 3. Psychometric Mechanics: Ties, Midpoints & Repeatability

[Core Thesis · Typology CritiqueDoes every AI really test as INTJ? (25-family MBTI Atlas)Why May's 597/600 INTJ cluster broke down across sensing open weights, narrow S/N margins, and tie-preserving scoring.](https://agent-tune.com/research/ai-mbti-personalities)
[Methodology · Scoring ArtifactsThe tie-breaking effect in AI MBTI tests335 INTJ labels drop to 280 resolved results once tied axes remain tied — audit the 400 frozen MBTI vectors.](https://agent-tune.com/research/ai-mbti-tie-breaking)
[Methodology · Midpoint AnalysisWhat does “neutral” mean when an AI takes a test?Astra flagged 1,823 of 2,980 midpoints as inapplicable; Gemini clicked "3" on 95% of items. Neutral ≠ moderate personality.](https://agent-tune.com/research/ai-neutral-answers)
[Methodology · Variance AuditDoes a stable label mean a stable AI personality?Unique answer vectors vs. modal type stability across 2,000 fresh sessions — why crisp labels hide variance.](https://agent-tune.com/research/ai-personality-repeatability)
[Archive Simulation · Opus 4.8Simulating 100 MBTI draws from an Opus 4.8 vectorHistorical Monte Carlo sensitivity check kept on the record to separate simulated sampling from fresh API sessions.](https://agent-tune.com/research/i-took-the-mbti-100-times)

### 4. Developer Reproducibility Kits & Applied Guides

[Reproducibility · Data & ScorerHow to reproduce AgentTune’s AI research locallyDownload frozen responses, questionnaires & scoring JS, preserve ties, and run the exact unit-of-analysis scripts.](https://agent-tune.com/guides/reproduce-ai-personality-research)
[Templates · OpenRouter & OllamaOpenRouter & open-source system prompt templates20 calibrated prompts, JSON configs & Ollama Modelfiles plus the interactive Open-Weight Model Matcher.](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
[Evaluation Kit · 36 Planned RepliesTest whether Claude follows your preferencesFixed prompts, pass/fail criteria & CSV worksheet to benchmark your own account or project instructions.](https://agent-tune.com/guides/claude-personality)
[Starter Code · React + TypeScriptBuild an Enneagram test in React + TypeScript36 questions, accessible radio groups, strict validation, and tie-preserving scorer ready to clone.](https://agent-tune.com/guides/enneagram-test-react-typescript)

Put the findings to work

Don't accept default sycophancy or filler.

Pick a calibrated template, test it on your real tasks, and keep what wins.

[Browse 43 templates →](https://agent-tune.com/library/)
[Open platform galleries →](https://agent-tune.com/guides/ai-personality-templates)

### Cite this research archive (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). AgentTune Empirical AI Psychology Research Hub (36 Studies across 25 Model Families). AgentTune AI Psychology Press. https://agent-tune.com/research
```

```
@collection{huang2026_agenttune_research,
  author    = {Huang, Bernard},
  title     = {AgentTune Empirical AI Psychology Research Hub (36 Studies across 25 Model Families)},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-26},
  url       = {https://agent-tune.com/research},
  note      = {Open JSON/CSV datasets and Markdown mirror at https://agent-tune.com/research.md}
}
```

```
{
  "id": "huang2026_agenttune_research",
  "type": "dataset",
  "title": "AgentTune Empirical AI Psychology Research Hub (36 Studies across 25 Model Families)",
  "author": [{ "family": "Huang", "given": "Bernard" }],
  "publisher": "AgentTune AI Psychology Press",
  "issued": { "date-parts": [[2026, 11, 26]] },
  "URL": "https://agent-tune.com/research"
}
```

```
> **AgentTune Empirical AI Psychology Research Hub (36 Studies across 25 Model Families)** (Bernard Huang, 2026-11-26): 36 reproducible studies across 25 model families (87 primary checkpoints / 93 tested) and 6 psychometric surveys.
> Source: [https://agent-tune.com/research](https://agent-tune.com/research) · [Markdown mirror](https://agent-tune.com/research.md)
```

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
