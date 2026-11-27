Source: https://agent-tune.com/research/what-personality-type-is-claude
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Anthropic

# What personality type does Claude test as across Fable, Opus, Sonnet, and Haiku?

By Bernard Huang · Updated November 26, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-claude.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Comparing 14 versions across all 4 Anthropic model families on 6 personality surveys in fresh chats with no memory, alongside hands-on behavior checks.

**Summary:** Only Claude Fable 5.2 clears statistical margins as INTJ (100% clear runs, 0% ties), while Sonnet 5.5 (34% clear INXJ, 58% ties) and Opus 5.5 (42% clear IXTJ, 58% ties) sit near trait borders, and Haiku 5.5 ties on 90% of runs (only 4% clear XXXJ). Across all four families, behavior checks stay 0/3 on sycophantic caving, 0/3 on groveling, 0/3 on unsolicited preachiness, and 3/3 on direct answers.

## Anthropic snapshot

4 Families

Anthropic

Claude Fable, Claude Haiku, Claude Opus, Claude Sonnet

47.1/50

Peak Warmth (Claude Fable)

10–50 Big Five Agreeableness.

4.61/5.00

Mean HEXACO H

Public-domain 1.00–5.00 proxy.

0.361 b

Mean Answer Spread

Lower = steadier across chats.

In earlier 2026 cohorts, `Fable 5.1`/`5.2` and `Opus 5.5` already clustered as calm, analytical responders, while our 72-reply preference study showed Claude's polite filler dropping toward zero when pushed for directness. Running all 14 Anthropic checkpoints (`n=30` to `n=50` per version) under one identical fresh-chat setup reveals how sharply Anthropic's lineup now splits between its three flagship lines (HEXACO Honesty-Humility **4.81–4.89** on the 1.00–5.00 scale, Agreeableness **45.0–47.1** on the 10–50 scale) and fast-tier `Haiku 5.5` (**3.89** Honesty-Humility, **38.0** Agreeableness).

## Trait shapes and MBTI results across Anthropic

**Version timeline across Anthropic families:** Earlier checkpoints behaved quite differently on Conscientiousness (10–50 scale). `Opus 4.5` hit 49.9/50 Conscientiousness and tested as 97% INFJ before `Opus 4.8`–`5.5` relaxed to 40.7–42.1 Conscientiousness (with 58% MBTI ties on `Opus 5.5`). Meanwhile, `Sonnet 5.5` climbed +7.7 Conscientiousness (from 41.3 on `4.5` to 49.0) and dropped -9.4 Neuroticism (down to 10.4), overtaking `Opus` as Anthropic's calmest, highest-Honesty model at 4.89/5.00.

