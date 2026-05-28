/* GET /api/soul/{uuid}      → JSON
 * GET /api/soul/{uuid}.md   → Markdown (for `curl > CLAUDE.md` install pattern)
 *
 * Bearer auth via the uuid itself (122-bit v4 UUID — unguessable).
 * Returns 404 if not found. noindex / no-store / no-referrer headers set.
 */
import { json, kv, isUuid } from "../../_shared.js";
import { renderMarkdown } from "../../_render-markdown.js";

export async function onRequest(ctx) {
  let u = ctx.params.uuid;
  const wantMd = u.endsWith(".md");
  if (wantMd) u = u.slice(0, -3);

  if (!isUuid(u)) return new Response("Not found", { status: 404 });

  const KV = kv(ctx);
  const raw = await KV.get(`soul:${u}`);
  if (!raw) return new Response("Not found", { status: 404 });

  let soul;
  try { soul = JSON.parse(raw); } catch { return new Response("Corrupt soul", { status: 500 }); }

  // Strip server-internal fields
  delete soul.email;
  delete soul.stripe_session_id;
  delete soul.profile;

  const headers = {
    "cache-control": "private, no-store",
    "x-robots-tag": "noindex, nofollow",
    "referrer-policy": "no-referrer",
  };

  if (wantMd) {
    const md = renderMarkdown(soul);
    return new Response(md, {
      headers: { ...headers, "content-type": "text/markdown; charset=utf-8" },
    });
  }

  return new Response(JSON.stringify(soul), {
    headers: { ...headers, "content-type": "application/json; charset=utf-8" },
  });
}
