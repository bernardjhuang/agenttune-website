# Resend domain verification — agent-tune.com

The Pro flow sends "your file is ready" email from `hello@agent-tune.com` via
Resend. Until the domain is verified, every send will fail with a 403.

This is a one-time setup. ~5 min in Cloudflare DNS, then up to 30 min for
propagation before Resend marks it verified.

## 1. Add the domain in Resend

1. Sign in at https://resend.com → **Domains** → **Add Domain**.
2. Enter `agent-tune.com`. Choose region closest to your Cloudflare Pages
   deployment (US East is fine for `pages.dev`).
3. Resend will show you 4 DNS records to add. Keep that page open — the exact
   values are unique to your account.

## 2. Add the records to Cloudflare DNS

Cloudflare dashboard → **agent-tune.com** → **DNS** → **Records** → **Add record**.

For each of the 4 records Resend gave you, add them in Cloudflare with these
settings:

| Resend says | Cloudflare equivalent | Proxy status |
| --- | --- | --- |
| Type: `MX` | Type: `MX`, Name: `send`, Mail server: (from Resend), Priority: `10` | DNS only (grey cloud) |
| Type: `TXT` (SPF) | Type: `TXT`, Name: `send`, Content: `v=spf1 include:amazonses.com ~all` | DNS only |
| Type: `TXT` (DKIM) | Type: `TXT`, Name: (from Resend, e.g. `resend._domainkey`), Content: (long `p=...` string from Resend) | DNS only |
| Type: `TXT` (DMARC) | Type: `TXT`, Name: `_dmarc`, Content: `v=DMARC1; p=none;` | DNS only |

**Important:**
- All four records must be **DNS only** (grey cloud, not orange). Proxying
  breaks SMTP-related records.
- The DKIM record value is very long — copy/paste from Resend exactly, don't
  retype.
- If Cloudflare warns "this content looks like it should be at the root" for
  the SPF, you can safely ignore it — Resend uses a `send` subdomain by
  design to keep your main domain's SPF clean.

## 3. Verify in Resend

Back in the Resend dashboard, click **Verify DNS records**. It takes up to 30
minutes for Cloudflare's DNS to propagate. Resend will retry automatically;
you can also re-check manually.

Once all 4 records show ✅, the domain status flips to **Verified** and
`hello@agent-tune.com` can send.

## 4. Test it

```bash
curl -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "AgentTune <hello@agent-tune.com>",
    "to": "your@personal-email.com",
    "subject": "DNS test",
    "text": "If you got this, DNS is working."
  }'
```

A 200 response with an `id` field means you're done. A 403 means at least
one DNS record is wrong — go back to the Resend dashboard and check which
one is still ❌.

## Troubleshooting

- **DKIM stuck on "Pending"** — most common. The DKIM record value Resend
  shows starts with `p=` and is ~400 characters. If you copied a line break
  in the middle, the TXT record will be malformed. Delete and re-paste.
- **DMARC says "missing"** — Cloudflare auto-prepends the domain to the
  Name field, so use `_dmarc` (not `_dmarc.agent-tune.com`).
- **SPF clash with another mailer** — if you already have an SPF record at
  the root for another service (e.g. Google Workspace), the Resend SPF goes
  on `send.agent-tune.com` and the two don't conflict. Don't merge them.

## Why a `send.` subdomain?

Resend uses `send.agent-tune.com` for the MX/SPF records so your apex domain
(`agent-tune.com`) can still receive normal email or have its own SPF policy
without conflict. The visible `From:` address is still `hello@agent-tune.com`
— the subdomain is only for the SMTP bounce path.
