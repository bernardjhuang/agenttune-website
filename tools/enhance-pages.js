// Build-time enhancements keep navigation and disclosure content crawlable without JS.
const plain=s=>s.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').trim();
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const slug=s=>plain(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function filter(library){return `<form class="resource-filter" role="search" data-resource-filter="${library?'library':'guides'}"><div class="resource-filter-controls"><label for="resource-query">Search ${library?'templates':'guides'}<input id="resource-query" type="search" placeholder="${library?'e.g. concise, ENTP, openness':'e.g. Muse, setup, React'}"></label><label for="resource-app">${library?'Personality system':'App'}<select id="resource-app"><option value="">All ${library?'systems':'apps'}</option>${(library?['mbti','enneagram','disc','attachment','ocean']:['chatgpt','claude','muse','grok','gemini','coding']).map(v=>`<option value="${v}">${v==='chatgpt'?'ChatGPT':v==='ocean'?'Big Five':v==='mbti'?'MBTI':v==='disc'?'DISC':v[0].toUpperCase()+v.slice(1)}</option>`).join('')}</select></label>${library?'':`<label for="resource-kind">Task or resource<select id="resource-kind"><option value="">All resources</option><option value="setup">Set up my app</option><option value="template">Find a template</option><option value="developer">Build an integration</option><option value="research">Read research</option><option value="protocol">Test a preference</option></select></label>`}</div><p role="status" data-filter-status></p><button type="reset" class="btn btn-secondary">Clear filters</button><noscript><p>Search needs JavaScript. All resources are listed below.</p></noscript></form>`;}
function enhance(html,file){
  if((file.startsWith('research/')||file==='research.html')&&!html.includes('id="instrument-correction"'))html=html.replace(/(<main\b[^>]*>)/,'$1<section id="instrument-correction" class="questionnaire-status" style="margin:24px 0;padding:20px;border:1px solid var(--border);border-radius:12px"><p><strong>Instrument provenance update · September 26, 2026.</strong> These results describe the historical AgentTune adaptations, including documented item substitutions. Raw response vectors and numerical summaries are unchanged. Some question text and full prompts have been withdrawn from public downloads pending reuse-rights clarification; item references and numeric scoring keys remain for reproduction. Historical Big Five reference indices are not population percentiles. <a href="/research/data/rights-migration.json">Read the correction</a> · <a href="/tests/">Current questionnaire availability</a>.</p></section>');

  html=html.replace(/<link rel="alternate" type="text\/markdown" title="LLM index" href="https:\/\/agent-tune.com\/llms.txt"\s*\/?\s*>/g,'<link rel="help" title="Agent resource index" href="https://agent-tune.com/llms.txt" />');
  html=html.replace(/<link rel="alternate" type="text\/markdown" title="[^"]+" href="https:\/\/agent-tune.com\/llms-full.txt"\s*\/?\s*>/g,'<link rel="help" title="Agent installation documentation" href="https://agent-tune.com/llms-full.txt" />');
  if(/^(guides|research)\/.+\.html$/.test(file)&&!file.endsWith('/index.html')) html=html.replace('</head>',`<link rel="alternate" type="text/markdown" title="This article as Markdown" href="https://agent-tune.com/${file.replace(/\.html$/,'.md')}" />\n</head>`);
  if(/^library\/[^/]+\/[^/]+\.html$/.test(file)){
    html=html.replace(/<div class="c-titlebar-label">/g,'<div class="c-titlebar-label">Read-only template · ');
    const install=/<section class="lib-v2-section lib-agents" id="install">[\s\S]*?<\/section>/.exec(html)?.[0];
    if(install){html=html.replace(install,'');html=html.replace('    <!-- THE EDITOR',install+'\n    <!-- THE EDITOR');}
    html=html.replace(/<article class="c-editor" id="editor">([\s\S]*?)<\/article>/, '<details class="lib-disclosure" id="editor"><summary>View or download the base template</summary><article class="c-editor">$1</article></details>');
    for(const [id,label] of Object.entries({demo:'Illustrative examples',tune:'Preferences explained',default:'Research context','talk-to':'Interpersonal examples','this-is-me':'Explaining your preferences',neighbors:'Related templates'})){
      const re=new RegExp('<section class="lib-v2-section" id="'+id+'">([\\s\\S]*?)</section>');
      html=html.replace(re,`<details class="lib-disclosure" id="${id}"><summary>${label}</summary><section class="lib-v2-section">$1</section></details>`);
    }
    html=html.replace(/<section class="lib-v2-jump"([\s\S]*?)<\/section>/,'<details class="lib-disclosure"><summary>Optional model shortcuts</summary><section class="lib-v2-jump"$1</section></details>');
    html=html.replace(/<a class="lib-v2-anchor" href="#install">Install<\/a>/,'').replace('<nav class="lib-v2-anchors" aria-label="Sections">','<nav class="lib-v2-anchors" aria-label="Sections"><a class="lib-v2-anchor is-active" href="#install">Use this template</a>');
    html=html.replace('is-file is-active','is-file');
    // Live navigation is handled centrally, avoiding observer races during anchor jumps.
    html=html.replace(/      const anchors = document.querySelectorAll\("\.lib-v2-anchor"\);[\s\S]*?sections.forEach\(function \(s\) \{ io.observe\(s\); \}\);\n      \}/,'');
  }
  if(file==='guides/index.html'){
    html=html.replace(/<span class="pill guides-section-label">([^<]+)<\/span>/g,'<h2 class="h-sub guides-section-label">$1</h2>');
    const recent=/<!-- CONTENT EXPANSION SEPTEMBER 25 -->[\s\S]*?(?=<h2 class="h-sub guides-section-label">Start here)/.exec(html)?.[0];
    if(recent)html=html.replace(recent,'').replace('</main>',recent+'</main>');
    const dated=/<h2 class="h-sub guides-section-label">New in September 2026<\/h2>[\s\S]*?(?=<h2 class="h-sub guides-section-label">Templates)/.exec(html)?.[0];if(dated)html=html.replace(dated,'').replace('</main>',dated+'</main>');
    html=html.replace(/Practical walkthroughs[\s\S]*?if you're not\./,'Find setup steps, editable templates, research and developer resources for the app you use.');
    html=html.replace(/(<\/section>)/, '$1\n'+filter(false));
  }
  if(file==='library/index.html'){
    html=html.replace(/<section class="library-stats"[\s\S]*?<\/section>/,'');
    html=html.replace(/(<\/section>)/,'$1\n'+filter(true));
  }
  if(file==='research.html')html=html.replace('<!-- MAY 2026 ARCHIVE -->','<details class="lib-disclosure" id="may-archive"><summary>May 2026 archive: earlier models and methods</summary><!-- MAY 2026 ARCHIVE -->').replace('<!-- ARTICLES -->','</details><!-- ARTICLES -->');
  if((/^(guides|research)\//.test(file) || file==='research.html') && file!=='guides/index.html'){
    const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])), headings=[];
    html=html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g,(m,attrs,text)=>{
      let id=/\bid="([^"]+)"/.exec(attrs)?.[1];if(!id){let base=slug(text)||'section';id=base;for(let n=2;ids.has(id);n++)id=base+'-'+n;ids.add(id);attrs+=' id="'+id+'"';}headings.push({id,text:plain(text)});return '<h2'+attrs+'>'+text+'</h2>';
    });
    if(headings.length>=4){const toc='<details class="article-toc" open><summary>On this page</summary><nav aria-label="On this page"><ol>'+headings.map(h=>'<li><a href="#'+h.id+'">'+esc(h.text)+'</a></li>').join('')+'</ol></nav></details>';html=html.replace(/(<main[^>]*>[\s\S]*?<\/section>)/,'$1\n'+toc);}
  }
  return html.replace('</body>','<script defer src="/site-ui.js"></script>\n</body>');
}
function markdown(html,url){
 let text=/<main\b[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1]||'';
 text=text.replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/g,'').replace(/<details class="article-toc"[\s\S]*?<\/details>/,'');
 text=text.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g,(_,n,t)=>'\n\n'+'#'.repeat(+n)+' '+plain(t)+'\n\n')
 .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(_,href,t)=>'['+plain(t)+']('+new URL(href.replace(/&amp;/g,'&'),url).href+')')
 .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g,(_,t)=>'\n\n```\n'+plain(t)+'\n```\n\n')
 .replace(/<tr[^>]*>/g,'\n| ').replace(/<\/(?:td|th)>/g,' | ').replace(/<\/tr>/g,'\n')
 .replace(/<li[^>]*>/g,'\n- ').replace(/<\/(?:p|section|div|ul|ol|summary)>/g,'\n\n').replace(/<br\s*\/?>/g,'\n').replace(/<[^>]*>/g,'')
 .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
 return `Source: ${url}\nFormat: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.\n\n${text}\n`;
}
module.exports={enhance,markdown};
