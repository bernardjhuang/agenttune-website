Source: https://agent-tune.com/guides/how-to-work-with-me-readme-ai-template
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Workplace & AI

# How to Work With Me README template (that works for humans and AI).

By Bernard Huang · Updated November 17, 2026

Write your communication user manual once—drop the top half in Notion or Slack for teammates, and paste the bottom half into CLAUDE.md, AGENTS.md, or ChatGPT.

**Quick answer:** A clear 'How to Work With Me' README answers five questions on one page: (1) how you want updates structured, (2) how you want pushback delivered, (3) when to act vs check in first, (4) how to flag uncertainty or bad news, and (5) your default habits. Build yours in 60 seconds at agent-tune.com/tools/how-to-work-with-me or copy one of the templates below.

## Why one personal README now serves two audiences.

What a new teammate needs on week one matches what Claude Code or ChatGPT needs on turn one:

| Section | What it tells human teammates | What it tells ChatGPT / Claude / AGENTS.md |
| --- | --- | --- |
| Default format | "Send a 3-line Slack TL;DR above any long doc." | "Lead with the direct conclusion in sentence one before supporting detail." |
| Pushback &amp; disagreement | "Challenge my plan early before writing code." | "Critique weak assumptions before implementing; cite concrete tradeoffs." |
| Autonomy vs. check-ins | "Ship reversible fixes; flag schema changes first." | "Execute reversible steps directly; ask before destructive or cross-boundary changes." |
| Bad news &amp; uncertainty | "Surface blockers on day one, even without a fix yet." | "Flag material uncertainty and failed checks immediately instead of guessing." |

Want to build yours from guided prompts? Open our free [**How to Work With Me Card Builder →**](https://agent-tune.com/tools/how-to-work-with-me).

## Template 1: Engineering / IC README (GitHub, Notion & AGENTS.md).

```markdown
# How to work with [Name]

## Communication defaults
- Lead with the conclusion, broken test, or decision needed in the first two lines.
- Prefer async written threads with concrete links/repros over unscheduled calls.
- Show the mechanism ('why it broke'), not just the patch.

## Feedback & code review
- Be direct and specific. Point straight at race conditions, missing invariants, or simpler designs—no compliment sandwich needed.
- Distinguish blocking correctness issues ('must fix') from subjective style nits ('nit:').

## Decision making & autonomy
- Reversible changes: make the call, note your assumption, and ship.
- One-way doors (schema migrations, public APIs, auth/billing): align on a 5-line design note before coding.
```

## Template 2: Product / Manager README (Slack, Notion & ChatGPT/Claude).

```markdown
# How to work with [Name]

## How I read updates
- Start with status (On track / At risk / Blocked) and the single biggest risk.
- When proposing a decision, bring 2–3 options, the tradeoff that separates them, and your recommended pick.

## Where to push back on me
- When I brainstorm out loud, treat ideas as hypotheses—not top-down mandates. Tell me if a quick idea displaces higher-priority roadmap work.

## Meetings & async
- If an update fits in five bullets, post it async. Save live time for unresolved tradeoffs and customer/team context.
```

## Template 3: The portable AI-ready block (CLAUDE.md, AGENTS.md, Soul.md).

Paste this compact block into `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, ChatGPT Custom Instructions, or Meta Muse `Soul.md`:

```markdown
## Working with me

- Lead with the outcome, answer, or blocker in sentence one.
- Default to clear prose; use bullets or tables when comparing 3+ options or listing sequential steps.
- Push back directly when my framing has a flaw or cleaner alternative, and state the tradeoff.
- Proceed on reversible steps by stating your assumption; pause and ask when missing context materially changes scope or risk.
- Flag material uncertainty explicitly rather than guessing.
```

Not sure which style fits you best? Take our 3-minute [free DISC workplace test](https://agent-tune.com/tests/disc) or build rule-by-rule in the [Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder).

## Questions people ask.

### What should you leave out of a 'How to Work With Me' README?

Leave out excuses for bad behavior ('I'm blunt so don't take it personally'), rigid personality horoscope labels that box teammates in, and after-hours response expectations disguised as personal quirks. Good READMEs lower friction for collaborators rather than shifting emotional labor onto them.

### How long should a personal 'How to Work With Me' document be?

Keep the human version to 150–300 words (one screen in Notion or Slack) and the AI agent version to 6–12 bullet lines so neither teammates nor language models skim past what matters.

### Can I generate a 'How to Work With Me' card without taking a personality test?

Yes. Both agent-tune.com/tools/how-to-work-with-me and /tools/communication-preferences-builder build plain-English Markdown directly from your answers—zero personality test or email required.

### Where should I save the AI version of my 'How to Work With Me' rules?

Save personal communication defaults globally—in ChatGPT Custom Instructions, Claude Profile Preferences, Meta Muse Soul.md, ~/.claude/CLAUDE.md, or ~/.codex/AGENTS.md—so shared team repos only contain project conventions.

## What changed.

- November 11, 2026 Published with dual human + AI README templates for engineers, managers, and cross-agent instruction files.

## Sources.

- [AgentTune Tool: How to Work With Me Card Builder](https://agent-tune.com/tools/how-to-work-with-me)

- [AgentTune Tool: Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder)

- [AgentTune Guide: Coding agent personality (CLAUDE.md & AGENTS.md)](https://agent-tune.com/guides/coding-agent-personality)

## Keep going.

- [Free browser tool: How to Work With Me card builder](https://agent-tune.com/tools/how-to-work-with-me)
- [Free browser tool: Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder)
- [Guide: Free DISC assessment (no email): 4 workplace styles & 12 blends](https://agent-tune.com/guides/free-disc-assessment-guide-work-ai)
- [Guide: AGENTS.md, CLAUDE.md & Cursor rules: add AI personality](https://agent-tune.com/guides/coding-agent-personality)
- [Guide: AgentTune MCP & portable AI preferences across every agent](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
