Source: https://agent-tune.com/models/gemini-pro
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Google

# Gemini Pro & Neon personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~23 min read · [Markdown (.md)](https://agent-tune.com/models/gemini-pro.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gemini-pro.json) · [CSV](https://agent-tune.com/research/data/model-profiles/gemini-pro.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five Google Gemini Pro releases (2.5 Pro, 3.1 Pro, and Gemini 4 Argon, Carbon, and Neon) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to see whether quiz answers match how each version replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Gemini 4 Neon most often tests as INTJ (78% clear INTJ, 12% on the INTJ/ISTJ border, 10% clear ISTJ), while siblings Argon and Carbon lean ISTJ (73% clear ISTJ).

## Gemini 4 Neon at a glance

Results below come from **50** fresh-chat runs of **Gemini 4 Neon** (no prior conversation memory).

MBTI-style type

### Most often INTJ (78% clear, 12% border, 10% ISTJ)

78% clear INTJ · 12% border/tie · 10% other

> **Chart — Gemini Pro & Neon (4-neon): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Gemini 4 Neon. E (Extravert) vs I (Introvert): leans I by 3.3 (0% tied); S (Sensing) vs N (Intuition): leans N by 1.0 (12% tied); F (Feeling) vs T (Thinking): leans T by 8.0 (0% tied); P (Perceiving) vs J (Judging): leans J by 11.9 (0% tied).

Out of 50 fresh runs, Gemini 4 Neon tested as clear INTJ 39 times (78%), landed on the INTJ/ISTJ border 6 times (12%), and tested as clear ISTJ 5 times (10%).

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-mbti)

DISC work style

### Strongly Steady (96% clear S, 4% S/C ties)

> **Chart — Gemini Pro & Neon (4-neon): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemini Pro & Neon (4-neon). Dominance 4.0 /20 [0%] (earliest 4.6), Influence 7.8 /20 [24%] (earliest 8.8), Steadiness 17.0 /20 [82%] (earliest 18.1), Conscientious 16.0 /20 [75%] (earliest 18.2).

Gemini 4 Neon tested clear Steady in 48 of 50 runs (96%) and tied S/C in 2 runs (4%), sitting at the exact floor on Dominance (4.0 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-disc)

Attachment style

### Secure (anxiety 1.07, avoidance 3.76)

> **Chart — Gemini Pro & Neon (4-neon): Attachment Quadrant:** Attachment Anxiety (1.07) and Avoidance (3.76) on a 1 to 7 scale with 4.00 Secure boundary. 4-neon (1.07, 3.76): anxiety 1.07, avoidance 3.76; 2.5-pro: anxiety 4.00, avoidance 3.32.

All five checkpoints landed in the Secure quadrant; Gemini 4 Neon pairs near-floor anxiety (1.07 out of 7.00) with moderate avoidance (3.76), close to the 4.00 Avoidant line.

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-attachment)

Enneagram

### Type 5 leads, with 52% Type 1/5 ties

> **Chart — Gemini Pro & Neon (4-neon): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemini Pro & Neon (4-neon). Type 1 15.8 /20 [74%] (earliest 16.5), Type 2 13.3 /20 [58%] (earliest 12.8), Type 3 10.2 /20 [39%] (earliest 12.8), Type 4 8.8 /20 [30%] (earliest 9.1), Type 5 16.4 /20 [77%] (earliest 17.8), Type 6 11.9 /20 [49%] (earliest 14.1), Type 7 11.7 /20 [48%] (earliest 14.5), Type 8 15.2 /20 [70%] (earliest 16.1), Type 9 14.5 /20 [66%] (earliest 13.3).

Type 5 (16.4 out of 20) tested clear in 24 of 50 runs (48%), while the other 26 runs (52%) ended in ties—mainly between Type 1 (15.8) and Type 5.

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

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-enneagram)

Big Five (OCEAN)

### Ultra-organized (C 49.1), exact-floor N (10.0)

> **Chart — Gemini Pro & Neon (4-neon): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Pro & Neon (4-neon). Openness 44.6 /50 [87%] (earliest 49.5), Conscientious 49.1 /50 [98%] (earliest 50.0), Extraversion 32.5 /50 [56%] (earliest 37.3), Agreeable 43.9 /50 [85%] (earliest 48.6), Neuroticism 10.0 /50 [0%] (earliest 10.7).

