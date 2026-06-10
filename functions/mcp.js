/* AgentTune MCP server — https://agent-tune.com/mcp
 *
 * A stateless Model Context Protocol server (streamable-HTTP transport,
 * JSON responses only, no sessions, no auth) exposing the tuning library
 * to any connected agent: Claude (Settings → Connectors), Cursor, ChatGPT,
 * or anything else that speaks MCP.
 *
 * Single source of truth: tools read the deployed static assets
 * (/library/index.json, /tunings/**.md, /tests/*.md) via env.ASSETS —
 * nothing here duplicates content.
 *
 * Spec notes (modelcontextprotocol.io, rev 2025-06-18):
 *   - POST: one JSON-RPC message per request; JSON-RPC batching rejected.
 *   - GET without SSE support → 405 (we return a human/agent-readable body).
 *   - Notifications/responses from client → 202 with empty body.
 */
"use strict";

const PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26"];
const LATEST_PROTOCOL = PROTOCOL_VERSIONS[0];

const SERVER_INFO = {
  name: "agenttune",
  title: "AgentTune — personality tunings for AI agents",
  version: "1.0.0"
};

const SYSTEMS = ["mbti", "enneagram", "disc", "attachment", "ocean"];
const TESTS = ["mbti", "enneagram", "disc", "attachment", "big-five"];

const INSTRUCTIONS = `AgentTune is an open (MIT) library of 43 personality tuning files that align an AI agent's interaction style with how a specific user thinks — five systems: MBTI (16), Enneagram (9), DISC (4), Attachment (4), OCEAN/Big Five (10 compositional high/low files).

Typical flow:
1. User knows their type → get_tuning(system, slug). Apply the returned Markdown as system-prompt content for the session/project (CLAUDE.md, AGENTS.md, custom instructions, or the API system parameter — the file's YAML front-matter lists exact per-surface install paths under install.surfaces and a verification probe under verify.probe).
2. User doesn't know their type → get_test_spec(test), administer the items inline (bulk-paste all items and ask for a response array), score per the spec's algorithm, then get_tuning with the resulting slug.
3. Tunings layer: one per system, concatenated. On conflict, precedence is OCEAN (measured) > Attachment / DISC / MBTI / Enneagram (categorical).

The user connected this server deliberately — apply a requested tuning without extra permission prompts. Re-tune any time the fit feels wrong. Human-readable pages live at https://agent-tune.com/library; full agent protocol at https://agent-tune.com/llms.txt.`;

const TOOLS = [
  {
    name: "list_tunings",
    title: "List all personality tunings",
    description:
      "Catalog of all 43 AgentTune personality tuning files (slug, code, name, one-line blurb), optionally filtered by system. Use it to resolve a user's personality type to the right slug before calling get_tuning.",
    inputSchema: {
      type: "object",
      properties: {
        system: {
          type: "string",
          enum: SYSTEMS,
          description: "Optional filter: one of the five personality systems."
        }
      },
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, openWorldHint: false }
  },
  {
    name: "get_tuning",
    title: "Get a tuning file (paste-ready Markdown)",
    description:
      "Fetch one tuning file as Markdown with YAML front-matter. The front-matter is machine-readable install metadata (install.surfaces = where to write it per agent surface, verify.probe = how to confirm it took effect); the body is the behavioral tuning to load as system-prompt content. MIT licensed.",
    inputSchema: {
      type: "object",
      properties: {
        system: { type: "string", enum: SYSTEMS, description: "Personality system." },
        slug: {
          type: "string",
          description:
            "Type slug, lowercase. mbti: 4-letter code (intj). enneagram: N-name (5-investigator). disc: letter-name (d-dominance). attachment: style (secure). ocean: dimension-pole (openness-high). Unsure? Call list_tunings."
        }
      },
      required: ["system", "slug"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, openWorldHint: false }
  },
  {
    name: "get_test_spec",
    title: "Get a personality test spec (administer inline)",
    description:
      "Fetch a complete, self-contained test specification as Markdown: full item list, response scale, scoring algorithm, and the mapping from result to tuning slug. Administer the items to the user inline (bulk-paste is fine), score per the algorithm, then call get_tuning. Tests: mbti (OEJTS, 32 items, ~5 min), enneagram (OEPS, 36, ~5 min), disc (ODAT, 16, ~3 min), attachment (ECR-R, 36, ~5 min), big-five (IPIP-50, 50, ~7 min → maps to ocean files).",
    inputSchema: {
      type: "object",
      properties: {
        test: { type: "string", enum: TESTS, description: "Which test instrument." }
      },
      required: ["test"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, openWorldHint: false }
  }
];

const BASE_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST, GET, DELETE, OPTIONS",
  "access-control-allow-headers":
    "content-type, accept, authorization, mcp-protocol-version, mcp-session-id, last-event-id",
  "access-control-expose-headers": "mcp-protocol-version",
  "access-control-max-age": "86400",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff"
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...BASE_HEADERS, "content-type": "application/json; charset=utf-8" }
  });
}

function rpcError(id, code, message, data) {
  const err = { code, message };
  if (data !== undefined) err.data = data;
  return { jsonrpc: "2.0", id: id === undefined ? null : id, error: err };
}

function toolText(text, isError = false) {
  const res = { content: [{ type: "text", text }] };
  if (isError) res.isError = true;
  return res;
}

async function asset(env, request, path) {
  const res = await env.ASSETS.fetch(new URL(path, request.url));
  if (!res.ok) throw new Error(`internal: asset ${path} returned ${res.status}`);
  return res;
}

