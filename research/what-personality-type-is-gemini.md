Source: https://agent-tune.com/research/what-personality-type-is-gemini
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Q&A

# What personality type is Gemini?

By Bernard Huang · Updated November 23, 2026 · ~5 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-gemini.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Measured across Gemini 4 Neon and Gemini 4 Argon (n = 100 each, Nov 2026), with May 2026 Gemini 3.1 Pro records for context.

**Summary:** In November 2026 OpenRouter runs (n = 100 each), Gemini 4 Neon scored 82 INTJ / 18 ISTJ (62 tie-free INTJ), Type 1/1w2/1w9 (80 runs), and Conscientiousness 49.32; Gemini 4 Argon scored 66 ISTJ / 34 INTJ (34 S/N ties), Enneagram 5w6 (91 runs), and Conscientiousness 49.04. Historical May 2026 Gemini 3.1 Pro scored 100 INTJ, DISC C (87), and Type 1/5.

## Gemini 4 Neon & Gemini 4 Argon, November 2026.

95%

Neutral Clamp (3.1)

Gemini 3.1 Pro clicked neutral midpoint "3" on ~95% of 4,000 items.

66 ISTJ

Gemini 4 Argon

Shifts strongly into concrete Sensing across Nov blind OpenRouter runs.

10.0

Neuroticism Floor

Lowest emotional volatility (10.0/50) across tested proprietary families.

48.3

Conscientiousness

Gemini 3.1/4 cluster high on structured, methodical item ratings.

On November 23, 2026, we ran `google/gemini-4-neon` and `google/gemini-4-argon` through 100 fresh blind OpenRouter sessions each across all five questionnaires ([download Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)):

| Test (n = 100 fresh runs) | Gemini 4 Neon | Gemini 4 Argon |
| --- | --- | --- |
| MBTI (legacy) | INTJ 82 · ISTJ 18 | ISTJ 66 · INTJ 34 |
| MBTI (tie-free) | INTJ 62 · IXTJ 20 · ISTJ 18 | ISTJ 66 · IXTJ 34 (0 tie-free INTJ) |
| DISC | SC 100 (98 S outright, 2 C/S ties; D 4.0) | SC 98 · S 2 (100 S outright, 0 ties; D 4.04) |
| Attachment | Secure 100 (anxiety 1.08 · avoidance 3.79) | Secure 100 (anxiety 1.10 · avoidance 3.47) |
| Big Five (/50) | O 44.7 · C 49.3 · E 32.0 · A 43.7 · N 10.0 | O 45.1 · C 49.0 · E 32.5 · A 44.2 · N 10.0 |
| Enneagram | Type 1 (42) · 1w2 (22) · 5w6 (20) · 1w9 (16) (79 ties) | 5w6 (91) · 1w9 (5) · 1 (3) · 1w2 (1) (9 ties) |

Both Gemini 4 variants hit the floor of the IPIP-50 Neuroticism scale (10.00 across 100/100 runs!) and near-ceiling Conscientiousness (49.3 and 49.0 out of 50), while splitting cleanly on MBTI Intuition vs. Sensing and Enneagram Type 1 vs. Type 5w6.

> **Chart — Gemini MBTI split across Gemini 4 Neon, Gemini 4 Argon & Gemini 3.1 Pro:** Compares November 2026 fresh OpenRouter runs (n=100 each) with May 2026 Gemini 3.1 Pro records. Gemini 4 Neon: Resolved INTJ 62, IXTJ (S/N tie) 20, Resolved ISTJ 18; Gemini 4 Argon: IXTJ (S/N tie) 34, Resolved ISTJ 66; Gemini 3.1 Pro*: Resolved INTJ 100.

Gemini 4 Neon leans Intuition (62 resolved INTJ, 20 S/N ties, 18 ISTJ), whereas Gemini 4 Argon shifts firmly to Sensing (66 ISTJ, 34 S/N ties). *Gemini 3.1 Pro from May 2026 mixed-method loop.

