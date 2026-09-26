Source: https://agent-tune.com/guides/open-personality-tests
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Tests

# The five open personality tests, explained.

        By Bernard Huang · Updated September 26, 2026

        AgentTune publishes the items and scoring for OEJTS (32 items), a 36-item OEPS adaptation, ODAT (16), IPIP-50 (50) and ECR-R (36). You can take them free in the browser or read their Markdown mirrors at /tests/. Check the original instrument terms before reuse. Identical arithmetic does not make human and model scores psychologically equivalent.

## At a glance.

| Test | Measures | Items · scale | Returns | Source |

| OEJTS | Four MBTI-style preferences | 32 · 1 to 5 between two statements | A four-letter type when all axes resolve | Open Extended Jungian Type Scales, Eric Jorgenson, via the Open Psychometrics Project |

| OEPS (36-item adaptation) | Enneagram type | 36 · 1 to 5 agree | Type 1 to 9 and an optional wing | Adapted from the Open Enneagram of Personality Scales, Open Psychometrics; the full OEPS has 54 items |

| ODAT | DISC work style | 16 · 1 to 5 agree | D, I, S or C, plus a blend | Open DISC Assessment Test, Open Psychometrics |

| IPIP-50 | Big Five traits | 50 · 1 to 5 accuracy | Five scores from 10 to 50 | International Personality Item Pool, Goldberg's 50-item markers |

| ECR-R | Attachment style | 36 · 1 to 7 agree | Secure, Anxious, Avoidant or Disorganized, with two coordinates | Experiences in Close Relationships, Revised; Fraley, Waller and Brennan, 2000 |

All five run in your browser on this site and nothing you answer is sent anywhere. Each also has a Markdown mirror at /tests/<test>.md with the items and the scoring rule, which is how an AI agent takes the test in one request.

## OEJTS: the MBTI-style test.

        What it measures. Four preferences: Extraversion or Introversion, Sensing or Intuition, Thinking or Feeling, Judging or Perceiving. Each item is a pair of statements ('I make lists' against 'I just put stuff wherever') rated 1 to 5. Eight items per axis.

Scoring. A 1 or 5 gives two points to the letter on that side, a 2 or 4 gives one, a 3 gives none. The higher letter wins the axis. AgentTune's original reporting rule sent an exact tie to I, N, T or J. The quiz now marks a tied axis X, asks one follow-up preference question, and leaves the axis open if you are still unsure; it only names a four-letter type when all four axes resolve.

Limits. It is not the MBTI, which is a trademarked instrument sold by The Myers-Briggs Company; it produces the same four-letter format from open items. And like any type sorter it turns a one-point margin into a different name. In our model data, GPT-6 Astra splits ISTJ 46 to INTJ 45 because one axis sits near zero, and Claude Opus 5.5 shows 94 INTJ labels but 84 fully resolved ones. Read the margins, not only the letters.

## OEPS: the Enneagram test.

        What it measures. Which of nine motivational types describes you best. AgentTune's version is a 36-item adaptation of the OEPS (the full instrument has 54). Four items per type, rated 1 to 5 on agreement, in type order: items 1 to 4 are Type 1, 5 to 8 are Type 2, and so on.

Scoring. Sum the four items per type (4 to 20). The highest total is your type. The wing is whichever adjacent type scores higher; if the two adjacent types tie, there is no wing. The original reporting rule sent a tie for the top type to the lower number; the quiz now reports equal top scores together and does not pick.

