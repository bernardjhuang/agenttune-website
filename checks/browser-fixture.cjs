// Minimal event/DOM fixture for the actual inline quiz and consent scripts.
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');

function fixture(html = '') {
  let now = 0, serial = 0;
  const timers = new Map(), ids = new Map(), events = new Map();
  class Element {
    constructor(tag = 'div') {
      this.tagName = tag.toUpperCase(); this.children = []; this.dataset = {}; this.style = {};
      this.events = {}; this.attributes = {}; this.hidden = false; this.disabled = false; this.textContent = '';
      const classes = new Set();
      this.classList = { add: c => classes.add(c), remove: c => classes.delete(c), toggle: (c, on) => on ? classes.add(c) : classes.delete(c), contains: c => classes.has(c) };
    }
    set id(v) { this._id = v; ids.set(v, this); }
    get id() { return this._id; }
    set innerHTML(v) { this._html = v; if (this.tagName === 'SELECT') this.value = /<option value="([^"]+)"/.exec(v)?.[1] || ''; }
    get innerHTML() { return this._html || ''; }
    focus() { document.activeElement = this; }
    setAttribute(k, v) { this.attributes[k] = v; }
    getAttribute(k) { return this.attributes[k]; }
    addEventListener(k, fn) { (this.events[k] ||= []).push(fn); }
    fire(k, e = {}) { if (this.disabled) return; for (const f of this.events[k] || []) f.call(this, { detail: 1, preventDefault() {}, ...e }); }
    click() { this.fire('click'); }
    appendChild(e) { this.children.push(e); e.parentElement = this; if (this.tagName === "SELECT" && this.children.length === 1) this.value = e.value; return e; }
    append(...els) { els.forEach(e => this.appendChild(e)); }
    replaceChildren(...els) { this.children = []; this.append(...els); }
    remove() { if (this.id) ids.delete(this.id); }
    querySelector(sel) { this.queries ||= {}; return this.queries[sel] ||= new Element('button'); }
  }
  for (const m of html.matchAll(/<([a-z][a-z0-9-]*)\b([^>]*\bid="([^"]+)"[^>]*)>/gi)) {
    const e = new Element(m[1]); e.id = m[3]; e.hidden = /\bhidden\b/.test(m[2]); e.disabled = /\bdisabled\b/.test(m[2]);
  }
  const buttons = [...html.matchAll(/<button\b([^>]*class="[^"]*quiz-likert-btn[^>]+)>/g)].map(m => {
    const e = new Element('button'); e.dataset.value = /data-value="(\d+)"/.exec(m[1])[1]; return e;
  });
  let cookie = '_ga=existing; _ga_5MYEW2MEE1=session; unrelated=keep';
  const deletedCookies = [];
  const document = {
    readyState: 'complete', head: new Element('head'), body: new Element('body'),
    getElementById: id => ids.get(id) || null,
    createElement: tag => new Element(tag),
    querySelectorAll: sel => sel === '.quiz-likert-btn' ? buttons : [],
    addEventListener: (k, fn) => { if (!events.has(k)) events.set(k, []); events.get(k).push(fn); },
    get cookie() { return cookie; }, set cookie(v) { deletedCookies.push(v); cookie = cookie.split(';').filter(c => c.trim().split('=')[0] !== v.split('=')[0]).join(';'); }
  };
  const storage = new Map();
  const ctx = {
    document, console, URLSearchParams, location: { hostname: 'agent-tune.com', pathname: '/', search: '' },
    scrollTo() {}, addEventListener: document.addEventListener,
    localStorage: { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v), removeItem: k => storage.delete(k) },
    setTimeout: (fn, delay) => { timers.set(++serial, { fn, at: now + delay }); return serial; },
    clearTimeout: id => timers.delete(id),
    navigator: { clipboard: { writeText: async () => {} } },
  };
  ctx.window = ctx; vm.createContext(ctx);
  const tick = ms => {
    now += ms;
    for (const [id, t] of [...timers]) if (t.at <= now) { timers.delete(id); t.fn(); }
  };
  return { ctx, document, ids, buttons, storage, deletedCookies, tick,
    dispatch: (k, e) => { for (const f of events.get(k) || []) f({ preventDefault() {}, ...e }); },
    run: file => vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx, { filename: file }) };
}

function quiz(name) {
  const html = fs.readFileSync(path.join(ROOT, 'tests', name + '.html'), 'utf8');
  const f = fixture(html); f.run('quiz-utils.js'); f.run('data.js');
  const code = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].find(m => m[1].includes('const ITEMS ='))[1];
  const exposed = code.replace('const advance = window.ATQuiz.transition();', 'window.__quiz = {items:ITEMS,state,showResult,compute:' + (name === 'mbti' ? 'computeType' : 'computeResult') + '}; const advance = window.ATQuiz.transition();');
  vm.runInContext(exposed, f.ctx, { filename: name + '.html' });
  f.ids.get('quiz-start').click();
  return f;
}
module.exports = { fixture, quiz, ROOT };
