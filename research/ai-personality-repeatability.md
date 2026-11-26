Source: https://agent-tune.com/research/ai-personality-repeatability
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Does a stable result mean a stable AI personality?

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/research/ai-personality-repeatability.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

A model can get the exact same personality label 100 times in a row while changing dozens of individual answers underneath.

**Summary:** All 400 fresh Attachment runs scored Secure, yet the four models produced 90, 100, 79, and 96 different answer sheets out of 100. A steady label often hides shifting individual answers.

## Three ways to measure repeatability

2,000

Audited Runs

Unique answer vectors vs. final type labels across 4 models.

100 / 100

GPT-6 Sol Vector

Every Sol Big Five run had unique item answers yet 100% Secure.

7 / 100

Opus 5.5 DISC

Only 7 distinct answer sheets across 100 independent DISC sessions.

46 vs 45

Astra Margin Flip

Tiny item swings flipped ISTJ vs INTJ nearly 50/50 in Sept.

Because a broad category covers a wide range of scores, a model's final label can stay 100% constant even when its underlying answers change on almost every run.

## How many unique answer sheets did each model produce?

| Model | MBTI | Big Five | DISC | Enneagram | Attachment |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 99 | 100 | 58 | 93 | 90 |
| GPT-6 Sol | 100 | 100 | 66 | 100 | 100 |
| Claude Opus 5.5 | 76 | 38 | 7 | 54 | 79 |
| Claude Fable 5.1 | 80 | 66 | 10 | 82 | 96 |

Each cell shows how many unique answer sheets appeared across 100 fresh runs. Shorter tests like DISC (16 questions) naturally repeat exact answer sheets more often than longer tests like the Big Five (50 questions).

> **Chart — Unique Answer Sheets Generated Across 100 Fresh Sessions (Out of 100):** Number of distinct item-response vectors produced in 100 fresh runs across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1. GPT-6 Astra: MBTI (32 items) 99, Big Five (50) 100, DISC (16) 58, Enneagram (36) 93, Attachment (36) 90; GPT-6 Sol: MBTI (32 items) 100, Big Five (50) 100, DISC (16) 66, Enneagram (36) 100, Attachment (36) 100; Claude Opus 5.5: MBTI (32 items) 76, Big Five (50) 38, DISC (16) 7, Enneagram (36) 54, Attachment (36) 79; Claude Fable 5.1: MBTI (32 items) 80, Big Five (50) 66, DISC (16) 10, Enneagram (36) 82, Attachment (36) 96.

Distinct answer vectors out of 100 runs. Opus 5.5 produced only 7 distinct 16-item DISC vectors across 100 runs (while still scoring 100% Secure on Attachment with 79 distinct answer sheets).

## On DISC, Opus 5.5 gave the exact same 16 answers 60 times

Across 100 DISC runs, Claude Opus 5.5 produced only 7 distinct answer sheets—and its single most common answer sheet appeared 60 times. Claude Fable 5.1 produced 10 distinct DISC sheets (top sheet: 45 times), while GPT-6 Sol produced 66 distinct sheets (top sheet: 8 times).

Remember that Opus and Fable took one hidden-name test per session, while Astra and Sol took all five named tests inside one Codex session. Both prompt style and sampling settings affect how much answers vary.

## 100% Secure labels, but up to 100 different answer sheets

Every single run across all four models (400/400) landed in the `Secure` Attachment quadrant. Yet GPT-6 Sol gave a different set of 36 answers on all 100 runs, Fable gave 96 unique sheets, Astra gave 90, and Opus gave 79. Any anxiety and avoidance averages below 4.00 get bucketed into `Secure`.

On MBTI, keeping tied axes open shows 98 resolved `INTJ` runs for Fable vs. 45 resolved `ISTJ` and 19 resolved `INTJ` runs for Astra ([see our tie-breaking study](https://agent-tune.com/research/ai-mbti-tie-breaking)).

## Why averages need standard deviations beside them

GPT-6 Sol’s Neuroticism score averaged 20.05 out of 50 with a standard deviation of **5.35 points** from run to run. Its Agreeableness score averaged 44.99 with a standard deviation of just **1.01 points**. Looking only at the average hides which traits bounce around between sessions.

## How to test whether your AI is consistent on real work

Survey repeatability doesn't prove a model will follow your instructions on real tasks. To test real consistency, run the same task prompt 5–10 times in fresh chats and check observable rules: Did it put the conclusion first? Did it challenge a flawed assumption? Did it stay under your word limit? [Download the 20-row repeatability CSV](https://agent-tune.com/research/data/ai-repeatability.csv) to inspect all counts from this study.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: A controlled prompt-comparison protocol](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)
- [Continue reading: Where Claude’s answers differ](https://agent-tune.com/research/opus-vs-fable-question-level)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
