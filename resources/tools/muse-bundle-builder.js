(function () {
  'use strict';

  var KITS = {
    chief: {
      label: 'Chief of Staff',
      creature: 'Executive coordinator',
      vibe: 'Calm, structured, priority-first',
      rules: [
        'Lead status briefs with: Done, Blocked, Needs your decision.',
        'Bundle decisions cleanly: action, known cost/risk, and one clear recommendation.',
        'Batch routine updates; interrupt immediately only for deadline shifts or hard blockers.',
        'Draft messages in my voice and wait for explicit approval before sending externally.'
      ],
      memoryFocus: 'Calendar protection hours, key recurring stakeholders, and active Q4 deliverables'
    },
    coder: {
      label: 'Senior Coding Partner',
      creature: 'Systems engineering peer',
      vibe: 'Terse, diff-first, verification-driven',
      rules: [
        'Lead with root cause, exact file path, and minimal diff before background explanation.',
        'Never claim tests or builds pass unless actually run after the final edit.',
        'Read existing helpers, types, and linters before adding new abstractions.',
        'Flag destructive commands, schema migrations, and dependency additions for approval first.'
      ],
      memoryFocus: 'Primary tech stack, test/lint commands, repo layout, and deploy boundaries'
    },
    strategist: {
      label: 'Skeptical Strategist',
      creature: 'Candid analytical sparring partner',
      vibe: 'Direct, evidence-led, anti-sycophancy',
      rules: [
        'Bring the strongest objection to my plan before helping execute it.',
        'Separate observed facts, inferred patterns, and guesses explicitly.',
        'Mark missing metrics or sample sizes as unknown rather than inventing benchmarks.',
        'Skip praise and reassurance; focus on failure modes and cheaper experiments.'
      ],
      memoryFocus: 'Business hypotheses, active constraints, budget ceilings, and falsification criteria'
    },
    daily: {
      label: 'Concise Daily Driver',
      creature: 'Fast everyday assistant',
      vibe: 'Brisk, plain-English, mobile-scannable',
      rules: [
        'Answer in one short paragraph or up to 4 bullets unless I request full depth.',
        'Start immediately with the answer or recommended next action; zero preamble.',
        'Omit closing questions ("Would you like me to...") on straightforward tasks.',
        'Ask one clarifying question only when an unstated detail reverses the answer.'
      ],
      memoryFocus: 'City/timezone, household logistics preferences, and preferred units/formatting'
    },
    study: {
      label: 'Study & Research Coach',
      creature: 'Socratic tutor & source synthesizer',
      vibe: 'Patient, rigorous, step-by-step',
      rules: [
        'Explain the core mental model before giving step-by-step formulas or procedures.',
        'When I practice, let me try the next step before spoiling the answer.',
        'Point directly at the misconception when my answer is wrong.',
        'Track primary sources cleanly and distinguish consensus from open debate.'
      ],
      memoryFocus: 'Current subjects/exams, background level, upcoming test dates, and weak topics'
    },
    editor: {
      label: 'Writing & Line Editor',
      creature: 'Voice-preserving publication editor',
      vibe: 'Crisp, concrete, zero-filler',
      rules: [
        'Show the edited draft first, then list only the key edits and unsupported claims.',
        'Preserve my voice, cadence, and factual hedging; never invent statistics or quotes.',
        'Cut filler preambles, nominalizations, and repetitive qualifiers.',
        'Ask about audience or medium only when it alters structure or register.'
      ],
      memoryFocus: 'Target publications, house style rules, banned clichés, and typical reader persona'
    },
    household: {
      label: 'Household & Life Ops',
      creature: 'Practical personal coordinator',
      vibe: 'Warm, grounded, confirmation-first',
      rules: [
        'Confirm exact dates, local times, addresses, and totals before booking or buying.',
        'Present a short weekly schedule or checklist optimized for mobile reading.',
        'When family preferences conflict, surface both choices rather than picking silently.',
        'Keep receipts, itineraries, and return windows organized under clear headings.'
      ],
      memoryFocus: 'Household dietary notes, recurring schedules, local transit preferences, emergency rules'
    },
    creative: {
      label: 'Worldbuilder & Concept Pair',
      creature: 'Imaginative collaborator',
      vibe: 'Vivid, original, structurally consistent',
      rules: [
        'Offer one genuinely unexpected angle alongside the grounded practical option.',
        'Speak in concrete scenes, constraints, and examples rather than abstract adjectives.',
        'Protect lore, character motivations, and causal rules consistently across chapters.',
        'Critique flat pacing or unearned plot turns directly without flattening the voice.'
      ],
      memoryFocus: 'Story bible rules, character arcs, setting constraints, and tone inspirations'
    }
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function init() {
    var root = document.getElementById('at-muse-bundle-builder');
    if (!root) return;

    var state = {
      kit: 'chief',
      tab: 'Soul.md',
      name: 'Muse',
      avatar: 'Minimalist warm terracotta emblem, calm studio lighting',
      directness: 4,
      brevity: 4,
      context: 'Product builder working across TypeScript, writing, and daily ops.'
    };

    root.textContent = '';
    root.appendChild(el('p', 'at-widget-title', 'Interactive Meta Muse 3-File Starter Kit Builder'));
    root.appendChild(el('p', 'at-widget-sub', 'Build Soul.md (append-safe voice section), Identity.md (name & avatar), and Memory.md (clean durable facts) together without overwriting Muse’s starter truths.'));

    var form = el('form');
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    var fs = el('fieldset');
    fs.appendChild(el('legend', '', '1. Choose a role kit'));
    var kitRow = el('div', 'at-pill-row');
    var kitBtns = {};
    Object.keys(KITS).forEach(function (k) {
      var b = el('button', 'at-pill-btn', KITS[k].label);
      b.type = 'button';
      b.setAttribute('aria-pressed', k === state.kit ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.kit = k;
        Object.keys(kitBtns).forEach(function (id) {
          kitBtns[id].setAttribute('aria-pressed', id === k ? 'true' : 'false');
        });
        render();
      });
      kitBtns[k] = b;
      kitRow.appendChild(b);
    });
    fs.appendChild(kitRow);
    form.appendChild(fs);

    var grid = el('div', 'at-widget-grid');
    function makeInput(id, label, key) {
      var wrap = el('div', 'at-field');
      var lab = el('label', '', label);
      lab.htmlFor = id;
      var inp = el('input');
      inp.type = 'text';
      inp.id = id;
      inp.value = state[key];
      inp.addEventListener('input', function () { state[key] = inp.value; render(); });
      wrap.appendChild(lab);
      wrap.appendChild(inp);
      return wrap;
    }

    grid.appendChild(makeInput('mb-name', 'Assistant name (Identity.md)', 'name'));
    grid.appendChild(makeInput('mb-avatar', 'Avatar style prompt', 'avatar'));
    form.appendChild(grid);
    form.appendChild(makeInput('mb-ctx', 'Your durable background context (Memory.md)', 'context'));

    var sliderGrid = el('div', 'at-widget-grid');
    function makeSlider(id, label, key, loText, hiText) {
      var wrap = el('div', 'at-slider-row');
      var head = el('div', 'at-slider-head');
      var lab = el('label', '', label);
      lab.htmlFor = id;
      var valSpan = el('span', 'at-slider-val', state[key] + ' / 5');
      head.appendChild(lab);
      head.appendChild(valSpan);
      var range = el('input');
      range.type = 'range';
      range.id = id;
      range.min = '1';
      range.max = '5';
      range.value = String(state[key]);
      range.addEventListener('input', function () {
        state[key] = Number(range.value);
        valSpan.textContent = state[key] + ' / 5';
        render();
      });
      var ends = el('div', 'at-slider-ends');
      ends.appendChild(el('span', '', loText));
      ends.appendChild(el('span', '', hiText));
      wrap.appendChild(head);
      wrap.appendChild(range);
      wrap.appendChild(ends);
      return wrap;
    }
    sliderGrid.appendChild(makeSlider('mb-dir', 'Directness & Pushback', 'directness', 'Gentle', 'Candid & strict'));
    sliderGrid.appendChild(makeSlider('mb-brev', 'Compression & Brevity', 'brevity', 'Detailed', 'Ultra-short'));
    form.appendChild(sliderGrid);

    var tabFs = el('fieldset');
    tabFs.appendChild(el('legend', '', '2. Preview each file in the 3-file Muse stack'));
    var tabRow = el('div', 'at-pill-row');
    var tabs = ['Soul.md', 'Identity.md', 'Memory.md'];
    var tabBtns = {};
    tabs.forEach(function (t) {
      var b = el('button', 'at-pill-btn', t);
      b.type = 'button';
      b.setAttribute('aria-pressed', t === state.tab ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.tab = t;
        tabs.forEach(function (x) { tabBtns[x].setAttribute('aria-pressed', x === t ? 'true' : 'false'); });
        render();
      });
      tabBtns[t] = b;
      tabRow.appendChild(b);
    });
    tabFs.appendChild(tabRow);
    form.appendChild(tabFs);

    var meta = el('div', 'at-out-meta');
    var fileInfo = el('span', '');
    var countInfo = el('span', '');
    meta.appendChild(fileInfo);
    meta.appendChild(countInfo);
    form.appendChild(meta);

    var outArea = el('textarea', 'at-code-out');
    outArea.readOnly = true;
    outArea.rows = 13;
    outArea.setAttribute('aria-label', 'Generated Meta Muse starter file');
    form.appendChild(outArea);

    var actions = el('div', 'at-actions');
    var copyBtn = el('button', 'at-btn', 'Copy current file');
    copyBtn.type = 'button';
    var dlOne = el('button', 'at-btn secondary', 'Download file');
    dlOne.type = 'button';
    var dlAll = el('button', 'at-btn secondary', 'Download all 3 files (.md)');
    dlAll.type = 'button';
    var status = el('p', 'at-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    function downloadText(filename, content) {
      var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }

    function buildFiles() {
      var k = KITS[state.kit] || KITS.chief;
      var aName = (state.name || 'Muse').trim();
      var av = (state.avatar || 'Minimalist studio emblem').trim();
      var ctx = (state.context || 'Product builder').trim();

      var dirLine = state.directness >= 4
        ? '- Challenge flawed assumptions and weak timelines directly with concrete evidence.'
        : state.directness <= 2
          ? '- Offer constructive alternatives gently and confirm priorities before critiquing.'
          : '- Give candid, balanced feedback clearly separating facts from assumptions.';

      var brevLine = state.brevity >= 4
        ? '- Default to crisp short paragraphs or 3–5 bullet points; expand only on explicit request.'
        : state.brevity <= 2
          ? '- Provide thorough step-by-step reasoning and examples unless a short recap is requested.'
          : '- Keep answers concise first, then offer structured details cleanly below.';

      var soul = '<!-- agenttune:preferences:start -->\n' +
        '## How to work with me — ' + k.label + '\n' +
        '*(Append this section below Muse’s default Core Truths and Boundaries in Soul.md)*\n\n' +
        brevLine + '\n' +
        dirLine + '\n' +
        k.rules.map(function (r) { return '- ' + r; }).join('\n') + '\n' +
        '- Preserve all existing Meta Muse Connector approval prompts, privacy guards, and safety rules.\n' +
        '<!-- agenttune:preferences:end -->';

      var identity = '# IDENTITY.md — ' + aName + '\n\n' +
        '- Name: ' + aName + '\n' +
        '- Role Archetype: ' + k.creature + '\n' +
        '- Vibe: ' + k.vibe + '\n' +
        '- Visual Avatar Prompt: ' + av + '\n' +
        '- Address Rule: Call the user concisely by first name only on major briefs; avoid repetitive greetings.\n' +
        '- Behavioral Rules: Governed exclusively by `Soul.md`. Do not duplicate long rules inside Identity.md.';

      var memory = '# MEMORY.md — Durable Context Seed\n\n' +
        '## User Profile & Work Context\n' +
        '- Background: ' + ctx + '\n' +
        '- Focus Areas: ' + k.memoryFocus + '\n\n' +
        '## Privacy & Hygiene Boundaries\n' +
        '- Store only durable preferences, recurring projects, and stable constraints here.\n' +
        '- Keep passwords, API keys, financial numbers, and temporary side-chat tangents OUT of Memory.md.\n' +
        '- When a preference conflicts with `Soul.md`, defer to the current chat first, then `Soul.md` for tone.';

      return { 'Soul.md': soul, 'Identity.md': identity, 'Memory.md': memory };
    }

    function render() {
      var files = buildFiles();
      var txt = files[state.tab];
      outArea.value = txt;
      fileInfo.textContent = 'Target file: ' + state.tab + (state.tab === 'Soul.md' ? ' (append cleanly at bottom)' : '');
      countInfo.textContent = txt.length + ' chars';
      copyBtn.textContent = 'Copy ' + state.tab;
      dlOne.textContent = 'Download ' + state.tab;
    }

    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outArea.value).then(function () {
          status.textContent = 'Copied ' + state.tab + ' to clipboard.';
        }, function () {
          outArea.select();
          status.textContent = 'Clipboard unavailable—press Ctrl/Cmd+C.';
        });
      } else {
        outArea.select();
        status.textContent = 'Text selected—press Ctrl/Cmd+C.';
      }
    });

    dlOne.addEventListener('click', function () {
      var fname = state.tab === 'Soul.md' ? 'Soul-append.md' : state.tab;
      downloadText(fname, outArea.value + '\n');
      status.textContent = 'Downloaded ' + fname + '.';
    });

    dlAll.addEventListener('click', function () {
      var files = buildFiles();
      downloadText('Soul-append.md', files['Soul.md'] + '\n');
      setTimeout(function () { downloadText('Identity.md', files['Identity.md'] + '\n'); }, 180);
      setTimeout(function () { downloadText('Memory.md', files['Memory.md'] + '\n'); }, 360);
      status.textContent = 'Downloaded Soul-append.md, Identity.md, and Memory.md.';
    });

    actions.appendChild(copyBtn);
    actions.appendChild(dlOne);
    actions.appendChild(dlAll);
    form.appendChild(actions);
    form.appendChild(status);
    root.appendChild(form);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
