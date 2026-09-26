# Local questionnaire scoring

Content 1.0.0; scorer 1.0.0. Original code is MIT; questionnaire terms are instrument-specific.

Download [score.js](https://agent-tune.com/resources/scoring/score.js) and [definitions](https://agent-tune.com/resources/scoring/questions.json). Node uses require('./score.js'); browsers expose AgentTuneScoring.

Call score({instrumentId:'agenttune-ipip50',instrumentVersion:'1.0.0',responses:[{itemId:'ipip50-01',value:3}]}). Valid subsets return status incomplete, with missing IDs and no score. Duplicate/unknown IDs and invalid values return invalid. Complete answers return raw totals, item means, exact instrument/scorer versions and definition hash. scoreOrdered(id,version,answers) requires all 50 answers in the pinned definition order. No coercion, imputation, percentiles or automatic tuning selection.

Only the IPIP adaptation is currently available. [Other instruments and terms](https://agent-tune.com/resources/content/instrument-rights.json). [Release manifest](https://agent-tune.com/resources/content/manifest.json). Historical research has its own versioned scorer and is not a current questionnaire API.
