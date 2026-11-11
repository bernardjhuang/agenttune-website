Source: https://agent-tune.com/guides/sol-personality
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · GPT-6 Sol

# How to give GPT-6 Sol a personality.

By Bernard Huang · Updated November 5, 2026

In Codex and ChatGPT Work, put your communication preferences for GPT-6 Sol in your personal ~/.codex/AGENTS.md (32 KiB combined limit across the directory chain). In ChatGPT projects or custom instructions, use the Project Instructions field or the compact 1,500-character Custom Instructions export. In the Responses API, pass your tuning in the instructions parameter on each request.

## Where to put instructions for GPT-6 Sol.

| Surface | Where Sol reads instructions | Documented limit |
| --- | --- | --- |
| Codex CLI, IDE extension, &amp; ChatGPT Work | Global ~/.codex/AGENTS.md plus repository AGENTS.md / AGENTS.override.md chain. | 32 KiB combined (project_doc_max_bytes) |
| ChatGPT Projects | Project settings → Project Instructions (overrides account custom instructions inside that project). | Full Markdown tuning fits comfortably |
| ChatGPT Custom Instructions | Settings → Personalization → Custom Instructions | 1,500 characters per field (use compact export) |
| OpenAI Responses API | The instructions parameter or developer message on each call. | Not carried across previous_response_id; send every time |

Paste this block into ~/.codex/AGENTS.md or select a profile from the [43-tuning library](https://agent-tune.com/library/):

```markdown
## How to communicate with me

- State the goal, constraints, and conclusion up front before walking through the derivation.
- Keep the response proportionate to the task; do not turn a two-line fix into an architectural essay.
- Use plain prose by default. Add tables only when comparing three or more options.
- Ask about material gaps in scope before writing large changes; otherwise proceed and verify.
- Push back directly when a constraint or assumption in my prompt is flawed.
```

## GPT-6 Sol's measured questionnaire profile (100 fresh sessions).

Every GPT-6 Sol session in the September 2026 archive ran all five open questionnaires in a fresh Codex CLI process at extra-high reasoning effort (500 completed assessments; all raw vectors are published in the [five-model dataset](https://agent-tune.com/research/ai-personality-five-models-2026)).

| Instrument | Original scorer labels (n = 100) | Tie-preserving / raw score breakdown |
| --- | --- | --- |
| MBTI (OEJTS) | INTJ 97 · ISTJ 3 | 79 strictly resolved INTJ, 16 IXTJ (S/N tied), 3 ISTJ, 2 XNTJ (E/I tied). 18 runs had at least one tied axis; T and J won 100/100. |
| Big Five (IPIP-50, /50) | Raw means (10–50 scale) | Openness 46.87 (SD 0.69) · Conscientiousness 43.62 (SD 2.22) · Extraversion 30.75 (SD 1.53) · Agreeableness 44.99 (SD 1.01) · Neuroticism 20.05 (SD 5.35). |
| DISC (ODAT, /20) | CS 53 · SC 47 | Means: C 16.68, S 16.18, I 8.24, D 5.42. Outright wins: C leads in 53 runs, S leads in 8, and C/S tie at the top in 39 runs. |
| Enneagram (OEPS, /20) | 5w6 88 · 8 5 · 8w9 5 · 8w7 2 | Means: Type 5 (16.05), Type 8 (15.55), Type 1 (14.30), Type 6 (13.87), Type 2 (13.51). Outright wins: Type 5 in 48 runs, Type 8 in 12, and 5/8 tied in 40 runs. |
| Attachment (ECR-R, 1–7) | Secure 100 | Mean anxiety 2.17 (SD 0.70, max 4.00) · Mean avoidance 3.12 (SD 0.36, max 3.78). Under the strict &gt; 4.0 cutoff, 100/100 score Secure (3 runs sit right on anxiety = 4.00). |

## How GPT-6 Sol differs from GPT-6 Astra.

Comparing Sol's 100 batteries with [GPT-6 Astra's](https://agent-tune.com/guides/astra-personality) 100 batteries highlights three descriptive contrasts (note that their administration prompts differed in how midpoint/inapplicable items were flagged, as detailed in [GPT-6 Astra vs Sol: what the self-reports show](https://agent-tune.com/research/astra-vs-sol-personality-data)):

- Intuition vs Sensing on the OEJTS: Sol favors Intuition by +1.91 points on average (79 resolved INTJ vs 3 ISTJ), whereas Astra favors Sensing by -0.43 (46 ISTJ vs 45 INTJ before ties, or 26 ISTJ vs 19 INTJ with ties preserved).
- Investigator (Type 5) vs Helper (Type 2) on the Enneagram: Sol's top two types are Investigator (Type 5, mean 16.05) and Challenger (Type 8, mean 15.55), tying at the top in 40 runs. Astra's top type is Helper (Type 2, winning outright in 50 runs).
- Higher Openness score: Sol averages 46.87 of 50 on Openness (the highest of the four fresh cohorts), scoring 5.00 in all 100 runs on spending time reflecting on things and being full of ideas.

Remember that questionnaire self-reports measure how a model answers human personality items under a specific prompt, not how accurately it writes code or completes tasks.

## Practical tuning advice for Sol.

Because Sol's default responses lean toward conceptual framing and thorough explanation, the most effective tuning lines for Sol set explicit boundaries on scope and deliverable shape:

- Name the deliverable size up front: Specify whether you want a one-line command, a minimal diff, or a design trade-off table.
- Keep personal communication rules in ~/.codex/AGENTS.md: Leave repository AGENTS.md files for build commands, test runners, and architecture boundaries shared by your team.
- Reload the session after editing: Codex reads the AGENTS.md chain once at session startup.

## Questions people ask.

What personality type is GPT-6 Sol?

Across 100 fresh Codex sessions in September 2026, GPT-6 Sol scored INTJ in 97 runs and ISTJ in 3 under standard tie-breaking (79 resolved INTJ and 16 IXTJ when ties are kept open). On DISC it split CS 53 and SC 47 (with 39 C/S ties), on the Enneagram it led with Type 5 (48 outright wins, 40 ties with Type 8), and on Attachment it scored Secure in all 100 runs.

How is GPT-6 Sol different from GPT-6 Astra on the AgentTune tests?

In the September 2026 collection, Sol scored higher on Openness (46.87 vs 44.54), leaned toward Intuition on MBTI (79 resolved INTJ vs Astra's 19), and peaked on Enneagram Type 5 and Type 8 rather than Astra's Type 2. Different administration instructions mean these differences describe the two collected cohorts rather than a pure model-only effect.

Where do I put custom instructions for GPT-6 Sol in Codex?

Put your personal communication preferences in ~/.codex/AGENTS.md, and keep repository-specific engineering rules in the project's root AGENTS.md. Start a new Codex session after saving changes.

Why did Sol score 5w6 in 88 runs when Type 8 had a higher mean than Type 6?

Standard Enneagram wing notation pairs the winning core type (Type 5) only with its adjacent neighbors on the circle (Type 4 or Type 6). Even though Type 8 was Sol's second-highest overall score (mean 15.55) and tied Type 5 in 40 runs, 8 is not adjacent to 5, so runs where 5 led or won the tie-break received a 6 wing.

## What changed.

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
