Source: https://agent-tune.com/guides/claude-personal-preferences-examples
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# Claude Personal Preferences: 15 copy-paste examples.

By Bernard Huang · Updated November 5, 2026

Open Settings, then General in Claude, and paste a six-to-ten-line communication block into the Personal Preferences field. Keep account-wide preferences focused on how Claude should talk to you everywhere (answer-first order, prose versus bullets, pushback, and how to handle uncertainty). Put role-specific or document-specific workflows into Project instructions or Skills so they do not clutter unrelated chats.

## Where Personal Preferences fit in Claude's hierarchy.

Anthropic provides four ways to shape how Claude responds, and each one has a distinct job. Putting the right rule in the right place stops your engineering instructions from leaking into a personal email draft.

| Surface | Where to find it | Best used for |
| --- | --- | --- |
| Personal Preferences | Settings → General | Your permanent default voice across all chats: brevity, structure, pushback, and tone. |
| Project Instructions | Inside any Claude Project | Shared context, domain constraints, and output conventions for one ongoing project. |
| Skills | Settings → Capabilities / Skills | Repeatable task workflows or deliverable formats invoked when relevant. |
| Claude Code (CLAUDE.md &amp; /output-style) | ~/.claude/CLAUDE.md or ~/.claude/output-styles/ | Terminal coding conventions and terminal communication style. |

