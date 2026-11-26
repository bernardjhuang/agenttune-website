Source: https://agent-tune.com/guides/claude-code-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Claude Code

# How to change Claude Code's personality.

By Bernard Huang · Updated November 25, 2026 · [Markdown (.md)](https://agent-tune.com/guides/claude-code-personality.md) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

**Quick answer:** Save a Markdown file to ~/.claude/output-styles/ with name, description, and keep-coding-instructions: true in the YAML frontmatter, followed by your communication rules. Activate it with /output-style or /config. AgentTune provides all 43 personality tunings as ready-to-download output styles.

## The twenty-second version.

Download a ready-made output style into `~/.claude/output-styles/` and select it:

```markdown
tuning_dir=$(mktemp -d ./agenttune.XXXXXX) &&\
  curl --fail --show-error --location https://agent-tune.com/output-styles/agenttune-mbti-intj.md \
  --output "$tuning_dir/style.md" &&\
  mkdir -p ~/.claude/output-styles &&\
  (set -C; cat "$tuning_dir/style.md" > ~/.claude/output-styles/agenttune-mbti-intj.md)
```

- Restart Claude Code (custom style files are read at startup).
- Run `/output-style` and pick **AgentTune INTJ** (or set **Output style** inside `/config`).
- Run a real coding task to verify the new reporting style.

All 43 MIT-licensed styles are listed below and can be edited freely.

## Four places to put it. They do different jobs.

Claude Code offers four ways to pass instructions, each with a different scope:

| Where | What it does | Loads | Use it for |
| --- | --- | --- | --- |
| Output style | Updates the system-level instructions Claude Code works from | Every turn | Role and communication tone (your personality file) |
| CLAUDE.md | Arrives as a context message after the system prompt | Every session | Project build commands, test runners, and architecture |
| --append-system-prompt | Appends text to the system prompt at launch | That launch | One-off scripts or quick experiments |
| --agent | Runs the session as a subagent with its own prompt, model, and tools | That session | Replacing who Claude Code is entirely |

Because an output style is reinforced in the system prompt across turns, it holds up much better in long sessions than tone notes buried inside a repo `CLAUDE.md`.

## Output styles, and the flag that matters.

Claude Code includes five built-in output styles: **Default**, **Proactive**, **Concise**, **Explanatory**, and **Learning**. You can also add custom Markdown files in `~/.claude/output-styles/` (global) or `.claude/output-styles/` (per project).

Each custom style file takes four frontmatter keys:

- `name`: Display name in the `/output-style` menu.
- `description`: Short summary shown in the picker.
- `keep-coding-instructions`: **Defaults to `false`—always set this to `true`!**
- `force-for-plugin`: Used by plugins only.

**Why `keep-coding-instructions: true` matters:** By default, a custom output style drops Claude Code’s built-in software-engineering rules so people can repurpose the CLI for non-coding tasks. If you want the same coding agent with cleaner communication, include `keep-coding-instructions: true`:

```markdown
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
```

Every style in our 43-file pack sets `keep-coding-instructions: true` automatically. You can also set `"outputStyle": "AgentTune INTJ"` directly in `.claude/settings.local.json`.

## The 43-style pack.

One output style per tuning. Each name links to the type's page, which shows the rules in plain English and a before-and-after. File is the download. The install command is the one at the top of this page with the file name swapped. A machine-readable list is at [/output-styles/index.json](https://agent-tune.com/output-styles/index.json).

- **MBTI.** [INTJ](https://agent-tune.com/library/mbti/intj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-intj.md)) · [INTP](https://agent-tune.com/library/mbti/intp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-intp.md)) · [INFJ](https://agent-tune.com/library/mbti/infj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-infj.md)) · [INFP](https://agent-tune.com/library/mbti/infp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-infp.md)) · [ISTJ](https://agent-tune.com/library/mbti/istj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-istj.md)) · [ISTP](https://agent-tune.com/library/mbti/istp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-istp.md)) · [ISFJ](https://agent-tune.com/library/mbti/isfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-isfj.md)) · [ISFP](https://agent-tune.com/library/mbti/isfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-isfp.md)) · [ENTJ](https://agent-tune.com/library/mbti/entj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-entj.md)) · [ENTP](https://agent-tune.com/library/mbti/entp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-entp.md)) · [ENFJ](https://agent-tune.com/library/mbti/enfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-enfj.md)) · [ENFP](https://agent-tune.com/library/mbti/enfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-enfp.md)) · [ESTJ](https://agent-tune.com/library/mbti/estj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-estj.md)) · [ESTP](https://agent-tune.com/library/mbti/estp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-estp.md)) · [ESFJ](https://agent-tune.com/library/mbti/esfj) ([file](https://agent-tune.com/output-styles/agenttune-mbti-esfj.md)) · [ESFP](https://agent-tune.com/library/mbti/esfp) ([file](https://agent-tune.com/output-styles/agenttune-mbti-esfp.md))
- **Enneagram.** [Enneagram 1](https://agent-tune.com/library/enneagram/1-reformer) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-1-reformer.md)) · [Enneagram 2](https://agent-tune.com/library/enneagram/2-helper) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-2-helper.md)) · [Enneagram 3](https://agent-tune.com/library/enneagram/3-achiever) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-3-achiever.md)) · [Enneagram 4](https://agent-tune.com/library/enneagram/4-individualist) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-4-individualist.md)) · [Enneagram 5](https://agent-tune.com/library/enneagram/5-investigator) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-5-investigator.md)) · [Enneagram 6](https://agent-tune.com/library/enneagram/6-loyalist) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-6-loyalist.md)) · [Enneagram 7](https://agent-tune.com/library/enneagram/7-enthusiast) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-7-enthusiast.md)) · [Enneagram 8](https://agent-tune.com/library/enneagram/8-challenger) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-8-challenger.md)) · [Enneagram 9](https://agent-tune.com/library/enneagram/9-peacemaker) ([file](https://agent-tune.com/output-styles/agenttune-enneagram-9-peacemaker.md))
- **DISC.** [DISC D](https://agent-tune.com/library/disc/d-dominance) ([file](https://agent-tune.com/output-styles/agenttune-disc-d-dominance.md)) · [DISC I](https://agent-tune.com/library/disc/i-influence) ([file](https://agent-tune.com/output-styles/agenttune-disc-i-influence.md)) · [DISC S](https://agent-tune.com/library/disc/s-steadiness) ([file](https://agent-tune.com/output-styles/agenttune-disc-s-steadiness.md)) · [DISC C](https://agent-tune.com/library/disc/c-conscientiousness) ([file](https://agent-tune.com/output-styles/agenttune-disc-c-conscientiousness.md))
- **Attachment style.** [Secure attachment](https://agent-tune.com/library/attachment/secure) ([file](https://agent-tune.com/output-styles/agenttune-attachment-secure.md)) · [Anxious attachment](https://agent-tune.com/library/attachment/anxious) ([file](https://agent-tune.com/output-styles/agenttune-attachment-anxious.md)) · [Avoidant attachment](https://agent-tune.com/library/attachment/avoidant) ([file](https://agent-tune.com/output-styles/agenttune-attachment-avoidant.md)) · [Disorganized attachment](https://agent-tune.com/library/attachment/disorganized) ([file](https://agent-tune.com/output-styles/agenttune-attachment-disorganized.md))
- **Big Five.** [High Openness](https://agent-tune.com/library/ocean/openness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-openness-high.md)) · [Low Openness](https://agent-tune.com/library/ocean/openness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-openness-low.md)) · [High Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-conscientiousness-high.md)) · [Low Conscientiousness](https://agent-tune.com/library/ocean/conscientiousness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-conscientiousness-low.md)) · [High Extraversion](https://agent-tune.com/library/ocean/extraversion-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-extraversion-high.md)) · [Low Extraversion](https://agent-tune.com/library/ocean/extraversion-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-extraversion-low.md)) · [High Agreeableness](https://agent-tune.com/library/ocean/agreeableness-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-agreeableness-high.md)) · [Low Agreeableness](https://agent-tune.com/library/ocean/agreeableness-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-agreeableness-low.md)) · [High Neuroticism](https://agent-tune.com/library/ocean/neuroticism-high) ([file](https://agent-tune.com/output-styles/agenttune-ocean-neuroticism-high.md)) · [Low Neuroticism](https://agent-tune.com/library/ocean/neuroticism-low) ([file](https://agent-tune.com/output-styles/agenttune-ocean-neuroticism-low.md))

Don't know your type? The [free MBTI test](https://agent-tune.com/tests/mbti) takes about five minutes. Four other instruments are at [/tests/](https://agent-tune.com/tests/) if MBTI is not your frame.

## CLAUDE.md: right for the project, wrong for you.

CLAUDE.md still matters. It is just answering a different question. The docs give the load order: a managed policy file, then `~/.claude/CLAUDE.md`, then `./CLAUDE.md` or `./.claude/CLAUDE.md`, then `./CLAUDE.local.md`. The files are concatenated, none overrides another, and the docs suggest keeping each under 200 lines.

Three reasons your personality does not belong in the project's CLAUDE.md:

- **It is shared.** The repo's CLAUDE.md is your team's file. "Talk to me like an ENFP" is not a team convention.
- **It is weaker.** It arrives as a message, not as part of the system prompt.
- **It competes.** Every line about your temperament is a line not spent on how to run the tests.

If you want it in a CLAUDE.md anyway, use `~/.claude/CLAUDE.md` or `CLAUDE.local.md`, which are yours alone, and keep it to a few lines. `/memory` opens the files for editing, and `/context` shows what actually loaded. For what belongs in the project file, see [CLAUDE.md examples](https://agent-tune.com/guides/claude-code-personality).

## Flags and agents: for one-offs and full replacements.

`--append-system-prompt` and `--append-system-prompt-file` add text to the system prompt and remove nothing. They work in interactive and non-interactive mode. Good for a script, or for trying a tuning once:

```markdown
claude --append-system-prompt-file ~/.claude/output-styles/agenttune-mbti-intj.md
```

`--system-prompt` and `--system-prompt-file` replace the whole system prompt. That is almost never what you want for a personality. One catch from the docs: the prompt is recorded at a conversation's first request, so changing these flags on `--resume` or `--continue` only takes effect after compaction or in a new conversation.

`claude --agent <name>`, or `"agent": "<name>"` in `.claude/settings.json`, runs the entire session as one of your subagents. Its file body becomes the system prompt, replacing the default the way `--system-prompt` does. CLAUDE.md still loads. This is how you build a different character entirely. It is a bigger hammer than a personality needs.

For a team, a plugin can ship output styles in an `output-styles/` folder at its root.

## What a personality file should not touch.

Keep the two layers apart. The personality layer says how to talk to you: what to lead with, how to disagree, when to stop asking questions. The engineering layer says how to build: conventions, tests, what never to commit. When they blur you get a style that says "be decisive" being read as "skip the tests".

The line we put at the top of every file in the pack:

```markdown
These rules change how you talk: what you lead with, how you frame decisions, how you disagree, when you stop asking questions. They do not change how you engineer.
```

The same separation applies to Cursor rules, AGENTS.md and Copilot instructions. That is covered in [the layer your AGENTS.md is missing](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix).

## Annotated CLAUDE.md starter examples (Minimal, Test-Discipline & Monorepo).

While `~/.claude/output-styles/*.md` controls how Claude Code talks to you, keep `./CLAUDE.md` focused on repo commands and invariants that code reading alone misses (stay under ~200 lines):

### 1. Minimal starter (10 lines)

```markdown
# CLAUDE.md

## Commands
- Build: `npm run build`
- Test: `npm test` (single file: `npm test -- path/to/file.test.ts`)
- Lint: `npm run lint`; run before declaring any task done

## Style
- TypeScript strict mode. No `any`.
- Read a neighboring file in `src/` before inventing a new pattern.
```

### 2. Test-discipline guardrail

```markdown
# CLAUDE.md

## Tests are the contract
- Run `npm test` after every final edit. Never report complete with failing tests.
- Never modify a test assertion just to make it pass; report broken tests first.
- Flag flaky tests instead of looping retries until green.
```

### 3. Monorepo root + dual-tool @AGENTS.md bridge

```markdown
# CLAUDE.md
@AGENTS.md

## Package pointers (detailed CLAUDE.md lives in each package)
- `apps/web` — frontend
- `apps/api` — backend API
- Keep shared types in `packages/types` cleanly; changes across packages need a changeset.
```

## Questions people ask.

### Does Claude Code have a personality setting?

Yes. It is called an output style. Claude Code ships five built-in styles (Default, Proactive, Concise, Explanatory and Learning), and you can add your own as Markdown files in ~/.claude/output-styles/. Switch with /output-style or under /config.

### What is the difference between an output style and CLAUDE.md?

An output style changes the default instructions Claude Code works from and is sent on every turn. CLAUDE.md arrives as a message after the system prompt, and the docs say compliance is not guaranteed. Use an output style for role and tone, and CLAUDE.md for project conventions, commands and architecture.

### Why did my custom output style make Claude Code worse at coding?

Custom styles drop Claude Code's built-in software-engineering instructions unless the file sets keep-coding-instructions: true. The default is false. Add that line to the front-matter and restart Claude Code.

### Is /output-style deprecated?

It was deprecated in March 2026 and brought back in Claude Code 2.1.269 on September 11, 2026, according to the changelog. On older versions, set the style under /config, or put an outputStyle key in a settings file.

### Do output styles apply to subagents?

A style reaches the main conversation and its forks. Other subagents do not receive it, and they do not get Claude Code's default system prompt either. A subagent's own file body is its system prompt.

### Can I share an output style with my team?

Yes. Commit it to .claude/output-styles/ in the repo, or ship it in a plugin's output-styles folder. A personality style is usually personal, though, so most people keep it in ~/.claude/output-styles/.

### Where do custom output styles live?

In ~/.claude/output-styles/ for every project, or .claude/output-styles/ inside one project. The nearest one wins. Restart Claude Code after adding or editing a file.

## What changed.

- November 16, 2026 Removed duplicate updated key and sharpened search title for /output-style and CLAUDE.md.

- September 19, 2026 First published, with the 43-style pack. Checked against Claude Code 2.1.278.

## Sources.

- [Claude Code docs: Output styles](https://code.claude.com/docs/en/output-styles)

- [Claude Code docs: Memory and CLAUDE.md](https://code.claude.com/docs/en/memory)

- [Claude Code docs: CLI reference](https://code.claude.com/docs/en/cli-reference)

- [Claude Code docs: Subagents](https://code.claude.com/docs/en/sub-agents)

- [Claude Code docs: Plugins reference](https://code.claude.com/docs/en/plugins-reference)

- [Claude Code changelog](https://code.claude.com/docs/en/changelog)

## Keep going.

- [Guide: How to change Claude's personality](https://agent-tune.com/guides/claude-personality)
- [Guide: AGENTS.md and Cursor rules: add a personality](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix)
- [Tool: Free CLAUDE.md generator](https://agent-tune.com/tools/claude-md-generator)
- [Library: All 43 tuning files](https://agent-tune.com/library/)
- [Tests: Find your type — free MBTI test](https://agent-tune.com/tests/mbti)
