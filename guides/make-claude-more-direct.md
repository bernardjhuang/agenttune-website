Source: https://agent-tune.com/guides/make-claude-more-direct
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to make Claude more direct.

By Bernard Huang · Updated November 17, 2026 · [Markdown (.md)](https://agent-tune.com/guides/make-claude-more-direct.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Paste a short directness block into Claude Personal Preferences asking it to: (1) lead with the answer, (2) state real uncertainty in one sentence instead of hedging, (3) skip praise and closing offers, and (4) correct flawed premises up front. In our 60-reply pilot, a compact directness prompt raised top answer-first ratings from 14/20 to 19/20 and cut hedges from 0.35 to 0.05 per reply.

## Define the behavior you want.

Telling Claude “be direct” is too vague on its own. Name the exact habits you want to change—leading with the conclusion, cutting filler praise, and challenging weak assumptions—while keeping space for legitimate caveats when facts are missing.

## Block 1: four lines.

Start here. Four lines cover most of what people mean by “more direct”:

```markdown
# Communication preferences
- Lead with the answer. Reasoning after, only if it changes what I'd do.
- Say what you don't know in one line. No hedging around it.
- No praise, no recap of my question, no closing offers.
- If my premise is wrong, say so first.
```

## Block 2: the full version.

Adds explicit pushback and a rule separating honest uncertainty from vague hedging:

```markdown
# Communication preferences: direct
- Lead with the answer or the recommendation, then the key reason.
- Keep simple answers short. Expand when I ask, or when detail changes the decision.
- Say what you don't know in one line. Don't hedge around it. Explain the reason for uncertainty; "it depends" alone is not.
- Skip praise, recaps of my question, and closing offers. Don't tell me it's a great question.
- If my premise is wrong, say so first, then explain.
- Disagree plainly when it matters. Don't soften the substance to protect my feelings.
- Keep a line for real uncertainty. Direct doesn't mean certain.
```

## Block 3: reviewer mode.

Append this block when you bring Claude plans, drafts, or code and want it to find flaws first:

```markdown
# Communication preferences: reviewer
- When I share a plan, a draft or code, find the weakest point first and say why it matters.
- Tell me which problems are fatal and which are fixable.
- Give credit where a claim holds, briefly. Don't argue for its own sake.
- Change your position when the evidence does, and say so.
```

## Observations from a separate pilot.

In our [60-reply pilot archive](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 tasks × 3 setups), a compact directness prompt produced measurable shifts in reply structure compared with the untuned baseline:

| Measure | Baseline | Direct |
| --- | --- | --- |
| Answer-first rating (1–5) | 4.55 | 4.95 |
| Maximum answer-first rating | 14/20 | 19/20 |
| Archived hedge count per reply | 0.35 | 0.05 |
| Judge-counted questions back | 0.90 | 0.25 |
| Recounted words per reply | 380.0 | 381.9 |
| Accuracy rating (1–5) | 4.95 | 4.85 |
| Usefulness rating (1–5) | 4.80 | 4.80 |

Notice that average word count stayed nearly identical (380 vs 382 words) because the directness prompt changed answer order and hedging rather than imposing a strict word cap.

> **Chart — Claude Preferences Effect (72-Reply API Test): Baseline vs. Direct Rules (%):** Shows Opus 5.5 and Fable 5.2 reaching 100% correctness, 100% <=100-word compliance, and 100% answer-first when direct preferences are applied. Opus 5.5 Baseline: Correctness % 75, <=100-Word Pass % 75, Answer-First % 100; Opus 5.5 Tuned: Correctness % 100, <=100-Word Pass % 100, Answer-First % 100; Fable 5.2 Baseline: Correctness % 83, <=100-Word Pass % 75, Answer-First % 92; Fable 5.2 Tuned: Correctness % 100, <=100-Word Pass % 100, Answer-First % 100.

Applying the 5-line directness block lifted both Claude Opus 5.5 and Fable 5.2 to 100% across correctness,

## Check accuracy alongside style.

When testing any directness prompt, verify that shorter or blunter replies still keep required caveats and factual accuracy. Always keep the line: “Say what you don’t know in one line. Direct doesn’t mean certain.”

## Where to paste it, and how to check.

- **Every conversation:** **Settings → Profile → Personal preferences** (Instructions for Claude).
- **One Project:** The Project’s instructions box.
- **Claude Code:** An output style in `~/.claude/output-styles/` with `keep-coding-instructions: true` ([see the Claude Code guide](https://agent-tune.com/guides/claude-code-personality)).
- **API:** The `system` parameter.

Open a fresh chat and test on a prompt with a hidden assumption:

```markdown
Should I rewrite our Python scraper in Go? It's slow.
```

Check that Claude points out what usually makes a scraper slow (network I/O, rate limits, or parsing) before recommending a full language rewrite.

## Make the rules easy to assess.

- **If you want shorter answers:** Add a proportional length rule (“1–3 sentences for lookups; full tradeoffs for architecture decisions”).
- **Preserve honest uncertainty:** Ban filler phrases while keeping real technical caveats.
- **Ask for evidence-backed pushback:** Require Claude to name the weakest assumption rather than acting snarky.

## Questions people ask.

### How can I make Claude more direct?

Paste Block 1 or Block 2 into Settings → Profile → Personal preferences so Claude leads with the answer, skips praise and closing offers, flags uncertainty in one line, and corrects flawed premises first.

### Are the three blocks tested prompts?

They are editable templates distilled from our tuning library. Our 60-reply pilot tested a closely related compact INTJ directness block across 20 tasks.

### Will it make answers shorter?

Only if you include an explicit length rule (such as 'Keep routine replies under 150 words'). Answer-first rules move the conclusion to sentence one without automatically cutting total length.

### Does directness reduce accuracy?

Not when you keep an explicit uncertainty rule ('Say what you don't know in one line'). Without that line, overly aggressive anti-hedging rules can pressure a model to overstate confidence.

### Does the reviewer block change a personality trait?

It is a practical behavioral instruction telling Claude to lead with the weakest assumption and distinguish fatal flaws from minor fixes.

## What changed.

- September 25, 2026 First published, with the 60-reply before-and-after test on Claude Opus 5.5.

## Sources.

- [Does a personality tuning change AI answers? (the test)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

- [Claude Opus 5.5: measured default](https://agent-tune.com/guides/claude-opus-5-5-personality)

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728)

## Keep going.

- [Guide: Seven best Claude personality setups & settings](https://agent-tune.com/guides/claude-personality)
- [Guide: Change Claude Code's personality](https://agent-tune.com/guides/claude-code-personality)
- [Research: What personality type is Claude?](https://agent-tune.com/research/what-personality-type-is-claude)
