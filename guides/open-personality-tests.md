Source: https://agent-tune.com/guides/open-personality-tests
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Tests

# The five open personality tests, explained.

By Bernard Huang · Updated September 26, 2026 · [Markdown (.md)](https://agent-tune.com/guides/open-personality-tests.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** AgentTune includes five free in-browser personality quizzes: a 32-question MBTI-style survey (OEJTS), a 36-question Enneagram survey (OEPS adaptation), a 16-question DISC work-style survey (ODAT), a 50-question Big Five trait survey (IPIP-50), and a 36-question Attachment survey (ECR-R). Every quiz scores locally in your browser and keeps ties visible. Original AgentTune code and templates are MIT-licensed; see the fine print below for upstream item terms.

## At a glance.

| Test | Measures | Items · scale | Returns | Source |
| --- | --- | --- | --- | --- |
| [OEJTS](https://agent-tune.com/tests/mbti) | Four MBTI-style preferences | 32 · 1 to 5 between two statements | Four-letter type when all axes resolve; tied axes marked X | Adapted from the Open Extended Jungian Type Scales (Open Psychometrics) |
| [OEPS (36-item)](https://agent-tune.com/tests/enneagram) | Enneagram type | 36 · 1 to 5 agreement | Type 1 to 9 (4–20 each), all tied leaders, and adjacent wing | 36-item adaptation of the Open Enneagram of Personality Scales (full OEPS has 54 items) |
| [ODAT](https://agent-tune.com/tests/disc) | DISC workplace style | 16 · 1 to 5 agreement | D, I, S or C (4–20 each), tied leaders, and 2-point blends | Adapted from the Open DISC Assessment Test (Open Psychometrics) |
| [IPIP-50](https://agent-tune.com/tests/big-five) | Big Five trait dimensions | 50 · 1 to 5 accuracy | Five raw totals (10–50) and item means (1–5) | International Personality Item Pool, Goldberg’s 50-item markers (public domain) |
| [ECR-R](https://agent-tune.com/tests/attachment) | Adult attachment style | 36 · 1 to 7 agreement | Anxiety and avoidance means (1–7) plus quadrant label | Experiences in Close Relationships-Revised (Fraley, Waller & Brennan, 2000) |

All five questionnaires run client-side in your browser and never upload your responses. Each test also has a machine-readable Markdown specification at `/tests/<test>.md` and a shared deterministic scorer at [the shared deterministic scorer (score.js)](https://agent-tune.com/resources/scoring/score.js). Review [instrument-rights.json](https://agent-tune.com/resources/content/instrument-rights.json) before redistributing third-party item text.

## OEJTS: the 32-item MBTI-style questionnaire.

**What it measures.** Four preference axes: Extraversion vs. Introversion (E/I), Sensing vs. Intuition (S/N), Thinking vs. Feeling (T/F), and Judging vs. Perceiving (J/P). Each of the 32 items places two statements at opposite ends of a 1-to-5 scale, with eight items per axis.

| Axis | Poles | Items | Sum & exact tie point |
| --- | --- | --- | --- |
| E / I | Extraversion vs Introversion | 8 bipolar (1–5) | Sum = 48; exact tie at 24 vs 24 (margin 0) |
| S / N | Sensing vs Intuition | 8 bipolar (1–5) | Sum = 48; exact tie at 24 vs 24 (margin 0) |
| T / F | Thinking vs Feeling | 8 bipolar (1–5) | Sum = 48; exact tie at 24 vs 24 (margin 0) |
| J / P | Judging vs Perceiving | 8 bipolar (1–5) | Sum = 48; exact tie at 24 vs 24 (margin 0) |

**Scoring & limits.** Earlier reporting rules defaulted tied axes to I, N, T, or J. Our current scorer ([score.js](https://agent-tune.com/resources/scoring/score.js)) marks any tied axis as `X`, offers an optional tie-breaker, and only assigns a four-letter code when all four axes resolve. Take it locally at [the free MBTI-style test](https://agent-tune.com/tests/mbti) or fetch [the MBTI Markdown specification](https://agent-tune.com/tests/mbti.md).

## OEPS: the 36-item Enneagram adaptation.

**What it measures.** Relative agreement across nine Enneagram types using a 36-item adaptation (four items per type, rated 1 to 5, no reverse-keyed items). The upstream live OEPS has 54 items.

**Scoring.** Sum the four items for each type (range 4 to 20). When one type has the unique highest total, its higher-scoring adjacent neighbor is reported as the wing (or no wing if the two adjacent types tie). When two or more types share the highest score, all tied leaders are reported together without forcing a winner.

**Limits.** Four items per type is a compact scale, so top-score ties are frequent: 40 to 65 of 100 runs tied at the top across all four fresh-session AI cohorts in September 2026. The [open-source Enneagram scorer & React starter guide](https://agent-tune.com/guides/enneagram-test-react-typescript) lets you inspect the exact tie arithmetic.

## ODAT: the 16-item DISC questionnaire.

**What it measures.** Four workplace modes—Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)—across 16 statements rated 1 to 5 (four items per dimension).

**Scoring.** Each dimension sums four items from 4 to 20. If one letter leads uniquely and the runner-up is within 2 points without a runner-up tie, the result is reported as a two-letter blend (such as SC or CS). Equal top totals remain an explicit tie rather than defaulting S ahead of C.

**Limits.** In our model evaluations, Dominance sits near the floor (4.0 to 6.0 out of 20) while Steadiness and Conscientiousness sit within a point or two of each other, producing top-score ties in 51 of 100 Fable runs and 39 of 100 Sol runs.

## IPIP-50: the 50-item Big Five test.

**What it measures.** Five continuous dimensions from Goldberg’s public-domain International Personality Item Pool markers: Openness (Intellect/Imagination), Conscientiousness, Extraversion, Agreeableness, and Neuroticism (scored in the opposite direction of IPIP Emotional Stability). Fifty statements rated 1 (very inaccurate) to 5 (very accurate), 10 per trait, with 18 reverse-keyed items.

**Scoring.** Reverse-keyed items use `6 - response`. Each dimension sums its 10 scored items (raw total 10 to 50; item mean 1.0 to 5.0). Missing or out-of-range answers return no final score.

**Limits.** Current results report raw totals and item averages without population percentiles or automatic template assignment. The earlier site’s heuristic reference centers had no verified normative sample. After reviewing your five scores, you can preview and combine any of the 10 high/low Big Five communication templates in the [Big Five library](https://agent-tune.com/library/#ocean) or [generator](https://agent-tune.com/tools/custom-instructions-generator).

## ECR-R: the 36-item attachment questionnaire.

**What it measures.** Two adult attachment dimensions—attachment anxiety (items 1–18) and attachment avoidance (items 19–36)—rated 1 to 7, with 14 reverse-keyed items.

**Scoring.** Reverse-keyed items use `8 - response`. Each axis is the mean of its 18 items (1.00 to 7.00). Using the scale midpoint of 4.00, scores map to four site categories: Secure (both ≤ 4), Anxious (anxiety > 4, avoidance ≤ 4), Avoidant (anxiety ≤ 4, avoidance > 4), and Disorganized (both > 4).

**Limits.** Because the statements describe close human relationships, administering them to a language model requires prompt translation, and small boundary shifts (such as Grok 4.6’s reported avoidance of 4.06 vs. a 4.00 cutoff) can flip a quadrant label.

## The fine print: historical research provenance and licensing.

Published studies in the [research hub](https://agent-tune.com/research) used the frozen September 2026 and May 2026 adaptations. As documented in [rights-migration.json](https://agent-tune.com/research/data/rights-migration.json), legacy MBTI item 1 and two legacy Enneagram items contained undocumented substitutions; raw response vectors and numeric summaries remain preserved for exact reproduction via [the reproducibility guide](https://agent-tune.com/guides/reproduce-ai-personality-research).

Every questionnaire is optional. If you already know how you want your AI to respond, use the [communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) or [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator) directly.

## Questions people ask.

### Are all five questionnaires MIT licensed?

No. Original AgentTune software, scorers, and communication templates are MIT licensed, while questionnaire item text is governed by each source instrument’s terms (such as public-domain IPIP markers and Open Psychometrics / ECR-R source terms). Check instrument-rights.json before redistributing items.

### Does the Big Five test report population percentiles?

No. It reports raw dimension totals (10 to 50) and item averages (1.0 to 5.0) so scores are transparent and never confused with a normed clinical percentile.

### Where do my answers go when I take a test?

They stay in your browser tab. Scoring runs locally in JavaScript, and individual responses are never sent to an AgentTune server.

### Can an AI agent inspect the test specifications?

Yes. Each questionnaire has a Markdown specification at /tests/<test>.md and is accessible via the get_test_spec tool on the AgentTune MCP server (https://agent-tune.com/mcp).

## What changed.

- September 25, 2026 First published.

- September 26, 2026 Updated with versioned scorer details, explicit tie rules, and per-instrument provenance links.

## Sources.

- [AgentTune tests hub (interactive runners and Markdown specs for all five)](https://agent-tune.com/tests/)

- [Open Psychometrics Project: OEJTS, OEPS and ODAT](https://openpsychometrics.org/)

- [IPIP: Goldberg’s 50-item Big Five markers](https://ipip.ori.org/)

- [Fraley, Waller and Brennan (2000), the ECR-R](https://doi.org/10.1037/0022-3514.78.2.350)

- [What five AI models say about themselves (September 2026 study)](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Tests: Take any of the five tests](https://agent-tune.com/tests/)
- [Guide: Open-source Enneagram scorer & React starter](https://agent-tune.com/guides/enneagram-test-react-typescript)
- [Prompts: DISC AI prompts & 12 workplace blends](https://agent-tune.com/guides/disc-ai-prompts)
- [Prompts: Big Five AI prompts & IPIP-50 interpreter](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
- [Research: The research hub](https://agent-tune.com/research)
- [Reference: AI personality glossary: 32 terms explained](https://agent-tune.com/guides/ai-personality-glossary)
