import { useEffect } from 'react'

export const SITE_URL = 'https://www.genesishealthcareenterprises.com'

// Updates document title and meta description per page for SEO.
// Since this is a client-rendered app, these run after hydration; for full
// SEO a pre-render/SSR step is recommended, but this keeps per-page tags correct.
export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    // Canonical URL always points at the primary domain (www), whichever host served the page.
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    let canon = document.querySelector('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.setAttribute('rel', 'canonical')
      document.head.appendChild(canon)
    }
    canon.setAttribute('href', `${SITE_URL}${path === '/' ? '/' : path}`)

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
