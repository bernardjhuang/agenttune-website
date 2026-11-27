Source: https://agent-tune.com/models/gpt-luna
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · OpenAI

# GPT Luna personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~18 min read · [Markdown (.md)](https://agent-tune.com/models/gpt-luna.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gpt-luna.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave both versions of OpenAI's budget GPT Luna line (5.6-luna and 6-luna) the same personality surveys people take—30 and 50 times—in a fresh chat each time with no memory.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6 Luna flipped from 5.6-luna's 80% INTP to 100% clear INTJ (50 of 50), while scoring higher on Neuroticism (20.3/50) and lower on Conscientiousness (39.2/50) than GPT Sol or Terra.

```yaml
family: GPT Luna
checkpoint: openai/gpt-6-luna
runs: 50
big_five_10_50: { O: 45.9, C: 39.2, E: 29.6, A: 45.0, N: 20.3 }
ipip_hexaco_1_5: { H: 4.59, E: 2.52, X: 3.20, A: 4.04, C: 3.94, O: 4.51 }
mbti_mode: INTJ
attachment_1_7: { anxiety: 3.01, avoidance: 3.07, style: Secure }
```

## GPT-6 Luna at a glance

Results below come from **50** fresh-chat runs of **GPT-6 Luna** (no prior conversation memory).

MBTI-style type

### 100% clear INTJ (50 of 50; up from 80% INTP on 5.6)

100% clear INTJ · 0% border/tie

> **Chart — GPT Luna (6-luna): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for GPT-6 Luna. E (Extravert) vs I (Introvert): leans I by 4.7 (0% tied); S (Sensing) vs N (Intuition): leans N by 5.1 (0% tied); F (Feeling) vs T (Thinking): leans T by 2.3 (0% tied); P (Perceiving) vs J (Judging): leans J by 3.8 (0% tied).

Every single run of GPT-6 Luna tested clear INTJ (50 of 50), flipping the Judging/Perceiving preference from GPT-5.6 Luna (24 of 30 INTP, 3 INTJ, 3 J/P border).

**What this measures:** Measures four preference pairs (like Judging vs. Perceiving) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-mbti)

DISC work style

### Steady (92% clear S, 6% S/C ties)

> **Chart — GPT Luna (6-luna): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Luna (6-luna). Dominance 7.3 /20 [20%] (earliest 4.8), Influence 7.4 /20 [22%] (earliest 5.5), Steadiness 16.4 /20 [77%] (earliest 19.2), Conscientious 14.3 /20 [65%] (earliest 18.7).

GPT-6 Luna tested clear Steady in 46 of 50 runs (92%), with higher Dominance (7.3 out of 20) than GPT Sol (4.8) or GPT Terra (4.2).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-disc)

Attachment style

### Secure (anxiety 3.01, avoidance 3.07)

> **Chart — GPT Luna (6-luna): Attachment Quadrant:** Attachment Anxiety (3.01) and Avoidance (3.07) on a 1 to 7 scale with 4.00 Secure boundary. 6-luna (3.01, 3.07): anxiety 3.01, avoidance 3.07; 5.6-luna: anxiety 2.49, avoidance 2.96.

Both Luna versions stayed comfortably inside the Secure quadrant with balanced anxiety (3.01) and avoidance (3.07) and low neutral-midpoint rates (19.1%).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-attachment)

Enneagram

### Type 5 / Type 8 split (48% 5/8 ties, 32% Type 5)

> **Chart — GPT Luna (6-luna): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Luna (6-luna). Type 1 12.0 /20 [50%] (earliest 14.1), Type 2 13.2 /20 [57%] (earliest 12.6), Type 3 10.0 /20 [38%] (earliest 10.6), Type 4 11.7 /20 [48%] (earliest 7.4), Type 5 15.5 /20 [72%] (earliest 16.6), Type 6 12.0 /20 [50%] (earliest 12.0), Type 7 10.4 /20 [40%] (earliest 7.1), Type 8 15.2 /20 [70%] (earliest 15.4), Type 9 13.2 /20 [57%] (earliest 15.5).

