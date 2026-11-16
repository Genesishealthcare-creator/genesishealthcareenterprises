// Blog posts. To add a new post, add one object to this array (newest first).
// Everything else (blog list, post page, search tags, sitemap) is generated from it.
//
// Post shape:
//   slug, title, excerpt, date (YYYY-MM-DD), category, readMins,
//   image, imageAlt, keywords,
//   sections: [{ heading, paragraphs?: string[], list?: string[] }]
//   cta?: { to, label }   (optional link shown at the end of the post)

export const BLOG_AUTHOR = 'Genesis Health Care Team'

export const posts = [
  {
    slug: 'how-to-choose-hospital-bed-for-home-use-vizag',
    title: 'How to Choose a Hospital Bed for Home Use in Vizag',
    excerpt:
      'Manual, semi-fowler, fowler or 5-function electric? A simple guide for families in Visakhapatnam who need a hospital bed at home, on rent or to buy.',
    date: '2026-11-16',
    category: 'Medical Equipment',
    readMins: 4,
    image: '/5-function-electric-bed.jpg',
    imageAlt: '5 function electric hospital bed for home care in Visakhapatnam',
    keywords:
      'hospital beds for rent in Vizag, hospital bed on rent in Vizag, ICU bed rental in Vizag, patient bed on rent in Vizag, air mattress for rent in Vizag, hospital bed for home use Visakhapatnam, manual hospital bed Vizag, 5 function electric bed Vizag, medical equipment for home care Vizag, hospital equipment for rent in Vizag, home nursing equipment rental Vizag, medical equipment rental in Visakhapatnam',
    tags: [
      'Hospital Beds for Rent in Vizag',
      'Patient Bed on Rent in Vizag',
      'ICU Bed Rental in Vizag',
      'Air Mattress for Rent in Vizag',
      'Medical Equipment for Home Care Vizag',
      'Hospital Equipment for Rent in Vizag',
    ],
    cta: { to: '/medical-equipment', label: 'See hospital beds on rent in Vizag' },
    sections: [
      {
        heading: 'Why a hospital bed helps at home',
        paragraphs: [
          'When a family member is recovering from surgery, a stroke or a long illness, an ordinary bed can make daily care harder. A home hospital bed lets caregivers raise the head or legs, change the patient\u2019s position more easily and reduce strain on their own backs.',
          'Many families in Visakhapatnam choose to rent a hospital bed for the recovery period instead of buying one, then buy only if long-term care is needed.',
        ],
      },
      {
        heading: 'Types of hospital beds',
        list: [
          'Manual hospital bed: crank-operated and budget-friendly, suitable for home use when the patient does not need frequent adjustment.',
          'Semi-fowler bed: raises the head and legs, which helps with breathing comfort and eating.',
          'Fowler bed: gives fuller upper-body elevation, often preferred for patients with breathing or heart conditions.',
          '5-function electric bed: adjusts with a hand control, so caregivers can change height, back and leg positions without cranking.',
        ],
      },
      {
        heading: 'Questions to ask before you rent or buy',
        list: [
          'How long will the bed be needed: a few weeks, a few months or long term?',
          'Does the patient need to be repositioned often? If yes, an electric bed saves effort.',
          'Is there enough room in the bedroom, and can the bed be carried in through the door?',
          'Will a pressure-relief air mattress also be needed to help prevent bedsores?',
          'Who will set it up, and who do you call if something stops working?',
        ],
      },
      {
        heading: 'Get advice for your situation',
        paragraphs: [
          'The right bed depends on the patient\u2019s condition. Please follow your doctor\u2019s advice, and talk to our team about availability, rental plans and home setup in Vizag.',
          'Genesis Health Care Enterprises offers hospital beds for rent in Vizag, patient beds on rent, air mattresses for rent and other medical equipment for home care in Visakhapatnam, at affordable prices. Call 70410 81081.',
        ],
      },
    ],
  },
  {
    slug: 'oxygen-concentrator-on-rent-in-vizag-what-to-know',
    title: 'Oxygen Concentrator on Rent in Vizag: What to Know Before You Rent',
    excerpt:
      'A plain-language guide to renting an oxygen concentrator at home in Visakhapatnam: how it works, what to check and what to ask your doctor first.',
    date: '2026-11-15',
    category: 'Medical Equipment',
    readMins: 4,
    image: '/oxygen-machine.png',
    imageAlt: 'Oxygen concentrator machine for home use in Visakhapatnam',
    keywords:
      'oxygen concentrator on rent in Vizag, oxygen concentrator rental Visakhapatnam, portable oxygen concentrator Vizag, home oxygen Vizag, medical equipment for rent in Vizag, home medical equipment rental Vizag, suction machine rental in Vizag, medical equipment suppliers in Vizag, patient care equipment rental Vizag, affordable medical equipment rental Vizag',
    tags: [
      'Oxygen Concentrator on Rent in Vizag',
      'Medical Equipment for Rent in Vizag',
      'Home Medical Equipment Rental Vizag',
      'Suction Machine Rental in Vizag',
      'Patient Care Equipment Rental Vizag',
      'Medical Equipment Suppliers in Vizag',
    ],
    cta: { to: '/medical-equipment', label: 'Oxygen concentrators and respiratory care' },
    sections: [
      {
        heading: 'What an oxygen concentrator does',
        paragraphs: [
          'An oxygen concentrator takes in room air, filters it and delivers air with a higher oxygen level through a mask or nasal tube. It runs on electricity, so it does not need to be refilled like a cylinder.',
          'Doctors may advise home oxygen for patients with long-term lung conditions or during recovery from illness. Only a doctor can decide whether oxygen is needed and at what flow rate.',
        ],
      },
      {
        heading: 'Stationary and portable concentrators',
        list: [
          'Stationary concentrator: for use at home, usually near the bed or chair.',
          'Portable concentrator: lighter and battery-powered, useful for patients who travel to the hospital or move around.',
        ],
      },
      {
        heading: 'What to check before renting',
        list: [
          'Get the doctor\u2019s advice on flow rate and how many hours a day oxygen is needed.',
          'Confirm that the machine suits the prescribed flow rate.',
          'Ask who will install it and show your family how to use it, including the mask or tube and humidifier bottle.',
          'Keep a backup plan for power cuts, and ask your doctor what to do if the machine stops.',
          'Keep the machine away from open flames, and do not allow smoking in the room.',
        ],
      },
      {
        heading: 'Need one in Vizag?',
        paragraphs: [
          'Genesis Health Care Enterprises is a medical equipment supplier in Vizag. We offer oxygen concentrators on rent in Vizag, along with other home medical equipment rental such as suction machines and patient care equipment, at affordable prices. Call 70410 81081 to check availability and rental terms.',
          'If a patient is struggling to breathe, call your doctor or emergency services right away.',
        ],
      },
    ],
  },
  {
    slug: 'cpap-vs-bipap-which-machine-vizag',
    title: 'CPAP vs BiPAP: What\u2019s the Difference? A Guide for Families in Vizag',
    excerpt:
      'CPAP and BiPAP machines both support breathing during sleep, but they work differently. Learn the basics before you rent one in Visakhapatnam.',
    date: '2026-11-14',
    category: 'Medical Equipment',
    readMins: 3,
    image: '/CPAP-BiPAP-machines.png',
    imageAlt: 'CPAP and BiPAP machines available on rent in Visakhapatnam',
    keywords:
      'CPAP machine on rent in Vizag, BiPAP machine rental in Vizag, CPAP vs BiPAP, sleep apnea machine Visakhapatnam, medical equipment hire in Vizag, medical equipment rental services in Vizag, medical equipment on rent in Visakhapatnam, nursing equipment for home use Vizag',
    tags: [
      'CPAP Machine on Rent in Vizag',
      'BiPAP Machine Rental in Vizag',
      'Medical Equipment Hire in Vizag',
      'Medical Equipment Rental Services in Vizag',
      'Nursing Equipment for Home Use Vizag',
    ],
    cta: { to: '/medical-equipment', label: 'CPAP and BiPAP machines on rent' },
    sections: [
      {
        heading: 'The basic difference',
        paragraphs: [
          'A CPAP machine delivers one steady level of air pressure to keep the airway open. A BiPAP machine delivers two levels: a higher pressure when you breathe in and a lower one when you breathe out.',
          'Because BiPAP changes pressure with each breath, doctors may choose it for some patients who find a single pressure hard to tolerate, or who have certain lung or breathing conditions.',
        ],
      },
      {
        heading: 'Which one is right?',
        paragraphs: [
          'This is a medical decision. A doctor, often after a sleep study or breathing assessment, decides whether CPAP or BiPAP is needed and sets the pressure. Please do not choose or adjust settings on your own.',
        ],
      },
      {
        heading: 'What to ask when renting',
        list: [
          'Ask for the machine type and settings your doctor has prescribed.',
          'Check that the right mask size and style is available. A good fit matters for comfort.',
          'Ask about the humidifier, tubing and filters, and how to clean them.',
          'Find out who to call if the machine alarms or stops working.',
        ],
      },
      {
        heading: 'CPAP and BiPAP rental in Vizag',
        paragraphs: [
          'Genesis Health Care Enterprises offers a CPAP machine on rent in Vizag and BiPAP machine rental in Vizag, with masks, as part of our medical equipment rental services in Visakhapatnam. Bring your doctor\u2019s advice and call 70410 81081 to discuss availability and rental options.',
        ],
      },
    ],
  },
  {
    slug: 'caring-for-bedridden-patient-at-home-bedsore-prevention',
    title: 'Caring for a Bedridden Patient at Home: Bedsore Prevention Basics',
    excerpt:
      'Practical tips for families in Visakhapatnam caring for a bedridden loved one: repositioning, skin care, hygiene and when to call a nurse.',
    date: '2026-11-13',
    category: 'Home Care',
    readMins: 5,
    image: '/gallery/nursing-care-images.jpg',
    imageAlt: 'Nurse repositioning a bedridden patient at home to prevent bedsores',
    keywords:
      'bedridden patient care at home Vizag, bedsore prevention, home nursing Visakhapatnam, caregiver for bedridden patient Vizag, air mattress for bedsores Vizag, air mattress for rent in Vizag, medical equipment for elderly care in Vizag, home nursing equipment rental Vizag, hospital beds for rent in Vizag, home care services in Vizag',
    tags: [
      'Bedridden Patient Care at Home Vizag',
      'Home Nursing Visakhapatnam',
      'Air Mattress for Rent in Vizag',
      'Medical Equipment for Elderly Care in Vizag',
      'Home Nursing Equipment Rental Vizag',
    ],
    cta: { to: '/home-care', label: 'Home nursing and bedridden patient care in Vizag' },
    sections: [
      {
        heading: 'Why bedsores happen',
        paragraphs: [
          'Bedsores (pressure ulcers) can develop when a patient stays in one position for too long. Pressure on the skin, especially over the hips, heels, tailbone and shoulders, reduces blood flow and can damage the skin.',
        ],
      },
      {
        heading: 'Everyday steps that help',
        list: [
          'Change the patient\u2019s position regularly. Many care guides suggest at least every two hours, but follow the nurse\u2019s or doctor\u2019s advice for your patient.',
          'Use pillows or cushions to keep bony areas from pressing together.',
          'Keep the skin clean and dry, and change soiled clothes and sheets promptly.',
          'Keep the bedsheet smooth, because wrinkles can press into the skin.',
          'Encourage good nutrition and fluids, as the doctor allows.',
          'Consider a pressure-relief air mattress for patients who cannot move on their own.',
        ],
      },
      {
        heading: 'Signs to watch for',
        paragraphs: [
          'Check the skin every day. Redness that does not fade, warm or swollen areas, blisters or open sores need prompt attention from a doctor or nurse.',
        ],
      },
      {
        heading: 'When to get professional help',
        paragraphs: [
          'Caring for a bedridden patient is physically and emotionally demanding. A trained nurse or patient care attendant can handle repositioning, hygiene, medication reminders, wound dressing and vitals checks, and can teach your family what to do.',
          'Genesis Health Care Enterprises provides home nursing and trained attendants in Visakhapatnam, with 12-hour and 24-hour arrangements. We also supply medical equipment for elderly care in Vizag, such as hospital beds and air mattresses for rent, and home nursing equipment rental. Call 70410 81081 to discuss your needs.',
        ],
      },
    ],
  },
  {
    slug: 'caring-for-aging-parents-in-vizag-from-abroad-nri-guide',
    title: 'Caring for Aging Parents in Vizag from Abroad: A Guide for NRIs',
    excerpt:
      'Living abroad while your parents are in Visakhapatnam? Here is how to set up reliable daily care, health monitoring and regular updates.',
    date: '2026-11-12',
    category: 'NRI Services',
    readMins: 4,
    image: '/gallery/oldage-home-image-1.jpg',
    imageAlt: 'Caregiver supporting an elderly person, care for NRI families parents in Visakhapatnam',
    keywords:
      'NRI parent care Vizag, caretaker for elderly parents Visakhapatnam, home nursing for NRI families, elderly care India NRI, medical equipment for elderly care in Vizag, medical equipment for home care Vizag, home care services in Vizag, old age home Vizag',
    tags: [
      'NRI Parent Care Vizag',
      'Caretaker for Elderly Parents Visakhapatnam',
      'Home Care Services in Vizag',
      'Medical Equipment for Elderly Care in Vizag',
    ],
    cta: { to: '/nri-services', label: 'Exclusive services for NRIs' },
    sections: [
      {
        heading: 'The worry of being far away',
        paragraphs: [
          'Many families have a son or daughter working abroad while parents stay in Andhra Pradesh. Distance makes it hard to know how they are really doing day to day, and harder to act quickly when something goes wrong.',
        ],
      },
      {
        heading: 'What reliable care looks like',
        list: [
          'A trained, verified caretaker who is comfortable in your parents\u2019 language.',
          'Regular checks of blood pressure, sugar and oxygen, and medicine reminders.',
          'Doctor consultation and lab tests at home, so your parents do not have to travel.',
          'A clear plan for emergencies, including who to call and how to reach the hospital.',
          'Regular updates, such as video calls during visits and a monthly health report.',
          'Support with equipment, medicine delivery and patient transport when needed.',
        ],
      },
      {
        heading: 'Tips for NRI families',
        list: [
          'Keep a list of your parents\u2019 doctors, medicines and past reports where one local contact can find them.',
          'Agree on one point of contact in Vizag who can act quickly.',
          'Set a regular call schedule so your parents hear from you, as loneliness affects health too.',
          'Choose a provider with transparent billing, ideally with online payment.',
        ],
      },
      {
        heading: 'How Genesis can help',
        paragraphs: [
          'Genesis Health Care Enterprises offers an NRI services package in Visakhapatnam, covering a 24/7 caretaker, health monitoring, doctor and lab visits at home, video updates and more. We can also arrange medical equipment for elderly care in Vizag, such as a hospital bed or oxygen concentrator on rent. Call or WhatsApp 70410 81081 from anywhere in the world.',
        ],
      },
    ],
  },
]

// Where a clickable keyword tag should take the reader (first match wins).
const TAG_ROUTES = [
  [/nri|abroad/i, '/nri-services'],
  [/old age/i, '/old-age-home'],
  [/ambulance|transport/i, '/patient-transport'],
  [/\bbeds?\b|mattress|oxygen|cpap|bipap|suction|wheelchair|equipment|supplier/i, '/medical-equipment'],
  [/nursing|bedridden|home care|caretaker|elderly/i, '/home-care'],
]
export const tagRoute = (tag) => (TAG_ROUTES.find(([re]) => re.test(tag)) || [null, '/contact'])[1]

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
