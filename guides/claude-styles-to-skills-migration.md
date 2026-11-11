Source: https://agent-tune.com/guides/claude-styles-to-skills-migration
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Migration

# Claude Styles are moving to Skills: how to migrate.

By Bernard Huang · Updated November 5, 2026

Claude Styles are being retired and replaced by three clearer tools: put always-on tone and brevity rules in Settings, General, Personal Preferences; put task-specific writing formats (like memos, changelogs, or newsletters) in Claude Skills or Project instructions; and in Claude Code, use ~/.claude/output-styles/ with the /output-style command.

## Why the old picker was split into Preferences and Skills.

When Claude Styles (now being retired and replaced) launched, people used the same dropdown for two very different jobs: permanent preferences like "never use filler intros" and task-specific templates like "write in our weekly release-note format." Mixing those in one per-chat menu meant you either forgot to switch the preset off or had to re-select your preferred brevity in every new thread.

| What you kept in the old preset | Where to migrate it now | Why it works better |
| --- | --- | --- |
| Everyday tone, brevity, directness, and pushback | Settings → General → Personal Preferences | Applies automatically in every chat without picking a preset from a dropdown. |
| Repeatable document formats, rubrics, or brand voice rules | Claude Skills (SKILL.md) | Loads only when the task calls for that specific format, keeping ordinary chats clean. |
| Client-specific or codebase-specific instructions | Claude Project Instructions | Scoped to one workspace and shared with project files. |
| Terminal CLI communication style | Claude Code ~/.claude/output-styles/ | Keeps coding instructions intact via keep-coding-instructions: true. |

## Step 1: Move always-on tone rules to Personal Preferences.

If you used the old Concise or Formal preset—or a custom Claude Style that is being retired—simply to stop Claude from over-explaining, copy those rules into Settings → General → Personal Preferences. They will apply across Opus 5.5 and Fable 5.1 by default.

```markdown
## How to communicate with me

- Lead with the direct answer or conclusion in the first sentence.
- Match response length to the complexity of the question; keep routine replies under 150 words.
- Default to clear prose paragraphs. Use bullet lists or tables only when they make comparisons easier to scan.
- Skip conversational padding, flattery, and generic closing offers.
- Challenge flawed assumptions in my prompt before executing the request.
```

For 15 ready-made blocks tailored to engineering, research, editing, and strategy, see [Claude Personal Preferences: 15 examples](https://agent-tune.com/guides/claude-personal-preferences-examples).

## Step 2: Turn task-specific writing voices into a Skill.

When a Claude Style is being migrated because it describes a specific deliverable—such as an executive memo, a customer support reply, or a technical RFC—package it as a Skill instead of putting it in global Personal Preferences. That way Claude does not format your Python debugging answers like a boardroom memo.

A clean writing-voice Skill has three parts:

- When to trigger: One sentence naming the exact tasks where Claude should apply the voice (for example, "Use when drafting external customer updates or release notes").
- Structure and constraints: Explicit rules on heading order, sentence length, and forbidden phrases.
- One short calibration example: A three-to-five-sentence before-and-after sample showing the target cadence.

```markdown
---
name: technical-memo-voice
description: Use when drafting architecture memos, postmortems, or engineering proposals.
---

# Technical Memo Voice

1. Open with a three-line Status / Decision / Impact summary.
2. Write in plain, active-voice prose. Avoid marketing adjectives and vague qualifiers.
3. Every trade-off section must name the rejected alternative and the concrete metric or constraint that ruled it out.
4. Keep paragraphs under four sentences.
```

## Step 3: Use /output-style in Claude Code.

Note that while web Claude Styles are being retired in favor of Personal Preferences and Skills, Claude Code in the terminal has its own dedicated /output-style command backed by Markdown files in ~/.claude/output-styles/. In Claude Code, always keep keep-coding-instructions: true in the YAML frontmatter so your communication tuning does not strip Claude Code's built-in software engineering rules. Full details are in the [Claude Code personality guide](https://agent-tune.com/guides/claude-code-personality).

## Questions people ask.

Why did Anthropic retire the old Styles menu in Claude?

Claude Styles are being retired and replaced by Personal Preferences (for account-wide tone defaults) and Skills (for repeatable task workflows and writing formats), so users do not have to toggle a preset on and off between conversations.

How do I replace the old Concise preset in Claude?

Open Settings, then General, and add a two-line rule in Personal Preferences: 'Lead with the direct answer in the first sentence. Keep routine replies under 150 words in plain prose without filler intros or closing offers.'

Should I put my writing voice in a Claude Skill or Personal Preferences?

If you want Claude to talk to you that way in every conversation, put it in Personal Preferences. If it is a writing format for specific documents—like newsletters, memos, or support emails—put it in a Skill or a dedicated Project.

Are output styles in Claude Code also changing?

No. While web Claude Styles are being migrated to Skills and Personal Preferences, Claude Code in the terminal continues to support ~/.claude/output-styles/*.md selected with the /output-style command.

## What changed.

- November 5, 2026 First published covering how to move rules from the retiring Styles menu into Personal Preferences, Skills, and Projects.

## Sources.

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [Claude Code Docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [AgentTune: How to give Claude a personality](https://agent-tune.com/guides/claude-personality)

## Keep going.

- [Examples: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personal-preferences-examples)
- [Guide: How to give Claude a personality (Opus 5.5 & Fable 5.1)](https://agent-tune.com/guides/claude-personality)
- [Guide: Claude Code personality: CLAUDE.md and /output-style](https://agent-tune.com/guides/claude-code-personality)
- [Guide: Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
- [Verification: How to test if Claude follows your preferences](https://agent-tune.com/guides/claude-preferences-test)
