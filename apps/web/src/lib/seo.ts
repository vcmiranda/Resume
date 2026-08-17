import { site } from '@vcm/content'

export type PageMeta = {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  path: string
  /** Serialized into a <script type="application/ld+json"> tag. */
  jsonLd?: Record<string, unknown>
}

export type ResolvedMeta = Required<Omit<PageMeta, 'jsonLd'>> & {
  canonical: string
  ogImage: string
  jsonLd?: Record<string, unknown>
}

/** One place that builds metadata. No component hand-writes a meta tag. */
export function buildMeta(meta: PageMeta): ResolvedMeta {
  const title = meta.title.includes(site.name) ? meta.title : `${meta.title} — ${site.name}`
  return {
    ...meta,
    title,
    ogTitle: meta.ogTitle ?? meta.title,
    ogDescription: meta.ogDescription ?? meta.description,
    canonical: new URL(meta.path, site.canonicalUrl).toString(),
    ogImage: new URL('/og/default.png', site.canonicalUrl).toString(),
  }
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.title,
  url: site.canonicalUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.social.linkedin, site.social.github],
  worksFor: { '@type': 'Organization', name: 'ASICS Apps' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  knowsAbout: [
    'React',
    'TypeScript',
    'Design Systems',
    'State Management',
    'Web Performance',
    'Frontend Architecture',
  ],
}

export function articleJsonLd(args: { headline: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.headline,
    description: args.description,
    url: new URL(args.path, site.canonicalUrl).toString(),
    author: { '@type': 'Person', name: site.name, url: site.canonicalUrl },
  }
}

/** Serializes resolved metadata into the <head> markup used by the prerenderer. */
export function metaToHtml(meta: ResolvedMeta): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${esc(meta.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(meta.ogDescription)}" />`,
    `<meta property="og:url" content="${esc(meta.canonical)}" />`,
    `<meta property="og:image" content="${esc(meta.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(meta.ogDescription)}" />`,
    `<meta name="twitter:image" content="${esc(meta.ogImage)}" />`,
  ]

  if (meta.jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`,
    )
  }

  return tags.join('\n    ')
}
