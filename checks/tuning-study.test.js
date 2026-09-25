const test=require('node:test'),assert=require('node:assert/strict');
const data=require('../research/data/tuning-before-after-2026-09.json');
const summary=require('../research/data/tuning-before-after-summary.json');
const {summarize}=require('../research/data/tuning-before-after-score.cjs');
test('all archived task/condition pairs validate and reproduce the published pilot summary',()=>{
  assert.deepEqual(summarize(data),summary);
  assert.equal(summary.conditions.straight.answer_first_score_5,19);
  assert.equal(summary.conditions.default.recounted_words,380);
  assert.equal(summary.conditions.straight.recounted_words,381.9);
  for(const c of Object.keys(data.conditions)) assert.equal(summary.conditions[c].recounted_question_marks,summary.conditions[c].archived_metrics.questions);
});
test('pilot reanalysis rejects duplicate cells, missing records and invalid ratings',()=>{
  for(const mutate of [d=>d.records.pop(),d=>d.records[1]=d.records[0],d=>d.records[0].judge.accuracy=6]) {
    const d=structuredClone(data);mutate(d);assert.throws(()=>summarize(d));
  }
});
