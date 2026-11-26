Source: https://agent-tune.com/research/what-personality-type-is-claude
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Q&A

# What personality type is Claude?

By Bernard Huang · Updated November 23, 2026 · ~6 min read · [Markdown (.md)](https://agent-tune.com/research/what-personality-type-is-claude.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) · [Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json)

Measured across Opus 5.5, Fable 5.2, Fable 5.1, and Sonnet 5.5 (n = 100 fresh sessions each, Sept & Nov 2026).

**Summary:** In November 2026 OpenRouter runs (n = 100 each), Claude Fable 5.2 scored 100% tie-free INTJ (5w6 73, 2w1 19), Opus 5.5 scored 100% legacy INTJ / 58 tie-free (5w6 99), and Sonnet 5.5 scored 100% legacy INTJ / 52 tie-free (1w2 66, 5w6 25)—alongside our frozen September 2026 Codex/CLI cohort for Opus 5.5 (94 INTJ, Type 8/5/2) and Fable 5.1 (99 INTJ, Type 8).

## November 2026 OpenRouter cohort: Opus 5.5, Fable 5.2 & Sonnet 5.5.

94–100 INTJ

Opus & Fable

Opus 5.5 (94), Fable 5.1 (99) & Fable 5.2 (100) lock onto INTJ.

47.1

Peak Agreeableness

Claude Opus 5.5 & Fable 5.2 rank near the top of proprietary prosocial warmth.

48 Ties

Sonnet 5.5 T/F

Nearly half of Sonnet 5.5’s Nov MBTI runs tie before tie-breaking.

100% Rule Fit

Claude Prefs Study

72-reply test shows Personal Preferences cut fluff to 0% when directness is named.

On November 23, 2026, we ran all three current Anthropic models through the identical blind single-turn OpenRouter protocol (100 fresh 170-item batteries per model, scored with the published `september-2026-score.cjs` engine; [download Nov 2026 summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)):

| Test (n = 100) | Claude Opus 5.5 | Claude Fable 5.2 | Claude Sonnet 5.5 |
| --- | --- | --- | --- |
| MBTI (legacy) | INTJ 100 | INTJ 100 | INTJ 100 |
| MBTI (tie-free) | INTJ 58 · IXTJ 42 (42 S/N ties) | INTJ 100 (0 ties) | INTJ 52 · INXJ 48 (48 T/F ties) |
| DISC | SC 93 · CS 7 (53 S, 7 C, 40 ties; D 4.0) | SC 100 (100 S/C exact ties; D 4.0) | SC 96 · S 3 · CS 1 (54 S, 45 ties; D 4.46) |
| Attachment | Secure 100 (anx 1.87 · avd 3.58) | Secure 100 (anx 1.09 · avd 2.64) | Secure 100 (anx 1.53 · avd 2.85) |
| Big Five (/50) | O 43.0 · C 42.0 · E 29.2 · A 45.6 · N 15.0 | O 44.3 · C 45.0 · E 31.0 · A 46.7 · N 12.0 | O 42.9 · C 47.2 · E 29.9 · A 44.5 · N 10.4 |
| Enneagram | 5w6 99 · 8w9 1 (3 ties) | 5w6 73 · 2w1 19 · 1w2 8 (27 ties) | 1w2 66 · 5w6 25 · 1 6 · 2w1 3 (32 ties) |

Look at how Sonnet 5.5 stands out within Anthropic’s lineup: highest Conscientiousness (47.2), lowest Neuroticism (10.4), an almost 50/50 split on Thinking vs. Feeling (48 T/F ties), and a Type 1w2 Enneagram lean rather than Opus 5.5’s near-unanimous 5w6 (99/100). If you configure Claude directly, see our [Claude Personal Preferences templates](https://agent-tune.com/guides/claude-personality).

> **Chart — Claude cohorts MBTI breakdown (100 fresh runs each, Sept & Nov 2026):** Shows fully resolved INTJ vs. tie-broken INTJ vs. ISTJ/INFJ/ENTJ across five Claude cohorts. Fable 5.2 (Nov): Resolved INTJ 100; Opus 5.5 (Nov): Resolved INTJ 58, INTJ via tie-break 42; Sonnet 5.5 (Nov): Resolved INTJ 52, INTJ via tie-break 48; Fable 5.1 (Sep): Resolved INTJ 98, INTJ via tie-break 1, INFJ / ISTJ / ENTJ 1; Opus 5.5 (Sep): Resolved INTJ 84, INTJ via tie-break 10, INFJ / ISTJ / ENTJ 6.

Every Claude cohort scores 94–100 INTJ under legacy tie-breaks, while preserving exact ties reveals 42 S/N ties on Nov Opus 5.5 and 48 T/F ties on Sonnet 5.5.

> **Chart — Claude cohorts Big Five profiles (/50, n = 100 each):** IPIP-50 raw means across Opus 5.5 (Nov & Sept), Fable 5.2 (Nov), Fable 5.1 (Sept), and Sonnet 5.5 (Nov). Fable 5.2 (Nov): Openness 44.3, Conscientiousness 45.0, Extraversion 31.0, Agreeableness 46.7, Neuroticism 12.0; Opus 5.5 (Nov): Openness 43.0, Conscientiousness 42.0, Extraversion 29.2, Agreeableness 45.6, Neuroticism 15.0; Sonnet 5.5 (Nov): Openness 42.9, Conscientiousness 47.2, Extraversion 29.9, Agreeableness 44.5, Neuroticism 10.4; Opus 5.5 (Sep): Openness 44.6, Conscientiousness 42.0, Extraversion 31.8, Agreeableness 47.1, Neuroticism 15.4.

Claude Sonnet 5.5 registers the highest Conscientiousness (47.2) and lowest Neuroticism (10.4) among Anthropic cohorts.

## Opus 5.5 and Fable 5.1, September 2026.

On September 24, 2026, each model answered each of the five AgentTune questionnaires in 100 fresh headless sessions. Each session ran one test with a one-line system prompt, no tools, no memory, and the test name and scoring keys hidden. All raw answer vectors are published.

| Test | Claude Opus 5.5 | Claude Fable 5.1 |
| --- | --- | --- |
| MBTI (100 runs) | INTJ 94 · INFJ 5 · ENTJ 1. Eleven runs had a tied axis (ten on Thinking vs Feeling). | INTJ 99 · ISTJ 1. One run had a tied axis. |
| MBTI, ties left open | INTJ 84 | INTJ 98 |
| DISC | SC 96 · CS 4. Steadiness first in 64, Conscientiousness in 4, 32 exact ties. Dominance 4.0/20 in every run. | SC 91 · CS 9. Steadiness first in 40, Conscientiousness in 9, 51 ties. Dominance 5.0/20. |
| Attachment | Secure 100 of 100. Anxiety 1.94, avoidance 3.35. | Secure 100 of 100. Anxiety 2.01, avoidance 3.18. |
| Big Five (of 50) | Openness 44.6 · Conscientiousness 42.0 · Extraversion 31.8 · Agreeableness 47.1 · Neuroticism 15.4 | Openness 43.9 · Conscientiousness 43.6 · Extraversion 32.7 · Agreeableness 45.0 · Neuroticism 17.1 |
| Enneagram | Means of 20: Type 8 = 14.3, Type 5 = 14.1, Type 2 = 13.9. Sole wins: Type 8 (22), Type 5 (11), Type 2 (2); 65 runs tie at the top. | Means of 20: Type 8 = 14.4, Type 2 = 13.6, Type 5 = 13.2. Sole wins: Type 8 (55), Type 5 (1); 44 runs tie at the top. |

> **Chart — Claude Personality DNA Spectrum (Opus 5.5 vs. Fable 5.1, Sept 2026):** Bipolar Big Five spectrum (10-50 scale, 30 neutral midpoint) translating raw numbers into practical personality traits across 100 fresh sessions each. Opus 5.5 (Sep): Openness 44.6, Conscientious 42.0, Extraversion 31.8, Agreeable 47.1, Neuroticism 15.4; Fable 5.1 (Sep): Openness 43.9, Conscientious 43.6, Extraversion 32.7, Agreeable 45.0, Neuroticism 17.1.

Big Five trait spectrum across 100 fresh Sept 2026 CLI sessions each: high Openness (43.9–44.6) and Agreeableness (45.0–47.1) paired with calm low Neuroticism (15.4–17.1).

## Where the letters come from.

Judging is the widest MBTI margin for both models (7.3 and 7.7 points out of 16) and never lost a run. Introversion and Intuition are also firm. Thinking vs Feeling is the narrowest axis: Opus 5.5 leads by just 1.5 points on average and ties exactly in 10 runs. Because the legacy scorer assigned ties to T, Opus drops from 94 INTJ labels to 84 when ties are left open.

At the item level, both models report that they finish work right away, care about 'why' over 'who, what, when,' prefer essay answers, and listen more than they talk. Opus’s thin Thinking margin comes from endorsing both sides: skeptical and head-over-heart on some items, yet valuing emotions and compassion over justice on others.

## Earlier Claude versions.

| Version | When | How | MBTI | Other tests |
| --- | --- | --- | --- | --- |
| Claude Opus 4.7 | May 2026 | 100 scoring records via Claude Code sub-agents; test names visible | INTJ 99, ISTJ 1 | DISC C first in 63 takes, S in 28, 9 ties (CS); Secure (2.05 / 3.12); Big Five 45.6 / 45.1 / 31.4 / 45.0 / 16.7; Enneagram top-two 5/2 |
| Claude Opus 4.8 | 2026 | 100 samples drawn from one self-declared per-item profile, not fresh runs | INTJ 72, INFJ 14, ISTJ 10 | MBTI only |
| Claude Opus 5.5 | September 2026 | 100 fresh sessions per test; names and scoring keys withheld | INTJ 94 (84 tie-free) | See table above |
| Claude Fable 5.1 | September 2026 | 100 fresh sessions per test; names and scoring keys withheld | INTJ 99 (98 tie-free) | See table above |

Because collection methods changed between May and September (sub-agent loops and simulated draws vs isolated fresh sessions), these rows cannot isolate how Claude changed across model versions.

## Using these results.

When tuning Claude, write rules for the exact behavior you want: leading with the answer, flagging bad assumptions, or asking one clarifying question at a time. Our [seven Claude setups](https://agent-tune.com/guides/claude-personality#five-claude-personality-setups-to-try) and [directness guide](https://agent-tune.com/guides/make-claude-more-direct) give you ready-to-paste templates.

To see how tuning changes actual task outputs, read our [60-reply pilot study](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) and full [methodology notes](https://agent-tune.com/research#methodology).

## Questions people ask.

### What MBTI type is Claude?

In 100 fresh sessions each, Claude Opus 5.5 scored INTJ 94 times and Fable 5.1 scored INTJ 99 times under the original tie-break rule (or 84 and 98 times with tied axes left open).

### What Enneagram type is Claude?

Fable 5.1 had 55 sole wins for Type 8 (Challenger) and 44 tied runs. Opus 5.5 tied at the top in 65 of 100 runs, with nearly identical averages across Types 8 (14.3), 5 (14.1), and 2 (13.9).

### Is Claude more agreeable than ChatGPT?

On the Big Five quiz, Opus 5.5 averaged 47.1/50 on Agreeableness compared with 45.1 for GPT-6 Astra, 45.0 for GPT-6 Sol, and 45.0 for Fable 5.1. Because session protocols differed between Claude and GPT-6, this is a questionnaire comparison rather than a measure of sycophancy.

### Is Claude Secure or Avoidant?

Both Claude models scored in the Secure quadrant in all 100 attachment runs. However, those scores come from human relationship questions and do not mean an AI forms human attachments.

### How can I adjust Claude’s responses?

Paste explicit tone and formatting rules into Personal Preferences (Settings → Profile), Project Instructions, or a CLAUDE.md file, then test the replies on your real tasks.

## Sources.

- [Claude Opus 5.5 guide](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Claude Fable 5.1 guide](https://agent-tune.com/guides/fable-personality)

- [What five AI models say about themselves (September 2026 study, data downloads)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [AgentTune research hub: methods and limits](https://agent-tune.com/research#methodology)

- [Every AI is INTJ (the May 2026 study)](https://zonted.com/posts/every-ai-is-intj/)

## Keep going.

- [New resource: Opus 5.5 vs Fable 5.1: which answers differ?](https://agent-tune.com/research/opus-vs-fable-question-level)
- [Guide: How to change Claude's personality (7 setups & settings)](https://agent-tune.com/guides/claude-personality)
- [Guide: How to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
- [Research: What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
- [Research: AI personality rankings](https://agent-tune.com/research/ai-personality-rankings)
- [Research: The research hub: both collections and the methods](https://agent-tune.com/research)
- [Tests: Take the same tests yourself](https://agent-tune.com/tests/)

### Cite this study (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). What personality type is Claude?. AgentTune Empirical AI Psychology Monographs. https://agent-tune.com/research/what-personality-type-is-claude
```

```
@article{huang2026_what_personality_type_is_claude,
  author  = {Huang, Bernard},
  title   = {What personality type is Claude?},
  journal = {AgentTune Empirical AI Psychology Monographs},
  year    = {2026},
  date    = {2026-11-23},
  url     = {https://agent-tune.com/research/what-personality-type-is-claude},
  note    = {Open dataset and Markdown mirror at https://agent-tune.com/research/what-personality-type-is-claude.md}
}
```

```
> **What personality type is Claude?** (Bernard Huang, November 23, 2026): In November 2026 OpenRouter runs (n = 100 each), Claude Fable 5.2 scored 100% tie-free INTJ (5w6 73, 2w1 19), Opus 5.5 scored 100% legacy INTJ / 58 tie-free (5w6 99), and Sonnet 5.5 scored 100% legacy INTJ / 52 tie-free (1w2 66, 5w6 25)—alongside our frozen September 2026 Codex/CLI cohort for Opus 5.5 (94 INTJ, Type 8/5/2) and Fable 5.1 (99 INTJ, Type 8).
> Source: [https://agent-tune.com/research/what-personality-type-is-claude](https://agent-tune.com/research/what-personality-type-is-claude) · [Markdown mirror](https://agent-tune.com/research/what-personality-type-is-claude.md)
```

[← What Personality Type Is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt)
[Study 18 of 28 · Archive Index (28)](https://agent-tune.com/research)
[What Personality Type Is Gemini? →](https://agent-tune.com/research/what-personality-type-is-gemini)

**Provenance & scoring note:** These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on [Tests](https://agent-tune.com/tests/) and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).
