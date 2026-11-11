import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  HomeCare, Hands, Stethoscope, Utensils, Sparkle, Elderly, Pill, Users, Clock,
  Shield, HeartPlus, Check, ArrowRight, Phone, ChevronDown,
} from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const bannerStats = [
  { value: '24/7', label: 'Supervised Care' },
  { value: 'Daily', label: 'Fresh Meals' },
  { value: 'Nursing', label: 'Support' },
  { value: 'Family', label: 'Like Care' },
]

const facilities = [
  {
    icon: HomeCare, color: 'teal', n: '01', tag: 'Comfortable Stay',
    title: 'Comfortable Accommodation',
    intro: 'Clean, airy and well-maintained rooms designed for rest, safety and everyday comfort.',
    items: ['Clean and comfortable living spaces', 'Well-maintained rooms', 'Proper ventilation and hygiene', 'Comfortable beds and essential facilities'],
  },
  {
    icon: Hands, color: 'violet', n: '02', tag: 'Daily Assistance',
    title: 'Personal Care & Assistance',
    intro: 'Respectful help with daily routines, so every resident keeps their dignity and independence.',
    items: ['Bathing and grooming assistance', 'Dressing and personal hygiene support', 'Assistance with walking and mobility', 'Daily activity assistance'],
  },
  {
    icon: Stethoscope, color: 'rose', n: '03', tag: 'Health & Nursing',
    title: 'Health & Medical Support',
    intro: 'Attentive health monitoring and nursing support, coordinated with doctors and hospitals.',
    items: ['Regular health monitoring as arranged', 'Medication assistance as prescribed', 'Nursing support based on individual needs', 'Coordination with doctors and hospitals', 'Medical equipment support, where required'],
  },
  {
    icon: Utensils, color: 'amber', n: '04', tag: 'Nutrition',
    title: 'Nutritious Food & Meals',
    intro: 'Freshly prepared, balanced meals served on a regular schedule.',
    items: ['Freshly prepared meals', 'Regular meal schedules', 'Feeding assistance when required', 'Diet arrangements as per medical advice'],
  },
  {
    icon: Sparkle, color: 'sky', n: '05', tag: 'Well-being',
    title: 'Emotional & Social Well-being',
    intro: 'Companionship, activities and a community that keeps spirits high.',
    items: ['Friendly companionship', 'Recreational activities', 'Social interaction with other residents', 'Opportunities for relaxation and engagement', 'A supportive, family-like atmosphere'],
  },
  {
    icon: Shield, color: 'emerald', n: '06', tag: 'Safety',
    title: 'Safety & Security',
    intro: 'A secure, organised environment where residents and families can feel at ease.',
    items: ['Clean and organised surroundings', 'Assistance for residents with mobility difficulties', 'Emergency response arrangements', 'Close attention to resident safety'],
  },
]

const specialCare = [
  { icon: Elderly, color: 'violet', title: 'Assisted Living for Seniors', text: 'Day-to-day help with bathing, dressing, mobility and meals for seniors who can no longer manage alone.' },
  { icon: HeartPlus, color: 'rose', title: 'Memory & Dementia Support', text: 'Patient, reassuring care for seniors with forgetfulness, Alzheimer\'s or dementia, with routine and familiarity.' },
  { icon: Pill, color: 'teal', title: 'Post-Illness Recovery Stay', text: 'A supervised place to regain strength after hospitalisation, with nursing and medication support.' },
  { icon: Users, color: 'amber', title: 'Companionship for Seniors', text: 'For elders living alone or whose families are away, a caring community and friendly company.' },
]

const day = [
  { time: 'Morning', title: 'Gentle Start', text: 'Wake-up, freshening up, personal hygiene help and morning medication.' },
  { time: 'Breakfast', title: 'Healthy Breakfast', text: 'Freshly prepared breakfast with feeding assistance where needed.' },
  { time: 'Late Morning', title: 'Activities & Exercise', text: 'Light exercise, prayer or reading time, and recreational activities.' },
  { time: 'Afternoon', title: 'Lunch & Rest', text: 'Nutritious lunch followed by rest and health monitoring.' },
  { time: 'Evening', title: 'Social Time', text: 'Tea, conversation, music, TV or games with fellow residents.' },
  { time: 'Night', title: 'Dinner & Night Care', text: 'Light dinner, evening medication and supervised, comfortable rest.' },
]

const whoBenefits = [
  'Senior citizens who need daily assistance',
  'Elderly individuals living alone',
  'Seniors whose families live away from home',
  'Individuals requiring additional personal care',
  'Older adults seeking companionship and community',
  'Seniors who need help with daily activities',
]

