import { business } from '../data/content.js'
import { useLegal } from './LegalModals.jsx'

export default function Footer() {
  const { open } = useLegal()
  const year = 2026 // עדכני לפי הצורך

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={business.logo} alt={business.name} className="footer__logo-img" />
        </div>

        <div className="footer__social">
          <a href={business.instagram} target="_blank" rel="noreferrer">אינסטגרם</a>
          <a href={business.facebook} target="_blank" rel="noreferrer">פייסבוק</a>
          {business.wazeUrl && <a href={business.wazeUrl} target="_blank" rel="noreferrer">Waze</a>}
          <a href={business.mapsUrl} target="_blank" rel="noreferrer">מפה</a>
        </div>
      </div>

      <div className="footer__copy">
        <div className="container">
          <div className="footer__legal">
            <button className="footer__legal-link" onClick={() => open('accessibility')}>הצהרת נגישות</button>
            <span aria-hidden="true">·</span>
            <button className="footer__legal-link" onClick={() => open('terms')}>תנאי שימוש</button>
          </div>
          <div>© {year} {business.name} · פרדס חנה-כרכור</div>
        </div>
      </div>
    </footer>
  )
}
