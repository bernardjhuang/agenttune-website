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
const f = fixture(); f.run('data.js'); f.run('integrations.js');

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
  }
});

test('generator copy stays disabled while loading, ignores stale fetches, and rejects HTTP failures', async () => {
  const html = fs.readFileSync(ROOT+'/tools/custom-instructions-generator.html','utf8');
  const g = fixture(html); g.run('compact-tunings.js'); g.ids.get('target').value = 'chatgpt';
  const pending = new Map();
  g.ctx.fetch = url => url === '/library/index.json' ? Promise.resolve({ok:true,json:async()=>catalog}) : new Promise(resolve=>pending.set(url,resolve));
  const code = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('var SYSTEM_LABELS'))[1];
  const flush = () => new Promise(resolve=>setImmediate(resolve));
  vm.runInContext(code,g.ctx); await flush();
  assert.equal(g.ids.get('copy').disabled,false);
  g.ids.get('target').value='agentsmd'; g.ids.get('target').fire('change');
  assert.equal(g.ids.get('copy').disabled,true);
  const first = [...pending.values()][0];
  g.ids.get('target').value='chatgpt'; g.ids.get('target').fire('change');
  const compactText = g.ids.get('out').textContent;
  first({ok:true,text:async()=>'OUTDATED FULL TUNING'}); await flush();
  assert.equal(g.ids.get('out').textContent,compactText);
  g.ids.get('type').value='infp'; g.ids.get('target').value='agentsmd'; g.ids.get('target').fire('change');
  const failed = [...pending.values()].at(-1); failed({ok:false,status:503}); await flush();
  assert.equal(g.ids.get('copy').disabled,true);
  assert.match(g.ids.get('out').textContent,/Couldn't load/);
});

test('shared integration displays and copies the compact text, while unrestricted cards retain the full body', async () => {
  const local = fixture(); local.run('data.js'); local.run('compact-tunings.js'); local.run('integrations.js');
  let clipboard = ''; local.ctx.navigator.clipboard.writeText = async text => { clipboard = text; };
  local.ctx.CSS = { escape: s => s };
  const body = fs.readFileSync(path.join(ROOT, 'tunings/attachment/Anxious.md'),'utf8');
  const compactPre = { dataset:{tmpl:'[CHATGPT_PLACEHOLDER]'}, querySelector: () => compactCode, parentElement:{querySelector:()=>copy}, addEventListener() {} };
  const fullPre = { dataset:{tmpl:'Preamble\n[TUNING_PLACEHOLDER]'}, querySelector:()=>fullCode, addEventListener(){} };
  const copy = local.document.createElement('button'), compactCode = {}, fullCode = {};
  copy.setAttribute('data-copy-for','chatgpt');
  const root = { nodeType:1, dataset:{}, querySelector:()=>compactPre,
    querySelectorAll: selector => selector === '.snippet-copy' ? [copy] : [compactPre,fullPre] };
  local.ctx.renderIntegrations(body, root);
  assert.equal(compactCode.textContent, compact.get('attachment','anxious'));
  assert.equal(copy.disabled,false);
  copy.click(); await Promise.resolve();
  assert.equal(clipboard, compact.get('attachment','anxious'));
  assert.ok(fullCode.textContent.length > 1500);
  assert.match(fullCode.textContent, /Preamble\n# /);
  local.ctx.renderIntegrations('# Unknown',root);
  assert.equal(copy.disabled,true);
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

test('CLI install recipes refuse overwrites and preserve existing project instructions', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(),'agenttune-install-check-'));
  try {
    const original = '# Project rules\nKeep my unique instructions.\n';
    for (const item of f.ctx.AT_INTEGRATIONS.filter(i => ['claude-code','codex-cli','openclaw','cursor','hermes'].includes(i.id))) {
      const cwd = path.join(dir,item.id); fs.mkdirSync(cwd);
      fs.writeFileSync(path.join(cwd,'CLAUDE.md'),original); fs.writeFileSync(path.join(cwd,'AGENTS.md'),original);
      // Keep the Hermes fixture in the test directory, without changing HOME.
      const snippet = item.steps.find(s => s.kind === 'snippet').body.replaceAll('~/.hermes','./.hermes').replace('[TUNING_PLACEHOLDER]','# Preferences\nBe concise.');
      const run = () => spawnSync('sh',['-c',snippet],{cwd,encoding:'utf8'});
      assert.equal(run().status,0,item.id);
      const dest = item.id === 'cursor' ? '.cursor/rules/agenttune.mdc' : item.id === 'hermes' ? '.hermes/agenttune.md' : 'agenttune-preferences.md';
      fs.writeFileSync(path.join(cwd,dest),'Do not replace this earlier tuning.');
      assert.notEqual(run().status,0,item.id+' must refuse overwrite');
      assert.equal(fs.readFileSync(path.join(cwd,dest),'utf8'),'Do not replace this earlier tuning.');
      for (const file of ['CLAUDE.md','AGENTS.md']) assert.equal(fs.readFileSync(path.join(cwd,file),'utf8'),original);
    }
  } finally { fs.rmSync(dir,{recursive:true,force:true}); }
});

test('inline scripts and structured data parse; every integration and quiz loads its shared dependencies', () => {
  function walk(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory() ? (['node_modules','.git'].includes(e.name) ? [] : walk(path.join(dir,e.name))) : [path.join(dir,e.name)]); }
  const files = walk(ROOT).filter(p => p.endsWith('.html'));
  for (const file of files) {
    const html = fs.readFileSync(file,'utf8');
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
