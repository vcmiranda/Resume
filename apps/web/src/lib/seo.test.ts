import { describe, expect, it } from 'vitest'
import { buildMeta, metaToHtml } from './seo'
import { pages } from '@/routes'

describe('buildMeta', () => {
  it('appends the site name to a page title', () => {
    expect(buildMeta({ path: '/x', title: 'Work', description: 'd' }).title).toBe(
      'Work — Vitor Miranda',
    )
  })

  it('does not duplicate the site name when it is already present', () => {
    const meta = buildMeta({ path: '/', title: 'Vitor Miranda — Senior Frontend Engineer', description: 'd' })
    expect(meta.title.match(/Vitor Miranda/g)).toHaveLength(1)
  })

  it('builds an absolute canonical URL', () => {
    expect(buildMeta({ path: '/work', title: 't', description: 'd' }).canonical).toBe(
      'https://www.vcmiranda.me/work',
    )
  })

  it('falls back to the page title and description for Open Graph', () => {
    const meta = buildMeta({ path: '/a', title: 'T', description: 'D' })
    expect(meta.ogTitle).toBe('T')
    expect(meta.ogDescription).toBe('D')
  })
})

describe('metaToHtml', () => {
  it('escapes quotes and angle brackets so attributes cannot break out', () => {
    const html = metaToHtml(buildMeta({ path: '/a', title: 'T', description: 'a "b" <c>' }))
    expect(html).toContain('&quot;b&quot;')
    expect(html).toContain('&lt;c&gt;')
    expect(html).not.toContain('<c>')
  })

  it('emits a canonical link and social tags', () => {
    const html = metaToHtml(buildMeta({ path: '/a', title: 'T', description: 'D' }))
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('og:image')
    expect(html).toContain('twitter:card')
  })
})

describe('route metadata', () => {
  it('gives every route a unique title, description and canonical URL', () => {
    expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length)
    expect(new Set(pages.map((p) => p.description)).size).toBe(pages.length)
    expect(new Set(pages.map((p) => p.canonical)).size).toBe(pages.length)
  })

  it('keeps descriptions within the length search engines display', () => {
    for (const page of pages) {
      expect(page.description.length, page.path).toBeLessThanOrEqual(170)
    }
  })
})
