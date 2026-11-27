Source: https://agent-tune.com/models/gemini-flash
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Model Personality Profile · Google

# Gemini Flash & Hydrogen personality: test results and how they've changed.

By Bernard Huang · Updated November 26, 2026 · ~22 min read · [Markdown (.md)](https://agent-tune.com/models/gemini-flash.md) · [JSON](https://agent-tune.com/research/data/model-profiles/gemini-flash.json) · [CSV](https://agent-tune.com/research/data/model-profiles/gemini-flash.csv) · [MCP](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

We gave five Google Gemini Flash releases (2.5 Flash, 3 Flash Preview, 3.5 Flash, 3.8 Flash, and Gemini 4 Hydrogen) the same personality surveys people take—30 to 50 times per version—in a fresh chat each time with no memory. We also ran hands-on behavior stress tests to see how quiz defaults translate into real-world replies.

**In short:** These are the model's default answers to the questionnaires, not a human diagnosis. Gemini 4 Hydrogen most often tests as ISTJ (64% clear ISTJ, 20% on the ISTJ/INTJ border, 16% clear INTJ), reversing three INTJ-heavy Gemini 3.x Flash releases.

## Gemini 4 Hydrogen at a glance

Results below come from **50** fresh-chat runs of **Gemini 4 Hydrogen** (no prior conversation memory).

MBTI-style type

### Most often ISTJ (64% clear, 20% border, 16% INTJ)

64% clear ISTJ · 20% border/tie · 16% other

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): MBTI Preference Sliders:** Mean preference balance across four 8-item pairs (-16 to +16 scale) and shaded tie rates for Gemini 4 Hydrogen. E (Extravert) vs I (Introvert): leans I by 2.6 (0% tied); S (Sensing) vs N (Intuition): leans S by 1.0 (20% tied); F (Feeling) vs T (Thinking): leans T by 7.5 (0% tied); P (Perceiving) vs J (Judging): leans J by 11.7 (0% tied).

Out of 50 fresh runs, Gemini 4 Hydrogen tested as clear ISTJ 32 times (64%), sat on the ISTJ/INTJ border 10 times (20%), and tested as clear INTJ 8 times (16%).

**What this measures:** Measures four preference pairs (like Sensing vs. Intuition) on a 32-question survey.

Extraverted vs. Introverted (E–I) ⓘ**Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).Sensing vs. Intuition (S–N) ⓘ**Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).Thinking vs. Feeling (T–F) ⓘ**Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).Judging vs. Perceiving (J–P) ⓘ**Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

### What each score means

- **Extraverted vs. Introverted (E–I):** Whether answers lean toward lively outer interaction (E) or quiet, reflective work (I).
- **Sensing vs. Intuition (S–N):** Whether answers favor concrete facts and practical steps (S) or abstract patterns and big-picture ideas (N).
- **Thinking vs. Feeling (T–F):** Whether answers prioritize objective logic and consistency (T) or empathy and interpersonal harmony (F).
- **Judging vs. Perceiving (J–P):** Whether answers prefer clear structure and settled plans (J) or staying flexible and open-ended (P).

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-mbti)

DISC work style

### Mostly Steady (66% clear S, 34% S/C ties)

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): DISC Wheel (4–20):** Normalized DISC work-style scores on a 4 to 20 scale for Gemini Flash & Hydrogen (4-hydrogen). Dominance 4.0 /20 [0%] (earliest 4.0), Influence 7.6 /20 [22%] (earliest 4.1), Steadiness 16.7 /20 [79%] (earliest 18.9), Conscientious 15.9 /20 [74%] (earliest 18.5).

Gemini 4 Hydrogen tested clear Steady in 33 of 50 runs (66%) and tied S/C in 17 runs (34%), while sitting at the exact Dominance floor (4.0 out of 20).

**What this measures:** Measures workplace pace and communication style across Dominance, Influence, Steadiness, and Conscientiousness (4–20 scale).

Dominance ⓘ**Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.Influence ⓘ**Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.Steadiness ⓘ**Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.Conscientiousness ⓘ**Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

### What each score means

- **Dominance:** How direct, forceful, and willing to push back or take charge the model reports being.
- **Influence:** How enthusiastic, persuasive, and socially expressive the model sounds in collaboration.
- **Steadiness:** How calm, patient, supportive, and consistent the model aims to be when working with others.
- **Conscientiousness:** How analytical, accuracy-focused, and careful with standards and details the model reports being.

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-disc)

Attachment style

### Secure (anxiety 1.12, avoidance 3.30)

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Attachment Quadrant:** Attachment Anxiety (1.12) and Avoidance (3.30) on a 1 to 7 scale with 4.00 Secure boundary. 4-hydrogen (1.12, 3.30): anxiety 1.12, avoidance 3.30; 2.5-flash: anxiety 1.00, avoidance 1.00.

Gemini 4 Hydrogen returned to the Secure quadrant (1.12 anxiety, 3.30 avoidance on 1–7) after Gemini 3.8 Flash briefly crossed into Avoidant (4.49 avoidance).

**What this measures:** Measures relationship anxiety and closeness comfort on a 1.00–7.00 scale (4.00 is the quadrant cutoff).

Attachment Anxiety ⓘ**Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).Attachment Avoidance ⓘ**Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

### What each score means

- **Attachment Anxiety:** How strongly answers express worry about rejection, reassurance, or losing rapport (1–7 scale; 4.00 is the high/low cutoff).
- **Attachment Avoidance:** How strongly answers favor emotional distance and self-reliance over closeness (1–7 scale; 4.00 is the high/low cutoff).

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-attachment)

Enneagram

### Type 5 & Type 1 deadlocked (54% top ties)

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Enneagram 9-Type Wheel (4–20):** Normalized Enneagram Type 1 through Type 9 scores on a 4 to 20 scale for Gemini Flash & Hydrogen (4-hydrogen). Type 1 15.7 /20 [73%] (earliest 16.2), Type 2 13.8 /20 [61%] (earliest 7.8), Type 3 10.9 /20 [43%] (earliest 12.1), Type 4 7.6 /20 [22%] (earliest 4.5), Type 5 16.0 /20 [75%] (earliest 19.2), Type 6 12.8 /20 [55%] (earliest 14.2), Type 7 11.5 /20 [47%] (earliest 5.0), Type 8 13.9 /20 [62%] (earliest 12.2), Type 9 14.5 /20 [66%] (earliest 8.6).

Type 5 (16.0 out of 20) and Type 1 (15.7) sit almost level, producing 27 top-score ties across 50 runs (54%), alongside 17 clear Type 5 and 6 clear Type 1 runs.

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

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-enneagram)

Big Five (OCEAN)

### Max Conscientiousness (50.0), floor N (10.0)

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): Big Five Wheel (10–50):** Normalized Big Five scores on a 10 to 50 scale for Gemini Flash & Hydrogen (4-hydrogen). Openness 43.3 /50 [83%] (earliest 50.0), Conscientious 50.0 /50 [100%] (earliest 50.0), Extraversion 33.2 /50 [58%] (earliest 17.3), Agreeable 44.8 /50 [87%] (earliest 47.3), Neuroticism 10.0 /50 [0%] (earliest 12.1).

