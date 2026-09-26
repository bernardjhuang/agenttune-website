'use strict';
const {catalog}=require('./build-tools');
function navigation(route){
const link=(href,label,extra='')=>`<a href="${href}"${route===href?' aria-current="page"':''}${extra}>${label}</a>`;
return `<nav class="nav" aria-label="Primary"><a class="brand" href="/"><span class="brand-dot" aria-hidden="true"></span><span>AgentTune</span></a><div class="nav-links">${link('/library/','Library')}${link('/tests/','Tests')}${link('/research','Research')}${link('/guides/','Guides')}<details class="nav-tools"><summary>Tools</summary><div class="nav-tool-list">${link('/tools/','All free tools →')}${catalog.tools.map(t=>link(new URL(t.url).pathname,t.name)).join('')}${link('/tools/custom-instructions-generator','Instructions generator')}${link('/tools/claude-md-generator','CLAUDE.md generator')}</div></details>${link('https://github.com/bernardjhuang/agenttune','GitHub ↗',' class="github" target="_blank" rel="noopener"')}</div></nav>`;
}
function applyNavigation(html,route){if(!/<nav\b[^>]*class="nav"/.test(html))return html;let out=html.replace(/<nav\b[^>]*class="nav"[^>]*>[\s\S]*?<\/nav>/,navigation(route));if(!out.includes('src="/resources/tools/navigation.js'))out=out.replace('</head>','<link rel="stylesheet" href="/resources/tools/navigation.css"><script defer src="/resources/tools/navigation.js"></script></head>');return out;}
module.exports={navigation,applyNavigation};
