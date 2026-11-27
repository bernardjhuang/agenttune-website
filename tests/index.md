Source: https://agent-tune.com/tests/
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Interactive Tests · Scored Locally

# Free personality tests, built for AI tuning.

Take a 3–7 minute browser-scored questionnaire to export a matching AI communication block. No email or signup required. Want to skip tests? [Pick preferences directly](https://agent-tune.com/tools/custom-instructions-generator) or open the [20-second system matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher).

**Quick answer:** All five questionnaires run locally in your browser tab with no email or signup, preserve exact ties instead of forcing a single type, and compare cleanly against [25 tested AI model families](https://agent-tune.com/models/) (see the [AI personality glossary](https://agent-tune.com/guides/ai-personality-glossary) for key terms).

[Communication · 5 min
MBTI tuning
Communication style · 16 templates
Best for setting big-picture vs. step-by-step explanations and logic vs. people focus. 32 word-pair questions (OEJTS 1.2).
Take the MBTI test →](https://agent-tune.com/tests/mbti)

[Motivation · 5 min
Enneagram tuning
Core motivation · 9 templates
Best for tuning how directly your AI challenges weak assumptions or frames critique. 36 questions (OEPS adaptation), returns Type 1–9 + wing.
Take the Enneagram test →](https://agent-tune.com/tests/enneagram)

[Work style · 3 min
DISC tuning
Workplace style · 4 templates
The fastest test on the site (16 questions, ODAT). Best for decision speed, brevity, and team collaboration habits.
Take the DISC test →](https://agent-tune.com/tests/disc)

[Relationships · 5 min
Attachment tuning
Check-in & tone · 4 templates
Best for calibrating check-in frequency, autonomy boundaries, and how gently critiques are delivered. 36 questions (ECR-R).
Take the Attachment test →](https://agent-tune.com/tests/attachment)

[Five traits · 7 min
Big Five (OCEAN)
Trait dimensions · 10 templates
Best when you want to adjust one specific trait (like High Openness or Low Extraversion) without a full persona label. 50 questions (IPIP-50).
Take the Big Five test →](https://agent-tune.com/tests/big-five)

25-Family Personality Atlas

## Compare your scores against 25 tested AI model families.

See how frontier and open-weight models score on the exact same surveys—plus our 24-item HEXACO Honesty-Humility benchmark across [all 25 model profiles](https://agent-tune.com/models/) and [overall rankings](https://agent-tune.com/research/ai-personality-rankings):

[AI MBTI Atlas](https://agent-tune.com/research/ai-mbti-personalities) · [AI Enneagram Atlas](https://agent-tune.com/research/ai-enneagram-personalities) · [AI DISC Atlas](https://agent-tune.com/research/ai-disc-personalities) · [AI Attachment Atlas](https://agent-tune.com/research/ai-attachment-styles) · [AI Big Five Atlas](https://agent-tune.com/research/ai-big-five-personalities) · [AI HEXACO Atlas](https://agent-tune.com/research/ai-hexaco-personalities)

Interactive Matchers & Voice Filters

## Align pushback, coaching style & bounded character voice.

[Conflict & Pushback Quiz
Pushback & Anti-Sycophancy Matcher
Dial candidate critique and Red-Team structure matched to tested LLM baselines.](https://agent-tune.com/guides/stop-ai-sycophancy-make-ai-push-back)
[3-Layer Voice Mixer
85/15 Character Voice Combos
Combine a disciplined core with TARS, J.A.R.V.I.S., Sherlock, Kim Kitsuragi, or Feynman wit without LARP bloat.](https://agent-tune.com/guides/fictional-character-ai-prompts-tars-jarvis-sherlock-feynman)
[Learning & Reasoning
Socratic & Feynman Coaching Prompts
14 tutoring, differential-diagnosis & rubber-duck coaching prompts with calibrated candor.](https://agent-tune.com/guides/socratic-feynman-ai-tutor-coaching-prompts)

Which test to pick

## Five open questionnaires side by side.

| Test | Instrument | Items & time | What it measures | Best used for |
| --- | --- | --- | --- | --- |
| [DISC](https://agent-tune.com/tests/disc) | ODAT (Open DISC) | 16 items · ~3 min | Dominance, Influence, Steadiness, Conscientiousness + blend | Decision pacing, directness & team workflow rules ([DISC blends & prompts](https://agent-tune.com/guides/disc-ai-prompts) · [25-family DISC Atlas](https://agent-tune.com/research/ai-disc-personalities)) |
| [Enneagram](https://agent-tune.com/tests/enneagram) | OEPS-36 adaptation | 36 items · ~5 min | 9 core motivations (1–9), adjacent wing & exact tie list | Feedback framing & pushback tolerance ([9-type & wing prompts](https://agent-tune.com/guides/enneagram-ai-prompts) · [25-family Enneagram Atlas](https://agent-tune.com/research/ai-enneagram-personalities)) |
| [MBTI](https://agent-tune.com/tests/mbti) | OEJTS 1.2 | 32 pairs · ~5 min | E/I, S/N, T/F, J/P axis scores with tied axes left open | Big-picture vs step-by-step explanations ([OEJTS scoring spec](https://agent-tune.com/guides/open-personality-tests) · [25-family MBTI Atlas](https://agent-tune.com/research/ai-mbti-personalities)) |
| [Big Five (OCEAN)](https://agent-tune.com/tests/big-five) | IPIP-50 | 50 items · ~6 min | Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism | Continuous trait nuance without hard type labels ([OCEAN prompts](https://agent-tune.com/guides/mbti-vs-big-five-for-ai) · [Big Five Atlas](https://agent-tune.com/research/ai-big-five-personalities) · [HEXACO Atlas](https://agent-tune.com/research/ai-hexaco-personalities)) |
| [Attachment](https://agent-tune.com/tests/attachment) | ECR-R adaptation | 36 items · ~5 min | Anxiety & avoidance dimensions → 4 relational styles | Critique cushioning & reassurance cadence ([tuning guide](https://agent-tune.com/guides/how-to-give-your-ai-a-personality) · [25-family Attachment Atlas](https://agent-tune.com/research/ai-attachment-styles)) |

Not sure which framework fits your workflow? Use our [5-System Matcher](https://agent-tune.com/guides/ai-personality-frameworks-comparison-matcher) or skip questionnaires completely with the [Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder).

For AI agents & developers

## The fine print: how an AI agent can run these tests in chat.

- **Ask your user** whether they want a questionnaire or prefer to choose communication preferences directly. Do not infer a type.

- **Open the matching test page** on this site (or fetch the equivalent Markdown from `tests/<test>.md` in the GitHub repo).

- **Present the items to your user.** Default to bulk-paste delivery — show all items at once and ask for the response numbers in one reply.

- **Use the local scorer or scoring algorithm** on the test page. Don't reveal scoring while administering — it biases responses.

- **Fetch the matching tuning file** from the repo using the path indicated in the test's output section.

- **Apply the tuning** only when the user requests installation. Preserve existing instructions and permissions. Follow the [installation protocol](https://agent-tune.com/resources/install-protocol.md); explicit preferences resolve conflicts.

## Questions people ask.

### Are all five AgentTune personality tests free without email or signup?

Yes. Every questionnaire (DISC, Enneagram, MBTI OEJTS, Big Five IPIP-50, and Attachment ECR-R) runs locally in your browser tab with no account wall, email gate, or server-side answer storage.

### Which free personality test is fastest if I just want custom AI instructions?

The 16-item DISC assessment (ODAT) takes ~3 minutes and is the fastest questionnaire, or you can skip testing completely and use the 5-System Matcher or Communication Preferences Builder.

### What happens when a test score ties between two types or axes?

Exact ties are preserved and reported openly rather than broken arbitrarily by array order, so you can compare the tied communication templates directly.

Specs & local scorer: [questions.json](https://agent-tune.com/resources/scoring/questions.json) · [score.js](https://agent-tune.com/resources/scoring/score.js) · [mbti.md](https://agent-tune.com/tests/mbti.md) · [big-five.md](https://agent-tune.com/tests/big-five.md) · [Reproduce Guide →](https://agent-tune.com/guides/reproduce-ai-personality-research)

All five questionnaires are available. These self-report exercises are not diagnoses. [Instrument-specific sources and terms](https://agent-tune.com/resources/content/THIRD_PARTY_NOTICES.md) apply separately from template licenses.