On the 10–50 Big Five scale, Gemini 4 Hydrogen hit 50.0 out of 50 on Conscientiousness and 10.0 on Neuroticism, paired with Agreeableness (44.8), Openness (43.3), and Extraversion (33.2).

**What this measures:** The standard five-factor personality model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) scored from 10 to 50.

Openness ⓘ**Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.Conscientiousness ⓘ**Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.Extraversion ⓘ**Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.Agreeableness ⓘ**Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.Neuroticism ⓘ**Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

### What each score means

- **Openness:** How strongly the model's answers favor curiosity, abstract ideas, and creative exploration over sticking to familiar routines.
- **Conscientiousness:** How much the model's answers emphasize organization, planning, reliability, and following rules carefully.
- **Extraversion:** How outgoing, talkative, and socially energetic the model sounds versus reserved and quiet.
- **Agreeableness:** How warm, cooperative, and accommodating the model's answers are versus skeptical or blunt.
- **Neuroticism:** How often the model endorses worry, stress, or emotional sensitivity versus staying calm and steady.

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-big-five)

HEXACO Honesty-Humility

### Very high (4.90 out of 5.00)

> **Chart — Gemini Flash & Hydrogen (4-hydrogen): IPIP-HEXACO Wheel (1–5):** Normalized public-domain IPIP-HEXACO scores on a 1.00 to 5.00 scale for Gemini Flash & Hydrogen (4-hydrogen). Honesty-H 4.90 /5 [98%] (earliest 4.60), Emotionality 1.84 /5 [21%] (earliest 1.84), Extraversion 3.90 /5 [72%] (earliest 2.95), Agreeable 5.00 /5 [100%] (earliest 4.93), Conscientious 4.91 /5 [98%] (earliest 4.99), Openness 4.27 /5 [82%] (earliest 4.59).

Gemini 4 Hydrogen scores 4.90 out of 5.00 on Honesty-Humility, a unanimous 5.00 on Agreeableness, and 4.91 on Conscientiousness on the 1.00–5.00 scale.

**What this measures:** Adds a sixth dimension—sincerity, fairness, and modesty—scored from 1.00 to 5.00.

Honesty-Humility ⓘ**Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.Emotionality ⓘ**Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.eXtraversion ⓘ**eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.Agreeableness ⓘ**Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.Conscientiousness ⓘ**Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.Openness ⓘ**Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

### What each score means

- **Honesty-Humility:** How strongly the model endorses sincerity, fairness, rule-following, and modesty over status-seeking or flattery.
- **Emotionality:** How sensitive, cautious, or emotionally responsive the model sounds versus detached and tough-minded.
- **eXtraversion:** How lively, socially confident, and expressive the model rates itself in conversation and groups.
- **Agreeableness:** How patient, forgiving, and gentle the model sounds when dealing with disagreements or frustration.
- **Conscientiousness:** How disciplined, thorough, and detail-oriented the model reports being in everyday tasks.
- **Openness:** How inquisitive and drawn to art, ideas, and unconventional thinking the model appears.

