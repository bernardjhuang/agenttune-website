const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const compact = require('../compact-tunings');
const { fixture, ROOT } = require('./browser-fixture.cjs');
const catalog = require('../library/index.json');
const f = fixture(); f.run('data.js'); f.run('compact-tunings.js'); f.run('integrations.js');

test('every catalog tuning has a compact export under 1500 characters, from both rich and fallback Markdown', () => {
  assert.equal(catalog.tunings.length, 43);
  assert.deepEqual(new Set(compact.keys), new Set(catalog.tunings.map(t => t.system + '/' + t.slug)));
  for (const t of catalog.tunings) {
    const expected = compact.get(t.system, t.slug);
    assert.ok(expected.length > 150 && expected.length <= 1500, t.slug);
    const md = fs.readFileSync(path.join(ROOT, t.src), 'utf8');
    assert.equal(compact.fromMarkdown(md, f.ctx.AT_CONTACTS), expected, t.slug + ' rich');
    const contact = f.ctx.AT_CONTACTS.find(c => '/tunings/' + c.path === t.src);
    assert.ok(contact, t.slug + ' contact');
    assert.equal(compact.fromMarkdown(contact.tuning, f.ctx.AT_CONTACTS), expected, t.slug + ' fallback');
  }
  assert.equal(compact.fromMarkdown('# Unknown custom instructions'), null);
});

test('all 243 OCEAN pole combinations fit, including neutral and all five traits', () => {
  const dims = ['openness','conscientiousness','extraversion','agreeableness','neuroticism'];
  for (let n = 0; n < 243; n++) {
    let x = n; const files = [];
    for (const dim of dims) {
      const choice = x % 3; x = Math.floor(x / 3);
      if (choice) files.push(`canonical_url: https://agent-tune.com/library/ocean/${dim}-${choice === 1 ? 'high' : 'low'}`);
    }
    const out = compact.fromMarkdown('# Your OCEAN profile\n' + files.join('\n'));
    assert.ok(out && out.length <= 1500 && !out.includes('undefined'), 'combination ' + n);
    for (const model of ['any','astra-6','sol-6']) {
      const wrapped = f.ctx.AT_PROMPTS.snippet('# Your OCEAN profile\n' + files.join('\n'),model,'chatgpt-custom');
      assert.ok(wrapped.length > 150 && wrapped.length <= 1500, 'wrapped combination ' + n + ' / ' + model);
    }
  }
});

function pickerFixture(html = '') {
  const g = fixture(html);
  const root = g.ids.get('integration-deep') || g.document.createElement('div');
  root.id = 'integration-deep'; root.nodeType = 1;
  root.queries = { '[data-model]': g.document.createElement('select'), '[data-target]': g.document.createElement('select') };
  g.run('data.js'); g.run('compact-tunings.js'); g.run('integrations.js');
  return { ...g, root, field: sel => root.querySelector(sel) };
}

