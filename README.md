# Omicron Landing Page

The landing page for [Omicron](https://omicron.blog) — a federated blogging platform.

Built with [Astro](https://astro.build), [Svelte 5](https://svelte.dev), and [Tailwind CSS 4](https://tailwindcss.com). Fully static output — no server required.

## Development

```sh
bun install        # or npm install
bun run dev        # start dev server at http://localhost:4321
bun run build      # type-check (astro check) + build to ./dist
bun run preview    # preview the production build locally
```

Requires Node.js 20+ (see `.nvmrc`).

## Deployment

The site is 100% static (`dist/`), so it deploys to any static hosting provider with zero configuration. Configuration files for the common ones are included.

### Vercel

1. Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects Astro via `vercel.json` — no settings needed
3. Build command: `npm run build` · Output directory: `dist`

Or with the CLI:

```sh
npx vercel --prod
```

### Netlify

1. Import the repo at [app.netlify.com](https://app.netlify.com)
2. Settings are read from `netlify.toml` — no settings needed
3. Build command: `npm run build` · Publish directory: `dist`

Or with the CLI:

```sh
npx netlify deploy --build --prod
```

### Cloudflare Pages

1. Import the repo in the Cloudflare dashboard
2. Framework preset: **Astro** · Build command: `npm run build` · Output directory: `dist`

### Any other static host

Run `bun run build` (or `npm run build`) and upload the `dist/` folder.

## Notes

- **Custom domain:** once deployed, point your domain at the host and update the `site` field in `astro.config.mjs` (e.g. `site: "https://yourdomain.com"`) so any generated absolute URLs are correct.
- Font and build-asset caching headers are pre-configured in `netlify.toml`; Vercel applies equivalent immutable caching to `/_astro/*` automatically.
