# AGENTS.md — TypeScript & Next.js Repository

## Build & Verification
- Package manager: `npm` / `pnpm` (check lockfile before running).
- Verify after final edits: `npm run typecheck && npm test`.

## Conventions
- Prefer strict TypeScript types; avoid `any` assertions and silent catches.
- Keep Server Components default; mark Client Components (`"use client"`) only at leaf interactive boundaries.
- Reuse existing hooks, validation schemas, and design tokens before adding packages.

## Reporting
- Summarize exact changed file paths, root cause, and observed test results only. Never claim checks passed without running them.