Limits. Four items per type is a short scale, so ties are common: in our September data, 40 to 65 runs in 100 tied at the top for every one of the four fresh-session models. An identical total can arise from different answer patterns, so inspect the item responses and tied scores. The [open-source Enneagram scorer](https://agent-tune.com/guides/open-source-enneagram-test) lets you run the arithmetic yourself.

## ODAT: the DISC test.

        What it measures. Four workplace styles: Dominance, Influence, Steadiness, Conscientiousness. Four items per letter, rated 1 to 5, no reverse-scored items.

Scoring. Sum the four items per letter (4 to 20). The highest is your dominant letter. If the second letter is within two points it is reported as a blend, such as SC. The original reporting rule put S before C in a tie; the quiz now reports tied letters equally, without a dominant letter.

Limits. With four items per style, small score differences and ties deserve attention. Many recorded models have S/C blends, while Grok 4.6’s canonical vector scores C without a blend.

## IPIP-50: the Big Five test.

        What it measures. Five continuous traits: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. Fifty short statements with an implied 'I', such as 'Am the life of the party', rated 1 (very inaccurate) to 5 (very accurate). Ten items per trait, interleaved.

Scoring. Reverse-keyed items score 6 minus the answer. Sum the ten items per trait, giving 10 to 50. AgentTune then converts each sum to an index using implementation reference centers and scales (for example Openness mean 37.5, SD 5.5) and loads a high or low tuning file for any trait past the heuristic threshold of ±0.5. Eighteen items are reverse-keyed.

Limits. For a model, a score of 47 on Agreeableness means 'answered the agreeable way on nearly every item', not a percentile of anything. The reference constants have no verified normative population. The index is not a population z-score or percentile, for either people or models; high/low template thresholds are heuristic.

## ECR-R: the attachment test.

        What it measures. Two dimensions of adult attachment: anxiety (fear of abandonment, items 1 to 18) and avoidance (discomfort with closeness, items 19 to 36). Rated 1 to 7. The items refer to a romantic partner; if you don't have one, answer about your closest current relationship.

Scoring. Fourteen items are reverse-keyed (8 minus the answer). Each dimension is the mean of its 18 items, from 1 to 7. Both at or below 4 is Secure; high anxiety only is Anxious; high avoidance only is Avoidant; both high is Disorganized.

Limits. The wording is the most human-specific of the five, so a model taking it is doing a translation, and different protocols translate 'partner' differently (the September Claude protocol left this interpretation to the model, while other reports gave analogies). Identical scoring does not make different prompts or collection methods comparable; the four labels are site scoring categories. Grok 4.6's self-report sits at avoidance 4.06, Avoidant by 0.06, which shows how little a label can rest on.

## Running them on a model.

        Because the items and the scoring rules are public, the same tests can be administered to a language model and scored with the same code. That is what the [research hub](https://agent-tune.com/research) reports: 100 fresh sessions per test for Opus and Fable, and 100 fresh five-test sessions each for Astra and Sol. Those cohorts publish every answer vector; other reports have partial or no raw data. The recipe is short:

1. Fetch /tests/mbti.md (or any of the five). It has the items, the scale and the scoring rule.
2. Present the items to the model with the scale and nothing else: no test name, no scoring key.
3. Score the answers with the published rule. Keep exact ties visible.
4. Repeat in fresh sessions if you want a distribution, not one answer.

Withholding names and scoring keys reduces explicit cues but has not been shown here to cause better measurements. Publish the exact prompts, context, model settings, session boundaries and raw responses, and count ties separately.

## Questions people ask.

            Is the OEJTS the real MBTI?

            No. The MBTI is a trademarked instrument owned by The Myers-Briggs Company. The OEJTS is an open scale from the Open Psychometrics Project that produces the same four-letter type format from its own 32 items and a published scoring rule.

            Are these tests free?

            All five are free to take here without an account. AgentTune’s code licence does not replace the source instruments’ terms; check the original item sources before redistributing an instrument.

            Which test should I choose?

            Choose the construct and scoring format you need: continuous traits, preferences, work-style labels or attachment coordinates. Human validation does not automatically transfer to language-model self-reports, and these tests do not validate a tuning benefit.

            Where do my answers go?

            Nowhere. The tests are scored in your browser and the answers are never sent to a server.

            Can an AI agent take these tests?

            Yes. Each test is served as Markdown at /tests/<test>.md with the items, the scale and the scoring rule, so an agent can administer it in one request. Withhold the scoring rule while it answers, and keep ties visible when you score.

## What changed.

- September 25, 2026 First published.

## Sources.

- [AgentTune tests hub (items, scales and scoring rules for all five)](https://agent-tune.com/tests/)

- [Open Psychometrics Project: OEJTS](https://openpsychometrics.org/tests/OEJTS/)

- [IPIP: the 50-item Big Five markers](https://ipip.ori.org/)

- [Fraley, Waller and Brennan (2000), the ECR-R](https://doi.org/10.1037/0022-3514.78.2.350)

- [What five AI models say about themselves (how the tests were run on models)](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

          [TestsTake any of the five](https://agent-tune.com/tests/)
          [GuideOpen-source Enneagram test and scorer](https://agent-tune.com/guides/open-source-enneagram-test)
          [GuideMBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
          [ResearchThe research hub](https://agent-tune.com/research)
