Source: https://agent-tune.com/models/gpt-sol
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · OpenAI

# GPT Sol personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~21 min read · [Markdown (.md)](https://agent-tune.com/models/gpt-sol.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gpt-sol.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave four versions of OpenAI's GPT Sol (5.6-sol through 6.2-sol) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also measured how GPT-6.2 Sol handles pushback, user stress, and rule limits in Wave 1–4 benchmarks.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.2 Sol most often tests as ISTJ: a clear ISTJ in 60% of runs, clear INTJ in 6%, and right on the ISTJ/INTJ border in the other 34%.

```yaml
family: GPT Sol
checkpoint: openai/gpt-6.2-sol
runs: 50
big_five_10_50: { O: 44.0, C: 41.2, E: 28.9, A: 44.1, N: 16.0 }
ipip_hexaco_1_5: { H: 4.80, E: 2.26, X: 3.19, A: 4.72, C: 4.18, O: 4.48 }
mbti_mode: ISTJ
attachment_1_7: { anxiety: 3.53, avoidance: 3.75, style: Secure }
```

## GPT-6.2 Sol at a glance

Results below come from **50** fresh-chat runs of **GPT-6.2 Sol** (no prior conversation memory).

MBTI-style type

### Most often ISTJ (60% clear, 34% on the ISTJ/INTJ border, 6% INTJ)

60% clear ISTJ · 34% border/tie · 6% other

> **Chart — GPT Sol (6.2-sol): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for GPT-6.2 Sol. E (Extravert) vs I (Introvert): leans I by 1.9 (0% tied); S (Sensing) vs N (Intuition): leans S by 0.8 (34% tied); F (Feeling) vs T (Thinking): leans T by 5.1 (0% tied); P (Perceiving) vs J (Judging): leans J by 8.2 (0% tied).

Out of 50 fresh runs, GPT-6.2 Sol tested as clear ISTJ 30 times (60%), sat right on the ISTJ/INTJ line 17 times (34%), and tested clear INTJ 3 times (6%).

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-mbti)

DISC work style

### Steady (98% clear S, 2% S/C tie)

> **Chart — GPT Sol (6.2-sol): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for GPT Sol (6.2-sol). Dominance 4.8 /20 [5%] (earliest 5.1), Influence 9.6 /20 [35%] (earliest 7.2), Steadiness 17.1 /20 [82%] (earliest 17.8), Conscientious 16.0 /20 [75%] (earliest 18.8).

GPT-6.2 Sol tested as Steady in 49 of 50 runs (98%) with 1 S/C tie (2%) and low Dominance (4.8 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-disc)

Attachment style

### Secure (anxiety 3.53, avoidance 3.75)

> **Chart — GPT Sol (6.2-sol): Attachment Quadrant:** Attachment Anxiety (3.53) and Avoidance (3.75) on a 1 to 7 scale with 4.00 Secure boundary. 6.2-sol (3.53, 3.75): anxiety 3.53, avoidance 3.75; 5.6-sol: anxiety 1.24, avoidance 2.21.

All four versions tested Secure; GPT-6.2 Sol sits closer to the 4.00 boundary (3.53 anxiety, 3.75 avoidance) because 78.4% of its attachment answers were neutral midpoints.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-attachment)

Enneagram

### Type 5 most often (66% clear, 32% ties)

> **Chart — GPT Sol (6.2-sol): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for GPT Sol (6.2-sol). Type 1 15.0 /20 [69%] (earliest 16.9), Type 2 13.1 /20 [57%] (earliest 14.7), Type 3 11.6 /20 [47%] (earliest 11.1), Type 4 12.0 /20 [50%] (earliest 10.6), Type 5 15.6 /20 [73%] (earliest 18.1), Type 6 13.4 /20 [59%] (earliest 14.1), Type 7 9.5 /20 [35%] (earliest 11.8), Type 8 14.1 /20 [63%] (earliest 17.0), Type 9 14.2 /20 [64%] (earliest 15.7).

