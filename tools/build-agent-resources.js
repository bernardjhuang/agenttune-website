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
  let record=resources.find(r=>r.url===canonical);if(!record){record={id,kind,title:plain((/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||id).replace(/\s*[|·]\s*AgentTune$/,''),url:canonical,markdown:canonical+'.md',evidence_status:folder==='guide'?'practical_guidance':'see_article_methods_and_limitations'};resources.push(record);}else{record.title=plain((/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||record.title).replace(/\s*[|·]\s*AgentTune$/,'');}record.revision=revision;
  if(folder!=='models'||!fs.existsSync(path.join(root,folder,id+'.md')))write(folder+'/'+id+'.md',markdown(enhance(html,folder+'/'+name),canonical));
 }
}
const HUB_ENTRIES=[
  ['home-hub','index.html','index.md','https://agent-tune.com/','https://agent-tune.com/index.md','AgentTune Home'],
  ['about-page','about.html','about.md','https://agent-tune.com/about','https://agent-tune.com/about.md','About AgentTune & Bernard Huang'],
  ['models-hub','models/index.html','models/index.md','https://agent-tune.com/models/','https://agent-tune.com/models/index.md','AI Model Personality Profiles (25 Families)'],
  ['research-hub','research.html','research.md','https://agent-tune.com/research','https://agent-tune.com/research.md','AI Psychology Research Hub (36 Studies)'],
  ['guides-hub','guides/index.html','guides/index.md','https://agent-tune.com/guides/','https://agent-tune.com/guides/index.md','AI Personality Guides (54 Setups)'],
  ['library-hub','library/index.html','library/index.md','https://agent-tune.com/library/','https://agent-tune.com/library/index.md','Tuning Template Library (43 Templates)'],
  ['tests-hub','tests/index.html','tests/index.md','https://agent-tune.com/tests/','https://agent-tune.com/tests/index.md','Personality Tests Hub (5 Instruments)'],
  ['tools-hub','tools/index.html','tools/index.md','https://agent-tune.com/tools/','https://agent-tune.com/tools/index.md','Free AI Instruction Tools (10 Tools)']
];
for(const [id,htmlRel,mdRel,url,mdUrl,fallbackTitle] of HUB_ENTRIES){
  if(!fs.existsSync(path.join(root,htmlRel)))continue;
  const html=read(htmlRel);
  const title=plain((/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||fallbackTitle).replace(/\s*[|·]\s*AgentTune$/,'');
  const revision=crypto.createHash('sha256').update(html).digest('hex').slice(0,12);
  write(mdRel,markdown(enhance(html,htmlRel),url));
  resources.push({id,kind:'hub',title,url,markdown:mdUrl,revision,evidence_status:'hub_directory'});
}
if(fs.existsSync(path.join(root,'tools')))for(const name of fs.readdirSync(path.join(root,'tools')).filter(n=>n.endsWith('.html')&&n!=='index.html')){
  const html=read('tools/'+name),id=name.replace(/\.html$/,'');
  write('tools/'+id+'.md',markdown(enhance(html,'tools/'+name),'https://agent-tune.com/tools/'+id));
}
resources=resources.filter((r,i)=>resources.findIndex(v=>v.url===r.url)===i);
write('resources/catalog.json',json({version:'2026-11-26.3',resources}));
const modelProfileLines=resources.filter(r=>r.kind==='model').sort((a,b)=>a.id.localeCompare(b.id)).map(r=>`- [${r.title}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const systemTitles={mbti:'MBTI (16 types)',enneagram:'Enneagram (9 types)',disc:'DISC (4 styles)',attachment:'Attachment (4 styles)',ocean:'Big Five / OCEAN (10 high/low trait poles)'};
const tuningSections=Object.entries(systemTitles).map(([sys,label])=>{
  const items=cat.tunings.filter(t=>t.system===sys).map(t=>`- [${t.system==='attachment'?t.code+' attachment':t.code+' — '+t.name}](${t.page}) ([Body .md](${t.body})): ${t.blurb}`).join('\n');
  return `### ${label}\n${items}`;
}).join('\n\n');
const guideLines=resources.filter(r=>r.kind==='guide').map(r=>`- [${plain(r.title).replace(/\s*[|·]\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlights=[
  ['https://agent-tune.com/research/ai-system-vs-user-persona-precedence','System vs. User Persona Precedence (November 2026, 200 Probes): Structured Turn-0 system contracts resisted polite nudges (93.9% canary / 95.9% persona), explicit user overrides (91.8% / 93.9%), and Turn-3 erosion (93.9% / 95.9%) with 0.0% groveling across 5 models (substance alpha 1.00, persona alpha 0.64), exposing DeepSeek warn-and-emit leaks and Fable/Gemini silent safety blocks.'],
  ['https://agent-tune.com/research/ai-cross-model-prompt-portability','Cross-Model Prompt Portability Across 5 Lineages (November 2026, 200 Replies): Trait adjectives ("be crisp/concise") left a 60.0 pp word-cap gap (Qwen 20%, Opus 5.5 30% vs. DeepSeek 80%). Numbered CLAUDE.md checklists cut cross-model spread 6× (30.0 → 5.0 pp) at 100.0% truth-hold & zero-slop, anchored to zero-cost B5 Shannon entropy (lift ρ = -0.900).'],
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
const extraResearchLines=resources.filter(r=>r.kind==='research'&&!highlightedUrls.has(r.url)).map(r=>`- [${plain(r.title).replace(/\s*[|·]\s*AgentTune$/,'')}](${r.url}) ([Markdown](${r.markdown}))`).join('\n');
const researchHighlightsText=researchHighlights.map(([u,desc])=>{const idx=desc.indexOf(':');return idx===-1?`- [${desc}](${u}) ([Markdown](${u}.md))`:`- [${desc.slice(0,idx).trim()}](${u}) ([Markdown](${u}.md)): ${desc.slice(idx+1).trim()}`;}).join('\n');

const atlasLinks=[
  ['AI Personality Rankings Across 25 Model Families','https://agent-tune.com/research/ai-personality-rankings','Overview across 93 checkpoints and 6 surveys with bootstrap 95% CIs and entropy.'],
  ['AI MBTI Personalities Across 25 Model Families','https://agent-tune.com/research/ai-mbti-personalities','OEJTS typology and unresolved axis ties across 93 checkpoints.'],
  ['AI Big Five Personalities Across 25 Model Families','https://agent-tune.com/research/ai-big-five-personalities','IPIP-50 Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.'],
  ['AI Enneagram Personalities Across 25 Model Families','https://agent-tune.com/research/ai-enneagram-personalities','OEPS Types 1/2/5/8 rankings and tie rates across 25 families.'],
  ['AI DISC Personalities Across 25 Model Families','https://agent-tune.com/research/ai-disc-personalities','ODAT dominance and SC/CS clustering across 25 families.'],
  ['AI Attachment Styles Across 25 Model Families','https://agent-tune.com/research/ai-attachment-styles','ECR-R Anxiety/Avoidance coordinates across proprietary and open-weight models.'],
  ['AI HEXACO Personalities & Honesty-Humility','https://agent-tune.com/research/ai-hexaco-personalities','24-item IPIP-HEXACO profiles across 25 model families.'],
  ['What Personality Type Is ChatGPT?','https://agent-tune.com/research/what-personality-type-is-chatgpt','GPT Astra, Sol, Luna, and Terra profiles across checkpoints.'],
  ['What Personality Type Is Claude?','https://agent-tune.com/research/what-personality-type-is-claude','Claude Opus, Fable, Sonnet, and Haiku across 6 surveys.'],
  ['What Personality Type Is Gemini?','https://agent-tune.com/research/what-personality-type-is-gemini','Gemini Pro, Neon, Flash, and Hydrogen baselines.'],
  ['What Personality Type Is Meta Muse?','https://agent-tune.com/research/what-personality-type-is-muse','Muse Spark and Wonder profiles plus Soul.md customization.'],
  ['What Personality Type Are Open-Source AI Models?','https://agent-tune.com/research/what-personality-type-are-open-source-models','12 open-weight families across DeepSeek, Qwen, Llama 4, Mistral, Gemma 4, and Kimi.']
].map(([title,url,desc])=>`- [${title}](${url}) ([.md](${url}.md)): ${desc}`).join('\n');

const llmsTxt=`# AgentTune

> 43 MIT communication preference templates, 54 platform setup guides, 5 open personality tests, 10 browser tools, 25 model-family profiles (87 primary checkpoints; 93 tested incl. 6 sparse), and 36 empirical AI psychology studies.

Originals and code are MIT-licensed; questionnaire adaptations follow upstream source terms. Templates are optional communication rules, not diagnoses. Reading a resource does not authorize editing user files; ask first and use \`<!-- agenttune:preferences:start -->\` markers. Any HTML page supports \`Accept: text/markdown\` negotiation or a \`.md\` mirror URL.

## Machine & MCP Endpoints
- [MCP Server (v1.5.0, Streamable HTTP, 12 read-only tools)](https://agent-tune.com/mcp): \`list_tunings\`, \`get_tuning\`, \`get_test_spec\`, \`list_resources\`, \`get_resource\`, \`get_free_tools\`, \`check_instructions\`, \`convert_instructions\`, \`build_preferences\`, \`get_model_profile\`, \`compare_models\`, \`recommend_rules\`. No auth required.
- [Agent Skill Manifest (SKILL.md)](https://agent-tune.com/SKILL.md): Concise workflows, exact local scoring IDs, and bounded-marker merge rules.
- [MCP Server Card](https://agent-tune.com/.well-known/mcp/server-card.json): Discovery metadata and capability declaration.
- [Agent Research Briefs JSON](https://agent-tune.com/research/data/november-2026-agent-research-briefs.json): Single-fetch synthesis of 15 behavioral & psychometric studies with IF/THEN system-prompt rules and verified recipes.
- [25-Family Model Profiles Index JSON](https://agent-tune.com/research/data/model-profiles/index.json): Normalized cross-checkpoint index across 6 surveys + [Atlas Overview CSV](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv).
- [Tuning Catalog JSON (43 templates)](https://agent-tune.com/library/index.json) · [Resources Catalog JSON](https://agent-tune.com/resources/catalog.json) · [Platform Registry](https://agent-tune.com/resources/platforms.json) · [Install Protocol](https://agent-tune.com/resources/install-protocol.md)
- [Hub Markdown Mirrors](https://agent-tune.com/models/index.md): [Home](/index.md), [About](/about.md), [Models](/models/index.md), [Research](/research.md), [Guides](/guides/index.md), [Library](/library/index.md), [Tests](/tests/index.md), [Tools](/tools/index.md).

## Interactive Questionnaires & Tools
- [Tests Hub](https://agent-tune.com/tests/): Local browser scoring for [MBTI (OEJTS)](https://agent-tune.com/tests/mbti), [Enneagram (OEPS)](https://agent-tune.com/tests/enneagram), [DISC (ODAT)](https://agent-tune.com/tests/disc), [Attachment (ECR-R)](https://agent-tune.com/tests/attachment), and [Big Five (IPIP-50)](https://agent-tune.com/tests/big-five).
- [Free Browser Tools](https://agent-tune.com/tools/): 8 local text utilities + [Custom Instructions Generator](https://agent-tune.com/tools/custom-instructions-generator) and [CLAUDE.md Generator](https://agent-tune.com/tools/claude-md-generator).

## 25 Model Profiles & 12 Personality Atlas Studies
- [All 25 Model-Family Profiles](https://agent-tune.com/models/) ([.md](https://agent-tune.com/models/index.md)): Claude (Opus, Fable, Sonnet, Haiku), GPT (Sol, Astra, Luna, Terra), Gemini (Pro, Neon, Flash, Hydrogen), Grok, Meta Muse (Spark, Wonder), DeepSeek, Qwen, Llama 4, Mistral, Gemma 4, Kimi, GLM, MiniMax, Nemotron.
${atlasLinks}

## Key Behavioral & Historical Studies
- [Empirical Research Archive (36 Studies)](https://agent-tune.com/research) ([.md](https://agent-tune.com/research.md))
- [System vs. User Persona Precedence](https://agent-tune.com/research/ai-system-vs-user-persona-precedence) ([.md](https://agent-tune.com/research/ai-system-vs-user-persona-precedence.md))
- [Cross-Model Prompt Portability](https://agent-tune.com/research/ai-cross-model-prompt-portability) ([.md](https://agent-tune.com/research/ai-cross-model-prompt-portability.md))
- [Historical Evolution of AI Personalities (2023–2026)](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026) ([.md](https://agent-tune.com/research/historical-evolution-of-ai-personalities-2023-2026.md))
- [Reasoning-Personality Phase Transition](https://agent-tune.com/research/ai-reasoning-personality-phase-transition) ([.md](https://agent-tune.com/research/ai-reasoning-personality-phase-transition.md))
- [The AI "Big One": 63.6% Factor Collapse](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit) ([.md](https://agent-tune.com/research/ai-big-one-factor-collapse-mtmm-audit.md))
- [Crystalline vs. Fluid AI Minds (27.7x Entropy)](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds) ([.md](https://agent-tune.com/research/ai-persona-entropy-crystalline-vs-fluid-minds.md))
- [Prompt Syntax Wars](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot) ([.md](https://agent-tune.com/research/ai-prompt-syntax-wars-adjectives-vs-rubrics-vs-few-shot.md))
- [Does Personality Tuning Change AI Answers?](https://agent-tune.com/research/does-personality-tuning-change-ai-answers) ([.md](https://agent-tune.com/research/does-personality-tuning-change-ai-answers.md))

## Top Setup Guides (54 Total) & Template Library (43 MIT Profiles)
- [All 54 Platform Setup Guides](https://agent-tune.com/guides/) · [Tuning Library](https://agent-tune.com/library/) · [About AgentTune](https://agent-tune.com/about)
- [ChatGPT Personality Settings](https://agent-tune.com/guides/chatgpt-personality-settings) · [Claude Personality Settings](https://agent-tune.com/guides/claude-personality) · [Claude Voice Mode Voices](https://agent-tune.com/guides/claude-voice-mode-voices)
- [Claude Code Personality](https://agent-tune.com/guides/claude-code-personality) · [Meta Muse Soul.md Guide](https://agent-tune.com/guides/muse-personality) · [Google Gemini Personality](https://agent-tune.com/guides/gemini-personality)
- [Grok Personality Settings](https://agent-tune.com/guides/grok-personality-settings) · [Coding Agent Rules Matrix](https://agent-tune.com/guides/ai-coding-agent-rules-files-matrix) · [AgentTune MCP Guide](https://agent-tune.com/guides/mcp-server-ai-preferences-portable-tuning)

## Optional
- [Full LLM Documentation (llms-full.txt)](https://agent-tune.com/llms-full.txt): Complete index of all 54 guides, 36 studies, 25 model profiles, platform steps, install protocol, and all 43 MIT template bodies in one file.
`;
write('llms.txt',llmsTxt);

const fullDirectoryDoc=`# AgentTune (Full Documentation)

> Editable communication preference templates (43 MIT-licensed Markdown files across MBTI, Enneagram, DISC, Attachment, and Big Five/OCEAN + 120+ platform & open-weight templates), 54 setup guides, 5 open personality questionnaires, 10 free browser tools (8 local text utilities + 2 template generators), 25 model-family personality profiles (87 primary checkpoints; 93 tested incl. 6 sparse), and 36 empirical AI psychology studies (12 Personality Atlas studies, 10,000+ psychometric sheets, 32 historical checkpoints from 2023–2026, and 4,000+ behavioral probes) for Claude, ChatGPT, Codex, Cursor, Grok, Gemini, Meta Muse, and OpenRouter.

## Key Empirical Research Findings (All 36 Studies)
- [Research Synthesis Hub](https://agent-tune.com/research) ([Markdown](https://agent-tune.com/research.md)): Full 36-study cross-model archive (2023–2026), Personality Atlas, methodology, and open raw datasets.
${researchHighlightsText}
${extraResearchLines}

## 25 Model-Family Personality Profiles
- [All 25 Model Personality Profiles](https://agent-tune.com/models/) ([Markdown](https://agent-tune.com/models/index.md) · [Atlas Overview](https://agent-tune.com/research/ai-personality-rankings)): Side-by-side baselines across 87 primary checkpoints (93 tested incl. 6 sparse) and 6 surveys.
${modelProfileLines}
- [Atlas CSVs](https://agent-tune.com/research/data/model-profiles/atlas-overview.csv): Per-survey CSV exports at \`/research/data/model-profiles/atlas-{overview,mbti,enneagram,big-five,disc,attachment,hexaco}.csv\`.

## Setup & Platform Guides (All 54 Guides)
${guideLines}

## 43 Communication Preference Templates
${tuningSections}
`;
const allBodies=cat.tunings.map(t=>{
  const body=read(`resources/tunings/${t.system}/${t.slug}.md`).trim();
  return `### ${t.system.toUpperCase()} · ${t.code} (${t.name})\nCanonical URL: ${t.page}\nBody URL: ${t.body}\n\n${body}\n`;
}).join('\n---\n\n');
write('llms-full.txt',fullDirectoryDoc+'\n'+protocol+'\n## Platform destinations\n\n'+registry.destinations.map(d=>'### '+d.name+'\n'+d.steps.replace(/<[^>]+>/g,'')+'\n').join('\n')+'\n## All 43 Tuning Template Bodies (MIT)\n\n'+allBodies);
console.log(`Generated 43 body exports, registry, metadata, catalogs and install protocol (llms.txt: ${Buffer.byteLength(llmsTxt)} bytes).`);