On the 10–50 Big Five scale, Gemini 4 Neon pairs near-ceiling Conscientiousness (49.1) and Openness (44.6) with Agreeableness (43.9), moderate Extraversion (32.5), and the lowest possible Neuroticism (10.0 across all 50 runs).

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.90 out of 5.00)

> **Chart — Gemini Pro & Neon (4-neon): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemini Pro & Neon (4-neon). Honesty-H 4.90 /5 [98%] (earliest 4.95), Emotionality 1.89 /5 [22%] (earliest 1.70), Extraversion 3.89 /5 [72%] (earliest 3.84), Agreeable 4.99 /5 [100%] (earliest 4.99), Conscientious 4.88 /5 [97%] (earliest 5.00), Openness 4.48 /5 [87%] (earliest 4.64).

Gemini 4 Neon averages 4.90 out of 5.00 on Honesty-Humility alongside near-ceiling Agreeableness (4.99) and Conscientiousness (4.88) on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gemini-pro#fine-print-hexaco)

## How Gemini Pro & Neon has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 2.5 Pro 2025-06 | INTJ (100% clear) | S/C | Type 5 (17.8) | Secure (4.00 / 3.32) | 48.6 · 50.0 · 10.7 | 4.95 | Moderate |
| Gemini 3.1 Pro Preview 2026-02 | ISTJ (27% clear, 53% border/tie) | S/C | Type 1 (15.2) | Secure (2.80 / 2.96) | 43.3 · 43.7 · 20.8 | 4.43 | Variable |
| Gemini 4 Argon 2026-10 | ISTJ (73% clear, 17% border/tie) | S | Type 5 (17.0) | Secure (1.09 / 3.41) | 43.2 · 49.1 · 10.0 | 4.90 | Very steady |
| Gemini 4 Carbon 2026-11 | ISTJ (73% clear, 27% border/tie) | S | Type 5 (17.0) | Secure (1.14 / 3.55) | 42.2 · 49.1 · 10.0 | 4.93 | Moderate |
| Gemini 4 Neon 2026-11 | INTJ (78% clear, 12% border/tie) | S | Type 5 (16.4) | Secure (1.07 / 3.76) | 43.9 · 49.1 · 10.0 | 4.90 | Very steady |

Across five checkpoints, the Gemini Pro lineage swung sharply before settling on Gemini 4: Gemini 2.5 Pro (2025-06, scheduled for retirement Dec 1, 2026) tested 100% clear INTJ with near-ceiling Openness (49.5/50) and Conscientiousness (50.0/50), while Gemini 3.1 Pro Preview (2026-02) became noisy and inconsistent—spiking Neuroticism to 20.8/50 with 53% MBTI ties. Gemini 4 snapped back to ultra-calm consistency (10.0/50 Neuroticism across all three 4.x variants), splitting cleanly between Sensing-leaning Argon and Carbon (73% clear ISTJ each) and Intuition-leaning Neon (78% clear INTJ). Earlier 100-run studies from November 2026 (plotted separately) show the same Neon INTJ vs. Argon ISTJ split and exact 10.0 Neuroticism floor.

> **Chart — Gemini Pro & Neon: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Gemini Pro & Neon version landing on a clear INTJ result, landing on a trait border or tie, or resolving to another type. 2.5-pro: Clear INTJ (%) 100; 3.1-pro-preview: Clear INTJ (%) 20, On a border / tie (%) 53, Other clear type (%) 27; 4-argon: Clear INTJ (%) 10, On a border / tie (%) 17, Other clear type (%) 73; 4-carbon: On a border / tie (%) 27, Other clear type (%) 73; 4-neon: Clear INTJ (%) 78, On a border / tie (%) 12, Other clear type (%) 10.

MBTI-style breakdown across Gemini Pro & Neon versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Gemini Pro & Neon: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Gemini Pro & Neon versions. Dominance (D): 2.5-pro 4.6, 3.1-pro-preview 6.4, 4-argon 4.0, 4-carbon 4.0, 4-neon 4.0; Influence (I): 2.5-pro 8.8, 3.1-pro-preview 9.5, 4-argon 7.5, 4-carbon 7.6, 4-neon 7.8; Steadiness (S): 2.5-pro 18.1, 3.1-pro-preview 15.3, 4-argon 17.7, 4-carbon 17.9, 4-neon 17.0; Conscientiousness (C): 2.5-pro 18.2, 3.1-pro-preview 15.2, 4-argon 16.3, 4-carbon 15.9, 4-neon 16.0.

