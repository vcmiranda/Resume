import { useEffect } from 'react'
import type { ResolvedMeta } from '@/lib/seo'

/**
 * The prerenderer writes the real <head> into each static HTML file, so this
 * only needs to keep the document in sync during client-side navigation.
 */
export function Seo({ meta }: { meta: ResolvedMeta }) {
  useEffect(() => {
    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.ogTitle)
    setMeta('property', 'og:description', meta.ogDescription)
    setMeta('property', 'og:url', meta.canonical)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = meta.canonical
  }, [meta])

  return null
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}