const whyChoose = [
  { icon: HeartPlus, color: 'rose', title: 'Compassionate Elderly Care', text: 'Every resident is treated with kindness, dignity and respect.' },
  { icon: HomeCare, color: 'teal', title: 'Comfortable Living', text: 'Clean, well-maintained spaces that feel like home.' },
  { icon: Hands, color: 'violet', title: 'Dignity & Independence', text: 'Personal attention that respects each resident\'s preferences.' },
  { icon: Sparkle, color: 'amber', title: 'Companionship', text: 'Friendly company and a supportive, family-like atmosphere.' },
  { icon: Stethoscope, color: 'sky', title: 'Health & Wellness Support', text: 'Monitoring, medication help and medical coordination.' },
  { icon: Shield, color: 'emerald', title: 'Safe & Peaceful', text: 'Security, hygiene and emergency response you can rely on.' },
]

const steps = [
  { step: '01', title: 'Call or Visit', text: 'Contact us on 70410 81081 or plan a visit to see the facility and meet the team.' },
  { step: '02', title: 'Understand Needs', text: 'We discuss health condition, daily care needs, diet and preferences of your loved one.' },
  { step: '03', title: 'Care Plan', text: 'We suggest suitable accommodation and a personal care arrangement, with clear terms.' },
  { step: '04', title: 'Warm Welcome', text: 'Your family member settles in with our support, and you stay updated throughout.' },
]

