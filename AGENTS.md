# AGENTS.md

Guidance for AI coding agents working in this repository.

## Git workflow — REQUIRED

- **Never push directly to `main`.** All changes must go through a pull request, no matter how small.
- Workflow: create a feature branch (e.g. `feat/...`, `fix/...`, `chore/...`) → commit → push → open a PR with `gh pr create` → merge it (prefer `gh pr merge --merge --delete-branch`) → return to `main` and `git pull`.
- Keep PR titles conventional and descriptive; include a short summary and test plan in the body.

## Project overview

- Static marketing site for **Omicron** (federated blogging platform), built with **Astro 5 + Svelte 5 + Tailwind CSS 4**.
- Fully static output (`dist/`) — no SSR adapter. Deploys to Vercel/Netlify/Cloudflare Pages with zero config (`netlify.toml` / `vercel.json` are checked in).
- Production URL: **https://join.omicron.blog** (set as `site` in `astro.config.mjs`; used for canonical and OG URLs).
- Commands: `bun run dev` (dev server), `bun run build` (type-check via `astro check` + build — always run before finishing work), `bun run preview` (serve the build).

## Conventions

- Landing page sections live in `src/components/landing/`; shared layout/meta in `src/layouts/BaseLayout.astro`.
- Dark mode is class-based (`dark` on `<html>`), toggled via the icon button in `ThemeToggle.svelte`; persist to `localStorage["theme"]` and respect `prefers-color-scheme`.
- Design tokens: dark background `#0c1116` / surfaces `#14181f`, light background near-white; accent `#7c6cff`. Match existing spacing/typography patterns.
