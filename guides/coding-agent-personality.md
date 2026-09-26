Source: https://agent-tune.com/guides/coding-agent-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Coding agents

# Coding agent personality: the layer your AGENTS.md is missing.

        By Bernard Huang · Updated September 25, 2026

        Coding agents read instruction files — CLAUDE.md for Claude Code, AGENTS.md for Codex and other agents, .cursor/rules for Cursor, .github/copilot-instructions.md for Copilot. Most cover code conventions only. Add a personality layer: how the agent reports, how much reasoning it shows, when it pushes back. Same files, one extra section.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=any&target=anywhere)

## Four files, one job.

        Every major coding agent reads a Markdown instruction file from your repo. The conventions differ in name and loading rules, but they converge on the same content: commands, code style, boundaries.

### CLAUDE.md — Claude Code

Claude Code loads CLAUDE.md from the repo root at session start, plus ~/.claude/CLAUDE.md for preferences that follow you across projects. Plain Markdown, no schema. A typical one reads like a terse operations manual:

# CLAUDE.md

## Commands
- npm run dev — start the dev server
- npm test — run the vitest suite before any commit

## Conventions
- TypeScript strict mode; no any types
- Named exports only
- Server code never imports from /client

### AGENTS.md — the cross-agent standard

AGENTS.md is an open spec (agents.md) for a single instruction file any agent can read — stewarded by the Agentic AI Foundation under the Linux Foundation since December 2025. OpenAI's Codex reads it natively, from ~/.codex/AGENTS.md globally, the repo root, and the working directory, most specific last. Cursor documents it as a plain-Markdown alternative to .cursor/rules, with nested files taking precedence. GitHub Copilot's coding agent, Gemini CLI, and Zed read it too.

# AGENTS.md

## Setup
pnpm install
pnpm dev — local server on :3000

## Testing
pnpm test must pass before you commit.

## Style
Prettier owns formatting. Don't hand-format.

### .cursor/rules/*.mdc — Cursor

Cursor's project rules live in .cursor/rules/ as .mdc files — Markdown with a YAML frontmatter block that controls when each rule loads: a description, optional globs, and an alwaysApply flag.

---
description: API route conventions
globs: ["src/api/**/*.ts"]
alwaysApply: false
---

- Validate input with zod at the route boundary.
- Return typed error objects, never bare strings.

### .github/copilot-instructions.md — GitHub Copilot

One repo-wide Markdown file added to Copilot's context. No frontmatter, no scoping — a good reason to keep it short.

We use Rails 8 with RSpec.
Prefer service objects over fat models.
All timestamps are UTC. All money is integer cents.

