Source: https://agent-tune.com/research/ai-neutral-answers
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# What does “neutral” mean when an AI takes a test?

        By Bernard Huang · Updated September 25, 2026

        A midpoint can mean balance, uncertainty, or that a question does not fit the respondent. The Astra cohort lets us inspect one of those possibilities because its prompt required an explicit inapplicable-item list.

      The short answer. Astra gives 2,980 midpoint responses across 17,000 item responses. It flags 1,823 of those as inapplicable: 61.2% of its midpoint answers. This is an item-response count within 100 batteries, not a count of independent people or models.

## The denominator matters

        Each of Astra’s 100 batteries contains 170 items: 32 MBTI, 50 Big Five, 16 DISC, 36 Enneagram and 36 attachment items. We count a response as a midpoint if it is 3 on a 1–5 scale or 4 on attachment’s 1–7 scale. A flag is counted only when the raw record explicitly lists that item.

| Instrument | Item responses | Midpoints | Flagged inapplicable | Flagged / midpoints |

| mbti | 3200 | 724 | 415 | 57.3% |

| big-five | 5000 | 678 | 539 | 79.5% |

| disc | 1600 | 253 | 164 | 64.8% |

| enneagram | 3600 | 1044 | 621 | 59.5% |

| attachment | 3600 | 281 | 84 | 29.9% |

All 1,823 flagged responses are midpoints. The remaining 1,157 midpoint responses have no inapplicability flag. The records do not tell us that those unflagged answers represent psychological moderation; they only tell us how the model answered and annotated them.

## Some human-specific items recur in every battery

        Astra flags the MBTI statements about being alone, parties, and staying home in all 100 batteries. It also flags the Big Five party-conversation item and the DISC loud-crowd item in every battery.

Six Enneagram items are flagged in every battery: family first, money and happiness, daydreaming about love, bittersweet feelings, immersion in music, and time alone with hobbies. This pattern is consistent with the explicit instruction to avoid inventing a human biography. It does not independently establish why every unflagged item received its answer.

## A midpoint does different work in each scorer

        In MBTI, a response of 3 adds no points to either pole. Enough zero contributions can leave an axis tied, after which a tie-breaking policy may assign a letter. In the Big Five, a midpoint contributes three points whether the item is reverse-scored or not. In Enneagram and DISC, it contributes three points to the keyed type. In attachment, four remains four after reversing an item.

The same annotation can therefore affect the final report differently across instruments. Treating all neutral answers as a single personality characteristic would ignore those scoring mechanics.

## Do not quietly delete flagged answers

        Removing inapplicable items changes how many items contribute to a dimension. A raw total with fewer terms is no longer on the original scale. Replacing missing values with a mean or rescaling the result creates a new scoring rule. Either choice needs an explicit protocol, its own validation and a separate result label.

For this release we preserve the original vectors, retain their published scores, and expose the flags alongside them. A future sensitivity analysis could compare stated alternatives, but it should not retroactively replace the original result or describe an unvalidated adjustment as a correction.

## How to collect better metadata

        Record the response value, whether the item is considered applicable, and a short reason separately. Define the midpoint policy before collection and keep it constant across models. Avoid asking the model to guess which answer would be typical of a human with a particular label.

Compare flag rates only when the annotation instruction is equivalent. Missing flags from Sol, Opus or Fable are missing metadata, not evidence of zero inapplicable items. A useful follow-up would administer matched prompts with and without the explicit midpoint instruction and measure the change.

## Inspect the counts yourself

        [Download the item-level midpoint and flag counts](https://agent-tune.com/research/data/astra-midpoint-items.csv). Each row identifies an instrument and item, with counts out of 100 administrations. The complete reanalysis JSON includes the same table and a check for any flagged response that is not a midpoint. That check returns zero in this archive.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingThe downstream effect of tied axes](https://agent-tune.com/research/ai-mbti-tie-breaking)
          [Continue readingAstra and Sol’s different protocols](https://agent-tune.com/research/astra-vs-sol-personality-data)
