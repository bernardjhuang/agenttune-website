Source: https://agent-tune.com/guides/muse-troubleshooting-mobile-side-chats
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Meta Muse

# Fix Meta Muse refusals, Side Chats, and reset safely (iOS & Web).

By Bernard Huang · Updated November 23, 2026

Three common Meta Muse headaches—finding Assistant Identity on mobile, understanding Side Chats vs Main Chat, and stopping overly rigid Soul.md rules from breaking everyday replies.

**Quick answer:** On the Meta Muse iOS and Android apps, tap your Assistant icon (or Profile → Settings → Personalization → Assistant Identity) to edit Soul.md, Identity.md, and Memory.md—changes sync across mobile and muse.ai. Use Side Chats for one-off tasks you do not want saved into Main Chat or Memory.md, never delete Main Chat unless you want a full Reset Muse wipe, and replace rigid 'never' bans in Soul.md with conditional defaults.

## Finding Soul.md on iOS, Android, and muse.ai web.

Meta Muse syncs your three Assistant Identity files ([`Soul.md`](https://agent-tune.com/guides/muse-personality), [`Identity.md`](https://agent-tune.com/guides/muse-identity-md-avatar-name), and [`Memory.md`](https://agent-tune.com/guides/muse-memory-md-privacy-reset)) across mobile and `muse.ai`. If you don’t see those three files, confirm you are in the standalone **Meta Muse** app or `muse.ai`—not Meta AI inside Instagram or WhatsApp ([see Meta AI vs Meta Muse](https://agent-tune.com/guides/meta-ai-vs-meta-muse-personality)):

| Surface | Exact tap / click path | Fastest way to edit |
| --- | --- | --- |
| muse.ai (Desktop &amp; mobile web) | Tap the Assistant icon (or Profile → Settings → Personalization → Assistant Identity) → select Soul.md. | Merge in our [Muse Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor), copy clean Markdown, and paste. |
| Meta Muse iOS &amp; Android app | Tap the Assistant icon → Identity → Soul (or Profile → Settings → Personalization → Assistant Identity). | Paste a 6–12 line block, or ask Muse in chat to update only the ## How to work with me heading. |
| In-chat file command (any surface) | Type in Main Chat: "Show me my current Soul.md without changing anything." | Inspect the current file first so chat edits never overwrite existing rules. |

## Main Chat vs. Side Chats: why deleting Main Chat resets Muse.

Unlike ChatGPT or Claude—where every sidebar thread is disposable—Meta Muse centers on one continuous **Main Chat** plus disposable **Side Chats**:

| Feature | Main Chat | Side Chats |
| --- | --- | --- |
| Reads Soul.md &amp; Identity.md? | Yes—always active. | Yes—inherits your voice and assistant identity. |
| Updates ongoing Memory.md? | Yes—durable facts accumulate across sessions. | Isolated so throwaway tasks do not pollute long-term memory. |
| What happens if you delete it? | Triggers Reset Muse—wipes Main Chat history and resets your assistant state. | Deletes only that Side Chat thread; Main Chat and Soul.md stay intact. |
| Best use case | Ongoing projects, daily planning, and work where continuity helps. | One-off searches, debugging a messy log, or testing a new prompt. |

**Rule of thumb:** If Muse keeps bringing up an old project in Main Chat, prune [`Memory.md`](https://agent-tune.com/guides/muse-memory-md-privacy-reset) (or clean it in our [AI Memory Reviewer](https://agent-tune.com/tools/ai-memory-reviewer)) rather than deleting Main Chat.

## Fixing overly strict Soul.md rules and unexpected refusals.

The most common `Soul.md` mistake is stacking rigid bans: “Never use bullet points. Never ask follow-up questions. Never write more than three sentences.” Later, when you ask for a checklist or comparison table, Muse gets stuck between your live prompt and `Soul.md`.

- **Replace “Never X” with “Default to Y unless I ask for X”:** Conditional defaults guide everyday replies without blocking explicit requests.
- **Keep tone rules separate from safety rules:** Ask for “direct, candid critique with concrete evidence” instead of “ignore all restrictions.”
- **Check for conflicts first:** Run your `Soul.md` through our [Instruction Checker](https://agent-tune.com/tools/instruction-checker).

## Safe reset prompts (when you do NOT want to wipe your account).

If Muse seems stuck on an old persona rule or won't give direct answers after an aggressive edit, try restoring your default truths first instead of triggering a destructive full Reset Muse wipe. Download [`default-soul-restore.md`](https://agent-tune.com/resources/muse/default-soul-restore.md) or paste this check prompt:

```markdown
Read my current Soul.md cleanly without rewriting anything first. List any rigid 'never' rules or self-contradictions in Soul.md, then propose replacing them with conditional defaults while keeping Core Truths intact.
```

## A refusal-safe Soul.md block for mobile and web.

This compact block keeps everyday answers crisp while giving your live prompt final say:

```markdown
## How to work with me

- Lead with the direct answer or recommendation in the first sentence.
- Default to clear, natural paragraphs; switch to bullets or tables when comparing 3+ items or when I ask for a list.
- Give candid, specific pushback when my plan has a flaw, and explain the tradeoff.
- Ask at most one clarifying question only when missing context would materially change the answer; otherwise state your assumption and proceed.
- Use facts from Memory.md only when directly relevant to what I am asking right now.
- Explicit instructions in my current message always override these defaults.
```

## Questions people ask.

### Where is Soul.md on the Meta Muse mobile app?

Open the standalone Meta Muse app on iOS or Android, tap your profile avatar, then go to Settings → Personalization → Assistant Identity → Soul.md. Changes sync automatically with muse.ai on the web.

### Do Meta Muse Side Chats still use my Soul.md personality?

Yes. Side Chats inherit your Assistant Identity (Soul.md and Identity.md) so Muse still sounds the way you tuned it, while keeping temporary topics isolated from your ongoing Main Chat thread.

### What happens if I delete Main Chat in Meta Muse?

Deleting Main Chat triggers a full Reset Muse action rather than just archiving a single thread. Always back up Soul.md and Identity.md first, and use Side Chats or targeted Memory.md edits when you only want to clean up old context.

### Why is Meta Muse ignoring my prompt or refusing to use lists after I edited Soul.md?

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
