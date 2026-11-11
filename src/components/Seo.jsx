import { useEffect } from 'react'

// Updates document title and meta description per page for SEO.
// Since this is a client-rendered app, these run after hydration; for full
// SEO a pre-render/SSR step is recommended, but this keeps per-page tags correct.
export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

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
