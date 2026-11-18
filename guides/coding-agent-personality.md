Source: https://agent-tune.com/guides/coding-agent-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Coding agents

# Coding agent personality: the layer your AGENTS.md is missing.

By Bernard Huang · Updated November 17, 2026

Code conventions tell the agent what to write. A personality layer tells it how to talk to you.

**Quick answer:** Coding agents read instruction files—CLAUDE.md for Claude Code, AGENTS.md for Codex and compatible agents, .cursor/rules/*.mdc for Cursor, and .github/copilot-instructions.md for Copilot. Beyond build and style rules, add a short communication section (preferring ~/.claude/CLAUDE.md or ~/.codex/AGENTS.md for personal tone) to control how the agent reports diffs, shows reasoning, and challenges weak approaches.

## Four files, one job.

Every major coding agent reads a Markdown instruction file from your repo or home folder:

### CLAUDE.md — Claude Code

Claude Code loads `CLAUDE.md` from the repo root at session start, plus `~/.claude/CLAUDE.md` for personal rules that follow you across projects:

```markdown
# CLAUDE.md

## Commands
- npm run dev; start the dev server
- npm test; run the vitest suite before any commit

## Conventions
- TypeScript strict mode; no any types
- Named exports only
- Server code never imports from /client
```

### AGENTS.md — the cross-agent standard

`AGENTS.md` is an open specification read natively by OpenAI Codex (from `~/.codex/AGENTS.md`, the repo root, and nested folders), Cursor, GitHub Copilot’s coding agent, Gemini CLI, and Zed:

```markdown
# AGENTS.md

## Setup
pnpm install
pnpm dev; local server on :3000

## Testing
pnpm test must pass before you commit.

## Style
Prettier owns formatting. Don't hand-format.
```

### .cursor/rules/*.mdc — Cursor

Cursor stores project rules in `.cursor/rules/*.mdc` with a short YAML frontmatter block (`description`, optional `globs`, and `alwaysApply`):

```markdown
---
description: API route conventions
globs: ["src/api/**/*.ts"]
alwaysApply: false
---

- Validate input with zod at the route boundary.
- Return typed error objects, never bare strings.
```

### .github/copilot-instructions.md — GitHub Copilot

One repo-wide Markdown file loaded into Copilot’s context:

```markdown
We use Rails 8 with RSpec.
Prefer service objects over fat models.
All timestamps are UTC. All money is integer cents.
```

Across real-world examples ([see our CLAUDE.md collection](https://agent-tune.com/guides/claude-md-examples)), almost every file covers commands and code style—while leaving out how the agent should communicate with the developer.

## Code conventions constrain the diff. Nothing constrains the conversation.

Code rules tell the agent what code to write. A communication block tells it how to report back to you on every turn:

- **How to report:** Diff and root cause first, or walkthrough first?
- **How much context:** One line per file touched, or a full trade-off breakdown?
- **When to push back:** “If my approach has a race condition or simpler alternative, say so before coding.”
- **How to handle uncertainty:** Flag unverified assumptions explicitly instead of guessing.

Here is a developer-focused communication block adapted from our [INTP tuning](https://agent-tune.com/library/mbti/intp):

```markdown
## Working with me (INTP)

- Show the reasoning, not just the diff. A fix with no
  traceable logic looks like a coincidence.
- Calibrate confidence. "This should fix it; 70% sure"
  beats "Fixed!" when the tests haven't run.
- State assumptions before acting on them.
  "Assuming the race is in the cache layer, then..."
- Edge cases are the interesting part. When I ask
  "but what about...", pursue it; that's the direction.
- Don't force closure. If I'm still comparing approaches,
  don't push for a decision.
- Don't compress nuance into bullets to save time.
```

All 43 profiles across MBTI, Enneagram, DISC, Attachment, and Big Five are free and MIT-licensed in [the library](https://agent-tune.com/library/), or you can take the 5-minute [MBTI test](https://agent-tune.com/tests/mbti) with no email required.

## Where the layer goes, file by file.

- **Claude Code:** Put personal tone in `~/.claude/CLAUDE.md` (or an output style in `~/.claude/output-styles/`) so it applies across all repos without cluttering team git history. Use the [CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator) for a one-click export.
- **OpenAI Codex:** Put personal communication rules in `~/.codex/AGENTS.md` and keep repo build rules in the root `AGENTS.md`.
- **Cursor:** Save `.cursor/rules/personality.mdc` with `alwaysApply: true` (or use Cursor’s user-level Rules for AI setting).
- **GitHub Copilot:** Add a 6–10 line communication section inside `.github/copilot-instructions.md`.

## What to leave out.

- **Secrets:** Never put API keys, tokens, or connection strings in instruction files.
- **Rules a linter already enforces:** If Prettier or ESLint enforces it automatically, remove the prose duplicate.
- **Novel-length docs:** Long instruction files dilute attention and can hit Codex’s 32 KiB cap. Link deep architecture docs instead of pasting them inline.
- **Role-play costumes:** “You are a sarcastic pirate” fades quickly. Checkable rules like “state assumptions before editing files” persist across long sessions.

See our [full 5-agent rules matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) or use the [Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter) to add a communication block without touching existing repo rules.

## Questions people ask.

### Is AGENTS.md replacing CLAUDE.md and Cursor rules?

Converging, not replacing. AGENTS.md is the portable common denominator; Codex reads it natively, and Cursor documents it as an alternative to .cursor/rules; but Claude Code's native file is still CLAUDE.md, and Cursor's .mdc rules do things AGENTS.md can't, like glob scoping. Many repos keep both, with one file pointing at the other.

### Can I use the identical personality section in all four files?

Yes. The personality layer is plain Markdown prose, and all four conventions accept plain Markdown. The only format difference is Cursor's .mdc frontmatter; three YAML lines at the top. Write the section once, paste it everywhere, and set alwaysApply: true in the Cursor copy so it loads in every chat.

### How long should the personality section be?

Ten to twenty lines. Instruction files compete for the agent's attention on every request, so each rule should earn its place. Concrete beats comprehensive: six rules the agent can check itself against outperform two paragraphs describing what kind of person you are.

### Will personality tuning change the code the agent writes?

Mostly no; code conventions still govern the diff. What changes is everything around the diff: whether the agent leads with the result or the reasoning, how it flags uncertainty, whether it pushes back on a bad approach before implementing it. That's the part you experience message by message.

### What if I don't know my personality type?

Take the free in-browser MBTI test at agent-tune.com; about five minutes, no email. Or skip typology entirely and handwrite three rules: how you want results reported, how much context you want, and when you want pushback. A personality type is a shortcut to those answers, not a prerequisite.

## What changed.

- November 11, 2026 Added cross-agent MCP preference portability notes and updated current model names.

- September 24, 2026 Communication prompts now adapt to Meta Muse, GPT-6 Astra, Claude Fable 5.1, GPT-6 Sol, Claude Opus 5.5, and Grok 4.6, with a compact model selector and expandable previews.

## Keep going.

- [Free browser tool: Convert and merge your own instructions](https://agent-tune.com/tools/instruction-converter)
- [Guide: How to change Claude Code's personality (output styles)](https://agent-tune.com/guides/claude-code-personality)
- [Guide: CLAUDE.md examples that actually work](https://agent-tune.com/guides/claude-md-examples)
- [Tool: CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator)
- [Library: All 43 tuning files](https://agent-tune.com/library/)
- [Tests: MBTI test — free, ~5 min](https://agent-tune.com/tests/mbti)
- [Guide: MBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
- [Guide: How to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
