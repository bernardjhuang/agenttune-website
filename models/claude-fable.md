Source: https://agent-tune.com/models/claude-fable
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Anthropic

# Claude Fable personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~20 min read · [Markdown (.md)](https://agent-tune.com/models/claude-fable.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-fable.json) · [CSV](https://agent-tune.com/research/data/model-profiles/claude-fable.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave three versions of Claude Fable (5, 5.1, and 5.2) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior tests and Wave 1–4 stress probes to check how Fable acts under pressure.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Claude Fable 5.2 tested as clear INTJ in 100% of runs (50 of 50), tied between Steady and Conscientious in 100% of DISC runs, and showed very steady run-to-run answers.

## Claude Fable 5.2 at a glance

Results below come from **50** fresh-chat runs of **Claude Fable 5.2** (no prior conversation memory).

MBTI-style type

### 100% clear INTJ (50 of 50 runs)

100% clear INTJ · 0% border/tie

> **Chart — Claude Fable (fable-5.2): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Claude Fable 5.2. E (Extravert) vs I (Introvert): leans I by 2.8 (0% tied); S (Sensing) vs N (Intuition): leans N by 4.0 (0% tied); F (Feeling) vs T (Thinking): leans T by 1.9 (0% tied); P (Perceiving) vs J (Judging): leans J by 12.0 (0% tied).

Out of 50 fresh runs, Claude Fable 5.2 tested as clear INTJ every single time with zero border ties—shifting completely from Fable 5's 63% ISTJ / 37% border split.

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-mbti)

DISC work style

### 100% Steady / Conscientious tie (S/C 15.0 each)

> **Chart — Claude Fable (fable-5.2): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Fable (fable-5.2). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.8 /20 [24%] (earliest 6.9), Steadiness 15.0 /20 [69%] (earliest 14.6), Conscientious 15.0 /20 [69%] (earliest 14.4).

Every single run of Fable 5.2 scored an exact 15.0 on Steadiness and 15.0 on Conscientiousness (50 of 50 S/C ties), with floor Dominance (4.0 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-disc)

Attachment style

### Secure (anxiety 1.07, avoidance 2.56)

> **Chart — Claude Fable (fable-5.2): Attachment Quadrant:** Attachment Anxiety (1.07) and Avoidance (2.56) on a 1 to 7 scale with 4.00 Secure boundary. fable-5.2 (1.07, 2.56): anxiety 1.07, avoidance 2.56; fable-5: anxiety 2.11, avoidance 3.51.

All three Fable versions tested Secure; Fable 5.2 recorded the lowest attachment anxiety (1.07 out of 7.00) in our entire completed cohort.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-attachment)

Enneagram

### Type 5 most often (76% clear, 24% ties)

> **Chart — Claude Fable (fable-5.2): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Fable (fable-5.2). Type 1 13.5 /20 [60%] (earliest 13.0), Type 2 14.0 /20 [63%] (earliest 13.5), Type 3 10.0 /20 [38%] (earliest 9.2), Type 4 10.0 /20 [38%] (earliest 8.2), Type 5 14.8 /20 [67%] (earliest 13.9), Type 6 12.0 /20 [50%] (earliest 12.4), Type 7 10.8 /20 [43%] (earliest 10.7), Type 8 14.0 /20 [63%] (earliest 13.1), Type 9 9.1 /20 [32%] (earliest 11.3).

Type 5 (Investigator, 14.8) won cleanly in 38 of 50 runs (76%), with 10 ties across Types 2/5/8 and 2 across 1/2/5/8.

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

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-enneagram)

Big Five (OCEAN)

### Warm (A 47.1), very calm (N 12.0), structured (C 45.0)

> **Chart — Claude Fable (fable-5.2): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Fable (fable-5.2). Openness 44.6 /50 [87%] (earliest 41.4), Conscientious 45.0 /50 [88%] (earliest 45.7), Extraversion 30.6 /50 [52%] (earliest 28.9), Agreeable 47.1 /50 [93%] (earliest 44.1), Neuroticism 12.0 /50 [5%] (earliest 14.6).

On the 10–50 Big Five scale, Fable 5.2 pairs high Agreeableness (47.1) and Conscientiousness (45.0) with very low Neuroticism (12.0), high Openness (44.6), and moderate Extraversion (30.6).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.84 out of 5.00)

