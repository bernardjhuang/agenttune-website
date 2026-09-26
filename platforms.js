/* Shared installation registry: the picker, downloadable metadata and agent docs use this file. */
(function(root, factory) { const registry=factory(); if(typeof module==='object' && module.exports) module.exports=registry; else root.ATPlatforms=registry; })(typeof window!=='undefined'?window:globalThis, function(){
  const models = [
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
      targets: ["claude-personal", "claude-ai", "claude-code", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Fable 5.1 explicit scope and an output format; request checkpoints for longer work.",
      rules: ["Honor the requested scope and output format. Use supplied examples and context to resolve ambiguity.", "For longer tasks, give brief updates at meaningful checkpoints. Finish with the result, verification, and any unresolved issue."] },
    { id: "opus-5-5", name: "Opus 5.5", fullName: "Claude Opus 5.5", preferred: "claude-ai",
      targets: ["claude-personal", "claude-ai", "claude-code", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Set the scope and desired depth for Opus 5.5, then let the tuning shape delivery.",
      rules: ["Follow the requested scope and output format. State reasonable assumptions when they affect the result.", "Keep detail proportionate to the decision; include supporting evidence and unresolved uncertainty when relevant."] },
    { id: "grok-4-7", name: "Grok 4.7", fullName: "Grok 4.7", preferred: "grok",
      targets: ["grok", "cursor", "api", "anywhere", "mcp", "hermes", "openclaw"],
      note: "Give Grok 4.7 a concrete task and the evidence you expect in the answer.",
      rules: ["Distinguish verified facts from inferences and unresolved uncertainty. Cite sources when the task calls for verification.", "Stay within the requested scope, check the result, and summarize the outcome concisely."] }
  ];

  const destinations = [
    { id: "anywhere", name: "Any chat", sub: "Try it in one conversation.", badge: "Chat",
      steps: 'Start a new chat with your chosen model and paste this prompt. Follow it with your task. For persistent preferences, use a supported saved-instructions destination.' },
    { id: "muse", name: "Muse · saved preferences", sub: "A focused section in Soul.md.", badge: "Personal",
      steps: 'Paste this request into Muse and review the proposed change. It asks Muse to update only “How to work with me” in Soul.md, preserving other preferences. <a href="/guides/muse-personality">Muse setup guide →</a>' },
    { id: "codex-cli", name: "Codex · personal instructions", sub: "An appendable AGENTS.md section.", badge: "Coding",
      steps: 'Add this section to <code>~/.codex/AGENTS.md</code> for your personal defaults, or to a project’s <code>AGENTS.md</code> for shared project preferences. Preserve existing instructions, then start a new task. <a href="/guides/astra-personality">Codex setup guide →</a>' },
    { id: "chatgpt-projects", name: "ChatGPT · project instructions", sub: "Preferences for one project.", badge: "Project",
      steps: 'Open your ChatGPT project settings and add this block to its instructions. Start a chat in that project with your chosen model.' },
    { id: "chatgpt-custom", name: "ChatGPT · custom instructions", sub: "Personal communication defaults.", badge: "Personal",
      steps: 'Open <strong>Settings → Personalization → Custom Instructions</strong> and add this compact block. This export uses a conservative 1,500-character budget; the controls available in your app may differ. Use project instructions or a new chat for the full tuning.' },
    { id: "claude-personal", name: "Claude · account instructions", sub: "Your defaults across conversations.", badge: "Personal",
      steps: 'Open Claude’s <strong>Settings → General → Instructions for Claude</strong> and add this block. Review it alongside existing preferences. <a href="https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features">Official personalization guide →</a>' },
    { id: "claude-ai", name: "Claude · project instructions", sub: "Preferences for one project.", badge: "Project",
      steps: 'Open a Claude project and add this block to its instructions. Choose Fable 5.1 or Opus 5.5 in Claude where available, then start a project chat. <a href="/guides/claude-personality">Claude setup guide →</a>' },
    { id: "claude-code", name: "Claude Code · output style", sub: "A reusable communication style.", badge: "Coding",
      steps: 'Save this as <code>~/.claude/output-styles/agenttune.md</code> and select it with <code>/output-style</code>. If that file exists, preserve its header and other instructions; update only the marked AgentTune block. The header keeps Claude Code’s coding instructions enabled. <a href="/guides/claude-code-personality">Claude Code setup guide →</a>' },
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
      steps: 'Add this block to your Hermes persona alongside its role. Preserve existing instructions and select the model separately.' },
    { id: "openclaw", name: "OpenClaw · AGENTS.md", sub: "An appendable workspace section.", badge: "Agent",
      steps: 'Add this section to the workspace’s <code>AGENTS.md</code>. Keep existing identity, permissions, and task instructions.' },
    { id: "api", name: "API · instruction text", sub: "Use your provider’s instruction field.", badge: "Developer",
      steps: 'Send this text using OpenAI Responses <code>instructions</code>, Anthropic’s <code>system</code> field, or a Grok system message. Set the model ID separately. Include the instructions on each request where needed; this is prompt text, not a complete API request.' },
    { id: "mcp", name: "MCP · connect AgentTune", sub: "Fetch tunings with tools.", badge: "Connector",
      steps: 'Run this setup command in Claude Code. For other MCP clients, add <code>https://agent-tune.com/mcp</code> as a remote server. Then ask your agent to find and apply your tuning. This copies a connector command, not your selected tuning.' }
  ];
  const apps = [
    {id:'any', name:'Any chat', targets:['anywhere'], models:['any']},
    {id:'chatgpt', name:'ChatGPT', targets:['chatgpt-custom','chatgpt-projects','anywhere'], models:['any','astra-6','sol-6']},
    {id:'claude', name:'Claude', targets:['claude-personal','claude-ai','anywhere'], models:['any','fable-5-1','opus-5-5']},
    {id:'muse', name:'Meta Muse', targets:['muse','anywhere'], models:['any','muse']},
    {id:'coding', name:'Coding assistant', targets:['codex-cli','claude-code','cursor','copilot','gemini-code-assist','hermes','openclaw'], models:models.map(m=>m.id)},
    {id:'grok', name:'Grok', targets:['grok','anywhere'], models:['any','grok-4-7']},
    {id:'gemini', name:'Gemini', targets:['gemini-gems','anywhere'], models:['any']},
    {id:'api', name:'API or MCP', targets:['api','mcp'], models:models.map(m=>m.id)}
  ];
  const sources = {
    chatgpt:'https://learn.chatgpt.com/docs/personalize',
    claude:'https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features',
    muse:'https://www.meta.com/help/artificial-intelligence/2225571704857152/',
    coding:'https://learn.chatgpt.com/docs/agent-configuration/agents-md',
    api:'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'
  };
  return {version:'2026-09-25.1', reviewed:'2026-09-25', apps, models, destinations, sources};
});
