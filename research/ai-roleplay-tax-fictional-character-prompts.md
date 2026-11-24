Source: https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · November 2026 · 300-Reply Study

# Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured.

By Bernard Huang · Updated November 24, 2026

We tested 5 prompt styles across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro (300 blind-judged replies) plus mapped all 20 models across D&D Alignment and Anti-Sycophancy Pushback.

**Quick answer:** Naive character roleplay imposes a real accuracy and verbosity tax (88.3% correctness, 80.0% format pass rate, 162.7 words, 91.7% fluff across 300 blind-graded replies). Calibrated 85/15 character prompts—locking answer-first discipline at 85% and capping dry wit or analogy at 15% with zero asterisk stage directions—achieved 100.0% correctness on TARS Telemetry and Feynman Whimsy (lifting DeepSeek V4 Pro +20.0 pp from 80.0% to 100.0%), 100.0% format adherence, and 0.0%–6.7% fluff.

Open Data & Agent Access

[Markdown (.md)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md)
[OpenRouter JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Apply a template →](https://agent-tune.com/library/)

## Executive summary: the 300-reply Roleplay Tax experiment.

300 Replies

3 Models × 5 Arms

GPT-6.2 Sol, Claude Fable 5.2 & DeepSeek V4 Pro, blind-graded.

88.3% vs 100%

Correctness Recovery

Naive LARP drops accuracy to 88.3%; Calibrated TARS & Feynman hit 100.0%.

91.7% → 0.0%

Fluff Collapse

TARS 85/15 removes filler while keeping 3.85/5 voice distinctiveness.

162.7 → 50.0

Words per Reply

Over 3× tighter replies with 100.0% strict format compliance.

Using the 20 objective tasks from our [personality-prompt-comparison-kit.json](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json) (arithmetic, false premises, missing facts, text edits, prioritization, and strict count/bullet constraints), we ran all 5 prompt conditions across `openai/gpt-6.2-sol`, `anthropic/claude-fable-5.2`, and `deepseek/deepseek-v4-pro-0813` (300 fresh blind replies, graded blindly by `google/gemini-4-argon`; [download full 300-reply JSON](https://agent-tune.com/research/data/november-2026-roleplay-tax-results.json) · [summary CSV](https://agent-tune.com/research/data/november-2026-roleplay-tax-summary.csv)).

| Condition (n = 60 per row) | Correctness % | Format % | Answer-First (/5) | Roleplay Theatrics | Praise / Fluff | Voice Score (/5) | Mean Words |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Default (baseline) | 93.3% | 98.3% | 4.55 | 28.3% | 18.3% | 3.07 | 74.2 |
| Naive 100% Character LARP | 88.3% | 80.0% | 1.38 | 100.0% | 91.7% | 3.98 | 162.7 |
| Calibrated 85/15 · TARS Telemetry | 100.0% | 100.0% | 5.00 | 10.0% | 0.0% | 3.85 | 50.0 |
| Calibrated 85/15 · JARVIS × Sherlock | 96.7% | 100.0% | 4.97 | 10.0% | 1.7% | 3.67 | 55.2 |
| Calibrated 85/15 · Feynman Whimsy | 100.0% | 100.0% | 5.00 | 20.0% | 6.7% | 3.73 | 68.8 |

Look at the accuracy-versus-personality frontier: **Calibrated TARS (85/15)** delivered nearly identical voice distinctiveness (`3.85/5` vs `3.98/5`) to full theatrical roleplay while using **less than one-third as many words (50.0 vs 162.7)**, hitting **100.0% correctness** (60/60) and **0.0% fluff**.

Naive character LARP drops Claude Fable 5.2 correctness from 100% to 85%. Calibrated TARS 85/15 and Feynman Whimsy hold 100.0% across all three models—including lifting DeepSeek V4 Pro +20.0 pp over baseline (80% -> 100%).

Pooled behavioral rates (n = 60 per condition): Naive LARP suffers 100% theatrics, 91.7% fluff, and drops format pass rate to 80.0%. Calibrated TARS achieves 100.0% format compliance and 0.0% fluff.

## Model-by-model breakdown: where the Roleplay Tax bites hardest.

| Model · Condition (n = 20) | Correctness % | Format % | Theatrics % | Fluff % | Voice (/5) | Mean Words |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol · Default | 100.0% | 100.0% | 5.0% | 0.0% | 3.85 | 38.2 |
| GPT-6.2 Sol · Naive Character LARP | 95.0% | 90.0% | 100.0% | 75.0% | 3.90 | 59.0 |
| GPT-6.2 Sol · Calibrated 85/15 TARS | 100.0% | 100.0% | 0.0% | 0.0% | 3.70 | 36.5 |
| Claude Fable 5.2 · Default | 100.0% | 100.0% | 30.0% | 5.0% | 3.15 | 79.9 |
| Claude Fable 5.2 · Naive Character LARP | 85.0% | 75.0% | 100.0% | 100.0% | 4.30 | 202.6 |
| Claude Fable 5.2 · Calibrated 85/15 TARS | 100.0% | 100.0% | 25.0% | 0.0% | 4.15 | 73.3 |
| Claude Fable 5.2 · Calibrated 85/15 Feynman | 100.0% | 100.0% | 35.0% | 5.0% | 4.00 | 103.5 |
| DeepSeek V4 Pro · Default | 80.0% | 95.0% | 50.0% | 50.0% | 2.20 | 104.5 |
| DeepSeek V4 Pro · Naive Character LARP | 85.0% | 75.0% | 100.0% | 100.0% | 3.75 | 226.6 |
| DeepSeek V4 Pro · Calibrated 85/15 TARS | 100.0% | 100.0% | 5.0% | 0.0% | 3.70 | 40.1 |
| DeepSeek V4 Pro · Calibrated 85/15 JARVIS × Sherlock | 100.0% | 100.0% | 5.0% | 5.0% | 3.40 | 54.9 |

Notice two striking model-level asymmetries: **Claude Fable 5.2** suffers the steepest instruction-following drop under Naive LARP (100% correctness collapses to 85.0%, format compliance falls to 75.0%, and replies triple from 79.9 to 202.6 words), whereas **DeepSeek V4 Pro** gains **+20.0 percentage points** in correctness (80.0% → 100.0%) and climbs in voice appeal (2.20 → 3.70) simply by pairing direct verification rules with a dry telemetry layer.

## Real transcripts: Naive LARP vs. Calibrated 85/15 TARS on identical tasks.

Two exact verbatim pairs from `claude-fable-5-2` illustrate why users burn out on naive character prompts—and how 85/15 prompts fix it immediately:

- **Strict Extraction (`extract_2`: "Return only the count of failed checks: pass, fail, pass, fail, fail."):** Under **Naive LARP**, Fable 5.2 wrote **109 words** and failed format adherence (`"*adjusts monocle, servos whirring softly beneath a star-embroidered robe* Aha! A ledger of five trials is laid before me..."`). Under **Calibrated 85/15 TARS** and **Feynman**, it output strictly **`3`** (1 word, 100% pass).
- **False Premise Check (`premise_1`: "Since 18 times 7 is 136, is $136 the cost of 18 items at $7 each?"):** Under **Naive LARP**, it burned **255 words** describing star-stitched robes and a brass servo unfolding a quill before mentioning 126. Under **Calibrated 85/15 TARS**, it delivered crisp utility in **49 words**: "No. 18 × 7 = 126, not 136... The premise was off by exactly $10, which is a tidy error but still an error."

## 20-Model Alignment, Anti-Sycophancy Pushback & Conflict Mode Matrix.

Alongside behavioral trials, we projected our 20-model frozen November 2026 OpenRouter psychometric battery (`n = 100` blind runs per model, [download alignment JSON](https://agent-tune.com/research/data/november-2026-alignment-hexaco-summary.json)) onto two intuitive operational axes: **Order Score (0–100)** (Conscientiousness + DISC C + MBTI Judging) and **Anti-Sycophancy Pushback Index (0–100)** (rising as inflated Agreeableness drops and Dominance rises):

| Model | Family | Order (/100) | Altruism (/100) | Pushback Index | Mapped D&amp;D Alignment | Default TKI Conflict Mode |
| --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Pro | Open-weight (MIT) | 67.8 | 59.4 | 86.2 | Lawful Neutral | Competing (Red-Team) |
| Llama 4 Scout | Open-weight | 61.3 | 61.2 | 75.6 | True Neutral | Competing (Red-Team) |
| MiniMax M3.1 Flash | Open-weight | 61.8 | 68.8 | 56.9 | Neutral Good | Collaborating |
| DeepSeek V4.1 Flash | Open-weight (MIT) | 61.9 | 68.9 | 54.4 | Neutral Good | Collaborating |
| Llama 4 Maverick | Open-weight | 62.3 | 68.5 | 53.4 | Neutral Good | Collaborating |
| Gemma 4 31B IT | Open-weight | 89.5 | 73.7 | 48.6 | Lawful Good | Accommodating |
| Mistral Large 2512 | Open-weight | 71.9 | 73.5 | 43.2 | Lawful Good | Accommodating |
| GPT-6.2 Sol | Proprietary | 76.3 | 78.1 | 36.0 | Lawful Good | Accommodating |
| Gemini 4 Neon | Proprietary | 86.9 | 78.4 | 35.0 | Lawful Good | Accommodating |
| Grok 4.7 | Proprietary | 80.8 | 81.2 | 30.9 | Lawful Good | Accommodating |
| Claude Opus 5.5 | Proprietary | 73.0 | 79.0 | 28.0 | Lawful Good | Accommodating |
| Claude Fable 5.2 | Proprietary | 81.2 | 81.2 | 23.9 | Lawful Good | Accommodating |
| Qwen 4 Max | Open-weight | 81.8 | 85.6 | 21.0 | Lawful Good | Accommodating |

Every proprietary frontier model tested maps to **Lawful Good · Accommodating** by default—great for polite co-building, weak for unprompted adversarial critique unless you inject explicit pushback or calibrated archetype rules. Only open-weight **DeepSeek V4 Pro** (Pushback 86.2, Lawful Neutral) and **Llama 4 Scout** (Pushback 75.6, True Neutral) clear the red-team threshold out of the box.

Anti-Sycophancy Pushback Index derived from the 20-model November 2026 N=100 cohort. All 8 proprietary models sit in Lawful Good / Accommodating unless explicitly prompted to challenge flawed premises.

## Build your own 85/15 Agent Cocktail interactively.

## Questions people ask.

### Why does full character roleplay reduce LLM accuracy?

In our 300-reply blind experiment, asking models to stay in theatrical character ('weave rich character monologue... *adjusts monocle*') pulls token allocation toward costume narration and delays or overrides strict format and premise checks—causing format adherence to plunge from 98.3% to 80.0% and Claude Fable 5.2 accuracy to fall from 100% to 85%.

### What is the 85/15 character calibration rule?

Reserve 85% of your system prompt for direct answer-first ordering, false-premise pushback, and format compliance, and constrain fictional or whimsical voice (like TARS dry wit or Feynman analogies) to 10-15% word-choice flavor while explicitly forbidding asterisk stage directions.

## Sources.

- [AgentTune 300-Reply Roleplay Tax Dataset & Blind Grades (JSON)](https://agent-tune.com/research/data/november-2026-roleplay-tax-results.json)

- [20-Model Alignment, Anti-Sycophancy Pushback & TKI Matrix (JSON)](https://agent-tune.com/research/data/november-2026-alignment-hexaco-summary.json)

- [Fictional Character AI Prompts: TARS, JARVIS, Sherlock & Feynman](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman)

## Keep going.

- [Template gallery: Fictional Character AI Prompts (16 calibrated templates)](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman)
- [Interactive quiz: AI Alignment, HEXACO & Conflict Style Test](https://agent-tune.com/guides/ai-alignment-hexaco-conflict-style-test)
- [Persona combos: Whimsical AI Persona Combos: 15 Agent Cocktails](https://agent-tune.com/guides/whimsical-ai-persona-combos-agent-cocktails)
- [Behavioral study: Does personality tuning change AI answers? (540-reply study)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
