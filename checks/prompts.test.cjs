const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "integrations.js"), "utf8");
function load(fetch = async () => { throw new Error("Unexpected fetch"); }) {
  const context = { window: {}, document: { addEventListener() {} }, fetch };
  vm.runInNewContext(source, context);
  return context.window;
}
test("all 43 tunings retain their complete body across supported model/destination combinations", () => {
  const { AT_PROMPTS: p } = load();
  const catalog = JSON.parse(fs.readFileSync(path.join(root, "library/index.json")));
  assert.equal(catalog.tunings.length, 43);
  assert.deepEqual(Array.from(p.models, m => m.name).sort(), ["Any model", "Muse", "Astra 6", "Sol 6", "Fable 5.1", "Opus 5.5", "Grok 4.7"].sort());
  for (const tuning of catalog.tunings) {
    const md = fs.readFileSync(path.join(root, tuning.src), "utf8");
    const body = p.stripFrontMatter(md);
    assert.ok(body.length > 100);
    for (const model of p.models) {
      assert.ok(p.destinations(model.id).some(target => target.id === model.preferred));
      for (const target of p.destinations(model.id)) {
        const result = p.snippet(md, model.id, target.id);
        if (target.id === "mcp") {
          assert.equal(result, "claude mcp add --transport http agenttune https://agent-tune.com/mcp");
          continue;
        }
        assert.ok(result.endsWith(body), tuning.code + " / " + model.id + " / " + target.id);
        assert.ok(result.includes(model.fullName));
        assert.ok(result.includes("My current task and explicit corrections take precedence."));
        assert.doesNotMatch(result, /TUNING_PLACEHOLDER|cat > (?:CLAUDE|AGENTS)\.md/);
      }
    }
  }
});
test("file formats retain valid headers without leaking source metadata", () => {
  const p = load().AT_PROMPTS;
  const md = "\uFEFF---\r\nid: example\r\n---\r\n# My preferences\r\nKeep <code> & $variables literal.";
  assert.equal(p.stripFrontMatter(md), "# My preferences\r\nKeep <code> & $variables literal.");
  const style = p.snippet(md, "fable-5-1", "claude-code");
  assert.match(style, /^---\nname: AgentTune\n[\s\S]*keep-coding-instructions: true\n---\n/);
  assert.doesNotMatch(style, /id: example/);
  assert.match(p.snippet(md, "astra-6", "cursor"), /^---\ndescription: .*?\nalwaysApply: true\n---\n/);
  assert.match(p.snippet(md, "muse", "muse"), /^Update only the "How to work with me" section in Soul\.md/);
  assert.equal(p.prompt("", "sol-6"), "");
  assert.equal(p.snippet("", "fable-5-1", "claude-code"), "");
  assert.equal(p.modelFor("unknown").id, "any");
});
test("model destinations and the legacy only filter remain compatible", () => {
  const p = load().AT_PROMPTS;
  assert.deepEqual(Array.from(p.destinations("muse"), d => d.id), ["anywhere", "muse"]);
  assert.ok(!p.destinations("grok-4-7").some(d => d.id === "claude-ai"));
  assert.deepEqual(Array.from(p.destinations("fable-5-1", ["claude-code", "codex-cli"]), d => d.id), ["claude-code"]);
});
test("the tuning loader accepts both existing quiz paths and catalog paths, caches successes, and retries failures", async () => {
  const urls = [];
  let response = { ok: true, text: async () => "# Full tuning\nLead with the answer." };
  const w = load(async url => { urls.push(url); return response; });
  const body = await w.fetchTuning("mbti/INTJ.md");
  assert.equal(await w.fetchTuning("/tunings/mbti/INTJ.md"), body);
  assert.deepEqual(urls, ["/tunings/mbti/INTJ.md"]);
  response = { ok: false };
  assert.equal(await w.fetchTuning("disc/d-dominance.md"), null);
  response = { ok: true, text: async () => "<html>Not found</html>" };
  assert.equal(await w.fetchTuning("disc/d-dominance.md"), null);
  response = { ok: true, text: async () => "# Full tuning\nTry again." };
  assert.equal(await w.fetchTuning("disc/d-dominance.md"), "# Full tuning\nTry again.");
  const count = urls.length;
  for (const invalid of ["../secret.md", "https://example.com/test.md", "/tunings/../../secret.md", null]) assert.equal(await w.fetchTuning(invalid), null);
  assert.equal(urls.length, count);
});
test("all generated library shortcuts and guide controls use registered models", () => {
  const p = load().AT_PROMPTS, ids = new Set(p.models.map(m => m.id));
  const catalog = JSON.parse(fs.readFileSync(path.join(root, "library/index.json")));
  for (const t of catalog.tunings) {
    const html = fs.readFileSync(path.join(root, new URL(t.page).pathname + ".html"), "utf8");
    const shortcuts = [...html.matchAll(/data-prompt-model="([^"]+)"/g)];
    assert.equal(shortcuts.length, 6, t.page);
    for (const [,id] of shortcuts) assert.ok(ids.has(id));
    assert.ok(html.includes('id="integration-deep"'));
  }
  for (const name of fs.readdirSync(path.join(root, "guides/src"))) {
    const spec = JSON.parse(fs.readFileSync(path.join(root, "guides/src", name)));
    if (!spec.promptModel) continue;
    assert.ok(ids.has(spec.promptModel));
    assert.ok(p.destinations(spec.promptModel).some(d => d.id === (spec.promptDestination || "anywhere")));
    const html = fs.readFileSync(path.join(root, "guides", spec.slug + ".html"), "utf8");
    assert.ok(html.includes('data-guide-model="' + spec.promptModel + '"'));
    assert.ok(html.includes('src="/guide-prompts.js"'));
  }
});
test("inline JavaScript in touched entry points and generated pages parses", () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, "library/index.json")));
  const files = ["index.html", "tools/custom-instructions-generator.html", "tools/claude-md-generator.html",
    ...["mbti","disc","enneagram","attachment","big-five"].map(x => "tests/" + x + ".html"),
    ...catalog.tunings.map(t => new URL(t.page).pathname.slice(1) + ".html"),
    ...fs.readdirSync(path.join(root, "guides")).filter(f => f.endsWith(".html")).map(f => "guides/" + f)];
  for (const file of files) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    for (const [,attrs,script] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (/application\/ld\+json/.test(attrs)) JSON.parse(script);
      else if (script.trim()) new vm.Script(script, { filename: file });
    }
  }
});
