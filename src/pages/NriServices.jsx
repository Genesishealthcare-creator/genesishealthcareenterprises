import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  Elderly, Monitor, Stethoscope, Flask, Hands, Clock, Video, Bed, Ambulance, Pill, FileText,
  HeartPlus, Wallet, Shield, Users, Globe, Phone, ArrowRight, Eye,
} from '../components/Icons.jsx'

const WHATSAPP = 'https://wa.me/917041081081?text=' +
  encodeURIComponent('Hello Genesis Health Care, I am an NRI and would like to arrange care for my parents in India.')

/* ─────────────────────────── DATA ─────────────────────────── */

const senses = [
  { icon: Eye,   label: 'Your Eyes' },
  { icon: Phone, label: 'Your Ears' },
  { icon: Hands, label: 'Your Hands' },
]

const packageItems = [
  { icon: Elderly,     color: 'teal',    title: '24/7 Caretaker for Elderly Parents', text: 'Trained, verified, language-comfortable.' },
  { icon: Monitor,     color: 'violet',  title: 'Regular Health Monitoring',          text: 'BP, sugar, oxygen, medication reminders.' },
  { icon: Stethoscope, color: 'rose',    title: 'Doctor Consultation at Home',        text: 'Without parents needing to travel.' },
  { icon: Flask,       color: 'sky',     title: 'Lab Tests at Home',                  text: 'Sample collection, report delivery.' },
  { icon: Hands,       color: 'amber',   title: 'Physiotherapy at Home',              text: 'For mobility & pain relief.' },
  { icon: Clock,       color: 'rose',    title: 'Emergency Response Plan',            text: 'We step in within hours if needed.' },
  { icon: Video,       color: 'violet',  title: 'Video Call Updates',                 text: 'You can see your parents during our visit.' },
  { icon: Bed,         color: 'teal',    title: 'Medical Equipment on Rent',          text: 'Bed, oxygen, wheelchair delivered home.' },
  { icon: Ambulance,   color: 'sky',     title: 'Patient Transport',                  text: 'For hospital visits or emergencies.' },
  { icon: Pill,        color: 'emerald', title: 'Medication Delivery',                text: 'Pharmacy at home.' },
  { icon: FileText,    color: 'amber',   title: 'Monthly Health Report',              text: 'Sent to you via WhatsApp/Email.' },
]

const trust = [
  { icon: HeartPlus, color: 'rose',    title: 'Prayerful, Compassionate Care', text: 'Care given with kindness, prayer and respect for your parents.' },
  { icon: Wallet,    color: 'teal',    title: 'Transparent Billing',           text: 'You pay online, securely, from anywhere in the world.' },
  { icon: Clock,     color: 'violet',  title: 'Updates Across Time Zones',     text: 'Regular updates even if you are in a different time zone.' },
  { icon: Shield,    color: 'emerald', title: 'Recommended by Leading Hospitals', text: 'Trusted by hospitals and doctors in Andhra Pradesh.' },
  { icon: Users,     color: 'sky',     title: 'Your Language, Your Comfort',   text: 'We speak English, Hindi, Gujarati, Telugu, and more.' },
]

