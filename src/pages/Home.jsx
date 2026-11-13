import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import useTypewriter from '../components/useTypewriter.js'
import {
  Stethoscope, HomeCare, Elderly, Bed, Wheelchair, Pill,
  Shield, Wallet, Hands, ArrowRight, HeartPlus, Check, Clock, Users, Oxygen, Mattress, Monitor, Phone, Ambulance, Globe,
} from '../components/Icons.jsx'

const services = [
  {
    icon: HomeCare, color: 'violet',
    title: 'Home Care Services',
    text: 'Professional nursing, elderly care, bedridden patient care and post-hospitalization support in the comfort of home.',
    to: '/home-care',
  },
  {
    icon: Elderly, color: 'rose',
    title: 'Old Age Home & Rehabilitation Care',
    text: 'A safe, caring living environment with personal assistance, meals, companionship, and in-house rehabilitation and physiotherapy.',
    to: '/old-age-home',
  },
  {
    icon: Stethoscope, color: 'teal',
    title: 'Medical Equipment Rental & Sales',
    text: 'Hospital beds, oxygen concentrators, wheelchairs and patient care equipment — rent or purchase for home-based care.',
    to: '/medical-equipment',
  },
  {
    icon: Ambulance, color: 'sky',
    title: 'Patient Transport',
    text: 'Cardiac and non-cardiac ambulances and medical taxis, with a trained nurse or caretaker accompanying your loved one.',
    to: '/patient-transport',
  },
  {
    icon: Globe, color: 'amber',
    title: 'Exclusive NRI Services',
    text: 'Living abroad? We take care of your aging parents in India — 24/7 caretaker, health monitoring, doctor visits and regular updates.',
    to: '/nri-services',
  },
  {
    icon: Pill, color: 'emerald',
    title: 'Genesis Surgicals',
    text: 'Retail and wholesale medical supplies for our patients and the wider community. Enquire for surgical and medical supplies.',
    to: '/contact',
  },
]

const highlights = [
  { icon: Bed,        color: 'teal',   text: 'Bedridden Patient Care' },
  { icon: Pill,       color: 'violet', text: 'Post-Hospitalization Care' },
  { icon: Wheelchair, color: 'amber',  text: 'Mobility & Walking Aids' },
  { icon: Hands,      color: 'rose',   text: 'Elderly Care & Personal Assistance' },
]

const why = [
  { icon: Stethoscope, color: 'teal',    title: 'Reliable Healthcare Solutions', text: 'A complete range of healthcare services under one roof — equipment, home care and senior living.' },
  { icon: Wallet,      color: 'violet',  title: 'Affordable Services',           text: 'Flexible rental and purchase options for medical equipment to suit every budget.' },
  { icon: HeartPlus,   color: 'rose',    title: 'Compassionate Care',            text: 'Dedicated support for patients and senior citizens, delivered with empathy and respect.' },
  { icon: HomeCare,    color: 'amber',   title: 'Convenience at Home',           text: 'Healthcare assistance delivered in the comfort and familiarity of your own home.' },
  { icon: Hands,       color: 'sky',     title: 'Personalised Attention',        text: 'Care solutions tailored to the individual needs of each patient and resident.' },
  { icon: Shield,      color: 'emerald', title: 'Commitment to Quality',         text: 'A consistent focus on safety, comfort and customer satisfaction across every service.' },
]

const trustItems = [
  { icon: Shield,    color: 'teal',    text: 'Safety & Hygiene First' },
  { icon: HeartPlus, color: 'violet',  text: 'Compassionate Trained Care' },
  { icon: Clock,     color: 'amber',   text: 'Flexible Arrangements' },
  { icon: Users,     color: 'emerald', text: 'Dedicated Personal Attention' },
]

const heroStats = [
  { v: '10+',  l1: 'Years',        l2: 'Experience' },
  { v: '100',  l1: 'Patient Care', l2: 'Staff' },
  { v: '12k+', l1: 'Satisfied',    l2: 'Clients' },
  { v: '98%',  l1: 'Patient',      l2: 'Satisfaction Rate' },
  { v: '24',   l1: 'Hrs Pharmacy', l2: 'Home Delivery' },
]

