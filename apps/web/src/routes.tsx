import type { RouteObject } from 'react-router'
import { RootLayout } from '@/components/layout/RootLayout'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'
import { CaseStudy } from '@/pages/CaseStudy'
import { About } from '@/pages/About'
import { Resume } from '@/pages/Resume'
import { NotFound } from '@/pages/NotFound'
import { projects, site } from '@vcm/content'
import { articleJsonLd, buildMeta, personJsonLd, type ResolvedMeta } from '@/lib/seo'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:slug', element: <CaseStudy /> },
      { path: 'about', element: <About /> },
      { path: 'resume', element: <Resume /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

/**
 * Every prerendered path and its metadata. The build script walks this list,
 * so adding a route here is the only step needed to get a static HTML file,
 * a sitemap entry, and correct social tags.
 */
export const pages: ResolvedMeta[] = [
  buildMeta({
    path: '/',
    title: `${site.name} — ${site.title}`,
    description:
      'Senior frontend engineer in London, Ontario. React, TypeScript, design systems and state architecture. Nine years building web applications, currently at ASICS Apps.',
    ogTitle: `${site.name} — ${site.title}`,
    ogDescription:
      'Architecture, design systems, and choosing the right state model for the problem. Selected work and case studies.',
    jsonLd: personJsonLd,
  }),
  buildMeta({
    path: '/work',
    title: 'Work',
    description:
      'Case studies on building a platform frontend from scratch and building a native macOS file manager.',
    ogTitle: 'Selected work',
    ogDescription: 'Two projects, in enough detail to be useful.',
  }),
  ...projects.map((p) =>
    buildMeta({
      path: `/work/${p.slug}`,
      title: p.seo.title,
      description: p.seo.description,
      ogTitle: p.seo.ogTitle,
      ogDescription: p.seo.ogDescription,
      jsonLd: articleJsonLd({
        headline: p.seo.title,
        description: p.seo.description,
        path: `/work/${p.slug}`,
      }),
    }),
  ),
  buildMeta({
    path: '/about',
    title: 'About',
    description:
      'Senior frontend engineer in London, Ontario. Nine years in web development, after a career in consulting and teaching.',
  }),
  buildMeta({
    path: '/resume',
    title: 'Résumé',
    description:
      'Senior frontend engineer. React, TypeScript, design systems, state architecture. Download as PDF.',
  }),
  buildMeta({
    path: '/404',
    title: 'Not found',
    description: 'That page does not exist.',
  }),
]

export function metaForPath(path: string): ResolvedMeta {
  return pages.find((p) => p.path === path) ?? pages[0]!
}
