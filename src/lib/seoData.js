// Single source of truth for per-page SEO (title, description, keywords).
// Used by <Seo /> at runtime AND by scripts/prerender-meta.mjs at build time,
// so crawlers and link previews (WhatsApp, Facebook) that do not run JavaScript
// still receive the correct tags for every page.

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
    title: 'Medical Equipment on Rent in Vizag | Bed, Oxygen, CPAP',
    description:
      'Rent or buy hospital beds, oxygen concentrators, CPAP/BiPAP machines, wheelchairs and air mattresses in Visakhapatnam (Vizag). Home delivery and setup. Call 70410 81081.',
    keywords:
      'medical equipment in Vizag, medical equipment on rent Visakhapatnam, hospital bed on rent Vizag, oxygen concentrator on rent Vizag, CPAP machine on rent Vizag, BiPAP machine rental Visakhapatnam, wheelchair on rent Vizag, air mattress Vizag, 5 function electric bed Vizag, manual hospital bed Vizag, surgical items Vizag, Genesis Surgicals',
  },
  '/home-care': {
    title: 'Home Care Services in Vizag | Home Nursing & Elderly Care',
    description:
      'Trusted home care in Visakhapatnam: home nursing, elderly care, bedridden patient care, post-surgery care and trained attendants for 12 or 24 hours. Call 70410 81081.',
    keywords:
      'home care services in Vizag, home nursing Visakhapatnam, nurse at home Vizag, elderly care at home Vizag, bedridden patient care Vizag, male nurse Vizag, ICU at home Vizag, post surgery care at home Vizag, patient care attendant Vizag',
  },
  '/old-age-home': {
    title: 'Old Age Home & Rehabilitation in Vizag | Physiotherapy',
    description:
      'Old age home with an in-house rehabilitation centre in Visakhapatnam: long-term senior care, physiotherapy after stroke, fracture or surgery, nursing and meals. Call 70410 81081.',
    keywords:
      'old age home in Vizag, old age home Visakhapatnam, senior citizen care Vizag, rehabilitation centre Vizag, physiotherapy centre Visakhapatnam, stroke rehabilitation Vizag, elderly care home Vizag',
  },
  '/patient-transport': {
    title: 'Ambulance Service in Vizag | 24/7 Patient Transport',
    description:
      '24/7 patient transport in Visakhapatnam: cardiac ambulance, non-cardiac (BLS) ambulance and medical taxi with a trained nurse or caretaker. Call 70410 81081.',
    keywords:
      'ambulance service in Vizag, ambulance Visakhapatnam, cardiac ambulance Vizag, patient transfer ambulance Vizag, medical taxi Visakhapatnam, 24 hour ambulance Vizag',
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

// Normalise a pathname so "/about/" and "/about" both match.
export const normalisePath = (p) => (p.replace(/\/+$/, '') || '/')
