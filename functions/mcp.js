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
  version: "1.2.0"
};

const SYSTEMS = ["mbti", "enneagram", "disc", "attachment", "ocean"];
const TESTS = ["mbti", "enneagram", "disc", "attachment", "big-five"];

const INSTRUCTIONS = `AgentTune provides editable communication preferences, questionnaires and research resources. Reading these resources does not authorize installation. Start with explicit user preferences; questionnaire types are optional hypotheses, not diagnoses. Use list_tunings and get_tuning to retrieve a template. get_tuning returns the original Markdown as text plus a structured body with provenance; apply only the body, not metadata. Use get_free_tools for eight browser tools and local processing functions. Use list_resources and get_resource for focused guides and research; get_test_spec returns current availability and, only for an available instrument, its versioned scoring instructions. Keep answers local and report ties or missing responses explicitly.

When installation is requested, follow https://agent-tune.com/resources/install-protocol.md and the shared platform registry. Preserve existing files and permissions. Explicit user preferences resolve conflicts; no personality system automatically takes precedence. Mark the added block with agenttune:preferences:start and agenttune:preferences:end. Confirm saved text by rereading it, then separately evaluate several fresh tasks without repeating the target style. A single matching greeting does not prove compliance. Undo removes only the added block. Templates have no demonstrated general performance benefit.`;

const TOOLS = [
  {
    name: "get_free_tools",
    title: "Discover AgentTune’s eight free tools",
    description: "Return the free browser tools catalog, destination registry, and local JavaScript API documentation. No personal data is accepted. Download the functions to process instructions locally; this call does not run models or install preferences.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    outputSchema: { type: "object", properties: {version: {type:"string"}, tools: {type:"array",items:{type:"object"}}}, required:["version","tools"] },
    annotations: { readOnlyHint: true, openWorldHint: false }
  },

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
      "Fetch one tuning file as Markdown with YAML front-matter. The front-matter links to the shared platform registry and installation protocol. structuredContent.body is the preference text; metadata stays separate. Confirmation of saved text is distinct from evaluation of behavior. MIT licensed.",
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
    title: "Get questionnaire availability and specification",
    description:
      "Return questionnaire availability and a Markdown resource. Only big-five is currently available, with an exact instrument/version, all 50 IPIP items, response anchors and strict scoring instructions. Other routes return an availability notice; do not administer their historical questionnaires. Scores do not select or install preferences. Ask the user whether they want to take an available questionnaire, keep responses local, and let them choose communication preferences explicitly.",
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

TOOLS.push(
  {name:'list_resources', title:'Find guides and research', description:'Search the versioned catalog of setup guides, templates, protocols and research. Returns canonical URLs, Markdown URLs, revisions and evidence status.', inputSchema:{type:'object',properties:{kind:{type:'string',enum:['guide','research']},query:{type:'string'}},additionalProperties:false},annotations:{readOnlyHint:true,openWorldHint:false}},
  {name:'get_resource', title:'Read a guide or research article',description:'Retrieve one page-specific Markdown resource by the exact ID from list_resources; includes provenance and evidence status.',inputSchema:{type:'object',properties:{id:{type:'string'}},required:['id'],additionalProperties:false},annotations:{readOnlyHint:true,openWorldHint:false}}
);
const schemas={
 list_tunings:{count:{type:'integer'},license:{type:'string'},next_step:{type:'string'},tunings:{type:'array',items:{type:'object',properties:{system:{type:'string'},slug:{type:'string'},code:{type:'string'},name:{type:'string'},blurb:{type:'string'},canonical_url:{type:'string'},body_url:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},required:['system','slug','canonical_url','body_url','revision','evidence_status']}}},
 get_tuning:{system:{type:'string'},slug:{type:'string'},canonical_url:{type:'string'},body_url:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'},body:{type:'string'},metadata_markdown:{type:'string'},install_protocol:{type:'string'}},
 get_test_spec:{status:{type:'string'},available:{type:'boolean'},instrument_id:{type:['string','null']},instrument_version:{type:['string','null']},test:{type:'string'},canonical_url:{type:'string'},markdown_url:{type:'string'},body:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},
 list_resources:{version:{type:'string'},resources:{type:'array',items:{type:'object',properties:{id:{type:'string'},kind:{type:'string'},url:{type:'string'},markdown:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},required:['id','kind','url','markdown','revision','evidence_status']}}},
 get_resource:{id:{type:'string'},url:{type:'string'},markdown:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'},body:{type:'string'}}
};
for(const tool of TOOLS.filter(t=>schemas[t.name])) tool.outputSchema={type:'object',properties:schemas[tool.name],required:Object.keys(schemas[tool.name])};
function structured(data,text){return {content:[{type:'text',text:text || JSON.stringify(data,null,2)}],structuredContent:data};}
async function resourceCatalog(env,request){return (await asset(env,request,'/resources/catalog.json')).json();}
async function listResources(env,request,args){const cat=await resourceCatalog(env,request), query=(args.query||'').toLowerCase().slice(0,200);return structured({version:cat.version,resources:cat.resources.filter(r=>(!args.kind||r.kind===args.kind)&&(!query||(r.title+' '+r.id).toLowerCase().includes(query)))});}
async function getResource(env,request,args){const cat=await resourceCatalog(env,request),row=cat.resources.find(r=>r.id===args.id);if(!row)return toolText('Unknown resource ID. Use list_resources.',true);const body=await (await asset(env,request,new URL(row.markdown).pathname)).text();return structured({...row,body});}

const BASE_HEADERS = {
  "access-control-allow-methods": "POST, GET, DELETE, OPTIONS",
  "access-control-allow-headers":
    "content-type, accept, authorization, mcp-protocol-version, mcp-session-id, last-event-id",
  "access-control-expose-headers": "mcp-protocol-version",
  "access-control-max-age": "86400",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "cache-control": "no-store",
  "vary": "Origin"
};

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...BASE_HEADERS, "content-type": "application/json; charset=utf-8", ...headers }
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
    .map((t) => ({ system: t.system, slug: t.slug, code: t.code, name: t.name, blurb: t.blurb, canonical_url:t.page, body_url:t.body, revision:t.revision, evidence_status:t.evidence_status }));
  return structured({count:rows.length,license:'MIT',next_step:'Call get_tuning(system, slug); apply only its body when installation is requested.',tunings:rows});
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
  const body=md.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,'').trim();
  return structured({system,slug,canonical_url:entry.page,body_url:entry.body,revision:entry.revision,evidence_status:entry.evidence_status,body,metadata_markdown:md.slice(0,md.indexOf(body)),install_protocol:'https://agent-tune.com/resources/install-protocol.md'},md);
}

