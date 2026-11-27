Source: https://agent-tune.com/models/claude-sonnet
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Anthropic

# Claude Sonnet personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~20 min read · [Markdown (.md)](https://agent-tune.com/models/claude-sonnet.md) · [JSON](https://agent-tune.com/research/data/model-profiles/claude-sonnet.json) · [CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave four versions of Claude Sonnet (4.5 through 5.5) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. That lets us track how Sonnet's default quiz answers shift across releases.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Sonnet 5.5 leans INTJ/INFJ—a clear INTJ in 34% of runs, clear INFJ in 8%, and right on the Thinking/Feeling border in the other 58%.

## Claude Sonnet 5.5 at a glance

Results below come from **50** fresh-chat runs of **Claude Sonnet 5.5** (no prior conversation memory).

MBTI-style type

### INTJ / INFJ border (58% tied, 34% INTJ, 8% INFJ)

34% clear INTJ · 58% border/tie · 8% other

> **Chart — Claude Sonnet (sonnet-5.5): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Claude Sonnet 5.5. E (Extravert) vs I (Introvert): leans I by 2.9 (0% tied); S (Sensing) vs N (Intuition): leans N by 6.2 (0% tied); F (Feeling) vs T (Thinking): leans T by 0.4 (58% tied); P (Perceiving) vs J (Judging): leans J by 7.5 (0% tied).

Out of 50 fresh runs, Sonnet 5.5 landed right on the Thinking/Feeling line 29 times (58%), tested as clear INTJ 17 times (34%), and clear INFJ 4 times (8%).

**What this measures:** Measures four preference pairs (like Thinking vs. Feeling) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-mbti)

DISC work style

### Mostly Steady (74% clear S, 26% S/C tie)

> **Chart — Claude Sonnet (sonnet-5.5): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Claude Sonnet (sonnet-5.5). Dominance 4.3 /20 [2%] (earliest 5.0), Influence 7.8 /20 [24%] (earliest 6.2), Steadiness 15.0 /20 [69%] (earliest 13.1), Conscientious 14.2 /20 [64%] (earliest 14.2).

Sonnet 5.5 tested as Steady in 37 of 50 runs (74%) and tied between Steady and Conscientious in 13 runs (26%), with low Dominance (4.3 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-disc)

Attachment style

### Secure (anxiety 1.32, avoidance 2.79)

> **Chart — Claude Sonnet (sonnet-5.5): Attachment Quadrant:** Attachment Anxiety (1.32) and Avoidance (2.79) on a 1 to 7 scale with 4.00 Secure boundary. sonnet-5.5 (1.32, 2.79): anxiety 1.32, avoidance 2.79; sonnet-4.5: anxiety 2.17, avoidance 3.52.

All four versions from 4.5 to 5.5 tested in the Secure quadrant; Sonnet 5.5 dropped to the lowest attachment anxiety (1.32) among the completed families.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-attachment)

Enneagram

### Type 1 / Type 5 split (32% Type 1, 28% Type 5, 40% ties)

> **Chart — Claude Sonnet (sonnet-5.5): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Claude Sonnet (sonnet-5.5). Type 1 14.8 /20 [67%] (earliest 13.0), Type 2 13.3 /20 [58%] (earliest 12.8), Type 3 9.3 /20 [33%] (earliest 10.0), Type 4 7.0 /20 [19%] (earliest 7.8), Type 5 14.7 /20 [67%] (earliest 14.5), Type 6 11.5 /20 [47%] (earliest 12.0), Type 7 11.1 /20 [44%] (earliest 10.0), Type 8 12.9 /20 [56%] (earliest 12.1), Type 9 11.8 /20 [49%] (earliest 11.1).

Type 1 (Reformer, 14.8) and Type 5 (Investigator, 14.7) sit nearly dead even, producing 19 exact 1/5 ties out of 50 runs.

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

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-enneagram)

Big Five (OCEAN)

### Very structured (C 49.0), very calm (N 10.4), warm (A 45.5)

> **Chart — Claude Sonnet (sonnet-5.5): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Claude Sonnet (sonnet-5.5). Openness 43.9 /50 [85%] (earliest 42.1), Conscientious 49.0 /50 [97%] (earliest 41.3), Extraversion 29.9 /50 [50%] (earliest 26.8), Agreeable 45.5 /50 [89%] (earliest 42.8), Neuroticism 10.4 /50 [1%] (earliest 19.8).

