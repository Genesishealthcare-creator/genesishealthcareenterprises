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
    slug: 'medical-equipment-rentals-in-vizag-hospital-beds-wheelchairs',
    title: 'Medical Equipment Rentals in Vizag – Hospital Beds & Wheelchairs',
    excerpt:
      'When a loved one is recovering at home, the right equipment makes all the difference. Here is what families in Visakhapatnam and Vizianagaram need to know before renting a hospital bed or wheelchair, from a team that has served over 12,000 patients across the region.',
    metaDescription:
      'Renting a hospital bed or wheelchair in Vizag or Vizianagaram? Practical advice, pickup points and doorstep delivery from a team that has served 12,000+ patients. Call 70410 81081.',
    date: '2026-11-17',
    category: 'Medical Equipment',
    readMins: 9,
    image: '/blog/medical-equipment-rentals-vizag.jpg',
    imageSize: [1200, 800],
    imageAlt: 'Medical equipment for rent in Vizag: nurse caring for elderly patient in hospital bed with wheelchair beside — Genesis Health Care Enterprises, Visakhapatnam',
    keywords:
      'medical equipment rental in Vizag, medical equipment rentals in Vizag, hospital beds on rent in Vizag, hospital bed rental Visakhapatnam, wheelchair on rent in Vizag, wheelchair rental in Visakhapatnam, medical equipment rental Vizianagaram, hospital equipment for rent in Vizag, medical equipment on rent in Visakhapatnam, home medical equipment rental Vizag, oxygen concentrator rental Vizag, patient transport cab Vizag, Genesis Home Care Nursing, Genesis Health Care Enterprises',
    tags: [
      'Medical Equipment Rental in Visakhapatnam',
      'Hospital Beds for Rent in Vizag',
      'Wheelchair Rental in Visakhapatnam',
      'Patient Bed on Rent in Vizag',
      'Home Medical Equipment Rental Vizag',
      'Oxygen Concentrator on Rent in Vizag',
    ],
    cta: { to: '/medical-equipment', label: 'Hospital beds & wheelchairs on rent in Vizag' },
    sections: [
      {
        heading: 'Caring for a Family Member at Home',
        paragraphs: [
          'Caring for a family member at home after surgery, a stroke, or during a long-term illness is one of the most demanding things you will ever do. You want them to be comfortable. You want them to heal. And you want to avoid the crushing cost of buying equipment you may only need for a few weeks.',
          'That is where medical equipment rental in Vizag becomes a practical, compassionate solution. At Genesis Health Care Enterprises (Genesis Home Care Nursing), we have spent over 10 years helping families across Visakhapatnam and Vizianagaram navigate exactly this challenge, and the questions we hear most often are about two essentials: hospital beds and wheelchairs.',
          'This guide answers those questions honestly, so you can make a confident decision for your family.',
        ],
      },
      {
        heading: 'Why Families Trust Genesis Health Care Enterprises (Genesis Home Care Nursing)',
        paragraphs: ['Before we get into the details, here is who we are:'],
        list: [
          '12,000+ patients served over 10 years across Visakhapatnam and Vizianagaram',
          'Home nursing, equipment rentals, patient transport, and physiotherapy, all under one roof',
          'Multiple pickup points across Vizag and Vizianagaram, with doorstep delivery and installation',
          'A dedicated team that can pick up and drop equipment from any location',
          'Practical, field-tested advice, not a call centre script',
        ],
        after: [
          'We are not a large, faceless corporation. We are a local team that understands the challenges families here face, from navigating hospital discharge to setting up a safe home care environment.',
          'Genesis Health Care Enterprises (Genesis Home Care Nursing) arrived from a small business with a great vision. What began as Genesis Home Care Nursing is now Genesis Health Care Enterprises: same team, same commitment, expanded services.',
        ],
      },
      {
        heading: 'Why Rent Instead of Buy?',
        paragraphs: [
          'A good hospital bed can cost anywhere from ₹15,000 to over ₹40,000 depending on the model. A wheelchair adds another significant expense. For a recovery period of a few weeks or months, buying rarely makes financial sense.',
          'Medical equipment rental in Visakhapatnam solves this. You get hospital-grade equipment delivered to your door, pay a monthly or daily rate, and return it when it is no longer needed. No storage problems. No resale headaches. No large upfront cost.',
          'For families managing a health crisis, that peace of mind is worth more than the money saved.',
        ],
      },
      {
        heading: 'Our Story: Why Genesis Started Equipment Rentals',
        paragraphs: [
          'Genesis Health Care Enterprises (Genesis Home Care Nursing) is one of the many home care services that emerged after the COVID pandemic. But our story, and our understanding of Vizag\u2019s demand for equipment and services, began earlier.',
          'Our equipment rental services started with a need we encountered firsthand: a 53-year-old mother who had a cerebrovascular stroke (CV stroke) and was on a ventilator for months due to hospital-acquired pneumonia. Her family, a father and two school-going kids, wanted to bring her home after 45 days in the hospital. They had finally decided to move out, but they were already exhausted and had no idea how to do it.',
          'In 2017, the internet was not as advanced as it is today in 2026. They came across Genesis Health Care Enterprises (Genesis Home Care Nursing). Looking at the urgent need, we started our medical equipment rental services, because equipment needs to be installed and ready within 3 hours of a discharge plan if the situation is urgent. Generally, a 24-hour gap is a safe window for us to transport, install, and sterilise equipment.',
          'The major challenge is that families fail to plan for buying equipment while under the stress of hospital and discharge. They hardly get time to research the best brands, negotiate, or even know the exact need of the product. This is where we actually come into the picture. Our advice is crucial, and we are just a call away for all your queries.',
        ],
      },
      {
        heading: 'The Practical Experience That Sets Us Apart',
        paragraphs: [
          'You tell us the condition, and we can suggest the right equipment, consulting your primary consultants where needed.',
          'In most cases, we have seen families buy an oxygen concentrator but forget to have a pulse oximeter to check blood saturation. Some forget to buy a mask and rush to get one, only to realise at opening that it is a pediatric mask. These are all our practical, real-world experiences.',
          'After the ambulance reaches home, families often do not know how to shift a patient on oxygen to the 5th floor. We know how to handle this, and which equipment is needed at what time.',
          'We solve it by providing a standby 10-litre portable oxygen cylinder. This is useful while shifting, to switch during a power cut, or if the patient suddenly needs more than 10 litres, which a concentrator sometimes fails to deliver. An oxygen cylinder with a flowmeter can be adjusted up to 15 litres.',
          'In another experience, a family bought a 2-function bed for a leg fracture, where the second function (moving the left lower limb) was not advised in cases of multiple leg fractures. We not only save you time and money but also give you the right suggestion to take the right equipment.',
          'Every rental comes with a welcome kit containing all the requirements a patient needs after discharge to home. This helps families relax and let the team do all the work, rather than going from shop to shop looking for different equipment and selecting in a hurry.',
          'Shopping online or offline is enjoyable. But when your family members are in hospital, you just need the right thing at the right place. That is where we stand out, providing patient care services alongside medical equipment on rent.',
          'Medical equipment rental services have emerged only to be a support to patient families, which is often misunderstood as cross-marketing. We are known for our services and commitment, but we add an extra layer to solve this, because beds play a major role in recovery and fall prevention.',
        ],
      },
      {
        heading: 'Hospital Beds on Rent in Vizag: What You Should Know',
        paragraphs: [
          'Not all hospital beds are the same. The right choice depends on the patient\u2019s mobility, the level of care required, and the space available at home.',
        ],
        subsections: [
          {
            heading: 'Types of Hospital Beds Available for Rent',
            paragraphs: [
              'Manual Hospital Beds are the most common choice for home care. The head and foot sections adjust with a hand crank, allowing caregivers to reposition the patient for comfort, feeding, and pressure relief. These are ideal for patients who need bed rest but do not require frequent position changes throughout the night.',
              'Motorised (Electric) Hospital Beds use a remote control to adjust positions with minimal physical effort. These are particularly valuable when the primary caregiver is elderly or when the patient needs frequent repositioning, for example, in cases of stroke recovery or advanced mobility limitations.',
              'Beds with Side Rails and Castors add safety and convenience. Side rails prevent falls for patients who are confused or restless. Castors (wheels) make it easier to move the bed for cleaning or to transfer the patient to another room.',
            ],
          },
          {
            heading: 'What to Check Before Renting a Hospital Bed in Vizag',
            list: [
              { b: 'Mattress quality', t: 'A hospital bed is only as comfortable as its mattress. Ask whether an air mattress or pressure-relief mattress is included or available as an add-on. This matters greatly for bedridden patients at risk of bedsores.' },
              { b: 'Delivery and installation', t: 'Reputable providers deliver, assemble, and demonstrate the bed in your home. Do not assume this is included; confirm it upfront.' },
              { b: 'Maintenance and sanitisation', t: 'The equipment should arrive clean and in working condition. Ask about the sanitisation process between rentals.' },
              { b: 'Monthly vs. daily pricing', t: 'Most families need a bed for at least a month. Ask for the monthly rate and whether there is a discount for extended periods.' },
            ],
          },
        ],
      },
      {
        heading: 'Wheelchairs on Rent in Vizag: Choosing the Right Mobility Aid',
        paragraphs: [
          'A wheelchair is not just a wheelchair. The wrong type can cause discomfort, posture problems, or even injury. The right one restores dignity and independence.',
        ],
        subsections: [
          {
            heading: 'Types of Wheelchairs for Rent',
            paragraphs: [
              'Standard Manual Wheelchairs are lightweight, foldable, and suitable for patients who have upper body strength or who will be pushed by a caregiver. They work well for doctor visits, short trips outside the home, and moving around the house.',
              'Transport Wheelchairs are lighter and designed primarily for being pushed by someone else. They are ideal for elderly patients or those with limited upper body strength who need assistance getting to appointments.',
              'Motorised or Electric Wheelchairs are powered by a battery and controlled by a joystick. They offer greater independence for patients who can operate the controls but cannot propel a manual chair. These are particularly useful for longer distances or for patients with conditions affecting both arms and legs.',
            ],
          },
          {
            heading: 'Practical Tips for Wheelchair Rental in Visakhapatnam',
            list: [
              { b: 'Measure the doorway', t: 'Before renting, measure the narrowest door in your home. Standard wheelchairs need at least 28–32 inches of clearance.' },
              { b: 'Consider the terrain', t: 'If the patient will be moving between rooms with thresholds or going outside on uneven surfaces, a chair with larger rear wheels is more stable.' },
              { b: 'Check the weight capacity', t: 'Always confirm the chair\u2019s maximum weight capacity matches the patient\u2019s needs.' },
              { b: 'Ask about accessories', t: 'Cushions, seat belts, and anti-tip bars can often be added. These small additions make a big difference in comfort and safety.' },
            ],
          },
        ],
      },
      {
        heading: 'Wheelchairs for Visitors: A Vizag Travel Solution',
        paragraphs: [
          'Wheelchairs are generally enquired about by out-of-station visitors who come to Vizag for weddings or to visit Simhachalam. We have pickup points, and our patient transport cab services include a wheelchair.',
          'Most frequently, the wheelchair is used at the railway station. After getting down from the train, the patient needs to be shifted from the platform to the car, and the same wheelchair remains with them until they leave the city.',
          'Again, there are many types of wheelchairs. Choosing the right one needs guidance, because a wheelchair with too many functions may not fit in your car, which does not solve the purpose. And a normal wheelchair at times does not meet every requirement of a patient.',
          'For all this, we ask you to feel free and give us a call, be it a sudden trip, a planned visit, or just an hour\u2019s trip to any place in the beautiful Vizag city.',
        ],
      },
      {
        heading: 'Pickup Points Across Vizag and Vizianagaram',
        paragraphs: ['We make it easy to get equipment, wherever you are.'],
        subsections: [
          {
            heading: 'Visakhapatnam',
            list: [
              'Railway Station',
              'RTC Bus Stand',
              'Hanumanthavaka Junction – Genesis Surgical',
              'Seethammadhara – Main Office',
              'Health City Road, Arilova – Branch Office',
            ],
          },
          {
            heading: 'Vizianagaram',
            list: ['R&B Bungalow – VZM Branch Office'],
          },
        ],
        after: [
          'Any other location? Our dedicated team can pick up and drop equipment from any location across Vizag and Vizianagaram. Just call us and we will arrange it.',
        ],
      },
      {
        heading: 'Why Families in Vizag Choose Genesis Health Care Enterprises (Genesis Home Care Nursing)',
        paragraphs: [
          'We are a local team based in Visakhapatnam, and we understand the challenges families here face, from navigating hospital discharge to setting up a safe home care environment. With 12,000+ patients served over 10 years across Vizag and Vizianagaram, our experience is practical, not theoretical.',
          'When you rent hospital beds and wheelchairs in Vizag from Genesis Health Care Enterprises (Genesis Home Care Nursing), you get:',
        ],
        list: [
          'Equipment that is checked and sanitised before every delivery',
          'Clear, transparent pricing with no hidden charges',
          'Delivery and setup by people who know how to install and explain the equipment',
          'A welcome kit with post-discharge patient essentials',
          'Multiple pickup points across Vizag and Vizianagaram',
          'A dedicated team for pickup and drop at any location',
          'Local support: if something is not right, you can reach us',
        ],
        after: [
          'We also offer home nursing services, oxygen concentrator rentals, physiotherapy support, patient transport cabs, and a range of home care services, so you have one trusted point of contact for your family\u2019s needs.',
        ],
      },
      {
        heading: 'A Final Word for Caregivers',
        paragraphs: [
          'If you are reading this, you are probably in the middle of a difficult season. You are making decisions under pressure, often while exhausted and worried.',
          'Here is what we want you to know: you do not have to figure everything out alone. The right equipment, set up correctly, can transform home care from overwhelming to manageable. It protects the patient\u2019s dignity and protects your own health as a caregiver.',
          'If you are unsure what you need, call us. We will ask the right questions about the patient\u2019s mobility, the home layout, the expected duration of care, and recommend only what is genuinely useful. No pressure. No upselling. Just practical help from people who do this every day.',
        ],
      },
      {
        heading: 'Contact Genesis Health Care Enterprises (Genesis Home Care Nursing)',
        paragraphs: ['Ready to arrange a hospital bed or wheelchair rental in Vizag or Vizianagaram?'],
        list: [
          { b: 'Call us', t: '79972 72721 and 70410 81081 (Office)' },
          { b: 'WhatsApp', t: '95818 77277 (Vizianagaram & Visakhapatnam)' },
          { b: 'Website', t: 'genesishealthcareenterprises.com' },
          { b: 'Email', t: 'info@genesishealthcareenterprises.com' },
          { b: 'Pickup points', t: 'Railway Station, RTC Bus Stand, Hanumanthavaka Junction (Genesis Surgical), Seethammadhara (Main Office), Health City Road, Arilova (Branch Office), and R&B Bungalow (Vizianagaram Branch Office). Any other location: our team will pick up and drop.' },
        ],
        after: ['We are just a call away. Tell us the condition, and we will guide you to the right equipment.'],
      },
    ],
  },
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
