Source: https://agent-tune.com/guides/ai-personality-templates
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Directory · Templates

# AI personality and system prompt templates.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/ai-personality-templates.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Choose your surface or style gallery below: Meta Muse Soul.md & Identity.md, Claude Preferences & Skills, ChatGPT Custom Instructions & Projects, Grok, Gemini Gems, coding agent AGENTS.md / CLAUDE.md, OpenRouter open-weight configs, or our 85/15 Fictional Character Voices, Calibrated Character Voices (85/15), and Socratic/Feynman Coaching templates.

## How to actually use these tunings with your agents (3 workflows that stick).

Most people drop one overly detailed prompt into global settings, hit friction on a coding or spreadsheet task two days later, and delete everything. A cleaner architecture separates **where** each template lives:

- **Workflow 1 — Global Baseline (2 minutes):** Paste a tight 6-rule directness & pushback foundation into account-wide settings (ChatGPT Custom Instructions or Claude Personal Preferences). It keeps every quick answer honest without clutter.
- **Workflow 2 — Dedicated Agent Rooms & Character Cocktails:** Put stronger voices inside focused rooms—a Red-Team PR review Project using [Sherlock × JARVIS (85/15)](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman), a study Gem using [Feynman Intuition Coaching](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts), or Meta Muse `Soul.md` mixed in the [Character Voice Mixer](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman).
- **Workflow 3 — Agent-First `.md` & MCP Handoff:** Instead of copy-pasting manually into repos, point Claude Code, Codex CLI, or Cursor at any `.md` mirror URL or our MCP server (`https://agent-tune.com/mcp`) and instruct the agent to wrap the rules inside `<!-- agenttune:preferences:start -->` markers.

## Template galleries by AI platform, voice style & use case.