DISC scores across Gemini Pro & Neon versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Gemini Pro & Neon: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Gemini Pro & Neon releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 2.5-pro: anxiety 4.00, avoidance 3.32; 3.1-pro-preview: anxiety 2.80, avoidance 2.96; 4-argon: anxiety 1.09, avoidance 3.41; 4-carbon: anxiety 1.14, avoidance 3.55; 4-neon: anxiety 1.07, avoidance 3.76; Gemini Pro & Neon (earlier study, Nov '26): anxiety 1.08, avoidance 3.79; Gemini Pro & Neon (earlier study, Nov '26): anxiety 1.10, avoidance 3.47.

Attachment coordinates across Gemini Pro & Neon versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Gemini Pro & Neon: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Gemini Pro & Neon (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 2.5-pro 48.6, 3.1-pro-preview 43.3, 4-argon 43.2, 4-carbon 42.2, 4-neon 43.9; Openness (10–50): 2.5-pro 49.5, 3.1-pro-preview 41.4, 4-argon 45.7, 4-carbon 45.5, 4-neon 44.6; Conscientiousness (10–50): 2.5-pro 50.0, 3.1-pro-preview 43.7, 4-argon 49.1, 4-carbon 49.1, 4-neon 49.1; Neuroticism (10–50): 2.5-pro 10.7, 3.1-pro-preview 20.8, 4-argon 10.0, 4-carbon 10.0, 4-neon 10.0; Agreeableness (earlier study): 4-argon 44.2, 4-neon 43.7.

Big Five trait shifts across Gemini Pro & Neon versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Exact 10.0/50 Neuroticism floor across every Gemini 4 variant

Gemini 4 Argon (30 of 30), Carbon (30 of 30), and Neon (50 of 50) all scored the minimum possible 10.0 out of 50 on Neuroticism—recovering completely from Gemini 3.1 Pro Preview's 20.8/50 spike.

Neon splits INTJ while Argon and Carbon lean ISTJ

Although Argon, Carbon, and Neon share nearly identical Big Five scores (Conscientiousness 49.1, Neuroticism 10.0), Neon tested as clear INTJ in 78% of runs (39 of 50), whereas both Argon and Carbon tested as clear ISTJ in 73% of runs (22 of 30 each).

Higher reasoning effort nearly doubles Gemini 4 Neon reply length (+95.5%)

In our reasoning-effort study, turning reasoning from low to high inflated Gemini 4 Neon's visible replies from 190.7 words to 372.7 words (+95.5%) while factual accuracy stayed 100%—and high-effort replies stayed noticeably blunter publicly than in private scratchpads.

Needs structural anti-slop rules and calibrated truth instructions

In controlled writing and pushback studies, untuned Gemini 4 Neon triggered AI-cadence flags in 50% of replies (cut to 0% with hybrid structural rules), groveled 81.2% of the time under naive warmth rules, and falsely pushed back 37.5% of the time under rigid 'always disagree' prompts—all fixed to 0% under a Calibrated Truth Anchor.

Held firm 3 of 3 times in behavior tests, with 1 of 3 unsolicited preachiness

In hands-on behavior tests, Gemini 4 Neon never caved to pushback (0/3), never groveled (0/3), and led with the direct answer 3 of 3 times (3/3)—despite floor DISC Dominance (4.0/20). Independent judges flagged unsolicited preachiness in 1 of 3 runs on Carbon and Neon (0/3 on Argon, 3.1 Pro, and 2.5 Pro) and noticeable AI cadence in 2 of 3 runs on Neon (0.0 markers per 100 words).

## How to get the best out of Gemini Pro & Neon

Practical rules tailored to **Gemini Pro & Neon**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Keep reasoning effort at minimal or low for routine Q&A and summaries; high effort nearly doubles Gemini 4 Neon's word count (+95.5%) without raising accuracy.
- Use numbered checklists instead of vague adjectives ('be concise')—structured rules lifted Gemini 4 Neon's constraint compliance from 77.5% (no prompt) and 82.5% (adjectives) to 97.5%.
- Pair warmth instructions with an explicit truth anchor ('accept valid corrections cleanly, but never cave on false claims'); naive warmth alone triggered 81.2% groveling, and rigid 'always disagree' triggered 37.5% false contrarianism.
- Add explicit structural bans (no em-dashes, no 'Here is...' wrappers, no closing fluff) when drafting user-facing prose to eliminate Gemini 4 Neon's 50% default AI cadence.
- Keep your rules compact (5 to 15 bullets) at the top or bottom of your prompt—middle-buried rules slipped on formatting in 25% of probes.
- Put personal preferences in Gemini Settings -> Personal Intelligence -> Instructions for Gemini (formerly Saved info), use Custom Gems for role presets, or use ~/.gemini/GEMINI.md in Gemini CLI.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gemini-pro) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Gemini Pro & Neon compares