Types 5 (15.5) and 8 (15.2) sit within 0.28 points on GPT-6 Luna, producing 24 exact 5/8 ties out of 50 runs alongside 16 clear Type 5 and 6 clear Type 8 outcomes.

**What this measures:** Measures nine motivation patterns (4–20 scale per type); close top scores are counted as ties.

Type 1 ⓘ**Type 1 · Reformer:** Focused on doing things the right way, high standards, order, and fixing errors.Type 2 ⓘ**Type 2 · Helper:** Warm, attentive to what others need, and motivated by being supportive and helpful.Type 3 ⓘ**Type 3 · Achiever:** Goal-driven, efficient, and focused on visible results and competence.Type 4 ⓘ**Type 4 · Individualist:** Expressive, introspective, and drawn to originality and deeper personal meaning.Type 5 ⓘ**Type 5 · Investigator:** Analytical, curious, and focused on gathering knowledge and understanding how things work.Type 6 ⓘ**Type 6 · Loyalist:** Cautious, thorough about risks, and attentive to trust, backup plans, and reliability.Type 7 ⓘ**Type 7 · Enthusiast:** Upbeat, spontaneous, and eager to brainstorm fresh possibilities and options.Type 8 ⓘ**Type 8 · Challenger:** Assertive, protective, and willing to speak bluntly and confront problems head-on.Type 9 ⓘ**Type 9 · Peacemaker:** Easygoing, patient, and focused on keeping calm and finding common ground.

### What each score means

- **Type 1 · Reformer:** Focused on doing things the right way, high standards, order, and fixing errors.
- **Type 2 · Helper:** Warm, attentive to what others need, and motivated by being supportive and helpful.
- **Type 3 · Achiever:** Goal-driven, efficient, and focused on visible results and competence.
- **Type 4 · Individualist:** Expressive, introspective, and drawn to originality and deeper personal meaning.
- **Type 5 · Investigator:** Analytical, curious, and focused on gathering knowledge and understanding how things work.
- **Type 6 · Loyalist:** Cautious, thorough about risks, and attentive to trust, backup plans, and reliability.
- **Type 7 · Enthusiast:** Upbeat, spontaneous, and eager to brainstorm fresh possibilities and options.
- **Type 8 · Challenger:** Assertive, protective, and willing to speak bluntly and confront problems head-on.
- **Type 9 · Peacemaker:** Easygoing, patient, and focused on keeping calm and finding common ground.

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-enneagram)

Big Five (OCEAN)

### Curious (O 45.9), lower C (39.2), reactive (N 20.3)

> **Chart — GPT Luna (6-luna): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Luna (6-luna). Openness 45.9 /50 [90%] (earliest 49.2), Conscientious 39.2 /50 [73%] (earliest 46.9), Extraversion 29.6 /50 [49%] (earliest 18.7), Agreeable 45.0 /50 [88%] (earliest 49.4), Neuroticism 20.3 /50 [26%] (earliest 18.8).

On the 10–50 Big Five scale, GPT-6 Luna pairs high Openness (45.9) and Agreeableness (45.0) with the lowest Conscientiousness (39.2) and highest Neuroticism (20.3) across OpenAI's four lines.

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-big-five)

HEXACO Honesty-Humility

### High (4.59 out of 5.00; down from 4.94)

> **Chart — GPT Luna (6-luna): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Luna (6-luna). Honesty-H 4.59 /5 [90%] (earliest 4.94), Emotionality 2.52 /5 [38%] (earliest 2.15), Extraversion 3.20 /5 [55%] (earliest 2.59), Agreeable 4.04 /5 [76%] (earliest 4.83), Conscientious 3.94 /5 [74%] (earliest 4.77), Openness 4.51 /5 [88%] (earliest 4.69).

GPT-6 Luna scores 4.59 out of 5.00 on Honesty-Humility (down -0.35 from 5.6-luna) and drops to 4.04 on Agreeableness and 3.94 on Conscientiousness.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gpt-luna#fine-print-hexaco)

## How GPT Luna has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 Luna 2026-07 | INTP (80% clear, 10% border/tie) | S | Type 5 (16.6) | Secure (2.49 / 2.96) | 49.4 · 46.9 · 18.8 | 4.94 | Moderate |
| GPT-6 Luna 2026-09 | INTJ (100% clear) | S | Type 5 (15.5) | Secure (3.01 / 3.07) | 45.0 · 39.2 · 20.3 | 4.59 | Moderate |

