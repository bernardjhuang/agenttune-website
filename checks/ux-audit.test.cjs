const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {fixture,ROOT}=require('./browser-fixture.cjs');
const {enhance}=require('../tools/enhance-pages');
const scoring=require('../resources/scoring/score');
const vectors=require('../research/data/september-2026-responses.json').records;
const historic=require('../research/data/september-2026-score.cjs');
const catalog=require('../library/index.json'),registry=require('../platforms');
const read=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
test('versioned scoring rejects unavailable instruments and incomplete positional data',()=>{
 for(const id of ['mbti','disc','enneagram','attachment'])assert.equal(scoring.score({instrumentId:id,instrumentVersion:'1.0.0',responses:[]}).status,'invalid');
 for(const a of [null,Array(50),Array(49).fill(3),Array(50).fill('3'),Array(50).fill(3.2),Array(50).fill(8)])assert.equal(scoring.scoreOrdered('agenttune-ipip50','1.0.0',a).status,'invalid');
 const out=scoring.score({instrumentId:'agenttune-ipip50',instrumentVersion:'1.0.0',responses:[]});assert.equal(out.status,'incomplete');assert.equal(out.values,undefined);
});
test('quiz drafts validate responses, expire, resume explicitly and clear without touching other storage',()=>{
 const f=fixture('<section id="quiz-intro"></section>');f.run('quiz-utils.js');f.ctx.location.pathname='/tests/disc';
 const state={currentIndex:1,answers:[4,null]}, draft=f.ctx.ATQuiz.draft(f.document,state,2);let started=0;draft.bind(()=>started++);draft.save();
 const key='at_quiz_v1:/tests/disc',saved=JSON.parse(f.storage.get(key));assert.deepEqual(saved.answers,[4,null]);assert.equal(started,0);
 state.answers=[null,null];state.currentIndex=0;f.ids.get('quiz-intro').children[0].children[1].click();assert.equal(started,1);assert.equal(state.currentIndex,1);assert.equal(state.answers[0],4);
 f.storage.set('unrelated','keep');draft.clear();assert.equal(f.storage.has(key),false);assert.equal(f.storage.get('unrelated'),'keep');
 for(const bad of [{answers:[9,null],updated:Date.now()},{answers:[4,null],updated:0},{answers:[4],updated:Date.now()}]){f.storage.set(key,JSON.stringify(bad));f.ctx.ATQuiz.draft(f.document,state,2);assert.equal(f.storage.has(key),false);}
});
test('all tuning exports use the shared registry and the separate verification contract',()=>{
 const published=JSON.parse(read('resources/platforms.json'));assert.deepEqual(published,registry);assert.deepEqual(require("../resources/tools/core").destinations,registry.fileDestinations);
 for(const t of catalog.tunings){const md=read(t.src),body=read(new URL(t.body).pathname);assert.ok(md.endsWith(body));assert.match(md,/agenttune_version: 2/);assert.ok(md.includes('platform_registry_version: '+registry.version));assert.match(md,/"muse":/);assert.match(md,/saved_text:/);assert.doesNotMatch(md,/verify\.probe|expected_behavior|user identifies as|OCEAN \(measured\) >/);assert.match(body,/material uncertainty/);assert.match(body,/authorized scope/);assert.ok(t.revision&&t.evidence_status);}
});
test('all type pages place setup before raw content and keep secondary sections crawlable',()=>{
 for(const t of catalog.tunings){const file=new URL(t.page).pathname.slice(1)+'.html',html=enhance(read(file),file);assert.ok(html.indexOf('id="install"')<html.indexOf('id="editor"'),file);assert.match(html,/<details class="lib-disclosure" id="editor">/);assert.ok(html.includes('id="integration-deep"'));assert.doesNotMatch(html,/gtag\("event"/);}
});
test('guide heading anchors are stable and every contents link resolves to a page heading',()=>{
 const file='guides/claude-personality.html';const html=enhance(read(file),file);const toc=/<details class="article-toc"[\s\S]*?<\/details>/.exec(html)[0];const ids=[...toc.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);assert.ok(ids.length>4);assert.equal(ids.length,new Set(ids).size);for(const id of ids)assert.ok(html.includes('id="'+id+'"'));assert.equal(enhance(read(file),file),html);
});