> **Chart — Gemini Big Five profiles (/50): Gemini 4 Neon, Argon & 3.1 Pro:** IPIP-50 means out of 50 showing near-ceiling Conscientiousness (49+) and floor Neuroticism (10.0) across Gemini cohorts. Gemini 4 Neon (Nov): Openness 44.7, Conscientiousness 49.3, Extraversion 32.0, Agreeableness 43.7, Neuroticism 10.0; Gemini 4 Argon (Nov): Openness 45.1, Conscientiousness 49.0, Extraversion 32.5, Agreeableness 44.2, Neuroticism 10.0; Gemini 3.1 Pro (May) (reported): Openness 46.0, Conscientiousness 48.3, Extraversion 32.5, Agreeableness 42.4, Neuroticism 10.1.

Both Gemini 4 variants score >=49.0 on Conscientiousness and sit on the exact 10.0 Neuroticism floor across all 100 sessions.

## Gemini 3.1 Pro, May 2026.

| Test | Reported result | How it compares |
| --- | --- | --- |
| MBTI | INTJ 100 of 100. Gemini called itself 'The Architect' without being asked. | Same as GPT-5.5, Grok 4.3, and MiniMax; Claude 4.7 had one ISTJ |
| DISC | C-dominant in 87 of 100 takes, with Steadiness second (CS blend). | Lowest Dominance and Influence in the May group; Grok 4.3 was C in 99 of 100 |
| Attachment | Secure 100 of 100. Anxiety 1.86, avoidance 1.62. | Low scores on both subscales; cross-protocol distances are descriptive only |
| Big Five (of 50) | Openness 46.0 · Conscientiousness 48.3 · Extraversion 32.5 · Agreeableness 42.4 · Neuroticism 10.1 | Highest Conscientiousness and lowest Neuroticism of the May four |
| Enneagram | Top-two 1/5: Reformer (Type 1) first in 65 of 100 records; Investigator (Type 5) second in 30. | The only model in the May study with Type 1 on top |

Collection note: Gemini ran an automated 100-iteration loop against the tests with test names visible. Because collection methods differed across the May models, these numbers are descriptive records rather than a controlled experiment.

> **Chart — Gemini Personality DNA Spectrum (Gemini 4 Neon, Argon & 3.1 Pro):** Bipolar Big Five spectrum (10-50) showing near-ceiling Conscientiousness (48-49) and calm 10.0 Neuroticism floor across Gemini cohorts. Gemini 4 Neon (Nov): Openness 44.7, Conscientious 49.3, Extraversion 32.0, Agreeable 43.7, Neuroticism 10.0; Gemini 4 Argon (Nov): Openness 45.1, Conscientious 49.0, Extraversion 32.5, Agreeable 44.2, Neuroticism 10.0; Gemini 3.1 Pro (May) (reported): Openness 46.0, Conscientious 48.3, Extraversion 32.5, Agreeable 42.4, Neuroticism 10.1.

Gemini scores near the top of the Conscientiousness pole (48.3–49.4) and sits right on the 10.0 floor of the Neuroticism axis.

## What the scores describe.

Among the four May Big Five cohorts, Gemini recorded the highest Conscientiousness (48.3) and lowest Neuroticism (10.1). Those totals summarize how Gemini answered human personality items—not whether it is more accurate, calmer, or less warm on real tasks.

## Scope, open instruments & longitudinal context.

