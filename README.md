# vcmiranda.me

Personal site for Vitor Miranda — senior frontend engineer, London, Ontario.

pnpm workspace monorepo. React + TypeScript + Vite, prerendered to static HTML,
deployed on Vercel. One serverless function handles the contact form; there is no
other backend.

```
.
├── apps/
│   └── web/                  @vcm/web — the site
│       ├── api/contact.ts    Vercel Edge function (the only server-side code)
│       ├── e2e/              Playwright + axe
│       ├── scripts/          prerender → static HTML, sitemap, robots
│       └── src/
├── packages/
│   ├── ui/                   @vcm/ui — design system: primitives + tokens
│   ├── content/              @vcm/content — typed content layer
│   └── tsconfig/             @vcm/tsconfig — shared compiler config
├── pnpm-workspace.yaml
└── turbo.json
```

## Why a monorepo for a personal site

Three packages, each with a reason to exist independently of the app:

**`@vcm/ui`** is a design system, not a components folder. It owns the design
tokens (`tokens.css`), the primitives built on Radix, and the `cn` helper. It
declares its own dependencies and type-checks on its own. The app consumes it
like any other consumer would — which is the point: the boundary is enforced by
the package manager rather than by convention.

**`@vcm/content`** holds every user-facing string as typed data with its own test
suite asserting content invariants (unique slugs, matching case studies,
consistent narrative section order, no banned marketing phrases). Content is
data, and data deserves a type and a test.

**`@vcm/tsconfig`** is the standard shared-config pattern. `base.json` for
libraries, `react.json` for anything with JSX.

Packages are consumed as TypeScript source — no build step, no `dist/` to stale.
Vite transpiles them as part of the app build, and `tsc` checks each in place.

The honest caveat: a six-page site does not *need* this. The structure earns its
place by making the design-system boundary real and by keeping content out of
components, both of which stay useful as the site grows. If you would rather have
one package, the whole thing collapses back into `apps/web` in about ten minutes.

## Commands

Run from the repository root:

```bash
pnpm install
pnpm dev              # Vite dev server
pnpm build            # client → SSR → prerender, in dependency order
pnpm typecheck        # all four packages
pnpm test             # Vitest across the workspace
pnpm test:e2e         # Playwright (builds first)
pnpm verify           # typecheck + test + build
pnpm preview          # serve the built site on :4173
```

Turborepo orchestrates the tasks and caches by input hash — an unchanged build
replays in well under a second. Scope a single package with
`pnpm --filter @vcm/web <script>`.

## The prerender step

`apps/web/scripts/prerender.ts` runs after the client and SSR builds. It walks
the `pages` array in `src/routes.tsx`, renders each route with `renderToString`,
injects that route's `<head>`, and writes a static HTML file — then emits
`sitemap.xml` and `robots.txt` from the same array, so the three cannot drift.

Every route ships as real HTML. Content is readable and indexable with
JavaScript disabled, which an e2e test asserts.

## Where to edit content

**Every user-facing string lives in `packages/content/src/`.** No copy is
hard-coded in a component; this is an architectural constraint, not a preference.

| File | Holds |
|---|---|
| `site.ts` | name, positioning, hero, CTAs, contact copy, footer |
| `nav.ts` | header links |
| `projects.ts` | project metadata and per-page SEO |
| `case-studies.ts` | case-study bodies as typed blocks |
| `about.ts` | bio, working principles, current stack |
| `resume.ts` | the HTML résumé at `/resume` |

### Unfinished case-study sections

`case-studies.ts` supports a `todo` block:

```ts
{ type: 'todo', text: 'How many microfrontends? One number makes this concrete.' }
```

These render as amber callouts in `pnpm dev` and are **stripped from production
builds**, so a half-written case study cannot ship with placeholder text visible.
Search for `type: 'todo'` to see what still needs your input.

## Contact form

`apps/web/api/contact.ts` — a Vercel Edge function. Validates with the same Zod
schema the form uses, drops honeypot submissions, rate-limits to 3 requests per
minute per IP, delivers through Resend. Nothing is stored.

```
RESEND_API_KEY=re_...
CONTACT_TO=you@example.com
CONTACT_FROM=site@vcmiranda.me   # a domain verified in Resend
```

Without them the endpoint returns 500 and the form shows its error state, which
points people at the email address. That address is always visible above the
form, so contact never depends on JavaScript or on mail configuration.

## Deploying

Set the Vercel project's **root directory to `apps/web`**. `apps/web/vercel.json`
handles the rest — it installs and builds from the workspace root so the
workspace packages resolve, then serves `apps/web/dist`.

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod # production
```

Point `vcmiranda.me` at the project and pick one canonical host — redirect the
other, so search ranking is not split between apex and `www`.

## Accessibility and performance

Enforced by tests, not aspiration:

- Zero axe violations (WCAG 2.1 A/AA) on all six routes, desktop and mobile
- Full keyboard traversal with a visible 2px focus ring at every stop
- Semantic landmarks, one `<h1>` per page, skip link, `prefers-reduced-motion` honoured
- Content present and readable with JavaScript disabled
- 107 KB gzipped initial JavaScript; React Hook Form, Zod and the resolver are
  split into a chunk that loads only when the contact form mounts

### Known trade-off

A client-hydrated React SPA has a floor of roughly 100 KB gzipped once React, the
router and TanStack Query are in. Because every route is prerendered this does
not affect LCP — text paints before the bundle arrives — but it is real
hydration cost. Dropping TanStack Query, or moving to a framework with server
components, is the next lever if that budget needs to come down.

## Before this goes live

- [ ] Resolve every `type: 'todo'` block in `packages/content/src/case-studies.ts`
- [ ] Add Nami screenshots, and measure its cold start, memory and binary size
- [ ] Decide whether `nesto` is cleared to feature publicly; add or omit accordingly
- [ ] Set the Resend environment variables in Vercel
- [ ] Set the Vercel root directory to `apps/web`
- [ ] Confirm `apps/web/public/Vitor_Miranda_Software_Engineer_Resume.pdf` is current
- [ ] Point the domain, choose a canonical host, redirect the other
