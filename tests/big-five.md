# Big Five test — IPIP-50 (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/big-five. An AI agent can administer this inline without rendering the page.

- **Instrument:** International Personality Item Pool, 50-item (IPIP-50, Goldberg)
- **Items:** 50, ~7 minutes, 1–5 Likert (1 = Very Inaccurate, 5 = Very Accurate). Each statement carries an implicit leading "I …" (e.g. "Am the life of the party" → "I am the life of the party").
- **Reverse-scored:** 20 items (marked ✓ below) — compute `scored = 6 − raw`
- **Returns:** 5 continuous trait scores → `ocean/<dim>-{high,low}.md` for every dimension where `|z| > 0.5`
- **Output:** fetch `https://agent-tune.com/tunings/ocean/<L>-{high,low}.md` or the human page `/library/ocean/<dimension>-{high,low}`

## The 50 items

Ten items per OCEAN dimension, interleaved.

| # | Statement (implicit "I…") | Dim | Reverse? |
|---|---|---|---|
| 1 | Am the life of the party. | E | — |
| 2 | Feel little concern for others. | A | ✓ |
| 3 | Am always prepared. | C | — |
| 4 | Get stressed out easily. | N | — |
| 5 | Have a rich vocabulary. | O | — |
| 6 | Don't talk a lot. | E | ✓ |
| 7 | Am interested in people. | A | — |
| 8 | Leave my belongings around. | C | ✓ |
| 9 | Am relaxed most of the time. | N | ✓ |
| 10 | Have difficulty understanding abstract ideas. | O | ✓ |
| 11 | Feel comfortable around people. | E | — |
| 12 | Insult people. | A | ✓ |
| 13 | Pay attention to details. | C | — |
| 14 | Worry about things. | N | — |
| 15 | Have a vivid imagination. | O | — |
| 16 | Keep in the background. | E | ✓ |
| 17 | Sympathize with others' feelings. | A | — |
| 18 | Make a mess of things. | C | ✓ |
| 19 | Seldom feel blue. | N | ✓ |
| 20 | Am not interested in abstract ideas. | O | ✓ |
| 21 | Start conversations. | E | — |
| 22 | Am not interested in other people's problems. | A | ✓ |
| 23 | Get chores done right away. | C | — |
| 24 | Am easily disturbed. | N | — |
| 25 | Have excellent ideas. | O | — |
| 26 | Have little to say. | E | ✓ |
| 27 | Have a soft heart. | A | — |
| 28 | Often forget to put things back in their proper place. | C | ✓ |
| 29 | Get upset easily. | N | — |
| 30 | Do not have a good imagination. | O | ✓ |
| 31 | Talk to a lot of different people at parties. | E | — |
| 32 | Am not really interested in others. | A | ✓ |
| 33 | Like order. | C | — |
| 34 | Change my mood a lot. | N | — |
| 35 | Am quick to understand things. | O | — |
| 36 | Don't like to draw attention to myself. | E | ✓ |
| 37 | Take time out for others. | A | — |
| 38 | Shirk my duties. | C | ✓ |
| 39 | Have frequent mood swings. | N | — |
| 40 | Use difficult words. | O | — |
| 41 | Don't mind being the center of attention. | E | — |
| 42 | Feel others' emotions. | A | — |
| 43 | Follow a schedule. | C | — |
| 44 | Get irritated easily. | N | — |
| 45 | Spend time reflecting on things. | O | — |
| 46 | Am quiet around strangers. | E | ✓ |
| 47 | Make people feel at ease. | A | — |
| 48 | Am exacting in my work. | C | — |
| 49 | Often feel blue. | N | — |
| 50 | Am full of ideas. | O | — |

## Scoring algorithm

1. For each reverse-scored item (✓), compute `scored = 6 − raw`; otherwise `scored = raw`.
2. Sum the 10 scored items per dimension (range 10–50).
3. Convert to a z-score using the population norms below: `z = (raw_sum − M) / SD`.
4. For every dimension with `z > 0.5` load the `-high` file; with `z < −0.5` load the `-low` file; otherwise skip it (the model's default handles average dimensions).

### Population norms

| Dim | Name | Mean (M) | SD |
|---|---|---|---|
| O | Openness | 37.5 | 5.5 |
| C | Conscientiousness | 34.5 | 6 |
| E | Extraversion | 28.5 | 7 |
| A | Agreeableness | 36.5 | 5.5 |
| N | Neuroticism | 26 | 7 |