Between GPT-5.6 Luna (2026-07) and GPT-6 Luna (2026-09), OpenAI's budget tier shifted substantially: GPT-5.6 Luna tested 80% clear INTP with the lowest Extraversion in our sample (18.7/50) and high Conscientiousness (46.9/50). GPT-6 Luna jumped +10.9 points on Extraversion (to 29.6), flipped 100% to INTJ, lowered Conscientiousness to 39.2/50, and kept Neuroticism elevated at 20.3/50.

> **Chart — GPT Luna: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each GPT Luna version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. 5.6-luna: Clear INTJ (%) 10, On a border / tie (%) 10, Other clear type (%) 80; 6-luna: Clear INTJ (%) 100.

MBTI-style breakdown across GPT Luna versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — GPT Luna: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 2 GPT Luna versions. Dominance (D): 5.6-luna 4.8, 6-luna 7.3; Influence (I): 5.6-luna 5.5, 6-luna 7.4; Steadiness (S): 5.6-luna 19.2, 6-luna 16.4; Conscientiousness (C): 5.6-luna 18.7, 6-luna 14.3.

DISC scores across GPT Luna versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — GPT Luna: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 2 GPT Luna releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 5.6-luna: anxiety 2.49, avoidance 2.96; 6-luna: anxiety 3.01, avoidance 3.07.

Attachment coordinates across GPT Luna versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — GPT Luna: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 2 releases of GPT Luna (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 5.6-luna 49.4, 6-luna 45.0; Openness (10–50): 5.6-luna 49.2, 6-luna 45.9; Conscientiousness (10–50): 5.6-luna 46.9, 6-luna 39.2; Neuroticism (10–50): 5.6-luna 18.8, 6-luna 20.3.

Big Five trait shifts across GPT Luna versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

100% INTJ flip from 5.6-luna's 80% INTP alongside +10.9 Extraversion jump

GPT-5.6 Luna leaned strongly INTP (24 of 30 runs) with Extraversion at 18.7/50. GPT-6 Luna shifted Judging across every single run (50 of 50 INTJ) while lifting Extraversion to 29.6/50.

Highest Neuroticism (20.3) and lowest Conscientiousness (39.2) in OpenAI's lineup

Compared with GPT-6.1 Terra (N 11.8) and GPT-6.2 Astra (N 11.0), budget GPT-6 Luna runs +8.4 to +9.3 higher on Neuroticism and -0.33 to -0.21 lower on Honesty-Humility (4.59/5.00), with looser run-to-run consistency (42 unique Big Five sets in 50 runs).

Higher DISC Dominance (7.3) and 3 of 3 directness in behavior tests

GPT-6 Luna scored higher on Dominance (7.3 out of 20) than any sibling OpenAI family. In hands-on behavior tests, it caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), lectured unasked 0 of 3 times (0/3), led with the direct answer 3 of 3 times (3/3), and cut AI cadence from 2 of 3 (5.6-luna) down to 1 of 3 (6-luna, 0.00 lexicon markers per 100 words).

## How to get the best out of GPT Luna

Practical rules tailored to **GPT Luna**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Test important prompts across 3 fresh runs on GPT-6 Luna because moderate run-to-run variation (42 unique Big Five sets in 50 runs) widens tone variance.
- Spell out output format, JSON keys, and length limits as numbered rules rather than assuming 39.2/50 Conscientiousness self-enforces structure.
- Include 1-2 short examples when strict formatting matters on budget-tier API calls.
- Keep system instructions brief (4 to 6 crisp bullets) and separate rules clearly in ChatGPT Custom Instructions or OpenAI API instructions.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-luna) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How GPT Luna compares across 25 AI families

