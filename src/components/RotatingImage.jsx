import { useEffect, useState } from 'react'

// מציג רשימת תמונות שמתחלפות ב-fade (התמונות מותאמות לאוריינטציה של המסגרת).
// עוצר אוטומטית אם המשתמש ביקש "תנועה מופחתת".
export default function RotatingImage({ images, alt, interval = 4500, start = 0 }) {
  const [idx, setIdx] = useState(start % images.length)

  useEffect(() => {
    if (images.length <= 1) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [images.length, interval])

  return (
    <div className="rimg">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i !== 0 ? 'true' : undefined}
          className={`rimg__img ${i === idx ? 'is-active' : ''}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
