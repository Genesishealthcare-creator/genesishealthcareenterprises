import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import ApplyModal from '../components/ApplyModal.jsx'
import {
  Shield, Phone, Stethoscope, Monitor, Hands, HeartPlus, Elderly, Users,
  ArrowRight, Check, Mail, Sparkle, Clock,
} from '../components/Icons.jsx'

const EMAIL = 'info@genesishealthcareenterprises.com'
const OTHER_ROLE = 'Other / Future Opportunities'

/* ─────────────────────────── DATA ─────────────────────────── */

const roles = [
  {
    icon: Shield, color: 'teal', n: '01', tag: 'Leadership',
    title: 'Supervisors',
    text: 'Oversee all patient care, conduct regular home visits, ensure quality standards, and coordinate with nurses & attendants.',
  },
  {
    icon: Phone, color: 'violet', n: '02', tag: 'Office Team',
    title: 'Office Telecalling & Coordination Team',
    text: 'Handle inquiries, book appointments, follow up with families, and provide 24/7 support over phone.',
  },
  {
    icon: Stethoscope, color: 'rose', n: '03', tag: 'Nursing',
    title: 'Registered Nurses (RNs)',
    text: 'Medical care at home — injections, ICU care, wound dressing, catheter care, post-op support.',
  },
  {
    icon: Monitor, color: 'sky', n: '04', tag: 'Critical Care',
    title: 'Critical Care Nurses',
    text: 'For ICU-at-home services, ventilator support, and high-acuity patients.',
  },
  {
    icon: Hands, color: 'amber', n: '05', tag: 'Patient Care',
    title: 'Patient Care Attendants / GDAs',
    text: '12/24-hour support for elderly, bedridden, post-op, and mother-baby care.',
  },
  {
    icon: HeartPlus, color: 'rose', n: '06', tag: 'Newborn & Mother',
    title: 'Trained Baby Care Service Providers',
    text: 'Specialized in newborn care, feeding, bathing, sleep routine, and mother support.',
  },
  {
    icon: Elderly, color: 'emerald', n: '07', tag: 'Specialised Care',
    title: 'Caregivers for Different Needs',
    text: 'Dementia care, paralysis care, post-stroke rehab, palliative care, and more.',
  },
  {
    icon: Users, color: 'violet', n: '08', tag: 'Recruitment',
    title: 'Manpower Supply Team',
    text: 'Dedicated to recruiting and deploying medical & non-medical staff to hospitals and clinics.',
  },
]

const reasons = [
  { icon: Shield,      color: 'teal',    title: 'A Decade of Trust',      text: 'Join a healthcare group that has served the families of Vizag for over ten years.' },
  { icon: Sparkle,     color: 'violet',  title: 'Room to Grow',           text: 'We are expanding across home care, senior living, equipment rental and surgical supplies.' },
  { icon: HeartPlus,   color: 'rose',    title: 'Work That Matters',      text: 'Bring dignity, comfort and healing to patients and their families every day.' },
  { icon: Clock,       color: 'amber',   title: 'Flexible Shifts',        text: '12-hour, 24-hour, day and night care arrangements, subject to availability.' },
]

