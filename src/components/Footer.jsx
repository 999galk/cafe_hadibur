import { business } from '../data/content.js'

export default function Footer() {
  const year = 2026 // עדכני לפי הצורך

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">☕ {business.name}</span>
          <p>{business.tagline}</p>
        </div>

        <div className="footer__social">
          <a href={business.instagram} target="_blank" rel="noreferrer">אינסטגרם</a>
          <a href={business.facebook} target="_blank" rel="noreferrer">פייסבוק</a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer">מפה</a>
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">
          © {year} {business.name} · עסק מפונה מהצפון · פרדס חנה-כרכור
        </div>
      </div>
    </footer>
  )
}
