'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const summary = require('../research/data/september-2026-summary.json');
const protocols = require('../research/data/september-2026-protocols.json');
const html = fs.readFileSync(path.join(__dirname, '../research/ai-personality-five-models-2026.html'), 'utf8');
const charts = new Map([...html.matchAll(/<svg class="research-chart"[\s\S]*?<\/svg>/g)].map(([svg]) => [svg.match(/<title id="([^"]+)-t">/)[1], svg]));
const names = {'gpt-6-astra':'GPT-6 Astra', 'gpt-6-sol':'GPT-6 Sol', 'claude-opus-5-5':'Claude Opus 5.5', 'claude-fable-5-1':'Claude Fable 5.1'};
const rounded = n => (Math.round(n * 10) / 10).toFixed(1);
const description = id => charts.get(id).match(/<desc[^>]*>([\s\S]*?)<\/desc>/)[1];

test('published research charts match the scored cohorts and distinguish canonical from aggregate evidence', () => {
  const scales = [
    ['fig-big5','big-five',[['O','Openness'],['C','Conscientiousness'],['E','Extraversion'],['A','Agreeableness'],['N','Neuroticism']]],
    ['fig-disc','disc',[['D','Dominance'],['I','Influence'],['S','Steadiness'],['C','Conscientiousness']]],
    ['fig-ennea','enneagram',Array.from({length:9},(_,i)=>[String(i+1),'Type '+(i+1)])]
  ];
  for (const [id,instrument,axes] of scales) for (const [model,name] of Object.entries(names)) {
    const expected = `${name}: ` + axes.map(([key,label])=>`${label} ${rounded(summary[model][instrument].values[key].mean)}`).join(', ');
    assert.ok(description(id).includes(expected), `${id}: ${model} values differ from the scored dataset`);
  }
  for (const id of ['fig-disc','fig-ennea']) {
    assert.ok(description(id).includes('Grok 4.6 (canonical, n=1):'));
    assert.ok(description(id).includes('Muse Spark 1.3 (reported):'));
    assert.ok(!description(id).includes('Muse Spark 1.3 (canonical'));
  }
  for (const [model,name] of Object.entries(names)) {
    const counts = ['mbti','disc','enneagram'].map(k=>summary[model][k].runs_with_ties);
    assert.ok(description('fig-ties').includes(`${name}: MBTI: any axis tied ${counts[0]}, DISC: top score tied ${counts[1]}, Enneagram: top score tied ${counts[2]}`));
    const point = summary[model].attachment.values;
    assert.ok(description('fig-plane').includes(`${name}: anxiety ${point.anxiety.mean.toFixed(2)}, avoidance ${point.avoidance.mean.toFixed(2)}`));
  }
  for (const [name,p] of [['Grok 4.6',protocols.grok_reported.attachment],['Muse Spark 1.3',protocols.supplemental.attachment]]) {
    assert.ok(description('fig-plane').includes(`${name} (reported): anxiety ${p.anxiety.toFixed(2)}, avoidance ${p.avoidance.toFixed(2)}`));
  }
});

test('all six chart images have distinct accessible names, descriptions, and finite geometry', () => {
  assert.equal(charts.size, 6);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [id,svg] of charts) {
    assert.ok(svg.includes(`role="img" aria-labelledby="${id}-t ${id}-d"`), id);
    assert.ok(description(id).length > 100, id);
    assert.doesNotMatch(svg, /NaN|Infinity|undefined/);
    for (const [,dimension] of svg.matchAll(/\b(?:width|height|r)="(-?[0-9.]+)"/g)) assert.ok(Number(dimension)>=0, id);
  }
});

test('the research hub includes the archived figures without browser JavaScript and keeps build output reproducible',()=>{
  const {buildLegacy}=require('../tools/research-legacy');
  const legacy=buildLegacy(), hub=fs.readFileSync(path.join(__dirname,'../research.html'),'utf8');
  for(const [key,markup] of Object.entries(legacy))assert.ok(hub.includes('<!-- MAY_'+key.toUpperCase()+'_START -->'+markup+'<!-- MAY_'+key.toUpperCase()+'_END -->'));
  assert.ok(legacy.breakdown.includes('breakdown-model'));
  assert.equal((legacy.findings.match(/class="finding-card"/g)||[]).length,5);
  assert.doesNotMatch(hub,/<script src="\/?data.js|window.AT_RESEARCH|r="1[34]"/);
  for(const [,svg] of hub.matchAll(/(<svg class="research-chart"[\s\S]*?<\/svg>)/g)) {
    assert.match(svg,/<title /);assert.match(svg,/<desc /);assert.doesNotMatch(svg,/NaN|undefined/);
  }
});

test('every published research page includes accessible, finite inline SVG charts with unique IDs', () => {
  const researchDir = path.join(__dirname, '../research');
  const pages = [
    path.join(__dirname, '../research.html'),
    ...fs.readdirSync(researchDir).filter((f) => f.endsWith('.html')).map((f) => path.join(researchDir, f))
  ];
  assert.ok(pages.length >= 16);
  for (const file of pages) {
    const pageHtml = fs.readFileSync(file, 'utf8');
    const svgs = [...pageHtml.matchAll(/<svg class="research-chart"[\s\S]*?<\/svg>/g)].map((m) => m[0]);
    assert.ok(svgs.length >= 1, `${path.relative(path.join(__dirname, '..'), file)} should include at least 1 SVG chart`);
    const ids = [...pageHtml.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate element IDs in ${path.basename(file)}`);
    for (const svg of svgs) {
      const id = svg.match(/<title id="([^"]+)-t">/)?.[1];
      assert.ok(id, `Chart in ${path.basename(file)} missing <title id="...-t">`);
      assert.ok(svg.includes(`role="img" aria-labelledby="${id}-t ${id}-d"`), id);
      const d = svg.match(/<desc[^>]*>([\s\S]*?)<\/desc>/)?.[1] || '';
      assert.ok(d.length > 80, `${id} description too short (${d.length})`);
      assert.doesNotMatch(svg, /NaN|Infinity|undefined/, id);
      for (const [, dim] of svg.matchAll(/\b(?:width|height|r)="(-?[0-9.]+)"/g)) {
        assert.ok(Number(dim) >= 0, `${id} has negative dimension ${dim}`);
      }
    }
  }
});

test('all 19 guide pages with benchmark blocks include valid accessible SVG charts and .md summaries', () => {
  const guideSlugs = [
    'claude-personality', 'claude-opus-5-5-personality', 'fable-personality',
    'astra-personality', 'sol-personality', 'chatgpt-vs-claude-personality',
    'gemini-personality', 'grok-personality-settings', 'grokbot-personality',
    'muse-personality', 'meta-ai-vs-meta-muse-personality', 'muse-vs-chatgpt-vs-claude-personality',
    'deepseek-system-prompt-custom-instructions', 'openrouter-open-source-system-prompt-templates',
    'stop-ai-sycophancy-make-ai-push-back', 'make-claude-more-direct',
    'ai-assistant-personality-tone-guidelines', 'how-to-give-your-ai-a-personality',
    'ai-personality-frameworks-comparison-matcher'
  ];
  for (const slug of guideSlugs) {
    const file = path.join(__dirname, '../guides', `${slug}.html`);
    const pageHtml = fs.readFileSync(file, 'utf8');
    const svgs = [...pageHtml.matchAll(/<svg class="research-chart"[\s\S]*?<\/svg>/g)].map((m) => m[0]);
    assert.ok(svgs.length >= 1, `guides/${slug}.html should include at least 1 SVG chart`);
    const ids = [...pageHtml.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate element IDs in guides/${slug}.html`);
    for (const svg of svgs) {
      const id = svg.match(/<title id="([^"]+)-t">/)?.[1];
      assert.ok(id, `Chart in guides/${slug}.html missing <title id="...-t">`);
      assert.ok(svg.includes(`role="img" aria-labelledby="${id}-t ${id}-d"`), id);
      assert.doesNotMatch(svg, /NaN|Infinity|undefined/, id);
    }
    const mdFile = path.join(__dirname, '../guides', `${slug}.md`);
    if (fs.existsSync(mdFile)) {
      const md = fs.readFileSync(mdFile, 'utf8');
      assert.ok(md.includes('> **Chart —'), `guides/${slug}.md should export chart summaries`);
    }
  }
});
