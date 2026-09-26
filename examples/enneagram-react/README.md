# AgentTune Enneagram React + TypeScript starter

A local 36-item questionnaire with native radio groups, six pages, keyboard focus management, explicit validation and all tied leaders preserved. No server, analytics, account, persistence or network request is used for answers.

## Run

Use a currently supported Node.js release satisfying >=22.12.0. Extract this folder, then:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To produce a static build:

```sh
npm run build
npm run preview
```

The `dist/` folder is the deployable output. Serve it over HTTP; opening index.html via file:// is not supported. The relative base allows deployment below a subdirectory. Never put secrets in frontend environment variables.

## Scoring contract

`public/score.js` is the unchanged AgentTune standalone scorer (agenttune-enneagram-36-v1). index.html loads it before the React entry. `src/scorer.ts` provides types and calls the public global; it does not reimplement scoring. Exactly 36 integers from 1 to 5 are required, in the supplied order. Four items contribute to each of nine types; no reverse scoring. Totals range from 4 to 20. Equal highest totals return every leader, `tied: true`, and `dominantType: null`. This app deliberately does not infer wings or population percentiles.

The all-neutral vector returns all nine types at 12. Reloading clears answers. The result is a self-reflection aid, not a diagnosis or a validated psychological measure for an AI.

## Files and rights

- `src/App.tsx`: pagination, validation, focus and result presentation.
- `src/questions.json`: frozen item text, type keys and provenance.
- `public/score.js`: canonical scorer.
- `src/scorer.ts`: TypeScript contract for the canonical scorer.

Code is MIT (LICENSE-code.txt). This does not relicense third-party questionnaire wording. The frozen 36-item set points to the Open-Source Enneagram of Personality Scales development page: https://openpsychometrics.org/tests/OEPS/development/. The upstream live test has 54 items and is not interchangeable with this 36-item key. Review the source and rights for your intended reuse. Do not represent this as the official RHETI, iEQ9 or a clinically validated instrument.

## Check before adapting

1. Submit a blank page: an error names the missing question and focus moves to its first radio.
2. Use Tab and arrow keys to answer; moving forward/back preserves values.
3. Answer all 36 items Neutral: every type scores 12 and all nine are leaders.
4. Start again and verify answers clear.
5. Check narrow mobile layout and screen-reader legends before shipping changes.

When changing item order or wording, version the instrument and update its scoring key together. Keep the same input validation if you replace the UI. Adding stored profiles or a backend requires your own privacy and security design.
