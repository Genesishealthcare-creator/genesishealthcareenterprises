import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'

/** Photo strip shown on every page, just above the footer. Links through to the full gallery. */
const photos = [
  'care-taker.jpg',
  'home-care-services.jpg',
  'patient-care-image.jpg',
  'nursing-care-images.jpg',
  'critical-care-at-home-and-patient-shifting.jpg',
  'oldage-home.jpg',
]

export default function ImageStrip() {
  const { pathname } = useLocation()
  if (pathname === '/gallery') return null     // the gallery page already shows every photo

  return (
    <section className="img-strip" aria-labelledby="img-strip-title">
      <div className="container">
        <div className="img-strip__head">
          <div>
            <span className="eyebrow eyebrow--teal">Genesis in Pictures</span>
            <h2 id="img-strip-title">Care You Can See</h2>
          </div>
          <Link to="/gallery" className="img-strip__link">
            View full gallery <ArrowRight />
          </Link>
        </div>

        <div className="img-strip__grid">
          {photos.map(p => (
            /* decorative tiles: the visible "View full gallery" link is the keyboard / screen-reader route */
            <Link key={p} to="/gallery" className="img-strip__tile" tabIndex={-1} aria-hidden="true">
              <img src={`/gallery/${p}`} alt="" width="400" height="300" loading="lazy" decoding="async" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
