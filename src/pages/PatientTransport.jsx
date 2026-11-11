import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { Ambulance, HeartPlus, Car, Check, Phone, ArrowRight, Shield, Stethoscope, Clock } from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const types = [
  {
    icon: HeartPlus, color: 'rose', n: '01', tag: 'Emergency Cardiac Transfer',
    title: 'Cardiac Ambulance',
    text: 'Equipped with cardiac monitors, oxygen, defibrillator. Nurse/paramedic onboard. For heart patients needing emergency shifting.',
    points: ['Cardiac monitor', 'Oxygen', 'Defibrillator', 'Nurse / paramedic onboard'],
  },
  {
    icon: Ambulance, color: 'teal', n: '02', tag: 'Basic Life Support (BLS)',
    title: 'Non-Cardiac Ambulance',
    text: 'Basic life support (BLS) ambulance. Oxygen, stretcher, first aid. For general hospital transfers.',
    points: ['Basic life support (BLS)', 'Oxygen', 'Stretcher', 'First aid'],
  },
  {
    icon: Car, color: 'violet', n: '03', tag: 'Non-Emergency Transport',
    title: 'Medical Taxi',
    text: 'Non-emergency transport for dialysis, chemo, or doctor visits. Comfortable, clean, with attendant support if needed.',
    points: ['Dialysis, chemo & doctor visits', 'Comfortable and clean', 'Attendant support if needed'],
  },
]

const assurances = [
  { icon: Stethoscope, color: 'teal',   title: 'Trained Escort',      text: 'A trained caretaker or nurse accompanies the patient during transport.' },
  { icon: Shield,      color: 'violet', title: 'Safe & Supported',    text: 'Medically supported transport that keeps the patient safe and comfortable.' },
  { icon: Clock,       color: 'rose',   title: 'Available 24/7',      text: 'Call us any time of day or night to arrange transport in Visakhapatnam.' },
]

const steps = [
  { step: '01', title: 'Call Us',          text: 'Ring 70410 81081 and tell us the patient\'s condition, pick-up and drop location.' },
  { step: '02', title: 'We Recommend',     text: 'We suggest the right vehicle: cardiac ambulance, non-cardiac ambulance or medical taxi.' },
  { step: '03', title: 'Escort Assigned',  text: 'A trained caretaker or nurse is arranged to travel with the patient.' },
  { step: '04', title: 'Safe Transfer',    text: 'The patient is shifted carefully and handed over at the destination.' },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function PatientTransport() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Patient Transport Services',
    serviceType: 'Ambulance and medical transport',
    provider: {
      '@type': 'Organization',
      name: 'Genesis Health Care Enterprises',
      telephone: '+917041081081',
      address: { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
    },
    areaServed: { '@type': 'City', name: 'Visakhapatnam' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Types of transport',
      itemListElement: types.map(t => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.title, description: t.text } })),
    },
  }

  return (
    <>
      <Seo
        title="Ambulance Service in Visakhapatnam | Cardiac Ambulance, Patient Transport & Medical Taxi"
        description="24/7 patient transport in Visakhapatnam: cardiac ambulance, non-cardiac (BLS) ambulance and medical taxi for dialysis, chemo and doctor visits, with a trained nurse or caretaker. Call 70410 81081."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageBanner
        colorVariant="teal"
        badge="🚑 Ambulance Service 24/7"
        title="Patient Transport Services"
        description="Safe, comfortable, and medically supported transport for your loved ones."
        stats={[
          { value: '24/7', label: 'Ambulance Service' },
          { value: '3', label: 'Transport Options' },
          { value: 'Nurse', label: 'Or Caretaker Onboard' },
        ]}
      />

      {/* ── Intro + call card ── */}
      <section className="hc-intro">
        <div className="container">
          <div className="hc-intro__grid">
            <Reveal className="hc-intro__text">
              <span className="eyebrow eyebrow--teal">Patient Transport</span>
              <h2>Shifting a Patient Is Stressful. We Make It Safe.</h2>
              <p>
                We understand that shifting a patient — especially a critical or elderly one — is stressful.
                Our <strong>trained caretaker or nurse accompanies the patient during transport</strong>, so
                your family can focus on being with your loved one.
              </p>
              <p>
                Whether it is an emergency heart transfer, a hospital-to-hospital shift or a routine trip for
                dialysis or chemotherapy, we have the right vehicle and the right people for the journey.
              </p>
            </Reveal>

            <Reveal delay={2} className="hc-call-card">
              <span className="hc-call-card__badge">Ambulance 24/7</span>
              <h3>Need Transport Now?</h3>
              <p>Call us any time. We will guide you to the right vehicle and arrange a trained escort.</p>
              <a href="tel:+917041081081" className="hc-call-card__num"><Phone /> 70410 81081</a>
              <a href="tel:+917997272721" className="hc-call-card__num"><Phone /> 79972 72721</a>
              <Link to="/contact" className="btn btn--white btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
                Send an Enquiry <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Types of transport ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Types of Transport" eyebrowColor="teal" title="Choose the Right Transport">
            Three options, from emergency cardiac transfers to comfortable non-emergency trips.
          </SectionHeading>

          <div className="hc-grid pt-grid">
            {types.map(({ icon: Icon, color, n, tag, title, text, points }, i) => (
              <Reveal key={title} delay={i + 1}>
                <article className={`hc-card hc-card--${color}`}>
                  <div className="hc-card__top">
                    <span className="hc-card__num">{n}</span>
                    <span className={`hc-card__icon hc-card__icon--${color}`}><Icon /></span>
                  </div>
                  <span className={`hc-card__tag hc-card__tag--${color}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p className="hc-card__intro">{text}</p>
                  <ul>{points.map(p => <li key={p}><Check />{p}</li>)}</ul>
                  <a href="tel:+917041081081" className={`hc-card__link hc-card__link--${color}`}>
                    Call to book <ArrowRight />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assurances ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Our Promise" eyebrowColor="violet" title="Care on Every Journey">
            Medically supported transport, from pick-up to hand-over.
          </SectionHeading>
          <div className="grid grid-3">
            {assurances.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={i + 1}>
                <div className={`meq-why-card meq-why-card--${color}`}>
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
      <section className="section hc-process">
        <div className="container">
          <div className="hc-process__heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="violet" title="How to Book Patient Transport">
              Four steps from your call to a safe arrival.
            </SectionHeading>
          </div>
          <div className="hc-steps">
            {steps.map(({ step, title, text }, i) => (
              <Reveal key={step} delay={i + 1} className="hc-step">
                <div className="hc-step__num">{step}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Safe Transport for Your Loved Ones"
        text="Call 70410 81081 for ambulance and patient transport in Visakhapatnam, 24/7."
      />
    </>
  )
}
