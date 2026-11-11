import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from './Icons.jsx'

export default function CtaBand({
  title = 'Your Healthcare Needs, Our Priority!',
  text = 'Looking for medical equipment, a professional caregiver, or a safe old age home? Contact our team today.',
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band cta-band--default">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn--white btn-lg">
              Contact Us <ArrowRight />
            </Link>
            <a href="tel:+917041081081" className="btn btn--outline btn-lg">
              <Phone /> Call Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
