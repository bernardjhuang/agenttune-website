# AgentTune Enneagram-36 developer resource

Guide: https://agent-tune.com/guides/open-source-enneagram-test
Version: agenttune-enneagram-36-v1

This is the 36-item adaptation used by AgentTune, not the full 54-item
Open Enneagram of Personality Scales (OEPS) test. It is an educational
self-reflection tool; it is not a diagnostic or validated model-personality measure.

Files:
- questions.json: fixed item IDs, wording, type keys, response scale and provenance.
- score.js: dependency-free scorer for Node CommonJS and browser script tags.
- demo.js: code behind the guide's local-only scoring demonstration.
- LICENSE-code.txt: MIT terms for the AgentTune JavaScript implementation.

## Node

Save score.js in a directory you choose. Run from that directory:

```js
const {score} = require('./score.js');
const answers = Array(36).fill(3);
answers.fill(5, 16, 20); // demonstration only: type 5 items, IDs 17–20
console.log(score(answers));
```

In a package configured with "type": "module", rename score.js to score.cjs
and import its CommonJS default, or use createRequire. There is no npm package to install.

## Browser

```html
<script src="./score.js"></script>
<script>
  const result = AgentTuneEnneagram.score(Array(36).fill(3));
  console.log(result.leaders); // [1,2,3,4,5,6,7,8,9]
</script>
```

The scorer expects 36 integers from 1 to 5 in fixed item-ID order.
If your UI shuffles questions, restore the order by item ID before scoring.
Each type total is 4–20. All equal top totals remain in leaders.
dominantType is null for a tie. Scores are raw totals, not probabilities,
percentiles or confidence estimates. Wings are not calculated.
Missing answers, strings, fractions, out-of-range numbers and sparse arrays
throw TypeError. Do not fill missing responses with neutral automatically.

## Provenance and licensing

Question wording: Open-Source Psychometrics Project, OEPS development materials:
https://openpsychometrics.org/tests/OEPS/development/
Upstream live test (54 items): https://openpsychometrics.org/tests/OEPS/
AgentTune specification: https://agent-tune.com/tests/enneagram.md

The supplied JavaScript implementation is MIT licensed. Third-party question
wording retains its upstream terms; the code license does not relicense it.
Keep the item attribution and version when redistributing the data. See the
upstream documentation for questionnaire reuse terms.

This resource does not contain the proprietary RHETI questionnaire.
Scoring runs locally and contains no network requests or storage calls.
Your application's hosting, analytics and response-storage policies are separate.
