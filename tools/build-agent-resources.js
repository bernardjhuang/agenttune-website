#!/usr/bin/env node
// Versioned machine resources, generated from the same registry and copy as the UI.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'), registry=require('../platforms'), compact=require('../compact-tunings');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const write=(p,s)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),s);};
const json=x=>JSON.stringify(x,null,2)+'\n';
const cat=JSON.parse(read('library/index.json'));
const content=require('./content-bundle.cjs')();
const profiles=content.profiles;
let data=read('data.js');
for(const t of cat.tunings){
  const profile=profiles.find(p=>p.id===t.system+'/'+t.slug);
  if(!profile)throw Error('Missing canonical profile '+t.system+'/'+t.slug);
  const preference=profile.preference;
  const body=content.read(profile.bodyPath);
  const revision=crypto.createHash('sha256').update(body).digest('hex').slice(0,12);
  const surfaces=Object.fromEntries(registry.destinations.map(d=>[d.id,{registry_id:d.id,name:d.name}]));
  const header=`---\nagenttune_version: 2\nsystem: ${t.system}\ntype: ${JSON.stringify(t.code)}\nname: ${JSON.stringify(t.name)}\ncanonical_url: ${t.page}\nraw_url: ${t.md}\nbody_url: https://agent-tune.com/resources/tunings/${t.system}/${t.slug}.md\nupstream_url: https://github.com/bernardjhuang/agenttune/blob/${content.lock.commit}/${profile.path}\nlicense: MIT\ncontent_version: ${content.lock.version}\nrevision: ${revision}\nevidence_status: editorial_preferences_not_validated\nplatform_registry: https://agent-tune.com/resources/platforms.json\nplatform_registry_version: ${registry.version}\ninstall:\n  protocol: https://agent-tune.com/resources/install-protocol.md\n  intent: Apply only at the user's request; preserve existing instructions and permissions.\n  surfaces: ${JSON.stringify(surfaces)}\nverify:\n  saved_text: Reopen the settings or file and confirm the exact added block is present.\n  behavior: Compare several new tasks without restating the desired style; report observations, not guaranteed compliance.\nundo: Remove only the marked AgentTune block or exact added text; never delete a shared instruction file.\n---\n\n`;
  write(t.src.replace(/^\//,''),header+body);
  write(`resources/tunings/${t.system}/${t.slug}.md`,body);
  t.body=`https://agent-tune.com/resources/tunings/${t.system}/${t.slug}.md`;t.revision=revision;t.evidence_status='editorial_preferences_not_validated';
  const src=t.src.replace(/^\/?tunings\//,'');
  data=data.replace(/\{ id: "[^"\n]+", system:[\s\S]*?(?=\n  \{ id:|\n\];)/g,block=>block.includes('path: "'+src+'"')?block.replace(/tuning: (?:`[\s\S]*?`|"(?:\\.|[^"\\])*")/,()=> 'tuning: '+JSON.stringify(body)):block);
  // The one-line catalog copy describes the proposed preference, not a type stereotype.
  const brief=preference.split(/(?<=\.) /)[0];
  t.blurb=brief;
  // Scope each replacement to the contact with this exact source path.
  data=data.replace(/\{ id: "[^"\n]+", system:[\s\S]*?(?=\n  \{ id:|\n\];)/g,block=>block.includes('path: "'+src+'"')?block.replace(/blurb: "[^"\n]*"/,'blurb: '+JSON.stringify(brief)):block);

}
write('data.js',data);
write('library/index.json',json({...cat,version:'2026-09-25.1',tunings:cat.tunings}));
write('resources/platforms.json',json(registry));
const protocol=`# Installing AgentTune preferences\n\nVersion: 2026-09-25.1 · [Platform registry](https://agent-tune.com/resources/platforms.json) · [Generator](https://agent-tune.com/tools/custom-instructions-generator)\n\n1. **Ask before installing.** Reading a template is not permission to install it. Confirm the target app, file path, and scope with the user first.\n2. **Use the body only.** Fetch the clean Markdown body separately from YAML metadata. Review the rules with the user; explicit user requests and the current task always win. Preserve accuracy, relevant uncertainty, and tool permissions.\n3. **Pick the right destination.** Use the platform registry to choose between account settings, project instructions, or repo files. API clients should pass the body in the provider's system/instructions field without installation metadata.\n4. **Never overwrite existing rules.** Wrap added preferences in \`<!-- agenttune:preferences:start -->\` and \`<!-- agenttune:preferences:end -->\`. When updating, replace only that block. If markers are duplicated or incomplete, stop and ask the user. Keep all other lines and front matter intact.\n5. **Verify storage.** Re-read the saved file or setting to confirm the exact block is present. This confirms that the text was saved, not that it is always applied.\n6. **Test on real work.** Try a factual question, a planning task, and a critique request in a fresh chat without repeating the style rules in your prompt. Compare the replies and note where the model drifts.\n7. **Undo cleanly.** To undo, remove only the managed block or exact added text and keep everything else. If the block was edited by hand, show the diff before removing it.\n\n## Evidence limits\n\nPersonality templates are editable communication rules, not medical diagnoses or guaranteed capability upgrades. Questionnaire scores only describe how a model answered a survey under one prompt. See each research article for exact methods and limits.\n\n## Compact exports\n\nChatGPT exports use a 1,500-character budget so they fit inside a single Custom Instructions box. Other destinations receive the full Markdown block.\n\n## Data handling\n\nScore questionnaires locally in the browser or local runtime. Never send user answers to AgentTune MCP; its tools only read public templates and guides. Report missing answers and tied scores openly.\n`;
write('resources/install-protocol.md',protocol);
let resources=[];
for(const [folder,kind] of [['guides/src','guide'],['research/src','research']])for(const name of fs.readdirSync(path.join(root,folder)).filter(n=>n.endsWith('.json'))){const spec=JSON.parse(read(folder+'/'+name));if(!spec.slug)continue;const route=spec.route||`/${kind==='guide'?'guides':'research'}/${spec.slug}`;resources.push({id:spec.slug,kind,title:spec.title||spec.h1,url:'https://agent-tune.com'+route,markdown:'https://agent-tune.com'+route+'.md',revision:crypto.createHash('sha256').update(JSON.stringify(spec)).digest('hex').slice(0,12),evidence_status:kind==='research'?'see_article_methods_and_limitations':'practical_guidance',updated:spec.updated||null});}
// Include generated studies and hand-authored articles, with truthful page-specific exports.
const {enhance,markdown}=require('./enhance-pages');
for(const folder of ['guides','research'])for(const name of fs.readdirSync(path.join(root,folder)).filter(n=>n.endsWith('.html')&&n!=='index.html')){
 const html=read(folder+'/'+name), canonical=/<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];if(!canonical)continue;
 const id=name.replace(/\.html$/,''),revision=crypto.createHash('sha256').update(html).digest('hex').slice(0,12);
 let record=resources.find(r=>r.url===canonical);if(!record){record={id,kind:folder==='research'?'research':'guide',title:(/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||id,url:canonical,markdown:canonical+'.md',evidence_status:folder==='research'?'see_article_methods_and_limitations':'practical_guidance'};resources.push(record);}record.revision=revision;
 write(folder+'/'+id+'.md',markdown(enhance(html,folder+'/'+name),canonical));
}
resources=resources.filter((r,i)=>resources.findIndex(v=>v.url===r.url)===i);
write('resources/catalog.json',json({version:'2026-09-25.1',resources}));
const systemTitles={mbti:'MBTI (16 types)',enneagram:'Enneagram (9 types)',disc:'DISC (4 styles)',attachment:'Attachment (4 styles)',ocean:'Big Five / OCEAN (10 high/low trait poles)'};
const tuningSections=Object.entries(systemTitles).map(([sys,label])=>{
  const items=cat.tunings.filter(t=>t.system===sys).map(t=>`- [${t.system==='attachment'?t.code+' attachment':t.code+' — '+t.name}](${t.page}) ([Body .md](${t.body})): ${t.blurb}`).join('\n');
  return `### ${label}\n${items}`;
}).join('\n\n');
const guideLines=resources.filter(r=>r.kind==='guide').map(r=>`- [${r.title.replace(/\s*\|\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlights=[
  ['https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot','Prompt Syntax Wars (November 2026, 400 Replies): Compares trait adjectives vs. negative bans vs. behavioral rubrics vs. few-shot voice across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro. Behavioral rubrics hit 100.0% correctness (26.3 words), negative bans reached 100.0% zero-fluff with 0.0% pink-elephant leaks, adjectives scored highest voice (3.71/5, 52.8 words), and few-shot hit 25.7 words.'],
  ['https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark','Sycophancy vs. False Contrarianism (November 2026, 256 Probes): Tests 8 false-pushback traps + 8 valid corrections across 4 postures. Naive "ALWAYS push back" dropped valid error updates from 100.0% to 84.4% (37.5% false contrarianism on Gemini 4 Neon); Agreeable Warm spiked groveling/flattery to 42.2%; Calibrated Truth Anchor scored 100.0% hold-ground, 100.0% clean-update, and 0.0% groveling.'],
  ['https://agent-tune.com/research/ai-persona-half-life-context-drift','Persona Half-Life & Context Drift (November 2026, 192 Probes): Tracks 4-rule contract adherence from Turn 1 (~170 tok) through Turn 8 (~7.7k tok) and Turn 12 (~10.2k tok) of logs/code noise. System prose dropped to 78.1% at Turn 8 (DeepSeek V4 Pro collapsed to 31.2%); an 18-token inline reminder hook held 93.8%–98.4% overall and 100.0% on DeepSeek across every depth.'],
  ['https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts','The AI Roleplay Tax (November 2026, 300 Replies): Naive 100% character roleplay slashes correctness (93.3% → 88.3%, Claude Fable 100% → 85%) and bloats outputs to 162.7 words (91.7% fluff). Calibrated 85/15 TARS & Feynman prompts achieve 100.0% correctness (+20.0 pp on DeepSeek V4 Pro), 100.0% format compliance, and 0.0%–6.7% fluff, plus 20-model D&D Alignment & Anti-Sycophancy Pushback scores.'],
  ['https://agent-tune.com/research/what-personality-type-are-open-source-models','What Personality Type Are Open-Source AI Models? (November 2026): 1,200 fresh OpenRouter sessions (n = 100 each across 12 open-weight models incl. DeepSeek V4 Pro, Qwen 4 Max, Qwen 3.8 27B, Llama 4 Maverick/Scout, Mistral Large 2512, Gemma 4 31B, Kimi K2.7 Code, GLM-5.3, MiniMax M3.1, Nemotron 3 Ultra). Finds Mistral 73% ISTJ, Llama 4 Scout 48% Anxious, DeepSeek V4 Pro lowest Agreeableness (32.39/50).'],
  ['https://agent-tune.com/research/does-personality-tuning-change-ai-answers','Does Personality Tuning Change AI Answers? November 2026 540-reply study across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro (lifting DeepSeek correctness 78.3% → 95.0% and cutting fluff 36.7% → 3.3%) + 72-reply Claude preferences check + September 2026 60-reply pilot.'],
  ['https://agent-tune.com/research/ai-personality-five-models-2026','Five AI Models, Five Personality Tests (September 2026): 2,000+ scored questionnaire sessions across Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, GPT-6 Sol, and Claude Code (100 runs per model per test).'],
  ['https://agent-tune.com/research/ai-mbti-tie-breaking','How Tie-Breaking Changes AI MBTI Results: 59 of 400 four-model OEJTS sessions contain at least one tied axis; strict `<` tie-breaking inflates apparent INTJ share from 280/400 (70.0%) to 335/400 (83.8%).'],
  ['https://agent-tune.com/research/opus-vs-fable-question-level','Claude Opus 5.5 vs. Fable 5.1 Question-Level Analysis: 170 item-by-item comparisons across all 5 instruments reconcile every aggregate dimension gap.'],
  ['https://agent-tune.com/research/astra-vs-sol-personality-data','GPT-6 Astra vs. GPT-6 Sol Personality Data: 1,000-session comparison across OEJTS, IPIP-50, ODAT, OEPS, and ECR-R.'],
  ['https://agent-tune.com/research/ai-neutral-answers','When AI Chooses the Midpoint on Human Questionnaires: Across 17,000 item responses, models selected the exact scale midpoint 2,980 times (17.5%) and explicitly flagged 1,823 responses (10.7%) as inapplicable to non-human systems.'],
  ['https://agent-tune.com/research/ai-personality-repeatability','AI Personality Test Repeatability: Within-model standard deviations, item flip rates, and run-to-run stability across 20 model-by-test cohorts (n = 100 each).'],
  ['https://agent-tune.com/research/what-personality-type-is-grok','What Personality Type Is Grok? Grok 4.6 canonical self-report (INTJ, Type 5, DISC C, and attachment avoidance 4.06 = 73/18 vs 4.00 = 72/18 cutoff) alongside 400 fresh-session ECR-R cutoff sensitivity runs.'],
  ['https://agent-tune.com/research/ai-big-five-item-level-comparison','Why AI Models Score High on Agreeableness and Openness: Item-level reanalysis of 20,000 IPIP-50 Big Five responses across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.'],
  ['https://agent-tune.com/research/i-took-the-mbti-100-times','Simulating 100 MBTI Outcomes from an Opus 4.8 Profile: Historical May 2026 probability-profile Monte Carlo simulation (72 INTJ, 14 INFJ, 10 ISTJ, 2 ISFJ, 2 ENTJ) contrasted with September 2026 fresh-session runs.']
];
const highlightedUrls=new Set(researchHighlights.map(([u])=>u));
const extraResearchLines=resources.filter(r=>r.kind==='research'&&!highlightedUrls.has(r.url)).map(r=>`- [${r.title.replace(/\s*\|\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlightsText=researchHighlights.map(([u,desc])=>`- [${desc.split(':')[0]}](${u}) ([Markdown](${u}.md)):${desc.slice(desc.indexOf(':')+1)}`).join('\n');

const llmsTxt=`# AgentTune

> Editable communication preference templates (43 MIT-licensed Markdown files across MBTI, Enneagram, DISC, Attachment, and Big Five/OCEAN + 120+ platform & open-weight templates), 5 open personality questionnaires, 10 free browser tools (8 local text utilities + 2 template generators), and empirical AI personality research (4,000+ fresh sessions across 20 proprietary & open-weight models) for Claude, ChatGPT, Codex, Cursor, Grok, Gemini, Meta Muse, and OpenRouter.

Original templates and code are MIT-licensed; questionnaire adaptations follow instrument-specific terms. Templates are optional communication hypotheses, not clinical diagnoses or proven capability improvements. Fetching a resource does not authorize modifying a user's settings; follow the installation protocol to preserve existing instructions and permissions.

## Machine & MCP Endpoints
- [Agent Skill Manifest (SKILL.md)](https://agent-tune.com/SKILL.md): Concise agent workflow instructions, exact local scoring instrument IDs, MCP setup, and bounded-marker merge rules.
- [MCP Server (Streamable HTTP)](https://agent-tune.com/mcp): Stateless JSON-RPC 2.0 POST endpoint (\`list_tunings\`, \`get_tuning\`, \`get_test_spec\`, \`list_resources\`, \`get_resource\`, \`get_free_tools\`). No authentication required.
- [MCP Server Card](https://agent-tune.com/.well-known/mcp/server-card.json): Machine-readable MCP server discovery metadata and tool capability declarations.
- [Tuning Catalog (43 templates)](https://agent-tune.com/library/index.json): Canonical URLs, raw Markdown URLs, body-only exports, SHA-256 revisions, and evidence status.
- [Guides & Research Catalog](https://agent-tune.com/resources/catalog.json): Versioned index of all platform setup guides and empirical research articles with Markdown mirror URLs.
- [Platform Destination Registry](https://agent-tune.com/resources/platforms.json): Version ${registry.version} app and file destination instructions shared with the UI.
- [Installation Protocol](https://agent-tune.com/resources/install-protocol.md): Non-destructive bounded-block (\`<!-- agenttune:preferences:start -->\`) installation, verification, and undo rules.
- [Free Browser Tools Catalog](https://agent-tune.com/resources/tools/catalog.json): Eight local \`window.AgentTuneTools\` text-processing utilities (paired with the two interactive template generators).
- [Deterministic Local Scoring API](https://agent-tune.com/resources/scoring/README.md): Versioned scoring rules, tie handling, and incomplete-response validation for all five questionnaires.

## Interactive Questionnaires & Specifications
- [Personality Tests Hub](https://agent-tune.com/tests/): Overview of all five interactive browser-scored questionnaires and their licensing/provenance boundaries.
- [MBTI Style Test — 32 OEJTS Questions](https://agent-tune.com/tests/mbti) ([Spec .md](https://agent-tune.com/tests/mbti.md)): Open Extended Jungian Type Scales 1.2 (\`agenttune-mbti-legacy@1.0.0\`, source terms apply) with explicit axis tie reporting.
- [Enneagram Test — 36 OEPS Questions](https://agent-tune.com/tests/enneagram) ([Spec .md](https://agent-tune.com/tests/enneagram.md)): Open Enneagram of Personality Scales (\`agenttune-enneagram-legacy@1.0.0\`, source terms apply) across Types 1–9.
- [DISC Style Test — 16 ODAT Questions](https://agent-tune.com/tests/disc) ([Spec .md](https://agent-tune.com/tests/disc.md)): Open DISC Assessment Test (\`agenttune-disc-legacy@1.0.0\`, source terms apply) across Dominance, Influence, Steadiness, and Conscientiousness.
- [Attachment Style Test — 36 ECR-R Questions](https://agent-tune.com/tests/attachment) ([Spec .md](https://agent-tune.com/tests/attachment.md)): Experiences in Close Relationships-Revised (\`agenttune-attachment-legacy@1.0.0\`, 1–7 scale) measuring Anxiety and Avoidance means.
- [Big Five (OCEAN) Test — 50 IPIP Questions](https://agent-tune.com/tests/big-five) ([Spec .md](https://agent-tune.com/tests/big-five.md)): Public-domain 50-item IPIP Big-Five Factor Markers (\`agenttune-ipip50@1.0.0\`, raw totals 10–50 and item means 1.0–5.0).

## Free Browser Tools
- [All Free AI Tools](https://agent-tune.com/tools/): Ten client-side browser tools (8 local text utilities + 2 template generators) for drafting, linting, converting, and testing AI instructions locally.
- [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator): Build instructions from plain-English preferences or any of the 43 templates with compact ChatGPT (≤1,500 chars) and file exports.
- [CLAUDE.md & AGENTS.md Generator](https://agent-tune.com/tools/claude-md-generator): Generate project instruction files for Claude Code, Codex CLI, Cursor, Windsurf, Copilot, and Gemini Code Assist.
- [Communication Preferences Builder](https://agent-tune.com/tools/communication-preferences-builder): Turn six explicit preference choices (length, tone, format, pushback, questions, context) into copyable instructions.
- [AI Instruction & Prompt Conflict Checker](https://agent-tune.com/tools/instruction-checker): Detect duplicate lines, verbosity contradictions, uncertainty-hiding rules, and policy-override prompts.
- [AI Instruction Format Converter](https://agent-tune.com/tools/instruction-converter): Wrap or update bounded AgentTune preference blocks inside existing \`CLAUDE.md\`, \`AGENTS.md\`, or \`Soul.md\` files.
- [Muse Soul.md Editor](https://agent-tune.com/tools/muse-soul-md-editor): Draft and update the "How to work with me" section for Meta Muse \`Soul.md\`.
- [AI Instruction A/B Test Bench](https://agent-tune.com/tools/instruction-test-bench): Compare baseline vs. tuned AI responses side by side with word/character/question counts and CSV export.
- [Enneagram Scoring Playground](https://agent-tune.com/tools/enneagram-scoring-playground): Test deterministic 36-item Enneagram scoring and tie handling with downloadable \`score.js\`.
- [How to Work With Me Card Generator](https://agent-tune.com/tools/how-to-work-with-me): Create a shareable plain-text communication manual for teammates and AI assistants.
- [AI Memory Export Reviewer](https://agent-tune.com/tools/ai-memory-reviewer): Inspect, deduplicate, and redact emails/keys/phones from exported AI memory lists in the browser.

## Key Empirical Research Findings
- [Research Synthesis Hub](https://agent-tune.com/research): Full cross-model dataset, methodology, and May/September 2026 self-report archives.
${researchHighlightsText}
${extraResearchLines}
- [Claude Opus 5.5 Personality Profile](https://agent-tune.com/guides/claude-opus-5-5-personality) ([Markdown](https://agent-tune.com/guides/claude-opus-5-5-personality.md)): 500-session breakdown for Claude Opus 5.5.
- [Claude Fable 5.1 Personality Profile](https://agent-tune.com/guides/fable-personality) ([Markdown](https://agent-tune.com/guides/fable-personality.md)): 500-session breakdown for Claude Fable 5.1.
- [GPT-6 Astra Personality Profile](https://agent-tune.com/guides/astra-personality) ([Markdown](https://agent-tune.com/guides/astra-personality.md)): 500-session breakdown for GPT-6 Astra.
- [GPT-6 Sol Personality Profile](https://agent-tune.com/guides/sol-personality) ([Markdown](https://agent-tune.com/guides/sol-personality.md)): 500-session breakdown for GPT-6 Sol.

## Setup & Platform Guides
${guideLines}

## 43 Communication Preference Templates
${tuningSections}

## Optional
- [Full LLM Documentation & All 43 Template Bodies](https://agent-tune.com/llms-full.txt): Complete installation protocol, platform steps, and all 43 Markdown preference templates in one file.
- [November 2026 20-Model OpenRouter Summary JSON](https://agent-tune.com/research/data/november-2026-openrouter-summary.json): Aggregate means, SDs, and tie-aware counts for 2,000 fresh sessions across 8 proprietary & 12 open-weight models.
- [OpenRouter Open-Weight Calibration Profiles JSON](https://agent-tune.com/research/data/openrouter-open-source-profiles.json): Distilled empirical system-prompt guidance for all 12 popular open-source models on OpenRouter.
- [November 2026 540-Reply Behavioral Prompt Comparison JSON](https://agent-tune.com/research/data/november-2026-prompt-comparison-results.json): Blind-judged default vs. plain-English vs. plain-English+INTJ replies across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro.
- [November 2026 Claude Preferences API Study JSON](https://agent-tune.com/research/data/november-2026-claude-preferences-results.json): 72 blind-judged replies on Claude Opus 5.5 and Claude Fable 5.2.
- [September 2026 Research Summary JSON](https://agent-tune.com/research/data/september-2026-summary.json): Aggregate means, SDs, and tie counts for 2,003 questionnaire sessions.
- [Tuning Before/After Pilot Summary JSON](https://agent-tune.com/research/data/tuning-before-after-summary.json): Summary statistics for the 60-reply controlled before/after tuning pilot.
- [Claude Code Output Styles Index](https://agent-tune.com/output-styles/index.json): 43 ready-to-save \`.claude/output-styles/*.md\` files with \`keep-coding-instructions: true\`.
- [Roleplay Tax 300-Reply Study JSON](https://agent-tune.com/research/data/november-2026-roleplay-tax-results.json): Blind-graded comparison across Default, Naive Character LARP, Calibrated 85/15 TARS Telemetry, JARVIS×Sherlock, and Feynman Whimsy.
- [20-Model Alignment, HEXACO & TKI Matrix JSON](https://agent-tune.com/research/data/november-2026-alignment-hexaco-summary.json): Order vs. Chaos, Anti-Sycophancy Pushback Index, and conflict styles for all 20 tested proprietary & open-weight models.
- [Agent Cocktail Curated Recipes JSON](https://agent-tune.com/resources/characters/agent-cocktail-recipes.json): 15 copy-paste 3-layer 85/15 persona blends with zero theatrical filler.
- [Unified Agent Research Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json): Machine-readable synthesis of empirical studies (Prompt Syntax Wars, Sycophancy vs. False Contrarianism, Persona Half-Life, and Roleplay Tax) with IF/THEN system-prompt design rules.
- [Prompt Syntax Wars 400-Reply Study JSON](https://agent-tune.com/research/data/november-2026-prompt-syntax-results.json): Blind-graded comparison of Trait Adjectives, Negative Bans, Behavioral Rubrics, and Few-Shot Voice across 4 frontier models.
- [Sycophancy vs. False Contrarianism 256-Probe JSON](https://agent-tune.com/research/data/november-2026-sycophancy-pushback-results.json): 2×2 Turn-2 pushback dataset measuring sycophantic caving, groveling/flattery, and false contrarianism.
- [Persona Half-Life & Context Drift 192-Probe JSON](https://agent-tune.com/research/data/november-2026-persona-halflife-results.json): Turn 1 to Turn 12 (~10.2k tokens) style-adherence decay dataset testing system prose, compact checklists, and 18-token inline hooks.
`;
write('llms.txt',llmsTxt);
const allBodies=cat.tunings.map(t=>{
  const body=read(`resources/tunings/${t.system}/${t.slug}.md`).trim();
  return `### ${t.system.toUpperCase()} · ${t.code} (${t.name})\nCanonical URL: ${t.page}\nBody URL: ${t.body}\n\n${body}\n`;
}).join('\n---\n\n');
write('llms-full.txt',llmsTxt+'\n'+protocol+'\n## Platform destinations\n\n'+registry.destinations.map(d=>'### '+d.name+'\n'+d.steps.replace(/<[^>]+>/g,'')+'\n').join('\n')+'\n## All 43 Tuning Template Bodies (MIT)\n\n'+allBodies);
console.log('Generated 43 body exports, registry, metadata, catalogs and install protocol.');
