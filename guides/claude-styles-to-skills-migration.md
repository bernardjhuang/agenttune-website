Source: https://agent-tune.com/guides/claude-styles-to-skills-migration
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Migration

# Claude Styles are moving to Skills: how to migrate.

By Bernard Huang · Updated November 17, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/guides/claude-styles-to-skills-migration.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Move always-on tone and brevity rules into Settings → Profile (or General) → Personal Preferences; move task-specific writing templates (memos, changelogs, or newsletters) into Claude Skills or Project Instructions; and in Claude Code, use ~/.claude/output-styles/ with /output-style.

## Why the old picker was split into Preferences and Skills.

People used the old Styles dropdown for two very different jobs: permanent habits like “never use filler intros” and task-specific templates like “write in our weekly release-note format.” Splitting the two means you no longer have to toggle a preset on and off between threads:

| What you kept in the old preset | Where to migrate it now | Why it works better |
| --- | --- | --- |
| Everyday tone, brevity, directness, and pushback | Settings → Profile / General → Personal Preferences | Applies automatically in every chat without picking from a dropdown. |
| Repeatable document formats, rubrics, or brand voice rules | Claude Skills (`SKILL.md`) | Loads only when the task calls for that specific format, keeping ordinary chats clean. |
| Client-specific or codebase-specific instructions | Claude Project Instructions | Scoped to one workspace and shared with project files. |
| Terminal CLI communication style | Claude Code `~/.claude/output-styles/` | Keeps coding instructions intact via `keep-coding-instructions: true`. |

## Step 1: Move always-on tone rules to Personal Preferences.

If you used the old Concise or Formal style just to stop Claude from over-explaining, paste those rules once into **Settings → Profile → Personal Preferences**:

```markdown
## How to communicate with me

- Lead with the direct answer or conclusion in the first sentence.
- Match response length to the complexity of the question; keep routine replies under 150 words.
- Default to clear prose paragraphs. Use bullet lists or tables only when they make comparisons easier to scan.
- Skip conversational padding, flattery, and generic closing offers.
- Challenge flawed assumptions in my prompt before executing the request.
```

For 15 role-specific blocks, see [Claude Personal Preferences: 15 examples](https://agent-tune.com/guides/claude-personality).

## Step 2: Turn task-specific writing voices into a Skill.

If your old Style described a specific deliverable—like an executive memo, customer support reply, or technical RFC—turn it into a **Skill** so Claude doesn’t format your Python debugging answers like a boardroom memo.

Include three short parts in your Skill:

- **When to trigger:** One sentence naming the exact tasks where Claude should use the Skill.
- **Structure and rules:** Heading order, paragraph length, and banned phrases.
- **One short example:** A 3–5 sentence sample showing the target style.

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

While web Claude Styles are moving to Personal Preferences and Skills, **Claude Code** in the terminal keeps its own `/output-style` command backed by Markdown files in `~/.claude/output-styles/`. Always include `keep-coding-instructions: true` in the YAML frontmatter ([see the Claude Code personality guide](https://agent-tune.com/guides/claude-code-personality)).

## Questions people ask.

### Why did Anthropic retire the old Styles menu in Claude?

Claude Styles are being retired and replaced by Personal Preferences (for account-wide tone defaults) and Skills (for repeatable task workflows and writing formats), so users do not have to toggle a preset on and off between conversations.

### How do I replace the old Concise preset in Claude?

Open Settings, then General, and add a two-line rule in Personal Preferences: 'Lead with the direct answer in the first sentence. Keep routine replies under 150 words in plain prose without filler intros or closing offers.'

### Should I put my writing voice in a Claude Skill or Personal Preferences?

If you want Claude to talk to you that way in every conversation, put it in Personal Preferences. If it is a writing format for specific documents—like newsletters, memos, or support emails—put it in a Skill or a dedicated Project.

### Are output styles in Claude Code also changing?

No. While web Claude Styles are being migrated to Skills and Personal Preferences, Claude Code in the terminal continues to support ~/.claude/output-styles/*.md selected with the /output-style command.

## What changed.

- November 5, 2026 First published covering how to move rules from the retiring Styles menu into Personal Preferences, Skills, and Projects.

## Sources.

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [Claude Code Docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [AgentTune: How to give Claude a personality](https://agent-tune.com/guides/claude-personality)

## Keep going.

- [Examples: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personality)
- [Guide: Claude Code personality: CLAUDE.md and /output-style](https://agent-tune.com/guides/claude-code-personality)
- [Guide: Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides)
