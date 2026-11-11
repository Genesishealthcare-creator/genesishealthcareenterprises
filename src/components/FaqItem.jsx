import { useState, useRef } from 'react'
import { ChevronDown } from './Icons.jsx'

export default function FaqItem({ question, answer, id }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  const panelId = `faq-panel-${id}`
  const btnId   = `faq-btn-${id}`

  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          id={btnId}
          className="faq-question"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(v => !v)}
        >
          <span>{question}</span>
          <ChevronDown className="chev" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-answer"
        style={{ maxHeight: open ? `${panelRef.current?.scrollHeight ?? 300}px` : 0 }}
      >
        <div ref={panelRef} className="faq-answer__inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}
