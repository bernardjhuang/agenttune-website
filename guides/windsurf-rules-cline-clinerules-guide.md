Source: https://agent-tune.com/guides/windsurf-rules-cline-clinerules-guide
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide & Builder · Windsurf & Cline

# Windsurf rules (.windsurf/rules) and Cline (.clinerules): setup, migration, and live builder.

By Bernard Huang · Updated November 20, 2026

Generate properly formatted Windsurf Cascade rules, Cline Plan/Act rules, or unified AGENTS.md files in one click—and keep them synced across IDEs.

**Quick answer:** For Windsurf, store modular Markdown files in .windsurf/rules/ (replacing single-file .windsurfrules) and personal style in Windsurf Global Rules. For Cline, place workspace rules in .clinerules/ (or .cline/rules/)—Cline also auto-reads legacy .windsurfrules and .cursorrules files. To keep multi-agent repos from drifting, anchor shared build/test rules in AGENTS.md.

## Generate your Windsurf, Cline, Cursor, or AGENTS.md file.

Pick your coding agent target, communication posture, stack, and test command to copy or download a bounded rules file cleanly:

Loading interactive coding-agent rules builder…

Enable JavaScript to use the interactive rules builder, or copy the Windsurf and Cline templates below.

## Windsurf vs. Cline rule paths and cross-tool compatibility.

| Tool | Modern workspace path | Legacy / auto-detected files | Global / personal scope |
| --- | --- | --- | --- |
| Windsurf (Cascade) | .windsurf/rules/*.md | .windsurfrules at repo root | Windsurf Global Rules (applies across all workspaces) |
| Cline (VS Code / Forks) | .clinerules/*.md or .cline/rules/ | Natively reads .windsurfrules and .cursorrules too | Cline Global Rules / Custom Instructions panel |
| Cross-tool shared root | AGENTS.md ([7-agent matrix →](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)) | Symlink or import into CLAUDE.md / .clinerules/ | ~/.codex/AGENTS.md, ~/.claude/CLAUDE.md |

## Production Windsurf & Cline templates (stack + Plan/Act discipline).

### 1. Windsurf (.windsurf/rules/coding-standards.md)

```markdown
# Windsurf Cascade Rules

<tech_stack>
- TypeScript strict mode, React, Tailwind CSS
</tech_stack>

<communication_and_verification>
- Lead with root cause, touched file paths, and minimal diff—keep explanations concise.
- Run the test suite after your final edit and report exact command output.
- Never introduce new npm dependencies or refactor unrelated files without asking first.
</communication_and_verification>
```

### 2. Cline (.clinerules/workflow.md)

```markdown
# Cline Plan & Act Workflow Rules

- Plan Mode first: list the exact files you intend to change and the verification command before switching to Act Mode.
- Verification gate: run `npm test` (or the repo's targeted test file) after edits and paste exact pass/fail lines.
- Communication: state blocking bugs and assumptions first; skip polite filler and generic recaps.
- Git hygiene: write concise conventional commit messages when asked to commit.
```

### Migrating legacy .windsurfrules into .clinerules/

```
mkdir -p .clinerules
cp .windsurfrules .clinerules/windsurf-rules.md
```

Already have an existing repo rules file and want to merge your personal communication block safely without deleting build commands? Use our [Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter).

## Questions people ask.

### Should I use .windsurfrules or .windsurf/rules/ in Windsurf?

Use .windsurf/rules/*.md for new projects so you can split tech-stack standards, testing gates, and communication style into small, maintainable Markdown files instead of one monolithic .windsurfrules file.

### Does Cline automatically read .windsurfrules or .cursorrules?

Yes. Cline natively detects and loads .windsurfrules and .cursorrules in a repository root alongside its own .clinerules/ directory, making cross-tool migration straightforward.

### Where should I put personal tone preferences so I don't push them to my team's repo?

Put personal verbosity, tone, and explanation style in Windsurf Global Rules or Cline's Global Rules / Custom Instructions settings, and reserve committed .windsurf/rules/ and .clinerules/ files for shared repo standards.

### How do I keep Windsurf, Cline, Cursor, Claude Code, and Codex synced in one repo?

Keep your canonical build, test, and architecture rules in a root AGENTS.md file (under ~200 lines) and let tool-specific rule folders focus only on tool-specific behavior like Cline's Plan/Act gate or Cursor's glob rules.

## What changed.

- November 20, 2026 First published with interactive Windsurf/Cline/Cursor/AGENTS.md rules builder, migration snippet, and Plan/Act templates.

## Sources.

- [Cline Documentation: Custom Instructions & .clinerules](https://docs.cline.bot/)

- [AgentTune Guide: CLAUDE.md vs AGENTS.md vs .cursorrules & Windsurf Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)

- [AgentTune Tool: Instruction Converter & Merger](https://agent-tune.com/tools/instruction-converter)

## Keep going.

- [7-Agent Matrix: CLAUDE.md vs AGENTS.md vs .cursorrules, Windsurf & Cline](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Cursor Agent: Cursor Agent Mode & .cursor/rules/*.mdc complete guide](https://agent-tune.com/guides/cursor-agent-mode-rules-mdc-guide)
- [Codex CLI: OpenAI Codex AGENTS.md guide: 32 KiB cap & overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Tool: Instruction Converter & Merger (preserves repo rules)](https://agent-tune.com/tools/instruction-converter)
