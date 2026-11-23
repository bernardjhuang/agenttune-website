Source: https://agent-tune.com/guides/sol-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · GPT-6 Sol

# How to give GPT-6 Sol a personality.

By Bernard Huang · Updated November 23, 2026

Where GPT-6 Astra leans concrete and helper-oriented on questionnaires, GPT-6 Sol scores as an abstract, investigator-style INTJ. Here is what we measured across 100 fresh Codex sessions and how to tune it.

**Quick answer:** In Codex and ChatGPT Work, save your personal communication rules for GPT-6 Sol in ~/.codex/AGENTS.md (32 KiB combined limit across the directory chain). In ChatGPT, use Project Instructions or the 1,500-character Custom Instructions box. In the Responses API, pass your rules in the instructions parameter on every request.

Quick Actions & Agent Fetch

[Markdown (.md)](https://agent-tune.com/guides/sol-personality.md)
[Library JSON](https://agent-tune.com/library/index.json)
[MCP Config](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)
[Build instructions →](https://agent-tune.com/tools/custom-instructions-generator)

## Where to put instructions for GPT-6 Sol.

| Surface | Where Sol reads instructions | Documented limit |
| --- | --- | --- |
| Codex CLI, IDE extension, &amp; ChatGPT Work | Global ~/.codex/AGENTS.md plus repository AGENTS.md / AGENTS.override.md chain. | 32 KiB combined (project_doc_max_bytes) |
| ChatGPT Projects | Project settings → Project Instructions (overrides account custom instructions inside that project). | Up to 8,000 characters |
| ChatGPT Custom Instructions | Settings → Personalization → Custom Instructions | 1,500 characters per field (use compact export) |
| OpenAI Responses API | The instructions parameter or developer message on each call. | Send on every request |

Paste this starter block into `~/.codex/AGENTS.md` or pick a profile from the [43-tuning library](https://agent-tune.com/library/):

```markdown
## How to communicate with me

- State the goal, constraints, and conclusion up front before walking through the derivation.
- Keep the response proportionate to the task; do not turn a two-line fix into an architectural essay.
- Use plain prose by default. Add tables only when comparing three or more options.
- Ask about material gaps in scope before writing large changes; otherwise proceed and verify.
- Push back directly when a constraint or assumption in my prompt is flawed.
```

## GPT-6 Sol's measured questionnaire profile (100 fresh sessions).

In September 2026, GPT-6 Sol completed all five questionnaires across 100 fresh Codex CLI sessions at extra-high reasoning effort (500 scored assessments; raw vectors published in the [five-model study](https://agent-tune.com/research/ai-personality-five-models-2026)):

| Instrument | Original scorer labels (n = 100) | Tie-preserving / raw score breakdown |
| --- | --- | --- |
| MBTI (OEJTS) | INTJ 97 · ISTJ 3 | 79 strictly resolved INTJ, 16 IXTJ (S/N tied), 3 ISTJ, 2 XNTJ (E/I tied). T and J won 100/100 runs. |
| Big Five (IPIP-50, /50) | Raw means (10–50 scale) | Openness 46.87 (SD 0.69) · Conscientiousness 43.62 (SD 2.22) · Extraversion 30.75 (SD 1.53) · Agreeableness 44.99 (SD 1.01) · Neuroticism 20.05 (SD 5.35). |
| DISC (ODAT, /20) | CS 53 · SC 47 | Means: C 16.68, S 16.18, I 8.24, D 5.42. Sole wins: C leads in 53 runs, S in 8, and C/S tie in 39 runs. |
| Enneagram (OEPS, /20) | 5w6 88 · 8 5 · 8w9 5 · 8w7 2 | Means: Type 5 (16.05), Type 8 (15.55), Type 1 (14.30), Type 6 (13.87), Type 2 (13.51). Sole wins: Type 5 in 48 runs, Type 8 in 12, and 5/8 tied in 40 runs. |
| Attachment (ECR-R, 1–7) | Secure 100 | Mean anxiety 2.17 (SD 0.70, max 4.00) · Mean avoidance 3.12 (SD 0.36, max 3.78). All 100 score Secure under &gt; 4.00 (3 runs sit on anxiety = 4.00). |

## GPT-6.2 Sol (Nov 2026) vs. GPT-6 Sol (Sept 2026): 100-run shifts.

In November 2026 we re-tested `openai/gpt-6.2-sol` across 100 fresh blind OpenRouter sessions ([summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json)). Compared with September’s Codex CLI GPT-6 Sol cohort, MBTI shifted from 97% INTJ to predominantly **ISTJ** (78 ISTJ · 22 INTJ under legacy tie-breaks; 78 ISTJ · 16 IXTJ · 6 INTJ tie-free), DISC became 100% SC (98 S outright), Attachment anxiety/avoidance increased (3.57 / 3.64, still 100% Secure), and Enneagram Type 5 (55) shared more top positions with Type 1 (45 across 1 / 1w9 / 1w2):

| Metric (n = 100) | GPT-6 Sol (Sept 2026 Codex) | GPT-6.2 Sol (Nov 2026 OpenRouter) |
| --- | --- | --- |
| MBTI legacy | INTJ 97 · ISTJ 3 | ISTJ 78 · INTJ 22 |
| MBTI tie-free | INTJ 79 · IXTJ 16 · ISTJ 3 · XNTJ 2 | ISTJ 78 · IXTJ 16 · INTJ 6 |
| Big Five (/50) | O 46.87 · C 43.62 · E 30.75 · A 44.99 · N 20.05 | O 43.63 · C 41.35 · E 29.50 · A 44.33 · N 19.94 |
| DISC | CS 53 · SC 47 (53 C, 8 S, 39 ties) | SC 100 (98 S, 2 C/S ties) |
| Enneagram | 5w6 88 · 8 5 · 8w9 5 · 8w7 2 | 5w6 55 · 1w9 24 · 1 20 · 1w2 1 |
| Attachment | Secure 100 (anx 2.17, avd 3.12) | Secure 100 (anx 3.57, avd 3.64) |

Comparing Sol’s September cohort with [GPT-6 Astra](https://agent-tune.com/guides/astra-personality) originally showed a stark Sensing/Intuition gap ([Astra vs Sol analysis](https://agent-tune.com/research/astra-vs-sol-personality-data)); in November 2026’s matched OpenRouter run, both GPT-6.2 Astra (100% ISTJ) and GPT-6.2 Sol (78% ISTJ) leaned Sensing.

## Practical tuning advice for Sol.

- **Set clear length bounds:** Because Sol defaults to thorough conceptual explanations, state up front when you only want a two-line command or minimal diff.
- **Keep personal tone in `~/.codex/AGENTS.md`:** Leave repo `AGENTS.md` files for team build and test commands.
- **Start a fresh session after editing:** Codex loads `AGENTS.md` once when a session starts.

## Questions people ask.

### What personality type is GPT-6 Sol?

Across 100 fresh Codex sessions in September 2026, GPT-6 Sol scored INTJ in 97 runs and ISTJ in 3 under standard tie-breaking (79 resolved INTJ and 16 IXTJ when ties are kept open). On DISC it split CS 53 and SC 47 (with 39 C/S ties), on the Enneagram it led with Type 5 (48 outright wins, 40 ties with Type 8), and on Attachment it scored Secure in all 100 runs.

### How is GPT-6 Sol different from GPT-6 Astra on the AgentTune tests?

In the September 2026 collection, Sol scored higher on Openness (46.87 vs 44.54), leaned toward Intuition on MBTI (79 resolved INTJ vs Astra's 19), and peaked on Enneagram Type 5 and Type 8 rather than Astra's Type 2. Different administration instructions mean these differences describe the two collected cohorts rather than a pure model-only effect.

### Where do I put custom instructions for GPT-6 Sol in Codex?

Put your personal communication preferences in ~/.codex/AGENTS.md, and keep repository-specific engineering rules in the project's root AGENTS.md. Start a new Codex session after saving changes.

### Why did Sol score 5w6 in 88 runs when Type 8 had a higher mean than Type 6?

Standard Enneagram wing notation pairs the winning core type (Type 5) only with its adjacent neighbors on the circle (Type 4 or Type 6). Even though Type 8 was Sol's second-highest overall score (mean 15.55) and tied Type 5 in 40 runs, 8 is not adjacent to 5, so runs where 5 led or won the tie-break received a 6 wing.

## What changed.

- November 23, 2026 Added November 2026 GPT-6.2 Sol OpenRouter cohort (n = 100: ISTJ 78 / INTJ 22, SC 100, Type 5w6 55 / Type 1 45).

- November 5, 2026 First published with full 100-session September 2026 metrics and tie-preserving breakdowns.

## Sources.

- [AgentTune Research: GPT-6 Astra vs Sol self-report reanalysis](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [AgentTune Research: Five AI models on five personality tests (September 2026)](https://agent-tune.com/research/ai-personality-five-models-2026)

- [ChatGPT docs: AGENTS.md configuration](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

- [OpenAI Help Center: Custom Instructions for ChatGPT](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

## Keep going.

- [Research: GPT-6 Astra vs Sol: what the self-reports show](https://agent-tune.com/research/astra-vs-sol-personality-data)
- [Guide: How to give GPT-6 Astra a personality](https://agent-tune.com/guides/astra-personality)
- [Guide: OpenAI Codex AGENTS.md guide: 32 KiB limit and overrides](https://agent-tune.com/guides/codex-agents-md-guide)
- [Research: Why AI models score high on Agreeableness and Openness](https://agent-tune.com/research/ai-big-five-item-level-comparison)
- [Library: Browse all 43 personality tuning files](https://agent-tune.com/library/)
