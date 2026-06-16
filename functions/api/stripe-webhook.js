/* POST /api/stripe-webhook
 *
 * Stripe POSTs payment events here. We verify the signature, then idempotently
 * mark the corresponding checkout entry as paid. The actual file generation
 * happens in /api/unlock (driven by the success_url redirect) — the webhook
 * is the safety net in case the user closes the tab before unlock fires.
 */
import { json, err, kv, verifyStripeSignature } from "../_shared.js";

export async function onRequestPost(ctx) {
  const payload = await ctx.request.text();
  const sig = ctx.request.headers.get("stripe-signature");

  try {
    await verifyStripeSignature(ctx.env, payload, sig);
  } catch (e) {
    return err(`Webhook signature verification failed: ${e.message}`, 400);
  }

  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return err("Invalid JSON", 400);
  }

  // We only care about checkout completion for v1
  if (event.type !== "checkout.session.completed") {
    return json({ received: true, ignored: true, type: event.type });
  }

  const session = event.data && event.data.object;
  if (!session || !session.id) return err("Missing session", 400);

  // Idempotent: if we already marked this paid, do nothing
  const existingRaw = await kv(ctx).get(`checkout:${session.id}`);
  let record = existingRaw ? JSON.parse(existingRaw) : {};

  if (record.status === "paid") {
    return json({ received: true, idempotent: true });
  }

  // Update record with payment confirmation
  record = {
    ...record,
    session_id: session.id,
    product: record.product || (session.metadata && session.metadata.product) || "pro",
    draft_id: record.draft_id || (session.metadata && session.metadata.draft_id),
    email: record.email || session.customer_email || (session.metadata && session.metadata.email),
    payment_intent: session.payment_intent,
    amount_total: session.amount_total,
    currency: session.currency,
    livemode: session.livemode,
    status: "paid",
    paid_at: new Date().toISOString(),
  };

  await kv(ctx).put(`checkout:${session.id}`, JSON.stringify(record), {
    expirationTtl: 60 * 60 * 24 * 30,
  });

  return json({ received: true, marked_paid: true });
}
