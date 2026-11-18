Source: https://agent-tune.com/guides/claude-voice-tone-settings-mobile-web
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Voice & Tone

# How to change Claude’s voice and tone on iOS, Android, and web.

By Bernard Huang · Updated November 17, 2026

Switch Claude's spoken Voice Mode voice (female, male, and accent presets on iOS/Android) or tune written responses in Profile Preferences.

**Quick answer:** To change Claude's spoken voice on iOS or Android, tap the Voice Mode waveform icon in the chat box (or go to Profile initials → Settings → Voice) and pick from the five voice presets (Airy, Mellow, Buttery, Glassy, or Rounded). To change Claude's written tone and spoken reply length across all devices, paste short rules into Settings → Profile → Personal preferences.

## How to change Claude's spoken voice in Voice Mode (iOS & Android).

Spoken Voice Mode is available in the Claude iOS and Android mobile apps. Here is how to preview and switch voices:

- **From the chat box:** Tap the **Voice Mode waveform icon** next to the text input, then tap the **Settings / Voice** picker inside the voice sheet.
- **From account Settings:** Tap your **initials / profile icon → Settings → Voice**, preview each sample, and tap to save.

| Voice preset | Spoken character &amp; register | Best paired with |
| --- | --- | --- |
| Buttery | Warm, smooth, conversational cadence (female-leaning register) | Everyday thinking out loud and coaching sessions |
| Airy | Light, brisk, neutral-crisp delivery (female-leaning register) | Quick Q&amp;A and concise factual lookups on the move |
| Mellow | Calm, measured, lower-pitch conversational voice (male-leaning register) | Longer planning discussions and steady step-by-step pacing |
| Glassy | Clear, poised, slightly brighter articulation | Reading summaries and technical explanations cleanly |
| Rounded | Full, grounded regional-accented cadence (British-style inflection) | Editorial feedback and natural spoken dialogue |

## Spoken Voice Mode vs. written tone: where every setting lives.

| What you want to change | Surface | Exact menu path |
| --- | --- | --- |
| Spoken audio voice (pitch/timbre in Voice Mode) | Claude iOS &amp; Android apps | Tap the Voice Mode waveform icon in the composer (or Initials → Settings → Voice) → pick a voice preset. |
| Account-wide written tone (and spoken pacing) | claude.ai web, macOS/Windows, iOS &amp; Android | Tap Initials → Settings → Profile (or General) → Personal preferences. |
| One workspace's written tone | Claude Projects | Open the Project → Project instructions ([7 Project templates →](https://agent-tune.com/guides/claude-project-instructions-examples)). |
| Task-triggered writing formats | Claude Skills (replacing retired Styles) | Package repeatable formats as Skills ([Styles → Skills guide](https://agent-tune.com/guides/claude-styles-to-skills-migration)). |
| Terminal coding tone | Claude Code CLI | Run /output-style or edit ~/.claude/CLAUDE.md ([Claude Code guide](https://agent-tune.com/guides/claude-code-personality)). |

Because Profile Personal Preferences sync across your account, adding a short brevity rule on `claude.ai` also stops Voice Mode from reading out 90-second bulleted lists on your phone.

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

In our [60-reply controlled pilot](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) (20 real tasks across default Claude, plain behavioral rules, and conversational partner framing), adding explicit behavioral rules raised answer-first openings from **14/20 to 19/20**, reduced average hedges per reply from **0.35 to 0.05**, and lowered end-of-message follow-up questions from **0.90 to 0.25**. Validate your chosen block on two real tasks from last week using our [Instruction Test Bench](https://agent-tune.com/tools/instruction-test-bench).

## Questions people ask.

### Can I change Claude's voice to female or male, or switch accents?

Yes. Open the Claude iOS or Android app and go to Settings → Voice (or tap the Voice Mode waveform icon) to preview and select from Anthropic's voice presets (such as Buttery, Airy, Mellow, Glassy, and Rounded), which cover warmer female-leaning, calmer male-leaning, and regional-accented speech options.

### How do I change Claude's voice on the iPhone or Android app?

To switch the spoken voice timbre in Voice Mode, tap the waveform icon in the mobile composer or open your initials → Settings → Voice. To change Claude's phrasing, brevity, and directness, open Settings → Profile and paste rules into Personal Preferences.

### Where did Claude's 'Styles' selector (Concise, Formal, Explanatory) go?

Anthropic retired standalone Styles in favor of account-wide Personal Preferences for your baseline voice and reusable Skills/Projects for task-specific formats.

### Do my Claude web Personal Preferences apply to the mobile app and Voice Mode?

Yes. Personal Preferences are stored on your Anthropic account and shape responses across claude.ai web, desktop apps, and mobile chats—which is why keeping default answers concise improves Voice Mode listening.

### How do I change Claude's tone inside Claude Code in the terminal?

Claude Code does not read claude.ai web Personal Preferences. Put coding communication rules in ~/.claude/CLAUDE.md or install a style file in ~/.claude/output-styles/ and select it via /output-style.

## What changed.

- November 16, 2026 Reordered Spoken Voice Mode presets (Airy, Mellow, Buttery, Glassy, Rounded) above written tone settings and added female/male/accent voice FAQ.

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
