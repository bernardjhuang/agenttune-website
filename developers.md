# AgentTune for Developers

Generate portable AI coding-agent configuration files from developer workflow preferences.

## What it does

AgentTune Developer Pack turns a short engineering workflow questionnaire into editable Markdown config files for the AI coding tools developers already use.

Generated outputs include:

- `CLAUDE.md` for Claude Code
- `AGENTS.md` for Codex and OpenAI-style agents
- `.cursor/rules/agenttune.mdc` for Cursor
- `chatgpt-custom-instructions.md`
- `claude-project-instructions.md`
- `gemini-gem-instructions.md`
- `copilot-instructions.md`
- `README.md` install guide

## Positioning

Stop re-explaining how you want AI agents to code.

## Privacy

- No repo access required
- No GitHub OAuth
- No code upload
- No secrets requested
- Generated files are editable Markdown

## Questionnaire dimensions

- Primary tools, up to 3
- Agent autonomy
- Planning threshold
- Testing protocol
- Refactor scope
- Dependency policy
- Architecture style
- Explanation depth
- Output format
- Ambiguity handling
- Code review tone

## Product

- URL: https://agent-tune.com/developers
- Build flow: https://agent-tune.com/dev/assessment
- Price: $19 one-time
- Team setup call: mailto:hello@agent-tune.com?subject=Team%20AgentTune%20setup

## Architecture

Developer Pack separates preference logic from file formatting:

1. Questionnaire answers map to a compact Core Dev Profile.
2. Deterministic templates render target-specific files.
3. The unlocked page highlights the user's selected primary tools first and keeps other exports as bonus files.

This keeps Cursor frontmatter, AGENTS.md structure, and Claude Code instructions stable instead of asking an LLM to hallucinate eight files at once.
