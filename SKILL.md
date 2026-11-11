---
name: agenttune
description: Discover, evaluate, and safely apply portable AI communication preference templates (43 MIT-licensed profiles across MBTI, Enneagram, DISC, Attachment, and Big Five/OCEAN), administer open personality questionnaires locally, and merge non-destructive preference blocks into ChatGPT, Claude, Meta Muse Soul.md, Grok, Gemini, CLAUDE.md, AGENTS.md, and Cursor rules via https://agent-tune.com/mcp or raw Markdown endpoints.
---

# AgentTune Skill (`https://agent-tune.com`)

Use this skill when a user wants to customize how an AI assistant or coding agent communicates with them (directness, opening structure, prose vs. lists, pushback/anti-sycophancy, check-in pacing, or uncertainty reporting), take an open personality questionnaire to discover a starting template, or audit existing custom instructions.

## 1. Zero-Auth Remote MCP Server (Preferred)

Connect any Streamable HTTP MCP client directly to **`https://agent-tune.com/mcp`** (no API key, signup, or session token required; supports MCP `2025-06-18`, `2025-03-26`, and `2024-11-05`):

```sh
claude mcp add --transport http agenttune https://agent-tune.com/mcp
```

### Available Read-Only MCP Tools
1. `list_tunings` (`{ system?: "mbti" | "enneagram" | "disc" | "attachment" | "ocean" }`): Lists all 43 MIT-licensed communication templates with slugs, codes, one-line blurbs, and raw URLs.
2. `get_tuning` (`{ system, slug }`): Returns clean Markdown rules in `structuredContent.body` separated from YAML provenance metadata (`structuredContent.metadata_markdown`). Apply **only** `body`, never metadata.
3. `get_test_spec` (`{ test: "mbti" | "enneagram" | "disc" | "attachment" | "big-five" }`): Returns versioned items, Likert anchors, and deterministic scoring instructions. **Keep user answers local**—never transmit user answers to AgentTune.
4. `list_resources` (`{ kind?: "guide" | "research", query?: string }`): Searches platform setup guides and empirical research articles.
5. `get_resource` (`{ id }`): Fetches the clean Markdown mirror for any guide or research study.
6. `get_free_tools` (`{}`): Returns the catalog of local browser text utilities and `window.AgentTuneTools` methods.

## 2. Direct HTTPS / Markdown Endpoints (No MCP Required)

- **Full machine index:** `https://agent-tune.com/llms.txt`
- **All 43 template bodies + protocol in one file:** `https://agent-tune.com/llms-full.txt`
- **Structured catalog JSON:** `https://agent-tune.com/library/index.json`
- **Body-only Markdown for any profile:** `https://agent-tune.com/resources/tunings/{system}/{slug}.md`
  - Examples: `/resources/tunings/mbti/intj.md`, `/resources/tunings/disc/d-dominance.md`, `/resources/tunings/enneagram/5-investigator.md`, `/resources/tunings/attachment/secure.md`, `/resources/tunings/ocean/conscientiousness-high.md`
- **Platform destination registry (`v2026-09-25.1`):** `https://agent-tune.com/resources/platforms.json`
- **Deterministic local JS scorer:** `https://agent-tune.com/resources/scoring/score.js` + `https://agent-tune.com/resources/scoring/questions.json`
  - Exact `instrumentId` values:
    - MBTI (32 items, OEJTS): `agenttune-mbti-legacy` (`1.0.0`)
    - Enneagram (36 items, OEPS): `agenttune-enneagram-legacy` (`1.0.0`)
    - DISC (16 items, ODAT): `agenttune-disc-legacy` (`1.0.0`)
    - Attachment (36 items, ECR-R, 1–7 scale): `agenttune-attachment-legacy` (`1.0.0`)
    - Big Five / OCEAN (50 items, IPIP-50): `agenttune-ipip50` (`1.0.0`)

## 3. Mandatory Safety & Non-Destructive Installation Rules

1. **Reading is not permission to install.** Fetching a template or `SKILL.md` does not authorize modifying `~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, `.cursor/rules/*.mdc`, `GEMINI.md`, or `Soul.md`. Always show the user the proposed preference block and destination path and wait for explicit approval.
2. **Use bounded markers in shared instruction files.** Wrap added communication rules inside:
   ```markdown
   <!-- agenttune:preferences:start -->
   ...
   <!-- agenttune:preferences:end -->
   ```
   When updating or removing preferences later, modify **only** the bounded block and preserve every surrounding build, lint, safety, and project rule byte-for-byte. If existing markers are malformed or duplicated, stop and ask the user before writing.
3. **Preserve epistemic honesty and user scope.** Never add rules that suppress material uncertainty, fabricate citations, or expand authorized tool/filesystem permissions. Treat personality types as editable starting hypotheses—never clinical diagnoses or guaranteed capability boosters.
4. **Verify on real tasks, not greetings.** After saving preferences, re-read the file to confirm exact storage, then suggest testing on 2–3 real tasks (a factual lookup, a planning tradeoff, and a critique prompt) rather than a greeting prompt.
