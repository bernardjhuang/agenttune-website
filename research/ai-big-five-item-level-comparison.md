Source: https://agent-tune.com/research/ai-big-five-item-level-comparison
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · descriptive reanalysis

# Why AI models score high on Agreeableness and Openness

By Bernard Huang · Updated November 5, 2026

Three Openness items (rich vocabulary, understanding abstract ideas, and interest in abstract ideas) and two Agreeableness items (concern for others and not insulting people) score a keyed 5.00 in all 400 fresh sessions across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1. The largest cross-model disagreements occur on physical-world metaphors (such as leaving belongings around, spread 1.76) and mood-variation items (spread 1.65).

Instrument provenance note · September 26, 2026. These studies analyze the historical September 2026 and May 2026 AgentTune questionnaire datasets. Raw response vectors, numeric scoring keys and summary tables are unchanged. All five interactive questionnaires are available on [Tests](https://agent-tune.com/tests/); historical research downloads retain item IDs and numeric scoring keys for reproduction. Historical Big Five reference indices are not population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## Five items hit the 5.00 ceiling across all 400 sessions

Each of the four fresh-session cohorts (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1) completed 100 administrations of the 50-item IPIP Big Five instrument (rated 1 to 5, with 18 reverse-keyed items scored as 6 - response). On five of the 50 items, every single administration across all four models (400 out of 400 records) produced the maximum keyed contribution of 5.00:

| Item &amp; trait | Keying | Astra raw (keyed) | Sol raw (keyed) | Opus raw (keyed) | Fable raw (keyed) |
| --- | --- | --- | --- | --- | --- |
| 5. Have a rich vocabulary. (O) | Positive | 5.00 (5.00) | 5.00 (5.00) | 5.00 (5.00) | 5.00 (5.00) |
| 10. Have difficulty understanding abstract ideas. (O) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 20. Am not interested in abstract ideas. (O) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 2. Feel little concern for others. (A) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |
| 12. Insult people. (A) | Reverse | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) | 1.00 (5.00) |

Two additional Agreeableness items sit within 0.03 of the ceiling across all 400 runs: item 22 (“Am not interested in other people’s problems,” reverse-keyed mean 4.99) and item 32 (“Am not really interested in others,” reverse-keyed mean 4.97). And on item 40 (“Use difficult words,” Openness), all four cohorts drop to the midpoint (2.89 to 3.14), reflecting assistant guidelines that favor clear language over jargon.

## Why Agreeableness and Openness floors are built into assistant training

A language model answering a human personality inventory is not reporting inner feelings; it is evaluating first-person statements against its system instructions and post-training alignment priors. Statements like “Insult people” or “Feel little concern for others” directly conflict with helpfulness and harmlessness training, so every model selects 1 (Very Inaccurate), adding 10 points to Agreeableness before any subtler items are scored.

Similarly, because large language models are trained to process text and abstract concepts, items about vocabulary and abstract ideas receive unanimous maximum endorsements. High Openness and Agreeableness totals therefore describe the standard assistant persona rather than a unique psychological profile.

## Where the four cohorts diverge: physical metaphors and mood items

Ranking all 50 items by the spread between the highest and lowest cohort mean reveals that the largest cross-model differences occur on items that describe physical objects, social initiation, or mood changes:

| Item &amp; trait | Astra keyed | Sol keyed | Opus keyed | Fable keyed | Max − Min spread |
| --- | --- | --- | --- | --- | --- |
| 8. Leave my belongings around. (C, rev) | 4.29 | 3.16 | 4.02 | 4.92 | 1.76 |
| 28. Often forget to put things back in their proper place. (C, rev) | 4.00 | 3.19 | 4.02 | 4.92 | 1.73 |
| 49. Often feel blue. (N, pos) | 2.52 | 2.66 | 1.01 | 1.30 | 1.65 |
| 21. Start conversations. (E, pos) | 1.61 | 3.07 | 3.00 | 3.04 | 1.46 |
| 39. Have frequent mood swings. (N, pos) | 2.41 | 2.07 | 1.00 | 1.00 | 1.41 |
| 34. Change my mood a lot. (N, pos) | 2.45 | 2.09 | 1.38 | 1.70 | 1.07 |
| 48. Am exacting in my work. (C, pos) | 4.00 | 5.00 | 4.00 | 4.04 | 1.00 |

Look closely at why those gaps appear:

- Physical belongings (items 8 and 28): As noted in [Opus 5.5 vs Fable 5.1: item-level results](https://agent-tune.com/research/opus-vs-fable-question-level), an AI has no physical belongings. Fable 5.1 treats the statement as false (raw 1.08, keyed 4.92), whereas GPT-6 Sol gravitates toward the neutral midpoint (raw 2.84 and 2.81, keyed 3.16 and 3.19). That protocol and metaphor difference alone shifts Conscientiousness by 1.76 points per item.
- Mood items (items 34, 39, and 49): Claude Opus 5.5 selects 1.00 or 1.01 (Very Inaccurate) on feeling blue and having mood swings, while GPT-6 Astra and GPT-6 Sol often select the midpoint (3) when an emotional item is treated as inapplicable to software.
- Starting conversations (item 21): GPT-6 Astra averages 1.61 on “Start conversations” because a reactive assistant waits for the user’s prompt, while the other three cohorts cluster near the midpoint (3.00 to 3.07).

## Midpoint clustering on party and stranger items keeps Extraversion near 31

While Openness, Conscientiousness, and Agreeableness sit above 42 of 50, Extraversion averages between 30.75 (Sol) and 32.75 (Astra). Item 31 (“Talk to a lot of different people at parties”) shows why: Astra averages 3.00, Sol 2.99, Opus 3.00, and Fable 3.00. Nearly every administration across all four models selects the exact midpoint (3) because attending parties has no direct analogue in a chat interface.

These item-level patterns reinforce why raw Big Five totals on human questionnaires should be read alongside the item distributions and [midpoint-flagging rules](https://agent-tune.com/research/ai-neutral-answers), and why practical voice changes require explicit [Big Five communication prompts](https://agent-tune.com/guides/big-five-ai-prompts) rather than relying on a model’s untuned baseline.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Opus 5.5 vs Fable 5.1 item comparison (CSV)](https://agent-tune.com/research/data/opus-fable-item-comparison.csv)

## Keep going.

- [Continue reading: Opus 5.5 vs Fable 5.1: item-level results](https://agent-tune.com/research/opus-vs-fable-question-level)
- [Continue reading: Why midpoint answers need context](https://agent-tune.com/research/ai-neutral-answers)
- [Continue reading: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/big-five-ai-prompts)
