/* Shared, model-aware prompts for test results, the library, and the generator. */
(function () {
  "use strict";
  const MODELS = [
    { id: "any", name: "Any model", fullName: "your AI assistant", preferred: "anywhere",
      note: "Use a general communication profile, then adjust it after a few real tasks.",
      rules: ["Match the depth and format to the task. Lead with the useful answer.", "Ask for clarification when missing information would materially change the result."] },
    { id: "muse", name: "Muse", fullName: "Meta Muse", preferred: "muse",
      targets: ["muse", "anywhere"],
      note: "Shape Muse's everyday communication with a small, editable set of preferences.",
      rules: ["Keep everyday replies easy to act on, with a clear next step when useful.", "Treat these as communication preferences; keep existing task permissions and boundaries intact."] },
    { id: "astra-6", name: "Astra 6", fullName: "GPT-6 Astra (Astra 6)", preferred: "codex-cli",
      targets: ["codex-cli", "chatgpt-projects", "chatgpt-custom", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Astra 6 a clear outcome and room to follow through on the work you've authorized.",
      rules: ["Follow through on the authorized task. Ask only when an unresolved detail materially changes scope, correctness, or permission.", "Lead with the result. Use plain prose and only as much structure and verification as the task needs."] },
    { id: "sol-6", name: "Sol 6", fullName: "GPT-6 Sol (Sol 6)", preferred: "codex-cli",
      targets: ["codex-cli", "chatgpt-projects", "chatgpt-custom", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Sol 6 the goal, constraints, and expected deliverable in a compact brief.",
      rules: ["Use the stated goal, constraints, and deliverable to guide the work. Ask about material gaps.", "Keep the answer proportionate to the task; include useful evidence and the next action when needed."] },
    { id: "fable-5-1", name: "Fable 5.1", fullName: "Claude Fable 5.1", preferred: "claude-ai",
      targets: ["claude-ai", "claude-code", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Fable 5.1 explicit scope and an output format; request checkpoints for longer work.",
      rules: ["Honor the requested scope and output format. Use supplied examples and context to resolve ambiguity.", "For longer tasks, give brief updates at meaningful checkpoints. Finish with the result, verification, and any unresolved issue."] },
    { id: "opus-5-5", name: "Opus 5.5", fullName: "Claude Opus 5.5", preferred: "claude-ai",
      targets: ["claude-ai", "claude-code", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Set the scope and desired depth for Opus 5.5, then let the tuning shape delivery.",
      rules: ["Follow the requested scope and output format. State reasonable assumptions when they affect the result.", "Keep detail proportionate to the decision; include supporting evidence and unresolved uncertainty when relevant."] },
    { id: "grok-4-7", name: "Grok 4.7", fullName: "Grok 4.7", preferred: "grok",
      targets: ["grok", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Grok 4.7 a concrete task and the evidence you expect in the answer.",
      rules: ["Distinguish verified facts from inferences and unresolved uncertainty. Cite sources when the task calls for verification.", "Stay within the requested scope, check the result, and summarize the outcome concisely."] }
  ];

  const INTEGRATIONS = [
    { id: "anywhere", name: "Any chat", sub: "Try it in one conversation.", badge: "Chat",
      steps: 'Start a new chat with your chosen model and paste this prompt. Follow it with your task. For persistent preferences, use a supported saved-instructions destination.' },
    { id: "muse", name: "Muse · saved preferences", sub: "A focused section in Soul.md.", badge: "Personal",
      steps: 'Paste this request into Muse and review the proposed change. It asks Muse to update only “How to work with me” in Soul.md, preserving other preferences. <a href="/guides/muse-personality">Muse setup guide →</a>' },
    { id: "codex-cli", name: "Codex · personal instructions", sub: "An appendable AGENTS.md section.", badge: "Coding",
      steps: 'Add this section to <code>~/.codex/AGENTS.md</code> for your personal defaults, or to a project’s <code>AGENTS.md</code> for shared project preferences. Preserve existing instructions, then start a new task. <a href="/guides/astra-personality">Codex setup guide →</a>' },
    { id: "chatgpt-projects", name: "ChatGPT · project instructions", sub: "Preferences for one project.", badge: "Project",
      steps: 'Open your ChatGPT project settings and add this block to its instructions. Start a chat in that project with your chosen model.' },
    { id: "chatgpt-custom", name: "ChatGPT · custom instructions", sub: "Personal communication defaults.", badge: "Personal",
      steps: 'Open <strong>Settings → Personalization → Custom Instructions</strong> and add this compact block. It fits within 1,500 characters. Use project instructions or a new chat for the full tuning.' },
    { id: "claude-ai", name: "Claude · project instructions", sub: "Preferences for one project.", badge: "Project",
      steps: 'Open a Claude project and add this block to its instructions. Choose Fable 5.1 or Opus 5.5 in Claude where available, then start a project chat. <a href="/guides/claude-personality">Claude setup guide →</a>' },
    { id: "claude-code", name: "Claude Code · output style", sub: "A reusable communication style.", badge: "Coding",
      steps: 'Save this as <code>~/.claude/output-styles/agenttune.md</code> and select it with <code>/output-style</code>. If that file exists, merge the tuning into it. The header keeps Claude Code’s coding instructions enabled. <a href="/guides/claude-code-personality">Claude Code setup guide →</a>' },
    { id: "grok", name: "Grok · chat or Bot", sub: "A chat prompt or reusable Bot description.", badge: "Chat",
      steps: 'Paste this in a new Grok chat, or add it to your Grok Bot’s Description alongside its job. Select Grok 4.7 wherever your app offers it; a prompt cannot switch models. <a href="/guides/grokbot-personality">Grok Bot setup guide →</a>' },
    { id: "cursor", name: "Cursor · project rule", sub: ".cursor/rules/agenttune.mdc", badge: "Coding",
      steps: 'Save this in <code>.cursor/rules/agenttune.mdc</code>. Merge with any existing file. This always-on project rule can be shared with collaborators, so use preferences appropriate for the project.' },
    { id: "copilot", name: "GitHub Copilot · repository instructions", sub: ".github/copilot-instructions.md", badge: "Coding",
      steps: 'Append this section to <code>.github/copilot-instructions.md</code>, preserving existing repository instructions. Use preferences appropriate for everyone sharing this project.' },
    { id: "gemini-gems", name: "Gemini · Gem instructions", sub: "A reusable Gem.", badge: "Personal",
      steps: 'Create or edit a Gem in Gemini and add this block to its instructions alongside the Gem’s job. Save it, then open a chat with that Gem.' },
    { id: "gemini-code-assist", name: "Gemini CLI · GEMINI.md", sub: "A Markdown communication section.", badge: "Coding",
      steps: 'Append this section to your project’s <code>GEMINI.md</code> or personal <code>~/.gemini/GEMINI.md</code>. Preserve existing instructions and reload the context.' },
    { id: "hermes", name: "Hermes · persona", sub: "Communication preferences for your persona.", badge: "Agent",
      steps: 'Add this block to your Hermes persona alongside its role. Preserve existing instructions and select the model separately. <a href="/guides/hermes-personality">Hermes setup guide →</a>' },
    { id: "openclaw", name: "OpenClaw · AGENTS.md", sub: "An appendable workspace section.", badge: "Agent",
      steps: 'Add this section to the workspace’s <code>AGENTS.md</code>. Keep existing identity, permissions, and task instructions. <a href="/guides/openclaw-personality">OpenClaw setup guide →</a>' },
    { id: "api", name: "API · instruction text", sub: "Use your provider’s instruction field.", badge: "Developer",
      steps: 'Send this text using OpenAI Responses <code>instructions</code>, Anthropic’s <code>system</code> field, or a Grok system message. Set the model ID separately. Include the instructions on each request where needed; this is prompt text, not a complete API request.' },
    { id: "mcp", name: "MCP · connect AgentTune", sub: "Fetch tunings with tools.", badge: "Connector",
      steps: 'Run this setup command in Claude Code. For other MCP clients, add <code>https://agent-tune.com/mcp</code> as a remote server. Then ask your agent to find and apply your tuning. This copies a connector command, not your selected tuning.' }
  ];
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
    const body = prompt(tuning, modelId);
    if (!body) return "";
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
    root.innerHTML = '<div class="prompt-picker-controls"><label for="' + uid + '-model">1. Your model<select id="' + uid + '-model" data-model>' +
      allowedModels.map(model => '<option value="' + model.id + '">' + model.name + '</option>').join("") +
      '</select></label><label for="' + uid + '-target">2. Where to paste<select id="' + uid + '-target" data-target></select></label></div>' +
      '<p class="prompt-picker-hint">Choose the model in your app too. These prompts adjust communication preferences; availability depends on your app and plan.</p>' +
      '<article class="integration-deep-card prompt-picker-card"><div class="prompt-picker-heading"><h3 data-title></h3><span class="integration-badge" data-badge></span></div>' +
      '<p class="prompt-picker-sub" data-sub></p><p class="prompt-model-note" data-note></p><div class="prompt-picker-steps" data-steps></div>' +
      '<div class="prompt-picker-actions"><button type="button" class="prompt-copy" data-copy>Copy prompt</button><span role="status" aria-live="polite" data-status></span></div>' +
      '<details class="prompt-preview"><summary>Preview and edit after pasting</summary><pre class="snippet" tabindex="0"></pre></details></article>';
    const $ = selector => root.querySelector(selector);
    const modelSelect = $("[data-model]"), targetSelect = $("[data-target]");
    modelSelect.value = allowedModels.some(m => m.id === opts.model) ? opts.model : allowedModels[0].id;
    function updatePanel() {
      revision++;
      const model = modelFor(modelSelect.value);
      const target = INTEGRATIONS.find(item => item.id === targetSelect.value);
      if (!target) return;
      const text = snippet(currentTuning, model.id, target.id);
      $("[data-title]").textContent = target.name;
      $("[data-badge]").textContent = target.badge;
      $("[data-sub]").textContent = target.sub;
      $("[data-note]").textContent = target.id === "mcp" ? "Connect once, then choose a tuning through your agent." : model.note;
      $("[data-steps]").innerHTML = target.steps;
      $(".snippet").textContent = text;
      const copy = $("[data-copy]");
      copy.disabled = !text;
      copy.textContent = target.id === "mcp" ? "Copy setup command" : "Copy prompt";
      $("[data-status]").textContent = text ? text.length.toLocaleString() + (target.id === "chatgpt-custom" ? " / 1,500 characters · compact prompt" : " characters · copies the full prompt") : (currentTuning && target.id === "chatgpt-custom" ? "No compact version is available. Choose project instructions or Any chat for the full tuning." : "Choose a tuning to create a prompt.");
    }
    function updateTargets(preferred) {
      const items = destinations(modelSelect.value, opts.only);
      targetSelect.innerHTML = items.map(item => '<option value="' + item.id + '">' + escapeHtml(item.name) + '</option>').join("");
      targetSelect.value = items.some(item => item.id === preferred) ? preferred :
        (items.some(item => item.id === modelFor(modelSelect.value).preferred) ? modelFor(modelSelect.value).preferred : items[0].id);
      updatePanel();
    }
    modelSelect.addEventListener("change", () => updateTargets());
    targetSelect.addEventListener("change", updatePanel);
    $("[data-copy]").addEventListener("click", async () => {
      const text = snippet(currentTuning, modelSelect.value, targetSelect.value), atRevision = revision;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        if (window.atTrack) window.atTrack(location.pathname.includes("/tools/") ? "generator_copy" : "integration_copy");
        if (atRevision === revision) $("[data-status]").textContent = "Copied. Paste it in " + INTEGRATIONS.find(item => item.id === targetSelect.value).name + ".";
      } catch (_) {
        if (atRevision !== revision) return;
        $(".prompt-preview").open = true;
        $(".snippet").focus();
        $("[data-status]").textContent = "Clipboard unavailable. Select and copy the full text in the preview.";
      }
    });
    root.__atPicker = {
      setTuning(value) { currentTuning = value; updatePanel(); },
      selectModel(id) {
        if (!allowedModels.some(model => model.id === id)) return;
        modelSelect.value = id; updateTargets();
      },
      selectTarget(id) {
        if (!destinations("any", opts.only).some(item => item.id === id)) return;
        if (!destinations(modelSelect.value, opts.only).some(item => item.id === id)) modelSelect.value = "any";
        updateTargets(id);
      }
    };
    updateTargets(opts.target);
  };

  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-prompt-model], .lib-v2-jump-btn");
    if (!button) return;
    const root = document.getElementById("integration-deep") || document.querySelector("[data-integration-deep]");
    if (!root || !root.__atPicker) return;
    if (button.dataset.promptModel) root.__atPicker.selectModel(button.dataset.promptModel);
    else root.__atPicker.selectTarget(button.dataset.target);
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