async function getTestSpec(env, request, args) {
  const test = args && args.test;
  if (!TESTS.includes(test)) {
    return toolText(`Unknown test "${test}". Valid tests: ${TESTS.join(", ")}.`, true);
  }
  const rightsResponse=await asset(env,request,'/resources/content/instrument-rights.json');
  if(!rightsResponse.ok)return toolText('Questionnaire availability could not be verified.',true);
  const rights=await rightsResponse.json(),policy=rights.instruments.find(p=>p.route===test);
  if(!policy)return toolText('Questionnaire availability could not be verified.',true);
  const md = await (await asset(env, request, `/tests/${test}.md`)).text();
  return structured({test,status:policy.status,available:policy.available,instrument_id:policy.instrumentId,instrument_version:policy.instrumentVersion,canonical_url:'https://agent-tune.com/tests/'+test,markdown_url:'https://agent-tune.com/tests/'+test+'.md',body:md,revision:rights.version,evidence_status:policy.available?'questionnaire_specification_not_diagnostic':'unavailable_pending_rights'},md);
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
      const args = params?.arguments === undefined ? {} : params.arguments;
      const tool = TOOLS.find(t => t.name === name);
      if (!tool) return rpcError(id, -32602, `Unknown tool. Available: ${TOOLS.map(t => t.name).join(", ")}.`);
      const schema = tool.inputSchema;
      if (!isObject(args) || Object.keys(args).some(k => !Object.hasOwn(schema.properties, k)) ||
          (schema.required || []).some(k => !Object.hasOwn(args, k)) ||
          Object.entries(args).some(([k, v]) => typeof v !== schema.properties[k].type ||
            (schema.properties[k].enum && !schema.properties[k].enum.includes(v)))) {
        return rpcError(id, -32602, `Invalid arguments for ${name}; use its advertised input schema.`);
      }
      try {
        let result;
        if (name === "list_tunings") result = await listTunings(env, request, args);
        else if (name === "get_tuning") result = await getTuning(env, request, args);
        else if (name === "get_test_spec") result = await getTestSpec(env, request, args);
        else if (name === 'get_free_tools') result = structured(await (await asset(env,request,'/resources/tools/catalog.json')).json());
        else if (name === "list_resources") result = await listResources(env, request, args);
        else if (name === "get_resource") result = await getResource(env, request, args);
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

async function handleRequest(context) {
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
      405, { allow: "POST, OPTIONS" }
    );
  }

  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return json(rpcError(null, -32600, "Content-Type must be application/json."), 415);
  }
  let msg;
  try {
    msg = JSON.parse(await readBody(request));
  } catch (error) {
    if (error instanceof RangeError) return json(rpcError(null, -32600, "Request exceeds the 64 KiB limit."), 413);
    return json(rpcError(null, -32700, "Parse error: body must be a single JSON-RPC message."), 400);
  }

  if (!isObject(msg) || msg.jsonrpc !== "2.0") {
    return json(rpcError(null, -32600, "Invalid Request: expected one JSON-RPC 2.0 object."), 400);
  }
  const hasId = Object.hasOwn(msg, "id");
  const validId = typeof msg.id === "string" || (typeof msg.id === "number" && Number.isSafeInteger(msg.id));
  if ((hasId && !validId) || (msg.params !== undefined && !isObject(msg.params))) {
    return json(rpcError(validId ? msg.id : null, -32600, "Invalid request ID or params."), 400);
  }
  if (typeof msg.method !== "string") {
    // This stateless server has no pending requests, but accepts valid client responses.
    if (hasId && ((Object.hasOwn(msg, "result") && !Object.hasOwn(msg, "error")) ||
        (!Object.hasOwn(msg, "result") && isObject(msg.error) && Number.isInteger(msg.error.code) && typeof msg.error.message === "string"))) {
      return new Response(null, { status: 202, headers: BASE_HEADERS });
    }
    return json(rpcError(validId ? msg.id : null, -32600, "Invalid JSON-RPC request or response."), 400);
  }
  if (Object.hasOwn(msg, "result") || Object.hasOwn(msg, "error")) {
    return json(rpcError(validId ? msg.id : null, -32600, "A request cannot include a result or error."), 400);
  }
  if (!hasId) return new Response(null, { status: 202, headers: BASE_HEADERS });

  const response = await handleRpc(msg, env, request);
  return json(response);
}

