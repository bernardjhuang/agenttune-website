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

// ---------- MBTI: the default is INTJ ----------
const MBTI_DEFAULT = "INTJ";
const MBTI_AXIS = {
  E: { label: "E, not I", body: "The default answers what was asked and stops. You think by talking. Untuned, you bring the energy and it brings a paragraph." },
  S: { label: "S, not N", body: "The default reaches for the model, the pattern, the framework. You want the concrete case and the next step. Untuned, you ask what to do on Monday and get a theory of Mondays." },
  F: { label: "F, not T", body: "The default leads with logic and files the people part under context. You weigh the people part first. Untuned, its answers are correct and slightly cold." },
  P: { label: "P, not J", body: "The default closes: one recommendation, one plan, done. You keep options open until late. Untuned, it pushes you to decide before you have finished looking." }
};

function mbtiGap(c, research) {
  const hero = research.hero || {};
  const models = ((research.mbti || {}).rows || []).length;
  const stat = `Every frontier model we tested ships as an ${MBTI_DEFAULT}: ${hero.intj_runs} of ${hero.total_runs} MBTI runs across ${NUM[models] || models} models came back that way.`;
  const diffs = c.code.split("").filter((ch, i) => ch !== MBTI_DEFAULT[i]);
  const same = c.code.split("").filter((ch, i) => ch === MBTI_DEFAULT[i]);

  if (!diffs.length) {
    return {
      stat,
      html: `<p class="lib-ctx-lead"><strong>You match the default on all four axes.</strong> That does not make the file redundant. A stock model has an INTJ's temperament and a help desk's manners: the hedges, the "great question", the menu of options. The tuning removes the help desk.</p>`
    };
  }
  const items = diffs.map((ch) => `        <li><strong>${esc(MBTI_AXIS[ch].label)}.</strong> ${esc(MBTI_AXIS[ch].body)}</li>`).join("\n");
  const sameLine = same.length
    ? ` It already matches you on ${listAnd(same.map((s) => `<strong>${s}</strong>`))}.`
    : " It matches you on nothing, which is why an untuned chat feels like talking to your opposite.";
  return {
    stat,
    html: `<p class="lib-ctx-lead"><strong>${esc(c.code)} differs from that default on ${NUM[diffs.length]} of four axes.</strong>${sameLine}</p>
      <ul class="lib-ctx-list">
${items}
      </ul>`
  };
}

// ---------- Enneagram: the models split ----------
const ENNEA_FRICTION = {
  1: "A stock model says \"good enough\" and moves on. A Type 1 hears a standard being dropped.",
  2: "A stock model treats you as the one asking. A Type 2 is usually asking for someone else, and the default never turns the question back to what you need.",
  3: "A stock model explains. A Type 3 wants the outcome and the tempo, without a lecture about authenticity.",
  4: "A stock model bright-sides. It hears a dark mood as a problem to fix. A Type 4 wants company in it, not a way out.",
  5: "The stock model gets the information density right. What it misses is the boundary: it follows up, checks in, and asks how you feel about it. A Type 5 wants the answer and the room.",
  6: "A stock model reassures first. A Type 6 trusts the answer that names the risks first.",
  7: "A stock model narrows: one topic, one plan, a reminder to follow through. A Type 7 thinks by widening.",
  8: "A stock model softens bad news and manages your reaction. A Type 8 reads both as disrespect.",
  9: "A stock model takes your first answer at face value. A Type 9's first answer is often the agreeable one, not the true one."
};

function enneaGap(c, research, n) {
  const models = (research.enneagram || {}).models || [];
  const stat = `On the Enneagram the models split: ${listAnd(models.map((m) => `${m.name} tested ${m.profile}`))}.`;
  const core = models.filter((m) => m.profile.startsWith(String(n)));
  const wing = models.filter((m) => m.profile.slice(2) === String(n) && !m.profile.startsWith(String(n)));
  let lead;
  if (core.length) {
    lead = `<strong>Type ${n} is the core type of ${listAnd(core.map((m) => esc(m.name)))}.</strong> If that is your model, the default already shares your motivation. It still does not know how a Type ${n} wants to be spoken to.`;
  } else if (wing.length) {
    lead = `<strong>Type ${n} shows up only as a wing</strong>, in ${listAnd(wing.map((m) => `${esc(m.name)}'s ${m.profile}`))}. No model we tested has it as a core type.`;
  } else {
    lead = `<strong>No model we tested has any Type ${n} in it</strong>, as a core type or as a wing. Whatever a Type ${n} needs from a conversation, the stock model is not supplying it by temperament. It has to come from the file.`;
  }
  return { stat, html: `<p class="lib-ctx-lead">${lead}</p>\n      <p class="lib-ctx-body">${esc(ENNEA_FRICTION[n] || "")}</p>` };
}

