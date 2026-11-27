const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const read = p => fs.readFileSync(p, 'utf8');

const ATLAS_SLUGS = [
  'ai-personality-rankings',
  'ai-mbti-personalities',
  'ai-enneagram-personalities',
  'ai-big-five-personalities',
  'ai-disc-personalities',
  'ai-attachment-styles',
  'ai-hexaco-personalities',
  'what-personality-type-is-claude',
  'what-personality-type-is-chatgpt',
  'what-personality-type-is-gemini',
  'what-personality-type-is-muse',
  'what-personality-type-are-open-source-models'
];

const ATLAS_CSVS = [
  'research/data/model-profiles/atlas-overview.csv',
  'research/data/model-profiles/atlas-mbti.csv',
  'research/data/model-profiles/atlas-enneagram.csv',
  'research/data/model-profiles/atlas-big-five.csv',
  'research/data/model-profiles/atlas-disc.csv',
  'research/data/model-profiles/atlas-attachment.csv',
  'research/data/model-profiles/atlas-hexaco.csv'
];

const RETIRED_TARGETS = [
  ['/research/what-personality-type-is-grok', '/models/grok'],
  ['/research/what-personality-type-is-grok.md', '/models/grok.md'],
  ['/research/grok-attachment-cutoff-simulation', '/models/grok'],
  ['/research/grok-attachment-cutoff-simulation.md', '/models/grok.md'],
  ['/guides/claude-opus-5-5-personality', '/models/claude-opus'],
  ['/guides/claude-opus-5-5-personality.md', '/models/claude-opus.md'],
  ['/research/claude-opus-5-5-personality', '/models/claude-opus'],
  ['/research/claude-opus-5-5-personality.md', '/models/claude-opus.md'],
  ['/guides/fable-personality', '/models/claude-fable'],
  ['/guides/fable-personality.md', '/models/claude-fable.md'],
  ['/research/claude-fable-5-1-personality', '/models/claude-fable'],
  ['/research/claude-fable-5-1-personality.md', '/models/claude-fable.md'],
  ['/guides/sol-personality', '/models/gpt-sol'],
  ['/guides/sol-personality.md', '/models/gpt-sol.md'],
  ['/research/gpt-6-sol-personality', '/models/gpt-sol'],
  ['/research/gpt-6-sol-personality.md', '/models/gpt-sol.md'],
  ['/research/first-ai-that-is-not-an-intj', '/research/ai-mbti-personalities'],
  ['/research/first-ai-that-is-not-an-intj.md', '/research/ai-mbti-personalities.md']
];

const RETIRED_ROUTES = [
  '/guides/claude-opus-5-5-personality',
  '/guides/fable-personality',
  '/guides/sol-personality',
  '/research/what-personality-type-is-grok',
  '/research/first-ai-that-is-not-an-intj',
  '/research/grok-attachment-cutoff-simulation',
  '/research/claude-opus-5-5-personality',
  '/research/claude-fable-5-1-personality',
  '/research/gpt-6-sol-personality'
];

const RETIRED_FILES = [
  'guides/src/claude-opus-5-5-personality.json',
  'guides/src/fable-personality.json',
  'guides/src/sol-personality.json',
  'guides/claude-opus-5-5-personality.html',
  'guides/claude-opus-5-5-personality.md',
  'guides/fable-personality.html',
  'guides/fable-personality.md',
  'guides/sol-personality.html',
  'guides/sol-personality.md',
  'research/src/what-personality-type-is-grok.json',
  'research/src/first-ai-that-is-not-an-intj.json',
  'research/what-personality-type-is-grok.html',
  'research/what-personality-type-is-grok.md',
  'research/first-ai-that-is-not-an-intj.html',
  'research/first-ai-that-is-not-an-intj.md'
];

