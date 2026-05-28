/* POST /api/checkout
 *
 * Creates a Stripe Checkout Session for $9 USD one-time payment.
 * The draft_id flows through as metadata so the unlock flow can find the
 * user's assessment after they pay.
 *
 * Request body: { draft_id, email }
 * Response:     { url }  ← the Stripe Checkout URL to redirect to
 */
import { json, err, kv, readJson, stripeFetch } from "../_shared.js";

export async function onRequestPost(ctx) {
  let body;
  try {
    body = await readJson(ctx.request);
  } catch (e) {
    return err(e.message || "Bad JSON", 400);
  }

  const { draft_id, email } = body || {};
  if (!draft_id || typeof draft_id !== "string") return err("draft_id required", 400);
  if (!email || typeof email !== "string" || !email.includes("@")) return err("valid email required", 400);

  // Verify the draft exists before creating a checkout session
  const draftRaw = await kv(ctx).get(`draft:${draft_id}`);
  if (!draftRaw) return err("Draft not found or expired", 404);

  const priceId = ctx.env.STRIPE_PRICE_ID;
  if (!priceId) return err("STRIPE_PRICE_ID env var not set", 500);

  const siteUrl = ctx.env.SITE_URL || "https://agent-tune.com";

  try {
    const session = await stripeFetch(ctx.env, "/checkout/sessions", {
      method: "POST",
      form: {
        "mode": "payment",
        "payment_method_types[0]": "card",
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        "customer_email": email,
        "success_url": `${siteUrl}/api/unlock?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": `${siteUrl}/pro/preview`,
        "metadata[draft_id]": draft_id,
        "metadata[email]": email,
        "allow_promotion_codes": "true",
      },
    });

    // Store the checkout->draft mapping for the unlock flow (and as a backup
    // for the webhook). 30-day TTL.
    await kv(ctx).put(
      `checkout:${session.id}`,
      JSON.stringify({
        draft_id,
        email,
        session_id: session.id,
        created_at: new Date().toISOString(),
        status: "pending",
      }),
      { expirationTtl: 60 * 60 * 24 * 30 }
    );

    return json({ url: session.url, session_id: session.id });
  } catch (e) {
    return err(`Stripe error: ${e.message}`, 500);
  }
}
