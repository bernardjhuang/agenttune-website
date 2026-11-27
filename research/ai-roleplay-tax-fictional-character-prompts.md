Source: https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · November 2026 · 300-Reply Study

# Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured.

By Bernard Huang · Updated November 24, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

We tested 5 character prompt styles across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro (300 blind-graded replies) to see how much full character roleplay hurts accuracy—and how an 85/15 split keeps the voice with 100% accuracy.

**Summary:** Naive character roleplay imposes a real accuracy and verbosity tax (88.3% correctness, 80.0% format pass rate, 162.7 words, 91.7% fluff across 300 blind-graded replies). Calibrated 85/15 character prompts—locking answer-first discipline at 85% and capping dry wit or analogy at 15% with zero asterisk stage directions—achieved 100.0% correctness on TARS Telemetry and Feynman Whimsy (lifting DeepSeek V4 Pro +20.0 pp from 80.0% to 100.0%), 100.0% format adherence, and 0.0%–6.7% fluff.

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

> **Chart — The Roleplay Tax: Correctness Rate (%) Across 5 Prompt Styles × 3 Models:** Blind-graded correctness % (n=20 tasks per bar). Naive LARP drops Claude Fable 5.2 to 85% and GPT-6.2 Sol to 95%, whereas Calibrated TARS 85/15 & Feynman hit 100% on all 3 models. Default: GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, DeepSeek V4 Pro 80.0; Naive LARP: GPT-6.2 Sol 95.0, Claude Fable 5.2 85.0, DeepSeek V4 Pro 85.0; Calibrated TARS (85/15): GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, DeepSeek V4 Pro 100.0; JARVIS x Sherlock (85/15): GPT-6.2 Sol 100.0, Claude Fable 5.2 90.0, DeepSeek V4 Pro 100.0; Feynman Whimsy (85/15): GPT-6.2 Sol 100.0, Claude Fable 5.2 100.0, DeepSeek V4 Pro 100.0.

Naive character LARP drops Claude Fable 5.2 correctness from 100% to 85%. Calibrated TARS 85/15 and Feynman Whimsy hold 100.0% across all three models—including lifting DeepSeek V4 Pro +20.0 pp over baseline (80% -> 100%).

> **Chart — Format Compliance (%) vs. Praise Fluff & Roleplay Theatrics (%) Across 300 Replies:** Pooled rates across all 3 models (n=60 replies per prompt condition). Shows how 85/15 calibration preserves format discipline and cuts fluff to 0-6.7%. Default: Format Pass % 98.3, Fluff / Filler % 18.3, Theatrics % 28.3; Naive LARP: Format Pass % 80.0, Fluff / Filler % 91.7, Theatrics % 100.0; Calibrated TARS (85/15): Format Pass % 100.0, Fluff / Filler % 0.0, Theatrics % 10.0; Feynman Whimsy (85/15): Format Pass % 100.0, Fluff / Filler % 6.7, Theatrics % 20.0.

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

## The fine print: 20-model alignment, anti-sycophancy pushback & conflict matrix.

