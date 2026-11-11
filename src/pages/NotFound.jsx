import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { ArrowRight, HomeCare, Stethoscope, Elderly } from '../components/Icons.jsx'

const shortcuts = [
  { to: '/medical-equipment', icon: Stethoscope, color: 'teal',   label: 'Medical Equipment' },
  { to: '/home-care',         icon: HomeCare,    color: 'violet', label: 'Home Care' },
  { to: '/old-age-home',      icon: Elderly,     color: 'rose',   label: 'Old Age Home' },
]

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found – Genesis Health Care Enterprises" />

      <section style={{ textAlign: 'center', padding: 'clamp(60px,12vw,120px) 0' }}>
        <div className="container">
          {/* Big gradient 404 */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4.5rem,14vw,8rem)',
            fontWeight: 900,
            letterSpacing: '-.05em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--teal-500), var(--violet-500))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '.25rem',
          }}>
            404
          </div>

          <h2 style={{ marginBottom: '.5rem' }}>Page Not Found</h2>
          <p style={{ color: 'var(--slate-500)', maxWidth: 460, margin: '0 auto 2.5rem' }}>
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Here are some helpful links instead.
          </p>

          {/* Quick nav shortcuts */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {shortcuts.map(({ to, icon: Icon, color, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.55rem',
                  padding: '.65rem 1.4rem',
                  borderRadius: '999px',
                  border: '1.5px solid var(--slate-200)',
                  background: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--slate-700)',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all var(--t)',
                }}
              >
                <span className={`feat__icon feat__icon--${color}`} style={{ width: 32, height: 32, borderRadius: 8, display: 'grid', placeItems: 'center' }}>
                  <Icon style={{ width: 17, height: 17 }} />
                </span>
                {label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/" className="btn btn--primary btn-lg">
              Back to Home <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn--ghost btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
