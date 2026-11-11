import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Phone } from './Icons.jsx'

const links = [
  { to: '/',                 label: 'Home' },
  { to: '/medical-equipment',label: 'Medical Equipment' },
  { to: '/home-care',        label: 'Home Care' },
  { to: '/old-age-home',     label: 'Old Age Home' },
  { to: '/about',            label: 'About' },
  { to: '/faq',              label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Animated rainbow shimmer bar */}
      <div className="navbar__shimmer" aria-hidden="true" />

      <div className="container navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand" aria-label="Genesis Health Care Enterprises — home">
          <img
            src="/logo.jpeg"
            alt="Genesis Health Care Enterprises logo"
            className="brand-logo-img"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <a className="nav-phone-btn" href="tel:+917041081081" aria-label="Call us">
            <Phone />
            <span>Call Us</span>
          </a>
          <Link to="/contact" className="nav-contact-btn">Get in Touch</Link>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>
            {l.label}
          </NavLink>
        ))}
        <a className="nav-phone-btn" href="tel:+917041081081">
          <Phone /> Call Us
        </a>
        <Link to="/contact" className="nav-contact-btn">Get in Touch</Link>
      </nav>
    </header>
  )
}