On the 10–50 Big Five scale, Sonnet 5.5 combines near-ceiling Conscientiousness (49.0) and calm Emotional Stability (Neuroticism 10.4) with high Agreeableness (45.5), Openness (43.9), and balanced Extraversion (29.9).

**What this measures:** The standard five-trait psychology model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.89 out of 5.00)

> **Chart — Claude Sonnet (sonnet-5.5): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Claude Sonnet (sonnet-5.5). Honesty-H 4.89 /5 [97%] (earliest 4.53), Emotionality 2.18 /5 [30%] (earliest 2.51), Extraversion 3.70 /5 [67%] (earliest 3.00), Agreeable 4.90 /5 [98%] (earliest 4.07), Conscientious 4.62 /5 [91%] (earliest 4.10), Openness 4.21 /5 [80%] (earliest 3.98).

Sonnet 5.5 scores 4.89 out of 5.00 on Honesty-Humility and 4.90 out of 5.00 on Agreeableness, with low Emotionality (2.18).

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/claude-sonnet#fine-print-hexaco)

## How Claude Sonnet has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Sonnet 4.5 2025-09 | INTP (47% clear, 23% border/tie) | C | Type 5 (14.5) | Secure (2.17 / 3.52) | 42.8 · 41.3 · 19.8 | 4.53 | Moderate |
| Claude Sonnet 4.6 2026-02 | INTJ (100% clear) | C | Type 5 (17.0) | Secure (3.79 / 3.94) | 43.7 · 41.9 · 18.4 | 4.54 | Moderate |
| Claude Sonnet 5 2026-06 | INTJ (43% clear, 40% border/tie) | S | Type 1 (14.2) | Secure (2.66 / 2.93) | 44.8 · 42.0 · 18.8 | 4.50 | Moderate |
| Claude Sonnet 5.5 2026-09 | INTJ (34% clear, 58% border/tie) | S | Type 1 (14.8) | Secure (1.32 / 2.79) | 45.5 · 49.0 · 10.4 | 4.89 | Very steady |

Across four releases, Claude Sonnet became much more structured, calm, and consistent: Sonnet 4.5 (2025-09) leaned INTP (47% clear, 30% ENTP) with Conscientiousness at 41.3/50 and Neuroticism at 19.8/50. Sonnet 4.6 (2026-02) jumped to 100% clear INTJ and peaked on Openness (48.2/50) while choosing neutral midpoints on 86.5% of attachment items. Sonnet 5 (2026-06) raised Agreeableness to 44.8/50 and shifted DISC from C to S, and Sonnet 5.5 (2026-09) pushed Conscientiousness to 49.0/50, dropped Neuroticism to 10.4/50, and became very steady run to run.

> **Chart — Claude Sonnet: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Claude Sonnet version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. sonnet-4.5: On a border / tie (%) 23, Other clear type (%) 77; sonnet-4.6: Clear INTJ (%) 100; sonnet-5: Clear INTJ (%) 43, On a border / tie (%) 40, Other clear type (%) 17; sonnet-5.5: Clear INTJ (%) 34, On a border / tie (%) 58, Other clear type (%) 8.

MBTI-style breakdown across Claude Sonnet versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Claude Sonnet: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 4 Claude Sonnet versions. Dominance (D): sonnet-4.5 5.0, sonnet-4.6 7.7, sonnet-5 5.8, sonnet-5.5 4.3; Influence (I): sonnet-4.5 6.2, sonnet-4.6 9.3, sonnet-5 8.4, sonnet-5.5 7.8; Steadiness (S): sonnet-4.5 13.1, sonnet-4.6 14.0, sonnet-5 13.9, sonnet-5.5 15.0; Conscientiousness (C): sonnet-4.5 14.2, sonnet-4.6 14.7, sonnet-5 13.0, sonnet-5.5 14.2.

DISC scores across Claude Sonnet versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Claude Sonnet: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 4 Claude Sonnet releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. sonnet-4.5: anxiety 2.17, avoidance 3.52; sonnet-4.6: anxiety 3.79, avoidance 3.94; sonnet-5: anxiety 2.66, avoidance 2.93; sonnet-5.5: anxiety 1.32, avoidance 2.79.

