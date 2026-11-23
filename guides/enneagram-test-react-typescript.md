Source: https://agent-tune.com/guides/enneagram-test-react-typescript
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer resource · runnable starter & JS scorer

# Open-source Enneagram test & scorer (React + TypeScript + JS).

By Bernard Huang · Updated November 20, 2026

Download the zero-dependency MIT JavaScript scorer (score.js), try the live 36-item scoring demo, or run the complete Vite + React + TypeScript starter app.

**Quick answer:** Download score.js and questions.json for a standalone Node or browser scorer, or download enneagram-react-typescript.zip (npm ci && npm run dev) for a 6-page React + TypeScript Enneagram UI. Pass 36 integers (1–5) to score() to return nine raw totals (4–20) and all tied leaders without forcing an arbitrary winner. The code and synthetic demo inputs are MIT-licensed; the live 36-item test at /tests/enneagram carries separate OEPS upstream item terms.

## Download the standalone JS scorer or full React + TypeScript starter.

Pick either the full React + TypeScript starter ZIP or the dependency-free CommonJS/browser files:

| Download | What it includes |
| --- | --- |
| [enneagram-react-typescript.zip](https://agent-tune.com/resources/enneagram/enneagram-react-typescript.zip) | Full Vite + React + TypeScript starter with accessible fieldsets, validation, lockfile, and public/score.js. |
| [score.js](https://agent-tune.com/resources/enneagram/score.js) | Zero-dependency MIT JavaScript scorer for Node and browsers: strict input validation, 9 totals (4–20), and explicit tie reporting. |
| [questions.json](https://agent-tune.com/resources/enneagram/questions.json) | 36 synthetic demo inputs, type keys (4 per type), and scale metadata. |
| [README.md](https://agent-tune.com/resources/enneagram/README.md) &amp; [LICENSE-code.txt](https://agent-tune.com/resources/enneagram/LICENSE-code.txt) | Integration examples, API contract, and MIT license boundary. |

To run the React starter locally with Node.js 22.12+, extract the archive and run:

```
cd enneagram-react-typescript
npm ci
npm run dev
```

Serve the built `dist/` folder over HTTP (never open the raw HTML file over `file://`). Want to take the live 36-question OEPS test without code? Visit [/tests/enneagram](https://agent-tune.com/tests/enneagram).

## Try the JavaScript scorer live in your browser.

Edit the 36-item array or load a preset below. This widget parses and scores numbers locally using `score.js` without sending or storing answers.

**Answers in item order (JSON array)**Exactly 36 whole numbers from 1 to 5. Examples are synthetic test inputs.

[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]Score answersAll neutralType 5 exampleTypes 1 + 5 tie

```

```

Enable JavaScript to test the live scoring widget, or download `score.js` to run in Node.

## Use the scorer in Node or a browser (with a TypeScript boundary).

In Node CommonJS, load `score.js` directly:

```markdown
const { score } = require('./score.js');
const answers = Array(36).fill(3);
answers.fill(5, 16, 20); // Type 5 items (indices 16-19)
console.log(score(answers));
// leaders: [5], dominantType: 5, topScore: 20
```

In the React + TypeScript starter, `public/score.js` loads once and `src/scorer.ts` wraps the single canonical implementation:

```
interface Score {
  version: string;
  scores: Record<string, number>;
  topScore: number;
  leaders: number[];
  tied: boolean;
  dominantType: number | null;
}
```

| Field | Contract |
| --- | --- |
| version | agenttune-enneagram-36-v1 identifying the 36-input 9-group contract. |
| scores | Raw integer totals (4–20) keyed by Enneagram type 1–9 (no reversed items). |
| topScore | Highest raw integer total across the nine groups. |
| leaders | Sorted array of every type sharing topScore. |
| tied | true whenever two or more types share topScore. |
| dominantType | Unique leader integer 1–9, or null when tied. |

The scorer rejects incomplete or sparse arrays, strings, fractions, and values outside 1–5 so missing responses never coerce silently to neutral.

## Preserve uncertainty in the result.

Each of the nine groups has four inputs and a raw score from 4 to 20. A result of 16/20 is a raw total, not an 80th percentile or an 80% probability of being that type. None of the 36 items are reverse-scored.

When two or more groups share the maximum total, the app lists every leader and leaves `dominantType` set to `null`. Answering Neutral (3) to all 36 items gives all nine groups 12 points; the result screen explicitly reports a nine-way tie and displays all nine totals instead of picking Type 1 by array order.

This matters in empirical testing: in our September 2026 AI archive, Opus 5.5 had 65 tied Enneagram administrations out of 100 and Fable 5.1 had 44. Forcing a single winner hides real ties.

## Make the questionnaire usable with a keyboard.

Each item is rendered as the `` of a native ``, and each response option is a labeled radio button. Keyboard users can tab between groups and arrow through options using standard browser controls. The starter displays six items per page and preserves selections when navigating back.

Submitting an incomplete page identifies the first unanswered item and moves focus to its first radio control. Advancing to the next page or the results view moves focus to the new section heading. Validation messages use an alert region, and the score table uses semantic row and column headers.

## Know which files to customize.

- `src/App.tsx` controls six-page pagination, radio state, validation and the result view.
- `src/styles.css` controls layout, color contrast and focus rings.
- `src/questions.json` holds the 36 synthetic demo inputs and group mapping.
- `src/scorer.ts` declares the TypeScript types and calls the global scorer.
- `public/score.js` provides the dependency-free scoring implementation.

If you replace the synthetic demo controls in `src/questions.json` with a licensed questionnaire, verify the instrument’s redistribution terms and bump the version identifier so scores from different instruments are never mixed.

## Provenance, scope and licensing.

The developer bundle in `/resources/enneagram/` provides MIT-licensed JavaScript arithmetic and 36 synthetic demo controls for testing form state and tie handling. The separate interactive questionnaire at [/tests/enneagram](https://agent-tune.com/tests/enneagram) and versioned definitions in [/resources/scoring/questions.json](https://agent-tune.com/resources/scoring/questions.json) use AgentTune’s 36-item adaptation of material attributed to the Open-Source Psychometrics Project’s OEPS (whose live upstream instrument has 54 items).

The MIT code license applies to the original JavaScript implementation and synthetic inputs; it does not relicense third-party questionnaire wording. Review [instrument-rights.json](https://agent-tune.com/resources/content/instrument-rights.json) and [the historical provenance record](https://agent-tune.com/research/data/rights-migration.json) before redistributing questionnaire text.

## Questions people ask.

### Does the starter ZIP include OEPS question text?

No. The starter ships with 36 original synthetic controls in src/questions.json so you can test pagination, validation, and tie rendering under the MIT license. Verify instrument rights before adding third-party questionnaire wording.

### Where can I take the full interactive Enneagram test?

Take the 36-item Enneagram questionnaire directly in your browser at /tests/enneagram, or choose communication preferences without a test in the generator.

## What changed.

- November 16, 2026 Consolidated the standalone JS scorer download table, Node/browser code examples, scoring contract, and live browser scorer widget into this page.

- September 26, 2026 Documented the React + TypeScript architecture, keyboard accessibility, and synthetic demo inputs.

## Sources.

- [AgentTune Interactive 36-Item Enneagram Test (/tests/enneagram)](https://agent-tune.com/tests/enneagram)

- [React documentation: using TypeScript](https://react.dev/learn/typescript)

- [Vite documentation: getting started](https://vite.dev/guide/)

- [OpenPsychometrics: OEPS development](https://openpsychometrics.org/tests/OEPS/development/)

- [September 2026 research: tied Enneagram results across AI models](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Free browser tool: Try the Enneagram scoring playground](https://agent-tune.com/tools/enneagram-scoring-playground)
- [Interactive test: Take the free 36-item Enneagram test (no email)](https://agent-tune.com/tests/enneagram)
- [9-type guide: Enneagram AI prompts for all 9 types, wings & ties](https://agent-tune.com/guides/enneagram-ai-prompts)
- [Research: Reproduce the raw questionnaire results](https://agent-tune.com/guides/reproduce-ai-personality-research)
- [Prompt library: Enneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
