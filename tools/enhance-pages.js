// Build-time enhancements keep navigation and disclosure content crawlable without JS.
const NAMED_ENTITIES={lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',le:'\u2264',ge:'\u2265',mdash:'\u2014',ndash:'\u2013',times:'\u00d7',plusmn:'\u00b1',rarr:'\u2192',larr:'\u2190',hellip:'\u2026',middot:'\u00b7',ne:'\u2260',approx:'\u2248'};
const decodeEntities=s=>String(s).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([0-9a-fA-F]+);/g,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&([a-zA-Z]+);/g,(m,k)=>k==='amp'?m:(NAMED_ENTITIES[k]??m)).replace(/&amp;/g,'&');
const plain=s=>decodeEntities(String(s).replace(/<[^>]*>/g,'')).trim();
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const slug=s=>plain(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function filter(library){return `<form class="resource-filter" role="search" data-resource-filter="${library?'library':'guides'}"><div class="resource-filter-controls"><label for="resource-query">Search ${library?'templates':'guides'}<input id="resource-query" type="search" placeholder="${library?'e.g. concise, ENTP, openness':'e.g. Muse, setup, React'}"></label><label for="resource-app">${library?'Personality system':'App'}<select id="resource-app"><option value="">All ${library?'systems':'apps'}</option>${(library?['mbti','enneagram','disc','attachment','ocean']:['chatgpt','claude','muse','grok','gemini','coding']).map(v=>`<option value="${v}">${v==='chatgpt'?'ChatGPT':v==='ocean'?'Big Five':v==='mbti'?'MBTI':v==='disc'?'DISC':v[0].toUpperCase()+v.slice(1)}</option>`).join('')}</select></label>${library?'':`<label for="resource-kind">Task or resource<select id="resource-kind"><option value="">All resources</option><option value="setup">Set up my app</option><option value="template">Find a template</option><option value="developer">Build an integration</option><option value="research">Read research</option><option value="protocol">Test a preference</option></select></label>`}</div><p role="status" data-filter-status></p><button type="reset" class="btn btn-secondary">Clear filters</button><noscript><p>Search needs JavaScript. All resources are listed below.</p></noscript></form>`;}
function enhance(html,file){
  html=html.replace(/<link rel="alternate" type="text\/markdown" title="LLM index" href="https:\/\/agent-tune\.com\/llms\.txt"\s*\/?\s*>/g,'<link rel="help" type="text/markdown" title="Agent resource index" href="https://agent-tune.com/llms.txt" />');
  html=html.replace(/<link rel="alternate" type="text\/markdown" title="[^"]+" href="https:\/\/agent-tune\.com\/llms-full\.txt"\s*\/?\s*>/g,'<link rel="help" type="text/markdown" title="Agent installation documentation" href="https://agent-tune.com/llms-full.txt" />');
  if(!html.includes('href="https://agent-tune.com/llms.txt"')&&html.includes('</head>')) html=html.replace('</head>','  <link rel="help" type="text/markdown" title="Agent resource index" href="https://agent-tune.com/llms.txt" />\n</head>');
  const seenAltMd=new Set();
  html=html.replace(/[ \t]*<link\b[^>]*rel="alternate"[^>]*type="text\/markdown"[^>]*>\n?/gi,tag=>{
    const href=/href="([^"]+)"/i.exec(tag)?.[1]||'';
    if(seenAltMd.has(href))return '';
    seenAltMd.add(href);
    return tag;
  });
  const hasAltMd=/<link\b[^>]*rel="alternate"[^>]*type="text\/markdown"/i.test(html);
  if(!hasAltMd&&html.includes('</head>')){
    if(/^(guides|research)\/.+\.html$/.test(file)&&!file.endsWith('/index.html')) html=html.replace('</head>',`<link rel="alternate" type="text/markdown" title="This article as Markdown" href="https://agent-tune.com/${file.replace(/\.html$/,'.md')}" />\n</head>`);
    else if(file==='research.html') html=html.replace('</head>','<link rel="alternate" type="text/markdown" title="Research synthesis as Markdown" href="https://agent-tune.com/research.md" />\n</head>');
    else if(/^tests\/(?!index\.html$)[^/]+\.html$/.test(file)) html=html.replace('</head>',`<link rel="alternate" type="text/markdown" title="Questionnaire specification as Markdown" href="https://agent-tune.com/${file.replace(/\.html$/,'.md')}" />\n</head>`);
  }
  if(/^research\/(?!index\.html$).+\.html$/.test(file)&&!html.includes('name="citation_title"')&&html.includes('</head>')){
    const citeTitle=plain((/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)||[])[1]||(/<title>([\s\S]*?)<\/title>/.exec(html)||[])[1]||'').replace(/\.$/,'').replace(/\s*[|—·]\s*AgentTune.*$/i,'').trim();
    const rawDate=(/<meta property="article:published_time" content="(\d{4}-\d{2}-\d{2})"/.exec(html)||/"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})"/.exec(html)||/<time datetime="(\d{4}-\d{2}-\d{2})"/.exec(html)||[])[1]||'2026-11-26';
    const pubUrl=(/<link rel="canonical" href="([^"]+)"/.exec(html)||[])[1]||`https://agent-tune.com/${file.replace(/\.html$/,'')}`;
    if(citeTitle){
      const scholarMeta=`  <meta name="citation_title" content="${esc(citeTitle)}" />\n  <meta name="citation_author" content="Bernard Huang" />\n  <meta name="citation_publication_date" content="${esc(rawDate.replace(/-/g,'/'))}" />\n  <meta name="citation_journal_title" content="AgentTune AI Psychology Press" />\n  <meta name="citation_public_url" content="${esc(pubUrl)}" />\n`;
      html=html.replace('</head>',scholarMeta+'</head>');
    }
  }
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
    if(headings.length>=4){
      const openAttr=(file==='research.html'||!/^(guides|research)\//.test(file))?'':' open';
      const toc='<details class="article-toc"'+openAttr+'><summary>On this page</summary><nav aria-label="On this page"><ol>'+headings.map(h=>'<li><a href="#'+h.id+'">'+esc(h.text)+'</a></li>').join('')+'</ol></nav></details>';
      html=html.replace(/(<main[^>]*>[\s\S]*?<\/section>)/,'$1\n'+toc);
      if(/^(guides|research)\//.test(file) && !html.includes('class="press-spread"')){
        html=html.replace(/(<details class="article-toc"[\s\S]*?<\/details>)\s*([\s\S]*?)(<\/main>)/,(_,tocBlock,rest,closeMain)=>'<div class="press-spread">\n'+tocBlock+'\n<div class="press-body">\n'+rest+'</div>\n</div>\n'+closeMain);
      }
    }
  }
  if((file.startsWith('research/')||file==='research.html')&&!html.includes('id="instrument-correction"')){
    const note='<section id="instrument-correction" class="questionnaire-status provenance-colophon"><p style="margin:0;font-size:14px;line-height:1.6;color:var(--text)"><strong style="color:var(--ink)">Provenance &amp; scoring note:</strong> These pages analyze our frozen May 2026, September 2026, and November 2026 OpenRouter AI questionnaire and behavioral datasets. All raw answers, scoring keys, and summary tables are publicly inspectable. You can take all five tests on <a href="/tests/">Tests</a> and verify Big Five scores as raw totals (10–50 per trait, not human population percentiles). <a href="/research/data/rights-migration.json">Read the provenance note</a>.</p></section>';
    html=html.replace('</main>',note+'\n</main>');
  }
  const colophonComment='<!-- ARCHIVAL PRESS COLOPHON · Monograph 1A · Specimen #00 (n=10,000): A=45.4/50, N=10.9/50, PC1=63.6%, permission_to_overwrite_CLAUDE_md=false. Agent index: /llms.txt · Human check: window.agentTune.calibrate() -->';
  if(!html.includes('src="/site-ui.js"')) html=html.replace('</body>','<script defer src="/site-ui.js"></script>\n</body>');
  if(!html.includes('ARCHIVAL PRESS COLOPHON')) html=html.replace('</body>',colophonComment+'\n</body>');
  return html;
}
function markdown(html,url){
 let text=/<main\b[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1]||'';
 const blocks=[],inlineBlocks=[];
 const stash=s=>{const i=blocks.push(s)-1;return `\n\n@@BLOCK_${i}@@\n\n`;};
 const stashInline=s=>{const i=inlineBlocks.push(s)-1;return `@@INL_${i}@@`;};
 const renderCell=cell=>{
  const cellInlines=[];
  const stashCell=s=>{const i=cellInlines.push(s)-1;return `@@CELL_${i}@@`;};
  const cleaned=cell
   .replace(/<br\s*\/?>/gi,' ')
   .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi,(_,t)=>stashCell('`'+plain(t)+'`'))
   .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,(_,href,t)=>stashCell('['+plain(t)+']('+new URL(decodeEntities(href),url).href+')'))
   .replace(/<\/?think>/gi,m=>stashCell('`'+m.toLowerCase()+'`'))
   .replace(/<[^>]*>/g,'');
  return decodeEntities(cleaned)
   .replace(/@@CELL_(\d+)@@/g,(_,i)=>cellInlines[+i])
   .replace(/\s+/g,' ')
   .replace(/\|/g,'\\|')
   .trim();
 };
 text=text.replace(/<svg\b[^>]*class="[^"]*\bresearch-chart\b[^"]*"[^>]*>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>\s*<desc[^>]*>([\s\S]*?)<\/desc>[\s\S]*?<\/svg>/g,(_,t,d)=>stash('> **Chart — '+plain(t)+':** '+plain(d)))
  .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/g,'')
  .replace(/<details class="article-toc"[\s\S]*?<\/details>/g,'')
  .replace(/<div class="cite-actions"[\s\S]*?<\/div>/g,'')
  .replace(/<aside class="model-compatibility"[\s\S]*?<\/aside>/g,'')
  .replace(/<span class="guide-related-kicker">([\s\S]*?)<\/span>/g,'$1: ')
  .replace(/<div class="guide-related">([\s\S]*?)<\/div>/g,(_,inner)=>'\n\n'+[...inner.matchAll(/<a\b[\s\S]*?<\/a>/g)].map(m=>'- '+m[0]).join('\n')+'\n\n')
  .replace(/<div\b[^>]*class="[^"]*\bguide-snippet\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g,(_,t)=>stash('```markdown\n'+plain(t)+'\n```'))
  .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g,(_,t)=>stash('```\n'+plain(t)+'\n```'))
  .replace(/<table\b[^>]*>([\s\S]*?)<\/table>/g,(_,tableHtml)=>{
    const capMatch=/<caption\b[^>]*>([\s\S]*?)<\/caption>/.exec(tableHtml);
    const caption=capMatch?`*${plain(capMatch[1])}*\n\n`:'';
    const rows=[...tableHtml.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(([,tr])=>
      [...tr.matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/g)].map(([,cell])=>renderCell(cell))
    ).filter(r=>r.length>0);
    if(!rows.length)return '';
    const cols=Math.max(...rows.map(r=>r.length));
    const pad=r=>'| '+Array.from({length:cols},(_,i)=>r[i]??'').join(' | ')+' |';
    const sep='| '+Array.from({length:cols},()=>'---').join(' | ')+' |';
    return stash(caption+[pad(rows[0]),sep,...rows.slice(1).map(pad)].join('\n'));
  })
  .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g,(_,n,t)=>'\n\n'+'#'.repeat(+n)+' '+plain(t)+'\n\n')
  .replace(/<summary[^>]*>([\s\S]*?)<\/summary>/g,(_,t)=>'\n\n### '+plain(t).replace(/\s*[—–-]\s*(?:expand|click) to (?:copy|expand)(?=\)|$)/i,'')+'\n\n')
  .replace(/<code[^>]*>([\s\S]*?)<\/code>/g,(_,t)=>stashInline('`'+plain(t)+'`'))
  .replace(/<\/?think>/gi,m=>stashInline('`'+m.toLowerCase()+'`'))
  .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g,(_,t)=>'**'+plain(t)+'**')
  .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,(_,href,t)=>'['+plain(t)+']('+new URL(decodeEntities(href),url).href+')')
  .replace(/<li[^>]*>/g,'\n- ')
  .replace(/<\/(?:p|section|div|ul|ol|summary|figure|figcaption|header|aside|article|details|nav)>/g,'\n\n')
  .replace(/<br\s*\/?>/g,'\n')
  .replace(/<[^>]*>/g,'');
 text=decodeEntities(text)
  .replace(/@@INL_(\d+)@@/g,(_,i)=>inlineBlocks[+i])
  .replace(/^[ \t]+/gm,'')
  .replace(/[ \t]+\n/g,'\n')
  .replace(/\n{3,}/g,'\n\n')
  .replace(/@@BLOCK_(\d+)@@/g,(_,i)=>blocks[+i])
  .replace(/\n{3,}/g,'\n\n').trim();
 return `Source: ${url}\nFormat: page-specific Markdown. Tables preserve row order; interactive controls are available on the source page.\n\n${text}\n`;
}
module.exports={enhance,markdown,plain,decodeEntities};