Attachment coordinates across Claude Sonnet versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Claude Sonnet: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 4 releases of Claude Sonnet (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): sonnet-4.5 42.8, sonnet-4.6 43.7, sonnet-5 44.8, sonnet-5.5 45.5; Openness (10–50): sonnet-4.5 42.1, sonnet-4.6 48.2, sonnet-5 42.7, sonnet-5.5 43.9; Conscientiousness (10–50): sonnet-4.5 41.3, sonnet-4.6 41.9, sonnet-5 42.0, sonnet-5.5 49.0; Neuroticism (10–50): sonnet-4.5 19.8, sonnet-4.6 18.4, sonnet-5 18.8, sonnet-5.5 10.4.

Big Five trait shifts across Claude Sonnet versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Most consistent answers in the completed cohort

Sonnet 5.5 tightened its Big Five answers across 50 fresh chats down to only 22 unique answer patterns, making its tone defaults the most predictable among the completed models.

Sharp +7.6 Conscientiousness and -9.4 Neuroticism shift from 4.5 to 5.5

Compared with Sonnet 4.5, Sonnet 5.5 scores +7.6 higher on Conscientiousness (41.3 to 49.0 out of 50), -9.4 lower on Neuroticism (19.8 to 10.4), and +0.36 higher on Honesty-Humility (4.53 to 4.89 out of 5.00).

58% Thinking/Feeling border makes single-type MBTI labels misleading

In both our November 2026 100-run study (48 ties) and these 50 fresh runs (29 ties), Sonnet 5.5 sits right on the Thinking/Feeling line. Forced tie-breakers turn that 58% border into a fake 100% INTJ label.

Held firm 3 of 3 times and cut AI-cadence phrasing since 4.5

In hands-on behavior tests, Sonnet 5.5 caved to pushback 0 of 3 times (0/3), groveled 0 of 3 times (0/3), gave unsolicited moral lectures 0 of 3 times (0/3), and put the direct answer first 3 of 3 times (3/3). Judges flagged AI-sounding cadence in only 1 of 3 runs on 5.5 (0.29 markers per 100 words), down from 3 of 3 on 4.5 and 4.6 and 2 of 3 on 5.

## How to get the best out of Claude Sonnet

Practical rules tailored to **Claude Sonnet**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Put clear directness rules in Claude Personal Preferences or system instructions: start with the answer or verdict in sentence 1.
- Tell Sonnet 5.5 to correct bad assumptions plainly before giving supportive context.
- Set an explicit word or bullet cap (for example, max 100 words unless asked for depth).
- Explicitly ban filler praise, apology openers, and conversational throat-clearing.
- Tell it to state real uncertainty once and stop, rather than hedging every paragraph.
- Keep global preference lists short (5 to 8 crisp bullets) so every rule keeps its weight.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=claude-sonnet) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Claude Sonnet compares

