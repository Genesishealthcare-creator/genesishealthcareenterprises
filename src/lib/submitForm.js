/**
 * Sends a form submission.
 *
 * Delivery is chosen from environment variables (set them in Vercel → Settings → Environment Variables):
 *   VITE_WEB3FORMS_KEY   – access key from web3forms.com (free; emails the submission to you)
 *   VITE_FORM_ENDPOINT   – any JSON form endpoint, e.g. a Formspree URL
 *
 * If neither is set, nothing is sent over the network and the caller falls back to opening
 * the visitor's email app with the details filled in.
 *
 * @returns {Promise<{ ok: boolean, via: 'web3forms'|'endpoint'|'none', error?: string }>}
 */
export const MAIL_TO = 'info@genesishealthcareenterprises.com'

export default async function submitForm({ subject, fields }) {
  const web3Key  = import.meta.env.VITE_WEB3FORMS_KEY
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  if (!web3Key && !endpoint) return { ok: false, via: 'none' }

  try {
    const url  = web3Key ? 'https://api.web3forms.com/submit' : endpoint
    const body = web3Key
      ? { access_key: web3Key, subject, from_name: 'Genesis Website', ...fields }
      : { _subject: subject, ...fields }

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok && data.success !== false) return { ok: true, via: web3Key ? 'web3forms' : 'endpoint' }
    return { ok: false, via: web3Key ? 'web3forms' : 'endpoint', error: data.message || `HTTP ${res.status}` }
  } catch (err) {
    return { ok: false, via: web3Key ? 'web3forms' : 'endpoint', error: err.message }
  }
}

/** Builds a mailto: link containing every field, used when no form service is configured. */
export function buildMailto(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
