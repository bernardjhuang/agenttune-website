Source: https://agent-tune.com/guides/open-source-enneagram-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Resources

# Open-source Enneagram scorer and 9-type calculator.

By Bernard Huang · Updated September 26, 2026

Download score.js and questions.json. Pass 36 integers from 1 to 5 in item order to score(). It returns nine raw totals (4 to 20) and all tied leaders without forcing an arbitrary winner. The code and synthetic demo inputs are MIT licensed; the live 36-item questionnaire at /tests/enneagram carries separate upstream item terms.

## Download the developer files.

The scorer has no dependencies and supports Node CommonJS and a browser script tag. Download the files to a directory you choose.

| File | Contents |
| --- | --- |
| [score.js](https://agent-tune.com/resources/enneagram/score.js) | Input validation, all nine group totals and explicit ties. MIT code. |
| [questions.json](https://agent-tune.com/resources/enneagram/questions.json) | 36 synthetic demo inputs, type keys (4 per type) and scale metadata. |
| [README.md](https://agent-tune.com/resources/enneagram/README.md) | Integration examples and the input/output contract. |
| [LICENSE-code.txt](https://agent-tune.com/resources/enneagram/LICENSE-code.txt) | MIT license for the JavaScript implementation and synthetic inputs. |

[Open the interactive scoring playground](https://agent-tune.com/tools/enneagram-scoring-playground) · [View the 36-item questionnaire specification](https://agent-tune.com/tests/enneagram.md) · [Take the interactive Enneagram test](https://agent-tune.com/tests/enneagram).

## Try the scorer in your browser.

Edit the example array or load a preset. This demo parses and scores the numbers locally; it does not send or store your answers. General site analytics are subject to your consent and do not receive this form’s values.

Answers in item order (JSON array)Exactly 36 whole numbers from 1 to 5. The examples are synthetic, not participant data.

[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]Score answersAll neutralType 5 exampleTypes 1 + 5 tie

```

```

Enable JavaScript to try the demo, or download the scorer and run it in Node. All documentation remains readable below.

## Use the scorer in Node or a browser.

Save score.js, then run this from the same directory in a CommonJS script or the Node console:

```markdown
const { score } = require(&#x27;./score.js&#x27;);
const answers = Array(36).fill(3);
answers.fill(5, 16, 20); // example: type 5 items, IDs 17–20
console.log(score(answers));
// leaders: [5], dominantType: 5, topScore: 20
```

For a project with "type": "module", save the file as score.cjs and import its CommonJS default. In a browser, load the file before calling its global:

```markdown
<script src="./score.js"></script>
<script>
  const result = AgentTuneEnneagram.score(Array(36).fill(3));
  console.log(result.leaders); // all nine types tie
</script>
```

If you randomize display order, store the response against its item ID and reconstruct IDs 1–36 before calling score. The scorer accepts a plain 36-element array, not an object keyed by question text.

## The scoring contract.

Each type has four items scored from 1 to 5. Sum the four responses; there are no reversed items in this nine-group structure. A type total ranges from 4 to 20.

| Output | Meaning |
| --- | --- |
| version | agenttune-enneagram-36-v1: identifies the 36-input nine-group rules. |
| scores | Raw totals keyed by type number 1–9. |
| topScore | The greatest of the nine raw totals. |
| leaders | Every type that shares the highest total, in ascending numeric order. |
| tied | True when more than one type shares the highest total. |
| dominantType | The unique leader, or null for a tie. |

The scorer rejects incomplete arrays, sparse arrays, strings, fractions and values outside 1–5. Do not turn a skipped answer into a neutral response. A score is not a probability, percentile or confidence estimate. This module does not calculate wings; the second-highest type is not automatically a wing.

## Why equal scores stay equal.

All-neutral answers give each type 12 points. Assigning Type 1 because it appears first in key order would manufacture a result. Show all nine totals and let the user inspect the tied types instead.

This also matters in our [model questionnaire study](https://agent-tune.com/research/ai-personality-five-models-2026): 65 of 100 Opus 5.5 Enneagram assessments and 44 of 100 Fable 5.1 assessments had tied top scores. Those are exploratory model self-reports, not validation of the questionnaire for AI. The downloadable scorer is verified against every saved Enneagram answer vector in that dataset.

## Provenance, scope and licensing.

The developer bundle in /resources/enneagram/ provides MIT-licensed JavaScript arithmetic and 36 synthetic demo controls for testing form state and tie handling. The separate interactive questionnaire at [/tests/enneagram](https://agent-tune.com/tests/enneagram) and versioned definitions in [/resources/scoring/questions.json](https://agent-tune.com/resources/scoring/questions.json) use AgentTune’s 36-item adaptation of material attributed to the Open-Source Psychometrics Project’s OEPS (whose live upstream instrument has 54 items).

The MIT code license applies to the original JavaScript implementation and synthetic inputs; it does not relicense third-party questionnaire wording. Review [instrument-rights.json](https://agent-tune.com/resources/content/instrument-rights.json) and [the historical provenance record](https://agent-tune.com/research/data/rights-migration.json) before redistributing questionnaire text.

## Questions people ask.

Does the developer bundle include OEPS question wording?

The /resources/enneagram/questions.json file uses synthetic demo labels for software testing. The live 36-item questionnaire is available at /tests/enneagram and /tests/enneagram.md under its upstream source terms.

How does the scorer handle ties and wings?

When two or more types share the highest 4–20 total, leaders lists every tied type, tied is true, and dominantType is null. No wing is inferred automatically.

Can I use this scorer in commercial or open-source projects?

Yes. The JavaScript scorer (score.js) and synthetic inputs are MIT licensed. If you supply third-party questionnaire items, verify their separate reuse terms.

## What changed.

- September 26, 2026 Clarified the boundary between MIT-licensed synthetic developer inputs and upstream questionnaire terms.

## Sources.

- [Open-Source Psychometrics Project: OEPS live test (54 items)](https://openpsychometrics.org/tests/OEPS/)

- [Eric Jorgenson: development of the OEPS](https://openpsychometrics.org/tests/OEPS/development/)

- [AgentTune: versioned response data and methods](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Starter app: Build an Enneagram test in React + TypeScript](https://agent-tune.com/guides/enneagram-test-react-typescript)
- [Try it: Take the 36-item Enneagram test](https://agent-tune.com/tests/enneagram)
- [Apply it: Enneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
- [Research: Why ties matter in model reports](https://agent-tune.com/research/ai-personality-five-models-2026)
