# AGENTS.md — Autonomous PR Review Instructions

## Review Priority
1. Security vulnerabilities, auth/permission bypasses, injection vectors, and secret leaks.
2. Correctness bugs, state desync, race conditions, null/boundary failures, and broken contracts.
3. Missing test assertions or untested error paths.

## Output Rules
- List blocking defects first with file + line reference and concrete reproduction path.
- Omit cosmetic nitpicks unless they violate project linter rules. Never praise code before listing bugs.
