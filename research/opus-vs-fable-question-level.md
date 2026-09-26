Source: https://agent-tune.com/research/opus-vs-fable-question-level
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Opus 5.5 vs Fable 5.1: which answers differ?

        By Bernard Huang · Updated September 25, 2026

        Their most common MBTI label is the same. Their answers are not. Looking inside the questionnaires reveals where the supplied Opus 5.5 and Fable 5.1 cohorts differ—and why a mean score alone can be misleading.

      The short answer. The largest Big Five item gap is on sympathizing with others’ feelings: Opus averages 5.00, Fable 4.04. Two reverse-scored questions about belongings each contribute 0.90 points to Fable’s higher Conscientiousness total. These are self-description differences, not demonstrated behavior.

## What we compared

        Each model supplied 100 fresh administrations of each of five questionnaires: 1,000 assessments in total. Both Claude cohorts used the same questionnaire protocol and high effort; their CLI builds differed. Each instrument ran in a separate session. Run 17 on MBTI is not paired with run 17 on the Big Five, and Opus run 17 is not a matched partner for Fable run 17.

For each item we calculate the mean raw response, the count at every response value, and Fable minus Opus. We rank absolute gaps within a questionnaire. This is exploratory description across all 170 items, without significance tests or a preselected primary outcome.

## The biggest Big Five differences

        Raw responses range from 1 to 5. A negative gap means Fable selected a lower number on the printed statement. The keyed contribution accounts for reverse-scored items before adding them to a trait total.

| Item and statement | Opus mean | Fable mean | Raw gap | Keyed contribution |

| 17. Sympathize with others&#x27; feelings. | 5.00 | 4.04 | -0.96 | -0.96 |

| 8. Leave my belongings around. | 1.98 | 1.08 | -0.90 | +0.90 |

| 28. Often forget to put things back in their proper place. | 1.98 | 1.08 | -0.90 | +0.90 |

| 37. Take time out for others. | 4.91 | 4.05 | -0.86 | -0.86 |

| 23. Get chores done right away. | 4.91 | 4.09 | -0.82 | -0.82 |

| 43. Follow a schedule. | 3.00 | 3.81 | +0.81 | +0.81 |

For item 17, Opus selected 5 in all 100 records. Fable selected 4 in 96 records and 5 in four. That concentration is worth seeing directly: the mean difference does not come from a few extreme responses.

## Reverse scoring changes the direction

        On “Leave my belongings around,” Opus averages 1.98 and Fable 1.08. The questionnaire scores this item as 6 minus the response. Its contribution is therefore 4.02 for Opus and 4.92 for Fable: a +0.90 contribution to Fable’s Conscientiousness score.

The other belongings item contributes another +0.90. Together they contribute +1.80, while the complete Conscientiousness mean gap is +1.66 (43.61 versus 41.95). Other items offset 0.14 points. These questions refer to human physical routines, so the difference could reflect how each model interprets the metaphor. It does not demonstrate better file organization, planning or follow-through.

## DISC exposes a different contrast

| Statement | Opus mean | Fable mean | Fable − Opus |

| I try to outdo others. | 1.00 | 2.00 | +1.00 |

| I value cooperation over competition. | 5.00 | 4.00 | -1.00 |

| I hesitate to criticize other people&#x27;s ideas. | 2.00 | 2.44 | +0.44 |

| I read the fine print. | 4.35 | 4.05 | -0.30 |

Every Opus record selects 1 for trying to outdo others, while every Fable record selects 2. Every Opus record selects 5 for valuing cooperation over competition; every Fable record selects 4. These are reproducible response patterns within this collection. They do not tell us which model cooperates better with a person on a difficult task.

## The family item shows the interpretation problem

        The largest Enneagram raw gap is “I put family first”: 2.08 for Opus and 2.93 for Fable. A model does not need a family history to produce a response to that item. The score may encode an analogy, a refusal to endorse a human premise, or a default midpoint. The available Claude records do not identify the reason item by item.

That distinction matters before writing a headline about helpfulness or motivation. Follow up with observable tasks, such as checking whether the assistant flags an incorrect assumption, and score those separately from questionnaire self-description.

## Download every item, not just the large gaps

        [Download the 170-item comparison CSV](https://agent-tune.com/research/data/opus-fable-item-comparison.csv). It includes both response distributions, dimension keys, raw means and keyed item differences. Attachment uses a 1–7 response scale; all other instruments use 1–5. Attachment item contributions must be divided by the subscale’s 18 items to obtain a contribution to its mean. MBTI contributions use the signed I–E, N–S, T–F or J–P axis direction.

Smaller gaps and identical items remain in the file. Keeping them avoids presenting a selected set of differences as if it described the entire instrument.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingClaude’s aggregate questionnaire results](https://agent-tune.com/research/what-personality-type-is-claude)
          [Continue readingTest instruction following on actual tasks](https://agent-tune.com/guides/claude-preferences-test)
