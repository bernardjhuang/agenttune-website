Source: https://agent-tune.com/guides/ai-instruction-precedence-overrides
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Precedence & Scope

# Project vs account instructions: what overrides what in AI.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/ai-instruction-precedence-overrides.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Across ChatGPT, OpenAI Codex, Claude, Claude Code, and Meta Muse, specific rules override broad ones. Your current chat message beats project or repo files, and project or repo files beat account-wide preferences. In ChatGPT Projects, project instructions replace global Custom Instructions inside that workspace. In OpenAI Codex, nested folder AGENTS.md files override root AGENTS.md, which overrides ~/.codex/AGENTS.md.

## Precedence hierarchy across major AI platforms.

| Platform | Lowest priority (broadest scope) | Middle priority (workspace scope) | Highest priority (wins conflicts) |
| --- | --- | --- | --- |
| ChatGPT (web, desktop, mobile) | Account Memory & global Custom Instructions | Project Instructions (overrides global Custom Instructions inside that project) | Current conversation prompt |
| OpenAI Codex (Astra & Sol) | Personal `~/.codex/AGENTS.md` | Repo root `AGENTS.md` / `AGENTS.override.md` | Subdirectory `AGENTS.md` closest to working directory, then task prompt |
| Claude (web, desktop, mobile) | Settings → General → Personal Preferences | Claude Project Instructions & invoked Skills | Current conversation prompt |
| Claude Code (CLI) | User `~/.claude/CLAUDE.md` & active `/output-style` | Repository `CLAUDE.md` | Subdirectory `CLAUDE.md` & current CLI command |
| Meta Muse | `Identity.md` & background facts in `Memory.md` | Communication rules in `Soul.md` | Explicit instructions in the current chat turn |

## 1. ChatGPT: Project Instructions override global Custom Instructions.

In ChatGPT, instructions added inside a Project apply only to that project and **override your global Custom Instructions**. That makes Projects ideal when you want a different persona for a specific workflow—such as keeping a warm collaborator tone globally while using a strict code-review checklist inside an engineering Project.

Watch out for one hidden conflict in ChatGPT’s global settings: the **Base style and tone** preset and the **Characteristics** sliders (Warm, Enthusiastic, Headers & Lists, Emojis). If you select Friendly and turn up Enthusiastic while your text box says “no openers, no exclamation marks, dry tone,” the two controls fight each other. Leave Base style on **Default** when using written custom instructions.

## 2. OpenAI Codex: later files in the directory chain win.

OpenAI Codex concatenates instruction files from outermost to innermost:

- `~/.codex/AGENTS.md` (your personal global file)
- `<repo-root>/AGENTS.md` (the team repository file)
- Nested folder `AGENTS.md` down to your current working directory

Because files closer to your current folder appear later in the prompt, they win whenever two rules conflict. In any folder, an `AGENTS.override.md` file replaces the sibling `AGENTS.md` in that folder. See the [OpenAI Codex AGENTS.md guide](https://agent-tune.com/guides/codex-agents-md-guide) for full details on the 32 KiB limit.

## 3. Claude: Personal Preferences vs Projects and Skills.

In Claude, **Personal Preferences** (Settings → General) set your account-wide baseline. When you work inside a **Claude Project** or invoke a **Skill**, both layers load together. If your Personal Preferences say “keep answers under 150 words in plain prose” and a Skill asks for a “5-section Markdown table report,” Claude can hesitate unless your account rules include an explicit override line.

Every AgentTune prompt includes that override line at the top so your baseline never blocks a task:

```markdown
## Communication preferences

Use these preferences for tone, pacing, and structure. My current task, project instructions, and explicit corrections take precedence.

- Lead with the direct answer or recommendation.
- Use plain prose by default; switch to tables or lists when the task or project calls for them.
- Skip filler intros and generic closing offers.
- Point out flawed assumptions or missing constraints before executing a plan.
```

## Why AI ignores instructions: 5-cause diagnostic checklist & refactor.

When an assistant ignores rules you saved, one of five setup conflicts is almost always responsible:

| Failure mode | Symptom | Fast fix |
| --- | --- | --- |
| 1. Internal contradiction | Model swings between 1-line stubs and long essays | Paste into [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to remove clashing length/format rules |
| 2. Stale Saved Memory | Old stacks or tone notes resurface in new chats | Prune in [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer) |
| 3. Precedence shadowing | Works globally, ignored in Projects/subfolders | Check Project instructions or nested `AGENTS.override.md` |
| 4. Silent truncation | Top rules hold; bottom rules silently drop | Stay well under caps (ChatGPT 1,500 chars; Codex 32 KiB combined) |
| 5. Untestable adjectives | “Be concise and brilliant” reverts to default prose | Swap adjectives for checkable open/pushback behaviors |

## Questions people ask.

### Do ChatGPT Project Instructions override global Custom Instructions?

Yes. According to OpenAI's Help Center documentation for Projects in ChatGPT, instructions added to a Project apply only inside that project and override your account-wide Custom Instructions.

### How do I stop my global brevity rules from breaking detailed project reports?

Add one precedence sentence at the top of your account-wide instructions: 'Use these preferences as the default for tone and pacing; my current task and project instructions take precedence when they specify a different format or length.'

### In OpenAI Codex, does ~/.codex/AGENTS.md override the repository's AGENTS.md?

No. Codex reads ~/.codex/AGENTS.md first and the repository's AGENTS.md after it, so the repository file (and any subdirectory AGENTS.md closer to your working directory) wins conflicts.

### Why is ChatGPT ignoring my custom instructions to be concise?

Check two places: first, make sure you are not inside a Project whose Project Instructions override your global settings; second, check Settings, Personalization to ensure the Base style preset or Characteristics sliders (like Warm or Headers & Lists) are not contradicting your written rules.

## What changed.

- November 5, 2026 First published with cross-platform override rules for ChatGPT, Codex, Claude, Claude Code, and Meta Muse.

## Sources.

- [OpenAI Help Center: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)

- [ChatGPT & Codex Docs: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

## Keep going.

- [Reference: AI custom instructions character limits (2026 cheat sheet)](https://agent-tune.com/guides/ai-custom-instructions-character-limits)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Guide: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personality)
- [Guide: Claude Styles are moving to Skills: how to migrate](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Guide: Meta Muse Memory.md, privacy, and how to reset safely](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
- [Guide: Notion AI custom instructions & workspace agent personas](https://agent-tune.com/guides/notion-ai-custom-instructions-agent-persona)
- [Guide: Microsoft Copilot custom instructions & Memory settings](https://agent-tune.com/guides/microsoft-copilot-custom-instructions-memory)
