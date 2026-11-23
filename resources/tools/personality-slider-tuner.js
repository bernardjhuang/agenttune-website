(function () {
  'use strict';

  var SLIDERS = [
    {
      id: 'tone', label: 'Warmth vs. Directness', low: 'Warm & encouraging', high: 'Blunt & zero-fluff', def: 4,
      rules: [
        'Use a warm, encouraging tone; acknowledge context briefly before offering guidance.',
        'Keep tone friendly and approachable while staying clear and practical.',
        'Keep tone neutral, clear, and matter-of-fact with no exaggerated hype.',
        'Be direct and plainspoken; skip praise ("Great question!") and throat-clearing openers.',
        'Be blunt, crisp, and zero-fluff; cut every pleasantry and go straight to the point.'
      ]
    },
    {
      id: 'length', label: 'Response Length', low: 'Ultra-brief', high: 'Comprehensive', def: 2,
      rules: [
        'Keep routine answers to 1–3 sentences; expand only when I explicitly ask.',
        'Keep routine replies under 120 words; add structured depth only for high-stakes decisions.',
        'Match length to task complexity: concise for lookups, thorough for multi-step plans.',
        'Provide thorough explanations with clear context, examples, and edge cases.',
        'Give comprehensive, mechanism-first walkthroughs covering trade-offs and failure modes.'
      ]
    },
    {
      id: 'pushback', label: 'Pushback & Candor', low: 'Supportive collaborator', high: 'Skeptical red-teamer', def: 4,
      rules: [
        'Build constructively on my direction first, then gently mention risks if they matter.',
        'Collaborate supportively while noting practical tradeoffs respectfully.',
        'Offer balanced pros and cons and flag clear errors when you spot them.',
        'Never agree just to be polite; challenge weak premises with concrete evidence before executing.',
        'Stress-test every plan: name the single weakest assumption and what breaks first.'
      ]
    },
    {
      id: 'format', label: 'Formatting Density', low: 'Plain paragraphs', high: 'Structured tables & bullets', def: 2,
      rules: [
        'Write strictly in natural, flowing paragraphs; avoid bullet walls and nested lists.',
        'Default to clean prose; use bullets for sequential steps and tables only for 3+ options.',
        'Mix brief lead paragraphs with concise bullets when covering multiple items.',
        'Use scannable headings, short bullet points, and bold lead-ins for fast reading.',
        'Default to compact tables, numbered checklists, and structured scannable blocks.'
      ]
    },
    {
      id: 'explore', label: 'Convergence vs. Brainstorming', low: 'One clear verdict', high: 'Divergent options', def: 2,
      rules: [
        'Give one single best recommendation in sentence one—never an unranked menu.',
        'Lead with one recommended path first, then note one runner-up only if close.',
        'Give a primary recommendation alongside 2 distinct alternatives and the deciding variable.',
        'Surface 3 genuinely distinct approaches with different mechanisms before narrowing.',
        'Keep options wide open early: generate 4–5 divergent angles and non-obvious analogies.'
      ]
    },
    {
      id: 'questions', label: 'Clarifying Questions', low: 'Proceed & state assumptions', high: 'Clarify before answering', def: 2,
      rules: [
        'Do not end turns with trailing follow-up offers; state assumptions and complete the task.',
        'Ask at most one clarifying question only if missing context flips the recommendation; no closing offers.',
        'Ask brief clarifying questions when requirements are ambiguous, then proceed.',
        'Confirm scope, audience, and constraints before producing long drafts or big edits.',
        'Act as a Socratic partner: probe goals and missing constraints before locking in a solution.'
      ]
    }
  ];

  var TARGETS = {
    chatgpt: { label: 'ChatGPT Custom Instructions (≤1,500 chars)', max: 1500, header: 'How to respond to me:' },
    claude: { label: 'Claude Personal Preferences', max: 0, header: '# Communication Preferences (Claude)' },
    muse: { label: 'Meta Muse / OpenClaw Soul.md', max: 0, header: '## How to work with me (Soul.md)' },
    gemini: { label: 'Gemini Personal Intelligence / Gems', max: 0, header: '## Instructions for Gemini' },
    grok: { label: 'Grok (Settings → Customize Grok)', max: 4000, header: '## Customize Grok Rules' },
    copilot: { label: 'Microsoft Copilot Custom Instructions', max: 0, header: '## Copilot Communication Rules' },
    agents: { label: 'AGENTS.md / CLAUDE.md (Coding Agent)', max: 0, header: '<!-- agenttune:preferences:start -->\n## Personal Communication Preferences' }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-slider-tuner');
    if (!root) return;

    var vals = {};
    SLIDERS.forEach(function (s) { vals[s.id] = s.def; });
    var target = 'chatgpt';

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive 6-Slider AI Personality Tuner (Free · Portable · Local)'));
    root.appendChild(el('p', 'at-widget-sub', 'Adjust the 6 sliders below to convert vague tone preferences into checkable behavioral rules for ChatGPT, Claude, Meta Muse, Gemini, Grok, Copilot, or AGENTS.md.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var targetField = el('div', 'at-field');
    var targetLab = el('label', '', 'Export format & character budget');
    targetLab.htmlFor = 'tuner-target';
    var targetSel = el('select');
    targetSel.id = 'tuner-target';
    targetSel.name = 'target';
    Object.keys(TARGETS).forEach(function (k) {
      var o = document.createElement('option');
      o.value = k;
      o.textContent = TARGETS[k].label;
      targetSel.appendChild(o);
    });
    targetSel.addEventListener('change', function () {
      target = targetSel.value;
      render();
    });
    targetField.appendChild(targetLab);
    targetField.appendChild(targetSel);
    form.appendChild(targetField);

    var grid = el('div', 'at-widget-grid');
    var valBadges = {};

    SLIDERS.forEach(function (s) {
      var row = el('div', 'at-slider-row');
      var head = el('div', 'at-slider-head');
      var lab = el('label', '', s.label);
      lab.htmlFor = 'tuner-' + s.id;
      var badge = el('span', 'at-slider-val', s.def + ' / 5');
      valBadges[s.id] = badge;
      head.appendChild(lab);
      head.appendChild(badge);
      row.appendChild(head);

      var inp = el('input');
      inp.type = 'range';
      inp.id = 'tuner-' + s.id;
      inp.name = s.id;
      inp.min = '1';
      inp.max = '5';
      inp.step = '1';
      inp.value = String(s.def);
      inp.addEventListener('input', function () {
        vals[s.id] = parseInt(inp.value, 10);
        badge.textContent = vals[s.id] + ' / 5';
        render();
      });
      row.appendChild(inp);

      var ends = el('div', 'at-slider-ends');
      ends.appendChild(el('span', '', s.low));
      ends.appendChild(el('span', '', s.high));
      row.appendChild(ends);
      grid.appendChild(row);
    });
    form.appendChild(grid);

    var meta = el('div', 'at-out-meta');
    var destEl = el('span', '');
    var countEl = el('span', '');
    meta.appendChild(destEl);
    meta.appendChild(countEl);
    form.appendChild(meta);

    var outArea = el('textarea', 'at-code-out');
    outArea.id = 'tuner-out';
    outArea.readOnly = true;
    outArea.rows = 10;
    outArea.setAttribute('aria-label', 'Generated AI personality instructions');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy tuned prompt');
    copyBtn.type = 'button';
    var resetBtn = el('button', 'at-btn secondary', 'Reset defaults');
    resetBtn.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied ' + outArea.value.length + '-char block for ' + TARGETS[target].label + '.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard blocked—press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });

    resetBtn.addEventListener('click', function () {
      SLIDERS.forEach(function (s) {
        vals[s.id] = s.def;
        var inp = document.getElementById('tuner-' + s.id);
        if (inp) inp.value = String(s.def);
        valBadges[s.id].textContent = s.def + ' / 5';
      });
      render();
      status.textContent = 'Sliders reset to balanced direct defaults.';
    });

    actions.appendChild(copyBtn);
    actions.appendChild(resetBtn);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);

    function render() {
      var t = TARGETS[target] || TARGETS.chatgpt;
      var lines = [t.header];
      SLIDERS.forEach(function (s) {
        lines.push('- ' + s.rules[vals[s.id] - 1]);
      });
      lines.push('- Epistemic honesty: Separate verified facts from inference and flag material uncertainty explicitly.');
      if (target === 'agents') lines.push('<!-- agenttune:preferences:end -->');
      var txt = lines.join('\n');
      outArea.value = txt;
      destEl.textContent = t.label;
      countEl.textContent = t.max ? (txt.length + ' / ' + t.max + ' chars (fits)') : (txt.length + ' chars');
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
