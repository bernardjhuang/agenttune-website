'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const {
  buildModels,
  loadFamilies,
  validateSpec,
  validateDataset,
  ROSTER_25,
  BANNED_SYNTHETIC_TERMS
} = require('../tools/build-model-profiles');
const renderCharts = require('../tools/model-profiles/render-charts');
const { isPublic } = require('../tools/build-public');
const { enhance } = require('../tools/enhance-pages');
const { applyNavigation } = require('../tools/navigation');

function walkFiles(dir, pred = () => true) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((ent) => {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name.startsWith('.')) return [];
      return walkFiles(full, pred);
    }
    return pred(full) ? [full] : [];
  });
}

// Group 1: Schema, bounds, epistemic framing & template invariants
test('Group 1: roster, template, fixture/live schemas, score bounds & epistemic framing hold', () => {
  const tpl = JSON.parse(fs.readFileSync(path.join(ROOT, 'models/src/_template.json'), 'utf8'));
  assert.equal(tpl.$schema, 'agenttune-model-profile-spec-v1');
  assert.ok(Array.isArray(tpl.top_polarized_items) && tpl.top_polarized_items.length >= 3);
  assert.ok(Array.isArray(tpl.nearest_peers) && tpl.nearest_peers.length >= 2);
  assert.ok(Array.isArray(tpl.tuning_checklist) && tpl.tuning_checklist.length <= 10);

  assert.equal(ROSTER_25.length, 25);
  assert.equal(ROSTER_25.reduce((a, r) => a + r.count, 0), 93);

  const { items } = loadFamilies();
  assert.ok(items.length >= 1, 'Expected at least 1 fixture or live family');
  for (const { spec, dataset } of items) {
    validateSpec(spec, spec.family_slug);
    validateDataset(dataset, dataset.family_slug);
  }

  // Ensure built HTML pages exist (buildModels is deterministic and idempotent)
  buildModels();
  for (const { dataset } of items) {
    const slug = dataset.family_slug;
    const htmlPath = path.join(ROOT, 'models', `${slug}.html`);
    const mdPath = path.join(ROOT, 'models', `${slug}.md`);
    assert.ok(fs.existsSync(htmlPath), `Missing models/${slug}.html`);
    assert.ok(fs.existsSync(mdPath), `Missing models/${slug}.md`);

    const html = fs.readFileSync(htmlPath, 'utf8');
    assert.match(html, /assistant self-report defaults under fixed zero-memory elicitation/i);
    assert.match(html, /Crystalline|Semi-crystalline|Fluid/);
    assert.match(html, /10–50|10-50/);
    assert.match(html, /1\.00–5\.00|1-5/);
    assert.match(html, /LicenseRef-IPIP-Public-Domain/);
    assert.match(html, /class="epistemic-ledger"/);
    assert.match(html, /class="guide-table-wrap"/);
    assert.match(html, /class="research-chart-scroll"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /"name":"Models","item":"https:\/\/agent-tune\.com\/models\/"/);
    assert.match(html, /"@type":"Dataset"/);
    assert.match(html, /class="agent-contract-drawer"/);

    // 1x Track B must show k/3 + Wilson CI (when collected) or explicit pending notice, and never per-family % estimates
    const tbBody = /Behavioral "Say vs\. Do"[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/.exec(html)?.[1] || '';
    if (tbBody) {
      assert.match(tbBody, /\b[0-3]\/3\b/);
      assert.doesNotMatch(tbBody, /\b\d+(?:\.\d+)?%/);
    } else {
      assert.match(html, /Track B.*pending|Collection pending/i);
    }
  }
});

// Group 2: Anti-synthetic-HEXACO regression & staging isolation
test('Group 2: anti-synthetic-HEXACO guard bans alignment proxy fields from /models/', () => {
  const familySrcFiles = fs.existsSync(path.join(ROOT, 'models/src'))
    ? fs.readdirSync(path.join(ROOT, 'models/src'), { withFileTypes: true })
        .filter((e) => e.isFile() && e.name.endsWith('.json'))
        .map((e) => path.join(ROOT, 'models/src', e.name))
    : [];
  const targets = [
    path.join(ROOT, 'tools/model-profiles/render-charts.js'),
    ...familySrcFiles,
    ...walkFiles(path.join(ROOT, 'models/src/_fixtures'), (f) => f.endsWith('.json')),
    ...walkFiles(path.join(ROOT, 'models'), (f) => f.endsWith('.html') || f.endsWith('.md'))
  ];
  for (const file of targets) {
    const text = fs.readFileSync(file, 'utf8');
    for (const term of BANNED_SYNTHETIC_TERMS) {
      assert.equal(text.includes(term), false, `${path.relative(ROOT, file)} leaked banned term "${term}"`);
    }
  }
  for (const file of walkFiles(path.join(ROOT, 'models/src'), (f) => f.endsWith('.json'))) {
    const text = fs.readFileSync(file, 'utf8');
    assert.equal(
      text.includes('november-2026-alignment-hexaco-summary.json'),
      false,
      `${path.relative(ROOT, file)} referenced banned synthetic HEXACO dataset`
    );
  }
  const builderSrc = fs.readFileSync(path.join(ROOT, 'tools/build-model-profiles.js'), 'utf8');
  assert.doesNotMatch(builderSrc, /require\([^)]*alignment-hexaco|readFileSync\([^)]*alignment-hexaco/);
  assert.throws(
    () => validateSpec({
      family_slug: 'bad',
      title: 'Bad',
      description: 'Uses hexaco_h_proxy',
      top_polarized_items: [{}, {}, {}],
      nearest_peers: [
        { family_slug: 'a', deltas: { O: 1, H_hexaco: 0.1 } },
        { family_slug: 'b', deltas: { O: 1, H_hexaco: 0.1 } }
      ],
      failure_modes: [{}],
      tuning_checklist: ['1', '2', '3']
    }, 'bad-spec'),
    /banned synthetic HEXACO/
  );
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  assert.equal(sitemap.includes('.atlas-staging'), false);
  const assetsRaw = fs.readFileSync(path.join(ROOT, 'public-assets.json'), 'utf8');
  assert.equal(assetsRaw.includes('.atlas-staging'), false);
});

// Group 3: Build, asset allowlist, headers < 100, sitemap, nav, enhance-pages & no /tmp/ leaks (CI-safe before npm run build)
test('Group 3: build parity, enhance-pages guards, _headers < 100, sitemap & zero /tmp/ leaks hold before dist/', () => {
  assert.equal(isPublic('models/index.html'), true);
  const { items } = loadFamilies();
  for (const { dataset } of items) {
    const slug = dataset.family_slug;
    assert.equal(isPublic(`models/${slug}.html`), true, `public-assets.json missing models/${slug}.html`);
    assert.equal(isPublic(`models/${slug}.md`), true, `public-assets.json missing models/${slug}.md`);

    const rawHtml = fs.readFileSync(path.join(ROOT, 'models', `${slug}.html`), 'utf8');
    const enhanced = enhance(applyNavigation(rawHtml, `/models/${slug}`), `models/${slug}.html`);
    assert.match(enhanced, /class="article-toc"/);
    assert.match(enhanced, /class="press-spread"/);
    assert.doesNotMatch(enhanced, /id="instrument-correction"/, 'models/* must be excluded from legacy May/Sept/Nov colophon');
    assert.match(enhanced, /href="\/models\/" class="is-section"/);
  }

  const hubRaw = fs.readFileSync(path.join(ROOT, 'models/index.html'), 'utf8');
  const hubEnhanced = enhance(applyNavigation(hubRaw, '/models/'), 'models/index.html');
  assert.doesNotMatch(hubEnhanced, /class="article-toc"/, 'models/index.html must skip .article-toc');
  assert.doesNotMatch(hubEnhanced, /class="press-spread"/, 'models/index.html must skip .press-spread');
  assert.doesNotMatch(hubEnhanced, /id="instrument-correction"/);
  assert.match(hubEnhanced, /href="\/models\/" aria-current="page"/);
  assert.match(hubEnhanced, /data-models-filter/);
  assert.match(hubEnhanced, /data-models-compare/);

  const headers = fs.readFileSync(path.join(ROOT, '_headers'), 'utf8');
  assert.match(headers, /^\/models\/\*\.md$/m, '_headers missing /models/*.md wildcard rule');
  const blockCount = headers.split('\n').filter((l) => l.startsWith('/')).length;
  assert.ok(blockCount < 100, `_headers block count must be < 100, got ${blockCount}`);

  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('<loc>https://agent-tune.com/models/</loc>'), 'sitemap missing /models/');
  for (const { dataset } of items) {
    assert.ok(
      sitemap.includes(`<loc>https://agent-tune.com/models/${dataset.family_slug}</loc>`),
      `sitemap missing /models/${dataset.family_slug}`
    );
  }

  // No /tmp/ path leaks in site build scripts, generated HTML/MD, site-ui.js, headers, or sitemap
  const leakCheckFiles = [
    path.join(ROOT, 'tools/build-model-profiles.js'),
    path.join(ROOT, 'tools/model-profiles/render-charts.js'),
    path.join(ROOT, 'site-ui.js'),
    path.join(ROOT, '_headers'),
    path.join(ROOT, 'sitemap.xml'),
    ...walkFiles(path.join(ROOT, 'models'), (f) => f.endsWith('.html') || f.endsWith('.md'))
  ];
  for (const file of leakCheckFiles) {
    const text = fs.readFileSync(file, 'utf8');
    assert.equal(/\/tmp\//.test(text), false, `${path.relative(ROOT, file)} leaked /tmp/ path`);
  }

  // Optional dist/ parity checks when dist/ is present
  const distModels = path.join(ROOT, 'dist/models');
  if (fs.existsSync(distModels)) {
    assert.ok(fs.existsSync(path.join(distModels, 'index.html')));
    assert.equal(fs.existsSync(path.join(distModels, '.atlas-staging')), false);
    for (const { dataset } of items) {
      assert.ok(fs.existsSync(path.join(distModels, `${dataset.family_slug}.html`)));
      assert.ok(fs.existsSync(path.join(distModels, `${dataset.family_slug}.md`)));
    }
  }

  // Verify site-ui.js routes and progressive filter/compare wiring
  const siteUi = fs.readFileSync(path.join(ROOT, 'site-ui.js'), 'utf8');
  assert.match(siteUi, /\['Hub','Model personality profiles \(25 families\)','\/models\/'\]/);
  assert.match(siteUi, /MAX_COMPARE=3/);
  assert.match(siteUi, /searchParams\.set\('compare'/);
});

// Group 4: SVG ID, ARIA, <desc> > 80c & non-NaN geometry hygiene
test('Group 4: model profile SVG charts have unique IDs, ARIA labels, desc > 80c & finite dims', () => {
  const modelPages = walkFiles(path.join(ROOT, 'models'), (f) => f.endsWith('.html') && !f.endsWith('index.html'));
  assert.ok(modelPages.length >= 1);

  for (const file of modelPages) {
    const html = fs.readFileSync(file, 'utf8');
    const svgs = [...html.matchAll(/<svg class="research-chart"[\s\S]*?<\/svg>/g)].map((m) => m[0]);
    assert.ok(svgs.length >= 3, `${path.basename(file)} should contain >= 3 SVG charts, got ${svgs.length}`);
    const allIds = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(allIds).size, allIds.length, `Duplicate element IDs in ${path.basename(file)}`);

    for (const svg of svgs) {
      const id = svg.match(/<title id="([^"]+)-t">/)?.[1];
      assert.ok(id, `Chart missing <title id="...-t"> in ${path.basename(file)}`);
      assert.ok(svg.includes(`role="img" aria-labelledby="${id}-t ${id}-d"`), id);
      const desc = svg.match(/<desc[^>]*>([\s\S]*?)<\/desc>/)?.[1] || '';
      assert.ok(desc.length > 80, `${id}: <desc> too short (${desc.length})`);
      assert.doesNotMatch(svg, /NaN|Infinity|undefined/, id);
      for (const [, dim] of svg.matchAll(/\b(?:width|height|r)="(-?[0-9.]+)"/g)) {
        assert.ok(Number(dim) >= 0, `${id}: negative dimension ${dim}`);
      }
    }
  }

  // Stress-check 25-row horizontalBars & heatmapMatrix exported via render-charts.js
  const rows25 = ROSTER_25.map((r, i) => ({
    label: r.name,
    value: 0.1 + i * 0.05,
    color: '#3a72c4'
  }));
  const bars25 = renderCharts.horizontalBars({
    id: 'test-25-bars',
    title: '25-Family Entropy Stress Test',
    desc: 'Verifying 25-row horizontal bar chart renders with finite geometry and no overlaps across all 25 model families.',
    rows: rows25,
    min: 0,
    max: 1.5,
    decimals: 2
  });
  const hm25 = renderCharts.heatmapMatrix({
    id: 'test-25-heatmap',
    title: '25-Family Matrix Stress Test',
    desc: 'Verifying 25-row by 6-column heatmap matrix renders with finite geometry and no clipped labels across all 25 families.',
    rows: ROSTER_25.map((r) => r.name),
    cols: ['H', 'E', 'X', 'A', 'C', 'O'],
    values: ROSTER_25.map((_, i) => [0.2, 0.3, 0.4, 0.5, 0.6, 0.7].map((v) => v + (i % 3) * 0.1)),
    min: 0,
    max: 1
  });
  for (const svg of [bars25, hm25]) {
    assert.doesNotMatch(svg, /NaN|Infinity|undefined/);
    for (const [, dim] of svg.matchAll(/\b(?:width|height|r)="(-?[0-9.]+)"/g)) {
      assert.ok(Number(dim) >= 0);
    }
  }
});