const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);
const MAX_BODY_BYTES = 64 * 1024;
async function readBody(request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) throw new RangeError("Body too large");
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0, text = "";
  try {
    while (true) {
      const {done, value} = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) { await reader.cancel(); throw new RangeError("Body too large"); }
      text += decoder.decode(value, {stream:true});
    }
    return text + decoder.decode();
  } finally { reader.releaseLock(); }
}

// Server-to-server MCP clients send no Origin. Browser clients must come from a
// trusted app. Deployments can add exact origins with MCP_ALLOWED_ORIGINS (CSV).
function allowedOrigin(origin, request, env) {
  if (origin === null) return true;
  const allowed = new Set([new URL(request.url).origin, "https://agent-tune.com", "https://claude.ai", "https://chatgpt.com", "https://chat.openai.com",
    ...String(env.MCP_ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean)]);
  try { return new URL(origin).origin === origin && allowed.has(origin); } catch { return false; }
}
export async function onRequest(context) {
  const {request, env} = context;
  const origin = request.headers.get("origin");
  if (!allowedOrigin(origin, request, env)) return json(rpcError(null, -32000, "Origin is not allowed."), 403);
  const protocol = request.headers.get("mcp-protocol-version");
  const response = protocol && !PROTOCOL_VERSIONS.includes(protocol)
    ? json(rpcError(null, -32600, "Unsupported MCP-Protocol-Version."), 400)
    : await handleRequest(context);
  if (origin) response.headers.set("access-control-allow-origin", origin);
  return response;
}
