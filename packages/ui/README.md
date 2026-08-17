# @vcm/ui

Design system for vcmiranda.me: tokens plus the primitives built on them.

- `src/styles/tokens.css` — the whole visual language. Tailwind v4 `@theme`
  tokens (type scale, spacing, easing), light/dark custom properties, base
  element styles, the four custom utilities (`container-page`, `measure`,
  `display`, `text-muted`), and the long-form prose styles.
- `src/*.tsx` — `Button`, `Badge`, `Input`, `Textarea`, `Label`. Radix underneath
  where accessibility is easy to get wrong (`Label`, `Slot`).
- `src/cn.ts` — `clsx` + `tailwind-merge`.

Consumed as TypeScript source; there is no build step. A consuming app imports
`@vcm/ui/tokens.css` after `@import 'tailwindcss'`, and must declare this
package as a Tailwind source so its class usage is scanned:

```css
@import 'tailwindcss';
@source '../../../../packages/ui/src';
@import '@vcm/ui/tokens.css';
```

## Conventions

Two weights per family, maximum. Nothing off the type or spacing scale. One
accent colour, used only for links, focus rings and the primary action. Focus
indicators are never removed — `:focus-visible` is styled once in `tokens.css`
and inherited everywhere.
