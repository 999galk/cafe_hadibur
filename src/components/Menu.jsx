import { menu } from '../data/content.js'

export default function Menu() {
  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">בתיאבון</span>
          <h2 className="section__title">{menu.title}</h2>
          <p className="section__note">{menu.note}</p>
        </div>

        {menu.special && <div className="menu__special">{menu.special}</div>}

        <div className="menu__grid">
          {menu.categories.map((cat) => (
            <div key={cat.name} className="menu__card">
              <h3 className="menu__cat">{cat.name}</h3>
              <ul className="menu__list">
                {cat.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <div className="menu__item-row">
                      <span className="menu__item-name">
                        {item.name}
                        {item.tag && <span className="menu__tag">{item.tag}</span>}
                      </span>
                      <span className="menu__dots" />
                      <span className="menu__price">{item.price}</span>
                    </div>
                    {item.desc && <p className="menu__desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
              {cat.note && <p className="menu__cat-note">{cat.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
