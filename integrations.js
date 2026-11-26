/* Shared, model-aware prompts for test results, the library, and the generator. */
(function () {
  "use strict";
  const MODELS = window.ATPlatforms.models;
  const INTEGRATIONS = window.ATPlatforms.destinations;
  const APPS = window.ATPlatforms.apps;
  const modelFor = id => MODELS.find(m => m.id === id) || MODELS[0];
  const stripFrontMatter = text => String(text || "").replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, "").trim();
  const escapeHtml = text => String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function prompt(tuning, modelId) {
    const body = stripFrontMatter(tuning);
    if (!body) return "";
    const model = modelFor(modelId);
    return "# Communication preferences — " + model.fullName + "\n\n" +
      "Use these preferences for tone, pacing, and structure. My current task and explicit corrections take precedence. Preserve accuracy and say when uncertainty matters.\n\n" +
      model.rules.map(rule => "- " + rule).join("\n") + "\n\n## My tuning\n\n" + body;
  }
  function snippet(tuning, modelId, targetId) {
    if (targetId === "mcp") return "claude mcp add --transport http agenttune https://agent-tune.com/mcp";
    if (targetId === "chatgpt-custom") {
      if (!stripFrontMatter(tuning)) return "";
      const compact = window.ATCompact && window.ATCompact.fromMarkdown(tuning, window.AT_CONTACTS || []);
      const source = compact || stripFrontMatter(tuning);
      const adapted = prompt(source, modelId);
      return adapted.length <= 1500 ? adapted : source.length <= 1500 ? source : "";
    }
    const body = "<!-- agenttune:preferences:start -->\n" + prompt(tuning, modelId) + "\n<!-- agenttune:preferences:end -->";
    if (!stripFrontMatter(tuning)) return "";
    if (targetId === "muse") return 'Update only the "How to work with me" section in Soul.md with the communication preferences below. Preserve all other content and existing permissions. Show me the resulting section.\n\n' + body;
    if (targetId === "claude-code") return "---\nname: AgentTune\ndescription: Personal communication preferences from AgentTune\nkeep-coding-instructions: true\n---\n\n" + body;
    if (targetId === "cursor") return "---\ndescription: Communication preferences from AgentTune\nalwaysApply: true\n---\n\n" + body;
    return body;
  }
  function destinations(modelId, onlyIds) {
    const model = modelFor(modelId);
    return INTEGRATIONS.filter(item => (!model.targets || model.targets.includes(item.id)) && (!onlyIds || onlyIds.includes(item.id)));
  }

  let instanceCount = 0;
  const MODIFIERS = [
    { id: "concise", label: "+ Concise (<150w)", rule: "- **Length:** Keep replies under 150 words by default; skip preamble and recaps." },
    { id: "pushback", label: "+ Harder pushback", rule: "- **Pushback:** Challenge weak assumptions, confirmation bias, and blind spots before agreeing." },
    { id: "code", label: "+ Code & examples first", rule: "- **Format:** Lead with working code, concrete examples, or schemas before prose explanations." },
    { id: "no-questions", label: "+ No follow-up questions", rule: "- **Questions:** Do not end replies with follow-up questions unless a missing detail blocks execution." },
    { id: "no-slop", label: "+ Zero AI-isms", rule: "- **Anti-slop:** Cut AI clichés (\"delve\", \"tapestry\", \"it's important to note\"), throat-clearing, and sycophantic praise." },
    { id: "confirm-ops", label: "+ Confirm destructive ops", rule: "- **Safety gate:** Execute read-only and reversible steps directly; pause and confirm before destructive, external, or force-push actions." }
  ];
  const TARGET_FILENAMES = {
    "anywhere": "agenttune-instructions.md",
    "chatgpt-custom": "chatgpt-custom-instructions.txt",
    "chatgpt-projects": "chatgpt-project-instructions.md",
    "claude-personal": "claude-instructions.md",
    "claude-ai": "claude-project-instructions.md",
    "claude-code": "CLAUDE.md",
    "codex-cli": "AGENTS.md",
    "openclaw": "AGENTS.md",
    "muse": "Soul.md",
    "cursor": "agenttune.mdc",
    "copilot": "copilot-instructions.md",
    "gemini-code-assist": "GEMINI.md",
    "gemini-gems": "gemini-gem-instructions.md",
    "grok": "grok-instructions.md",
    "hermes": "hermes-persona.md",
    "api": "system-instructions.txt",
    "mcp": "mcp-setup.sh"
  };
  const filenameFor = targetId => TARGET_FILENAMES[targetId] || "agenttune-instructions.md";
  window.AT_INTEGRATIONS = INTEGRATIONS;
  window.AT_PROMPTS = { models: MODELS, modelFor, prompt, snippet, stripFrontMatter, destinations, modifiers: MODIFIERS, filenameFor };
  window.renderIntegrations = function (tuning, containerOrOpts) {
    const opts = containerOrOpts && containerOrOpts.nodeType ? { container: containerOrOpts } : (containerOrOpts || {});
    const root = opts.container || document.getElementById("integration-deep") || document.querySelector("[data-integration-deep]");
    if (!root) return;
    if (root.__atPicker) {
      if (typeof opts.hideModifiers === "boolean") root.__atPicker.setHideModifiers(opts.hideModifiers);
      root.__atPicker.setTuning(tuning);
      return;
    }
    const uid = "at-prompt-" + (++instanceCount);
    let currentTuning = tuning, revision = 0, hideModifiers = Boolean(opts.hideModifiers), copyTimer = null, modSkipped = false;
    const activeMods = new Set();
    const allowedModels = MODELS.filter(model => destinations(model.id, opts.only).length);
    const allowedApps = APPS.filter(a => INTEGRATIONS.some(t => a.targets.includes(t.id) && (!opts.only || opts.only.includes(t.id))));
    if (!allowedModels.length || !allowedApps.length) { root.textContent = "No destinations are available."; return; }
    root.classList.add("prompt-picker");
    root.innerHTML = '<div class="prompt-picker-controls"><label for="' + uid + '-app">1. Your app<select id="' + uid + '-app" data-app>' +
      allowedApps.map(a => '<option value="' + a.id + '">' + a.name + '</option>').join('') +
      '</select></label><label for="' + uid + '-target">2. Where to use it<select id="' + uid + '-target" data-target></select></label></div>' +
      '<details><summary>Optional model guidance</summary><label for="' + uid + '-model">Model<select id="' + uid + '-model" data-model></select></label><p>A prompt cannot switch models. Choose the model in your app separately.</p></details>' +
      '<article class="integration-deep-card prompt-picker-card"><div class="prompt-picker-heading"><h2 data-title></h2><span class="integration-badge" data-badge></span></div>' +
      '<p class="prompt-picker-sub" data-sub></p><p class="prompt-model-note" data-note></p><div class="prompt-picker-steps" data-steps></div>' +
      '<div class="prompt-modifiers" data-modifiers role="group" aria-label="Optional style modifiers"><span class="prompt-modifiers-label">Quick modifiers (optional):</span>' +
      MODIFIERS.map(m => '<button type="button" class="btn btn-secondary prompt-mod-btn" data-mod="' + m.id + '" aria-pressed="false">' + escapeHtml(m.label) + '</button>').join('') +
      '</div>' +
      '<label for="' + uid + '-edit">3. Review and edit your instructions</label>' +
      '<div class="prompt-budget-bar" data-budget data-state="empty" aria-hidden="true"><div class="prompt-budget-meta"><span class="prompt-budget-count" data-budget-text></span><span class="prompt-budget-hint" data-budget-hint></span></div><div class="prompt-budget-track"><div class="prompt-budget-fill" data-budget-fill></div></div></div>' +
      '<textarea id="' + uid + '-edit" class="prompt-edit snippet" data-edit spellcheck="false"></textarea>' +
      '<div class="prompt-actions"><button type="button" class="btn btn-primary" data-copy>Copy instructions</button><button type="button" class="btn btn-secondary" data-download>Download file</button><button type="button" class="btn btn-secondary" data-reset>Reset edits</button></div>' +
      '<p class="prompt-picker-status" role="status" aria-live="polite" data-status></p>' +
      '<details><summary>4. Check the fit after pasting</summary><p>Reopen the saved settings or file and confirm the text is present. In a new conversation, try a factual question, a planning task, and a critique request without repeating the desired style. Compare the replies with your preferences; one matching reply does not prove persistent compliance.</p><p>To undo, remove only the section between <code>agenttune:preferences:start</code> and <code>agenttune:preferences:end</code>, or the exact text you added. Preserve the rest of the file.</p><div class="prompt-actions"><button type="button" class="btn btn-secondary" data-useful>Fits my preferences</button><button type="button" class="btn btn-secondary" data-improve>Needs adjustment</button></div></details></article>';
    const $ = selector => root.querySelector(selector);
    const appSelect = $('[data-app]'), modelSelect = $('[data-model]'), targetSelect = $('[data-target]'),
      editor = $('[data-edit]'), modWrap = $('[data-modifiers]'), copyBtn = $('[data-copy]'),
      downloadBtn = $('[data-download]'), budgetWrap = $('[data-budget]'),
      budgetText = $('[data-budget-text]'), budgetHint = $('[data-budget-hint]'), budgetFill = $('[data-budget-fill]');
    const appForTarget = id => allowedApps.find(a => a.targets.includes(id) && id !== 'anywhere');
    const validTarget = opts.target && INTEGRATIONS.some(t => t.id === opts.target && (!opts.only || opts.only.includes(t.id))) ? opts.target : null;
    const preferredTarget = validTarget || (opts.model && modelFor(opts.model).preferred);
    let initialApp = 'any';
    if (validTarget) {
      const explicitApp = allowedApps.find(a => a.id === opts.app && a.targets.includes(validTarget));
      initialApp = explicitApp ? explicitApp.id : (appForTarget(validTarget)?.id || allowedApps.find(a => a.targets.includes(validTarget))?.id || allowedApps[0].id);
    } else if (allowedApps.some(a => a.id === opts.app)) {
      initialApp = opts.app;
    } else if (preferredTarget) {
      initialApp = appForTarget(preferredTarget)?.id || allowedApps.find(a => a.targets.includes(preferredTarget))?.id || allowedApps[0].id;
    } else if (!allowedApps.some(a => a.id === 'any')) {
      initialApp = allowedApps[0].id;
    }
    appSelect.value = initialApp;
    function resetCopyButton(targetId) {
      if (copyTimer) { clearTimeout(copyTimer); copyTimer = null; }
      copyBtn.classList.remove('is-copied');
      copyBtn.textContent = targetId === 'mcp' ? 'Copy setup command' : 'Copy instructions';
    }
    function applyMods(baseText, targetId) {
      modSkipped = false;
      if (!baseText || hideModifiers || !activeMods.size || targetId === 'mcp') return baseText;
      const lines = MODIFIERS.filter(m => activeMods.has(m.id)).map(m => m.rule).join('\n');
      const block = '\n\n## Custom modifiers\n' + lines;
      if (baseText.includes('\n<!-- agenttune:preferences:end -->')) {
        return baseText.replace('\n<!-- agenttune:preferences:end -->', block + '\n<!-- agenttune:preferences:end -->');
      }
      const combined = baseText + block;
      if (targetId === 'chatgpt-custom' && combined.length > 1500) {
        modSkipped = true;
        return baseText;
      }
      return combined;
    }
    function updateBudget(val, targetId, isOverCap) {
      if (!budgetWrap) return;
      if (targetId === 'mcp') { budgetWrap.hidden = true; return; }
      budgetWrap.hidden = false;
      const len = val.length;
      let state = 'empty', pct = 0, countLabel = '', hintLabel = '';
      if (targetId === 'chatgpt-custom') {
        if (!len && isOverCap) {
          const rawLen = stripFrontMatter(currentTuning).length;
          state = 'over'; pct = 100;
          countLabel = rawLen.toLocaleString() + ' / 1,500 chars — over cap';
          hintLabel = 'Trim rules or switch to ChatGPT Project / Markdown';
        } else if (!len) {
          state = 'empty'; pct = 0;
          countLabel = '0 / 1,500 chars';
          hintLabel = 'ChatGPT single-box limit';
        } else if (len > 1500) {
          state = 'over'; pct = 100;
          countLabel = len.toLocaleString() + ' / 1,500 chars (' + (len - 1500).toLocaleString() + ' over)';
          hintLabel = 'Exceeds ChatGPT 1,500-char box limit';
        } else if (len >= 1250 || modSkipped) {
          state = 'warn'; pct = Math.min(100, Math.round((len / 1500) * 100));
          countLabel = len.toLocaleString() + ' / 1,500 chars';
          hintLabel = modSkipped ? 'Modifier skipped to stay under 1,500-char cap' : (1500 - len).toLocaleString() + ' chars remaining';
        } else {
          state = 'ok'; pct = Math.max(4, Math.round((len / 1500) * 100));
          countLabel = len.toLocaleString() + ' / 1,500 chars';
          hintLabel = 'Fits ChatGPT Custom Instructions';
        }
      } else {
        const rules = (val.match(/^\s*(?:[-*]|\d+\.)\s+/gm) || []).length;
        if (!val.trim()) {
          state = 'empty'; pct = 0;
          countLabel = '0 chars · 0 rules';
          hintLabel = 'Optimal: 5–15 behavioral rules';
        } else if (rules > 30 || len > 4500) {
          state = 'over'; pct = 100;
          countLabel = len.toLocaleString() + ' chars · ' + rules + ' rule' + (rules === 1 ? '' : 's');
          hintLabel = 'Past 30-rule cliff — split into project rules';
        } else if (rules > 18 || len > 2400) {
          state = 'warn'; pct = Math.min(95, Math.max(65, Math.round((rules / 32) * 100)));
          countLabel = len.toLocaleString() + ' chars · ' + rules + ' rule' + (rules === 1 ? '' : 's');
          hintLabel = 'Dense prompt — keep key rules at top or bottom';
        } else {
          state = 'ok'; pct = Math.min(62, Math.max(8, Math.round(((rules || 1) / 25) * 100)));
          countLabel = len.toLocaleString() + ' chars · ' + rules + ' rule' + (rules === 1 ? '' : 's');
          hintLabel = 'Optimal rule budget';
        }
      }
      budgetWrap.setAttribute('data-state', state);
      if (budgetText) budgetText.textContent = countLabel;
      if (budgetHint) budgetHint.textContent = hintLabel;
      if (budgetFill) budgetFill.style.width = pct + '%';
    }
    function notifyChange() { if (window.atTrack) window.atTrack('setup_select'); if (opts.onChange) opts.onChange(root.__atPicker.getState()); }
    function updatePanel() {
      revision++;
      const model = modelFor(modelSelect.value), target = INTEGRATIONS.find(item => item.id === targetSelect.value);
      if (!target) return;
      const baseText = snippet(currentTuning, model.id, target.id);
      const text = applyMods(baseText, target.id);
      const fname = filenameFor(target.id);
      if (modWrap) modWrap.hidden = hideModifiers || target.id === 'mcp';
      $('[data-title]').textContent = target.name; $('[data-badge]').textContent = target.badge;
      $('[data-sub]').textContent = target.sub; $('[data-note]').textContent = model.note;
      $('[data-steps]').innerHTML = target.steps;
      editor.value = text; window.ATTextareas?.resize(editor);
      copyBtn.disabled = !text;
      resetCopyButton(target.id);
      if (downloadBtn) {
        downloadBtn.hidden = target.id === 'mcp';
        downloadBtn.disabled = !text;
        downloadBtn.textContent = 'Download ' + fname;
      }
      const activeModCount = hideModifiers ? 0 : activeMods.size;
      $('[data-status]').textContent = text ? text.length.toLocaleString() + ' characters' + (activeModCount ? ' · ' + activeModCount + ' modifier' + (activeModCount > 1 ? 's' : '') + ' active' : ' · review before copying') : 'Choose preferences or a template to create instructions.';
      updateBudget(text, target.id, target.id === 'chatgpt-custom' && !baseText && Boolean(stripFrontMatter(currentTuning)));
    }
    function updateTargets(preferred, model) {
      const app = allowedApps.find(a => a.id === appSelect.value) || allowedApps[0];
      const items = app.targets.map(id => INTEGRATIONS.find(t => t.id === id)).filter(t => t && (!opts.only || opts.only.includes(t.id)));
      targetSelect.innerHTML = items.map(t => '<option value="' + t.id + '">' + escapeHtml(t.name) + '</option>').join('');
      targetSelect.value = items.some(t => t.id === preferred) ? preferred : items[0]?.id;
      modelSelect.innerHTML = MODELS.filter(m => app.models.includes(m.id)).map(m => '<option value="' + m.id + '">' + m.name + '</option>').join('');
      modelSelect.value = app.models.includes(model) ? model : 'any';
      updatePanel();
    }
    appSelect.addEventListener('change', () => { updateTargets(undefined, modelSelect.value); notifyChange(); });
    modelSelect.addEventListener('change', () => { updatePanel(); notifyChange(); });
    targetSelect.addEventListener('change', () => { updatePanel(); notifyChange(); });
    if (modWrap) modWrap.addEventListener('click', e => {
      const btn = e.target && e.target.closest ? e.target.closest('[data-mod]') : null;
      if (!btn) return;
      const id = btn.getAttribute('data-mod');
      if (activeMods.has(id)) activeMods.delete(id); else activeMods.add(id);
      const on = activeMods.has(id);
      btn.setAttribute('aria-pressed', String(on));
      btn.classList.toggle('is-active', Boolean(on));
      updatePanel(); notifyChange();
    });
    editor.addEventListener('input', () => {
      revision++;
      const hasText = Boolean(editor.value.trim());
      copyBtn.disabled = !hasText;
      if (downloadBtn) downloadBtn.disabled = !hasText;
      resetCopyButton(targetSelect.value);
      $('[data-status]').textContent = editor.value.length.toLocaleString() + ' characters · edited';
      updateBudget(editor.value, targetSelect.value, false);
      if (opts.onChange) opts.onChange(root.__atPicker.getState());
    });
    $('[data-reset]').addEventListener('click', () => {
      activeMods.clear();
      if (root.querySelectorAll) root.querySelectorAll('[data-mod]').forEach(b => { b.setAttribute('aria-pressed', 'false'); b.classList.remove('is-active'); });
      updatePanel(); if (opts.onChange) opts.onChange(root.__atPicker.getState());
    });
    $('[data-useful]').addEventListener('click', () => { if (window.atTrack) window.atTrack('setup_useful'); $('[data-status]').textContent = 'Thanks. Keep checking the fit on different tasks.'; });
    $('[data-improve]').addEventListener('click', () => { if (window.atTrack) window.atTrack('setup_needs_work'); $('[data-status]').textContent = 'Edit one preference above, paste the updated block, and compare the same tasks.'; editor.focus(); });
    copyBtn.addEventListener('click', async () => {
      const text = editor.value, atRevision = revision; if (!text.trim()) return;
      try {
        await navigator.clipboard.writeText(text);
        if (window.atTrack) window.atTrack(location.pathname.includes('/tools/') ? 'generator_copy' : 'integration_copy');
        if (atRevision === revision) {
          const targetName = (INTEGRATIONS.find(t => t.id === targetSelect.value) || {}).name || 'your app';
          $('[data-status]').textContent = 'Copied. Paste it in ' + targetName + '.';
          copyBtn.textContent = 'Copied ✓';
          copyBtn.classList.add('is-copied');
          if (copyTimer) clearTimeout(copyTimer);
          copyTimer = setTimeout(() => resetCopyButton(targetSelect.value), 2000);
        }
      } catch {
        if (window.atTrack) window.atTrack('copy_error');
        if (atRevision === revision) { editor.focus(); editor.select(); $('[data-status]').textContent = 'Clipboard unavailable. Copy the selected instructions manually.'; }
      }
    });
    if (downloadBtn) downloadBtn.addEventListener('click', () => {
      const text = editor.value;
      if (!text.trim() || targetSelect.value === 'mcp') return;
      const fname = filenameFor(targetSelect.value);
      const mime = fname.endsWith('.txt') ? 'text/plain;charset=utf-8' : 'text/markdown;charset=utf-8';
      if (typeof Blob !== 'undefined' && typeof URL !== 'undefined' && URL.createObjectURL) {
        const url = URL.createObjectURL(new Blob([text], { type: mime }));
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', fname);
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
      if (window.atTrack) window.atTrack(location.pathname.includes('/tools/') ? 'generator_download' : 'integration_download');
      $('[data-status]').textContent = 'Downloaded ' + fname + '.';
    });
    root.__atPicker = {
      setTuning(value) { currentTuning = value; updatePanel(); },
      getState() { return { app: appSelect.value, model: modelSelect.value, target: targetSelect.value, edited: editor.value }; },
      setEdited(text) {
        if (typeof text === 'string' && text.length <= 30000) {
          editor.value = text; window.ATTextareas?.resize(editor);
          const hasText = Boolean(text.trim());
          copyBtn.disabled = !hasText;
          if (downloadBtn) downloadBtn.disabled = !hasText;
          $('[data-status]').textContent = text.length.toLocaleString() + ' characters · restored draft';
          updateBudget(text, targetSelect.value, false);
        }
      },
      selectApp(id, preferred, model) {
        if (!allowedApps.some(a => a.id === id)) return;
        appSelect.value = id;
        updateTargets(preferred, model || modelSelect.value);
      },
      selectModel(id) { const model = modelFor(id); appSelect.value = appForTarget(model.preferred)?.id || 'any'; updateTargets(model.preferred, id); },
      selectTarget(id) {
        if (!INTEGRATIONS.some(t => t.id === id && (!opts.only || opts.only.includes(t.id)))) return;
        const currentApp = allowedApps.find(a => a.id === appSelect.value);
        if (!currentApp || !currentApp.targets.includes(id)) {
          appSelect.value = appForTarget(id)?.id || allowedApps.find(a => a.targets.includes(id))?.id || 'any';
        }
        updateTargets(id, modelSelect.value);
      },
      setHideModifiers(value) {
        hideModifiers = Boolean(value);
        if (hideModifiers && activeMods.size) {
          activeMods.clear();
          if (root.querySelectorAll) root.querySelectorAll('[data-mod]').forEach(b => { b.setAttribute('aria-pressed', 'false'); b.classList.remove('is-active'); });
        }
        updatePanel();
      }
    };
    updateTargets(preferredTarget, opts.model);
    if (opts.edited) root.__atPicker.setEdited(opts.edited);
  };

  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-prompt-model], .lib-v2-jump-btn");
    if (!button) return;
    const root = document.getElementById("integration-deep") || document.querySelector("[data-integration-deep]");
    if (!root || !root.__atPicker) return;
    if (button.dataset.promptModel) root.__atPicker.selectModel(button.dataset.promptModel);
    else root.__atPicker.selectTarget(button.dataset.target);
    root.querySelector('[data-app]').focus({preventScroll:true});
    document.querySelectorAll('.lib-v2-anchor').forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#install'));
    root.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  });

  const tuningCache = new Map();
  window.fetchTuning = function (path) {
    if (typeof path !== "string" || !path || path.includes("..")) return Promise.resolve(null);
    const clean = path.replace(/^\/?(?:tunings\/)?/, "");
    if (!/^[\w-]+\/[\w.-]+\.md$/.test(clean)) return Promise.resolve(null);
    const url = "/tunings/" + clean;
    if (!tuningCache.has(url)) {
      tuningCache.set(url, fetch(url).then(response => {
        if (!response.ok) throw new Error("Tuning unavailable");
        return response.text();
      }).then(text => {
        if (/^\s*</.test(text) || !stripFrontMatter(text)) throw new Error("Invalid tuning");
        return text;
      }).catch(() => { tuningCache.delete(url); return null; }));
    }
    return tuningCache.get(url);
  };
})();
