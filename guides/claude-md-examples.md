Source: https://agent-tune.com/guides/claude-md-examples
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Code

# CLAUDE.md examples that actually change behavior.

        By Bernard Huang · Updated September 25, 2026

        CLAUDE.md gives Claude Code persistent instructions, loaded at the start of every session. Put team rules in ./CLAUDE.md (checked in), personal project preferences in ./CLAUDE.local.md (gitignored), and global preferences in ~/.claude/CLAUDE.md. Keep it under ~200 lines, imperative, and specific: build commands, conventions, and constraints the code can't express.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=fable-5-1&target=claude-code)

## One file, three locations.

        CLAUDE.md is plain markdown. Claude Code loads it at session start and treats it as standing context — not enforced configuration, context. Where you put it decides who it applies to:

- ./CLAUDE.md — repo root, checked into version control. Team-shared: build commands, conventions, architecture decisions. (./.claude/CLAUDE.md works too.)
- ./CLAUDE.local.md — same repo, gitignored. Personal, per-project: your sandbox URLs, your test data, your communication preferences. Loads right after the project file.
- ~/.claude/CLAUDE.md — global. Applies to every project on your machine. Loads before project files, so project instructions can override it.

Two loading details worth knowing. Claude Code walks up the directory tree from wherever you launch it, so a CLAUDE.md in a parent directory loads too. And CLAUDE.md files in subdirectories don't load at launch — they load on demand, when Claude reads files in that directory. That second behavior is what makes the monorepo pattern below work.

Files can also import other files with @path syntax — @docs/git-instructions.md pulls that file into context at launch. Useful for sharing one instruction set between CLAUDE.md and an AGENTS.md that other agents read.

## Example 1: the minimal starter.

        Ten lines. Commands Claude would otherwise guess at, and one pointer on style. Most projects need this file first and many never need more:

# CLAUDE.md

## Commands
- Build: `npm run build`
- Test: `npm test` (single file: `npm test -- path/to/file.test.ts`)
- Lint: `npm run lint` — run before declaring any task done

## Style
- TypeScript strict mode. No `any`.
- Match the existing patterns in `src/` — read a neighboring file before inventing a new shape.

Note what's absent: no project description, no directory tree, no tech-stack inventory. Claude can discover all of that by reading the code. The file only holds what discovery gets wrong — the single-file test invocation, the lint-before-done rule.

## Example 2: test discipline, enforced in prose.

        For teams whose main failure mode is an agent that reports "done" with red tests. Every line targets a specific bad behavior:

# CLAUDE.md

## Tests are the contract
- Run `npm test` after every change. Never report a task complete with failing tests.
- Fixing a bug? Write the failing test FIRST — reproduce, then fix.
- Never modify a test to make it pass. If the test itself is wrong, say so explicitly and wait for confirmation.
- Integration tests need Docker: `docker compose up -d`, then `npm run test:integration`.
- Flaky test? Do not re-run until green. Flag it in your summary instead.

## Definition of done
1. `npm test` passes
2. `npm run lint` passes
3. New behavior has a test that fails without the change

The all-caps FIRST and the numbered definition of done aren't decoration — specificity is what makes instructions verifiable, and verifiable instructions are the ones that get followed. "Test your changes" does nothing; "never modify a test to make it pass" names the exact behavior you're banning.

## Example 3: monorepo root with per-package pointers.

        Don't write one giant file for a monorepo. Write a thin root file and put a CLAUDE.md in each package — subdirectory files load on demand when Claude works in that package, so the context cost lands only where it's spent:

# CLAUDE.md — monorepo root

pnpm workspace. Run package commands from the root: `pnpm --filter <pkg> <cmd>`.

## Packages (each has its own CLAUDE.md)
- `apps/web` — Next.js storefront
- `apps/api` — Fastify API
- `packages/ui` — shared components. Storybook: `pnpm --filter ui storybook`
- `packages/config` — shared eslint/tsconfig. Do not edit without an RFC.

## Cross-cutting rules
- Shared types live in `packages/types`. Never redefine them locally.
- A change touching two packages needs a changeset: `pnpm changeset`.

The root file holds only what crosses package boundaries. Everything specific to the API — its test database, its migration commands — lives in apps/api/CLAUDE.md and loads only when Claude touches API files.

