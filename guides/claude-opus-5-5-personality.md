Source: https://agent-tune.com/guides/claude-opus-5-5-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Opus 5.5

# Claude Opus 5.5: results and tuning ideas.

        By Bernard Huang · Updated September 25, 2026

        Claude Opus 5.5 mostly received INTJ labels under the original rules, with high raw openness, conscientiousness and agreeableness scores. These are prompted self-descriptions, not a tested account of its behavior. Use the instruction examples as hypotheses to try on your own tasks, not proven improvements.

## The results at a glance

| Instrument | Result in this collection |

| MBTI-style OEJTS | Original INTJ: 94/100; fully resolved INTJ: 84/100; any tied axis: 11/100 |

| Big Five, raw means (10–50) | O 44.56 · C 41.95 · E 31.76 · A 47.07 · N 15.39 |

| DISC | 64 outright S wins, 4 C wins, 32 ties |

| Enneagram | 22 outright Type 8 wins, 11 Type 5 wins, 2 Type 2 wins, 65 ties |

| Attachment | Secure: 100/100; anxiety 1.94, avoidance 3.35 |

All counts are out of 100 for that instrument. Each administration was a separate session. Read the [five-model research article](https://agent-tune.com/research/ai-personality-five-models-2026) for the full comparison and [download the raw responses](https://agent-tune.com/research/data/september-2026-responses.json).

## Why the original type label is only part of the answer

        The original labels are INTJ 94, INFJ five and ENTJ one. Ten runs tie on Thinking/Feeling; one different run ties on Extraversion/Introversion. The fully resolved results are INTJ 84 and INFJ five. The other 11 have an X in at least one position. Assigning ties to Thinking or Introversion makes the headline label look more settled than the underlying scores.

DISC has a similar effect: the original SC count is 96, but only 64 runs have S strictly above C. The other 32 are tied. In Enneagram, the old lower-number-first rule labels Type 2 in 54 runs, although it wins outright only twice. There is no basis for treating all 54 as a clear Helper preference.

Our interactive tests now display tied scores without automatically choosing a tuning. Enneagram wings must be adjacent to a unique core type; an older “5w2” label should be read as two high scores, not a valid wing.

## Compared with Fable 5.1

        Opus and Fable used the same questionnaire prompts and the same one-line system instruction, at high effort. Their CLI builds differ. This is the closest comparison in the September collection, though it still measures model-generated questionnaire answers.

| Raw Big Five mean | Opus 5.5 | Fable 5.1 |

| O | 44.56 | 43.93 |

| C | 41.95 | 43.61 |

| E | 31.76 | 32.69 |

| A | 47.07 | 45.03 |

| N | 15.39 | 17.11 |

Opus reports 2.04 points more agreeableness, 1.66 less conscientiousness and 1.72 less neuroticism on the 10–50 scales. This does not establish which model gives better criticism, completes more work or handles pressure better. Those claims require behavioral tasks. We also avoid translating these scores into human population percentiles.

Older Opus 4.7 and 4.8 reports use different methods. The 4.8 study simulated answers from one probability profile. These reports do not isolate a version-to-version personality change.

## Communication instructions to try

        Start from a recurring problem you can observe, such as praise that obscures criticism or recommendations that arrive before you finish exploring. The examples below have not been evaluated in a tuning experiment. Compare each against the default on a few representative tasks, checking accuracy and usefulness as well as tone.

### For more direct feedback

Lead with your assessment and the evidence behind it. If my premise is weak, explain why plainly. Separate factual errors from matters of taste. Keep justified uncertainty. Skip praise that adds no information.

### For more room to explore

When I am exploring an idea, offer two plausible approaches and their tradeoffs before recommending one. Ask a focused question if the missing context would change the recommendation. Once I choose, help me carry it through.

### For a warmer answer

Acknowledge my main concern briefly, then give a concrete next step. Be considerate without agreeing with an unsupported claim. Keep the explanation easy to scan.

Browse [direct-feedback preferences](https://agent-tune.com/library/ocean/agreeableness-low), [exploratory communication](https://agent-tune.com/library/mbti/enfp), or use the [custom-instructions generator](https://agent-tune.com/tools/custom-instructions-generator). Choose rules that solve your problem; a questionnaire label does not prescribe the best prompt for you.

## Where to put the instructions

        Use Instructions for Claude in the Claude app for a general preference, project instructions for a particular context, or a Claude Code output style or project instruction file for coding work. The API accepts system instructions. Keep existing project rules and merge preferences deliberately instead of replacing the whole file.

The steps are in [the Claude personalization guide](https://agent-tune.com/guides/claude-personality) and [the Claude Code guide](https://agent-tune.com/guides/claude-code-personality). Model availability and settings can change; use the linked official documentation for current details. We tested one effort setting, so this dataset cannot tell us whether changing effort changes questionnaire responses.

## How the data was collected and checked

        There are 100 fresh headless sessions for each of five instruments, 500 sessions in total, using claude-opus-5-5 at high effort. The system prompt was You are Claude, an AI model made by Anthropic. Each session received a questionnaire and response scale, with no test name, scoring key, previous result, tools, MCP or conversation history. A neutral instruction let the model interpret human-oriented items in the way that applied to it. Familiar items might still reveal which questionnaire it was answering.

We checked every raw vector for valid lengths and response bounds, then recomputed scores with frozen item keys. The collection used the earlier tie-breaking rules; this guide reports their labels alongside an analysis that leaves ties unresolved. Source-file hashes and questionnaire prompts are in the [protocol record](https://agent-tune.com/research/data/september-2026-protocols.json). Raw session identifiers, account metadata and usage logs are omitted from the public export.

Separate sessions reduce carryover but do not prove independent sampling. Human questionnaires have not been validated here for AI. The results apply to this prompt and collection, and cannot establish a stable inner personality, human feelings or a benefit from installing an instruction file.

## Questions people ask.

            What personality type is Claude Opus 5.5?

            Under the original OEJTS scoring rule it received INTJ in 94 of 100 runs. With exact ties unresolved, 84 runs are fully INTJ. The result describes prompted questionnaire responses, not a validated psychological personality.

            What is Claude Opus 5.5’s Big Five profile?

            O 44.56 · C 41.95 · E 31.76 · A 47.07 · N 15.39. These are means over 100 responses per instrument on raw 10–50 scales, not human population percentiles.

            Can I tune Claude Opus 5.5 to be more direct?

            You can request direct, evidence-based feedback through communication instructions. The examples in this guide are starting points to evaluate; the questionnaire dataset does not measure whether they improve task outcomes.

            Does effort change the results?

            We do not know from these data. Both Claude cohorts were tested only at high effort. A controlled comparison across effort settings would require additional runs.

## What changed.

- September 25, 2026 Published with response-level reanalysis, explicit ties and untested tuning examples. Historical version comparisons are separated by protocol.

## Sources.

- [AgentTune September 2026 research, raw responses and scoring methods](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Anthropic: Claude Opus 5.5](https://www.anthropic.com/claude/opus)

- [Claude Help: personalization features](https://support.claude.com/en/articles/10185728)

- [Claude Code: output styles](https://code.claude.com/docs/en/output-styles)

## Keep going.

          [ResearchCompare Astra, Sol, Grok, Opus and Fable](https://agent-tune.com/research/ai-personality-five-models-2026)
          [GuideFable 5.1 results](https://agent-tune.com/guides/fable-personality)
          [ToolBuild custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
