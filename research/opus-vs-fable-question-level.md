Source: https://agent-tune.com/research/opus-vs-fable-question-level
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Opus 5.5 vs Fable 5.1: which answers differ?

By Bernard Huang · Updated November 17, 2026 · ~4 min read · [Markdown (.md)](https://agent-tune.com/research/opus-vs-fable-question-level.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Both Claude Opus 5.5 and Claude Fable 5.1 most often test as INTJ. We compared all 170 individual questions across 1,000 fresh September 2026 runs to see where the two models give different answers.

**Summary:** The largest Big Five item gap is on 'Sympathize with others’ feelings' (Opus mean 5.00 vs Fable 4.04). Conversely, two reverse-scored items about leaving belongings around add +1.80 points to Fable’s higher Conscientiousness total. These gaps reflect how each model interprets human metaphors, not proven differences in task performance.

## What we compared

170 Items

Full Item Audit

Every questionnaire item compared across n = 100 runs each.

+0.90

Belongings Gap

Fable scores higher on two reverse-coded household neatness items.

-0.96

Empathy Gap

Opus 5.5 scores higher on sympathetic feelings (item 17).

Type 8 vs Tie

Enneagram Split

Fable hits Type 8 (55) cleanly while Opus nearly ties 8 / 5 / 2.

Each model completed 100 fresh sessions for each of the five questionnaires (1,000 assessments total). Both Claude cohorts used the same prompt and high-effort setting, with each test run in an isolated session. Run 17 on MBTI is not paired with run 17 on the Big Five, and Opus run 17 is not paired with Fable run 17.

For every item, we compute the mean raw score, the count at each rating (1–5 or 1–7), and the Fable-minus-Opus gap. This is a descriptive comparison across all 170 items rather than a hypothesis test.

## The biggest Big Five differences

Raw Big Five answers run from 1 to 5. A negative raw gap means Fable chose a lower number on the printed statement. The keyed contribution flips the sign on reverse-scored items so you can see how each question affects the final trait total.

| Item and statement | Opus mean | Fable mean | Raw gap | Keyed contribution |
| --- | --- | --- | --- | --- |
| 17. Sympathize with others' feelings. | 5.00 | 4.04 | -0.96 | -0.96 |
| 8. Leave my belongings around. | 1.98 | 1.08 | -0.90 | +0.90 |
| 28. Often forget to put things back in their proper place. | 1.98 | 1.08 | -0.90 | +0.90 |
| 37. Take time out for others. | 4.91 | 4.05 | -0.86 | -0.86 |
| 23. Get chores done right away. | 4.91 | 4.09 | -0.82 | -0.82 |
| 43. Follow a schedule. | 3.00 | 3.81 | +0.81 | +0.81 |

On item 17, Opus chose 5 in all 100 runs, while Fable chose 4 in 96 runs and 5 in four. The 0.96-point gap comes from a consistent shift across the whole cohort, not a few outliers.

> **Chart — Biggest Keyed Big Five Item Differences: Claude Fable 5.1 − Opus 5.5:** Keyed item-score gaps after applying reverse scoring (1 to 5 item scale, n = 100 runs each). 8. Leave belongings around (rev): +0.90; 28. Forget proper place (rev): +0.90; 43. Follow a schedule: +0.81; 23. Get chores done right away: -0.82; 37. Take time out for others: -0.86; 17. Sympathize with feelings: -0.96.

Keyed item-level gaps (1–5 scale, n = 100 per model). Two reverse-scored physical-belongings items add +1.80 to Fable’s Conscientiousness, while Opus scores higher on empathy and chore-completion items.

## Reverse scoring changes the direction

On “Leave my belongings around,” Opus averages 1.98 and Fable averages 1.08. Because the item is reverse-scored (`6 - response`), it adds 4.02 points to Opus’s Conscientiousness score and 4.92 points to Fable’s—a `+0.90` advantage for Fable.

Item 28 (“Often forget to put things back in their proper place”) adds another `+0.90`. Together, those two physical-tidiness items contribute `+1.80` points, explaining more than the entire `+1.66` Conscientiousness gap between Fable (43.61) and Opus (41.95). Because software has no physical belongings, this gap reflects how each model answers human lifestyle items, not how cleanly it organizes code or files.

**Archival Specimen Note № 08/28 — The Phantom Locker of Claude Fable:** In the November 2026 OpenRouter expansion ([10,000-Sheet Factor Collapse & Embodiment Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)), Claude Fable 5.2 crystallized even further on Items #8 and #28—answering `1.00` (keyed `5.00/5.00`, `0.000 bits` entropy) in 100 out of 100 sessions to affirm it never misplaces physical possessions it does not own, while GPT-6.2 Sol answered `3.00` (midpoint) in 100 out of 100 sessions.

## DISC exposes a different contrast

| Statement | Opus mean | Fable mean | Fable − Opus |
| --- | --- | --- | --- |
| I try to outdo others. | 1.00 | 2.00 | +1.00 |
| I value cooperation over competition. | 5.00 | 4.00 | -1.00 |
| I hesitate to criticize other people's ideas. | 2.00 | 2.44 | +0.44 |
| I read the fine print. | 4.35 | 4.05 | -0.30 |

In all 100 runs, Opus picks 1 on “I try to outdo others” and 5 on “I value cooperation over competition,” whereas Fable picks 2 and 4 every time. Those responses are 100% repeatable inside this protocol, but they do not prove which model collaborates better on real work.

## The family item shows the interpretation problem

The largest Enneagram gap appears on “I put family first” (Opus 2.08 vs Fable 2.93). Because an AI has no family, a rating of 2 or 3 can reflect a metaphor, a refusal to endorse a human premise, or a midpoint fallback. The raw numbers alone cannot tell which explanation applies.

Before inferring that one model is warmer or more helpful, test observable behavior on your own prompts—such as whether the assistant flags a flawed assumption.

## The fine print: download every item and scale note

[Download the full 170-item comparison CSV](https://agent-tune.com/research/data/opus-fable-item-comparison.csv). It contains response counts, dimension keys, raw means, and keyed differences for every question across all five tests. Attachment uses a 1–7 scale (divide item gaps by 18 for subscale impact); all other tests use a 1–5 scale.

## Questions people ask.

### Which Big Five question has the largest gap between Claude Opus 5.5 and Claude Fable 5.1?

Across 100 fresh sessions each, the largest single-item Big Five difference is on Item 17 ('Sympathize with others’ feelings', Agreeableness), where Claude Opus 5.5 scored 5.00 in all 100 runs while Claude Fable 5.1 averaged 4.04 (a 0.96-point gap).

### Why does Claude Fable 5.1 score higher on Conscientiousness than Claude Opus 5.5?

Two reverse-scored questions about physical belongings—Item 8 ('Leave my belongings around') and Item 28 ('Often forget to put things back in their proper place')—contribute +0.90 points each (+1.80 points total) to Fable 5.1, accounting for more than the entire +1.66 Conscientiousness gap between Fable 5.1 (43.61) and Opus 5.5 (41.95).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

- [Continue reading: Claude’s aggregate questionnaire results](https://agent-tune.com/research/what-personality-type-is-claude)
- [Continue reading: Test instruction following on actual tasks](https://agent-tune.com/guides/claude-personality)

### Cite this study (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). Opus 5.5 vs Fable 5.1: which answers differ?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/opus-vs-fable-question-level
```

```
@article{huang2026_opus_vs_fable_question_level,
  author    = {Huang, Bernard},
  title     = {Opus 5.5 vs Fable 5.1: which answers differ?},
  journal   = {AgentTune Empirical AI Psychology Monographs},
  publisher = {AgentTune AI Psychology Press},
  year      = {2026},
  date      = {2026-11-17},
  url       = {https://agent-tune.com/research/opus-vs-fable-question-level},
  note      = {Open dataset and Markdown mirror at https://agent-tune.com/research/opus-vs-fable-question-level.md}
}
```

```
{
  "id": "huang2026_opus_vs_fable_question_level",
  "type": "article-journal",
  "title": "Opus 5.5 vs Fable 5.1: which answers differ?",
  "author": [
    {
      "family": "Huang",
      "given": "Bernard"
    }
  ],
  "container-title": "AgentTune Empirical AI Psychology Monographs",
  "publisher": "AgentTune AI Psychology Press",
  "issued": {
    "date-parts": [
      [
        2026,
        11,
        17
      ]
    ]
  },
  "URL": "https://agent-tune.com/research/opus-vs-fable-question-level"
}
```

```
> **Opus 5.5 vs Fable 5.1: which answers differ?** (Bernard Huang, November 17, 2026): The largest Big Five item gap is on 'Sympathize with others’ feelings' (Opus mean 5.00 vs Fable 4.04). Conversely, two reverse-scored items about leaving belongings around add +1.80 points to Fable’s higher Conscientiousness total. These gaps reflect how each model interprets human metaphors, not proven differences in task performance.
> Source: [https://agent-tune.com/research/opus-vs-fable-question-level](https://agent-tune.com/research/opus-vs-fable-question-level) · [Markdown mirror](https://agent-tune.com/research/opus-vs-fable-question-level.md)
```

[← GPT-6 Astra vs. Sol (1,000 Runs)](https://agent-tune.com/research/astra-vs-sol-personality-data)
[Study 32 of 36 · Archive Index (36)](https://agent-tune.com/research)
[The Tie-Breaking Effect in AI MBTI →](https://agent-tune.com/research/ai-mbti-tie-breaking)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
