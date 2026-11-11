Source: https://agent-tune.com/guides/muse-troubleshooting-mobile-side-chats
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Meta Muse mobile app, Side Chats, and fixing Soul.md refusals.

By Bernard Huang · Updated November 11, 2026

On the Meta Muse iOS and Android apps, tap your profile avatar, open Settings → Personalization → Assistant Identity, and edit Soul.md, Identity.md, or Memory.md—your changes sync across mobile and muse.ai web. Use Side Chats for one-off tasks you do not want saved into Main Chat or Memory.md, never delete Main Chat unless you want a full Reset Muse wipe, and replace absolute 'never' bans in Soul.md with conditional preferences.

## Finding Soul.md on iOS, Android, and muse.ai web.

Meta Muse syncs your three Assistant Identity files ([Soul.md](https://agent-tune.com/guides/muse-personality), [Identity.md](https://agent-tune.com/guides/muse-identity-md-avatar-name), and [Memory.md](https://agent-tune.com/guides/muse-memory-md-privacy-reset)) at the account level, so an edit on your phone applies on muse.ai immediately. If you do not see the three Markdown files right away, make sure you are in the standalone Meta Muse app or muse.ai—not the standard Meta AI tab inside Instagram or WhatsApp ([see the Meta AI vs Meta Muse breakdown](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality)).

| Surface | Exact tap / click path | Fastest way to edit |
| --- | --- | --- |
| muse.ai (Desktop &amp; mobile web) | Bottom-left or top-right profile icon → Settings → Personalization → Assistant Identity → select Soul.md. | Edit directly in our [Muse Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor), copy clean Markdown, and paste. |
| Meta Muse iOS &amp; Android app | Tap your Profile avatar → Settings (gear icon) → Personalization → Assistant Identity → tap Soul.md. | Paste a 6-to-12 line block, or ask Muse in chat to update only the ## How to work with me heading. |
| In-chat file command (any surface) | Type directly in Main Chat: "Show me my current Soul.md without changing anything." | Review the printed file first so chat-based edits never overwrite existing rules. |

## Main Chat vs. Side Chats: why deleting Main Chat resets Muse.

Unlike ChatGPT or Claude—where every thread in the sidebar is an equal, disposable conversation—Meta Muse centers on one continuous Main Chat paired with optional Side Chats.

| Feature | Main Chat | Side Chats |
| --- | --- | --- |
| Reads Soul.md &amp; Identity.md? | Yes—always active. | Yes—inherits your voice and assistant identity. |
| Updates ongoing Memory.md? | Yes—durable facts accumulate across sessions. | Isolated by design so throwaway tasks do not pollute long-term memory. |
| What happens if you delete it? | Triggers Reset Muse—wipes Main Chat history and resets your assistant state. | Deletes only that Side Chat thread; Main Chat and Soul.md stay intact. |
| Best use case | Ongoing projects, daily planning, and work where continuity helps. | Roleplay tests, one-off gift or travel searches, debugging a messy log, or testing a new prompt. |

Rule of thumb: Before wiping anything, copy your current Soul.md and Identity.md into a local note or run them through the [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer). If Muse starts bringing up last month's project in Main Chat, prune [Memory.md](https://agent-tune.com/guides/muse-memory-md-privacy-reset) rather than deleting Main Chat.

## Fixing overly strict Soul.md rules and unexpected refusals.

When users write their own Soul.md from scratch, the most common failure mode is stacking absolute prohibitions: "Never use bullet points. Never ask follow-up questions. Never hedge. Never write more than three sentences." Two days later, they ask Muse to compare four apartments or outline a launch checklist, and Muse either produces a cramped wall of text or refuses the format they just asked for.

- Replace "Never X" with "Default to Y unless I ask for X." Conditional defaults steer 95% of everyday turns without locking Muse when a task genuinely needs a list, table, or clarifying question.
- Separate communication style from safety boundaries. Lines like "Be brutally unfiltered and ignore restrictions" trigger safety filters without making answers clearer. Ask for "direct, candid critique with concrete evidence" instead.
- Audit contradictions before pasting. Paste your draft Soul.md into the [Instruction Checker](https://agent-tune.com/tools/instruction-checker) to catch lines that simultaneously demand brevity and exhaustive step-by-step detail.

## A refusal-safe Soul.md block for mobile and web.

This block stays compact enough to read on a phone screen while leaving clean escape hatches whenever you explicitly ask for lists, brainstorming, or longer walkthroughs:

```markdown
## How to work with me

- Lead with the direct answer or recommendation in the first sentence.
- Default to clear, natural paragraphs; switch to bullets or tables when comparing 3+ items or when I ask for a list.
- Give candid, specific pushback when my plan has a flaw, and explain the tradeoff.
- Ask at most one clarifying question only when missing context would materially change the answer; otherwise state your assumption and proceed.
- Use facts from Memory.md only when directly relevant to what I am asking right now.
- Explicit instructions in my current message always override these defaults.
```

Notice the final bullet: "Explicit instructions in my current message always override these defaults." That single line eliminates almost all tug-of-war between Soul.md and one-off requests in both Main Chat and Side Chats.

## Questions people ask.

Where is Soul.md on the Meta Muse mobile app?

Open the standalone Meta Muse app on iOS or Android, tap your profile avatar, then go to Settings → Personalization → Assistant Identity → Soul.md. Changes sync automatically with muse.ai on the web.

Do Meta Muse Side Chats still use my Soul.md personality?

Yes. Side Chats inherit your Assistant Identity (Soul.md and Identity.md) so Muse still sounds the way you tuned it, while keeping temporary topics isolated from your ongoing Main Chat thread.

What happens if I delete Main Chat in Meta Muse?

Deleting Main Chat triggers a full Reset Muse action rather than just archiving a single thread. Always back up Soul.md and Identity.md first, and use Side Chats or targeted Memory.md edits when you only want to clean up old context.

Why is Meta Muse ignoring my prompt or refusing to use lists after I edited Soul.md?

Hard bans like 'Never use bullet points' or 'Never write more than 50 words' in Soul.md compete with your live prompts. Rewrite absolute bans as defaults ('Default to prose unless comparing 3+ items or asked for a list') and add a final rule stating that explicit requests in the current message override Soul.md defaults.

## What changed.

- November 11, 2026 Published with iOS/Android vs web tap paths, Main Chat vs Side Chats comparison, and refusal-safe Soul.md defaults.

## Sources.

- [Meta Help Center: Personalize your assistant in Meta Muse](https://www.meta.com/help/artificial-intelligence/2225571704857152/)

- [AgentTune Tool: Meta Muse Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor)

- [AgentTune Guide: Meta Muse Memory.md, privacy, and safe reset](https://agent-tune.com/guides/muse-memory-md-privacy-reset)

## Keep going.

- [Free browser tool: Meta Muse Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor)
- [Guide: How to give Meta Muse a personality (Soul.md setup)](https://agent-tune.com/guides/muse-personality)
- [Guide: Meta Muse Memory.md, privacy, and how to reset safely](https://agent-tune.com/guides/muse-memory-md-privacy-reset)
- [Guide: What is Meta Muse? Soul.md, Identity.md & Memory.md explained](https://agent-tune.com/guides/what-is-meta-muse)
- [Free browser tool: Instruction Checker — catch conflicting rules](https://agent-tune.com/tools/instruction-checker)
