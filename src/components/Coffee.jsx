import { coffee } from '../data/content.js'

export default function Coffee() {
  return (
    <section className="coffee" style={{ backgroundImage: `url(${coffee.image})` }}>
      <div className="coffee__overlay" />
      <div className="container coffee__content">
        <span className="eyebrow eyebrow--light">מהשורש</span>
        <h2 className="section__title section__title--light">{coffee.title}</h2>
        <p>{coffee.text}</p>
      </div>
    </section>
  )
}
