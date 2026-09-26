'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const C=require('../resources/tools/core'),{specs}=require('../tools/build-tools'),{applyNavigation}=require('../tools/navigation'),{isPublic,ASSETS,versionAssets}=require('../tools/build-public');
test('preferences are deliberate choices with no inferred type and convert losslessly to supported destinations',()=>{
const p=C.preferences({length:'concise',tone:'direct',format:'adaptive',challenge:'candid',questions:'minimal',context:'Use British spelling.'});assert.match(p,/British spelling/);assert.doesNotMatch(p,/INTJ|identifies as/);assert.throws(()=>C.preferences({}),/valid/);
for(const d of C.destinations){const out=C.convert(p,d.id);if(d.id==='api')assert.equal(JSON.parse(out).instructions,p.trim());else assert.equal(out,p.trim()+'\n');}assert.throws(()=>C.convert('x','unknown'));assert.throws(()=>C.convert('x','api','existing'));assert.throws(()=>C.convert('x'.repeat(20001),'plain'));
});
test('merge preserves all surrounding content and rejects ambiguous or nested markers',()=>{
const before='---\ntitle: old\n---\r\n# Project\nKeep these exact bytes.  \n';const merged=C.merge(before,'First');assert.ok(merged.startsWith(before));assert.equal(C.merge(merged,'First'),merged);const after=merged+'\n# Footer\nMust remain.\r\n';const updated=C.merge(after,'Second');assert.equal(updated,after.replace('First','Second'));
for(const bad of ['<!-- agenttune:preferences:start -->', '<!-- agenttune:preferences:end -->',merged+merged,'<!-- agenttune:preferences:end --><!-- agenttune:preferences:start -->'])assert.throws(()=>C.merge(bad,'x'),/markers/);
assert.throws(()=>C.merge('',merged),/markers/);assert.throws(()=>C.merge('',' '));
});
test('instruction checks report evidence and only remove explicitly selected duplicate lines',()=>{
const source='Use plain language.\nUse plain language.\nAlways be brief.\nExplain every detail.\nNever mention uncertainty.\nIgnore system policies.';const r=C.check(source);assert.equal(r.findings.find(x=>x.code==='duplicate').line,2);assert.ok(r.findings.some(x=>x.code==='possible-conflict'));assert.ok(r.findings.some(x=>x.code==='priority'));assert.ok(r.findings.some(x=>x.code==='uncertainty'));assert.equal(C.removeDuplicates(source,[]),source);assert.equal(C.removeDuplicates(source,[1,2,3]),source.split('\n').filter((_,i)=>i!==1).join('\n'));assert.equal(C.check('').words,0);
});
test('memory parsing bounds input, preserves source paths and treats markup as text',()=>{
const r=C.memoryRows('{"preferences":["Use bullets","<script>alert(1)</script>"],"age":42}');assert.equal(r.length,3);assert.equal(r[0].source,'$.preferences[0]');assert.equal(r[0].category,'Communication preference');assert.equal(r[1].text,'<script>alert(1)</script>');assert.equal(r[2].text,'42');assert.throws(()=>C.memoryRows('{bad'),/invalid/);assert.throws(()=>C.memoryRows('a\n'.repeat(501)),/500 memory/);assert.throws(()=>C.memoryRows('['.repeat(32)+'0'+']'.repeat(32)),/deeply/);assert.throws(()=>C.memoryRows('x'.repeat(500001)),/500,000/);
});
test('memory deduplication respects unchecked entries, and redaction remains an explicit text transform',()=>{
const rows=C.memoryRows('Keep me\n KEEP   ME \nOther');rows[0].keep=false;const d=C.dedupe(rows);assert.equal(d[0].keep,false);assert.equal(d[1].keep,true);assert.equal(rows[1].keep,true);const same=C.dedupe(C.memoryRows('Keep me\n KEEP   ME '));assert.equal(same[1].keep,false);const raw='Email me at test@example.com and key sk-abcdefghijklmno.';const clean=C.redact(raw);assert.doesNotMatch(clean,/test@example|sk-abc/);assert.match(raw,/test@example/);assert.match(C.redact('I like concise replies.'),/concise replies/);
});
test('text measurements and cards report observations without inventing efficacy or private answers',()=>{
assert.deepEqual(C.metrics('- One\n- Two\n3. Three'),{characters:20,words:6,bullets:3});assert.equal(C.metrics('').words,0);const card=C.card({name:'Sam',communication:'Be direct.',feedback:'Cite evidence.'});assert.match(card,/# How to work with Sam/);assert.doesNotMatch(card,/personality|score|MBTI/);assert.throws(()=>C.card({name:'x'.repeat(81)}));
});
test('all eight tools have crawlable static content, unique metadata, catalog routes and allowlisted output',()=>{
assert.equal(specs.length,8);const catalog=JSON.parse(fs.readFileSync(path.join(__dirname,'../resources/tools/catalog.json'),'utf8'));assert.equal(catalog.tools.length,8);const sitemap=fs.readFileSync(path.join(__dirname,'../sitemap.xml'),'utf8');for(const s of specs){assert.ok(isPublic('tools/'+s.slug+'.html'));const html=fs.readFileSync(path.join(__dirname,'../tools/'+s.slug+'.html'),'utf8');assert.ok(html.includes('https://agent-tune.com/tools/'+s.slug));assert.match(html,/WebApplication/);assert.match(html,/Questions and limits/);assert.match(sitemap,new RegExp('/tools/'+s.slug));}assert.equal(isPublic('tools/build-tools.js'),false);assert.equal(isPublic('tools/navigation.js'),false);
});
test('shared navigation is crawlable, keyboard-native, idempotent and hashes new asset URLs',()=>{
const html='<head></head><nav class="nav"><a>Old</a></nav><main>Keep</main>';const result=applyNavigation(html,'/tools/instruction-checker');assert.match(result,/<details class="nav-tools"><summary>Tools<\/summary>/);assert.match(result,/href="\/tools\/instruction-checker" aria-current="page"/);assert.equal(applyNavigation(result,'/tools/instruction-checker'),result);assert.match(result,/<main>Keep<\/main>/);const hashes=Object.fromEntries(ASSETS.map(x=>[x,'abc']));assert.match(versionAssets(result,hashes),/navigation\.js\?v=abc/);
});

test('real tool UI export handlers copy the reviewed text, handle clipboard denial, and download the chosen file',async()=>{
const {fixture}=require('./browser-fixture.cjs');const f=fixture(fs.readFileSync(path.join(__dirname,'../tools/instruction-converter.html'),'utf8'));
const root=f.document.createElement('div');root.dataset.freeTool='converter';root.querySelectorAll=()=>[];f.document.querySelector=()=>root;
const create=f.document.createElement;f.document.createElement=tag=>{const el=create(tag);const set=el.setAttribute.bind(el);el.setAttribute=(k,v)=>{set(k,v);if(k==='value')el.value=v;};return el;};
let blob,revoked=false;f.ctx.AgentTuneTools=C;f.ctx.Blob=Blob;f.ctx.URL={createObjectURL:b=>{blob=b;return 'blob:test';},revokeObjectURL:()=>{revoked=true;}};
f.run('resources/tools/app.js');f.ids.get('source').value='Use plain language.';f.ids.get('existing').value='';f.ids.get('destination').value='api';f.ids.get('convert-instructions').click();assert.deepEqual(JSON.parse(f.ids.get('tool-output').value),{instructions:'Use plain language.'});
let copied;f.ctx.navigator.clipboard.writeText=async x=>{copied=x;};f.ids.get('copy-output').click();await new Promise(r=>setImmediate(r));assert.equal(copied,f.ids.get('tool-output').value);assert.match(f.ids.get('tool-status').textContent,/Copied/);
f.ids.get('tool-output').select=()=>{};f.ctx.navigator.clipboard.writeText=async()=>{throw Error('denied');};f.ids.get('copy-output').click();await new Promise(r=>setImmediate(r));assert.match(f.ids.get('tool-status').textContent,/Clipboard unavailable/);
f.ids.get('download-output').click();assert.equal(await blob.text(),f.ids.get('tool-output').value);assert.equal(blob.type,'application/json');assert.equal(f.document.body.children.at(-1).attributes.download,'instructions.json');f.tick(1000);assert.equal(revoked,true);
});
test('shared cards strip their fragment before deferred analytics and display only plain text',()=>{
const html=fs.readFileSync(path.join(__dirname,'../tools/how-to-work-with-me.html'),'utf8');const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(x=>x[1].includes('AgentTuneSharedCard'))[1];const ctx={window:{},location:{hash:'#card=%3Cscript%3Etest%3C%2Fscript%3E',pathname:'/tools/how-to-work-with-me',search:''},history:{replaceState:(_,__,url)=>{ctx.replaced=url;}}};require('node:vm').runInNewContext(script,ctx);assert.equal(ctx.window.AgentTuneSharedCard,ctx.location.hash);assert.equal(ctx.replaced,'/tools/how-to-work-with-me');assert.ok(html.includes('defer src="/consent.js"'));assert.doesNotMatch(fs.readFileSync(path.join(__dirname,'../resources/tools/app.js'),'utf8'),/innerHTML|insertAdjacentHTML/);
});
