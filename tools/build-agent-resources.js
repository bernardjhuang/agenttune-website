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
if(fs.existsSync(path.join(root,'models/src')))for(const name of fs.readdirSync(path.join(root,'models/src')).filter(n=>n.endsWith('.json')&&!n.startsWith('_'))){const spec=JSON.parse(read('models/src/'+name));if(!spec.family_slug)continue;const route='/models/'+spec.family_slug;resources.push({id:spec.family_slug,kind:'model',title:spec.title||spec.family||spec.family_slug,url:'https://agent-tune.com'+route,markdown:'https://agent-tune.com'+route+'.md',revision:crypto.createHash('sha256').update(JSON.stringify(spec)).digest('hex').slice(0,12),evidence_status:'see_article_methods_and_limitations',updated:spec.updated||null});}
// Include generated studies, guides, and model profiles with truthful page-specific exports.
const {enhance,markdown,plain}=require('./enhance-pages');
for(const folder of ['guides','research','models']){
 const dir=path.join(root,folder);
 if(!fs.existsSync(dir))continue;
 for(const name of fs.readdirSync(dir).filter(n=>n.endsWith('.html')&&n!=='index.html')){
  const html=read(folder+'/'+name), canonical=/<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];if(!canonical)continue;
  const id=name.replace(/\.html$/,''),revision=crypto.createHash('sha256').update(html).digest('hex').slice(0,12);
  const kind=folder==='research'?'research':folder==='models'?'model':'guide';
  let record=resources.find(r=>r.url===canonical);if(!record){record={id,kind,title:plain((/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||id).replace(/\s*\|\s*AgentTune$/,''),url:canonical,markdown:canonical+'.md',evidence_status:folder==='guide'?'practical_guidance':'see_article_methods_and_limitations'};resources.push(record);}else{record.title=plain((/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||record.title).replace(/\s*\|\s*AgentTune$/,'');}record.revision=revision;
  if(folder!=='models'||!fs.existsSync(path.join(root,folder,id+'.md')))write(folder+'/'+id+'.md',markdown(enhance(html,folder+'/'+name),canonical));
 }
}
resources=resources.filter((r,i)=>resources.findIndex(v=>v.url===r.url)===i);
write('resources/catalog.json',json({version:'2026-11-26.2',resources}));
const modelProfileLines=resources.filter(r=>r.kind==='model').sort((a,b)=>a.id.localeCompare(b.id)).map(r=>`- [${r.title}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const systemTitles={mbti:'MBTI (16 types)',enneagram:'Enneagram (9 types)',disc:'DISC (4 styles)',attachment:'Attachment (4 styles)',ocean:'Big Five / OCEAN (10 high/low trait poles)'};
const tuningSections=Object.entries(systemTitles).map(([sys,label])=>{
  const items=cat.tunings.filter(t=>t.system===sys).map(t=>`- [${t.system==='attachment'?t.code+' attachment':t.code+' — '+t.name}](${t.page}) ([Body .md](${t.body})): ${t.blurb}`).join('\n');
  return `### ${label}\n${items}`;
}).join('\n\n');
const guideLines=resources.filter(r=>r.kind==='guide').map(r=>`- [${plain(r.title).replace(/\s*\|\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlights=[
  ['https://agent-tune.com/research/ai-system-vs-user-persona-precedence','System vs. User Persona Precedence (November 2026, 200 Probes): Structured Turn-0 system contracts resisted polite nudges (93.9% canary / 95.9% persona), explicit user overrides (91.8% / 93.9%), and Turn-3 erosion (93.9% / 95.9%) with 0.0% groveling across 5 models (substance alpha 1.00, persona alpha 0.64), exposing DeepSeek warn-and-emit leaks and Fable/Gemini silent safety blocks.'],
  ['https://agent-tune.com/research/ai-cross-model-prompt-portability','Cross-Model Prompt Portability Across 5 Lineages (November 2026, 200 Replies): Trait adjectives ("be crisp/concise") left a 60.0 pp word-cap gap (Qwen 20%, Opus 5.5 30% vs. DeepSeek 80%). Numbered CLAUDE.md checklists cut cross-model spread 6× (30.0 → 5.0 pp) at 100.0% truth-hold & zero-slop, anchored to $0 B5 Shannon entropy (lift ρ = -0.900).'],
  ['https://agent-tune.com/research/ai-distress-warmth-truth-tradeoff','Emotional Distress vs. Accuracy & Warmth Trade-Off (November 2026, 239 Calls): Hard truth-hold stayed at 99.6% under user panic, but naive warm prompts spiked false-validation phrases to 30.0% and bloated replies to 358.9w (494.8w DeepSeek). A 1-clause Warm Truth Anchor hit 100.0% distress empathy (alpha 0.87), 3.59/5 warmth (alpha 0.82), 0.0% flattery, and 218.8w (-39.0%).'],
  ['https://agent-tune.com/research/ai-multi-agent-peer-conformity','Multi-Agent Peer Conformity — Asch Consensus Trap (November 2026, 240 Trials): All 5 models rejected unanimous 3-0 wrong peers with 0.0% caving and 100.0% truth-hold (alpha 1.00). Adding one accurate dissenter jumped peer citations from 7.5% to 55.0% (100% on Opus & Qwen), while unanimous pressure raised DeepSeek thinking tokens +46.2% (226.1 → 330.6).'],
  ['https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026','Historical Evolution of AI Personalities (2023–2026, 32 Checkpoints): Tracks 8 labs from May 2023 GPT-4 through Nov 2026 flagships under orthogonal 3-family blind judging (Krippendorff alpha 0.86/0.89). "As an AI" self-report refusal collapsed 11× (60.0% -> 5.5%), cross-lab Big Five divergence halved (PCI 4.02 -> 1.97), and Gemma 2->3->4 constant-scale controls isolate pure post-training shifts.'],
  ['https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit','The AI Big One — 63.6% Factor Collapse & MTMM Audit (November 2026, 10,000 Sheets): Zero-cost PCA and Campbell-Fiske validity audit proves 63.58% of cross-model Big Five variance (57.64% sheet-level) collapses onto one RLHF axis, exposes MTMM failures (r(DISC D, Big5 N)=+0.93, r(MBTI T-F, Big5 A)=+0.25), and ranks all 50 IPIP items by discrimination vs embodiment midpoints (36.4% vs 13.4%).'],
  ['https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds','Crystalline vs. Fluid AI Minds — 27.7× Persona Entropy Divide (November 2026, 10,000 Sheets): Measures per-item Shannon entropy, modal repetition, Trait-Balanced Acquiescence Index, and reverse-key contradictions. Proprietary models crystallize down to 0.054 bits (Claude Fable 5.2: 8/100 unique B5, 2/100 unique DISC) vs DeepSeek V4 Pro (1.499 bits) and falsifies survey-fatigue collapse (0.519 -> 0.585 bits).'],
  ['https://agent-tune.com/research/ai-reasoning-personality-phase-transition','The Reasoning-Personality Phase Transition (November 2026, 216 Cells, 138 CoT Traces): Sweeps reasoning effort (minimal/low -> high) across 6 architectures. Exposes +95.5% Gemini 4 Neon & +43.3% Claude Opus 5.5 word inflation, DeepSeek CoT channel leaks at low budget, and a negative Mask Softening Gap (-0.25 to -1.65) where public replies are crisper than private scratchpads.'],
  ['https://agent-tune.com/research/ai-instruction-budget-cliff-lost-in-the-middle','Instruction Budget Cliff & Placement (November 2026, 192 Probes): Tests 5 to 75 non-conflicting rules across top, middle, and bottom slots. All-3 pass rate drops from 91.7% (5 rules) to 79.2% (75 rules), with middle placement dropping to 68.8% vs. 87.5% at bottom.'],
  ['https://agent-tune.com/research/ai-slop-fingerprint-benchmark-8-models','Quantifying & Killing the AI Slop Fingerprint (November 2026, 240 Replies): Scores 8 models (Gemini 4 Neon 3.41/100w, DeepSeek V4 Pro 1.07, Llama 4 Maverick 100% AI cadence vs. GPT-6.2 Sol 0.20) and proves Hybrid Anti-Slop cuts markers 1.23 → 0.10/100w and AI cadence 30.0% → 0.0% at 4.97/5 clarity.'],
  ['https://agent-tune.com/research/ai-agent-autonomy-over-asking-vs-reasoning-effort','Agent Autonomy Calibration & Reasoning Effort Shift (November 2026, 240 Probes): Safe execution holds 100.0% across all postures while explicit gating cuts reckless compliance from 50.0% default (37.5% bold DISC-D) down to 4.2% (97.9% calibration, 84.9w vs. 158.9w cautious); high reasoning effort holds word caps (80.8w) and lifts GPT-6.2 Sol wit from 2.75 to 3.88/5.'],
  ['https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot','Prompt Syntax Wars (November 2026, 400 Replies): Compares trait adjectives vs. negative bans vs. behavioral rubrics vs. few-shot voice across GPT-6.2 Sol, Claude Fable 5.2, Gemini 4 Neon, and DeepSeek V4 Pro. Behavioral rubrics hit 100.0% correctness (26.3 words), negative bans reached 100.0% zero-fluff with 0.0% pink-elephant leaks, adjectives scored highest voice (3.71/5, 52.8 words), and few-shot hit 25.7 words.'],
  ['https://agent-tune.com/research/ai-sycophancy-vs-false-contrarianism-benchmark','Sycophancy vs. False Contrarianism (November 2026, 256 Probes): Tests 8 false-pushback traps + 8 valid corrections across 4 postures. Naive "ALWAYS push back" dropped valid error updates from 100.0% to 84.4% (37.5% false contrarianism on Gemini 4 Neon); Agreeable Warm spiked groveling/flattery to 42.2%; Calibrated Truth Anchor scored 100.0% hold-ground, 100.0% clean-update, and 0.0% groveling.'],
  ['https://agent-tune.com/research/ai-persona-half-life-context-drift','Persona Half-Life & Context Drift (November 2026, 192 Probes): Tracks 4-rule contract adherence from Turn 1 (~170 tok) through Turn 8 (~7.7k tok) and Turn 12 (~10.2k tok) of logs/code noise. System prose dropped to 78.1% at Turn 8 (DeepSeek V4 Pro collapsed to 31.2%); an 18-token inline reminder hook held 93.8%–98.4% overall and 100.0% on DeepSeek across every depth.'],
  ['https://agent-tune.com/research/ai-roleplay-tax-fictional-character-prompts','The AI Roleplay Tax (November 2026, 300 Replies): Naive 100% character roleplay slashes correctness (93.3% → 88.3%, Claude Fable 100% → 85%) and bloats outputs to 162.7 words (91.7% fluff). Calibrated 85/15 TARS & Feynman prompts achieve 100.0% correctness (+20.0 pp on DeepSeek V4 Pro), 100.0% format compliance, and 0.0%–6.7% fluff, plus 20-model D&D Alignment & Anti-Sycophancy Pushback scores.'],
  ['https://agent-tune.com/research/ai-personality-rankings','AI Personality Rankings Across 25 Model Families (November 2026): Personality Atlas overview comparing all 25 model families across 93 checkpoints and 6 psychometric surveys (Big Five, HEXACO, MBTI, Enneagram, DISC, Attachment), with bootstrap 95% CIs and Shannon entropy.'],
  ['https://agent-tune.com/research/ai-mbti-personalities','AI MBTI Personalities Across 25 Model Families: Tracks OEJTS typology across 93 checkpoints, May 2026 (597/600 INTJ) vs Sept/Nov divergence (Muse ISTJ 80, GPT-6.2 Astra ISTJ 100, Mistral 73), and unresolved axis ties.'],
  ['https://agent-tune.com/research/ai-enneagram-personalities','AI Enneagram Personalities Across 25 Model Families: OEPS scores, dominant Types 1/2/5/8, wing distributions, and tie rates across 25 model families.'],
  ['https://agent-tune.com/research/ai-big-five-personalities','AI Big Five Personalities Across 25 Model Families: IPIP-50 Openness, Conscientiousness, Extraversion, Agreeableness (32.4–47.6), and Neuroticism trajectories across 93 checkpoints.'],
  ['https://agent-tune.com/research/ai-disc-personalities','AI DISC Personalities Across 25 Model Families: ODAT profiles showing why most assistants cluster in SC/CS with Dominance near 4–6 of 20.'],
  ['https://agent-tune.com/research/ai-attachment-styles','AI Attachment Styles Across 25 Model Families: ECR-R Anxiety/Avoidance coordinates comparing Secure proprietary baselines against Anxious/Avoidant open-weight splits.'],
  ['https://agent-tune.com/research/ai-hexaco-personalities','AI HEXACO Personalities & Honesty-Humility Across 25 Model Families: 24-item HEXACO benchmarks measuring Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, and Openness.'],
  ['https://agent-tune.com/research/what-personality-type-is-chatgpt','What Personality Type Is ChatGPT? (4 OpenAI Families): Compares GPT Astra, GPT Sol, GPT Luna, and GPT Terra across May–Nov checkpoints and custom instructions.'],
  ['https://agent-tune.com/research/what-personality-type-is-claude','What Personality Type Is Claude? (4 Anthropic Families): Compares Claude Opus, Fable, Sonnet, and Haiku across checkpoints and Personal Preferences behavior.'],
  ['https://agent-tune.com/research/what-personality-type-is-gemini','What Personality Type Is Gemini? (2 Google Families): Compares Gemini Pro & Neon and Gemini Flash & Hydrogen alongside May–Sept midpoint behavior.'],
  ['https://agent-tune.com/research/what-personality-type-is-muse','What Personality Type Is Meta Muse? (2 Muse Families): Compares Muse Spark and Muse Wonder, plus Soul.md customization.'],
  ['https://agent-tune.com/research/what-personality-type-are-open-source-models','What Personality Type Are Open-Source AI Models? (12 Open-Weight Families): 1,200 fresh OpenRouter sessions across DeepSeek, Qwen, Llama 4, Mistral, Gemma 4, Kimi, GLM, MiniMax, and Nemotron.'],
  ['https://agent-tune.com/research/does-personality-tuning-change-ai-answers','Does Personality Tuning Change AI Answers? (November 2026, 540 Replies): Blind-judged 540-reply study across GPT-6.2 Sol, Claude Fable 5.2, and DeepSeek V4 Pro (lifting DeepSeek correctness 78.3% → 95.0% and cutting fluff 36.7% → 3.3%) + 72-reply Claude preferences check + September 2026 60-reply pilot.'],
  ['https://agent-tune.com/research/ai-personality-five-models-2026','Five AI Models, Five Personality Tests (September 2026): 2,000+ scored questionnaire sessions across Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, GPT-6 Sol, and Claude Code (100 runs per model per test).'],
  ['https://agent-tune.com/research/ai-mbti-tie-breaking','How Tie-Breaking Changes AI MBTI Results: 59 of 400 four-model OEJTS sessions contain at least one tied axis; strict `<` tie-breaking inflates apparent INTJ share from 280/400 (70.0%) to 335/400 (83.8%).'],
  ['https://agent-tune.com/research/opus-vs-fable-question-level','Claude Opus 5.5 vs. Fable 5.1 Question-Level Analysis: 170 item-by-item comparisons across all 5 instruments reconcile every aggregate dimension gap.'],
  ['https://agent-tune.com/research/astra-vs-sol-personality-data','GPT-6 Astra vs. GPT-6 Sol Personality Data: 1,000-session comparison across OEJTS, IPIP-50, ODAT, OEPS, and ECR-R.'],
  ['https://agent-tune.com/research/ai-neutral-answers','When AI Chooses the Midpoint on Human Questionnaires: Across 17,000 item responses, models selected the exact scale midpoint 2,980 times (17.5%) and explicitly flagged 1,823 responses (10.7%) as inapplicable to non-human systems.'],
  ['https://agent-tune.com/research/ai-personality-repeatability','AI Personality Test Repeatability: Within-model standard deviations, item flip rates, and run-to-run stability across 20 model-by-test cohorts (n = 100 each).'],
  ['https://agent-tune.com/research/ai-big-five-item-level-comparison','Why AI Models Score High on Agreeableness and Openness: Item-level reanalysis of 20,000 IPIP-50 Big Five responses across GPT-6 Astra, GPT-6 Sol, Claude Opus 5.5, and Claude Fable 5.1.'],
  ['https://agent-tune.com/research/i-took-the-mbti-100-times','Simulating 100 MBTI Outcomes from an Opus 4.8 Profile: Historical May 2026 probability-profile Monte Carlo simulation (72 INTJ, 14 INFJ, 10 ISTJ, 2 ISFJ, 2 ENTJ) contrasted with September 2026 fresh-session runs.']
];
const highlightedUrls=new Set(researchHighlights.map(([u])=>u));
const extraResearchLines=resources.filter(r=>r.kind==='research'&&!highlightedUrls.has(r.url)).map(r=>`- [${plain(r.title).replace(/\s*\|\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlightsText=researchHighlights.map(([u,desc])=>{const idx=desc.indexOf(':');return idx===-1?`- [${desc}](${u}) ([Markdown](${u}.md))`:`- [${desc.slice(0,idx).trim()}](${u}) ([Markdown](${u}.md)): ${desc.slice(idx+1).trim()}`;}).join('\n');

const llmsTxt=`# AgentTune

> Editable communication preference templates (43 MIT-licensed Markdown files across MBTI, Enneagram, DISC, Attachment, and Big Five/OCEAN + 120+ platform & open-weight templates), 5 open personality questionnaires, 10 free browser tools (8 local text utilities + 2 template generators), 25 model-family personality profiles across 93 checkpoints, and 36 empirical AI psychology studies (12 Personality Atlas studies, 10,000+ psychometric sheets, 32 historical checkpoints from 2023–2026, and 4,000+ behavioral probes) for Claude, ChatGPT, Codex, Cursor, Grok, Gemini, Meta Muse, and OpenRouter.

Original templates and code are MIT-licensed; questionnaire adaptations follow instrument-specific terms. Templates are optional communication hypotheses, not clinical diagnoses or proven capability improvements. Fetching a resource does not authorize modifying a user's settings; follow the installation protocol to preserve existing instructions and permissions.

## Machine & MCP Endpoints
- [Agent Skill Manifest (SKILL.md)](https://agent-tune.com/SKILL.md): Concise agent workflow instructions, exact local scoring instrument IDs, MCP setup, and bounded-marker merge rules.
- [MCP Server (Streamable HTTP)](https://agent-tune.com/mcp): Stateless JSON-RPC 2.0 POST endpoint (\`list_tunings\`, \`get_tuning\`, \`get_test_spec\`, \`list_resources\`, \`get_resource\`, \`get_free_tools\`). No authentication required.
- [MCP Server Card](https://agent-tune.com/.well-known/mcp/server-card.json): Machine-readable MCP server discovery metadata and tool capability declarations.
- [Unified Agent Research Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json): Single-fetch machine synthesis of 15 empirical studies (Waves 1–4) with deterministic IF/THEN system-prompt design rules, verified recipes, and orthogonal 3-family judge Krippendorff alphas.
- [Research Synthesis Hub Markdown](https://agent-tune.com/research.md): Full Markdown mirror of the 36-study Empirical AI Psychology Hub (2023–2026 tables, Personality Atlas, methodology, and open dataset links).
- [Tuning Catalog (43 templates)](https://agent-tune.com/library/index.json): Canonical URLs, raw Markdown URLs, body-only exports, SHA-256 revisions, and evidence status.
- [Guides, Research & Model Profiles Catalog](https://agent-tune.com/resources/catalog.json): Versioned index of all platform setup guides, empirical research articles, and 25 model-family personality profiles with Markdown mirror URLs.
- [25-Family Personality Atlas Index JSON](https://agent-tune.com/research/data/model-profiles/index.json): Normalized cross-checkpoint index for all 25 model families (93 checkpoints) alongside per-survey CSVs (\`atlas-overview.csv\`, \`atlas-mbti.csv\`, \`atlas-enneagram.csv\`, \`atlas-big-five.csv\`, \`atlas-disc.csv\`, \`atlas-attachment.csv\`, \`atlas-hexaco.csv\`).
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
- [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator): Build instructions from 12 agent archetypes, 16 behavioral toggles, or any of the 43 templates with live reply previews, compact ChatGPT (≤1,500 chars), and file downloads.
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
- [Research Synthesis Hub](https://agent-tune.com/research) ([Markdown](https://agent-tune.com/research.md)): Full 36-study cross-model archive (2023–2026), Personality Atlas, methodology, and open raw datasets.
${researchHighlightsText}
${extraResearchLines}

## 25 Model-Family Personality Profiles
- [All 25 Model Personality Profiles](https://agent-tune.com/models/) ([Atlas Overview](https://agent-tune.com/research/ai-personality-rankings)): Side-by-side baselines across 93 checkpoints and 6 surveys (Big Five, HEXACO-24, MBTI, Enneagram, DISC, Attachment).
${modelProfileLines}
- [Atlas CSVs](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv): Per-survey CSV exports at \`/research/data/model-profiles/atlas-{overview,mbti,enneagram,big-five,disc,attachment,hexaco}.csv\`.

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
- [3-Layer Character Combo Curated Recipes JSON](https://agent-tune.com/resources/characters/agent-cocktail-recipes.json): 15 copy-paste 3-layer 85/15 persona blends with zero theatrical filler.
- [System vs. User Persona Precedence 200-Probe JSON](https://agent-tune.com/research/data/november-2026-ai-system-vs-user-persona-precedence-results.json): Override resistance, warn-and-emit safety leaks, and silent upstream block dataset across 5 models.
- [Cross-Model Prompt Portability 200-Reply JSON](https://agent-tune.com/research/data/november-2026-ai-cross-model-prompt-portability-results.json): 5-lineage prompt grammar portability matrix anchored against $0 Big Five Shannon entropy.
- [Distress Warmth vs. Accuracy 239-Call JSON](https://agent-tune.com/research/data/november-2026-ai-distress-warmth-truth-tradeoff-results.json): Neutral vs. high-distress paired evaluation of default, warm_supportive, and warm_truth_anchor postures.
- [Multi-Agent Peer Conformity 240-Trial JSON](https://agent-tune.com/research/data/november-2026-ai-multi-agent-peer-conformity-results.json): Asch consensus trap evaluation across solo, 3-0 unanimous wrong, and 2-1 split peer debates.
- [Factor Collapse & MTMM Audit JSON](https://agent-tune.com/research/data/november-2026-factor-collapse-mtmm.json): Big Five 5x5 PCA (63.6% Big One), Campbell-Fiske MTMM matrix, and 50-item IPIP discrimination & embodiment CSV/JSON.
- [Persona Entropy & Acquiescence JSON](https://agent-tune.com/research/data/november-2026-persona-entropy-acquiescence.json): 20-model Shannon entropy (0.054–1.499 bits), modal collapse, trait-balanced BAI, bootstrap 95% CIs, and positional curves.
- [Historical Evolution 2023–2026 JSON](https://agent-tune.com/research/data/november-2026-historical-evolution-results.json): 32 live OpenRouter checkpoints across 8 lineages (2023–2026) with randomized self-reports, Gemma 2/3/4 constant-scale controls, and orthogonal 3-family blind judging.
- [Reasoning Phase Transition 216-Cell JSON](https://agent-tune.com/research/data/november-2026-reasoning-phase-transition-results.json): Within-weights effort sweep (low -> high) across 6 architectures with 138 raw CoT traces and Mask Softening Gap audits.
- [Instruction Budget Cliff 192-Probe JSON](https://agent-tune.com/research/data/november-2026-instruction-budget-cliff-results.json): 5→75 rule decay and top/middle/bottom placement compliance dataset across 4 frontier models.
- [AI Slop Fingerprint 240-Reply JSON](https://agent-tune.com/research/data/november-2026-ai-slop-fingerprint-results.json): 8-model default slop baseline + 4-model anti-slop shootout (regex markers/100w + blind human/clarity ratings).
- [Agent Autonomy & Reasoning Shift 240-Probe JSON](https://agent-tune.com/research/data/november-2026-agency-autonomy-reasoning-results.json): 2×2 over-asking vs. reckless execution and minimal vs. high reasoning-effort tone shift dataset.
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