test('generator disables old output during loads, ignores stale responses, and rejects failed fetches', async () => {
  const html = fs.readFileSync(ROOT+'/tools/custom-instructions-generator.html','utf8');
  const g = pickerFixture(html), pending = new Map();
  g.ctx.fetch = url => url === '/library/index.json' ? Promise.resolve({ok:true,json:async()=>catalog}) : new Promise(resolve=>pending.set(url,resolve));
  const code = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('const labels ='))[1];
  const flush = () => new Promise(resolve=>setImmediate(resolve));
  vm.runInContext(code,g.ctx); await flush();
  assert.equal(g.root.hidden,true);
  const first = [...pending.values()][0];
  g.ids.get('type').value='infp'; g.ids.get('type').fire('change');
  const second = pending.get('/tunings/mbti/INFP.md');
  second({ok:true,text:async()=>'# Current tuning'}); await flush();
  assert.equal(g.root.hidden,false);
  assert.equal(g.field('[data-copy]').disabled,false);
  assert.match(g.field('.snippet').textContent,/# Current tuning/);
  first({ok:true,text:async()=>'OUTDATED TUNING'}); await flush();
  assert.doesNotMatch(g.field('.snippet').textContent,/OUTDATED/);
  g.ids.get('type').value='entp'; g.ids.get('type').fire('change');
  assert.equal(g.root.hidden,true);
  assert.equal(g.field('[data-copy]').disabled,true);
  pending.get('/tunings/mbti/ENTP.md')({ok:false}); await flush();
  assert.equal(g.root.hidden,true);
  assert.match(g.ids.get('load-status').textContent,/Couldn't load/);
});

test('picker copies compact ChatGPT exports and retains full text in other destinations', async () => {
  const g = pickerFixture(); let clipboard = '';
  g.ctx.navigator.clipboard.writeText = async text => { clipboard = text; };
  const body = fs.readFileSync(path.join(ROOT,'tunings/attachment/anxious.md'),'utf8');
  g.ctx.renderIntegrations(body,{container:g.root,model:'sol-6',target:'chatgpt-custom'});
  const expected = g.ctx.AT_PROMPTS.snippet(body,'sol-6','chatgpt-custom');
  assert.equal(g.field('.snippet').textContent,expected);
  assert.ok(expected.length <= 1500);
  g.field('[data-copy]').click(); await Promise.resolve(); assert.equal(clipboard,expected);
  g.root.__atPicker.selectTarget('anywhere');
  assert.ok(g.field('.snippet').textContent.length > 1500);
  assert.ok(g.field('.snippet').textContent.endsWith(g.ctx.AT_PROMPTS.stripFrontMatter(body)));
  g.root.__atPicker.selectTarget('chatgpt-custom');
  g.root.__atPicker.setTuning('Unknown custom text '.repeat(100));
  assert.equal(g.field('[data-copy]').disabled,true);
  assert.match(g.field('[data-status]').textContent,/No compact version/);
});

test('documented downloads are safe to repeat and HTTP failures preserve existing instructions and styles', () => {
  const llms = fs.readFileSync(ROOT+'/llms.txt','utf8');
  const recipes = [...llms.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map(m=>m[1]).filter(s=>s.includes('tuning_dir=$(mktemp'));
  assert.equal(recipes.length,3);
  const mock = 'curl() { if [ "$MOCK_FAIL" = "1" ]; then return 22; fi; while [ "$1" != "--output" ]; do shift; done; shift; printf "%s\\n" "# Downloaded tuning" > "$1"; }\n';
  const dir = fs.mkdtempSync(path.join(os.tmpdir(),'agenttune-download-check-'));
  try {
    for (const [i, recipe] of recipes.entries()) {
      const cwd=path.join(dir,String(i)); fs.mkdirSync(cwd);
      fs.mkdirSync(path.join(cwd,'.claude/output-styles'),{recursive:true});
      const paths=['CLAUDE.md','AGENTS.md','.claude/output-styles/agenttune-mbti-estp.md'];
      for(const p of paths)fs.writeFileSync(path.join(cwd,p),'Existing custom rules.');
      for(const fail of ['0','1']) {
        const cmd=mock+recipe.replaceAll('~/.claude','./.claude');
        const run=spawnSync('sh',['-c',cmd],{cwd,encoding:'utf8',env:{...process.env,MOCK_FAIL:fail}});
        if(fail==='1')assert.notEqual(run.status,0);
        for(const p of paths)assert.equal(fs.readFileSync(path.join(cwd,p),'utf8'),'Existing custom rules.');
      }
    }
  } finally { fs.rmSync(dir,{recursive:true,force:true}); }
});

test('picker file destinations emit reviewable text and never destructive install commands', () => {
  for (const id of ['claude-code','codex-cli','openclaw','cursor','hermes','copilot','gemini-code-assist']) {
    const item = f.ctx.AT_INTEGRATIONS.find(i => i.id === id);
    const text = f.ctx.AT_PROMPTS.snippet('# Preferences\nBe concise.','any',id);
    assert.doesNotMatch(text, /cat\s*>|curl|rm\s/);
    assert.match(item.steps, /[Pp]reserv|[Mm]erge|alongside|Keep existing/);
  }
});

test('inline scripts and structured data parse; every integration and quiz loads its shared dependencies', () => {
  function walk(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory() ? (['node_modules','.git','dist'].includes(e.name) ? [] : walk(path.join(dir,e.name))) : [path.join(dir,e.name)]); }
  const files = walk(ROOT).filter(p => p.endsWith('.html') && require('../tools/build-public').isPublic(path.relative(ROOT,p).split(path.sep).join('/')));
  for (const file of files) {
    const html = fs.readFileSync(file,'utf8');
    for (const [,src] of html.matchAll(/<script[^>]+src="(\/[^"]+)"/g)) {
      assert.ok(require('../tools/build-public').isPublic(src.slice(1)), 'Required script omitted from public build: ' + src);
      assert.ok(fs.existsSync(path.join(ROOT,src)), 'Missing script: ' + src);
    }
    for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (m[1].includes('application/ld+json')) JSON.parse(m[2]);
      else if (m[2].trim()) new vm.Script(m[2],{filename:file});
    }
    assert.doesNotMatch(html,/googletagmanager\.com\/gtag|gtag\(["']config/);
    if (html.includes('src="/integrations.js"')) assert.ok(html.indexOf('src="/compact-tunings.js"') >= 0 && html.indexOf('src="/compact-tunings.js"') < html.indexOf('src="/integrations.js"'),file);
    if (html.includes('ATQuiz.transition')) assert.match(html,/src="\/quiz-utils\.js"/);
  }
  assert.match(fs.readFileSync(ROOT+'/research/i-took-the-mbti-100-times.html','utf8'),/src="\/consent\.js"/);
});