const faqs = [
  {
    q: 'What is an old age home and who is it for?',
    a: 'An old age home is a residential facility where senior citizens receive accommodation, meals, personal care, companionship and health support. It suits seniors who need daily assistance, live alone, or whose families cannot provide round-the-clock care.',
  },
  {
    q: 'Do you provide nursing and medical support?',
    a: 'Yes. We offer health monitoring, medication assistance according to prescriptions, nursing support based on individual needs, and coordination with doctors and hospitals. Medical equipment can also be arranged where required.',
  },
  {
    q: 'Can families visit residents?',
    a: 'Families are encouraged to stay involved. Please contact our team to confirm visiting arrangements and timings.',
  },
  {
    q: 'Do you care for seniors with dementia or limited mobility?',
    a: 'We provide assistance for residents with mobility difficulties and patient, supportive care for those with memory-related conditions. Please call us to discuss your family member\'s specific situation so we can confirm suitability.',
  },
  {
    q: 'How do I find the old age home in Visakhapatnam?',
    a: 'Our head office is at Vivekananda Colony, Seethammadhara, Visakhapatnam, and our branch is near Apollo Hospital, Hanumanthavaka. Call 70410 81081 or 79972 72721 and we will guide you.',
  },
  {
    q: 'Can I also arrange home care instead of a stay?',
    a: 'Yes. If your loved one prefers to stay at home, we offer home nursing, attendants and elderly care at home, along with medical equipment rental.',
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

export default function OldAgeHome() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Genesis Health Care Enterprises — Old Age Home & Senior Care',
    description: 'Old age home and senior citizen care in Visakhapatnam with accommodation, meals, personal assistance, nursing support and companionship.',
    telephone: '+917041081081',
    email: 'info@genesishealthcareenterprises.com',
    areaServed: { '@type': 'City', name: 'Visakhapatnam' },
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
        title="Old Age Home in Visakhapatnam | Senior Citizen Care & Assisted Living"
        description="Caring old age home in Visakhapatnam for senior citizens — comfortable stay, nutritious meals, nursing support, companionship and 24/7 supervised care. Call 70410 81081."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <PageBanner
        colorVariant="rose"
        badge="💗 Senior Citizen Care in Visakhapatnam"
        title="Old Age Home"
        description="A safe, caring and comfortable home for your loved ones — where every resident is treated with kindness, dignity and respect."
        stats={bannerStats}
        heroImage={{
          src: '/home-care-male-nurse.jpg',
          alt: 'Caring nurse with a smiling elderly man — senior citizen care at Genesis old age home, Visakhapatnam',
          chips: ['Senior Citizen Care', 'Dignity & Respect'],
          caption: { title: 'A second family', text: 'Compassionate care for every resident' },
        }}
      />

      {/* ── Intro + visit card ── */}
      <section className="hc-intro hc-intro--rose">
        <div className="container">
          <div className="hc-intro__grid">
            <Reveal className="hc-intro__text">
              <span className="eyebrow eyebrow--rose">Welcome</span>
              <h2>A Home Away From Home for Your Parents</h2>
              <p>
                Senior citizens deserve love, respect, companionship and proper care at every stage of
                life. <strong>Genesis Health Care Enterprises</strong> offers a peaceful, secure and
                supportive <strong>old age home in Visakhapatnam</strong> for elders who need daily
                assistance, companionship and health support.
              </p>
              <p>
                We believe an old age home should feel like a second family — with{' '}
                <strong>comfortable accommodation</strong>, <strong>nutritious meals</strong>,{' '}
                <strong>nursing support</strong> and warm company, so you can have peace of mind knowing
                your loved one is looked after with dignity.
              </p>
              <ul className="hc-intro__points hc-intro__points--rose">
                <li><Check /> Comfortable, hygienic rooms</li>
                <li><Check /> Fresh, regular, nutritious meals</li>
                <li><Check /> Nursing &amp; medication support</li>
                <li><Check /> Companionship &amp; activities</li>
              </ul>
            </Reveal>

            <Reveal delay={2} className="hc-call-card hc-call-card--rose">
              <span className="hc-call-card__badge">Plan a Visit</span>
              <h3>Meet Our Team &amp; See the Facility</h3>
              <p>Talk to us about accommodation, care needs and visiting arrangements for your family member.</p>
              <a href="tel:+917041081081" className="hc-call-card__num"><Phone /> 70410 81081</a>
              <a href="tel:+917997272721" className="hc-call-card__num"><Phone /> 79972 72721</a>
              <Link to="/contact" className="btn btn--white btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
                Schedule a Visit <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our Facilities" eyebrowColor="rose" title="Facilities & Services for Every Resident">
            Thoughtful facilities designed around the comfort, health and happiness of senior citizens.
          </SectionHeading>

          <div className="hc-grid">
            {facilities.map(({ icon: Icon, color, n, tag, title, intro, items }, i) => (
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
                    {items.map(it => <li key={it}><Check />{it}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialised care ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Types of Care" eyebrowColor="violet" title="Senior Care That Fits Every Need">
            Whether your parent needs daily help, recovery support or simply good company, we have a caring option.
          </SectionHeading>
          <div className="oh-special">
            {specialCare.map(({ icon: Icon, color, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) + 1}>
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

      {/* ── A day at Genesis ── */}
      <section className="section oh-day-section">
        <div className="container">
          <SectionHeading eyebrow="Daily Life" eyebrowColor="amber" title="A Typical Day at Genesis">
            A calm, structured routine that keeps residents healthy, active and happy.
          </SectionHeading>
          <div className="oh-day">
            {day.map(({ time, title, text }, i) => (
              <Reveal key={time} delay={(i % 3) + 1}>
                <div className="oh-day__item">
                  <span className="oh-day__time"><Clock />{time}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose (dark) ── */}
      <section className="section oh-why">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="oh-why__heading">
            <SectionHeading eyebrow="Why Genesis" eyebrowColor="rose" title="Why Choose Genesis Old Age Home?">
              Your loved ones deserve more than accommodation — they deserve care, respect, happiness and a place they can call home.
            </SectionHeading>
          </div>
          <div className="grid grid-3">
            {whyChoose.map(({ icon: Icon, color, title, text }, i) => (
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

      {/* ── Who benefits ── */}
      <section className="section section--white">
        <div className="container">
          <div className="oh-who">
            <Reveal className="oh-who__text">
              <SectionHeading eyebrow="Who It's For" eyebrowColor="amber" title="Who Can Benefit from Our Old Age Home?" center={false}>
                Our doors are open to senior citizens who need daily assistance, companionship or a caring community.
              </SectionHeading>
              <ul className="checklist">
                {whoBenefits.map(b => <li key={b}><Check />{b}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={2} className="oh-who__panel">
              <span className="eyebrow eyebrow--light">Need Care at Home Instead?</span>
              <h3>Home Nursing &amp; Attendants</h3>
              <p>If your parent prefers to stay at home, we provide trained nurses, attendants and medical equipment on rent.</p>
              <Link to="/home-care" className="btn btn--white btn-lg">Explore Home Care <ArrowRight /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Admission process ── */}
      <section className="section hc-process hc-process--rose">
        <div className="container">
          <div className="hc-process__heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="rose" title="How to Get Started">
              A clear, caring process from your first call to a warm welcome.
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

      {/* ── FAQ ── */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading eyebrow="FAQs" eyebrowColor="rose" title="Old Age Home — Frequently Asked Questions">
            Answers to the questions families ask us most often.
          </SectionHeading>
          <div className="hc-faq-list">
            {faqs.map(f => <FaqRow key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title="A Place Your Loved Ones Can Call Home"
        text="Call 70410 81081 to plan a visit and discuss accommodation, facilities and care for your family member."
      />
    </>
  )
}