| Platform &amp; Gallery | Exact Paste Field &amp; Limit | Templates &amp; Tools Included |
| --- | --- | --- |
| [Fictional Character Voices (85/15)](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman) | Soul.md / Projects / CLAUDE.md | 16 prompts (TARS, JARVIS, Sherlock, Kim Kitsuragi, Feynman, GLaDOS) · 5 .md files · 300-reply tested |
| [AI Alignment, HEXACO & Conflict Matcher](https://agent-tune.com/research/ai-personality-rankings) | Any AI App (pushback &amp; rule tuning) | 2-min interactive quiz · 12 Alignment &amp; Red-Team prompts · 20-model baseline map |
| [Socratic & Feynman Coaching Prompts](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts) | Projects, Gems &amp; Study Rooms | 14 active tutoring, toy-model &amp; rubber-duck debugging templates with BLUF escape hatch |
| [Meta Muse Soul.md Templates](https://agent-tune.com/guides/muse-soul-md-templates) | Identity → Soul (append section, keep starter truths) | 20 templates · 4 .md downloads · [Merge Editor](https://agent-tune.com/tools/muse-soul-md-editor) |
| [Meta Muse Identity.md & Characters](https://agent-tune.com/guides/muse-identity-md-avatar-name) | Identity → Identity.md + Avatar Prompt | 16 named personas · 3-file Bundle Builder · 4 .md starters |
| [Claude Personal Preferences & Skills](https://agent-tune.com/guides/claude-personality) | Settings → Personal preferences or Skill .md | 20 role templates · 4 .md Skills · [How-to Guide](https://agent-tune.com/guides/claude-personality) |
| [ChatGPT Box 1 + Box 2 Examples](https://agent-tune.com/guides/chatgpt-custom-instructions-examples) | Personalization → Custom Instructions (1,500 chars) | 20 Box 1+2 pairs · 4 .md downloads · [Generator](https://agent-tune.com/tools/custom-instructions-generator) |
| [Grok Custom Instructions & Bots](https://agent-tune.com/guides/grok-personality-settings) | Settings → Customize Grok (4,000 chars) &amp; Grok Bot | 12 Grok prompts + 8 Bot profiles · 4 .md downloads |
| [Gemini Gems & Saved Info](https://agent-tune.com/guides/gemini-gems-system-instructions-templates) | Personal Intelligence, Custom Gems &amp; GEMINI.md | 20 templates incl. No-Fluff Search Brief · 4 .md downloads |
| [Coding Agents: AGENTS.md](https://agent-tune.com/guides/agents-md-templates) | Repo root AGENTS.md (32 KiB limit in Codex) | 16 stack templates · 4 .md downloads · [CLAUDE.md](https://agent-tune.com/guides/claude-code-personality) |
| [OpenRouter & Open-Source Models](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates) | System prompt, API JSON, or Ollama Modelfile | 20 model-calibrated configs · Interactive Matcher · N=100 data |
| [Psychometric Tuning Library](https://agent-tune.com/library/) | Any chat app, CLAUDE.md, Cursor, or [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) | 43 MIT-licensed MBTI, Enneagram, DISC, Attachment &amp; OCEAN files |

## Interactive builders and customization tools.

| Tool or Builder | What it outputs |
| --- | --- |
| [Free Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator) | 1-click presets and all 43 MIT files formatted for ChatGPT, Claude, Muse, Grok, Gemini, and coding tools |
| [6-Slider AI Personality Tuner](https://agent-tune.com/tools/custom-instructions-generator) | Drag Directness, Brevity, Pushback, Format, Uncertainty, and Initiative to export live across 7 apps |
| [Meta Muse Soul.md Safe Merge Editor](https://agent-tune.com/tools/muse-soul-md-editor) | Non-destructive merge preview with instant backup download and undo |
| [OpenClaw 3-File Bundle Builder](https://agent-tune.com/guides/openclaw-soul-md-user-md-identity-md) | Generate clean coordinated SOUL.md, IDENTITY.md, and USER.md |
| [Coding Rules File Generator](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) | Export .windsurf/rules/, .clinerules/, .cursor/rules/*.mdc, or AGENTS.md |
| [Instruction Conflict Checker](https://agent-tune.com/tools/instruction-checker) | Detect duplicate directives and self-contradictory tone rules before pasting |

## Universal starter block (works across any chat app).

If you only install one portable instruction block across ChatGPT, Claude, Meta Muse, Gemini, Grok, or OpenRouter models, start with this compact 6-rule baseline. Notice every line defines observable output behavior rather than vague adjectives:

```markdown
## Universal Communication Baseline
- Start immediately with the direct answer, fix, or recommendation before background explanation.
- Skip greetings, praise, prompt restatements, and closing offers to help further.
- Separate observed facts from inference and mark missing data or unverified metrics as unknown.
- Correct false premises upfront with concrete reasoning rather than agreeing smoothly.
- Give one clear recommendation with key tradeoffs when I ask for a decision, unless I ask for options.
- Keep routine replies scannable in under 150 words; expand cleanly when complexity requires depth.
```

## Questions people ask.

### Which AI personality templates are highest leverage to copy first?

Start with Meta Muse Soul.md (if using Meta Muse), Claude Personal Preferences, or ChatGPT Custom Instructions Box 2. Rules controlling answer-first ordering, explicit pushback, and unknown-fact reporting transfer across virtually every workflow.

### Should I replace my entire Soul.md or CLAUDE.md when installing a template?

No. Back up your file first and append custom communication rules in a labeled section so existing safety boundaries, repository commands, or Muse core truths stay untouched.

### Can I use open-source AI system prompt templates in Ollama or OpenRouter?

Yes. Open our OpenRouter & Open-Source Model Templates guide to pick your exact open-weight model (DeepSeek V4, Qwen 4 / 3.8, Llama 4, Mistral Large, GLM-5.3, Gemma 4) and export either a Markdown system prompt, OpenRouter API payload, or Ollama Modelfile.

## What changed.

- November 23, 2026 Launched master AI template directory unifying Muse, Claude, ChatGPT, Grok, Gemini, Coding Agents, and OpenRouter open-weight galleries.

## Sources.

- [AgentTune empirical model research hub](https://agent-tune.com/research)

- [AgentTune behavioral tuning comparison findings](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

## Keep going.

- [Flagship gallery: 20 Meta Muse Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
- [Gallery: 20 Claude Personal Preferences & Skill templates](https://agent-tune.com/guides/claude-personality)
- [Open-weight: OpenRouter & open-source model system prompt templates](https://agent-tune.com/guides/openrouter-open-source-system-prompt-templates)
- [Research: What personality type are open-source AI models?](https://agent-tune.com/research/what-personality-type-are-open-source-models)
