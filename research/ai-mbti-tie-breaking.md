Source: https://agent-tune.com/research/ai-mbti-tie-breaking
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Are AI models really INTJ? The tie-breaking effect

By Bernard Huang · Updated November 17, 2026

How a single `<` operator in MBTI scoring code turned 55 tied runs into INTJs.

**Quick answer:** Under the original tie-breaking rule, 335 of 400 AI test runs were labeled INTJ (83.8%). When exact ties are left open instead of defaulting to I, N, T, and J, only 280 of 400 runs resolve cleanly to INTJ (70.0%). Fifty-nine runs tied on at least one axis, and 55 of those were counted as INTJ by the old rule.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## Same answers, two scoring rules

The legacy scorer broke exact ties toward I, N, T, and J. If a model scored 24 on Thinking and 24 on Feeling, the code labeled it T anyway. Our updated scorer marks tied axes with an `X`—for example, `INXJ` means Introversion, Intuition, and Judging won clearly, while Thinking vs. Feeling tied.

Both numbers come from the same frozen answer arrays. We show the legacy counts alongside the tie-aware counts so you can compare them directly:

| Model | Original INTJ / 100 | Resolved INTJ / 100 | Any tied axis / 100 |
| --- | --- | --- | --- |
| GPT-6 Astra | 45 | 19 | 29 |
| GPT-6 Sol | 97 | 79 | 18 |
| Claude Opus 5.5 | 94 | 84 | 11 |
| Claude Fable 5.1 | 99 | 98 | 1 |

## Explore the effect for one model

Pick a model and scoring rule below to inspect the exact 100-run breakdown from our frozen dataset:

Model GPT-6 AstraGPT-6 SolClaude Opus 5.5Claude Fable 5.1Scoring policy Keep tied axes unresolved
Original tie-breaking ruleGPT-6 Astra: 19 of 100 fully resolved INTJ records. The original rule labels 45 of 100 INTJ.

The complete comparison is in the table above. Enable JavaScript to filter it interactively.

## Why Astra changes so much more than Fable

GPT-6 Astra tied on the Sensing/Intuition (S/N) axis 24 times and on Extraversion/Introversion (E/I) 12 times (29 runs had at least one tie). Leaving those ties open drops Astra from 45 INTJ labels to 19 resolved INTJs. By contrast, Claude Fable 5.1 had only 1 tied axis across 100 runs, shifting from 99 to 98 INTJs.

Claude Opus 5.5 tied on a different axis: 10 of its 11 tied runs were on Thinking vs. Feeling (T/F).

## A simple example of how a tie happens

Each MBTI axis sums 8 questions rated 1 to 5, where 24 is the exact midpoint. If a model answers 3 (neutral) on all 8 S/N items—or balances four 2s with four 4s—the total is 24. The old rule called 24 “Intuitive (N).” The tie-preserving rule calls it a tie (`X`).

Even a 1-point margin (like 25 vs. 24) resolves to a letter, so you should always look at the axis margins alongside the four-letter code.

## How to report AI personality scores clearly

- **Show both numbers:** Report the resolved count alongside any legacy tie-broken count.
- **Include axis margins:** Saying “Opus 5.5 had 84 resolved INTJs and 10 T/F ties” is much clearer than “Opus is 94% INTJ.”
- **Keep prompts in mind:** The four models were tested under two different prompt setups (Codex 5-test batteries vs. hidden-name single tests), so these 400 runs describe this dataset rather than all AI systems everywhere.

## Reproduce the comparison

Download the raw answers, instrument keys, and reanalysis script into one folder and run `node content-analysis.cjs > content-analysis.json`. See the [reproduction guide](https://agent-tune.com/guides/reproduce-ai-personality-research) for step-by-step instructions.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: Stable labels and variable answers](https://agent-tune.com/research/ai-personality-repeatability)
- [Continue reading: The wider INTJ question](https://agent-tune.com/research/first-ai-that-is-not-an-intj)
