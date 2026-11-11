// eyebrowColor: 'teal' | 'violet' | 'rose' | 'amber' | 'sky' | 'emerald'
export default function SectionHeading({ eyebrow, eyebrowColor = 'teal', title, children, center = true }) {
  return (
    <div className="section-head" style={{ textAlign: center ? 'center' : 'left', marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
      {eyebrow && <span className={`eyebrow eyebrow--${eyebrowColor}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
