import { business, hours } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="eyebrow">נשמח לראותכם</span>
            <h2 className="section__title">קפצו לביקור</h2>

            <div className="contact__block">
              <h3>שעות פתיחה</h3>
              <ul className="hours">
                {hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__block">
              <h3>איפה אנחנו</h3>
              <p>{business.address}</p>
              <p>
                טלפון:{' '}
                <a href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`}>{business.phone}</a>
              </p>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary" href={business.mapsUrl} target="_blank" rel="noreferrer">
                ניווט ב-Waze / Maps
              </a>
              <a className="btn btn--ghost" href={business.instagram} target="_blank" rel="noreferrer">
                אינסטגרם
              </a>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="מפה"
              src="https://www.google.com/maps?q=פרדס%20חנה%20כרכור&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
