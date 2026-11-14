// Runs after `vite build`. Writes one HTML file per route (dist/<route>/index.html)
// with the right <title>, description, canonical and Open Graph tags already in the HTML.
// Google, Bing and link previews (WhatsApp, Facebook) read these without running JavaScript.
// The React app still loads normally and takes over in the browser.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { seoData, SITE_URL } from '../src/lib/seoData.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Replace the content="" of an existing tag, or return the html unchanged if it is missing.
const setMeta = (html, matcher, content) =>
  html.replace(matcher, (_m, pre, _old, post) => `${pre}${esc(content)}${post}`)

let count = 0
for (const [route, d] of Object.entries(seoData)) {
  const url = `${SITE_URL}${route === '/' ? '/' : route}`
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(d.title)}</title>`)
  html = setMeta(html, /(<meta name="description" content=")([^"]*)(")/, d.description)
  html = setMeta(html, /(<meta name="keywords" content=")([^"]*)(")/, d.keywords)
  html = setMeta(html, /(<meta property="og:title" content=")([^"]*)(")/, d.title)
  html = setMeta(html, /(<meta property="og:description" content=")([^"]*)(")/, d.description)
  html = setMeta(html, /(<meta property="og:url" content=")([^"]*)(")/, url)
  html = setMeta(html, /(<link rel="canonical" href=")([^"]*)(")/, url)

  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), html)
  } else {
    const dir = join(dist, route.slice(1))
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
  }
  count++
}
console.log(`prerender-meta: wrote SEO tags for ${count} routes`)
