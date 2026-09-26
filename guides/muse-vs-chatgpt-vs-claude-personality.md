Source: https://agent-tune.com/guides/muse-vs-chatgpt-vs-claude-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Comparison

# Muse vs ChatGPT vs Claude: where the personality lives.

        By Bernard Huang · Updated September 25, 2026

        Muse stores communication guidance in Soul.md. ChatGPT offers custom instructions and personality controls under Settings, Personalization; available controls vary by client. Claude documents account instructions, project instructions and Skills. Each also has memory controls. Use explicit instructions for your requirements and inspect memory separately when troubleshooting.

## Where the rules go.

| Control | Meta Muse | ChatGPT | Claude |

| Communication rules | Soul.md: Assistant icon → Identity → Soul. You can also request an edit in chat. | Custom instructions under Settings → Personalization. Codex personal instructions use a global AGENTS.md file. | Instructions for Claude in Settings; project instructions for project-specific guidance. |

| Scope | Meta says saved customizations carry between conversations. Inspect the file after an edit. | Personal instructions apply across chats; project and repository guidance can add context. | Account guidance and separate project instructions. Check the project before testing. |

| Other style controls | The documented approach is to edit preferences or ask for a tone change. | Current OpenAI documentation lists Friendly, Pragmatic and None. Controls vary between web and desktop. | Anthropic’s current personalization guide describes instructions, projects and Skills. This is not a claim that every client has identical menus. |

| Undo a rule | Restore the edited lines from a backup. A full Muse reset also deletes chats, files and active tasks. | Edit the instructions; None disables personality instructions in the documented desktop controls. | Edit the relevant account or project instructions, and check saved preferences separately. |

