import { story } from '../data/content.js'

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="container">
        <div className="story__grid">
          <div className="story__image">
            <img src={story.image} alt="איציק, בעל קפה הדיבור" loading="lazy" />
          </div>
          <div className="story__text">
            <span className="eyebrow">מי אנחנו</span>
            <h2 className="section__title">{story.title}</h2>
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
