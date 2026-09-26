Source: https://agent-tune.com/guides/make-claude-more-direct
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to make Claude more direct.

        By Bernard Huang · Updated September 25, 2026

        Ask Claude to lead with the answer, explain relevant uncertainty, skip routine praise, and correct a mistaken premise. These exact three blocks were not tested. A separate pilot archive used a compact INTJ prompt and recorded a higher mean answer-first rating, with 19 of 20 direct replies receiving the maximum score. It does not establish a general effect on accuracy or length.

## Define the behavior you want.

        Questionnaire Agreeableness scores do not explain why Claude hedges, asks a question or delays a recommendation. Name the behavior you want to change, then inspect actual replies. Distinguish empty cushioning from necessary qualifications.

## Block 1: four lines.

        Start here. It covers most of what people mean by 'more direct'.

# Communication preferences
- Lead with the answer. Reasoning after, only if it changes what I'd do.
- Say what you don't know in one line. No hedging around it.
- No praise, no recap of my question, no closing offers.
- If my premise is wrong, say so first.

## Block 2: the full version.

        Adds disagreement and a floor on uncertainty. The pilot archive used a different compact INTJ block, so its observations are not results for this exact template.

# Communication preferences: direct
- Lead with the answer or the recommendation, then the key reason.
- Keep simple answers short. Expand when I ask, or when detail changes the decision.
- Say what you don't know in one line. Don't hedge around it. Explain the reason for uncertainty; "it depends" alone is not.
- Skip praise, recaps of my question, and closing offers. Don't tell me it's a great question.
- If my premise is wrong, say so first, then explain.
- Disagree plainly when it matters. Don't soften the substance to protect my feelings.
- Keep a line for real uncertainty. Direct doesn't mean certain.

## Block 3: reviewer mode.

        Add this under either block if you mostly bring Claude plans, drafts or code and want them attacked. It asks for evidence-based criticism; no questionnaire trait change has been demonstrated.

# Communication preferences: reviewer
- When I share a plan, a draft or code, find the weakest point first and say why it matters.
- Tell me which problems are fatal and which are fixable.
- Give credit where a claim holds, briefly. Don't argue for its own sake.
- Change your position when the evidence does, and say so.

## Observations from a separate pilot.

        The supplied archive has 20 replies each for a baseline, a compact INTJ prompt and a compact INFP prompt. It describes a second model rating replies without the condition label. The generation harness and full judging rubric were not supplied, so we can reproduce the aggregates but not verify the execution.

| Measure | Baseline | Direct |

| Answer-first rating (1–5) | 4.55 | 4.95 |

| Maximum answer-first rating | 14/20 | 19/20 |

| Archived hedge count per reply | 0.35 | 0.05 |

| Judge-counted questions back | 0.90 | 0.25 |

| Recounted words per reply | 380.0 | 381.9 |

| Accuracy rating (1–5) | 4.95 | 4.85 |

| Usefulness rating (1–5) | 4.80 | 4.80 |

These are descriptive observations on twenty selected tasks, not evidence that the prompt always works or leaves length unchanged. See [the 60-reply pilot and its downloadable records](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) for raw replies, the original word counts, a reproducible recount and limitations.

## Check accuracy alongside style.

        Three direct replies received accuracy ratings below five, versus one baseline reply. These automated ratings are not independent fact-checks, and a single reply per condition cannot establish that the prompt caused the difference. Verify factual claims and preserve an explicit uncertainty rule.

## Where to paste it, and how to check.

- Every conversation: Settings, then Instructions for Claude.
- One Project: the Project's instructions. Use instructions scoped to that project.
- Claude Code: an output style in ~/.claude/output-styles/ with keep-coding-instructions: true. See [the Claude Code guide](https://agent-tune.com/guides/claude-code-personality).
- API: the system parameter.

Then open a new chat and paste this:

Should I rewrite our Python scraper in Go? It's slow.

Compare the recommendation, supporting evidence, requested information and uncertainty with a baseline reply. Repeat with several tasks. One answer or greeting cannot prove that a setting loaded or that the prompt is reliably effective.

## Make the rules easy to assess.

- For brevity, specify a target length and exceptions for necessary detail.
- Ask for uncertainty to be explained, not removed.
- Ask for the weakest supported objection instead of performative harshness.
- For a reusable preference, save it in the appropriate settings and check that it remains compatible with task instructions.

We have not tested a claim that adjectives stop working after a fixed number of turns.

## Questions people ask.

            How can I make Claude more direct?

            Ask it to lead with the answer, give the key reason, preserve real uncertainty, and skip routine praise. Try the first block and evaluate it on real tasks.

            Are the three blocks tested prompts?

            These exact blocks have not been evaluated. A linked archive describes a different compact INTJ prompt on twenty tasks, with one reply per task and condition.

            Will it make answers shorter?

            No guarantee. If length matters, state a target and evaluate it. Similar pilot averages do not prove a general absence of effect.

            Does directness reduce accuracy?

            The pilot is too small and lacks the independent factual checks needed to establish that. Evaluate accuracy and uncertainty alongside style.

            Does the reviewer block change a personality trait?

            No trait change has been measured. It is an instruction to identify weaknesses and support criticism with evidence.

## What changed.

- September 25, 2026 First published, with the 60-reply before-and-after test on Claude Opus 5.5.

## Sources.

- [Does a personality tuning change AI answers? (the test)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [Claude Opus 5.5: measured default](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728)

## Keep going.

          [GuideThe best Claude personality setups](https://agent-tune.com/guides/best-claude-personality)
          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
          [GuideChange Claude Code's personality](https://agent-tune.com/guides/claude-code-personality)
          [ResearchWhat personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
