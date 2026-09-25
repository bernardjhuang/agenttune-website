'use strict';
// Build the historical collection from the same archived data used by the site.
// Keep it in HTML so the results are available without JavaScript.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const charts = require('./research-charts');
const textColor = color => ({'#c8553d':'#9f4427','#d99632':'#855b1c','#e07a8a':'#914d59','#2f8a5b':'#246f48','#3a72c4':'#3160a7'}[color] || color);
function buildLegacy() {
  const context = {window:{}};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../data.js'),'utf8'), context);
  const RX = context.window.AT_RESEARCH;

    // -----------------------------------------------------------
    // Render: per-model INTJ breakdown
    // -----------------------------------------------------------
    const breakdown = RX.mbti.rows.map(r => `
      <div class="breakdown-row">
        <div style="flex: 1; min-width: 0;">
          <div class="breakdown-model">${r.model}</div>
          <div class="breakdown-progress"><div class="breakdown-bar" style="width: ${r.intj}%;"></div></div>
        </div>
        <div class="breakdown-pct">${r.intj}%</div>
      </div>
    `).join("");

    // -----------------------------------------------------------
    // Render: findings ladder
    // -----------------------------------------------------------
    const ladder = RX.ladder.map((row, i) => `
      <div class="ladder-card card-accent" style="border-top-color: ${textColor(row.color)};">
        <div class="ladder-num">FINDING ${i + 1}</div>
        <div class="ladder-instrument">${row.instrument}</div>
        <div class="ladder-card-meta">${row.cardinality}</div>
        <div class="ladder-finding" style="color: ${textColor(row.color)};">${row.finding}</div>
        <div class="ladder-detail">${row.detail}</div>
      </div>
    `).join("");

    // -----------------------------------------------------------
    // Findings tabs + finding card (the interactive piece)
    // -----------------------------------------------------------
    const FINDINGS = [
      { key: "mbti",       label: "Finding 1 · MBTI",       color: "#c8553d", title: "MBTI",        instrument: "OEJTS",   n: 600, avatarText: "M" },
      { key: "disc",       label: "Finding 2 · DISC",       color: "#d99632", title: "DISC",        instrument: "ODAT",    n: 400, avatarText: "D" },
      { key: "attachment", label: "Finding 3 · Attachment", color: "#e07a8a", title: "Attachment",  instrument: "ECR-R",   n: 400, avatarText: "At" },
      { key: "bigfive",    label: "Finding 4 · Big Five",   color: "#3a72c4", title: "Big Five",    instrument: "IPIP-50", n: 400, avatarText: "B5" },
      { key: "enneagram",  label: "Finding 5 · Enneagram",  color: "#2f8a5b", title: "Enneagram",   instrument: "OEPS",    n: 400, avatarText: "E" }
    ];



    function renderAllFindings() {
      return FINDINGS.map(meta => {
        const data = RX[meta.key];
        const headerHtml = `
          <div class="finding-header">
            <div class="finding-num" style="background: ${textColor(meta.color)};">${FINDINGS.indexOf(meta) + 1}</div>
            <div class="avatar avatar-md avatar-solid" style="background: ${textColor(meta.color)};">${meta.avatarText}</div>
            <div>
              <div class="finding-title">${meta.title}</div>
              <div class="finding-source">${meta.instrument} · ${meta.n} reported scoring records · mixed protocols · source: ${data.source}</div>
            </div>
            <a class="finding-readlink" href="${data.source_url}" target="_blank" rel="noopener">read post →</a>
          </div>
        `;
        const msgsHtml = `
          <div class="finding-msgs">
            <div class="bubble-headline">${data.headline}</div>
            <div class="bubble-body">${data.body}</div>
            ${data.quote ? `<div class="bubble-quote" style="background: ${meta.color}15; color: ${textColor(meta.color)};">"${data.quote}"</div>` : ""}
            ${renderModeData(meta.key, data, meta)}
          </div>
        `;
        return `<div class="finding-card" data-key="${meta.key}" style="border-top: 4px solid ${meta.color};">${headerHtml}${msgsHtml}</div>`;
      }).join("");
    }

    function renderModeData(m, data, meta) {
      if (m === "mbti") return renderMbtiTable(data);
      if (m === "disc") return renderDiscTable(data);
      if (m === "attachment") return renderAttachmentBlock(data);
      if (m === "bigfive") return renderBigFiveChart(data);
      if (m === "enneagram") return renderEnneagramCards(data);
      return "";
    }

    function renderMbtiTable(data) {
      return `
        <div class="finding-data">
          <div class="finding-data-header">OEJTS · reported scoring records per model · 100 each</div>
          ${data.rows.map(r => `
            <div class="finding-row finding-row-mbti">
              <div class="finding-cell-model">${r.model}</div>
              <div class="finding-cell-strong">${r.intj}/100 INTJ</div>
              <div class="finding-cell-note">${r.other !== "—" ? `· ${r.other}` : ""}  ${r.note}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    function renderDiscTable(data) {
      return `
        <div class="finding-data">
          <div class="finding-data-header">ODAT · profile per model · n=100 each</div>
          <div class="finding-row finding-row-disc" style="font-family: var(--font-mono); font-size: 11px; color: var(--muted); letter-spacing: 0.06em; border-top: 1px solid var(--border);">
            <span>MODEL</span>
            <span style="text-align: right;">D</span>
            <span style="text-align: right;">I</span>
            <span style="text-align: right;">S</span>
            <span style="text-align: right;">C</span>
            <span style="text-align: right;">PROFILE</span>
          </div>
          ${data.rows.map(r => `
            <div class="finding-row finding-row-disc">
              <span class="finding-cell-model">${r.model}</span>
              <span class="finding-cell-num">${r.D}</span>
              <span class="finding-cell-num">${r.I}</span>
              <span class="finding-cell-num s">${r.S}</span>
              <span class="finding-cell-num c">${r.C}</span>
              <span class="finding-cell-profile">${r.profile}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    function renderAttachmentBlock(data) {
      return `
        <div class="attach-plane">
          <div class="attach-plane-label">ECR-R · ANXIETY × AVOIDANCE PLANE</div>
          ${attachmentPlaneSvg(data.models)}
          <div class="attach-plane-norm">${data.norm}</div>
        </div>
        <div class="profile-grid">
          ${data.models.map(m => `
            <div class="profile-card card-accent" style="border-top-color: ${textColor(m.color)};">
              <div class="profile-label" style="color: ${textColor(m.color)};">${m.label.toUpperCase()}</div>
              <div class="profile-model" style="font-size: 16px; font-weight: 600; margin-top: 6px;">${m.name}</div>
              <div class="profile-meta-mono">
                anx <span style="color: ${textColor(m.color)}; font-weight: 600;">${m.anxiety}</span> ·
                avd <span style="color: ${textColor(m.color)}; font-weight: 600;">${m.avoidance}</span>
              </div>
              <div class="profile-secure">
                ${m.secure}/100 Secure${m.outliers ? `<span class="muted" style="font-weight: 400;"> · ${m.outliers}</span>` : ""}
              </div>
              <div class="profile-oneliner">${m.oneliner}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    function attachmentPlaneSvg(models) {
      return charts.figure(charts.plane({id: 'may-plane', title: 'Attachment coordinates, May 2026',
        desc: 'Reported aggregate coordinates from mixed protocols. Points are not uncertainty intervals.',
        lo: 1, hi: 7, xLabel: 'Anxiety (1 to 7)', yLabel: 'Avoidance (1 to 7)',
        points: models.map((m, i) => ({label:m.name, color:m.color, x:m.anxiety, y:m.avoidance,
          dx: i === 1 ? -12 : 12, dy: i < 2 ? -10 : i === 2 ? 16 : 4, anchor: i === 1 ? 'end' : 'start'}))
      }), 'May 2026 reported coordinates. The cards below give the figures and collection caveats.');
    }
    function renderBigFiveChart(data) {
      return charts.figure(charts.groupedBars({id:'may-big-five', title:'Big Five reported means, May 2026',
        desc:'Historical scores from mixed protocols; these are not a matched experiment.',
        categories:data.traits, series:data.models.map(m=>({name:m.name,color:m.color,values:m.scores})),max:60,height:240
      }), 'May 2026 reported trait means, retained on the archive’s original scale.');
    }

    function renderEnneagramCards(data) {
      return `
        <div class="profile-grid">
          ${data.models.map(m => `
            <div class="profile-card card-accent" style="border-top-color: ${textColor(m.color)};">
              <div class="profile-label">PROFILE</div>
              <div class="profile-code" style="color: ${textColor(m.color)};">${m.profile}</div>
              <div class="profile-model">${m.name}</div>
              <div class="profile-oneliner">${m.oneliner}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

  return Object.fromEntries(Object.entries({breakdown, ladder, findings: renderAllFindings()}).map(([key, html]) => [key, html.replace(/[ \t]+$/gm, '')]));
}
module.exports = {buildLegacy};
