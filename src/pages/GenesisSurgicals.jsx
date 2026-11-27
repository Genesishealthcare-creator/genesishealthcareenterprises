import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Check, ArrowRight, Phone, Shield, Stethoscope, Bed, Oxygen, Pill, Wheelchair, Users, Hands } from '../components/Icons.jsx'
import submitForm, { buildMailto } from '../lib/submitForm.js'
import { SITE_URL } from '../lib/seoData.js'

const CATEGORIES = [
  { name: 'Surgical Instruments', desc: 'Precision surgical instruments for hospitals and clinics.' },
  { name: 'Disposables',          desc: 'Single-use surgical and medical disposables.' },
  { name: 'Wound Care',           desc: 'Dressings, bandages and wound management products.' },
  { name: 'Sterilisation Products', desc: 'Sterilisation supplies and consumables.' },
  { name: 'Hospital Furniture',   desc: 'Hospital furniture and clinical fittings.' },
  { name: 'Gloves',               desc: 'Surgical and examination gloves.' },
  { name: 'Sutures',              desc: 'Surgical sutures and related products.' },
  { name: 'Hospital Beds',        desc: 'Hospital beds and patient-support equipment.' },
  { name: 'Respiratory Devices',  desc: 'Respiratory care devices and accessories.' },
  { name: 'Belts & Braces',       desc: 'Orthopaedic belts, braces and support products.' },
]

const WHY = [
  { icon: Shield,       title: 'Drug Licensed & GST Registered',   text: 'Operating under Form 20, Form 21 and Form 21B licences issued by AP Drug Control Administration and GST registered (GSTIN: 37BYEPP5784R1Z9).' },
  { icon: Stethoscope,  title: 'Wide Product Range',               text: 'Surgical instruments, disposables, wound care, sterilisation, furniture, gloves, sutures, beds, respiratory devices, belts and braces.' },
  { icon: Users,        title: 'Institutional Supply Experience',  text: 'Delivery partner for HPCL Skill Development Institute, Visakhapatnam.' },
  { icon: Hands,        title: 'Group Backing',                    text: 'A division of Genesis Health Care Enterprises, with shared quality and service standards.' },
  { icon: Pill,         title: 'Local Presence',                   text: 'Based in Visakhapatnam, serving hospitals, clinics, nursing homes, distributors and government/institutional buyers.' },
  { icon: Phone,        title: 'Responsive Support',               text: 'Direct enquiry and WhatsApp support on 79971 72017.' },
]

const WHO = ['Hospitals', 'Clinics', 'Nursing Homes', 'Distributors', 'Government / Institutional Buyers']

const INIT = { name: '', org: '', phone: '', email: '', product: '', message: '' }

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  name: 'Genesis Surgicals',
  description: 'Surgical instruments, disposables, wound care, hospital furniture, gloves, sutures, beds and respiratory devices supplier in Visakhapatnam, Andhra Pradesh.',
  url: `${SITE_URL}/genesis-surgicals`,
  telephone: '+917997172017',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18-187/1, Ground Floor, Opp. Care Hospitals, Health City, Peddagadili, Arilova',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '530040',
    addressCountry: 'IN',
  },
  parentOrganization: { '@id': `${SITE_URL}/#business` },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Divisions', item: `${SITE_URL}/about` },
    { '@type': 'ListItem', position: 3, name: 'Genesis Surgicals', item: `${SITE_URL}/genesis-surgicals` },
  ],
}

