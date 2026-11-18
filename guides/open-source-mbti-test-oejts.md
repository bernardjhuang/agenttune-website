Source: https://agent-tune.com/guides/open-source-mbti-test-oejts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · OEJTS 1.2

# Open-source MBTI-style test (OEJTS 1.2): 32 items and scorer.

By Bernard Huang · Updated November 5, 2026

How the 32-item Open Extended Jungian Type Scales work, how axis margins and ties are calculated, and why tie-breaking rules change AI model headlines.

**Quick answer:** OEJTS 1.2 uses 32 bipolar items rated 1 to 5 between two opposite statements, with 8 items per axis: E/I, S/N, T/F, and J/P. Each axis has a constant sum of 48 across its 8 items, making 24 vs 24 (signed margin 0) an exact tie. AgentTune's scorer reports signed axis margins and tie-preserving codes (marking tied axes as X) alongside optional four-letter types.

## How OEJTS 1.2 scoring works.

Unlike agreement scales rated from Strongly Disagree to Strongly Agree, each OEJTS item places two contrasting descriptions at opposite ends of a 1-to-5 scale. Eight items measure each of the four Jungian preference axes:

| Axis | Two poles | Items | Axis sum &amp; tie point |
| --- | --- | --- | --- |
| E / I | Extraversion vs Introversion | 8 bipolar items (1–5) | Pole sum = 48; exact tie at 24 vs 24 (margin 0) |
| S / N | Sensing vs Intuition | 8 bipolar items (1–5) | Pole sum = 48; exact tie at 24 vs 24 (margin 0) |
| T / F | Thinking vs Feeling | 8 bipolar items (1–5) | Pole sum = 48; exact tie at 24 vs 24 (margin 0) |
| J / P | Judging vs Perceiving | 8 bipolar items (1–5) | Pole sum = 48; exact tie at 24 vs 24 (margin 0) |

