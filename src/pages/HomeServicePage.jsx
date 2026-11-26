import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { Check, ArrowRight, Phone } from '../components/Icons.jsx'
import { getHomeService, homeServiceGroups } from '../lib/homeServices.js'
import { SITE_URL } from '../lib/seoData.js'

export default function HomeServicePage() {
  const { slug } = useParams()
  const svc = getHomeService(slug)
  if (!svc) return <NotFound />

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.h1,
    description: svc.intro,
    url: `${SITE_URL}/${svc.slug}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: [
      { '@type': 'City', name: 'Visakhapatnam' },
      { '@type': 'City', name: 'Vizianagaram' },
    ],
  }

  return (
    <>
      <Seo
        title={svc.metaTitle}
        description={svc.metaDesc}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="hsp-hero">
        <div className="container hsp-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/home-care">Home Care</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span aria-current="page">{svc.title}</span>
          </nav>
          <span className={`hsp-hero__badge hsp-hero__badge--${svc.color}`}>{svc.group}</span>
          <h1>{svc.h1}</h1>
          <p className="lead">{svc.intro}</p>
          <div className="hsp-hero__cta">
            <a href="tel:+917997272721" className="btn btn--white btn-lg">
              <Phone /> 79972 72721
            </a>
            <Link to="/contact" className="btn btn--outline-white btn-lg">
              Book this Service <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="section section--white">
        <div className="container hsp-content">
          <div className="hsp-main">
            <Reveal>
              <h2>What We Provide</h2>
              <ul className="hsp-checklist">
                {svc.points.map(p => (
                  <li key={p}><Check /><span>{p}</span></li>
                ))}
              </ul>
            </Reveal>

            {svc.note && (
              <Reveal>
                <div className="callout hsp-note">
                  <p><strong>Important:</strong> {svc.note}</p>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div className="hsp-contact-card">
                <h3>Book This Service</h3>
                <p>Call us or send an enquiry. Share your prescription and location and our team will confirm availability and pricing.</p>
                <a href="tel:+917997272721" className="hsp-contact-card__num"><Phone /> 79972 72721</a>
                <a href="tel:+917041081081" className="hsp-contact-card__num"><Phone /> 70410 81081</a>
                <Link to="/contact" className="btn btn--primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.75rem' }}>
                  Send an Enquiry <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Related services */}
          <aside className="hsp-related">
            <h3>Other Home Care Services</h3>
            <nav>
              {homeServiceGroups.map(g => (
                <div key={g.group} className="hsp-related__group">
                  <span className={`hsp-related__label hsp-related__label--${g.color}`}>{g.group}</span>
                  {g.services.map(s => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className={`hsp-related__link${s.slug === slug ? ' is-active' : ''}`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Need This Service in Visakhapatnam or Vizianagaram?"
        text="Call 79972 72721 or 70410 81081. Share your prescription and location and our team will arrange a nursing visit."
      />
    </>
  )
}
