/* AgentTune Enneagram-36 scorer v1.0.0 — MIT (see LICENSE-code.txt).
 * This scores AgentTune's 36-item adaptation, not the full 54-item OEPS.
 * Input order: four items for each type 1 through 9. No reverse scoring.
 * Browser: AgentTuneEnneagram.score(answers). Node: require('./score.js').score(answers).
 */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AgentTuneEnneagram = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const version = 'agenttune-enneagram-36-v1';
  function score(answers) {
    if (!Array.isArray(answers) || answers.length !== 36) {
      throw new TypeError('Provide exactly 36 answers in item order.');
    }
    const scores = Object.fromEntries([1,2,3,4,5,6,7,8,9].map(type => [type, 0]));
    for (let i = 0; i < 36; i++) {
      const answer = answers[i];
      if (!Object.prototype.hasOwnProperty.call(answers, i) || !Number.isInteger(answer) || answer < 1 || answer > 5) {
        throw new TypeError('Answer ' + (i + 1) + ' must be an integer from 1 to 5.');
      }
      scores[Math.floor(i / 4) + 1] += answer;
    }
    const topScore = Math.max(...Object.values(scores));
    const leaders = Object.keys(scores).map(Number).filter(type => scores[type] === topScore);
    return {version, scores, topScore, leaders, tied: leaders.length > 1, dominantType: leaders.length === 1 ? leaders[0] : null};
  }
  return Object.freeze({version, score});
});