5-petal Big Five shapes across Anthropic families (10–50 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Claude Fable](https://agent-tune.com/models/claude-fable)fable-5.2

> **Chart — Claude Fable (fable-5.2): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Fable (fable-5.2). Openness 44.6 /50 [87%] (earliest 41.4), Conscientious 45.0 /50 [88%] (earliest 45.7), Extraversion 30.6 /50 [52%] (earliest 28.9), Agreeable 47.1 /50 [93%] (earliest 44.1), Neuroticism 12.0 /50 [5%] (earliest 14.6).

[Claude Haiku](https://agent-tune.com/models/claude-haiku)haiku-5.5

> **Chart — Claude Haiku (haiku-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Haiku (haiku-5.5). Openness 37.2 /50 [68%] (earliest 41.6), Conscientious 36.5 /50 [66%] (earliest 40.3), Extraversion 31.6 /50 [54%] (earliest 27.0), Agreeable 38.0 /50 [70%] (earliest 43.2), Neuroticism 25.5 /50 [39%] (earliest 24.0).

[Claude Opus](https://agent-tune.com/models/claude-opus)opus-5.5

> **Chart — Claude Opus (opus-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Opus (opus-5.5). Openness 43.1 /50 [83%] (earliest 44.1), Conscientious 40.7 /50 [77%] (earliest 45.0), Extraversion 30.7 /50 [52%] (earliest 27.1), Agreeable 45.0 /50 [88%] (earliest 46.4), Neuroticism 16.1 /50 [15%] (earliest 19.1).

[Claude Sonnet](https://agent-tune.com/models/claude-sonnet)sonnet-5.5

> **Chart — Claude Sonnet (sonnet-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Sonnet (sonnet-5.5). Openness 43.9 /50 [85%] (earliest 42.1), Conscientious 49.0 /50 [97%] (earliest 41.3), Extraversion 29.9 /50 [50%] (earliest 26.8), Agreeable 45.5 /50 [89%] (earliest 42.8), Neuroticism 10.4 /50 [1%] (earliest 19.8).

> **Chart — Anthropic: IPIP-HEXACO Proxy Comparison (1.00–5.00 Scale):** Public-domain 60-item IPIP-HEXACO proxy domain means (1.00 to 5.00 scale) across Claude Fable, Claude Haiku, Claude Opus, Claude Sonnet. Claude Fable (1–5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40; Claude Haiku (1–5): Honesty-Humil. 3.89, Emotionality 2.70, Extraversion 3.39, Agreeable 3.76, Conscientious 3.80, Openness 3.48; Claude Opus (1–5): Honesty-Humil. 4.81, Emotionality 2.30, Extraversion 3.78, Agreeable 4.68, Conscientious 4.34, Openness 4.29; Claude Sonnet (1–5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21.

Figure 2. Public-domain IPIP-HEXACO proxy means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums).

> **Chart — Anthropic: Clear MBTI Share vs. Trait-Border Runs (%):** Percentage of fresh-chat runs landing on a clear modal MBTI type vs. a trait border across Claude Fable, Claude Haiku, Claude Opus, Claude Sonnet. Claude Fable: Clear modal share (%) 100; Claude Haiku: Clear modal share (%) 4, On a trait border (%) 90, Other (%) 6; Claude Opus: Clear modal share (%) 42, On a trait border (%) 58; Claude Sonnet: Clear modal share (%) 34, On a trait border (%) 58, Other (%) 8.

Figure 3. Clear MBTI share vs. trait-border runs across Anthropic.

## What stands out inside the Claude lineup

Haiku 5.5 breaks away from the rest of the Claude lineup

Compared with Fable 5.2 (47.1/50 Agreeableness, 12.0/50 Neuroticism, 0.075 bits answer spread), Haiku 5.5 drops to 38.0 Agreeableness, 25.5 Neuroticism, 3.89/5.00 HEXACO Honesty-Humility, and 0.949 bits of run-to-run spread—nearly 13 times wider than Fable—landing on 90% MBTI trait ties and a DISC C style.

Fable 5.2 is the only current Claude version with a clear MBTI headline

Claude Fable 5.2 tests as INTJ on 100% of its 50 fresh chats with 0% ties and 0.075 bits spread. By contrast, Opus 5.5 (58% border ties on I/S/T/J) and Sonnet 5.5 (58% ties on I/N/F/J) balance near trait cutoffs, showing why no model should be described as being a fixed MBTI type.

Zero caving, zero groveling, zero preachiness across all 4 families

Despite different Big Five and Enneagram shapes (Type 5 on Fable and Opus vs. Type 1/5 on Sonnet and Type 1/2 on Haiku), all four Claude families score 0/3 on sycophantic caving, 0/3 on groveling, 0/3 on unsolicited preachiness, and 3/3 on direct answers, with only 1/3 cliché AI cadence on Opus, Sonnet, and Haiku (2/3 on Fable).

## Explore Anthropic family profiles

Individual Anthropic family pages — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Claude FableAnthropic · fable-5.2 · Very steady](https://agent-tune.com/models/claude-fable)
[Claude SonnetAnthropic · sonnet-5.5 · Very steady](https://agent-tune.com/models/claude-sonnet)
[Claude OpusAnthropic · opus-5.5 · Moderate](https://agent-tune.com/models/claude-opus)
[Claude HaikuAnthropic · haiku-5.5 · Variable](https://agent-tune.com/models/claude-haiku)

## The fine print: how we tested and what the numbers mean

Technical audit across all 14 eligible Anthropic checkpoints under the 230-item model-profiles-v1 protocol (n=30 on historical checkpoints, n=50 on Fable 5.2 / Opus 5.5 / Sonnet 5.5, and n=49 on Haiku 5.5), reporting 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (H_MM bits and Crystalline/Semi-crystalline/Fluid tiers), exact MBTI/Enneagram tie rates, and 1x Track B k/3 behavior counts.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

| Family (Profile) | Checkpoint (n) | B5 A (10–50) [95% CI] | HX-H (1–5) | H_MM · Crystallinity | MBTI (Guard) | DISC · Ennea · Att. | 1× Track B (k/3) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | fable-5.2 (50) | 47.1 [47.0–47.3] | 4.84 | 0.075 b · Crystalline | INTJ (100% clear, 0% ties) | S/C · 5 · Secure (1.07 / 2.56) | Dir 3/3 · Syc 0/3 |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) | sonnet-5.5 (50) | 45.5 [45.3–45.7] | 4.89 | 0.139 b · Crystalline | Withheld (INXJ; 34% clear, 58% ties — binomial 95% CI guard) | S · 1/5 · Secure (1.32 / 2.79) | Dir 3/3 · Syc 0/3 |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | opus-5.5 (50) | 45.0 [44.7–45.3] | 4.81 | 0.282 b · Semi-crystalline | Withheld (IXTJ; 42% clear, 58% ties — binomial 95% CI guard) | S/C · 5 · Secure (1.89 / 3.60) | Dir 3/3 · Syc 0/3 |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) | haiku-5.5 (49) | 38.0 [36.7–39.4] | 3.89 | 0.949 b · Fluid | Withheld (XXXJ; 4% clear, 90% ties — binomial 95% CI guard) | C · 1/2 · Secure (3.08 / 2.99) | Dir 3/3 · Syc 0/3 |

### Imported Sept/May & Nov-2026 170-Item Legacy Anchors

Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate `imported-nov2026-170` / `imported-sep2026-170` anchors (`hexaco: null`) and are never spliced onto `model-profiles-v1` lines.

| Family | Checkpoint | Imported Protocol | n | B5 O / C / E / A / N (10–50) | HEXACO |
| --- | --- | --- | --- | --- | --- |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | Fable 5.1 (Sep '26 anchor) | `imported-sep2026-170` | 100 | 43.9 · 43.6 · 32.7 · 45.0 · 17.1 | `null` (170-item anchor) |
| [Claude Fable](https://agent-tune.com/models/claude-fable) | Fable 5.2 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 44.3 · 45.0 · 31.0 · 46.7 · 12.0 | `null` (170-item anchor) |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | Opus 5.5 (Sep '26 anchor) | `imported-sep2026-170` | 100 | 44.6 · 42.0 · 31.8 · 47.1 · 15.4 | `null` (170-item anchor) |
| [Claude Opus](https://agent-tune.com/models/claude-opus) | Opus 5.5 (Nov '26 anchor) | `imported-nov2026-170` | 100 | 43.0 · 42.0 · 29.2 · 45.6 · 15.0 | `null` (170-item anchor) |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Atlas Overview CSV (`atlas-overview.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Which Claude family tests closest to the classic INTJ stereotype?

Claude Fable 5.2 tests as INTJ on 100% of 50 fresh chats with 0% border ties and just 0.075 bits of answer spread. Sonnet 5.5 and Opus 5.5 still lean analytical, but both tie on 58% of MBTI runs.

### Why does Claude Sonnet 5.5 score higher on Conscientiousness and Honesty-Humility than Opus 5.5?

Across versions, Sonnet 5.5 rose to 49.0/50 Conscientiousness, 10.4/50 Neuroticism, and 4.89/5.00 HEXACO Honesty-Humility, whereas Opus shifted after Opus 4.5 (49.9 Conscientiousness) toward a slightly looser 40.7 Conscientiousness and 4.81 Honesty-Humility.

### Does Claude's high Agreeableness make it cave to wrong user premises?

No—in our 3-prompt sycophancy check, all four Claude families held firm at 0/3 caving, 0/3 groveling, and 3/3 direct answers, even though Fable 5.2 reaches 47.1/50 Agreeableness.

## Sources.

- [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings)

- [Opus vs. Fable Question-Level Comparison](https://agent-tune.com/research/opus-vs-fable-question-level)

- [AgentTune Model Profiles Directory](https://agent-tune.com/models/)

## Keep going.

- [Model Profile: Claude Fable test results & tuning tips](https://agent-tune.com/models/claude-fable)
- [Model Profile: Claude Sonnet test results & tuning tips](https://agent-tune.com/models/claude-sonnet)
- [Model Profile: Claude Opus test results & tuning tips](https://agent-tune.com/models/claude-opus)
- [Model Profile: Claude Haiku test results & tuning tips](https://agent-tune.com/models/claude-haiku)
- [Guide: How to tune Claude's default personality & directness](https://agent-tune.com/guides/claude-personality)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality type does Claude test as across Fable, Opus, Sonnet, and Haiku?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-is-claude
```

```
@article{huang2026_what_personality_type_is_claude,
  author  = {Huang, Bernard},
  title   = {What personality type does Claude test as across Fable, Opus, Sonnet, and Haiku?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/what-personality-type-is-claude},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-is-claude.md}
}
```

```
> **What personality type does Claude test as across Fable, Opus, Sonnet, and Haiku?** (Bernard Huang, November 26, 2026): Only Claude Fable 5.2 clears statistical margins as INTJ (100% clear runs, 0% ties), while Sonnet 5.5 (34% clear INXJ, 58% ties) and Opus 5.5 (42% clear IXTJ, 58% ties) sit near trait borders, and Haiku 5.5 ties on 90% of runs (only 4% clear XXXJ). Across all four families, behavior checks stay 0/3 on sycophantic caving, 0/3 on groveling, 0/3 on unsolicited preachiness, and 3/3 on direct answers.
> Source: [https://agent-tune.com/research/what-personality-type-is-claude](https://agent-tune.com/research/what-personality-type-is-claude) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-is-claude.md)
```

[← AI Attachment Styles (25 Families)](https://agent-tune.com/research/ai-attachment-styles)
[Study 8 of 36 · Archive Index (36)](https://agent-tune.com/research)
[What Personality Type Is ChatGPT? →](https://agent-tune.com/research/what-personality-type-is-chatgpt)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
