Source: https://agent-tune.com/research/ai-big-five-item-level-comparison
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Why AI models score high on Agreeableness and Openness

By Bernard Huang · Updated November 17, 2026

20,000 individual Big Five answers across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.

**Quick answer:** Every model scored a maximum 5.00 in all 400 fresh sessions on three Openness items (vocabulary and abstract ideas) and two Agreeableness items (caring about others and not insulting people). Models only disagreed on questions about physical objects (like leaving belongings around, 1.76-point gap) or human moods (1.65-point gap).

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## Five questions hit 5.00 in all 400 runs

Four models (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1) each took the 50-item IPIP Big Five test 100 times in fresh sessions. Items are rated 1 to 5, and 18 reverse-scored items use `6 - answer`. On five questions, all 400 runs scored the maximum 5.00:

| Item &amp; trait | Keying | Astra raw (keyed) | Sol raw (keyed) | Opus raw (keyed) | Fable raw (keyed) |
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

| Item &amp; trait | Astra keyed | Sol keyed | Opus keyed | Fable keyed | Max − Min spread |
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

All four models hit an automatic 5.00 on language/helpfulness items, converge near 3.00 on human party items, and diverge only on how they treat physical-object or mood questions.

## Party questions keep Extraversion near the middle (31–33)

While Openness, Conscientiousness, and Agreeableness sit above 42/50, Extraversion stays near 31–33/50. Item 31 (“Talk to a lot of different people at parties”) shows why: every model averages 2.99 to 3.00. Because an AI cannot attend parties, it picks the neutral 3 on almost every run.

Bottom line: treat raw Big Five totals as a map of default assistant habits ([see our neutral-answer study](https://agent-tune.com/research/ai-neutral-answers)). To change how your AI actually writes, use explicit [Big Five communication prompts](https://agent-tune.com/guides/big-five-ai-prompts).

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Opus 5.5 vs Fable 5.1 item comparison (CSV)](https://agent-tune.com/research/data/opus-fable-item-comparison.csv)

## Keep going.

- [Continue reading: Opus 5.5 vs Fable 5.1: item-level results](https://agent-tune.com/research/opus-vs-fable-question-level)
- [Continue reading: Why midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
- [Continue reading: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/big-five-ai-prompts)
