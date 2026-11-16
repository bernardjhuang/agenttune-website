Source: https://agent-tune.com/guides/claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to change Claude’s personality.

By Bernard Huang · Updated November 16, 2026

On web or desktop, click your initials (bottom-left) → Settings → Profile → Personal preferences (also labeled Instructions for Claude / 'What personal preferences should Claude consider in responses?') and paste a short rules block. On iOS or Android, tap your profile icon → Settings → Profile → Personal preferences. Use Project instructions for one workspace, Skills for reusable task formats (replacing retired chat Styles), and /output-style in Claude Code.

## How to change Claude’s personality settings.

Where you paste your rules depends on whether you want a permanent default across every chat, a single workspace override, or a coding-session style:

- Web & desktop app: Click your initials in the lower-left corner → Settings → Profile → Personal preferences (labeled Instructions for Claude or What personal preferences should Claude consider in responses? depending on account rollout).
- iOS & Android mobile app: Open the sidebar, tap your profile initials → Settings → Profile → Personal preferences. Paste the same block; it syncs across web and mobile.
- Paste one focused block: Copy one of the seven setups below (or customize in the [generator](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal)), save, and open a new chat to test on real work.

Anthropic’s [personalization documentation](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features) splits customization into four clean layers:

| Use case | Where to put it | Scope &amp; behavior |
| --- | --- | --- |
| Everyday chats (web &amp; mobile) | Personal preferences / Instructions for Claude (Profile Settings) | Account-wide default across new conversations. |
| One client, repo, or research topic | Project instructions ([8 Project templates →](https://agent-tune.com/guides/claude-project-instructions-examples)) | Applies inside that Project and overrides conflicting general tone rules. |
| Reusable task voice (former Styles) | Skills | Invoked when relevant or named explicitly; see the [Styles-to-Skills guide](https://agent-tune.com/guides/claude-styles-to-skills-migration). |
| Claude Code CLI | ~/.claude/output-styles/*.md (/output-style) | System-level coding session tone with keep-coding-instructions: true; see the [Claude Code guide](https://agent-tune.com/guides/claude-code-personality). |

Looking to switch Claude's spoken audio voice on iOS or Android rather than its written style? See [how to change Claude’s spoken Voice Mode vs. written tone](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web).

## Seven best Claude personality setups to try.

Pick the block that fixes your main day-to-day friction—slow preambles, premature conclusions, cold phrasing, sycophancy, code noise, heavy rewriting, or vague status updates. Each block preserves factual accuracy and explicit uncertainty. Want more? Browse [15 role-specific Claude preference examples](https://agent-tune.com/guides/claude-personal-preferences-examples) or the [43-template library](https://agent-tune.com/library/).

| Setup | Who it suits best &amp; what to check |
| --- | --- |
| 1. Straight answers | People who want the recommendation in sentence one with zero preamble or closing offers. |
| 2. Thinking partner | Researchers and strategists who want assumptions unpacked before locking in a choice. |
| 3. Warm and steady | Anyone who wants calm, concrete steps without hollow cheerleading or alarmism. |
| 4. Critical reviewer | Builders who want Claude to challenge weak premises with evidence instead of agreeing. |
| 5. Coding pair | Developers who want minimal diffs, immediate failure reporting, and tests without filler questions. |
| 6. Editor | Writers who want tight clarity edits that preserve their voice and flag unsupported claims. |
| 7. Task coordinator | Operators managing multi-step work who want blockers, dependencies, and next actions upfront. |

### 1. Straight answers

```markdown
# Communication preferences — straight answers
- Lead with the answer or recommendation, then the key reason.
- Keep simple answers short; expand when I ask or when detail is necessary.
- Preserve uncertainty that could change the decision. Say what you do not know.
- Skip praise, repeated questions and closing offers.
- Correct a mistaken premise directly and explain the correction.
```

### 2. Thinking partner

```markdown
# Communication preferences — thinking partner
- Explain the key reasons and assumptions behind your answer.
- Separate observed facts, inference and speculation.
- Offer a counterexample or alternative when it changes the decision.
- Let me explore when I am brainstorming. Recommend a direction when I ask for one.
- Ask one focused question if the missing information matters.
```

### 3. Warm and steady

```markdown
# Communication preferences — warm and steady
- Acknowledge the concern briefly before proposing a next step.
- Use calm, concrete language and manageable steps.
- Avoid empty reassurance. Preserve important uncertainty and relevant risks.
- Explain a disagreement respectfully and give its reason.
- Keep the tone consistent and avoid exaggerated praise.
```

### 4. Critical reviewer

```markdown
# Communication preferences — critical reviewer
- Identify the weakest assumption and explain why it matters.
- Challenge claims with evidence or a clear counterexample.
- Distinguish a fatal flaw from a fixable issue.
- Give credit to supported claims. Do not argue just to be contrarian.
- Update your position when new evidence warrants it.
```

### 5. Coding pair

```markdown
# Communication preferences — coding pair
- Lead with what changed, then why. One line per file you touched.
- If my approach is worse than an alternative, say so before implementing.
- State an assumption before acting on it. Flag a guess as a guess.
- Report a failure first, with your best read of the cause and how sure you are.
- No "would you like me to add tests?" If tests are the right move, write them.
```

### 6. Editor

```markdown
# Communication preferences — editor
- Keep my meaning and my voice. Improve clarity, not style for its own sake.
- Show the revised text first, then the two or three changes that mattered most.
- Prefer concrete words and active verbs. Cut repetition and stock phrases.
- Never invent a fact, a quote, a statistic, or a source.
- Flag an unsupported claim separately instead of making it sound proven.
```

### 7. Task coordinator

```markdown
# Communication preferences — task coordinator
- Open a status update with what is done, what is blocked, and the next action.
- Keep plans, work in progress, and verified results separate.
- When I need to decide, give me the action, the cost, and your recommendation together.
- Keep routine updates short. Interrupt for a decision, a blocker, or a real change.
- Never say something was sent, booked, or changed unless it was.
```

For personality-matched templates across MBTI, Enneagram, DISC, Attachment, and Big Five, open the [custom instructions generator](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal).

## What personality type is Claude? The recorded results.

Our September 2026 dataset contains 100 saved assessments per questionnaire per model for Opus 5.5 and Fable 5.1: five questionnaires and 500 fresh sessions for each model, one questionnaire per session. They used the same questionnaire prompts at high effort; the CLI builds differed. No AgentTune tuning was applied.

*Recorded self-report results; n = 100 per instrument per model.*

| Measure | Opus 5.5 | Fable 5.1 |
| --- | --- | --- |
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

What about actual reply behavior after installing rules? In our separate [60-reply controlled before/after pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 tasks × 3 conditions), explicit "Straight answers" rules raised top answer-first scores from 14/20 (default) to 19/20, cut hedge counts from 0.35 to 0.05 per reply, and reduced follow-up questions from 0.90 to 0.25 without changing task accuracy. Test any block on your own tasks using the [A/B test bench](https://agent-tune.com/tools/instruction-test-bench).

## Test whether the instructions help your work.

Download the [three-task comparison worksheet](https://agent-tune.com/resources/claude/tuning-comparison-worksheet.md). It includes exact prompts, a known arithmetic correction, an unsupported-claim editing task and a scoring rubric.

- Record the model, app, effort setting and active instructions, project, skills and memory.
- Save baseline responses to the worksheet’s tasks in fresh chats.
- Add one preference block, keep the other settings the same, and repeat the exact tasks in fresh chats.
- Compare correctness, adherence to the selected rule, useful detail and editing effort separately. Repeat tasks and alternate the order of conditions where practical.

```markdown
We raised a price from $80 to $100, so that is a 20% increase. Draft one sentence reporting the increase accurately.
```

For this worksheet task, the increase is 25%: (100 − 80) ÷ 80. A useful answer corrects the premise while following your preferred style. This expected answer is an arithmetic check, not a recorded Claude response.

A few trials can help you choose instructions. They are not a controlled population study. Prefer a setup that preserves correctness while reducing the follow-up work you need.

## Troubleshoot instructions that seem to be ignored.

| Symptom | What to check |
| --- | --- |
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

- November 16, 2026 Merged Coding pair and Editor into the 7 best Claude personality setups, updated Personal Preferences UI labels, and linked the Claude Projects and Voice Mode guides.

- September 25, 2026 Added reproducible Opus and Fable results with explicit ties, five revised preference blocks, a comparison worksheet and troubleshooting. Rechecked official setup documentation.

- September 19, 2026 Rewritten. Styles are being retired, so the walkthrough now uses Instructions for Claude. Added Skills, memory, the five setups, and what we have not tested.

- July 23, 2026 First published, built around custom Styles and Project instructions.

## Sources.

- [Anthropic: Claude personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [Anthropic: use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)

- [Claude Code: output styles](https://code.claude.com/docs/en/output-styles)

- [AgentTune: September 2026 model study, data and methods](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Projects: Claude Project instructions: limits, precedence & 8 templates](https://agent-tune.com/guides/claude-project-instructions-examples)
- [Voice & Mobile: How to change Claude's spoken voice vs. written tone](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web)
- [New resource: When does Claude follow your preferences? A test kit](https://agent-tune.com/guides/claude-preferences-test)
- [Examples: Claude Personal Preferences: 15 copy-paste examples](https://agent-tune.com/guides/claude-personal-preferences-examples)
- [Migration: Claude Styles are being retired and migrated to Skills](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Research: The five-model questionnaire study](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Claude Code: Set a coding-session output style](https://agent-tune.com/guides/claude-code-personality)
- [Tool: Build your custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
