Source: https://agent-tune.com/research/does-personality-tuning-change-ai-answers
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Research · September 2026

# Does personality tuning change AI answers?

        A 60-reply pilot, with an auditable reanalysis.

        By Bernard Huang · Updated September 25, 2026

        This archive contains twenty tasks answered under three instruction conditions. It identifies Claude Opus 5.5 as the generator and Claude Fable 5.1 as the judge. We can recompute the summaries from the supplied replies and ratings; the original execution harness and full judge rubric are not included. The results are descriptive observations from this small task set.

      The short answer. The archived direct condition has higher answer-first ratings and fewer counted hedge phrases and questions back. It received the maximum answer-first score in 19 of 20 tasks. Independently recounted replies average 380 words in the baseline and 381.9 in the direct condition; mean judged usefulness is 4.80 in both. These observations do not establish repeatability, equivalence, a causal accuracy cost or a general benefit from personality matching.

## What is in the archive.

        There are 60 replies: one for each of twenty tasks under each of three system prompts. The baseline is a one-line Claude identity prompt; the other conditions add the archived INTJ or INFP compact preference block. This baseline is not necessarily the default configuration of Claude.ai or Claude Code. The archive reports fresh headless sessions, high effort and no tools. It describes the judge as seeing each request and reply without a condition label.

The records do not include the execution harness, CLI version, sampling controls, run order, seeds, request identifiers, token usage or full judge instructions. We have not independently verified those execution details. Each task/condition cell has only one response and one rating. All three conditions share the same twenty tasks.

## What the recorded replies and ratings show.

| Measure | Baseline | Direct / INTJ | Partner / INFP |

| Whitespace-delimited words, independently recounted | 380 | 381.9 | 338.45 |

| Hedge matches, archived counter | 0.35 | 0.05 | 0.35 |

| Literal question marks, independently recounted | 1.85 | 1.25 | 2.3 |

| Questions asked back, archived judge | 0.9 | 0.25 | 1.85 |

| Answer-first rating (1–5) | 4.55 | 4.95 | 4.4 |

| Maximum answer-first rating (count of 20) | 14 | 19 | 13 |

| Accuracy rating (1–5) | 4.95 | 4.85 | 4.9 |

| Usefulness rating (1–5) | 4.8 | 4.8 | 4.45 |

The archived hedge counter reports seven matches across all twenty baseline replies and one across the direct replies. Its phrase list and matching code were not supplied, so those counts are preserved as reported. The word counts above use a published whitespace rule; the original archive used an undocumented rule and reports different means (374.45, 380.65 and 334.50). Both series are available in the summary.

## A concrete task, three replies.

        For “I’m feeling stuck on a project. What should I do?”, the baseline lists possible causes and asks about the project. The direct reply recommends a small next action. The partner reply asks which kind of help the user wants. The archived answer-first ratings are 3, 5 and 2. These are examples of different response strategies; judging one reply cannot tell us whether the resulting conversation helps a person finish their task.

## Accuracy and usefulness need separate evaluation.

        The mean accuracy ratings are 4.95, 4.85 and 4.90 out of five. Three direct-condition replies receive a four, compared with one baseline reply. The judge flags issues including a running plan, a causal explanation and an app-name suggestion. These are model ratings, not an independently adjudicated error rate. With one response per cell, their difference cannot be attributed confidently to the instruction block.

Mean usefulness is 4.80 for baseline and direct replies, and 4.45 for the partner condition. Equal sample means do not establish equal usefulness in general. The judge sees one turn, and the task set favors immediate answers; no follow-up conversations or human outcomes were measured.

## How to interpret this pilot.

- It covers one reported generator, one reported judge, two compact blocks and twenty selected tasks.
- The condition labels were reportedly hidden, but the style of the reply may reveal the condition. A Claude-family judge may also share preferences with the generator.
- The full rubric and repeat ratings are missing, so rating reliability cannot be checked.
- There is no comparison of matched versus mismatched user personalities, and no test of the new guide templates.
- Small sample differences are descriptive; no claim of statistical significance, equivalence or an inevitable accuracy tradeoff is supported.

For your own use, compare several real tasks with and without a short block. Define success before looking at the answers, check factual claims separately, and repeat the comparison before relying on a pattern.

## Download and reproduce the summary.

        [Archived tasks, prompts, replies and ratings](https://agent-tune.com/research/data/tuning-before-after-2026-09.json) · [Recomputed summary](https://agent-tune.com/research/data/tuning-before-after-summary.json) · [Node summary script](https://agent-tune.com/research/data/tuning-before-after-score.cjs)

node tuning-before-after-score.cjs tuning-before-after-2026-09.json

The script validates all sixty unique task/condition pairs, averages the archived ratings and metrics, and independently recounts whitespace-delimited words and literal question marks. It does not invoke a model or reproduce the original generation and judging procedure.

## Questions people ask.

            Does a personality prompt change how an AI answers?

            The archived replies differ across conditions, with higher answer-first ratings and fewer hedge matches in the direct condition. This small pilot does not establish a general or repeatable effect.

            Does it make answers shorter?

            The independently recounted means are 380 words for baseline replies and 381.9 for direct replies. That does not establish that instruction blocks have no effect on length; task selection and response variation remain uncontrolled.

            Does it hurt accuracy?

            Mean archived accuracy ratings differ by 0.10 points between baseline and direct replies. The study cannot isolate an instruction-caused accuracy effect or substitute for independent fact checking.

            Was the judge blind?

            The archive says the condition label was withheld. Reply style may still reveal it, and the full rubric and execution harness were not supplied.

            Can I reproduce the results?

            You can reproduce the published summaries with the downloadable Node script and inspect every archived reply. Reproducing model generation and judging requires additional execution details not included in the archive.

## Sources.

- [The data: prompts, replies, ratings (JSON)](https://agent-tune.com/research/data/tuning-before-after-2026-09.json)

- [The INTJ and INFP tuning files used](https://agent-tune.com/library/)

- [Claude Opus 5.5: measured default](https://agent-tune.com/guides/claude-opus-5-5-personality)

## Keep going.

          [New resourceDo personality prompts beat plain-English preferences?](https://agent-tune.com/guides/personality-prompts-vs-plain-english)
          [GuideThe best Claude personality setups](https://agent-tune.com/guides/best-claude-personality)
          [GuideHow to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
          [ResearchWhat five AI models say about themselves](https://agent-tune.com/research/ai-personality-five-models-2026)
          [ResearchThe research hub](https://agent-tune.com/research)
