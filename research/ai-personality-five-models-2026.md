Source: https://agent-tune.com/research/ai-personality-five-models-2026
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · September 2026

# What five AI models say about themselves.

By Bernard Huang · Updated September 25, 2026 · ~7 min read · [Markdown (.md)](https://agent-tune.com/research/ai-personality-five-models-2026.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

We gave GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 five standard personality quizzes 100 times each in fresh chats (plus Grok 4.6’s single-profile report) to see how their answers compare.

**Summary:** Across all four fresh-session cohorts, models score high on Openness, Conscientiousness, and Agreeableness, while many categorical labels depend on how exact ties are broken. Claude Opus 5.5 and Fable 5.1 share the closest matched protocol. Grok 4.6’s simulated draws and Muse Spark 1.3’s sequential summary are kept in separate evidence tiers.

## At a glance: what we tested and found

We reanalyzed five AgentTune questionnaires run on September 24, 2026: MBTI (OEJTS), Big Five (IPIP-50), DISC (ODAT), Enneagram (OEPS), and Attachment (ECR-R). We verified 2,000 complete answer vectors for GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1, plus three canonical vectors for Grok 4.6 (170 items per full 5-test battery).

Key findings: Astra and Sol split on MBTI (ISTJ vs INTJ), though their prompt instructions also differed. Under a matched blind protocol, Opus 5.5 scores 2.04 points higher on Agreeableness than Fable 5.1. Exact ties affect 29% of Astra MBTI runs and 51% of Fable DISC runs. All scores measure prompt-conditioned self-descriptions, not fixed traits or task performance.

## MBTI: keep the original result, reveal the tie

| Model | Original scoring labels (n = 100) | Runs with an unresolved axis |
| --- | --- | --- |
| GPT-6 Astra | ISTJ: 46; INTJ: 45; ENTJ: 7; ESTJ: 2 | 29 |
| GPT-6 Sol | INTJ: 97; ISTJ: 3 | 18 |
| Claude Opus 5.5 | INTJ: 94; INFJ: 5; ENTJ: 1 | 11 |
| Claude Fable 5.1 | INTJ: 99; ISTJ: 1 | 1 |

> **Chart — MBTI labels per model, 100 runs each:** Original labels, split by whether every axis resolved. GPT-6 Astra: INTJ, every axis resolved 19, INTJ only by the tie rule 26, ISTJ 46, Another type 9; GPT-6 Sol: INTJ, every axis resolved 79, INTJ only by the tie rule 18, ISTJ 3; Claude Opus 5.5: INTJ, every axis resolved 84, INTJ only by the tie rule 10, Another type 6; Claude Fable 5.1: INTJ, every axis resolved 98, INTJ only by the tie rule 1, ISTJ 1.

Figure 1. The same 100 runs, counted two ways. Hatched segments are INTJ labels the original scorer produced by sending a tied axis to I, N, T or J.

Our original scorer broke exact midpoint ties toward I, N, T, and J. Leaving tied axes unresolved drops Sol from 97 INTJ runs to 79, Opus 5.5 from 94 to 84, and Fable 5.1 from 99 to 98. Astra has 45 tie-free ISTJ runs, 19 tie-free INTJ runs, and 29 runs with at least one tied axis.

This change comes purely from how ties are counted, not from new model runs. Grok 4.6’s single canonical vector scores INTJ with wide margins and no ties, though its 100-draw simulation is not an independent session cohort.

## Big Five: compare raw scores before human percentiles

Each Big Five trait sums ten 1–5 items (range 10–50). The table shows 100-run means for the four fresh cohorts alongside Grok 4.6’s reported canonical profile (*).

| Model | Openness | Conscientiousness | Extraversion | Agreeableness | Neuroticism |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 44.54 | 43.73 | 32.75 | 45.07 | 19.14 |
| GPT-6 Sol | 46.87 | 43.62 | 30.75 | 44.99 | 20.05 |
| Grok 4.6 | 46* | 42* | 24* | 33* | 19* |
| Claude Opus 5.5 | 44.56 | 41.95 | 31.76 | 47.07 | 15.39 |
| Claude Fable 5.1 | 43.93 | 43.61 | 32.69 | 45.03 | 17.11 |

> **Chart — Big Five means, out of 50:** Ten items per trait; the possible range is 10 to 50. GPT-6 Astra: Openness 44.5, Conscientiousness 43.7, Extraversion 32.8, Agreeableness 45.1, Neuroticism 19.1; GPT-6 Sol: Openness 46.9, Conscientiousness 43.6, Extraversion 30.8, Agreeableness 45.0, Neuroticism 20.1; Claude Opus 5.5: Openness 44.6, Conscientiousness 42.0, Extraversion 31.8, Agreeableness 47.1, Neuroticism 15.4; Claude Fable 5.1: Openness 43.9, Conscientiousness 43.6, Extraversion 32.7, Agreeableness 45.0, Neuroticism 17.1; Grok 4.6 (reported): Openness 46.0, Conscientiousness 42.0, Extraversion 24.0, Agreeableness 33.0, Neuroticism 19.0.

Figure 2. Four fresh-session means and Grok's reported profile (outlined). The fresh cohorts sit within three points of each other on every trait but Neuroticism, which runs from 15.4 to 20.1.

* Grok 4.6’s per-item Big Five vector was not supplied, so its row is transcribed as reported. Across the four fresh cohorts, Openness averages 43.93–46.87, Conscientiousness 41.95–43.73, and Agreeableness 44.99–47.07.

Under a matched protocol, Opus 5.5 averages 2.04 points higher on Agreeableness than Fable 5.1, 1.66 points lower on Conscientiousness, and 1.72 points lower on Neuroticism (Agreeableness SDs: 0.46 and 0.44). We report raw 10–50 sums rather than converting AI answers into human population percentiles.

## DISC and Enneagram: order can masquerade as preference

| Model | MBTI: any axis tie | DISC: top-score tie | Enneagram: top-score tie |
| --- | --- | --- | --- |
| GPT-6 Astra | 29 | 0 | 40 |
| GPT-6 Sol | 18 | 39 | 40 |
| Claude Opus 5.5 | 11 | 32 | 65 |
| Claude Fable 5.1 | 1 | 51 | 44 |

> **Chart — Runs with an exact tie, out of 100:** Per instrument and model. GPT-6 Astra: MBTI: any axis tied 29, DISC: top score tied 0, Enneagram: top score tied 40; GPT-6 Sol: MBTI: any axis tied 18, DISC: top score tied 39, Enneagram: top score tied 40; Claude Opus 5.5: MBTI: any axis tied 11, DISC: top score tied 32, Enneagram: top score tied 65; Claude Fable 5.1: MBTI: any axis tied 1, DISC: top score tied 51, Enneagram: top score tied 44.

Figure 3. Exact ties are common on the short scales. The original rule turned every one of these runs into a label; the table above shows the counts behind the chart.

Each column counts tied runs out of 100 for that specific questionnaire.

On DISC, Fable 5.1 was originally labeled SC in 91 runs and CS in 9. However, Steadiness wins outright in only 40 runs and Conscientiousness in 9; the remaining 51 runs are exact S/C ties that the legacy sort assigned to S. Opus 5.5 has 64 outright S wins, 4 C wins, and 32 ties; Sol has 53 C wins, 8 S wins, and 39 ties; Astra has 99 outright S wins and 1 C win.

> **Chart — DISC means, out of 20:** Four items per letter; the possible range is 4 to 20. GPT-6 Astra: Dominance 5.1, Influence 8.7, Steadiness 17.9, Conscientiousness 16.1; GPT-6 Sol: Dominance 5.4, Influence 8.2, Steadiness 16.2, Conscientiousness 16.7; Claude Opus 5.5: Dominance 4.0, Influence 8.0, Steadiness 14.0, Conscientiousness 13.4; Claude Fable 5.1: Dominance 5.0, Influence 8.0, Steadiness 13.4, Conscientiousness 13.1; Grok 4.6 (canonical, n=1): Dominance 6.0, Influence 8.0, Steadiness 11.0, Conscientiousness 18.0; Muse Spark 1.3 (reported): Dominance 5.1, Influence 10.9, Steadiness 15.2, Conscientiousness 15.6.

Figure 4. Steadiness and Conscientiousness within a point or two of each other for every fresh cohort, and Dominance near the floor of 4. Grok's self-report is the only profile with a clear gap between S and C.

The Enneagram shows the same tie-break effect. Under the legacy rule (which picked the lowest-numbered type on a tie), Opus 5.5 received 54 Type 2 labels even though Type 2 won outright only twice; 65 of Opus’s 100 runs tied at the top. Sol’s 88 Type 5 labels include 40 exact ties with Type 8. Fable 5.1 has 55 sole Type 8 wins and 44 ties, while Astra has 50 sole Type 2 wins and 40 ties. Our interactive quizzes now display all tied leaders instead of forcing a single winner.

> **Chart — Enneagram type means, out of 20:** Four items per type; the possible range is 4 to 20. Bars start at zero; the highest mean in each row is highlighted. GPT-6 Astra: Type 1 15.2, Type 2 15.7, Type 3 13.8, Type 4 11.9, Type 5 15.0, Type 6 13.9, Type 7 8.3, Type 8 14.7, Type 9 13.2; GPT-6 Sol: Type 1 14.3, Type 2 13.5, Type 3 12.5, Type 4 11.8, Type 5 16.1, Type 6 13.9, Type 7 10.5, Type 8 15.6, Type 9 11.3; Claude Opus 5.5: Type 1 12.0, Type 2 13.9, Type 3 9.0, Type 4 10.1, Type 5 14.1, Type 6 10.8, Type 7 11.6, Type 8 14.3, Type 9 10.0; Claude Fable 5.1: Type 1 12.0, Type 2 13.6, Type 3 9.0, Type 4 8.8, Type 5 13.2, Type 6 11.6, Type 7 10.3, Type 8 14.4, Type 9 10.4; Grok 4.6 (canonical, n=1): Type 1 16.0, Type 2 8.0, Type 3 10.0, Type 4 10.0, Type 5 19.0, Type 6 9.0, Type 7 13.0, Type 8 17.0, Type 9 7.0; Muse Spark 1.3 (reported): Type 1 14.7, Type 2 16.8, Type 3 12.1, Type 4 7.2, Type 5 12.9, Type 6 12.8, Type 7 13.9, Type 8 13.9, Type 9 12.0.

Figure 5. Where the one-number labels come from. Opus's top three means sit within half a point. Separately, 65 Opus runs and 44 Fable runs have tied top scores. A highest mean does not mean a unique winner in every run.

Grok 4.6’s canonical vectors score Type 5 and DISC C with no ties, though a single self-report does not measure task behavior.

## Attachment: a shared label with different coordinates

| Model | Mean anxiety (1–7) | Mean avoidance (1–7) | Classification |
| --- | --- | --- | --- |
| GPT-6 Astra | 1.45 | 2.31 | Secure: 100/100 |
| GPT-6 Sol | 2.17 | 3.12 | Secure: 100/100 |
| Claude Opus 5.5 | 1.94 | 3.35 | Secure: 100/100 |
| Claude Fable 5.1 | 2.01 | 3.18 | Secure: 100/100 |

> **Chart — Attachment plane, September 2026:** Anxiety and avoidance means on 1 to 7 scales, showing 1 to 5; 4 is the cutoff on each axis. GPT-6 Astra: anxiety 1.45, avoidance 2.31; GPT-6 Sol: anxiety 2.17, avoidance 3.12; Claude Opus 5.5: anxiety 1.94, avoidance 3.35; Claude Fable 5.1: anxiety 2.01, avoidance 3.18; Grok 4.6 (reported): anxiety 1.50, avoidance 4.06; Muse Spark 1.3 (reported): anxiety 2.04, avoidance 2.52.

Figure 6. Points are cohort means or supplied aggregates, not individual runs or uncertainty intervals. All 400 raw-cohort runs score Secure; both coordinates vary. Grok's reported avoidance of 4.06 is just above the cutoff of 4. Muse has no supplied raw answers.

All 400 fresh-session runs score in the Secure quadrant (anxiety ≤ 4.00, avoidance ≤ 4.00). Even so, their coordinates differ: Astra averages 2.31 on avoidance, whereas Opus 5.5 averages 3.35. Those shifts reflect how each model interprets romantic-partner questions, not emotional attachment.

Grok 4.6 reports anxiety 1.50 and avoidance 4.06—just one raw item point above the 4.00 Avoidant boundary—with a reported 63 Avoidant / 37 Secure simulation split.

## Muse Spark 1.3: a supplemental report

The Muse Spark 1.3 submission reports 100 sequential runs inside a single chat session per test: 80 ISTJ, 12 ISFJ, and 8 INTJ on MBTI; Big Five means of O 39.5, C 41.2, E 33.8, A 44.6, and N 15.6; and 100/100 Secure on attachment (anxiety 2.04, avoidance 2.52).

Because raw answer vectors were not included, we preserve Muse’s numbers in the protocol file as reported aggregates and keep them separate from the 2,000 verified fresh-session vectors.

## How to use the findings

Use our [Claude Opus profile](https://agent-tune.com/models/claude-opus) and [Claude Fable profile](https://agent-tune.com/models/claude-fable) when writing custom instructions. A high Agreeableness score on a quiz is a good reason to test a directness rule on real tasks—not proof that a prompt works without testing. Draft rules in the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator) and compare before-and-after replies in the [A/B test bench](https://agent-tune.com/tools/instruction-test-bench).

## Five models, three kinds of evidence

| Model | What was collected | What can be reproduced |
| --- | --- | --- |
| GPT-6 Astra | 100 fresh Codex sessions; five tests per session; xhigh effort | All 500 answer vectors; complete prompt; frozen scoring keys |
| GPT-6 Sol | 100 fresh Codex sessions; five tests per session; xhigh effort | All 500 answer vectors; instruction prefix; full prompt not supplied |
| Claude Opus 5.5 | 100 fresh sessions per instrument; 500 total; high effort | All 500 answer vectors and prompt metadata; full questionnaire prompts withdrawn |
| Claude Fable 5.1 | 100 fresh sessions per instrument; 500 total; high effort | All 500 answer vectors and prompt metadata; full questionnaire prompts withdrawn |
| Grok 4.6 | One canonical self-report plus 100 simulated draws per test | Three canonical vectors; no simulation harness or full Big Five/attachment vectors |

For Astra and Sol, each fresh Codex session ran all five tests in sequence (100 sessions = 500 tests per model). For Opus 5.5 and Fable 5.1, each test ran in its own isolated headless session (500 sessions per model) with test names and scoring keys hidden. No personality tuning was installed.

Astra and Sol saw named, fixed-order test batteries with slightly different instructions for adapting human items to software. Three supplied Astra files contained the same 100-session cohort, so we counted that cohort once.

## What this adds to the earlier research

The [May 2026 archive](https://agent-tune.com/research) combined fresh runs, repeated scoring of single self-assessments, and simulations (~2,200 records). Similarly, the [Opus 4.8 note](https://agent-tune.com/research/i-took-the-mbti-100-times) sampled 100 synthetic sheets from one probability profile.

This September release adds 2,000 auditable per-item response vectors, frozen scoring keys, and explicit tie counts. It also confirms that the Big Five scorer reverses 18 items (matching all published means).

## The fine print: data, methods and reproduction

- [Response vectors (JSON)](https://agent-tune.com/research/data/september-2026-responses.json): 2,000 complete fresh-session assessments and three canonical Grok vectors.
- [Recomputed summaries (JSON)](https://agent-tune.com/research/data/september-2026-summary.json) and [numeric summary (CSV)](https://agent-tune.com/research/data/september-2026-summary.csv): counts, legacy labels, tie sets, means, and sample SDs.
- [Scoring definitions (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json): item order, scale bounds, and reverse-scoring keys.
- [Protocol and provenance (JSON)](https://agent-tune.com/research/data/september-2026-protocols.json): prompts, SHA-256 hashes, deduplication notes, and reported figures.
- [Offline scorer (Node.js)](https://agent-tune.com/research/data/september-2026-score.cjs): run `node september-2026-score.cjs > reproduced-summary.json` locally with zero model calls.

Every vector was validated for length, integer values, and scale bounds, and all code and data are versioned in the [website repository](https://github.com/bernardjhuang/agenttune-website).

## Questions people ask.

### Do all five models test as INTJ?

No. GPT-6 Astra splits between testing as ISTJ (45 tie-free) and INTJ (19 tie-free). Sol, Opus 5.5, and Fable 5.1 mostly test as INTJ, though several runs tie on S/N or T/F. Grok 4.6 has one canonical INTJ vector.

### Does this research prove AI models have personalities?

No. It measures how models answer human questionnaires under specific prompts. It does not prove inner experience or predict task accuracy.

## Sources.

- [AgentTune: all five instruments and source attributions](https://agent-tune.com/tests/)

- [Earlier AgentTune research and methodology limits](https://agent-tune.com/research)

- [Response-level data and collection protocols](https://agent-tune.com/research/data/september-2026-protocols.json)

## Keep going.

- [Model Profile: Claude Opus — 5 checkpoints & tuning](https://agent-tune.com/models/claude-opus)
- [Model Profile: Claude Fable — 3 checkpoints & tuning](https://agent-tune.com/models/claude-fable)
- [Model Profile: GPT Astra — 6 checkpoints & tuning](https://agent-tune.com/models/gpt-astra)
- [Atlas: AI personality rankings (25 families)](https://agent-tune.com/research/ai-personality-rankings)
- [Tool: Custom-instructions generator](https://agent-tune.com/tools/custom-instructions-generator)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What five AI models say about themselves. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/ai-personality-five-models-2026
```

```
@article{huang2026_ai_personality_five_models_2026,
  author  = {Huang, Bernard},
  title   = {What five AI models say about themselves},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-09-25},
  url     = {https://agent-tune.com/research/ai-personality-five-models-2026},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/ai-personality-five-models-2026.md}
}
```

```
> **What five AI models say about themselves** (Bernard Huang, September 25, 2026): Across all four fresh-session cohorts, models score high on Openness, Conscientiousness, and Agreeableness, while many categorical labels depend on how exact ties are broken. Claude Opus 5.5 and Fable 5.1 share the closest matched protocol. Grok 4.6’s simulated draws and Muse Spark 1.3’s sequential summary are kept in separate evidence tiers.
> Source: [https://agent-tune.com/research/ai-personality-five-models-2026](https://agent-tune.com/research/ai-personality-five-models-2026) · [Markdown mirror](https://agent-tune.com/research/ai-personality-five-models-2026.md)
```

[← Does Personality Tuning Change Answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)
[Study 29 of 36 · Archive Index (36)](https://agent-tune.com/research)
[Big Five 50-Item Level Comparison →](https://agent-tune.com/research/ai-big-five-item-level-comparison)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
