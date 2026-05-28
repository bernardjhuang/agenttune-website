# Enneagram test — OEPS (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/enneagram. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open Enneagram of Personality Scales (OEPS)
- **Items:** 36 Likert, ~5 minutes, no reverse-scored items
- **Scale:** 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree
- **Returns:** dominant type 1–9 (+ optional wing)
- **Output:** fetch `https://agent-tune.com/tunings/enneagram/<N>-<name>.md` or the human page `/library/enneagram/<N>-<name>`

## The 36 items

Four items per type, in type order (items 1–4 → Type 1, 5–8 → Type 2, … 33–36 → Type 9).

| # | Statement | Type |
|---|---|---|
| 1 | I am a perfectionist. | 1 — Reformer |
| 2 | I strive for efficiency. | 1 — Reformer |
| 3 | I often have to redo other people's work. | 1 — Reformer |
| 4 | I keep my belongings in order. | 1 — Reformer |
| 5 | My relationships with others are what my life is about. | 2 — Helper |
| 6 | I have difficulty saying no. | 2 — Helper |
| 7 | I get lots of satisfaction from helping others achieve their goals. | 2 — Helper |
| 8 | I put family first. | 2 — Helper |
| 9 | I put work first. | 3 — Achiever |
| 10 | I like to stand out. | 3 — Achiever |
| 11 | It is good to wake up to a full day of planned activities. | 3 — Achiever |
| 12 | Money is important to my happiness. | 3 — Achiever |
| 13 | I daydream about being in love. | 4 — Individualist |
| 14 | I really enjoy feeling bittersweet. | 4 — Individualist |
| 15 | I get deeply immersed in music. | 4 — Individualist |
| 16 | I side with the rebels over the establishment. | 4 — Individualist |
| 17 | I have a hard time showing emotions. | 5 — Investigator |
| 18 | I spend hours alone with my hobbies. | 5 — Investigator |
| 19 | I spend most of my time trying to understand things. | 5 — Investigator |
| 20 | I like mental challenges. | 5 — Investigator |
| 21 | Fear of being taken advantage of keeps me from being more trusting. | 6 — Loyalist |
| 22 | I get input from others before I make a decision. | 6 — Loyalist |
| 23 | I conform. | 6 — Loyalist |
| 24 | I am loyal. | 6 — Loyalist |
| 25 | I must always be having new experiences. | 7 — Enthusiast |
| 26 | I can keep a conversation going with anyone about anything. | 7 — Enthusiast |
| 27 | I am uninhibited. | 7 — Enthusiast |
| 28 | I always try to break the tension with a good joke. | 7 — Enthusiast |
| 29 | I naturally emerge as a leader. | 8 — Challenger |
| 30 | I like a conversation where no one agrees. | 8 — Challenger |
| 31 | I want people to tell me the truth, not spare my feelings. | 8 — Challenger |
| 32 | I come up with good solutions. | 8 — Challenger |
| 33 | When other people are arguing, I leave the room. | 9 — Peacemaker |
| 34 | I keep my thoughts to myself to prevent trouble. | 9 — Peacemaker |
| 35 | I am very accepting and flexible. | 9 — Peacemaker |
| 36 | I avoid confrontation. | 9 — Peacemaker |

## Scoring algorithm

1. For each type 1–9, sum the user's raw 1–5 responses to that type's four items (range 4–20). No reverse-scoring.
2. The highest total is the **dominant type**.
3. The higher-scoring of the two adjacent types (the wings) is the optional **wing**.
4. Resolve the slug from the dominant type (e.g. 5 → `5-investigator`).
