Source: https://agent-tune.com/guides/enneagram-test-react-typescript
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Developer resource · runnable starter

# Build an Enneagram test in React + TypeScript

        By Bernard Huang · Updated September 25, 2026

        The downloadable app uses 36 questions, four per type, and returns all types tied for the highest score. It includes six-page navigation, native radio groups, explicit validation, keyboard focus management and a result table. Answers stay in browser memory.

## Download and run the complete app

        [Download the React + TypeScript starter ZIP](https://agent-tune.com/resources/enneagram/enneagram-react-typescript.zip). Extract it into a local development folder. Use a supported Node.js release satisfying 22.12 or newer, then run:

```
cd enneagram-react-typescript
npm ci
npm run dev
```

Open the local address printed by Vite. For a production build, run npm run build, then npm run preview to inspect it. Publish the generated dist/ folder with a static host. Serve the app over HTTP rather than opening its index file directly.

The archive includes pinned React, TypeScript and Vite dependencies plus a lockfile. There is no backend, authentication or answer submission. Installation fetches development packages; using the questionnaire does not send answers to AgentTune.

## One scorer, with a TypeScript boundary

        The app loads the unchanged canonical public/score.js file before its React entry. The TypeScript wrapper describes the result and calls that scorer; it does not maintain a second copy of the scoring algorithm.

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

The scorer requires exactly 36 integer responses from 1 to 5, in the supplied item order. It rejects missing values, sparse arrays, strings and out-of-range numbers. TypeScript helps the UI use the contract, while the runtime checks protect the actual scoring call.

## Preserve uncertainty in the result

        Each type has four questions and a raw score from 4 to 20. A result of 16/20 is a raw questionnaire total, not an 80th percentile or an 80% probability of being that type. The questions are not reverse-scored.

When two or more types share the maximum, the app lists every leader and leaves dominantType null. Answering Neutral to all 36 items gives all nine types 12 points. The result screen explicitly calls that a tie and displays all nine totals. It does not choose the first key or infer a wing.

This choice matters in the AI archive: Opus has 65 tied Enneagram administrations out of 100, and Fable has 44. A single winner would conceal information in many of those records. The starter is also a self-reflection aid, not a diagnosis or a validated personality measure for an AI.

## Make the questionnaire usable with a keyboard

        Each statement is the legend of a native fieldset. Each response has a visible label and a radio button, so keyboard users can move through groups and change options with standard controls. The app shows six questions per page and preserves answers when moving back.

Submitting an incomplete page identifies the first missing question and moves focus to its first radio. Moving to another page or the result focuses the new section heading. Error messages use an alert region; result tables use row and column headers. These behaviors are included in the source and should be retained when restyling.

The app intentionally keeps answers only in component state. Reloading starts over. If you add persistent profiles or a server, explain the changed data handling and design the storage separately.

## Know which files to change

- src/App.tsx controls pagination, selection, validation and results.
- src/styles.css controls layout, contrast and focus indicators.
- src/questions.json contains the frozen items, type keys and provenance.
- src/scorer.ts describes and calls the canonical scorer.
- public/score.js contains the scoring implementation.

If you reorder questions, update the scorer’s mapping as well. Its current contract groups four consecutive items per type. Changing wording or item count creates a different instrument and should receive a new version, rather than silently retaining the existing score label.

## Questionnaire provenance and reuse

        The code is MIT licensed. That license does not relicense third-party question text. The included metadata points to the Open-Source Enneagram of Personality Scales development material. Its current live test has 54 items; this frozen AgentTune implementation has 36, so their keys and totals are not interchangeable. Review upstream rights for your intended use.

Before publishing an adaptation, test a blank page, keyboard navigation, back navigation, an all-neutral result, a unique winner and resetting the form. Keep ties visible. For the standalone JavaScript scorer and its complete item contract, see the [Enneagram developer resource](https://agent-tune.com/guides/open-source-enneagram-test).

## Sources.

- [AgentTune: canonical scorer, questions and provenance](https://agent-tune.com/guides/open-source-enneagram-test)

- [React: using TypeScript](https://react.dev/learn/typescript)

- [Vite: getting started](https://vite.dev/guide/)

- [OpenPsychometrics: OEPS development](https://openpsychometrics.org/tests/OEPS/development/)

- [September research: tied Enneagram results](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

          [Free browser toolTry the Enneagram scoring playground](https://agent-tune.com/tools/enneagram-scoring-playground)
          [Developer resourceUse the standalone JavaScript scorer](https://agent-tune.com/guides/open-source-enneagram-test)
          [ResearchReproduce the raw questionnaire results](https://agent-tune.com/guides/reproduce-ai-personality-research)
          [Prompt libraryEnneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
