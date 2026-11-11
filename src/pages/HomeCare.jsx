import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  Stethoscope, Elderly, Bed, HomeCare as HomeCareIcon,
  Hands, HeartPlus, Users, Check, ArrowRight, Phone, Shield, Clock, ChevronDown,
} from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const bannerStats = [
  { value: '10+',  label: 'Years Experience' },
  { value: '100',  label: 'Care Staff' },
  { value: '20k+', label: 'Happy Families' },
  { value: '24/7', label: 'Support' },
]

const services = [
  {
    icon: Stethoscope, color: 'teal', n: '01',
    title: 'Home Nursing Care',
    tag: 'Nursing at Home in Visakhapatnam',
    intro: 'Qualified nurses providing professional medical attention, monitoring and clinical procedures at your home.',
    items: ['Vital signs monitoring', 'Medication administration as prescribed', 'Wound dressing and basic nursing procedures', 'Post-operative nursing support', 'Catheter and Ryles tube care', 'IV injections and infusion support'],
  },
  {
    icon: Elderly, color: 'violet', n: '02',
    title: 'Elderly Care Services',
    tag: 'Senior Citizen Care at Home',
    intro: 'Dedicated, dignified assistance for senior citizens who need extra support with everyday activities.',
    items: ['Personal hygiene and bathing assistance', 'Walking and mobility support', 'Meal preparation and feeding assistance', 'Medication reminders', 'Companionship and emotional support', 'Dementia and Alzheimer\'s care support'],
  },
  {
    icon: Bed, color: 'rose', n: '03',
    title: 'Bedridden Patient Care',
    tag: 'Bedridden Patient Care at Home',
    intro: 'Specialised daily care for patients who are unable to move independently, with focus on comfort and hygiene.',
    items: ['Bedside patient assistance', 'Position changing to prevent bedsores', 'Sponge bath and personal hygiene', 'Feeding assistance and tube feeding', 'Diaper and catheter care', 'General comfort and hygiene maintenance'],
  },
  {
    icon: HomeCareIcon, color: 'amber', n: '04',
    title: 'Post-Hospitalization Care',
    tag: 'Post Surgery Care at Home',
    intro: 'Smooth recovery support for patients returning home after surgery, illness or a hospital stay.',
    items: ['Post-surgery recovery assistance', 'Daily patient care and monitoring', 'Medication reminders and management', 'Mobility and physiotherapy support', 'Follow-up care coordination', 'Assistance with daily activities'],
  },
  {
    icon: Hands, color: 'sky', n: '05',
    title: 'Attendant & Caregiver Services',
    tag: 'Patient Attendant & Caretaker',
    intro: 'Trained and verified caregivers and patient attendants for round-the-clock or part-time support.',
    items: ['Trained patient attendants', 'Elderly care attendants', '12-hour and 24-hour care options', 'Full-time and part-time arrangements', 'Personal care and companionship', 'Verified, background-checked staff'],
  },
  {
    icon: HeartPlus, color: 'emerald', n: '06',
    title: 'Palliative & Long-Term Care',
    tag: 'Palliative Care at Home',
    intro: 'Compassionate comfort-focused care for patients with chronic or long-term conditions, at home with family.',
    items: ['Pain and symptom comfort support', 'Chronic illness care assistance', 'Stroke and paralysis patient care', 'Emotional support for patient and family', 'Care coordination with doctors', 'Dignity-first, family-centred approach'],
  },
]

const whyChoose = [
  { icon: Shield,       color: 'teal',    title: 'Trained & Verified Staff', text: 'Every nurse and caregiver is professionally trained, background-verified and experienced in patient handling.' },
  { icon: Clock,        color: 'violet',  title: 'Flexible 12 / 24-Hour Care', text: 'Choose day shift, night shift, 12-hour or 24-hour care — whatever fits your family\'s needs.' },
  { icon: HomeCareIcon, color: 'amber',   title: 'Comfort of Your Own Home', text: 'Patients recover faster in familiar surroundings, surrounded by the people they love.' },
  { icon: HeartPlus,    color: 'rose',    title: 'Compassionate Care', text: 'Care delivered with empathy, patience, dignity and genuine concern for every patient.' },
  { icon: Users,        color: 'sky',     title: 'Family Peace of Mind', text: 'We keep families informed and supported so you can focus on being with your loved one.' },
  { icon: Phone,        color: 'emerald', title: 'Quick Response', text: 'Call us and we arrange a caregiver or nurse quickly, with a simple, transparent process.' },
]

