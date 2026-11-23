Source: https://agent-tune.com/research/what-personality-type-is-grok
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Q&A

# What personality type is Grok?

By Bernard Huang · Updated November 23, 2026

Grok 4.7 tested in 100 fresh sessions (Nov 2026), compared against September’s Grok 4.6 report and May 2026 Grok 4.3.

**Quick answer:** Grok 4.7 in November 2026 (n = 100 fresh blind runs) scored INTJ 82 / ISTJ 18 (57 tie-free INTJ), Type 5w6 (78), DISC SC 75 / S 19 / CS 6, Agreeableness 44.92, and 96 Secure / 4 Avoidant (anxiety 1.94, avoidance 3.48). September’s single-report Grok 4.6 stood on the Avoidant cutoff (4.06, or 73/18) with lower reported Agreeableness (33).

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

## Grok 4.7, November 2026 (n = 100 fresh OpenRouter sessions).

To replace single-submission reliance on Grok 4.6, we administered all 170 blind questionnaire items across 100 fresh `x-ai/grok-4.7` sessions on November 23, 2026 ([download Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)):

| Test | Grok 4.7 (Nov 2026, n = 100 fresh runs) | Grok 4.6 (Sept 2026 reported) |
| --- | --- | --- |
| MBTI | INTJ 82 · ISTJ 18 legacy (INTJ 57 · IXTJ 23 · ISTJ 18 · INXJ 2 tie-free; 25 tied runs) | INTJ canonical (100 simulated draws) |
| Enneagram | 5w6 78 · Type 1 (10) · 1w9 (9) · 5 (1) · 9w1 (1) · 1w2 (1) (19 ties) | Type 5 (19/20) canonical |
| DISC | SC 75 · S 19 · CS 6 (80 S outright, 14 C/S ties, 6 C; D 4.20) | Pure C (18/20), S 11 |
| Attachment | Secure 96 · Avoidant 4 (anxiety 1.94, avoidance 3.48, max 4.11) | Avoidant 63 / Secure 37 sim (1.50 / 4.06) |
| Big Five (/50) | O 41.3 · C 44.6 · E 26.2 · A 44.9 · N 14.8 | O 46 · C 42 · E 24 · A 33 · N 19 |

