import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { posts } from '../lib/blogData.js'
import { SITE_URL } from '../lib/seoData.js'

export default function Blog() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Genesis Health Care Blog',
    url: `${SITE_URL}/blog`,
    publisher: { '@id': `${SITE_URL}/#business` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  }

  return (
    <>
      <Seo />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageBanner
        colorVariant="teal"
        badge="📝 Health Care Blog"
        title="Health Care Blog"
        description="Practical guides on medical equipment, home care and senior care, written for families in Visakhapatnam."
        stats={[
          { value: String(posts.length), label: 'Guides' },
          { value: 'Vizag', label: 'Local Advice' },
          { value: 'Free', label: 'To Read' },
        ]}
      />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Latest Articles" eyebrowColor="teal" title="Guides and Tips for Patients and Families">
            Learn how to choose equipment, care for a loved one at home and plan senior care.
          </SectionHeading>

          <div className="blog-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) + 1}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a Question About Care or Equipment?"
        text="Call 70410 81081 and our team in Visakhapatnam will be happy to help."
      />
    </>
  )
}