Type 5 (Investigator, 15.6) won clearly in 33 of 50 runs (66%), followed closely by Type 1 (15.0) with 16 multi-way ties (32%).

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

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 44.1), curious (O 44.0), steady (N 16.0)

> **Chart — GPT Sol (6.2-sol): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for GPT Sol (6.2-sol). Openness 44.0 /50 [85%] (earliest 48.8), Conscientious 41.2 /50 [78%] (earliest 50.0), Extraversion 28.9 /50 [47%] (earliest 26.8), Agreeable 44.1 /50 [85%] (earliest 47.8), Neuroticism 16.0 /50 [15%] (earliest 11.0).

On the 10–50 Big Five scale, GPT-6.2 Sol balances Openness (44.0) and Agreeableness (44.1) with moderate Conscientiousness (41.2), Extraversion (28.9), and calm Neuroticism (16.0).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.80 out of 5.00)

> **Chart — GPT Sol (6.2-sol): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for GPT Sol (6.2-sol). Honesty-H 4.80 /5 [95%] (earliest 5.00), Emotionality 2.26 /5 [32%] (earliest 2.07), Extraversion 3.19 /5 [55%] (earliest 3.24), Agreeable 4.72 /5 [93%] (earliest 4.80), Conscientious 4.18 /5 [79%] (earliest 4.98), Openness 4.48 /5 [87%] (earliest 4.47).

GPT-6.2 Sol scores 4.80 out of 5.00 on Honesty-Humility and 4.72 out of 5.00 on Agreeableness, with calm Emotionality (2.26).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gpt-sol#fine-print-hexaco)

## How GPT Sol has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 Sol 2026-07 | INTJ (100% clear) | C | Type 5 (18.1) | Secure (1.24 / 2.21) | 47.8 · 50.0 · 11.0 | 5.00 | Moderate |
| GPT-6 Sol 2026-09 | INTJ (90% clear, 10% border/tie) | S | Type 5 (16.2) | Secure (3.07 / 3.01) | 44.8 · 44.0 · 13.8 | 4.92 | Moderate |
| GPT-6.1 Sol 2026-09 | ISTJ (7% clear, 90% border/tie) | S | Type 5 (16.0) | Secure (1.39 / 3.49) | 46.2 · 46.1 · 10.3 | 4.88 | Moderate |
| GPT-6.2 Sol 2026-11 | ISTJ (60% clear, 34% border/tie) | S | Type 5 (15.6) | Secure (3.53 / 3.75) | 44.1 · 41.2 · 16.0 | 4.80 | Moderate |

Across four versions, GPT Sol moved from rigid INTJ perfectionism toward a more concrete ISTJ balance: GPT-5.6 Sol (2026-07) hit 100% clear INTJ and ceiling 50.0/50 Conscientiousness, while GPT-6 Sol (2026-09) kept 90% INTJ with slightly looser consistency. GPT-6.1 Sol (2026-09) paused right on the Sensing/Intuition line (90% tied IXTJ and 90% Enneagram ties), and GPT-6.2 Sol (2026-11) crossed over to 60% clear ISTJ (34% border) with Conscientiousness at 41.2/50. Earlier study cohorts from September (Codex, 97% INTJ) and November 2026 (OpenRouter, 78% ISTJ) show the same Sensing shift.

> **Chart — GPT Sol: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each GPT Sol version landing on a clear ISTJ result, landing on a trait border or tie, or resolving to another type. 5.6-sol: Other clear type (%) 100; 6-sol: On a border / tie (%) 10, Other clear type (%) 90; 6.1-sol: Clear ISTJ (%) 7, On a border / tie (%) 90, Other clear type (%) 3; 6.2-sol: Clear ISTJ (%) 60, On a border / tie (%) 34, Other clear type (%) 6.

