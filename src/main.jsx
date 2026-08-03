import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// תמונת גיבוי חמה — מוצגת אם קובץ תמונה עדיין לא הועלה ל-public/images/
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450"><rect width="100%" height="100%" fill="#f3e7d8"/><text x="50%" y="50%" fill="#c9a889" font-family="sans-serif" font-size="26" text-anchor="middle" dominant-baseline="middle">תמונה בקרוב ☕</text></svg>`,
  )

// מאזין גלובלי: כל תמונה שנכשלת בטעינה מקבלת את תמונת הגיבוי
document.addEventListener(
  'error',
  (e) => {
    const el = e.target
    if (el && el.tagName === 'IMG' && !el.dataset.fallback) {
      el.dataset.fallback = '1'
      el.src = PLACEHOLDER
    }
  },
  true,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
