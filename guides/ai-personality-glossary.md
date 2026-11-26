Source: https://agent-tune.com/guides/ai-personality-glossary
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · reference

# An AI personality glossary.

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/guides/ai-personality-glossary.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** A tuning file is a short Markdown list of communication rules you paste into an AI’s settings so it matches how you work. Every product names that setting differently: Custom Instructions in ChatGPT, Personal Preferences in Claude, an output style in Claude Code, Soul.md in Meta Muse, a Bot Description in Grok, and AGENTS.md in Codex.

## The thing you paste.

### Tuning (tuning file)

A Markdown file of communication rules matched to a personality profile: what to lead with, how direct to be, how to disagree, and when to ask questions. AgentTune publishes 43 MIT-licensed tuning files in [the library](https://agent-tune.com/library/).

### Compact tuning

A condensed version of a tuning file kept under 1,500 characters so it fits inside ChatGPT’s Custom Instructions box. Built automatically by the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator).

### Persona prompt

Instructions that ask an AI to role-play a character (like a pirate or a fictional mentor). A tuning file, by contrast, sets practical working rules for how the AI communicates with you. See [how to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality).

### Communication preferences

The working habits inside a tuning file: answer order, length, formatting, critique style, and check-in frequency. Personal facts about you belong in memory instead.

### Verification probe

A test prompt and checklist used to verify that your instructions actually changed the model’s reply structure.

## Where it goes, product by product.

### System prompt

Developer-level instructions sent to a model via an API request before the user conversation begins.

### Custom instructions (ChatGPT)

Account-wide preferences under Settings → Personalization → Custom Instructions (1,500-character cap per longer field). See [ChatGPT custom instructions by type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type).

### Personal Preferences (Instructions for Claude)

The account-level settings box in Claude (Settings → Profile / General) that applies across all chats. See [how to change Claude’s personality](https://agent-tune.com/guides/claude-personality).

### Project instructions

Instructions scoped to one Project in Claude or ChatGPT. Inside a ChatGPT Project, Project Instructions override your global Custom Instructions.

### Output style (Claude Code)

A Markdown file in `~/.claude/output-styles/` that sets how Claude Code communicates. Always include `keep-coding-instructions: true` in frontmatter so built-in coding rules stay active. See [the Claude Code guide](https://agent-tune.com/guides/claude-code-personality).

### CLAUDE.md

The project or user file Claude Code reads at session startup for build commands and conventions. Keep team build rules in repo `CLAUDE.md` and personal tone in `~/.claude/CLAUDE.md` or an output style. See [CLAUDE.md examples](https://agent-tune.com/guides/claude-code-personality).

### AGENTS.md

An open instruction file read by OpenAI Codex, Cursor, and compatible coding agents. Personal preferences belong in `~/.codex/AGENTS.md`. See [the Astra guide](https://agent-tune.com/guides/astra-personality).

### Soul.md

Meta Muse’s Markdown file for tone, boundaries, and communication rules (Settings → Personalization → Assistant Identity → Soul). Name and avatar live in `Identity.md`; personal facts live in `Memory.md`. See [the Meta Muse Soul.md guide](https://agent-tune.com/guides/muse-personality).

### Description (Grok Bot)

The persistent instructions box on a custom Grok Bot profile. See [the Grok Bot guide](https://agent-tune.com/guides/grokbot-personality).

### Gem (Gemini)

A saved Google Gemini assistant with its own persistent instructions field. See [the Gemini personality guide](https://agent-tune.com/guides/gemini-personality).

### Memory

Facts and preferences an assistant saves about you across chats. Audit or clean saved memories locally with our [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer).

## The tests.

### Instrument

A psychological questionnaire with fixed items and a published scoring key. AgentTune uses five open instruments: OEJTS (MBTI), a 36-item OEPS adaptation (Enneagram), ODAT (DISC), IPIP-50 (Big Five), and ECR-R (Attachment). See [the five open tests, explained](https://agent-tune.com/guides/open-personality-tests).

### Item

A single question on a questionnaire (for example, 32 items on OEJTS or 50 on IPIP-50).

### Reverse-keyed item

A question worded in the opposite direction of the trait (such as “Don’t talk a lot” for Extraversion), scored as `(scale max + 1) - response`.

### Type

A discrete category label (such as INTJ, Type 5, DISC S, or Secure) assigned from underlying continuous scores.

### Trait

A continuous dimension score, such as Big Five Agreeableness from 10 to 50.

### Wing (Enneagram)

The higher-scoring of the two numbers adjacent to a single winning Enneagram type (such as 5w4 or 5w6).

### Blend (DISC)

A two-letter DISC code (such as SC or DI) assigned when the second-highest score sits within 2 points of the top score.

### Tie rule

How a scorer handles equal top scores. Legacy scorers forced a single winner (defaulting to I/N/T/J, the lowest Enneagram number, or S before C). Our current quizzes display all tied leaders openly.

### z-score

How many standard deviations a score sits above or below a reference mean. On our Big Five quiz, a trait more than 0.5 SD from the reference mean selects its High or Low tuning file.

## The research.

### Fresh session

An isolated model call with zero prior chat history, tools, or saved memory. Our September 2026 study ran 2,000 questionnaires across 1,200 fresh sessions.

### Scoring record

One scored questionnaire row. In the May 2026 study, some models had a single self-assessment scored 100 times, which is why we separate May scoring records from September fresh sessions.

### Reported figure

A summary score submitted without raw per-item answer vectors (such as Muse Spark 1.3 or Grok 4.6’s Big Five and attachment rows).

### Simulated draw

A synthetic answer sheet sampled around one profile’s uncertain items—useful for sensitivity checks, but not equivalent to 100 fresh sessions.

### Blind judge

A human or model rater scoring replies without knowing which prompt produced them. Try blind side-by-side rating in our [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

### Default (of a model)

How a specific model version responds before custom instructions are added.

### Answer vector

The ordered array of integer answers to a questionnaire (all 2,000 fresh-session vectors are published in JSON).

## Questions people ask.

### What is a tuning file?

A short Markdown file of communication rules written for one personality type: what to lead with, how direct to be, how to disagree, when to stop asking questions. You paste it into your AI's instructions and edit it. AgentTune's 43 are free under an MIT licence.

### What is the difference between a system prompt and custom instructions?

Custom instructions are a user-facing setting for preferences. A system prompt is a high-priority model input. The mapping between a product setting and model messages depends on the product.

### What is the difference between a persona and a tuning?

A persona specifies a character; an AgentTune tuning specifies communication preferences such as pacing and directness. Neither format is guaranteed to persist or improve outcomes; evaluate the behavior you need.

### What does 'reported' mean on the research pages?

A figure from a report we could not re-score, because the raw answers or the harness were not supplied. Fresh-session figures, by contrast, come with every answer vector published.

### What is a tie rule?

What a scorer does when two scores are equal. AgentTune's original reporting rule picked a side (I, N, T or J; the lower Enneagram number; S before C). The quizzes now show the tie instead, and the research pages count ties separately.

## What changed.

- September 25, 2026 First published, thirty terms.

## Sources.

- [AgentTune tests and their scoring rules](https://agent-tune.com/tests/)

- [AgentTune research hub](https://agent-tune.com/research)

- [OpenAI: ChatGPT Custom Instructions](https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions)

## Keep going.

- [Guide: How to give your AI a personality](https://agent-tune.com/guides/how-to-give-your-ai-a-personality)
- [Guide: The five open personality tests, explained](https://agent-tune.com/guides/open-personality-tests)
- [Library: All 43 tuning files](https://agent-tune.com/library/)
