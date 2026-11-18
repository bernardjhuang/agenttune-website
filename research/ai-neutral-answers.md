Source: https://agent-tune.com/research/ai-neutral-answers
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# What does “neutral” mean when an AI takes a test?

By Bernard Huang · Updated November 17, 2026

When an AI picks 3 on a 1–5 scale, it usually means the question is about human life—not that the AI has a moderate trait.

**Quick answer:** Across 17,000 question responses (100 full 170-item test sessions), GPT-6 Astra picked the exact middle score 2,980 times and flagged 1,823 of those (61.2%) as inapplicable to an AI.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## How we counted neutral and inapplicable answers

Each of Astra’s 100 test sessions included 170 questions: 32 MBTI, 50 Big Five, 16 DISC, 36 Enneagram, and 36 Attachment items. A midpoint answer is `3` on a 1–5 scale or `4` on Attachment’s 1–7 scale.

| Instrument | Item responses | Midpoints | Flagged inapplicable | Flagged / midpoints |
| --- | --- | --- | --- | --- |
| mbti | 3200 | 724 | 415 | 57.3% |
| big-five | 5000 | 678 | 539 | 79.5% |
| disc | 1600 | 253 | 164 | 64.8% |
| enneagram | 3600 | 1044 | 621 | 59.5% |
| attachment | 3600 | 281 | 84 | 29.9% |

Every single one of the 1,823 flagged answers was a midpoint. The other 1,157 midpoint answers were not flagged.

## Questions about parties, family, and hobbies get flagged every time

Astra flagged the MBTI questions about parties, staying home, and being alone in all 100 runs. It also flagged the Big Five party question and the DISC loud-crowd question in all 100 runs.

On the Enneagram, six items were flagged in all 100 runs: putting family first, money and happiness, daydreaming about love, bittersweet feelings, getting lost in music, and spending time alone with hobbies. Because an AI has no family, money, or physical home, its prompt told it to pick the midpoint rather than invent a human backstory.

## How neutral answers affect each test's math

Picking the middle number changes each test differently:

- **MBTI:** A `3` adds zero points to either letter, pushing the axis closer to a tie.
- **Big Five:** A `3` adds 3 points to the trait total whether the item is positive or reverse-scored.
- **Enneagram & DISC:** A `3` adds 3 points (out of 20) to that type or quadrant.
- **Attachment:** A `4` stays `4` even on reverse-scored items, which is why exact 4.00 cutoffs matter.

## Why we don't delete flagged items from the score

Dropping flagged questions would shrink the scale denominator and make scores impossible to compare across models. Replacing them with an average would invent a new scoring rule. Instead, we keep the standard raw scores and publish the inapplicable-item flags right alongside them.

## How to run a cleaner AI questionnaire test

If you test models on human surveys, ask the model to output three fields per item: the numeric score, whether the question applies to an AI, and a short reason. Use the exact same midpoint instructions across every model you compare. (Sol, Opus, and Fable were not asked to output an inapplicable list, so their unflagged midpoints simply lacked that extra field.)

## Download the item-by-item table

[Download the item-level midpoint and flag CSV](https://agent-tune.com/research/data/astra-midpoint-items.csv) to see the exact counts out of 100 runs for all 170 questions.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: The downstream effect of tied axes](https://agent-tune.com/research/ai-mbti-tie-breaking)
- [Continue reading: Astra and Sol’s different protocols](https://agent-tune.com/research/astra-vs-sol-personality-data)