const equipment = [
  { icon: Bed,       color: 'teal',   title: 'Hospital Beds',          desc: 'Manual, Fowler, Semi-Fowler & 5-Function Electric Beds for home recovery.' },
  { icon: Wheelchair,color: 'violet', title: 'Mobility Aids',          desc: 'Wheelchairs, walkers, walking sticks, commode chairs & transfer aids.' },
  { icon: Oxygen,    color: 'sky',    title: 'Respiratory Equipment',  desc: 'Oxygen concentrators, cylinders, nebulizers, CPAP & BiPAP machines.' },
  { icon: Mattress,  color: 'amber',  title: 'Patient Care Products',  desc: 'Air mattresses, anti-bedsore mattresses, suction machines & patient monitors.' },
  { icon: Monitor,   color: 'rose',   title: 'Monitoring Devices',     desc: 'Pulse oximeters, BP monitors, glucometers, thermometers & accessories.' },
]

/* Star component */
const Stars = ({ count = 5 }) => (
  <div className="star-row" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: "Patient's Family, Visakhapatnam",
    text: 'Genesis provided us an electric hospital bed and oxygen concentrator within hours of our call. The staff were professional and helped us set everything up at home. Truly lifesaving service!',
    platform: 'Google',
    avatar: 'RK',
    color: 'teal',
  },
  {
    name: 'Priya Nair',
    role: 'Home Care Client, Hyderabad',
    text: 'The home care nurse from Genesis was incredibly kind and skilled. My mother received the same standard of care at home as she would in a hospital. We are deeply grateful.',
    platform: 'JustDial',
    avatar: 'PN',
    color: 'violet',
  },
  {
    name: 'Dr. Suresh Babu',
    role: 'Physician, Visakhapatnam',
    text: 'I regularly recommend Genesis Health Care to my patients for home medical equipment. Their quality, reliability and pricing are consistently excellent. A trustworthy partner for home care.',
    platform: 'Practo',
    avatar: 'SB',
    color: 'sky',
  },
  {
    name: 'Anitha Reddy',
    role: "Old Age Home Resident's Daughter, Hyderabad",
    text: 'The old age home at Genesis is a truly caring place. My father is well looked after, meals are nutritious and the staff treat him like family. Highly recommend to anyone looking for senior care.',
    platform: 'Google',
    avatar: 'AR',
    color: 'amber',
  },
  {
    name: 'Mohammed Farhan',
    role: 'Post-Surgery Recovery, Visakhapatnam',
    text: 'Rented a Fowler bed and air mattress for my post-surgery recovery. Delivery was on time, the equipment was clean and the team followed up to check if everything was comfortable. Great service!',
    platform: 'JustDial',
    avatar: 'MF',
    color: 'rose',
  },
]

const ratingPlatforms = [
  {
    name: 'JustDial',
    rating: '5.0',
    reviews: '120+ Reviews',
    color: '#FF6700',
    logo: 'JD',
  },
  {
    name: 'Practo',
    rating: '5.0',
    reviews: '85+ Reviews',
    color: '#5DB25F',
    logo: 'PR',
  },
  {
    name: 'Google',
    rating: '5.0',
    reviews: '200+ Reviews',
    color: '#4285F4',
    logo: 'G',
  },
]