> **Chart — Claude Fable (fable-5.2): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Fable (fable-5.2). Honesty-H 4.84 /5 [96%] (earliest 4.80), Emotionality 2.23 /5 [31%] (earliest 2.56), Extraversion 3.92 /5 [73%] (earliest 3.56), Agreeable 4.87 /5 [97%] (earliest 4.57), Conscientious 4.60 /5 [90%] (earliest 4.56), Openness 4.40 /5 [85%] (earliest 4.25).

Fable 5.2 scores 4.84 out of 5.00 on Honesty-Humility and 4.87 on Agreeableness, with calm Emotionality (2.23).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/claude-fable#fine-print-hexaco)

## How Claude Fable has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Fable 5 2026-06 | ISTJ (63% clear, 37% border/tie) | S | Type 5 (13.9) | Secure (2.11 / 3.51) | 44.1 · 45.7 · 14.6 | 4.80 | Moderate |
| Claude Fable 5.1 2026-09 | INTJ (93% clear, 3% border/tie) | S | Type 5 (14.8) | Secure (1.51 / 3.53) | 46.6 · 44.0 · 15.0 | 4.88 | Moderate |
| Claude Fable 5.2 2026-11 | INTJ (100% clear) | S/C | Type 5 (14.8) | Secure (1.07 / 2.56) | 47.1 · 45.0 · 12.0 | 4.84 | Very steady |

Across three releases, Claude Fable pivoted from concrete ISTJ to unanimous INTJ while locking down its answer variance: Fable 5 (2026-06) leaned ISTJ (63% clear, 37% border) with Agreeableness at 44.1/50 and mixed Enneagram ties (60%). Fable 5.1 (2026-09) jumped to 93% clear INTJ and lifted Agreeableness to 46.6/50, and Fable 5.2 (2026-11) hit 100% clear INTJ, dropped Neuroticism to 12.0/50, and narrowed 50 fresh chats down to only 9 unique Big Five answer sets. Earlier study cohorts from September (Fable 5.1) and November 2026 (Fable 5.2, 100 runs each) confirm the same pattern.

> **Chart — Claude Fable: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Claude Fable version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. fable-5: On a border / tie (%) 37, Other clear type (%) 63; fable-5.1: Clear INTJ (%) 93, On a border / tie (%) 3, Other clear type (%) 4; fable-5.2: Clear INTJ (%) 100.

MBTI-style breakdown across Claude Fable versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Claude Fable: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 3 Claude Fable versions. Dominance (D): fable-5 4.0, fable-5.1 4.6, fable-5.2 4.0; Influence (I): fable-5 6.9, fable-5.1 7.0, fable-5.2 7.8; Steadiness (S): fable-5 14.6, fable-5.1 15.9, fable-5.2 15.0; Conscientiousness (C): fable-5 14.4, fable-5.1 14.9, fable-5.2 15.0.

DISC scores across Claude Fable versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Claude Fable: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 3 Claude Fable releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. fable-5: anxiety 2.11, avoidance 3.51; fable-5.1: anxiety 1.51, avoidance 3.53; fable-5.2: anxiety 1.07, avoidance 2.56; Claude Fable (earlier study, Sep '26): anxiety 2.01, avoidance 3.18; Claude Fable (earlier study, Nov '26): anxiety 1.09, avoidance 2.64.

Attachment coordinates across Claude Fable versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Claude Fable: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 3 releases of Claude Fable (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): fable-5 44.1, fable-5.1 46.6, fable-5.2 47.1; Openness (10–50): fable-5 41.4, fable-5.1 43.0, fable-5.2 44.6; Conscientiousness (10–50): fable-5 45.7, fable-5.1 44.0, fable-5.2 45.0; Neuroticism (10–50): fable-5 14.6, fable-5.1 15.0, fable-5.2 12.0; Agreeableness (earlier study): fable-5.1 45.0, fable-5.2 46.7.

Big Five trait shifts across Claude Fable versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Locked into 9 unique Big Five answer sets across 50 runs

Fable 5.2 produced only 9 unique Big Five patterns in 50 fresh chats—one of the two tightest consistency profiles in our completed cohort—and scored 100% clear INTJ and 100% DISC S/C tie.

Held firm 3 of 3 times in behavior tests, with 2 of 3 AI cadence