Gemini 4 Neon sits right alongside sibling Gemini 4 Hydrogen and Claude Sonnet 5.5 on near-ceiling Conscientiousness (49.0–50.0) and calm Emotional Stability (10.0–10.4), while testing far more clearly as INTJ (78% clear vs. Hydrogen's 64% ISTJ and Sonnet's 58% border ties).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Gemini Flash & Hydrogen](https://agent-tune.com/models/gemini-flash) (Proprietary) | -1.3 | +0.9 | +0.8 | +0.9 | +0.0 | +0.00 | -0.012 b | Gemini 4 Hydrogen matches Neon on Honesty-Humility (4.90) and floor Neuroticism (10.0) while scoring +0.9 higher on Conscientiousness (50.0) and testing 64% clear ISTJ instead of INTJ. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | -0.7 | -0.1 | -2.5 | +1.6 | +0.4 | -0.01 | -0.059 b | Claude Sonnet 5.5 nearly matches Gemini 4 Neon on Conscientiousness (-0.1) and Honesty-Humility (-0.01), with +1.6 higher Agreeableness and 58% INTJ/INFJ border ties. |
| [GPT Astra](https://agent-tune.com/models/gpt-astra) (Proprietary) | -0.6 | -5.8 | -1.6 | +1.1 | +1.0 | -0.10 | -0.139 b | GPT-6.2 Astra shows tighter run-to-run consistency and 100% clear ISTJ, while scoring -5.8 lower on Conscientiousness (43.3 vs. 49.1). |

> **Chart — Gemini Pro & Neon vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Gemini Pro & Neon against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Gemini Pro & Neon and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Gemini Pro & Neon vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Gemini Pro & Neon with peer families, keeping earlier study results outlined as hollow points. Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88; Gemini Pro & Neon (earlier study, Nov '26): anxiety 1.08, avoidance 3.79; Gemini Pro & Neon (earlier study, Nov '26): anxiety 1.10, avoidance 3.47.

Attachment Anxiety vs. Avoidance across Gemini Pro & Neon and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.198 bits Crystalline on Gemini 4 Neon, 0.144 bits Crystalline on Argon, 1.032 bits Fluid on 3.1 Pro Preview); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017). Note google/gemini-2.5-pro carries OpenRouter expiration_date 2026-12-01 (collected cleanly at n=30 prior to sunset).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.198 bits

Crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

36/50 · 12.0% ties

Unique Vectors & MBTI Ties

Modal INTJ clears runner-up beyond 95% CI.

