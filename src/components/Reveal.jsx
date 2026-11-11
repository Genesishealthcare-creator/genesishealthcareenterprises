import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children and fades/slides them into view on scroll.
 * Props:
 *   delay  0-5 — stagger offset
 *   as     tag name (default 'div')
 *   className / style — forwarded to the wrapper element
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return }

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      data-delay={delay || undefined}
      style={style}
    >
      {children}
    </Tag>
  )
}
