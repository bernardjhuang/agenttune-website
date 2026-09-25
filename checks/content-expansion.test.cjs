const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),{analyze}=require('../research/data/content-analysis.cjs');
const raw=require('../research/data/september-2026-responses.json').records;
const actual=analyze(raw),saved=require('../research/data/content-analysis.json');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
test('extended research output is reproducible and uses only four fresh cohorts',()=>{
 assert.deepEqual(actual,saved);assert.equal(actual.stability.length,20);assert.equal(actual.comparisons.length,170);
 assert.ok(actual.stability.every(x=>x.n===100));assert.equal(actual.ties.reduce((n,x)=>n+x.legacy_intj,0),335);assert.equal(actual.ties.reduce((n,x)=>n+x.resolved_intj,0),280);assert.equal(actual.ties.reduce((n,x)=>n+x.tied,0),59);
 for(const row of actual.comparisons){assert.equal(row.opus_distribution.reduce((a,b)=>a+b),100);assert.equal(row.fable_distribution.reduce((a,b)=>a+b),100);close(row.opus_distribution.reduce((n,v,i)=>n+v*(i+1),0)/100,row.opus_mean);close(row.fable_distribution.reduce((n,v,i)=>n+v*(i+1),0)/100,row.fable_mean);}
});
test('item contributions reconcile to every aggregate dimension gap, including reversed items',()=>{
 const dimensions={mbti:{EI:'I-E',SN:'N-S',TF:'T-F',JP:'J-P'},attachment:{anx:'anxiety',avd:'avoidance'}};
 for(const testName of ['mbti','big-five','disc','enneagram','attachment']){
  const rows=actual.comparisons.filter(x=>x.test===testName);
  for(const dim of new Set(rows.map(x=>x.dimension))){const key=dimensions[testName]?.[dim]||dim;const sum=rows.filter(x=>x.dimension===dim).reduce((n,x)=>n+x.keyed_item_delta,0);const gap=actual.summary['claude-fable-5-1'][testName].values[key].mean-actual.summary['claude-opus-5-5'][testName].values[key].mean;close(testName==='attachment'?sum/18:sum,gap);}
 }
});
test('inapplicability counts preserve the correct scale midpoint and denominator',()=>{
 assert.equal(actual.neutral.reduce((n,t)=>n+t.responses,0),17000);assert.equal(actual.neutral.reduce((n,t)=>n+t.midpoints,0),2980);assert.equal(actual.neutral.reduce((n,t)=>n+t.flagged,0),1823);assert.ok(actual.neutral.every(t=>t.flagged_nonmidpoint===0));
 for(const t of actual.neutral)for(const q of t.items)assert.ok(q.flagged<=q.midpoint&&q.midpoint<=100);
});
test('protocol downloads distinguish planned observations from measured results',()=>{
 for(const [name,n] of [['claude-preferences',36],['muse-persistence',45],['personality-prompt-comparison',180]]){
  const kit=require('../resources/research/'+name+'-kit.json');assert.equal(kit.status,'protocol_not_run');assert.deepEqual(kit.results,[]);
  const rows=fs.readFileSync(path.join(root,'resources/research/'+name+'-worksheet.csv'),'utf8').trim().split(/\r?\n/);assert.equal(rows.length,n+1);assert.ok(rows.slice(1).every(x=>x.includes('not_run')));
 }
 const kit=require('../resources/research/personality-prompt-comparison-kit.json');assert.equal(kit.tasks.length,20);assert.equal(new Set(kit.tasks.map(t=>t.id)).size,20);assert.equal(kit.conditions.personality_plus_same_rules,'Use an INTJ-style communication approach. '+kit.conditions.plain_english);
 const rows=fs.readFileSync(path.join(root,'resources/research/personality-prompt-comparison-worksheet.csv'),'utf8').trim().split(/\r?\n/).slice(1).map(r=>r.split(','));
 const cells=new Set(rows.map(r=>r.slice(1,4).join('/')));assert.equal(cells.size,180);
 for(const condition of Object.keys(kit.conditions))for(let position=0;position<3;position++)assert.equal(rows.filter((r,i)=>i%3===position&&r[3]===condition).length,20);

});
test('starter uses the exact validated scorer and questionnaire, without publishing its source tree',()=>{
 const {isPublic}=require('../tools/build-public');
 assert.equal(fs.readFileSync(path.join(root,'examples/enneagram-react/public/score.js'),'utf8'),fs.readFileSync(path.join(root,'resources/enneagram/score.js'),'utf8'));
 assert.equal(fs.readFileSync(path.join(root,'examples/enneagram-react/src/questions.json'),'utf8'),fs.readFileSync(path.join(root,'resources/enneagram/questions.json'),'utf8'));
 assert.equal(isPublic('resources/enneagram/enneagram-react-typescript.zip'),true);assert.equal(isPublic('examples/enneagram-react/package.json'),false);assert.equal(isPublic('examples/enneagram-react/node_modules/react/index.js'),false);
});