export default function GenesisSurgicals() {
  const [form, setForm]       = useState(INIT)
  const [status, setStatus]   = useState('idle')
  const [err, setErr]         = useState('')
  const formRef               = useRef(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting'); setErr('')
    const fields = { Name: form.name, Organisation: form.org || '—', Phone: form.phone, Email: form.email || '—', 'Product Interest': form.product || '—', Message: form.message || '—' }
    const result = await submitForm({ subject: 'Genesis Surgicals Enquiry', fields })
    if (result.ok) { setStatus('success'); setForm(INIT) }
    else if (result.via === 'none') { window.location.href = buildMailto('Genesis Surgicals Enquiry', fields); setStatus('success') }
    else { setStatus('error'); setErr(result.error || 'Could not send. Call 79971 72017.') }
  }

  return (
    <>
      <Seo
        title="Genesis Surgicals | Surgical Instruments, Disposables & Hospital Supplies | Visakhapatnam"
        description="Genesis Surgicals, a division of Genesis Health Care Enterprises, supplies surgical instruments, disposables, wound care, sterilisation products, gloves, sutures, hospital beds and respiratory devices in Visakhapatnam. Drug-licensed and GST-registered. Enquire: 79971 72017."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── Hero ── */}
      <section className="gs-hero">
        <div className="container gs-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/about">Divisions</Link>
            <span className="sep">/</span>
            <span aria-current="page">Genesis Surgicals</span>
          </nav>
          <p className="gs-hero__division">A Division of Genesis Health Care Enterprises</p>
          <h1>Genesis Surgicals</h1>
          <p className="lead">
            Trusted supplier of surgical instruments, disposables, hospital furniture and medical consumables
            in Visakhapatnam — serving hospitals, clinics, nursing homes, distributors and institutional buyers.
          </p>
          <div className="gs-hero__cta">
            <button type="button" className="btn btn--white btn-lg" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              Enquire Now <ArrowRight />
            </button>
            <a href="https://wa.me/917997172017" target="_blank" rel="noopener noreferrer" className="btn btn--outline-white btn-lg">
              WhatsApp Us
            </a>
          </div>
          <div className="gs-hero__trust">
            <span><Check /> Drug Licensed (Form 20, 21, 21B)</span>
            <span><Check /> GST Registered</span>
            <span><Check /> Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section section--white">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <h2>About Genesis Surgicals</h2>
            <p>
              Genesis Surgicals is the surgicals division of Genesis Health Care Enterprises, based in
              Visakhapatnam, Andhra Pradesh. We supply a comprehensive range of surgical instruments,
              disposables, wound care products, sterilisation supplies, gloves, sutures, hospital furniture,
              hospital beds, respiratory devices, belts and braces to hospitals, clinics, nursing homes,
              distributors and government/institutional buyers.
            </p>
            <p>
              We operate under valid drug licences issued by the Government of Andhra Pradesh Drug Control
              Administration (Form 20, Form 21, Form 21B) and are GST registered. We are also a delivery
              partner for HPCL Skill Development Institute, Visakhapatnam.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Product categories ── */}
      <section className="section section--soft">
        <div className="container">
          <h2 className="gs-section-title">Product Range</h2>
          <p className="gs-section-sub">
            Enquire about any category below — no prices, no cart. We respond within one working day.
          </p>
          <div className="gs-cat-grid">
            {CATEGORIES.map(c => (
              <Reveal key={c.name}>
                <button
                  type="button"
                  className="gs-cat-card"
                  onClick={() => { setForm(f => ({ ...f, product: c.name })); formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                >
                  <span className="gs-cat-card__name">{c.name}</span>
                  <span className="gs-cat-card__desc">{c.desc}</span>
                  <span className="gs-cat-card__cta">Enquire <ArrowRight style={{ width: 14, height: 14 }} /></span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="section section--white">
        <div className="container">
          <h2 className="gs-section-title">Why Choose Genesis Surgicals</h2>
          <div className="gs-why-grid">
            {WHY.map(w => (
              <Reveal key={w.title} className="gs-why-card">
                <span className="gs-why-icon"><w.icon /></span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Licences & Compliance ── */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <h2>Licences & Registrations</h2>
            <ul className="gs-licence-list">
              <li><Check /><span><strong>Retail Drug Licence — Form 20:</strong> AP/03/39/2023-44431</span></li>
              <li><Check /><span><strong>Retail Drug Licence (Schedule C &amp; C1) — Form 21:</strong> AP/03/39/2023-44433</span></li>
              <li><Check /><span><strong>Wholesale Drug Licence (Schedule C &amp; C1) — Form 21B:</strong> AP/03/39/2023-44434</span></li>
              <li><Check /><span>Issued by: Government of Andhra Pradesh, Drug Control Administration</span></li>
              <li><Check /><span>Firm No: 587661 · Licences dated: 17/09/2023</span></li>
              <li><Check /><span><strong>GST Registration:</strong> 37BYEPP5784R1Z9 (Trade Name: GENESIS SURGICALS)</span></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="section section--white">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="gs-section-title">Who We Serve</h2>
          <div className="gs-who-row">
            {WHO.map(w => <span key={w} className="gs-who-pill"><Users style={{ width: 16, height: 16 }} /> {w}</span>)}
          </div>
        </div>
      </section>

      {/* ── Enquiry form ── */}
      <section className="section section--soft" ref={formRef} id="enquiry">
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 className="gs-section-title">Enquire About Genesis Surgicals Products</h2>
          <div className="gs-contact-info">
            <a href="tel:+917997172017" className="gs-contact-info__item"><Phone /> 79971 72017</a>
            <a href="https://wa.me/917997172017" target="_blank" rel="noopener noreferrer" className="gs-contact-info__item">WhatsApp: 79971 72017</a>
          </div>
          <p className="gs-address">
            Genesis Surgicals, 18-187/1, Ground Floor, Opp. Care Hospitals,<br />
            Health City, Peddagadili, Arilova, Visakhapatnam, AP — 530040
          </p>

          {status === 'success' ? (
            <div className="gs-success">
              <Check />
              <h3>Thank You!</h3>
              <p>We have received your enquiry and will respond within one working day. For urgent requirements call <a href="tel:+917997172017">79971 72017</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gs-form" noValidate>
              <div className="gs-form__row">
                <div className="gs-form__field">
                  <label htmlFor="gs-name">Name *</label>
                  <input id="gs-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" />
                </div>
                <div className="gs-form__field">
                  <label htmlFor="gs-org">Organisation</label>
                  <input id="gs-org" name="org" type="text" value={form.org} onChange={handleChange} placeholder="Hospital / clinic / distributor" autoComplete="organization" />
                </div>
              </div>
              <div className="gs-form__row">
                <div className="gs-form__field">
                  <label htmlFor="gs-phone">Phone *</label>
                  <input id="gs-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="Your phone number" autoComplete="tel" inputMode="numeric" />
                </div>
                <div className="gs-form__field">
                  <label htmlFor="gs-email">Email</label>
                  <input id="gs-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email (optional)" autoComplete="email" />
                </div>
              </div>
              <div className="gs-form__field">
                <label htmlFor="gs-product">Product Interest</label>
                <select id="gs-product" name="product" value={form.product} onChange={handleChange}>
                  <option value="">Select a category…</option>
                  {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="gs-form__field">
                <label htmlFor="gs-message">Message</label>
                <textarea id="gs-message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Describe your requirement (quantities, specifications, etc.)" />
              </div>
              {status === 'error' && <p className="gs-form__error">{err}</p>}
              <button type="submit" className="btn btn--primary btn-lg gs-form__submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : <>Send Enquiry <ArrowRight /></>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer strip ── */}
      <section className="gs-footer-strip">
        <div className="container gs-footer-strip__inner">
          <div>
            <strong>Genesis Surgicals</strong> — A Division of <Link to="/">Genesis Health Care Enterprises</Link>
          </div>
          <div className="gs-footer-strip__links">
            <Link to="/">Genesis Health Care Enterprises</Link>
            <Link to="/home-care">Home Care</Link>
            <Link to="/medical-equipment">Medical Equipment</Link>
            <Link to="/old-age-home">Old Age Home</Link>
          </div>
          <div>
            <a href="tel:+917997172017"><Phone style={{ width: 15, height: 15 }} /> 79971 72017</a>
          </div>
        </div>
      </section>
    </>
  )
}
