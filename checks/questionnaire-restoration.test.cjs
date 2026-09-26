const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {quiz,ROOT}=require('./browser-fixture.cjs'),content=require('../tools/content-bundle.cjs')();
const raw=require('../research/data/september-2026-responses.json').records;
const historical=require('../research/data/september-2026-score.cjs');
const api=require('../resources/scoring/score.js');
test('all five active definitions match the questions shown and score the historical vectors consistently',()=>{
 assert.equal(content.definitions.length,5);assert.ok(content.rights.instruments.every(p=>p.available));
 for(const name of ['mbti','enneagram','disc','attachment']){
  const f=quiz(name),d=content.definitions.find(d=>d.route===name);
  assert.equal(f.ctx.__quiz.items.length,d.items.length);
  const html=fs.readFileSync(ROOT+'/tests/'+name+'.html','utf8');assert.ok(html.includes(d.id));assert.ok(html.includes(d.id+'@'+d.version));
  for(const r of raw.filter(r=>r.test===name)){
   const actual=JSON.parse(JSON.stringify(f.ctx.__quiz.compute(r.answers))),expected=historical.score(name,r.answers);
   assert.equal(actual.status,'complete');
   if(name==='mbti'){
    for(const key of ['I-E','N-S','T-F','J-P'])assert.equal(actual.values[key[0]]-actual.values[key[2]],expected.values[key]);
    assert.equal(actual.pattern,expected.pattern);assert.deepEqual(actual.tied,expected.tied);
   }else {assert.deepEqual(actual.values,expected.values);if(expected.winners)assert.deepEqual(actual.leaders,expected.winners);}
  }
 }
});
test('restored quizzes require complete valid answers before showing results',()=>{
 for(const name of ['mbti','enneagram','disc','attachment']){
  const f=quiz(name),d=content.definitions.find(d=>d.route===name);
  f.ctx.__quiz.showResult();assert.equal(f.ids.get('quiz-result').hidden,true);
  assert.equal(api.score({instrumentId:d.id,instrumentVersion:d.version,responses:[]}).status,'incomplete');
  for(const bad of [null,'3',NaN,Infinity,0,d.range[1]+1,1.5])assert.equal(api.scoreOrdered(d.id,d.version,Array(d.items.length).fill(bad)).status,'invalid');
 }
});
test('all restored quizzes complete real answer flows and offer the expected tuning text',async()=>{
 for(const name of ['mbti','enneagram','disc','attachment']){
  const f=quiz(name),items=f.ctx.__quiz.items;
  const answers=items.map(i=>name==='mbti'?('ENTP'.includes(i.low)?1:5):name==='enneagram'?(i.type===5?5:1):name==='disc'?(i.type==='D'?5:1):(i.rev?7:1));
  for(const v of answers){f.buttons[v-1].click();f.tick(220);}
  assert.equal(f.ids.get('quiz-result').hidden,false);
  const expected={mbti:'ENTP',enneagram:'5',disc:'D',attachment:'Secure'}[name];assert.ok(f.ids.get('quiz-result-code').textContent.includes(expected));
  assert.match(f.ctx.__quiz.state.currentTuning,/communication preferences/);assert.match(f.ctx.__quiz.state.currentTuning,/material uncertainty/);
  let copied='';f.ctx.navigator.clipboard.writeText=async s=>{copied=s;};f.ids.get('quiz-copy-tuning').click();await Promise.resolve();assert.equal(copied,f.ctx.__quiz.state.currentTuning);
 }
});
