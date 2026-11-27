Source: https://agent-tune.com/about
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

About AgentTune · Open AI Psychology & Preferences

# Why we measure how AI models behave—and give away every rule block for free.

Created by Bernard Huang · MIT-licensed library & open datasets

**In brief:** AgentTune is an independent open-source project built by [Bernard Huang](https://github.com/bernardjhuang). We run reproducible personality benchmarks across 25 AI model families (93 checkpoints) and publish copy-paste custom instructions, browser scoring tools, and a stateless MCP server with zero paywalls, accounts, or tracking of your prompts.

## Who builds AgentTune

I started AgentTune because customizing how AI models talk—without triggering sycophancy, roleplay bloat, or forgotten system rules—relied almost entirely on vibes and viral prompt threads. Every claim on this site is backed by published JSON/CSV datasets and reproducible scripts so engineers, researchers, and everyday users can check the evidence for themselves.

Find the source repositories on GitHub ([bernardjhuang/agenttune](https://github.com/bernardjhuang/agenttune) for templates and the Claude Code plugin, plus [bernardjhuang/agenttune-benchmarks](https://github.com/bernardjhuang/agenttune-benchmarks) for open psychometric CSV/JSON datasets), follow updates on [X (@bernardjhuang)](https://x.com/bernardjhuang), or write to [hello@agent-tune.com](mailto:hello@agent-tune.com).

## How we run our experiments

- **Fresh-chat isolation:** All 25 model-family profiles in our [Models directory](https://agent-tune.com/models/) and 36 studies in the [Research Hub](https://agent-tune.com/research) are sampled across independent zero-memory API calls via OpenRouter (87 primary checkpoints passing our n ≥ 20 threshold; 93 total tested including 6 quarantined sparse runs).

- **Orthogonal 3-family blind judging:** Task benchmarks pair deterministic regex/token checks with three separate model families acting as blind judges (reporting Krippendorff&rsquo;s &alpha;) so no lab grades its own outputs.

- **Limits shown alongside headlines:** Whenever an MBTI four-letter code hides high axis tie rates (16 of 25 model families) or a body-related question triggers midpoint clamping, we suppress clean labels and publish the raw tie counts.

- **Local-first privacy:** All 5 [personality questionnaires](https://agent-tune.com/tests/) and 10 browser utilities score completely inside your tab, while the zero-auth [AgentTune MCP server](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning) processes tool calls statelessly in memory without storing inputs.

## What personality templates are (and are not)

Our 43 [Library templates](https://agent-tune.com/library/) are MIT-licensed starter rules for formatting, directness, pushback, and clarifying questions—not psychological diagnoses or guaranteed capability boosters. Short, plain-English behavioral rubrics consistently outperform vague trait adjectives in our controlled benchmarks, so we encourage users to inspect every rule and adapt it via the [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator).

## Start exploring

- [Empirical AI Psychology Archive (36 Studies)](https://agent-tune.com/research) — raw datasets, methodology, and reproducible scripts.

- [25 Model-Family Personality Profiles](https://agent-tune.com/models/) — compare Claude, ChatGPT, Gemini, Grok, Muse, DeepSeek, Qwen, Llama 4, and Mistral.

- [54 Setup Guides](https://agent-tune.com/guides/) — exact paste paths and character budgets across every AI client and coding agent.

- [Agent Skill Manifest (SKILL.md)](https://agent-tune.com/SKILL.md) & [llms.txt](https://agent-tune.com/llms.txt) — machine-readable entrypoints and MCP integration.