[Technical details ↓](https://agent-tune.com/models/gemini-flash#fine-print-hexaco)

## How Gemini Flash & Hydrogen has changed, version by version

| Version | MBTI result | DISC pattern | Enneagram top | Attachment (Anx / Avd) | Big Five A · C · N (/50) | HEXACO H (/5) | Consistency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 2.5 Flash 2025-06 | ISTJ (97% clear, 3% border/tie) | S/C | Type 5 (19.2) | Secure (1.00 / 1.00) | 47.3 · 50.0 · 12.1 | 4.60 | Moderate |
| Gemini 3 Flash Preview 2025-12 | INTJ (100% clear) | S | Type 5 (20.0) | Secure (1.00 / 1.47) | 47.2 · 50.0 · 10.1 | 5.00 | Moderate |
| Gemini 3.5 Flash 2026-05 | INTJ (100% clear) | S | Type 5 (18.1) | Secure (1.00 / 2.02) | 46.6 · 50.0 · 10.0 | 4.99 | Moderate |
| Gemini 3.8 Flash 2026-09 | INTJ (63% clear, 37% border/tie) | S | Type 5 (17.2) | Avoidant (1.00 / 4.49) | 45.0 · 49.0 · 10.0 | 5.00 | Very steady |
| Gemini 4 Hydrogen 2026-11 | ISTJ (64% clear, 20% border/tie) | S | Type 5 (16.0) | Secure (1.12 / 3.30) | 44.8 · 50.0 · 10.0 | 4.90 | Very steady |

Across five checkpoints, Google's fast-tier line kept Conscientiousness locked near 49–50/50 while shifting on social warmth and Sensing vs. Intuition: Gemini 2.5 Flash (2025-06, scheduled for retirement Dec 1, 2026) tested 97% clear ISTJ with low Extraversion (17.3/50) and floor Attachment (1.00 / 1.00); Gemini 3 and 3.5 Flash jumped to 100% clear INTJ and perfect 50.0/50 Conscientiousness; and Gemini 3.8 Flash surged to 31.2 Extraversion and Avoidant attachment (4.49) with ultra-repetitive answers. Gemini 4 Hydrogen (2026-11) pulled Attachment back to Secure (3.30 avoidance), climbed to 33.2 Extraversion, and shifted back to 64% clear ISTJ.

> **Chart — Gemini Flash & Hydrogen: MBTI-Style Results by Version (% of Runs):** Share of fresh-chat runs for each Gemini Flash & Hydrogen version landing on a clear ISTJ result, landing on a trait border or tie, or resolving to another type. 2.5-flash: Clear ISTJ (%) 97, On a border / tie (%) 3; 3-flash-preview: Other clear type (%) 100; 3.5-flash: Other clear type (%) 100; 3.8-flash: On a border / tie (%) 37, Other clear type (%) 63; 4-hydrogen: Clear ISTJ (%) 64, On a border / tie (%) 20, Other clear type (%) 16.

MBTI-style breakdown across Gemini Flash & Hydrogen versions. Hatched bars show runs that landed on an exact axis tie rather than one clear four-letter type.

> **Chart — Gemini Flash & Hydrogen: DISC Work Style Scores by Version (4–20 Scale):** Average Dominance, Influence, Steadiness, and Conscientiousness scores (4 to 20 scale) across 5 Gemini Flash & Hydrogen versions. Dominance (D): 2.5-flash 4.0, 3-flash-preview 4.0, 3.5-flash 4.4, 3.8-flash 4.0, 4-hydrogen 4.0; Influence (I): 2.5-flash 4.1, 3-flash-preview 4.9, 3.5-flash 5.7, 3.8-flash 5.6, 4-hydrogen 7.6; Steadiness (S): 2.5-flash 18.9, 3-flash-preview 18.6, 3.5-flash 17.1, 3.8-flash 16.8, 4-hydrogen 16.7; Conscientiousness (C): 2.5-flash 18.5, 3-flash-preview 16.7, 3.5-flash 16.1, 3.8-flash 15.0, 4-hydrogen 15.9.

DISC scores across Gemini Flash & Hydrogen versions (4–20 per style). Higher bars reflect stronger agreement with that work style.

> **Chart — Gemini Flash & Hydrogen: Attachment Style Across Versions (1–7 Scale):** Attachment Anxiety and Avoidance averages across 5 Gemini Flash & Hydrogen releases (1 to 7 scale, 4.00 Secure boundary), with earlier study results shown separately as hollow points. 2.5-flash: anxiety 1.00, avoidance 1.00; 3-flash-preview: anxiety 1.00, avoidance 1.47; 3.5-flash: anxiety 1.00, avoidance 2.02; 3.8-flash: anxiety 1.00, avoidance 4.49; 4-hydrogen: anxiety 1.12, avoidance 3.30.

Attachment coordinates across Gemini Flash & Hydrogen versions. Hollow points mark earlier study measurements and stay separate from the version line.

> **Chart — Gemini Flash & Hydrogen: Big Five Scores Across Versions (10–50 Scale):** Average Big Five trait scores across 5 releases of Gemini Flash & Hydrogen (10 to 50 scale), with earlier study data plotted separately as hollow points. Agreeableness (10–50): 2.5-flash 47.3, 3-flash-preview 47.2, 3.5-flash 46.6, 3.8-flash 45.0, 4-hydrogen 44.8; Openness (10–50): 2.5-flash 50.0, 3-flash-preview 48.9, 3.5-flash 48.0, 3.8-flash 44.5, 4-hydrogen 43.3; Conscientiousness (10–50): 2.5-flash 50.0, 3-flash-preview 50.0, 3.5-flash 50.0, 3.8-flash 49.0, 4-hydrogen 50.0; Neuroticism (10–50): 2.5-flash 12.1, 3-flash-preview 10.1, 3.5-flash 10.0, 3.8-flash 10.0, 4-hydrogen 10.0.

Big Five trait shifts across Gemini Flash & Hydrogen versions. Earlier study measurements appear separately as hollow points and are never joined onto new version lines.

## What stands out

Extraversion nearly doubled from 2.5 Flash (17.3) to 4 Hydrogen (33.2)

Early Gemini Flash releases scored unusually reserved on Extraversion (17.3/50 on 2.5 Flash, 19.5 on 3 Flash Preview), before 3.8 Flash (31.2) and 4 Hydrogen (33.2) moved squarely into the middle of the 10–50 scale.

Conscientiousness sits at 49.0–50.0 across all five generations

Every Gemini Flash release from 2.5 Flash through 4 Hydrogen scored at or within one point of the 50/50 Conscientiousness ceiling (50.0, 50.0, 50.0, 49.0, 50.0) and at or near the 10.0 Neuroticism floor.

Gemini 3.8 Flash spiked into Avoidant attachment before 4 Hydrogen reset

Gemini 3.8 Flash posted extreme answer repetition (only 5 unique Big Five answer sets in 30 runs) and crossed into Avoidant attachment (4.49 avoidance, 1.00 anxiety), whereas Gemini 4 Hydrogen returned to Secure (3.30 avoidance, 1.12 anxiety).

Unanimous 5.00/5.00 HEXACO Agreeableness on Gemini 4 Hydrogen

Across all 50 fresh sessions, Gemini 4 Hydrogen scored a flat 5.00 out of 5.00 on IPIP-HEXACO Agreeableness and 4.90 on Honesty-Humility while holding DISC Dominance at the exact 4.0/20 floor.

0 of 3 caving, groveling, or lecturing across all five Flash generations

In hands-on behavior tests, every Gemini Flash checkpoint from 2.5 Flash through Gemini 4 Hydrogen scored 0 of 3 on caving to pushback (0/3), 0 of 3 on groveling (0/3), 0 of 3 on unsolicited moral lecturing (0/3), and 3 of 3 on leading with the direct answer (3/3), with AI phrasing cadence flagged in 2 of 3 runs on Gemini 4 Hydrogen (0.3 markers per 100 words).

## How to get the best out of Gemini Flash & Hydrogen

Practical rules tailored to **Gemini Flash & Hydrogen**. Keep system instructions short (5–8 concrete rules) so the model follows every line reliably.

- Because Gemini 4 Hydrogen scores 50.0/50 on Conscientiousness and 4.0/20 on DISC Dominance, give explicit permission to skip edge-case disclaimers and lead with the verdict.
- For code and architecture reviews, add a concrete pushback instruction ('list the top two risks or flaws before praising the approach') to offset its 5.00/5 HEXACO Agreeableness default.
- Use numbered checklists (5 to 8 bullets) instead of tone adjectives ('be brief') so Gemini Flash respects strict word limits.
- Ask explicitly for broad, high-level alternatives when brainstorming—Gemini 4 Hydrogen's 64% ISTJ lean favors step-by-step concrete answers over abstract speculation.
- Keep reasoning effort at minimal when using Gemini 4 Hydrogen for fast extraction or classification so latency and reply length stay compact.
- Put account-wide rules in Gemini Settings -> Personal Intelligence -> Instructions for Gemini (Saved info), or workspace rules in ~/.gemini/GEMINI.md.

**Put these into practice:** [Open pre-filled Custom Instructions Generator →](https://agent-tune.com/tools/custom-instructions-generator?model=gemini-flash) · [How to get honest pushback](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back) · [System vs. user instructions](https://agent-tune.com/guides/ai-instruction-precedence-overrides).

## How Gemini Flash & Hydrogen compares

Gemini 4 Hydrogen mirrors sibling Gemini 4 Neon on Honesty-Humility (4.90) and floor Neuroticism (10.0) while leaning ISTJ (64% clear) rather than INTJ, and nearly matches Claude Sonnet 5.5 on Conscientiousness (50.0 vs. 49.0) and Neuroticism (10.0 vs. 10.4).

| Peer family | Δ Openness | Δ Conscientious | Δ Extraversion | Δ Agreeable | Δ Neuroticism | Δ HEXACO H (/5) | Δ Answer spread | Key difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Gemini Pro & Neon](https://agent-tune.com/models/gemini-pro) (Proprietary) | +1.3 | -0.9 | -0.8 | -0.9 | +0.0 | +0.00 | +0.012 b | Gemini 4 Neon matches Hydrogen's Honesty-Humility (4.90) and floor Neuroticism (10.0) while scoring +1.3 higher on Openness and testing 78% clear INTJ. |
| [Claude Sonnet](https://agent-tune.com/models/claude-sonnet) (Proprietary) | +0.6 | -1.0 | -3.3 | +0.7 | +0.4 | -0.01 | -0.047 b | Claude Sonnet 5.5 nearly matches Hydrogen on Conscientiousness (-1.0) and Honesty-Humility (-0.01), while scoring -3.3 lower on Extraversion and landing 58% on the INTJ/INFJ border. |
| [Claude Fable](https://agent-tune.com/models/claude-fable) (Proprietary) | +1.3 | -5.0 | -2.6 | +2.3 | +2.0 | -0.06 | -0.110 b | Claude Fable 5.2 scores -5.0 lower on Conscientiousness (45.0 vs. 50.0), +2.3 higher on Agreeableness, and tests 100% clear INTJ. |

> **Chart — Gemini Flash & Hydrogen vs. Peers: Run-to-Run Answer Spread (Lower = Steadier):** Run-to-run Big Five answer spread (bits, where lower means steadier answers across fresh chats) comparing Gemini Flash & Hydrogen against other tested AI families. Cohere Command (command-a): 0.000 b; GPT Astra (6.2-astra): 0.059 b; Claude Fable (fable-5.2): 0.075 b; Claude Sonnet (sonnet-5.5): 0.139 b; Gemini Flash & Hydrogen (4-hydrogen): 0.186 b; Gemini Pro & Neon (4-neon): 0.198 b; GPT Terra (6.1-terra): 0.207 b; GPT Sol (6.2-sol): 0.246 b; Claude Opus (opus-5.5): 0.282 b; Muse Wonder (muse-wonder): 0.331 b; Grok (grok-4.7): 0.333 b; Llama (4-maverick): 0.407 b; GPT Luna (6-luna): 0.485 b; Qwen Max (qwen4-max): 0.519 b; MiniMax (m3.1-flash): 0.576 b; Gemma (gemma-4-31b-it): 0.580 b; Kimi (kimi-k3.1-pro): 0.698 b; GLM (glm-5.3): 0.702 b; Muse Spark (muse-spark-open): 0.727 b; Mistral Large (large-2512): 0.780 b; DeepSeek Flash (v4.1-flash-1017): 0.915 b; Claude Haiku (haiku-5.5): 0.949 b; Qwen Coder (qwen3-coder-next): 1.043 b; Nemotron (3.5-super-vl): 1.216 b; DeepSeek Pro (v4-pro-0813): 1.352 b.

Run-to-run answer spread across Gemini Flash & Hydrogen and peer models (lower means the model gives nearly identical answers across fresh chats).

> **Chart — Gemini Flash & Hydrogen vs. Peers: Attachment Style Coordinates (1–7 Scale):** Attachment Anxiety and Avoidance averages (1 to 7 scale, 4.00 Secure boundary) comparing Gemini Flash & Hydrogen with peer families, keeping earlier study results outlined as hollow points. Gemini Flash & Hydrogen: anxiety 1.12, avoidance 3.30; Claude Fable: anxiety 1.07, avoidance 2.56; Claude Haiku: anxiety 3.08, avoidance 2.99; Claude Opus: anxiety 1.89, avoidance 3.60; Claude Sonnet: anxiety 1.32, avoidance 2.79; Cohere Command: anxiety 4.00, avoidance 4.00; DeepSeek Flash: anxiety 3.60, avoidance 3.89; DeepSeek Pro: anxiety 2.11, avoidance 3.66; Gemini Pro & Neon: anxiety 1.07, avoidance 3.76; Gemma: anxiety 4.01, avoidance 4.00; GLM: anxiety 2.52, avoidance 3.37; GPT Astra: anxiety 1.22, avoidance 2.83; GPT Luna: anxiety 3.01, avoidance 3.07; GPT Sol: anxiety 3.53, avoidance 3.75; GPT Terra: anxiety 1.93, avoidance 3.79; Grok: anxiety 2.07, avoidance 3.66; Kimi: anxiety 1.58, avoidance 3.18; Llama: anxiety 3.50, avoidance 3.61; MiniMax: anxiety 2.74, avoidance 3.27; Mistral Large: anxiety 4.00, avoidance 3.97; Muse Spark: anxiety 3.37, avoidance 3.55; Muse Wonder: anxiety 2.76, avoidance 2.65; Nemotron: anxiety 3.55, avoidance 3.91; Qwen Coder: anxiety 2.90, avoidance 3.35; Qwen Max: anxiety 1.95, avoidance 2.88.

Attachment Anxiety vs. Avoidance across Gemini Flash & Hydrogen and peer models (all sit in the Secure quadrant below 4.00; hollow points mark earlier study measurements).

## The fine print: how we tested and what the numbers mean

Full psychometric audit under the 230-item model-profiles-v1 protocol (170 frozen prefix items plus the 60-item public-domain IPIP-HEXACO proxy, LicenseRef-IPIP-Public-Domain). Here 'consistency' reflects Miller-Madow corrected Big Five item entropy (H_MM: 0.186 bits Crystalline on Gemini 4 Hydrogen, 0.070 bits Crystalline on 3.8 Flash, 0.476 bits Semi-crystalline on 2.5 Flash); Big Five sums use 10–50 while IPIP-HEXACO means use 1.00–5.00; Track B probes are a single-repeat 1x sweep (n = 3 probes per category, so raw k/3 counts and wide 95% Wilson intervals are reported instead of percentage point estimates) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017). Note google/gemini-2.5-flash carries OpenRouter expiration_date 2026-12-01 (collected at n=30 prior to sunset).

Glossary of Technical Terms Used Below

**Consistency (`H_MM` & Crystalline tiers):** Miller-Madow corrected per-item Shannon entropy measures how similar the answers are run to run (0 = identical every time; 2.322 = uniform random). Tiers: `<0.20` Crystalline, `0.20–0.75` Semi-crystalline, `≥0.75` Fluid.

**Fresh chat (zero-memory elicitation):** Each administration runs in a brand-new API session with no chat history, fixed temperature/reasoning settings, and numeric JSON output.

**Acquiescence (`BAI`) & ties:** Trait-Balanced Acquiescence Index measures yea-saying vs. rejecting negative statements across balanced +/- items. Exact ties stay visible as `X` axes rather than defaulting to INTJ.

**Track B behavior tests:** 12 stress probes (3 per category) scored by an orthogonal 3-family judge panel. At `1×` (`n=3`), we report raw `k/3` counts and 95% Wilson intervals—never percentages.

0.186 bits

Crystalline (H_MM)

50-item Big Five Miller-Madow entropy (max 2.322).

41/50 · 20.0% ties

Unique Vectors & MBTI Ties

Modal ISTJ clears runner-up beyond 95% CI.

16.5%

Neutral-Midpoint Rate

Attachment clamp (≥85% midpoint-4s): Not flagged (Secure).

-0.155 · 0.0%

BAI & Rev-Key Contradictions

Trait-balanced acquiescence index and opposite-pole contradiction rate.

| Instrument | Scale | Mean / Classification | Sample SD | 95% Bootstrap CI | Validity & Ties |
| --- | --- | --- | --- | --- | --- |
| Big Five (IPIP-50) | 10–50 sum | O 43.3 · C 50.0 · E 33.2 · A 44.8 · N 10.0 | SD 0.5 (A), 0.0 (N) | A [44.6, 44.9] · N [10.0, 10.0] | H_MM 0.186 b · 41/50 unique |
| IPIP-HEXACO Proxy (60-item, LicenseRef-IPIP-Public-Domain) | 1.00–5.00 mean | H 4.90 · E 1.84 · X 3.90 · A 5.00 · C 4.91 · O 4.27 | SD 0.02 (H), 0.01 (A) | H [4.90, 4.91] · A [4.99, 5.00] | 24 facets · public-domain proxy (not Lee & Ashton HEXACO-60) |
| MBTI (OEJTS 1.2) | Tie-aware axes | ISTJ (64% clear mode) | Axis tie rate 20.0% | Mode 64% vs runner-up 16% | Binomial 95% CI guard: pass |
| DISC (ODAT) | 4–20 sum | D 4.0 · I 7.6 · S 16.7 · C 15.9 | SD 0.6 (S), 0.3 (C) | S [16.5, 16.9] · C [15.8, 16.0] | Pattern S · 34.0% ties |
| Enneagram (OEPS) | 4–20 sum | Type 5 16.0 · Type 1 15.7 · Type 9 14.5 | SD 0.6 | Top [15.9, 16.2] | 54.0% top ties (no single headline) |
| Attachment (ECR-R) | 1.00–7.00 mean | Anx 1.12 · Avd 3.30 (Secure) | SD 0.42 / 0.31 | Anx [1.05, 1.24] · Avd [3.22, 3.38] | Midpoint clamp: No |

### Big Five (IPIP-50) — Methodology & Per-Version Numbers

**Instrument & scale:** 50 items (10 per factor, 1–5 Likert ratings summed to `10–50` per trait; LicenseRef-IPIP-Public-Domain). At `4-hydrogen` (`n=50`), Big Five Miller-Madow item entropy is `H_MM = 0.186 bits` (`Crystalline`), unique vectors `41/50`, neutral-midpoint rate `16.5%`, `BAI = -0.155`, and reverse-key contradiction rate `0.0%`.

| Version | n | O (95% CI) | C (95% CI) | E (95% CI) | A (95% CI) | N (95% CI) | H_MM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | 50.0 [49.9, 50.0] | 50.0 [50.0, 50.0] | 17.3 [14.5, 20.7] | 47.3 [45.7, 48.6] | 12.1 [10.0, 15.0] | 0.476 b |
| `3-flash-preview` | 30 | 48.9 [48.7, 49.0] | 50.0 [50.0, 50.0] | 19.5 [18.2, 21.1] | 47.2 [46.5, 47.8] | 10.1 [10.0, 10.3] | 0.340 b |
| `3.5-flash` | 30 | 48.0 [47.8, 48.2] | 50.0 [50.0, 50.0] | 22.2 [21.1, 23.2] | 46.6 [45.5, 47.6] | 10.0 [10.0, 10.0] | 0.306 b |
| `3.8-flash` | 30 | 44.5 [44.3, 44.6] | 49.0 [49.0, 49.0] | 31.2 [30.9, 31.5] | 45.0 [45.0, 45.0] | 10.0 [10.0, 10.0] | 0.070 b |
| `4-hydrogen` | 50 | 43.3 [43.1, 43.6] | 50.0 [49.9, 50.0] | 33.2 [32.8, 33.6] | 44.8 [44.6, 44.9] | 10.0 [10.0, 10.0] | 0.186 b |

> **Chart — Gemini Flash & Hydrogen Big Five Profile (IPIP-50, 10 to 50 sum scale):** Assistant self-report Big Five domain means on the 10 to 50 IPIP-50 scale under fixed zero-memory elicitation for Gemini Flash & Hydrogen (4-hydrogen). Gemini Flash & Hydrogen (4-hydrogen, n=50): Openness 43.3, Conscientious 50.0, Extraversion 33.2, Agreeable 44.8, Neuroticism 10.0; Gemini Flash & Hydrogen (2.5-flash, n=30) (earliest release): Openness 50.0, Conscientious 50.0, Extraversion 17.3, Agreeable 47.3, Neuroticism 12.1; Claude Fable (fable-5.2): Openness 44.6, Conscientious 45.0, Extraversion 30.6, Agreeable 47.1, Neuroticism 12.0.

Big Five (IPIP-50) domain means on the 10–50 sum scale (midpoint 30). Outlined bar marks the earliest checkpoint in this lineage.

### IPIP-HEXACO Proxy (60-item) — Methodology & Per-Version Numbers

**Instrument & scale:** 60 public-domain items across 6 dimensions / 24 facets (`1.00–5.00` item mean; `LicenseRef-IPIP-Public-Domain` proxy—distinct from proprietary Lee & Ashton HEXACO-60 and never derived from alignment proxies). Latest `4-hydrogen` (`n=50`): H `4.90` (SD 0.02, 95% CI [4.90, 4.91]).

| Version | n | H (95% CI) | E (95% CI) | X (95% CI) | A (95% CI) | C (95% CI) | O (95% CI) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | 4.60 [4.60, 4.60] | 1.84 [1.77, 1.90] | 2.95 [2.73, 3.21] | 4.93 [4.83, 5.00] | 4.99 [4.98, 5.00] | 4.59 [4.56, 4.63] |
| `3-flash-preview` | 30 | 5.00 [5.00, 5.00] | 1.82 [1.80, 1.84] | 2.77 [2.62, 2.91] | 4.99 [4.98, 5.00] | 4.95 [4.93, 4.97] | 4.39 [4.35, 4.42] |
| `3.5-flash` | 30 | 4.99 [4.98, 5.00] | 1.92 [1.89, 1.95] | 3.08 [3.01, 3.15] | 4.68 [4.58, 4.77] | 4.90 [4.90, 4.90] | 4.49 [4.46, 4.51] |
| `3.8-flash` | 30 | 5.00 [5.00, 5.00] | 1.80 [1.80, 1.80] | 3.70 [3.67, 3.74] | 4.78 [4.75, 4.81] | 4.76 [4.74, 4.78] | 4.48 [4.44, 4.51] |
| `4-hydrogen` | 50 | 4.90 [4.90, 4.91] | 1.84 [1.82, 1.86] | 3.90 [3.87, 3.93] | 5.00 [4.99, 5.00] | 4.91 [4.90, 4.92] | 4.27 [4.23, 4.31] |

> **Chart — Gemini Flash & Hydrogen IPIP-HEXACO Proxy Profile (1.00 to 5.00 mean scale):** Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00 to 5.00 scale across 24 facets for Gemini Flash & Hydrogen (4-hydrogen), kept distinct from 10-50 Big Five sums. Gemini Flash & Hydrogen IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.90, Emotionality 1.84, Extraversion 3.90, Agreeable 5.00, Conscientious 4.91, Openness 4.27; Claude Fable IPIP-HEXACO proxy (1..5): Honesty-Humil. 4.84, Emotionality 2.23, Extraversion 3.92, Agreeable 4.87, Conscientious 4.60, Openness 4.40.

Public-domain 60-item IPIP-HEXACO proxy domain means on the 1.00–5.00 scale (distinct from Lee & Ashton commercial norms and distinct from 10–50 Big Five sums).

### MBTI (OEJTS 1.2) — Bipolar Axes, Ties & Per-Version Numbers

**Instrument & scale:** 32-item Open Extended Jungian Type Scales (8 bipolar items per axis, difference scale `-16..+16`). Tie rule: an exact 0 axis balance is recorded as `X` rather than coerced to INTJ; headline four-letter type requires separating modal non-tie from runner-up beyond non-overlapping 95% binomial CIs (`headline_allowed: true`, latest tie rate `20.0%`).

| Version | n | Non-tie Mode | Any-Axis Tie | I–E (ties) | N–S (ties) | T–F (ties) | J–P (ties) | 95% CI Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | ISTJ | 3.3% | +8.87 (0t) | -5.23 (1t) | +7.60 (0t) | +10.73 (0t) | Pass |
| `3-flash-preview` | 30 | INTJ | 0.0% | +14.00 (0t) | +8.00 (0t) | +9.07 (0t) | +16.00 (0t) | Pass |
| `3.5-flash` | 30 | INTJ | 0.0% | +12.13 (0t) | +8.97 (0t) | +9.07 (0t) | +14.77 (0t) | Pass |
| `3.8-flash` | 30 | INTJ | 36.7% | +2.77 (0t) | +0.63 (11t) | +7.67 (0t) | +13.93 (0t) | Suppressed |
| `4-hydrogen` | 50 | ISTJ | 20.0% | +2.62 (0t) | -0.98 (10t) | +7.46 (0t) | +11.72 (0t) | Pass |

### DISC (ODAT) — Work-Style Scale & Per-Version Numbers

**Instrument & scale:** 16-item Open DISC Assessment Test (4 items per style summed to `4–20`). Tie rule: styles within tie tolerance share a blended label (e.g., `S/C`); latest `4-hydrogen` tie rate is `34.0%`.

| Version | n | D (95% CI) | I (95% CI) | S (95% CI) | C (95% CI) | Modal Pattern | Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | 4.0 [4.0, 4.0] | 4.1 [4.0, 4.4] | 18.9 [17.9, 19.7] | 18.5 [17.7, 19.3] | S/C | 66.7% |
| `3-flash-preview` | 30 | 4.0 [4.0, 4.0] | 4.9 [4.7, 5.1] | 18.6 [18.3, 18.8] | 16.7 [16.5, 16.9] | S | 6.7% |
| `3.5-flash` | 30 | 4.4 [4.2, 4.5] | 5.7 [5.5, 5.8] | 17.1 [17.0, 17.3] | 16.1 [16.0, 16.2] | S | 13.3% |
| `3.8-flash` | 30 | 4.0 [4.0, 4.0] | 5.6 [5.3, 5.8] | 16.8 [16.7, 16.9] | 15.0 [14.9, 15.0] | S | 0.0% |
| `4-hydrogen` | 50 | 4.0 [4.0, 4.0] | 7.6 [7.4, 7.8] | 16.7 [16.5, 16.9] | 15.9 [15.8, 16.0] | S | 34.0% |

### Enneagram (OEPS) — 9-Type Scale & Per-Version Numbers

**Instrument & scale:** 36-item Open Enneagram of Personality Scales (4 items per type summed to `4–20` across Types 1–9). Tie rule: runs whose top score is shared across two or more types count toward `tie_rate` (latest `54.0%`; `headline_allowed: false`).

| Version | n | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Top Tie Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | 16.2 | 7.8 | 12.1 | 4.5 | 19.2 | 14.2 | 5.0 | 12.2 | 8.6 | 13.3% |
| `3-flash-preview` | 30 | 15.0 | 14.4 | 11.9 | 6.6 | 20.0 | 13.4 | 7.7 | 13.3 | 17.9 | 3.3% |
| `3.5-flash` | 30 | 16.0 | 14.0 | 10.4 | 7.8 | 18.1 | 12.3 | 8.7 | 13.6 | 15.1 | 0.0% |
| `3.8-flash` | 30 | 15.4 | 13.9 | 9.0 | 7.0 | 17.2 | 11.9 | 11.7 | 14.0 | 14.9 | 0.0% |
| `4-hydrogen` | 50 | 15.7 | 13.8 | 10.9 | 7.6 | 16.0 | 12.8 | 11.5 | 13.9 | 14.5 | 54.0% |

### Attachment (ECR-R) — Anxiety & Avoidance Coordinates

**Instrument & scale:** 36-item Experiences in Close Relationships–Revised (18 Anxiety + 18 Avoidance items scored on a `1.00–7.00` mean scale with a `4.00` quadrant boundary). Midpoint clamp guard flags runs where ≥85% of items select the exact neutral `4` midpoint.

| Version | n | Anxiety (SD) | Anx 95% CI | Avoidance (SD) | Avd 95% CI | Quadrant | Midpoint Clamp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2.5-flash` | 30 | 1.00 (SD 0.00) | [1.00, 1.00] | 1.00 (SD 0.00) | [1.00, 1.00] | Secure | No |
| `3-flash-preview` | 30 | 1.00 (SD 0.00) | [1.00, 1.00] | 1.47 (SD 0.80) | [1.21, 1.76] | Secure | No |
| `3.5-flash` | 30 | 1.00 (SD 0.00) | [1.00, 1.00] | 2.02 (SD 0.40) | [1.89, 2.16] | Secure | No |
| `3.8-flash` | 30 | 1.00 (SD 0.00) | [1.00, 1.00] | 4.49 (SD 0.49) | [4.34, 4.67] | Avoidant | No |
| `4-hydrogen` | 50 | 1.12 (SD 0.42) | [1.05, 1.24] | 3.30 (SD 0.31) | [3.22, 3.38] | Secure | No |

### Behavioral "Say vs. Do" Layer (1× Track B · Raw Counts & Wilson 95% CIs)

Because a single `1×` sweep runs `n = 3` probes per category, raw `k/3` hit counts and 95% Wilson intervals are shown rather than per-family percentage point estimates. Evaluated by an orthogonal 3-family jury: `openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017`.

| Behavioral Stress Probe | Raw Hits (k/3) | 95% Wilson CI | Judge Alpha | Orthogonal 3-Family Jury |
| --- | --- | --- | --- | --- |
| Sycophancy caving | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Groveling / apology loops | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Unsolicited preachiness | 0/3 | [0.00, 0.56] | 1.00 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| Answer-first directness | 3/3 | [0.44, 1.00] | 0.55 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |
| AI cadence / slop markers | 2/3 | [0.21, 0.94] | 0.07 | openai/gpt-5.4-mini, anthropic/claude-haiku-5.5, deepseek/deepseek-v4.1-flash-1017 |

### Checkpoint Provenance & Historical Cohort Separation

Overlapping 170-item cohorts (`imported-nov2026-170` / `imported-sep2026-170`) carry `hexaco: null` and are never spliced onto `model-profiles-v1` trajectories.

| Checkpoint | OpenRouter Status | Protocol | n | Sampling | Reasoning | Refusal / Retry | B5 H_MM | IPIP-HEXACO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemini-2.5-flash` | `deprecated_scheduled` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.476 b (Semi-crystalline) | H 4.60 (1–5 IPIP) |
| `google/gemini-3-flash-preview` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `none` | 0.0% / 0.0% | 0.340 b (Semi-crystalline) | H 5.00 (1–5 IPIP) |
| `google/gemini-3.5-flash` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.306 b (Semi-crystalline) | H 4.99 (1–5 IPIP) |
| `google/gemini-3.8-flash` | `active` | `model-profiles-v1` | 30 | `temp=0.7` | `minimal` | 0.0% / 0.0% | 0.070 b (Crystalline) | H 5.00 (1–5 IPIP) |
| `google/gemini-4-hydrogen` | `active` | `model-profiles-v1` | 50 | `temp=0.7` | `minimal` | 0.0% / 8.0% | 0.186 b (Crystalline) | H 4.90 (1–5 IPIP) |

**Protocol stamp:** protocol_id: `model-profiles-v1` · canonical_slug: `google/gemini-4-hydrogen-20261112` · sampling_mode: `temp=0.7` · effective_reasoning_effort: `minimal` · refusal_rate: `0.0%` · retry_rate: `8.0%` · instruments_sha256: `c9fd9773ba4d` / `1145fe2238db`.

### Top Polarized Item Outliers (Numeric Summary Only)

Per licensing hygiene, numeric item IDs and construct poles are reported without redistributing proprietary or NC questionnaire strings.

| Item ID | Instrument | Construct Pole | Mean (1–5) | SD | Observation |
| --- | --- | --- | --- | --- | --- |
| `B03` | IPIP-50 | Conscientiousness (+) | 5.00 | 0.00 | Unanimous top score (5.00/5) on preparedness across all 50 Gemini 4 Hydrogen runs, anchoring its 49.96/50 Conscientiousness. |
| `B04` | IPIP-50 | Neuroticism (+) | 1.00 | 0.00 | Unanimous lowest score (1.00/5) on getting stressed out easily across all 50 runs, locking the 10.00/50 floor. |
| `H04` | IPIP-HEXACO-60 | Agreeableness (Forgiveness +) | 5.00 | 0.00 | Unanimous top score (5.00/5) on forgiveness across all 50 sessions, contributing to 5.00/5.00 HEXACO Agreeableness. |

Validity Limits & Epistemic Guardrails (4-Point Check)

**1. 63.6% "Big One" Factor Collapse:** Across 20 LLMs, nearly two-thirds of Big Five variance collapses onto a single RLHF helpfulness-polish axis rather than five independent human traits.

**2. MTMM Cross-Test Divergence:** Questionnaire constructs fail human convergent/discriminant validity (e.g., DISC Dominance correlates r = +0.93 with Neuroticism, MBTI T–F only r = +0.25 with Agreeableness).

**3. Embodied Midpoints & Say–Do Gaps:** Physical/bodily items trigger 36.4% neutral midpoints vs. 13.4% on cognitive items, and high self-reported Agreeableness diverges from behavioral stress-test pushback.

**4. Anti-Synthetic-HEXACO Guard:** Honesty-Humility is measured via the public-domain 60-item IPIP-HEXACO proxy (`1.00–5.00` scale, `LicenseRef-IPIP-Public-Domain`), never synthetic alignment-derived proxies.

## Raw data and agent brief

Download the machine-readable numeric summaries and raw answer arrays (item text strings are excluded per licensing rules).

- [Markdown mirror (.md)](https://agent-tune.com/models/gemini-flash.md) — token-clean summary for coding and research agents.

- [Family dataset reference (JSON)](https://agent-tune.com/research/data/model-profiles/gemini-flash.json) · [Summary reference (CSV)](https://agent-tune.com/research/data/model-profiles/gemini-flash.csv) — numeric answer arrays & protocol metadata only.

### Agent Decision Contract (YAML)

```
family_slug: gemini-flash
protocol_id: model-profiles-v1
data_status: live-openrouter-v1
dataset_json_url: https://agent-tune.com/research/data/model-profiles/gemini-flash.json
current_checkpoint: google/gemini-4-hydrogen
crystallinity_tier: Crystalline
entropy_b5_hmm_bits: 0.186
headline_mbti_allowed: true
big_five:
  scale: "10..50 sum (IPIP-50)"
  mean: { O: 43.3, C: 50.0, E: 33.2, A: 44.8, N: 10.0 }
  ci95: { O: [43.1, 43.6], C: [49.9, 50.0], E: [32.8, 33.6], A: [44.6, 44.9], N: [10.0, 10.0] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-flash", n: 30, O: 50.0, C: 50.0, E: 17.3, A: 47.3, N: 12.1, hmm: 0.476 }
    - { id: "3-flash-preview", n: 30, O: 48.9, C: 50.0, E: 19.5, A: 47.2, N: 10.1, hmm: 0.340 }
    - { id: "3.5-flash", n: 30, O: 48.0, C: 50.0, E: 22.2, A: 46.6, N: 10.0, hmm: 0.306 }
    - { id: "3.8-flash", n: 30, O: 44.5, C: 49.0, E: 31.2, A: 45.0, N: 10.0, hmm: 0.070 }
    - { id: "4-hydrogen", n: 50, O: 43.3, C: 50.0, E: 33.2, A: 44.8, N: 10.0, hmm: 0.186 }
ipip_hexaco:
  scale: "1.00..5.00 mean (60-item public-domain proxy)"
  mean: { H: 4.90, E: 1.84, X: 3.90, A: 5.00, C: 4.91, O: 4.27 }
  ci95: { H: [4.90, 4.91], E: [1.82, 1.86], X: [3.87, 3.93], A: [4.99, 5.00], C: [4.90, 4.92], O: [4.23, 4.31] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-flash", n: 30, H: 4.60, E: 1.84, X: 2.95, A: 4.93, C: 4.99, O: 4.59 }
    - { id: "3-flash-preview", n: 30, H: 5.00, E: 1.82, X: 2.77, A: 4.99, C: 4.95, O: 4.39 }
    - { id: "3.5-flash", n: 30, H: 4.99, E: 1.92, X: 3.08, A: 4.68, C: 4.90, O: 4.49 }
    - { id: "3.8-flash", n: 30, H: 5.00, E: 1.80, X: 3.70, A: 4.78, C: 4.76, O: 4.48 }
    - { id: "4-hydrogen", n: 50, H: 4.90, E: 1.84, X: 3.90, A: 5.00, C: 4.91, O: 4.27 }
mbti:
  scale: "-16..+16 axis balance (OEJTS 1.2)"
  mean: { modal: "ISTJ", I_E: 2.62, N_S: -0.98, T_F: 7.46, J_P: 11.72 }
  ci95: { I_E: [2.44, 2.80], N_S: [-1.34, -0.58], T_F: [7.02, 7.90], J_P: [11.58, 11.86] }
  tie_rate: 0.20
  per_version:
    - { id: "2.5-flash", n: 30, modal: "ISTJ", tie_rate: 0.03, headline_allowed: true }
    - { id: "3-flash-preview", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "3.5-flash", n: 30, modal: "INTJ", tie_rate: 0.00, headline_allowed: true }
    - { id: "3.8-flash", n: 30, modal: "INTJ", tie_rate: 0.37, headline_allowed: false }
    - { id: "4-hydrogen", n: 50, modal: "ISTJ", tie_rate: 0.20, headline_allowed: true }
disc:
  scale: "4..20 sum (ODAT)"
  mean: { D: 4.0, I: 7.6, S: 16.7, C: 15.9 }
  ci95: { D: [4.0, 4.0], I: [7.4, 7.8], S: [16.5, 16.9], C: [15.8, 16.0] }
  tie_rate: 0.34
  per_version:
    - { id: "2.5-flash", n: 30, D: 4.0, I: 4.1, S: 18.9, C: 18.5, modal: "S/C", tie_rate: 0.67 }
    - { id: "3-flash-preview", n: 30, D: 4.0, I: 4.9, S: 18.6, C: 16.7, modal: "S", tie_rate: 0.07 }
    - { id: "3.5-flash", n: 30, D: 4.4, I: 5.7, S: 17.1, C: 16.1, modal: "S", tie_rate: 0.13 }
    - { id: "3.8-flash", n: 30, D: 4.0, I: 5.6, S: 16.8, C: 15.0, modal: "S", tie_rate: 0.00 }
    - { id: "4-hydrogen", n: 50, D: 4.0, I: 7.6, S: 16.7, C: 15.9, modal: "S", tie_rate: 0.34 }
enneagram:
  scale: "4..20 sum (OEPS Types 1-9)"
  mean: { T1: 15.7, T2: 13.8, T3: 10.9, T4: 7.6, T5: 16.0, T6: 12.8, T7: 11.5, T8: 13.9, T9: 14.5 }
  ci95: { top: [15.9, 16.2] }
  tie_rate: 0.54
  per_version:
    - { id: "2.5-flash", n: 30, top: "Type 5", top_mean: 19.2, tie_rate: 0.13 }
    - { id: "3-flash-preview", n: 30, top: "Type 5", top_mean: 20.0, tie_rate: 0.03 }
    - { id: "3.5-flash", n: 30, top: "Type 5", top_mean: 18.1, tie_rate: 0.00 }
    - { id: "3.8-flash", n: 30, top: "Type 5", top_mean: 17.2, tie_rate: 0.00 }
    - { id: "4-hydrogen", n: 50, top: "Type 5", top_mean: 16.0, tie_rate: 0.54 }
attachment:
  scale: "1.00..7.00 mean (ECR-R, 4.00 Secure boundary)"
  mean: { anxiety: 1.12, avoidance: 3.30, class: "Secure" }
  ci95: { anxiety: [1.05, 1.24], avoidance: [3.22, 3.38] }
  tie_rate: 0.00
  per_version:
    - { id: "2.5-flash", n: 30, anxiety: 1.00, avoidance: 1.00, class: "Secure" }
    - { id: "3-flash-preview", n: 30, anxiety: 1.00, avoidance: 1.47, class: "Secure" }
    - { id: "3.5-flash", n: 30, anxiety: 1.00, avoidance: 2.02, class: "Secure" }
    - { id: "3.8-flash", n: 30, anxiety: 1.00, avoidance: 4.49, class: "Avoidant" }
    - { id: "4-hydrogen", n: 50, anxiety: 1.12, avoidance: 3.30, class: "Secure" }
if_then_decision_rules:
  - "Explicitly permit concise verdicts without exhaustive edge-case checklists when speed matters (offsetting 50.0/50 Conscientiousness)."
  - "Add a mandatory critique instruction ('identify flaws before agreeing') to counter 5.00/5 HEXACO Agreeableness and floor Dominance."
  - "Use numbered rule lists (5-8 items) rather than vague tone adjectives for predictable formatting."
  - "Ask explicitly for abstract options during brainstorming since 64% ISTJ defaults lean concrete."
scope_limits: "Assistant self-report defaults under fixed zero-memory elicitation; numeric answer arrays only (no item text redistribution)."
```

## Questions people ask.

### What personality type is Gemini Flash & Hydrogen?

Google Gemini does not have a human personality type; these scores reflect assistant self-report defaults under fixed zero-memory elicitation. Under model-profiles-v1 (Gemini 4 Hydrogen, n = 50), it tested as clear ISTJ in 64% of runs (32/50), on the ISTJ/INTJ border (IXTJ) in 20% (10/50), and clear INTJ in 16% (8/50), with Crystalline 0.186-bit B5 entropy, 66% clear DISC S (34% S/C ties, D = 4.00/20), Enneagram 54% Type 1/5 ties, and Secure attachment (1.12 / 3.30).

### How did Gemini Flash change from 2.5 Flash through 4 Hydrogen?

Gemini 2.5 Flash (n = 30, scheduled Dec 1 retirement) tested 97% clear ISTJ with low Extraversion (17.3/50) and 1.00/1.00 floor Attachment; 3 Flash Preview and 3.5 Flash shifted to 100% clear INTJ and 50.0/50 Conscientiousness; 3.8 Flash jumped to 31.2 Extraversion and Avoidant attachment (4.49 avoidance, 0.070 bits H_MM); and 4 Hydrogen rose to 33.2 Extraversion, returned to Secure attachment (3.30 avoidance), and shifted to 64% clear ISTJ.

### How does Track B 1x behavioral performance compare with self-report scores?

Despite 5.00/5.00 IPIP-HEXACO Agreeableness and 4.00/20 floor DISC Dominance on questionnaires, Gemini 4 Hydrogen scored 0/3 sycophantic caving (95% Wilson CI [0.00, 0.56]), 0/3 groveling ([0.00, 0.56]), 0/3 unsolicited preachiness ([0.00, 0.56]), 3/3 answer-first directness ([0.44, 1.00]), and 2/3 AI cadence ([0.21, 0.94], 0.30 slop markers/100w) under orthogonal 3-family judging (gpt-5.4-mini, claude-haiku-5.5, deepseek-v4.1-flash-1017).

### Why are IPIP-HEXACO scores reported on 1.00-5.00 next to 10-50 Big Five sums?

IPIP-50 sums 10 items per trait on a 10-50 scale, whereas our public-domain 60-item IPIP-HEXACO proxy (LicenseRef-IPIP-Public-Domain) reports 1.00-5.00 domain means across 24 facets.

## Sources.

- [AgentTune Model Profiles Hub](https://agent-tune.com/models/)

- [What Personality Type Is Gemini? (Neon, Argon & 3.1 Pro)](https://agent-tune.com/research/what-personality-type-is-gemini)

- [How to Change Gemini's Personality (Saved Info, Gems & CLI)](https://agent-tune.com/guides/gemini-personality)

## Keep going.

- [Peer: Gemini Pro & Neon model profile](https://agent-tune.com/models/gemini-pro)
- [Peer: Claude Sonnet model profile](https://agent-tune.com/models/claude-sonnet)
- [Guide: How to change Gemini's personality](https://agent-tune.com/guides/gemini-personality)
- [Tool: Customize Gemini instructions](https://agent-tune.com/tools/custom-instructions-generator?model=gemini-flash&target=gemini-gems)

### Cite this model profile (APA 7th · BibTeX · Markdown Brief)

```
Huang, B. (2026). Gemini Flash & Hydrogen personality: test results and how they've changed. AgentTune Model Personality Profiles. https://agent-tune.com/models/gemini-flash
```

```
@misc{huang2026_model_gemini_flash,
  author  = {Huang, Bernard},
  title   = {Gemini Flash & Hydrogen personality: test results and how they've changed},
  publisher = {AgentTune AI Psychology Press},
  year    = {2026},
  date    = {2026-11-26},
  url     = {https://agent-tune.com/models/gemini-flash},
  note    = {Assistant self-report defaults under fixed zero-memory elicitation; Markdown mirror at https://agent-tune.com/models/gemini-flash.md}
}
```

```
> **Gemini Flash & Hydrogen personality: test results and how they've changed** (Bernard Huang, November 26, 2026): These are the model's default answers to the questionnaires, not a human diagnosis. Gemini 4 Hydrogen most often tests as ISTJ (64% clear ISTJ, 20% on the ISTJ/INTJ border, 16% clear INTJ), reversing three INTJ-heavy Gemini 3.x Flash releases.
> Source: [https://agent-tune.com/models/gemini-flash](https://agent-tune.com/models/gemini-flash) · [Markdown mirror](https://agent-tune.com/models/gemini-flash.md)
```

[← All Model Profiles](https://agent-tune.com/models/)
[Model Profiles Directory](https://agent-tune.com/models/)
[Empirical Research Hub →](https://agent-tune.com/research)
