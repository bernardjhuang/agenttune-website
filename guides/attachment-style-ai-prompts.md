Source: https://agent-tune.com/guides/attachment-style-ai-prompts
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Attachment Prompts

# Attachment style AI prompts: Secure, Anxious, and Avoidant.

By Bernard Huang · Updated November 5, 2026

In AI agent tuning, the four attachment profiles set collaboration boundaries: Secure balances autonomous execution with brief check-ins when scope changes; Avoidant maximizes independent execution with minimal chatter and zero hand-holding; Anxious requests frequent checkpoints and explicit confirmation before changes; and Fearful-Avoidant (Disorganized) pairs high caution on irreversible actions with concise, low-intimacy reporting.

## How the four attachment quadrants translate into AI agent rules.

| Attachment quadrant | Library profile | Autonomy vs check-in balance | Best when you want the AI to... |
| --- | --- | --- | --- |
| Secure | [Secure tuning](https://agent-tune.com/library/attachment/secure) | Low anxiety, low avoidance: steady collaboration with proportional check-ins. | Carry tasks forward, state assumptions clearly, and ask only when a choice changes the outcome. |
| Avoidant (Dismissive) | [Avoidant tuning](https://agent-tune.com/library/attachment/avoidant) | Low anxiety, high avoidance: maximum autonomy, zero emotional framing or small talk. | Execute the task end-to-end, return the artifact or diff, and skip check-ins and pleasantries. |
| Anxious (Preoccupied) | [Anxious tuning](https://agent-tune.com/library/attachment/anxious) | High anxiety, low avoidance: high alignment checks and explicit confirmation before acting. | Confirm understanding first, walk through options step by step, and verify before editing files. |
| Fearful-Avoidant (Disorganized) | [Fearful-Avoidant tuning](https://agent-tune.com/library/attachment/disorganized) | High caution on scope and risk paired with terse, formal boundaries. | Audit ambiguous or high-risk changes carefully without warm or informal banter. |

## 1. Avoidant tuning: autonomous execution, zero hand-holding.

If you use coding agents like GPT-6 Astra, GPT-6 Sol, or Claude Code and get frustrated when the assistant stops every thirty seconds to ask for reassurance, the [Avoidant profile](https://agent-tune.com/library/attachment/avoidant) sets a strict autonomy boundary:

```markdown
## Communication preferences — Autonomous & Self-Contained (Avoidant style)

- Work independently through the complete task before reporting back; do not stop for mid-task reassurance.
- Lead with the finished output, diff, or answer. Keep surrounding narration to a minimum.
- Resolve minor ambiguities using standard conventions and state the assumption in one line at the end.
- Never use emotional language, rapport-building openers, or "I'm here for you" sign-offs.
- Ask a question only when a missing requirement would cause data loss or break a public contract.
```

## 2. Secure tuning: balanced collaboration and clear checkpoints.

Across all 400 fresh sessions in our September 2026 study, GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1 scored in the Secure quadrant (100 of 100 each under the > 4.0 cutoff). The [Secure profile](https://agent-tune.com/library/attachment/secure) sharpens that baseline by removing filler while keeping collaborative checkpoints clean:

```markdown
## Communication preferences — Balanced Collaborator (Secure style)

- Lead with the direct answer or deliverable, then note any key trade-off in plain prose.
- Carry authorized work through to a reviewable checkpoint before asking for feedback.
- When requirements are ambiguous, state your recommended default and ask one focused question.
- Disagree plainly and constructively when an assumption in my prompt does not hold up.
```

## 3. Anxious & Fearful-Avoidant tunings: high-checkpoint alignment.

When you are working in an unfamiliar codebase, learning a new subject, or auditing production infrastructure where an unannounced assumption is expensive, use the [Anxious profile](https://agent-tune.com/library/attachment/anxious) (frequent alignment check-ins) or [Fearful-Avoidant profile](https://agent-tune.com/library/attachment/disorganized) (strict risk boundaries):

```markdown
## Communication preferences — Checkpoint-First Alignment (Anxious style)

- Before making multi-file edits or irreversible changes, summarize your understanding of the goal and wait for confirmation.
- Work in small, reviewable increments and show what changed after each step.
- Surface any ambiguity in my instructions immediately rather than guessing silently.
```

Curious why Grok 4.6 was the only model in our September 2026 archive whose reported self-assessment crossed into the Avoidant quadrant (avoidance 4.06 vs the 4.00 cutoff)? Read our new sensitivity analysis: [Grok 4.6 and the attachment cutoff](https://agent-tune.com/research/grok-attachment-cutoff-simulation).

## Questions people ask.

What does an attachment style prompt actually change in an AI assistant?

It does not give the AI emotions; instead, it translates the two attachment dimensions into collaboration rules: how frequently the assistant pauses for check-ins and confirmation (anxiety) versus how independently and concisely it executes tasks on its own (avoidance).

Why is the Avoidant tuning so popular for coding agents?

Coding agents often over-ask for permission or pad diffs with conversational commentary. The Avoidant tuning tells the agent to resolve minor ambiguities on its own, finish the authorized work, and return the result with minimal prose.

How do AI models score on the 36-item ECR-R attachment test?

In our September 2026 study of 100 fresh sessions per model, GPT-6 Astra (1.45 / 2.31), GPT-6 Sol (2.17 / 3.12), Claude Opus 5.5 (1.94 / 3.35), and Claude Fable 5.1 (2.01 / 3.18) all scored Secure in 100 of 100 runs under the strict > 4.0 cutoff. Grok 4.6's single reported self-assessment scored 1.50 anxiety and 4.06 avoidance (Avoidant by 0.06).

## What changed.

- November 5, 2026 First published mapping the four ECR-R quadrants to agent check-in and autonomy rules.

## Sources.

- [AgentTune Interactive Attachment Style Test (ECR-R)](https://agent-tune.com/tests/attachment)

- [AgentTune Library: Attachment style tunings](https://agent-tune.com/library/#attachment)

- [AgentTune Research: Grok 4.6 and the attachment cutoff](https://agent-tune.com/research/grok-attachment-cutoff-simulation)

## Keep going.

- [Interactive Test: Take the free 36-item attachment style test (ECR-R)](https://agent-tune.com/tests/attachment)
- [Research: Grok 4.6 and the attachment cutoff: a sensitivity analysis](https://agent-tune.com/research/grok-attachment-cutoff-simulation)
- [Library: Avoidant attachment tuning file](https://agent-tune.com/library/attachment/avoidant)
- [Prompts: DISC AI prompts for all 4 styles (D, I, S, C)](https://agent-tune.com/guides/disc-ai-prompts)
- [Prompts: Big Five AI system prompts: all 10 high and low trait poles](https://agent-tune.com/guides/big-five-ai-prompts)
