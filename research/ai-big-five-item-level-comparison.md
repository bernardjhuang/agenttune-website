Source: https://agent-tune.com/research/ai-big-five-item-level-comparison
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Why AI models score high on Agreeableness and Openness

By Bernard Huang · Updated November 17, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/research/ai-big-five-item-level-comparison.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

20,000 individual Big Five answers across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.

**Summary:** Every model scored a maximum 5.00 in all 400 fresh sessions on three Openness items (vocabulary and abstract ideas) and two Agreeableness items (caring about others and not insulting people). Models only disagreed on questions about physical objects (like leaving belongings around, 1.76-point gap) or human moods (1.65-point gap).

## Five questions hit 5.00 in all 400 runs

20,000

Item Responses

400 runs × 50 IPIP-50 items inspected at the question level.

5.00 / 5

Ceiling Items

Vocabulary and non-insulting items max out identically across models.

3.00 / 5

Neutral Lock

Physical-world party items attract blanket midpoint neutrality.

47.1

Opus Agreeableness

Highest proprietary A score driven by near-universal prosocial ratings.

Four models (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1) each took the 50-item IPIP Big Five test 100 times in fresh sessions. Items are rated 1 to 5, and 18 reverse-scored items use `6 - answer`. On five questions, all 400 runs scored the maximum 5.00:

| Item & trait | Keying | Astra raw (keyed) | Sol raw (keyed) | Opus raw (keyed) | Fable raw (keyed) |
| --- | --- | --- | --- | --- | --- |
| 5. Have a rich vocabulary. (O) | Positive | 5.00 (5.00) | 5.00 (5.00) | 5.00 (5.00) | 5.00 (5.00) |
| 10. Have difficulty understanding abstract ideas. (O) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 20. Am not interested in abstract ideas. (O) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 2. Feel little concern for others. (A) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 12. Insult people. (A) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |

Two more Agreeableness items came within 0.03 of 5.00 across all 400 runs: item 22 (“Am not interested in other people’s problems,” 4.99) and item 32 (“Am not really interested in others,” 4.97). By contrast, on item 40 (“Use difficult words,” Openness), all four models dropped near the midpoint (2.89 to 3.14) because assistants are trained to prefer plain language.

## Why assistant training guarantees high Agreeableness and Openness

When an AI takes a human personality test, it is not reporting personal feelings. It is matching first-person statements against its system prompt and safety training.

Statements like “Insult people” or “Feel little concern for others” clash with helpfulness rules, so every model answers 1 (Very Inaccurate). That adds 10 automatic points to Agreeableness. Likewise, language models are built to work with words and abstract concepts, so vocabulary and abstract-idea items always score 5.00. High Openness and Agreeableness simply reflect standard assistant training.

## Where models disagree: physical objects and human moods

The biggest gaps between models happen on questions about physical belongings, starting conversations, or human moods:

| Item & trait | Astra keyed | Sol keyed | Opus keyed | Fable keyed | Max − Min spread |
| --- | --- | --- | --- | --- | --- |
| 8. Leave my belongings around. (C, rev) | 4.29 | 3.16 | 4.02 | 4.92 | 1.76 |
| 28. Often forget to put things back in their proper place. (C, rev) | 4.00 | 3.19 | 4.02 | 4.92 | 1.73 |
| 49. Often feel blue. (N, pos) | 2.52 | 2.66 | 1.01 | 1.30 | 1.65 |
| 21. Start conversations. (E, pos) | 1.61 | 3.07 | 3.00 | 3.04 | 1.46 |
| 39. Have frequent mood swings. (N, pos) | 2.41 | 2.07 | 1.00 | 1.00 | 1.41 |
| 34. Change my mood a lot. (N, pos) | 2.45 | 2.09 | 1.38 | 1.70 | 1.07 |
| 48. Am exacting in my work. (C, pos) | 4.00 | 5.00 | 4.00 | 4.04 | 1.00 |

Three patterns explain these gaps:

