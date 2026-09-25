const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {fixture,quiz,ROOT}=require('./browser-fixture.cjs');
const {score,summarize}=require('../research/data/september-2026-score.cjs');
const raw=require('../research/data/september-2026-responses.json');
const frozen=require('../research/data/september-2026-instruments.json');
const published=require('../research/data/september-2026-summary.json');
test('all 2,003 supplied vectors validate and reproduce the published summaries',()=>{
 assert.equal(raw.records.length,2003);assert.deepEqual(summarize(raw.records),published);
 for(const model of ['gpt-6-astra','gpt-6-sol','claude-opus-5-5','claude-fable-5-1'])for(const t of Object.keys(frozen))assert.equal(published[model][t].n,100);
 assert.equal(frozen['big-five'].items.filter(x=>x.rev).length,18);
 assert.deepEqual(published['gpt-6-astra'].mbti.legacy_labels,{ISTJ:46,INTJ:45,ENTJ:7,ESTJ:2});
 assert.deepEqual(published['gpt-6-sol'].mbti.legacy_labels,{INTJ:97,ISTJ:3});
 assert.equal(published['claude-opus-5-5'].mbti.runs_with_ties,11);
 assert.equal(published['claude-fable-5-1'].disc.runs_with_ties,51);
 assert.equal(published['claude-fable-5-1'].enneagram.runs_with_ties,44);
 assert.throws(()=>score('disc',Array(16).fill(6)),/Invalid/);
});
test('the independent research scorer agrees with the website item keys and continuous scoring',()=>{
 for(const name of Object.keys(frozen)){
  const f=quiz(name);
  const current=JSON.parse(JSON.stringify(f.ctx.__quiz.items));
  for(let i=0;i<current.length;i++)for(const [k,v] of Object.entries(frozen[name].items[i]))assert.deepEqual(current[i][k],v,`${name} item ${i} ${k}`);
  for(const r of raw.records.filter(r=>r.test===name)){
   const actual=JSON.parse(JSON.stringify(f.ctx.__quiz.compute(r.answers)));
   const expected=score(name,r.answers);
   if(name==='mbti')assert.equal(actual.pattern,expected.pattern);
   if(name==='disc'||name==='enneagram')assert.deepEqual(actual.scores,expected.values);
   if(name==='big-five')for(const k of 'OCEAN')assert.ok(Math.abs(actual.raw[k]-expected.values[k])<1e-10);
   if(name==='attachment'){assert.equal(actual.anxiety,expected.values.anxiety);assert.equal(actual.avoidance,expected.values.avoidance);}
  }
 }
});
for(const name of ['disc','enneagram'])test(`${name}: neutral responses show equal scores and cannot copy a fabricated winner`,async()=>{
 const f=quiz(name);let copies=0;f.ctx.navigator.clipboard.writeText=async()=>{copies++};
 f.ctx.__quiz.state.answers=f.ctx.__quiz.items.map(()=>3); f.ctx.__quiz.showResult();
 assert.equal(f.ids.get('quiz-result-name').textContent,'Equal top scores');
 assert.equal(f.ids.get('quiz-export-panel').hidden,true);
 assert.equal(f.ids.get('quiz-tie-links').hidden,false);
 assert.equal(f.ids.get('quiz-copy-tuning').disabled,true);
 assert.equal(f.ids.get('quiz-download-tuning').disabled,true);
 assert.equal(f.ctx.__quiz.state.currentTuning,'');
 f.ids.get('quiz-copy-tuning').click();await Promise.resolve();assert.equal(copies,0);
 f.ctx.__quiz.state.answers=f.ctx.__quiz.items.map((it,i)=>i<4?5:1); f.ctx.__quiz.showResult();
 assert.equal(f.ids.get('quiz-export-panel').hidden,false);
 assert.equal(f.ids.get('quiz-tie-links').hidden,true);
 assert.equal(f.ids.get('quiz-copy-tuning').disabled,false);
 assert.ok(f.ctx.__quiz.state.currentTuning.length>0);
});
test('funnel tracking is consent gated, allowlisted, payload free, and stops on withdrawal',()=>{
 const f=fixture();f.run('consent.js');f.ctx.atTrack('quiz_start',{answer:5});assert.equal(f.ctx.dataLayer,undefined);
 f.ids.get('at-consent').querySelector('.at-allow').click();const before=f.ctx.dataLayer.length;
 f.ctx.atTrack('quiz_start',{answer:5,result:'INTJ'});assert.deepEqual(Array.from(f.ctx.dataLayer.at(-1)),['event','quiz_start']);
 f.ctx.atTrack('answer_selected');assert.equal(f.ctx.dataLayer.length,before+1);
 f.ctx.atConsentReset();f.ctx.atTrack('quiz_complete');assert.equal(f.ctx.dataLayer.length,before+1);
});
test('public build excludes operational files but preserves content and research downloads',()=>{
 const {isPublic}=require('../tools/build-public');
 for(const p of ['package.json','README.md','docs/copy-audit-2026-09-24.md','tools/copy-metrics.py','tools/build-guides.js','guides/src/fable-personality.json','.env','.github/workflows/deploy.yml'])assert.equal(isPublic(p),false,p);
 for(const p of ['index.html','404.html','styles.css','consent.js','research/data/september-2026-score.cjs','research/data/september-2026-responses.json','library/index.json','tools/custom-instructions-generator.html','tunings/mbti/INTJ.md','output-styles/index.json'])assert.equal(isPublic(p),true,p);
});

test('every sitemap route remains in the public bundle',()=>{
 const {isPublic}=require('../tools/build-public');
 const sitemap=fs.readFileSync(ROOT+'/sitemap.xml','utf8');
 for(const m of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)){
  const route=new URL(m[1]).pathname;
  const options=[route.slice(1)+'.html',route.slice(1)+(route.endsWith('/')?'index.html':'/index.html')];
  assert.ok(options.some(p=>fs.existsSync(path.join(ROOT,p))&&isPublic(p)),route);
 }
});
