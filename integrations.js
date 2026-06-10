/* AgentTune — per-agent paste-ready integration snippets
 *
 * Single source of truth for "Add it to your agent" cards on every test
 * result screen. Each test page calls window.renderIntegrations(tuning,
 * containerEl) after computing the user's tuning markdown — this builds
 * 13 paste-ready cards (CLI snippets, chat preambles, API examples).
 *
 * Each snippet contains the literal placeholder [TUNING_PLACEHOLDER]
 * which is substituted with the user's actual tuning content at render
 * time. The Copy button copies the FULL (substituted) snippet, even
 * though the visible <pre> may scroll.
 */
(function () {
  // -------- Reusable chat preamble (used by web chat surfaces) --------
  const CHAT_PREAMBLE = `# How to respond to me

The Markdown below is my personality tuning, generated from a validated personality test on AgentTune. Read it as operating instructions for how I think and how I want you to respond. Apply it across every reply in this {{SCOPE}}.

---

[TUNING_PLACEHOLDER]`;

  const chat = (scope) => CHAT_PREAMBLE.replace("{{SCOPE}}", scope);

  // -------- The agent surfaces --------
  const INTEGRATIONS = [
    {
      id: "claude-code",
      name: "Claude Code (CLI)",
      sub: "CLAUDE.md in your project root — auto-loads every session.",
      badge: "CLI",
      lang: "bash",
      steps: [
        { kind: "text", body: "From your project root, run:" },
        {
          kind: "snippet",
          body: `cat > CLAUDE.md << 'AGENTTUNE_EOF'
[TUNING_PLACEHOLDER]
AGENTTUNE_EOF`
        },
        {
          kind: "text",
          body:
            "Start <code>claude</code> in that directory — it ingests <code>CLAUDE.md</code> on every session. For global rules, use <code>~/.claude/CLAUDE.md</code> instead."
        }
      ]
    },
    {
      id: "claude-ai",
      name: "Claude.ai (web)",
      sub: "Project Instructions — scoped to one project's chats.",
      badge: "Web",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body:
            "Open <a href=\"https://claude.ai/projects\" target=\"_blank\" rel=\"noopener\">Claude.ai → Projects → New project → Project Instructions</a>."
        },
        { kind: "text", body: "Paste this entire block (preamble + tuning):" },
        { kind: "snippet", body: chat("chat in this project") },
        {
          kind: "text",
          body: "Every chat created inside that project will now reply through your tuning."
        }
      ]
    },
    {
      id: "mcp",
      name: "MCP connector (any agent)",
      sub: "agent-tune.com/mcp — live tools, no pasting. Claude, Cursor, anything MCP.",
      badge: "MCP",
      lang: "bash",
      steps: [
        {
          kind: "text",
          body:
            "AgentTune runs a public MCP server. Connect it once and your agent fetches tunings and tests itself — tools: <code>list_tunings</code>, <code>get_tuning</code>, <code>get_test_spec</code>. No auth."
        },
        {
          kind: "snippet",
          body: `# Claude Code
claude mcp add --transport http agenttune https://agent-tune.com/mcp`
        },
        {
          kind: "text",
          body:
            "Claude.ai / Desktop: <strong>Settings → Connectors → Add custom connector</strong> → <code>https://agent-tune.com/mcp</code>. Cursor: <strong>Settings → MCP → Add server</strong> with the same URL."
        },
        {
          kind: "text",
          body: "Then just ask: <em>“Load my tuning from AgentTune and apply it for this session.”</em>"
        }
      ]
    },
    {
      id: "chatgpt-custom",
      name: "ChatGPT (Custom Instructions)",
      sub: "Settings → Personalization → Custom Instructions. Applies to every chat.",
      badge: "Web",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body:
            "Open <strong>Settings → Personalization → Custom Instructions</strong>."
        },
        {
          kind: "text",
          body:
            'Paste this block into the <em>"How would you like ChatGPT to respond?"</em> field:'
        },
        { kind: "snippet", body: chat("conversation we have") }
      ]
    },
    {
      id: "chatgpt-projects",
      name: "ChatGPT Projects",
      sub: "Project Instructions — scoped to one project's chats.",
      badge: "Web",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body:
            "Open <strong>ChatGPT → New Project → Project Instructions</strong>."
        },
        { kind: "text", body: "Paste this block:" },
        { kind: "snippet", body: chat("chat in this project") }
      ]
    },
    {
      id: "codex-cli",
      name: "OpenAI Codex CLI",
      sub: "AGENTS.md in your project root — auto-loads on every codex run.",
      badge: "CLI",
      lang: "bash",
      steps: [
        { kind: "text", body: "From your project root, run:" },
        {
          kind: "snippet",
          body: `cat > AGENTS.md << 'AGENTTUNE_EOF'
[TUNING_PLACEHOLDER]
AGENTTUNE_EOF`
        },
        {
          kind: "text",
          body:
            "Codex picks up <code>AGENTS.md</code> automatically. For rules that apply across every project, save to <code>~/.codex/AGENTS.md</code> instead."
        }
      ]
    },
    {
      id: "cursor",
      name: "Cursor",
      sub: ".cursor/rules/agenttune.mdc — applies to every Cursor chat in this repo.",
      badge: "IDE",
      lang: "bash",
      steps: [
        { kind: "text", body: "From your project root, run:" },
        {
          kind: "snippet",
          body: `mkdir -p .cursor/rules && cat > .cursor/rules/agenttune.mdc << 'AGENTTUNE_EOF'
---
description: AgentTune personality tuning
alwaysApply: true
---

[TUNING_PLACEHOLDER]
AGENTTUNE_EOF`
        },
        {
          kind: "text",
          body:
            "Cursor reads <code>.mdc</code> files inside <code>.cursor/rules/</code> automatically. The <code>alwaysApply: true</code> flag attaches it to every chat in this repo."
        }
      ]
    },
    {
      id: "gemini-gems",
      name: "Gemini Gems",
      sub: "gemini.google.com → New Gem — a reusable, tuned Gemini chat.",
      badge: "Web",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body:
            "Open <a href=\"https://gemini.google.com/gem/create\" target=\"_blank\" rel=\"noopener\">gemini.google.com → New Gem</a> → Custom instructions."
        },
        { kind: "text", body: "Paste this block into the instructions field:" },
        { kind: "snippet", body: chat("chat with this Gem") },
        { kind: "text", body: "Save the Gem. From now on, opening it gives you a Gemini that's already tuned to you." }
      ]
    },
    {
      id: "gemini-code-assist",
      name: "Gemini Code Assist / Antigravity",
      sub: "System instructions panel inside the IDE-integrated agent.",
      badge: "IDE",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body:
            "Open the agent's <strong>System instructions</strong> panel (Code Assist: settings → custom instructions; Antigravity: agent config)."
        },
        { kind: "text", body: "Paste this block:" },
        { kind: "snippet", body: chat("response from this agent") }
      ]
    },
    {
      id: "hermes",
      name: "Hermes CLI",
      sub: "Save to disk, then pass via --system or persona config.",
      badge: "CLI",
      lang: "bash",
      steps: [
        { kind: "text", body: "Save the tuning to a file in your Hermes config dir:" },
        {
          kind: "snippet",
          body: `mkdir -p ~/.hermes && cat > ~/.hermes/agenttune.md << 'AGENTTUNE_EOF'
[TUNING_PLACEHOLDER]
AGENTTUNE_EOF`
        },
        {
          kind: "text",
          body:
            "Use it on the command line with <code>hermes --system ~/.hermes/agenttune.md</code> — or paste the file's contents into the <code>system_prompt</code> field of your active persona config."
        }
      ]
    },
    {
      id: "openclaw",
      name: "OpenClaw",
      sub: "AGENTS.md in your project root.",
      badge: "CLI",
      lang: "bash",
      steps: [
        { kind: "text", body: "From your project root, run:" },
        {
          kind: "snippet",
          body: `cat > AGENTS.md << 'AGENTTUNE_EOF'
[TUNING_PLACEHOLDER]
AGENTTUNE_EOF`
        },
        {
          kind: "text",
          body:
            "OpenClaw ingests <code>AGENTS.md</code> the same way Codex CLI does — automatically on each session."
        }
      ]
    },
    {
      id: "api",
      name: "Any API / SDK",
      sub: "Pass the tuning as the system parameter on every request.",
      badge: "API",
      lang: "python",
      steps: [
        {
          kind: "text",
          body:
            "Example with the Anthropic Python SDK (the pattern is identical for OpenAI's <code>system</code> message or Gemini's <code>systemInstruction</code>):"
        },
        {
          kind: "snippet",
          body: `from anthropic import Anthropic

SYSTEM_TUNING = """\\
[TUNING_PLACEHOLDER]
"""

client = Anthropic()
resp = client.messages.create(
    model="claude-haiku-4-5",
    system=SYSTEM_TUNING,
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}],
)
print(resp.content[0].text)`
        },
        {
          kind: "text",
          body:
            "OpenAI SDK: drop the same string into <code>messages=[{role:\"system\", content: SYSTEM_TUNING}]</code>. Gemini: into <code>systemInstruction</code>. Same content, every provider."
        }
      ]
    },
    {
      id: "anywhere",
      name: "Anywhere else (any chat UI)",
      sub: "Works for any agent that accepts a chat message as its first input.",
      badge: "Chat",
      lang: "markdown",
      steps: [
        {
          kind: "text",
          body: "Paste this block as your <strong>very first message</strong> in a new conversation:"
        },
        { kind: "snippet", body: chat("reply you send me") },
        {
          kind: "text",
          body:
            "The agent ingests it as context. Subsequent messages will respond through your tuning."
        }
      ]
    }
  ];

  // ---------- Render ----------
  function escAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escText(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function makeCard(item, idxBase) {
    let stepIdx = 0;
    const stepsHtml = item.steps
      .map((step) => {
        if (step.kind === "text") {
          stepIdx++;
          return `<div class="integration-step"><span class="integration-step-num">${stepIdx}</span><div class="integration-step-body">${step.body}</div></div>`;
        }
        // snippet
        const sid = `${item.id}-snip-${idxBase}`;
        return `
          <div class="snippet-wrap">
            <pre class="snippet" data-snippet="${sid}" data-lang="${escAttr(item.lang)}"><code>${escText(step.body)}</code></pre>
            <button class="snippet-copy" type="button" data-copy-for="${sid}" aria-label="Copy ${escAttr(item.name)} snippet">Copy</button>
          </div>`;
      })
      .join("");

    return `
      <article class="integration-deep-card" data-agent="${item.id}">
        <header class="integration-head">
          <div class="integration-head-text">
            <div class="integration-name">${escText(item.name)}</div>
            <div class="integration-sub">${item.sub}</div>
          </div>
          <span class="integration-badge">${escText(item.badge)}</span>
        </header>
        <div class="integration-steps">${stepsHtml}</div>
      </article>`;
  }

  function bindCopies(container) {
    container.querySelectorAll(".snippet-copy").forEach((btn) => {
      if (btn.dataset.bound === "1") return;
      btn.dataset.bound = "1";
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-copy-for");
        const pre = container.querySelector(`[data-snippet="${CSS.escape(id)}"]`);
        if (!pre) return;
        const text = pre.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
          const orig = btn.textContent;
          btn.textContent = "Copied ✓";
          btn.classList.add("is-copied");
          setTimeout(() => {
            btn.textContent = orig;
            btn.classList.remove("is-copied");
          }, 1400);
        } catch (e) {
          /* clipboard may be blocked; silently ignore */
        }
      });
    });
  }

  // Strip YAML front-matter from a tuning markdown. The front-matter is
  // useful when an AI agent fetches the canonical .md file by URL (the
  // install: / verify: blocks tell the agent how to install itself), but
  // it's just noise for a human pasting the snippet into ChatGPT, Gemini
  // Gems, etc. — they only need the actual rules.
  function stripFrontMatter(md) {
    const lines = md.split("\n");
    if (lines.length && lines[0].trim() === "---") {
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === "---") {
          return lines.slice(i + 1).join("\n").replace(/^\n+/, "");
        }
      }
    }
    return md;
  }

  // Cache + substitute template in every snippet inside `container`.
  // Substitutes the body-only (front-matter stripped) tuning so the
  // paste-ready snippets stay focused on the actual rules.
  function applyTuning(container, tuning) {
    const full = String(tuning || "").trim();
    const body = stripFrontMatter(full).trim();
    container.querySelectorAll(".snippet").forEach((pre) => {
      const code = pre.querySelector("code") || pre;
      if (!pre.dataset.tmpl) {
        pre.dataset.tmpl = code.textContent;
      }
      code.textContent = pre.dataset.tmpl.replace(/\[TUNING_PLACEHOLDER\]/g, body);
    });
  }

  /**
   * Build the integration cards and inject into `container` (or
   * `#integration-deep` by default). Substitutes `tuning` into every
   * snippet so the Copy button yields a paste-ready block.
   *
   * Re-callable: subsequent calls re-substitute without rebuilding.
   *
   * @param {string} tuning - the markdown tuning text
   * @param {HTMLElement|object} [containerOrOpts] - container element, or
   *   options object: { container?: HTMLElement, only?: string[] }
   */
  window.renderIntegrations = function (tuning, containerOrOpts) {
    let container = null;
    let onlyIds = null;
    if (containerOrOpts && containerOrOpts.nodeType === 1) {
      container = containerOrOpts;
    } else if (containerOrOpts && typeof containerOrOpts === "object") {
      container = containerOrOpts.container || null;
      onlyIds = Array.isArray(containerOrOpts.only) ? containerOrOpts.only : null;
    }

    const root =
      container || document.getElementById("integration-deep") || document.querySelector("[data-integration-deep]");
    if (!root) return;

    if (!root.dataset.built) {
      const list = onlyIds
        ? onlyIds.map((id) => INTEGRATIONS.find((x) => x.id === id)).filter(Boolean)
        : INTEGRATIONS;
      const html = list.map((item, i) => makeCard(item, i)).join("\n");
      root.innerHTML = `<div class="integration-deep-grid">${html}</div>`;
      bindCopies(root);
      root.dataset.built = "1";
    }
    applyTuning(root, tuning);
  };

  window.AT_INTEGRATIONS = INTEGRATIONS;

  // ---------- Tuning loader ----------
  // Fetches the full rich tuning Markdown from /tunings/<path>. Memoizes
  // results so each path is fetched at most once per page load. Falls back
  // to null on failure — the test page should keep the short data.js
  // fallback visible if this returns null/empty.
  const tuningCache = new Map();

  /**
   * Fetch the full tuning file mirrored from the GitHub repo.
   * @param {string} path - e.g. "mbti/ISTJ.md", "enneagram/5-investigator.md"
   * @returns {Promise<string|null>} the markdown body, or null on failure
   */
  window.fetchTuning = function (path) {
    if (!path) return Promise.resolve(null);
    const clean = String(path).replace(/^\/+/, "");
    if (tuningCache.has(clean)) return tuningCache.get(clean);
    const p = fetch("/tunings/" + clean, { cache: "force-cache" })
      .then((r) => (r.ok ? r.text() : null))
      .then((text) => {
        // Cloudflare may serve a 404 HTML page rather than a 4xx in odd cases;
        // guard against that by checking for a Markdown heading.
        if (typeof text !== "string") return null;
        if (text.length < 50) return null;
        if (text.trim().startsWith("<")) return null;
        return text;
      })
      .catch(() => null);
    tuningCache.set(clean, p);
    return p;
  };
})();