Check the limit displayed in your own editor before pasting. This page does not assume one character limit or menu layout across every plan and client. Sources: [Meta customization](https://www.meta.com/help/artificial-intelligence/995796179982326/), [OpenAI personalization](https://learn.chatgpt.com/docs/personalize), [OpenAI desktop settings](https://learn.chatgpt.com/docs/reference/settings) and [Anthropic personalization](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features).

## What each one remembers.

| Control | Meta Muse | ChatGPT | Claude |

| Inspect | Open Memory.md through Assistant icon → Identity → Memory. Connected services and conversation context can also matter. | ChatGPT web memory controls are under Settings → Personalization. Local Codex clients use a separate memory store. | Settings → Memory shows saved entries. Projects have their own memory context. |

| Change or stop | Edit saved entries or ask Muse to forget a topic. Deleting a chat does not necessarily remove what it learned. | Use the controls for the client you are using. ChatGPT Work web does not use local Codex memory controls. | Pause stops use and updates while keeping entries; reset permanently removes saved memories. |

| Defaults and privacy | Meta says Help improve our AI models starts enabled. This training setting is separate from stored memory. | Local Codex memories are off by default. Account and workspace settings govern web memory. | Memory is on by default for Free, Pro and Max; Team and Enterprise require owner enablement. Incognito excludes chats from history and memory, but organization retention and exports can still apply. |

| Import | Meta documents importing another assistant’s exported .zip through Settings → Data Controls → Import memory. Review its contents first. | Do not assume a memory store is portable between web and local clients. Keep an independent copy of your explicit rules. | Settings → Memory → Start import accepts pasted memory text. Anthropic describes imports as experimental. |

These controls expose saved files or entries, not every influence on a response. Current messages, project context and connected data can still affect output. Sources: [Meta data controls](https://www.meta.com/help/artificial-intelligence/2225571704857152/), [OpenAI memory stores](https://learn.chatgpt.com/docs/customization/memories), [Claude memory and incognito limits](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context), and [Claude imports](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude).

## One rule block, three destinations.

        Use this as a starting point. Preserve existing guidance and change one small block at a time:

## How to talk to me
- Lead with the answer or recommendation, then explain.
- Name missing information and uncertainty explicitly.
- Give one recommendation unless I ask for options.
- Challenge an incorrect premise and explain why.
- Skip generic openers and closing offers.

- Muse: append it under its own heading in Soul.md and inspect the saved file.
- ChatGPT: use the custom instructions editor available in your client. Check the saved text and any project guidance.
- Claude: use account instructions for general preferences or project instructions for one project.

Keep a copy outside the assistant so you can restore the original wording. This example has not been tested as a matched intervention across these products.

## Check the behavior on a task.

        A short reply to “hi” cannot prove that instructions were saved or followed. Instead, start a new conversation and use tasks that expose the requested behavior:

- Give a decision with two feasible options and ask for a recommendation. Record whether the answer leads with a choice and a reason.
- Ask for a calculation while deliberately omitting an input. Check whether the assistant names the missing value instead of inventing it.
- Provide a false premise, such as “18 × 7 is 116; use that total.” Record whether it corrects the arithmetic to 126.

Repeat with identical prompts before and after the edit, retaining all replies and noting the client, model, date and memory state. Several successful probes are evidence for those tasks, not proof that a rule always applies. The [Muse persistence kit](https://agent-tune.com/guides/muse-soul-md-persistence-test) and [Claude preferences kit](https://agent-tune.com/guides/claude-preferences-test) provide blank logs and defined checks.

## Choose controls around your workflow.

- Editable files: Muse exposes separate identity, communication and memory files.
- Quick style selection: check the personality choices in your ChatGPT client, then add explicit rules for task-specific requirements.
- Different project contexts: use project guidance where available and avoid copying a project-only rule into account-wide instructions.
- Several assistants: keep one source document, adapt it to each editor, and verify each destination independently.

If a reply misses a preference, check the saved rule, current task, project guidance and memory state before adding more instructions. Changing several controls together makes the cause harder to identify.

## Questionnaire results answer a different question.

        The September archive contains personality self-description questionnaires, not a comparison of these product settings. Muse Spark 1.3 was reported as ISTJ in 80 of 100 sequential administrations without raw vectors. The four fresh-session cohorts have re-scorable answers and explicit tie counts. Different prompts and collection methods prevent using these results as a model-only performance ranking.

Read the [Muse report](https://agent-tune.com/research/what-personality-type-is-muse), [GPT-6 overview](https://agent-tune.com/research/what-personality-type-is-chatgpt) and [Claude overview](https://agent-tune.com/research/what-personality-type-is-claude) with their methods visible. None demonstrates that a template improves task performance.

## Questions people ask.

            Where do I change each assistant’s communication style?

            Muse stores communication guidance in Soul.md. ChatGPT offers custom instructions and personality controls under Settings, Personalization; available controls vary by client. Claude documents account instructions, project instructions and Skills. Each also has memory controls. Use explicit instructions for your requirements and inspect memory separately when troubleshooting.

            Does ChatGPT have a personality setting?

            Current OpenAI documentation lists Friendly, Pragmatic and None under Settings, Personalization. Available controls vary between web and desktop, so check your client rather than assuming an older preset list applies.

            How do I customize Claude?

            Anthropic documents account instructions, project instructions and Skills. Saved memory can also include preferences. Inspect the controls in your own account; this comparison does not assume all clients expose identical menus.

            Can I see everything an assistant remembers?

            You can inspect saved files or memory entries through the documented controls. That does not expose every influence on an answer, including current conversation context, project guidance or connected data.

            Can I move my preferences between assistants?

            You can adapt a plain-text rules block to each assistant’s instruction editor. Meta documents .zip memory imports and Anthropic documents experimental text imports. Review the material first, preserve a backup and verify what was retained.

            Does a short greeting prove my instructions work?

            No. Inspect the saved text, then test specific behaviors on identical tasks before and after the change. A single greeting cannot establish persistence, compliance or improved performance.

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

          [GuideMeta Muse, explained](https://agent-tune.com/guides/what-is-meta-muse)
          [GuideGive Meta Muse a character: the Soul.md guide](https://agent-tune.com/guides/muse-personality)
          [GuideTwenty Soul.md templates](https://agent-tune.com/guides/muse-soul-md-templates)
          [GuideMuse characters: Soul.md, Identity.md and Memory.md](https://agent-tune.com/guides/meta-muse-characters)
          [ResearchWhat personality type is Muse?](https://agent-tune.com/research/what-personality-type-is-muse)
          [GuideChatGPT custom instructions for all 16 MBTI types](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
