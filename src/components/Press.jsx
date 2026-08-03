import { press } from '../data/content.js'

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
              <span className="press__source">{a.source}</span>
              <span className="press__title">{a.title}</span>
              <span className="press__arrow">←</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
