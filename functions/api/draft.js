/* POST /api/draft
 *
 * Frontend posts the user's completed assessment (scored summaries + AgentFit
 * answers + email). We mint a short draft_id, store it in KV with 14-day TTL,
 * and return it for Stripe Checkout to carry as metadata.
 *
 * No raw item answers are stored — only the scored summaries — for privacy.
 */
import { json, err, draftId, kv, readJson } from "../_shared.js";

export async function onRequestPost(ctx) {
  let body;
  try {
    body = await readJson(ctx.request);
  } catch (e) {
    return err(e.message || "Bad JSON", 400);
  }

  // Coarse per-IP throttle: 10 drafts/hour. KV increments aren't atomic, but
  // for a human-driven form this stops scripted abuse without extra infra.
  // Checked before any work; counted only after validation passes, so junk
  // requests are rejected for free and a user's typos don't burn their quota.
  const ip = ctx.request.headers.get("cf-connecting-ip") || "unknown";
  const rlKey = `rl:draft:${ip}`;
  const seen = parseInt((await kv(ctx).get(rlKey)) || "0", 10) || 0;
  if (seen >= 10) {
    return err("Too many requests from this address — try again in an hour", 429);
  }

  const { email, results, agentfit } = body || {};

  // Light validation — we trust the client to send shape, but reject obvious junk
  if (!email || typeof email !== "string" || email.length > 200 || !email.includes("@")) {
    return err("Valid email required", 400);
  }
  if (!results || typeof results !== "object") {
    return err("results object required", 400);
  }
  if (!agentfit || typeof agentfit !== "object") {
    return err("agentfit object required", 400);
  }

  await kv(ctx).put(rlKey, String(seen + 1), { expirationTtl: 60 * 60 });

  const draft_id = draftId();
  const summary = {
    draft_id,
    email,
    results,       // scored summaries per system, NO raw item answers
    agentfit,      // 10 direct AI-preference answers
    created_at: new Date().toISOString(),
    status: "pending_payment",
  };

  // 14-day TTL
  await kv(ctx).put(`draft:${draft_id}`, JSON.stringify(summary), { expirationTtl: 60 * 60 * 24 * 14 });

  return json({ draft_id });
}
