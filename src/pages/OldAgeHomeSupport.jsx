import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  HomeCare, HeartPlus, Stethoscope, Sparkle, Bed, Elderly, Users, Clock, Shield,
  Phone, ArrowRight, Check,
} from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    icon: HomeCare, color: 'teal', n: '01', tag: 'Finding the Right Home',
    title: 'Assisted Living Arrangement',
    text: 'Help finding safe, clean old age homes in AP & Gujarat.',
  },
  {
    icon: HeartPlus, color: 'rose', n: '02', tag: 'Comfort Care',
    title: 'Hospice Care at Old Age Home',
    text: 'End-of-life comfort care with prayer and pain management.',
  },
  {
    icon: Stethoscope, color: 'violet', n: '03', tag: 'Nursing',
    title: 'Regular Nurse Visits to Old Age Home',
    text: 'For residents already in old age homes.',
  },
  {
    icon: Sparkle, color: 'amber', n: '04', tag: 'Daytime Support',
    title: 'Day Care for Seniors',
    text: 'Social engagement, activities, meals, basic care.',
  },
  {
    icon: Bed, color: 'sky', n: '05', tag: 'Ongoing Care',
    title: 'Long-term Care Support',
    text: 'For chronic illnesses, dementia, bedridden seniors.',
  },
]

const philosophy = [
  { icon: Elderly,    color: 'violet', title: 'Age with Dignity',                            text: 'Every senior deserves to age with dignity, respect, and compassion.' },
  { icon: HeartPlus,  color: 'rose',   title: 'Social & Emotional Needs Matter',             text: 'As much as medical needs.' },
  { icon: Users,      color: 'teal',   title: 'Family Involvement Encouraged',               text: 'Families remain at the heart of every care decision.' },
  { icon: Sparkle,    color: 'amber',  title: 'Prayer & Spiritual Support Available',        text: 'Comfort for the mind and spirit as well as the body.' },
]

const whenToConsider = [
  { icon: Clock,      color: 'rose',   text: 'When 24/7 medical supervision is needed' },
  { icon: Users,      color: 'violet', text: 'When family cannot provide full-time care' },
  { icon: HeartPlus,  color: 'amber',  text: 'When loneliness is affecting health' },
  { icon: Shield,     color: 'teal',   text: 'When home environment is unsafe for the senior' },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function OldAgeHomeSupport() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Genesis Old Age Home Support',
    serviceType: 'Old age home placement support, hospice care, nurse visits, senior day care and long-term care',
    provider: {
      '@type': 'Organization',
      name: 'Genesis Health Care Enterprises',
      telephone: '+917041081081',
      email: 'info@genesishealthcareenterprises.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Old age home related services',
      itemListElement: services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })),
    },
  }

  return (
    <>
      <Seo
        title="Old Age Home Support in Andhra Pradesh | Assisted Living, Hospice & Senior Day Care – Genesis"
        description="Genesis Old Age Home Support: help finding safe old age homes, hospice care, regular nurse visits, day care for seniors and long-term care for dementia and bedridden seniors. Call 70410 81081."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageBanner
        colorVariant="rose"
        badge="💗 Genesis Old Age Home Support"
        title="Genesis Old Age Home Support"
        description="We believe every senior deserves to age with dignity, respect, and compassion."
        stats={[
          { value: '5', label: 'Support Services' },
          { value: 'Dignity', label: 'Respect & Compassion' },
          { value: 'Family', label: 'Involvement Encouraged' },
        ]}
      />

      {/* ── Intro + call card ── */}
      <section className="hc-intro hc-intro--rose">
        <div className="container">
          <div className="hc-intro__grid">
            <Reveal className="hc-intro__text">
              <span className="eyebrow eyebrow--rose">Old Age Home Support</span>
              <h2>Compassionate Help for Seniors and Their Families</h2>
              <p>
                We believe <strong>every senior deserves to age with dignity, respect, and compassion</strong>.
              </p>
              <p>
                While we primarily provide <strong>home care</strong>, we also support families in{' '}
                <strong>finding or transitioning to quality old age homes or assisted living facilities</strong>.
              </p>
            </Reveal>

            <Reveal delay={2} className="hc-call-card hc-call-card--rose">
              <span className="hc-call-card__badge">Talk to Us</span>
              <h3>Not Sure What Is Best?</h3>
              <p>Tell us about your parent's needs. We will help you decide between care at home and an old age home.</p>
              <a href="tel:+917041081081" className="hc-call-card__num"><Phone /> 70410 81081</a>
              <a href="tel:+917997272721" className="hc-call-card__num"><Phone /> 79972 72721</a>
              <Link to="/contact" className="btn btn--white btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
                Send an Enquiry <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="What We Offer" eyebrowColor="rose" title="Our Old Age Home Related Services">
            Support for families at every stage of senior care.
          </SectionHeading>
          <div className="hc-grid oas-grid">
            {services.map(({ icon: Icon, color, n, tag, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
                <article className={`hc-card jt-card hc-card--${color}`}>
                  <div className="hc-card__top">
                    <span className="hc-card__num">{n}</span>
                    <span className={`hc-card__icon hc-card__icon--${color}`}><Icon /></span>
                  </div>
                  <span className={`hc-card__tag hc-card__tag--${color}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p className="hc-card__intro">{text}</p>
                  <a href="tel:+917041081081" className={`hc-card__link hc-card__link--${color}`}>
                    Ask about this service <ArrowRight />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section oh-why">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="oh-why__heading">
            <SectionHeading eyebrow="Our Philosophy" eyebrowColor="rose" title="Our Philosophy for Seniors">
              The beliefs that shape every decision we make for your loved ones.
            </SectionHeading>
          </div>
          <div className="oas-philosophy">
            {philosophy.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) + 1}>
                <div className="oh-why__card">
                  <span className={`meq-why-icon meq-why-icon--${color}`}><Icon /></span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── When to consider ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Making the Decision" eyebrowColor="amber" title="When to Consider Old Age Home Support?">
            These signs often tell a family that extra support is needed.
          </SectionHeading>
          <div className="oas-when">
            {whenToConsider.map(({ icon: Icon, color, text }, i) => (
              <Reveal key={text} delay={(i % 4) + 1}>
                <div className={`oas-when__card oas-when__card--${color}`}>
                  <span className="oas-when__icon"><Icon /></span>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="oas-note">
            <Check />
            <p>
              If one or more of these sounds familiar, call us. We will talk through your options with you —
              there is no pressure, and families are always involved in the decision.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Every Senior Deserves to Age with Dignity"
        text="Call 70410 81081 to talk about old age home support, day care or long-term care for your loved one."
      />
    </>
  )
}
