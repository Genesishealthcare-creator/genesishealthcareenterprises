import { useEffect, useRef, useState } from 'react'
import { Check, Phone } from './Icons.jsx'
import submitForm, { buildMailto } from '../lib/submitForm.js'

const OTHER = 'Other / Future Opportunities'

const shifts = ['Any shift', 'Day shift (12 hrs)', 'Night shift (12 hrs)', '24-hour live-in', 'Part-time', 'Office hours']

const empty = {
  name: '', phone: '', email: '', role: '', qualification: '',
  experience: '', location: '', shift: 'Any shift', message: '', website: '', // "website" = spam trap
}

/**
 * Popup application form.
 * props: role (preselected role title), roles (array of titles), onClose()
 */
export default function ApplyModal({ role, roles, onClose }) {
  const [form, setForm]     = useState({ ...empty, role: role || OTHER })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')   // idle | sending | sent | mailed | error
  const [errMsg, setErrMsg] = useState('')
  const dialogRef = useRef(null)
  const firstRef  = useRef(null)

  /* lock scroll, focus first field, close on Escape */
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const set = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your full name.'
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = 'Enter a valid 10-digit phone number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Enter a valid email address.'
    if (!form.role) er.role = 'Please choose a role.'
    if (form.qualification.trim().length < 2) er.qualification = 'Please enter your qualification.'
    return er
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return                     // bot filled the hidden field
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      dialogRef.current?.querySelector('[aria-invalid="true"]')?.focus()
      return
    }

    const fields = {
      'Applying for': form.role,
      'Name': form.name.trim(),
      'Phone': form.phone.trim(),
      'Email': form.email.trim(),
      'Qualification': form.qualification.trim(),
      'Experience': form.experience.trim(),
      'Location / Area': form.location.trim(),
      'Preferred shift': form.shift,
      'Message': form.message.trim(),
    }
    const subject = `Job application – ${form.role} – ${form.name.trim()}`

    setStatus('sending')
    const result = await submitForm({ subject, fields })

    if (result.ok) { setStatus('sent'); return }

    if (result.via === 'none') {
      // No form service configured yet: hand the filled-in details to the visitor's email app.
      window.location.href = buildMailto(subject, fields)
      setStatus('mailed')
      return
    }
    setErrMsg(result.error || 'Something went wrong.')
    setStatus('error')
  }

  const Field = ({ id, label, required, error, children }) => (
    <div className="form-group">
      <label htmlFor={id}>{label} {required && <span className="req" aria-hidden="true">*</span>}</label>
      {children}
      {error && <p className="apply-error" id={`${id}-err`} role="alert">{error}</p>}
    </div>
  )

  return (
    <div className="eqm-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="eqm-dialog apply-dialog" role="dialog" aria-modal="true" aria-labelledby="apply-title" ref={dialogRef} tabIndex={-1}>
        <button className="eqm-close" onClick={onClose} aria-label="Close form">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <div className="apply-head">
          <span className="apply-head__tag">Join in Our Team</span>
          <h2 id="apply-title">Apply Now</h2>
          <p>{form.role === OTHER ? 'Tell us about yourself and we will keep you in mind for future openings.' : <>Applying for <strong>{form.role}</strong></>}</p>
        </div>

        {(status === 'sent' || status === 'mailed') ? (
          <div className="apply-done" role="status">
            <span className="apply-done__icon"><Check /></span>
            <h3>{status === 'sent' ? 'Application received!' : 'Almost done — send the email'}</h3>
            <p>
              {status === 'sent'
                ? 'Thank you for your interest in Genesis Health Care Enterprises. Our team will contact you shortly.'
                : 'Your email app has opened with your details filled in. Please press Send there to complete your application. If nothing opened, call us on the numbers below.'}
            </p>
            <div className="apply-done__phones">
              <a href="tel:+917041081081"><Phone /> 70410 81081</a>
              <a href="tel:+917997272721"><Phone /> 79972 72721</a>
            </div>
            <button className="btn btn--primary btn-lg" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            {/* spam trap – real visitors never see or fill this */}
            <div className="apply-hp" aria-hidden="true">
              <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set} /></label>
            </div>

            <Field id="ap-role" label="Position" required error={errors.role}>
              <select id="ap-role" name="role" className="form-control" value={form.role} onChange={set} aria-invalid={!!errors.role}>
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
                <option value={OTHER}>{OTHER}</option>
              </select>
            </Field>

            <div className="form-row">
              <Field id="ap-name" label="Full Name" required error={errors.name}>
                <input ref={firstRef} id="ap-name" name="name" type="text" className="form-control" autoComplete="name"
                  value={form.name} onChange={set} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ap-name-err' : undefined} />
              </Field>
              <Field id="ap-phone" label="Phone Number" required error={errors.phone}>
                <input id="ap-phone" name="phone" type="tel" inputMode="tel" className="form-control" autoComplete="tel"
                  value={form.phone} onChange={set} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'ap-phone-err' : undefined} />
              </Field>
            </div>

            <div className="form-row">
              <Field id="ap-email" label="Email Address" error={errors.email}>
                <input id="ap-email" name="email" type="email" className="form-control" autoComplete="email"
                  value={form.email} onChange={set} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ap-email-err' : undefined} />
              </Field>
              <Field id="ap-location" label="Your Area / Location">
                <input id="ap-location" name="location" type="text" className="form-control" placeholder="e.g. MVP Colony, Vizag"
                  value={form.location} onChange={set} />
              </Field>
            </div>

            <div className="form-row">
              <Field id="ap-qual" label="Qualification" required error={errors.qualification}>
                <input id="ap-qual" name="qualification" type="text" className="form-control" placeholder="e.g. GNM, B.Sc Nursing, GDA"
                  value={form.qualification} onChange={set} aria-invalid={!!errors.qualification} aria-describedby={errors.qualification ? 'ap-qual-err' : undefined} />
              </Field>
              <Field id="ap-exp" label="Experience">
                <input id="ap-exp" name="experience" type="text" className="form-control" placeholder="e.g. 3 years in home care"
                  value={form.experience} onChange={set} />
              </Field>
            </div>

            <Field id="ap-shift" label="Preferred Shift">
              <select id="ap-shift" name="shift" className="form-control" value={form.shift} onChange={set}>
                {shifts.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>

            <Field id="ap-msg" label="Anything else you'd like us to know?">
              <textarea id="ap-msg" name="message" className="form-control" style={{ minHeight: 90 }}
                placeholder="Skills, languages, certifications, when you can start…" value={form.message} onChange={set} />
            </Field>

            {status === 'error' && (
              <p className="apply-error apply-error--box" role="alert">
                We couldn't send your application ({errMsg}). Please try again or call 70410 81081.
              </p>
            )}

            <button type="submit" className="btn btn--primary btn-lg" style={{ width: '100%' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit Application'}
            </button>
            <p className="form-note">We use your details only to contact you about opportunities at Genesis.</p>
          </form>
        )}
      </div>
    </div>
  )
}
