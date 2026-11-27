import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight, Phone } from '../components/Icons.jsx'
import { homeServiceGroups } from '../lib/homeServices.js'

export default function HomeServices() {
  return (
    <>
      <Seo
        title="All Home Nursing Services in Visakhapatnam | Genesis Health Care"
        description="22 clinical home nursing services in Visakhapatnam and Vizianagaram: injections, IV therapy, wound care, catheter care, Ryles tube, nebulization and more. Call 79972 72721."
      />

      {/* Hero */}
      <section className="hsp-hero">
        <div className="container hsp-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link to="/home-care">Home Care</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span aria-current="page">All Services</span>
          </nav>
          <span className="hsp-hero__badge hsp-hero__badge--teal">Home Nursing Services</span>
          <h1>All Home Nursing Services in Visakhapatnam</h1>
          <p className="lead">
            Professional clinical nursing services at your home in Visakhapatnam and Vizianagaram.
            All services require a valid doctor&apos;s prescription. Call 79972 72721 to book.
          </p>
          <div className="hsp-hero__cta">
            <a href="tel:+917997272721" className="btn btn--white btn-lg">
              <Phone /> 79972 72721
            </a>
            <Link to="/contact" className="btn btn--outline-white btn-lg">
              Send an Enquiry <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grouped */}
      <section className="section section--white">
        <div className="container">
          {homeServiceGroups.map((g, gi) => (
            <Reveal key={g.group} delay={gi + 1}>
              <div className="hs-group">
                <h2 className={`hs-group__title hs-group__title--${g.color}`}>{g.group}</h2>
                <div className="hs-cards">
                  {g.services.map((s) => (
                    <Link key={s.slug} to={`/${s.slug}`} className={`hs-card hs-card--${g.color}`}>
                      <span className="hs-card__name">{s.title}</span>
                      <span className="hs-card__intro">{s.intro}</span>
                      <span className="hs-card__link">
                        View & Book <ArrowRight style={{ width: 15, height: 15 }} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need a Home Nursing Service in Vizag?"
        text="Call 79972 72721 or 70410 81081. Share your prescription and location and we will arrange a nursing visit."
      />
    </>
  )
}
