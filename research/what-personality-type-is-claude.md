Source: https://agent-tune.com/research/what-personality-type-is-claude
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · Q&A

# What personality type is Claude?

By Bernard Huang · Updated November 17, 2026

Measured on Opus 5.5 and Fable 5.1 in September 2026, with the earlier versions for context.

**Quick answer:** Under the original tie-break rule, Claude Opus 5.5 scored INTJ in 94 of 100 runs and Fable 5.1 scored INTJ in 99 of 100 runs (84 and 98 with ties left open). Both scored Secure in all 100 attachment runs and SC/CS on DISC. On the Enneagram, Fable had 55 outright Type 8 wins, while Opus tied at the top in 65 runs across Types 8, 5, and 2.

**Data note (September 26, 2026):** These pages analyze our frozen September 2026 and May 2026 AI questionnaire datasets. All raw answers, scoring keys, and summary tables are unchanged. You can take all five tests on [Tests](https://agent-tune.com/tests/), and download the item IDs and scoring keys to reproduce our numbers. Note that Big Five scores are raw totals, not human population percentiles. [Read the provenance note](https://agent-tune.com/research/data/rights-migration.json).

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
