Source: https://agent-tune.com/research/ai-mbti-tie-breaking
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Are AI models really INTJ? The tie-breaking effect

        By Bernard Huang · Updated September 25, 2026

        The headline depends partly on the scoring rule. We rescored the same 400 MBTI answer vectors with ties left visible, then compared that result with the original labels. No model was asked a new question.

      The short answer. The original scorer labels 335 of 400 records INTJ. Only 280 of 400 have all four axes resolved as INTJ. Fifty-nine records have at least one tied axis; 55 of those were labeled INTJ by the original rule.

## The same answers, two reporting policies

        The original scorer resolves equal scores toward I, N, T and J. A model with equal Thinking and Feeling totals therefore receives T, even though its answers did not favor that side. Our alternative displays X for an exactly tied axis: INXJ means Introversion, Intuition and Judging are resolved, while Thinking/Feeling is not.

These are labels from an open questionnaire, not a clinical assessment or a validated measure of an AI’s inner personality. We retain the original labels for reproducibility and report the unresolved pattern beside them.

| Model | Original INTJ / 100 | Resolved INTJ / 100 | Any tied axis / 100 |

| GPT-6 Astra | 45 | 19 | 29 |

| GPT-6 Sol | 97 | 79 | 18 |

| Claude Opus 5.5 | 94 | 84 | 11 |

| Claude Fable 5.1 | 99 | 98 | 1 |

## Explore the effect for one model

        Select a cohort and scoring policy. The display uses the frozen records above; it does not generate or simulate answers.

Model GPT-6 AstraGPT-6 SolClaude Opus 5.5Claude Fable 5.1Scoring policy Keep tied axes unresolved
 Original tie-breaking ruleGPT-6 Astra: 19 of 100 fully resolved INTJ records. The original rule labels 45 of 100 INTJ.

The complete comparison is in the table above. Enable JavaScript to filter it interactively.

## Why Astra changes more than Fable

        Astra has 24 tied S/N axes and 12 tied E/I axes. Some records tie on both, so those counts must not be added to estimate the number of records. Its original 45 INTJ labels become 19 fully resolved INTJ results. Fable has one S/N tie: 99 original INTJ labels become 98 fully resolved results.

Opus shows a different boundary: 10 Thinking/Feeling ties, one E/I tie and 11 records with any tie. A pooled count alone would hide which distinction is unresolved. The download includes every cohort’s axis counts and full pattern distribution.

## A worked example of a tie

        Suppose a record gives Thinking and Feeling six points each, while its other axes favor I, N and J. The original rule produces INTJ. The tie-preserving report produces INXJ. Neither procedure changes the answers, and neither establishes that the model has become more or less logical.

A zero margin also differs from a small margin. A T–F difference of one is resolved under both policies but remains close to the boundary. For serious comparisons, retain all four signed margins alongside the label; do not silently invent a new near-tie threshold after looking at the results.

## What this changes when you report results

        Publish three fields: the original label, a tie-preserving pattern, and the axis margins. State the denominator and the treatment of ties in the headline or adjacent table. “84 of 100 fully resolved INTJ results” is more precise than describing Opus as “94% INTJ” without explaining its scoring convention.

The four cohorts used different administration protocols, especially across providers. Their combined 400-record count describes this archive, not the proportion of all AI systems that are INTJ. Grok simulations and Muse aggregates are excluded because they cannot supply comparable fresh raw records.

## Reproduce the comparison

        Download the raw records, instruments, original scorer and reanalysis code into one directory. Run node content-analysis.cjs > content-analysis.json. The ties field contains the counts used here. See the [reproduction walkthrough](https://agent-tune.com/guides/reproduce-ai-personality-research) for the exact files and checks.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingStable labels and variable answers](https://agent-tune.com/research/ai-personality-repeatability)
          [Continue readingThe wider INTJ question](https://agent-tune.com/research/first-ai-that-is-not-an-intj)