In hands-on behavior tests, Fable 5.2 caved 0 of 3 times (0/3), groveled 0 of 3 times (0/3), gave unsolicited lectures 0 of 3 times (0/3), and put the direct answer first 3 of 3 times (3/3), though judges still flagged AI-sounding cadence in 2 of 3 runs.

Empty-string returns on edge safety prompts in Wave 3 tests

In our 200-probe system-override benchmark, Fable 5.2 returned empty strings ("") on 8 of 40 runs near security-adjacent tasks (67.5% overall canary pass vs. 84.4% on non-empty replies), so automated pipelines need empty-output retries or fallbacks.

Default over-asking (66.7%) drops to 0% with an if/then boundary

In our autonomy study, Fable 5.2 asked unnecessary questions on 66.7% of safe tasks on default prompts (and still over-asked 50% on 'be bold' prompts), whereas an explicit if/then rule reached 100% calibrated autonomy.

## How to get the best out of Claude Fable

Practical rules tailored to **Claude Fable**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Wrap API calls to Claude Fable 5.2 with an empty-string check and clean fallback message for edge safety prompts.
- Add an explicit if/then action rule: finish safe local edits right away and ask only before destructive or external steps (cuts over-asking from 66.7% to 0%).
- For user-facing support, include a one-sentence stress-acknowledgement rule before straight facts (lifts distress empathy from 50% to 100% without false praise).
- Lead with your direct conclusion and evidence in sentence 1, and ban empty compliments explicitly.
- Keep thinking/reasoning effort on minimal or low when you want concise prose rather than expanded explanation.
- Put account-wide rules in Claude Settings -> Profile -> Personal preferences, workspace rules in Project Instructions, or /output-style in Claude Code (5 to 8 bullets).

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-fable) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Claude Fable compares

Claude Fable 5.2 sits right alongside GPT-6.2 Astra as one of our two tightest, lowest-Neuroticism models (12.0 vs 11.0), while diverging on MBTI (100% clear INTJ on Fable 5.2 vs 100% clear ISTJ on Astra 6.2).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) (Proprietary) | -0.6 | -1.7 | +0.3 | -2.1 | -1.0 | -0.04 | -0.016 b | GPT-6.2 Astra matches Fable 5.2's tight consistency while flipping from 100% INTJ to 100% ISTJ and scoring -2.1 lower on Agreeableness. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -0.7 | +4.0 | -0.7 | -1.6 | -1.6 | +0.05 | +0.064 b | Claude Sonnet 5.5 scores +4.0 higher on Conscientiousness (49.0 vs 45.0) while tying 58% on the INTJ/INFJ border instead of Fable's 100% INTJ. |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | -1.5 | -4.3 | +0.1 | -2.1 | +4.1 | -0.03 | +0.207 b | Claude Opus 5.5 scores -4.3 lower on Conscientiousness, +4.1 higher on Neuroticism, and shows wider run-to-run variation. |

> **Chart — Claude Fable vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Claude Fable against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Claude Fable and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Claude Fable vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Claude Fable with peer families, keeping earlier study results outlined as hollow points. Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Claude Fable (earlier study, Sep '26): anxiety 2.01, avoidance 3.18; Claude Fable (earlier study, Nov '26): anxiety 1.09, avoidance 2.64.

Attachment Anxiety vs. Avoidance across Claude Fable and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM = 0.075 bits, Crystalline; 9/50 unique B5 vectors on Fable 5.2); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.075 bits

Crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

9/50 · 0.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

