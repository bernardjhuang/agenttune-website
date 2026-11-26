'use strict';
const {catalog}=require('./build-tools');
function navigation(route){
const isActive=href=>route===href;
const isSection=href=>href!=='/'&&href!=='/tools/'&&!isActive(href)&&route.startsWith(href);
const link=(href,label,extra='')=>{const aria=isActive(href)?' aria-current="page"':(isSection(href)?' class="is-section"':'');return `<a href="${href}"${aria}${extra}>${label}</a>`;};
const BRAND_MARK='<svg class="brand-mark" width="20" height="20" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M19 10v20c0 7.2 5.6 12.5 13 12.5S45 37.2 45 30V10" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="square"/><line x1="32" y1="42.5" x2="32" y2="55" stroke="currentColor" stroke-width="7" stroke-linecap="square"/><circle cx="32" cy="20" r="6.5" fill="var(--accent, #9c3b1f)"/></svg>';
return `<nav class="nav" aria-label="Primary"><a class="brand" href="/">${BRAND_MARK}<span>AgentTune</span><span class="brand-issue" aria-hidden="true">AI Psychology Press</span></a><div class="nav-links">${link('/library/','Library')}${link('/tests/','Tests')}${link('/research','Research')}${link('/guides/','Guides')}<details class="nav-tools"><summary>Tools</summary><div class="nav-tool-list">${link('/tools/','All free tools →')}${catalog.tools.map(t=>link(new URL(t.url).pathname,t.name)).join('')}${link('/tools/custom-instructions-generator','Instructions generator')}${link('/tools/claude-md-generator','CLAUDE.md generator')}</div></details>${link('https://github.com/bernardjhuang/agenttune','GitHub ↗',' class="github" target="_blank" rel="noopener"')}</div></nav>`;
}
function applyNavigation(html,route){if(!/<nav\b[^>]*class="nav"/.test(html))return html;let out=html.replace(/<nav\b[^>]*class="nav"[^>]*>[\s\S]*?<\/nav>/,navigation(route));if(!out.includes('src="/resources/tools/navigation.js'))out=out.replace('</head>','<link rel="stylesheet" href="/resources/tools/navigation.css"><script defer src="/resources/tools/navigation.js"></script></head>');return out;}
module.exports={navigation,applyNavigation};
