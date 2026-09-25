const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const scorer = require('../resources/enneagram/score.js');
const {score: researchScore} = require('../research/data/september-2026-score.cjs');
const raw = require('../research/data/september-2026-responses.json');
const questions = require('../resources/enneagram/questions.json');
const instruments = require('../research/data/september-2026-instruments.json');

test('developer scorer reproduces every recorded Enneagram total and tied leader', () => {
  const records = raw.records.filter(r => r.test === 'enneagram');
  assert.equal(records.length, 401);
  assert.deepEqual(questions.items.map(({id,...item}) => item), instruments.enneagram.items);
  for (const record of records) {
    const actual = scorer.score(record.answers);
    const reference = researchScore('enneagram',record.answers);
    assert.deepEqual(actual.scores, reference.values);
    assert.deepEqual(actual.leaders, reference.winners.map(Number).sort((a,b) => a-b));
    assert.equal(actual.dominantType, reference.winners.length === 1 ? Number(reference.winners[0]) : null);
  }
});

test('developer scorer preserves all-neutral and partial ties and reaches each unique type', () => {
  for (const value of [1,3,5]) {
    const result = scorer.score(Array(36).fill(value));
    assert.deepEqual(result.leaders,[1,2,3,4,5,6,7,8,9]);
    assert.equal(result.dominantType,null);
    assert.equal(result.topScore,value*4);
    assert.equal(result.tied,true);
  }
  for (let type=1; type<=9; type++) {
    const answers = Array(36).fill(1);
    answers.fill(5,(type-1)*4,type*4);
    const saved = answers.slice();
    assert.equal(scorer.score(answers).dominantType,type);
    assert.deepEqual(answers,saved);
  }
  const answers=Array(36).fill(3); answers.fill(5,0,4); answers.fill(5,16,20);
  assert.deepEqual(scorer.score(answers).leaders,[1,5]);
  assert.equal(scorer.score(answers).dominantType,null);
});

test('developer scorer rejects missing, coerced, fractional and non-finite answers', () => {
  for (const value of [null,undefined,{},'3',Array(35).fill(3),Array(37).fill(3),new Array(36)]) {
    assert.throws(() => scorer.score(value),TypeError);
  }
  for (const value of [null,undefined,'3',true,0,6,2.5,NaN,Infinity,-Infinity]) {
    const answers=Array(36).fill(3); answers[17]=value;
    assert.throws(() => scorer.score(answers),/Answer 18/);
  }
  const sparse=Array(36).fill(3); delete sparse[5];
  assert.throws(() => scorer.score(sparse),/Answer 6/);
});

test('the downloadable scorer works as a browser script without Node globals', () => {
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(ROOT,'resources/enneagram/score.js'),'utf8'),context);
  assert.equal(context.AgentTuneEnneagram.version,scorer.version);
  const result=vm.runInContext('AgentTuneEnneagram.score(Array(36).fill(3))',context);
  assert.deepEqual(JSON.parse(JSON.stringify(result)),scorer.score(Array(36).fill(3)));
});

test('resource downloads are included in the public build', () => {
  const {isPublic} = require('../tools/build-public');
  for (const file of ['resources/enneagram/score.js','resources/enneagram/questions.json','resources/enneagram/README.md','resources/enneagram/LICENSE-code.txt','resources/muse/concise-assistant.md','resources/claude/tuning-comparison-worksheet.md']) {
    assert.equal(isPublic(file),true,file);
    assert.ok(fs.statSync(path.join(ROOT,file)).size>0,file);
  }
});
