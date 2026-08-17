# @vcm/content

Every user-facing string on the site, as typed data.

Content is data, so it gets a type and a test. `src/content.test.ts` asserts the
invariants that would otherwise break silently:

- project slugs are unique
- featured projects are ordered by their explicit `order` field
- every project carries the SEO fields the route builder needs
- every case study has a matching project
- all case studies follow the same narrative section order
- employer work is flagged `confidential`, so the disclosure note renders
- no banned marketing phrase ("passionate", "results-driven", "cutting-edge",
  "pixel-perfect", …) appears anywhere in the site copy

That last test is the useful one. It is easy to drift back into résumé language
six months later; a failing test is a better guard than good intentions.

Consumed as TypeScript source — no build step. Import from the package root:

```ts
import { site, featuredProjects, getCaseStudy } from '@vcm/content'
```
