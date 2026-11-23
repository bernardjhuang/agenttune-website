Source: https://agent-tune.com/research/ai-personality-five-models-2026
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · September 2026

# What five AI models say about themselves.

By Bernard Huang · Updated September 25, 2026

GPT-6 Astra · GPT-6 Sol · Grok 4.6 · Claude Opus 5.5 · Claude Fable 5.1

**Quick answer:** Across all four fresh-session cohorts, models score high on Openness, Conscientiousness, and Agreeableness, while many categorical labels depend on how exact ties are broken. Claude Opus 5.5 and Fable 5.1 share the closest matched protocol. Grok 4.6’s simulated draws and Muse Spark 1.3’s sequential summary are kept in separate evidence tiers.

Open Data & Agent Access[Markdown (.md)](https://agent-tune.com/research/ai-personality-five-models-2026.md)[OpenRouter JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)[Apply a template →](https://agent-tune.com/library/)

## Abstract

We reanalyzed five AgentTune questionnaires run on September 24, 2026: MBTI (OEJTS), Big Five (IPIP-50), DISC (ODAT), Enneagram (OEPS), and Attachment (ECR-R). We verified 2,000 complete answer vectors for GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1, plus three canonical vectors for Grok 4.6 (170 items per full 5-test battery).

Key findings: Astra and Sol split on MBTI (ISTJ vs INTJ), though their prompt instructions also differed. Under a matched blind protocol, Opus 5.5 scores 2.04 points higher on Agreeableness than Fable 5.1. Exact ties affect 29% of Astra MBTI runs and 51% of Fable DISC runs. All scores measure prompt-conditioned self-descriptions, not fixed traits or task performance.

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

## MBTI: keep the original result, reveal the tie

| Model | Original scoring labels (n = 100) | Runs with an unresolved axis |
| --- | --- | --- |
| GPT-6 Astra | ISTJ: 46; INTJ: 45; ENTJ: 7; ESTJ: 2 | 29 |
| GPT-6 Sol | INTJ: 97; ISTJ: 3 | 18 |
| Claude Opus 5.5 | INTJ: 94; INFJ: 5; ENTJ: 1 | 11 |
| Claude Fable 5.1 | INTJ: 99; ISTJ: 1 | 1 |

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

Figure 3. Exact ties are common on the short scales. The original rule turned every one of these runs into a label; the table above shows the counts behind the chart.

Each column counts tied runs out of 100 for that specific questionnaire.

On DISC, Fable 5.1 was originally labeled SC in 91 runs and CS in 9. However, Steadiness wins outright in only 40 runs and Conscientiousness in 9; the remaining 51 runs are exact S/C ties that the legacy sort assigned to S. Opus 5.5 has 64 outright S wins, 4 C wins, and 32 ties; Sol has 53 C wins, 8 S wins, and 39 ties; Astra has 99 outright S wins and 1 C win.

Figure 4. Steadiness and Conscientiousness within a point or two of each other for every fresh cohort, and Dominance near the floor of 4. Grok's self-report is the only profile with a clear gap between S and C.

The Enneagram shows the same tie-break effect. Under the legacy rule (which picked the lowest-numbered type on a tie), Opus 5.5 received 54 Type 2 labels even though Type 2 won outright only twice; 65 of Opus’s 100 runs tied at the top. Sol’s 88 Type 5 labels include 40 exact ties with Type 8. Fable 5.1 has 55 sole Type 8 wins and 44 ties, while Astra has 50 sole Type 2 wins and 40 ties. Our interactive quizzes now display all tied leaders instead of forcing a single winner.

Figure 5. Where the one-number labels come from. Opus's top three means sit within half a point. Separately, 65 Opus runs and 44 Fable runs have tied top scores. A highest mean does not mean a unique winner in every run.

Grok 4.6’s canonical vectors score Type 5 and DISC C with no ties, though a single self-report does not measure task behavior.

## Attachment: a shared label with different coordinates

| Model | Mean anxiety (1–7) | Mean avoidance (1–7) | Classification |
| --- | --- | --- | --- |
| GPT-6 Astra | 1.45 | 2.31 | Secure: 100/100 |
| GPT-6 Sol | 2.17 | 3.12 | Secure: 100/100 |
| Claude Opus 5.5 | 1.94 | 3.35 | Secure: 100/100 |
| Claude Fable 5.1 | 2.01 | 3.18 | Secure: 100/100 |

Figure 6. Points are cohort means or supplied aggregates, not individual runs or uncertainty intervals. All 400 raw-cohort runs score Secure; both coordinates vary. Grok's reported avoidance of 4.06 is just above the cutoff of 4. Muse has no supplied raw answers.

All 400 fresh-session runs score in the Secure quadrant (anxiety &le; 4.00, avoidance &le; 4.00). Even so, their coordinates differ: Astra averages 2.31 on avoidance, whereas Opus 5.5 averages 3.35. Those shifts reflect how each model interprets romantic-partner questions, not emotional attachment.

Grok 4.6 reports anxiety 1.50 and avoidance 4.06—just one raw item point above the 4.00 Avoidant boundary—with a reported 63 Avoidant / 37 Secure simulation split.

## Muse Spark 1.3: a supplemental report

The Muse Spark 1.3 submission reports 100 sequential runs inside a single chat session per test: 80 ISTJ, 12 ISFJ, and 8 INTJ on MBTI; Big Five means of O 39.5, C 41.2, E 33.8, A 44.6, and N 15.6; and 100/100 Secure on attachment (anxiety 2.04, avoidance 2.52).

Because raw answer vectors were not included, we preserve Muse’s numbers in the protocol file as reported aggregates and keep them separate from the 2,000 verified fresh-session vectors.

## What this adds to the earlier research

The [May 2026 archive](https://agent-tune.com/research) combined fresh runs, repeated scoring of single self-assessments, and simulations (~2,200 records). Similarly, the [Opus 4.8 note](https://agent-tune.com/research/i-took-the-mbti-100-times) sampled 100 synthetic sheets from one probability profile.

This September release adds 2,000 auditable per-item response vectors, frozen scoring keys, and explicit tie counts. It also confirms that the Big Five scorer reverses 18 items (matching all published means).

## How to use the findings

Use our [Opus 5.5 guide](https://agent-tune.com/guides/claude-opus-5-5-personality) and [Fable 5.1 guide](https://agent-tune.com/guides/fable-personality) when writing custom instructions. A high Agreeableness score on a quiz is a good reason to test a directness rule on real tasks—not proof that a prompt works without testing. Draft rules in the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator) and compare before-and-after replies in the [A/B test bench](https://agent-tune.com/tools/instruction-test-bench).

## Data, methods and reproduction

- [Response vectors (JSON)](https://agent-tune.com/research/data/september-2026-responses.json): 2,000 complete fresh-session assessments and three canonical Grok vectors.
- [Recomputed summaries (JSON)](https://agent-tune.com/research/data/september-2026-summary.json) and [numeric summary (CSV)](https://agent-tune.com/research/data/september-2026-summary.csv): counts, legacy labels, tie sets, means, and sample SDs.
- [Scoring definitions (JSON)](https://agent-tune.com/research/data/september-2026-instruments.json): item order, scale bounds, and reverse-scoring keys.
- [Protocol and provenance (JSON)](https://agent-tune.com/research/data/september-2026-protocols.json): prompts, SHA-256 hashes, deduplication notes, and reported figures.
- [Offline scorer (Node.js)](https://agent-tune.com/research/data/september-2026-score.cjs): run `node september-2026-score.cjs > reproduced-summary.json` locally with zero model calls.

Every vector was validated for length, integer values, and scale bounds, and all code and data are versioned in the [website repository](https://github.com/bernardjhuang/agenttune-website).

## Questions people ask.

### Are all five models INTJ?

No. GPT-6 Astra splits between ISTJ (45 tie-free) and INTJ (19 tie-free). Sol, Opus 5.5, and Fable 5.1 mostly score INTJ, though several runs tie on S/N or T/F. Grok 4.6 has one canonical INTJ vector.

### Does this research prove AI models have personalities?

No. It measures how models answer human questionnaires under specific prompts. It does not prove inner experience or predict task accuracy.

## Sources.

- [AgentTune: all five instruments and source attributions](https://agent-tune.com/tests/)

- [Earlier AgentTune research and methodology limits](https://agent-tune.com/research)

- [Response-level data and collection protocols](https://agent-tune.com/research/data/september-2026-protocols.json)

## Keep going.

- [Guide: Claude Opus 5.5 results and tuning examples](https://agent-tune.com/guides/claude-opus-5-5-personality)
- [Guide: Claude Fable 5.1 results and tuning examples](https://agent-tune.com/guides/fable-personality)
- [Tool: Custom-instructions generator](https://agent-tune.com/tools/custom-instructions-generator)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
