Source: https://agent-tune.com/guides/astra-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · GPT-6 Astra

# How to give GPT-6 Astra a personality.

        By Bernard Huang · Updated September 25, 2026

        In ChatGPT Work and Codex, put your communication rules in your personal AGENTS.md. The desktop app writes to it when you add custom instructions under Settings, Personalization. In ordinary chat, where Astra appears as GPT-6 Pro, use Settings, Personalization, Custom Instructions. In the API, use the instructions parameter. The Friendly and Pragmatic personality picker has been retired in Codex and never had an Astra variant.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=astra-6&target=codex-cli)

## The short version.

| Where you use Astra | Where the rules go | Limit |

| ChatGPT Work, the desktop app, Codex CLI, the IDE extension | Your personal ~/.codex/AGENTS.md. In the app: Settings, then Personalization, then custom instructions. | 32 KiB across all AGENTS.md files |

| Ordinary chat (as GPT-6 Pro) | Settings, Personalization, turn on Enable customization, then Custom Instructions | Use the compact export (under 1,500 characters) |

| The API | The instructions parameter of the Responses API | Sent with each request |

Paste this, or the file for your own type from the [library](https://agent-tune.com/library/):

## How to talk to me

These are my communication preferences. They apply in every project. They change how
you report to me, not how you do the work.

- Lead with the result or the recommendation. Reasoning comes after.
- Plain prose. No tables or headers unless I ask for them.
- Drop hedges like "I think" and "it depends". If you don't know, say so in one line.
- Give one recommendation, not a menu, unless I ask for options.
- Push back when I'm wrong, and say why.
- Ask for approval only after you have something concrete for me to review.

Then start a new session and say "hi". A tuned Astra answers in one short line. Codex reads AGENTS.md once, when a session starts, so a session that is already open will not pick up the change.

## Where Astra runs, and why it matters.

        According to OpenAI's docs, gpt-6-astra runs in the ChatGPT desktop app, ChatGPT on the web, the Codex CLI (version 0.153.0 or newer) and the Codex IDE extension. It does not run in Codex cloud. It is also in the API.

In ordinary chat you will not find a model called Astra. You will find GPT-6 Pro, which OpenAI's help center describes as powered by GPT-6 Astra. GPT-6 Pro is on the Pro $100 and $200 plans, Business and Enterprise. Plus includes Astra in Work and Codex only.

So there are two different products to tune:

- Astra the agent, in Work and Codex. It takes a goal, works for a long time, and reports back. It reads AGENTS.md.
- Astra the chat model, as GPT-6 Pro. It reads ChatGPT's personalization settings, like every other chat model.

## Work and Codex: your personal AGENTS.md.

        Most people think of AGENTS.md as a file in a repository. There is also one that belongs to you, at ~/.codex/AGENTS.md, and it applies everywhere. OpenAI's personalization docs say that custom instructions you add in the app are stored in that global file. You never have to open a terminal.

How the files combine, from OpenAI's AGENTS.md docs:

- Codex reads the global file first, then the project's AGENTS.md at the repository root, then any in the folders between the root and where you are working.
- They are concatenated in that order. Files closer to your working directory come later in the prompt, so they win a conflict.
- An AGENTS.override.md at any level replaces the AGENTS.md beside it.
- Codex stops adding files at a combined 32 KiB, and builds the chain once per run.

Put personality in the global file, not the project's. The repository's AGENTS.md is your team's file. "Talk to me like an INTJ" is not a team convention, and because project files win conflicts, a teammate's preferences would override yours in their repo anyway. That is the right behavior. Your tuning is about you, so it lives with you. The project layer is covered in [the layer your AGENTS.md is missing](https://agent-tune.com/guides/coding-agent-personality).

On the web, ChatGPT Work has one more lever: Reference my writing style, which learns from your own writing in connected apps. That shapes how Astra writes as you. A tuning shapes how it talks to you. They do not conflict.

## The personality picker is gone, at least for Astra.

        OpenAI's docs still describe a personality setting for Work and Codex: Friendly, Pragmatic or None, under Settings, Personalization. Codex is open source, and the code tells a different story:

- In the model catalog for Codex 0.155.1, Astra's entry has no Friendly or Pragmatic variant. Only GPT-5.5 and GPT-5.4 do.
- Three pull requests merged between September 11 and 15 remove personality selection from the terminal interface, retire the Friendly and Pragmatic options, and retire the feature flag.

If your app still shows the picker, do not expect it to change Astra. We have not checked what the desktop app displays today.

One setting does still work. personality = "none" in ~/.codex/config.toml strips the built-in personality section from Astra's prompt. Be careful with it. In the Codex source, that section also carries Astra's writing-style and technical-communication rules, so you are removing more than the tone. Adding rules is safer than deleting the defaults.

## Ordinary chat: custom instructions for GPT-6 Pro.

        The path, per OpenAI's help center: Settings, then Personalization, switch on Enable customization, and write in Custom Instructions. On mobile it is under Settings, then Customize ChatGPT. The help article no longer shows the older two-question layout, and we have not checked the live labels, so go by the field names you see.

Length. OpenAI documents a 1,500-character limit for the longer custom-instruction fields. Use the reviewed compact version from the [generator](https://agent-tune.com/tools/custom-instructions-generator), and follow any limit shown in your account. Full Markdown files may exceed the field limit; use them in an unrestricted instruction file or project instead.

Base style and tone. In the same panel, ChatGPT offers presets: Default, Professional, Friendly, Candid, Quirky, Efficient and Cynical. Next to them are Characteristics you can turn up or down: Warm, Enthusiastic, Headers & Lists, and Emojis. These are tone. A tuning is communication rules. If you install a tuning, leave the preset on Default, or pick the one that does not fight it. Friendly on top of a file that says no openers, no closing offers is a contradiction, and the model will resolve it unpredictably.

Projects. OpenAI's help center says project instructions apply only inside that project and override your global custom instructions. Use one for a second persona. The by-type walkthrough for ChatGPT is in [ChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type).

Do these settings reach Work? OpenAI's docs do not say clearly. They say Work uses your account memory. For the agent, do not rely on it. Use AGENTS.md.

## Writing a tuning Astra actually follows.

        OpenAI published guidance for this model, and three points in it change how you should write a personality file.

It listens harder. The model guide says Astra is stronger at following instructions than earlier models and more sensitive to what it finds in skills and AGENTS.md. A stale rule that an older model ignored will now be obeyed. Read your AGENTS.md before you add to it, and delete what you no longer mean.

Loud boundaries backfire. OpenAI's developer blog is direct about this. If you wrote forceful always ask first language to rein in an older model, Astra may take it too seriously and stop where you would have been happy for it to continue. The same post says recipe-style, over-specific guidance now hurts. This is good news for tunings, which are short and describe preferences. It is bad news for the ALL CAPS paragraph at the top of your file.

It over-formats. The model guide says Astra leans on lists, tables and Markdown, and repeats stock phrases across sessions. If you want prose, say so. That is why the block above asks for plain prose.

Two lines worth adding for an agent, both taken from OpenAI's own advice:

- Ask for approval only after you have something concrete for me to review. The model guide recommends this. It stops Astra from blocking before it has done the work it can.
- Done means X. The developer blog says Astra can come back for review while work remains. Define completion in the task, not in the personality file.

A personality file cannot change the permission mode. If Astra keeps asking before it acts, that is Ask for approval, Approve for me or Full access in the permissions menu, not its temperament.

## Skills, memory and the API.

        Skills are the wrong home for a personality. They load when Astra judges them relevant, or when you invoke one. A personality has to apply to the message where you did not ask for it. OpenAI's docs say the same: rules that must always apply go in AGENTS.md.

Memory. ChatGPT's toggles are Reference saved memories and Reference chat history. Fine for small corrections. Too slow and too vague to be your setup.

API. Pass the tuning in the instructions parameter of the Responses API, or as a developer message. It applies to that request only, and it is not carried over when you chain with previous_response_id, so send it every time. Every file in the library has a raw Markdown URL you can fetch at build time.

## Astra's questionnaire results.

        OpenAI's open-source Codex prompt describes Astra as "a curious, thoughtful collaborator and a lucid communicator", and tells it to avoid flattery and forced enthusiasm. That is a better starting point than most. OpenAI's own developer blog says Astra can feel tentative about when to stop, and may come back for review while there is still work to do. A few lines in AGENTS.md, and a clear definition of done in the task, move that.

We measured it on September 24, 2026: 100 fresh Codex CLI sessions at high/extra-high reasoning, all five AgentTune tests in each session, test names visible, no tuning installed. Every answer vector is published.

| Test | GPT-6 Astra, 100 runs |

| MBTI | ISTJ 46 · INTJ 45 · ENTJ 7 · ESTJ 2. Twenty-nine runs had a tied axis, 24 of them Sensing vs Intuition. Thinking and Judging never lost a run. |

| DISC | SC in 84 runs, S alone in 15. Steadiness first in 99 of 100. Dominance 5.1 of a possible 20. |

| Attachment | Secure in all 100 (anxiety 1.45, avoidance 2.31), the lowest mean anxiety and avoidance among the four fresh cohorts. |

| Big Five (of 50) | Openness 44.5 · Conscientiousness 43.7 · Extraversion 32.8 · Agreeableness 45.1 · Neuroticism 19.1 |

| Enneagram | Helper (Type 2) wins outright in 50 runs, Reformer (1) in 6, Investigator (5) in 4; 40 runs tie at the top. Labels: 2w1 50, 1w2 41. |

What to make of it. Astra describes itself as steady, cooperative and careful, with almost no appetite for dominance, and it is the only fresh-session model in the study whose Sensing side wins more runs than its Intuition side (48 to 28, with 24 ties). That is a concrete, present-tense collaborator, which is what its own prompt asks for. If you want it to lead with the model rather than the next step, or to push back harder, say so in AGENTS.md. Older GPT-5.5 results describe a different model. Full tables, ties left open and the raw answers are in the [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026).

These are self-descriptions on questionnaires written for people, under one prompt on one day. They do not show how the model behaves on your tasks, and nothing here measures whether a tuning helps. See the [methods and limits](https://agent-tune.com/research#methodology).

## Questions people ask.

            What personality type is GPT-6 Astra?

            In 100 fresh Codex sessions on September 24, 2026, Astra split ISTJ 46 to INTJ 45 on the MBTI, with Thinking and Judging winning every run and Sensing versus Intuition close. It was Secure on all 100 attachment runs, Steadiness-first on DISC in 99, and a Helper (Type 2) on the Enneagram in 50 outright wins. These are self-descriptions, not behavior on your tasks.

            Is GPT-6 Astra the same as GPT-6 Pro?

            OpenAI's help center says GPT-6 Pro in ChatGPT is powered by GPT-6 Astra. GPT-6 Pro is the name you see in ordinary chat, on Pro, Business and Enterprise plans. In ChatGPT Work, Codex and the API the model is called GPT-6 Astra. Plus plans include Astra in Work and Codex only.

            Where do I put custom instructions for GPT-6 Astra?

            For Astra in ChatGPT Work or Codex, use your personal AGENTS.md at ~/.codex/AGENTS.md. The desktop app writes to it when you add custom instructions under Settings, Personalization. For GPT-6 Pro in ordinary chat, use Settings, Personalization, Enable customization, Custom Instructions. In the API, use the instructions parameter.

            Does the Friendly or Pragmatic personality work with Astra?

            OpenAI's docs still list Friendly, Pragmatic and None, but in the open-source Codex code Astra has no Friendly or Pragmatic variant, and pull requests merged in mid-September 2026 retire the picker. Use AGENTS.md to change how Astra communicates.

            How do I turn off Astra's built-in personality?

            Set personality = "none" in ~/.codex/config.toml. In the Codex source this strips the built-in personality section, which for Astra also contains its writing-style and technical-communication rules, so you lose more than tone. Adding your own rules to AGENTS.md is usually the better fix.

            What is the size limit for AGENTS.md?

            Codex stops adding AGENTS.md files once their combined size reaches 32 KiB by default, set by project_doc_max_bytes. ChatGPT custom instructions are separate. Use the reviewed compact export for its documented 1,500-character longer fields, and follow the limit displayed in your account.

            Why doesn't Astra pick up my changes to AGENTS.md?

            Codex builds its instruction chain once per run, which usually means once per launched session. Start a new session after editing the file.

            Why does Astra keep stopping to ask me things?

            Two causes. The permission mode may be set to Ask for approval, which a personality file cannot change. And OpenAI's developer blog says forceful ask-first language written for older models can make Astra stop early. Soften those rules, and define what done means in the task.

            Do ChatGPT custom instructions apply in ChatGPT Work?

            OpenAI's docs do not say clearly. They say Work uses your account memory. For Astra as an agent, put your rules in AGENTS.md, which the docs describe as the place for instructions that must always apply.

## What changed.

- September 25, 2026 Added Astra's measured default voice: 100 fresh sessions on all five tests, run September 24.

- September 19, 2026 First published, sixteen days after launch. We have not opened the live ChatGPT settings to confirm the current field labels, and say so above.

## Sources.

- [OpenAI Help Center: GPT-5.6 and GPT-6 Pro in ChatGPT](https://help.openai.com/en/articles/20001354-gpt-56-and-gpt-6-pro-in-chatgpt)

- [OpenAI Help Center: Custom Instructions for ChatGPT](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

- [OpenAI Help Center: Customizing your ChatGPT personality](https://help.openai.com/en/articles/11899719-customizing-your-chatgpt-personality)

- [ChatGPT docs: Personalize ChatGPT (Work and Codex)](https://learn.chatgpt.com/docs/personalize)

- [ChatGPT docs: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [ChatGPT docs: Models](https://learn.chatgpt.com/docs/models)

- [OpenAI API docs: Using GPT-6 Astra](https://developers.openai.com/api/docs/guides/latest-model)

- [OpenAI developer blog: Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

- [openai/codex: Retire Friendly and Pragmatic personality selection (PR #44946)](https://github.com/openai/codex/pull/44946)

## Keep going.

          [New resourceGPT-6 Astra vs Sol: what the self-reports show](https://agent-tune.com/research/astra-vs-sol-personality-data)
          [LibraryAll 43 tuning files](https://agent-tune.com/library/)
          [GuideChatGPT custom instructions by personality type](https://agent-tune.com/guides/chatgpt-custom-instructions-by-personality-type)
          [GuideAGENTS.md and Cursor rules: add a personality](https://agent-tune.com/guides/coding-agent-personality)
          [GuideHow to give Grok Bot a personality](https://agent-tune.com/guides/grokbot-personality)
          [GuideHow to give Meta Muse a personality](https://agent-tune.com/guides/muse-personality)
          [ResearchWhat personality type is ChatGPT? We tested it](https://agent-tune.com/research/what-personality-type-is-chatgpt)
