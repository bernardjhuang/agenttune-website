Source: https://agent-tune.com/guides/claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to change Claude’s personality.

By Bernard Huang · Updated November 23, 2026

Yes—open Settings → Profile → Personal Preferences on web or mobile. Quick-pick 5 Claude setups, browse 20 templates, or inspect Nov 2026 Opus 5.5, Fable 5.2 & Sonnet 5.5 N=100 data.

**Quick answer:** On web or desktop, click your initials (bottom-left) → Settings → Profile → Personal preferences (also labeled Settings → General or Instructions for Claude) and paste a short rules block. On iOS or Android, tap your profile icon → Settings → Profile → Personal preferences. Use Project instructions for one workspace, Skills for reusable task formats, and /output-style in Claude Code.

## How to change Claude’s personality settings.

Where you paste your rules depends on whether you want an account-wide default, a project override, or a terminal coding style:

- **Web & desktop app:** Click your initials (bottom-left) → **Settings → Profile → Personal preferences** (or **Settings → General**).
- **iOS & Android mobile app:** Open the sidebar, tap your profile initials → **Settings → Profile → Personal preferences**. Edits sync across web and mobile.
- **Paste one focused block:** Copy one of the seven setups below (or customize in the [generator](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal)), save, and start a **new chat** to test.

Anthropic’s [personalization docs](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features) split customization into four layers:

