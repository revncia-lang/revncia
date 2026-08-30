# REVNCIA

Corporate website for REVNCIA — an AI digital transformation and public impact company.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js 16, TypeScript, Tailwind CSS. Deployed to **Cloudflare Workers** via OpenNext (`@opennextjs/cloudflare`). Do not point Wrangler `assets` at `./public` — that only uploads static files and does not run the Next.js app.

## Cloudflare deploy

Local (after `npx wrangler login` or with `CLOUDFLARE_API_TOKEN`):

```bash
npm run deploy
```

That runs `opennextjs-cloudflare build` then `opennextjs-cloudflare deploy` (Worker + `.open-next/assets`). Do **not** use `wrangler pages deploy ./public`.

### Workers Builds (recommended Git deploy)

Workers & Pages → Create → **Workers** (not classic Pages static) → connect `revncia-lang/revncia` → production branch **`revncia-corporate-website`**:

| Setting | Value |
| --- | --- |
| Framework preset | None (or OpenNext / Workers) |
| Build command | `npx @opennextjs/cloudflare build` |
| Deploy command | `npx @opennextjs/cloudflare deploy` |
| Root directory | `/` (repo root) |
| Node.js version | **20** |
| Output directory | leave empty (Wrangler uses `.open-next/worker.js` + `.open-next/assets`) |

### If you still use the Pages dashboard

Classic Pages **Next.js** preset with `npm run build` and output `.next` or `public` will **not** ship this app. Prefer Workers Builds above. If Pages Git is already connected, override to:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run pages:build && npx wrangler deploy` |
| Build output directory | (unused / empty — not `public`) |
| Node.js version | **20** |
| Production branch | `revncia-corporate-website` |
