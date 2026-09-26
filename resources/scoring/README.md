# Local questionnaire scoring

Version: agenttune-scoring-2026-09-25.1. MIT code. Instrument attribution and original item provenance remain in the [test specifications](https://agent-tune.com/tests/).

Download [score.js](https://agent-tune.com/resources/scoring/score.js) and [questions.json](https://agent-tune.com/resources/scoring/questions.json). The scorer embeds the same item keys, runs without dependencies or network calls, and accepts exactly one complete numeric response array. It rejects missing, sparse, fractional, string and out-of-range answers.

Node: `require('./score.js').score('mbti', answers)`. Browser: `AgentTuneScoring.score('mbti', answers)`. Valid IDs: mbti, enneagram, disc, attachment, big-five.

MBTI tied axes are X, with type null. DISC and Enneagram return every tied leader and type null for a tie; no automatic tie-break is applied. Attachment reports means, quadrant and whether a mean is exactly at the boundary of 4. Big Five returns raw 10–50 sums plus heuristic reference indices; the constants have no verified normative population. Results are not diagnoses. Keep answers local.

The published research scorer separately preserves historical tie-break labels for reproduction; these are not used as current quiz recommendations.
