# AgentTune research and content plan

September 25, 2026. Based on the supplied September 24 collections and response-level reanalysis. Recommendations below are editorial proposals, not completed experiments or traffic forecasts.

## Publish from the existing data

| Priority | Article or guide | Reader question / search intent | Evidence and angle | Boundary |
|---|---|---|---|---|
| 1 | Why AI personality results change when you stop breaking ties | Is ChatGPT really INTJ? Why do AI personality tests tie? | Astra 29%, Sol 18%, Opus 11%, Fable 1% have at least one tied MBTI axis. Fable DISC ties in 51%. Explain how labels conceal equal scores with a small interactive scorer. | This is a deterministic scoring reanalysis, not a change in the model. |
| 2 | Opus 5.5 vs Fable 5.1: questionnaire responses compared | Opus vs Fable personality / communication style | Same questionnaire prompts and settings, all 1,000 response vectors available; show raw trait differences and per-item contributions. Link both published guides. | Different CLI builds; no performance, warmth or sycophancy ranking. |
| 3 | GPT-6 Astra vs Sol: what the self-reports actually show | Astra vs Sol personality; GPT-6 MBTI | Fully resolved MBTI patterns, dimension margins, shared high Big Five scores, attachment coordinates. | Prompt wording differs. Do not claim that differences are caused by model identity alone. |
| 4 | What “neutral” means when an AI takes a human questionnaire | Can AI take personality tests? | Astra supplies explicit inapplicability flags. Compare flagged midpoints with ordinary midpoints and identify which questions repeatedly lack an assistant analogue. | Item-level descriptive analysis is possible now; effects of alternative prompts need new runs. |
| 5 | A reproducible guide to testing AI self-descriptions | How to run AI personality tests; open AI personality dataset | Frozen item keys, offline scorer, schema, session-vs-assessment units, tie policy, source hashes and validation checks. | Do not present these human instruments as validated AI psychometrics. |
| 6 | Does a stable result mean a stable personality? | Reliability of AI personality tests | Count unique answer vectors, score variance, category stability and repeated midpoints. Explain model sampling vs construct validity. | Repeated responses cannot establish personality validity or generalize over untested contexts. |
| 7 | Grok 4.6 and the attachment cutoff | Grok personality; simulation vs repeated testing | One canonical result lies close to the cutoff; teach sensitivity analysis using the reported simulation as an explicitly unreproduced example. | Request the missing vectors, seed and harness before publishing a simulation reproduction. |
| 8 | Communication instructions you can evaluate yourself | Make Claude more direct; AI feedback prompts | Build on the published guides with a short rubric and sample tasks to compare default and tuned responses. | Instruction examples are proposed interventions; effectiveness has not been measured. |

## Research papers requiring new observations

1. **Matched cross-model elicitation.** Use the same questionnaire wording, system prompt, exposed names, order and sampling settings across models. Preregister comparisons. Archive all response vectors, retries, model IDs and timestamps. Include Muse with a fresh-session protocol. Use providers' bare APIs where possible or explicitly model product scaffolding as a separate factor.
2. **Prompt, order and effort sensitivity.** Randomize item and instrument order. Cross neutral/midpoint-adaptation instructions with multiple effort levels where available. Treat full-battery sessions as clusters and avoid counting the five scales as independent invocations.
3. **Behavioral validity.** Test whether questionnaire scores predict independently rated behaviors on disagreement, planning, uncertainty, clarification and interpersonal tone. Blind evaluators to model names. Separate accuracy from style and measure inter-rater agreement.
4. **Does tuning help users?** Compare default, chosen short instructions and personality-based tunings on real tasks. Preregister task success, accuracy, satisfaction and completion time. Do not infer these outcomes from questionnaire scores.
5. **Temporal repeatability.** Repeat a fixed protocol over dates with exact model identifiers and provider version notes. Distinguish sampling variation from product or checkpoint changes.

## Search and AI discovery

- Use the research hub as the canonical study directory. Link each model guide to the comparison and its raw data; link the comparison back to actionable guides and the generator.
- Lead each page with a direct answer, then a small labeled results table. State model version, collection date, sample unit and method next to the figures rather than hiding those details in footnotes.
- Keep original findings, not generic model descriptions, as the main content. Each follow-up should answer a different question and contribute a new analysis rather than repeat the study with a new keyword.
- The current release includes Article and Dataset structured data, downloadable JSON/CSV, protocol metadata, a reproducible scorer, canonical links, sitemap entries and llms indexes. Structured data and llms files make interpretation easier but do not guarantee rankings or citations.
- Use the existing IndexNow submission after deployment. In Google Search Console, inspect the three new article/guide URLs, confirm canonical selection and request indexing through the verified property when available. No Search Console access was established in this task.
- Evaluate after indexing: query impressions, non-branded clicks, indexed canonical URLs, links to the dataset, referrals from AI services, and a fixed set of answer-engine queries checked with dated evidence. Avoid treating a single personalized answer as a stable ranking.
- With visitor consent, the release counts quiz starts/completions and confirmed copy/download events. It never sends answers, personality labels or copied text as event parameters. Aggregate conversion counts describe opted-in traffic, not all visitors. No claim that a copy equals a successful installation.

## Recommended sequence

Publish the five-model study and the two reviewed Claude guides first. Next write the tie-policy explainer and the neutral-response analysis: both offer original, fully reproducible findings from existing data. Follow with a matched Opus/Fable comparison that adds item-level explanation, then the methods guide. Keep the more expensive causal and behavioral papers as explicitly proposed studies until new observations exist.
