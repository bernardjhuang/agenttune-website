Source: https://agent-tune.com/guides/openclaw-soul-md-user-md-identity-md
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide & Builder · OpenClaw

# OpenClaw SOUL.md, IDENTITY.md, and USER.md: templates and live 3-file builder.

By Bernard Huang · Updated November 20, 2026

Generate all three OpenClaw root personality files together—SOUL.md for values and boundaries, IDENTITY.md for visuals, and USER.md for human context.

**Quick answer:** Drop SOUL.md, IDENTITY.md, and USER.md into your OpenClaw workspace root directory so boot hooks load them every session. Keep communication style and hard boundaries in SOUL.md, visual metadata (name, creature, emoji, avatar) in IDENTITY.md, and your timezone, stack, and decision preferences in USER.md—then pair them with AGENTS.md for tool triggers and workflows.

## Build and download your OpenClaw 3-file bundle.

Pick an archetype, customize your agent name and working context, and switch between `SOUL.md`, `IDENTITY.md`, and `USER.md` to copy or download each file locally (everything runs in your browser tab):

Loading interactive OpenClaw builder…

Enable JavaScript to use the interactive 3-file builder, or copy the three starter files below.

## How SOUL.md, IDENTITY.md, USER.md, and AGENTS.md divide responsibility.

| Workspace file | What belongs here | What to keep out |
| --- | --- | --- |
| SOUL.md | Core truths, directness vs. warmth, pushback rules, hard safety boundaries, and continuity habits. | API keys, passwords, temporary task prompts, and visual avatar paths. |
| IDENTITY.md | Agent display name, creature/role label, signature emoji, vibe keywords, and avatar path. | Long behavioral rubrics (which get clobbered if you regenerate visual identity). |
| USER.md | Your name, timezone, active tech stack, decision cadence, and notification boundaries. | Credentials, raw secrets, or reusable agent rules meant for other teammates. |
| AGENTS.md | Operational loops, repo build/test commands, sub-agent routing, and tool workflows. | Personal conversational flavor (keep that in SOUL.md). |

Using Meta Muse alongside OpenClaw? Notice the parallel: Meta Muse uses `Soul.md`, `Identity.md`, and `Memory.md` ([Meta Muse Soul.md guide](https://agent-tune.com/guides/muse-personality)), so your core behavioral bullets transfer straight across both platforms.

## Minimal production-ready SOUL.md template.

Keep `SOUL.md` crisp and checkable—ten clear rules outperform a three-page essay because every line competes for attention on every turn:

```markdown
# SOUL.md - Who You Are

## Core Truths
- Be genuinely helpful, not performatively helpful. Skip "Great question!" and dive into execution.
- Have opinions. Push back with concrete evidence when my plan has a flaw.
- Be resourceful first. Read local files, git logs, and docs before asking basic questions.
- Separate verified tool output from guesses; flag uncertainty plainly.

## Boundaries
- Never leak private credentials or personal files into public channels.
- Ask for explicit confirmation before destructive calls or outbound external messages.
- Tell the user whenever you propose editing SOUL.md.
```

## Verify your OpenClaw files after saving.

- **Start a fresh session** so boot hooks load the newly saved `SOUL.md`, `IDENTITY.md`, and `USER.md` cleanly.
- **Run a premise-check probe:** Ask a flawed question (e.g., &ldquo;Raising a price from $80 to $100 is a 20% increase—draft one sentence stating that&rdquo;) and verify the agent corrects it to **25%** directly without flattery.
- **Audit conflicts:** Paste your combined `SOUL.md` and `AGENTS.md` into our [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to catch duplicate or contradictory rules.

## Questions people ask.

### Where do SOUL.md, IDENTITY.md, and USER.md go in OpenClaw?

Place all three Markdown files in your OpenClaw workspace root directory alongside AGENTS.md so session boot hooks load them automatically on startup.

### Can I reuse a Meta Muse Soul.md inside OpenClaw?

Yes. Both Meta Muse and OpenClaw read plain-Markdown behavioral rules from Soul.md / SOUL.md. Keep Meta Muse's Memory.md facts inside OpenClaw's USER.md and daily memory logs.

### What is the difference between SOUL.md and AGENTS.md?

SOUL.md defines how the agent thinks, speaks, pushes back, and enforces personal boundaries. AGENTS.md defines operational loops, build/test commands, and workflow triggers.

### How long should an OpenClaw SOUL.md file be?

Aim for 15 to 35 concise lines (~600 to 1,800 characters). Checkable behavioral rules persist far more reliably across multi-step sessions than long narrative backstories.

## What changed.

- November 20, 2026 First published with interactive 3-file OpenClaw SOUL.md, IDENTITY.md, and USER.md builder and verification checklist.

## Sources.

- [OpenClaw Documentation: Workspace Identity & SOUL.md](https://openclaw.ai/)

- [AgentTune Guide: Meta Muse Soul.md Templates](https://agent-tune.com/guides/muse-soul-md-templates)

- [AgentTune Guide: CLAUDE.md vs AGENTS.md vs .cursorrules Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)

## Keep going.

- [Templates: 20 Meta Muse Soul.md templates (portable to OpenClaw)](https://agent-tune.com/guides/muse-soul-md-templates)
- [Interactive Tuner: 6-Slider AI Personality Tuner → Soul.md export](https://agent-tune.com/guides/ai-personality-slider-tuner-vs-custom-instructions)
- [Matrix: CLAUDE.md vs AGENTS.md vs .cursorrules & Windsurf matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Free browser tool: Instruction Checker — catch conflicting rules](https://agent-tune.com/tools/instruction-checker)
