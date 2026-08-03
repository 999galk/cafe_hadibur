import { press } from '../data/content.js'

// אייקון האתר המפרסם לפי הדומיין (נטען בדפדפן; אם נכשל — מוסתר).
function faviconFor(url) {
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`
  } catch {
    return ''
  }
}

export default function Press() {
  return (
    <section className="section press">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">בתקשורת</span>
          <h2 className="section__title">{press.title}</h2>
        </div>
        <div className="press__grid">
          {press.articles.map((a, i) => (
            <a key={i} href={a.url} className="press__card" target="_blank" rel="noreferrer">
              <span className="press__head">
                <img
                  className="press__logo"
                  src={faviconFor(a.url)}
                  alt=""
                  aria-hidden="true"
                  width="24"
                  height="24"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="press__source">{a.source}</span>
              </span>
              <span className="press__title">{a.title}</span>
              {a.teaser && <p className="press__teaser">״{a.teaser}״</p>}
              <span className="press__read">לכתבה המלאה ←</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
