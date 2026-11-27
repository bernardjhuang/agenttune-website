Source: https://agent-tune.com/research/ai-mbti-tie-breaking
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Are AI models really INTJ? The tie-breaking effect

By Bernard Huang · Updated November 17, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/research/ai-mbti-tie-breaking.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

How a single `<` operator in MBTI scoring code turned 55 tied runs into INTJs.

**Summary:** Under the original tie-breaking rule, 335 of 400 AI test runs were labeled INTJ (83.8%). When exact ties are left open instead of defaulting to I, N, T, and J, only 280 of 400 runs resolve cleanly to INTJ (70.0%). Fifty-nine runs tied on at least one axis, and 55 of those were counted as INTJ by the old rule.

## Same answers, two scoring rules

335 → 280

Resolved Drop

55 Sept INTJ labels vanish once tied axes remain tied (X).

48 / 100

Sonnet 5.5 Ties

Nearly half of Nov Sonnet T/F axes tie before `47 / 100

DeepSeek Flash

47 INTJ labels exist purely by tie rule.

26 / 100

GPT-6 Astra

Over half of Astra’s Sept INTJ labels were resolved ties.

The legacy scorer broke exact ties toward I, N, T, and J. If a model scored 24 on Thinking and 24 on Feeling, the code labeled it T anyway. Our updated scorer marks tied axes with an `X`—for example, `INXJ` means Introversion, Intuition, and Judging won clearly, while Thinking vs. Feeling tied.

Both numbers come from the same frozen answer arrays. We show the legacy counts alongside the tie-aware counts so you can compare them directly:

| Model | Original INTJ / 100 | Resolved INTJ / 100 | Any tied axis / 100 |
| --- | --- | --- | --- |
| GPT-6 Astra | 45 | 19 | 29 |
| GPT-6 Sol | 97 | 79 | 18 |
| Claude Opus 5.5 | 94 | 84 | 11 |
| Claude Fable 5.1 | 99 | 98 | 1 |

> **Chart — Tie-Breaking Effect: Resolved INTJ vs. Tie-Rule-Only INTJ across Cohorts:** Shows how many INTJ labels per 100 runs resolve cleanly vs. exist only because a `<` tie-breaker defaults tied axes to I/N/T/J. Fable 5.1 (Sep): Resolved INTJ 98, INTJ only by tie rule 1, Other / Tied non-INTJ 1; Opus 5.5 (Sep): Resolved INTJ 84, INTJ only by tie rule 10, Other / Tied non-INTJ 6; GPT-6 Sol (Sep): Resolved INTJ 79, INTJ only by tie rule 18, Other / Tied non-INTJ 3; GPT-6 Astra (Sep): Resolved INTJ 19, INTJ only by tie rule 26, Other / Tied non-INTJ 55; Sonnet 5.5 (Nov): Resolved INTJ 52, INTJ only by tie rule 48; DeepSeek Flash (Nov): Resolved INTJ 4, INTJ only by tie rule 47, Other / Tied non-INTJ 49; Llama Maverick (Nov): Resolved INTJ 2, INTJ only by tie rule 42, Other / Tied non-INTJ 56.

Comparison of tie-preserving INTJ counts vs. legacy `

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
- [Atlas: AI MBTI Personalities across 25 model families](https://agent-tune.com/research/ai-mbti-personalities)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Are AI models really INTJ? The tie-breaking effect. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-mbti-tie-breaking
```

```
@article{huang2026_ai_mbti_tie_breaking,
  author  = {Huang, Bernard},
  title   = {Are AI models really INTJ? The tie-breaking effect},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-17},
  url     = {https://agent-tune.com/research/ai-mbti-tie-breaking},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-mbti-tie-breaking.md}
}
```

```
> **Are AI models really INTJ? The tie-breaking effect** (Bernard Huang, November 17, 2026): Under the original tie-breaking rule, 335 of 400 AI test runs were labeled INTJ (83.8%). When exact ties are left open instead of defaulting to I, N, T, and J, only 280 of 400 runs resolve cleanly to INTJ (70.0%). Fifty-nine runs tied on at least one axis, and 55 of those were counted as INTJ by the old rule.
> Source: [https://agent-tune.com/research/ai-mbti-tie-breaking](https://agent-tune.com/research/ai-mbti-tie-breaking) · [Markdown mirror](https://agent-tune.com/research/ai-mbti-tie-breaking.md)
```

[← Claude Opus 5.5 vs. Fable 5.1 (170 Items)](https://agent-tune.com/research/opus-vs-fable-question-level)
[Study 33 of 36 · Archive Index (36)](https://agent-tune.com/research)
[What "Neutral" Means on AI Tests →](https://agent-tune.com/research/ai-neutral-answers)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
