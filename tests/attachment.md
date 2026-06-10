# Attachment test — ECR-R (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/attachment. An AI agent can administer this inline without rendering the page.

- **Instrument:** Experiences in Close Relationships – Revised (ECR-R)
- **Items:** 36, ~5 minutes, **1–7 Likert** (1 = Strongly Disagree, 4 = Neutral, 7 = Strongly Agree)
- **Reverse-scored:** 14 items (marked ✓ below) — compute `scored = 8 − raw`
- **Subscales:** items 1–18 = anxiety, items 19–36 = avoidance
- **Returns:** Secure / Anxious / Avoidant / Disorganized
- **Output:** fetch `https://agent-tune.com/library/attachment/<style>.md` (e.g. `/library/attachment/secure.md`) or the human page `/library/attachment/<style>`
- **Note:** items reference a romantic partner; for users without one, adapt to "closest current relationship."

## The 36 items

| # | Statement | Subscale | Reverse? |
|---|---|---|---|
| 1 | I'm afraid that I will lose my partner's love. | Anxiety | — |
| 2 | I often worry that my partner will not want to stay with me. | Anxiety | — |
| 3 | I often worry that my partner doesn't really love me. | Anxiety | — |
| 4 | I worry that romantic partners won't care about me as much as I care about them. | Anxiety | — |
| 5 | I often wish that my partner's feelings for me were as strong as my feelings for them. | Anxiety | — |
| 6 | I worry a lot about my relationships. | Anxiety | — |
| 7 | When my partner is out of sight, I worry that they might become interested in someone else. | Anxiety | — |
| 8 | When I show my feelings for romantic partners, I'm afraid they will not feel the same about me. | Anxiety | — |
| 9 | I rarely worry about my partner leaving me. | Anxiety | ✓ |
| 10 | My romantic partner makes me doubt myself. | Anxiety | — |
| 11 | I do not often worry about being abandoned. | Anxiety | ✓ |
| 12 | I find that my partner(s) don't want to get as close as I would like. | Anxiety | — |
| 13 | Sometimes romantic partners change their feelings about me for no apparent reason. | Anxiety | — |
| 14 | My desire to be very close sometimes scares people away. | Anxiety | — |
| 15 | I'm afraid that once a romantic partner gets to know me, they won't like who I really am. | Anxiety | — |
| 16 | It makes me mad that I don't get the affection and support I need from my partner. | Anxiety | — |
| 17 | I worry that I won't measure up to other people. | Anxiety | — |
| 18 | My partner only seems to notice me when I'm angry. | Anxiety | — |
| 19 | I prefer not to show a partner how I feel deep down. | Avoidance | — |
| 20 | I feel comfortable sharing my private thoughts and feelings with my partner. | Avoidance | ✓ |
| 21 | I find it difficult to allow myself to depend on romantic partners. | Avoidance | — |
| 22 | I am very comfortable being close to romantic partners. | Avoidance | ✓ |
| 23 | I don't feel comfortable opening up to romantic partners. | Avoidance | — |
| 24 | I prefer not to be too close to romantic partners. | Avoidance | — |
| 25 | I get uncomfortable when a romantic partner wants to be very close. | Avoidance | — |
| 26 | I find it relatively easy to get close to my partner. | Avoidance | ✓ |
| 27 | It's not difficult for me to get close to my partner. | Avoidance | ✓ |
| 28 | I usually discuss my problems and concerns with my partner. | Avoidance | ✓ |
| 29 | It helps to turn to my romantic partner in times of need. | Avoidance | ✓ |
| 30 | I tell my partner just about everything. | Avoidance | ✓ |
| 31 | I talk things over with my partner. | Avoidance | ✓ |
| 32 | I am nervous when partners get too close to me. | Avoidance | — |
| 33 | I feel comfortable depending on romantic partners. | Avoidance | ✓ |
| 34 | I find it easy to depend on romantic partners. | Avoidance | ✓ |
| 35 | It's easy for me to be affectionate with my partner. | Avoidance | ✓ |
| 36 | My partner really understands me and my needs. | Avoidance | ✓ |

## Scoring algorithm

1. For each reverse-scored item (✓), compute `scored = 8 − raw`; otherwise `scored = raw`.
2. **Anxiety** = mean of the scored anxiety items (1–18). **Avoidance** = mean of the scored avoidance items (19–36). Both land on 1–7.
3. Split each subscale at the midpoint (4): low anxiety + low avoidance = **Secure**; high anxiety + low avoidance = **Anxious**; low anxiety + high avoidance = **Avoidant**; high anxiety + high avoidance = **Disorganized**.
