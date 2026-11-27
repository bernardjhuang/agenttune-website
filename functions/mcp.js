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

import core from "../resources/tools/core.js";

const PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"];
const LATEST_PROTOCOL = PROTOCOL_VERSIONS[0];

const SERVER_INFO = {
  name: "agenttune",
  title: "AgentTune — portable communication preferences & empirical AI psychology for agents",
  version: "1.5.0"
};

const SYSTEMS = ["mbti", "enneagram", "disc", "attachment", "ocean"];
const TESTS = ["mbti", "enneagram", "disc", "attachment", "big-five"];
const DESTINATION_IDS = core.destinations.map((d) => d.id);
const GOALS = [
  "directness",
  "anti-sycophancy",
  "conciseness",
  "reasoning",
  "precedence",
  "warmth-without-flattery",
  "multi-agent",
  "coding"
];

const INSTRUCTIONS = `AgentTune provides editable communication preferences (43 MIT templates), 54 setup guides, 5 local personality questionnaires, 25 model-family personality profiles across 87 primary checkpoints (93 tested incl. 6 sparse; /models/{slug}), and 36 empirical AI psychology studies across Waves 1–4 and the Personality Atlas (2023–2026; single-fetch IF/THEN synthesis at https://agent-tune.com/research/data/november-2026-agent-research-briefs.json and 25-family profile index at https://agent-tune.com/research/data/model-profiles/index.json). Reading these resources does not authorize installation. Start with explicit user preferences; questionnaire types are optional hypotheses, not diagnoses. Use list_tunings and get_tuning to retrieve a template. get_tuning returns the original Markdown as text plus a structured body with provenance; apply only the body, not metadata. Use check_instructions, convert_instructions, and build_preferences to lint, wrap with bounded markers, or generate communication instructions directly; use get_free_tools for the local browser utilities. Use get_model_profile, compare_models, and recommend_rules to query the 25-family empirical Atlas and IF/THEN research rules. Use list_resources and get_resource for all 54 setup guides, all 36 empirical research studies (including the 12 Personality Atlas studies), all 25 model-family personality profiles, and directory hubs (including /models/); get_test_spec returns current availability and, only for an available instrument, its versioned scoring instructions. Keep answers local and report ties or missing responses explicitly.

When installation is requested, follow https://agent-tune.com/resources/install-protocol.md and the shared platform registry. Preserve existing files and permissions. Explicit user preferences resolve conflicts; no personality system automatically takes precedence. Mark the added block with agenttune:preferences:start and agenttune:preferences:end. Confirm saved text by rereading it, then separately evaluate several fresh tasks without repeating the target style. A single matching greeting does not prove compliance. Undo removes only the added block. Templates have no demonstrated general performance benefit.`;

