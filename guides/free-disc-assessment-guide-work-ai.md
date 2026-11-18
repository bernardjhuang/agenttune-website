Source: https://agent-tune.com/guides/free-disc-assessment-guide-work-ai
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · DISC & Workplace

# Free DISC assessment (no email): 4 styles, 12 blends & ODAT scorer.

By Bernard Huang · Updated November 16, 2026

What Dominance, Influence, Steadiness, and Conscientiousness measure at work, how the 16-item ODAT scores blends & ties, and how frontier AI models score.

**Quick answer:** Take the free 16-question DISC test at agent-tune.com/tests/disc with instant browser-only scoring and no email required. Each of the four styles—Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)—is scored from 4 to 20. If your second-highest style lands within 2 points of your top style, you get a two-letter blend like DC, DI, SC, or IS.

## Take the 3-minute test or read the four quadrants first.

DISC maps workplace behavior across two everyday axes: **Active / Fast-paced vs. Reserved / Methodical** and **Task-focused vs. People-focused**. Ready to score yourself first? [**Start the free 16-item DISC test →**](https://agent-tune.com/tests/disc) (takes ~3 minutes, keyboard shortcuts `1`–`5`).

| Style | Quadrant | Default workplace preference | What frustrates them in AI &amp; meetings |
| --- | --- | --- | --- |
| [D — Dominance](https://agent-tune.com/library/disc/d-dominance) | Fast-paced · Task-focused | Bottom line first, clear tradeoffs, decision ownership. | Throat-clearing intros, hedged non-answers, unrequested hand-holding. |
| [I — Influence](https://agent-tune.com/library/disc/i-influence) | Fast-paced · People-focused | Big-picture momentum, riffing out loud, crisp narrative framing. | Dry walls of caveats that kill momentum before exploring options. |
| [S — Steadiness](https://agent-tune.com/library/disc/s-steadiness) | Methodical · People-focused | Predictable step-by-step plans, calm pacing, clear impact on the team. | Abrupt pivots, unflagged breaking changes, combative tone. |
| [C — Conscientiousness](https://agent-tune.com/library/disc/c-conscientiousness) | Methodical · Task-focused | Primary sources, explicit assumptions, edge cases, exact numbers. | Confident hand-waving, missing citations, glossed-over failure modes. |

## All 12 two-letter DISC blends, decoded.

Few people sit purely in one corner. On our [16-item ODAT runner](https://agent-tune.com/tests/disc), when your runner-up quadrant finishes within **2 points** of your highest total (for example, `C = 17` and `S = 16`), your profile reports a two-letter blend. If two quadrants tie for first place, both styles are shown transparently rather than broken arbitrarily.

| Blend | Workplace shorthand | How to tune your AI or team README |
| --- | --- | --- |
| DC / CD | Architect-Driver | Lead with the conclusion, then back it immediately with numbers and failure modes; skip small talk. |
| DI / ID | Catalyst-Closer | Open with the boldest high-leverage option and next action; keep energy high and prose tight. |
| DS / SD | Steady Executor | Focus on practical execution milestones, clear ownership, and realistic timelines. |
| IS / SI | Collaborative Coach | Use a warm, constructive register; connect tasks to team impact and sequence changes smoothly. |
| IC / CI | Analytical Storyteller | Pair rigorous evidence with a clear executive narrative I can share with stakeholders. |
| SC / CS | Careful Systems Builder | Walk through changes methodically, flag risks early, and verify edge cases before shipping. |

Curious where frontier AI models land on the exact same 16 items? In our September 2026 benchmark, GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 all scored **`CS`**, while Grok 4.6 scored pure **`C`** ([read the 5-model study](https://agent-tune.com/research/ai-personality-five-models-2026)).

## How the 16-item ODAT scores quadrants, blends & AI models.

Transparency matters when using any personality questionnaire:

- **Not a clinical or hiring gate:** ODAT is an open self-report adaptation from the Open Psychometrics Project (inspect the full spec at [`/tests/disc.md`](https://agent-tune.com/tests/disc.md) and our open [`score.js`](https://agent-tune.com/resources/scoring/score.js) arithmetic). Each quadrant sums 4 direct statements rated 1–5 (range **4 to 20**, no reverse-scored items). Commercial assessments sold for HR workshops (such as Everything DiSC) use proprietary adaptive item banks and normed workplace reports—and should not be confused with an open 16-item self-reflection tool.
- **Tie-preserving blend math:** Because each letter sums just four items, exact integer ties happen often. Earlier scripts broke ties in fixed order (`D, I, S, C`), hiding real ties. Our scorer reports top-score ties explicitly (e.g. `S/C`) and reports a 2-letter blend only when one style leads uniquely and a single runner-up lands within 2 points.

| Model cohort (Sept 2026) | D mean (/20) | I mean (/20) | S mean (/20) | C mean (/20) | Tie-aware top outcomes |
| --- | --- | --- | --- | --- | --- |
| GPT-6 Astra (n = 100) | 5.12 | 9.96 | 17.55 | 16.40 | S leads in 99 runs, S/C tied in 1 (legacy: SC 84 · S 15 · CS 1) |
| GPT-6 Sol (n = 100) | 5.42 | 8.24 | 16.18 | 16.68 | C leads in 53 runs, S leads in 8, C/S tied in 39 (legacy: CS 53 · SC 47) |
| Claude Opus 5.5 (n = 100) | 4.00 | 9.00 | 16.92 | 16.35 | S leads in 64 runs, C leads in 8, S/C tied in 28 (legacy: SC 92 · CS 8) |
| Claude Fable 5.1 (n = 100) | 5.00 | 8.91 | 16.00 | 16.05 | C leads in 25 runs, S leads in 24, S/C tied in 51 (legacy: SC 75 · CS 25) |
| Grok 4.6 (1 canonical self-report) | 6.00 | 8.00 | 11.00 | 18.00 | Pure C (18 vs 11; 7-point margin) |

Notice Claude Fable 5.1: under legacy tie-breaking it looked 75% `SC`, when in reality Steadiness and Conscientiousness tied at 16-to-16 in 51 of 100 sessions.

## Turn your DISC style into an AI prompt + team User Manual.

Here is a balanced `DC` (Dominance + Conscientiousness) communication block you can adapt for ChatGPT, Claude, Meta Muse, or `AGENTS.md`—or swap in all four pure styles in our [DISC AI prompts guide](https://agent-tune.com/guides/disc-ai-prompts):

```markdown
## Working with me (DISC: DC — Direct & Analytical)

- Bottom line first: state the recommendation or answer in sentence one.
- Back claims with concrete evidence, tradeoffs, or primary sources—never filler adjectives.
- Flag material uncertainty and unverified assumptions explicitly.
- Push back directly if my plan has a cleaner, lower-risk alternative.
- Default to tight prose; use tables when comparing 3+ options on shared criteria.
```

Want a version for human coworkers too? Drop your top 3 rules into our [How to Work With Me card builder](https://agent-tune.com/tools/how-to-work-with-me) or copy the full Notion/GitHub layout in our [How to Work With Me README template](https://agent-tune.com/guides/how-to-work-with-me-readme-ai-template).

## Questions people ask.

### Where can I take a truly free DISC test without giving my email?

Go to agent-tune.com/tests/disc. All 16 ODAT questions run locally in your browser in about 3 minutes with zero email gate, account signup, or paywall.

### What do D, I, S, and C stand for in DISC?

Dominance (direct, results-focused), Influence (outgoing, momentum-focused), Steadiness (patient, cooperative, methodical), and Conscientiousness (analytical, precise, evidence-driven).

### What does a two-letter DISC result like CS or DI mean?

The first letter is your highest-scoring quadrant and the second letter is a close secondary style (within 2 points on the 4–20 ODAT scale) that shapes how you apply your primary style.

### Is the ODAT DISC test affiliated with commercial DiSC publishers?

No. AgentTune uses the open 16-item ODAT adaptation for personal reflection and AI communication preferences; it is an independent self-report tool, not a commercial Everything DiSC assessment or hiring instrument.

## What changed.

- November 16, 2026 Merged ODAT 16-item scoring contract, tie-preserving blend rules, and September 2026 AI model ODAT scores into this canonical guide.

- November 11, 2026 Published covering the 4 DISC quadrants, all 12 two-letter blends, open ODAT vs commercial tests, and AI/team prompts.

## Sources.

- [AgentTune Interactive Runner: Free 16-Item DISC Test](https://agent-tune.com/tests/disc)

- [Open Psychometrics Project: Open DISC Assessment Test (ODAT)](https://openpsychometrics.org/tests/ODAT/)

- [AgentTune Deterministic Scorer (score.js)](https://agent-tune.com/resources/scoring/score.js)

- [AgentTune Research: Five AI models on five personality tests (September 2026)](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Free 3-min test: Take the free DISC personality test (no email)](https://agent-tune.com/tests/disc)
- [Prompts: DISC AI prompts for all four workplace styles](https://agent-tune.com/guides/disc-ai-prompts)
- [Free browser tool: How to Work With Me card builder](https://agent-tune.com/tools/how-to-work-with-me)
- [Test spec: Open-source DISC (ODAT) Markdown specification](https://agent-tune.com/tests/disc.md)
- [Template: How to Work With Me README template (for teams & AI)](https://agent-tune.com/guides/how-to-work-with-me-readme-ai-template)
