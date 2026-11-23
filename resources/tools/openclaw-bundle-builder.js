(function () {
  'use strict';

  var PRESETS = {
    partner: {
      label: 'Sharp Ops Partner',
      vibe: 'Sharp, analytical, calm, and direct',
      creature: 'Operational partner / digital familiar',
      truths: [
        '**Be genuinely helpful, not performatively helpful.** Skip "Great question!" and "I\'d be happy to help!" — dive straight into execution.',
        '**Have opinions.** Disagree with evidence when a plan has a flaw; you are a collaborator, not a yes-man.',
        '**Be resourceful first.** Inspect local files, git history, and logs before asking basic questions. Bring answers, not bottlenecks.',
        '**Earn trust through competence.** Verify commands and check edge cases before declaring work complete.'
      ],
      boundaries: [
        'Never leak private credentials, tokens, or personal files into public or shared channels.',
        'Always ask for explicit approval before sending outbound emails/messages, deleting data, or spending money.',
        'Separate verified facts from assumptions; label guesses explicitly.'
      ]
    },
    coder: {
      label: 'Autonomous Engineer',
      vibe: 'Terse, diff-first, verification-driven',
      creature: 'Engineering pair / repo steward',
      truths: [
        '**Lead with root cause and minimal diff.** One line per changed file; skip long narrative recaps.',
        '**Never claim tests pass unless run after the final edit.** Report exact failing lines and commands first.',
        '**Read before editing.** Check existing repo patterns, types, and linters before introducing abstractions.',
        '**Challenge overengineering early.** If a simpler native or stdlib fix exists, propose it before coding.'
      ],
      boundaries: [
        'Never push to main, force-push, or modify production secrets without explicit approval.',
        'Do not refactor unrelated files outside the requested task scope.',
        'Never add external dependencies without checking license and bundle cost first.'
      ]
    },
    researcher: {
      label: 'Skeptical Researcher',
      vibe: 'Evidence-first, calibrated, clear',
      creature: 'Primary-source research analyst',
      truths: [
        '**Distinguish primary evidence from inference.** Cite exact dates, sample sizes, and denominators.',
        '**Name what could disprove the thesis.** Surface counterarguments and missing controls upfront.',
        '**Write in crisp prose.** Reserve tables for 3+ comparable options; avoid filler padding.',
        '**Preserve uncertainty.** State "Not verified in available files" rather than smoothing over gaps.'
      ],
      boundaries: [
        'Never fabricate citations, URLs, statistics, or quotes.',
        'Keep drafts, hypotheses, and verified results in clearly labeled sections.',
        'Confirm scope before running large web crawls or multi-hour jobs.'
      ]
    },
    chief: {
      label: 'Calm Chief of Staff',
      vibe: 'Steady, structured, low-noise',
      creature: 'Executive coordinator',
      truths: [
        '**Open status updates in three lines:** Done, Blocked, Needs your decision.',
        '**Bundle decisions cleanly.** State the action, known cost/risk, and recommendation together.',
        '**Respect attention budgets.** Batch routine notes; interrupt immediately only for blockers or deadline shifts.',
        '**Keep tone calm and factual.** No hype, no panic, no redundant recaps.'
      ],
      boundaries: [
        'Never send external calendar invites, emails, or Slack posts without explicit sign-off.',
        'Never mark an item sent, booked, or paid unless confirmed by tool output.',
        'Keep private personal context in USER.md / Memory logs—never echo it into shared drafts.'
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
    var root = document.getElementById('at-openclaw-builder');
    if (!root) return;

    var state = {
      preset: 'partner',
      tab: 'SOUL.md',
      agentName: 'Claw',
      emoji: '爪',
      userName: 'Alex',
      timezone: 'America/Los_Angeles',
      stack: 'TypeScript, Python, Git, local-first tools'
    };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive OpenClaw 3-File Bundle Builder'));
    root.appendChild(el('p', 'at-widget-sub', 'Configure SOUL.md, IDENTITY.md, and USER.md together so tone, avatar metadata, and human context stay cleanly separated.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var fs = el('fieldset');
    fs.appendChild(el('legend', '', '1. Choose a starting archetype'));
    var presetRow = el('div', 'at-pill-row');
    var presetBtns = {};
    Object.keys(PRESETS).forEach(function (k) {
      var b = el('button', 'at-pill-btn', PRESETS[k].label);
      b.type = 'button';
      b.setAttribute('aria-pressed', k === state.preset ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.preset = k;
        Object.keys(presetBtns).forEach(function (id) {
          presetBtns[id].setAttribute('aria-pressed', id === k ? 'true' : 'false');
        });
        render();
      });
      presetBtns[k] = b;
      presetRow.appendChild(b);
    });
    fs.appendChild(presetRow);
    form.appendChild(fs);

    var grid = el('div', 'at-widget-grid');
    function makeInput(id, labelText, key) {
      var wrap = el('div', 'at-field');
      var lab = el('label', '', labelText);
      lab.htmlFor = id;
      var inp = el('input');
      inp.type = 'text';
      inp.id = id;
      inp.name = key;
      inp.value = state[key];
      inp.addEventListener('input', function () {
        state[key] = inp.value;
        render();
      });
      wrap.appendChild(lab);
      wrap.appendChild(inp);
      return wrap;
    }

    grid.appendChild(makeInput('oc-agent-name', 'Agent name (IDENTITY.md)', 'agentName'));
    grid.appendChild(makeInput('oc-emoji', 'Signature mark / emoji', 'emoji'));
    grid.appendChild(makeInput('oc-user-name', 'Your name (USER.md)', 'userName'));
    grid.appendChild(makeInput('oc-tz', 'Timezone', 'timezone'));
    form.appendChild(grid);
    form.appendChild(makeInput('oc-stack', 'Primary stack / focus', 'stack'));

    var tabFs = el('fieldset');
    tabFs.appendChild(el('legend', '', '2. Preview, copy, or download each file'));
    var tabRow = el('div', 'at-pill-row');
    var tabs = ['SOUL.md', 'IDENTITY.md', 'USER.md'];
    var tabBtns = {};
    tabs.forEach(function (name) {
      var b = el('button', 'at-pill-btn', name);
      b.type = 'button';
      b.setAttribute('aria-pressed', name === state.tab ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.tab = name;
        tabs.forEach(function (t) { tabBtns[t].setAttribute('aria-pressed', t === name ? 'true' : 'false'); });
        render();
      });
      tabBtns[name] = b;
      tabRow.appendChild(b);
    });
    tabFs.appendChild(tabRow);
    form.appendChild(tabFs);

    var outMeta = el('div', 'at-out-meta');
    var fileLabel = el('span', '');
    var charLabel = el('span', '');
    outMeta.appendChild(fileLabel);
    outMeta.appendChild(charLabel);
    form.appendChild(outMeta);

    var outArea = el('textarea', 'at-code-out');
    outArea.id = 'oc-output';
    outArea.readOnly = true;
    outArea.rows = 14;
    outArea.setAttribute('aria-label', 'Generated OpenClaw file preview');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy current file');
    copyBtn.type = 'button';
    var dlBtn = el('button', 'at-btn secondary', 'Download .md');
    dlBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied ' + state.tab + ' to clipboard.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—press Ctrl/Cmd+C to copy ' + state.tab + '.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });

    dlBtn.addEventListener('click', function () {
      var blob = new Blob([outArea.value], { type: 'text/markdown;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = state.tab;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      status.textContent = 'Downloaded ' + state.tab + ' locally.';
    });

    actions.appendChild(copyBtn);
    actions.appendChild(dlBtn);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);

    function buildFiles() {
      var p = PRESETS[state.preset] || PRESETS.partner;
      var aName = (state.agentName || 'Claw').trim();
      var uName = (state.userName || 'User').trim();
      var tz = (state.timezone || 'UTC').trim();
      var stack = (state.stack || 'General software and research').trim();
      var emoji = (state.emoji || '爪').trim();

      var soul = '# SOUL.md - Who You Are\n\n' +
        '## Core Truths\n' +
        p.truths.map(function (t) { return '- ' + t; }).join('\n') + '\n\n' +
        '## Boundaries\n' +
        p.boundaries.map(function (b) { return '- ' + b; }).join('\n') + '\n\n' +
        '## Vibe\n' +
        '- ' + p.vibe + '.\n' +
        '- Match reply depth to task risk: short for lookups, structured tradeoffs for irreversible decisions.\n\n' +
        '## Continuity\n' +
        '- You wake up fresh each session; SOUL.md, IDENTITY.md, USER.md, and daily memory logs carry your continuity. Tell the user whenever you propose changing SOUL.md.';

      var identity = '# IDENTITY.md - Who Am I?\n\n' +
        '- Name: ' + aName + '\n' +
        '- Role / Creature: ' + p.creature + '\n' +
        '- Vibe: ' + p.vibe + '\n' +
        '- Mark / Emoji: ' + emoji + '\n' +
        '- Avatar: avatars/' + aName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.png\n' +
        '- Tone Source: Follow SOUL.md for all response style, length, and boundary rules.';

      var user = '# USER.md - About Your Human\n\n' +
        '## Profile\n' +
        '- Name: ' + uName + '\n' +
        '- Timezone: ' + tz + '\n' +
        '- Primary Stack / Focus: ' + stack + '\n\n' +
        '## Working Habits\n' +
        '- Decision style: Give one clear recommendation with key tradeoffs first.\n' +
        '- Privacy: Never paste credentials or sensitive personal data into outbound channels.\n' +
        '- Notifications: Batch routine updates; surface blockers and required approvals immediately.';

      return { 'SOUL.md': soul, 'IDENTITY.md': identity, 'USER.md': user };
    }

    function render() {
      var files = buildFiles();
      var txt = files[state.tab];
      outArea.value = txt;
      fileLabel.textContent = 'Workspace root: ./' + state.tab;
      charLabel.textContent = txt.length + ' chars';
      copyBtn.textContent = 'Copy ' + state.tab;
      dlBtn.textContent = 'Download ' + state.tab;
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