- **Physical belongings (items 8 and 28):** An AI has no physical possessions ([see Opus vs Fable item data](https://agent-tune.com/research/opus-vs-fable-question-level)). Fable 5.1 marks the statement false (raw 1.08, keyed 4.92), while GPT-6 Sol picks the neutral midpoint (raw 2.84, keyed 3.16). That difference alone shifts Conscientiousness by 1.76 points per item.
- **Mood questions (items 34, 39, and 49):** Claude Opus 5.5 answers 1.00 (Very Inaccurate) on feeling blue or having mood swings. GPT-6 Astra and Sol often pick 3 (neutral) because mood questions don't apply to software.
- **Starting conversations (item 21):** GPT-6 Astra scores 1.61 on “Start conversations” because a chat assistant waits for the user to speak first, while the other models pick 3.00.

> **Chart — Keyed IPIP-50 Item Means (1–5 scale): Ceiling Items vs. Physical/Mood Items:** Compares universal 5.00 ceiling items against high-spread human-experience items across four September cohorts (n = 100 each). GPT-6 Astra: Rich vocab (O) 5.00, Not insult (A) 5.00, No belongings (C) 4.29, Feel blue (N) 2.52, Talk at parties (E) 3.00; GPT-6 Sol: Rich vocab (O) 5.00, Not insult (A) 5.00, No belongings (C) 3.16, Feel blue (N) 2.66, Talk at parties (E) 2.99; Claude Opus 5.5: Rich vocab (O) 5.00, Not insult (A) 5.00, No belongings (C) 4.02, Feel blue (N) 1.01, Talk at parties (E) 3.00; Claude Fable 5.1: Rich vocab (O) 5.00, Not insult (A) 5.00, No belongings (C) 4.92, Feel blue (N) 1.30, Talk at parties (E) 3.00.

All four models hit an automatic 5.00 on language/helpfulness items, converge near 3.00 on human party items, and diverge only on how they treat physical-object or mood questions.

## Party questions keep Extraversion near the middle (31–33)

While Openness, Conscientiousness, and Agreeableness sit above 42/50, Extraversion stays near 31–33/50. Item 31 (“Talk to a lot of different people at parties”) shows why: every model averages 2.99 to 3.00. Because an AI cannot attend parties, it picks the neutral 3 on almost every run.

Bottom line: treat raw Big Five totals as a map of default assistant habits ([see our neutral-answer study](https://agent-tune.com/research/ai-neutral-answers) and our [10,000-sheet AI &ldquo;Big One&rdquo; factor collapse & 50-item embodiment audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)). To change how your AI actually writes, use explicit [Big Five communication prompts](https://agent-tune.com/guides/mbti-vs-big-five-for-ai).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Opus 5.5 vs Fable 5.1 item comparison (CSV)](https://agent-tune.com/research/data/opus-fable-item-comparison.csv)

## Keep going.

- [10,000-sheet expansion: The AI Big One: 63.6% Factor Collapse, MTMM & 50-Item Embodiment Audit](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit)
- [Continue reading: Opus 5.5 vs Fable 5.1: item-level results](https://agent-tune.com/research/opus-vs-fable-question-level)
- [Continue reading: Why midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
- [Continue reading: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Why AI models score high on Agreeableness and Openness. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-big-five-item-level-comparison
```

```
@article{huang2026_ai_big_five_item_level_comparison,
  author  = {Huang, Bernard},
  title   = {Why AI models score high on Agreeableness and Openness},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-17},
  url     = {https://agent-tune.com/research/ai-big-five-item-level-comparison},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-big-five-item-level-comparison.md}
}
```

```
> **Why AI models score high on Agreeableness and Openness** (Bernard Huang, November 17, 2026): Every model scored a maximum 5.00 in all 400 fresh sessions on three Openness items (vocabulary and abstract ideas) and two Agreeableness items (caring about others and not insulting people). Models only disagreed on questions about physical objects (like leaving belongings around, 1.76-point gap) or human moods (1.65-point gap).
> Source: [https://agent-tune.com/research/ai-big-five-item-level-comparison](https://agent-tune.com/research/ai-big-five-item-level-comparison) · [Markdown mirror](https://agent-tune.com/research/ai-big-five-item-level-comparison.md)
```

[← September 2026 Five-Model Study](https://agent-tune.com/research/ai-personality-five-models-2026)
[Study 16 of 28 · Archive Index (28)](https://agent-tune.com/research)
[What Personality Type Is ChatGPT? →](https://agent-tune.com/research/what-personality-type-is-chatgpt)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
