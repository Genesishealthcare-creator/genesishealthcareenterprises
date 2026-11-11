import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from './Icons.jsx'

export default function EquipmentModal({ item, onClose }) {
  const overlayRef = useRef(null)
  const dialogRef  = useRef(null)

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // focus trap — focus the dialog
    dialogRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [])

  /* close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  /* close on overlay click */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!item) return null

  const { icon: Icon, color, title, desc, detail, images, items } = item

  return (
    <div
      className="eqm-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="eqm-dialog"
        ref={dialogRef}
        tabIndex={-1}
      >
        {/* Close button */}
        <button className="eqm-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Top — image + badge */}
        <div className={`eqm-header eqm-header--${color}`}>
          {images && images.length > 0 ? (
            <div className="eqm-img-row">
              {images.map((img, i) => (
                <div className="eqm-img-card" key={i}>
                  <img src={img.src} alt={img.alt} />
                  <span>{img.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="eqm-header-icon-wrap">
              <span className={`eqm-header-icon eqm-header-icon--${color}`}>
                <Icon />
              </span>
            </div>
          )}

          {/* colour accent bar */}
          <div className={`eqm-header-bar eqm-header-bar--${color}`} aria-hidden="true" />
        </div>

        {/* Body */}
        <div className="eqm-body">
          {/* Title row */}
          <div className="eqm-title-row">
            <span className={`eqm-icon eqm-icon--${color}`}><Icon /></span>
            <div>
              <h2 className="eqm-title">{title}</h2>
              <p className="eqm-desc">{desc}</p>
            </div>
          </div>

          {/* Detail text */}
          {detail && (
            <p className="eqm-detail">{detail}</p>
          )}

          {/* Equipment list */}
          <div className="eqm-section">
            <h4 className="eqm-section-label">Available Equipment</h4>
            <ul className="eqm-list">
              {items.map(it => (
                <li key={typeof it === 'string' ? it : it.name}>
                  <Check />
                  <div>
                    {typeof it === 'string' ? (
                      <span>{it}</span>
                    ) : (
                      <>
                        <strong>{it.name}</strong>
                        {it.note && <span className="eqm-item-note">{it.note}</span>}
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="eqm-footer">
            <Link to="/contact" className="btn btn--primary btn-lg" onClick={onClose}>
              Enquire About {title} <ArrowRight />
            </Link>
            <button className="btn btn--ghost btn-lg" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
