const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
module.exports=function(out){
 const content=require('./content-bundle.cjs')(),read=p=>fs.readFileSync(path.join(out,p),'utf8');
 const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
 for(const [p,meta]of Object.entries(content.manifest.files))assert.equal(hash(read('resources/content/'+p)),meta.sha256,'Content artifact '+p);
 assert.equal(read('resources/scoring/score.js'),content.read('score.js'));
 for(const p of content.profiles){const body=read('resources/tunings/'+p.id+'.md');assert.equal(hash(body),p.sha256,p.id);assert.ok(read('tunings/'+p.path).endsWith(body),p.path);}
 for(const p of content.rights.instruments.filter(r=>!r.available)){
  assert.match(read('tests/'+p.route+'.md'),/unavailable_pending_rights/);
  assert.doesNotMatch(read('tests/'+p.route+'.html'),/const ITEMS|id="quiz-start"/);
 }
 assert.deepEqual(JSON.parse(read('resources/scoring/questions.json')).map(d=>d.id),content.definitions.map(d=>d.id));
 for(const p of content.rights.instruments.filter(r=>r.available)){assert.match(read('tests/'+p.route+'.html'),/id="quiz-start"/);assert.match(read('tests/'+p.route+'.html'),/const ITEMS/);assert.ok(read('tests/'+p.route+'.md').includes(p.instrumentId+'@'+p.instrumentVersion));}
 const demo=JSON.parse(read('resources/enneagram/questions.json'));assert.equal(demo.status,'synthetic_demo_only');assert.ok(demo.items.every(i=>i.text.startsWith('Demo input ')));
 const historical=JSON.parse(read('research/data/september-2026-instruments.json'));
 for(const name of ['mbti','disc','enneagram','attachment'])for(const item of historical[name].items)for(const key of ['text','first','second'])if(item[key])assert.ok(item[key].startsWith(name+' legacy item '),'Historical question payload');
 const {spawnSync}=require('node:child_process');const zip=spawnSync('python3',['tools/build-enneagram-starter.py','--check'],{cwd:content.root,encoding:'utf8'});assert.equal(zip.status,0,zip.stderr||zip.stdout);
 assert.equal(hash(fs.readFileSync(path.join(out,'resources/enneagram/enneagram-react-typescript.zip'))),hash(fs.readFileSync(path.join(content.root,'resources/enneagram/enneagram-react-typescript.zip'))));
 return true;
};
