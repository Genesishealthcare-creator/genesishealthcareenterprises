import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import { Phone, Mail, Pin, Clock, Stethoscope, Check } from '../components/Icons.jsx'

const contactDetails = [
  { icon: Phone,       color: 'teal',   label: 'Call Us',       value: '70410 81081 / 79972 72721', href: 'tel:+917041081081',                     bg: 'linear-gradient(135deg,var(--teal-500),var(--teal-700))' },
  { icon: Mail,        color: 'violet', label: 'Email',         value: 'info@genesishealthcareenterprises.com', href: 'mailto:info@genesishealthcareenterprises.com', bg: 'linear-gradient(135deg,var(--violet-500),var(--violet-600))' },
  { icon: Pin,         color: 'rose',   label: 'Head Office',   value: 'Door No. 50-49-43/4, Vivekananda Colony, Near Hindu Office, Balayya Sastri Layout, Seethammadhara, Visakhapatnam — 530013', href: 'https://maps.google.com/?q=Seethammadhara,Visakhapatnam', bg: 'linear-gradient(135deg,var(--rose-500),var(--rose-600))' },
  { icon: Pin,         color: 'teal',   label: 'Branch Office', value: 'D, 18-187/1, Health City Road, Opp. Apollo Hospital, Chinagadili, Hanumanthavaka, Visakhapatnam — 530040', href: 'https://maps.google.com/?q=Hanumanthavaka,Visakhapatnam', bg: 'linear-gradient(135deg,var(--teal-600),var(--teal-800))' },
  { icon: Clock,       color: 'amber',  label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM',     href: null,                            bg: 'linear-gradient(135deg,var(--amber-400),var(--amber-600))' },
  { icon: Stethoscope, color: 'sky',    label: 'Services',      value: 'Medical Equipment | Home Care | Old Age Home', href: null,               bg: 'linear-gradient(135deg,var(--sky-500),var(--sky-600))' },
]

const serviceOptions = [
  { id: 'equipment',  label: 'Medical Equipment Rental & Sales' },
  { id: 'home-care',  label: 'Home Care Services' },
  { id: 'old-age',    label: 'Old Age Home' },
  { id: 'other',      label: 'Other Enquiry' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name:'', email:'', phone:'', service:'', message:'' })
  }

  return (
    <>
      <Seo
        title="Contact Genesis Health Care Enterprises"
        description="Contact Genesis Health Care Enterprises for medical equipment rental & sales, home care services and old age home facilities."
      />
      <PageBanner
        colorVariant="teal"
        title="Contact Us"
        description="Your healthcare needs, our priority. Contact our team to understand our services, equipment availability, rental plans and care options."
      />

      <section className="section section--white">
        <div className="container">
          <div className="contact-grid">

            {/* Info column */}
            <div>
              <Reveal>
                <h2 style={{ marginBottom: '.5rem' }}>Get the Care You Need</h2>
                <p style={{ color: 'var(--slate-500)', marginBottom: '2rem' }}>
                  Looking for medical equipment on rent or purchase? Need a professional caregiver
                  for your loved one? Searching for a safe and comfortable old age home?
                  Genesis Health Care Enterprises is here to help.
                </p>
              </Reveal>

              {contactDetails.map(({ icon: Icon, label, value, href, bg }, i) => (
                <Reveal key={label} delay={i + 1}>
                  <div className="contact-item">
                    <span className="contact-item__icon" style={{ background: bg }}>
                      <Icon />
                    </span>
                    <div>
                      <h4>{label}</h4>
                      {href
                        ? <a href={href}>{value}</a>
                        : <p>{value}</p>
                      }
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="callout" style={{ marginTop: '1.5rem' }}>
                <p><strong>Call today</strong> and let us take care of your loved ones.</p>
              </div>
            </div>

            {/* Form column */}
            <Reveal>
              <div className="form-card">
                <h3 style={{ marginBottom: '.35rem' }}>Send Us a Message</h3>
                <p style={{ color: 'var(--slate-400)', fontSize: '.95rem', marginBottom: '1.5rem' }}>
                  Fill in the form and our team will get back to you shortly.
                </p>

                {submitted && (
                  <div className="form-success" role="status">
                    <Check style={{ width: 22, height: 22, flexShrink: 0, color: 'var(--emerald-500)' }} />
                    <span>Thank you! Your message has been received. We will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="req">*</span></label>
                      <input id="name" name="name" type="text" className="form-control" required value={form.name} onChange={handleChange} autoComplete="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                      <input id="phone" name="phone" type="tel" className="form-control" required value={form.phone} onChange={handleChange} autoComplete="tel" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} autoComplete="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required <span className="req">*</span></label>
                    <select id="service" name="service" className="form-control" required value={form.service} onChange={handleChange}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" name="message" className="form-control" required value={form.message} onChange={handleChange} placeholder="Tell us what you need — equipment, care, timing, etc." />
                  </div>

                  <button type="submit" className="btn btn--primary btn-lg" style={{ width: '100%' }}>
                    Send Message
                  </button>
                  <p className="form-note">Your information is only used to respond to your enquiry.</p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
