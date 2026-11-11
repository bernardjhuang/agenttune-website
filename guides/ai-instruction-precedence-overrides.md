Source: https://agent-tune.com/guides/ai-instruction-precedence-overrides
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Reference · Precedence & Scope

# Project vs account instructions: what overrides what in AI.

By Bernard Huang · Updated November 5, 2026

Across ChatGPT, OpenAI Codex, Claude, Claude Code, and Meta Muse, specificity wins: your current chat prompt overrides project or repository instructions, and project or repository instructions override account-wide custom instructions. In ChatGPT Projects, project instructions explicitly replace global Custom Instructions inside that project. In OpenAI Codex, subdirectory AGENTS.md files override root AGENTS.md, which overrides ~/.codex/AGENTS.md.

## Precedence hierarchy across major AI platforms.

| Platform | Lowest priority (broadest scope) | Middle priority (workspace scope) | Highest priority (wins conflicts) |
| --- | --- | --- | --- |
| ChatGPT (web, desktop, mobile) | Account Memory &amp; global Custom Instructions | Project Instructions (overrides global Custom Instructions inside that project) | Current conversation prompt |
| OpenAI Codex (Astra &amp; Sol) | Personal ~/.codex/AGENTS.md | Repo root AGENTS.md / AGENTS.override.md | Subdirectory AGENTS.md closest to working directory, then task prompt |
| Claude (web, desktop, mobile) | Settings → General → Personal Preferences | Claude Project Instructions &amp; invoked Skills | Current conversation prompt |
| Claude Code (CLI) | User ~/.claude/CLAUDE.md &amp; active /output-style | Repository CLAUDE.md | Subdirectory CLAUDE.md &amp; current CLI command |
| Meta Muse | Identity.md &amp; background facts in Memory.md | Communication rules in Soul.md | Explicit instructions in the current chat turn |

## 1. ChatGPT: Project Instructions override global Custom Instructions.

OpenAI's Help Center documentation for Projects in ChatGPT states a clean rule: instructions set inside a Project apply only within that project and override your global Custom Instructions. That makes Projects the ideal way to run a second persona—for example, keeping a warm collaborator voice in your global Custom Instructions while running a strict, skeptical code-review voice inside an engineering Project.

Watch out for one common conflict inside ChatGPT's global settings: the Base style and tone dropdown (Default, Professional, Friendly, Candid, Quirky, Efficient, Cynical) and the Characteristics sliders (Warm, Enthusiastic, Headers & Lists, Emojis). If you pick Friendly and turn up Enthusiastic while pasting a custom instruction that says "no openers, no exclamation marks, dry tone," you are handing the model two opposite commands. Leave Base style on Default when using an explicit communication tuning.

## 2. OpenAI Codex: later files in the directory chain win.

In OpenAI Codex, files are concatenated from outermost to innermost:

- ~/.codex/AGENTS.md (your personal file)
- <repo-root>/AGENTS.md (the team repository file)
- Nested folder AGENTS.md down to your current working directory

Because files closer to your working directory appear later in the assembled prompt, they take priority when two rules conflict. At any single folder level, placing an AGENTS.override.md file replaces the sibling AGENTS.md in that folder. See the [OpenAI Codex AGENTS.md guide](https://agent-tune.com/guides/codex-agents-md-guide) for the full 32 KiB byte-cap behavior.

## 3. Claude: Personal Preferences vs Projects and Skills.

In Claude, Personal Preferences under Settings, General set your baseline across all conversations. When you work inside a Claude Project or trigger a Skill, both layers are present in context. If your Personal Preferences say "keep answers under 150 words in plain prose" and a Skill says "produce a 5-section Markdown table report," Claude can hesitate between the two unless your Personal Preferences include a clean escape hatch.

Every AgentTune prompt includes that exact precedence line at the top so your baseline never fights a specific task:

```markdown
## Communication preferences

Use these preferences for tone, pacing, and structure. My current task, project instructions, and explicit corrections take precedence.

- Lead with the direct answer or recommendation.
- Use plain prose by default; switch to tables or lists when the task or project calls for them.
- Skip filler intros and generic closing offers.
- Point out flawed assumptions or missing constraints before executing a plan.
```

## Questions people ask.

Do ChatGPT Project Instructions override global Custom Instructions?

Yes. According to OpenAI's Help Center documentation for Projects in ChatGPT, instructions added to a Project apply only inside that project and override your account-wide Custom Instructions.

How do I stop my global brevity rules from breaking detailed project reports?

Add one precedence sentence at the top of your account-wide instructions: 'Use these preferences as the default for tone and pacing; my current task and project instructions take precedence when they specify a different format or length.'

In OpenAI Codex, does ~/.codex/AGENTS.md override the repository's AGENTS.md?

No. Codex reads ~/.codex/AGENTS.md first and the repository's AGENTS.md after it, so the repository file (and any subdirectory AGENTS.md closer to your working directory) wins conflicts.

Why is ChatGPT ignoring my custom instructions to be concise?

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
- [Guide: Claude Personal Preferences: 15 examples and where to paste](https://agent-tune.com/guides/claude-personal-preferences-examples)
- [Guide: Claude Styles are moving to Skills: how to migrate](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Guide: Meta Muse Memory.md, privacy, and how to reset safely](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
