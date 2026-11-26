Source: https://agent-tune.com/guides/notebooklm-custom-instructions-audio-overview
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide & Builder · NotebookLM

# NotebookLM custom instructions: steer Audio Overview hosts and source chat tone.

By Bernard Huang · Updated November 20, 2026 · ~3 min read · [Markdown (.md)](https://agent-tune.com/guides/notebooklm-custom-instructions-audio-overview.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** To customize a NotebookLM Audio Overview, open the Studio panel → Audio Overview → Customize and paste a 4-line directive naming the episode format, priority angle, audience level, and host banter limit. You can inspect and reuse the exact prompt tied to any saved audio file from the Studio panel menu later.

## Build your NotebookLM Audio Overview steering prompt.

Pick your briefing format, listener level, and host tone—plus an optional priority question—to generate a clean prompt for **Studio → Audio Overview → Customize**:

Loading interactive NotebookLM prompt builder…

Enable JavaScript to use the interactive builder, or copy any of the 4 Audio Overview prompts below.

## Four proven Audio Overview prompt templates (plus Notebook chat rules).

### 1. No-Banter Executive Brief (filings, board decks, reports)

```markdown
Open in the first 30 seconds with the three biggest takeaways and exact numbers from the uploaded sources. Skip podcast jokes, small talk, and filler intros. Focus strictly on financial risks, timeline commitments, and unresolved bottlenecks mentioned in the documents.
```

### 2. Red-Team Critique Debate (strategy memos & papers)

```markdown
Assign Host A to present the strongest case supported by the uploaded sources and Host B to interrogate weak assumptions, sample size limits, and contradictions across documents. Explicitly call out whenever the uploaded sources fail to answer a key question.
```

### 3. Senior Engineer Architecture Deep-Dive

```markdown
Assume both listeners are senior engineers. Skip introductory definitions and focus on interfaces, failure modes, latency/cost tradeoffs, and exact constraints cited in the specifications.
```

### 4. Active-Recall Study & Exam Coach

```markdown
Organize the sources into four clear mental models with concrete examples from the text. End the episode with five rapid-fire review questions and brief answers grounded only in the uploaded material.
```

**Reusing winning prompts:** NotebookLM lets you view the custom prompt attached to previously generated Audio Overviews inside the Studio panel menu—copy your best-performing block into a reusable note or pair it with our [Google Gemini Personal Intelligence guide](https://agent-tune.com/guides/gemini-personality) for non-notebook chats.

## Steering NotebookLM text chat replies.

When querying sources in NotebookLM’s text chat panel, prepend a two-line format rule whenever you need structured citations instead of narrative recaps:

```markdown
Answer in sentence one with exact source citations. Split supporting points into Verified Source Facts vs. Open Gaps Not Covered by These Documents.
```

Want to check whether your prompt wording has conflicting instructions? Run it through our [Instruction Checker](https://agent-tune.com/tools/instruction-checker).

## Questions people ask.

### How do I stop NotebookLM Audio Overview hosts from doing generic small talk?

Click Customize before generating the Audio Overview and add an explicit opening rule: 'Open in the first 30 seconds with the top three takeaways and concrete numbers. Skip podcast banter, intros, and filler.'

### Can I see the custom instructions I used for an older NotebookLM Audio Overview?

Yes. Open the Studio panel menu next to a generated Audio Overview artifact to view the custom focus prompt used to create it, so you can reuse or refine the same framing on future notebooks.

### Do Google Gemini Personal Intelligence settings automatically apply inside NotebookLM?

NotebookLM uses its own notebook-scoped source grounding and Audio Overview Customize prompts rather than pulling your general Gemini Personal Intelligence tone rules automatically.

### Can NotebookLM Audio Overview focus on just one PDF in a multi-source notebook?

Yes. Uncheck the sources you want to exclude in the Sources panel, or explicitly name the target document and section inside the Audio Overview Customize prompt.

## What changed.

- November 20, 2026 First published with interactive NotebookLM Audio Overview prompt builder and 4 reusable studio templates.

## Sources.

- [Google NotebookLM Help Center](https://support.google.com/notebooklm/)

- [AgentTune Guide: Google Gemini Live Voices & Personal Intelligence](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence)

- [AgentTune Guide: AI Personality, Tone & Verbosity Guidelines](https://agent-tune.com/guides/ai-assistant-personality-tone-guidelines)

## Keep going.

- [Gemini: How to change Google Gemini's personality (Personal Intelligence & Gems)](https://agent-tune.com/guides/gemini-personality)
- [Gemini Live: Google Gemini Live voices list & Personal Intelligence sync fix](https://agent-tune.com/guides/gemini-live-voices-personal-intelligence)
- [Research AI: Perplexity Spaces custom instructions & prompts](https://agent-tune.com/guides/perplexity-spaces-custom-instructions)
- [Interactive Tuner: 6-Slider AI Personality Tuner → Copyable Prompt](https://agent-tune.com/tools/custom-instructions-generator)