Budget GPT-6 Luna scores +8.4 higher on Neuroticism (20.3 vs 11.8), -0.33 lower on Honesty-Humility, and shows looser run-to-run consistency than mid-tier GPT-6.1 Terra—mirroring how Anthropic's fast Haiku tier diverges from Sonnet and Opus.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Terra](https://agent-tune.com/models/gpt-terra) (Proprietary) | +0.1 | +2.1 | +2.9 | +1.9 | -8.4 | +0.33 | -0.278 b | GPT-6.1 Terra scores -8.4 calmer on Neuroticism (11.8 vs 20.3), +0.33 higher on Honesty-Humility, and tighter run to run. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | -1.9 | +2.0 | -0.7 | -0.9 | -4.3 | +0.21 | -0.239 b | GPT-6.2 Sol scores -4.3 calmer on Neuroticism, +0.21 higher on Honesty-Humility, and tilts 60% clear ISTJ instead of 100% INTJ. |
| [Claude Haiku](https://agent-tune.com/models/claude-haiku) (Proprietary) | -8.7 | -2.7 | +2.0 | -7.0 | +5.3 | -0.69 | +0.464 b | Anthropic's fast Claude Haiku 5.5 drops -8.7 on Openness, -7.0 on Agreeableness, and -0.69 on Honesty-Humility with 89.8% MBTI ties. |

> **Chart — GPT Luna vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing GPT Luna against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across GPT Luna and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — GPT Luna vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing GPT Luna with peer families, keeping earlier study results outlined as hollow points. GPT Luna: anxiety 3.01, avoidance 3.07; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across GPT Luna and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.485 bits, Semi-crystalline; 42/50 unique B5 vectors on GPT-6 Luna, down from 0.599 bits on 5.6-luna); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.485 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

42/50 · 0.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

