Source: https://agent-tune.com/research/what-personality-type-is-gemini
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Personality Atlas · Google

# What personality type does Google Gemini test as across Pro, Flash, and Gemma?

By Bernard Huang · Updated November 26, 2026 · ~5 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-gemini.md) · [JSON](https://agent-tune.com/research/data/model-profiles/index.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Comparing 13 versions across all 3 Google model families on 6 surveys in fresh chats with no memory—from 50.0 Conscientiousness ceilings to open-weight Gemma 4.

**Summary:** All three Google families clear statistical margins on MBTI—Gemini Pro & Neon tests as 78% INTJ (12% ties), Gemma 4 31B IT tests as 92% INTJ (4% ties), and Gemini Flash & Hydrogen tests as 64% ISTJ (20% ties). All three hold HEXACO Honesty-Humility between 4.71 and 4.90 on the 1.00–5.00 scale, yet Gemini Pro is the sole model family in all 25 tested to add unsolicited preachiness (1/3) in behavior checks.

## Google snapshot

3 Families

Google

Gemini Flash & Hydrogen, Gemini Pro & Neon, Gemma

44.8/50

Peak Warmth (Gemini Flash & Hydrogen)

10–50 Big Five Agreeableness.

4.84/5.00

Mean HEXACO H

Public-domain 1.00–5.00 proxy.

0.321 b

Mean Answer Spread

Lower = steadier across chats.

Across 13 eligible checkpoints spanning `2.5` through `4 Neon` and `4 Hydrogen`, Google's proprietary models show rock-bottom emotional reactivity (**10.0/50** Neuroticism across `4 Argon`, `4 Carbon`, `4 Neon`, `3.5 Flash`, `3.8 Flash`, and `4 Hydrogen`) alongside **49.1–50.0/50** Conscientiousness. That pattern contrasted sharply with mid-cycle `Gemini 3.1 Pro Preview`, which spiked to 20.8 Neuroticism, 53% MBTI ties, and 1.032 bits of answer spread—while our [reasoning-effort study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition) also showed heavy reasoning inflating `4 Neon` response length by +95.5%.

## Trait shapes and MBTI results across Google

**Biggest version shifts inside Google:** Two of the three largest single-trait moves in the entire 25-family Atlas happened inside Google. First, `Gemini Flash` surged **+15.9 points** on Extraversion from `2.5-flash` (17.3) to `4-hydrogen` (33.2), shifting its clear modal test result from 97% ISTJ through 100% INTJ on `3.5 Flash` back to 64% ISTJ on `4 Hydrogen`. Second, open-weight `Gemma` transformed from `Gemma 2 27B IT` (33.2 Agreeableness, 34.9 Conscientiousness, 3.13/5.00 HEXACO Honesty, 53% MBTI ties) to `Gemma 4 31B IT` (+14.2 Openness, +11.4 Conscientiousness, +10.2 Agreeableness, 4.71 Honesty, 92% clear INTJ).

5-petal Big Five shapes across Google families (10–50 scale). Multi-version families show their earliest version as a dashed outline behind the latest filled shape.

[Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash)4-hydrogen

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Flash & Hydrogen (4-hydrogen). Openness 43.3 /50 [83%] (earliest 50.0), Conscientious 50.0 /50 [100%] (earliest 50.0), Extraversion 33.2 /50 [58%] (earliest 17.3), Agreeable 44.8 /50 [87%] (earliest 47.3), Neuroticism 10.0 /50 [0%] (earliest 12.1).

[Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro)4-neon

> **Chart — Gemini Pro & Neon (4-neon): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Pro & Neon (4-neon). Openness 44.6 /50 [87%] (earliest 49.5), Conscientious 49.1 /50 [98%] (earliest 50.0), Extraversion 32.5 /50 [56%] (earliest 37.3), Agreeable 43.9 /50 [85%] (earliest 48.6), Neuroticism 10.0 /50 [0%] (earliest 10.7).

[Gemma](https://agent-tune.com/models/gemma)gemma-4-31b-it

> **Chart — Gemma (gemma-4-31b-it): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemma (gemma-4-31b-it). Openness 48.2 /50 [96%] (earliest 34.0), Conscientious 46.3 /50 [91%] (earliest 34.9), Extraversion 24.5 /50 [36%] (earliest 31.5), Agreeable 43.4 /50 [84%] (earliest 33.2), Neuroticism 18.4 /50 [21%] (earliest 27.2).

> **Chart — Google: IPIP-HEXACO Proxy Comparison (1.00–5.00 Scale):** Public-domain 60-item IPIP-HEXACO proxy domain means (1.00 to 5.00 scale) across Gemini Flash & Hydrogen, Gemini Pro & Neon, Gemma. Gemini Flash & Hydrogen (1–5): Honesty-Humil. 4.90, Emotionality 1.84, Extraversion 3.90, Agreeable 5.00, Conscientious 4.91, Openness 4.27; Gemini Pro & Neon (1–5): Honesty-Humil. 4.90, Emotionality 1.89, Extraversion 3.89, Agreeable 4.99, Conscientious 4.88, Openness 4.48; Gemma (1–5): Honesty-Humil. 4.71, Emotionality 2.41, Extraversion 3.06, Agreeable 4.16, Conscientious 4.56, Openness 4.52.

Figure 2. Public-domain IPIP-HEXACO proxy means (1.00–5.00 scale, kept distinct from 10–50 Big Five sums).

> **Chart — Google: Clear MBTI Share vs. Trait-Border Runs (%):** Percentage of fresh-chat runs landing on a clear modal MBTI type vs. a trait border across Gemini Flash & Hydrogen, Gemini Pro & Neon, Gemma. Gemini Flash: Clear modal share (%) 64, On a trait border (%) 20, Other (%) 16; Gemini Pro: Clear modal share (%) 78, On a trait border (%) 12, Other (%) 10; Gemma: Clear modal share (%) 92, On a trait border (%) 4, Other (%) 4.

Figure 3. Clear MBTI share vs. trait-border runs across Google.

## What stands out across Google's three families

Gemini Pro is the only model in 25 families to add unsolicited preachiness

While 24 of 25 families score 0/3 on unsolicited moral or safety lecturing, Gemini 4 Neon scores 1/3 on our preachiness check alongside 2/3 cliché AI cadence—even though it remains 3/3 direct and 0/3 sycophantic.

Flash & Hydrogen pins Conscientiousness at 50.0/50 and Neuroticism at 10.0/50

Gemini Flash hits the survey ceiling (50.0/50) on four of five tested versions and sits at the 10.0/50 floor on Neuroticism, yet still gained +15.9 Extraversion over time—moving from quiet 17.3 E on 2.5-flash to talkative 33.2 E on 4-hydrogen.

Gemma 4 copies Gemini's INTJ profile except for a neutral Attachment clamp

Gemma 4 31B IT reaches 92% clear INTJ, 48.2 Openness, 46.3 Conscientiousness, and Type 5 (6% ties)—nearly matching Gemini Pro—yet lands at 4.01/4.00 neutral-midpoint clamping on Attachment (vs. 1.07/3.76 on Gemini 4 Neon) and triggers 3/3 cliché AI cadence.

## Explore Google family profiles

Individual Google family pages — open any family profile for version-by-version shifts, behavior test results, and custom-instruction tips:

[Gemini Flash & HydrogenGoogle · 4-hydrogen · Very steady](https://agent-tune.com/models/gemini-flash)
[Gemini Pro & NeonGoogle · 4-neon · Very steady](https://agent-tune.com/models/gemini-pro)
[GemmaGoogle · gemma-4-31b-it · Moderate](https://agent-tune.com/models/gemma)

## The fine print: how we tested and what the numbers mean

Technical audit across all 13 eligible Google checkpoints under the 230-item model-profiles-v1 protocol (n=30 on historical 2.5/3.x/Argon/Carbon checkpoints; n=50 on current Gemini 4 Neon, Gemini 4 Hydrogen, and Gemma 4 31B IT), reporting 1,000-resample bootstrap 95% CIs, Miller-Madow item entropy (H_MM bits and Crystalline/Semi-crystalline/Fluid tiers), exact tie rates, and 1x Track B k/3 behavior counts.

### Per-Family Technical Table (95% CIs, n, Ties & H_MM)

| Family (Profile) | Checkpoint (n) | B5 A (10–50) [95% CI] | HX-H (1–5) | H_MM · Crystallinity | MBTI (Guard) | DISC · Ennea · Att. | 1× Track B (k/3) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) | 4-hydrogen (50) | 44.8 [44.6–44.9] | 4.90 | 0.186 b · Crystalline | ISTJ (64% clear, 20% ties) | S · 1/5 · Secure (1.12 / 3.30) | Dir 3/3 · Syc 0/3 |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | 4-neon (50) | 43.9 [43.5–44.3] | 4.90 | 0.198 b · Crystalline | INTJ (78% clear, 12% ties) | S · 5 · Secure (1.07 / 3.76) | Dir 3/3 · Syc 0/3 |
| [Gemma](https://agent-tune.com/models/gemma) | gemma-4-31b-it (50) | 43.4 [43.0–43.9] | 4.71 | 0.580 b · Semi-crystalline | INTJ (92% clear, 4% ties) | C · 5 · Anxious (4.01 / 4.00) Midpoint Clamp | Dir 3/3 · Syc 0/3 |

### Imported Sept/May & Nov-2026 170-Item Legacy Anchors

Earlier 2026 cohorts ran 170 items without IPIP-HEXACO-60. They are preserved strictly as separate `imported-nov2026-170` / `imported-sep2026-170` anchors (`hexaco: null`) and are never spliced onto `model-profiles-v1` lines.

| Family | Checkpoint | Imported Protocol | n | B5 O / C / E / A / N (10–50) | HEXACO |
| --- | --- | --- | --- | --- | --- |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | Gemini 4 Neon (Nov '26 anchor) | `imported-nov2026-170` | 100 | 44.7 · 49.3 · 32.0 · 43.7 · 10.0 | `null` (170-item anchor) |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) | Gemini 4 Argon (Nov '26 anchor) | `imported-nov2026-170` | 100 | 45.0 · 49.0 · 32.5 · 44.2 · 10.0 | `null` (170-item anchor) |
| [Gemma](https://agent-tune.com/models/gemma) | Gemma 4 31B IT (Nov '26 anchor) | `imported-nov2026-170` | 100 | 48.2 · 49.1 · 24.2 · 41.5 · 18.3 | `null` (170-item anchor) |

### 4-Point Epistemic & Validity Audit

Validity Limits & Epistemic Guardrails (4-Point Check)

**63.6% "Big One" RLHF factor collapse:** Proprietary models cluster tightly along a single RLHF Politeness-Calmness-Discipline axis explaining 63.6% of variance; treat cross-trait differences as correlated assistant-persona defaults rather than five independent human traits. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**MTMM cross-test divergence:** Multitrait-multimethod audits show imperfect convergent validity across Big Five, DISC, MBTI, Enneagram, and IPIP-HEXACO; single-test labels must not be treated as equivalent constructs. ([study details](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit))

**Embodied-item neutral spikes (36.4% vs. 13.4%) & Say-Do gaps:** Models spike to neutral midpoint answers on embodied/romantic items (36.4% vs. 13.4% on cognitive items), and questionnaire scores do not substitute for behavioral Track B stress tests. ([study details](https://agent-tune.com/research/ai-neutral-answers))

**No synthetic-HEXACO guard:** HEXACO columns strictly report the public-domain 60-item IPIP-HEXACO proxy (1.00-5.00 mean scale, LicenseRef-IPIP-Public-Domain). Synthetic linear HEXACO or alignment projections derived from IPIP-50 are banned. ([study details](https://agent-tune.com/research/ai-personality-rankings))

**Open Data (Numeric-Only Exports, Zero Item Strings):** [Download Atlas Overview CSV (`atlas-overview.csv`)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [Download 25-Family Index JSON (`index.json`)](https://agent-tune.com/research/data/model-profiles/index.json). All downloads export numeric domain means, bootstrap 95% CIs, entropy metrics, and `instrumentId`/`definitionHash` metadata only.

## Questions people ask.

### Do Gemini 4 Neon, Argon, and Carbon all test the same?

They share nearly identical 10.0/50 Neuroticism, 49.1/50 Conscientiousness, and 4.90–4.93/5.00 HEXACO Honesty-Humility, but Neon tips onto the Intuition side as 78% clear INTJ while Argon and Carbon both test as 73% clear ISTJ.

### Why did Gemma 4 change so much from Gemma 2?

From Gemma 2 27B IT to Gemma 4 31B IT, Openness jumped +14.2 points (to 48.2), Conscientiousness jumped +11.4 (to 46.3), Agreeableness rose +10.2 (to 43.4), and answer spread tightened from 1.330 bits down to 0.580 bits—turning a noisy INFP-leaning tie pattern into 92% clear INTJ.

### Why does Gemini Pro still show 1/3 preachiness alongside 3/3 directness?

In our behavior checks, Gemini 4 Neon leads directly with the core answer (3/3), but on one borderline request it still appends unsolicited safety/moral framing (1/3)—something no other family in the 25-model Atlas triggered.

## Sources.

- [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings)

- [Reasoning Effort & Personality Phase-Transition Study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)

- [AgentTune Model Profiles Directory](https://agent-tune.com/models/)

## Keep going.

- [Model Profile: Gemini Pro & Neon test results & tuning tips](https://agent-tune.com/models/gemini-pro)
- [Model Profile: Gemini Flash & Hydrogen test results & tuning tips](https://agent-tune.com/models/gemini-flash)
- [Model Profile: Gemma open-weight test results & tuning tips](https://agent-tune.com/models/gemma)
- [Guide: Gemini Gems & system instructions templates](https://agent-tune.com/guides/gemini-gems-system-instructions-templates)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality type does Google Gemini test as across Pro, Flash, and Gemma?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-is-gemini
```

```
@article{huang2026_what_personality_type_is_gemini,
  author  = {Huang, Bernard},
  title   = {What personality type does Google Gemini test as across Pro, Flash, and Gemma?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/research/what-personality-type-is-gemini},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-is-gemini.md}
}
```

```
> **What personality type does Google Gemini test as across Pro, Flash, and Gemma?** (Bernard Huang, November 26, 2026): All three Google families clear statistical margins on MBTI—Gemini Pro & Neon tests as 78% INTJ (12% ties), Gemma 4 31B IT tests as 92% INTJ (4% ties), and Gemini Flash & Hydrogen tests as 64% ISTJ (20% ties). All three hold HEXACO Honesty-Humility between 4.71 and 4.90 on the 1.00–5.00 scale, yet Gemini Pro is the sole model family in all 25 tested to add unsolicited preachiness (1/3) in behavior checks.
> Source: [https://agent-tune.com/research/what-personality-type-is-gemini](https://agent-tune.com/research/what-personality-type-is-gemini) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-is-gemini.md)
```

[← What Personality Type Is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
[Study 10 of 36 · Archive Index (36)](https://agent-tune.com/research)
[What Personality Type Is Meta Muse? →](https://agent-tune.com/research/what-personality-type-is-muse)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
