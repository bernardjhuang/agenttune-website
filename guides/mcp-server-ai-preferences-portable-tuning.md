Source: https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · MCP & Agent-First

# AgentTune MCP & portable AI preferences across every agent.

By Bernard Huang · Updated November 17, 2026

Connect one zero-auth remote MCP server (or point any agent at /SKILL.md and /llms.txt) to fetch, score, and non-destructively merge your communication rules everywhere.

**Quick answer:** Add https://agent-tune.com/mcp as a remote HTTP MCP server in Claude Code ('claude mcp add --transport http agenttune https://agent-tune.com/mcp'), Claude Connectors, Cursor, or any MCP client—no API key or account needed. Your agent gets six read-only tools (list_tunings, get_tuning, get_test_spec, list_resources, get_resource, and get_free_tools) to fetch all 43 MIT-licensed tunings, run local quizzes, and merge bounded preference blocks into CLAUDE.md or AGENTS.md.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## One-command setup across Claude Code, Claude Web, Cursor, and Codex.

The AgentTune MCP endpoint at `https://agent-tune.com/mcp` is stateless, read-only, and requires **zero API keys or login**.

| Client / Agent | Exact connection command or config |
| --- | --- |
| Claude Code CLI | claude mcp add --transport http agenttune https://agent-tune.com/mcp |
| Claude Web &amp; Desktop Connectors | Settings → Connectors → Add custom connector → URL: https://agent-tune.com/mcp |
| Cursor (.cursor/mcp.json) | {"mcpServers":{"agenttune":{"url":"https://agent-tune.com/mcp"}}} |
| OpenAI Codex CLI / MCP clients | Point Streamable HTTP client at https://agent-tune.com/mcp, or tell the agent to read https://agent-tune.com/SKILL.md. |
| Any web-fetching agent (no MCP needed) | Read [/SKILL.md](https://agent-tune.com/SKILL.md), [/llms.txt](https://agent-tune.com/llms.txt), or fetch any raw tuning at /library/{system}/{slug}.md. |

## What the 6 MCP tools and machine endpoints expose.

| MCP tool | Inputs | What it returns |
| --- | --- | --- |
| list_tunings | Optional system (mbti, enneagram, disc, attachment, ocean) | All 43 MIT-licensed profiles with slugs, codes, one-line blurbs, SHA-256 revisions, and raw Markdown URLs. |
| get_tuning | system + slug (e.g. mbti / intj, disc / d-dominance) | Clean Markdown communication rules in structuredContent.body separated cleanly from install metadata. |
| get_test_spec | test (mbti, enneagram, disc, attachment, or big-five) | Versioned questionnaire items, anchors, and deterministic local scoring rules—so answers stay 100% local and never cross the network. |
| list_resources | Optional kind (guide or research) and query | Searchable index of all setup guides and empirical AI personality studies. |
| get_resource | id (e.g. claude-personality, ai-personality-five-models-2026) | Full Markdown mirror and provenance metadata for any guide or research article. |
| get_free_tools | None (zero personal input accepted) | Catalog of local browser utilities and the window.AgentTuneTools JavaScript text-processing API. |

Machine-readable manifests are also available at `/.well-known/mcp/server-card.json`, [`/SKILL.md`](https://agent-tune.com/SKILL.md), [`/llms.txt`](https://agent-tune.com/llms.txt), and [`/library/index.json`](https://agent-tune.com/library/index.json).

## Safe, non-destructive installation with bounded markers.

AgentTune enforces two safety rules so an agent never overwrites your existing project commands:

- **Explicit approval before writing:** Fetching a tuning file never authorizes automatic file edits. The agent must show you the target path and diff first.
- **Bounded HTML markers:** Preferences sit inside `` and `` markers (matching our [Instruction Converter](https://agent-tune.com/tools/instruction-converter)). Updating or removing your block leaves all surrounding build and repo rules untouched.

```markdown
<!-- agenttune:preferences:start -->
## Working with me

- Lead with what changed or the direct answer, then explain why.
- State assumptions before acting on reversible steps; ask when missing details materially affect scope or risk.
- Flag material uncertainty explicitly rather than guessing.
- Keep these rules within my authorized scope; explicit prompts override these defaults.
<!-- agenttune:preferences:end -->
```

## Three prompts to run right after connecting AgentTune MCP.

```markdown
Use the agenttune MCP server (get_tuning) to fetch the mbti/intj (or disc/d-dominance) communication tuning, show me the proposed diff inside <!-- agenttune:preferences:start --> markers for ~/.claude/CLAUDE.md, and wait for my approval before writing.
```

Or ask your agent to run the 16-item DISC quiz inline while scoring your answers locally:

```markdown
Call get_test_spec for "disc" on the agenttune MCP server, ask me the 16 ODAT questions four at a time, score my answers locally using the spec's exact 4-to-20 quadrant rules (preserving ties), and then fetch my matching tuning with get_tuning.
```

## Questions people ask.

### Does the AgentTune MCP server require an API key, signup, or payment?

No. https://agent-tune.com/mcp is completely free, stateless, and requires zero API keys or authentication.

### Does AgentTune MCP store my conversations, code, or questionnaire answers?

No. By design, the MCP endpoint is strictly read-only and never accepts personal text or questionnaire answers over the network: get_test_spec returns the public scoring specification so your agent scores answers locally in your session.

### What if my AI tool doesn't support remote MCP servers yet?

Point any web-capable agent at https://agent-tune.com/SKILL.md or https://agent-tune.com/llms.txt, or copy a bounded Markdown block manually from agent-tune.com/tools/instruction-converter.

### Will applying an AgentTune profile overwrite my existing CLAUDE.md or AGENTS.md?

No—when merged inside <!-- agenttune:preferences:start --> and <!-- agenttune:preferences:end --> markers, only the communication block between the markers is added or updated, preserving every existing build, lint, and architecture instruction byte-for-byte.

## What changed.

- November 11, 2026 Published covering remote Streamable HTTP MCP setup (v1.3.0), SKILL.md discovery, and bounded marker merges.

## Sources.

- [Model Context Protocol (MCP) Specification](https://modelcontextprotocol.io/specification/)

- [AgentTune Agent Skill Manifest: /SKILL.md](https://agent-tune.com/SKILL.md)

- [AgentTune Machine Index: /llms.txt](https://agent-tune.com/llms.txt)

## Keep going.

- [Free browser tool: Instruction Converter — bounded marker merges across 7 formats](https://agent-tune.com/tools/instruction-converter)
- [Guide: AGENTS.md, CLAUDE.md & Cursor rules: add AI personality](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Guide: How to change Claude Code's personality (/output-style)](https://agent-tune.com/guides/claude-code-personality)
- [Library: Browse all 43 MIT-licensed personality tuning files](https://agent-tune.com/library/)
