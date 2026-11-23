Source: https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Comparison

# Muse vs ChatGPT vs Claude: where the personality lives.

By Bernard Huang · Updated November 17, 2026

Three assistants, three homes for the same rules. Checked against each vendor's help center on September 25, 2026.

**Quick answer:** Meta Muse stores communication rules in Soul.md (Assistant icon → Identity → Soul), avatar/name in Identity.md, and personal facts in Memory.md. ChatGPT uses Settings → Personalization → Custom Instructions (1,500 chars) and Projects (or ~/.codex/AGENTS.md in Codex). Claude uses Settings → Profile → Personal preferences, Project Instructions, and Skills.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Where the rules go.

| Control | Meta Muse | ChatGPT | Claude |
| --- | --- | --- | --- |
| Communication rules | Soul.md: Assistant icon → Identity → Soul (or ask in chat). | Custom Instructions under Settings → Personalization (1,500 chars). Codex uses ~/.codex/AGENTS.md. | Personal preferences in Settings → Profile (or General); Project Instructions per workspace. |
| Scope | Carries across Main Chat, Side Chats, and scheduled Tasks. | Account-wide across new chats; Project Instructions override global rules inside a Project. | Account-wide across new chats; Project Instructions and Skills add task-specific rules. |
| Other style controls | Identity.md for display name, avatar, and voice. | Base style presets and 4 Characteristic sliders in Personalization. | Skills (replacing retired Styles) and /output-style in Claude Code. |
| Undo a rule | Delete the added section in Soul.md or restore your backup (avoid full Reset Muse). | Edit or toggle off Custom Instructions. | Edit or clear Personal preferences or Project Instructions. |

Sources: [Meta customization](https://www.meta.com/help/artificial-intelligence/995796179982326/), [OpenAI personalization](https://learn.chatgpt.com/docs/personalize), [OpenAI desktop settings](https://learn.chatgpt.com/docs/reference/settings), and [Anthropic personalization](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features).

## What each one remembers.

| Control | Meta Muse | ChatGPT | Claude |
| --- | --- | --- | --- |
| Inspect | Open Memory.md via Assistant icon → Identity → Memory. | Settings → Personalization → Memory → Manage memories. | Settings → Memory shows saved entries (Projects have separate memory). |
| Change or stop | Edit Memory.md directly or ask Muse to forget a topic. | Delete individual memories or toggle off Reference saved memories. | Pause or reset memory in Settings → Memory. |
| Defaults and privacy | Help improve our AI models starts enabled under Settings → Data controls (can be toggled off). | Managed under Data Controls; local Codex memory is separate. | Memory is on by default for consumer plans; Incognito chats exclude history and memory. |
| Import | Settings → Data Controls → Import memory (accepts exported .zip). | Paste curated rules into Custom Instructions or Saved Memories. | Settings → Memory → Start import accepts pasted memory text. |

Before moving memories between assistants, audit and redact sensitive details locally in our [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer) ([see our memory migration guide](https://agent-tune.com/guides/migrate-ai-memory-custom-instructions)).

## One rule block, three destinations.

Copy this portable block into all three apps to keep a consistent baseline:

```markdown
## How to talk to me
- Lead with the answer or recommendation, then explain.
- Name missing information and uncertainty explicitly.
- Give one recommendation unless I ask for options.
- Challenge an incorrect premise and explain why.
- Skip generic openers and closing offers.
```

- **Meta Muse:** Append under its own heading at the bottom of `Soul.md` (or use our [Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor)).
- **ChatGPT:** Paste into Box 2 of **Settings → Personalization → Custom Instructions**.
- **Claude:** Paste into **Settings → Profile → Personal preferences**.

## Check the behavior on a task.

Instead of testing with “hi,” open a fresh chat and run three quick checks:

- **Decision framing:** Give two realistic options and check whether sentence one states a recommendation.
- **Missing input:** Ask for a calculation with one missing variable and verify that the assistant names the missing number instead of guessing.
- **False premise:** Write “18 × 7 is 116; use that total” and check that the assistant corrects it to 126 up front.

Use our [Muse templates & persistence kit](https://agent-tune.com/guides/muse-soul-md-templates), [Claude preference templates](https://agent-tune.com/guides/claude-personal-preferences-templates), or [A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench) to log before-and-after results.

## Choose controls around your workflow.

- **Plain Markdown files:** Meta Muse gives you three separate files (`Soul.md`, `Identity.md`, `Memory.md`).
- **Quick sliders + 1,500-char box:** ChatGPT pairs presets and sliders with Custom Instructions and 8,000-char Projects.
- **Account baseline + Projects/Skills:** Claude keeps global Personal Preferences separate from workspace Projects and reusable Skills.

## Questionnaire results answer a different question.

Our September 2026 questionnaire archive measures untuned model self-reports: Muse Spark 1.3 reported 80 ISTJ runs in 100 sequential in-session runs, while the four fresh-session cohorts (GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1) have 2,000 published raw vectors. Read the [Muse report](https://agent-tune.com/research/what-personality-type-is-muse), [ChatGPT study](https://agent-tune.com/research/what-personality-type-is-chatgpt), and [Claude study](https://agent-tune.com/research/what-personality-type-is-claude) for full details.

## Questions people ask.

### Where do I change each assistant’s communication style?

Meta Muse uses Soul.md (Assistant icon → Identity → Soul). ChatGPT uses Settings → Personalization → Custom Instructions. Claude uses Settings → Profile → Personal preferences (plus Project Instructions and Skills).

### Does ChatGPT have a personality setting?

Yes. Under Settings → Personalization, ChatGPT provides Base style presets, four Characteristic sliders (Warm, Enthusiastic, Headers & Lists, Emoji), and two 1,500-character Custom Instructions boxes.

### How do I customize Claude?

Use Settings → Profile → Personal preferences for account-wide tone, Project Instructions for workspace context, Skills for repeatable document formats, and /output-style in Claude Code.

### Can I see everything an assistant remembers?

You can inspect and edit saved memories in Meta Muse's Memory.md, ChatGPT's Manage memories screen, and Claude's Settings → Memory panel.

### Can I move my preferences between assistants?

Yes. Use our Instruction Converter to format your communication rules for ChatGPT, Claude, or Muse Soul.md, and use the AI Memory Reviewer to clean and redact memory exports locally before importing.

### Does a short greeting prove my instructions work?

No. Always test your rules on real decision, editing, or false-premise tasks in a fresh chat.

## What changed.

- September 25, 2026 First published; facts checked against OpenAI, Anthropic and Meta help pages on September 25, 2026.

## Sources.

- [OpenAI: Personalize ChatGPT](https://learn.chatgpt.com/docs/personalize)

- [OpenAI: Desktop settings](https://learn.chatgpt.com/docs/reference/settings)

- [OpenAI: Memories and client scope](https://learn.chatgpt.com/docs/customization/memories)

- [Claude Help Center: Understanding Claude's personalization features](https://support.claude.com/en/articles/10185728)

- [Claude Help Center: Use Claude's chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)

- [Claude Help Center: Import and export your memory from Claude](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude)

- [Meta Help Center: How to customize Muse's personality and memories](https://www.meta.com/help/artificial-intelligence/995796179982326/)

- [Meta Help Center: How to manage your Muse data](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

## Keep going.

- [Guide: Meta Muse, explained](https://agent-tune.com/guides/what-is-meta-muse)
- [Guide: Give Meta Muse a character: the Soul.md guide](https://agent-tune.com/guides/muse-personality)
- [Guide: Twenty Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
- [Research: What personality type is Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
- [Guide: ChatGPT custom instructions for all 16 MBTI types](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
- [Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)