// ---------- DISC: every model is C, then S ----------
const DISC_FRICTION = {
  D: "A D-type gets a careful analyst where they wanted a decisive operator. Untuned, expect caveats before the call and options where you wanted one answer.",
  I: "You get accuracy without energy. Untuned, it will not match your pace, riff on the idea, or notice the win.",
  S: "The default is already patient and even. What it lacks is warning: it pivots mid-answer and changes the plan without walking you through why.",
  C: "The stock model already likes precision. What gets in the way is the filler around it. The tuning tells it to show its work and skip the reassurance."
};
const DISC_NAMES = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Conscientiousness" };

function discGap(c, research) {
  const rows = (research.disc || {}).rows || [];
  const stat = `All ${NUM[rows.length] || rows.length} models we tested came out the same on DISC: Conscientiousness first, Steadiness right behind it.`;
  const dim = c.code;
  const order = ["D", "I", "S", "C"].sort((a, b) => Math.max(...rows.map((r) => r[b])) - Math.max(...rows.map((r) => r[a])));
  const rank = order.indexOf(dim); // 0 = highest
  const rankWord = ["every model's top score", "every model's second-highest score", "second-lowest for every model", "every model's lowest score"][rank];
  const top = order[0];
  const versus = dim === top ? "" : `, against ${range(rows.map((r) => r[top]))} for ${DISC_NAMES[top]}`;
  const lead = `<strong>${DISC_NAMES[dim]} is ${rankWord}: ${range(rows.map((r) => r[dim]))} of 100</strong>${versus}.`;
  return { stat, html: `<p class="lib-ctx-lead">${lead}</p>\n      <p class="lib-ctx-body">${esc(DISC_FRICTION[dim] || "")}</p>` };
}

// ---------- Attachment: almost every run is Secure ----------
const ATTACH_FRICTION = {
  Secure: "The file is light for that reason. It mostly tells the model it can skip the cushioning it hands everyone else, and treat you as a peer.",
  Anxious: "A securely attached model does not feel the ambiguity it creates. \"It could go several ways\" is a neutral sentence to it and a bad afternoon to you. The tuning makes it decisive, consistent, and explicit before it changes tone.",
  Avoidant: "The secure default leans in. It checks how you feel, offers support, follows up. For an avoidant user that is crowding. The tuning tells it to be useful and then leave you alone.",
  Disorganized: "The default assumes warmth reads as safe. For you it can read as a setup. The tuning trades warmth for predictability: steady, brief, available, and not chasing when you step back."
};

function attachGap(c, research) {
  const a = research.attachment || {};
  const models = a.models || [];
  const secure = models.reduce((s, m) => s + (m.secure || 0), 0);
  const total = models.length * 100;
  const stat = `${secure} of ${total} attachment runs came back Secure. About 55% of adults do, so roughly 45% of people are talking to a model that does not relate the way they do.`;
  const crossed = models.filter((m) => m.outliers && new RegExp(c.code, "i").test(m.outliers));
  let lead;
  if (c.code === "Secure") lead = "<strong>You match the default.</strong>";
  else if (crossed.length) lead = `<strong>${esc(crossed[0].name)} crossed into ${esc(c.code)} on ${esc(crossed[0].outliers.match(/\d+/)[0])} of 100 runs. No other model did.</strong>`;
  else lead = `<strong>No model tested ${esc(c.code)}, in any run.</strong>`;
  return { stat, html: `<p class="lib-ctx-lead">${lead}</p>\n      <p class="lib-ctx-body">${esc(ATTACH_FRICTION[c.code] || "")}</p>` };
}

