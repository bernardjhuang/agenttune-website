Source: https://agent-tune.com/guides/enneagram-test-react-typescript
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer resource · runnable starter

# Build an Enneagram test in React + TypeScript.

By Bernard Huang · Updated November 11, 2026

Download enneagram-react-typescript.zip, run npm ci and npm run dev, and inspect a six-page, 36-item React + TypeScript questionnaire flow. It uses native fieldset and radio groups, validates incomplete pages, preserves all tied top scores, and keeps answers in browser memory.

## Download and run the complete app.

[Download the React + TypeScript starter ZIP](https://agent-tune.com/resources/enneagram/enneagram-react-typescript.zip). Extract it into a local development folder. Use a supported Node.js release (22.12 or newer), then run:

```
cd enneagram-react-typescript
npm ci
npm run dev
```

Open the local address printed by Vite. For a production build, run npm run build, then npm run preview to inspect it. Publish the generated dist/ folder with any static host. Serve the app over HTTP rather than opening its index file directly.

The archive includes pinned React, TypeScript and Vite dependencies plus a lockfile. There is no backend, authentication or external answer submission.

## One scorer, with a TypeScript boundary.

The app loads the canonical public/score.js file before its React entry. The TypeScript wrapper describes the result contract and calls that scorer directly rather than maintaining a second copy of the scoring algorithm.

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

The scorer requires exactly 36 integer responses from 1 to 5 in item order. It rejects missing values, sparse arrays, strings and out-of-range numbers. TypeScript enforces the UI contract at compile time, while runtime validation guards the scoring call.

## Preserve uncertainty in the result.

Each of the nine groups has four inputs and a raw score from 4 to 20. A result of 16/20 is a raw total, not an 80th percentile or an 80% probability of being that type. None of the 36 items are reverse-scored.

When two or more groups share the maximum total, the app lists every leader and leaves dominantType set to null. Answering Neutral (3) to all 36 items gives all nine groups 12 points; the result screen explicitly reports a nine-way tie and displays all nine totals instead of picking Type 1 by array order.

This matters in empirical testing: in our September 2026 AI archive, Opus 5.5 had 65 tied Enneagram administrations out of 100 and Fable 5.1 had 44. Forcing a single winner hides real ties.

## Make the questionnaire usable with a keyboard.

Each item is rendered as the <legend> of a native <fieldset>, and each response option is a labeled radio button. Keyboard users can tab between groups and arrow through options using standard browser controls. The starter displays six items per page and preserves selections when navigating back.

Submitting an incomplete page identifies the first unanswered item and moves focus to its first radio control. Advancing to the next page or the results view moves focus to the new section heading. Validation messages use an alert region, and the score table uses semantic row and column headers.

## Know which files to customize.

- src/App.tsx controls six-page pagination, radio state, validation and the result view.
- src/styles.css controls layout, color contrast and focus rings.
- src/questions.json holds the 36 synthetic demo inputs and group mapping.
- src/scorer.ts declares the TypeScript types and calls the global scorer.
- public/score.js provides the dependency-free scoring implementation.

If you replace the synthetic demo controls in src/questions.json with a licensed questionnaire, verify the instrument’s redistribution terms and bump the version identifier so scores from different instruments are never mixed.

## Questions people ask.

Does the starter ZIP include OEPS question text?

No. The starter ships with 36 original synthetic controls in src/questions.json so you can test pagination, validation, and tie rendering under the MIT license. Verify instrument rights before adding third-party questionnaire wording.

Where can I take the full interactive Enneagram test?

Take the 36-item Enneagram questionnaire directly in your browser at /tests/enneagram, or choose communication preferences without a test in the generator.

## What changed.

- September 26, 2026 Documented the React + TypeScript architecture, keyboard accessibility, and synthetic demo inputs.

## Sources.

- [AgentTune: standalone JavaScript Enneagram scorer and API contract](https://agent-tune.com/guides/open-source-enneagram-test)

- [React documentation: using TypeScript](https://react.dev/learn/typescript)

- [Vite documentation: getting started](https://vite.dev/guide/)

- [OpenPsychometrics: OEPS development](https://openpsychometrics.org/tests/OEPS/development/)

- [September 2026 research: tied Enneagram results across AI models](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

- [Free browser tool: Try the Enneagram scoring playground](https://agent-tune.com/tools/enneagram-scoring-playground)
- [Developer resource: Use the standalone JavaScript scorer](https://agent-tune.com/guides/open-source-enneagram-test)
- [Research: Reproduce the raw questionnaire results](https://agent-tune.com/guides/reproduce-ai-personality-research)
- [Prompt library: Enneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
