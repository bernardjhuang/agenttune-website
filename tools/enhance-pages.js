// Build-time enhancements keep navigation and disclosure content crawlable without JS.
const plain=s=>s.replace(/<[^>]*>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').trim();
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const slug=s=>plain(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function filter(library){return `<form class="resource-filter" role="search" data-resource-filter="${library?'library':'guides'}"><div class="resource-filter-controls"><label for="resource-query">Search ${library?'templates':'guides'}<input id="resource-query" type="search" placeholder="${library?'e.g. concise, ENTP, openness':'e.g. Muse, setup, React'}"></label><label for="resource-app">${library?'Personality system':'App'}<select id="resource-app"><option value="">All ${library?'systems':'apps'}</option>${(library?['mbti','enneagram','disc','attachment','ocean']:['chatgpt','claude','muse','grok','gemini','coding']).map(v=>`<option value="${v}">${v==='chatgpt'?'ChatGPT':v==='ocean'?'Big Five':v==='mbti'?'MBTI':v==='disc'?'DISC':v[0].toUpperCase()+v.slice(1)}</option>`).join('')}</select></label>${library?'':`<label for="resource-kind">Task or resource<select id="resource-kind"><option value="">All resources</option><option value="setup">Set up my app</option><option value="template">Find a template</option><option value="developer">Build an integration</option><option value="research">Read research</option><option value="protocol">Test a preference</option></select></label>`}</div><p role="status" data-filter-status></p><button type="reset" class="btn btn-secondary">Clear filters</button><noscript><p>Search needs JavaScript. All resources are listed below.</p></noscript></form>`;}
function enhance(html,file){
  html=html.replace(/<link rel="alternate" type="text\/markdown" title="LLM index" href="https:\/\/agent-tune.com\/llms.txt"\s*\/?\s*>/g,'<link rel="help" type="text/markdown" title="Agent resource index" href="https://agent-tune.com/llms.txt" />');
  html=html.replace(/<link rel="alternate" type="text\/markdown" title="[^"]+" href="https:\/\/agent-tune.com\/llms-full.txt"\s*\/?\s*>/g,'<link rel="help" type="text/markdown" title="Agent installation documentation" href="https://agent-tune.com/llms-full.txt" />');
  if(/^(guides|research)\/.+\.html$/.test(file)&&!file.endsWith('/index.html')&&!html.includes('title="This article as Markdown"')) html=html.replace('</head>',`<link rel="alternate" type="text/markdown" title="This article as Markdown" href="https://agent-tune.com/${file.replace(/\.html$/,'.md')}" />\n</head>`);
  if(/^library\/[^/]+\/[^/]+\.html$/.test(file)){
    html=html.replace(/<div class="c-titlebar-label">(?!Read-only template · )/g,'<div class="c-titlebar-label">Read-only template · ');
    const install=/<section class="lib-v2-section lib-agents" id="install">[\s\S]*?<\/section>/.exec(html)?.[0];
    if(install){html=html.replace(install,'');html=html.replace('    <!-- THE EDITOR',install+'\n    <!-- THE EDITOR');}
    for(const [id,label] of Object.entries({demo:'Illustrative examples',tune:'Preferences explained',default:'Research context','talk-to':'Interpersonal examples','this-is-me':'Explaining your preferences',neighbors:'Related templates'})){
      const re=new RegExp('<section class="lib-v2-section" id="'+id+'">([\\s\\S]*?)</section>');
      const openAttr=(id==='demo'||id==='tune')?' open':'';
      html=html.replace(re,`<details class="lib-disclosure" id="${id}"${openAttr}><summary>${label}</summary><section class="lib-v2-section">$1</section></details>`);
    }
    html=html.replace(/<section class="lib-v2-jump"([\s\S]*?)<\/section>/,'<details class="lib-disclosure"><summary>Optional model shortcuts</summary><section class="lib-v2-jump"$1</section></details>');
    html=html.replace(/<a class="lib-v2-anchor" href="#install">Install<\/a>/,'').replace('<nav class="lib-v2-anchors" aria-label="Sections">','<nav class="lib-v2-anchors" aria-label="Sections"><a class="lib-v2-anchor is-active" href="#install">Use this template</a>');
    html=html.replace('is-file is-active','is-file');
    // Live navigation is handled centrally, avoiding observer races during anchor jumps.
    html=html.replace(/      const anchors = document.querySelectorAll\("\.lib-v2-anchor"\);[\s\S]*?sections.forEach\(function \(s\) \{ io.observe\(s\); \}\);\n      \}/,'');
  }
  if(file==='guides/index.html'&&!html.includes('data-resource-filter="guides"')){
    html=html.replace(/<span class="pill guides-section-label">([^<]+)<\/span>/g,'<h2 class="h-sub guides-section-label">$1</h2>');
    html=html.replace(/(<\/section>)/, '$1\n'+filter(false));
  }
  if(file==='library/index.html'&&!html.includes('data-resource-filter="library"')){
    html=html.replace(/<section class="library-stats"[\s\S]*?<\/section>\s*(?:<div class="divider"><\/div>)?/,'');
    html=html.replace(/(<\/section>)/,'$1\n'+filter(true));
  }
  if(file==='research.html'&&!html.includes('id="september-archive"'))html=html.replace('<!-- SEPTEMBER_RESEARCH_START -->','<details class="lib-disclosure" id="september-archive"><summary>Cohort archive: September 2026 5-model deep-dive &amp; methodology</summary><!-- SEPTEMBER_RESEARCH_START -->').replace('<!-- MAY 2026 ARCHIVE -->','</details><!-- MAY 2026 ARCHIVE -->');
  if(file==='research.html'&&!html.includes('id="may-archive"'))html=html.replace('<!-- MAY 2026 ARCHIVE -->','<details class="lib-disclosure" id="may-archive"><summary>May 2026 archive: earlier models and methods</summary><!-- MAY 2026 ARCHIVE -->').replace('<!-- ARTICLES -->','</details><!-- ARTICLES -->');
  if((/^(guides|research)\//.test(file) || file==='research.html') && file!=='guides/index.html' && !html.includes('class="article-toc"')){
    const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])), headings=[];
    html=html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g,(m,attrs,text)=>{
      let id=/\bid="([^"]+)"/.exec(attrs)?.[1];if(!id){let base=slug(text)||'section';id=base;for(let n=2;ids.has(id);n++)id=base+'-'+n;ids.add(id);attrs+=' id="'+id+'"';}headings.push({id,text:plain(text)});return '<h2'+attrs+'>'+text+'</h2>';
    });
    if(headings.length>=4){const openAttr=file==='research.html'?'':' open';const toc='<details class="article-toc"'+openAttr+'><summary>On this page</summary><nav aria-label="On this page"><ol>'+headings.map(h=>'<li><a href="#'+h.id+'">'+esc(h.text)+'</a></li>').join('')+'</ol></nav></details>';html=html.replace(/(<main[^>]*>[\s\S]*?<\/section>)/,'$1\n'+toc);}
  }
  if((file.startsWith('research/')||file==='research.html')&&!html.includes('id="instrument-correction"')){
    const note='<section id="instrument-correction" class="questionnaire-status" style="margin:32px 0 8px;padding:18px 20px;border:1px solid var(--border);border-radius:12px;background:var(--surface)"><p style="margin:0;font-size:14px;line-height:1.55;color:var(--muted)"><strong style="color:var(--ink)">Provenance &amp; scoring note:</strong> These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on <a href="/tests/">Tests</a> and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). <a href="/research/data/rights-migration.json">Read the provenance note</a>.</p></section>';
    html=html.replace('</main>',note+'\n</main>');
  }
  if(file.startsWith('research/')&&!html.includes('class="article-utility-bar"')){
    const route='/'+file.replace(/\.html$/,'');
    const bar='<div class="article-utility-bar" aria-label="Reader and agent quick actions"><span class="article-utility-label">Open Data &amp; Agent Access</span><div class="article-utility-actions"><a class="article-utility-btn" href="'+route+'.md">Markdown (.md)</a><a class="article-utility-btn" href="/research/data/november-2026-openrouter-summary.json">OpenRouter JSON</a><a class="article-utility-btn" href="/guides/mcp-server-ai-preferences-portable-tuning">MCP Config</a><a class="article-utility-btn is-accent" href="/library/">Apply a template →</a></div></div>';
    html=html.replace(/(<main[^>]*>[\s\S]*?<\/section>)/,m=>m.replace('</section>',bar+'\n</section>'));
  }
  return html.includes('src="/site-ui.js"')?html:html.replace('</body>','<script defer src="/site-ui.js"></script>\n</body>');
}
function markdown(html,url){
 let text=/<main\b[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1]||'';
 const blocks=[];
 const stash=s=>{const i=blocks.push(s)-1;return `\n\n@@BLOCK_${i}@@\n\n`;};
 text=text.replace(/<svg\b[^>]*class="[^"]*\bresearch-chart\b[^"]*"[^>]*>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>\s*<desc[^>]*>([\s\S]*?)<\/desc>[\s\S]*?<\/svg>/g,(_,t,d)=>stash('> **Chart — '+plain(t)+':** '+plain(d)))
  .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/g,'')
  .replace(/<details class="article-toc"[\s\S]*?<\/details>/g,'')
  .replace(/<aside class="model-compatibility"[\s\S]*?<\/aside>/g,'')
  .replace(/<span class="guide-related-kicker">([\s\S]*?)<\/span>/g,'$1: ')
  .replace(/<div class="guide-related">([\s\S]*?)<\/div>/g,(_,inner)=>'\n\n'+[...inner.matchAll(/<a\b[\s\S]*?<\/a>/g)].map(m=>'- '+m[0]).join('\n')+'\n\n')
  .replace(/<div\b[^>]*class="[^"]*\bguide-snippet\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g,(_,t)=>stash('```markdown\n'+plain(t)+'\n```'))
  .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g,(_,t)=>stash('```\n'+plain(t)+'\n```'))
  .replace(/<table\b[^>]*>([\s\S]*?)<\/table>/g,(_,tableHtml)=>{
    const capMatch=/<caption\b[^>]*>([\s\S]*?)<\/caption>/.exec(tableHtml);
    const caption=capMatch?`*${plain(capMatch[1])}*\n\n`:'';
    const rows=[...tableHtml.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(([,tr])=>
      [...tr.matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/g)].map(([,cell])=>
        cell.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(__,href,t)=>'['+plain(t)+']('+new URL(href.replace(/&amp;/g,'&'),url).href+')')
            .replace(/<[^>]*>/g,'').replace(/\s+/g,' ').replace(/\|/g,'\\|').trim()
      )
    ).filter(r=>r.length>0);
    if(!rows.length)return '';
    const cols=Math.max(...rows.map(r=>r.length));
    const pad=r=>'| '+Array.from({length:cols},(_,i)=>r[i]??'').join(' | ')+' |';
    const sep='| '+Array.from({length:cols},()=>'---').join(' | ')+' |';
    return stash(caption+[pad(rows[0]),sep,...rows.slice(1).map(pad)].join('\n'));
  })
  .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g,(_,n,t)=>'\n\n'+'#'.repeat(+n)+' '+plain(t)+'\n\n')
  .replace(/<summary[^>]*>([\s\S]*?)<\/summary>/g,(_,t)=>'\n\n### '+plain(t)+'\n\n')
  .replace(/<code[^>]*>([\s\S]*?)<\/code>/g,(_,t)=>'`'+plain(t)+'`')
  .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g,(_,t)=>'**'+plain(t)+'**')
  .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(_,href,t)=>'['+plain(t)+']('+new URL(href.replace(/&amp;/g,'&'),url).href+')')
  .replace(/<li[^>]*>/g,'\n- ')
  .replace(/<\/(?:p|section|div|ul|ol|summary|figure|figcaption|header|aside|article|details)>/g,'\n\n')
  .replace(/<br\s*\/?>/g,'\n')
  .replace(/<[^>]*>/g,'')
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/&nbsp;/g,' ')
  .replace(/^[ \t]+/gm,'')
  .replace(/[ \t]+\n/g,'\n')
  .replace(/\n{3,}/g,'\n\n')
  .replace(/@@BLOCK_(\d+)@@/g,(_,i)=>blocks[+i])
  .replace(/\n{3,}/g,'\n\n').trim();
 return `Source: ${url}\nFormat: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.\n\n${text}\n`;
}
module.exports={enhance,markdown};
