#!/usr/bin/env node
'use strict';
// Re-analyze the archived replies and ratings; this does not call or re-rate a model.
const fs = require('node:fs');
function summarize(data) {
  const conditions = Object.keys(data.conditions || {});
  const tasks = new Set((data.tasks || []).map(t => t.id));
  if (conditions.length !== 3 || tasks.size !== 20 || data.tasks.length !== 20 || data.records.length !== 60) throw Error('Expected 20 tasks × 3 conditions and 60 records');
  const seen = new Set(), groups = Object.fromEntries(conditions.map(c => [c, []]));
  const scales = ['answer_first','pushback','length','accuracy','usefulness'];
  for (const r of data.records) {
    const key = r.task + '/' + r.condition;
    if (!tasks.has(r.task) || !groups[r.condition] || seen.has(key) || typeof r.response !== 'string' || !r.response.trim()) throw Error('Invalid or duplicate record: ' + key);
    for (const k of scales) if (!Number.isInteger(r.judge?.[k]) || r.judge[k] < 1 || r.judge[k] > 5) throw Error('Invalid judge score: ' + key);
    for (const k of ['words','hedges','questions','bullets','headings']) if (!Number.isInteger(r.metrics?.[k]) || r.metrics[k] < 0) throw Error('Invalid archived metric: ' + key);
    if (!Number.isInteger(r.judge.questions_back) || r.judge.questions_back < 0) throw Error('Invalid question count: ' + key);
    seen.add(key); groups[r.condition].push(r);
  }
  const mean = xs => Number((xs.reduce((a,b) => a+b,0) / xs.length).toFixed(4));
  return {
    method: 'Means of archived metrics/ratings; whitespace word count and literal question marks independently recounted. No inference about repeatability or causal effects.',
    conditions: Object.fromEntries(conditions.map(c => {
      const rows=groups[c]; if(rows.length!==20) throw Error('Missing task/condition cell');
      return [c, { n: rows.length,
        archived_metrics: Object.fromEntries(['words','hedges','questions','bullets','headings'].map(k=>[k,mean(rows.map(r=>r.metrics[k]))])),
        recounted_words: mean(rows.map(r=>r.response.trim().split(/\s+/u).length)),
        recounted_question_marks: mean(rows.map(r=>(r.response.match(/\?/g)||[]).length)),
        judge: Object.fromEntries([...scales,'questions_back'].map(k=>[k,mean(rows.map(r=>r.judge[k]))])),
        answer_first_score_5: rows.filter(r=>r.judge.answer_first===5).length,
        accuracy_below_5: rows.filter(r=>r.judge.accuracy<5).map(r=>r.task)
      }];
    }))
  };
}
module.exports = { summarize };
if (require.main === module) {
  if (!process.argv[2]) throw Error('Usage: node tuning-before-after-score.cjs tuning-before-after-2026-09.json');
  console.log(JSON.stringify(summarize(JSON.parse(fs.readFileSync(process.argv[2],'utf8'))),null,2));
}
