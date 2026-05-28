/* Shared utilities for AgentTune Pro Pages Functions */

export const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json; charset=utf-8", ...init.headers },
    status: init.status || 200,
  });

export const err = (message, status = 400) => json({ error: message }, { status });

export const uuid = () => {
  // RFC 4122 v4 — 122 bits of entropy. Cloudflare Workers expose crypto.randomUUID.
  if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  // Fallback (shouldn't be needed on Workers runtime)
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const h = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
  return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h.slice(6, 8).join("")}-${h.slice(8, 10).join("")}-${h.slice(10).join("")}`;
};

/** Short draft ID — 16 chars of url-safe base36 randomness. Good enough for 14-day drafts. */
export const draftId = () => {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(36).padStart(2, "0")).join("").slice(0, 16);
};

/** Cloudflare KV bindings access from a Pages Function context. */
export const kv = (ctx) => {
  if (!ctx.env || !ctx.env.AGENTTUNE_KV) throw new Error("AGENTTUNE_KV binding missing");
  return ctx.env.AGENTTUNE_KV;
};

/** Validate a uuid pattern (loose — accept any 8-4-4-4-12 hex). */
export const isUuid = (s) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(s || ""));

/** Sleep for `ms` ms (used for KV eventual-consistency retry in /api/unlock). */
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Read JSON body of a request, with a small safety size limit. */
export async function readJson(request, maxBytes = 200_000) {
  const text = await request.text();
  if (text.length > maxBytes) throw new Error("Body too large");
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON body");
  }
}

/** Stripe REST helper. Stripe SDK is too heavy for Workers; raw fetch is fine. */
export async function stripeFetch(env, path, { method = "GET", form } = {}) {
  if (!env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY missing");
  const headers = {
    Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    "Stripe-Version": "2024-06-20",
  };
  let body;
  if (form) {
    body = new URLSearchParams(form).toString();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }
  const res = await fetch(`https://api.stripe.com/v1${path}`, { method, headers, body });
  const json = await res.json();
  if (!res.ok) {
    const msg = (json && json.error && json.error.message) || `Stripe API ${res.status}`;
    const e = new Error(msg);
    e.stripe = json;
    e.status = res.status;
    throw e;
  }
  return json;
}

/** Resend email send. */
export async function sendEmail(env, { to, subject, html, text }) {
  if (!env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");
  const from = env.RESEND_FROM || "hello@agent-tune.com";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: `AgentTune <${from}>`, to, subject, html, text }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body}`);
  }
  return res.json();
}

/** Verify a Stripe webhook signature header. Implements the v1 scheme. */
export async function verifyStripeSignature(env, payload, header) {
  if (!env.STRIPE_WEBHOOK_SECRET) throw new Error("STRIPE_WEBHOOK_SECRET missing");
  if (!header) throw new Error("Missing Stripe-Signature header");
  const parts = header.split(",").reduce((acc, part) => {
    const [k, v] = part.split("=");
    if (k === "t") acc.t = v;
    else if (k === "v1") (acc.v1 = acc.v1 || []).push(v);
    return acc;
  }, {});
  if (!parts.t || !parts.v1) throw new Error("Malformed Stripe-Signature");
  const signedPayload = `${parts.t}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signedPayload));
  const expected = Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
  if (!parts.v1.includes(expected)) throw new Error("Signature mismatch");
  // Reject events older than 5 minutes (replay protection)
  const ageSec = Math.abs(Math.floor(Date.now() / 1000) - parseInt(parts.t, 10));
  if (ageSec > 300) throw new Error("Signature timestamp too old");
  return true;
}

/** HTML escape helper. */
export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