const steps = [
  { step: '01', title: 'Choose a Role',  text: 'Find the position that matches your qualification and experience.' },
  { step: '02', title: 'Send Your Details', text: 'Email your resume or call us with your name, role and experience.' },
  { step: '03', title: 'Talk to Our Team', text: 'Our team will get in touch to discuss the role and next steps.' },
  { step: '04', title: 'Start Caring',   text: 'Join Genesis and begin making a difference in patients\' lives.' },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function Careers() {
  const [applyRole, setApplyRole] = useState(null)   // string = open form for this role; null = closed
  const roleTitles = roles.map(r => r.title)

  return (
    <>
      <Seo
        title="Join in Our Team | Nursing, Caregiver & Attendant Jobs in Visakhapatnam – Genesis Health Care"
        description="Careers at Genesis Health Care Enterprises, Visakhapatnam: supervisors, registered nurses, critical care nurses, patient care attendants, baby care providers, caregivers and more. Join our team for future growth."
      />

      <PageBanner
        colorVariant="violet"
        badge="🤝 Careers at Genesis Health Care Enterprises"
        title="Join in Our Team"
        description="Build a meaningful career in healthcare. We are looking for caring, dedicated people — from nurses and attendants to coordinators and supervisors — to grow with us in Visakhapatnam."
        stats={[
          { value: '8', label: 'Roles' },
          { value: '10+', label: 'Years of Trust' },
          { value: '24/7', label: 'Care Network' },
          { value: 'Vizag', label: 'Location' },
        ]}
        bgImage={{ src: '/team/join-our-team.jpg', position: 'center 30%', full: true }}
      />

      {/* ── Intro ── */}
      <section className="jt-intro">
        <div className="container">
          <Reveal className="jt-intro__inner">
            <span className="eyebrow eyebrow--violet">Work With Us</span>
            <h2>Grow With a Trusted Circle of Care</h2>
            <p>
              <strong>Genesis Health Care Enterprises</strong> has grown from a single home care service into a
              comprehensive group — home care, old age home, medical equipment rental and Genesis Surgicals.
              As we grow, we need compassionate professionals who share our belief: <strong>We Care, He Cures.</strong>
            </p>
            <div className="jt-intro__actions">
              <button type="button" className="btn btn--primary btn-lg" onClick={() => setApplyRole(OTHER_ROLE)}>
                <Mail /> Apply Now
              </button>
              <a className="btn btn--ghost btn-lg" href="tel:+917041081081"><Phone /> 70410 81081</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Open roles ── */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Open Positions" eyebrowColor="violet" title="Find Your Role at Genesis">
            Eight ways to be part of our care team. Pick the role that fits you and get in touch.
          </SectionHeading>

          <div className="hc-grid">
            {roles.map(({ icon: Icon, color, n, tag, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) + 1}>
                <article className={`hc-card jt-card hc-card--${color}`}>
                  <div className="hc-card__top">
                    <span className="hc-card__num">{n}</span>
                    <span className={`hc-card__icon hc-card__icon--${color}`}><Icon /></span>
                  </div>
                  <span className={`hc-card__tag hc-card__tag--${color}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p className="hc-card__intro">{text}</p>
                  <button
                    type="button"
                    className={`hc-card__link hc-card__link--${color}`}
                    onClick={() => setApplyRole(title)}
                    aria-label={`Apply for ${title}`}
                  >
                    Apply for this role <ArrowRight />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why join ── */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Why Genesis" eyebrowColor="teal" title="Why Join the Genesis Team?">
            More than a job — a chance to grow in a profession built on compassion.
          </SectionHeading>
          <div className="oh-special">
            {reasons.map(({ icon: Icon, color, title, text }, i) => (
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

      {/* ── How to apply ── */}
      <section className="section hc-process">
        <div className="container">
          <div className="hc-process__heading">
            <SectionHeading eyebrow="Simple Process" eyebrowColor="violet" title="How to Join">
              Four easy steps from your first message to your first day.
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

      {/* ── Join line ── */}
      <section className="jt-join">
        <div className="container">
          <Reveal className="jt-join__inner">
            <button type="button" className="jt-join__line" onClick={() => setApplyRole(OTHER_ROLE)}>
              <span>Click here to join the team for future growth</span>
              <ArrowRight />
            </button>
            <p className="jt-join__sub">
              Or call <a href="tel:+917041081081">70410 81081</a> / <a href="tel:+917997272721">79972 72721</a> ·{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Care Is a Calling. Answer It With Us."
        text="Join Genesis Health Care Enterprises — We Care, He Cures."
      />

      {applyRole && (
        <ApplyModal role={applyRole} roles={roleTitles} onClose={() => setApplyRole(null)} />
      )}
    </>
  )
}
