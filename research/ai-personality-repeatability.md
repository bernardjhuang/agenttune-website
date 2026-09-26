Source: https://agent-tune.com/research/ai-personality-repeatability
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Does a stable result mean a stable AI personality?

        By Bernard Huang · Updated September 25, 2026

        A result can repeat while the underlying answers change. Conversely, identical answers can reflect a constrained prompt rather than an enduring trait. The September archive lets us separate answer repetition, score variation and label stability.

      The short answer. All 400 attachment records receive Secure, yet the four cohorts contain 90, 100, 79 and 96 unique attachment answer vectors. A stable category is not proof of stable answers—or of a validated personality construct.

## Three different meanings of repeatable

        Vector repetition asks whether every response in an instrument is identical to another administration. Score stability asks how much the derived numbers vary. Label stability asks how often a category repeats. A coarse label can stay fixed while dozens of underlying answers change.

We counted all supplied fresh-session records, including identical vectors. A duplicate answer vector is not automatically a duplicate collection event. Removing repeats would bias a study whose question is precisely how often answers repeat. The separate duplicated Astra source reports were already deduplicated during ingestion; these are different issues.

## How many answer vectors were distinct?

| Model | MBTI | Big Five | DISC | Enneagram | Attachment |

| GPT-6 Astra | 99 | 100 | 58 | 93 | 90 |

| GPT-6 Sol | 100 | 100 | 66 | 100 | 100 |

| Claude Opus 5.5 | 76 | 38 | 7 | 54 | 79 |

| Claude Fable 5.1 | 80 | 66 | 10 | 82 | 96 |

Each cell is the number of distinct complete answer arrays among 100 administrations of that instrument. Instruments have different lengths and item structures, so a 16-item DISC vector has fewer opportunities to differ than a 50-item Big Five vector. Do not turn this table into a model reliability ranking.

## Seven DISC vectors, but one appears 60 times

        Opus has seven distinct DISC answer vectors; its most frequent vector appears in 60 of 100 administrations. Fable has 10 distinct DISC vectors, with its most frequent appearing 45 times. Sol has 66, with its most frequent appearing eight times.

Those differences describe the collected answer distributions. Claude’s per-instrument sessions and the Codex five-test batteries differ in context, prompts and orchestration. Fresh sessions reduce conversation carryover, but do not establish statistical independence or a cause for the amount of variation.

## A constant label can conceal substantial variation

        All attachment records in these four cohorts receive Secure under this implementation. Yet Sol has a different attachment vector in every administration. Astra has 90 unique vectors, Opus 79 and Fable 96. The Secure category covers a range of coordinates below or equal to the scorer’s anxiety and avoidance thresholds.

For MBTI, we report tie-preserving patterns instead of silently assigning a side. Fable’s most frequent pattern is INTJ in 98 records; Astra’s is ISTJ in 45. A comparison using legacy tie-broken labels would give different stability counts even though the answers were unchanged.

## Score variation needs units

        Sol’s Neuroticism raw total has a sample standard deviation of 5.35 points on a 10–50 scale. Its Agreeableness standard deviation is 1.01 points on the same scale. A score’s mean alone hides this difference in variation.

Standard deviation describes dispersion of the recorded totals; it is not a margin of error for a population claim. This collection did not establish the assumptions needed to generalize to every future session, product update or prompting context.

## What would establish behavioral consistency?

        Repeat a set of real tasks under a fixed configuration, define observable outcomes before collecting replies, and retain failures as well as successes. For example, measure factual correctness, whether an unsupported premise is challenged, and whether a requested length limit is respected. Evaluate those outcomes separately.

Then change one factor at a time: model version, prompt wording, context length or installed preference. Replicate on a later date. Questionnaire repetition can motivate that experiment, but cannot substitute for it. [Download the 20-row repeatability table](https://agent-tune.com/research/data/ai-repeatability.csv) for the counts and modal patterns used here.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingA controlled prompt-comparison protocol](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
          [Continue readingWhere Claude’s answers differ](https://agent-tune.com/research/opus-vs-fable-question-level)
