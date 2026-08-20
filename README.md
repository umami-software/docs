# Umami documentation

The Umami documentation site is built with [Shiso](https://shiso.umami.is).

## Development

```bash
pnpm install
pnpm dev
```

The documentation content lives in `content/docs`, navigation and branding are
configured in `docs.json`, and static assets live in `public`.

## Commands

- `pnpm dev` starts the local documentation server.
- `pnpm check` validates `docs.json`.
- `pnpm build` creates the static site in `dist/client`.
- `pnpm preview` previews the production build.
- `pnpm lint` runs Biome.

Set `VITE_TRACKER_ID` at build time to enable Umami analytics on the docs site.
