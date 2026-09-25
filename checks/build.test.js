const test = require('node:test');
const assert = require('node:assert/strict');
const { versionAssets, ASSETS } = require('../tools/build-public');

test('published HTML references shared assets by content hash, in both path forms, and nothing else changes', () => {
  const hashes = Object.fromEntries(ASSETS.map(a => [a, 'abc123def0']));
  const html = '<link rel="stylesheet" href="styles.css" /><link rel="stylesheet" href="/styles.css" /><script src="/data.js"></script><script defer src="consent.js"></script>' +
    '<a href="/research/data/september-2026-summary.csv">csv</a><a href="/tunings/mbti/INTJ.md">md</a><script src="/functions/other.js"></script>';
  const out = versionAssets(html, hashes);
  assert.match(out, /href="styles\.css\?v=abc123def0"/);
  assert.match(out, /href="\/styles\.css\?v=abc123def0"/);
  assert.match(out, /src="\/data\.js\?v=abc123def0"/);
  assert.match(out, /src="consent\.js\?v=abc123def0"/);
  assert.match(out, /href="\/research\/data\/september-2026-summary\.csv"/);
  assert.match(out, /src="\/functions\/other\.js"/);
  assert.equal(versionAssets(html, {}), html);
});
