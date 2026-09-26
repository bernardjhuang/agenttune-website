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
  window.AT_INTEGRATIONS = INTEGRATIONS;
  window.AT_PROMPTS = { models: MODELS, modelFor, prompt, snippet, stripFrontMatter, destinations };
  window.renderIntegrations = function (tuning, containerOrOpts) {
    const opts = containerOrOpts && containerOrOpts.nodeType ? { container: containerOrOpts } : (containerOrOpts || {});
    const root = opts.container || document.getElementById("integration-deep") || document.querySelector("[data-integration-deep]");
    if (!root) return;
    if (root.__atPicker) { root.__atPicker.setTuning(tuning); return; }
    const uid = "at-prompt-" + (++instanceCount);
    let currentTuning = tuning, revision = 0;
    const allowedModels = MODELS.filter(model => destinations(model.id, opts.only).length);
    if (!allowedModels.length) { root.textContent = "No destinations are available."; return; }
    root.classList.add("prompt-picker");
    root.innerHTML = '<div class="prompt-picker-controls"><label for="' + uid + '-app">1. Your app<select id="' + uid + '-app" data-app>' +
      APPS.filter(a => INTEGRATIONS.some(t=>a.targets.includes(t.id) && (!opts.only || opts.only.includes(t.id)))).map(a=>'<option value="'+a.id+'">'+a.name+'</option>').join('') +
      '</select></label><label for="' + uid + '-target">2. Where to use it<select id="' + uid + '-target" data-target></select></label></div>' +
      '<details><summary>Optional model guidance</summary><label for="'+uid+'-model">Model<select id="'+uid+'-model" data-model></select></label><p>A prompt cannot switch models. Choose the model in your app separately.</p></details>' +
      '<article class="integration-deep-card prompt-picker-card"><div class="prompt-picker-heading"><h2 data-title></h2><span class="integration-badge" data-badge></span></div>' +
      '<p class="prompt-picker-sub" data-sub></p><p class="prompt-model-note" data-note></p><div class="prompt-picker-steps" data-steps></div>' +
      '<label for="'+uid+'-edit">3. Review and edit your instructions</label><textarea id="'+uid+'-edit" class="prompt-edit snippet" data-edit spellcheck="false"></textarea>' +
      '<div class="prompt-actions"><button type="button" class="btn btn-primary" data-copy>Copy instructions</button><button type="button" class="btn btn-secondary" data-reset>Reset edits</button></div>' +
      '<p class="prompt-picker-status" role="status" aria-live="polite" data-status></p>' +
      '<details><summary>4. Check the fit after pasting</summary><p>Reopen the saved settings or file and confirm the text is present. In a new conversation, try a factual question, a planning task, and a critique request without repeating the desired style. Compare the replies with your preferences; one matching reply does not prove persistent compliance.</p><p>To undo, remove only the section between <code>agenttune:preferences:start</code> and <code>agenttune:preferences:end</code>, or the exact text you added. Preserve the rest of the file.</p><div class="prompt-actions"><button type="button" class="btn btn-secondary" data-useful>Fits my preferences</button><button type="button" class="btn btn-secondary" data-improve>Needs adjustment</button></div></details></article>';
    const $ = selector => root.querySelector(selector);
    const appSelect = $('[data-app]'), modelSelect = $('[data-model]'), targetSelect = $('[data-target]'), editor = $('[data-edit]');
    const appForTarget = id => APPS.find(a=>a.targets.includes(id) && id!=='anywhere');
    const preferredTarget = opts.target || (opts.model && modelFor(opts.model).preferred);
    appSelect.value = APPS.some(a=>a.id===opts.app) ? opts.app : (appForTarget(preferredTarget)?.id || 'any');
    function notifyChange() { if (window.atTrack) window.atTrack('setup_select'); if (opts.onChange) opts.onChange(root.__atPicker.getState()); }
    function updatePanel() {
      revision++;
      const model = modelFor(modelSelect.value), target = INTEGRATIONS.find(item => item.id === targetSelect.value);
      if (!target) return;
      const text = snippet(currentTuning, model.id, target.id);
      $('[data-title]').textContent = target.name; $('[data-badge]').textContent = target.badge;
      $('[data-sub]').textContent = target.sub; $('[data-note]').textContent = model.note;
      $('[data-steps]').innerHTML = target.steps;
      editor.value = text; $('[data-copy]').disabled = !text;
      $('[data-copy]').textContent = target.id === 'mcp' ? 'Copy setup command' : 'Copy instructions';
      $('[data-status]').textContent = text ? text.length.toLocaleString() + ' characters · review before copying' : 'Choose preferences or a template to create instructions.';
    }
    function updateTargets(preferred, model) {
      const app = APPS.find(a=>a.id===appSelect.value) || APPS[0];
      const items = app.targets.map(id=>INTEGRATIONS.find(t=>t.id===id)).filter(t=>t && (!opts.only || opts.only.includes(t.id)));
      targetSelect.innerHTML = items.map(t=>'<option value="'+t.id+'">'+escapeHtml(t.name)+'</option>').join('');
      targetSelect.value = items.some(t=>t.id===preferred) ? preferred : items[0]?.id;
      modelSelect.innerHTML = MODELS.filter(m=>app.models.includes(m.id)).map(m=>'<option value="'+m.id+'">'+m.name+'</option>').join('');
      modelSelect.value = app.models.includes(model) ? model : 'any';
      updatePanel();
    }
    appSelect.addEventListener('change',()=>{updateTargets(); notifyChange();});
    modelSelect.addEventListener('change',()=>{updatePanel(); notifyChange();});
    targetSelect.addEventListener('change',()=>{updatePanel(); notifyChange();});
    editor.addEventListener('input',()=>{revision++; $('[data-copy]').disabled=!editor.value.trim(); $('[data-status]').textContent=editor.value.length.toLocaleString()+' characters · edited'; if(opts.onChange) opts.onChange(root.__atPicker.getState());});
    $('[data-reset]').addEventListener('click',()=>{updatePanel(); if(opts.onChange) opts.onChange(root.__atPicker.getState());});
    $('[data-useful]').addEventListener('click',()=>{if(window.atTrack) window.atTrack('setup_useful'); $('[data-status]').textContent='Thanks. Keep checking the fit on different tasks.';});
    $('[data-improve]').addEventListener('click',()=>{if(window.atTrack) window.atTrack('setup_needs_work'); $('[data-status]').textContent='Edit one preference above, paste the updated block, and compare the same tasks.'; editor.focus();});
    $('[data-copy]').addEventListener('click',async()=>{
      const text=editor.value, atRevision=revision; if(!text.trim()) return;
      try { await navigator.clipboard.writeText(text); if(window.atTrack) window.atTrack(location.pathname.includes('/tools/')?'generator_copy':'integration_copy');
        if(atRevision===revision) $('[data-status]').textContent='Copied. Paste it in '+INTEGRATIONS.find(t=>t.id===targetSelect.value).name+'.';
      } catch { if(window.atTrack) window.atTrack('copy_error'); if(atRevision===revision) {editor.focus(); editor.select(); $('[data-status]').textContent='Clipboard unavailable. Copy the selected instructions manually.';} }
    });
    root.__atPicker = {
      setTuning(value) {currentTuning=value; updatePanel();},
      getState() {return {app:appSelect.value, model:modelSelect.value, target:targetSelect.value, edited:editor.value};},
      setEdited(text) {if(typeof text==='string' && text.length<=30000) {editor.value=text; $('[data-copy]').disabled=!text.trim(); $('[data-status]').textContent=text.length.toLocaleString()+' characters · restored draft';}},
      selectModel(id) {const model=modelFor(id); appSelect.value=appForTarget(model.preferred)?.id || 'any'; updateTargets(model.preferred,id);},
      selectTarget(id) {if(!INTEGRATIONS.some(t=>t.id===id)) return; appSelect.value=appForTarget(id)?.id || 'any'; updateTargets(id,modelSelect.value);}
    };
    updateTargets(preferredTarget,opts.model);
    if(opts.edited) root.__atPicker.setEdited(opts.edited);
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