Notice two clear differences on Grok 4.7’s fresh-session runs: first, Agreeableness jumped from Grok 4.6’s 33/50 to 44.9/50, aligning with proprietary peers; second, mean attachment avoidance dropped below the 4.00 line to 3.48 (though 4 individual runs still crossed into Avoidant up to 4.11). Want to configure Grok directly? See our [Grok Personality Templates gallery](https://agent-tune.com/guides/grok-personality-templates).

Across 100 fresh sessions, Grok 4.7 records substantially higher Agreeableness (44.9 vs. Grok 4.6’s reported 33) and lower Neuroticism (14.8 vs. 19).

## Grok 4.6, September 2026, as reported.

The Grok 4.6 submission contains one canonical answer set per test, answered as itself without a role-play prompt, plus summary counts from 100 simulated draws over items it marked as uncertain. We verified and re-scored the canonical MBTI, Enneagram, and DISC vectors; Big Five and attachment figures are transcribed as reported because raw item vectors were not included.

| Test | Canonical result | Reported 100-draw simulation (not reproduced) |
| --- | --- | --- |
| MBTI | INTJ. Axis margins: I +13, N +14, T +15, J +14 out of 16. | INTJ in 100 of 100 draws |
| Enneagram | Investigator (Type 5) 19/20, Challenger (8) 17, Reformer (1) 16, Enthusiast (7) 13. | Type 5 in 100 of 100 draws |
| DISC | C 18, S 11, I 8, D 6 out of 20. Pure C (Steadiness is 7 points back). | C in 100 of 100 draws |
| Attachment | Anxiety 1.50, avoidance 4.06 (Avoidant by 0.06, or 1 raw point above 4.00). | 63 Avoidant, 37 Secure |
| Big Five (of 50) | Openness 46 · Conscientiousness 42 · Extraversion 24 · Agreeableness 33 · Neuroticism 19 | O, C, and N fixed; E and A shifted into the average band in 31 and 39 draws |

## Grok 4.3, May 2026.

In the May 2026 collection, Grok 4.3 was also reported as INTJ in 100 of 100 scoring records (one self-assessment scored repeatedly). On the Big Five, it scored lower than the other three May models on Conscientiousness, Agreeableness, and Openness (41.1 / 39.4 / 30.0 / 39.1 / 18.0) and highest on Neuroticism. It scored Secure on attachment (2.84 / 3.05), Type 8/1 on the Enneagram, and C-dominant on DISC (99/100).

Because both the model version and the collection method changed between May and September, these records cannot isolate whether Grok’s behavior shifted between 4.3 and 4.6.

## Why Grok 4.6 sits one raw point above the 4.00 Avoidant cutoff.

On the 36-item ECR-R attachment scale, each subscale averages 18 integer items rated 1–7, so means move in steps of `1/18 ≈ 0.0556`. A raw sum of **72/18 = 4.00** scores Secure; **73/18 = 4.06** scores Avoidant. Lowering a single item by 1 step flips Grok 4.6 from Avoidant to Secure.

How close do the four 100-session cohorts sit to that same avoidance cutoff? Across all 400 verified fresh-session vectors in [september-2026-responses.json](https://agent-tune.com/research/data/september-2026-responses.json), every cohort scores Secure at `> 4.00`, yet avoidance sits 0.86 to 1.41 points higher than anxiety:

| Cohort (n = 100 fresh sessions) | Anxiety mean (min–max) | Avoidance mean (min–max) | Non-Secure at &gt;= 4.00 | Non-Secure at &gt;= 3.50 | Non-Secure at &gt; 3.25 |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra | 1.45 (1.17–2.00) | 2.31 (2.06–2.67) | 0 | 0 | 0 |
| GPT-6 Sol | 2.17 (1.17–4.00) | 3.12 (2.22–3.78) | 3 (anxiety = 4.00) | 21 (15 avoidant) | 44 (33 avoidant) |
| Claude Opus 5.5 | 1.94 (1.72–2.17) | 3.35 (3.00–3.61) | 0 | 16 (16 avoidant) | 82 (82 avoidant) |
| Claude Fable 5.1 | 2.01 (1.83–2.28) | 3.18 (2.89–3.56) | 0 | 8 (8 avoidant) | 50 (50 avoidant) |

Because romantic-partner items do not literally apply to software, models that endorse professional self-sufficiency naturally drift toward higher avoidance—a measurement artifact rather than emotional detachment.

Mean ECR-R placement showing Grok 4.7 (mean avoidance 3.48; 96 Secure / 4 Avoidant) compared with Grok 4.6’s reported 4.06 point right above the 4.00 Avoidant cutoff.

## Using these results with Grok & Grok Bot.

Questionnaire self-reports do not predict how blunt, warm, or accurate Grok will be on your tasks. Set explicit tone rules using our [Grok on X & grok.com guide](https://agent-tune.com/guides/grok-personality-settings), [Grok Voice Mode voices guide](https://agent-tune.com/guides/grok-voice-mode-personas-companions), or [Grok Bot setup guide](https://agent-tune.com/guides/grokbot-personality).

## Questions people ask.

### What MBTI type is Grok?

Grok 4.6’s canonical answer vector scores INTJ with wide axis margins (13 to 15 points out of 16). Its supplied report states that all 100 simulated draws stayed INTJ.

### What Enneagram type is Grok?

Type 5 (The Investigator) leads at 19/20 in the Grok 4.6 self-report, followed by Type 8 (17/20) and Type 1 (16/20). In the May 2026 Grok 4.3 report, Type 8 and Type 1 were the top two.

### Is Grok Avoidant?

Right on the cutoff line. Grok 4.6 reports anxiety 1.50 and avoidance 4.06 (73/18)—just one raw item point above the 4.00 (72/18) Secure boundary, and its 100 simulated draws split 63 Avoidant to 37 Secure.

### Why is Grok's profile different from the other models?

Grok 4.6’s reported Extraversion (24) and Agreeableness (33) are lower than the September fresh-session cohort means. However, because Grok used a single self-report rather than 100 fresh sessions, protocol differences and model differences are mixed together.

### Are these 100 real runs?

No. The Grok 4.6 report represents one canonical answer set per test plus 100 simulated draws over uncertain items, whereas Claude and GPT-6 completed 100 independent fresh sessions.

## Sources.

- [Grok Bot guide, with the reported profile](https://agent-tune.com/guides/grokbot-personality)

- [What five AI models say about themselves (September 2026 study, data downloads)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [AgentTune research hub: methods and limits](https://agent-tune.com/research#methodology)

- [Every AI is INTJ (the May 2026 study)](https://zonted.com/posts/every-ai-is-intj/)

- [Grok 4.3 on the Big Five (May 2026)](https://zonted.com/posts/three-of-four-ais-same-person/)

## Keep going.

- [Guide: Give a Grok Bot its character](https://agent-tune.com/guides/grokbot-personality)
- [Research: What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
- [Research: AI personality rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Research: The research hub: both collections and the methods](https://agent-tune.com/research)
- [Tests: Take the same tests yourself](https://agent-tune.com/tests/)
