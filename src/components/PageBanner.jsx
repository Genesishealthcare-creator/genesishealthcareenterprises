import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Crossfading photo slideshow used inside the hero frame (heroImage.slides).
// Auto-advances, pauses on hover/focus, and stays still for reduced-motion users.
function HeroSlides({ slides, position }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const t = setInterval(() => setActive(a => (a + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [paused, slides.length])

  return (
    <div
      className="pb-slides"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`pb-slides__img${i === active ? ' is-active' : ''}`}
          width="1200"
          height="1200"
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : undefined}
          aria-hidden={i === active ? undefined : 'true'}
          style={{ objectPosition: s.position || position || undefined }}
        />
      ))}
      <div className="pb-slides__dots" role="group" aria-label="Choose photo">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`pb-slides__dot${i === active ? ' is-active' : ''}`}
            aria-label={`Show photo ${i + 1} of ${slides.length}`}
            aria-current={i === active ? 'true' : undefined}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}

// colorVariant: 'teal' | 'violet' | 'rose' | 'amber'
// images: array of { src, alt, name } — shown as a grid on the right side
// heroImage: { src, alt, chips?: string[], caption?: { title, text } } — single large photo on the right
//            or { slides: [{ src, alt, position? }, ...] } for an auto-scrolling photo slideshow
export default function PageBanner({ title, description, colorVariant = 'teal', badge, stats, images, heroImage, bgImage }) {
  return (
    <section className={`page-banner page-banner--${colorVariant}`}>
      {/* Optional soft full-width background photo (bgImage = { src, position? }) */}
      {bgImage && (
        <span
          className={`pb-bgphoto${bgImage.full ? ' pb-bgphoto--full' : ''}`}
          aria-hidden="true"
          style={{ backgroundImage: `url('${bgImage.src}')`, backgroundPosition: bgImage.position || 'center' }}
        />
      )}
      {/* Animated blobs */}
      <span className="pb-blob pb-blob-1" aria-hidden="true" />
      <span className="pb-blob pb-blob-2" aria-hidden="true" />
      <span className="pb-blob pb-blob-3" aria-hidden="true" />
      {/* Grid overlay */}
      <span className="pb-grid" aria-hidden="true" />

      <div className="container">
        <div className={`page-banner__layout${(images || heroImage) ? ' page-banner__layout--split' : ''}`}>
          {/* Left content */}
          <div className="page-banner__inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep" aria-hidden="true">/</span>
              <span aria-current="page">{title}</span>
            </nav>

            {badge && <span className="pb-badge">{badge}</span>}

            <h1>{title}</h1>
            {description && <p className="lead">{description}</p>}

            {stats && (
              <div className="pb-stats">
                {stats.map(s => (
                  <div className="pb-stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right hero photo */}
          {heroImage && (
            <figure className={`pb-hero${heroImage.portrait ? ' pb-hero--portrait' : ''}`}>
              <div className="pb-hero__frame" style={heroImage.ratio ? { aspectRatio: heroImage.ratio } : undefined}>
                {heroImage.slides ? (
                  <HeroSlides slides={heroImage.slides} position={heroImage.position} />
                ) : (
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width="1200"
                    height="1200"
                    fetchpriority="high"
                    style={heroImage.position ? { objectPosition: heroImage.position } : undefined}
                  />
                )}
                {!heroImage.clean && <span className="pb-hero__shade" aria-hidden="true" />}
                {heroImage.chips && heroImage.chips.map((c, i) => (
                  <span key={c} className={`pb-hero__chip pb-hero__chip--${i + 1}`}>{c}</span>
                ))}
              </div>
              {heroImage.person && (
                <figcaption className="pb-person">
                  <strong className="pb-person__name">{heroImage.person.name}</strong>
                  {heroImage.person.degrees && <span className="pb-person__degrees">{heroImage.person.degrees}</span>}
                  {heroImage.person.role && <span className="pb-person__role">{heroImage.person.role}</span>}
                </figcaption>
              )}
              {heroImage.label && (
                <figcaption className="pb-hero__label">{heroImage.label}</figcaption>
              )}
              {heroImage.caption && (
                <figcaption className="pb-hero__caption">
                  <strong>{heroImage.caption.title}</strong>
                  {heroImage.caption.text && <span>{heroImage.caption.text}</span>}
                </figcaption>
              )}
            </figure>
          )}

          {/* Right image grid */}
          {images && (
            <div className="pb-images" aria-hidden="false">
              {images.map((img, i) => (
                <div className="pb-img-card" key={img.name} style={{ animationDelay: `${i * 0.12}s` }}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <span className="pb-img-name">{img.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