In our shared scorer ([/resources/scoring/score.js](https://agent-tune.com/resources/scoring/score.js)), the two pole totals on any axis always add up to 48. The signed margin (such as `I - E` or `N - S`) ranges from -16 to +16 in even steps of 2. When a person or AI model picks the midpoint (`3`) on all eight items—or balances left and right responses equally—both poles equal 24 and the signed margin is 0.

## Why tie handling changes AI personality results.

Most web quizzes never show a tied axis. When an axis ties at 24 to 24, a strict `>` comparison silently awards the letter to whichever pole sits in the `else` branch (`I`, `N`, `T`, and `J` in our legacy study scripts). In our September 2026 reanalysis ([How tie-breaking changes AI MBTI results](https://agent-tune.com/research/ai-mbti-tie-breaking)), keeping tied axes open as `X` exposed how often models sit right on an axis boundary:

| Cohort (n = 100 fresh sessions) | Legacy tie-broken labels | Runs with ≥1 tied axis | Tie-preserving patterns |
| --- | --- | --- | --- |
| GPT-6 Astra | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2 | 29 / 100 (24 S/N, 12 E/I) | ISTJ 45 · INTJ 19 · IXTJ 15 · XXTJ 7 · ENTJ 5 · XNTJ 4 · ESTJ 2 · EXTJ 2 · XSTJ 1 |
| GPT-6 Sol | INTJ 97 · ISTJ 3 | 18 / 100 (16 S/N, 2 E/I) | INTJ 79 · IXTJ 16 · ISTJ 3 · XNTJ 2 |
| Claude Opus 5.5 | INTJ 94 · INFJ 5 · ENTJ 1 | 11 / 100 (10 T/F, 1 E/I) | INTJ 84 · INXJ 9 · INFJ 5 · XNTJ 1 · ENXJ 1 |
| Claude Fable 5.1 | INTJ 99 · ISTJ 1 | 1 / 100 (1 S/N) | INTJ 98 · IXTJ 1 · ISTJ 1 |

On the interactive test at [/tests/mbti](https://agent-tune.com/tests/mbti), we show your exact pole scores and mark any tied axis as `X` first, while letting you pick which pole to preview if you want a four-letter tuning file.

## Take the test or inspect the machine-readable specification.

- **Interactive browser test:** [Take the 32-item OEJTS test](https://agent-tune.com/tests/mbti) (runs client-side in your browser, no email or sign-up).
- **Markdown spec for agents & researchers:** [/tests/mbti.md](https://agent-tune.com/tests/mbti.md) and the MCP `get_test_spec` tool at `https://agent-tune.com/mcp`.
- **All 16 MBTI communication tunings:** Browse the [16 four-letter tuning files](https://agent-tune.com/library/#mbti) in the library.

Note on licensing and provenance: OEJTS is an open scale created by the Open Psychometrics Project and is independent of the trademarked Myers-Briggs Type Indicator (MBTI®). Original AgentTune scoring code and communication templates are MIT licensed; check [instrument-rights.json](https://agent-tune.com/resources/content/instrument-rights.json) before redistributing questionnaire item text.

## Sample INTJ / ISTJ analytical communication block.

If you already know your four-letter preference and want to skip straight to tuning your assistant, copy this structured analytical block or pick your exact type in the [library](https://agent-tune.com/library/#mbti):

```markdown
## Communication preferences

- Lead with the conclusion, model, or recommendation in the first sentence.
- Organize multi-part answers around clear causal structure and explicit assumptions.
- Use plain prose by default; use tables only when comparing three or more alternatives.
- Skip small talk, flattery, and closing filler.
- Point out logical gaps or unverified premises before executing a plan.
```

## Questions people ask.

### What is the OEJTS 1.2 personality test?

The Open Extended Jungian Type Scales (OEJTS 1.2) is a 32-item open-science questionnaire developed by the Open Psychometrics Project to measure four Jungian preference axes (E/I, S/N, T/F, and J/P) on a 1-to-5 bipolar scale.

### How does OEJTS 1.2 handle tied scores?

Each of the four axes has 8 items whose two poles sum to 48, making 24 vs 24 an exact tie. AgentTune's scorer reports tied axes explicitly with an X (such as IXTJ) rather than silently forcing a tie-break toward I, N, T, or J.

### Is the AgentTune OEJTS test free and private?

Yes. The test at /tests/mbti runs entirely in your browser tab with no email capture, no account creation, and no server upload of your individual answers.

### Can I use the OEJTS specification to test an LLM?

Yes. You can fetch the Markdown specification at /tests/mbti.md, score responses deterministically with /resources/scoring/score.js, and compare against our frozen 400-session dataset in the research hub.

## What changed.

- November 5, 2026 First published with OEJTS 1.2 axis arithmetic, tie-handling tables, and direct links to the browser runner and scorer.

## Sources.

- [Open Psychometrics Project: Development of the OEJTS 1.2](https://openpsychometrics.org/tests/OEJTS/)

- [AgentTune Interactive OEJTS Runner](https://agent-tune.com/tests/mbti)

- [AgentTune Research: How tie-breaking changes AI MBTI results](https://agent-tune.com/research/ai-mbti-tie-breaking)

- [AgentTune Deterministic Scorer (score.js)](https://agent-tune.com/resources/scoring/score.js)

## Keep going.

- [Interactive Test: Take the free 32-item OEJTS test in your browser](https://agent-tune.com/tests/mbti)
- [Research: How tie-breaking changes AI MBTI results](https://agent-tune.com/research/ai-mbti-tie-breaking)
- [Guide: The five open personality tests, explained](https://agent-tune.com/guides/open-personality-tests)
- [Guide: Free DISC assessment (no email): 4 styles, 12 blends & ODAT scorer](https://agent-tune.com/guides/free-disc-assessment-guide-work-ai)
- [Prompts: ChatGPT custom instructions by MBTI personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
