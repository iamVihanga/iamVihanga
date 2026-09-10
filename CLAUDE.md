# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Payload skill

This project vendors the Payload CMS skill. Start with `.claude/skills/payload/SKILL.md` for a quick reference, then `.claude/skills/payload/reference/` for detailed docs (collections, fields, hooks, access control, queries, adapters, plugins). A `cms-migration` skill is also present.

`.claude/skills/*` are symlinks into `.agents/skills/*`, which are vendored from the `payloadcms/skills` GitHub repo and pinned by hash in `skills-lock.json`. Do not hand-edit them; they are regenerated from source.

## Commands

The lockfile is `package-lock.json` (npm), but `package.json` declares a pnpm engine and two scripts shell out to pnpm: `test` runs `pnpm run test:int && pnpm run test:e2e`, and the Playwright `webServer` starts the app with `pnpm dev`. Run the individual test scripts with npm, or install pnpm before running `test` / e2e.

```bash
npm run dev              # dev server on :3000; admin at /admin, frontend at /
npm run devsafe          # same, after deleting .next (use when the dev build goes stale)
npm run build            # next build (raises heap to 8 GB)
npm run lint             # eslint
npm run generate:types   # regenerate src/payload-types.ts from the Payload config
npm run generate:importmap  # regenerate src/app/(payload)/admin/importMap.js
npm run payload -- <cmd> # any Payload CLI command (migrate, generate:db-schema, ...)
```

Tests:

```bash
npm run test:int         # vitest, tests/int/**/*.int.spec.ts
npm run test:e2e         # playwright, tests/e2e/ (auto-starts the dev server)

# single integration test
npx cross-env NODE_OPTIONS=--no-deprecation vitest run --config ./vitest.config.mts -t 'fetches users'

# single e2e test
npx cross-env NODE_OPTIONS="--no-deprecation --import=tsx/esm" playwright test --config=playwright.config.ts tests/e2e/admin.e2e.spec.ts -g 'can navigate to dashboard'
```

Both suites run against the database in `.env`, not a fixture database. The integration spec queries the real `users` collection, and the admin e2e suite creates and deletes a `dev@payloadcms.com` user in it. Do not point `.env` at production while testing.

## Architecture

**One config, two route groups.** `src/payload.config.ts` is the single source of truth for collections, the database adapter, the editor, and admin settings. It is aliased as `@payload-config`; `@/*` maps to `src/*`. Under `src/app/`:

- `(payload)/` is Payload-generated glue: the admin panel at `/admin`, REST at `/api/[...slug]`, and GraphQL plus its playground. Treat these files as generated. Change behavior in the config or collections, not here. `(payload)/custom.scss` is the supported place for admin styling.
- `(frontend)/` is the public Next.js site, currently the template landing page.
- `my-route/route.ts` shows the pattern for a custom app route that opens a Payload client.

**Server-side data access goes through the Local API**, not HTTP: `getPayload({ config })` then `payload.find` / `create` / `delete`. Used identically in the frontend page, custom routes, and test helpers. Auth from a request is read with `payload.auth({ headers })`.

**Collections** live in `src/collections/` and are registered in the config's `collections` array. `Users` is auth-enabled and backs the admin panel (`admin.user`). `Media` is upload-enabled with public read access.

**`src/payload-types.ts` is generated.** Run `generate:types` after any change to collections or fields. It is excluded from eslint, along with `src/payload-generated-schema.ts` if a DB schema is ever generated. Adding custom admin components requires `generate:importmap`.

## Database: Postgres, not MongoDB

The config uses `@payloadcms/db-vercel-postgres` and reads `POSTGRES_URL`. The template leftovers disagree and are stale: `README.md` describes MongoDB and S3, `.env.example` shows `DATABASE_URL=mongodb://...`, and `docker-compose.yml` starts a `mongo` service with a commented-out `postgres` block. Trust the config. Required env vars are `POSTGRES_URL` and `PAYLOAD_SECRET`.

## Style

Prettier: no semicolons, single quotes, trailing commas, 100-column width. The eslint config downgrades `no-explicit-any`, `ban-ts-comment`, `no-empty-object-type`, and unused vars to warnings, and ignores identifiers prefixed with `_`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
