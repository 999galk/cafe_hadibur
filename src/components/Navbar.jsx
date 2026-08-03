import { useEffect, useState } from 'react'
import { business } from '../data/content.js'

const LINKS = [
  { label: 'בית', href: '#top' },
  { label: 'אווירה', href: '#about' },
  { label: 'תפריט', href: '#menu' },
  { label: 'הסיפור', href: '#story' },
  { label: 'צור קשר', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-mark">☕</span>
          <span className="nav__logo-text">{business.name}</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