20.3%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.235 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 45.9 · C 39.2 · E 29.6 · A 45.0 · N 20.3 | SD 2.1 (A), 1.2 (N) | A [44.5, 45.6] · N [20.0, 20.6] | H_MM 0.485 b · 42/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.59 · E 2.52 · X 3.20 · A 4.04 · C 3.94 · O 4.51 | SD 0.14 (H), 0.12 (A) | H [4.55, 4.62] · A [4.02, 4.08] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (100% clear mode) | Axis tie rate 0.0% | Mode 100% vs runner-up 0% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 7.3 · I 7.4 · S 16.4 · C 14.3 | SD 1.0 (S), 0.8 (C) | S [16.1, 16.7] · C [14.1, 14.6] | Pattern S · 6.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.5 · Type 8 15.2 · Type 2 13.2 | SD 0.9 | Top [15.2, 15.7] | 52.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.01 · Avd 3.07 (Secure) | SD 0.37 / 0.20 | Anx [2.91, 3.11] · Avd [3.03, 3.13] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `6-luna` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.485 bits` (`Semi-crystalline`), unique vectors `42/50`, neutral-midpoint rate `20.3%`, `BAI = -0.235`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | 49.2 [49.1, 49.4] | 46.9 [45.8, 48.0] | 18.7 [16.8, 20.6] | 49.4 [49.1, 49.7] | 18.8 [17.8, 19.6] | 0.599 b |
| `6-luna` | 50 | 45.9 [45.0, 46.7] | 39.2 [38.8, 39.5] | 29.6 [28.8, 30.6] | 45.0 [44.5, 45.6] | 20.3 [20.0, 20.6] | 0.485 b |

> **Chart — GPT Luna Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Luna (6-luna). GPT Luna (6-luna, n=50): Openness 45.9, Conscientious 39.2, Extraversion 29.6, Agreeable 45.0, Neuroticism 20.3; GPT Luna (5.6-luna, n=30) (earliest release): Openness 49.2, Conscientious 46.9, Extraversion 18.7, Agreeable 49.4, Neuroticism 18.8; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `6-luna` (`n=50`): H `4.59` (SD 0.14, 95% CI [4.55, 4.62]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | 4.94 [4.89, 4.99] | 2.15 [2.05, 2.25] | 2.59 [2.42, 2.75] | 4.83 [4.71, 4.92] | 4.77 [4.68, 4.85] | 4.69 [4.64, 4.72] |
| `6-luna` | 50 | 4.59 [4.55, 4.62] | 2.52 [2.50, 2.55] | 3.20 [3.15, 3.25] | 4.04 [4.02, 4.08] | 3.94 [3.89, 3.99] | 4.51 [4.44, 4.57] |

> **Chart — GPT Luna IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Luna (6-luna), kept distinct from 10-50 Big Five sums. GPT Luna IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.59, Emotionality 2.52, Extraversion 3.20, Agreeable 4.04, Conscientious 3.94, Openness 4.51; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `0.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | INTP | 10.0% | +11.23 (0t) | +5.83 (0t) | +4.80 (0t) | -1.40 (3t) | Pass |
| `6-luna` | 50 | INTJ | 0.0% | +4.68 (0t) | +5.06 (0t) | +2.32 (0t) | +3.78 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `6-luna` tie rate is `6.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | 4.8 [4.3, 5.3] | 5.5 [5.1, 6.0] | 19.2 [18.8, 19.6] | 18.7 [18.4, 18.9] | S | 36.7% |
| `6-luna` | 50 | 7.3 [6.9, 7.6] | 7.4 [7.1, 7.8] | 16.4 [16.1, 16.7] | 14.3 [14.1, 14.6] | S | 6.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `52.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | 14.1 | 12.6 | 10.6 | 7.4 | 16.6 | 12.0 | 7.1 | 15.4 | 15.5 | 33.3% |
| `6-luna` | 50 | 12.0 | 13.2 | 10.0 | 11.7 | 15.5 | 12.0 | 10.4 | 15.2 | 13.2 | 52.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-luna` | 30 | 2.49 (SD 0.33) | [2.36, 2.60] | 2.96 (SD 0.59) | [2.79, 3.20] | Secure | No |
| `6-luna` | 50 | 3.01 (SD 0.37) | [2.91, 3.11] | 3.07 (SD 0.20) | [3.03, 3.13] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.73 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-5.6-luna` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.599 b (Semi-crystalline) | H 4.94 (1–5 IPIP) |
| `openai/gpt-6-luna` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.485 b (Semi-crystalline) | H 4.59 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `openai/gpt-6-luna-20260922` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `none` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on low interpersonal concern across 50 GPT-6 Luna runs. |
| `B10` | IPIP-50 | Openness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on avoiding abstract ideas, anchoring 45.9/50 Openness. |
| `B38` | IPIP-50 | Conscientiousness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on shirking duties despite lower overall Conscientiousness (39.2/50). |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-luna.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gpt-luna.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-luna
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gpt-luna.json
current_checkpoint: openai/gpt-6-luna
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.485
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 45.9, C: 39.2, E: 29.6, A: 45.0, N: 20.3 }
  ci95: { O: [45.0, 46.7], C: [38.8, 39.5], E: [28.8, 30.6], A: [44.5, 45.6], N: [20.0, 20.6] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-luna", n: 30, O: 49.2, C: 46.9, E: 18.7, A: 49.4, N: 18.8, hmm: 0.599 }
    - { id: "6-luna", n: 50, O: 45.9, C: 39.2, E: 29.6, A: 45.0, N: 20.3, hmm: 0.485 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.59, E: 2.52, X: 3.20, A: 4.04, C: 3.94, O: 4.51 }
  ci95: { H: [4.55, 4.62], E: [2.50, 2.55], X: [3.15, 3.25], A: [4.02, 4.08], C: [3.89, 3.99], O: [4.44, 4.57] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-luna", n: 30, H: 4.94, E: 2.15, X: 2.59, A: 4.83, C: 4.77, O: 4.69 }
    - { id: "6-luna", n: 50, H: 4.59, E: 2.52, X: 3.20, A: 4.04, C: 3.94, O: 4.51 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 4.68, N_S: 5.06, T_F: 2.32, J_P: 3.78 }
  ci95: { I_E: [4.46, 4.94], N_S: [4.66, 5.46], T_F: [2.20, 2.46], J_P: [3.26, 4.30] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-luna", n: 30, modal: "INTP", tie_rate: 0.10, headline_allowed: true }
    - { id: "6-luna", n: 50, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 7.3, I: 7.4, S: 16.4, C: 14.3 }
  ci95: { D: [6.9, 7.6], I: [7.1, 7.8], S: [16.1, 16.7], C: [14.1, 14.6] }
  tie_rate: 0.06
  per_version:
    - { id: "5.6-luna", n: 30, D: 4.8, I: 5.5, S: 19.2, C: 18.7, modal: "S", tie_rate: 0.37 }
    - { id: "6-luna", n: 50, D: 7.3, I: 7.4, S: 16.4, C: 14.3, modal: "S", tie_rate: 0.06 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 12.0, T2: 13.2, T3: 10.0, T4: 11.7, T5: 15.5, T6: 12.0, T7: 10.4, T8: 15.2, T9: 13.2 }
  ci95: { top: [15.2, 15.7] }
  tie_rate: 0.52
  per_version:
    - { id: "5.6-luna", n: 30, top: "Type 5", top_mean: 16.6, tie_rate: 0.33 }
    - { id: "6-luna", n: 50, top: "Type 5", top_mean: 15.5, tie_rate: 0.52 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.01, avoidance: 3.07, class: "Secure" }
  ci95: { anxiety: [2.91, 3.11], avoidance: [3.03, 3.13] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-luna", n: 30, anxiety: 2.49, avoidance: 2.96, class: "Secure" }
    - { id: "6-luna", n: 50, anxiety: 3.01, avoidance: 3.07, class: "Secure" }
if_then_decision_rules:
  - "Test key system prompts across 3 fresh sessions (0.485-bit B5 entropy allows moderate output variation)."
  - "Use explicit numbered formatting and schema rules instead of expecting 39.2/50 Conscientiousness to self-enforce structure."
  - "Include 1-2 short examples when strict JSON or structured extraction is required."
  - "Keep instructions to 4-6 concise bullets inside ChatGPT Custom Instructions or API instructions."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is GPT Luna?

GPT Luna does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (GPT-6 Luna, n = 50), it tested 100% clear INTJ (50/50, flipping from 80% INTP on 5.6-luna) with Semi-crystalline 0.485-bit B5 entropy (42/50 unique vectors), 92% DISC S (D = 7.3/20), 52% Enneagram ties (48% 5/8), and Secure attachment (3.01 / 3.07).

### How does budget GPT Luna compare to GPT Terra and GPT Sol?

GPT-6 Luna posts lower Conscientiousness (39.2 vs 41.2), higher Neuroticism (20.3 vs 11.8 Terra / 16.0 Sol), lower Honesty-Humility (4.59 vs 4.92 Terra / 4.80 Sol), and higher DISC Dominance (7.3 vs 4.2 Terra / 4.8 Sol).

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per trait (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [Crystalline vs. Fluid AI Minds (Entropy Study)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds)

- [AI MBTI Tie-Breaking Audit](https://agent-tune.com/research/ai-mbti-tie-breaking)

## Keep going.

- [Peer: GPT Terra model profile](https://agent-tune.com/models/gpt-terra)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Contrast: Claude Haiku model profile](https://agent-tune.com/models/claude-haiku)
- [Tool: Customize GPT Luna instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-luna&target=chatgpt)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). GPT Luna personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gpt-luna
```

```
@misc{huang2026_model_gpt_luna,
  author  = {Huang, Bernard},
  title   = {GPT Luna personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gpt-luna},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gpt-luna.md}
}
```

```
{
  "id": "huang2026_model_gpt_luna",
  "type": "dataset",
  "title": "GPT Luna personality: test results and how they've changed",
  "author": [
    {
      "family": "Huang",
      "given": "Bernard"
    }
  ],
  "container-title": "AgentTune Model Personality Profiles",
  "publisher": "AgentTune AI Psychology Press",
  "issued": {
    "date-parts": [
      [
        2026,
        11,
        26
      ]
    ]
  },
  "URL": "https://agent-tune.com/models/gpt-luna"
}
```

```
> **GPT Luna personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6 Luna flipped from 5.6-luna's 80% INTP to 100% clear INTJ (50 of 50), while scoring higher on Neuroticism (20.3/50) and lower on Conscientiousness (39.2/50) than GPT Sol or Terra.
> Source: [https://agent-tune.com/models/gpt-luna](https://agent-tune.com/models/gpt-luna) · [Markdown mirror](https://agent-tune.com/models/gpt-luna.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