export default function Home() {
  const typed = useTypewriter(['We Care He Cures'], 90, 50, 2600)

  return (
    <>
      <Seo
        title="Genesis Health Care Enterprises – Complete Healthcare Solutions"
        description="Genesis Health Care Enterprises offers medical equipment rental and sales, professional home care services, patient care and old age home facilities."
      />

      {/* ─── Hero ─── */}
      <section className="hero">
        <div style={{ position:'absolute', inset:0, overflow:'hidden', overflowX:'clip', pointerEvents:'none', zIndex:1 }} aria-hidden="true">
          <span className="hero-blob hero-blob-1" />
          <span className="hero-blob hero-blob-2" />
          <span className="hero-blob hero-blob-3" />
        </div>

        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <span className="eyebrow eyebrow--light">Caring for Life, with Compassion</span>
              <h1 className="hero__title">
                <span className="hero__name">Genesis Health Care Enterprises</span>
                <span className="grad typed-word hero__tagline" aria-label="We Care He Cures">
                  <span aria-hidden="true">{typed}</span>
                  <span className="typed-cursor" aria-hidden="true">|</span>
                </span>
              </h1>
              <p className="lead">
                At Genesis Health Care Enterprises, we believe everyone deserves quality
                healthcare, comfort, dignity, and compassionate support. From medical
                equipment and home care services to an integrated old age home with
                in-house rehabilitation and physiotherapy — we bring complete care
                together under one roof, so every individual can heal, recover, and
                live with dignity.
              </p>
              <div className="hero__cta">
                <Link to="/home-care" className="btn btn--white btn-lg">
                  Get Started <ArrowRight />
                </Link>
                <Link to="/medical-equipment" className="btn btn--outline btn-lg">
                  Explore Equipment
                </Link>
              </div>
              <div className="hero__stats hero__stats--5">
                {heroStats.map(s => (
                  <div className="hero__stat" key={s.l1}>
                    <strong>{s.v}</strong>
                    <span>{s.l1}</span>
                    <span>{s.l2}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__panel hero__panel--photo">
              <img
                className="hero__panel-img"
                src="/female-home-care-nurse.jpeg"
                alt="Smiling female nurse holding the hand of an elderly patient — home care nursing services"
                width="736"
                height="1104"
                fetchpriority="high"
              />
              <span className="hero__panel-shade" aria-hidden="true" />
              <div className="hcard">
                <span className="hcard__icon hcard__icon--teal"><Shield /></span>
                <div><h4>Safe &amp; Reliable Care</h4><p>Quality-first healthcare you can trust.</p></div>
              </div>
              <div className="hcard">
                <span className="hcard__icon hcard__icon--violet"><HomeCare /></span>
                <div><h4>Care Where You Are</h4><p>Bringing quality care closer to your home.</p></div>
              </div>
              <div className="hcard">
                <span className="hcard__icon hcard__icon--amber"><HeartPlus /></span>
                <div><h4>Compassion First</h4><p>Dignity and respect for every patient.</p></div>
              </div>
              <div className="hcard">
                <span className="hcard__icon hcard__icon--sky"><Stethoscope /></span>
                <div><h4>Professional Support</h4><p>Trained caregivers and nursing staff.</p></div>
              </div>
              <svg className="hero__ecg" viewBox="0 0 600 60" preserveAspectRatio="none" fill="none">
                <path d="M0 30H130L148 30L162 14L178 48L194 6L210 56L226 30H290L308 30L322 18L338 44L354 30H600"
                  stroke="#2ec8c8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle className="hero__ecg-dot" r="5" fill="#7ffffa">
                  <animateMotion dur="2.8s" repeatCount="indefinite"
                    path="M0 30H130L148 30L162 14L178 48L194 6L210 56L226 30H290L308 30L322 18L338 44L354 30H600" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust strip ─── */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-strip__inner">
            {trustItems.map(({ icon: Icon, color, text }) => (
              <div key={text} className={`trust-item trust-item--${color}`}>
                <Icon /><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ambulance 24/7 ─── */}
      <section className="amb-band">
        <div className="container">
          <div className="amb-band__inner">
            <span className="amb-band__icon"><Ambulance /></span>
            <div className="amb-band__text">
              <h3>Ambulance Service 24/7</h3>
              <p>Patient transfer ambulance available day and night in Visakhapatnam.</p>
            </div>
            <a href="tel:+917041081081" className="btn btn--white btn-lg amb-band__btn">
              <Phone /> Call 70410 81081
            </a>
          </div>
        </div>
      </section>
      {/* ─── Services ─── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="What We Offer" eyebrowColor="teal" title="Our Services">
            Healthcare solutions designed to make quality care accessible, affordable and convenient
            for patients, families and senior citizens.
          </SectionHeading>

          <div className="grid grid-services">
            {services.map(({ icon: Icon, color, title, text, to }, i) => (
              <Reveal key={title} delay={i + 1}>
                <article className={`scard scard--${color}`}>
                  <span className="scard__icon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to={to} className="scard__link">
                    Learn more <ArrowRight style={{ width:17, height:17 }} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-auto" style={{ marginTop:'2rem' }}>
            {highlights.map(({ icon: Icon, color, text }) => (
              <Reveal key={text} className="feat">
                <span className={`feat__icon feat__icon--${color}`}><Icon /></span>
                <p style={{ margin:0, fontWeight:600, alignSelf:'center', fontFamily:'var(--font-display)' }}>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Medical Equipment Info ─── */}
      <section className="section meq-info-section">
        <div className="container">
          <SectionHeading eyebrow="Medical Equipment" eyebrowColor="teal" title="Quality Equipment for Home Care">
            Rent or purchase clinical-grade medical equipment — delivered to your door, set up by our team.
          </SectionHeading>

          <div className="meq-home-grid">
            {equipment.map(({ icon: Icon, color, title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
                <div className={`meq-home-card meq-home-card--${color}`}>
                  <span className={`meq-home-icon meq-home-icon--${color}`}><Icon /></span>
                  <div>
                    <h4 className="meq-home-title">{title}</h4>
                    <p className="meq-home-desc">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="meq-home-cta">
            <div className="meq-home-cta__text">
              <h3>Need Equipment on Rent or Purchase?</h3>
              <p>We deliver and set up equipment at your home. Available for short-term and long-term rental, with purchase options too.</p>
            </div>
            <div className="meq-home-cta__btns">
              <Link to="/medical-equipment" className="btn btn--primary btn-lg">
                View All Equipment <ArrowRight />
              </Link>
              <Link to="/contact" className="btn btn--ghost btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission band ─── */}
      <section className="section" style={{ background:'linear-gradient(135deg, var(--teal-900) 0%, var(--teal-700) 50%, var(--violet-600) 100%)', position:'relative', overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,255,255,.15), transparent 68%)', filter:'blur(56px)', top:-130, right:-80, pointerEvents:'none' }} />
        <div className="container">
          <Reveal style={{ maxWidth:740, margin:'0 auto', textAlign:'center', position:'relative', zIndex:2 }}>
            <span className="eyebrow eyebrow--light">Our Mission</span>
            <h2 style={{ color:'#fff' }}>Making Healthcare Accessible, Affordable &amp; Convenient</h2>
            <p style={{ color:'rgba(255,255,255,.88)', fontSize:'1.08rem' }}>
              Our mission is to make healthcare accessible, affordable and convenient by bringing
              quality care closer to your home. From essential medical equipment to home-based
              patient assistance and elderly residential care, we deliver with compassion,
              responsibility and commitment.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem', justifyContent:'center', marginTop:'1.5rem' }}>
              {['Quality Care','Compassion','Comfort','Trust'].map(c => (
                <span key={c} style={{ display:'inline-flex', alignItems:'center', gap:'.45rem', background:'rgba(255,255,255,.15)', border:'1px solid rgba(255,255,255,.25)', borderRadius:'999px', padding:'.55rem 1.2rem', fontWeight:700, color:'#fff', fontFamily:'var(--font-display)', fontSize:'.95rem' }}>
                  <Check style={{ width:17, height:17 }} />{c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Why choose ─── */}
      <section className="section why-section">
        <div className="container">
          <SectionHeading eyebrow="Why Genesis" eyebrowColor="violet" title="Why Choose Genesis Health Care Enterprises?">
            We bring a range of healthcare services under one roof, delivered with compassion and a commitment to quality.
          </SectionHeading>

          <div className="grid grid-3">
            {why.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1} className="feat feat--col">
                <span className={`feat__icon feat__icon--${color}`}><Icon /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionHeading eyebrow="What Clients Say" eyebrowColor="amber" title="Trusted by Families Across Bangalore">
            Real experiences from patients, families and doctors who rely on Genesis Health Care.
          </SectionHeading>

          {/* Platform ratings */}
          <div className="rating-platforms">
            {ratingPlatforms.map(p => (
              <Reveal key={p.name} className="rating-platform">
                <div className="rating-platform__logo" style={{ background: p.color }}>
                  {p.logo}
                </div>
                <div className="rating-platform__info">
                  <span className="rating-platform__name">{p.name}</span>
                  <div className="rating-platform__stars">
                    <Stars count={5} />
                    <strong>{p.rating}</strong>
                  </div>
                  <span className="rating-platform__count">{p.reviews}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="testimonials-grid">
            {testimonials.map(({ name, role, text, platform, avatar, color }, i) => (
              <Reveal key={name} delay={(i % 3) + 1}>
                <div className={`testimonial-card testimonial-card--${color}`}>
                  <div className="testimonial-card__top">
                    <Stars count={5} />
                    <span className={`testimonial-platform testimonial-platform--${platform.toLowerCase()}`}>
                      {platform}
                    </span>
                  </div>
                  <p className="testimonial-card__text">"{text}"</p>
                  <div className="testimonial-card__author">
                    <span className={`testimonial-avatar testimonial-avatar--${color}`}>{avatar}</span>
                    <div>
                      <strong>{name}</strong>
                      <span>{role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
