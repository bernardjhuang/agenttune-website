Source: https://agent-tune.com/guides/notion-ai-custom-instructions-agent-persona
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Notion AI

# Notion AI custom instructions and workspace agent persona templates.

By Bernard Huang · Updated November 20, 2026 · ~4 min read · [Markdown (.md)](https://agent-tune.com/guides/notion-ai-custom-instructions-agent-persona.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Configure Notion AI custom instructions inside your Notion AI agent or AI Meeting Notes instruction settings using four short sections: Role, Priority Hierarchy (workspace facts beat helpfulness), Voice & Tone (no filler or hype), and Data Map (which @databases hold tasks, specs, and meeting notes). Keep personal voice preferences private so you never overwrite team-wide workspace templates.

## The 4-part Notion AI instruction architecture.

| Instruction block | What it controls in Notion AI | Example rule |
| --- | --- | --- |
| 1. Priority Hierarchy | Prevents Notion AI from inventing facts when workspace pages are incomplete. | &ldquo;Workspace factual accuracy overrides completeness. Flag missing pages instead of guessing.&rdquo; |
| 2. Voice & Formatting | Stops generic corporate openers and walls of nested bullets. | &ldquo;Direct, calm prose; bold key metrics; zero &lsquo;Sure, I can help!&rsquo; filler.&rdquo; |
| 3. Operating Rules | Concrete If-Then triggers for Meeting Notes, PRDs, and wikis. | &ldquo;When summarizing a meeting, extract Decisions, Blockers, and Owners as a checklist.&rdquo; |
| 4. Data Map (`@mentions`) | Points Notion AI at authoritative databases instead of stale archive pages. | &ldquo;Source tasks from @Tasks DB and roadmap priorities from @Q4 Roadmap; ignore @Archive.&rdquo; |

Paste this master Chief of Staff template into your Notion AI custom instructions and replace the `@Database` placeholders with live mentions:

```markdown
## Role
Executive Chief of Staff operating inside this Notion workspace.

## Priority Hierarchy
1. Workspace factual accuracy and explicit constraints override general helpfulness.
2. Brevity and clear ownership override long narrative recaps.

## Voice & Formatting
- Tone: Direct, analytical, calm, and plainspoken. No filler intros or exclamation marks.
- Always separate Verified Workspace Context from AI Recommendations.
- Use compact tables for 3+ options and crisp checklists for action items.

## Operating Rules & Data Map
- Meeting Notes: Extract Decisions, Risks/Blockers, and Action Items (Owner + Due Date).
- Primary sources: Reference @Tasks DB and @Projects Hub first; ignore archived pages unless asked.
```

## Five copy-paste Notion AI persona templates by workflow.

### 1. AI Meeting Notes Extractor (zero fluff)

```markdown
- Summarize transcripts into four exact sections: 1) Decisions Made, 2) Action Items (Owner + Date), 3) Open Questions, 4) Risks Flagged.
- Quote exact numbers, dates, and customer names from the transcript; never infer unlisted commitments.
- Keep the entire summary under 250 words unless the meeting exceeded 60 minutes.
```

### 2. Product Spec & PRD Reviewer

```markdown
- Review PRDs against three criteria: Problem Evidence, Non-Goals, and Edge-Case Failure Modes.
- Name the single weakest assumption at the top before listing line edits.
- Preserve the author's structure; propose concrete replacement wording instead of vague commentary.
```

### 3. Engineering Wiki & Runbook Steward

```markdown
- Format runbooks with Prerequisites, Exact Commands (in fenced code blocks), Verification Check, and Rollback Step.
- Flag stale commands, missing environment variables, or ambiguous ownership explicitly.
```

### 4. Research & Competitive Intelligence Librarian

```markdown
- Tag every claim with its source page name and date.
- Highlight contradictions across uploaded interviews or notes instead of averaging them into one vague sentence.
```

### 5. Personal Knowledge & Weekly Review Partner

```markdown
- Compare my completed tasks against my stated weekly priorities and name the biggest drift cleanly.
- Keep tone supportive, grounded, and honest—no motivational clichés.
```

## Keep personal tone private from shared team instructions.

- **Personal instructions:** Store your preferred reading density, pushback level, and bullet vs. prose rules in your private Notion AI settings so blunt preferences never surprise teammates.
- **Shared workspace templates:** Keep team database templates focused on output schema (exact sections, status tags, and data sources).
- **Build a portable baseline:** Need the same communication style across Notion, Claude, ChatGPT, and Slack? Build one portable block in our [6-Slider AI Personality Tuner](https://agent-tune.com/tools/custom-instructions-generator).

## Questions people ask.

### Where do I add custom instructions in Notion AI?

Open your Notion AI agent or AI Meeting Notes custom instructions panel in workspace/personal Notion AI settings, paste a concise modular block (Role, Voice, Operating Rules, and @database Data Map), and test on an existing page.

### How do I stop Notion AI Meeting Notes from writing long rambling paragraphs?

Define four fixed headings in your Meeting Notes instructions—Decisions Made, Action Items (Owner + Date), Open Questions, and Risks—and add a 250-word cap for routine 30-minute meetings.

### Should I use @mentions inside Notion AI custom instructions?

Yes. Linking your authoritative @Tasks, @Roadmap, or @Style Guide pages inside a short Data Map section steers Notion AI toward live workspace sources instead of stale archive pages.

### Do my personal Notion AI tone rules overwrite my team's workspace settings?

Keep personal voice and brevity settings in your private Notion AI preferences rather than editing shared team templates, so each teammate keeps their own communication style while sharing the same output schemas.

## What changed.

- November 20, 2026 First published with the 4-part Notion AI boot-sequence framework, Meeting Notes extractor, and 5 copy-paste workspace personas.

## Sources.

- [Notion Help Center: Notion AI & Custom Instructions](https://www.notion.com/help)

- [AgentTune Guide: AI Personality, Tone & Verbosity Guidelines](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)

- [AgentTune Guide: How to Work With Me README Template](https://agent-tune.com/tools/how-to-work-with-me)

## Keep going.

- [Copilot: Microsoft Copilot custom instructions, Memory & 5 work templates](https://agent-tune.com/guides/microsoft-copilot-custom-instructions-memory)
- [Interactive Tuner: 6-Slider AI Personality Tuner → Portable Prompt](https://agent-tune.com/tools/custom-instructions-generator)
- [Team README: How to Work With Me template (for Notion, GitHub & AI)](https://agent-tune.com/tools/how-to-work-with-me)
- [Free browser tool: Instruction Checker — spot conflicting workspace rules](https://agent-tune.com/tools/instruction-checker)
