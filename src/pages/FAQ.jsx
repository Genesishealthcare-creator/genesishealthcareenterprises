import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FaqItem from '../components/FaqItem.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Reveal from '../components/Reveal.jsx'
import { Stethoscope, HomeCare, Elderly, ArrowRight } from '../components/Icons.jsx'

const faqs = {
  'Medical Equipment Rental & Sales': {
    icon: Stethoscope,
    color: 'teal',
    items: [
      {
        q: 'Can I rent medical equipment for a short period?',
        a: 'Yes. Rental options can be discussed for short-term and long-term medical requirements, depending on equipment availability.',
      },
      {
        q: 'What medical equipment is available?',
        a: 'Hospital beds, wheelchairs, oxygen concentrators, air mattresses, walkers, nebulizers and other patient care equipment, subject to availability.',
      },
      {
        q: 'Can I purchase medical equipment instead of renting?',
        a: 'Yes. Medical equipment purchase options are available based on your requirements and product availability.',
      },
    ],
  },
  'Home Care Services': {
    icon: HomeCare,
    color: 'violet',
    items: [
      {
        q: 'Do you provide home care for elderly people?',
        a: 'Yes. Home care arrangements can include personal assistance, elderly care, mobility support and daily living assistance.',
      },
      {
        q: 'Do you provide care for bedridden patients?',
        a: 'Yes. Patient care assistance can be arranged for bedridden individuals based on their specific needs.',
      },
      {
        q: 'Can I request full-time or part-time caregivers?',
        a: 'Care arrangements can be discussed according to your requirements and service availability.',
      },
    ],
  },
  'Old Age Home': {
    icon: Elderly,
    color: 'rose',
    items: [
      {
        q: 'Do you provide accommodation for senior citizens?',
        a: 'Yes. Our old age home service is intended to provide elderly individuals with comfortable accommodation and daily care support.',
      },
      {
        q: 'What facilities are available at the old age home?',
        a: 'Facilities may include accommodation, meals, personal assistance, companionship and healthcare coordination.',
      },
      {
        q: 'Can families visit their elderly relatives?',
        a: 'Visiting arrangements can be discussed with the management.',
      },
    ],
  },
}

// track ids outside render for stable keys
let _id = 0

export default function FAQ() {
  _id = 0

  return (
    <>
      <Seo
        title="FAQs – Genesis Health Care Enterprises"
        description="Frequently asked questions about medical equipment rental & sales, home care services and our old age home facilities."
      />
      <PageBanner
        colorVariant="teal"
        title="Frequently Asked Questions"
        description="Answers to common questions about our medical equipment, home care services and old age home facilities."
      />

      <section className="section section--white">
        <div className="container" style={{ maxWidth: 860 }}>

          {Object.entries(faqs).map(([category, { icon: Icon, color, items }]) => (
            <Reveal key={category} className="faq-category">

              {/* Category heading with coloured icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem', marginBottom: '.25rem' }}>
                <span
                  className={`feat__icon feat__icon--${color}`}
                  style={{ width: 46, height: 46, borderRadius: 14, display: 'grid', placeItems: 'center', flexShrink: 0 }}
                >
                  <Icon style={{ width: 24, height: 24 }} />
                </span>
                <h2 style={{ margin: 0 }}>{category}</h2>
              </div>
              <div style={{ height: 2, background: `var(--${color}-100, #e5e7eb)`, borderRadius: 2, marginBottom: '1.5rem' }} />

              <div className="faq-list">
                {items.map((item) => {
                  _id += 1
                  const id = _id
                  return (
                    <Reveal key={id} delay={(id % 3) + 1}>
                      <FaqItem id={id} question={item.q} answer={item.a} />
                    </Reveal>
                  )
                })}
              </div>
            </Reveal>
          ))}

          {/* Still have questions */}
          <Reveal>
            <div className="callout" style={{ marginTop: '1rem' }}>
              <p>
                <strong>Still have questions?</strong> We&apos;re happy to help.{' '}
                <Link to="/contact" style={{ fontWeight: 700, color: 'var(--teal-600)' }}>
                  Contact our team <ArrowRight style={{ width: 15, height: 15, verticalAlign: 'middle' }} />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to Take the Next Step?"
        text="Whether it's equipment, home care or a senior living arrangement, we're here to support you."
      />
    </>
  )
}
