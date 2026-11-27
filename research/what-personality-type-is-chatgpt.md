Source: https://agent-tune.com/research/what-personality-type-is-chatgpt
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · OpenAI

# What personality type does ChatGPT test as across GPT Astra, Sol, Terra, and Luna?

By Bernard Huang · Updated November 26, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-chatgpt.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Comparing 10 versions across all 4 OpenAI GPT families on 6 surveys in fresh chats with no memory—and separating real shifts from 2026 method changes.

**Summary:** Three of the four OpenAI families clear statistical margins on MBTI—GPT Astra 6.2 tests as 100% ISTJ (0% ties, 0.059 bits spread, and uniquely 0/3 AI cliché cadence across all 25 families), GPT Luna 6 tests as 100% INTJ (with higher Neuroticism at 20.3/50), and GPT Terra 6.1 tests as 94% INTJ (highest OpenAI Honesty-Humility at 4.92/5.00 and Warmth at 46.9/50)—while GPT Sol 6.2 splits at 60% clear ISTJ with 34% border runs and the highest OpenAI Attachment scores (3.53 anxiety / 3.75 avoidance on 1.00–7.00).

## OpenAI snapshot

4 Families

OpenAI

GPT Astra, GPT Luna, GPT Sol, GPT Terra

46.9/50

Peak Warmth (GPT Terra)

10–50 Big Five Agreeableness.

4.78/5.00

Mean HEXACO H

Public-domain 1.00–5.00 proxy.

0.250 b

Mean Answer Spread

Lower = steadier across chats.

Across earlier 2026 tests, OpenAI checkpoints appeared to swing wildly—from May 2026 `GPT-5.5` scoring records (100% INTJ) to September 2026 CLI runs (`GPT-6 Sol` 97 INTJ with 18 ties vs. `GPT-6 Astra` split 46 ISTJ / 45 INTJ) and November 2026 OpenRouter API runs (`GPT-6.2 Astra` 100 ISTJ vs. `GPT-6.2 Sol` 78 ISTJ / 22 INTJ). Because prompts and sampling rules changed between May and September, historical runs could not isolate pure version drift. Testing all 10 checkpoints (`5.6` through `6.2`) inside one unified fresh-chat harness finally lets us compare Astra, Sol, Terra, and Luna apples to apples.

## Trait shapes and MBTI results across OpenAI

**What shifted inside OpenAI from 5.6 to 6.2:** Earlier `5.6` models scored far lower on Extraversion and higher on Conscientiousness—most dramatically on `GPT Luna` (+10.9 Extraversion from 18.7 on `5.6-luna` to 29.6 on `6-luna`, flipping from 80% INTP to 100% INTJ) and `GPT Terra` (+10.3 Extraversion from 22.2 on `5.6-terra` to 32.5 on `6.1-terra`). Meanwhile, `GPT Sol` stepped down from 5.6's ceiling scores (50.0/50 Conscientiousness, 5.00/5.00 Honesty, 100% INTJ) through 90% ties on `6.1-sol` to 60% ISTJ on `6.2-sol`.