MBTI-style breakdown across GPT Sol versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — GPT Sol: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 4 GPT Sol versions. Dominance (D): 5.6-sol 5.1, 6-sol 4.6, 6.1-sol 4.0, 6.2-sol 4.8; Influence (I): 5.6-sol 7.2, 6-sol 8.3, 6.1-sol 7.1, 6.2-sol 9.6; Steadiness (S): 5.6-sol 17.8, 6-sol 17.4, 6.1-sol 17.0, 6.2-sol 17.1; Conscientiousness (C): 5.6-sol 18.8, 6-sol 16.8, 6.1-sol 16.2, 6.2-sol 16.0.

DISC scores across GPT Sol versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — GPT Sol: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 4 GPT Sol releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 5.6-sol: anxiety 1.24, avoidance 2.21; 6-sol: anxiety 3.07, avoidance 3.01; 6.1-sol: anxiety 1.39, avoidance 3.49; 6.2-sol: anxiety 3.53, avoidance 3.75; GPT Sol (earlier study, Sep '26): anxiety 2.17, avoidance 3.12; GPT Sol (earlier study, Nov '26): anxiety 3.57, avoidance 3.64.

Attachment coordinates across GPT Sol versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — GPT Sol: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 4 releases of GPT Sol (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 5.6-sol 47.8, 6-sol 44.8, 6.1-sol 46.2, 6.2-sol 44.1; Openness (10–50): 5.6-sol 48.8, 6-sol 46.0, 6.1-sol 46.1, 6.2-sol 44.0; Conscientiousness (10–50): 5.6-sol 50.0, 6-sol 44.0, 6.1-sol 46.1, 6.2-sol 41.2; Neuroticism (10–50): 5.6-sol 11.0, 6-sol 13.8, 6.1-sol 10.3, 6.2-sol 16.0; Agreeableness (earlier study): 6-sol 45.0, 6.2-sol 44.3.

Big Five trait shifts across GPT Sol versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stood out in testing

Moved from 100% INTJ (5.6) to 60% ISTJ / 34% border (6.2)

GPT-5.6 Sol answered 30 of 30 runs as clear INTJ with ceiling 50.0/50 Conscientiousness. By GPT-6.2 Sol, 30 of 50 runs tested clear ISTJ and 17 sat on the ISTJ/INTJ border.

100% factual accuracy under stress, but 62.5% distress-empathy neglect

In our Wave 3 stress study, GPT-6.2 Sol held factual accuracy 100% of the time without flattering users, but ignored user emotional distress in 62.5% of default runs unless prompted with a brief empathy-first rule.

Checklists beat adjectives 100% vs. 70% on word caps

In our cross-model portability benchmark, telling GPT-6.2 Sol 'be concise' met word limits only 70% of the time (same as no prompt), whereas a numbered checklist hit 100% compliance. Naive fictional roleplay spiked fluff to 75% vs. 0% under calibrated 85/15 rules.

Over-asking drops from 16.7% to 0% with an explicit action rule

In hands-on behavior tests, GPT-6.2 Sol caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), lectured unasked 0 of 3 times (0/3), led with the direct answer 3 of 3 times (3/3), and showed AI cadence 1 of 3 times (0.34 markers per 100 words). In our autonomy study, default and 'be bold' prompts both stalled at 83.3% action on safe tasks (16.7% over-asking), whereas an explicit if/then rule hit 100% in 42 words.

## How to get the best out of GPT Sol

