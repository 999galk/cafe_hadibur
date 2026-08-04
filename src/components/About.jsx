import { about } from '../data/content.js'
import RotatingImage from './RotatingImage.jsx'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <span className="eyebrow">ברוכים הבאים</span>
            <h2 className="section__title">{about.title}</h2>
            <p>{about.text}</p>
          </div>
          <div className="about__images">
            {about.frames.map((frame, i) => (
              <div key={i} className={`about__img about__img--${i + 1}`}>
                <RotatingImage
                  images={frame.images}
                  alt={frame.alt}
                  interval={4200 + i * 700}
                  start={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
