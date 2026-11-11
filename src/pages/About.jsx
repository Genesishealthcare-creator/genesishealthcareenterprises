import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  Eye, Target, HeartPlus, Shield, Hands, Sparkle, Lock, Stethoscope,
  ArrowRight, Check, Phone, Pin, Mail, Clock,
} from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const bannerStats = [
  { value: '10+',  label: 'Years Experience' },
  { value: '100',  label: 'Care Staff' },
  { value: '20k+', label: 'Satisfied Clients' },
  { value: '3',    label: 'Service Divisions' },
]

const numbers = [
  { v: '10+',  l1: 'Years of', l2: 'Experience',          color: 'teal' },
  { v: '100',  l1: 'Patient Care', l2: 'Staff',           color: 'violet' },
  { v: '20k+', l1: 'Satisfied', l2: 'Clients',            color: 'amber' },
  { v: '24',   l1: 'Hours Pharmacy', l2: 'Home Delivery', color: 'rose' },
]

const divisions = [
  {
    icon: Stethoscope, color: 'teal', title: 'Medical Equipment', to: '/medical-equipment', cta: 'View equipment',
    text: 'Rental and sales of essential healthcare equipment, delivered and set up at home.',
    items: ['Hospital beds and mattresses', 'Oxygen concentrators, CPAP and BiPAP', 'Wheelchairs and mobility aids', 'Monitors and diagnostic devices'],
  },
  {
    icon: Hands, color: 'violet', title: 'Home Care Services', to: '/home-care', cta: 'Explore home care',
    text: 'Trained nurses, attendants and caregivers supporting patients in the comfort of home.',
    items: ['Home nursing and post-surgery care', 'Elderly and bedridden patient care', 'Day, night and 24-hour attendants', 'Palliative and long-term care'],
  },
  {
    icon: HeartPlus, color: 'rose', title: 'Old Age Home', to: '/old-age-home', cta: 'Discover our old age home',
    text: 'A safe, caring residence where senior citizens live with dignity, comfort and companionship.',
    items: ['Comfortable, hygienic accommodation', 'Nutritious meals and nursing support', 'Companionship and activities', 'Safe, supervised environment'],
  },
]

const values = [
  { icon: HeartPlus,   color: 'rose',    title: 'Compassion',     text: 'Caring for people with empathy and genuine concern.' },
  { icon: Lock,        color: 'violet',  title: 'Trust',          text: 'Building reliability through honest, dependable service.' },
  { icon: Hands,       color: 'teal',    title: 'Respect',        text: 'Honouring the dignity of every patient and resident.' },
  { icon: Shield,      color: 'emerald', title: 'Responsibility', text: 'Owning our commitments to those who rely on us.' },
  { icon: Sparkle,     color: 'amber',   title: 'Quality',        text: 'Maintaining high standards across every service.' },
  { icon: Stethoscope, color: 'sky',     title: 'Patient Safety', text: 'Prioritising safety in all care and equipment.' },
  { icon: HeartPlus,   color: 'rose',    title: 'Dedication',     text: 'A steadfast commitment to those we serve.' },
]

const promises = [
  'Honest, transparent pricing with no hidden charges',
  'Trained and caring staff for every service',
  'Quick response when your family needs help',
  'Everything under one roof — equipment, home care and senior living',
]

