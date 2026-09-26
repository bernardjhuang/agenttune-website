const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const modulePromise = import('data:text/javascript;base64,' + Buffer.from(fs.readFileSync(path.join(__dirname,'../functions/mcp.js'),'utf8')).toString('base64'));
let reads = 0;
const env = {ASSETS:{fetch:async url=>{
  reads++;
  const p = new URL(url).pathname;
  return new Response(fs.readFileSync(path.join(__dirname,'..',p)),{headers:{'content-type':p.endsWith('.json')?'application/json':'text/markdown'}});
}}};
async function call(body, {headers={},method='POST'}={}) {
  const {onRequest} = await modulePromise;
  const request = new Request('https://agent-tune.com/mcp',{method,headers:{'content-type':'application/json',...headers},...(method==='POST'?{body:typeof body==='string'?body:JSON.stringify(body)}:{})});
  return onRequest({request,env});
}
const rpc = (method,params={})=>({jsonrpc:'2.0',id:7,method,params});
test('MCP negotiates supported versions, returns the real catalog and restricts reads to known assets',async()=>{
  const init=await (await call(rpc('initialize',{protocolVersion:'2025-03-26'}))).json();
  assert.equal(init.result.protocolVersion,'2025-03-26');
  const cat=await (await call(rpc('tools/call',{name:'list_tunings'}))).json();
  assert.equal(JSON.parse(cat.result.content[0].text).count,43);
  const tuning=await (await call(rpc('tools/call',{name:'get_tuning',arguments:{system:'mbti',slug:'entp'}}))).json();
  assert.match(tuning.result.content[0].text,/ENTP/);
  const old=reads;
  const bad=await (await call(rpc('tools/call',{name:'get_tuning',arguments:{system:'mbti',slug:'../../package.json'}}))).json();
  assert.equal(bad.result.isError,true);assert.equal(reads,old+1); // Catalog only.
  const spec=await (await call(rpc('tools/call',{name:'get_test_spec',arguments:{test:'disc'}}))).json();
  assert.match(spec.result.content[0].text,/ODAT/);
});
test('MCP rejects malformed envelopes and validates arguments before asset reads',async()=>{
  for(const input of ['{', 'null','false','1','"text"','[]','{}',JSON.stringify({...rpc('ping'),id:null}),JSON.stringify({...rpc('ping'),id:{x:1}}),JSON.stringify({...rpc('ping'),params:[]}),JSON.stringify({...rpc('ping'),result:{}})]) assert.equal((await call(input)).status,400,input);
  const old=reads;
  for(const args of [null,[], 'x',{system:4},{extra:true}]) {
    const r=await (await call(rpc('tools/call',{name:'list_tunings',arguments:args}))).json();assert.equal(r.error.code,-32602);
  }
  assert.equal(reads,old);
  for(const name of ['get_tuning','get_test_spec']) assert.equal((await (await call(rpc('tools/call',{name}))).json()).error.code,-32602);
});
test('MCP bounds even unadvertised bodies, handles notifications and validates HTTP headers',async()=>{
  assert.equal((await call(' '.repeat(65537))).status,413);
  assert.equal((await call(rpc('ping'),{headers:{'content-type':'text/plain'}})).status,415);
  assert.equal((await call(rpc('ping'),{headers:{'mcp-protocol-version':'unknown'}})).status,400);
  const n=await call({jsonrpc:'2.0',method:'notifications/initialized'});assert.equal(n.status,202);assert.equal(await n.text(),'');
  assert.equal((await call({jsonrpc:'2.0',id:0,result:{}})).status,202);
  const g=await call(null,{method:'GET'});assert.equal(g.status,405);assert.equal(g.headers.get('allow'),'POST, OPTIONS');
  assert.equal(g.headers.get('cache-control'),'no-store');
});
test('MCP allows trusted browser origins and backend clients, rejects untrusted and malformed origins',async()=>{
  for(const origin of ['https://evil.example','null','https://claude.ai.evil.example','https://claude.ai/path']) assert.equal((await call(rpc('ping'),{headers:{origin}})).status,403);
  for(const origin of ['https://agent-tune.com','https://claude.ai','https://chatgpt.com']) {
    const r=await call(null,{method:'OPTIONS',headers:{origin}});assert.equal(r.status,204);assert.equal(r.headers.get('access-control-allow-origin'),origin);
  }
  assert.equal((await call(rpc('ping'))).status,200);
});
function conforms(schema,value){
 if(schema.type==='object'){assert.ok(value&&typeof value==='object'&&!Array.isArray(value));for(const key of schema.required||[])assert.ok(Object.hasOwn(value,key),key);for(const [key,s]of Object.entries(schema.properties||{}))if(Object.hasOwn(value,key))conforms(s,value[key]);}
 else if(schema.type==='array'){assert.ok(Array.isArray(value));value.forEach(v=>conforms(schema.items,v));}
 else if(schema.type==='integer')assert.ok(Number.isInteger(value));else assert.equal(typeof value,schema.type);
}
test('MCP structured results match advertised schemas and retain readable text',async()=>{
 const tools=(await(await call(rpc('tools/list'))).json()).result.tools;
 for(const [name,args]of [['list_tunings',{}],['get_tuning',{system:'mbti',slug:'entp'}],['get_test_spec',{test:'big-five'}],['list_resources',{query:'Claude'}],['get_resource',{id:'claude-personality'}]]){
  const r=(await(await call(rpc('tools/call',{name,arguments:args}))).json()).result;assert.ok(!r.isError,name);assert.ok(r.content[0].text.length);conforms(tools.find(t=>t.name===name).outputSchema,r.structuredContent);
  if(name==='get_tuning'){assert.match(r.structuredContent.body,/^# ENTP/);assert.doesNotMatch(r.structuredContent.body,/install:/);assert.match(r.structuredContent.metadata_markdown,/install:/);}
 }
 const bad=(await(await call(rpc('tools/call',{name:'get_resource',arguments:{id:'../../package.json'}}))).json()).result;assert.equal(bad.isError,true);
});
