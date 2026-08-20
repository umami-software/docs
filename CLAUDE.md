# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project overview

This is the documentation site for Umami Analytics. It is a statically generated
Shiso site with MDX content.

## Commands

```bash
pnpm dev      # Start the Shiso development server
pnpm check    # Validate docs.json
pnpm build    # Build the static site in dist/client
pnpm preview  # Preview the production build
pnpm lint     # Run Biome
pnpm format   # Format files with Biome
```

## Architecture

Shiso reads pages from `content/docs` and the site structure from `docs.json`.
The production build prerenders HTML and Markdown versions of every page, builds
the client-side search index, emits a sitemap, and writes everything to
`dist/client`.

The build also runs `scripts/generate-llms-full.mjs` to combine the generated
Markdown pages into `dist/client/llms-full.txt`.

## Key files

- `docs.json` — navigation, branding, search, SEO, and theme configuration
- `entry-client.tsx` — Shiso hydration and optional Umami tracker injection
- `index.html` — Shiso HTML shell and early theme initialization
- `styles.css` — site-specific Shiso style overrides
- `content/docs` — Markdown and MDX documentation pages
- `public` — images, favicons, and the Umami logo
- `vercel.json` — static Vercel deployment configuration

## Documentation sections

The four top-level tabs configured in `docs.json` are:

- Documentation at `/docs`
- Guides at `/docs/guides`
- API Reference at `/docs/api`
- Cloud at `/docs/cloud`

Every published page must be listed in `docs.json`. Use a page object with
`"hidden": true` for a page that should remain routable without appearing in
the sidebar.

## Analytics

Set `VITE_TRACKER_ID` at build time to load the Umami tracker. Environment
variables exposed to the browser must use Vite's `VITE_` prefix.
