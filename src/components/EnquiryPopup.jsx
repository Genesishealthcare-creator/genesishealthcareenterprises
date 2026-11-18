import { useState, useEffect, useRef, useCallback } from 'react'
import { Phone, ArrowRight, Check } from './Icons.jsx'
import submitForm, { buildMailto } from '../lib/submitForm.js'

const SERVICES = [
  'Medical Equipment Rental & Sales',
  'Home Care & Home Nursing',
  'Old Age Home & Rehabilitation',
  'Patient Transport / Ambulance',
  'NRI Parent Care Services',
  'Clinical Nursing at Home',
  'Other Enquiry',
]

const INIT = { name: '', phone: '', service: '', message: '' }

export default function EnquiryPopup({ isOpen, onClose }) {
  const [form, setForm] = useState(INIT)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [err, setErr] = useState('')
  const dialogRef = useRef(null)
  const firstInputRef = useRef(null)

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 80)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleOverlay = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErr('')

    const fields = {
      Name: form.name,
      Phone: form.phone,
      Service: form.service || 'Not specified',
      Message: form.message || '—',
    }
    const result = await submitForm({ subject: 'Website Enquiry – Genesis Health Care', fields })

    if (result.ok) {
      setStatus('success')
      setForm(INIT)
    } else if (result.via === 'none') {
      // No form service configured — fall back to mailto
      window.location.href = buildMailto('Website Enquiry – Genesis Health Care', fields)
      setStatus('success')
    } else {
      setStatus('error')
      setErr(result.error || 'Could not send. Please call us directly.')
    }
  }

  const reset = () => { setStatus('idle'); setErr('') }

  if (!isOpen) return null

  return (
    <div
      className="eq-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Quick Enquiry"
      onClick={handleOverlay}
    >
      <div className="eq-popup" ref={dialogRef}>
        {/* Header */}
        <div className="eq-popup__head">
          <span className="eq-popup__badge">Quick Enquiry</span>
          <h2 className="eq-popup__title">How Can We Help You?</h2>
          <p className="eq-popup__sub">Fill in your details and we will call you back.</p>
          <button
            type="button"
            className="eq-popup__close"
            onClick={onClose}
            aria-label="Close enquiry form"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="eq-popup__body">
          {status === 'success' ? (
            <div className="eq-success">
              <span className="eq-success__icon"><Check /></span>
              <h3>Thank You!</h3>
              <p>We have received your enquiry. Our team will call you back shortly.</p>
              <p className="eq-success__call">Or call us right now:</p>
              <a href="tel:+917041081081" className="btn btn--primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                <Phone /> 70410 81081
              </a>
              <button type="button" className="eq-success__again" onClick={reset}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="eq-form" noValidate>
              <div className="eq-form__field">
                <label htmlFor="eq-name">Your Name *</label>
                <input
                  ref={firstInputRef}
                  id="eq-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ramesh Kumar"
                  autoComplete="name"
                />
              </div>

              <div className="eq-form__field">
                <label htmlFor="eq-phone">Phone Number *</label>
                <input
                  id="eq-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 70410 81081"
                  autoComplete="tel"
                  inputMode="numeric"
                />
              </div>

              <div className="eq-form__field">
                <label htmlFor="eq-service">Service Required</label>
                <select id="eq-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service…</option>
                  {SERVICES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="eq-form__field">
                <label htmlFor="eq-message">Brief Message <span style={{ fontWeight: 400, color: 'var(--slate-500)' }}>(optional)</span></label>
                <textarea
                  id="eq-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Need a hospital bed on rent for 2 months in Vizag"
                />
              </div>

              {status === 'error' && (
                <p className="eq-form__error" role="alert">{err}</p>
              )}

              <button
                type="submit"
                className="btn btn--primary btn-lg eq-form__submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : <>Send Enquiry <ArrowRight /></>}
              </button>

              <p className="eq-form__note">
                Or call us directly:&nbsp;
                <a href="tel:+917041081081"><strong>70410 81081</strong></a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
