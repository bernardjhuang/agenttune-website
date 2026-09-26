Source: https://agent-tune.com/guides/reproduce-ai-personality-research
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer guide · reproducibility

# How to reproduce AgentTune’s AI self-report research

        By Bernard Huang · Updated September 25, 2026

        Download the five core files into one directory, run the two Node scripts, and compare their output with the published JSON. This reproduces the scoring of supplied answers; it does not reproduce the original model generations.

## Download a self-contained scoring folder

        Save these files together without renaming them: [responses](https://agent-tune.com/research/data/september-2026-responses.json), [instruments](https://agent-tune.com/research/data/september-2026-instruments.json), [original scorer](https://agent-tune.com/research/data/september-2026-score.cjs), [extended analysis](https://agent-tune.com/research/data/content-analysis.cjs), and [protocols](https://agent-tune.com/research/data/september-2026-protocols.json). Node.js runs the CommonJS scripts with no npm dependencies.

```
node september-2026-score.cjs > my-summary.json
node content-analysis.cjs > my-analysis.json
```

Compare the parsed JSON with the published [summary](https://agent-tune.com/research/data/september-2026-summary.json) and [extended results](https://agent-tune.com/research/data/content-analysis.json). Object-key order is not a research difference. Numeric values should agree; the scripts retain unrounded numbers while article tables round for display.

## Understand what one row represents

        A raw record contains model, administration, test and an ordered answers array. Some records also include inapplicable_items, using one-based item numbers. The answer arrays use the item order in the frozen instrument file.

The full archive has 2,003 records: 2,000 fresh-session assessments from four models, plus three canonical Grok answer vectors. The extended analysis filters to the four fresh cohorts. Muse has a supplied aggregate report, but no raw vectors in this dataset.

Astra and Sol each use 100 five-test sessions. Opus and Fable each use 500 one-test sessions. Across instruments, a Claude administration number is not a shared session identifier. Keep that distinction if you compute correlations or resample records.

## Check the scoring contract

| Instrument | Items / response range | Published score |

| MBTI | 32 / 1–5 | Four signed margins; original label and X for ties |

| Big Five | 50 / 1–5 | Five raw totals, 10–50; 18 frozen reverse items |

| DISC | 16 / 1–5 | Four totals, 4–20; all top ties retained |

| Enneagram | 36 / 1–5 | Nine totals, 4–20; all top ties retained |

| Attachment | 36 / 1–7 | Two means, 1–7; low side includes 4 |

The instruments are specific implementations, not interchangeable with every questionnaire that uses the same framework name. The frozen Big Five key reverses 18 items. Enneagram legacy labels include a wing heuristic, while the developer resource deliberately returns tied leaders without claiming a validated wing result.

## Verify provenance before changing a file

        The protocol file records source-report hashes and collection details. These identify the supplied artifacts; they are not cryptographic proof that every described model session occurred as claimed. Preserve the original files and create a separate derived output for corrections or alternate scoring.

In the website repository, node tools/build-content-analysis.js regenerates the JSON and CSV derivatives. The checks verify cohort sizes, distribution totals, tie counts, neutral flags and the reconciliation of item contributions with aggregate score differences.

## Make a result table others can interpret

        Every table should name its model cohort, instrument version, denominator, units, tie policy and rounding. Distinguish an assessment from a session and a simulated draw from a fresh response. Report missing or malformed runs explicitly rather than hiding them in a smaller denominator.

A statement such as “100 of 100 scored Secure under this attachment key” is reproducible. “This model has secure attachment” introduces a psychological claim the scoring code cannot validate. Similarly, a reported self-description score does not establish improved task accuracy or the effectiveness of a tuning.

## Design an extension that can answer a new question

        Freeze the prompt and analysis plan before collecting new responses. Record exact model IDs, client versions, effort and sampling settings, context and tool access. Save raw outputs before parsing. Track retries as separate attempts and explain any exclusion policy.

For a comparison, change the factor you intend to study while holding others steady. For a claim about usefulness, add tasks with external correctness criteria and blinded ratings. Start with the [prompt-comparison test kit](https://agent-tune.com/guides/personality-prompts-vs-plain-english) if your question is whether a personality label adds anything beyond explicit behavioral preferences.

## Sources.

- [September 2026 study: protocols and limitations](https://agent-tune.com/research/ai-personality-five-models-2026)

- [Frozen raw answers (JSON)](https://agent-tune.com/research/data/september-2026-responses.json)

- [Frozen questionnaire items and keys](https://agent-tune.com/research/data/september-2026-instruments.json)

- [Reanalysis code (CommonJS)](https://agent-tune.com/research/data/content-analysis.cjs)

- [Complete derived results (JSON)](https://agent-tune.com/research/data/content-analysis.json)

## Keep going.

          [Continue readingRead the original study](https://agent-tune.com/research/ai-personality-five-models-2026)
          [Continue readingInterpret repeated answers](https://agent-tune.com/research/ai-personality-repeatability)
