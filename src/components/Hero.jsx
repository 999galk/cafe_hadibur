import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${hero.image})` }}>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a className="btn btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="גלול למטה">↓</a>
    </section>
  )
}
