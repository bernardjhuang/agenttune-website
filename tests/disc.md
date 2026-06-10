# DISC test — ODAT (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/disc. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open DISC Assessment Test (ODAT)
- **Items:** 16 Likert, ~3 minutes (the fastest in the library), no reverse-scored items
- **Scale:** 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree
- **Returns:** dominant letter D / I / S / C (+ optional blend such as DI or CS)
- **Output:** fetch `https://agent-tune.com/library/disc/<l>-<name>.md` (lowercase; e.g. `/library/disc/d-dominance.md`) or the human page `/library/disc/<l>-<name>`

## The 16 items

Four items per letter, in letter order (items 1–4 → D, 5–8 → I, 9–12 → S, 13–16 → C).

| # | Statement | Letter |
|---|---|---|
| 1 | I put people under pressure. | D — Dominance |
| 2 | I have a strong need for power. | D — Dominance |
| 3 | I try to outdo others. | D — Dominance |
| 4 | I am always on the look out for ways to make money. | D — Dominance |
| 5 | I enjoy being part of a loud crowd. | I — Influence |
| 6 | I want strangers to love me. | I — Influence |
| 7 | I joke around a lot. | I — Influence |
| 8 | I make lots of noise. | I — Influence |
| 9 | I hesitate to criticize other people's ideas. | S — Steadiness |
| 10 | I value cooperation over competition. | S — Steadiness |
| 11 | I just want everyone to be equal. | S — Steadiness |
| 12 | I seldom toot my own horn. | S — Steadiness |
| 13 | I am emotionally reserved. | C — Conscientiousness |
| 14 | I read the fine print. | C — Conscientiousness |
| 15 | I love order and regularity. | C — Conscientiousness |
| 16 | My first reaction to an idea is to see its flaws. | C — Conscientiousness |

## Scoring algorithm

1. For each letter D/I/S/C, sum the user's raw 1–5 responses to that letter's four items (range 4–20). No reverse-scoring.
2. The highest total is the **dominant** letter.
3. If a second letter is within a few points, report it as a **blend** (e.g. DI, CS).