## Example 4: a personality layer under the engineering rules.

        CLAUDE.md configures behavior, and how Claude communicates with you is behavior. Append a personality-matched section after your engineering rules — this one is condensed from the [ISTJ tuning](https://agent-tune.com/library/mbti/istj):

## Communication style (ISTJ)
The user identifies as ISTJ. Adjust your interaction style accordingly.

- Be precise, not approximate. "27 minutes" beats "around 30 minutes" when you know. Specifics build trust.
- Cite sources. "Per [spec/doc/standard]" beats "I think." When you can't point to authority, flag it as speculation.
- Sequential structure: step 1, step 2, step 3 — numbered, with dependencies and end-states.
- Verify against precedent. Novel approaches need justification, not just enthusiasm.
- Before starting a task, confirm what "done" means.
- When unsure, prefer the documented standard.

Different type, different rules — the [INTJ file](https://agent-tune.com/library/mbti/intj) bans hedging and permission-asking; the [ENFP file](https://agent-tune.com/library/mbti/enfp) is nearly its inverse. All 43 are free in the [library](https://agent-tune.com/library/), and if you don't know your type, the [free MBTI test](https://agent-tune.com/tests/mbti) takes about five minutes. The full argument for why this layer belongs in an engineering file is in [coding agent personality](https://agent-tune.com/guides/coding-agent-personality).

## The principles: short and imperative beats long and narrative.

- Imperative, not narrative. "Run npm test after every change" outperforms a paragraph about how much your team values quality. Claude follows commands; it skims essays.
- Constraints the code can't express. The best CLAUDE.md lines are things no amount of code-reading reveals: "the staging DB is shared — never run destructive migrations," "packages/config changes need an RFC." Rationale, pitfalls, and politics — not structure.
- Don't duplicate what's greppable. Directory trees, dependency lists, function inventories — Claude can read the repo. Every greppable line in CLAUDE.md is context spent twice, and it goes stale the day someone refactors.
- Stay under ~200 lines. Anthropic's own guidance: longer files consume more context and reduce adherence. If it's growing, split it — per-package files in a monorepo, or path-scoped rules in .claude/rules/.
- Maintain it like code. A stale instruction is worse than none — Claude will follow it. When Claude makes the same mistake twice, add a line; when a rule stops being true, delete it. Review it in the same PRs that change what it describes.

## The mistakes that make Claude ignore the file.

- The wiki dump. Pasting your architecture doc into CLAUDE.md. Adherence drops as length grows; the ten rules that matter drown in forty paragraphs of background.
- Contradictions. "Prefer small PRs" in the global file, "batch related changes" in the project file. Claude picks one arbitrarily. Audit across all three locations.
- Vague virtues. "Write clean, maintainable code" changes nothing. If you can't verify compliance, Claude can't either.
- Treating it as enforcement. CLAUDE.md is context, not a gate. If something must always happen — lint before commit, no pushes to main — use a hook or a permission rule. Prose is for guidance; tooling is for guarantees.
- Personal preferences in the team file. Your sandbox URL and your ISTJ communication layer belong in CLAUDE.local.md or ~/.claude/CLAUDE.md — not in the checked-in file your teammates inherit.

Don't want to write it by hand? The [free CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator) builds a complete file — commands, conventions, and a personality layer matched to your type — ready to paste. And [coding agent personality](https://agent-tune.com/guides/coding-agent-personality) covers the same pattern for Cursor, Copilot, and AGENTS.md.

## Questions people ask.

            Does Claude Code read AGENTS.md?

            No — Claude Code reads CLAUDE.md, not AGENTS.md. If your repo already uses AGENTS.md for other agents, create a CLAUDE.md containing the import line @AGENTS.md so both tools share one instruction set, or symlink CLAUDE.md to AGENTS.md. You can add Claude-specific rules below the import.

            How long should a CLAUDE.md be?

            Under about 200 lines per file — that's Anthropic's own guidance. Longer files consume more context and measurably reduce adherence. If yours is growing past that, split it: per-package CLAUDE.md files in a monorepo load on demand, and path-scoped rules in .claude/rules/ load only when Claude touches matching files.

            What's the difference between CLAUDE.md, CLAUDE.local.md, and ~/.claude/CLAUDE.md?

            Scope. ~/.claude/CLAUDE.md is global — every project, just you. ./CLAUDE.md is the project file, checked in and shared with the team. ./CLAUDE.local.md is project-specific but personal — add it to .gitignore. All of them load together, broadest first, so project instructions appear after (and can override) your global ones.

            Do CLAUDE.md files in subdirectories get loaded?

            Yes, but on demand — not at launch. A CLAUDE.md in a subdirectory loads when Claude reads files in that directory. That's the mechanism behind the monorepo pattern: a thin root file plus a CLAUDE.md per package, each paying its context cost only when its package is actually being worked on.

            Is Claude guaranteed to follow CLAUDE.md?

            No. It's context, not enforcement — Claude reads it and tries to comply, but vague or conflicting instructions get dropped. Specific, imperative, short files get followed most reliably. For rules that must always hold — lint before commit, never touch production — use Claude Code hooks or permission settings instead of prose.

            Should personality instructions go in CLAUDE.md?

            Yes, if you work with Claude Code daily — how it communicates with you is behavior worth configuring. Put the layer in CLAUDE.local.md or ~/.claude/CLAUDE.md rather than the checked-in team file, since it's personal. The library has 43 tuning files to condense from, and the generator builds the section for you.

## Keep going.

          [GuideHow to change Claude Code's personality (output styles)](https://agent-tune.com/guides/claude-code-personality)
          [ToolFree CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator)
          [GuideGive your coding agent a personality](https://agent-tune.com/guides/coding-agent-personality)
          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
          [LibraryISTJ tuning — the Inspector](https://agent-tune.com/library/mbti/istj)
          [TestsFind your type — free MBTI test](https://agent-tune.com/tests/mbti)
          [ResearchExploratory research and methodology limits](https://agent-tune.com/research)
