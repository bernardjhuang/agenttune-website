/* Per-type context sections for the library pages.
 *
 * Two sections that only this type's page can have:
 *   defaultGap()  — how this type sits against the personality the models ship
 *                   with. Every number is read from AT_RESEARCH in data.js, so
 *                   the copy stays in sync with /research.
 *   neighbors()   — the closest tunings and what their first rule changes.
 *
 * Both return { h2, lede, html } with h2/html already safe to inline.
 * Hand-written lines live in the tables below; edit them here, then run
 *   node tools/generate-library.js
 */
"use strict";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const range = (nums, digits = 0) => {
  const lo = Math.min(...nums), hi = Math.max(...nums);
  const f = (n) => n.toFixed(digits).replace(/\.0+$/, "");
  return lo === hi ? f(lo) : `${f(lo)}–${f(hi)}`;
};
const listAnd = (arr) => (arr.length <= 1 ? arr.join("") : arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1]);
const NUM = ["none", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// Model questionnaires supply exploratory context, not a validated baseline.
function defaultGap(c, research) {
  const notes = {
    mbti: 'The MBTI source lists 597 INTJ labels in 600 scoring records. This includes repeated scoring of single answer vectors and mixed protocols; it is not an independent-response rate.',
    enneagram: 'The reported Enneagram pairs are highest and second-highest scores, not standard adjacent wings. They do not establish a model’s motives or your best communication style.',
    disc: 'The DISC report lists four CS profiles. Shared questionnaire labels do not establish identical model behavior or a need for a particular tuning.',
    attachment: 'The attachment report lists 397 Secure labels in 400 scoring records. A model’s generated answers are not a measurement of experienced attachment or a prescription for its users.',
    ocean: 'The Big Five report lists overlapping and differing trait scores. Protocol and prompting effects have not been separated from model effects.'
  };
  if (!notes[c.system]) return null;
  return {
    lede: notes[c.system],
    html: '<p class="lib-ctx-source">Treat this ' + esc(c.code) + ' template as a starting hypothesis rather than a validated baseline—compare the same real task with and without it (<a href="/research#methodology">methodology &amp; limits</a>).</p>'
  };
}

// ---------- Neighbors ----------
function styleSentences(tuningBody) {
  const m = tuningBody.match(/^## Communication style\s*\n+([^\n]+)/m);
  if (!m) return [];
  return m[1].trim().split(/(?<=\.)\s+/).map((s) => s.trim().replace(/\.$/, "")).filter(Boolean);
}

function firstRule(tuningBody) {
  return styleSentences(tuningBody)[0] || "";
}

function secondRule(tuningBody) {
  return styleSentences(tuningBody)[1] || "";
}

function mbtiNeighbors(c, contacts) {
  const flip = { E: "I", I: "E", S: "N", N: "S", T: "F", F: "T", J: "P", P: "J" };
  return c.code.split("").map((ch, i) => {
    const code = c.code.slice(0, i) + flip[ch] + c.code.slice(i + 1);
    const n = contacts.find((x) => x.system === "mbti" && x.code === code);
    return n ? { c: n, why: `${flip[ch]} instead of ${ch}` } : null;
  }).filter(Boolean);
}

function neighbors(c, contacts, related, helpers) {
  let list;
  if (c.system === "mbti") {
    list = mbtiNeighbors(c, contacts);
  } else if (c.system === "enneagram") {
    list = related.slice(0, 2).map((n) => ({ c: n, why: "a wing" }));
  } else if (c.system === "ocean") {
    const letter = c.code.split("-")[0];
    list = related.slice(0, 3).map((n) => ({ c: n, why: n.code.startsWith(letter) ? "the opposite pole" : "" }));
  } else {
    list = related.slice(0, 3).map((n) => ({ c: n, why: "" }));
  }
  if (!list.length) return null;
  const own = firstRule(helpers.bodyOf(c));
  const items = list.map(({ c: n, why }) => {
    const extra = secondRule(helpers.bodyOf(n));
    const label = helpers.labelOf(n);
    return `        <li><a href="${helpers.routeOf(n)}"><strong>${esc(label)}</strong></a>${why ? ` <span class="lib-ctx-why">${esc(why)}</span>` : "."} ${esc(n.blurb)}${extra ? ` Also: <em>${esc(extra)}</em>.` : ""}</li>`;
  }).join("\n");
  return {
    lede: `A type is a starting hypothesis. This file opens with <em>${esc(own)}</em>. If that is close but not right, these are the next ones to try.`,
    html: `<ul class="lib-ctx-list lib-ctx-neighbors">\n${items}\n      </ul>`
  };
}

// ---------- Where to go next (per framework) ----------
const TEST_FOR = {
  mbti: { href: "/tests/mbti", label: "free MBTI test" },
  enneagram: { href: "/tests/enneagram", label: "free Enneagram test" },
  disc: { href: "/tests/disc", label: "free DISC test" },
  attachment: { href: "/tests/attachment", label: "free attachment-style test" },
  ocean: { href: "/tests/big-five", label: "free Big Five test" }
};
const FRAMEWORK_GUIDE = {
  mbti: { href: "/guides/chatgpt-custom-instructions-by-personality-type", label: "ChatGPT custom instructions for all 16 MBTI types" },
  enneagram: { href: "/guides/enneagram-ai-prompts", label: "Enneagram AI prompts for all nine types" },
  ocean: { href: "/guides/mbti-vs-big-five-for-ai", label: "MBTI vs Big Five: which works better for AI" },
  disc: { href: "/guides/disc-ai-prompts", label: "DISC AI prompts for all four workplace styles" },
  attachment: { href: "/guides/how-to-give-your-ai-a-personality", label: "How to give your AI a personality" }
};

module.exports = { defaultGap, neighbors, TEST_FOR, FRAMEWORK_GUIDE };
