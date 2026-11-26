// Single source of truth for per-page SEO (title, description, keywords).
// Used by <Seo /> at runtime AND by scripts/prerender-meta.mjs at build time,
// so crawlers and link previews (WhatsApp, Facebook) that do not run JavaScript
// still receive the correct tags for every page.

import { posts } from './blogData.js'
import { homeServiceGroups } from './homeServices.js'

export const SITE_URL = 'https://www.genesishealthcareenterprises.com'
export const SITE_NAME = 'Genesis Health Care Enterprises'
export const SITE_IMAGE = `${SITE_URL}/android-chrome-512x512.png`

export const seoData = {
  '/': {
    title: 'Genesis Health Care | Medical Equipment & Home Care in Vizag',
    description:
      'Genesis Health Care Enterprises, Visakhapatnam (Vizag): medical equipment on rent and sale, home nursing, old age home with rehabilitation, ambulance and NRI parent care. Call 70410 81081.',
    keywords:
      'medical equipment in Vizag, medical equipment on rent Visakhapatnam, home care services Vizag, home nursing Visakhapatnam, old age home Vizag, hospital bed on rent Vizag, oxygen concentrator on rent Vizag, ambulance service Vizag, Genesis Health Care',
  },
  '/medical-equipment': {
    title: 'Hospital Bed & Wheelchair Rental in Visakhapatnam | Buy Home ICU Equipment Vizag',
    description:
      'Hospital bed and wheelchair rental in Visakhapatnam, oxygen concentrator and cylinder rental Vizianagaram, home ICU equipment for sale or rent in Vizag. Doorstep delivery. Call 70410 81081.',
    keywords:
      'hospital bed and wheelchair rental in Visakhapatnam, buy home ICU medical equipment Visakhapatnam, oxygen concentrator and cylinder rental Vizianagaram, medical equipment for rent and sale in Vizag, hospital bed rental Visakhapatnam, wheelchair rental Visakhapatnam, ICU bed rental Vizag, air mattress for rent in Vizag, CPAP machine on rent in Vizag, BiPAP machine rental in Vizag, suction machine rental in Vizag, medical equipment suppliers in Vizag, home medical equipment rental Vizag, affordable medical equipment rental Vizag, home nursing equipment rental Vizag, Genesis Surgicals',
  },
  '/home-care': {
    title: 'Home Care Services in Vizag | Ryles Tube, Foley Catheter, IV Therapy at Home',
    description:
      'Home nursing in Visakhapatnam and Vizianagaram: Ryles tube insertion and changing, Foley catheter changing, IV antibiotic therapy, home injection and IV infusion service, bedridden patient care. Call 70410 81081.',
    keywords:
      'Ryles tube insertion and changing at home Vizag, Foley catheter changing service at home Visakhapatnam, IV antibiotic therapy at home Visakhapatnam, home injection and IV infusion service Vizianagaram, home care services in Vizag, home nursing Visakhapatnam, nurse at home Vizag, elderly care at home Vizag, bedridden patient care Vizag, ICU at home Vizag, post surgery care at home Vizag, clinical nursing at home Vizianagaram',
  },
  '/old-age-home': {
    title: 'Old Age Home & Post-Stroke Rehabilitation in Vizag | Senior Care Vizianagaram',
    description:
      'Post-stroke rehabilitation care centre, assisted living and old age home in Visakhapatnam and Vizianagaram: senior rehabilitation, elder care, physiotherapy and in-house nursing. Call 70410 81081.',
    keywords:
      'post-stroke rehabilitation care center Visakhapatnam, assisted living and old age home Vizianagaram, senior rehabilitation and elder care Visakhapatnam, old age home in Vizag, rehabilitation centre Vizag, physiotherapy centre Visakhapatnam, stroke rehabilitation Vizag, elderly care home Vizag, old age home Vizianagaram',
  },
  '/patient-transport': {
    title: 'Ambulance Service Vizianagaram to Visakhapatnam | ICU Ambulance & Medical Cab',
    description:
      '24/7 ambulance service Vizianagaram to Visakhapatnam, ICU ambulance with oxygen support, non-emergency patient transport and wheelchair accessible medical cab. Call 70410 81081.',
    keywords:
      '24/7 ambulance service Vizianagaram to Visakhapatnam, ICU ambulance with oxygen support Visakhapatnam, non-emergency patient transport service Vizag, wheelchair accessible medical cab Visakhapatnam, cardiac ambulance Vizag, patient transfer ambulance Vizag, medical taxi Visakhapatnam, ambulance Vizianagaram',
  },
  '/nri-services': {
    title: 'NRI Services: Care for Parents in Vizag | Genesis',
    description:
      'Living abroad? Genesis takes care of your elderly parents in Visakhapatnam and Andhra Pradesh: 24/7 caretaker, doctor visits, lab tests at home and video updates. WhatsApp 70410 81081.',
    keywords:
      'NRI parent care Vizag, elderly parents care India NRI, caretaker for parents Visakhapatnam, home nursing for NRI families, NRI services Andhra Pradesh',
  },
  '/old-age-home-support': {
    title: 'Old Age Home Support in Andhra Pradesh | Senior Care Help',
    description:
      'Help finding safe old age homes, hospice care, nurse visits, senior day care and long-term care for dementia and bedridden seniors in Andhra Pradesh. Call 70410 81081.',
    keywords:
      'old age home support Andhra Pradesh, assisted living Vizag, hospice care Visakhapatnam, senior day care Vizag, dementia care Vizag, long term care for seniors',
  },
  '/about': {
    title: 'About Genesis Health Care | 10+ Years of Care in Vizag',
    description:
      'A decade of compassion in Visakhapatnam: from Genesis Home Care Services to Genesis Health Care Enterprises with home care, old age home, medical equipment rental and Genesis Surgicals.',
    keywords:
      'Genesis Health Care Enterprises, Genesis Home Care Services Vizag, Potti Krupa Samson, home care company Visakhapatnam, Genesis Surgicals',
    image: '/og-about.jpg',
  },
  '/contact': {
    title: 'Contact Genesis Health Care | Vizag | 70410 81081',
    description:
      'Call 70410 81081 or 79972 72721, or visit us at Seethammadhara and Health City Road, Visakhapatnam, for medical equipment, home care and old age home enquiries.',
    keywords:
      'Genesis Health Care contact, home care Vizag phone number, medical equipment Seethammadhara, Health City Road Visakhapatnam, Hanumanthavaka',
  },
  '/faq': {
    title: 'FAQs | Medical Equipment, Home Care & Old Age Home Vizag',
    description:
      'Answers to common questions about medical equipment rental and sales, home care services and our old age home in Visakhapatnam.',
    keywords:
      'medical equipment rental FAQ Vizag, home care FAQ Visakhapatnam, old age home FAQ Vizag',
  },
  '/join-our-team': {
    title: 'Nursing & Caregiver Jobs in Vizag | Join Genesis',
    description:
      'Careers at Genesis Health Care, Visakhapatnam: supervisors, registered nurses, critical care nurses, patient care attendants, baby care providers and caregivers. Apply today.',
    keywords:
      'nursing jobs in Vizag, caregiver jobs Visakhapatnam, patient care attendant jobs Vizag, home nurse jobs Visakhapatnam, GDA jobs Vizag, baby care jobs Vizag',
  },
  '/gallery': {
    title: 'Photo Gallery | Genesis Health Care, Visakhapatnam',
    description:
      'See Genesis Health Care in action: home nursing, elderly care, critical care at home, patient transport, old age home and rehabilitation in Visakhapatnam.',
    keywords: 'Genesis Health Care photos, home care Vizag gallery, old age home Vizag photos',
  },
}

// Home care service pages (22 pages)
homeServiceGroups.flatMap(g => g.services).forEach(s => {
  seoData[`/${s.slug}`] = {
    title: s.metaTitle,
    description: s.metaDesc,
    keywords: s.keywords,
  }
})

// Blog list + one entry per post (generated from src/lib/blogData.js).
seoData['/blog'] = {
  title: 'Health Care Blog | Medical Equipment & Home Care Tips Vizag',
  description:
    'Practical guides from Genesis Health Care, Visakhapatnam: choosing a hospital bed, oxygen concentrators, CPAP vs BiPAP, bedridden patient care and caring for parents from abroad.',
  keywords:
    'home care tips Vizag, medical equipment guide Visakhapatnam, bedridden patient care tips, oxygen concentrator guide, NRI parent care guide, Genesis Health Care blog',
}
posts.forEach((p) => {
  seoData[`/blog/${p.slug}`] = {
    title: `${p.title} | Genesis Health Care`,
    description: p.metaDescription || p.excerpt,
    keywords: p.keywords,
    image: p.image,
  }
})

// Normalise a pathname so "/about/" and "/about" both match.
export const normalisePath = (p) => (p.replace(/\/+$/, '') || '/')
