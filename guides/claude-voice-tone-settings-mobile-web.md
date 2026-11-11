Source: https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude

# How to change Claude's tone and voice on iOS, Android, and web.

By Bernard Huang · Updated November 11, 2026

To change Claude's spoken audio voice on iOS or Android, open Voice Mode (the waveform icon) or tap your initials → Settings → Voice and choose from the available spoken voices. To change Claude's written tone across web and mobile, tap your initials → Settings → Profile (or General) → 'What personal preferences should Claude consider in responses?' and paste 6–10 concrete rules.

## Spoken Voice Mode vs. Written Tone: exact tap paths.

| What you want to change | Surface | Exact menu path |
| --- | --- | --- |
| Spoken audio voice (pitch/timbre in Voice Mode) | Claude iOS &amp; Android apps | Tap the Voice Mode waveform icon in the composer (or Initials → Settings → Voice) → pick your preferred voice option. |
| Account-wide written tone (every new chat) | claude.ai web, macOS/Windows, iOS &amp; Android | Tap Initials → Settings → Profile (or General) → What personal preferences should Claude consider in responses? |
| One workspace's written tone | Claude Projects | Open the Project → Project instructions (overrides conflicting Profile lines inside that Project). |
| Task-triggered writing formats | Claude Skills (replacing retired Styles) | Package repeatable templates as Skills ([read the Styles → Skills migration guide](https://agent-tune.com/guides/claude-styles-to-skills-migration)). |
| Terminal coding tone | Claude Code CLI | Run /output-style or edit ~/.claude/CLAUDE.md ([Claude Code guide](https://agent-tune.com/guides/claude-code-personality)). |

Because Profile Personal Preferences sync on your Anthropic account, pasting a written tone block once on claude.ai updates how Claude phrases spoken replies on iOS and Android too—long wind-ups and bulleted lists sound awkward out loud, so concise prose rules make mobile Voice Mode dramatically better.

## Six copy-paste written tone presets (including a Voice-Mode friendly preset).

### 1. Direct peer (everyday default)

```markdown
- Answer in the first sentence with no throat-clearing preamble.
- Default to clear prose; use bullet lists only for 3+ parallel items or step-by-step commands.
- Push back directly when my plan has a flaw and explain the concrete tradeoff.
- Ask at most one clarifying question only when missing context changes the answer.
- Flag material uncertainty explicitly rather than guessing.
```

### 2. Mobile & Voice Mode friendly (clean spoken cadence)

```markdown
- Keep default answers to 2–4 natural sentences unless I ask you to go deeper.
- Avoid markdown tables, nested bullets, and raw URLs unless I ask for written reference output.
- Lead with the takeaway, then stop and let me steer what to unpack next.
```

### 3. Skeptical reviewer (anti-sycophancy)

```markdown
- Never open with praise ('Great idea!', 'You're right to think about...').
- Identify the weakest assumption or highest-risk failure mode first.
- Distinguish verified facts from inference and propose a falsifiable check.
```

### 4. Calm step-by-step coach

```markdown
- Break multi-part problems into manageable sequential steps and confirm scope before expanding.
- Keep tone steady, plain, and practical—skip alarmist warnings and ungrounded reassurance.
```

### 5. Executive brief

```markdown
- Open with a 1-sentence recommendation, followed by key tradeoffs, cost/risk, and next action.
- Use tables only when comparing 3+ options across identical criteria.
```

### 6. Deep technical mechanisms

```markdown
- Assume senior engineering familiarity; skip introductory definitions of standard tools.
- Explain the underlying mechanism and invariant before showing a patch or command.
```

Want 15 more role-specific blocks? Browse [Claude Personal Preferences: 15 copy-paste examples](https://agent-tune.com/guides/claude-personal-preferences-examples) or build your own in the [Claude Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator?target=claude-personal).

## What measured pilot data shows when you tune Claude.

In our [60-reply controlled pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 real tasks across default Claude, plain behavioral rules, and conversational partner framing), adding explicit behavioral rules raised answer-first openings from 14/20 to 19/20, reduced average hedges per reply from 0.35 to 0.05, and lowered end-of-message follow-up questions from 0.90 to 0.25. Validate your chosen block on two real tasks from last week using our [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Questions people ask.

How do I change Claude's voice on the iPhone or Android app?

To switch the spoken voice timbre in Voice Mode, tap the waveform icon in the mobile composer or open your initials → Settings → Voice. To change Claude's phrasing, brevity, and directness, open Settings → Profile and paste rules into Personal Preferences.

Where did Claude's 'Styles' selector (Concise, Formal, Explanatory) go?

Anthropic retired standalone Styles in favor of account-wide Personal Preferences for your baseline voice and reusable Skills/Projects for task-specific formats.

Do my Claude web Personal Preferences apply to the mobile app and Voice Mode?

Yes. Personal Preferences are stored on your Anthropic account and shape responses across claude.ai web, desktop apps, and mobile chats—which is why keeping default answers concise improves Voice Mode listening.

How do I change Claude's tone inside Claude Code in the terminal?

Claude Code does not read claude.ai web Personal Preferences. Put coding communication rules in ~/.claude/CLAUDE.md or install a style file in ~/.claude/output-styles/ and select it via /output-style.

## What changed.

- November 11, 2026 Published distinguishing iOS/Android spoken Voice Mode settings from written tone layers, with 6 copyable presets.

## Sources.

- [Anthropic Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)

- [AgentTune Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)

- [AgentTune Study: Does personality tuning change AI answers? (60-reply pilot)](https://agent-tune.com/research/does-personality-tuning-change-ai-answers)

## Keep going.

- [Pillar guide: How to change Claude's personality (settings & pilot data)](https://agent-tune.com/guides/claude-personality)
- [Examples: Claude Personal Preferences: 15 copy-paste examples](https://agent-tune.com/guides/claude-personal-preferences-examples)
- [Migration: Claude Styles are being retired and migrated to Skills](https://agent-tune.com/guides/claude-styles-to-skills-migration)
- [Claude Code: How to change Claude Code's personality (/output-style)](https://agent-tune.com/guides/claude-code-personality)
- [Free browser tool: Instruction Test Bench — compare before and after](https://agent-tune.com/tools/instruction-test-bench)
