import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import EquipmentModal from '../components/EquipmentModal.jsx'
import {
  Bed, Wheelchair, Oxygen, Mattress, Monitor,
  Wallet, HomeCare, Clock, Check, ArrowRight, Phone, Shield, HeartPlus
} from '../components/Icons.jsx'

const bannerStats = [
  { value: '5+',   label: 'Equipment Categories' },
  { value: '24/7', label: 'Support Available' },
  { value: '100%', label: 'Quality Assured' },
  { value: 'Flex', label: 'Rental Terms' },
]

const bannerImages = [
  {
    src: '/CIpap-Bipap-Mask.png',
    alt: 'CPAP BiPAP mask for respiratory care',
    name: 'CPAP / BiPAP Mask',
  },
  {
    src: '/CPAP-BiPAP-machines.png',
    alt: 'CPAP and BiPAP machines',
    name: 'CPAP & BiPAP Machine',
  },
  {
    src: '/oxygen-machine.png',
    alt: 'Oxygen machine for home use',
    name: 'Oxygen Machine',
  },
]

const categories = [
  {
    n: '01', icon: Bed, color: 'teal',
    title: 'Hospital Beds',
    desc: 'Fully adjustable beds for home recovery & patient care.',
    detail: 'Hospital beds designed for home use provide the same level of support and adjustability as clinical-grade beds. They allow caregivers to easily reposition patients, reduce bedsore risk, and improve comfort during long-term recovery or palliative care. Ideal for post-surgery patients, stroke recovery, elderly bedridden patients, and neurological conditions.',
    images: [
      { src: '/5-function-electric-bed.jpg', alt: '5 Function Electric Hospital Bed', name: '5 Function Electric Bed' },
    ],
    items: [
      { name: 'Manual Hospital Bed',    note: 'Crank-operated, budget-friendly option for home use' },
      { name: 'Semi-Fowler Bed',        note: 'Head and leg elevation for respiratory comfort' },
      { name: 'Fowler Bed',             note: 'Full upper body elevation, ideal for COPD & heart patients' },
      { name: 'Electric Hospital Bed',  note: '5-function electric control for precise positioning' },
      { name: 'ICU Bed',                note: 'Available on request — full clinical features' },
    ],
  },
  {
    n: '02', icon: Wheelchair, color: 'violet',
    title: 'Mobility & Walking Aids',
    desc: 'Regain independence with safe and reliable mobility support.',
    detail: 'Mobility aids help patients safely move around at home, reducing fall risk and supporting rehabilitation. Whether it\'s a lightweight wheelchair for daily outings, a walker for post-surgery recovery, or a commode chair for bathroom assistance — the right mobility aid improves quality of life and gives caregivers peace of mind.',
    images: [],
    items: [
      { name: 'Standard Wheelchair',      note: 'Lightweight folding frame, easy to transport' },
      { name: 'Reclining Wheelchair',     note: 'For patients who need to rest in transit' },
      { name: 'Walker Frame',             note: 'Stable four-point support for walking assistance' },
      { name: 'Walking Stick / Cane',     note: 'Single or quad-base options available' },
      { name: 'Commode Chair',            note: 'Bedside toilet seat for limited mobility patients' },
      { name: 'Patient Transfer Aids',    note: 'Transfer belts and slide sheets for safe repositioning' },
    ],
  },
  {
    n: '03', icon: Oxygen, color: 'sky',
    title: 'Respiratory Care',
    desc: 'Clinical-grade oxygen and breathing support equipment.',
    detail: 'Respiratory care equipment is essential for patients with COPD, asthma, sleep apnea, post-COVID recovery, or any condition requiring supplemental oxygen. Our range covers both continuous oxygen supply and therapy-specific machines like CPAP/BiPAP, ensuring patients breathe safely and comfortably at home without hospital stays.',
    images: [
      { src: '/oxygen-machine.png',              alt: 'Oxygen machine',         name: 'Oxygen Machine' },
      { src: '/portable-oxygen-concentrator.png',alt: 'Portable concentrator',  name: 'Portable Concentrator' },
      { src: '/CIpap-Bipap-Mask.png',            alt: 'CPAP BiPAP mask',        name: 'CPAP / BiPAP Mask' },
      { src: '/CPAP-BiPAP-machines.png',         alt: 'CPAP BiPAP machine',     name: 'CPAP & BiPAP Machine' },
    ],
    items: [
      { name: 'Oxygen Concentrator',   note: 'Extracts oxygen from air — no cylinder refills needed' },
      { name: 'Portable Concentrator', note: 'Lightweight, battery-operated for travel and mobility' },
      { name: 'Oxygen Cylinder',       note: 'High-capacity cylinders with regulator & mask' },
      { name: 'Nebulizer',             note: 'Converts medicine to mist for direct lung delivery' },
      { name: 'CPAP Machine',          note: 'Continuous positive airway pressure for sleep apnea' },
      { name: 'BiPAP Machine',         note: 'Bi-level pressure support for more severe respiratory cases' },
    ],
  },
  {
    n: '04', icon: Mattress, color: 'amber',
    title: 'Patient Care Equipment',
    desc: 'Comfort and care essentials for bedridden patients.',
    detail: 'Long-term bedridden patients are at high risk of pressure ulcers, infections and discomfort. Our patient care equipment range addresses these challenges with air mattresses that redistribute pressure, suction machines for airway clearance, and monitoring devices — keeping patients comfortable, safe and closely monitored at home.',
    images: [
      { src: '/Humdifier-Bottle.png', alt: 'Humidifier bottle for oxygen therapy', name: 'Humidifier Bottle' },
    ],
    items: [
      { name: 'Air Mattress',               note: 'Alternating pressure to prevent bedsores' },
      { name: 'Anti-Bedsore Mattress',      note: 'Foam/gel mattress for pressure relief' },
      { name: 'Suction Machine',            note: 'Clears secretions from airways — vital for tracheostomy patients' },
      { name: 'Patient Monitor',            note: 'Tracks SpO2, heart rate, BP and temperature' },
      { name: 'Bedside Table',              note: 'Height-adjustable over-bed table for meals and activities' },
      { name: 'Patient Lifting Equipment',  note: 'Hoists and slings for safe transfers without strain' },
    ],
  },
  {
    n: '05', icon: Monitor, color: 'rose',
    title: 'Monitoring & Accessories',
    desc: 'Accurate, easy-to-use diagnostic and monitoring devices.',
    detail: 'Home monitoring devices allow patients and caregivers to track vital signs accurately and act quickly if readings are abnormal. Regular monitoring of oxygen saturation, blood pressure and blood sugar is essential for managing chronic conditions like diabetes, hypertension and heart disease — without frequent hospital visits.',
    images: [],
    items: [
      { name: 'Pulse Oximeter',       note: 'Measures blood oxygen level (SpO2) and pulse rate' },
      { name: 'BP Monitor',           note: 'Digital upper arm monitor for accurate BP readings' },
      { name: 'Digital Thermometer',  note: 'Fast, contactless or oral temperature measurement' },
      { name: 'Glucometer',           note: 'Blood sugar monitoring kit with test strips' },
      { name: 'Medical Accessories',  note: 'Masks, gloves, IV stands, urine bags and more' },
    ],
  },
]

