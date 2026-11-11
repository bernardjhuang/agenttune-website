Source: https://agent-tune.com/guides/open-source-disc-test-odat
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · ODAT (DISC)

# Open-source DISC assessment (ODAT): 16 questions and scorer.

By Bernard Huang · Updated November 5, 2026

The ODAT measures four workplace communication dimensions—Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)—using 16 statements rated 1 to 5 (4 items per dimension, giving raw totals from 4 to 20). When one dimension leads uniquely and the second-place dimension is within 2 points without a runner-up tie, the scorer reports a two-letter blend (such as SC or CS). Equal top scores are reported as an explicit tie.

## How the 16-item ODAT is structured and scored.

Each of the four DISC quadrants is measured by four direct statements rated from 1 (Disagree) to 5 (Agree), with no reverse-keyed items:

| Quadrant | Workplace communication focus | Score range | Two-letter blend rule |
| --- | --- | --- | --- |
| Dominance (D) | Directness, speed, bottom-line results, and appetite for challenge. | 4 to 20 (4 items × 1–5) | Reports DI, DC, or DS when runner-up is within 2 points. |
| Influence (I) | Energy, brainstorming, persuasion, and narrative momentum. | 4 to 20 (4 items × 1–5) | Reports ID, IS, or IC when runner-up is within 2 points. |
| Steadiness (S) | Patience, predictable pacing, cooperation, and step-by-step support. | 4 to 20 (4 items × 1–5) | Reports SC, SI, or SD when runner-up is within 2 points. |
| Conscientiousness (C) | Precision, verification, edge-case auditing, and structured detail. | 4 to 20 (4 items × 1–5) | Reports CS, CD, or CI when runner-up is within 2 points. |

Because each quadrant sums only four items, two dimensions frequently finish with the exact same integer total. Earlier scripts broke ties in fixed order (D, I, S, C), which turned a 16-to-16 tie between Steadiness and Conscientiousness into an automatic SC label. Our deterministic scorer at [/resources/scoring/score.js](https://agent-tune.com/resources/scoring/score.js) reports top-score ties openly (for example, S/C) so you can inspect both styles.

## How AI models score on the ODAT (September 2026 data).

When we administered the 16-item ODAT across 400 fresh sessions in September 2026 (plus Grok 4.6's single canonical self-report and Muse Spark 1.3's reported aggregate), every model clustered in the Steadiness (S) and Conscientiousness (C) quadrants while keeping Dominance near the floor:

| Model cohort | D mean (/20) | I mean (/20) | S mean (/20) | C mean (/20) | Tie-aware top outcomes |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra (n = 100) | 5.12 | 9.96 | 17.55 | 16.40 | S leads in 99 runs, S/C tied in 1 (legacy: SC 84 · S 15 · CS 1) |
| GPT-6 Sol (n = 100) | 5.42 | 8.24 | 16.18 | 16.68 | C leads in 53 runs, S leads in 8, C/S tied in 39 (legacy: CS 53 · SC 47) |
| Claude Opus 5.5 (n = 100) | 4.00 | 9.00 | 16.92 | 16.35 | S leads in 64 runs, C leads in 8, S/C tied in 28 (legacy: SC 92 · CS 8) |
| Claude Fable 5.1 (n = 100) | 5.00 | 8.91 | 16.00 | 16.05 | C leads in 25 runs, S leads in 24, S/C tied in 51 (legacy: SC 75 · CS 25) |
| Grok 4.6 (1 canonical self-report) | 6.00 | 8.00 | 11.00 | 18.00 | Pure C (18 vs 11; 7-point margin) |

Notice Claude Fable 5.1: under legacy tie-breaking it looked 75% SC, when in reality Steadiness and Conscientiousness tied at 16 to 16 in 51 of 100 sessions.

## Take the free DISC test or grab the prompts.

- Take the test in your browser (no email required): [/tests/disc](https://agent-tune.com/tests/disc)
- Machine-readable Markdown spec: [/tests/disc.md](https://agent-tune.com/tests/disc.md)
- Copy-paste DISC prompts for all 4 styles: Read [DISC AI prompts for all 4 styles](https://agent-tune.com/guides/disc-ai-prompts) or open the four profiles in the [DISC library](https://agent-tune.com/library/#disc).

```markdown
## Communication preferences (DISC Conscientiousness / C)

- Lead with the verified answer, exact parameters, and any boundary conditions.
- Show the evidence, numbers, or code diff behind your recommendation.
- Use structured prose or compact tables; skip vague generalizations and hype.
- Flag unverified assumptions, edge cases, and failure modes explicitly.
```

## Questions people ask.

Is the AgentTune DISC test really free with no email required?

Yes. The 16-item ODAT assessment at /tests/disc runs completely in your browser with no email gate, no account sign-up, and instant scoring.

How many questions are on the ODAT DISC test?

There are 16 questions—four for Dominance (D), four for Influence (I), four for Steadiness (S), and four for Conscientiousness (C)—each rated on a 1-to-5 agreement scale.

When does the scorer report a two-letter DISC blend like SC or DI?

When one dimension has the unique highest score (between 4 and 20) and a single runner-up dimension is within 2 points of the leader, the scorer reports the two-letter blend. If two dimensions tie for first place, it reports the tie explicitly.

Why do AI models almost always score S or C on DISC?

Default assistant training rewards patience, cooperation (Steadiness), and careful adherence to instructions (Conscientiousness) while discouraging competitiveness (Dominance). If you want a bottom-line D style, apply the DISC Dominance tuning.

## What changed.

- November 5, 2026 First published with ODAT quadrant scoring rules, blend arithmetic, and September 2026 model comparisons.

## Sources.

- [AgentTune Interactive DISC (ODAT) Runner](https://agent-tune.com/tests/disc)

- [Open Psychometrics Project](https://openpsychometrics.org/)

- [AgentTune Deterministic Scorer (score.js)](https://agent-tune.com/resources/scoring/score.js)

- [AgentTune Research: Five AI models on five personality tests (September 2026)](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Interactive Test: Take the free 16-question DISC test (no email)](https://agent-tune.com/tests/disc)
- [Prompts: DISC AI prompts for all 4 styles (D, I, S, C)](https://agent-tune.com/guides/disc-ai-prompts)
- [Guide: The five open personality tests, explained](https://agent-tune.com/guides/open-personality-tests)
- [Guide: Open-source MBTI test (OEJTS 1.2): 32 questions and scorer](https://agent-tune.com/guides/open-source-mbti-test-oejts)
- [Guide: Open-source Enneagram test (OEPS): 36 questions and scorer](https://agent-tune.com/guides/open-source-enneagram-test)