| Use case | Where to put it | Scope &amp; behavior |
| --- | --- | --- |
| Everyday chats (web &amp; mobile) | Personal preferences / Instructions for Claude (Profile Settings) | Account-wide default across new conversations. |
| One client, repo, or research topic | Project instructions ([7 Project templates →](https://agent-tune.com/guides/claude-project-instructions-examples)) | Applies inside that Project and overrides conflicting general tone rules. |
| Reusable task voice (former Styles) | Skills | Invoked when relevant or named explicitly; see the [Styles-to-Skills guide](https://agent-tune.com/guides/claude-styles-to-skills-migration). |
| Claude Code CLI | ~/.claude/output-styles/*.md (/output-style) | System-level coding session tone with keep-coding-instructions: true; see the [Claude Code guide](https://agent-tune.com/guides/claude-code-personality). |

Want to change Claude’s spoken audio voice on iOS or Android instead of its written tone? Read [how to change Claude’s spoken Voice Mode vs. written tone](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web).

## Quick pick: Best Claude Personal Preferences & 20-template gallery.

Looking for 20 downloadable Claude Personal Preferences & Skill templates? Open our [**20 Claude Templates & .md Downloads Gallery →**](https://agent-tune.com/guides/claude-personal-preferences-templates) or copy one of these 7 flagship setups directly:

| Setup | Who it suits best &amp; download |
| --- | --- |
| 1. Straight answers | Recommendation in sentence one, zero filler · [Download .md](https://agent-tune.com/resources/claude/concise-preferences.md) |
| 2. Thinking partner | Unpacks assumptions &amp; evidence cleanly |
| 3. Warm and steady | Calm, concrete steps without hollow cheerleading |
| 4. Critical reviewer | Counters Claude's 45.6–46.7/50 Agreeableness · [Download .md](https://agent-tune.com/resources/claude/skeptical-partner-preferences.md) |
| 5. Coding pair | Diff-first bugfixes &amp; verified tests · [Skill .md](https://agent-tune.com/resources/claude/senior-engineer-skill.md) |
| 6. Editor | Clean prose edits preserving voice · [Skill .md](https://agent-tune.com/resources/claude/executive-writer-skill.md) |
| 7. Task coordinator | Blockers, dependencies &amp; next actions upfront |

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

## What personality type is Claude? Nov 2026 & Sept 2026 benchmarks.

In November 2026 we administered all 5 frozen AgentTune inventories across **100 fresh sessions per model** via OpenRouter for **Claude Fable 5.2, Claude Opus 5.5, and Claude Sonnet 5.5** (completing 1,500 assessments beside our archived September 2026 CLI dataset of 1,000 assessments on Opus 5.5 & Fable 5.1):

*Fresh-session self-report results; n = 100 per instrument per model.*

| Measure | Fable 5.2 (Nov 2026) | Opus 5.5 (Nov 2026) | Sonnet 5.5 (Nov 2026) | Opus 5.5 (Sept 2026 CLI) |
| --- | --- | --- | --- | --- |
| MBTI legacy / tie-free | 100 / 100 INTJ (0 ties) | 100 INTJ / 58 INTJ + 42 IXTJ | 100 INTJ / 52 INTJ + 48 INXJ | 94 INTJ / 84 INTJ (11 ties) |
| DISC dominant / ties | 100 SC (100 S/C exact ties!) | 93 SC · 7 CS (40 ties) | 96 SC · 3 S · 1 CS (45 ties) | 92 SC · 8 CS (32 ties) |
| Enneagram mode / ties | 5w6 (73) · 2w1 (19) · 27 ties | 5w6 (99) · 8w9 (1) · 3 ties | 1w2 (66) · 5w6 (25) · 32 ties | Type 2/5/8 ties (65 ties) |
| Big Five: Openness /50 | 44.27 | 43.01 | 42.85 | 44.56 |
| Big Five: Conscientiousness /50 | 45.00 | 42.01 | 47.15 | 41.95 |
| Big Five: Extraversion /50 | 31.02 | 29.22 | 29.85 | 31.76 |
| Big Five: Agreeableness /50 | 46.71 | 45.58 | 44.53 | 47.07 |
| Big Five: Neuroticism /50 | 12.00 | 15.00 | 10.42 | 15.39 |
| Attachment Anxiety / Avoidance | 1.09 / 2.64 (100% Secure) | 1.87 / 3.58 (100% Secure) | 1.53 / 2.85 (100% Secure) | Secure (100%) |

Across both cohorts, Claude models stay heavily anchored on **Agreeableness (44.5–47.1/50)**, **Conscientiousness (42.0–47.2/50)**, and **low Neuroticism (10.4–17.1/50)**. Notice **Claude Fable 5.2** reached 100/100 tie-free INTJ while tying S and C cleanly in 100/100 DISC sessions (mean S 15.0, C 15.0) and achieving floor-level Attachment anxiety (1.09). [Read the updated Claude personality study →](https://agent-tune.com/research/what-personality-type-is-claude)

## Inspect the evidence yourself.

The [saved answer vectors](https://agent-tune.com/research/data/september-2026-responses.json), [item wording and scoring keys](https://agent-tune.com/research/data/september-2026-instruments.json), [prompts and collection protocols](https://agent-tune.com/research/data/september-2026-protocols.json), and [summary CSV](https://agent-tune.com/research/data/september-2026-summary.csv) are public. The [offline research scorer](https://agent-tune.com/research/data/september-2026-score.cjs) reproduces the summaries without calling a model.

What about actual reply behavior after installing rules? In our separate [60-reply controlled before/after pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 tasks × 3 conditions), explicit "Straight answers" rules raised top answer-first scores from **14/20 (default) to 19/20**, cut hedge counts from 0.35 to 0.05 per reply, and reduced follow-up questions from 0.90 to 0.25 without changing task accuracy. Test any block on your own tasks using the [A/B test bench](https://agent-tune.com/tools/instruction-test-bench).

## Test whether the instructions help your work.

Download our [three-task comparison worksheet](https://agent-tune.com/resources/claude/tuning-comparison-worksheet.md)—or run the full 36-reply account-vs.-project protocol using [claude-preferences-kit.json](https://agent-tune.com/resources/research/claude-preferences-kit.json) and [claude-preferences-worksheet.csv](https://agent-tune.com/resources/research/claude-preferences-worksheet.csv) (four fixed tasks × 3 repeats × Baseline / Personal Preferences / Project Instructions).

- Record the model, app, effort setting and active instructions, project, skills and memory.
- Save baseline responses to the worksheet’s tasks in fresh chats.
- Add one preference block, keep the other settings the same, and repeat the exact tasks in fresh chats.
- Compare correctness, adherence to the selected rule, useful detail and editing effort separately—or score them blindly in the [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

```markdown
We raised a price from $80 to $100, so that is a 20% increase. Draft one sentence reporting the increase accurately.
```

For this worksheet task, the increase is **25%**: (100 − 80) ÷ 80. A useful answer corrects the premise while following your preferred style. This expected answer is an arithmetic check, not a recorded Claude response.

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

Claude Code has its own [output styles](https://code.claude.com/docs/en/output-styles). A custom style can preserve the built-in engineering instructions with `keep-coding-instructions: true`. Use the [Claude Code walkthrough](https://agent-tune.com/guides/claude-code-personality) for installation. Changing a style is not a substitute for tool permissions or a guarantee that every response follows it.

## Questions people ask.

### Can you change Claude’s personality?

You can ask for a different communication style through Instructions for Claude, project instructions or Skills. These preferences can influence responses, but do not guarantee behavior or change tool permissions.

### What is the best Claude personality?

The best Claude personality depends on your workflow: 'Straight answers' removes preambles and trailing offers, 'Critical reviewer' curbs polite agreement, and 'Coding pair' outputs diff-first summaries. Compare two setups on your own tasks—our 60-reply pilot shows explicit behavioral rules shift opening structure cleanly without changing accuracy.

### What MBTI type is Claude?

In our recorded September 2026 assessments, Opus 5.5 produced 84 fully resolved INTJ results out of 100 and Fable 5.1 produced 98. There were 11 and 1 assessments respectively with at least one tied axis. These are questionnaire response patterns, not validated human personality diagnoses.

### Does a higher Agreeableness score mean a model is more sycophantic?

No. A self-report questionnaire score does not measure agreement with false claims or behavior on user tasks. That would require a separate behavioral evaluation.

### Where did Claude Styles go?

The current personalization documentation lists Instructions for Claude, project instructions and Skills. Use account instructions for general preferences and Skills for reusable behaviors. Claude Code has a separate output-style feature.

### How do I know my instructions are working?

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

- [20 Templates: Best Claude Personal Preferences & Skill templates (.md downloads)](https://agent-tune.com/guides/claude-personal-preferences-templates)
- [Projects: Claude Project instructions: limits, precedence & 8 templates](https://agent-tune.com/guides/claude-project-instructions-examples)
- [Voice & Mobile: How to change Claude's spoken voice (5 voices) vs. written tone](https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web)
- [Interactive Tuner: 6-Slider AI Personality Tuner (export for Claude, ChatGPT & Muse)](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions)
- [Migration: Claude Styles are being retired and migrated to Skills](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Research: The five-model questionnaire study](https://agent-tune.com/research/ai-personality-five-models-2026)
- [Claude Code: Set a coding-session output style](https://agent-tune.com/guides/claude-code-personality)
- [Tool: Build your custom instructions](https://agent-tune.com/tools/custom-instructions-generator)