const whyRent = [
  { icon: Wallet,    color: 'teal',    title: 'Cost-Effective',   text: 'Avoid the full purchase cost — rent only for the duration you need, saving thousands.' },
  { icon: HomeCare,  color: 'violet',  title: 'Home-Ready Setup', text: 'Equipment delivered and configured for safe, comfortable home-based patient care.' },
  { icon: Clock,     color: 'amber',   title: 'Flexible Terms',   text: 'Short-term and long-term options that adjust to your recovery or care timeline.' },
  { icon: Shield,    color: 'sky',     title: 'Quality Assured',  text: 'Every piece of equipment is maintained, cleaned, and checked before each rental.' },
  { icon: HeartPlus, color: 'rose',    title: 'Expert Guidance',  text: 'Our team helps you choose the right equipment for each patient\'s specific condition.' },
  { icon: Phone,     color: 'emerald', title: 'Easy to Reach',    text: 'Simple booking and responsive support — just call us and we handle the rest.' },
]

const steps = [
  { step: '01', title: 'Contact Us',         text: 'Call or message our team with your equipment requirements and duration.' },
  { step: '02', title: 'Get a Quote',        text: 'We provide transparent pricing for rental or purchase — no hidden charges.' },
  { step: '03', title: 'Equipment Delivery', text: 'We deliver and set up the equipment at your home at the agreed time.' },
  { step: '04', title: 'Ongoing Support',    text: 'We\'re available throughout your rental period for any assistance needed.' },
]

const benefits = [
  'Cost-effective rental plans for short-term and long-term needs.',
  'Equipment suited for home-based patient care and post-surgery recovery.',
  'Support in selecting suitable equipment for your specific situation.',
  'Short-term and long-term rental options to suit recovery timelines.',
  'Convenient equipment availability when patients need it most.',
  'Sales options for long-term or permanent requirements.',
]