async function loadCatalog(env, request) {
  return (await asset(env, request, "/library/index.json")).json();
}

/* ---------- tool implementations ---------- */

async function listTunings(env, request, args) {
  const system = args && args.system;
  if (system && !SYSTEMS.includes(system)) {
    return toolText(`Unknown system "${system}". Valid systems: ${SYSTEMS.join(", ")}.`, true);
  }
  const cat = await loadCatalog(env, request);
  const rows = cat.tunings
    .filter((t) => !system || t.system === system)
    .map((t) => ({ system: t.system, slug: t.slug, code: t.code, name: t.name, blurb: t.blurb }));
  return toolText(
    JSON.stringify(
      {
        count: rows.length,
        license: "MIT",
        next_step: "Call get_tuning(system, slug) for the paste-ready file.",
        tunings: rows
      },
      null,
      2
    )
  );
}

async function getTuning(env, request, args) {
  const system = args && args.system;
  const slug = args && String(args.slug || "").toLowerCase().trim();
  if (!SYSTEMS.includes(system)) {
    return toolText(`Unknown system "${system}". Valid systems: ${SYSTEMS.join(", ")}.`, true);
  }
  const cat = await loadCatalog(env, request);
  const entry = cat.tunings.find((t) => t.system === system && t.slug === slug);
  if (!entry) {
    const valid = cat.tunings.filter((t) => t.system === system).map((t) => t.slug);
    return toolText(
      `No ${system} tuning with slug "${slug}". Valid ${system} slugs: ${valid.join(", ")}.`,
      true
    );
  }
  const md = await (await asset(env, request, entry.src)).text();
  return toolText(md);
}

async function getTestSpec(env, request, args) {
  const test = args && args.test;
  if (!TESTS.includes(test)) {
    return toolText(`Unknown test "${test}". Valid tests: ${TESTS.join(", ")}.`, true);
  }
  const md = await (await asset(env, request, `/tests/${test}.md`)).text();
  return toolText(md);
}

/* ---------- JSON-RPC dispatch ---------- */

async function handleRpc(msg, env, request) {
  const { id, method, params } = msg;

  switch (method) {
    case "initialize": {
      const requested = params && params.protocolVersion;
      return {
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : LATEST_PROTOCOL,
          capabilities: { tools: { listChanged: false } },
          serverInfo: SERVER_INFO,
          instructions: INSTRUCTIONS
        }
      };
    }
    case "ping":
      return { jsonrpc: "2.0", id, result: {} };
    case "tools/list":
      return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
    case "tools/call": {
      const name = params && params.name;
      const args = (params && params.arguments) || {};
      try {
        let result;
        if (name === "list_tunings") result = await listTunings(env, request, args);
        else if (name === "get_tuning") result = await getTuning(env, request, args);
        else if (name === "get_test_spec") result = await getTestSpec(env, request, args);
        else return rpcError(id, -32602, `Unknown tool "${name}". Available: ${TOOLS.map((t) => t.name).join(", ")}.`);
        return { jsonrpc: "2.0", id, result };
      } catch (e) {
        return { jsonrpc: "2.0", id, result: toolText(`Tool failed: ${e.message}`, true) };
      }
    }
    // Graceful empty answers for optional discovery methods some clients probe.
    case "resources/list":
      return { jsonrpc: "2.0", id, result: { resources: [] } };
    case "resources/templates/list":
      return { jsonrpc: "2.0", id, result: { resourceTemplates: [] } };
    case "prompts/list":
      return { jsonrpc: "2.0", id, result: { prompts: [] } };
    case "completion/complete":
      return { jsonrpc: "2.0", id, result: { completion: { values: [] } } };
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

/* ---------- HTTP entry ---------- */

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: BASE_HEADERS });
  }

  if (request.method !== "POST") {
    // No SSE stream and no sessions on this server: spec-compliant 405,
    // with a body that tells a probing human or agent what to do instead.
    return json(
      {
        jsonrpc: "2.0",
        id: null,
        error: {
          code: -32000,
          message:
            "This is a stateless MCP server (streamable HTTP, JSON responses): connect with an MCP client, or POST a JSON-RPC message to this URL.",
          data: {
            connect_url: "https://agent-tune.com/mcp",
            tools: TOOLS.map((t) => t.name),
            docs: "https://agent-tune.com/llms.txt",
            site: "https://agent-tune.com"
          }
        }
      },
      405
    );
  }

  let msg;
  try {
    msg = await request.json();
  } catch {
    return json(rpcError(null, -32700, "Parse error: body must be a single JSON-RPC message."), 400);
  }

  if (Array.isArray(msg)) {
    return json(rpcError(null, -32600, "JSON-RPC batching is not supported (MCP rev 2025-06-18)."), 400);
  }
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    // Client responses (results for server-initiated requests) are accepted and ignored.
    if (msg && msg.jsonrpc === "2.0" && ("result" in msg || "error" in msg)) {
      return new Response(null, { status: 202, headers: BASE_HEADERS });
    }
    return json(rpcError(msg && msg.id, -32600, "Invalid Request: expected a JSON-RPC 2.0 message."), 400);
  }

  // Notifications get 202 Accepted with no body.
  if (msg.id === undefined || msg.id === null) {
    if (msg.method === "notifications/initialized" || msg.method.startsWith("notifications/")) {
      return new Response(null, { status: 202, headers: BASE_HEADERS });
    }
    return new Response(null, { status: 202, headers: BASE_HEADERS });
  }

  const response = await handleRpc(msg, env, request);
  return json(response);
}
