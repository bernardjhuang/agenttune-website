/* Cloudflare Pages middleware: Markdown content negotiation (Accept: text/markdown) + Vary: Accept */
'use strict';

function parseAcceptQuality(acceptHeader, mime) {
  const parts = String(acceptHeader || '').split(',');
  let best = -1;
  for (const raw of parts) {
    const segs = raw.trim().split(';').map((s) => s.trim().toLowerCase());
    if (!segs[0]) continue;
    const typeMatch = segs[0] === mime || (mime === 'text/markdown' && segs[0] === 'text/x-markdown');
    if (!typeMatch) continue;
    let q = 1;
    for (const p of segs.slice(1)) {
      if (p.startsWith('q=')) {
        const parsed = Number(p.slice(2));
        if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 1) q = parsed;
      }
    }
    if (q > best) best = q;
  }
  return best;
}

export function prefersMarkdown(acceptHeader) {
  const mdQ = parseAcceptQuality(acceptHeader, 'text/markdown');
  if (mdQ <= 0) return false;
  const htmlQ = parseAcceptQuality(acceptHeader, 'text/html');
  return mdQ >= Math.max(0, htmlQ);
}

export function candidateMarkdownPath(pathname) {
  if (!pathname || pathname === '/mcp' || pathname.startsWith('/api/')) return null;
  if (/\.(?:md|json|csv|xml|txt|css|js|png|svg|ico|woff2?|map)$/i.test(pathname)) return null;
  if (pathname === '/') return '/index.md';
  if (pathname.endsWith('/')) return `${pathname}index.md`;
  return `${pathname.replace(/\.html$/i, '')}.md`;
}

function withVaryAccept(headers) {
  const next = new Headers(headers);
  const existing = next.get('vary');
  if (!existing) {
    next.set('vary', 'Accept');
  } else if (!existing.split(',').some((v) => v.trim().toLowerCase() === 'accept')) {
    next.set('vary', `${existing}, Accept`);
  }
  return next;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const method = (request.method || 'GET').toUpperCase();
  const url = new URL(request.url);

  if ((method === 'GET' || method === 'HEAD') && env && env.ASSETS && prefersMarkdown(request.headers.get('accept'))) {
    const mdPath = candidateMarkdownPath(url.pathname);
    if (mdPath) {
      const mdUrl = new URL(mdPath, url.origin);
      const mdRes = await env.ASSETS.fetch(new Request(mdUrl.toString(), { method }));
      if (mdRes.ok) {
        const headers = withVaryAccept(mdRes.headers);
        headers.set('content-type', 'text/markdown; charset=utf-8');
        return new Response(method === 'HEAD' ? null : mdRes.body, {
          status: mdRes.status,
          statusText: mdRes.statusText,
          headers
        });
      }
    }
  }

  const res = await next();
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('text/html')) {
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers: withVaryAccept(res.headers)
    });
  }
  return res;
}
