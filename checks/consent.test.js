const test = require('node:test');
const assert = require('node:assert/strict');
const { fixture } = require('./browser-fixture.cjs');
const DISABLE = 'ga-disable-G-5MYEW2MEE1';
const scripts = f => f.document.head.children.filter(e => e.tagName === 'SCRIPT');

test('new and declined visits never load the Google Analytics tag', () => {
  for (const choice of [null, 'denied']) {
    const f = fixture(); if (choice) f.storage.set('at_consent', choice);
    f.run('consent.js');
    assert.equal(scripts(f).length, 0); assert.equal(f.ctx[DISABLE], true);
    if (!choice) f.ids.get('at-consent').querySelector('.at-decline').click();
    assert.equal(f.storage.get('at_consent'), 'denied');
    assert.equal(scripts(f).length, 0);
  }
});

test('allow, withdraw, decline, and re-allow control an already-loaded tag without duplicate scripts', () => {
  const f = fixture(); f.run('consent.js');
  f.ids.get('at-consent').querySelector('.at-allow').click();
  assert.equal(scripts(f).length, 1); assert.equal(f.ctx[DISABLE], false);
  const before = f.ctx.dataLayer.length;
  f.ctx.atConsentReset();
  assert.equal(f.ctx[DISABLE], true);
  f.ctx.gtag('event','should_not_send'); assert.equal(f.ctx.dataLayer.length, before);
  assert.ok(f.deletedCookies.some(c => c.startsWith('_ga=; Max-Age=0;')));
  assert.ok(!f.deletedCookies.some(c => c.startsWith('unrelated=')));
  f.ids.get('at-consent').querySelector('.at-decline').click();
  assert.equal(f.ctx[DISABLE], true);
  f.ctx.atConsentReset(); f.ids.get('at-consent').querySelector('.at-allow').click();
  assert.equal(f.ctx[DISABLE], false); assert.equal(scripts(f).length, 1);
  f.ctx.gtag('event','allowed'); assert.equal(f.ctx.dataLayer.length, before + 1);
});

test('withdrawal in another tab disables the active tag', () => {
  const f = fixture(); f.storage.set('at_consent','granted'); f.run('consent.js');
  f.storage.set('at_consent','denied'); f.dispatch('storage',{ key:'at_consent' });
  assert.equal(f.ctx[DISABLE], true);
  const before = f.ctx.dataLayer.length; f.ctx.gtag('event','blocked');
  assert.equal(f.ctx.dataLayer.length, before);
});
