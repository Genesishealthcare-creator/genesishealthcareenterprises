import { Instagram, Facebook } from './Icons.jsx'

// Add more profiles here (YouTube, LinkedIn, ...) and they appear in header + footer.
export const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/genesis_home_care_nursing?psln=ZHB2bTdoYWgxYm81',
    icon: Instagram,
    cls: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/genesis.krupa?rdid=WuF2GUt7Q37U9xFY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1K9S3ByU1r%2F#',
    icon: Facebook,
    cls: 'facebook',
  },
]

// Medium round icon buttons. `where` = 'header' | 'footer' (styling hook only).
export default function SocialLinks({ where = 'footer' }) {
  return (
    <div className={`social-icons social-icons--${where}`} role="group" aria-label="Follow us on social media">
      {socials.map(({ label, href, icon: Icon, cls }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon social-icon--${cls}`}
          aria-label={`Genesis on ${label}`}
          title={label}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