const locations = [
  {
    label: 'Head Office', color: 'teal',
    address: 'Door No. 50-49-43/4, Vivekananda Colony, Near Hindu Office, Balayya Sastri Layout, Seethammadhara, Visakhapatnam, Andhra Pradesh — 530013',
    map: 'https://maps.google.com/?q=Seethammadhara,Visakhapatnam',
  },
  {
    label: 'Branch Office', color: 'violet',
    address: 'D, 18-187/1, Health City Road, Opp. Apollo Hospital, Chinagadili, Hanumanthavaka, Visakhapatnam, Andhra Pradesh — 530040',
    map: 'https://maps.google.com/?q=Hanumanthavaka,Visakhapatnam',
  },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function About() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Genesis Health Care Enterprises',
    url: 'https://genesishealthcareenterprises.com',
    logo: '/logo.jpeg',
    slogan: 'Caring for Life, Every Step of the Way',
    founder: {
      '@type': 'Person',
      name: 'Potti Krupa Samson',
      jobTitle: 'Founder & Director',
      description: 'B.Sc.N, M.Sc.N, NPCC — Nurse Practitioner in Critical Care',
    },
    description: 'Medical equipment rental and sales, home care services and old age home in Visakhapatnam.',
    telephone: '+917041081081',
    email: 'info@genesishealthcareenterprises.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Door No. 50-49-43/4, Vivekananda Colony, Seethammadhara',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '530013',
      addressCountry: 'IN',
    },
  }

  return (
    <>
      <Seo
        title="About Genesis Health Care Enterprises | Home Care, Medical Equipment & Old Age Home in Visakhapatnam"
        description="Genesis Health Care Enterprises in Visakhapatnam offers medical equipment rental, home nursing and an old age home — compassionate, affordable healthcare. 10+ years, 20k+ clients."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <PageBanner
        colorVariant="violet"
        badge="💜 Trusted Healthcare Partner in Visakhapatnam"
        title="About Genesis Health Care Enterprises"
        description="Comprehensive healthcare and elderly care solutions — medical equipment, home care and old age home — delivered with compassion, responsibility and commitment."
        stats={bannerStats}
        heroImage={{
          src: '/founder-director.jpeg',
          alt: 'Founder and Director of Genesis Health Care Enterprises, Visakhapatnam',
          ratio: '1145 / 1374',
          position: 'center top',
          portrait: true,
          clean: true,          /* the photo already carries its own name banner */
          person: {
            name: 'Potti Krupa Samson',
            degrees: 'B.Sc.N, M.Sc.N, NPCC',
            role: 'Nurse Practitioner in Critical Care',
          },
        }}
      />

      {/* ── Story ── */}
      <section className="ab-story">
        <div className="container">
          <div className="ab-story__grid">
            <Reveal className="ab-story__text">
              <span className="eyebrow eyebrow--violet">Our Story</span>
              <h2>Making Quality Healthcare Accessible to Every Family</h2>
              <p>
                <strong>Genesis Health Care Enterprises</strong> is dedicated to providing comprehensive
                healthcare and elderly care solutions in <strong>Visakhapatnam</strong>. We make quality
                healthcare accessible to individuals and families through three service divisions:
                {' '}<strong>medical equipment rental and sales</strong>, <strong>home care services</strong>,
                and <strong>old age home</strong> facilities.
              </p>
              <p>
                We understand the challenges families face when caring for patients, elderly relatives and
                loved ones recovering from illness or surgery. Our goal is simple: dependable support and
                convenient healthcare solutions that make everyday life easier.
              </p>
              <p>
                From supplying essential equipment to home-based patient assistance and elderly residential
                care, we deliver every service with compassion, responsibility and commitment.
              </p>
              <ul className="ab-story__list">
                {promises.map(p => <li key={p}><Check />{p}</li>)}
              </ul>
            </Reveal>

            <Reveal delay={2} className="ab-brand">
              <div className="ab-brand__card">
                <img src="/logo.jpeg" alt="Genesis Health Care Enterprises logo" width="320" height="320" />
                <p className="ab-brand__tag">Caring for Life, Every Step of the Way</p>
                <div className="ab-brand__chips">
                  <span>Medical Equipment</span>
                  <span>Home Care</span>
                  <span>Old Age Home</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="ab-numbers">
        <div className="container">
          <div className="ab-numbers__grid">
            {numbers.map(({ v, l1, l2, color }, i) => (
              <Reveal key={l1} delay={i + 1}>
                <div className={`ab-num ab-num--${color}`}>
                  <strong>{v}</strong>
                  <span>{l1}</span>
                  <span>{l2}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Our Direction" eyebrowColor="teal" title="Vision & Mission">
            Where we are headed, and the purpose that gets us there.
          </SectionHeading>
          <div className="ab-vm">
            <Reveal delay={1}>
              <div className="ab-vm__card ab-vm__card--teal">
                <span className="ab-vm__icon"><Eye /></span>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted healthcare service provider known for quality, compassion and
                  affordable healthcare solutions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="ab-vm__card ab-vm__card--violet">
                <span className="ab-vm__icon"><Target /></span>
                <h3>Our Mission</h3>
                <p>
                  To improve the quality of life of patients and senior citizens by providing accessible
                  medical equipment, dependable home care services and comfortable elderly care facilities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Divisions ── */}
      <section className="section ab-div-section">
        <div className="container">
          <div className="ab-div-heading">
            <SectionHeading eyebrow="What We Do" eyebrowColor="teal" title="Three Services, One Commitment to Care">
              Each division exists to make healthcare more accessible and life more comfortable.
            </SectionHeading>
          </div>
          <div className="ab-div">
            {divisions.map(({ icon: Icon, color, title, text, items, to, cta }, i) => (
              <Reveal key={title} delay={i + 1}>
                <article className={`ab-div__card ab-div__card--${color}`}>
                  <span className={`ab-div__icon ab-div__icon--${color}`}><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>{items.map(it => <li key={it}><Check />{it}</li>)}</ul>
                  <Link to={to} className="ab-div__link">{cta} <ArrowRight /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="What Drives Us" eyebrowColor="rose" title="Our Core Values">
            The principles that guide every decision we make and every service we deliver.
          </SectionHeading>
          <div className="ab-values">
            {values.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) + 1}>
                <div className={`ab-value ab-value--${color}`}>
                  <span className="ab-value__icon"><Icon /></span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Visit Us" eyebrowColor="violet" title="Our Offices in Visakhapatnam">
            Walk in, call or write to us — our team is happy to help.
          </SectionHeading>
          <div className="ab-loc">
            {locations.map(({ label, color, address, map }, i) => (
              <Reveal key={label} delay={i + 1}>
                <div className={`ab-loc__card ab-loc__card--${color}`}>
                  <span className="ab-loc__label"><Pin />{label}</span>
                  <p>{address}</p>
                  <a href={map} target="_blank" rel="noopener noreferrer" className="ab-loc__map">
                    Open in Google Maps <ArrowRight />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="ab-contact-row">
            <a href="tel:+917041081081"><Phone /> 70410 81081</a>
            <a href="tel:+917997272721"><Phone /> 79972 72721</a>
            <a href="mailto:info@genesishealthcareenterprises.com"><Mail /> info@genesishealthcareenterprises.com</a>
            <span><Clock /> Mon – Sat: 9:00 AM – 7:00 PM</span>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let Us Care for Your Family"
        text="Call 70410 81081 to talk about medical equipment, home care or senior living in Visakhapatnam."
      />
    </>
  )
}