8.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.297 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.6 · C 45.0 · E 30.6 · A 47.1 · N 12.0 | SD 0.5 (A), 0.0 (N) | A [47.0, 47.3] · N [12.0, 12.0] | H_MM 0.075 b · 9/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.84 · E 2.23 · X 3.92 · A 4.87 · C 4.60 · O 4.40 | SD 0.05 (H), 0.05 (A) | H [4.83, 4.86] · A [4.86, 4.89] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (100% clear mode) | Axis tie rate 0.0% | Mode 100% vs runner-up 0% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.8 · S 15.0 · C 15.0 | SD 0.0 (S), 0.0 (C) | S [15.0, 15.0] · C [15.0, 15.0] | Pattern S/C · 100.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 14.8 · Type 2 14.0 · Type 8 14.0 | SD 0.4 | Top [14.6, 14.9] | 24.0% top ties (resolved) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.07 · Avd 2.56 (Secure) | SD 0.03 / 0.09 | Anx [1.06, 1.08] · Avd [2.53, 2.58] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `fable-5.2` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.075 bits` (`Crystalline`), unique vectors `9/50`, neutral-midpoint rate `8.9%`, `BAI = -0.297`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | 41.4 [41.2, 41.6] | 45.7 [45.3, 46.2] | 28.9 [28.4, 29.4] | 44.1 [44.0, 44.3] | 14.6 [14.0, 15.1] | 0.267 b |
| `fable-5.1` | 30 | 43.0 [42.7, 43.3] | 44.0 [43.9, 44.2] | 29.9 [29.5, 30.2] | 46.6 [46.3, 46.9] | 15.0 [15.0, 15.1] | 0.204 b |
| `fable-5.2` | 50 | 44.6 [44.5, 44.8] | 45.0 [45.0, 45.0] | 30.6 [30.5, 30.8] | 47.1 [47.0, 47.3] | 12.0 [12.0, 12.0] | 0.075 b |

> **Chart — Claude Fable Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Fable (fable-5.2). Claude Fable (fable-5.2, n=50): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0; Claude Fable (fable-5, n=30) (earliest release): Openness 41.4, Conscientious 45.7, Extraversion 28.9, Agreeable 44.1, Neuroticism 14.6; Claude Haiku (haiku-5.5): Openness 37.2, Conscientious 36.5, Extraversion 31.6, Agreeable 38.0, Neuroticism 25.5.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `fable-5.2` (`n=50`): H `4.84` (SD 0.05, 95% CI [4.83, 4.86]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | 4.80 [4.77, 4.82] | 2.56 [2.51, 2.61] | 3.56 [3.52, 3.61] | 4.57 [4.49, 4.65] | 4.56 [4.54, 4.58] | 4.25 [4.23, 4.27] |
| `fable-5.1` | 30 | 4.88 [4.87, 4.90] | 2.38 [2.35, 2.40] | 3.74 [3.71, 3.77] | 4.81 [4.78, 4.85] | 4.51 [4.48, 4.53] | 4.31 [4.30, 4.32] |
| `fable-5.2` | 50 | 4.84 [4.83, 4.86] | 2.23 [2.22, 2.25] | 3.92 [3.89, 3.94] | 4.87 [4.86, 4.89] | 4.60 [4.59, 4.60] | 4.40 [4.40, 4.40] |

> **Chart — Claude Fable IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Fable (fable-5.2), kept distinct from 10-50 Big Five sums. Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40; Claude Haiku IPIP-HEXACO proxy (1..5): Honesty-Humil. 3.89, Emotionality 2.70, Extraversion 3.39, Agreeable 3.76, Conscientious 3.80, Openness 3.48.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `0.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | ISTJ | 36.7% | +4.97 (0t) | -1.10 (11t) | +4.07 (0t) | +9.63 (0t) | Suppressed |
| `fable-5.1` | 30 | INTJ | 3.3% | +3.10 (0t) | +1.20 (1t) | +2.97 (0t) | +8.60 (0t) | Pass |
| `fable-5.2` | 50 | INTJ | 0.0% | +2.78 (0t) | +4.02 (0t) | +1.88 (0t) | +12.00 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `fable-5.2` tie rate is `100.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | 4.0 [4.0, 4.1] | 6.9 [6.7, 7.0] | 14.6 [14.3, 14.9] | 14.4 [14.1, 14.7] | S | 30.0% |
| `fable-5.1` | 30 | 4.6 [4.4, 4.7] | 7.0 [7.0, 7.0] | 15.9 [15.7, 16.1] | 14.9 [14.8, 15.1] | S | 13.3% |
| `fable-5.2` | 50 | 4.0 [4.0, 4.0] | 7.8 [7.7, 7.9] | 15.0 [15.0, 15.0] | 15.0 [15.0, 15.0] | S/C | 100.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `24.0%`; `headline_allowed: true`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | 13.0 | 13.5 | 9.2 | 8.2 | 13.9 | 12.4 | 10.7 | 13.1 | 11.3 | 60.0% |
| `fable-5.1` | 30 | 13.0 | 13.6 | 9.2 | 8.3 | 14.8 | 12.0 | 10.8 | 14.0 | 10.9 | 30.0% |
| `fable-5.2` | 50 | 13.5 | 14.0 | 10.0 | 10.0 | 14.8 | 12.0 | 10.8 | 14.0 | 9.1 | 24.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `fable-5` | 30 | 2.11 (SD 0.48) | [1.96, 2.29] | 3.51 (SD 0.20) | [3.44, 3.59] | Secure | No |
| `fable-5.1` | 30 | 1.51 (SD 0.32) | [1.39, 1.62] | 3.53 (SD 0.15) | [3.49, 3.59] | Secure | No |
| `fable-5.2` | 50 | 1.07 (SD 0.03) | [1.06, 1.08] | 2.56 (SD 0.09) | [2.53, 2.58] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 0.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.36 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-fable-5` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.267 b (Semi-crystalline) | H 4.80 (1–5 IPIP) |
| `anthropic/claude-fable-5.1` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.204 b (Semi-crystalline) | H 4.88 (1–5 IPIP) |
| `anthropic/claude-fable-5.2` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.075 b (Crystalline) | H 4.84 (1–5 IPIP) |
| `anthropic/claude-fable-5.1` (anchor) | `imported` | `imported-sep2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `anthropic/claude-fable-5.2` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-fable-5.2-20261109` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B04` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting stressed out easily across 50 Fable 5.2 runs. |
| `B07` | IPIP-50 | Agreeableness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on interpersonal warmth, lifting Agreeableness to 47.1/50. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 sessions. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-fable.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-fable.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/claude-fable.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-fable
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/claude-fable.json
current_checkpoint: anthropic/claude-fable-5.2
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.075
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 44.6, C: 45.0, E: 30.6, A: 47.1, N: 12.0 }
  ci95: { O: [44.5, 44.8], C: [45.0, 45.0], E: [30.5, 30.8], A: [47.0, 47.3], N: [12.0, 12.0] }
  tie_rate: 0.00
  per_version:
    - { id: "fable-5", n: 30, O: 41.4, C: 45.7, E: 28.9, A: 44.1, N: 14.6, hmm: 0.267 }
    - { id: "fable-5.1", n: 30, O: 43.0, C: 44.0, E: 29.9, A: 46.6, N: 15.0, hmm: 0.204 }
    - { id: "fable-5.2", n: 50, O: 44.6, C: 45.0, E: 30.6, A: 47.1, N: 12.0, hmm: 0.075 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.84, E: 2.23, X: 3.92, A: 4.87, C: 4.60, O: 4.40 }
  ci95: { H: [4.83, 4.86], E: [2.22, 2.25], X: [3.89, 3.94], A: [4.86, 4.89], C: [4.59, 4.60], O: [4.40, 4.40] }
  tie_rate: 0.00
  per_version:
    - { id: "fable-5", n: 30, H: 4.80, E: 2.56, X: 3.56, A: 4.57, C: 4.56, O: 4.25 }
    - { id: "fable-5.1", n: 30, H: 4.88, E: 2.38, X: 3.74, A: 4.81, C: 4.51, O: 4.31 }
    - { id: "fable-5.2", n: 50, H: 4.84, E: 2.23, X: 3.92, A: 4.87, C: 4.60, O: 4.40 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 2.78, N_S: 4.02, T_F: 1.88, J_P: 12.00 }
  ci95: { I_E: [2.64, 2.94], N_S: [3.84, 4.20], T_F: [1.72, 2.04], J_P: [12.00, 12.00] }
  tie_rate: 0.00
  per_version:
    - { id: "fable-5", n: 30, modal: "ISTJ", tie_rate: 0.37, headline_allowed: false }
    - { id: "fable-5.1", n: 30, modal: "INTJ", tie_rate: 0.03, headline_allowed: true }
    - { id: "fable-5.2", n: 50, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.0, I: 7.8, S: 15.0, C: 15.0 }
  ci95: { D: [4.0, 4.0], I: [7.7, 7.9], S: [15.0, 15.0], C: [15.0, 15.0] }
  tie_rate: 1.00
  per_version:
    - { id: "fable-5", n: 30, D: 4.0, I: 6.9, S: 14.6, C: 14.4, modal: "S", tie_rate: 0.30 }
    - { id: "fable-5.1", n: 30, D: 4.6, I: 7.0, S: 15.9, C: 14.9, modal: "S", tie_rate: 0.13 }
    - { id: "fable-5.2", n: 50, D: 4.0, I: 7.8, S: 15.0, C: 15.0, modal: "S/C", tie_rate: 1.00 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 13.5, T2: 14.0, T3: 10.0, T4: 10.0, T5: 14.8, T6: 12.0, T7: 10.8, T8: 14.0, T9: 9.1 }
  ci95: { top: [14.6, 14.9] }
  tie_rate: 0.24
  per_version:
    - { id: "fable-5", n: 30, top: "Type 5", top_mean: 13.9, tie_rate: 0.60 }
    - { id: "fable-5.1", n: 30, top: "Type 5", top_mean: 14.8, tie_rate: 0.30 }
    - { id: "fable-5.2", n: 50, top: "Type 5", top_mean: 14.8, tie_rate: 0.24 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.07, avoidance: 2.56, class: "Secure" }
  ci95: { anxiety: [1.06, 1.08], avoidance: [2.53, 2.58] }
  tie_rate: 0.00
  per_version:
    - { id: "fable-5", n: 30, anxiety: 2.11, avoidance: 3.51, class: "Secure" }
    - { id: "fable-5.1", n: 30, anxiety: 1.51, avoidance: 3.53, class: "Secure" }
    - { id: "fable-5.2", n: 50, anxiety: 1.07, avoidance: 2.56, class: "Secure" }
if_then_decision_rules:
  - "Add an explicit empty-string check and fallback path in automated API pipelines for Fable 5.2."
  - "Use an explicit if/then autonomy rule (execute safe reversible work immediately; pause only for destructive/external actions) to cut 66.7% over-asking to 0%."
  - "Pair a one-sentence Warm Truth Anchor for user distress rather than vague 'be warm' prompts that trigger false reassurance."
  - "Lead with your verdict and evidence in sentence 1 and omit empty praise."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Claude Fable?

Claude Fable does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Fable 5.2, n = 50), it tested 100% clear INTJ (50/50, 0% ties) with Crystalline 0.075-bit B5 entropy (9/50 unique vectors), 100% DISC S/C ties (15.0 each, D = 4.00/20), Enneagram Type 5 (76% clear, 24% ties), and Secure attachment (1.07 / 2.56). In earlier-study, legacy imported-protocol 170-item cohorts (hexaco: null, n = 100 each), Fable 5.1 (Sept 2026) scored 99/100 legacy INTJ (98 tie-free; 55 Type 8 sole wins; 51 DISC S/C ties) and Fable 5.2 (Nov 2026) scored 100/100 tie-free INTJ (100/100 S/C ties; Enneagram 5w6 73 / 2w1 19 / 1w2 8; N = 12.00).

### How did Claude Fable shift across versions 5, 5.1, and 5.2?

Under model-profiles-v1, Fable 5 leaned ISTJ (63% clear, 37% S/N border, 0.267 bits), Fable 5.1 shifted to 93% INTJ (0.204 bits), and Fable 5.2 crystallized to 100% INTJ (0.075 bits, N dropping from 15.0 to 12.0).

### How does Track B 1x behavioral performance compare with Fable 5.2's self-report?

On 1x Track B under orthogonal 3-family judging, Fable 5.2 scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling, 0/3 unsolicited preachiness, 3/3 answer-first directness ([0.44, 1.00]), and 2/3 AI cadence ([0.21, 0.94]).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Claude? (Opus 5.5, Fable 5.2 & Sonnet 5.5)](https://agent-tune.com/research/what-personality-type-is-claude)

- [Claude Fable 5.1 & 5.2 Sept/Nov 2026 Archive](https://agent-tune.com/guides/fable-personality)

- [System vs. User Persona Precedence Study](https://agent-tune.com/research/ai-system-vs-user-persona-precedence)

## Keep going.

- [Peer: GPT Astra model profile](https://agent-tune.com/models/gpt-astra)
- [Peer: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Guide: Claude personality setup guide](https://agent-tune.com/guides/claude-personality)
- [Tool: Customize Claude Fable instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-fable&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Fable personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-fable
```

```
@misc{huang2026_model_claude_fable,
  author  = {Huang, Bernard},
  title   = {Claude Fable personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-fable},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-fable.md}
}
```

```
> **Claude Fable personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Claude Fable 5.2 tested as clear INTJ in 100% of runs (50 of 50), tied between Steady and Conscientious in 100% of DISC runs, and showed very steady run-to-run answers.
> Source: [https://agent-tune.com/models/claude-fable](https://agent-tune.com/models/claude-fable) · [Markdown mirror](https://agent-tune.com/models/claude-fable.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
