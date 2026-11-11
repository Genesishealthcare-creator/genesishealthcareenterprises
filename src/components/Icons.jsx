// Reusable inline SVG icon set — keeps bundle light, no icon dependency.
// Each icon inherits currentColor and accepts a size via CSS.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const HeartPlus = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    <path d="M12 8v6M9 11h6" />
  </svg>
)

export const Stethoscope = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 3v6a5 5 0 0 0 10 0V3" />
    <path d="M9 3v1M9 8v1" />
    <path d="M9 19a5 5 0 0 0 10 0v-4" />
    <circle cx="19" cy="12" r="3" />
  </svg>
)

export const HomeCare = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
    <path d="M12 14v6M9.5 17h5" />
  </svg>
)

export const Elderly = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="10" cy="6" r="2.5" />
    <path d="M10 9c-2 0-3 1.5-3 3v3l1.5 7M10 9c2 0 3 1.5 3 3v3l-1.5 7" />
    <path d="M16 9a3 3 0 0 1 4 3M16 9v4h2a4 4 0 0 0 4-4" />
  </svg>
)

export const Bed = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 18V7M3 12h14a4 4 0 0 1 4 4v2M3 12v6M21 18v-2" />
    <path d="M7 12V9.5A1.5 1.5 0 0 1 8.5 8H12a1.5 1.5 0 0 1 1.5 1.5V12" />
  </svg>
)

export const Wheelchair = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="11" cy="5" r="1.5" />
    <path d="M11 7v5h5l3 6" />
    <circle cx="10" cy="17" r="4" />
  </svg>
)

export const Oxygen = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M9 3h6v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3Z" />
    <path d="M9 3H7M15 3h2" />
    <path d="M11 16c-2 1-3 3-3 5h8c0-2-1-4-3-5" />
  </svg>
)

export const Mattress = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 8h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
    <path d="M1 12h22M5 12v-2M9 12v-2M13 12v-2M17 12v-2" />
  </svg>
)

export const Monitor = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M7 11l2-2 2 3 2-4 2 3" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

export const Pill = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(45 12 12)" />
    <path d="M8.5 8.5 15.5 15.5" />
  </svg>
)

export const Shield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.5 7.5 8 9 4.5-1.5 8-4.5 8-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Clock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Wallet = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 7h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    <path d="M3 7V5.5A1.5 1.5 0 0 1 4.5 4H16" />
    <circle cx="17" cy="13" r="1.3" fill="currentColor" stroke="none" />
  </svg>
)

export const Users = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <path d="M16 4a3 3 0 0 1 0 6M17 15c2.5.5 4 2.5 4 5" />
  </svg>
)

export const Hands = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 13c2-1 4 0 5 2l3 3a3 3 0 0 0 4-1l2-4" />
    <path d="M21 11V6a1.5 1.5 0 0 0-3 0v5M18 11V5a1.5 1.5 0 0 0-3 0v6M15 11V6a1.5 1.5 0 0 0-3 0v7" />
    <path d="M12 11c-1.5-1.5-3-2-4-1" />
  </svg>
)

export const Utensils = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 3v8M8 3v8M5 6h3" />
    <path d="M5 11c0 4 0 7 3 7s3-3 3-7M16 3c-2 1-2 5-2 7h2c0-2 0-5 0-7Zm0 7v11" />
  </svg>
)

export const Sparkle = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  </svg>
)

export const Lock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const Mail = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const Pin = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m5 12 5 5L20 6" />
  </svg>
)

export const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Target = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

export const Eye = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const Ambulance = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M2 17V7a1 1 0 0 1 1-1h11v11M14 9h4l4 4v4h-2" />
    <circle cx="7" cy="17.5" r="2" />
    <circle cx="17" cy="17.5" r="2" />
    <path d="M8 9v4M6 11h4" />
  </svg>
)