function walkHtml(dir, base = '') {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${ent.name}` : ent.name;
    if (ent.isDirectory()) {
      out.push(...walkHtml(path.join(dir, ent.name), rel));
    } else if (ent.name.endsWith('.html')) {
      out.push(rel);
    }
  }
  return out;
}

function normalizePath(href) {
  let clean = href.replace(/^https?:\/\/agent-tune\.com/i, '').split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  if (clean.endsWith('.html') && clean !== '/index.html') clean = clean.slice(0, -5);
  if (clean === '/index.html') clean = '/';
  return clean;
}

function stripNavAndFooter(html) {
  return html
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, ' ');
}

test('all 12 Atlas pages and 7 CSVs are promoted, listed, and free of stale ChatGPT article layout', () => {
  const publicAssets = new Set(JSON.parse(read(path.join(ROOT, 'public-assets.json'))).files);
  const sitemap = read(path.join(ROOT, 'sitemap.xml'));
  const llms = read(path.join(ROOT, 'llms.txt'));
  const catalog = JSON.parse(read(path.join(ROOT, 'resources/catalog.json')));
  const researchIds = new Set(catalog.resources.filter(r => r.kind === 'research').map(r => r.id));
  const modelIds = new Set(catalog.resources.filter(r => r.kind === 'model').map(r => r.id));

  assert.equal(modelIds.size, 25, 'catalog.json must index all 25 model families');

  for (const slug of ATLAS_SLUGS) {
    assert.ok(fs.existsSync(path.join(ROOT, 'research/src', `${slug}.json`)), `Missing research/src/${slug}.json`);
    assert.ok(fs.existsSync(path.join(ROOT, 'research', `${slug}.html`)), `Missing research/${slug}.html`);
    assert.ok(fs.existsSync(path.join(ROOT, 'research', `${slug}.md`)), `Missing research/${slug}.md`);
    assert.ok(fs.existsSync(path.join(DIST, 'research', `${slug}.html`)), `Missing dist/research/${slug}.html`);
    assert.ok(fs.existsSync(path.join(DIST, 'research', `${slug}.md`)), `Missing dist/research/${slug}.md`);
    assert.ok(publicAssets.has(`research/${slug}.html`), `public-assets.json missing research/${slug}.html`);
    assert.ok(publicAssets.has(`research/${slug}.md`), `public-assets.json missing research/${slug}.md`);
    assert.ok(sitemap.includes(`https://agent-tune.com/research/${slug}`), `sitemap.xml missing ${slug}`);
    assert.ok(llms.includes(`/research/${slug}`), `llms.txt missing ${slug}`);
    assert.ok(researchIds.has(slug), `catalog.json missing research ${slug}`);
  }

  for (const csv of ATLAS_CSVS) {
    assert.ok(fs.existsSync(path.join(ROOT, csv)), `Missing ${csv}`);
    assert.ok(fs.existsSync(path.join(DIST, csv)), `Missing dist/${csv}`);
    assert.ok(publicAssets.has(csv), `public-assets.json missing ${csv}`);
  }

  const chatgptHtml = read(path.join(DIST, 'research/what-personality-type-is-chatgpt.html'));
  assert.doesNotMatch(chatgptHtml, /class="article-dek"/, 'stale hand-written ChatGPT HTML must be replaced by Atlas layout');
  assert.match(chatgptHtml, /GPT Astra|gpt-astra/, 'ChatGPT Atlas page must reference GPT Astra family data');
});

test('redirects are direct with zero 2-hop chains and retired source files & links are removed', () => {
  for (const rel of RETIRED_FILES) {
    assert.equal(fs.existsSync(path.join(ROOT, rel)), false, `Retired file still exists: ${rel}`);
  }

  const redirectsText = read(path.join(DIST, '_redirects'));
  const rules = redirectsText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(l => l.split(/\s+/))
    .filter(parts => parts.length >= 3);

  const ruleMap = new Map(rules.map(([src, dst, code]) => [src, { dst, code }]));
  for (const [src, dst] of RETIRED_TARGETS) {
    const entry = ruleMap.get(src);
    assert.ok(entry, `Missing redirect rule for ${src}`);
    assert.equal(entry.dst, dst, `Redirect ${src} expected ${dst}, got ${entry.dst}`);
    assert.equal(entry.code, '301', `Redirect ${src} must be 301`);
  }

  const sources = new Set(rules.map(([src]) => src));
  for (const [src, dst] of rules.map(([s, d]) => [s, d])) {
    assert.equal(sources.has(dst), false, `2-hop redirect chain detected: ${src} -> ${dst}`);
  }

  const retiredSet = new Set(RETIRED_ROUTES.flatMap(r => [r, `${r}.md`]));
  for (const rel of walkHtml(DIST)) {
    const html = read(path.join(DIST, rel));
    for (const m of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
      const p = normalizePath(m[1]);
      if (p && retiredSet.has(p)) {
        assert.fail(`Found internal link to retired route ${p} inside dist/${rel}`);
      }
    }
  }
});

test('/models/, all 25 model profiles, and all 12 Atlas pages have >= 3 non-nav inbound links', () => {
  const modelSlugs = fs
    .readdirSync(path.join(ROOT, 'models/src'))
    .filter(n => n.endsWith('.json') && !n.startsWith('_'))
    .map(n => JSON.parse(read(path.join(ROOT, 'models/src', n))).family_slug)
    .filter(Boolean);
  assert.equal(modelSlugs.length, 25);

  const targets = [
    '/models/',
    ...modelSlugs.map(s => `/models/${s}`),
    ...ATLAS_SLUGS.map(s => `/research/${s}`)
  ];
  const inboundCounts = Object.fromEntries(targets.map(t => [t, new Set()]));

  for (const rel of walkHtml(DIST)) {
    const pageRoute = normalizePath('/' + rel);
    const bodyOnly = stripNavAndFooter(read(path.join(DIST, rel)));
    for (const m of bodyOnly.matchAll(/\bhref=["']([^"']+)["']/gi)) {
      const target = normalizePath(m[1]);
      if (!target || target === pageRoute) continue;
      if (Object.hasOwn(inboundCounts, target)) {
        inboundCounts[target].add(pageRoute);
      }
    }
  }

  const failures = [];
  for (const [target, sources] of Object.entries(inboundCounts)) {
    if (sources.size < 3) failures.push(`${target}: ${sources.size} (${[...sources].join(', ')})`);
  }
  assert.deepEqual(failures, [], `Targets below 3 non-nav inbound links:\n${failures.join('\n')}`);
});

test('Cloudflare _headers has strictly fewer than 100 path blocks', () => {
  for (const file of [path.join(ROOT, '_headers'), path.join(DIST, '_headers')]) {
    const text = read(file);
    const blocks = text.split(/\r?\n/).filter(line => /^\/\S*/.test(line));
    assert.ok(blocks.length < 100, `${file} has ${blocks.length} path blocks (must be < 100)`);
  }
});
