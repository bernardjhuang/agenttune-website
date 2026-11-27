Source: https://agent-tune.com/tools/enneagram-scoring-playground
Format: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.

[Home](https://agent-tune.com/) / [Free tools](https://agent-tune.com/tools/) / Enneagram scoring playground

Free · No signup · Browser only

# Enneagram scoring playground

Test how our open-source 36-item Enneagram scorer calculates nine type totals and preserves exact ties. To take the actual quiz, visit /tests/enneagram.

Your input stays in this tab. No model calls or automatic saving. [Read guide](https://agent-tune.com/guides/enneagram-test-react-typescript) · Developers: [catalog.json](https://agent-tune.com/resources/tools/catalog.json) · [core.js](https://agent-tune.com/resources/tools/core.js)

**Quick answer:** Inspect 9-type scoring and tie handling with synthetic inputs. Runs locally in your browser tab with zero signup. Grounded in [25 tested AI model profiles](https://agent-tune.com/models/) and the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings).

This interactive tool needs JavaScript. The instructions and linked source files below remain available without it.

## Enter or import demo values

Loading item list…

### Import an answer array

36 answers as JSONExample format: [3, 4, 2, …] with exactly 36 integers from 1 to 5.

Import answers

Load all-neutral test fixture

### Set the 36 synthetic values

Score answers

### Use the scorer in your app

[JavaScript scorer](https://agent-tune.com/resources/enneagram/score.js) · [Synthetic demo inputs](https://agent-tune.com/resources/enneagram/questions.json) · [React TypeScript starter](https://agent-tune.com/resources/enneagram/enneagram-react-typescript.zip) · [Documentation and licenses](https://agent-tune.com/resources/enneagram/README.md)

```
<script src="https://agent-tune.com/resources/enneagram/score.js"></script>
<script>
  // Test fixture; replace with the user’s 36 answers.
  const result = AgentTuneEnneagram.score(Array(36).fill(3));
  console.log(result.scores, result.leaders);
</script>
```

## Review your output

Editable outputYour output will appear here.

Copy outputDownload file

Clear this tool’s text and history

## How to use Enneagram scoring playground

- Set the 36 demo sliders, import a 36-integer JSON array, or click Load all-neutral test fixture.
- Inspect the nine type totals (4 to 20) and see how tied top scores are preserved without forcing a winner.
- Copy the JSON output or download the MIT-licensed JavaScript scorer and React TypeScript starter below.

## A concrete example

Thirty-six answers of 3 produce nine equal totals of 12—a nine-way tie that legacy scorers hid by picking Type 1.

## Questions and limits

### Does this playground include OEPS questions?

No. This developer sandbox uses synthetic inputs to test scoring math and tie handling. Take the full questionnaire at /tests/enneagram.

### How are totals and ties calculated?

Each of the nine types sums four 1–5 items (score range 4–20). Whenever two or more types tie for the highest score, all tied leaders are returned and dominantType is set to null.

### Can I reuse the code?

Yes. The scoring engine and React TypeScript starter are MIT-licensed.

## Go further

[Build the React and TypeScript Enneagram starter](https://agent-tune.com/guides/enneagram-test-react-typescript) explains the method and practical limits. Compare defaults across [25 tested AI model profiles](https://agent-tune.com/models/) or the [Personality Atlas](https://agent-tune.com/research/ai-personality-rankings). See also [Open Psychometrics: OEPS development](https://openpsychometrics.org/tests/OEPS/development/).

- [Communication preferences builder](https://agent-tune.com/tools/communication-preferences-builder) — Create instructions without taking a personality test.
- [Instruction checker](https://agent-tune.com/tools/instruction-checker) — Find duplicate rules and wording worth revising.
- [Instruction test bench](https://agent-tune.com/tools/instruction-test-bench) — Compare real answers before and after an instruction change.

## The fine print: research notes & developer API

For developers and agents: [tool catalog (JSON)](https://agent-tune.com/resources/tools/catalog.json), [local API documentation](https://agent-tune.com/resources/tools/README.md), and [reusable JavaScript functions](https://agent-tune.com/resources/tools/core.js). These process text locally in your browser; reading a file does not authorize installing instructions.
