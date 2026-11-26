Source: https://agent-tune.com/guides/disc-ai-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · DISC Prompts

# DISC AI prompts for all four workplace styles.

By Bernard Huang · Updated November 23, 2026 · ~4 min read · [Markdown (.md)](https://agent-tune.com/guides/disc-ai-prompts.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Copy the DISC block that matches your working style: Dominance (bottom-line conclusions), Influence (fast brainstorming), Steadiness (step-by-step pacing), or Conscientiousness (strict verification and edge cases). Paste it into ChatGPT Custom Instructions, Claude Personal Preferences, Meta Muse Soul.md, or ~/.codex/AGENTS.md.

## Which DISC tuning solves which AI annoyance?

| DISC Style | Library profile | Fixes this default AI habit | Best for tasks like... |
| --- | --- | --- | --- |
| Dominance (D) | [DISC Dominance](https://agent-tune.com/library/disc/d-dominance) | Long wind-ups, hedged menus of options, and timid deference. | Executive triage, architecture decisions, and rapid execution. |
| Influence (I) | [DISC Influence](https://agent-tune.com/library/disc/i-influence) | Dry, bureaucratic lists that kill creative momentum. | Pitch framing, product naming, brainstorming, and storytelling. |
| Steadiness (S) | [DISC Steadiness](https://agent-tune.com/library/disc/s-steadiness) | Dumping 12 steps at once or changing working code without warning. | Onboarding, steady refactoring, learning a new stack, and planning. |
| Conscientiousness (C) | [DISC Conscientiousness](https://agent-tune.com/library/disc/c-conscientiousness) | Hand-wavy claims, unverified numbers, and skipped edge cases. | Code audits, data verification, legal/policy review, and specs. |

## 1. Dominance (D): bottom line first, zero hedging.

Because untuned models score between 4.0 and 5.4 out of 20 on Dominance in our [ODAT evaluations](https://agent-tune.com/tests/disc), the Dominance tuning makes the biggest immediate change to how an assistant sounds. Full profile: [/library/disc/d-dominance](https://agent-tune.com/library/disc/d-dominance).

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

## All 12 two-letter DISC blends & how ODAT scores work.

On our [free 16-item ODAT runner](https://agent-tune.com/tests/disc) (no email required), each style sums 4 direct statements rated 1–5 (range **4 to 20**). When a unique runner-up lands within 2 points of your top style, you get a two-letter blend:

| Blend | Workplace shorthand | How to tune your AI or team README |
| --- | --- | --- |
| `DC` / `CD` | Architect-Driver | Lead with the conclusion, back it with numbers and failure modes; skip small talk. |
| `DI` / `ID` | Catalyst-Closer | Open with the boldest high-leverage option and next action; keep prose tight. |
| `DS` / `SD` | Steady Executor | Focus on practical execution milestones, clear ownership, and realistic timelines. |
| `IS` / `SI` | Collaborative Coach | Warm, constructive register; connect changes to team impact cleanly. |
| `IC` / `CI` | Analytical Storyteller | Pair rigorous evidence with a clear executive narrative for stakeholders. |
| `SC` / `CS` | Careful Systems Builder | Walk through changes methodically, flag risks early, verify edge cases before shipping. |

Our scorer reports exact top-score ties transparently (such as `S/C`) instead of picking S ahead of C artificially ([inspect the ODAT Markdown spec](https://agent-tune.com/tests/disc.md) · [How to Work With Me card builder](https://agent-tune.com/tools/how-to-work-with-me)).

## Questions people ask.

### Which DISC style is best for software engineering and code review?

Conscientiousness (C) works best for code review, debugging, and specification auditing because it demands explicit assumptions and edge-case checks. Dominance (D) works best when you want fast, minimal diffs without lengthy explanations.

### Can I combine two DISC styles like SC or DI?

Yes. Most people and models score as a two-letter blend when their top two quadrants sit within two points on the ODAT. Combine three bullets from your primary quadrant with two bullets from your runner-up quadrant.

### Where do I paste these DISC prompts?

Paste them into ChatGPT Custom Instructions, Claude Personal Preferences (Settings, General), Meta Muse Soul.md, ~/.codex/AGENTS.md, or ~/.claude/output-styles/.

## What changed.

- November 5, 2026 First published with copy-paste blocks for Dominance, Influence, Steadiness, and Conscientiousness.

## Sources.

- [AgentTune Library: DISC workplace tunings](https://agent-tune.com/library/#disc)

- [AgentTune Free DISC Assessment (ODAT)](https://agent-tune.com/tests/disc)

- [AgentTune Open-Source DISC (ODAT) Spec](https://agent-tune.com/tests/disc.md)

## Keep going.

- [Interactive Test: Take the free 16-question DISC assessment (no email)](https://agent-tune.com/tests/disc)
- [Template: How to Work With Me README template for teams & AI](https://agent-tune.com/tools/how-to-work-with-me)
- [Prompts: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/mbti-vs-big-five-for-ai)
- [Prompts: Attachment style AI prompts: Secure, Anxious, and Avoidant](https://agent-tune.com/library/attachment/avoidant)
- [Guide: ChatGPT custom instructions by MBTI personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