const steps = [
  { step: '01', title: 'You Call or WhatsApp',     text: 'Reach us from abroad on call or WhatsApp, any time.' },
  { step: '02', title: 'We Assess the Needs',      text: 'We understand your parent\'s health and daily-care needs.' },
  { step: '03', title: 'Caretaker / Nurse Assigned', text: 'A suitable trained caretaker or nurse is assigned.' },
  { step: '04', title: 'Daily / Weekly Updates',   text: 'We send you updates so you always know how they are.' },
  { step: '05', title: 'You Pay Online',           text: 'Pay securely online, with transparent billing.' },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function NriServices() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Exclusive Services for NRIs — Elderly Parent Care in India',
    serviceType: 'Home care, health monitoring and medical support for NRIs\' parents',
    provider: {
      '@type': 'Organization',
      name: 'Genesis Health Care Enterprises',
      telephone: '+917041081081',
      email: 'info@genesishealthcareenterprises.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
    },
    areaServed: { '@type': 'City', name: 'Visakhapatnam' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'NRI services package',
      itemListElement: packageItems.map(i => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.title, description: i.text } })),
    },
  }

  return (
    <>
      <Seo
        title="NRI Services: Care for Aging Parents in India | Home Nursing in Visakhapatnam – Genesis"
        description="Living abroad? Genesis Health Care takes care of your elderly parents in India: 24/7 caretaker, health monitoring, doctor and lab tests at home, video call updates and monthly reports. Call or WhatsApp 70410 81081."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageBanner
        colorVariant="violet"
        badge="🌍 Exclusive Services for NRIs"
        title="Exclusive Services for NRIs"
        description="Take care of your aging parents in India — from anywhere in the world."
        stats={[
          { value: '24/7', label: 'Caretaker' },
          { value: '11', label: 'Services in One Package' },
          { value: '4+', label: 'Languages Spoken' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="hc-intro">
        <div className="container">
          <div className="hc-intro__grid">
            <Reveal className="hc-intro__text">
              <span className="eyebrow eyebrow--violet">For NRIs</span>
              <h2>Your Heart Is With Your Parents. We Are Their Hands.</h2>
              <p>
                We understand. You live abroad, but your heart is with your elderly parents in{' '}
                <strong>Andhra Pradesh</strong> or <strong>Gujarat</strong>. You worry about their{' '}
                <strong>health, safety, and loneliness</strong>.
              </p>
              <p>
                <strong>Genesis Home Care Nursing becomes your eyes, ears, and hands at home.</strong>
              </p>
              <div className="nri-senses">
                {senses.map(({ icon: Icon, label }) => (
                  <span key={label} className="nri-sense"><Icon />{label}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2} className="hc-call-card">
              <span className="hc-call-card__badge">Calling From Abroad?</span>
              <h3>Call or WhatsApp Us</h3>
              <p>Tell us about your parents. We will assess their needs and assign the right caretaker or nurse.</p>
              <a href="tel:+917041081081" className="hc-call-card__num"><Phone /> +91 70410 81081</a>
              <a href="tel:+917997272721" className="hc-call-card__num"><Phone /> +91 79972 72721</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--white btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
                Chat on WhatsApp <ArrowRight />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Package ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="NRI Services Package" eyebrowColor="violet" title="Our NRI Services Package Includes">
            Everything your parents need, arranged by one trusted team.
          </SectionHeading>
          <div className="nri-grid">
            {packageItems.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
                <article className={`nri-card nri-card--${color}`}>
                  <span className="nri-card__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`meq-why-icon meq-why-icon--${color}`}><Icon /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NRIs trust us ── */}
      <section className="section oh-why">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="oh-why__heading">
            <SectionHeading eyebrow="Trust" eyebrowColor="rose" title="Why NRIs Trust Us">
              Families abroad rely on Genesis for peace of mind.
            </SectionHeading>
          </div>
          <div className="nri-trust">
            {trust.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
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

      {/* ── How it works ── */}
      <section className="section hc-process hc-process--rose">
        <div className="container">
          <div className="hc-process__heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="rose" title="How It Works for NRIs">
              Five easy steps, all handled from where you are.
            </SectionHeading>
          </div>
          <div className="hc-steps hc-steps--5">
            {steps.map(({ step, title, text }, i) => (
              <Reveal key={step} delay={(i % 4) + 1} className="hc-step">
                <div className="hc-step__num">{step}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final call ── */}
      <section className="section section--white">
        <div className="container">
          <Reveal className="nri-final">
            <Globe />
            <h2>Peace of Mind, Wherever You Are</h2>
            <p>Let us be your eyes, ears and hands at home in India.</p>
            <div className="nri-final__actions">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn-lg">WhatsApp Us <ArrowRight /></a>
              <a href="tel:+917041081081" className="btn btn--ghost btn-lg"><Phone /> +91 70410 81081</a>
              <Link to="/contact" className="btn btn--ghost btn-lg">Send an Enquiry</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Care for Your Parents, From Anywhere in the World"
        text="Call or WhatsApp +91 70410 81081 and we will take care of the rest."
      />
    </>
  )
}
