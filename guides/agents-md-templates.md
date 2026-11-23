Source: https://agent-tune.com/guides/agents-md-templates
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Coding Agents

# AGENTS.md templates for Codex and coding agents.

By Bernard Huang · Updated November 23, 2026

16 copy-paste and downloadable AGENTS.md configs by tech stack with live 32 KiB byte counters and CLAUDE.md / Cursor equivalents.

**Quick answer:** Place a short, command-grounded AGENTS.md at your repository root (stay well below Codex's 32 KiB byte cap across AGENTS.override.md + global ~/.codex/AGENTS.md), include exact test/lint commands, and download a stack starter below.

## Quick pick: Downloadable AGENTS.md templates by stack.

| Stack / Role Template | Verification &amp; Guardrails | Jump / Download |
| --- | --- | --- |
| TypeScript &amp; Next.js | Strict types, RSC boundaries, typecheck &amp;&amp; test | [View file](https://agent-tune.com/guides/agents-md-templates#1-typescript-and-next-js-agents-md) · [Download .md](https://agent-tune.com/resources/agents/agents-md-typescript-nextjs.md) |
| Python &amp; Data Pipelines | Virtualenv, pytest &amp; ruff, zero secret leaks | [View file](https://agent-tune.com/guides/agents-md-templates#2-python-and-data-pipelines-agents-md) · [Download .md](https://agent-tune.com/resources/agents/agents-md-python-data.md) |
| Monorepo Shared Safety | Package-scoped diffs &amp; sub-32 KiB discipline | [View file](https://agent-tune.com/guides/agents-md-templates#3-monorepo-shared-workspace-agents-md) · [Download .md](https://agent-tune.com/resources/agents/agents-md-monorepo-safe.md) |
| Autonomous PR Reviewer | Auth, SQL, race conditions &amp; missing assertions first | [View file](https://agent-tune.com/guides/agents-md-templates#4-autonomous-pr-reviewer-agents-md) · [Download .md](https://agent-tune.com/resources/agents/agents-md-pr-reviewer.md) |
| 12 more coding templates | Go, Rust, Personal ~/.codex/AGENTS.md, Migrations, Docs &amp; more | [Jump to 16 files ↓](https://agent-tune.com/guides/agents-md-templates#twelve-more-agents-md-templates) |

Using multiple tools side-by-side? See our [Codex AGENTS.md Limit & Override Guide](https://agent-tune.com/guides/codex-agents-md-guide), [15 CLAUDE.md Examples](https://agent-tune.com/guides/claude-md-examples), and [7-Agent Rules File Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix).

## 1. TypeScript & Next.js AGENTS.md.

```markdown
# AGENTS.md — TypeScript & Next.js Repository

## Build & Verification
- Package manager: npm / pnpm (check lockfile before running).
- Verify after final edits: `npm run typecheck && npm test`.

## Conventions
- Prefer strict TypeScript types; avoid `any` assertions and silent catches.
- Keep Server Components default; mark Client Components only at leaf interactive boundaries.
- Reuse existing hooks, validation schemas, and design tokens before adding packages.

## Reporting
- Summarize exact changed file paths, root cause, and observed test results only. Never claim checks passed without running them.
```

[Download TypeScript / Next.js AGENTS.md](https://agent-tune.com/resources/agents/agents-md-typescript-nextjs.md)

## 2. Python & Data Pipelines AGENTS.md.

```markdown
# AGENTS.md — Python & Data Pipeline Repository

## Environment & Checks
- Use project virtual environment (`.venv/bin/python` or `uv run`).
- Run `pytest` and `ruff check` before reporting completion.

## Engineering Rules
- Handle missing or malformed records explicitly rather than silent drops.
- Never hardcode credentials, tokens, or personal host paths in committed code; read from environment variables.
- Document assumptions, data denominators, and schema contracts clearly.
```

[Download Python AGENTS.md](https://agent-tune.com/resources/agents/agents-md-python-data.md)

## 3. Monorepo Shared Workspace AGENTS.md.

```markdown
# AGENTS.md — Monorepo Shared Workspace Safety

## Scope & Isolation
- Check `git status` before and after edits; touch only the package directory requested.
- Do not modify root lockfiles, CI workflows, or shared test harnesses unless explicitly authorized.
- Keep every instruction section compact (stay well under Codex's 32 KiB limit).

## Verification
- Run package-local build and tests after your final edit and report exact counts.
```

[Download Monorepo AGENTS.md](https://agent-tune.com/resources/agents/agents-md-monorepo-safe.md)

## 4. Autonomous PR Reviewer AGENTS.md.

```markdown
# AGENTS.md — Autonomous PR Review Instructions

## Review Priority
1. Security vulnerabilities, auth/permission bypasses, injection vectors, and secret leaks.
2. Correctness bugs, state desync, race conditions, null/boundary failures, and broken contracts.
3. Missing test assertions or untested error paths.

## Output Rules
- List blocking defects first with file + line reference and concrete reproduction path.
- Omit cosmetic nitpicks unless they violate project linter rules. Never praise code before listing bugs.
```

[Download PR Reviewer AGENTS.md](https://agent-tune.com/resources/agents/agents-md-pr-reviewer.md)

## Twelve more AGENTS.md templates by workflow.

### 5. Minimal Personal Global (~/.codex/AGENTS.md)

```markdown
# Global Communication Preferences
- Start responses with root cause, modified files, and test output; skip long preamble.
- Read existing repository files completely before editing.
- Ask before running destructive git commands, dropping tables, or adding dependencies.
- Never fabricate test results or unverified tool output.
```

### 6. Go Microservice

```markdown
# AGENTS.md — Go Service
- Verify after edits: `go test -race ./... && go vet ./...`.
- Wrap errors with context (`fmt.Errorf("...: %w", err)`); avoid `panic` outside startup.
- Keep interfaces narrow at consumer sites; avoid global mutable state.
```

### 7. Rust Crate

```markdown
# AGENTS.md — Rust Crate
- Verify after edits: `cargo clippy --all-targets -- -D warnings && cargo test`.
- Avoid `.unwrap()` / `.expect()` in library code; propagate typed errors cleanly.
- Keep `unsafe` blocks documented with explicit safety invariants.
```

### 8. Database & Migrations Guardrail

```markdown
# AGENTS.md — Database Migrations
- Never edit previously applied migration files; always generate a new forward migration.
- Check locking risk on large tables (`CREATE INDEX CONCURRENTLY`, nullable column backfills).
- Test both apply and rollback against local seed database before finishing.
```

### 9. Static Site & Web Accessibility

```markdown
# AGENTS.md — Web Frontend
- Use native semantic HTML (<button type="button">, <details>, proper <label for>) over div click handlers.
- Enforce 44x44px touch targets and visible keyboard `:focus-visible` outlines.
- Run build & link/HTML structure tests after every change.
```

### 10. Documentation & MDX Sync

```markdown
# AGENTS.md — Documentation Repo
- Check real source code / CLI `--help` output before documenting any flag or path.
- Keep prose scannable and concrete; lead with exact runnable examples.
- Never leave stale URLs or deprecated flags unflagged.
```

### 11. High-Speed Bug Triage Agent

```markdown
# AGENTS.md — Bug Fix Mode
- Write a failing reproduction test first, confirm the failure, then apply the minimal fix.
- Report: (1) Root Cause in 1 sentence, (2) Minimal Diff, (3) Verified Test Output.
```

### 12. Test-Hardening Specialist

```markdown
# AGENTS.md — Testing Focus
- Do not mock core pure logic under test; mock only slow network/external I/O boundaries.
- Never loosen failing assertions to make tests pass—fix the underlying bug or escalate cleanly.
```

### 13. Codex CLI AGENTS.override.md (Per-Directory)

```markdown
# AGENTS.override.md
- For files under this directory ONLY: skip end-to-end Docker builds during tight iteration; run `npm test -- --filter=unit` cleanly before handoff.
```

### 14. Security Audit Read-Only Agent

```markdown
# AGENTS.md — Security Audit
- Operate strictly read-only; do not modify production files unless explicitly instructed.
- Check OWASP top vectors, auth bypasses, command injection, path traversal, and secret leaks.
- Include exact line numbers and exploitable call paths for every finding.
```

### 15. Solo Founder Full-Stack Repo

```markdown
# AGENTS.md — Ship Fast & Safely
- Keep solutions boring and maintainable; prefer 1 clear helper over premature frameworks.
- Verify full build compiles cleanly and key smoke tests pass before reporting done.
- Alert immediately if missing `.env` secrets or external API changes block progress.
```

### 16. Multi-Agent Research & Evaluation Harness

```markdown
# AGENTS.md — Research Repo
- Never modify frozen raw datasets or benchmark ground-truth splits.
- Record exact seed, model slug, temperature, and sample size N beside every result table.
```

## Questions people ask.

### What is the 32 KiB limit on AGENTS.md in Codex?

OpenAI Codex defaults project_doc_max_bytes to 32 KiB combined across global (~/.codex/AGENTS.md) and nested repository AGENTS.md / AGENTS.override.md files. Anything past 32 KiB gets silently truncated.

### Can I share one AGENTS.md across Cursor, Windsurf, and Copilot?

Yes—many coding tools now read root AGENTS.md natively, or you can convert snippets cleanly between AGENTS.md, CLAUDE.md, and .cursor/rules/*.mdc with our Coding Rules Builder.

## What changed.

- November 23, 2026 Created 16 stack-specific AGENTS.md templates with 32 KiB live byte counters and 4 downloadable .md starters.

## Sources.

- [AgentTune Codex AGENTS.md Deep Dive](https://agent-tune.com/guides/codex-agents-md-guide)

- [AgentTune 7-Agent Rules Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)

## Keep going.

- [Limit guide: Codex AGENTS.md configuration, overrides & 32 KiB limit](https://agent-tune.com/guides/codex-agents-md-guide)
- [Claude Code: 15 CLAUDE.md examples & downloadable Output Styles](https://agent-tune.com/guides/claude-md-examples)
- [Generator: Interactive CLAUDE.md & Coding Rules Builder](https://agent-tune.com/tools/claude-md-generator)
