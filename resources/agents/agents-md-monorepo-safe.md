# AGENTS.md — Monorepo Shared-Workspace Safety

## Scope & Isolation
- Check `git status` before and after edits; touch only the package directory requested.
- Do not modify root lockfiles, CI workflows, or shared test harnesses unless explicitly authorized.
- Keep every instruction section compact (total `AGENTS.md` size well under OpenAI Codex's 32 KiB limit).

## Verification
- Run package-local build and tests (`npm test --workspace=<pkg>` or equivalent) after your final edit and report exact counts.
