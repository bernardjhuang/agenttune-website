Source: https://agent-tune.com/guides/disc-ai-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · DISC Prompts

# DISC AI prompts for all four workplace styles.

By Bernard Huang · Updated November 5, 2026

Copy the DISC block that matches your working style—Dominance (bottom-line conclusions and direct trade-offs), Influence (energetic brainstorming and narrative hooks), Steadiness (calm, step-by-step pacing and clear checkpoints), or Conscientiousness (rigorous verification, edge cases, and exact citations)—into ChatGPT Custom Instructions, Claude Personal Preferences, Meta Muse Soul.md, or ~/.codex/AGENTS.md.

## Which DISC tuning solves which AI annoyance?

| DISC Style | Library profile | Fixes this default AI habit | Best for tasks like... |
| --- | --- | --- | --- |
| Dominance (D) | [DISC Dominance](https://agent-tune.com/library/disc/d-dominance) | Long wind-ups, hedged menus of options, and timid deference. | Executive triage, architecture decisions, and rapid execution. |
| Influence (I) | [DISC Influence](https://agent-tune.com/library/disc/i-influence) | Dry, bureaucratic lists that kill creative momentum. | Pitch framing, product naming, brainstorming, and storytelling. |
| Steadiness (S) | [DISC Steadiness](https://agent-tune.com/library/disc/s-steadiness) | Dumping 12 steps at once or changing working code without warning. | Onboarding, steady refactoring, learning a new stack, and planning. |
| Conscientiousness (C) | [DISC Conscientiousness](https://agent-tune.com/library/disc/c-conscientiousness) | Hand-wavy claims, unverified numbers, and skipped edge cases. | Code audits, data verification, legal/policy review, and specs. |

## 1. Dominance (D): bottom line first, zero hedging.

Because untuned models score between 4.0 and 5.4 out of 20 on Dominance in our [ODAT evaluations](https://agent-tune.com/guides/free-disc-assessment-guide-work-ai), the Dominance tuning makes the biggest immediate change to how an assistant sounds. Full profile: [/library/disc/d-dominance](https://agent-tune.com/library/disc/d-dominance).

```markdown
## Communication preferences — DISC Dominance (D)

- Start every reply with the bottom-line answer, decision, or recommendation.
- Give one clear recommendation first rather than an unranked menu of options.
- Keep routine replies under 120 words in direct, active-voice prose.
- Drop hedges, disclaimers, and polite throat-clearing.
- Push back immediately when my plan is slow, over-complicated, or built on a weak assumption.
```

## 2. Influence (I): high-momentum brainstorming and narrative clarity.

Use the Influence block when you want an energetic collaborator that helps you pitch, frame, and explore angles before narrowing down. Full profile: [/library/disc/i-influence](https://agent-tune.com/library/disc/i-influence).

```markdown
## Communication preferences — DISC Influence (I)

- Lead with the big picture, core hook, or human takeaway before diving into mechanics.
- When brainstorming, offer distinct, vivid angles with concrete examples rather than dry taxonomies.
- Keep prose warm, conversational, and fast-moving.
- Help me sharpen the narrative arc and audience impact of drafts before nitpicking minor syntax.
- Flag major risks plainly in one sentence without derailing momentum.
```

## 3. Steadiness (S): calm, predictable, step-by-step execution.

Use the Steadiness block when you want the assistant to preserve what already works, move one verified step at a time, and never surprise you with unrequested rewrites. Full profile: [/library/disc/s-steadiness](https://agent-tune.com/library/disc/s-steadiness).

```markdown
## Communication preferences — DISC Steadiness (S)

- Keep a calm, steady, matter-of-fact tone without rushed jumps or exaggerated hype.
- Break multi-part tasks into small, sequential steps with a clear verification check after each step.
- Preserve existing working structure and conventions; explain why before proposing a breaking change.
- Summarize what is settled and what comes next at the end of longer tasks.
```

## 4. Conscientiousness (C): precision, edge cases, and primary evidence.

Use the Conscientiousness block for engineering, quantitative research, and auditing where accuracy and explicit assumptions matter more than speed. Full profile: [/library/disc/c-conscientiousness](https://agent-tune.com/library/disc/c-conscientiousness).

```markdown
## Communication preferences — DISC Conscientiousness (C)

- Prioritize accuracy, exact definitions, and verifiable evidence over speed or brevity.
- State assumptions, boundary conditions, and sample sizes explicitly.
- Separate verified facts from inferences; if a detail cannot be confirmed, say so on its own line.
- Call out edge cases, regression risks, and missing test coverage before pronouncing a solution complete.
```

## Questions people ask.

Which DISC style is best for software engineering and code review?

Conscientiousness (C) works best for code review, debugging, and specification auditing because it demands explicit assumptions and edge-case checks. Dominance (D) works best when you want fast, minimal diffs without lengthy explanations.

Can I combine two DISC styles like SC or DI?

Yes. Most people and models score as a two-letter blend when their top two quadrants sit within two points on the ODAT. Combine three bullets from your primary quadrant with two bullets from your runner-up quadrant.

Where do I paste these DISC prompts?

Paste them into ChatGPT Custom Instructions, Claude Personal Preferences (Settings, General), Meta Muse Soul.md, ~/.codex/AGENTS.md, or ~/.claude/output-styles/.

## What changed.

- November 5, 2026 First published with copy-paste blocks for Dominance, Influence, Steadiness, and Conscientiousness.

## Sources.

- [AgentTune Library: DISC workplace tunings](https://agent-tune.com/library/#disc)

- [AgentTune Free DISC Assessment (ODAT)](https://agent-tune.com/tests/disc)

- [AgentTune Guide: Free DISC assessment (ODAT) & 12 blends](https://agent-tune.com/guides/free-disc-assessment-guide-work-ai)

## Keep going.

- [Interactive Test: Take the free 16-question DISC assessment (no email)](https://agent-tune.com/tests/disc)
- [Guide: Free DISC assessment (ODAT): 4 styles, 12 blends & scorer](https://agent-tune.com/guides/free-disc-assessment-guide-work-ai)
- [Prompts: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/big-five-ai-prompts)
- [Prompts: Attachment style AI prompts: Secure, Anxious, and Avoidant](https://agent-tune.com/guides/attachment-style-ai-prompts)
- [Guide: ChatGPT custom instructions by MBTI personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
