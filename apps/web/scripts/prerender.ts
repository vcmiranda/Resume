/**
 * Prerender every route to static HTML.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For each page declared in src/routes.tsx it renders the React tree to a
 * string, injects it plus that route's <head> into the built index.html, and
 * writes the file. Also emits sitemap.xml and robots.txt from the same list,
 * so the three can never drift apart.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')

type ResolvedMeta = {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  path: string
  canonical: string
  ogImage: string
  jsonLd?: Record<string, unknown>
}

async function main() {
  const { render, pages, metaToHtml } = (await import(
    join(distDir, 'server/entry-server.js')
  )) as {
    render: (url: string) => string
    pages: ResolvedMeta[]
    metaToHtml: (m: ResolvedMeta) => string
  }

  const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

  for (const page of pages) {
    const html = render(page.path)
    const head = metaToHtml(page)
    const out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)

    const filePath =
      page.path === '/' ? join(distDir, 'index.html') : join(distDir, `${page.path.slice(1)}.html`)

    mkdirSync(dirname(filePath), { recursive: true })
    writeFileSync(filePath, out)
    console.log(`  prerendered ${page.path}`)
  }

  writeSitemap(pages)
  writeRobots(pages)
  console.log(`\n  ${pages.length} routes prerendered`)
}

function writeSitemap(pages: ResolvedMeta[]) {
  const urls = pages
    .filter((p) => p.path !== '/404')
    .map(
      (p) =>
        `  <url><loc>${p.canonical}</loc><changefreq>monthly</changefreq><priority>${p.path === '/' ? '1.0' : '0.8'}</priority></url>`,
    )
    .join('\n')

  writeFileSync(
    join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  console.log('  wrote sitemap.xml')
}

function writeRobots(pages: ResolvedMeta[]) {
  const origin = new URL(pages[0]!.canonical).origin
  writeFileSync(
    join(distDir, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  )
  console.log('  wrote robots.txt')
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
