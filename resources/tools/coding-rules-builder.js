(function () {
  'use strict';

  var TARGETS = {
    windsurf: { label: 'Windsurf (.windsurf/rules/communication.md)', file: 'communication.md', path: '.windsurf/rules/communication.md' },
    cline: { label: 'Cline (.clinerules/workflow.md)', file: 'workflow.md', path: '.clinerules/workflow.md' },
    cursor: { label: 'Cursor (.cursor/rules/agenttune.mdc)', file: 'agenttune.mdc', path: '.cursor/rules/agenttune.mdc' },
    agents: { label: 'Portable AGENTS.md (Codex / Multi-Tool)', file: 'AGENTS.md', path: 'AGENTS.md' }
  };

  var STYLES = {
    diff: {
      label: 'Diff-First & Terse',
      rules: [
        'Lead with root cause, exact file paths, and minimal diff before background explanation.',
        'Keep prose under 4 sentences unless I ask for an architectural walkthrough.',
        'Never claim tests or builds pass unless executed after the final edit.',
        'Ask before refactoring unrelated files or changing public APIs.'
      ]
    },
    plan: {
      label: 'Plan-Before-Act (Safe Autonomous)',
      rules: [
        'Outline the exact files you will modify and verification commands before making edits.',
        'Check existing codebase conventions and type definitions before introducing new helpers.',
        'Flag breaking changes, schema migrations, or new dependencies for approval first.',
        'Report failures with the exact command, stderr excerpt, and root cause hypothesis.'
      ]
    },
    reviewer: {
      label: 'Skeptical Architecture Reviewer',
      rules: [
        'Challenge flawed premises, race conditions, or overengineered plans before implementing.',
        'Separate blocking correctness/security bugs from optional style improvements.',
        'Prefer standard-library and existing repo patterns over new third-party packages.',
        'Explicitly list unverified assumptions and edge cases not covered by tests.'
      ]
    }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-coding-rules-builder');
    if (!root) return;

    var state = {
      target: root.getAttribute('data-default-target') || 'windsurf',
      style: 'diff',
      stack: 'TypeScript strict mode, React, Vitest',
      testCmd: 'npm test'
    };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive Coding-Agent Rules Generator'));
    root.appendChild(el('p', 'at-widget-sub', 'Generate clean, properly formatted rules files for Windsurf (.windsurf/rules/), Cline (.clinerules/), Cursor (.cursor/rules/*.mdc), or portable AGENTS.md.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var grid = el('div', 'at-widget-grid');

    function makeSelect(id, label, key, entries) {
      var wrap = el('div', 'at-field');
      var lab = el('label', '', label);
      lab.htmlFor = id;
      var sel = el('select');
      sel.id = id;
      sel.name = key;
      entries.forEach(function (pair) {
        var o = document.createElement('option');
        o.value = pair[0];
        o.textContent = pair[1];
        sel.appendChild(o);
      });
      sel.value = state[key];
      sel.addEventListener('change', function () { state[key] = sel.value; render(); });
      wrap.appendChild(lab);
      wrap.appendChild(sel);
      return wrap;
    }

    grid.appendChild(makeSelect('cr-target', 'Target coding agent format', 'target', Object.keys(TARGETS).map(function (k) { return [k, TARGETS[k].label]; })));
    grid.appendChild(makeSelect('cr-style', 'Agent communication posture', 'style', Object.keys(STYLES).map(function (k) { return [k, STYLES[k].label]; })));
    form.appendChild(grid);

    var grid2 = el('div', 'at-widget-grid');
    function makeInput(id, label, key) {
      var wrap = el('div', 'at-field');
      var lab = el('label', '', label);
      lab.htmlFor = id;
      var inp = el('input');
      inp.type = 'text';
      inp.id = id;
      inp.name = key;
      inp.value = state[key];
      inp.addEventListener('input', function () { state[key] = inp.value; render(); });
      wrap.appendChild(lab);
      wrap.appendChild(inp);
      return wrap;
    }
    grid2.appendChild(makeInput('cr-stack', 'Repo tech stack', 'stack'));
    grid2.appendChild(makeInput('cr-test', 'Verification command', 'testCmd'));
    form.appendChild(grid2);

    var meta = el('div', 'at-out-meta');
    var pathEl = el('span', '');
    var sizeEl = el('span', '');
    meta.appendChild(pathEl);
    meta.appendChild(sizeEl);
    form.appendChild(meta);

    var outArea = el('textarea', 'at-code-out');
    outArea.id = 'cr-out';
    outArea.readOnly = true;
    outArea.rows = 13;
    outArea.setAttribute('aria-label', 'Generated coding agent rules file');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy rules file');
    copyBtn.type = 'button';
    var dlBtn = el('button', 'at-btn secondary', 'Download file');
    dlBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied rules for ' + TARGETS[state.target].path + '.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });

    dlBtn.addEventListener('click', function () {
      var t = TARGETS[state.target];
      var blob = new Blob([outArea.value], { type: 'text/markdown;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = t.file;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      status.textContent = 'Downloaded ' + t.file + '. Place it at ' + t.path + '.';
    });

    actions.appendChild(copyBtn);
    actions.appendChild(dlBtn);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);

    function render() {
      var t = TARGETS[state.target];
      var s = STYLES[state.style];
      var stack = (state.stack || 'TypeScript, Node.js').trim();
      var testCmd = (state.testCmd || 'npm test').trim();
      var body = '<!-- agenttune:preferences:start -->\n' +
        '## Repository Stack & Verification\n' +
        '- Stack: ' + stack + '\n' +
        '- Verify changes before finishing: `' + testCmd + '`\n\n' +
        '## Agent Communication & Execution Style (' + s.label + ')\n' +
        s.rules.map(function (r) { return '- ' + r; }).join('\n') + '\n' +
        '<!-- agenttune:preferences:end -->';

      if (state.target === 'cursor') {
        body = '---\ndescription: Communication & verification rules (' + s.label + ')\nalwaysApply: true\n---\n\n' + body;
      } else if (state.target === 'windsurf') {
        body = '# Windsurf Cascade Rules\n\n' + body;
      } else if (state.target === 'cline') {
        body = '# Cline Workspace Rules (Plan & Act)\n\n' + body;
      } else {
        body = '# AGENTS.md\n\n' + body;
      }

      outArea.value = body;
      pathEl.textContent = 'Save to: ' + t.path;
      sizeEl.textContent = body.length + ' chars';
      dlBtn.textContent = 'Download ' + t.file;
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