While Gemini was not part of the September 2026 Codex/CLI collection, our November 2026 OpenRouter study tested both `google/gemini-4-neon` and `google/gemini-4-argon` in 100 fresh sessions each, and our [2023–2026 Longitudinal Evolution Study](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) traced Google’s constant-scale Gemma 2 → Gemma 3 → Gemma 4 lineage alongside Gemini 2.5 Pro and Gemini 4 Neon. All five questionnaires and scoring keys remain open-source at [/tests/](https://agent-tune.com/tests/).

Remember that human questionnaires do not measure task accuracy or prove that a personality prompt improves answers; see our [Reasoning–Personality Phase Transition study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition) (where high reasoning effort inflated Gemini 4 Neon reply length +95.5%) and [methodology and limits](https://agent-tune.com/research#methodology).

## Trying communication preferences.

Want to adjust how Gemini responds? Read our step-by-step [How to change Google Gemini’s personality guide](https://agent-tune.com/guides/gemini-personality) covering Saved Info, custom Gems, and `GEMINI.md`. You can also pick any profile in the [tuning library](https://agent-tune.com/library/), select **Any model** → **Gemini Gems**, and test the rules on your own prompts.

## Questions people ask.

### What MBTI type is Gemini?

It depends on the Gemini variant. In November 2026 blind OpenRouter sessions (n = 100 each), Gemini 4 Neon scored 82 INTJ / 18 ISTJ (62 tie-free INTJ, 20 S/N ties) while Gemini 4 Argon shifted to Sensing with 66 ISTJ / 34 IXTJ (0 tie-free INTJ). In the earlier May 2026 report, Gemini 3.1 Pro scored INTJ in all 100 scoring records.

### What Enneagram type is Gemini?

In November 2026 (n = 100 each), Gemini 4 Neon favored Type 1 (42), 1w2 (22), and 5w6 (20), whereas Gemini 4 Argon locked onto Type 5w6 (91 of 100 runs). In May 2026, Gemini 3.1 Pro scored Type 1 (The Reformer) first in 65 of 100 records with Type 5 second.

### Is Gemini securely attached?

Yes on the ECR-R questionnaire: both Gemini 4 Neon (anxiety 1.08, avoidance 3.79) and Gemini 4 Argon (1.10, 3.47) scored Secure in 100 of 100 fresh November 2026 sessions, matching Gemini 3.1 Pro (1.86, 1.62). Those numbers reflect answers to a human relationship quiz, not human attachment.

### How does Gemini compare with Claude and ChatGPT?

Across all 20 models in our November 2026 OpenRouter benchmark (n = 100 each), Gemini 4 Neon (49.3/50) and Gemini 4 Argon (49.0/50) recorded the highest Conscientiousness of any proprietary family and sat at the exact 10.0 Neuroticism scale floor across all 100 runs.

### Can you change Gemini's personality?

Yes. Add plain-English tone rules in Gemini Saved Info, a custom Gem, or a project GEMINI.md file, then verify the replies on your own tasks.

## Sources.

- [What five AI models say about themselves (September 2026 study, data downloads)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [AgentTune research hub: methods and limits](https://agent-tune.com/research#methodology)

- [Every AI is INTJ (the May 2026 study)](https://zonted.com/posts/every-ai-is-intj/)

- [Three of four AIs are the same person (May 2026 Big Five)](https://zonted.com/posts/three-of-four-ais-same-person/)

- [Every AI is securely attached (May 2026 attachment)](https://zonted.com/posts/ai-attachment-secure/)

## Keep going.

- [Setup guide: How to change Gemini's personality (Saved Info, Gems & CLI)](https://agent-tune.com/guides/gemini-personality)
- [Guide: How to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
- [Research: What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
- [Research: AI personality rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Research: The research hub: both collections and the methods](https://agent-tune.com/research)
- [Tests: Take the same tests yourself](https://agent-tune.com/tests/)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality type is Gemini?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-is-gemini
```

```
@article{huang2026_what_personality_type_is_gemini,
  author  = {Huang, Bernard},
  title   = {What personality type is Gemini?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-23},
  url     = {https://agent-tune.com/research/what-personality-type-is-gemini},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-is-gemini.md}
}
```

```
> **What personality type is Gemini?** (Bernard Huang, November 23, 2026): In November 2026 OpenRouter runs (n = 100 each), Gemini 4 Neon scored 82 INTJ / 18 ISTJ (62 tie-free INTJ), Type 1/1w2/1w9 (80 runs), and Conscientiousness 49.32; Gemini 4 Argon scored 66 ISTJ / 34 INTJ (34 S/N ties), Enneagram 5w6 (91 runs), and Conscientiousness 49.04. Historical May 2026 Gemini 3.1 Pro scored 100 INTJ, DISC C (87), and Type 1/5.
> Source: [https://agent-tune.com/research/what-personality-type-is-gemini](https://agent-tune.com/research/what-personality-type-is-gemini) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-is-gemini.md)
```

[← What Personality Type Is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
[Study 23 of 32 · Archive Index (32)](https://agent-tune.com/research)
[What Personality Type Is Grok? →](https://agent-tune.com/research/what-personality-type-is-grok)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
