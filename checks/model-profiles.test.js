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

// Group 1: Schema, bounds, 8-section plain-language order, zero jargon in §§1-6 & Fine Print rigor
test('Group 1: roster, template, schemas, 8-section order, zero jargon in §§1-6 & Fine Print rigor hold', () => {
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

  buildModels();
  const jargonRe = /\bH_MM\b|\bCrystalline\b|zero-memory elicitation|\bTrack B\b|\bBAI\b|protocol|imported-[a-z0-9-]+-170/i;

  for (const { dataset } of items) {
    const slug = dataset.family_slug;
    const htmlPath = path.join(ROOT, 'models', `${slug}.html`);
    const mdPath = path.join(ROOT, 'models', `${slug}.md`);
    assert.ok(fs.existsSync(htmlPath), `Missing models/${slug}.html`);
    assert.ok(fs.existsSync(mdPath), `Missing models/${slug}.md`);

    const html = fs.readFileSync(htmlPath, 'utf8');
    const md = fs.readFileSync(mdPath, 'utf8');

    // Verify 8-section plain-language order ("at a glance" before "The fine print")
    const idxGlance = html.indexOf('at a glance');
    const idxFinePrint = html.indexOf('The fine print: how we tested and what the numbers mean');
    assert.ok(idxGlance > 0, `${slug}: missing "at a glance" section`);
    assert.ok(idxFinePrint > idxGlance, `${slug}: "at a glance" must precede "The fine print"`);

    // Sections 1-6 (inside <main> before "The fine print" and in .md before "The fine print") MUST have zero jargon
    const mainStart = html.indexOf('<main ');
    assert.ok(mainStart > 0 && idxFinePrint > mainStart);
    const htmlPreFinePrint = html.slice(mainStart, idxFinePrint);
    const mdFineIdx = md.indexOf('The fine print: how we tested and what the numbers mean');
    assert.ok(mdFineIdx > 0, `${slug}.md: missing Fine Print section`);
    const mdPreFinePrint = md.slice(0, mdFineIdx);

    assert.equal(jargonRe.test(htmlPreFinePrint), false, `${slug}.html §§1-6 leaked jargon: ${htmlPreFinePrint.match(jargonRe)?.[0]}`);
    assert.equal(jargonRe.test(mdPreFinePrint), false, `${slug}.md §§1-6 leaked jargon: ${mdPreFinePrint.match(jargonRe)?.[0]}`);

    // Never say a model "is" an MBTI or Enneagram type
    assert.doesNotMatch(md, /\b(?:Opus|Fable|Sonnet|Astra|Sol|Grok|Spark|Wonder)\s+(?:[\d.]+\s+)?is\s+(?:an?\s+)?(?:INTJ|ISTJ|ENTP|INFJ|INTP|Type\s+\d)\b/);

    // Fine Print & technical rigor assertions
    const finePrintAndAfter = html.slice(idxFinePrint);
    assert.match(finePrintAndAfter, /assistant self-report defaults under fixed zero-memory elicitation/i);
    assert.match(finePrintAndAfter, /Crystalline|Semi-crystalline|Fluid/);
    assert.match(finePrintAndAfter, /10–50|10-50/);
    assert.match(finePrintAndAfter, /1\.00–5\.00|1-5/);
    assert.match(finePrintAndAfter, /LicenseRef-IPIP-Public-Domain/);
    assert.match(finePrintAndAfter, /class="epistemic-ledger"/);
    assert.match(html, /class="guide-table-wrap"/);
    assert.match(html, /class="research-chart-scroll"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /"name":"Models","item":"https:\/\/agent-tune\.com\/models\/"/);
    assert.match(html, /"@type":"Dataset"/);
    assert.match(html, /"variableMeasured":\[/);
    assert.match(html, /class="agent-contract-drawer"/);
    assert.match(html, /dataset_json_url:/);
    for (const blockKey of ['big_five:', 'ipip_hexaco:', 'mbti:', 'disc:', 'enneagram:', 'attachment:']) {
      assert.ok(html.includes(blockKey), `${slug}: agent brief missing ${blockKey}`);
    }
    for (const fineId of ['fine-print-mbti', 'fine-print-disc', 'fine-print-attachment', 'fine-print-enneagram', 'fine-print-big-five', 'fine-print-hexaco', 'fine-print-behavior']) {
      assert.ok(html.includes(`id="${fineId}"`), `${slug}: missing #${fineId}`);
    }
    for (const fineTarget of ['mbti', 'disc', 'attachment', 'enneagram', 'big-five', 'hexaco']) {
      assert.ok(html.includes(`href="#fine-print-${fineTarget}"`), `${slug}: glance card missing #fine-print-${fineTarget} link`);
    }
    assert.match(html, /class="trait-info-btn"/);
    assert.match(html, /class="trait-defs-fallback"/);
    assert.match(html, /class="model-wheel-strip"/);
    assert.match(html, /class="model-protocol-stamp"[^>]*overflow-wrap:anywhere/);
    assert.doesNotMatch(html, /<code>instruments_sha256=/);

    // 1x Track B must show k/3 + Wilson CI (when collected) or explicit pending notice, and never per-family % estimates
    const tbSection = /<h3>Behavioral "Say vs\. Do"[\s\S]*?(?=<h3>|<div class="epistemic-ledger")/.exec(html)?.[0] || '';
    const tbBody = /<tbody>([\s\S]*?)<\/tbody>/.exec(tbSection)?.[1] || '';
    if (tbBody) {
      assert.match(tbBody, /\b[0-3]\/3\b/);
      assert.doesNotMatch(tbBody, /\b\d+(?:\.\d+)?%/);
    } else {
      assert.match(tbSection, /Track B.*pending|Collection pending/i);
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
  assert.match(hubRaw, /class="model-hub-thumb"/);
  for (const { dataset } of items) {
    assert.ok(hubRaw.includes(`hub-${dataset.family_slug}-b5-thumb-t`), `models/index.html missing mini wheel for ${dataset.family_slug}`);
  }
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

  const distModels = path.join(ROOT, 'dist/models');
  if (fs.existsSync(distModels)) {
    assert.ok(fs.existsSync(path.join(distModels, 'index.html')));
    assert.equal(fs.existsSync(path.join(distModels, '.atlas-staging')), false);
    for (const { dataset } of items) {
      assert.ok(fs.existsSync(path.join(distModels, `${dataset.family_slug}.html`)));
      assert.ok(fs.existsSync(path.join(distModels, `${dataset.family_slug}.md`)));
    }
  }

  const siteUi = fs.readFileSync(path.join(ROOT, 'site-ui.js'), 'utf8');
  assert.match(siteUi, /\['Hub','Model personality profiles \(25 families\)','\/models\/'\]/);
  assert.match(siteUi, /MAX_COMPARE=3/);
  assert.match(siteUi, /searchParams\.set\('compare'/);
});

// Group 4: SVG ID, ARIA, <desc> > 80c & non-NaN/non-overlapping geometry hygiene
test('Group 4: model profile SVG charts have unique IDs, ARIA labels, desc > 80c & finite non-overlapping dims', () => {
  const modelPages = walkFiles(path.join(ROOT, 'models'), (f) => f.endsWith('.html') && !f.endsWith('index.html'));
  assert.ok(modelPages.length >= 1);

  for (const file of modelPages) {
    const slug = path.basename(file, '.html');
    const html = fs.readFileSync(file, 'utf8');
    const md = fs.readFileSync(path.join(ROOT, 'models', `${slug}.md`), 'utf8');
    const svgs = [...html.matchAll(/<svg class="research-chart"[\s\S]*?<\/svg>/g)].map((m) => m[0]);
    assert.ok(svgs.length >= 12, `${path.basename(file)} should contain >= 12 SVG charts, got ${svgs.length}`);
    const allIds = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(allIds).size, allIds.length, `Duplicate element IDs in ${path.basename(file)}`);

    for (const svg of svgs) {
      const id = svg.match(/<title id="([^"]+)-t">/)?.[1];
      assert.ok(id, `Chart missing <title id="...-t"> in ${path.basename(file)}`);
      const rawTitle = svg.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] || '';
      const decodedTitle = rawTitle.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      assert.ok(md.includes(`> **Chart — ${decodedTitle}:`), `${slug}.md missing > **Chart — ${decodedTitle}:** block`);
      assert.ok(svg.includes(`role="img" aria-labelledby="${id}-t ${id}-d"`), id);
      const desc = svg.match(/<desc[^>]*>([\s\S]*?)<\/desc>/)?.[1] || '';
      assert.ok(desc.length > 80, `${id}: <desc> too short (${desc.length})`);
      assert.doesNotMatch(svg, /NaN|Infinity|undefined/, id);
      assert.doesNotMatch(svg, /\(earlier study\) \(earlier study\)/, id);
      for (const [, dim] of svg.matchAll(/\b(?:width|height|r)="(-?[0-9.]+)"/g)) {
        assert.ok(Number(dim) >= 0, `${id}: negative dimension ${dim}`);
      }
    }
  }

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

  // Verify Rose Wheels (4/5/6/9 petals), MBTI Bipolar Sliders & Attachment planes across all live families
  const { items } = loadFamilies();
  const peers = items.map((i) => i.dataset);
  const wheelSpec = [
    ['big_five', 5, 10, 50, (cp) => ['O', 'C', 'E', 'A', 'N'].map((k) => cp.big_five[k].mean)],
    ['hexaco', 6, 1, 5, (cp) => ['H', 'E', 'X', 'A', 'C', 'O'].map((k) => cp.ipip_hexaco[k].mean)],
    ['disc', 4, 4, 20, (cp) => ['D', 'I', 'S', 'C'].map((k) => cp.disc[k].mean)],
    ['enneagram', 9, 4, 20, (cp) => {
      const m = new Map((cp.enneagram?.all_types || cp.enneagram?.top_types || []).map((t) => [Number(t.type), t.mean]));
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => m.get(n) ?? 4);
    }]
  ];

  for (const ds of peers) {
    const latest = ds.checkpoints[ds.checkpoints.length - 1];
    for (const [kind, count, min, max, valsFn] of wheelSpec) {
      const svg = renderCharts.renderCardWheel(ds, kind);
      const vb = svg.match(/viewBox="0 0 ([0-9.]+) ([0-9.]+)"/);
      assert.ok(vb, `${ds.family_slug} ${kind}: missing viewBox`);
      const W = Number(vb[1]), H = Number(vb[2]);
      const norms = [...svg.matchAll(/data-petal-norm="([0-9.]+)"/g)].map((m) => Number(m[1]));
      assert.equal(norms.length, count, `${ds.family_slug} ${kind}: expected ${count} petals, got ${norms.length}`);
      const rawVals = valsFn(latest);
      norms.forEach((nVal, idx) => {
        assert.ok(nVal >= 0 && nVal <= 100, `${ds.family_slug} ${kind}: norm ${nVal} out of [0,100]`);
        const expected = Math.max(0, Math.min(100, ((rawVals[idx] - min) / (max - min)) * 100));
        assert.ok(Math.abs(nVal - expected) <= 0.2, `${ds.family_slug} ${kind} petal ${idx}: ${nVal} != ${expected.toFixed(1)}`);
      });

      const txtMatches = [...svg.matchAll(/<text x="([0-9.-]+)" y="([0-9.-]+)" font-size="([0-9.]+)"[^>]*text-anchor="([^"]+)">([^<]+)<\/text>/g)];
      const petalBoxes = [];
      for (const [, x, y, fs, anchor, text] of txtMatches) {
        const fontSize = Number(fs);
        const lw = Math.ceil(text.length * fontSize * 0.56 + 2);
        let x1 = Number(x);
        if (anchor === 'middle') x1 -= lw / 2;
        else if (anchor === 'end') x1 -= lw;
        const y1 = Number(y) - fontSize;
        const x2 = x1 + lw;
        const y2 = Number(y) + 2;
        assert.ok(x1 >= 0 && x2 <= W && y1 >= 0 && y2 <= H, `${ds.family_slug} ${kind}: text "${text}" clipped outside [0,${W}]x[0,${H}] (${x1.toFixed(1)},${y1.toFixed(1)},${x2.toFixed(1)},${y2.toFixed(1)})`);
        if (Number(y) < H - 15) {
          petalBoxes.push({ text, x1, y1, x2, y2 });
        }
      }
      for (let i = 0; i < petalBoxes.length; i++) {
        for (let j = i + 1; j < petalBoxes.length; j++) {
          const a = petalBoxes[i], b = petalBoxes[j];
          const hit = !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2);
          assert.equal(hit, false, `${ds.family_slug} ${kind}: labels overlap: "${a.text}" vs "${b.text}"`);
        }
      }
    }

    const sliderSvg = renderCharts.renderBipolarSliders(ds);
    assert.doesNotMatch(sliderSvg, /NaN|Infinity|undefined/);
    assert.ok(sliderSvg.includes('viewBox="0 0 380 '), `${ds.family_slug}: slider missing viewBox`);
    const miniQuad = renderCharts.renderAttachmentQuadrantMini(ds);
    assert.doesNotMatch(miniQuad, /NaN|Infinity|undefined/);

    for (const planeFig of [renderCharts.renderAttachmentPlane(ds, peers), renderCharts.renderAttachmentTrajectory(ds)]) {
      const labels = [...planeFig.matchAll(/<text x="([0-9.]+)" y="([0-9.]+)" font-size="10\.5"[^>]*text-anchor="([^"]+)">([^<]+)<\/text>/g)];
      assert.ok(labels.length >= 1, `${ds.family_slug}: missing labels in plane()`);
      const boxes = labels.map(([, x, y, anchor, text]) => {
        const lw = Math.ceil(text.length * 6.3 + 4);
        const x1 = anchor === 'start' ? Number(x) - 2 : Number(x) - lw + 2;
        const y1 = Number(y) - 11;
        assert.ok(x1 >= 74, `${ds.family_slug}: label "${text}" encroaches on Y-axis area (x1=${x1})`);
        assert.ok(y1 + 14 <= 96 || y1 >= 110, `${ds.family_slug}: label "${text}" crosses y=4.0 threshold line (y1=${y1})`);
        return { text, x1, y1, x2: x1 + lw, y2: y1 + 14 };
      });
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], b = boxes[j];
          const hit = !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2);
          assert.equal(hit, false, `${ds.family_slug}: plane() labels overlap: "${a.text}" vs "${b.text}"`);
        }
      }
    }
  }

  // Verify rose wheel stacked legend with long Phase B names has 0 overlaps & 0 viewBox clips
  const longLegendSvg = renderCharts.renderRoseWheel({
    id: 'test-long-legend-wheel',
    title: 'Long Legend Test Wheel',
    desc: 'Verifying stacked two-line legend prevents overlap with long earliest and latest checkpoint labels across 9 petals.',
    petals: Array.from({ length: 9 }, (_, i) => ({ label: `Type ${i + 1}`, value: 8 + i })),
    earliestPetals: Array.from({ length: 9 }, (_, i) => ({ label: `Type ${i + 1}`, value: 7 + i })),
    min: 4,
    max: 20,
    scaleSuffix: '/20',
    decimals: 1,
    latestLabel: 'DeepSeek V4.1 Flash 1017',
    earliestLabel: 'DeepSeek V3.2 Flash'
  });
  const lvb = longLegendSvg.match(/viewBox="0 0 ([0-9.]+) ([0-9.]+)"/);
  const lW = Number(lvb[1]), lH = Number(lvb[2]);
  const lBoxes = [...longLegendSvg.matchAll(/<text x="([0-9.-]+)" y="([0-9.-]+)" font-size="([0-9.]+)"[^>]*text-anchor="([^"]+)">([^<]+)<\/text>/g)]
    .map(([, x, y, fs, anchor, text]) => {
      const f = Number(fs);
      const lw = Math.ceil(text.length * f * 0.56 + 2);
      let x1 = Number(x);
      if (anchor === 'middle') x1 -= lw / 2;
      else if (anchor === 'end') x1 -= lw;
      const y1 = Number(y) - f;
      const box = { text, x1, y1, x2: x1 + lw, y2: y1 + 2 };
      assert.ok(box.x1 >= 0 && box.x2 <= lW && box.y1 >= 0 && box.y2 <= lH, `Long legend text "${text}" clipped`);
      return box;
    });
  for (let i = 0; i < lBoxes.length; i++) {
    for (let j = i + 1; j < lBoxes.length; j++) {
      const a = lBoxes[i], b = lBoxes[j];
      if (Number(a.y1) > lH - 25 || Number(b.y1) > lH - 25) continue;
      const hit = !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2);
      assert.equal(hit, false, `Long legend wheel text overlap: "${a.text}" vs "${b.text}"`);
    }
  }
});