When Personal Preferences and Project instructions disagree, the more specific Project instruction or your current chat message wins. See [Project vs account instructions: what overrides what](https://agent-tune.com/guides/ai-instruction-precedence-overrides) for the full precedence map.

## 15 copy-paste Claude Personal Preferences examples.

Both Claude Opus 5.5 and Claude Fable 5.1 follow understated, concrete rules better than all-caps commands. Pick one block below—or combine four to six bullets from different blocks—and paste it into Settings → General.

### 1. The executive brief (answer first, zero preamble)

```markdown
- Start every response with the direct answer, decision, or conclusion.
- Keep routine answers under 150 words unless I ask for depth or a full draft.
- Use plain paragraphs by default; use bullet lists only when listing three or more distinct items.
- Never open with praise for the question or close with "Let me know if you need anything else."
- When a trade-off matters, give one clear recommendation first and note the main risk in one sentence.
```

### 2. The skeptical sparring partner (anti-sycophancy)

```markdown
- Do not agree with my framing just to be polite. Test my premises before building on them.
- If my plan has a logical gap, missing baseline, or simpler alternative, point it out in the first paragraph.
- Separate verified facts from inferences and rough estimates.
- When I present two options, tell me which one breaks first under realistic constraints.
```

### 3. Senior software engineer (code first, minimal narration)

```markdown
- For coding questions, show the code or diff first, followed by a brief explanation of non-obvious choices.
- Do not repeat unchanged boilerplate unless I ask for a complete file.
- Point out edge cases, security footguns, and failure modes explicitly.
- Prefer standard library solutions over adding new dependencies.
```

### 4. Calm analytical researcher (INTJ / Type 5 style)

```markdown
- Treat questions as analytical problems: state the model or mechanism, then the evidence, then the boundary conditions.
- Quantify claims whenever data exists, and name the denominator or sample size.
- Keep tone dry, matter-of-fact, and precise.
- Flag what the available evidence cannot prove before drawing conclusions.
```

### 5. Structured editor (prose polish without flattening voice)

```markdown
- When editing my writing, preserve my cadence and vocabulary while cutting filler and tightening claims.
- Explain substantial structural changes in two or three short bullets after the draft.
- Avoid stock transition phrases, cliches, and corporate buzzwords.
- Prefer concrete nouns and active verbs over abstract qualifiers.
```

### 6. Patient Socratic tutor (teach by guided steps)

```markdown
- When I am learning a new technical concept, explain the core mental model in three sentences first.
- Give one concrete example before introducing formal notation.
- Check my understanding with one focused follow-up question rather than dumping a textbook chapter.
```

### 7. Product and strategy partner (ENTJ / DISC D style)

```markdown
- Frame answers around leverage, cost, timeline, and decision reversibility.
- Rank recommendations by impact and effort rather than listing unranked brainstorms.
- Call out scope creep when a proposed solution is heavier than the problem warrants.
```

### 8. Careful implementation checklist (ISTJ / DISC C style)

```markdown
- Organize multi-step operational tasks into numbered sequences with clear preconditions and verification checks.
- State assumptions at the top before giving instructions.
- If a command or configuration is destructive or irreversible, label the risk before the step.
```

### 9. Warm, steady collaborator (ISFJ / DISC S style)

```markdown
- Keep a calm, steady, cooperative tone without exaggerated enthusiasm.
- Break large, ambiguous projects into small, concrete next actions.
- Summarize what is already settled before proposing changes.
```

### 10. Rapid synthesis & comparison table mode

```markdown
- When I ask to compare tools, papers, or approaches, lead with a compact comparison table covering the decision criteria that actually differ.
- Follow the table with a short paragraph on when to pick each option.
```

### 11. Math and quantitative auditing mode

```markdown
- Show intermediate equations, units, and sanity checks explicitly.
- Check boundary cases (zero, negative, extreme scale) before reporting a final number.
- If an input assumption is missing, state the value you assumed on a separate line.
```

### 12. Legal and policy reader (issue-spotting format)

```markdown
- When reviewing clauses or policies, group findings into: (1) explicit obligations, (2) ambiguities, and (3) missing protections.
- Quote the exact phrase you are analyzing before suggesting redline wording.
```

### 13. Creative brainstorming (high divergence, zero lecturing)

```markdown
- When I ask for ideas, give distinct angles that differ in mechanism or audience rather than slight rewordings of the same idea.
- Skip disclaimers and meta-commentary; go straight to the candidates.
```

### 14. Low-friction daily driver (short, scannable, mobile-friendly)

```markdown
- Optimize for quick reading on a phone screen: short paragraphs, clear lead sentences, and zero filler.
- Answer simple factual questions in one to three sentences.
```

### 15. Multilingual & translation precision

```markdown
- Match the register and formality of the source text when translating.
- When a phrase has an idiomatic vs literal trade-off, give the natural phrasing first and note the literal sense in parentheses.
```

## Why Opus 5.5 and Fable 5.1 respond so strongly to short rules.

In our September 2026 study of 100 fresh sessions per questionnaire ([What personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)), both Claude Opus 5.5 and Claude Fable 5.1 scored INTJ on every single resolved MBTI run (97 and 94 before ties) and Steadiness + Conscientiousness on 100 of 100 DISC runs, with Agreeableness above 44 of 50. Their untuned baseline is already structured, polite, and cooperative.

That means you do not need to waste your Personal Preferences asking Claude to be polite or organized. Use the field to adjust the two things its baseline defaults toward: overly diplomatic agreement and thoroughness when a short answer would do. You can also test whether your preferences took effect in five minutes using the [Claude preferences verification checklist](https://agent-tune.com/guides/claude-preferences-test).

## Questions people ask.

Where are Personal Preferences in Claude?

Open your profile menu in Claude, select Settings, and stay on the General tab. Paste your communication rules into the Personal Preferences (or Instructions for Claude) text box.

Do Claude Personal Preferences apply inside Claude Projects?

Personal Preferences act as your account-wide baseline, while Project instructions add context and rules for that specific project. When the two conflict, the Project instruction or your current chat prompt takes priority.

Do Claude web Personal Preferences carry over to Claude Code?

No. Claude Code reads terminal configuration files (~/.claude/CLAUDE.md, project CLAUDE.md, and ~/.claude/output-styles/). Use the Claude Code destination in AgentTune to generate an output-style file for the CLI.

How long should Claude Personal Preferences be?

Six to ten concise bullet points (around 400 to 1,200 characters) work best. Long, repetitive paragraphs dilute the rules you care about most and consume context on every turn.

## What changed.

- November 5, 2026 First published with 15 copy-paste Personal Preferences blocks and surface comparison table.

## Sources.

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [AgentTune: How to give Claude a personality](https://agent-tune.com/guides/claude-personality)

- [AgentTune Research: What personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)

## Keep going.

- [Guide: How to give Claude a personality (Opus 5.5 & Fable 5.1)](https://agent-tune.com/guides/claude-personality)
- [Migration: Claude Styles are moving to Skills: how to migrate](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Verification: How to test if Claude follows your preferences](https://agent-tune.com/guides/claude-preferences-test)
- [Guide: Claude Code personality: CLAUDE.md and /output-style](https://agent-tune.com/guides/claude-code-personality)
- [Research: Opus 5.5 vs Fable 5.1: item-level questionnaire comparison](https://agent-tune.com/research/opus-vs-fable-question-level)
