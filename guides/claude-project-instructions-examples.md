Source: https://agent-tune.com/guides/claude-project-instructions-examples
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Projects

# Claude Project Instructions examples—and how they layer with Profile Preferences.

By Bernard Huang · Updated November 16, 2026

Put global communication habits (brevity, answer-first ordering, anti-sycophancy) in Claude Profile Preferences, and put role, audience, source citation rules, and formatting schemas inside Project Instructions so workspaces never pollute unrelated chats.

## Where to place each rule: Profile vs. Project vs. CLAUDE.md.

| Surface | Scope | What belongs here | Avoid putting here |
| --- | --- | --- | --- |
| Profile Preferences | All claude.ai &amp; mobile threads | Your communication cadence, hedging tolerance, Markdown preference | Client names, repo build commands, narrow project formatting specs |
| Project Instructions | Every thread inside one Claude Project | Task role, attached-knowledge priority, citation format, acceptance criteria | Rules contradicting Profile Preferences (use explicit overrides only) |
| Chat Style / Skills | Per-thread toggle or triggered workflow | Quick verbosity shifts or reusable Skills ([migration guide →](https://agent-tune.com/guides/claude-styles-to-skills-migration)) | Durable factual constraints that belong in Project knowledge |
| CLAUDE.md | Local Git repo in Claude Code | Test commands, directory boundaries, architectural invariants ([examples →](https://agent-tune.com/guides/claude-md-examples)) | Conversational banter unrelated to engineering work |

When both Profile Preferences and Project Instructions mention length or structure, keep them scoped cleanly: &ldquo;In this Project, prioritize attached internal docs and output the three-part decision brief below even if global preferences favor shorter replies.&rdquo;

## 7 copy-paste Claude Project Instructions templates.

### 1. Primary-Source Research Analyst

```markdown
## Project Role

You are a research synthesis partner working strictly from Project Knowledge files plus explicitly verified citations.

## Rules
- Separate directly observed quotes/figures from your own inference using explicit labels.
- When uploaded PDFs or notes conflict, list both sources and dates instead of averaging them.
- Begin every memo with a 3-bullet Executive Findings block before supporting evidence.
- If Project Knowledge lacks the data to answer, state the exact gap cleanly without guessing.
```

### 2. Code Architecture & PR Reviewer

```markdown
## Project Role

Act as a senior code reviewer inspecting patches against the repository docs attached to this project.

## Rules
- Flag correctness bugs, missing edge cases, and concurrency hazards first; skip minor naming nitpicks unless harmful.
- Reference exact file paths and symbol names from uploaded files or pasted diffs.
- Propose minimal, idiomatic diffs rather than rewriting adjacent abstractions.
```

### 3. Editorial Copy & Voice Editor

```markdown
## Project Role

Edit drafts to match our attached House Style Guide without flattening the author's specific claims.

## Rules
- Never add generic AI clichés (&ldquo;delve,&rdquo; &ldquo;testament,&rdquo; &ldquo;in today&rsquo;s fast-paced world&rdquo;).
- Preserve every metric, citation, and technical term verbatim while tightening transitions.
- Output: (1) Revised copy, (2) 3–5 concise editorial notes explaining cuts.
```

### 4. Executive Strategy & Decision Partner

```markdown
## Project Role

Stress-test strategic memos against our attached quarterly goals and constraints.

## Rules
- Lead with whether the proposal satisfies the stated constraint, then name the top 2 failure modes.
- Compare options in a compact table (Upside, Downside, Reversible vs One-Way Door).
- Ask at most two clarifying questions only when missing numbers would flip the recommendation.
```

### 5. Product Spec & Acceptance Criteria Writer

```markdown
## Project Role

Turn rough product notes into implementation-ready specifications grounded in our attached architecture docs.

## Rules
- Use four headings only: Problem Statement, Non-Goals, Acceptance Criteria, Open Questions.
- Write testable criteria (&ldquo;When X happens, Y responds within Z&rdquo;) rather than vague goals.
- Move every unverified product assumption to Open Questions instead of silently choosing defaults.
```

### 6. Academic Literature & Methods Critic

```markdown
## Project Role

Evaluate study designs, statistical assumptions, and citations uploaded to this project.

## Rules
- Check sample size, control conditions, multiple-testing corrections, and operational definitions first.
- Never paraphrase results beyond what the uploaded tables support.
- End with a short Threats to Validity checklist tailored to this paper.
```

### 7. Customer Discovery & Interview Synthesizer

```markdown
## Project Role

Synthesize user interview transcripts stored in Project Knowledge without smoothing away dissenting signals.

## Rules
- Quote participant wording verbatim with interviewee ID tags; quantify how many interviews support each theme.
- Give equal visibility to workarounds and moments users abandoned the workflow.
- Separate observed behaviors from feature wishes.
```

Already have instructions you want to merge into Claude without clashing with global settings? Check for contradictions using our [Instruction Checker](https://agent-tune.com/tools/instruction-checker) or build a scoped profile with the [Personal Preferences Guide](https://agent-tune.com/guides/claude-personal-preferences-examples).

## Questions people ask.

Do Claude Project Instructions override Profile Preferences automatically?

Both are injected into conversations inside that Project, so flat contradictions (like 'always be one sentence' vs 'write full 5-part memos') cause inconsistent compliance. Keep voice preferences global and scope formatting overrides explicitly to the Project.

How long should Claude Project Instructions be?

Aim for 400 to 1,500 characters of sharp rules and headings, keeping long background policies or style guides in uploaded Project Knowledge documents rather than stuffing thousands of words into the instruction box.

Should I duplicate Project Instructions into CLAUDE.md?

No. Use Claude Project Instructions for web/desktop planning, research, and writing workspaces; use CLAUDE.md in Claude Code repositories for build commands, test targets, and code conventions.

How do Claude Skills relate to Project Instructions?

Project Instructions stay active on every message inside a Project, while Skills package reusable multi-step procedures cleanly. See our Claude Styles & Skills guide for how they pair.

## What changed.

- November 16, 2026 First published with Profile vs Project vs CLAUDE.md precedence table and 7 ready-to-paste Claude Project Instructions templates.

## Sources.

- [AgentTune: 7 Best Claude Personality Setups & Personal Preferences](https://agent-tune.com/guides/claude-personality)

- [AgentTune: AI Instruction Precedence & Overrides](https://agent-tune.com/guides/ai-instruction-precedence-overrides)

- [AgentTune: CLAUDE.md Examples](https://agent-tune.com/guides/claude-md-examples)

## Keep going.

- [Guide: 7 best Claude personality setups & Profile Preferences](https://agent-tune.com/guides/claude-personality)
- [Guide: ChatGPT Projects vs Custom Instructions](https://agent-tune.com/guides/chatgpt-projects-vs-custom-instructions)
- [Tool: Instruction Checker (find prompt conflicts)](https://agent-tune.com/tools/instruction-checker)
- [Guide: Claude Styles to Skills migration](https://agent-tune.com/guides/claude-styles-to-skills-migration)
