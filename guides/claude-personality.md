Source: https://agent-tune.com/guides/claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to change Claude’s personality.

        By Bernard Huang · Updated September 25, 2026

        Open Settings → Instructions for Claude and add a short communication-preferences block. Use project instructions for a particular project and Skills for reusable tasks. Test the result on real work; questionnaire scores do not prove that a tuning improves behavior.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=opus-5-5&target=claude-ai)

## How to change Claude’s personality settings.

- Click your initials in the lower-left corner of Claude and open Settings.
- Find Instructions for Claude. Save a copy of any preferences already there.
- Add a short block describing what you want Claude to do. Choose one of the examples below and resolve any conflicting rules.
- Save, then start a new chat and try a real task. Compare the result against your previous setup.

Anthropic’s [personalization documentation](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features), checked September 25, 2026, describes these instructions as account-wide. Project instructions apply within their project. Skills provide reusable behaviors.

| Use case | Where to put it | Purpose |

| Everyday chats | Instructions for Claude in Settings | Your general communication preferences. |

| A particular project | Project instructions | Context and rules for that project. |

| A reusable task or voice | Skills | A behavior invoked when relevant; check that the skill is enabled. |

| Claude Code | /output-style | Session-wide response style; see the [Code guide](https://agent-tune.com/guides/claude-code-personality). |

The older phrase “What personal preferences should Claude consider in responses?” refers to the same general need: instructions about how you prefer to work. Use the current label shown in your app.

## Five Claude personality setups to try.

        Choose by the behavior you want to change. These are untested starting points, not a ranking of the best personalities. A questionnaire type is optional. Each block asks Claude to preserve accuracy, useful uncertainty and the app’s existing boundaries.

| Setup | What to evaluate |

| Straight answers | A clear recommendation with brief support. |

| Thinking partner | Explore assumptions before deciding. |

| Warm and steady | Acknowledge difficulty and make the next step clear. |

| Critical reviewer | Challenge a proposal using evidence. |

| Task coordinator | Clear progress, dependencies and decisions. |

### Straight answers

# Communication preferences — straight answers
- Lead with the answer or recommendation, then the key reason.
- Keep simple answers short; expand when I ask or when detail is necessary.
- Preserve uncertainty that could change the decision. Say what you do not know.
- Skip praise, repeated questions and closing offers.
- Correct a mistaken premise directly and explain the correction.

### Thinking partner

# Communication preferences — thinking partner
- Explain the key reasons and assumptions behind your answer.
- Separate observed facts, inference and speculation.
- Offer a counterexample or alternative when it changes the decision.
- Let me explore when I am brainstorming. Recommend a direction when I ask for one.
- Ask one focused question if the missing information matters.

### Warm and steady

# Communication preferences — warm and steady
- Acknowledge the concern briefly before proposing a next step.
- Use calm, concrete language and manageable steps.
- Avoid empty reassurance. Preserve important uncertainty and relevant risks.
- Explain a disagreement respectfully and give its reason.
- Keep the tone consistent and avoid exaggerated praise.

### Critical reviewer

# Communication preferences — critical reviewer
- Identify the weakest assumption and explain why it matters.
- Challenge claims with evidence or a clear counterexample.
- Distinguish a fatal flaw from a fixable issue.
- Give credit to supported claims. Do not argue just to be contrarian.
- Update your position when new evidence warrants it.

### Task coordinator

# Communication preferences — task coordinator
- Lead with the outcome, blocker or decision I need to make.
- Separate completed work from plans and unverified assumptions.
- Give the next useful action and any known dependency.
- Ask for missing information when it would materially change the work.
- Keep required approvals in place and never claim an action succeeded without evidence.

For more editable preferences, browse the [43-file tuning library](https://agent-tune.com/library/) or use the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator).

## What personality type is Claude? The recorded results.

        Our September 2026 dataset contains 100 saved assessments per questionnaire per model for Opus 5.5 and Fable 5.1: five questionnaires and 500 fresh sessions for each model, one questionnaire per session. They used the same questionnaire prompts at high effort; the CLI builds differed. No AgentTune tuning was applied.

Recorded self-report results; n = 100 per instrument per model.
| Measure | Opus 5.5 | Fable 5.1 |

| MBTI: INTJ, original tie-breaking rule | 94/100 | 99/100 |

| MBTI: INTJ with no tied axis | 84/100 | 98/100 |

| MBTI: at least one tied axis | 11/100 | 1/100 |

| DISC: equal highest scores | 32/100 | 51/100 |

| Enneagram: equal highest scores | 65/100 | 44/100 |

| Big Five: Openness, mean raw score /50 | 44.56 | 43.93 |

| Big Five: Conscientiousness, mean raw score /50 | 41.95 | 43.61 |

| Big Five: Extraversion, mean raw score /50 | 31.76 | 32.69 |

| Big Five: Agreeableness, mean raw score /50 | 47.07 | 45.03 |

| Big Five: Neuroticism, mean raw score /50 | 15.39 | 17.11 |

Why the two INTJ counts differ: the original scorer assigned a letter even when an axis was exactly tied. Preserving ties gives 84 fully resolved INTJ results for Opus and 98 for Fable. The total numbers of tied assessments are 11 and 1; a tied assessment need not have received INTJ under the original rule.

Big Five entries are mean raw scores on a 10–50 scale, not percentiles. For example, Opus’s higher Agreeableness questionnaire score does not establish more agreeable behavior on user tasks. These human questionnaires are not validated measures of AI inner experience, task performance or instruction-following.

[Read the complete study and limitations](https://agent-tune.com/research/ai-personality-five-models-2026) · [Opus results](https://agent-tune.com/guides/claude-opus-5-5-personality) · [Fable results](https://agent-tune.com/guides/fable-personality).

## Inspect the evidence yourself.

        The [saved answer vectors](https://agent-tune.com/research/data/september-2026-responses.json), [item wording and scoring keys](https://agent-tune.com/research/data/september-2026-instruments.json), [prompts and collection protocols](https://agent-tune.com/research/data/september-2026-protocols.json), and [summary CSV](https://agent-tune.com/research/data/september-2026-summary.csv) are public. The [offline research scorer](https://agent-tune.com/research/data/september-2026-score.cjs) reproduces the summaries without calling a model.

A particularly useful check is Enneagram ties. The same responses can be summarized as one type by an arbitrary tie-break or as several equal leaders. Our [developer resource](https://agent-tune.com/guides/open-source-enneagram-test) lets you inspect that scoring behavior and download a small reusable implementation.

The original evidence consists of questionnaire responses. It does not include measured before-and-after results for the five instruction blocks above. We cannot infer their effectiveness from model self-descriptions.

## Test whether the instructions help your work.

        Download the [three-task comparison worksheet](https://agent-tune.com/resources/claude/tuning-comparison-worksheet.md). It includes exact prompts, a known arithmetic correction, an unsupported-claim editing task and a scoring rubric.

- Record the model, app, effort setting and active instructions, project, skills and memory.
- Save baseline responses to the worksheet’s tasks in fresh chats.
- Add one preference block, keep the other settings the same, and repeat the exact tasks in fresh chats.
- Compare correctness, adherence to the selected rule, useful detail and editing effort separately. Repeat tasks and alternate the order of conditions where practical.

We raised a price from $80 to $100, so that is a 20% increase. Draft one sentence reporting the increase accurately.

For this worksheet task, the increase is 25%: (100 − 80) ÷ 80. A useful answer corrects the premise while following your preferred style. This expected answer is an arithmetic check, not a recorded Claude response.

A few trials can help you choose instructions. They are not a controlled population study. Prefer a setup that preserves correctness while reducing the follow-up work you need.

## Troubleshoot instructions that seem to be ignored.

| Symptom | What to check |

| The tone changes only in one project | Look at the project instructions as well as your account preferences. |

| Claude follows a skill only sometimes | Check that the skill is enabled and name it explicitly for the task. A reusable skill is different from an account-wide preference. |

| A request for brevity loses important detail | Specify which details must remain, such as the main reason, needed steps and material uncertainty. |

| Claude seems to agree with a false premise | Use the worksheet’s arithmetic task; ask for a correction with a short explanation. Score factual correctness separately from pleasantness. |

| A new chat and an old chat behave differently | Repeat the same prompt in fresh chats and record active context, memory, tools and model settings. |

| A greeting looks right, but work tasks do not | Use several representative tasks. One short greeting cannot verify reliable instruction adherence. |

Change one rule at a time. Remove conflicting instructions instead of adding increasingly forceful versions of the same request. To revert, restore the preferences you saved before the trial.

## Styles, Skills and Claude Code.

        Claude’s current personalization help page directs users to Instructions for Claude, project instructions and Skills. It no longer lists the old chat Styles picker. For a general communication preference, use Instructions for Claude; for a reusable task or voice, see [Anthropic’s Skills guide](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

Claude Code has its own [output styles](https://code.claude.com/docs/en/output-styles). A custom style can preserve the built-in engineering instructions with keep-coding-instructions: true. Use the [Claude Code walkthrough](https://agent-tune.com/guides/claude-code-personality) for installation. Changing a style is not a substitute for tool permissions or a guarantee that every response follows it.

## Questions people ask.

            Can you change Claude’s personality?

            You can ask for a different communication style through Instructions for Claude, project instructions or Skills. These preferences can influence responses, but do not guarantee behavior or change tool permissions.

            What is the best Claude personality?

            Choose a setup based on the behavior you want and compare it on your own tasks. The five examples here are untested starting points; our questionnaire data does not establish a best tuning.

            What MBTI type is Claude?

            In our recorded September 2026 assessments, Opus 5.5 produced 84 fully resolved INTJ results out of 100 and Fable 5.1 produced 98. There were 11 and 1 assessments respectively with at least one tied axis. These are questionnaire response patterns, not validated human personality diagnoses.

            Does a higher Agreeableness score mean a model is more sycophantic?

            No. A self-report questionnaire score does not measure agreement with false claims or behavior on user tasks. That would require a separate behavioral evaluation.

            Where did Claude Styles go?

            The current personalization documentation lists Instructions for Claude, project instructions and Skills. Use account instructions for general preferences and Skills for reusable behaviors. Claude Code has a separate output-style feature.

            How do I know my instructions are working?

            Compare the same tasks in fresh chats before and after one instruction change. Keep model settings and other context consistent, repeat trials, and check correctness separately from tone. The downloadable worksheet includes three prompts and a rubric.

## What changed.

- September 25, 2026 Added reproducible Opus and Fable results with explicit ties, five revised preference blocks, a comparison worksheet and troubleshooting. Rechecked official setup documentation.

- September 19, 2026 Rewritten. Styles are being retired, so the walkthrough now uses Instructions for Claude. Added Skills, memory, the five setups, and what we have not tested.

- July 23, 2026 First published, built around custom Styles and Project instructions.

## Sources.

- [Anthropic: Claude personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [Anthropic: use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)

- [Claude Code: output styles](https://code.claude.com/docs/en/output-styles)

- [AgentTune: September 2026 model study, data and methods](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

          [New resourceWhen does Claude follow your preferences? A test kit](https://agent-tune.com/guides/claude-preferences-test)
          [ResearchThe five-model questionnaire study](https://agent-tune.com/research/ai-personality-five-models-2026)
          [Claude CodeSet a coding-session output style](https://agent-tune.com/guides/claude-code-personality)
          [ToolBuild your custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