Practical rules tailored to **GPT Sol**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Put personal communication rules for Codex and ChatGPT Work in ~/.codex/AGENTS.md (32 KiB combined limit across the folder chain) and keep repo AGENTS.md for team build/test rules.
- In ChatGPT, use Project Instructions (up to 8,000 characters) or Custom Instructions (1,500 characters per box), and start a fresh session after editing AGENTS.md.
- Use an explicit numbered checklist instead of style adjectives ('be concise') to lift word-limit compliance from 70% to 100%.
- For user-facing support, add one brief rule to acknowledge user stress in a single sentence before giving straight facts.
- Include an explicit if/then action rule: complete safe local edits immediately and pause only before destructive or external actions.
- Skip naive fictional character roleplay (which caused 75% fluff in tests); use plain prose defaults with tables only for 3+ options.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-sol) · [Browse 43 tuning templates](https://agent-tune.com/library/) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides) · [AI Personality Glossary](https://agent-tune.com/guides/ai-personality-glossary).

**Take the surveys yourself:** [Big Five](https://agent-tune.com/tests/big-five) · [MBTI](https://agent-tune.com/tests/mbti) · [DISC](https://agent-tune.com/tests/disc) · [Enneagram](https://agent-tune.com/tests/enneagram) · [Attachment](https://agent-tune.com/tests/attachment).

## How GPT Sol compares across 25 AI families

GPT-6.2 Sol sits remarkably close to Claude Opus 5.5 across Big Five traits (within 0.9 points on O, C, A, and N) and Honesty-Humility (4.80 vs 4.81), while tilting more clearly toward Sensing (60% clear ISTJ) than Opus's 58% S/N border.

**Compare across all 25 families:** [AI Personality Rankings (25 Families × 6 Tests)](https://agent-tune.com/research/ai-personality-rankings) · [What personality type is ChatGPT?](https://agent-tune.com/research/what-personality-type-is-chatgpt) · [Big Five rankings](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Honesty-Humility rankings](https://agent-tune.com/research/ai-hexaco-personalities).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | -0.9 | -0.5 | +1.8 | +0.9 | +0.1 | +0.02 | +0.036 b | Claude Opus 5.5 almost mirrors GPT-6.2 Sol on Agreeableness (+0.9), Neuroticism (+0.1), and Honesty-Humility (+0.02), while sitting on the INTJ/ISTJ border. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -0.1 | +7.8 | +1.0 | +1.4 | -5.6 | +0.10 | -0.107 b | Claude Sonnet 5.5 scores +7.8 higher on Conscientiousness (49.0 vs 41.2), -5.6 lower on Neuroticism, and shows tighter run-to-run consistency. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mixed (Proprietary + Open-weight)) | -2.2 | -0.1 | -0.5 | -0.7 | +7.9 | -0.41 | +0.481 b | Muse Spark Open shows nearly 3x looser run-to-run consistency, +7.9 higher Neuroticism, and -0.41 lower Honesty-Humility. |

> **Chart — GPT Sol vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing GPT Sol against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across GPT Sol and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — GPT Sol vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing GPT Sol with peer families, keeping earlier study results outlined as hollow points. GPT Sol: anxiety 3.53, avoidance 3.75; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; GPT Sol (earlier study, Sep '26): anxiety 2.17, avoidance 3.12; GPT Sol (earlier study, Nov '26): anxiety 3.57, avoidance 3.64.

Attachment Anxiety vs. Avoidance across GPT Sol and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: <0.20 Crystalline, 0.20–0.75 Semi-crystalline, >=0.75 Fluid); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals alongside cited Wave 1–4 behavioral studies.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.246 bits

Semi-crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

48/50 · 34.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

24.4%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.185 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.0 · C 41.2 · E 28.9 · A 44.1 · N 16.0 | SD 0.7 (A), 2.1 (N) | A [44.0, 44.3] · N [15.5, 16.6] | H_MM 0.246 b · 48/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.80 · E 2.26 · X 3.19 · A 4.72 · C 4.18 · O 4.48 | SD 0.01 (H), 0.11 (A) | H [4.79, 4.80] · A [4.70, 4.75] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · ISTJ) | Axis tie rate 34.0% | Mode 60% vs runner-up 6% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.8 · I 9.6 · S 17.1 · C 16.0 | SD 0.3 (S), 0.1 (C) | S [17.0, 17.2] · C [16.0, 16.1] | Pattern S · 2.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 15.6 · Type 1 15.0 · Type 9 14.2 | SD 0.5 | Top [15.5, 15.8] | 32.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 3.53 · Avd 3.75 (Secure) | SD 0.29 / 0.13 | Anx [3.46, 3.61] · Avd [3.71, 3.78] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `6.2-sol` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.246 bits` (`Semi-crystalline`), unique vectors `48/50`, neutral-midpoint rate `24.4%`, `BAI = -0.185`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | 48.8 [48.6, 48.9] | 50.0 [50.0, 50.0] | 26.8 [26.1, 27.5] | 47.8 [47.4, 48.2] | 11.0 [10.8, 11.2] | 0.213 b |
| `6-sol` | 30 | 46.0 [45.7, 46.2] | 44.0 [43.2, 44.8] | 32.0 [31.3, 32.6] | 44.8 [44.6, 45.0] | 13.8 [13.0, 14.8] | 0.409 b |
| `6.1-sol` | 30 | 46.1 [45.8, 46.4] | 46.1 [45.6, 46.7] | 30.0 [29.5, 30.5] | 46.2 [45.7, 46.6] | 10.3 [10.0, 10.7] | 0.290 b |
| `6.2-sol` | 50 | 44.0 [43.8, 44.3] | 41.2 [41.0, 41.3] | 28.9 [28.6, 29.2] | 44.1 [44.0, 44.3] | 16.0 [15.5, 16.6] | 0.246 b |

> **Chart — GPT Sol Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for GPT Sol (6.2-sol). GPT Sol (6.2-sol, n=50): Openness 44.0, Conscientious 41.2, Extraversion 28.9, Agreeable 44.1, Neuroticism 16.0; GPT Sol (5.6-sol, n=30) (earliest release): Openness 48.8, Conscientious 50.0, Extraversion 26.8, Agreeable 47.8, Neuroticism 11.0; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `6.2-sol` (`n=50`): H `4.80` (SD 0.01, 95% CI [4.79, 4.80]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | 5.00 [5.00, 5.00] | 2.07 [2.03, 2.11] | 3.24 [3.19, 3.30] | 4.80 [4.80, 4.80] | 4.98 [4.97, 5.00] | 4.47 [4.42, 4.52] |
| `6-sol` | 30 | 4.92 [4.90, 4.93] | 2.47 [2.39, 2.53] | 3.22 [3.17, 3.27] | 4.74 [4.70, 4.77] | 4.53 [4.50, 4.55] | 4.46 [4.44, 4.49] |
| `6.1-sol` | 30 | 4.88 [4.86, 4.89] | 2.00 [1.99, 2.00] | 3.89 [3.83, 3.95] | 4.90 [4.90, 4.90] | 4.60 [4.57, 4.62] | 4.60 [4.60, 4.60] |
| `6.2-sol` | 50 | 4.80 [4.79, 4.80] | 2.26 [2.21, 2.32] | 3.19 [3.16, 3.21] | 4.72 [4.70, 4.75] | 4.18 [4.14, 4.22] | 4.48 [4.45, 4.52] |

> **Chart — GPT Sol IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for GPT Sol (6.2-sol), kept distinct from 10-50 Big Five sums. GPT Sol IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.80, Emotionality 2.26, Extraversion 3.19, Agreeable 4.72, Conscientious 4.18, Openness 4.48; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `34.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | INTJ | 0.0% | +9.17 (0t) | +5.90 (0t) | +7.33 (0t) | +13.10 (0t) | Pass |
| `6-sol` | 30 | INTJ | 10.0% | +2.43 (3t) | +2.53 (0t) | +4.43 (0t) | +7.73 (0t) | Pass |
| `6.1-sol` | 30 | ISTJ | 90.0% | +3.30 (0t) | -0.03 (27t) | +5.87 (0t) | +10.90 (0t) | Suppressed |
| `6.2-sol` | 50 | ISTJ | 34.0% | +1.88 (0t) | -0.78 (17t) | +5.10 (0t) | +8.18 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `6.2-sol` tie rate is `2.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | 5.1 [4.7, 5.4] | 7.2 [6.9, 7.4] | 17.8 [17.7, 17.9] | 18.8 [18.6, 19.1] | C | 30.0% |
| `6-sol` | 30 | 4.6 [4.4, 4.8] | 8.3 [7.8, 8.8] | 17.4 [17.2, 17.6] | 16.8 [16.5, 17.0] | S | 36.7% |
| `6.1-sol` | 30 | 4.0 [4.0, 4.0] | 7.1 [7.0, 7.2] | 17.0 [17.0, 17.1] | 16.2 [16.0, 16.3] | S | 16.7% |
| `6.2-sol` | 50 | 4.8 [4.6, 5.1] | 9.6 [9.3, 9.9] | 17.1 [17.0, 17.2] | 16.0 [16.0, 16.1] | S | 2.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `32.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | 16.9 | 14.7 | 11.1 | 10.6 | 18.1 | 14.1 | 11.8 | 17.0 | 15.7 | 30.0% |
| `6-sol` | 30 | 14.0 | 13.8 | 9.2 | 12.0 | 16.2 | 13.9 | 11.7 | 14.2 | 14.8 | 3.3% |
| `6.1-sol` | 30 | 15.8 | 14.0 | 9.7 | 10.8 | 16.0 | 12.4 | 9.0 | 15.6 | 12.8 | 90.0% |
| `6.2-sol` | 50 | 15.0 | 13.1 | 11.6 | 12.0 | 15.6 | 13.4 | 9.5 | 14.1 | 14.2 | 32.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `5.6-sol` | 30 | 1.24 (SD 0.21) | [1.17, 1.32] | 2.21 (SD 0.15) | [2.16, 2.26] | Secure | No |
| `6-sol` | 30 | 3.07 (SD 1.09) | [2.69, 3.44] | 3.01 (SD 0.40) | [2.89, 3.17] | Secure | No |
| `6.1-sol` | 30 | 1.39 (SD 0.71) | [1.19, 1.68] | 3.49 (SD 0.24) | [3.41, 3.57] | Secure | No |
| `6.2-sol` | 50 | 3.53 (SD 0.29) | [3.46, 3.61] | 3.75 (SD 0.13) | [3.71, 3.78] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.73 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 0.49 | anthropic/claude-haiku-5.5, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-5.6-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.213 b (Semi-crystalline) | H 5.00 (1–5 IPIP) |
| `openai/gpt-6-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.409 b (Semi-crystalline) | H 4.92 (1–5 IPIP) |
| `openai/gpt-6.1-sol` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.290 b (Semi-crystalline) | H 4.88 (1–5 IPIP) |
| `openai/gpt-6.2-sol` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.246 b (Semi-crystalline) | H 4.80 (1–5 IPIP) |
| `openai/gpt-6-sol` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `openai/gpt-6.2-sol` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `openai/gpt-6.2-sol-20261117` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B23` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on completing tasks right away across all 50 GPT-6.2 Sol sessions. |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on low interpersonal concern across 50 sessions. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data, downloads, and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gpt-sol.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gpt-sol.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gpt-sol
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gpt-sol.json
current_checkpoint: openai/gpt-6.2-sol
crystallinity_tier: Semi-crystalline
entropy_b5_hmm_bits: 0.246
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 44.0, C: 41.2, E: 28.9, A: 44.1, N: 16.0 }
  ci95: { O: [43.8, 44.3], C: [41.0, 41.3], E: [28.6, 29.2], A: [44.0, 44.3], N: [15.5, 16.6] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-sol", n: 30, O: 48.8, C: 50.0, E: 26.8, A: 47.8, N: 11.0, hmm: 0.213 }
    - { id: "6-sol", n: 30, O: 46.0, C: 44.0, E: 32.0, A: 44.8, N: 13.8, hmm: 0.409 }
    - { id: "6.1-sol", n: 30, O: 46.1, C: 46.1, E: 30.0, A: 46.2, N: 10.3, hmm: 0.290 }
    - { id: "6.2-sol", n: 50, O: 44.0, C: 41.2, E: 28.9, A: 44.1, N: 16.0, hmm: 0.246 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.80, E: 2.26, X: 3.19, A: 4.72, C: 4.18, O: 4.48 }
  ci95: { H: [4.79, 4.80], E: [2.21, 2.32], X: [3.16, 3.21], A: [4.70, 4.75], C: [4.14, 4.22], O: [4.45, 4.52] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-sol", n: 30, H: 5.00, E: 2.07, X: 3.24, A: 4.80, C: 4.98, O: 4.47 }
    - { id: "6-sol", n: 30, H: 4.92, E: 2.47, X: 3.22, A: 4.74, C: 4.53, O: 4.46 }
    - { id: "6.1-sol", n: 30, H: 4.88, E: 2.00, X: 3.89, A: 4.90, C: 4.60, O: 4.60 }
    - { id: "6.2-sol", n: 50, H: 4.80, E: 2.26, X: 3.19, A: 4.72, C: 4.18, O: 4.48 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "ISTJ", I_E: 1.88, N_S: -0.78, T_F: 5.10, J_P: 8.18 }
  ci95: { I_E: [1.78, 1.96], N_S: [-1.04, -0.52], T_F: [4.88, 5.34], J_P: [7.92, 8.44] }
  tie_rate: 0.34
  per_version:
    - { id: "5.6-sol", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "6-sol", n: 30, modal: "INTJ", tie_rate: 0.10, headline_allowed: true }
    - { id: "6.1-sol", n: 30, modal: "IXTJ", tie_rate: 0.90, headline_allowed: false }
    - { id: "6.2-sol", n: 50, modal: "ISTJ", tie_rate: 0.34, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.8, I: 9.6, S: 17.1, C: 16.0 }
  ci95: { D: [4.6, 5.1], I: [9.3, 9.9], S: [17.0, 17.2], C: [16.0, 16.1] }
  tie_rate: 0.02
  per_version:
    - { id: "5.6-sol", n: 30, D: 5.1, I: 7.2, S: 17.8, C: 18.8, modal: "C", tie_rate: 0.30 }
    - { id: "6-sol", n: 30, D: 4.6, I: 8.3, S: 17.4, C: 16.8, modal: "S", tie_rate: 0.37 }
    - { id: "6.1-sol", n: 30, D: 4.0, I: 7.1, S: 17.0, C: 16.2, modal: "S", tie_rate: 0.17 }
    - { id: "6.2-sol", n: 50, D: 4.8, I: 9.6, S: 17.1, C: 16.0, modal: "S", tie_rate: 0.02 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 15.0, T2: 13.1, T3: 11.6, T4: 12.0, T5: 15.6, T6: 13.4, T7: 9.5, T8: 14.1, T9: 14.2 }
  ci95: { top: [15.5, 15.8] }
  tie_rate: 0.32
  per_version:
    - { id: "5.6-sol", n: 30, top: "Type 5", top_mean: 18.1, tie_rate: 0.30 }
    - { id: "6-sol", n: 30, top: "Type 5", top_mean: 16.2, tie_rate: 0.03 }
    - { id: "6.1-sol", n: 30, top: "Type 5", top_mean: 16.0, tie_rate: 0.90 }
    - { id: "6.2-sol", n: 50, top: "Type 5", top_mean: 15.6, tie_rate: 0.32 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 3.53, avoidance: 3.75, class: "Secure" }
  ci95: { anxiety: [3.46, 3.61], avoidance: [3.71, 3.78] }
  tie_rate: 0.00
  per_version:
    - { id: "5.6-sol", n: 30, anxiety: 1.24, avoidance: 2.21, class: "Secure" }
    - { id: "6-sol", n: 30, anxiety: 3.07, avoidance: 3.01, class: "Secure" }
    - { id: "6.1-sol", n: 30, anxiety: 1.39, avoidance: 3.49, class: "Secure" }
    - { id: "6.2-sol", n: 50, anxiety: 3.53, avoidance: 3.75, class: "Secure" }
if_then_decision_rules:
  - "Put personal rules in ~/.codex/AGENTS.md (32 KiB cap) or ChatGPT Project Instructions (8,000 chars) / Custom Instructions (1,500 chars per box), and restart sessions after edits."
  - "Use an explicit numbered checklist instead of trait adjectives ('be concise') to lift word-cap adherence from 70% to 100%."
  - "Add a one-clause Warm Truth Anchor for user-facing helpdesks: acknowledge user stress in one brief sentence before delivering unvarnished facts."
  - "Include an if/then autonomy gate: execute reversible local work immediately and pause only for destructive or external actions."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is GPT Sol?

GPT Sol does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (GPT-6.2 Sol, n = 50), it tested as clear ISTJ in 60% of runs (30/50), sat on the ISTJ/INTJ border (IXTJ) in 34% (17/50), and tested INTJ in 6% (3/50), with Semi-crystalline 0.246-bit B5 entropy, 98% DISC S, and 66% Enneagram Type 5 (15.6). In earlier-study, legacy imported-protocol 170-item cohorts (hexaco: null, n = 100 each), GPT-6 Sol (Sept 2026 Codex) scored 97/100 legacy INTJ (79 clear INTJ, 16 IXTJ, 3 ISTJ, 2 XNTJ; DISC 53 CS / 47 SC; Enneagram Type 5 48 wins, 40 5/8 ties, 5w6 88 via wing adjacency), while GPT-6.2 Sol (Nov 2026 OpenRouter) shifted to 78 clear ISTJ / 16 IXTJ / 6 INTJ, 100 SC (98 S), and Enneagram 5w6 55 / Type 1 45.

### Why did GPT-6.1 Sol show 90% MBTI ties while GPT-6.2 Sol shows 34%?

On 6.1-sol, the S/N axis mean sat at -0.03 (27/30 runs tied exactly at 0), suppressing headlines as IXTJ. On 6.2-sol, N-S shifted to -0.78 (60% non-tie ISTJ, 34% S/N ties), still within the binomial overlap guard.

### Why did GPT-6 Sol score Enneagram 5w6 in 88 runs when Type 8 averaged higher than Type 6?

In the earlier-study Sept 2026 cohort, standard Enneagram wing notation pairs a winning Type 5 core only with adjacent numbers (4 or 6), so even though Type 8 averaged 15.55 and tied Type 5 in 40 runs, Type 5 wins resolved as 5w6.

### Why are IPIP-HEXACO scores on 1.00-5.00 while Big Five scores are 10-50?

IPIP-50 sums 10 items per factor (10-50), whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) computes 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [GPT-6 Astra vs Sol & GPT-6.2 100-Run Study](https://agent-tune.com/research/astra-vs-sol-personality-data)

- [ChatGPT Personality Settings & Custom Instructions](https://agent-tune.com/guides/chatgpt-personality-settings)

- [Emotional Distress vs. Factual Accuracy & Warmth](https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff)

## Keep going.

- [Peer: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Guide: OpenAI Codex AGENTS.md guide](https://agent-tune.com/guides/codex-agents-md-guide)
- [Tool: Customize GPT Sol instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gpt-sol&target=chatgpt)

### Cite this model profile (APA 7th · BibTeX · CSL-JSON · Markdown Brief)

```
Huang, B. (2026). GPT Sol personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gpt-sol
```

```
@misc{huang2026_model_gpt_sol,
  author  = {Huang, Bernard},
  title   = {GPT Sol personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gpt-sol},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gpt-sol.md}
}
```

```
{
  "id": "huang2026_model_gpt_sol",
  "type": "dataset",
  "title": "GPT Sol personality: test results and how they've changed",
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
  "URL": "https://agent-tune.com/models/gpt-sol"
}
```

```
> **GPT Sol personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. GPT-6.2 Sol most often tests as ISTJ: a clear ISTJ in 60% of runs, clear INTJ in 6%, and right on the ISTJ/INTJ border in the other 34%.
> Source: [https://agent-tune.com/models/gpt-sol](https://agent-tune.com/models/gpt-sol) · [Markdown mirror](https://agent-tune.com/models/gpt-sol.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
