const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),content=require('../tools/content-bundle.cjs')(),read=p=>fs.readFileSync(path.join(root,p),'utf8');
test('all profiles, compact exports and scoring payloads match the pinned library release',()=>{
 assert.equal(read('compact-tunings.js'),content.read('compact-tunings.js'));
 assert.equal(read('resources/scoring/score.js'),content.read('score.js'));
 assert.equal(read('resources/scoring/questions.json'),content.read('instruments.json'));
 const catalog=JSON.parse(read('library/index.json'));assert.equal(catalog.tunings.length,43);
 for(const p of content.profiles){const body=content.read(p.bodyPath);assert.equal(read('resources/tunings/'+p.id+'.md'),body);assert.ok(read('tunings/'+p.path).endsWith(body));assert.ok(catalog.tunings.some(t=>t.system+'/'+t.slug===p.id&&t.body));}
});
test('publication manifest excludes unexpected payloads and includes every approved content artifact',()=>{
 const {isPublic}=require('../tools/build-public');assert.equal(isPublic('resources/unreviewed-questions.json'),false);assert.equal(isPublic('research/data/new-question-bank.json'),false);
 for(const p of Object.keys(content.manifest.files))assert.ok(isPublic('resources/content/'+p),p);
 for(const policy of content.rights.instruments.filter(p=>!p.available)){assert.match(read('tests/'+policy.route+'.md'),/unavailable_pending_rights/);assert.doesNotMatch(read('tests/'+policy.route+'.html'),/const ITEMS|id="quiz-start"/);}
});
test('historical response vectors and numerical summaries have not changed',()=>{
 const before=content.read('legacy-provenance.json'),legacy=JSON.parse(before);
 const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
 assert.equal(hash(read('research/data/september-2026-responses.json')),legacy.research_files_original_sha256['research/data/september-2026-responses.json']);
 const {summarize}=require('../research/data/september-2026-score.cjs');assert.deepEqual(summarize(JSON.parse(read('research/data/september-2026-responses.json')).records),JSON.parse(read('research/data/september-2026-summary.json')));
 const note=JSON.parse(read('research/data/rights-migration.json'));assert.equal(note.original_instruments_sha256,legacy.research_files_original_sha256['research/data/september-2026-instruments.json']);
});
test('Big Five only scores complete answers and versioned drafts cannot resume old protocols',()=>{
 const {quiz}=require('./browser-fixture.cjs'),f=quiz('big-five');
 const empty=f.ctx.__quiz.compute(Array(50).fill(null));assert.equal(empty.status,'invalid');f.ctx.__quiz.showResult();assert.equal(f.ids.get('quiz-result').hidden,true);
 for(let i=0;i<50;i++){f.buttons[2].click();f.tick(220);}
 const result=JSON.parse(f.ids.get('quiz-result-json').textContent);assert.equal(result.status,'complete');assert.equal(result.instrumentVersion,'1.0.0');assert.deepEqual(result.values,{O:30,C:30,E:30,A:30,N:30});assert.equal(result.suggestions,undefined);
 assert.ok([...f.storage.keys()].every(k=>!k.startsWith('at_quiz_v1:')));
 f.ids.get('quiz-restart').click();f.ids.get('quiz-start').click();assert.ok([...f.storage.keys()].some(k=>k.endsWith(':agenttune-ipip50@1.0.0')));
});