const process = [
  { step: '01', title: 'Call or Enquire', text: 'Contact us on 70410 81081 and tell us about the patient\'s condition and care needs.' },
  { step: '02', title: 'Care Assessment', text: 'Our team understands the requirements and recommends the right type and duration of care.' },
  { step: '03', title: 'Caregiver Assigned', text: 'A trained nurse or attendant is matched to your family and begins care at home.' },
  { step: '04', title: 'Ongoing Support', text: 'We stay in touch, monitor service quality and adjust care as the patient\'s needs change.' },
]

const conditions = [
  'Stroke & Paralysis Recovery', 'Post-Surgery Recovery', 'Alzheimer\'s & Dementia', 'Diabetes Care',
  'Cancer & Palliative Care', 'Fracture & Orthopaedic Care', 'Heart Patients', 'Parkinson\'s Disease',
  'Kidney Patients', 'Respiratory / COPD Care', 'Bedridden Elderly', 'Newborn & Mother Care',
]

const areas = ['Seethammadhara', 'MVP Colony', 'Dwaraka Nagar', 'Madhurawada', 'Gajuwaka', 'Rushikonda', 'Maharanipeta', 'Hanumanthavaka', 'Chinagadili', 'Visakhapatnam City']

const faqs = [
  {
    q: 'What are home care services?',
    a: 'Home care services provide professional medical and personal assistance to patients in their own homes. This includes nursing care, elderly care, bedridden patient care, post-surgery recovery support and trained attendants, so patients can receive quality care in a familiar and comfortable environment.',
  },
  {
    q: 'Do you provide home nursing services in Visakhapatnam?',
    a: 'Yes. Genesis Health Care Enterprises provides home nursing, patient attendants and elderly care services across Visakhapatnam, including Seethammadhara, MVP Colony, Dwaraka Nagar, Madhurawada, Gajuwaka and nearby areas.',
  },
  {
    q: 'Can I hire a caregiver for 12 hours or 24 hours?',
    a: 'Yes. We offer flexible arrangements including day-shift, night-shift, 12-hour, 24-hour, full-time and part-time caregivers, subject to availability. Please call us to discuss your requirement.',
  },
  {
    q: 'Do you provide care for bedridden patients?',
    a: 'Yes. Our trained caregivers assist bedridden patients with hygiene, feeding, position changing, bedsore prevention and general comfort. We can also arrange hospital beds, air mattresses and oxygen equipment on rent.',
  },
  {
    q: 'Can medical equipment be arranged along with home care?',
    a: 'Absolutely. As we also offer medical equipment rental and sales, we can arrange hospital beds, oxygen concentrators, wheelchairs, air mattresses and more together with your home care service.',
  },
  {
    q: 'How do I book a home care nurse or attendant?',
    a: 'Simply call us on 70410 81081 or 79972 72721, or use the Contact page. Our team will understand your needs and arrange a suitable caregiver quickly.',
  },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

function FaqRow({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`hc-faq${open ? ' is-open' : ''}`}>
      <button className="hc-faq__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown />
      </button>
      <div className="hc-faq__a" role="region">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function HomeCare() {
  /* FAQ structured data for Google rich results */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeHealthCareService',
    name: 'Genesis Health Care Enterprises — Home Care Services',
    description: 'Home nursing, elderly care, bedridden patient care, post-hospitalization care and trained attendants in Visakhapatnam.',
    areaServed: { '@type': 'City', name: 'Visakhapatnam' },
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
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '200' },
  }

  return (
    <>
      <Seo
        title="Home Care Services in Visakhapatnam | Home Nursing, Elderly & Patient Care"
        description="Trusted home care services in Visakhapatnam — home nursing, elderly care, bedridden patient care, post-surgery care and trained attendants available 12/24 hours. Call 70410 81081."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageBanner
        colorVariant="violet"
        badge="🏠 Home Nursing & Patient Care in Visakhapatnam"
        title="Home Care Services"
        description="Trusted home nursing, elderly care, bedridden patient care and post-surgery support — delivered by trained, compassionate caregivers in the comfort of your home."
        stats={bannerStats}
        heroImage={{
          src: '/home-care-male-nurse.jpg',
          alt: 'Smiling male nurse caring for an elderly patient in a wheelchair — home care nursing services in Visakhapatnam',
          chips: ['Male Nursing Care', 'Home Nursing in Vizag'],
          caption: { title: 'Care with dignity', text: 'Trained nurses & attendants at your home' },
        }}
      />

      {/* ── Intro + quick call card ── */}
      <section className="hc-intro">
        <div className="container">
          <div className="hc-intro__grid">
            <Reveal className="hc-intro__text">
              <span className="eyebrow eyebrow--violet">Care at Home</span>
              <h2>Professional Home Care You Can Trust</h2>
              <p>
                Taking care of a loved one who is elderly, unwell or recovering from surgery can be
                physically and emotionally demanding. <strong>Genesis Health Care Enterprises</strong> offers
                reliable <strong>home care services in Visakhapatnam</strong> — including <strong>home nursing</strong>,
                {' '}<strong>elderly care</strong>, <strong>bedridden patient care</strong> and <strong>post-hospitalization support</strong> —
                so your family member receives expert, compassionate care without leaving the comfort of home.
              </p>
              <p>
                Our trained nurses, patient attendants and caregivers are carefully selected, verified and
                supported by our team, giving you confidence and peace of mind at every step.
              </p>
              <ul className="hc-intro__points">
                <li><Check /> Trained &amp; verified nurses and attendants</li>
                <li><Check /> Day, night, 12-hour &amp; 24-hour care</li>
                <li><Check /> Medical equipment on rent along with care</li>
                <li><Check /> Affordable, transparent pricing</li>
              </ul>
            </Reveal>

            <Reveal delay={2} className="hc-call-card">
              <span className="hc-call-card__badge">Need a Caregiver Today?</span>
              <h3>Talk to Our Care Team</h3>
              <p>Free consultation. We help you choose the right type of care for your loved one.</p>
              <a href="tel:+917041081081" className="hc-call-card__num"><Phone /> 70410 81081</a>
              <a href="tel:+917997272721" className="hc-call-card__num"><Phone /> 79972 72721</a>
              <Link to="/contact" className="btn btn--white btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
                Request a Callback <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our Home Care Services" eyebrowColor="violet" title="Complete Home Healthcare Under One Roof">
            From skilled home nursing to everyday living assistance, our care plans adapt to every patient&apos;s needs.
          </SectionHeading>

          <div className="hc-grid">
            {services.map(({ icon: Icon, color, n, title, tag, intro, items }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
                <article className={`hc-card hc-card--${color}`}>
                  <div className="hc-card__top">
                    <span className="hc-card__num">{n}</span>
                    <span className={`hc-card__icon hc-card__icon--${color}`}><Icon /></span>
                  </div>
                  <span className={`hc-card__tag hc-card__tag--${color}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p className="hc-card__intro">{intro}</p>
                  <ul>
                    {items.map(it => (
                      <li key={it}><Check />{it}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`hc-card__link hc-card__link--${color}`}>
                    Book this service <ArrowRight />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section hc-process">
        <div className="container">
          <div className="hc-process__heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="violet" title="How to Arrange Home Care">
              Getting a trained nurse or caregiver at home is quick and simple.
            </SectionHeading>
          </div>
          <div className="hc-steps">
            {process.map(({ step, title, text }, i) => (
              <Reveal key={step} delay={i + 1} className="hc-step">
                <div className="hc-step__num">{step}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Why Genesis" eyebrowColor="teal" title="Why Families Choose Genesis Home Care">
            Quality, compassion and reliability — the three things that matter most when choosing a caregiver.
          </SectionHeading>
          <div className="grid grid-3">
            {whyChoose.map(({ icon: Icon, color, title, text }, i) => (
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

      {/* ── Conditions + areas (SEO) ── */}
      <section className="section hc-seo">
        <div className="container">
          <div className="hc-seo__grid">
            <Reveal className="hc-seo__block">
              <span className="eyebrow eyebrow--rose">Specialised Care</span>
              <h2>Home Care for Every Health Condition</h2>
              <p>
                Whether it&apos;s long-term illness or short-term recovery, our caregivers are experienced in
                handling a wide range of patient conditions at home.
              </p>
              <div className="hc-chips">
                {conditions.map(c => <span key={c} className="hc-chip">{c}</span>)}
              </div>
            </Reveal>

            <Reveal delay={2} className="hc-seo__block">
              <span className="eyebrow eyebrow--teal">Service Areas</span>
              <h2>Home Nursing Across Visakhapatnam</h2>
              <p>
                We provide home nursing, attendant and elderly care services across Vizag and nearby localities.
              </p>
              <div className="hc-chips">
                {areas.map(a => <span key={a} className="hc-chip hc-chip--area">📍 {a}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading eyebrow="FAQs" eyebrowColor="violet" title="Home Care — Frequently Asked Questions">
            Answers to the questions families ask us most often.
          </SectionHeading>
          <div className="hc-faq-list">
            {faqs.map(f => <FaqRow key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bringing Care, Comfort and Compassion to Your Home"
        text="Call 70410 81081 to arrange a trained nurse, attendant or caregiver for your loved one in Visakhapatnam."
      />
    </>
  )
}