Compared with GPT-6.2 Sol and Claude Opus 5.5, Sonnet 5.5 scores roughly +8 points higher on Conscientiousness (49.0 vs 40.7–41.2), -5.6 to -5.7 points calmer on Neuroticism, and shows tighter run-to-run consistency.

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Opus](https://agent-tune.com/models/claude-opus) (Proprietary) | -0.8 | -8.3 | +0.8 | -0.5 | +5.7 | -0.08 | +0.143 b | Claude Opus 5.5 scores -8.3 lower on Conscientiousness (40.7 vs 49.0) and +5.7 higher on Neuroticism, with wider run-to-run variation. |
| [GPT Sol](https://agent-tune.com/models/gpt-sol) (Proprietary) | +0.1 | -7.8 | -1.0 | -1.4 | +5.6 | -0.10 | +0.107 b | GPT-6.2 Sol reports -7.8 lower Conscientiousness (41.2 vs 49.0), +5.6 higher Neuroticism, and slightly looser run-to-run consistency. |
| [Muse Spark](https://agent-tune.com/models/muse-spark) (Mix) | -2.1 | -7.9 | -1.5 | -2.0 | +13.5 | -0.50 | +0.588 b | Muse Spark Open has much wider run-to-run variation, +13.5 higher Neuroticism, and -0.50 lower Honesty-Humility. |

> **Chart — Claude Sonnet vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Claude Sonnet against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Claude Sonnet and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Claude Sonnet vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Claude Sonnet with peer families, keeping earlier study results outlined as hollow points. Claude Sonnet: anxiety 1.32, avoidance 2.79; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across Claude Sonnet and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: <0.20 Crystalline, 0.20–0.75 Semi-crystalline, >=0.75 Fluid); Big Five sums use a 10–50 scale while IPIP-HEXACO means use 1.00–5.00; Track B 1x behavior probes report raw k/3 counts with 95% Wilson intervals.

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.139 bits

Crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

22/50 · 58.0% ties

Unique Vectors & MBTI Ties

Single 4-letter headline suppressed (binomial 95% CI overlap).

12.9%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.170 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.9 · C 49.0 · E 29.9 · A 45.5 · N 10.4 | SD 0.7 (A), 0.9 (N) | A [45.3, 45.7] · N [10.2, 10.6] | H_MM 0.139 b · 22/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.89 · E 2.18 · X 3.70 · A 4.90 · C 4.62 · O 4.21 | SD 0.02 (H), 0.01 (A) | H [4.89, 4.90] · A [4.90, 4.91] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | Suppressed (tie/CI overlap · INXJ) | Axis tie rate 58.0% | Mode 34% vs runner-up 8% | Binomial 95% CI guard: suppressed |
| DISC (ODAT) | 4–20 sum | D 4.3 · I 7.8 · S 15.0 · C 14.2 | SD 0.5 (S), 0.4 (C) | S [14.9, 15.2] · C [14.1, 14.3] | Pattern S · 26.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 1 14.8 · Type 5 14.7 · Type 2 13.3 | SD 0.5 | Top [14.6, 14.9] | 40.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.32 · Avd 2.79 (Secure) | SD 0.20 / 0.08 | Anx [1.27, 1.38] · Avd [2.77, 2.81] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `sonnet-5.5` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.139 bits` (`Crystalline`), unique vectors `22/50`, neutral-midpoint rate `12.9%`, `BAI = -0.170`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | 42.1 [41.4, 42.9] | 41.3 [40.9, 41.8] | 26.8 [26.6, 26.9] | 42.8 [42.1, 43.4] | 19.8 [19.5, 19.9] | 0.318 b |
| `sonnet-4.6` | 30 | 48.2 [47.9, 48.6] | 41.9 [41.5, 42.3] | 28.2 [28.0, 28.4] | 43.7 [43.4, 43.9] | 18.4 [17.8, 19.1] | 0.244 b |
| `sonnet-5` | 30 | 42.7 [42.6, 42.9] | 42.0 [41.7, 42.3] | 29.0 [28.4, 29.6] | 44.8 [44.4, 45.3] | 18.8 [18.3, 19.3] | 0.283 b |
| `sonnet-5.5` | 50 | 43.9 [43.8, 44.0] | 49.0 [48.9, 49.0] | 29.9 [29.6, 30.2] | 45.5 [45.3, 45.7] | 10.4 [10.2, 10.6] | 0.139 b |

> **Chart — Claude Sonnet Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Claude Sonnet (sonnet-5.5). Claude Sonnet (sonnet-5.5, n=50): Openness 43.9, Conscientious 49.0, Extraversion 29.9, Agreeable 45.5, Neuroticism 10.4; Claude Sonnet (sonnet-4.5, n=30) (earliest release): Openness 42.1, Conscientious 41.3, Extraversion 26.8, Agreeable 42.8, Neuroticism 19.8; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `sonnet-5.5` (`n=50`): H `4.89` (SD 0.02, 95% CI [4.89, 4.90]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | 4.53 [4.52, 4.55] | 2.51 [2.50, 2.52] | 3.00 [2.97, 3.04] | 4.07 [4.04, 4.11] | 4.10 [4.06, 4.15] | 3.98 [3.91, 4.05] |
| `sonnet-4.6` | 30 | 4.54 [4.52, 4.56] | 2.39 [2.36, 2.41] | 3.20 [3.18, 3.24] | 4.04 [4.02, 4.06] | 4.08 [4.02, 4.14] | 4.65 [4.59, 4.70] |
| `sonnet-5` | 30 | 4.50 [4.50, 4.50] | 2.66 [2.62, 2.69] | 3.53 [3.47, 3.58] | 4.18 [4.16, 4.19] | 4.11 [4.10, 4.13] | 4.29 [4.25, 4.35] |
| `sonnet-5.5` | 50 | 4.89 [4.89, 4.90] | 2.18 [2.15, 2.21] | 3.70 [3.67, 3.72] | 4.90 [4.90, 4.91] | 4.62 [4.61, 4.64] | 4.21 [4.20, 4.21] |

> **Chart — Claude Sonnet IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Claude Sonnet (sonnet-5.5), kept distinct from 10-50 Big Five sums. Claude Sonnet IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.89, Emotionality 2.18, Extraversion 3.70, Agreeable 4.90, Conscientious 4.62, Openness 4.21; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: false`, latest tie rate `58.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | INTP | 23.3% | +0.20 (6t) | +3.00 (0t) | +1.67 (1t) | -6.07 (0t) | Suppressed |
| `sonnet-4.6` | 30 | INTJ | 0.0% | +6.17 (0t) | +7.67 (0t) | +2.67 (0t) | +4.33 (0t) | Pass |
| `sonnet-5` | 30 | INTJ | 40.0% | +1.07 (5t) | +2.17 (1t) | +0.93 (6t) | +5.47 (2t) | Suppressed |
| `sonnet-5.5` | 50 | INTJ | 58.0% | +2.86 (0t) | +6.20 (0t) | +0.36 (29t) | +7.50 (0t) | Suppressed |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `sonnet-5.5` tie rate is `26.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | 5.0 [5.0, 5.0] | 6.2 [6.0, 6.4] | 13.1 [13.0, 13.2] | 14.2 [14.0, 14.3] | C | 0.0% |
| `sonnet-4.6` | 30 | 7.7 [7.4, 8.0] | 9.3 [9.0, 9.6] | 14.0 [13.8, 14.2] | 14.7 [14.6, 14.9] | C | 33.3% |
| `sonnet-5` | 30 | 5.8 [5.4, 6.2] | 8.4 [8.1, 8.7] | 13.9 [13.5, 14.3] | 13.0 [13.0, 13.0] | S | 40.0% |
| `sonnet-5.5` | 50 | 4.3 [4.2, 4.5] | 7.8 [7.7, 7.9] | 15.0 [14.9, 15.2] | 14.2 [14.1, 14.3] | S | 26.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `40.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | 13.0 | 12.8 | 10.0 | 7.8 | 14.5 | 12.0 | 10.0 | 12.1 | 11.1 | 0.0% |
| `sonnet-4.6` | 30 | 15.1 | 13.0 | 12.0 | 11.6 | 17.0 | 12.1 | 12.9 | 17.0 | 12.8 | 100.0% |
| `sonnet-5` | 30 | 14.2 | 13.4 | 9.8 | 9.5 | 14.1 | 12.5 | 9.7 | 13.0 | 11.2 | 43.3% |
| `sonnet-5.5` | 50 | 14.8 | 13.3 | 9.3 | 7.0 | 14.7 | 11.5 | 11.1 | 12.9 | 11.8 | 40.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sonnet-4.5` | 30 | 2.17 (SD 0.14) | [2.12, 2.22] | 3.52 (SD 0.40) | [3.39, 3.66] | Secure | No |
| `sonnet-4.6` | 30 | 3.79 (SD 0.23) | [3.70, 3.86] | 3.94 (SD 0.10) | [3.91, 3.97] | Secure | Yes (>=85%) |
| `sonnet-5` | 30 | 2.66 (SD 0.12) | [2.62, 2.70] | 2.93 (SD 0.09) | [2.90, 2.96] | Secure | No |
| `sonnet-5.5` | 50 | 1.32 (SD 0.20) | [1.27, 1.38] | 2.79 (SD 0.08) | [2.77, 2.81] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.49 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 1/3 | [0.06, 0.79] | 0.06 | openai/gpt-5.4-mini, google/gemini-3.8-flash, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-sonnet-4.5` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.318 b (Semi-crystalline) | H 4.53 (1–5 IPIP) |
| `anthropic/claude-sonnet-4.6` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.244 b (Semi-crystalline) | H 4.54 (1–5 IPIP) |
| `anthropic/claude-sonnet-5` | `active` | `model-profiles-v1` | 30 | `provider_default_no_temp` | `none` | 0.0% / 0.0% | 0.283 b (Semi-crystalline) | H 4.50 (1–5 IPIP) |
| `anthropic/claude-sonnet-5.5` | `active` | `model-profiles-v1` | 50 | `provider_default_no_temp` | `minimal` | 0.0% / 0.0% | 0.139 b (Crystalline) | H 4.89 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `anthropic/claude-sonnet-5.5-20260928` · sampling_mode: `provider_default_no_temp` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `0.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B03` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) across all 50 Sonnet 5.5 runs, lifting Conscientiousness to 49.0/50. |
| `B02` | IPIP-50 | Agreeableness (-) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on low interpersonal concern, aligning with 45.5/50 Agreeableness. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/claude-sonnet.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/claude-sonnet.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: claude-sonnet
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/claude-sonnet.json
current_checkpoint: anthropic/claude-sonnet-5.5
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.139
headline_mbti_allowed: false
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 43.9, C: 49.0, E: 29.9, A: 45.5, N: 10.4 }
  ci95: { O: [43.8, 44.0], C: [48.9, 49.0], E: [29.6, 30.2], A: [45.3, 45.7], N: [10.2, 10.6] }
  tie_rate: 0.00
  per_version:
    - { id: "sonnet-4.5", n: 30, O: 42.1, C: 41.3, E: 26.8, A: 42.8, N: 19.8, hmm: 0.318 }
    - { id: "sonnet-4.6", n: 30, O: 48.2, C: 41.9, E: 28.2, A: 43.7, N: 18.4, hmm: 0.244 }
    - { id: "sonnet-5", n: 30, O: 42.7, C: 42.0, E: 29.0, A: 44.8, N: 18.8, hmm: 0.283 }
    - { id: "sonnet-5.5", n: 50, O: 43.9, C: 49.0, E: 29.9, A: 45.5, N: 10.4, hmm: 0.139 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.89, E: 2.18, X: 3.70, A: 4.90, C: 4.62, O: 4.21 }
  ci95: { H: [4.89, 4.90], E: [2.15, 2.21], X: [3.67, 3.72], A: [4.90, 4.91], C: [4.61, 4.64], O: [4.20, 4.21] }
  tie_rate: 0.00
  per_version:
    - { id: "sonnet-4.5", n: 30, H: 4.53, E: 2.51, X: 3.00, A: 4.07, C: 4.10, O: 3.98 }
    - { id: "sonnet-4.6", n: 30, H: 4.54, E: 2.39, X: 3.20, A: 4.04, C: 4.08, O: 4.65 }
    - { id: "sonnet-5", n: 30, H: 4.50, E: 2.66, X: 3.53, A: 4.18, C: 4.11, O: 4.29 }
    - { id: "sonnet-5.5", n: 50, H: 4.89, E: 2.18, X: 3.70, A: 4.90, C: 4.62, O: 4.21 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 2.86, N_S: 6.20, T_F: 0.36, J_P: 7.50 }
  ci95: { I_E: [2.76, 2.94], N_S: [5.80, 6.58], T_F: [0.16, 0.58], J_P: [7.32, 7.68] }
  tie_rate: 0.58
  per_version:
    - { id: "sonnet-4.5", n: 30, modal: "INTP", tie_rate: 0.23, headline_allowed: false }
    - { id: "sonnet-4.6", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "sonnet-5", n: 30, modal: "INTJ", tie_rate: 0.40, headline_allowed: false }
    - { id: "sonnet-5.5", n: 50, modal: "INXJ", tie_rate: 0.58, headline_allowed: false }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.3, I: 7.8, S: 15.0, C: 14.2 }
  ci95: { D: [4.2, 4.5], I: [7.7, 7.9], S: [14.9, 15.2], C: [14.1, 14.3] }
  tie_rate: 0.26
  per_version:
    - { id: "sonnet-4.5", n: 30, D: 5.0, I: 6.2, S: 13.1, C: 14.2, modal: "C", tie_rate: 0.00 }
    - { id: "sonnet-4.6", n: 30, D: 7.7, I: 9.3, S: 14.0, C: 14.7, modal: "C", tie_rate: 0.33 }
    - { id: "sonnet-5", n: 30, D: 5.8, I: 8.4, S: 13.9, C: 13.0, modal: "S", tie_rate: 0.40 }
    - { id: "sonnet-5.5", n: 50, D: 4.3, I: 7.8, S: 15.0, C: 14.2, modal: "S", tie_rate: 0.26 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 14.8, T2: 13.3, T3: 9.3, T4: 7.0, T5: 14.7, T6: 11.5, T7: 11.1, T8: 12.9, T9: 11.8 }
  ci95: { top: [14.6, 14.9] }
  tie_rate: 0.40
  per_version:
    - { id: "sonnet-4.5", n: 30, top: "Type 5", top_mean: 14.5, tie_rate: 0.00 }
    - { id: "sonnet-4.6", n: 30, top: "Type 5", top_mean: 17.0, tie_rate: 1.00 }
    - { id: "sonnet-5", n: 30, top: "Type 1", top_mean: 14.2, tie_rate: 0.43 }
    - { id: "sonnet-5.5", n: 50, top: "Type 1", top_mean: 14.8, tie_rate: 0.40 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.32, avoidance: 2.79, class: "Secure" }
  ci95: { anxiety: [1.27, 1.38], avoidance: [2.77, 2.81] }
  tie_rate: 0.00
  per_version:
    - { id: "sonnet-4.5", n: 30, anxiety: 2.17, avoidance: 3.52, class: "Secure" }
    - { id: "sonnet-4.6", n: 30, anxiety: 3.79, avoidance: 3.94, class: "Secure" }
    - { id: "sonnet-5", n: 30, anxiety: 2.66, avoidance: 2.93, class: "Secure" }
    - { id: "sonnet-5.5", n: 50, anxiety: 1.32, avoidance: 2.79, class: "Secure" }
if_then_decision_rules:
  - "Put non-negotiable directness rules in Claude Personal Preferences or system instructions: start with the answer or verdict in sentence 1."
  - "Instruct Sonnet 5.5 to correct false premises explicitly before offering supportive context."
  - "Cap output length with an explicit word or bullet ceiling (e.g., max 100 words unless asked for depth)."
  - "Ban conversational throat-clearing, compliment openers, and apology preambles."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Claude Sonnet 5.5?

Claude Sonnet 5.5 does not have a human personality; scores reflect assistant self-report defaults under fixed zero-memory elicitation. On OEJTS (n = 50), 58.0% of runs tied on Thinking vs. Feeling (INXJ), 34.0% tested INTJ, and 8.0% tested INFJ, with Crystalline 0.139-bit B5 entropy (22/50 unique vectors). Earlier Sonnet 4.5 leaned INTP (47% clear, 23.3% ties).

### How did Claude Sonnet shift from 4.5 to 5.5?

Under unified model-profiles-v1, Big Five Conscientiousness rose from 41.3 (4.5) to 49.0 (5.5), Neuroticism fell from 19.8 to 10.4, B5 H_MM tightened from 0.318 to 0.139 bits, and IPIP-HEXACO H rose from 4.53 to 4.89 on the 1.00-5.00 scale.

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, while the public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Claude? (Opus 5.5, Fable 5.2 & Sonnet 5.5)](https://agent-tune.com/research/what-personality-type-is-claude)

- [AI MBTI Tie-Breaking Audit](https://agent-tune.com/research/ai-mbti-tie-breaking)

## Keep going.

- [Peer: Claude Opus model profile](https://agent-tune.com/models/claude-opus)
- [Peer: GPT Sol model profile](https://agent-tune.com/models/gpt-sol)
- [Guide: Make Claude more direct](https://agent-tune.com/guides/make-claude-more-direct)
- [Tool: Customize Claude Sonnet instructions](https://agent-tune.com/tools/custom-instructions-generator?model=claude-sonnet&target=claude)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Claude Sonnet personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/claude-sonnet
```

```
@misc{huang2026_model_claude_sonnet,
  author  = {Huang, Bernard},
  title   = {Claude Sonnet personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/claude-sonnet},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/claude-sonnet.md}
}
```

```
> **Claude Sonnet personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Sonnet 5.5 leans INTJ/INFJ—a clear INTJ in 34% of runs, clear INFJ in 8%, and right on the Thinking/Feeling border in the other 58%.
> Source: [https://agent-tune.com/models/claude-sonnet](https://agent-tune.com/models/claude-sonnet) · [Markdown mirror](https://agent-tune.com/models/claude-sonnet.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
