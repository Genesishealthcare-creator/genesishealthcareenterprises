import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoData, normalisePath, SITE_URL, SITE_NAME, SITE_IMAGE } from '../lib/seoData.js'

export { SITE_URL }

// Sets title, description, keywords, canonical, Open Graph, Twitter and robots tags.
// Values come from src/lib/seoData.js (single source of truth, also used at build time
// to pre-render per-page tags). The `title` / `description` props are only a fallback
// for routes that are not listed there, such as the 404 page.
function setTag(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

export default function Seo({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = normalisePath(pathname)
    const data = seoData[path]
    const finalTitle = data?.title || title
    const finalDesc = data?.description || description
    const url = `${SITE_URL}${path === '/' ? '/' : path}`

    if (finalTitle) document.title = finalTitle
    if (finalDesc) setTag('meta[name="description"]', 'meta', { name: 'description', content: finalDesc })
    if (data?.keywords) setTag('meta[name="keywords"]', 'meta', { name: 'keywords', content: data.keywords })

    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })

    // Pages that are not real routes (404) must not be indexed.
    setTag('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: data ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    })

    // Open Graph + Twitter (link previews)
    const og = {
      'og:site_name': SITE_NAME,
      'og:type': 'website',
      'og:locale': 'en_IN',
      'og:title': finalTitle || SITE_NAME,
      'og:description': finalDesc || '',
      'og:url': url,
      'og:image': SITE_IMAGE,
    }
    Object.entries(og).forEach(([prop, content]) =>
      setTag(`meta[property="${prop}"]`, 'meta', { property: prop, content }),
    )
    const tw = {
      'twitter:card': 'summary',
      'twitter:title': finalTitle || SITE_NAME,
      'twitter:description': finalDesc || '',
      'twitter:image': SITE_IMAGE,
    }
    Object.entries(tw).forEach(([name, content]) =>
      setTag(`meta[name="${name}"]`, 'meta', { name, content }),
    )
  }, [pathname, title, description])

  return null
}
