# MBTI test — OEJTS (machine-readable spec)

> Same-domain Markdown mirror of the interactive test at https://agent-tune.com/tests/mbti. An AI agent can administer this inline without rendering the page.

- **Instrument:** Open Extended Jungian Type Scales (OEJTS)
- **Items:** 32 bipolar, ~5 minutes
- **Scale:** each item is a choice between two statements rated 1–5 (1 = strongly the first statement, 3 = neutral, 5 = strongly the second)
- **Returns:** one of 16 four-letter MBTI types
- **Source:** OEJTS, Eric Jorgenson, via the Open Psychometrics Project (openpsychometrics.org/tests/OEJTS/) — free for educational use
- **Output:** fetch `https://agent-tune.com/library/mbti/<type>.md` (lowercase; e.g. INTJ → `/library/mbti/intj.md`) or the human page `/library/mbti/<type>`

## The 32 items

The last two columns show which letter a response awards: a "1" (first statement) awards the **←1** letter; a "5" (second statement) awards the **5→** letter.

| # | First statement | Second statement | Axis | ←1 | 5→ |
|---|---|---|---|---|---|
| 1 | I make lists | I just put stuff wherever | J/P | J | P |
| 2 | I am skeptical | I want to believe | T/F | T | F |
| 3 | I get bored when I'm alone | I need time alone | E/I | E | I |
| 4 | I accept things as they are | I'm unsatisfied with the way things are | S/N | S | N |
| 5 | I keep my room clean | I just put stuff wherever | J/P | J | P |
| 6 | I think "robotic" is an insult | I strive to have a mechanical mind | T/F | F | T |
| 7 | I'm energetic | I'm mellow | E/I | E | I |
| 8 | I prefer multiple choice tests | I prefer essay answers | S/N | S | N |
| 9 | I'm chaotic | I'm organized | J/P | P | J |
| 10 | I'm easily hurt | I'm thick-skinned | T/F | F | T |
| 11 | I work best in groups | I work best alone | E/I | E | I |
| 12 | I focus on the present | I focus on the future | S/N | S | N |
| 13 | I plan far ahead | I plan at the last minute | J/P | J | P |
| 14 | I want people's respect | I want their love | T/F | T | F |
| 15 | Parties wear me out | Parties fire me up | E/I | I | E |
| 16 | I try to fit in | I try to stand out | S/N | S | N |
| 17 | I keep my options open | I commit | J/P | P | J |
| 18 | I want to be good at fixing things | I want to be good at fixing people | T/F | T | F |
| 19 | I talk more than I listen | I listen more than I talk | E/I | E | I |
| 20 | When describing an event, I tell what happened | I tell what it meant | S/N | S | N |
| 21 | I get work done right away | I procrastinate | J/P | J | P |
| 22 | I follow my heart | I follow my head | T/F | F | T |
| 23 | I stay at home | I go out on the town | E/I | I | E |
| 24 | I want the big picture | I want the details | S/N | N | S |
| 25 | I improvise | I prepare | J/P | P | J |
| 26 | I base morality on justice | I base morality on compassion | T/F | T | F |
| 27 | It's hard for me to yell loudly | Yelling comes naturally to me | E/I | I | E |
| 28 | I'm theoretical | I'm empirical | S/N | N | S |
| 29 | I work hard | I play hard | J/P | J | P |
| 30 | I'm uncomfortable with emotions | I value emotions | T/F | T | F |
| 31 | I like to perform in front of people | I avoid public speaking | E/I | E | I |
| 32 | I like to know "who, what, when" | I like to know "why" | S/N | S | N |

## Scoring algorithm

1. For each axis (E/I, S/N, T/F, J/P), start both letters at 0.
2. For each of that axis's 8 items, score the response: 1 → +2 to the **←1** letter; 2 → +1 to it; 3 → 0 (neutral); 4 → +1 to the **5→** letter; 5 → +2 to it.
3. The higher total wins the letter. On a tie, default to **I, N, T, J** (more common in adults).
4. Concatenate the winners in order E/I, S/N, T/F, J/P → the 4-letter type.
