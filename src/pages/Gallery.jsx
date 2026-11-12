import { useEffect, useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight, Phone } from '../components/Icons.jsx'

/* ─────────────────────────── DATA ─────────────────────────── */

const G = '/gallery/'

const photos = [
  /* Home care */
  { cat: 'home', src: 'care-taker.jpg',                   title: 'Caring attendant helping a senior at home',          alt: 'Nurse assisting an elderly woman with a meal at home' },
  { cat: 'home', src: 'doctor-visit-at-home.jpeg',        title: 'Doctor visit at home',                               alt: 'Doctor consulting an elderly woman at home' },
  { cat: 'home', src: 'female-care-taker-image.jpg',      title: 'Female caretaker',                                   alt: 'Female caretaker with an elderly woman in a wheelchair' },
  { cat: 'home', src: 'home-care-main-page-image.jpg',    title: 'Compassionate home care',                            alt: 'Smiling nurse hugging an elderly woman in a wheelchair' },
  { cat: 'home', src: 'home-care-nursing-service.jpg',    title: 'Home nursing for bedridden patients',                alt: 'Nurse checking a bedridden elderly patient while a family member sits beside him' },
  { cat: 'home', src: 'home-care-services.jpg',           title: 'Home care services',                                 alt: 'Nurse holding the hand of an elderly woman in bed' },
  { cat: 'home', src: 'home-nursing-care.webp',           title: 'Doctor, family and patient',                         alt: 'Doctor reviewing a tablet beside a patient and his family' },
  { cat: 'home', src: 'medication-management-at-home.jpeg', title: 'Medication management at home',                    alt: 'Nurse recording notes next to a patient with a vitals monitor' },
  { cat: 'home', src: 'nursing-care-images.jpg',          title: 'Repositioning to prevent bedsores',                  alt: 'Nurse turning and positioning a bedridden patient with cushions' },
  { cat: 'home', src: 'patient-care-image.jpg',           title: 'Patient care',                                       alt: 'Smiling nurse caring for an elderly woman in a wheelchair' },
  { cat: 'home', src: 'vitals-monitoring-services-at-home.jpeg', title: 'Vitals monitoring at home',                   alt: 'Nurse monitoring the vital signs of a patient resting in bed' },

  /* Critical care & transport */
  { cat: 'critical', src: 'critical-care-at-home-and-patient-shifting.jpg', title: 'Critical care team',            alt: 'Medical team attending to a critical patient on a stretcher' },
  { cat: 'critical', src: 'icu-nursing-care.webp',        title: 'ICU nursing care',                                   alt: 'ICU nurse beside a patient with monitors and an IV drip' },
  { cat: 'critical', src: 'patient-shifting-service.jpg', title: 'Patient shifting and transport',                     alt: 'Medical staff moving a patient on a stretcher towards an ambulance' },

  /* Old age home */
  { cat: 'oldage', src: 'hands-oldage-home.jpg',          title: 'Comfort and compassion',                             alt: 'A caregiver gently holding an elderly person\'s hands' },
  { cat: 'oldage', src: 'oldage-home.jpg',                title: 'Companionship for seniors',                          alt: 'Elderly couple smiling with a caregiver in a living room' },
  { cat: 'oldage', src: 'oldage-home-care.jpeg',          title: 'Warm, family-like care',                             alt: 'Caregiver embracing an elderly woman with a smile' },
  { cat: 'oldage', src: 'oldage-home-image-1.jpg',        title: 'Support with walking',                               alt: 'Nurse helping an elderly man walk with a cane' },

  /* Rehabilitation */
  { cat: 'rehab', src: 'rehab-oldage-home.jpg',           title: 'Rehabilitation at the old age home',                 alt: 'Nurse assisting an elderly woman in a wheelchair in a bright room' },
  { cat: 'rehab', src: 'rehab-oldage-home.avif',          title: 'Rehabilitation support',                             alt: 'Rehabilitation support for a senior' },
  { cat: 'rehab', src: 'rehabilitation-image.jpg',        title: 'Walking rehabilitation',                             alt: 'Caregiver helping an elderly woman practise walking with a walker' },
  { cat: 'rehab', src: 'rehabilitation-at-oldage-home.jpg', title: 'Physiotherapy and mobility',                       alt: 'Therapist helping a seated senior with resistance-band exercises' },
]

