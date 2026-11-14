import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  Eye, Target, HeartPlus, Shield, Hands, Sparkle, Lock, Stethoscope,
  ArrowRight, Check, Phone, Pin, Mail, Clock, Elderly, Bed, Pill, Users,
} from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const bannerStats = [
  { value: '10+',  label: 'Years Experience' },
  { value: '100',  label: 'Care Staff' },
  { value: '12k+', label: 'Satisfied Clients' },
  { value: '3',    label: 'Service Divisions' },
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

const horizons = [
  {
    icon: Elderly, color: 'violet', title: 'For the Global Family',
    text: 'We act as the extended family for children living abroad and corporate professionals who cannot be by their parents\' side. We provide a safe, nurturing environment for seniors, including specialized old age home services.',
  },
  {
    icon: Stethoscope, color: 'teal', title: 'Specialized Clinical Care',
    text: 'For patients transitioning from hospital to home, we offer clinical care at home and palliative care, ensuring dignity and comfort in familiar surroundings.',
  },
  {
    icon: HeartPlus, color: 'rose', title: 'The Gift of New Life',
    text: 'For new mothers navigating the joys of parenthood, we provide expert aya nannies, baby care takers, and assistance to ensure the health of both mother and child.',
  },
]

const innovations = [
  {
    icon: Bed, title: 'Medical Equipment Rental Services', to: '/medical-equipment', cta: 'View rental equipment',
    text: 'Knowing that investing in expensive medical equipment for short-term use is impractical, we introduced Medical Equipment Rental Services, allowing patients to recover at home without financial burden.',
  },
  {
    icon: Pill, title: 'Genesis Surgicals', to: '/contact', cta: 'Enquire about supplies',
    text: 'With the launch of Genesis Surgicals, we now provide retail and wholesale medical supplies directly to our patients and the wider community.',
  },
]

const thanks = [
  { icon: Users, color: 'teal', who: 'Our Patients', text: 'Whose trust fuels our passion.' },
  { icon: Stethoscope, color: 'violet', who: 'Our Dedicated Staff', text: 'Whose clinical knowledge and empathy form the backbone of our organization.' },
  { icon: Sparkle, color: 'amber', who: 'And Above All, God', text: 'For guiding us with the wisdom to serve the city of Vizag with the best standards of knowledge, compassion, and care.' },
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
    url: 'https://www.genesishealthcareenterprises.com',
    logo: 'https://www.genesishealthcareenterprises.com/android-chrome-512x512.png',
    slogan: 'Caring for Life, with Compassion',
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
        description="A decade of compassion in Visakhapatnam — from Genesis Home Care Services to Genesis Health Care Enterprises: home care, old age home, palliative care, baby care, medical equipment rental and Genesis Surgicals."
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

      {/* ── Journey / Story ── */}
      <section className="ab-story">
        <div className="container">
          <div className="ab-story__grid">
            <Reveal className="ab-story__text">
              <span className="eyebrow eyebrow--violet">Our Journey</span>
              <h2>A Decade of Compassion: From a Single Seed to a Comprehensive Circle of Care</h2>
              <p className="ab-story__kicker">The Journey of Genesis Health Care Enterprises</p>
              <p>
                When we planted the seed of <strong>Genesis Home Care Services</strong> a decade ago, our vision
                was simple yet profound: to provide <strong>clinical excellence and heartfelt compassion</strong>{' '}
                to the families of <strong>Vizag</strong>. Today, as we look back on ten years of proven service,
                we are humbled to see how that single seed has blossomed into a vast, trusted network of care.
              </p>
              <p>
                We have evolved from a dedicated home care provider into <strong>Genesis Health Care
                Enterprises</strong> — a comprehensive group of services designed to support every stage of a
                patient&apos;s needs, <strong>from birth to old age</strong>.
              </p>
            </Reveal>

            <Reveal delay={2} className="ab-brand">
              <div className="ab-brand__card">
                <img src="/logo.jpeg" alt="Genesis Health Care Enterprises logo" width="320" height="320" />
                <p className="ab-brand__tag">We Care, He Cures</p>
                <div className="ab-brand__chips">
                  <span>Home Care</span>
                  <span>Medical Equipment</span>
                  <span>Old Age Home</span>
                  <span>Genesis Surgicals</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Expanding our horizons ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Expanding Our Horizons" eyebrowColor="violet" title="Care That Grows With the Families We Serve">
            Our growth has been driven by the evolving needs of the families who trust us. We recognized that
            care goes beyond just medical attention; it is about peace of mind. This decade has seen us broaden
            our scope to serve a diverse community.
          </SectionHeading>
          <div className="ab-horizon">
            {horizons.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={i + 1}>
                <article className={`ab-horizon__card ab-horizon__card--${color}`}>
                  <span className="ab-horizon__icon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Anticipating the need ── */}
      <section className="section ab-need">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ab-need__heading">
            <SectionHeading eyebrow="Innovative Solutions" eyebrowColor="teal" title="Anticipating the Need">
              What sets Genesis apart is our ability to foresee the needs of our patients and their relatives
              before they even arise. We understand the financial and emotional strain of long-term hospitalization.
            </SectionHeading>
          </div>
          <div className="ab-need__grid">
            {innovations.map(({ icon: Icon, title, text, to, cta }, i) => (
              <Reveal key={title} delay={i + 1}>
                <article className="ab-need__card">
                  <span className="ab-need__icon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {to && <Link to={to} className="ab-need__link">{cta} <ArrowRight /></Link>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gratitude ── */}
      <section className="section ab-thanks">
        <div className="container">
          <SectionHeading eyebrow="A Note of Gratitude" eyebrowColor="rose" title="This Journey Has Been Wonderful">
            We owe our success to the people who made it possible.
          </SectionHeading>
          <div className="ab-thanks__grid">
            {thanks.map(({ icon: Icon, color, who, text }, i) => (
              <Reveal key={who} delay={i + 1}>
                <div className={`ab-thanks__card ab-thanks__card--${color}`}>
                  <span className="ab-thanks__icon"><Icon /></span>
                  <h4>{who}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The future ── */}
      <section className="ab-future">
        <div className="container">
          <Reveal className="ab-future__inner">
            <span className="eyebrow eyebrow--light">The Future is Bright</span>
            <h2>From a Modest Beginning to a Trusted Group of Services</h2>
            <p>
              Genesis has grown. But we are not done yet. As we move forward, we promise to grow even bigger,
              expanding our reach to give our care to all under our services.
            </p>
            <p className="ab-future__tag">Genesis Health Care Enterprises: <strong>We Care, He Cures.</strong></p>
            <Link to="/contact" className="btn btn--white btn-lg">Get in Touch <ArrowRight /></Link>
          </Reveal>
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
