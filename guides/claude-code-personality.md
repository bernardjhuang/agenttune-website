Source: https://agent-tune.com/guides/claude-code-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Code

# How to change Claude Code's personality.

        By Bernard Huang · Updated September 25, 2026

        Save a Markdown file to ~/.claude/output-styles/ with name and description front-matter and your communication rules as the body. Add keep-coding-instructions: true, or a custom style drops Claude Code's built-in software-engineering instructions. Select it with /output-style or under /config. AgentTune ships all 43 personality tunings as ready-made styles.

      Adapt the communication prompts

Choose your model to update the communication prompts below. For a full tuning and installation steps, [open the prompt generator →](https://agent-tune.com/tools/custom-instructions-generator?model=fable-5-1&target=claude-code)

## The twenty-second version.

        Download a ready-made style, preserving any existing customized file, then pick it:

tuning_dir=$(mktemp -d ./agenttune.XXXXXX) &&\
  curl --fail --show-error --location https://agent-tune.com/output-styles/agenttune-mbti-intj.md \
  --output "$tuning_dir/style.md" &&\
  mkdir -p ~/.claude/output-styles &&\
  (set -C; cat "$tuning_dir/style.md" > ~/.claude/output-styles/agenttune-mbti-intj.md)

- Restart Claude Code. The docs say custom style files are read at startup.
- Run /output-style and choose AgentTune INTJ, or open /config and set Output style.
- Say "hi". A tuned session answers in one short line.

That is the INTJ file. There are 43, one per type, listed further down. They are plain Markdown and MIT licensed, so edit them.

If /output-style is not recognized, update Claude Code. The command was deprecated in March 2026 and brought back in version 2.1.269, on September 11. /config works either way.

## Four places to put it. They do different jobs.

        This is the comparison Claude Code's own docs draw, in our words.

| Where | What it does | Loads | Use it for |

| Output style | Changes the default instructions Claude Code works from | Every turn | Role and tone. Your personality file. |

| CLAUDE.md | Arrives as a message after the system prompt | Every session | Project conventions, commands, architecture |

| --append-system-prompt | Appends text to the system prompt at launch. Removes nothing. | That launch | A one-off, or a script |

| --agent | Runs the whole session as a subagent with its own prompt, model and tools | That session | Replacing who Claude Code is |

Two details in there decide it. CLAUDE.md is not part of the system prompt, and the docs say plainly that compliance with it is not guaranteed. An output style is sent with every request, with reminders during the conversation. If you want a rule followed at turn ninety, that is the difference.

## Output styles, and the flag that matters.

        Claude Code ships five: Default, Proactive (acts and assumes instead of asking), Concise (result first, short), Explanatory (adds educational insights) and Learning (leaves TODO(human) markers for you to implement). If one of those is the change you wanted, you are done. Run /output-style Concise.

A custom style is a Markdown file in ~/.claude/output-styles/ for all your work, or .claude/output-styles/ inside one project. The nearest one wins. The front-matter takes four keys:

- name: what appears in the picker. Defaults to the file name.
- description: shown next to it.
- keep-coding-instructions: default false.
- force-for-plugin: for plugins only.

That third key is the trap. A custom style, by default, drops Claude Code's built-in software-engineering instructions. That is deliberate. Output styles were designed so people could turn Claude Code into something that is not a coding agent at all. If what you wanted was the same engineer with better manners, you have to say so:

---
name: Straight answers
description: Conclusion first, no hedging, one recommendation.
keep-coding-instructions: true
---

How to talk to the person you are working with:

- Lead with the answer or the recommendation. Reasoning comes after.
- Drop hedges like "I think" and "it depends". If you don't know, say so in one line.
- Give one recommendation, not a menu, unless asked for options.
- Push back when they are wrong, and say why.
- No openers, no recap of what they just said, no closing offers.

People who find their custom style made Claude Code worse at coding have usually hit exactly this. Every file in our pack sets the flag to true, and opens by telling Claude Code that the rules change how it talks, not how it engineers.

You can also set the style without the menu, by putting "outputStyle": "AgentTune INTJ" in a settings file. The menus save your choice to .claude/settings.local.json. One limit: a style reaches the main conversation and its forks. Other subagents do not get it.

## The 43-style pack.

        One output style per tuning. Each name links to the type's page, which shows the rules in plain English and a before-and-after. File is the download. The install command is the one at the top of this page with the file name swapped. A machine-readable list is at [/output-styles/index.json](https://agent-tune.com/output-styles/index.json).

- MBTI. [INTJ](https://agent-tune.com/library/mbti/intj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-intj.md)) · [INTP](https://agent-tune.com/library/mbti/intp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-intp.md)) · [INFJ](https://agent-tune.com/library/mbti/infj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-infj.md)) · [INFP](https://agent-tune.com/library/mbti/infp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-infp.md)) · [ISTJ](https://agent-tune.com/library/mbti/istj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-istj.md)) · [ISTP](https://agent-tune.com/library/mbti/istp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-istp.md)) · [ISFJ](https://agent-tune.com/library/mbti/isfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-isfj.md)) · [ISFP](https://agent-tune.com/library/mbti/isfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-isfp.md)) · [ENTJ](https://agent-tune.com/library/mbti/entj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-entj.md)) · [ENTP](https://agent-tune.com/library/mbti/entp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-entp.md)) · [ENFJ](https://agent-tune.com/library/mbti/enfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-enfj.md)) · [ENFP](https://agent-tune.com/library/mbti/enfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-enfp.md)) · [ESTJ](https://agent-tune.com/library/mbti/estj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-estj.md)) · [ESTP](https://agent-tune.com/library/mbti/estp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-estp.md)) · [ESFJ](https://agent-tune.com/library/mbti/esfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-esfj.md)) · [ESFP](https://agent-tune.com/library/mbti/esfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-esfp.md))
- Enneagram. [Enneagram 1](https://agent-tune.com/library/enneagram/1-reformer) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-1-reformer.md)) · [Enneagram 2](https://agent-tune.com/library/enneagram/2-helper) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-2-helper.md)) · [Enneagram 3](https://agent-tune.com/library/enneagram/3-achiever) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-3-achiever.md)) · [Enneagram 4](https://agent-tune.com/library/enneagram/4-individualist) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-4-individualist.md)) · [Enneagram 5](https://agent-tune.com/library/enneagram/5-investigator) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-5-investigator.md)) · [Enneagram 6](https://agent-tune.com/library/enneagram/6-loyalist) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-6-loyalist.md)) · [Enneagram 7](https://agent-tune.com/library/enneagram/7-enthusiast) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-7-enthusiast.md)) · [Enneagram 8](https://agent-tune.com/library/enneagram/8-challenger) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-8-challenger.md)) · [Enneagram 9](https://agent-tune.com/library/enneagram/9-peacemaker) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-9-peacemaker.md))
- DISC. [DISC D](https://agent-tune.com/library/disc/d-dominance) ([file](https://agent-tune.com/output-styles/agenttune-disc-d-dominance.md)) · [DISC I](https://agent-tune.com/library/disc/i-influence) ([file](https://agent-tune.com/output-styles/agenttune-disc-i-influence.md)) · [DISC S](https://agent-tune.com/library/disc/s-steadiness) ([file](https://agent-tune.com/output-styles/agenttune-disc-s-steadiness.md)) · [DISC C](https://agent-tune.com/library/disc/c-conscientiousness) ([file](https://agent-tune.com/output-styles/agenttune-disc-c-conscientiousness.md))
- Attachment style. [Secure attachment](https://agent-tune.com/library/attachment/secure) ([file](https://agent-tune.com/output-styles/agenttune-attachment-secure.md)) · [Anxious attachment](https://agent-tune.com/library/attachment/anxious) ([file](https://agent-tune.com/output-styles/agenttune-attachment-anxious.md)) · [Avoidant attachment](https://agent-tune.com/library/attachment/avoidant) ([file](https://agent-tune.com/output-styles/agenttune-attachment-avoidant.md)) · [Disorganized attachment](https://agent-tune.com/library/attachment/disorganized) ([file](https://agent-tune.com/output-styles/agenttune-attachment-disorganized.md))
- Big Five. [High Openness](https://agent-tune.com/library/ocean/openness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-openness-high.md)) · [Low Openness](https://agent-tune.com/library/ocean/openness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-openness-low.md)) · [High Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-conscientiousness-high.md)) · [Low Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-conscientiousness-low.md)) · [High Extraversion](https://agent-tune.com/library/ocean/extraversion-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-extraversion-high.md)) · [Low Extraversion](https://agent-tune.com/library/ocean/extraversion-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-extraversion-low.md)) · [High Agreeableness](https://agent-tune.com/library/ocean/agreeableness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-agreeableness-high.md)) · [Low Agreeableness](https://agent-tune.com/library/ocean/agreeableness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-agreeableness-low.md)) · [High Neuroticism](https://agent-tune.com/library/ocean/neuroticism-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-neuroticism-high.md)) · [Low Neuroticism](https://agent-tune.com/library/ocean/neuroticism-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-neuroticism-low.md))

Don't know your type? The [free MBTI test](https://agent-tune.com/tests/mbti) takes about five minutes. Four other instruments are at [/tests/](https://agent-tune.com/tests/) if MBTI is not your frame.

## CLAUDE.md: right for the project, wrong for you.

        CLAUDE.md still matters. It is just answering a different question. The docs give the load order: a managed policy file, then ~/.claude/CLAUDE.md, then ./CLAUDE.md or ./.claude/CLAUDE.md, then ./CLAUDE.local.md. The files are concatenated, none overrides another, and the docs suggest keeping each under 200 lines.

Three reasons your personality does not belong in the project's CLAUDE.md:

- It is shared. The repo's CLAUDE.md is your team's file. "Talk to me like an ENFP" is not a team convention.
- It is weaker. It arrives as a message, not as part of the system prompt.
- It competes. Every line about your temperament is a line not spent on how to run the tests.

If you want it in a CLAUDE.md anyway, use ~/.claude/CLAUDE.md or CLAUDE.local.md, which are yours alone, and keep it to a few lines. /memory opens the files for editing, and /context shows what actually loaded. For what belongs in the project file, see [CLAUDE.md examples](https://agent-tune.com/guides/claude-md-examples).

## Flags and agents: for one-offs and full replacements.

        --append-system-prompt and --append-system-prompt-file add text to the system prompt and remove nothing. They work in interactive and non-interactive mode. Good for a script, or for trying a tuning once:

claude --append-system-prompt-file ~/.claude/output-styles/agenttune-mbti-intj.md

--system-prompt and --system-prompt-file replace the whole system prompt. That is almost never what you want for a personality. One catch from the docs: the prompt is recorded at a conversation's first request, so changing these flags on --resume or --continue only takes effect after compaction or in a new conversation.

claude --agent <name>, or "agent": "<name>" in .claude/settings.json, runs the entire session as one of your subagents. Its file body becomes the system prompt, replacing the default the way --system-prompt does. CLAUDE.md still loads. This is how you build a different character entirely. It is a bigger hammer than a personality needs.

For a team, a plugin can ship output styles in an output-styles/ folder at its root.

## What a personality file should not touch.

        Keep the two layers apart. The personality layer says how to talk to you: what to lead with, how to disagree, when to stop asking questions. The engineering layer says how to build: conventions, tests, what never to commit. When they blur you get a style that says "be decisive" being read as "skip the tests".

The line we put at the top of every file in the pack:

These rules change how you talk: what you lead with, how you frame decisions, how you disagree, when you stop asking questions. They do not change how you engineer.

The same separation applies to Cursor rules, AGENTS.md and Copilot instructions. That is covered in [the layer your AGENTS.md is missing](https://agent-tune.com/guides/coding-agent-personality).

## Questions people ask.

            Does Claude Code have a personality setting?

            Yes. It is called an output style. Claude Code ships five built-in styles (Default, Proactive, Concise, Explanatory and Learning), and you can add your own as Markdown files in ~/.claude/output-styles/. Switch with /output-style or under /config.

            What is the difference between an output style and CLAUDE.md?

            An output style changes the default instructions Claude Code works from and is sent on every turn. CLAUDE.md arrives as a message after the system prompt, and the docs say compliance is not guaranteed. Use an output style for role and tone, and CLAUDE.md for project conventions, commands and architecture.

            Why did my custom output style make Claude Code worse at coding?

            Custom styles drop Claude Code's built-in software-engineering instructions unless the file sets keep-coding-instructions: true. The default is false. Add that line to the front-matter and restart Claude Code.

            Is /output-style deprecated?

            It was deprecated in March 2026 and brought back in Claude Code 2.1.269 on September 11, 2026, according to the changelog. On older versions, set the style under /config, or put an outputStyle key in a settings file.

            Do output styles apply to subagents?

            A style reaches the main conversation and its forks. Other subagents do not receive it, and they do not get Claude Code's default system prompt either. A subagent's own file body is its system prompt.

            Can I share an output style with my team?

            Yes. Commit it to .claude/output-styles/ in the repo, or ship it in a plugin's output-styles folder. A personality style is usually personal, though, so most people keep it in ~/.claude/output-styles/.

            Where do custom output styles live?

            In ~/.claude/output-styles/ for every project, or .claude/output-styles/ inside one project. The nearest one wins. Restart Claude Code after adding or editing a file.

## What changed.

- September 19, 2026 First published, with the 43-style pack. Checked against Claude Code 2.1.278.

## Sources.

- [Claude Code docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [Claude Code docs: Memory and CLAUDE.md](https://code.claude.com/docs/en/memory)

- [Claude Code docs: CLI reference](https://code.claude.com/docs/en/cli-reference)

- [Claude Code docs: Subagents](https://code.claude.com/docs/en/sub-agents)

- [Claude Code docs: Plugins reference](https://code.claude.com/docs/en/plugins-reference)

- [Claude Code changelog](https://code.claude.com/docs/en/changelog)

## Keep going.

          [GuideHow to change Claude's personality](https://agent-tune.com/guides/claude-personality)
          [GuideCLAUDE.md examples and best practices](https://agent-tune.com/guides/claude-md-examples)
          [GuideAGENTS.md and Cursor rules: add a personality](https://agent-tune.com/guides/coding-agent-personality)
          [ToolFree CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator)
          [LibraryAll 43 tuning files](https://agent-tune.com/library/)
          [TestsFind your type — free MBTI test](https://agent-tune.com/tests/mbti)
