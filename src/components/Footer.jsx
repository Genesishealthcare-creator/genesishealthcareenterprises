import { Link } from 'react-router-dom'
import { Phone, Mail, Pin, Clock, ArrowRight, Shield, HeartPlus, Instagram } from './Icons.jsx'

// Add more profiles here (Facebook, YouTube, ...) and they appear automatically.
const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/genesis_home_care_nursing?psln=ZHB2bTdoYWgxYm81',
    icon: Instagram,
    cls: 'instagram',
  },
]

const services = [
  { to: '/medical-equipment', label: 'Medical Equipment Rental & Sales' },
  { to: '/home-care',         label: 'Home Care Services' },
  { to: '/old-age-home',      label: 'Old Age Home & Senior Care' },
  { to: '/patient-transport',  label: 'Patient Transport Services' },
  { to: '/nri-services',       label: 'Exclusive Services for NRIs' },
  { to: '/old-age-home-support', label: 'Old Age Home Support' },
  { to: '/about',             label: 'About Us' },
  { to: '/faq',               label: 'FAQs' },
]

const quickLinks = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/gallery', label: 'Photo Gallery' },
  { to: '/join-our-team', label: 'Join in Our Team' },
  { to: '/faq',     label: 'Frequently Asked Questions' },
]

const stats = [
  { v: '10+',  l1: 'Years',        l2: 'Experience' },
  { v: '100',  l1: 'Patient Care', l2: 'Staff' },
  { v: '20k+', l1: 'Satisfied',    l2: 'Clients' },
  { v: '24',   l1: 'Hrs Pharmacy', l2: 'Home Delivery' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Decorative blobs */}
      <span className="footer__blob footer__blob--1" aria-hidden="true" />
      <span className="footer__blob footer__blob--2" aria-hidden="true" />

      {/* ── Stats bar ── */}
      <div className="footer__stats-bar">
        <div className="container">
          <div className="footer__stats-inner">
            {stats.map(s => (
              <div className="footer__stat" key={s.l1}>
                <strong>{s.v}</strong>
                <div>
                  <span>{s.l1}</span>
                  <span>{s.l2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="container footer__main">
        <div className="footer__grid">

          {/* Brand col */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo-link" aria-label="Genesis Health Care home">
              <img
                src="/genesis-logo-white.png"
                alt="Genesis Health Care Enterprises"
                className="footer__logo-img"
                width="900"
                height="847"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="footer__tagline">
              Bringing quality healthcare, comfort and compassionate support closer to your home — through medical equipment, home care and senior living.
            </p>
            <p className="footer__slogan">
              <HeartPlus style={{ width: 16, height: 16 }} />
              Caring for Life, Every Step of the Way.
            </p>

            {/* Social profiles */}
            <div className="footer__social" aria-label="Follow us on social media">
              {socials.map(({ label, href, icon: Icon, cls }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__social-link footer__social-link--${cls}`}
                  aria-label={`Genesis on ${label}`}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="footer__badges">
              <span className="footer__badge footer__badge--teal">
                <Shield style={{ width: 13, height: 13 }} /> Quality Assured
              </span>
              <span className="footer__badge footer__badge--violet">
                <HeartPlus style={{ width: 13, height: 13 }} /> Compassionate Care
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__col-head">
              <span className="footer__col-head-dot footer__col-head-dot--teal" />
              Our Services
            </h4>
            <nav className="footer__links" aria-label="Footer services">
              {services.map(s => (
                <Link key={s.to} to={s.to}>
                  <ArrowRight style={{ width: 13, height: 13 }} />
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer__col-head">
              <span className="footer__col-head-dot footer__col-head-dot--violet" />
              Quick Links
            </h4>
            <nav className="footer__links" aria-label="Footer quick links">
              {quickLinks.map(l => (
                <Link key={l.to} to={l.to}>
                  <ArrowRight style={{ width: 13, height: 13 }} />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__col-head">
              <span className="footer__col-head-dot footer__col-head-dot--amber" />
              Get in Touch
            </h4>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon footer__contact-icon--teal"><Phone /></span>
                <div>
                  <span className="footer__contact-label">Call Us</span>
                  <a href="tel:+917041081081">70410 81081</a>
                  <a href="tel:+917997272721" style={{ marginTop: '.1rem' }}>79972 72721</a>
                </div>
              </li>
              <li>
                <span className="footer__contact-icon footer__contact-icon--violet"><Mail /></span>
                <div>
                  <span className="footer__contact-label">Email Us</span>
                  <a href="mailto:info@genesishealthcareenterprises.com">info@genesishealthcareenterprises.com</a>
                </div>
              </li>
              <li>
                <span className="footer__contact-icon footer__contact-icon--amber"><Pin /></span>
                <div>
                  <span className="footer__contact-label">Head Office</span>
                  <span>50-49-43/4, Vivekananda Colony, Seethammadhara, Visakhapatnam — 530013</span>
                </div>
              </li>
              <li>
                <span className="footer__contact-icon footer__contact-icon--teal"><Pin /></span>
                <div>
                  <span className="footer__contact-label">Branch Office</span>
                  <span>18-187/1, Health City Road, Opp. Apollo Hospital, Hanumanthavaka, Visakhapatnam — 530040</span>
                </div>
              </li>
              <li>
                <span className="footer__contact-icon footer__contact-icon--rose"><Clock /></span>
                <div>
                  <span className="footer__contact-label">Working Hours</span>
                  <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </li>
            </ul>

            {/* CTA button */}
            <Link to="/contact" className="footer__contact-cta">
              Contact Us Now <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom-bar">
        <div className="container footer__bottom">
          <span>© {year} Genesis Health Care Enterprises. All rights reserved.</span>
          <span className="footer__bottom-made">
            Developed by : <strong>Genesis Team</strong>
          </span>
        </div>
      </div>
    </footer>
  )
}
