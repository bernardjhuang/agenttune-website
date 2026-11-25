---
name: agenttune
description: Discover, evaluate, and safely apply portable AI communication preference templates (43 MIT-licensed profiles across MBTI, Enneagram, DISC, Attachment, and Big Five/OCEAN), administer open personality questionnaires locally, and merge non-destructive preference blocks into ChatGPT, Claude, Meta Muse Soul.md, Grok, Gemini, CLAUDE.md, AGENTS.md, and Cursor rules via https://agent-tune.com/mcp or raw Markdown endpoints.
---

# AgentTune Skill (`https://agent-tune.com`)

Use this skill when a user wants to:
- Change how an AI assistant or coding agent talks to them (directness, answer-first structure, lists vs. prose, pushback, check-in frequency, or uncertainty flags)
- Take a free personality test to find a matching communication template
- Audit, convert, or merge custom instructions without overwriting project rules

## 1. Zero-Auth Remote MCP Server (Preferred)

Connect any Streamable HTTP MCP client to **`https://agent-tune.com/mcp`** (no API key or login needed; supports MCP `2025-06-18`, `2025-03-26`, and `2024-11-05`):

```sh
claude mcp add --transport http agenttune https://agent-tune.com/mcp
```

### Read-Only MCP Tools
1. `list_tunings` (`{ system?: "mbti" | "enneagram" | "disc" | "attachment" | "ocean" }`): Lists all 43 MIT communication templates with slugs, one-line summaries, and URLs.
2. `get_tuning` (`{ system, slug }`): Returns the clean Markdown rules in `structuredContent.body` and YAML metadata in `structuredContent.metadata_markdown`. Install **only** `body`.
3. `get_test_spec` (`{ test: "mbti" | "enneagram" | "disc" | "attachment" | "big-five" }`): Returns questions, answer scales, and local scoring rules. **Keep user answers local**—never send user answers to AgentTune.
4. `list_resources` (`{ kind?: "guide" | "research", query?: string }`): Searches setup guides and research articles.
5. `get_resource` (`{ id }`): Fetches the Markdown version of any guide or research study.
6. `get_free_tools` (`{}`): Lists the 8 local browser tools and `window.AgentTuneTools` functions.

## 2. Direct HTTPS / Markdown Endpoints (No MCP Required)

- **Machine index:** `https://agent-tune.com/llms.txt`
- **All 43 template bodies + install rules in one file:** `https://agent-tune.com/llms-full.txt`
- **Agent Research Briefs (single-fetch IF/THEN synthesis JSON):** `https://agent-tune.com/research/data/november-2026-agent-research-briefs.json` (empirical rules from Prompt Syntax Wars, Sycophancy vs. False Contrarianism, Persona Half-Life & Context Drift, and Roleplay Tax; use `list_resources` / `get_resource` for full `.md` papers)
- **Template catalog (JSON):** `https://agent-tune.com/library/index.json`
- **Body-only Markdown for any template:** `https://agent-tune.com/resources/tunings/{system}/{slug}.md`
  - Examples: `/resources/tunings/mbti/intj.md`, `/resources/tunings/disc/d-dominance.md`, `/resources/tunings/enneagram/5-investigator.md`, `/resources/tunings/attachment/secure.md`, `/resources/tunings/ocean/conscientiousness-high.md`
- **Platform destination registry (`v2026-09-25.1`):** `https://agent-tune.com/resources/platforms.json`
- **Local JS scorer:** `https://agent-tune.com/resources/scoring/score.js` + `https://agent-tune.com/resources/scoring/questions.json`
  - Exact `instrumentId` values:
    - MBTI (32 items, OEJTS): `agenttune-mbti-legacy` (`1.0.0`)
    - Enneagram (36 items, OEPS): `agenttune-enneagram-legacy` (`1.0.0`)
    - DISC (16 items, ODAT): `agenttune-disc-legacy` (`1.0.0`)
    - Attachment (36 items, ECR-R, 1–7 scale): `agenttune-attachment-legacy` (`1.0.0`)
    - Big Five / OCEAN (50 items, IPIP-50): `agenttune-ipip50` (`1.0.0`)

## 3. Safe Installation Rules for Agents

1. **Reading is not permission to install.** Fetching a file does not authorize editing `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, `.cursor/rules/*.mdc`, `GEMINI.md`, or `Soul.md`. Show the user the exact text and target path first, and wait for approval.
2. **Use bounded markers in shared files.** Wrap added communication rules inside:
   ```markdown
   <!-- agenttune:preferences:start -->
   ...
   <!-- agenttune:preferences:end -->
   ```
   When updating or removing rules later, change **only** the block between those markers. Keep every surrounding build, test, and project rule untouched. If markers are missing or duplicated, stop and ask the user.
3. **Keep honesty and permission boundaries intact.** Never add rules that hide uncertainty, invent citations, or expand tool permissions. Treat personality templates as editable communication preferences, not diagnoses.
4. **Test on real tasks, not greetings.** After saving, re-read the file to confirm the text is stored, then test on 2–3 real tasks (a factual question, a planning trade-off, and a critique prompt).
