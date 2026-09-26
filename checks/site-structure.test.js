'use strict';
/* Structural guards for every published page: one <main> landmark that is the
 * skip-link target, one <h1>, a meta description under 160 characters, and no
 * request for font weights the stylesheet never uses. */
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return ['node_modules', '.git', 'dist', 'docs', 'og-options'].includes(e.name) ? [] : walk(path.join(dir, e.name));
    return e.name.endsWith('.html') ? [path.join(dir, e.name)] : [];
  });
}
const pages = walk(ROOT).filter(file => require('../tools/build-public').isPublic(path.relative(ROOT,file).split(path.sep).join('/')));

test('every page has one <main> landmark that the skip link targets', () => {
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);
    assert.equal((html.match(/<main\b/g) || []).length, 1, `${rel}: expected exactly one <main>`);
    assert.match(html, /<main[^>]*\bid="main"/, `${rel}: <main> must carry id="main"`);
    assert.match(html, /class="skip-link" href="#main"/, `${rel}: missing skip link`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${rel}: expected exactly one <h1>`);
  }
});

test('meta descriptions stay under 160 characters and fonts skip unused weights', () => {
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);
    const m = html.match(/<meta name="description" content="([^"]*)"/);
    assert.ok(m, `${rel}: missing meta description`);
    assert.ok(m[1].replace(/&#39;/g, "'").length <= 160, `${rel}: description is ${m[1].length} characters`);
    assert.doesNotMatch(html, /6\.\.72,300;|Plex\+Sans:wght@300/, `${rel}: requests font weight 300, which styles.css never uses`);
  }
});