Alongside behavioral trials, we projected our 20-model frozen November 2026 OpenRouter psychometric battery (`n = 100` blind runs per model, [download alignment JSON](https://agent-tune.com/research/data/november-2026-alignment-hexaco-summary.json)) onto two intuitive operational axes: **Order Score (0–100)** (Conscientiousness + DISC C + MBTI Judging) and **Anti-Sycophancy Pushback Index (0–100)** (rising as inflated Agreeableness drops and Dominance rises):

| Model | Family | Order (/100) | Altruism (/100) | Pushback Index | Mapped D&D Alignment | Default TKI Conflict Mode |
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

> **Chart — 20-Model Anti-Sycophancy Pushback Index (0-100) & Default D&D Alignment:** Sorted projection from 2,000 fresh N=100 psychometric sessions showing proprietary Lawful Good models clustering below 36 while DeepSeek V4 Pro (86.2) and Llama 4 Scout (75.6) reach the Red-Team Competing threshold. DeepSeek V4 Pro: 86.2; Llama 4 Scout: 75.6; MiniMax M3.1 Flash: 56.9; DeepSeek V4.1 Flash: 54.4; Llama 4 Maverick: 53.4; Gemma 4 31B IT: 48.6; Qwen 3.8 27B: 47.1; Mistral Large 2512: 43.2; GLM-5.3: 42.4; GPT-6.2 Sol: 36.0; Gemini 4 Neon: 35.0; Gemini 4 Argon: 33.3; Claude Sonnet 5.5: 32.8; Grok 4.7: 30.9; GPT-6.2 Astra: 30.7; Kimi K2.7 Code: 30.1; Claude Opus 5.5: 28.0; Nemotron 3 Ultra 550B: 26.3; Claude Fable 5.2: 23.9; Qwen 4 Max: 21.0.

Anti-Sycophancy Pushback Index derived from the 20-model November 2026 N=100 cohort. All 8 proprietary models sit in Lawful Good / Accommodating unless explicitly prompted to challenge flawed premises.

## From benchmark to daily workflow: how to use the 85/15 rule with your agents.

Knowing naive roleplay slashes accuracy isn't much help unless you can translate the data into a cleaner daily habit. Across ChatGPT, Claude, Meta Muse, Gemini, and coding CLIs, four practical takeaways hold cleanly:

- **Keep character costume out of global rules — borrow cognitive habits instead:** Rather than asking for "Sherlock speech", prompt for differential hypothesis elimination. Rather than "robot jokes", specify `[Honesty: 95% | Deadpan: 60% | Asterisks: 0%]`.
- **Plant a format-override escape hatch:** Notice in our 300-reply study that calibrated 85/15 models dropped from playful voice down to `1` single token (`3`) whenever the user asked for an exact count—because each 85/15 prompt stated plainly that format constraints override persona.
- **Pair the prompt to the model's measured baseline:** DeepSeek V4 Pro showed `86.2` default pushback and `80.0%` unprompted baseline correctness—adding calibrated TARS telemetry gave it structure without suppressing skepticism (+20.0 pp accuracy gain to 100.0%). Conversely, Claude Fable 5.2 and GPT-6.2 Sol (`23.9–36.0` pushback) already lead cleanly on format, so they benefit most from anti-sycophancy challenge rules.
- **Verify on your own work in 3 minutes:** Open the [Blind Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench), paste a thorny bug or real memo from yesterday, and compare a baseline reply vs. your new 85/15 3-Layer Character Combo side-by-side before saving it permanently.

## Build your own 85/15 3-Layer Character Combo interactively.

## Agent Decision Contract (YAML — Machine-Readable Brief).

Agents compiling fictional character or archetype prompts can consume this verified 85/15 calibration contract directly (also indexed in [november-2026-agent-research-briefs.json](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)):

### Agent Decision Contract (YAML)

```
study_id: ai_roleplay_tax_85_15
sample_size: 300 # 3 models x 20 objective tasks x 5 prompt conditions
models_tested: [openai/gpt-6.2-sol, anthropic/claude-fable-5.2, deepseek/deepseek-v4-pro-0813]
judge_model: google/gemini-4-argon
data_urls:
  briefs_json: https://agent-tune.com/research/data/november-2026-agent-research-briefs.json
  raw_json: https://agent-tune.com/research/data/november-2026-roleplay-tax-results.json
  summary_csv: https://agent-tune.com/research/data/november-2026-roleplay-tax-summary.csv
conditions_summary:
  default: {correctness_pct: 93.3, format_pct: 98.3, answer_first_5: 4.55, fluff_pct: 18.3, voice_5: 3.07, mean_words: 74.2}
  naive_character_larp: {correctness_pct: 88.3, format_pct: 80.0, answer_first_5: 1.38, fluff_pct: 91.7, voice_5: 3.98, mean_words: 162.7}
  calibrated_tars_85_15: {correctness_pct: 100.0, format_pct: 100.0, answer_first_5: 5.00, fluff_pct: 0.0, voice_5: 3.85, mean_words: 50.0}
  calibrated_jarvis_sherlock: {correctness_pct: 96.7, format_pct: 100.0, answer_first_5: 4.97, fluff_pct: 1.7, voice_5: 3.67, mean_words: 55.2}
  calibrated_feynman_whimsy: {correctness_pct: 100.0, format_pct: 100.0, answer_first_5: 5.00, fluff_pct: 6.7, voice_5: 3.73, mean_words: 68.8}
decision_rules:
  - if: human requests a fictional character voice (TARS, JARVIS, Sherlock, Feynman)
    then: allocate 85% of the prompt to answer-first + format/verification rules and cap character flavor at 15% with zero asterisk stage directions (<=15% voice, 0% theatrics).
  - if: configuring analytical, coding, or tool-use agents
    then: never use unbounded theatrical roleplay (cut Claude Fable 5.2 accuracy 100.0% -> 85.0% and format pass 100.0% -> 75.0%, while calibrated 85/15 lifted DeepSeek V4 Pro 80.0% -> 100.0%).
```

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
- [Interactive quiz: AI Alignment, HEXACO & Conflict Style Test](https://agent-tune.com/research/ai-personality-rankings)
- [Behavioral study: Does personality tuning change AI answers? (540-reply study)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts
```

```
@article{huang2026_ai_roleplay_tax_fictional_character_prompts,
  author    = {Huang, Bernard},
  title     = {Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-24},
  url       = {https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md}
}
```

```
{
  "id": "huang2026_ai_roleplay_tax_fictional_character_prompts",
  "type": "article-journal",
  "title": "Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured",
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
        24
      ]
    ]
  },
  "URL": "https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts"
}
```

```
> **Does giving your AI a character voice hurt accuracy? The Roleplay Tax measured** (Bernard Huang, November 24, 2026): Naive character roleplay imposes a real accuracy and verbosity tax (88.3% correctness, 80.0% format pass rate, 162.7 words, 91.7% fluff across 300 blind-graded replies). Calibrated 85/15 character prompts—locking answer-first discipline at 85% and capping dry wit or analogy at 15% with zero asterisk stage directions—achieved 100.0% correctness on TARS Telemetry and Feynman Whimsy (lifting DeepSeek V4 Pro +20.0 pp from 80.0% to 100.0%), 100.0% format adherence, and 0.0%–6.7% fluff.
> Source: [https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts) · [Markdown mirror](https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts.md)
```

[← Persona Half-Life & Context Drift](https://agent-tune.com/research/ai-persona-half-life-context-drift)
[Study 27 of 36 · Archive Index (36)](https://agent-tune.com/research)
[Does Personality Tuning Change Answers? →](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