export default function MedicalEquipment() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <>
      <Seo
        title="Medical Equipment Rental & Sales – Genesis Health Care"
        description="Quality medical equipment on rent or purchase — hospital beds, wheelchairs, oxygen concentrators, air mattresses and patient care equipment."
      />

      <PageBanner
        colorVariant="teal"
        badge="🏥 Rental & Sales Available"
        title="Medical Equipment Rental & Sales"
        description="Quality healthcare equipment at affordable prices — flexible rental options and equipment purchases to make healthcare more accessible, right at home."
        stats={bannerStats}
        images={bannerImages}
      />

      {/* ── Intro highlight strip ── */}
      <section className="meq-intro-strip">
        <div className="container">
          <div className="meq-intro-inner">
            <div className="meq-intro-text">
              <span className="eyebrow eyebrow--teal">Who We Serve</span>
              <h2>Equipment for Every Stage of Care</h2>
              <p>
                Genesis Health Care Enterprises provides a wide range of medical equipment for
                rental and sale — supporting patients, caregivers and families. Whether you need
                equipment for post-surgery recovery, elderly care, long-term treatment or
                home-based patient care, we have flexible options to match your needs and budget.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem', marginTop:'1.5rem' }}>
                {['Post-Surgery Recovery','Elderly Care','Bedridden Patients','Home Care','Long-Term Treatment'].map(tag => (
                  <span key={tag} className="meq-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="meq-intro-visual">
              <div className="meq-intro-img-wrap">
                <img
                  src="/5-function-electric-bed.jpg"
                  alt="5 Function Electric Hospital Bed"
                  className="meq-intro-img"
                />
                <span className="meq-intro-img-badge">
                  <strong>5 Function</strong>
                  Electric Bed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment Categories ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our Catalogue" eyebrowColor="teal" title="Equipment Available for Rental & Sale">
            Click any category to learn more — five comprehensive categories, rent or purchase.
          </SectionHeading>

          <div className="meq-grid">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 3) + 1}>
                <button
                  className={`meq-card meq-card--${cat.color} meq-card--clickable`}
                  onClick={() => setActiveItem(cat)}
                  aria-label={`Learn more about ${cat.title}`}
                >
                  <div className="meq-card__top">
                    <span className="meq-card__num">{cat.n}</span>
                    <span className={`meq-card__icon meq-card__icon--${cat.color}`}>
                      <cat.icon />
                    </span>
                  </div>
                  <h3 className="meq-card__title">{cat.title}</h3>
                  <p className="meq-card__desc">{cat.desc}</p>
                  <ul className="meq-card__list">
                    {cat.items.slice(0, 4).map(it => (
                      <li key={typeof it === 'string' ? it : it.name}>
                        <Check style={{ width: 14, height: 14 }} />
                        {typeof it === 'string' ? it : it.name}
                      </li>
                    ))}
                    {cat.items.length > 4 && (
                      <li className="meq-card__more">+{cat.items.length - 4} more…</li>
                    )}
                  </ul>
                  <div className="meq-card__cta-hint">
                    <span>Click to learn more</span>
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </div>
                  <div className={`meq-card__accent meq-card__accent--${cat.color}`} aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section meq-process-section">
        <div className="container">
          <div className="meq-process-heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="violet" title="How It Works">
              Getting equipment is quick and hassle-free — just four easy steps.
            </SectionHeading>
          </div>
          <div className="meq-process">
            {steps.map(({ step, title, text }, i) => (
              <Reveal key={step} delay={i + 1} className="meq-process__step">
                <div className="meq-process__num">{step}</div>
                <div className="meq-process__connector" aria-hidden="true" />
                <h4>{title}</h4>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Rent ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" eyebrowColor="teal" title="Why Rent from Genesis?">
            We make medical equipment rental simple, affordable and reliable for every family.
          </SectionHeading>
          <div className="grid grid-3">
            {whyRent.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
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

      {/* ── Benefits + CTA ── */}
      <section className="section meq-benefits-section">
        <div className="container">
          <div className="meq-benefits-grid">
            <Reveal className="meq-benefits-list">
              <SectionHeading eyebrow="Rental Benefits" eyebrowColor="violet" title="Everything You Need, When You Need It" center={false}>
                Our goal is to make essential medical equipment accessible whenever and wherever patients need it.
              </SectionHeading>
              <ul className="checklist">
                {benefits.map(b => <li key={b}><Check />{b}</li>)}
              </ul>
              <div className="callout" style={{ marginTop: '1.5rem' }}>
                <p><strong>Note:</strong> Equipment availability, rental periods, delivery and service terms can be confirmed directly with our team. Medical equipment should be used according to professional medical advice.</p>
              </div>
            </Reveal>
            <Reveal delay={2} className="meq-cta-card">
              <span className="meq-cta-card__badge">Ready to Get Started?</span>
              <h3>Get the Right Equipment Today</h3>
              <p>Speak with our team to check availability, understand rental plans and get pricing for your specific requirements.</p>
              <Link to="/contact" className="btn btn--primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Check Availability <ArrowRight />
              </Link>
              <Link to="/home-care" className="btn btn--ghost btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.75rem' }}>
                View Home Care Services
              </Link>
              <div className="meq-cta-card__trust">
                <span><Check style={{ width: 14, height: 14 }} /> Transparent Pricing</span>
                <span><Check style={{ width: 14, height: 14 }} /> Quick Delivery</span>
                <span><Check style={{ width: 14, height: 14 }} /> Expert Support</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need Medical Equipment?"
        text="Contact our team to understand equipment availability, rental plans and purchase options for your needs."
      />

      {/* ── Modal ── */}
      {activeItem && (
        <EquipmentModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  )
}
