# Portfolio redesign — handoff

The Industry-style redesign, written in the stack the repo already uses:
React 19 + react-router, Tailwind v4, \`@vcm/ui\` tokens, \`@vcm/content\` copy.
Nothing new was introduced except two font packages.

## Drop these files in

Paths mirror the repo root, so copying the tree over the repo is enough:

    apps/web/package.json                              (font deps swapped)
    apps/web/public/vitor-miranda.png                  (new — hero portrait)
    apps/web/src/styles/globals.css                    (font imports)
    apps/web/src/pages/Home.tsx                        (rewritten — the one-pager)
    apps/web/src/components/layout/Header.tsx           (sticky anchor nav)
    apps/web/src/components/layout/Footer.tsx           (condensed)
    apps/web/src/components/layout/Blueprint.tsx        (new)
    apps/web/src/components/layout/Reveal.tsx           (new)
    packages/ui/src/styles/tokens.css                  (retheme)
    packages/content/src/home.ts                       (new)
    packages/content/src/index.ts                      (exports home)
    packages/content/src/nav.ts                        (anchor nav)

Then:

    pnpm install     # picks up @fontsource/barlow + barlow-condensed
    pnpm dev
    pnpm typecheck && pnpm test

## What changed, and why

**Theme.** \`tokens.css\` keeps its shape — same variable names, same layers — but
carries the Industry values: ground \`#f2f2f3\`, text \`#1d1f20\`, one steel accent
\`#5980a6\`, Barlow Condensed headings over Barlow, \`--radius-card: 0\`. Dark mode
is the deep steel pair. Because every component styles against \`var(--*)\`, the
existing pages (\`/work\`, \`/about\`, \`/resume\`, case studies) retheme for free.

New in the same file: \`.eyebrow\` (the condensed section label), \`.blueprint\` +
\`.corner\` (registration marks), \`.duotone\` (photographs printed into the
accent), \`.reveal\` (scroll entrance). Instrument Serif and Inter are gone.

**Colour.** Steel stays the primary accent; a copper second accent
(\`--accent-2\`) carries the counting elements only — section indices, card
numbers, dates, the "+" markers, principle titles and the secondary button.
The stack list uses tinted \`.chip\` instead of grey. Two accents, no more.

**Home** is now the whole site: hero + spec panel, selected work, experience
ledger, stack, about, contact. Copy comes from \`content/home.ts\`;
experience rows read \`resume.roles\` and the cards read \`featuredProjects\`, so
nothing is duplicated. The contact panel reuses \`ContactFormLazy\` — the real
form, still posting to \`/api/contact\`.

**Nav** points at anchors on \`/\` (\`/#work\`, \`/#experience\`, …). The standalone
routes still exist and are still prerendered; the case-study links on the work
cards go to them. \`Header\` no longer uses \`NavLink\` (anchors have no
active state), so \`cn\` is no longer imported there.

## Two things to check before pushing

1. \`e2e/site.spec.ts\` asserts against the old header nav labels and the old
   home layout — expect a couple of failures there, and update the selectors.
2. \`site.resumePath\` drives both résumé buttons; the PDF is already in
   \`apps/web/public/\`. Rename the portrait if you prefer a hashed asset.

## Design source

\`Portfolio.dc.html\` in the design project is the reference. If we change the
design again, the port touches the same files listed above.