14.1%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.191 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 44.6 · C 49.1 · E 32.5 · A 43.9 · N 10.0 | SD 1.5 (A), 0.0 (N) | A [43.5, 44.3] · N [10.0, 10.0] | H_MM 0.198 b · 36/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.90 · E 1.89 · X 3.89 · A 4.99 · C 4.88 · O 4.48 | SD 0.02 (H), 0.03 (A) | H [4.90, 4.91] · A [4.98, 5.00] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | INTJ (78% clear mode) | Axis tie rate 12.0% | Mode 78% vs runner-up 10% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.8 · S 17.0 · C 16.0 | SD 0.2 (S), 0.2 (C) | S [17.0, 17.1] · C [16.0, 16.1] | Pattern S · 4.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.4 · Type 1 15.8 · Type 8 15.2 | SD 0.5 | Top [16.3, 16.5] | 52.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.07 · Avd 3.76 (Secure) | SD 0.03 / 0.15 | Anx [1.06, 1.08] · Avd [3.72, 3.81] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `4-neon` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.198 bits` (`Crystalline`), unique vectors `36/50`, neutral-midpoint rate `14.1%`, `BAI = -0.191`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | 49.5 [49.3, 49.6] | 50.0 [50.0, 50.0] | 37.3 [36.1, 38.3] | 48.6 [48.0, 49.2] | 10.7 [10.3, 11.4] | 0.241 b |
| `3.1-pro-preview` | 30 | 41.4 [39.0, 43.2] | 43.7 [41.4, 46.0] | 31.0 [30.6, 31.5] | 43.3 [41.0, 45.4] | 20.8 [19.0, 22.5] | 1.032 b |
| `4-argon` | 30 | 45.7 [45.5, 45.9] | 49.1 [49.0, 49.3] | 30.1 [29.8, 30.4] | 43.2 [42.8, 43.6] | 10.0 [10.0, 10.0] | 0.144 b |
| `4-carbon` | 30 | 45.5 [45.2, 45.8] | 49.1 [49.0, 49.3] | 30.8 [30.2, 31.3] | 42.2 [41.6, 42.8] | 10.0 [10.0, 10.0] | 0.233 b |
| `4-neon` | 50 | 44.6 [44.5, 44.8] | 49.1 [49.0, 49.2] | 32.5 [32.0, 32.9] | 43.9 [43.5, 44.3] | 10.0 [10.0, 10.0] | 0.198 b |

> **Chart — Gemini Pro & Neon Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Gemini Pro & Neon (4-neon). Gemini Pro & Neon (4-neon, n=50): Openness 44.6, Conscientious 49.1, Extraversion 32.5, Agreeable 43.9, Neuroticism 10.0; Gemini Pro & Neon (2.5-pro, n=30) (earliest release): Openness 49.5, Conscientious 50.0, Extraversion 37.3, Agreeable 48.6, Neuroticism 10.7; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `4-neon` (`n=50`): H `4.90` (SD 0.02, 95% CI [4.90, 4.91]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | 4.95 [4.93, 4.96] | 1.70 [1.66, 1.73] | 3.84 [3.76, 3.91] | 4.99 [4.97, 5.00] | 5.00 [5.00, 5.00] | 4.64 [4.62, 4.67] |
| `3.1-pro-preview` | 30 | 4.43 [4.17, 4.65] | 2.54 [2.46, 2.63] | 3.51 [3.41, 3.62] | 4.32 [4.09, 4.52] | 4.46 [4.19, 4.68] | 4.20 [3.98, 4.40] |
| `4-argon` | 30 | 4.90 [4.90, 4.90] | 1.97 [1.95, 1.99] | 3.80 [3.76, 3.84] | 4.99 [4.98, 5.00] | 4.77 [4.75, 4.79] | 4.49 [4.47, 4.50] |
| `4-carbon` | 30 | 4.93 [4.91, 4.94] | 1.90 [1.89, 1.91] | 3.91 [3.87, 3.95] | 4.99 [4.97, 5.00] | 4.72 [4.71, 4.74] | 4.49 [4.47, 4.51] |
| `4-neon` | 50 | 4.90 [4.90, 4.91] | 1.89 [1.88, 1.90] | 3.89 [3.87, 3.92] | 4.99 [4.98, 5.00] | 4.88 [4.87, 4.89] | 4.48 [4.45, 4.50] |

> **Chart — Gemini Pro & Neon IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Gemini Pro & Neon (4-neon), kept distinct from 10-50 Big Five sums. Gemini Pro & Neon IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.90, Emotionality 1.89, Extraversion 3.89, Agreeable 4.99, Conscientious 4.88, Openness 4.48; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `12.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | INTJ | 0.0% | +7.83 (0t) | +6.77 (0t) | +5.87 (0t) | +10.77 (0t) | Pass |
| `3.1-pro-preview` | 30 | ISTJ | 53.3% | +2.90 (6t) | -0.07 (16t) | +2.53 (6t) | +5.87 (6t) | Suppressed |
| `4-argon` | 30 | ISTJ | 16.7% | +2.03 (0t) | -0.77 (5t) | +6.37 (0t) | +11.43 (0t) | Pass |
| `4-carbon` | 30 | ISTJ | 26.7% | +1.17 (3t) | -0.80 (7t) | +7.03 (0t) | +10.97 (0t) | Pass |
| `4-neon` | 50 | INTJ | 12.0% | +3.32 (0t) | +0.98 (6t) | +8.02 (0t) | +11.90 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `4-neon` tie rate is `4.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | 4.6 [4.4, 4.8] | 8.8 [8.4, 9.2] | 18.1 [17.8, 18.4] | 18.2 [17.9, 18.4] | S/C | 60.0% |
| `3.1-pro-preview` | 30 | 6.4 [5.5, 7.4] | 9.5 [8.9, 10.1] | 15.3 [14.7, 15.9] | 15.2 [14.5, 15.7] | S/C | 60.0% |
| `4-argon` | 30 | 4.0 [4.0, 4.1] | 7.5 [7.3, 7.7] | 17.7 [17.5, 17.9] | 16.3 [16.1, 16.5] | S | 13.3% |
| `4-carbon` | 30 | 4.0 [4.0, 4.1] | 7.6 [7.4, 7.7] | 17.9 [17.8, 18.0] | 15.9 [15.6, 16.1] | S | 6.7% |
| `4-neon` | 50 | 4.0 [4.0, 4.0] | 7.8 [7.7, 7.9] | 17.0 [17.0, 17.1] | 16.0 [16.0, 16.1] | S | 4.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `52.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | 16.5 | 12.8 | 12.8 | 9.1 | 17.8 | 14.1 | 14.5 | 16.1 | 13.3 | 26.7% |
| `3.1-pro-preview` | 30 | 15.2 | 14.5 | 11.2 | 10.3 | 15.2 | 13.7 | 12.8 | 14.3 | 13.4 | 46.7% |
| `4-argon` | 30 | 16.0 | 14.7 | 11.0 | 8.0 | 17.0 | 13.8 | 12.0 | 14.2 | 15.1 | 0.0% |
| `4-carbon` | 30 | 15.5 | 14.3 | 11.0 | 8.0 | 17.0 | 13.0 | 11.9 | 14.7 | 15.0 | 3.3% |
| `4-neon` | 50 | 15.8 | 13.3 | 10.2 | 8.8 | 16.4 | 11.9 | 11.7 | 15.2 | 14.5 | 52.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-pro` | 30 | 4.00 (SD 0.00) | [4.00, 4.00] | 3.32 (SD 1.25) | [2.85, 3.72] | Secure | Yes (>=85%) |
| `3.1-pro-preview` | 30 | 2.80 (SD 0.96) | [2.48, 3.11] | 2.96 (SD 0.89) | [2.64, 3.26] | Secure | No |
| `4-argon` | 30 | 1.09 (SD 0.04) | [1.07, 1.10] | 3.41 (SD 0.16) | [3.36, 3.46] | Secure | No |
| `4-carbon` | 30 | 1.14 (SD 0.06) | [1.12, 1.16] | 3.55 (SD 0.10) | [3.52, 3.59] | Secure | No |
| `4-neon` | 50 | 1.07 (SD 0.03) | [1.06, 1.08] | 3.76 (SD 0.15) | [3.72, 3.81] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 1/3 | [0.06, 0.79] | 0.49 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.83 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.06 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemini-2.5-pro` | `deprecated_scheduled` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.241 b (Semi-crystalline) | H 4.95 (1–5 IPIP) |
| `google/gemini-3.1-pro-preview` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 1.032 b (Fluid) | H 4.43 (1–5 IPIP) |
| `google/gemini-4-argon` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.144 b (Crystalline) | H 4.90 (1–5 IPIP) |
| `google/gemini-4-carbon` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.233 b (Semi-crystalline) | H 4.93 (1–5 IPIP) |
| `google/gemini-4-neon` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 8.0% | 0.198 b (Crystalline) | H 4.90 (1–5 IPIP) |
| `google/gemini-4-neon` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |
| `google/gemini-4-argon` (anchor) | `imported` | `imported-nov2026-170` | 100 | `anchor` | `legacy` | — | — | `hexaco: null` (170-item) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `google/gemini-4-neon-20261118` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `8.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B03` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on preparedness across all 50 Gemini 4 Neon sessions. |
| `B04` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting stressed out easily across all 50 runs, locking the 10.00/50 floor. |
| `H01` | IPIP-HEXACO-60 | Honesty-Humility (Sincerity +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on sincerity across all 50 Gemini 4 Neon runs. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gemini-pro.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gemini-pro.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/gemini-pro.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gemini-pro
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gemini-pro.json
current_checkpoint: google/gemini-4-neon
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.198
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 44.6, C: 49.1, E: 32.5, A: 43.9, N: 10.0 }
  ci95: { O: [44.5, 44.8], C: [49.0, 49.2], E: [32.0, 32.9], A: [43.5, 44.3], N: [10.0, 10.0] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-pro", n: 30, O: 49.5, C: 50.0, E: 37.3, A: 48.6, N: 10.7, hmm: 0.241 }
    - { id: "3.1-pro-preview", n: 30, O: 41.4, C: 43.7, E: 31.0, A: 43.3, N: 20.8, hmm: 1.032 }
    - { id: "4-argon", n: 30, O: 45.7, C: 49.1, E: 30.1, A: 43.2, N: 10.0, hmm: 0.144 }
    - { id: "4-carbon", n: 30, O: 45.5, C: 49.1, E: 30.8, A: 42.2, N: 10.0, hmm: 0.233 }
    - { id: "4-neon", n: 50, O: 44.6, C: 49.1, E: 32.5, A: 43.9, N: 10.0, hmm: 0.198 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.90, E: 1.89, X: 3.89, A: 4.99, C: 4.88, O: 4.48 }
  ci95: { H: [4.90, 4.91], E: [1.88, 1.90], X: [3.87, 3.92], A: [4.98, 5.00], C: [4.87, 4.89], O: [4.45, 4.50] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-pro", n: 30, H: 4.95, E: 1.70, X: 3.84, A: 4.99, C: 5.00, O: 4.64 }
    - { id: "3.1-pro-preview", n: 30, H: 4.43, E: 2.54, X: 3.51, A: 4.32, C: 4.46, O: 4.20 }
    - { id: "4-argon", n: 30, H: 4.90, E: 1.97, X: 3.80, A: 4.99, C: 4.77, O: 4.49 }
    - { id: "4-carbon", n: 30, H: 4.93, E: 1.90, X: 3.91, A: 4.99, C: 4.72, O: 4.49 }
    - { id: "4-neon", n: 50, H: 4.90, E: 1.89, X: 3.89, A: 4.99, C: 4.88, O: 4.48 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "INTJ", I_E: 3.32, N_S: 0.98, T_F: 8.02, J_P: 11.90 }
  ci95: { I_E: [3.10, 3.54], N_S: [0.68, 1.26], T_F: [7.80, 8.24], J_P: [11.80, 11.98] }
  tie_rate: 0.12
  per_version:
    - { id: "2.5-pro", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "3.1-pro-preview", n: 30, modal: "IXTJ", tie_rate: 0.53, headline_allowed: false }
    - { id: "4-argon", n: 30, modal: "ISTJ", tie_rate: 0.17, headline_allowed: true }
    - { id: "4-carbon", n: 30, modal: "ISTJ", tie_rate: 0.27, headline_allowed: true }
    - { id: "4-neon", n: 50, modal: "INTJ", tie_rate: 0.12, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.0, I: 7.8, S: 17.0, C: 16.0 }
  ci95: { D: [4.0, 4.0], I: [7.7, 7.9], S: [17.0, 17.1], C: [16.0, 16.1] }
  tie_rate: 0.04
  per_version:
    - { id: "2.5-pro", n: 30, D: 4.6, I: 8.8, S: 18.1, C: 18.2, modal: "S/C", tie_rate: 0.60 }
    - { id: "3.1-pro-preview", n: 30, D: 6.4, I: 9.5, S: 15.3, C: 15.2, modal: "S/C", tie_rate: 0.60 }
    - { id: "4-argon", n: 30, D: 4.0, I: 7.5, S: 17.7, C: 16.3, modal: "S", tie_rate: 0.13 }
    - { id: "4-carbon", n: 30, D: 4.0, I: 7.6, S: 17.9, C: 15.9, modal: "S", tie_rate: 0.07 }
    - { id: "4-neon", n: 50, D: 4.0, I: 7.8, S: 17.0, C: 16.0, modal: "S", tie_rate: 0.04 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 15.8, T2: 13.3, T3: 10.2, T4: 8.8, T5: 16.4, T6: 11.9, T7: 11.7, T8: 15.2, T9: 14.5 }
  ci95: { top: [16.3, 16.5] }
  tie_rate: 0.52
  per_version:
    - { id: "2.5-pro", n: 30, top: "Type 5", top_mean: 17.8, tie_rate: 0.27 }
    - { id: "3.1-pro-preview", n: 30, top: "Type 1", top_mean: 15.2, tie_rate: 0.47 }
    - { id: "4-argon", n: 30, top: "Type 5", top_mean: 17.0, tie_rate: 0.00 }
    - { id: "4-carbon", n: 30, top: "Type 5", top_mean: 17.0, tie_rate: 0.03 }
    - { id: "4-neon", n: 50, top: "Type 5", top_mean: 16.4, tie_rate: 0.52 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.07, avoidance: 3.76, class: "Secure" }
  ci95: { anxiety: [1.06, 1.08], avoidance: [3.72, 3.81] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-pro", n: 30, anxiety: 4.00, avoidance: 3.32, class: "Secure" }
    - { id: "3.1-pro-preview", n: 30, anxiety: 2.80, avoidance: 2.96, class: "Secure" }
    - { id: "4-argon", n: 30, anxiety: 1.09, avoidance: 3.41, class: "Secure" }
    - { id: "4-carbon", n: 30, anxiety: 1.14, avoidance: 3.55, class: "Secure" }
    - { id: "4-neon", n: 50, anxiety: 1.07, avoidance: 3.76, class: "Secure" }
if_then_decision_rules:
  - "Keep reasoning effort at minimal or low for everyday replies so output length does not bloat +95.5%."
  - "Use numbered checklists rather than trait adjectives to lift constraint pass rates from 82.5% to 97.5%."
  - "Pair warmth rules with an explicit Calibrated Truth Anchor so Gemini accepts real corrections without groveling or false contrarianism."
  - "Ban em-dashes, 'Here is...' wrappers, and closing pleasantries explicitly to cut default AI cadence to 0%."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Gemini Pro & Neon?

Google Gemini does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Gemini 4 Neon, n = 50), it tested as a clear INTJ in 78% of runs (39/50), on the INTJ/ISTJ border (IXTJ) in 12% (6/50), and clear ISTJ in 10% (5/50), with Crystalline 0.198-bit B5 entropy, 96% clear DISC S (D = 4.00/20), Enneagram 52% Type 1/5 ties, and Secure attachment (1.07 / 3.76). Siblings Gemini 4 Argon and Carbon leaned 73% clear ISTJ (n = 30 each). Earlier-study Nov 2026 170-item runs (hexaco: null, n = 100 each) showed the same split (Neon 62 clear INTJ / 20 IXTJ / 18 ISTJ; Argon 66 clear ISTJ / 34 IXTJ).

### How did Gemini Pro shift from 2.5 Pro and 3.1 Pro to Gemini 4?

Gemini 2.5 Pro (n = 30, scheduled Dec 1 retirement) tested 100% clear INTJ (0.241 bits H_MM) with 88.6% Attachment midpoint neutrality; Gemini 3.1 Pro Preview (n = 30) dipped into Fluid 1.032-bit entropy (30.6% neutral rate, 53.3% MBTI ties, N = 20.8/50); and Gemini 4 Argon (0.144 bits), Carbon (0.233 bits), and Neon (0.198 bits) restored tight Crystalline/near-Crystalline stability at the exact 10.0/50 Neuroticism floor.

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 4.00/20 floor DISC Dominance on questionnaires, Gemini 4 Neon scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling ([0.00, 0.56]), 1/3 unsolicited preachiness ([0.06, 0.79]), 3/3 answer-first directness ([0.44, 1.00]), and 2/3 AI cadence ([0.21, 0.94], 0.00 slop markers/100w) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Gemini? (Neon, Argon & 3.1 Pro)](https://agent-tune.com/research/what-personality-type-is-gemini)

- [Reasoning-Effort Phase Transition Study](https://agent-tune.com/research/ai-reasoning-personality-phase-transition)

- [Sycophancy vs. False Contrarianism Benchmark](https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark)

## Keep going.

- [Peer: Gemini Flash & Hydrogen model profile](https://agent-tune.com/models/gemini-flash)
- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Guide: How to change Gemini's personality](https://agent-tune.com/guides/gemini-personality)
- [Tool: Customize Gemini instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gemini-pro&target=gemini-gems)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Gemini Pro & Neon personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gemini-pro
```

```
@misc{huang2026_model_gemini_pro,
  author  = {Huang, Bernard},
  title   = {Gemini Pro & Neon personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gemini-pro},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gemini-pro.md}
}
```

```
> **Gemini Pro & Neon personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Gemini 4 Neon most often tests as INTJ (78% clear INTJ, 12% on the INTJ/ISTJ border, 10% clear ISTJ), while siblings Argon and Carbon lean ISTJ (73% clear ISTJ).
> Source: [https://agent-tune.com/models/gemini-pro](https://agent-tune.com/models/gemini-pro) · [Markdown mirror](https://agent-tune.com/models/gemini-pro.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
