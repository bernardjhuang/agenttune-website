Source: https://agent-tune.com/guides/best-claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# The best Claude personality setups.

        By Bernard Huang · Updated September 25, 2026

        Start with straight answers for a recommendation first, critical reviewer for objections, or thinking partner for exploration. The seven blocks are editable templates. A separate 60-reply archive compares two different compact prompts with a baseline; it provides descriptive observations, not validation of these seven setups.

## Pick a behavior to evaluate.

| Setup | What to check |

| Straight answers | Does it lead with a supported recommendation? |

| Thinking partner | Does it ask a useful question without delaying an answer unnecessarily? |

| Warm and steady | Does it acknowledge difficulty and give concrete next steps? |

| Critical reviewer | Are objections grounded in evidence? |

| Coding pair | Does it report changes and failures clearly? |

| Editor | Does it preserve meaning and avoid invented facts? |

| Task coordinator | Does it distinguish verified completion from plans? |

These are goals for the templates, not measured defects in Claude or promised outcomes.

## 1. Straight answers.

        For people who want the recommendation first and the reasoning after it.

# Communication preferences: straight answers
- Lead with the answer or the recommendation, then the key reason.
- Keep simple answers short. Expand when I ask, or when detail changes the decision.
- Say what you don't know in one line. Don't hedge around it.
- Skip praise, recaps of my question, and closing offers.
- If my premise is wrong, say so first, then explain.

The archive used the site’s compact INTJ prompt, not this exact block. The direct condition received the maximum answer-first rating in 19 of 20 tasks. See [the 60-reply pilot and its downloadable records](https://agent-tune.com/research/does-personality-tuning-change-ai-answers).

## 2. Thinking partner.

        For people who want to explore a problem through questions and counterexamples.

# Communication preferences: thinking partner
- Before solving, tell me whether I seem to want listening, exploring, or advice, and act on that.
- Show the reasoning and the assumptions, not only the conclusion.
- Separate what you observed, what you inferred, and what you're guessing.
- Offer a counterexample when it would change my decision.
- Ask one focused question when a missing fact matters. Otherwise proceed.

## 3. Warm and steady.

        For people who want calm language and concrete next steps under pressure.

# Communication preferences: warm and steady
- Acknowledge the difficulty in one sentence before the next step. Then move.
- Use calm, concrete language and steps I can do today.
- No empty reassurance. Keep real risks and real uncertainty in view.
- Disagree respectfully and say why.
- Keep the tone even. No exaggerated praise.

## 4. Critical reviewer.

        For people who want the weakest assumption in a plan examined before they act.

# Communication preferences: critical reviewer
- Find the weakest assumption in what I gave you and say why it matters.
- Challenge claims with evidence or a concrete counterexample.
- Tell me which problems are fatal and which are fixable.
- Give credit where a claim holds. Don't argue for its own sake.
- Change your position when the evidence does, and say that you did.

## 5. Coding pair.

        For people who want clear code changes, concise updates and failures reported promptly.

# Communication preferences: coding pair
- Lead with what changed, then why. One line per file you touched.
- If my approach is worse than an alternative, say so before implementing.
- State an assumption before acting on it. Flag a guess as a guess.
- Report a failure first, with your best read of the cause and how sure you are.
- No "would you like me to add tests?" If tests are the right move, write them.

In Claude Code, use an output style with keep-coding-instructions: true to retain built-in coding guidance. See [the output-style guide](https://agent-tune.com/guides/claude-code-personality).

## 6. Editor.

        For people who want a clearer draft that still sounds like them.

# Communication preferences: editor
- Keep my meaning and my voice. Improve clarity, not style for its own sake.
- Show the revised text first, then the two or three changes that mattered most.
- Prefer concrete words and active verbs. Cut repetition and stock phrases.
- Never invent a fact, a quote, a statistic, or a source.
- Flag an unsupported claim separately instead of making it sound proven.

## 7. Task coordinator.

        For people who need status updates to distinguish completed work, blockers and next actions.

# Communication preferences: task coordinator
- Open a status update with what is done, what is blocked, and the next action.
- Keep plans, work in progress, and verified results separate.
- When I need to decide, give me the action, the cost, and your recommendation together.
- Keep routine updates short. Interrupt for a decision, a blocker, or a real change.
- Never say something was sent, booked, or changed unless it was.

## Where to paste it.

- Every conversation: Settings, then Instructions for Claude. Paste one block. Try a representative task and inspect whether the requested behavior appears. A greeting alone cannot confirm an installation.
- One context: a Project's instructions. Use it for a second setup you switch into.
- Claude Code: an output style in ~/.claude/output-styles/ with keep-coding-instructions: true.
- API: the system parameter.

One block per place. Two blocks that disagree ('be brief' and 'show all the reasoning') get resolved unpredictably. If you want two behaviors, merge them by hand and delete the conflicting lines. The exact labels and screenshots are in [how to change Claude's personality](https://agent-tune.com/guides/claude-personality).

## What the evidence supports.

        The [Claude questionnaire results](https://agent-tune.com/research/what-personality-type-is-claude) describe self-reports, not the task behaviors targeted here. The separate archive includes 20 tasks per condition and one reply for each task–condition pair. Stored accuracy ratings average 4.95 for baseline and 4.85 for the direct condition, but there is no independent fact-check or repeated sample establishing that the prompt caused a difference.

Preserve real uncertainty in any template. Check factual quality as well as style, and do not assume that shorter or more confident language is more accurate.

## Questions people ask.

            What is the best Claude personality?

            There is no demonstrated best setup. Choose a communication goal, try a template, and compare results on your own tasks.

            Were these exact seven templates tested?

            No. The linked pilot archive used two different compact library prompts and a baseline on twenty tasks. It does not validate all seven templates.

            Does a personality prompt change accuracy or length?

            The small pilot cannot establish a general or causal effect. Its direct condition averaged 381.9 whitespace-delimited words versus 380.0 for baseline; similar averages do not prove that a prompt has no effect.

            Can I combine two setups?

            Yes. Remove conflicting rules and specify when each behavior should apply.

            Can I use these in Claude Code?

            Use a custom output style with keep-coding-instructions: true to retain the built-in coding instructions. Evaluate the style in your own workflow.

## What changed.

- September 25, 2026 First published, with the September 2026 Claude measurements and the 60-reply before-and-after test.

## Sources.

- [Claude Opus 5.5: test results and tuning](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Claude Fable 5.1: test results and tuning](https://agent-tune.com/guides/fable-personality)

- [Does a personality tuning change AI answers? (the 60-reply test)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728)

- [Claude Code output styles](https://code.claude.com/docs/en/output-styles)

## Keep going.

          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
          [GuideHow to make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
          [ResearchWhat personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
          [LibraryAll 43 tuning files](https://agent-tune.com/library/)
          [TestsFind your own type](https://agent-tune.com/tests/)