Four conventions, one pattern — and one gap. Read a stack of real examples ([we collected them](https://agent-tune.com/guides/claude-md-examples)) and you'll notice what almost none of them mention: the person reading the agent's output.

## Code conventions constrain the diff. Nothing constrains the conversation.

        Your instruction file tells the agent what code to write. It says nothing about how to work with you — and that's the half you actually experience, message by message. The personality layer covers communication, not style:

- How to report. Result first, or reasoning first? "Lead with what changed, then why."
- How much context. One line per file touched, or a full walkthrough?
- When to push back. "If my approach is worse, say so before implementing it."
- What to do when unsure. Guess and flag it, or stop and ask?

The difference shows up on the first bad day. Untuned, the agent buries a failed migration under six paragraphs of cheerful narration. Tuned, it opens with the failure, states its assumption about the cause, and gives you a confidence level. Same model, same code — different file.

These preferences differ by person, and they map surprisingly well to personality type. Here's a condensed, dev-flavored version of our [INTP tuning](https://agent-tune.com/library/mbti/intp):

## Working with me (INTP)

- Show the reasoning, not just the diff. A fix with no
  traceable logic looks like a coincidence.
- Calibrate confidence. "This should fix it — 70% sure"
  beats "Fixed!" when the tests haven't run.
- State assumptions before acting on them.
  "Assuming the race is in the cache layer, then..."
- Edge cases are the interesting part. When I ask
  "but what about...", pursue it — that's the direction.
- Don't force closure. If I'm still comparing approaches,
  don't push for a decision.
- Don't compress nuance into bullets to save time.

There are 43 of these — every MBTI type, Enneagram type, DISC style, attachment style, and Big Five pole — free and MIT-licensed in [the library](https://agent-tune.com/library/). Don't know your type? [The test](https://agent-tune.com/tests/mbti) takes five minutes, in-browser, no email.

## Where the layer goes, file by file.

- Claude Code: append a ## Working with me section to your project CLAUDE.md — or put it in ~/.claude/CLAUDE.md once and it applies to every repo. The [CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator) emits a ready-to-paste block from your type.
- AGENTS.md: add it as its own section in the root file. Because the file is a shared standard, the same section reaches Codex, Cursor, and everything else that reads it — write it once.
- Cursor: give it its own file — .cursor/rules/personality.mdc with alwaysApply: true and no globs. Communication preferences apply to every file; keep glob-scoped code rules separate.
- Copilot: a short block inside .github/copilot-instructions.md. The whole file rides along on requests, so keep the layer to ten lines or fewer.

Precedence works in your favor here. Communication style is a person-level preference, not a project-level one — so the global file (~/.claude/CLAUDE.md, ~/.codex/AGENTS.md) is its natural home, and project files stay about the project. Set it once, get it everywhere.

Every tuning in the library ships as raw Markdown too — [intp.md](https://agent-tune.com/library/mbti/intp.md), for example — so you can pull one straight into any of these files.

## What to leave out.

- Secrets. API keys, tokens, connection strings. Instruction files get committed, forked, and pasted into bug reports.
- Anything a tool already enforces. If Prettier formats it or ESLint blocks it, prose about it is dead weight — the config is the rule, and the prose version drifts.
- Novel-length context. Every line competes for the agent's attention on every request. Architecture docs belong in the repo; link them, don't inline them.
- Personality theater. "You are a sarcastic pirate" is a costume, and costumes decay over a long session. Concrete communication rules — "state assumptions before acting" — persist, because the agent can check itself against them.

For the deeper case on rules versus costumes, start with [how to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality). And if you're wondering which framework the rules should come from, we compared MBTI and Big Five [against cross-model data](https://agent-tune.com/guides/mbti-vs-big-five-for-ai).

## Questions people ask.

            Is AGENTS.md replacing CLAUDE.md and Cursor rules?

            Converging, not replacing. AGENTS.md is the portable common denominator — Codex reads it natively, and Cursor documents it as an alternative to .cursor/rules — but Claude Code's native file is still CLAUDE.md, and Cursor's .mdc rules do things AGENTS.md can't, like glob scoping. Many repos keep both, with one file pointing at the other.

            Can I use the identical personality section in all four files?

            Yes. The personality layer is plain Markdown prose, and all four conventions accept plain Markdown. The only format difference is Cursor's .mdc frontmatter — three YAML lines at the top. Write the section once, paste it everywhere, and set alwaysApply: true in the Cursor copy so it loads in every chat.

            How long should the personality section be?

            Ten to twenty lines. Instruction files compete for the agent's attention on every request, so each rule should earn its place. Concrete beats comprehensive: six rules the agent can check itself against outperform two paragraphs describing what kind of person you are.

            Will personality tuning change the code the agent writes?

            Mostly no — code conventions still govern the diff. What changes is everything around the diff: whether the agent leads with the result or the reasoning, how it flags uncertainty, whether it pushes back on a bad approach before implementing it. That's the part you experience message by message.

            What if I don't know my personality type?

            Take the free in-browser MBTI test at agent-tune.com — about five minutes, no email. Or skip typology entirely and handwrite three rules: how you want results reported, how much context you want, and when you want pushback. A personality type is a shortcut to those answers, not a prerequisite.

## What changed.

- September 24, 2026 Communication prompts now adapt to Muse, Astra 6, Fable 5.1, Sol 6, Opus 5.5, and Grok 4.7, with a compact model selector and expandable previews.

## Keep going.

          [Free browser toolConvert and merge your own instructions](https://agent-tune.com/tools/instruction-converter)
          [GuideHow to change Claude Code's personality (output styles)](https://agent-tune.com/guides/claude-code-personality)
          [GuideCLAUDE.md examples that actually work](https://agent-tune.com/guides/claude-md-examples)
          [ToolCLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator)
          [LibraryAll 43 tuning files](https://agent-tune.com/library/)
          [TestsMBTI test — free, ~5 min](https://agent-tune.com/tests/mbti)
          [GuideMBTI vs Big Five for AI](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
          [GuideHow to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