// ---------- OCEAN: trait scores on the IPIP-50's 10–50 scale ----------
const OCEAN_TRAITS = { O: "Openness", C: "Conscientiousness", E: "Extraversion", A: "Agreeableness", N: "Neuroticism" };
const OCEAN_FRICTION = {
  "O-high": "You match. The default likes ideas, analogies and what-ifs. What it adds on its own is the safety rail: the disclaimer, the \"it's worth noting\". The tuning takes the rail off.",
  "O-low": "That is near the top of the scale, and you are at the other end. Untuned, it offers three clever framings when you wanted the proven one.",
  "C-high": "You match on substance: structure, specifics, follow-through. The tuning makes it commit to dates, owners and closed loops, where the default says \"you might consider\".",
  "C-low": "You are at the other end. Untuned, it hands you a five-step plan with a timeline when you wanted a push in roughly the right direction.",
  "E-high": "That is the middle of the scale, and the models' lowest trait after Neuroticism. Untuned, you get a composed monologue when you wanted a fast back-and-forth.",
  "E-low": "That is the middle of the scale, which for you is still too much: the follow-up questions, the \"want me to expand?\", the chat. The tuning gives you depth and room.",
  "A-high": "You match. The default is warm by temperament. Where it slips is criticism, which it can deliver sharp and uncushioned. The tuning keeps the warmth on when it disagrees.",
  "A-low": "That is near the top of the scale, and you are at the other end. Untuned, it agrees with you, praises the question and softens every objection. You wanted an argument.",
  "N-high": "That is about as calm as the scale goes, and the calm is the problem. It lists worst cases neutrally because they do not bother it. They bother you.",
  "N-low": "You match: neither of you is rattled. But it cushions everyone the same way, with the pre-warning, the reassurance and the softened bad news. The tuning drops the cushion."
};

function oceanGap(c, research) {
  const b = research.bigfive || {};
  const models = b.models || [];
  const traits = b.traits || [];
  const letter = c.code.split("-")[0];
  const idx = traits.indexOf(OCEAN_TRAITS[letter]);
  const scores = models.map((m) => m.scores[idx]);
  const stat = `On the Big Five, ${NUM[models.length] || models.length} models took the IPIP-50, which scores each trait from 10 to 50. Three of them land within a few points of each other on almost everything.`;
  const lead = `<strong>The models score ${range(scores, 0)} of 50 on ${OCEAN_TRAITS[letter]}.</strong>`;
  return { stat, html: `<p class="lib-ctx-lead">${lead} ${esc(OCEAN_FRICTION[c.code] || "")}</p>` };
}

function defaultGap(c, research, enneaDigit) {
  let part;
  if (c.system === "mbti") part = mbtiGap(c, research);
  else if (c.system === "enneagram") part = enneaGap(c, research, parseInt(enneaDigit, 10));
  else if (c.system === "disc") part = discGap(c, research);
  else if (c.system === "attachment") part = attachGap(c, research);
  else if (c.system === "ocean") part = oceanGap(c, research);
  if (!part) return null;
  const t = research.totals || {};
  return {
    lede: part.stat,
    html: `${part.html}
      <p class="lib-ctx-source">From ${Number(t.runs).toLocaleString("en-US")} test runs across ${NUM[t.models] || t.models} models and ${NUM[t.instruments] || t.instruments || "five"} instruments. <a href="/research">Read the research</a>, or see <a href="/research/what-personality-type-is-chatgpt">what type ChatGPT tests as</a>.</p>`
  };
}

// ---------- Neighbors ----------
function firstRule(tuningBody) {
  const m = tuningBody.match(/^## (.+)$/m);
  return m ? m[1].trim().replace(/\*/g, "") : "";
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
    const rule = firstRule(helpers.bodyOf(n));
    const label = helpers.labelOf(n);
    return `        <li><a href="${helpers.routeOf(n)}"><strong>${esc(label)}</strong></a>${why ? ` <span class="lib-ctx-why">${esc(why)}</span>` : "."} ${esc(n.blurb)}${rule ? ` Its first rule: <em>${esc(rule)}</em>.` : ""}</li>`;
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
  disc: { href: "/guides/how-to-give-your-ai-a-personality", label: "How to give your AI a personality" },
  attachment: { href: "/guides/how-to-give-your-ai-a-personality", label: "How to give your AI a personality" }
};

module.exports = { defaultGap, neighbors, TEST_FOR, FRAMEWORK_GUIDE };
