import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import BlogCard from '../components/BlogCard.jsx'
import NotFound from './NotFound.jsx'
import { ArrowRight, Phone, Check } from '../components/Icons.jsx'
import { posts, getPost, formatDate, tagRoute, BLOG_AUTHOR } from '../lib/blogData.js'
import { SITE_URL, SITE_IMAGE } from '../lib/seoData.js'

// Paragraphs and a checklist. A list item is plain text, or { b: 'Bold label', t: 'text' }.
function PostBlock({ block }) {
  return (
    <>
      {block.paragraphs && block.paragraphs.map((t) => <p key={t}>{t}</p>)}
      {block.list && (
        <ul className="blog-post__list">
          {block.list.map((item) => {
            const label = typeof item === 'string' ? null : item.b
            const text = typeof item === 'string' ? item : item.t
            return (
              <li key={label || text}>
                <Check />
                <span>{label && <strong>{label}: </strong>}{text}</span>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <NotFound />

  const url = `${SITE_URL}/blog/${post.slug}`
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: BLOG_AUTHOR },
    publisher: {
      '@type': 'Organization',
      name: 'Genesis Health Care Enterprises',
      logo: { '@type': 'ImageObject', url: SITE_IMAGE },
    },
  }

  return (
    <>
      <Seo image={post.image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="blog-hero">
        <div className="container blog-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/blog">Blog</Link>
          </nav>
          <span className="blog-card__cat blog-card__cat--static">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog-meta blog-meta--light">
            By {BLOG_AUTHOR} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMins} min read
          </p>
        </div>
      </section>

      <article className="section section--white">
        <div className="container blog-post">
          <img
            className={`blog-post__img${post.imageSize ? ' blog-post__img--whole' : ''}`}
            src={post.image}
            alt={post.imageAlt}
            width={post.imageSize ? post.imageSize[0] : 900}
            height={post.imageSize ? post.imageSize[1] : 560}
          />

          <p className="blog-post__lead">{post.excerpt}</p>

          {post.sections.map((s) => (
            <section key={s.heading} className="blog-post__section">
              <h2>{s.heading}</h2>
              <PostBlock block={s} />
              {s.subsections && s.subsections.map((sub) => (
                <div key={sub.heading} className="blog-post__sub">
                  <h3>{sub.heading}</h3>
                  <PostBlock block={sub} />
                </div>
              ))}
              {s.after && s.after.map((t) => <p key={t}>{t}</p>)}
            </section>
          ))}

          {post.tags && (
            <div className="blog-post__tags">
              <h2>Related Searches in Vizag</h2>
              <ul className="hc-chips" aria-label="Related topics" style={{ listStyle: 'none', padding: 0 }}>
                {post.tags.map((t) => (
                  <li key={t}>
                    <Link to={tagRoute(t)} className="hc-chip hc-chip--link">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="callout blog-post__note">
            <p>
              <strong>Please note:</strong> This article is general information and not medical advice.
              Always follow your doctor&apos;s advice for your own situation.
            </p>
          </div>

          <div className="blog-post__cta">
            {post.cta && (
              <Link to={post.cta.to} className="btn btn--primary btn-lg">
                {post.cta.label} <ArrowRight />
              </Link>
            )}
            <a href="tel:+917041081081" className="btn btn--ghost btn-lg">
              <Phone /> Call 70410 81081
            </a>
          </div>
        </div>
      </article>

      <section className="section section--soft">
        <div className="container">
          <h2 className="blog-related__title">More from our blog</h2>
          <div className="blog-grid">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i + 1}>
                <BlogCard post={p} showExcerpt={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need Help in Visakhapatnam?"
        text="Call 70410 81081 for medical equipment, home nursing, old age home care or patient transport."
      />
    </>
  )
}