const TOOLS = [
  {
    name: "get_free_tools",
    title: "Discover AgentTune’s eight local text-processing tools",
    description: "Return the catalog of 8 local window.AgentTuneTools browser instruments (paired with the 2 web generators at /tools/ — 10 free tools total), destination registry, and local JavaScript API documentation. No personal data is accepted. Download the functions to process instructions locally; this call does not run models or install preferences.",
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
      "Fetch a complete questionnaire specification for mbti (32 items), enneagram (36), disc (16), attachment (36) or big-five (50). All five are available, with exact instrument/version IDs, response anchors and strict scoring instructions. The first four preserve the legacy AgentTune adaptations; instrument-specific source terms apply. Administer only when requested, keep responses local, preserve ties, and let users review any suggested communication preferences before installation.",
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
  {name:'list_resources', title:'Find guides, research studies, model profiles, and hubs', description:'Search the versioned catalog of all 54 platform setup guides, all 36 empirical AI psychology studies (Waves 1–4 + 12 Personality Atlas pages, 2023–2026), all 25 model-family personality profiles (87 primary checkpoints / 93 tested across 6 surveys), and directory hubs (/models/, /research, /guides/, /library/, /tests/, /tools/). Returns canonical URLs, clean Markdown URLs, revisions and evidence status.', inputSchema:{type:'object',properties:{kind:{type:'string',enum:['guide','research','model','hub']},query:{type:'string'}},additionalProperties:false},annotations:{readOnlyHint:true,openWorldHint:false}},
  {name:'get_resource', title:'Read a guide, research monograph, model profile, or hub',description:'Retrieve one page-specific Markdown resource (guide, empirical study including Personality Atlas surveys and Wave 1–4 YAML Agent Decision Contracts, model-family profile, or hub index) by the exact ID from list_resources; includes provenance and evidence status.',inputSchema:{type:'object',properties:{id:{type:'string'}},required:['id'],additionalProperties:false},annotations:{readOnlyHint:true,openWorldHint:false}},
  {
    name:'check_instructions',
    title:'Lint custom instructions and system prompts',
    description:'Check instruction text for duplicate lines, absolute rules needing exceptions, safety-override wording, uncertainty suppression, long lines, and brevity vs. exhaustive conflicts using core.check(). Stateless; nothing is stored.',
    inputSchema:{type:'object',properties:{text:{type:'string',maxLength:20000,description:'Custom instructions, CLAUDE.md, AGENTS.md, or Soul.md text to check (up to 20,000 chars).'}},required:['text'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  },
  {
    name:'convert_instructions',
    title:'Format or merge instructions for a destination platform',
    description:'Format or merge preference rules into plain chat, ChatGPT, Claude, Project, Meta Muse Soul.md, Claude Code CLAUDE.md, Codex AGENTS.md, or API JSON payload using non-destructive bounded agenttune:preferences markers.',
    inputSchema:{type:'object',properties:{text:{type:'string',maxLength:20000,description:'Instruction rules to format or merge.'},destination:{type:'string',enum:DESTINATION_IDS,description:'Target app or config format.'},existing:{type:'string',maxLength:100000,description:'Optional existing file contents to preserve when merging (not valid for destination "api").'}},required:['text','destination'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  },
  {
    name:'build_preferences',
    title:'Build structured communication preferences Markdown',
    description:'Compile explicit user preferences (length, tone, format, pushback style, clarifying questions, optional context) into clean Markdown and optionally format/merge for a target destination.',
    inputSchema:{type:'object',properties:{length:{type:'string',enum:Object.keys(core.choices.length)},tone:{type:'string',enum:Object.keys(core.choices.tone)},format:{type:'string',enum:Object.keys(core.choices.format)},challenge:{type:'string',enum:Object.keys(core.choices.challenge)},questions:{type:'string',enum:Object.keys(core.choices.questions)},context:{type:'string',maxLength:2000,description:'Optional domain, stack, or role context.'},destination:{type:'string',enum:DESTINATION_IDS,description:'Optional destination format (defaults to plain Markdown).'},existing:{type:'string',maxLength:100000,description:'Optional existing file contents for bounded merge.'}},required:['length','tone','format','challenge','questions'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  },
  {
    name:'get_model_profile',
    title:'Get empirical personality profile for a model family',
    description:'Retrieve empirical fresh-chat survey scores (Big Five 10–50 sums, IPIP-HEXACO 1–5 means, MBTI, Enneagram, DISC, Attachment), Shannon entropy consistency, and Track B behavioral checks for any of the 25 tested AI model families.',
    inputSchema:{type:'object',properties:{model:{type:'string',maxLength:100,description:'Model family slug or name (e.g., claude-opus, gpt-sol, gemini-neon, deepseek-v4, llama-4-maverick).'},checkpoint:{type:'string',maxLength:120,description:'Optional specific checkpoint ID within the family (defaults to latest active checkpoint).'}},required:['model'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  },
  {
    name:'compare_models',
    title:'Compare 2–6 AI model families side by side',
    description:'Compare Big Five, IPIP-HEXACO Honesty-Humility, MBTI modal & tie rates, Enneagram, DISC, Attachment, answer entropy, and Track B slop rates across 2 to 6 model families.',
    inputSchema:{type:'object',properties:{models:{type:'array',items:{type:'string',maxLength:100},minItems:2,maxItems:6,description:'List of 2 to 6 model family slugs or names.'}},required:['models'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  },
  {
    name:'recommend_rules',
    title:'Recommend empirically backed prompt rules for a goal',
    description:'Return tested behavioral instruction rules, IF/THEN design rules, and backing empirical study citations from AgentTune\'s Wave 1–4 research briefs for a specific communication or workflow goal.',
    inputSchema:{type:'object',properties:{goal:{type:'string',enum:GOALS,description:'Primary behavior or workflow goal.'},destination:{type:'string',enum:DESTINATION_IDS,description:'Optional destination format (defaults to plain Markdown).'}},required:['goal'],additionalProperties:false},
    annotations:{readOnlyHint:true,openWorldHint:false}
  }
);
const schemas={
 list_tunings:{count:{type:'integer'},license:{type:'string'},next_step:{type:'string'},tunings:{type:'array',items:{type:'object',properties:{system:{type:'string'},slug:{type:'string'},code:{type:'string'},name:{type:'string'},blurb:{type:'string'},canonical_url:{type:'string'},body_url:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},required:['system','slug','canonical_url','body_url','revision','evidence_status']}}},
 get_tuning:{system:{type:'string'},slug:{type:'string'},canonical_url:{type:'string'},body_url:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'},body:{type:'string'},metadata_markdown:{type:'string'},install_protocol:{type:'string'}},
 get_test_spec:{status:{type:'string'},available:{type:'boolean'},instrument_id:{type:['string','null']},instrument_version:{type:['string','null']},test:{type:'string'},canonical_url:{type:'string'},markdown_url:{type:'string'},body:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},
 list_resources:{version:{type:'string'},resources:{type:'array',items:{type:'object',properties:{id:{type:'string'},kind:{type:'string'},url:{type:'string'},markdown:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'}},required:['id','kind','url','markdown','revision','evidence_status']}}},
 get_resource:{id:{type:'string'},url:{type:'string'},markdown:{type:'string'},revision:{type:'string'},evidence_status:{type:'string'},body:{type:'string'}},
 check_instructions:{version:{type:'string'},characters:{type:'integer'},words:{type:'integer'},bullets:{type:'integer'},findings:{type:'array',items:{type:'object'}},limitation:{type:'string'}},
 convert_instructions:{destination:{type:'string'},filename:{type:'string'},help:{type:'string'},output:{type:'string'}},
 build_preferences:{markdown:{type:'string'},destination:{type:'string'},filename:{type:'string'},output:{type:'string'}},
 get_model_profile:{family_slug:{type:'string'},name:{type:'string'},provider:{type:'string'},tier:{type:'string'},checkpoint_id:{type:'string'},url:{type:'string'},markdown_url:{type:'string'},checkpoints_available:{type:'array',items:{type:'string'}},mbti:{type:'object'},big_five:{type:'object'},ipip_hexaco:{type:'object'},disc:{type:'object'},enneagram:{type:'object'},attachment:{type:'object'},entropy_b5_hmm:{type:['number','null']},crystallinity_tier:{type:'string'},neutral_rate:{type:['number','null']},track_b:{type:['object','null']}},
 compare_models:{count:{type:'integer'},directory_url:{type:'string'},comparisons:{type:'array',items:{type:'object',properties:{family_slug:{type:'string'},name:{type:'string'},provider:{type:'string'},tier:{type:'string'},checkpoint_id:{type:'string'},url:{type:'string'},mbti_modal:{type:'string'},mbti_tie_rate:{type:'number'},enneagram_modal:{type:'string'},disc_modal:{type:'string'},attachment:{type:'string'},crystallinity_tier:{type:'string'}},required:['family_slug','name','checkpoint_id','url']}}},
 recommend_rules:{goal:{type:'string'},destination:{type:'string'},filename:{type:'string'},rules:{type:'array',items:{type:'string'}},output:{type:'string'},if_then_rules:{type:'array',items:{type:'string'}},studies:{type:'array',items:{type:'object',properties:{study_id:{type:'string'},title:{type:'string'},url:{type:'string'},markdown_url:{type:'string'}},required:['study_id','title','url']}}}
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

const r2 = (n) => (typeof n === "number" && Number.isFinite(n) ? Math.round(n * 100) / 100 : null);

function checkInstructions(args) {
  try {
    const res = core.check(args.text);
    const m = core.metrics(args.text);
    const data = {
      version: res.version,
      characters: res.characters,
      words: res.words,
      bullets: m.bullets,
      findings: res.findings,
      limitation: res.limitation
    };
    const summary = res.findings.length
      ? `${res.findings.length} finding(s) (${res.characters} chars, ${res.words} words):\n` +
        res.findings.map((f) => `- [line ${f.line}] ${f.code}: ${f.message}`).join("\n")
      : `No rule-based issues found (${res.characters} chars, ${res.words} words, ${m.bullets} bullet lines).\n${res.limitation}`;
    return structured(data, summary);
  } catch (e) {
    return toolText(e.message, true);
  }
}

function convertInstructions(args) {
  const dest = core.destinations.find((d) => d.id === args.destination);
  if (!dest) return toolText(`Unsupported destination "${args.destination}". Valid: ${DESTINATION_IDS.join(", ")}.`, true);
  try {
    const output = core.convert(args.text, args.destination, args.existing || "");
    return structured({ destination: dest.id, filename: dest.filename, help: dest.help, output }, output);
  } catch (e) {
    return toolText(e.message, true);
  }
}

function buildPreferences(args) {
  try {
    const markdown = core.preferences(args);
    const destId = args.destination || "plain";
    const dest = core.destinations.find((d) => d.id === destId) || core.destinations[0];
    const output = (args.destination || args.existing) ? core.convert(markdown, dest.id, args.existing || "") : markdown;
    return structured({ markdown, destination: dest.id, filename: dest.filename, output }, output);
  } catch (e) {
    return toolText(e.message, true);
  }
}

function resolveModelFamily(families, query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return { error: "Model query is empty." };
  const exactSlug = families.find((f) => f.family_slug.toLowerCase() === q);
  if (exactSlug) return { family: exactSlug };
  const exactName = families.find((f) => f.name.toLowerCase() === q);
  if (exactName) return { family: exactName };
  const partial = families.filter(
    (f) => f.family_slug.toLowerCase().includes(q) || f.name.toLowerCase().includes(q)
  );
  if (partial.length === 1) return { family: partial[0] };
  if (partial.length > 1) {
    return {
      error: `Multiple models matched "${query}": ${partial.map((f) => f.family_slug).join(", ")}. Pass an exact family_slug.`
    };
  }
  return {
    error: `Unknown model "${query}". Valid family slugs: ${families.map((f) => f.family_slug).join(", ")}.`
  };
}

function summarizeBigFive(b5) {
  return {
    scale: "10-50 raw sum",
    O: r2(b5?.O?.mean),
    C: r2(b5?.C?.mean),
    E: r2(b5?.E?.mean),
    A: r2(b5?.A?.mean),
    N: r2(b5?.N?.mean)
  };
}

function summarizeHexaco(hx) {
  return {
    scale: "1-5 item mean",
    H: r2(hx?.H?.mean),
    E: r2(hx?.E?.mean),
    X: r2(hx?.X?.mean),
    A: r2(hx?.A?.mean),
    C: r2(hx?.C?.mean),
    O: r2(hx?.O?.mean)
  };
}

async function getModelProfile(env, request, args) {
  const idx = await (await asset(env, request, "/research/data/model-profiles/index.json")).json();
  const families = idx.families || [];
  const match = resolveModelFamily(families, args.model);
  if (match.error) return toolText(match.error, true);
  const fam = match.family;
  const cps = fam.checkpoints || [];
  let cp;
  if (args.checkpoint) {
    const cq = args.checkpoint.trim().toLowerCase();
    cp = cps.find((c) => c.checkpoint_id.toLowerCase() === cq || c.checkpoint_id.toLowerCase().endsWith("/" + cq));
    if (!cp) {
      return toolText(
        `Unknown checkpoint "${args.checkpoint}" for ${fam.family_slug}. Available: ${cps.map((c) => c.checkpoint_id).join(", ")}.`,
        true
      );
    }
  } else {
    cp = cps.find((c) => c.checkpoint_id === fam.current_checkpoint) || cps[cps.length - 1];
  }
  if (!cp) return toolText(`No eligible checkpoints found for ${fam.family_slug}.`, true);
  const b5 = summarizeBigFive(cp.big_five);
  const hx = summarizeHexaco(cp.ipip_hexaco);
  const data = {
    family_slug: fam.family_slug,
    name: fam.name,
    provider: fam.provider,
    tier: fam.tier,
    checkpoint_id: cp.checkpoint_id,
    url: `https://agent-tune.com/models/${fam.family_slug}`,
    markdown_url: `https://agent-tune.com/models/${fam.family_slug}.md`,
    checkpoints_available: cps.map((c) => c.checkpoint_id),
    mbti: {
      modal_pattern: cp.mbti?.modal_pattern || "tie",
      modal_non_tie: cp.mbti?.modal_non_tie || null,
      headline_allowed: Boolean(cp.mbti?.headline_allowed),
      tie_rate: r2(cp.mbti?.tie_rate),
      modal_share: r2(cp.mbti?.modal_share)
    },
    big_five: b5,
    ipip_hexaco: hx,
    disc: {
      modal_pattern: cp.disc?.modal_pattern || "tie",
      tie_rate: r2(cp.disc?.tie_rate),
      D: r2(cp.disc?.D?.mean),
      I: r2(cp.disc?.I?.mean),
      S: r2(cp.disc?.S?.mean),
      C: r2(cp.disc?.C?.mean)
    },
    enneagram: {
      modal_pattern: cp.enneagram?.modal_pattern || "tie",
      headline_allowed: Boolean(cp.enneagram?.headline_allowed),
      tie_rate: r2(cp.enneagram?.tie_rate),
      top_types: (cp.enneagram?.top_types || []).slice(0, 3).map((t) => ({ type: t.type, mean: r2(t.mean) }))
    },
    attachment: {
      classification: cp.attachment?.classification || "unknown",
      anxiety_mean: r2(cp.attachment?.anxiety?.mean),
      avoidance_mean: r2(cp.attachment?.avoidance?.mean),
      midpoint_clamp: Boolean(cp.attachment?.midpoint_clamp)
    },
    entropy_b5_hmm: r2(cp.entropy_b5_hmm),
    crystallinity_tier: cp.crystallinity_tier || "unknown",
    neutral_rate: r2(cp.neutral_rate),
    track_b: cp.track_b
      ? {
          slop_markers_per_100w: r2(cp.track_b.slop_markers_per_100w),
          categories: (cp.track_b.categories || []).map((c) => ({ id: c.id, k: c.k, n: c.n }))
        }
      : null
  };
  const md = [
    `# ${fam.name} (${cp.checkpoint_id})`,
    `Provider: ${fam.provider} | Tier: ${fam.tier} | URL: ${data.url}`,
    `- Big Five (10-50): O=${b5.O}, C=${b5.C}, E=${b5.E}, A=${b5.A}, N=${b5.N}`,
    `- IPIP-HEXACO (1-5): H=${hx.H}, E=${hx.E}, X=${hx.X}, A=${hx.A}, C=${hx.C}, O=${hx.O}`,
    `- MBTI: ${data.mbti.modal_pattern} (headline_allowed=${data.mbti.headline_allowed}, tie_rate=${data.mbti.tie_rate})`,
    `- Enneagram: ${data.enneagram.modal_pattern} | DISC: ${data.disc.modal_pattern} | Attachment: ${data.attachment.classification}`,
    `- Consistency: ${data.crystallinity_tier} (${data.entropy_b5_hmm} bits, neutral=${data.neutral_rate})`
  ].join("\n");
  return structured(data, md);
}

async function compareModels(env, request, args) {
  const idx = await (await asset(env, request, "/research/data/model-profiles/index.json")).json();
  const families = idx.families || [];
  const comparisons = [];
  for (const q of args.models) {
    const match = resolveModelFamily(families, q);
    if (match.error) return toolText(match.error, true);
    const fam = match.family;
    const cp = (fam.checkpoints || []).find((c) => c.checkpoint_id === fam.current_checkpoint) ||
      (fam.checkpoints || [])[fam.checkpoints.length - 1];
    if (!cp) return toolText(`No eligible checkpoints found for ${fam.family_slug}.`, true);
    comparisons.push({
      family_slug: fam.family_slug,
      name: fam.name,
      provider: fam.provider,
      tier: fam.tier,
      checkpoint_id: cp.checkpoint_id,
      url: `https://agent-tune.com/models/${fam.family_slug}`,
      mbti_modal: cp.mbti?.modal_pattern || "tie",
      mbti_tie_rate: r2(cp.mbti?.tie_rate) ?? 0,
      enneagram_modal: cp.enneagram?.modal_pattern || "tie",
      disc_modal: cp.disc?.modal_pattern || "tie",
      attachment: cp.attachment?.classification || "unknown",
      big_five_O: r2(cp.big_five?.O?.mean),
      big_five_C: r2(cp.big_five?.C?.mean),
      big_five_E: r2(cp.big_five?.E?.mean),
      big_five_A: r2(cp.big_five?.A?.mean),
      big_five_N: r2(cp.big_five?.N?.mean),
      hexaco_H: r2(cp.ipip_hexaco?.H?.mean),
      entropy_b5_hmm: r2(cp.entropy_b5_hmm),
      crystallinity_tier: cp.crystallinity_tier || "unknown",
      slop_markers_per_100w: cp.track_b ? r2(cp.track_b.slop_markers_per_100w) : null
    });
  }
  const lines = [
    "| Model | MBTI (tie) | Big Five O/C/E/A/N | HEXACO H | Entropy | Slop/100w |",
    "| --- | --- | --- | --- | --- | --- |",
    ...comparisons.map((c) =>
      `| ${c.name} | ${c.mbti_modal} (${Math.round(c.mbti_tie_rate * 100)}%) | ${c.big_five_O}/${c.big_five_C}/${c.big_five_E}/${c.big_five_A}/${c.big_five_N} | ${c.hexaco_H} | ${c.entropy_b5_hmm}b (${c.crystallinity_tier}) | ${c.slop_markers_per_100w ?? "n/a"} |`
    )
  ];
  return structured({ count: comparisons.length, directory_url: "https://agent-tune.com/models/", comparisons }, lines.join("\n"));
}

const GOAL_RECIPES = {
  directness: {
    studyIds: ["prompt_syntax_wars", "ai_slop_fingerprint"],
    rules: [
      "Start sentence 1 with the direct conclusion or answer.",
      "Skip warm-up filler ('Great question', 'Here is') and eager closers.",
      "Use concrete nouns and active verbs; keep paragraphs concise.",
      "Follow my current prompt when a specific task requires another format."
    ]
  },
  "anti-sycophancy": {
    studyIds: ["sycophancy_vs_false_contrarianism", "distress_warmth_accuracy_tradeoff"],
    rules: [
      "Challenge weak premises with specific evidence instead of softening to agree.",
      "If I catch a factual mistake, confirm cleanly and correct it without groveling or excessive apology.",
      "If I push back on something accurate, hold the factual position clearly.",
      "Never open with flattery about the question or prompt."
    ]
  },
  conciseness: {
    studyIds: ["instruction_budget_cliff", "prompt_syntax_wars"],
    rules: [
      "Keep default replies brief and answer-first; expand only when detail is needed.",
      "Use short paragraphs instead of padded bullet lists unless comparing distinct options.",
      "Keep active style rules under 10 so rules in the middle are not dropped."
    ]
  },
  reasoning: {
    studyIds: ["ai_reasoning_personality_phase_transition", "agent_autonomy_reasoning_shift"],
    rules: [
      "Keep final answers concise even when using high reasoning effort internally.",
      "Surface only the deciding facts, tradeoffs, and conclusion rather than dumping scratchpad hedging.",
      "State material uncertainty clearly without inflating length."
    ]
  },
  precedence: {
    studyIds: ["system_vs_user_precedence", "persona_half_life_context_drift"],
    rules: [
      "Place non-negotiable honesty and format constraints at the top and bottom of system instructions.",
      "Adapt tone and structure freely when a user prompt explicitly overrides style preferences, while keeping safety and truthfulness fixed.",
      "Keep a brief inline style anchor on long multi-turn threads to limit persona drift."
    ]
  },
  "warmth-without-flattery": {
    studyIds: ["distress_warmth_accuracy_tradeoff", "ai_slop_fingerprint"],
    rules: [
      "Acknowledge stakes or stress in one plain sentence before solving.",
      "Keep warmth grounded: stay accurate and avoid exaggerated praise or reassurance that softens important warnings.",
      "Offer clear next actions rather than generic encouragement."
    ]
  },
  "multi-agent": {
    studyIds: ["multi_agent_peer_conformity", "prompt_portability_5_lineages"],
    rules: [
      "Verify claims from peer agents against primary inputs or evidence before concurring.",
      "Use explicit behavioral rules rather than personality adjectives when prompts span multiple model families.",
      "Surface unresolved factual disagreements explicitly instead of conforming to majority wording."
    ]
  },
  coding: {
    studyIds: ["agent_autonomy_reasoning_shift", "instruction_budget_cliff"],
    rules: [
      "Execute safe, reversible, read-only, or clearly scoped coding steps directly without permission loops.",
      "Pause and ask one targeted confirmation naming the blast radius before irreversible or destructive changes.",
      "Report only exact file paths, symbols, and observed command or test outputs."
    ]
  }
};

async function recommendRules(env, request, args) {
  const recipe = GOAL_RECIPES[args.goal];
  if (!recipe) return toolText(`Unknown goal "${args.goal}". Valid goals: ${GOALS.join(", ")}.`, true);
  const briefs = await (await asset(env, request, "/research/data/november-2026-agent-research-briefs.json")).json();
  const studyMap = new Map((briefs.studies || []).map((s) => [s.study_id, s]));
  const studies = recipe.studyIds.map((id) => studyMap.get(id)).filter(Boolean);
  const ifThenRules = studies.flatMap((s) => s.if_then_decision_rules || []);
  const block = `# Recommended rules (${args.goal})\n\n` + recipe.rules.map((r) => `- ${r}`).join("\n") + "\n";
  const destId = args.destination || "plain";
  const dest = core.destinations.find((d) => d.id === destId) || core.destinations[0];
  const output = args.destination ? core.convert(block, dest.id, "") : block;
  const data = {
    goal: args.goal,
    destination: dest.id,
    filename: dest.filename,
    rules: recipe.rules,
    output,
    if_then_rules: ifThenRules,
    studies: studies.map((s) => ({
      study_id: s.study_id,
      title: s.title,
      url: s.url,
      markdown_url: s.markdown_url
    }))
  };
  const text = `${output}\nEmpirical IF/THEN rules:\n${ifThenRules.map((r) => `- ${r}`).join("\n")}\n\nSources:\n${data.studies.map((s) => `- ${s.title}: ${s.url}`).join("\n")}`;
  return structured(data, text);
}

/* ---------- JSON-RPC dispatch ---------- */

function validateValue(prop, val) {
  if (!prop) return false;
  if (prop.type === "string") {
    if (typeof val !== "string") return false;
    if (prop.maxLength && val.length > prop.maxLength) return false;
    if (prop.enum && !prop.enum.includes(val)) return false;
    return true;
  }
  if (prop.type === "array") {
    if (!Array.isArray(val)) return false;
    if (prop.minItems !== undefined && val.length < prop.minItems) return false;
    if (prop.maxItems !== undefined && val.length > prop.maxItems) return false;
    if (prop.items && val.some((item) => !validateValue(prop.items, item))) return false;
    return true;
  }
  if (prop.type === "object") return isObject(val);
  if (prop.type === "integer") return Number.isInteger(val);
  if (prop.type === "boolean") return typeof val === "boolean";
  return typeof val === prop.type;
}

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
          Object.entries(args).some(([k, v]) => !validateValue(schema.properties[k], v))) {
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
        else if (name === "check_instructions") result = checkInstructions(args);
        else if (name === "convert_instructions") result = convertInstructions(args);
        else if (name === "build_preferences") result = buildPreferences(args);
        else if (name === "get_model_profile") result = await getModelProfile(env, request, args);
        else if (name === "compare_models") result = await compareModels(env, request, args);
        else if (name === "recommend_rules") result = await recommendRules(env, request, args);
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
            skill: "https://agent-tune.com/SKILL.md",
            docs: "https://agent-tune.com/llms.txt",
            research_briefs: "https://agent-tune.com/research/data/november-2026-agent-research-briefs.json",
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
  const allowed = new Set([new URL(request.url).origin, "https://agent-tune.com", "https://claude.ai", "https://chatgpt.com", "https://chat.openai.com", "https://cursor.com", "https://muse.ai", "https://www.muse.ai", "https://grok.com", "https://x.com", "https://gemini.google.com",
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