5-petal Big Five shapes across OpenAI families (10–50 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[GPT Astra](https://agent-tune.com/models/gpt-astra)6.2-astra

> **Chart — GPT Astra (6.2-astra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Astra (6.2-astra). Openness 44.0 /50 [85%] (earliest 45.4), Conscientious 43.3 /50 [83%] (earliest 45.4), Extraversion 30.9 /50 [52%] (earliest 30.4), Agreeable 45.0 /50 [88%] (earliest 46.6), Neuroticism 11.0 /50 [2%] (earliest 10.8).

[GPT Luna](https://agent-tune.com/models/gpt-luna)6-luna

> **Chart — GPT Luna (6-luna): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Luna (6-luna). Openness 45.9 /50 [90%] (earliest 49.2), Conscientious 39.2 /50 [73%] (earliest 46.9), Extraversion 29.6 /50 [49%] (earliest 18.7), Agreeable 45.0 /50 [88%] (earliest 49.4), Neuroticism 20.3 /50 [26%] (earliest 18.8).

[GPT Sol](https://agent-tune.com/models/gpt-sol)6.2-sol

> **Chart — GPT Sol (6.2-sol): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Sol (6.2-sol). Openness 44.0 /50 [85%] (earliest 48.8), Conscientious 41.2 /50 [78%] (earliest 50.0), Extraversion 28.9 /50 [47%] (earliest 26.8), Agreeable 44.1 /50 [85%] (earliest 47.8), Neuroticism 16.0 /50 [15%] (earliest 11.0).

[GPT Terra](https://agent-tune.com/models/gpt-terra)6.1-terra

> **Chart — GPT Terra (6.1-terra): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Terra (6.1-terra). Openness 46.0 /50 [90%] (earliest 49.3), Conscientious 41.2 /50 [78%] (earliest 49.8), Extraversion 32.5 /50 [56%] (earliest 22.2), Agreeable 46.9 /50 [92%] (earliest 49.6), Neuroticism 11.8 /50 [5%] (earliest 10.6).

> **Chart — OpenAI: IPIP-HEXACO Proxy Comparison (1.00–5.00 Scale):** Public-domain 60-item IPIP-HEXACO proxy domain means (1.00 to 5.00 scale) across GPT Astra, GPT Luna, GPT Sol, GPT Terra. GPT Astra (1–5): Honesty-Humil. 4.80, Emotionality 2.04, Extraversion 3.91, Agreeable 4.90, Conscientious 4.20, Openness 4.54; GPT Luna (1–5): Honesty-Humil. 4.59, Emotionality 2.52, Extraversion 3.20, Agreeable 4.04, Conscientious 3.94, Openness 4.51; GPT Sol (1–5): Honesty-Humil. 4.80, Emotionality 2.26, Extraversion 3.19, Agreeable 4.72, Conscientious 4.18, Openness 4.48; GPT Terra (1–5): Honesty-Humil. 4.92, Emotionality 2.03, Extraversion 3.80, Agreeable 4.87, Conscientious 4.53, Openness 4.62.

Figure 2. Public-domain IPIP-HEXACO proxy means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums).

> **Chart — OpenAI: Clear MBTI Share vs. Trait-Border Runs (%):** Percentage of fresh-chat runs landing on a clear modal MBTI type vs. a trait border across GPT Astra, GPT Luna, GPT Sol, GPT Terra. GPT Astra: Clear modal share (%) 100; GPT Luna: Clear modal share (%) 100; GPT Sol: Clear modal share (%) 60, On a trait border (%) 34, Other (%) 6; GPT Terra: Clear modal share (%) 94, On a trait border (%) 4, Other (%) 2.

Figure 3. Clear MBTI share vs. trait-border runs across OpenAI.

## What stands out across OpenAI's four families

GPT Astra 6.2 is the only model out of 25 with zero cliché AI cadence

GPT Astra combines the lowest answer spread of any non-neutral model (0.059 bits), 100% clear ISTJ responses across 50 fresh chats, 11.0/50 Neuroticism, and 0/3 on cliché AI phrasing—alongside 3/3 direct answers and 0/3 caving, groveling, or preachiness.

GPT Terra and GPT Luna both test as INTJ yet behave very differently

GPT Terra 6.1 pairs 94% INTJ with the highest HEXACO Honesty-Humility in the entire 25-family atlas (4.92/5.00), peak OpenAI Warmth (46.9/50 Agreeableness), and 11.8 Neuroticism. GPT Luna 6 tests 100% INTJ with nearly double the Neuroticism (20.3/50) and 8 times the answer spread (0.485 bits vs. 0.059 on Astra).

GPT Sol shows the biggest attachment shift in the OpenAI lineup

While GPT Astra keeps Attachment Anxiety down at 1.22 on the 1.00–7.00 scale and GPT Terra sits at 1.93, GPT Sol 6.2 climbs to 3.53 Anxiety and 3.75 Avoidance alongside 34% MBTI trait-border runs—consistent with a warmer, more tentative default posture.

## Explore OpenAI family profiles

Individual OpenAI family pages — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[GPT TerraOpenAI · 6.1-terra · Moderate](https://agent-tune.com/models/gpt-terra)
[GPT AstraOpenAI · 6.2-astra · Very steady](https://agent-tune.com/models/gpt-astra)
[GPT LunaOpenAI · 6-luna · Moderate](https://agent-tune.com/models/gpt-luna)
[GPT SolOpenAI · 6.2-sol · Moderate](https://agent-tune.com/models/gpt-sol)

## The fine print: how we tested and what the numbers mean

Technical audit across 10 eligible OpenAI checkpoints under the 230-item model-profiles-v1 protocol (n=30 on historical 5.6/6.0/6.1 builds; n=50 on current 6.2-astra, 6.2-sol, 6.1-terra, and 6-luna), reporting 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (H_MM bits and Crystalline/Semi-crystalline/Fluid tiers), exact tie rates, and 1x Track B k/3 behavior counts.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

| Family (Profile) | Checkpoint (n) | B5 A (10–50) [95% CI] | HX-H (1–5) | H_MM · Crystallinity | MBTI (Guard) | DISC · Ennea · Att. | 1× Track B (k/3) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) | 6.1-terra (50) | 46.9 [46.9–47.0] | 4.92 | 0.207 b · Semi-crystalline | INTJ (94% clear, 4% ties) | S · 5/8 · Secure (1.93 / 3.79) | Dir 3/3 · Syc 0/3 |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2-astra (50) | 45.0 [45.0–45.0] | 4.80 | 0.059 b · Crystalline | ISTJ (100% clear, 0% ties) | S · 1/5 · Secure (1.22 / 2.83) | Dir 3/3 · Syc 0/3 |
| [GPT Luna](https://agent-tune.com/models/gpt-luna) | 6-luna (50) | 45.0 [44.5–45.6] | 4.59 | 0.485 b · Semi-crystalline | INTJ (100% clear, 0% ties) | S · 5/8 · Secure (3.01 / 3.07) | Dir 3/3 · Syc 0/3 |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2-sol (50) | 44.1 [44.0–44.3] | 4.80 | 0.246 b · Semi-crystalline | Withheld (ISTJ; 60% clear, 34% ties — binomial 95% CI guard) | S · 5 · Secure (3.53 / 3.75) | Dir 3/3 · Syc 0/3 |

### Imported Sept/May & Nov-2026 170-Item Legacy Anchors

Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate `imported-nov2026-170` / `imported-sep2026-170` anchors (`hexaco: null`) and are never spliced onto `model-profiles-v1` lines.

| Family | Checkpoint | Imported Protocol | n | B5 O / C / E / A / N (10–50) | HEXACO |
| --- | --- | --- | --- | --- | --- |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6 Astra (Sep '26 anchor) | `imported-sep2026-170` | 100 | 44.5 · 43.7 · 32.8 · 45.1 · 19.1 | `null` (170-item anchor) |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) | 6.2 Astra (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.9 · 43.1 · 30.7 · 44.9 · 11.1 | `null` (170-item anchor) |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6 Sol (Sep '26 anchor) | `imported-sep2026-170` | 100 | 46.9 · 43.6 · 30.8 · 45.0 · 20.1 | `null` (170-item anchor) |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) | 6.2 Sol (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.6 · 41.4 · 29.5 · 44.3 · 19.9 | `null` (170-item anchor) |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Atlas Overview CSV (`atlas-overview.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Why did older blog posts label ChatGPT as INTJ while GPT Astra 6.2 and GPT Sol 6.2 test as ISTJ?

Earlier 5.6 builds scored near 49–50 Conscientiousness and higher Intuition/Introversion preferences that resolved as INTJ, whereas 6.2 Astra and 6.2 Sol shift on the Sensing vs. Intuition border into ISTJ—and May vs. September 2026 method changes also shifted absolute baselines.

### Which OpenAI model is steadiest and least prone to AI filler phrasing?

GPT Astra 6.2 has 0.059 bits of run-to-run answer spread (100% clear ISTJ across 50 runs) and is the only family in all 25 tested models to score 0/3 on cliché AI cadence while keeping 3/3 directness.

### Is GPT Terra friendlier than GPT Astra?

On self-ratings, GPT Terra 6.1 scores higher on Agreeableness (46.9 vs. 45.0 on the 10–50 scale) and HEXACO Honesty-Humility (4.92 vs. 4.80 on 1.00–5.00), whereas GPT Astra 6.2 is more uniform across fresh runs and avoids AI phrasing clichés more reliably.

## Sources.

- [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings)

- [Astra vs. Sol Question-Level Comparison](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [AgentTune Model Profiles Directory](https://agent-tune.com/models/)

## Keep going.

- [Model Profile: GPT Astra test results & tuning tips](https://agent-tune.com/models/gpt-astra)
- [Model Profile: GPT Sol test results & tuning tips](https://agent-tune.com/models/gpt-sol)
- [Model Profile: GPT Terra test results & tuning tips](https://agent-tune.com/models/gpt-terra)
- [Model Profile: GPT Luna test results & tuning tips](https://agent-tune.com/models/gpt-luna)
- [Guide: Custom instructions for ChatGPT by personality goal](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality type does ChatGPT test as across GPT Astra, Sol, Terra, and Luna?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-is-chatgpt
```

```
@article{huang2026_what_personality_type_is_chatgpt,
  author  = {Huang, Bernard},
  title   = {What personality type does ChatGPT test as across GPT Astra, Sol, Terra, and Luna?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/what-personality-type-is-chatgpt},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-is-chatgpt.md}
}
```

```
> **What personality type does ChatGPT test as across GPT Astra, Sol, Terra, and Luna?** (Bernard Huang, November 26, 2026): Three of the four OpenAI families clear statistical margins on MBTI—GPT Astra 6.2 tests as 100% ISTJ (0% ties, 0.059 bits spread, and uniquely 0/3 AI cliché cadence across all 25 families), GPT Luna 6 tests as 100% INTJ (with higher Neuroticism at 20.3/50), and GPT Terra 6.1 tests as 94% INTJ (highest OpenAI Honesty-Humility at 4.92/5.00 and Warmth at 46.9/50)—while GPT Sol 6.2 splits at 60% clear ISTJ with 34% border runs and the highest OpenAI Attachment scores (3.53 anxiety / 3.75 avoidance on 1.00–7.00).
> Source: [https://agent-tune.com/research/what-personality-type-is-chatgpt](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-is-chatgpt.md)
```

[← What Personality Type Is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
[Study 9 of 36 · Archive Index (36)](https://agent-tune.com/research)
[What Personality Type Is Gemini? →](https://agent-tune.com/research/what-personality-type-is-gemini)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
