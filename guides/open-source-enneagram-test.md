Source: https://agent-tune.com/guides/open-source-enneagram-test
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

Guide · Resources

# Build the interface. Verify the instrument.

        By Bernard Huang · Updated September 26, 2026

        Download the synthetic starter to test form state, strict numeric input and tied scores. AgentTune’s OEPS-derived questionnaire is currently excluded while its exact reuse terms are verified. The MIT code license does not grant rights to third-party test items.

## Try the software example

        [Open the scoring demo](https://agent-tune.com/tools/enneagram-scoring-playground) or [download the React + TypeScript starter](https://agent-tune.com/resources/enneagram/enneagram-react-typescript.zip). It includes 36 synthetic controls in nine groups. The values test the interface and arithmetic; they measure no personality traits.

Run npm ci, then npm run dev. Use npm run build for the production build. Responses stay in page memory.

## What you can reuse

        The original [JavaScript arithmetic](https://agent-tune.com/resources/enneagram/score.js), [synthetic inputs](https://agent-tune.com/resources/enneagram/questions.json) and starter code are MIT licensed. The old paths and AgentTuneEnneagram global are compatibility names, not a claim that the demo administers a test.

Each group sums four integers from 1 to 5. Invalid or missing values are rejected. Equal highest totals remain tied; no wing is inferred.

## Before adding a real questionnaire

        Identify its exact version and applicable rights, including modification and public redistribution. Store stable item IDs, wording, scale anchors, scoring keys and presentation order. Require a complete valid response set; keep measured scores separate from a user’s preference choices.

[Current Enneagram availability](https://agent-tune.com/tests/enneagram) · [Rights record](https://agent-tune.com/resources/content/instrument-rights.json) · [Available IPIP Big Five adaptation](https://agent-tune.com/tests/big-five).

## Historical adaptation

        The former AgentTune 36-item adaptation reordered OEPS v1 and changed two statements. Published responses remain attached to that legacy version. Do not call the synthetic example OEPS, and do not reinterpret old answers as answers to corrected items. [Read the provenance correction](https://agent-tune.com/research/data/rights-migration.json).

## Questions people ask.

            Does the starter include OEPS questions?

            No. It contains original synthetic controls solely for software testing. Verify instrument rights before adding real questions.

            Can I still choose an Enneagram-style template?

            Yes. Communication templates and the preference builder remain available without a questionnaire.

## What changed.

- September 26, 2026 Replaced questionnaire payloads with synthetic developer inputs and clarified licensing and legacy provenance.

## Sources.

- [Open-Source Psychometrics Project: OEPS live test (54 items)](https://openpsychometrics.org/tests/OEPS/)

- [Eric Jorgenson: development of the OEPS](https://openpsychometrics.org/tests/OEPS/development/)

- [AgentTune: versioned response data and methods](https://agent-tune.com/research/ai-personality-five-models-2026)

## Keep going.

          [New resourceBuild an Enneagram test in React + TypeScript](https://agent-tune.com/guides/enneagram-test-react-typescript)
          [Try itTake the 36-item Enneagram test](https://agent-tune.com/tests/enneagram)
          [Apply itEnneagram prompts for all nine types](https://agent-tune.com/guides/enneagram-ai-prompts)
          [ResearchWhy ties matter in model reports](https://agent-tune.com/research/ai-personality-five-models-2026)