const categories = [
  { id: 'all',      label: 'All Photos' },
  { id: 'home',     label: 'Home Care' },
  { id: 'critical', label: 'Critical Care & Transport' },
  { id: 'oldage',   label: 'Old Age Home' },
  { id: 'rehab',    label: 'Rehabilitation' },
]

const catLabel = Object.fromEntries(categories.map(c => [c.id, c.label]))

/* ─────────────────────────── LIGHTBOX ─────────────────────────── */

function Lightbox({ items, index, onClose, onMove }) {
  const item = items[index]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose, onMove])

  return (
    <div className="gal-lb" role="dialog" aria-modal="true" aria-label={item.title} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <button className="gal-lb__btn gal-lb__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      {items.length > 1 && (
        <>
          <button className="gal-lb__btn gal-lb__prev" onClick={() => onMove(-1)} aria-label="Previous photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button className="gal-lb__btn gal-lb__next" onClick={() => onMove(1)} aria-label="Next photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </>
      )}
      <figure className="gal-lb__fig">
        <img src={G + item.src} alt={item.alt} />
        <figcaption>
          <strong>{item.title}</strong>
          <span>{catLabel[item.cat]} · {index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>
  )
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)   // index into `visible`, or null

  const visible = useMemo(() => photos.filter(p => filter === 'all' || p.cat === filter), [filter])
  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((d) => setOpen(i => (i === null ? i : (i + d + visible.length) % visible.length)), [visible.length])

  return (
    <>
      <Seo
        title="Photo Gallery | Home Care, Old Age Home & Rehabilitation in Visakhapatnam – Genesis Health Care"
        description="See Genesis Health Care Enterprises in action: home nursing, elderly care, ICU and critical care at home, patient transport, old age home care and rehabilitation in Visakhapatnam."
      />

      <PageBanner
        colorVariant="teal"
        badge="📷 Genesis in Pictures"
        title="Photo Gallery"
        description="A look at the care we bring to families — at home, in critical situations, in our old age home and through rehabilitation."
        stats={[
          { value: String(photos.length), label: 'Photos' },
          { value: '4', label: 'Care Categories' },
          { value: '24/7', label: 'Caring' },
        ]}
      />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our Work" eyebrowColor="teal" title="Moments of Care">
            Choose a category, then click any photo to view it larger.
          </SectionHeading>

          <div className="gal-tabs" role="tablist" aria-label="Gallery categories">
            {categories.map(c => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filter === c.id}
                className={`gal-tab${filter === c.id ? ' is-active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
                <span>{c.id === 'all' ? photos.length : photos.filter(p => p.cat === c.id).length}</span>
              </button>
            ))}
          </div>

          <div className="gal-grid">
            {visible.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) + 1} className="gal-item-wrap">
                <button className={`gal-item gal-item--${p.cat}`} onClick={() => setOpen(i)} aria-label={`Open photo: ${p.title}`}>
                  <img src={G + p.src} alt={p.alt} loading="lazy" decoding="async" />
                  <span className="gal-item__cap">
                    <strong>{p.title}</strong>
                    <small>{catLabel[p.cat]}</small>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="gal-cta">
            <p>Want this kind of care for your family?</p>
            <div>
              <a href="tel:+917041081081" className="btn btn--primary btn-lg"><Phone /> 70410 81081</a>
              <Link to="/contact" className="btn btn--ghost btn-lg">Send an Enquiry <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Care You Can See, Compassion You Can Feel"
        text="Call 70410 81081 to talk about home care, an old age home or rehabilitation for your loved one."
      />

      {open !== null && visible[open] && (
        <Lightbox items={visible} index={open} onClose={close} onMove={move} />
      )}
    </>
  )
}
