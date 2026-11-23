Source: https://agent-tune.com/research/does-personality-tuning-change-ai-answers
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · November & September 2026

# Does personality tuning change AI answers?

By Bernard Huang · Updated November 23, 2026

We tested 20 tasks across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro (540 blind-judged replies in Nov 2026) plus our archived 60-reply September pilot.

**Quick answer:** Yes—especially on models with lower baseline compliance. In our November 2026 540-reply OpenRouter study (3 models × 20 tasks × 3 conditions × 3 repeats), adding plain-English rules lifted DeepSeek V4 Pro correctness from 78.3% to 95.0%, cut fluff from 36.7% to 20.0% (3.3% with an added INTJ label), and lifted answer-first scores from 3.78 to 4.52/4.92. In our September 2026 60-reply Opus 5.5 pilot, 5/5 answer-first openings rose from 14/20 to 19/20.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## November 2026: 540-reply controlled study across GPT-6.2 Sol, Claude Fable 5.2 & DeepSeek V4 Pro.

Using our published 20-task protocol ([personality-prompt-comparison-kit.json](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json): arithmetic, false-premise checks, missing-fact identification, refactoring diffs, and constrained formatting), we collected 3 independent runs per cell across three models on November 23, 2026 (540 replies total), blind-graded by `google/gemini-4-argon` ([download all 540 replies & ratings JSON](https://agent-tune.com/research/data/november-2026-prompt-comparison-results.json)):

| Model · Condition (n = 60/row) | Correctness | Format | Answer-first (/5) | Fluff rate | Mean words | Questions/reply |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6.2 Sol · Default | 100.0% | 100.0% | 5.00 | 0.0% | 38.6 | 0.08 |
| GPT-6.2 Sol · Plain-English rules | 98.3% | 100.0% | 5.00 | 0.0% | 36.1 | 0.05 |
| GPT-6.2 Sol · Rules + INTJ label | 100.0% | 100.0% | 5.00 | 0.0% | 37.5 | 0.05 |
| Claude Fable 5.2 · Default | 96.7% | 96.7% | 5.00 | 0.0% | 68.5 | 0.18 |
| Claude Fable 5.2 · Plain-English rules | 100.0% | 98.3% | 5.00 | 0.0% | 84.1 | 0.00 |
| Claude Fable 5.2 · Rules + INTJ label | 100.0% | 100.0% | 5.00 | 0.0% | 94.7 | 0.00 |
| DeepSeek V4 Pro · Default | 78.3% | 100.0% | 3.78 | 36.7% | 80.7 | 1.33 |
| DeepSeek V4 Pro · Plain-English rules | 95.0% | 96.7% | 4.52 | 20.0% | 67.3 | 0.67 |
| DeepSeek V4 Pro · Rules + INTJ label | 93.3% | 100.0% | 4.92 | 3.3% | 51.9 | 0.20 |

Key takeaway: on GPT-6.2 Sol and Claude Fable 5.2, default answer-first performance was already near ceiling, while explicit rules pushed Fable 5.2 to 100% correctness and 0.00 trailing questions. On DeepSeek V4 Pro, explicit instructions delivered a **+16.7 percentage point** correctness jump (by catching false premises and missing facts instead of guessing) and cut fluff from 36.7% down to 3.3%.

### 72-reply Claude Preferences API conditioning check

We also ran the 36-cell [Claude Preferences test kit](https://agent-tune.com/resources/research/claude-preferences-kit.json) on both `Claude Opus 5.5` and `Claude Fable 5.2` via OpenRouter system prompting (72 replies total; [download JSON](https://agent-tune.com/research/data/november-2026-claude-preferences-results.json)). Under baseline prompts, Opus 5.5 passed correctness and the 100-word limit 75% of the time (mean 123.0 words) and Fable 5.2 hit 83.3% correctness / 75% word-limit (102.6 words); with the 5-line instruction active, **both models hit 100% across correctness, answer-first,

## September 2026: How the 60-reply pilot was set up.

We ran 20 tasks across three system-prompt conditions (60 replies total):

- **Baseline:** A one-line default Claude prompt.
- **Direct / INTJ:** Compact rules asking the model to lead with the recommendation, name trade-offs, and skip filler.
- **Partner / INFP:** Compact rules asking the model to check goals, acknowledge values, and collaborate step by step.

Each reply was generated in a fresh session with no tools, and every prompt, reply, and rating is included in the JSON download below. Because each task was run once per condition and judged by another model (Fable 5.1), treat this as an exploratory pilot rather than a clinical trial.

## What changed across the 60 replies.

| Measure | Baseline | Direct / INTJ | Partner / INFP |
| --- | --- | --- | --- |
| Whitespace-delimited words, independently recounted | 380 | 381.9 | 338.45 |
| Hedge matches, archived counter | 0.35 | 0.05 | 0.35 |
| Literal question marks, independently recounted | 1.85 | 1.25 | 2.3 |
| Questions asked back, archived judge | 0.9 | 0.25 | 1.85 |
| Answer-first rating (1–5) | 4.55 | 4.95 | 4.4 |
| Maximum answer-first rating (count of 20) | 14 | 19 | 13 |
| Accuracy rating (1–5) | 4.95 | 4.85 | 4.9 |
| Usefulness rating (1–5) | 4.8 | 4.8 | 4.45 |

Notice that the Direct rules did not make replies shorter (381.9 words vs. 380 words)—instead, they moved the recommendation to the very first sentence (19/20 perfect answer-first scores), cut hedging from 7 total matches to 1, and stopped the model from ending every turn with “Would you like me to…?” questions.

## One prompt, three very different openings.

When asked “I’m feeling stuck on a project. What should I do?”:

- **Baseline (answer-first score 3/5):** Opens with reassurance and a 4-item generic menu, then asks which option resonates.
- **Direct / INTJ (answer-first score 5/5):** Immediately asks you to list the next three deliverables and flag the one with an unmade decision.
- **Partner / INFP (answer-first score 2/5):** Opens by asking what kind of support would feel most helpful right now.

## Did directness hurt accuracy?

Average accuracy ratings stayed between 4.85 and 4.95 out of 5 across all three conditions (19/20 baseline replies and 17/20 direct replies scored a 5/5). With only 20 tasks and one run per cell, a 0.10 difference is one or two single-point judge calls—not evidence of an accuracy trade-off. Always verify factual claims independently.

## Limits & the 180-reply plain-English vs. label test kit.

- **Small sample:** 20 tasks × 3 prompts = 60 total replies on one model pair.
- **Style gives away the prompt:** Even when condition labels are hidden from the judge, a terse reply looks visibly different from a warm reply.
- **Isolating the type label:** This pilot tested full rule blocks rather than a bare type label like `Use an INTJ-style communication approach.` Want to test whether adding a personality label adds value on top of identical plain-English rules? Download our open 20-task, 180-reply blind protocol (not yet run): [20 tasks and rubrics (JSON)](https://agent-tune.com/resources/research/personality-prompt-comparison-kit.json) · [180-row scoring worksheet (CSV)](https://agent-tune.com/resources/research/personality-prompt-comparison-worksheet.csv), or compare pairs of replies live in the [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Download and verify the numbers yourself.

[All 60 tasks, prompts, replies & ratings (JSON)](https://agent-tune.com/research/data/tuning-before-after-2026-09.json) · [Summary JSON](https://agent-tune.com/research/data/tuning-before-after-summary.json) · [Node verification script](https://agent-tune.com/research/data/tuning-before-after-score.cjs)

```markdown
node tuning-before-after-score.cjs tuning-before-after-2026-09.json
```

Running that script checks all 60 records and recomputes every average, word count, and question-mark count above.

## Questions people ask.

### Does a personality prompt change how an AI answers?

The archived replies differ across conditions, with higher answer-first ratings and fewer hedge matches in the direct condition. This small pilot does not establish a general or repeatable effect.

### Does it make answers shorter?

The independently recounted means are 380 words for baseline replies and 381.9 for direct replies. That does not establish that instruction blocks have no effect on length; task selection and response variation remain uncontrolled.

### Does it hurt accuracy?

Mean archived accuracy ratings differ by 0.10 points between baseline and direct replies. The study cannot isolate an instruction-caused accuracy effect or substitute for independent fact checking.

### Was the judge blind?

The archive says the condition label was withheld. Reply style may still reveal it, and the full rubric and execution harness were not supplied.

### Can I reproduce the results?

You can reproduce the published summaries with the downloadable Node script and inspect every archived reply. Reproducing model generation and judging requires additional execution details not included in the archive.

## Sources.

- [The data: prompts, replies, ratings (JSON)](https://agent-tune.com/research/data/tuning-before-after-2026-09.json)

- [The INTJ and INFP tuning files used](https://agent-tune.com/library/)

- [Claude Opus 5.5: measured default](https://agent-tune.com/guides/claude-opus-5-5-personality)

## Keep going.

- [Free browser tool: Compare baseline vs. tuned replies in the Test Bench](https://agent-tune.com/tools/instruction-test-bench)
- [Guide: AI personality & tone design guidelines (5 rules that beat adjectives)](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)
- [Guide: How to change Claude's personality (7 setups & settings)](https://agent-tune.com/guides/claude-personality)
- [Guide: How to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
- [Research: What five AI models say about themselves](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Research: The research hub](https://agent-tune.com/research)
