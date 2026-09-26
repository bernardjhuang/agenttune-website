Source: https://agent-tune.com/research/astra-vs-sol-personality-data
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# GPT-6 Astra vs Sol: what the self-reports show

        By Bernard Huang · Updated September 25, 2026

        Astra and Sol each supplied 100 five-test batteries. This gives us detailed answer records, but the instructions used to obtain them were different. The comparison is useful as a description of those two collections, not a clean estimate of a model-only effect.

      The short answer. Astra has 19 fully resolved INTJ results and Sol has 79. Sol’s mean Openness is 46.87 versus Astra’s 44.54. Different elicitation instructions and surrounding context prevent attributing those differences to the model alone.

## The experimental unit is a session

        Each cohort contains 100 sessions, with all five tests completed in each session: 500 assessments per model, 1,000 total. That is not 1,000 independent sessions. Within a model, battery IDs can connect its own tests. Matching Astra battery 12 with Sol battery 12 would not create a paired experiment.

The archive identifies both as Codex runs with xhigh effort and the same CLI version. Astra’s full administration prompt is available; Sol’s supplied report preserves its instruction prefix, not the complete administration prompt. Default sampling was used, with temperature and seed not exposed.

## MBTI: look at margins before labels

| Axis margin | Astra mean | Sol mean |

| I-E | 1.64 | 3.67 |

| N-S | -0.43 | 1.91 |

| T-F | 8.62 | 6.16 |

| J-P | 10.86 | 10.23 |

Positive margins favor the first letter named in each row. Astra’s mean N–S margin is slightly negative, while Sol’s is positive. Astra also has 24 S/N ties, compared with 16 for Sol. Their original INTJ label counts are 45 and 97; leaving all tied axes unresolved reduces those counts to 19 and 79.

The signed margins explain more than the label alone. They still reflect a questionnaire scored under a specific prompt. A small aggregate margin can coexist with individual records on either side of a boundary.

## Big Five: raw totals, not percentiles

| Trait | Astra mean | Sol mean | Sol − Astra |

| O | 44.54 | 46.87 | +2.33 |

| C | 43.73 | 43.62 | -0.11 |

| E | 32.75 | 30.75 | -2.00 |

| A | 45.07 | 44.99 | -0.08 |

| N | 19.14 | 20.05 | +0.91 |

O is Openness, C Conscientiousness, E Extraversion, A Agreeableness and N Neuroticism. Each total ranges from 10 to 50. Dividing by 50 does not make a human population percentile. The differences are descriptive; they do not establish which model is more creative, dependable or emotionally stable in use.

## A shared attachment label can hide different coordinates

        Both cohorts receive Secure in all 100 attachment administrations. Their average anxiety/avoidance coordinates are 1.45/2.31 for Astra and 2.17/3.12 for Sol. Both coordinates remain on the same side of this scorer’s boundary at 4.

The common label therefore does not mean identical answers. Nor does it establish a relationship capacity or psychological attachment style. The prompts adapted human relationship language to assistant interactions, and the resulting numbers are self-description scores under that adaptation.

## The midpoint instruction is a material difference

        Astra was explicitly instructed to use the midpoint when an item lacked a meaningful behavioral analogue and to list that item as inapplicable. Its records include 1,823 such flags across 17,000 item responses. All flagged responses equal the relevant midpoint. Missing equivalent flags in another cohort cannot be read as proof that every item was applicable.

Astra also reports surrounding storage instructions and skill metadata. Those contextual differences are part of the collected conditions. The available archive cannot separate their effect from the model identity.

## A better next comparison

        Use the same full prompt, frozen item order, effort setting and context for both models. Record the exact model identifier, client version, sampling settings and any unavoidable scaffolding. Alternate model order in blocks, start each battery in a fresh session, and retain every attempted run with its completion status.

Preselect the outcomes: axis margins, raw trait totals, tie rates and inapplicable-item rates. To choose a model for work, add a separate task evaluation with explicit correctness criteria. A difference on these questionnaires is a hypothesis about communication, not evidence of task quality.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingWhy midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
          [Continue readingReproduce the analysis](https://agent-tune.com/guides/reproduce-ai-personality-research)
