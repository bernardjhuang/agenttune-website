/* GET /api/unlock?session_id={CHECKOUT_SESSION_ID}
 *
 * The post-Stripe redirect lands here. We:
 *   1. Verify the Stripe session server-side (don't trust the URL)
 *   2. Fetch the draft from KV (with 2-second retry for eventual consistency)
 *   3. Idempotently call Gemini if soul:{uuid} doesn't already exist
 *   4. Store the soul JSON
 *   5. Send the "your file is ready" email
 *   6. Redirect to /me/{uuid}
 *
 * Idempotent: refreshing the page after success doesn't double-charge or
 * regenerate. We check kv:checkout:{session_id}.soul_uuid first.
 */
import { json, err, uuid, kv, sleep, stripeFetch, sendEmail } from "../_shared.js";
import { synthesize } from "../_synthesis.js";

export async function onRequest(ctx) {
  const url = new URL(ctx.request.url);
  const session_id = url.searchParams.get("session_id");
  if (!session_id) return err("session_id required", 400);

  const KV = kv(ctx);
  const siteUrl = ctx.env.SITE_URL || "https://agent-tune.com";

  // ---------- Idempotency: if already generated, redirect right away ----------
  let checkoutRaw = await KV.get(`checkout:${session_id}`);
  let checkout = checkoutRaw ? JSON.parse(checkoutRaw) : null;

  if (checkout && checkout.soul_uuid) {
    return Response.redirect(`${siteUrl}/me/${checkout.soul_uuid}`, 302);
  }

  // ---------- Verify the Stripe session ----------
  let session;
  try {
    session = await stripeFetch(ctx.env, `/checkout/sessions/${encodeURIComponent(session_id)}`);
  } catch (e) {
    return err(`Could not fetch Stripe session: ${e.message}`, 502);
  }

  if (session.payment_status !== "paid") {
    return err(`Payment status is ${session.payment_status}; expected paid`, 402);
  }

  const draft_id = (session.metadata && session.metadata.draft_id) || (checkout && checkout.draft_id);
  const email = (session.customer_email) || (session.metadata && session.metadata.email) || (checkout && checkout.email);
  if (!draft_id) return err("No draft_id associated with this session", 500);
  if (!email) return err("No email associated with this session", 500);

  // ---------- Fetch draft with KV eventual-consistency retry ----------
  // Gemini's audit flagged: if user pays very quickly (Apple Pay), the edge
  // node handling the unlock may not have seen the draft write yet. Retry up
  // to 3× with 2-second backoff before giving up.
  let draftRaw = await KV.get(`draft:${draft_id}`);
  for (let i = 0; i < 3 && !draftRaw; i++) {
    await sleep(2000);
    draftRaw = await KV.get(`draft:${draft_id}`);
  }
  if (!draftRaw) return err(`Draft not found: ${draft_id}. Reach out to hello@agent-tune.com — we have your payment.`, 500);
  const draft = JSON.parse(draftRaw);

  // ---------- Synthesize via Gemini ----------
  let soul;
  try {
    soul = await synthesize(ctx.env, draft);
  } catch (e) {
    return err(`Synthesis failed: ${e.message}. Your payment is safe — reach out to hello@agent-tune.com.`, 502);
  }

  // ---------- Store the soul ----------
  const soul_uuid = uuid();
  const soulRecord = {
    ...soul,
    soul_uuid,
    profile: { results: draft.results, agentfit: draft.agentfit },  // keep for retune in v1.1
    stripe_session_id: session_id,
    email,
    created_at: new Date().toISOString(),
  };
  await KV.put(`soul:${soul_uuid}`, JSON.stringify(soulRecord));

  // Update checkout record with the soul_uuid (idempotency key for future hits)
  checkout = { ...(checkout || {}), session_id, draft_id, email, status: "fulfilled", soul_uuid, fulfilled_at: new Date().toISOString() };
  await KV.put(`checkout:${session_id}`, JSON.stringify(checkout), { expirationTtl: 60 * 60 * 24 * 30 });

  // Build/update the email_index for future retune lookups
  try {
    const idxRaw = await KV.get(`email_index:${email}`);
    const idx = idxRaw ? JSON.parse(idxRaw) : { uuids: [], created_at: new Date().toISOString() };
    idx.uuids.push(soul_uuid);
    idx.latest_uuid = soul_uuid;
    idx.updated_at = new Date().toISOString();
    await KV.put(`email_index:${email}`, JSON.stringify(idx));
  } catch (e) {
    console.warn("email_index update failed:", e.message);
    // Non-fatal — the soul is saved, the user can find it via the redirect/email
  }

  // ---------- Send "your file is ready" email ----------
  try {
    const permalink = `${siteUrl}/me/${soul_uuid}`;
    await sendEmail(ctx.env, {
      to: email,
      subject: "Your AgentTune Pro master tuning is ready",
      html: `<!DOCTYPE html>
<html><body style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 40px auto; padding: 0 20px; color: #1a1a17;">
  <h1 style="font-family: 'Newsreader', Georgia, serif; font-size: 28px; font-weight: 500; letter-spacing: -0.01em;">Your master tuning is ready</h1>
  <p style="font-size: 16px; line-height: 1.55;">Here's your AgentTune Pro file — bookmark this link, it's yours forever:</p>
  <p style="margin: 24px 0;"><a href="${permalink}" style="display: inline-block; background: #a8482a; color: #fafaf7; padding: 14px 28px; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; border-radius: 4px;">Open your tuning →</a></p>
  <p style="font-size: 15px; line-height: 1.55; color: #4a4538;">From there you can copy the short prompt, download the full Markdown, and grab paste-ready snippets for Claude, ChatGPT, Cursor, Gemini, Codex, or any API.</p>
  <p style="font-size: 14px; line-height: 1.55; color: #6e6a5e; margin-top: 32px;">If it feels generic, reply within 30 days and I'll refund. No questions.</p>
  <p style="font-size: 12px; color: #6e6a5e; margin-top: 32px; padding-top: 16px; border-top: 1px solid #dad3c0;">Profile: ${soul.profile_code} · Generated ${new Date(soul.generated_at).toLocaleString()}</p>
</body></html>`,
      text: `Your master tuning is ready.\n\nHere's your AgentTune Pro file — bookmark this link, it's yours forever:\n\n${permalink}\n\nFrom there you can copy the short prompt, download the full Markdown, and grab paste-ready snippets for Claude, ChatGPT, Cursor, Gemini, Codex, or any API.\n\nIf it feels generic, reply within 30 days and I'll refund. No questions.\n\n---\nProfile: ${soul.profile_code}\nGenerated: ${new Date(soul.generated_at).toLocaleString()}`,
    });
  } catch (e) {
    // Don't fail the whole flow if email send fails — user still gets the redirect
    console.error("Email send failed:", e.message);
  }

  // ---------- Redirect to the permalink ----------
  return Response.redirect(`${siteUrl}/me/${soul_uuid}`, 302);
}
