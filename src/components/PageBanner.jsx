import { Link } from 'react-router-dom'

// colorVariant: 'teal' | 'violet' | 'rose' | 'amber'
// images: array of { src, alt, name } — shown as a grid on the right side
// heroImage: { src, alt, chips?: string[], caption?: { title, text } } — single large photo on the right
export default function PageBanner({ title, description, colorVariant = 'teal', badge, stats, images, heroImage, bgImage }) {
  return (
    <section className={`page-banner page-banner--${colorVariant}`}>
      {/* Optional soft full-width background photo (bgImage = { src, position? }) */}
      {bgImage && (
        <span
          className="pb-bgphoto"
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
            <figure className="pb-hero">
              <div className="pb-hero__frame" style={heroImage.ratio ? { aspectRatio: heroImage.ratio } : undefined}>
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width="1200"
                  height="1200"
                  fetchpriority="high"
                  style={heroImage.position ? { objectPosition: heroImage.position } : undefined}
                />
                {!heroImage.clean && <span className="pb-hero__shade" aria-hidden="true" />}
                {heroImage.chips && heroImage.chips.map((c, i) => (
                  <span key={c} className={`pb-hero__chip pb-hero__chip--${i + 1}`}>{c}</span>
                ))}
              </div>
              {heroImage.label && (
                <figcaption className="pb-hero__label">{heroImage.label}</figcaption>
              )}
              {heroImage.caption && (
                <figcaption className="pb-hero__caption">
                  <strong>{heroImage.caption.title}</strong>
                  <span>{heroImage.caption.text}</span>
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
