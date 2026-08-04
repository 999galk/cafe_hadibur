import { useEffect, useRef, useState } from 'react'
import { useLegal } from './LegalModals.jsx'

const FONT_STEPS = [1, 1.1, 1.2, 1.3]
const STORE_KEY = 'hadibur-a11y'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const { open: openLegal } = useLegal()
  const [fontLevel, setFontLevel] = useState(0)
  const [contrast, setContrast] = useState(false)
  const [underline, setUnderline] = useState(false)
  const panelRef = useRef(null)

  // טעינת העדפות שמורות
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}')
      if (saved.fontLevel) setFontLevel(saved.fontLevel)
      if (saved.contrast) setContrast(saved.contrast)
      if (saved.underline) setUnderline(saved.underline)
    } catch { /* ignore */ }
  }, [])

  // החלת ההעדפות + שמירה
  useEffect(() => {
    const root = document.documentElement
    root.style.zoom = FONT_STEPS[fontLevel] === 1 ? '' : String(FONT_STEPS[fontLevel])
    root.classList.toggle('a11y-contrast', contrast)
    root.classList.toggle('a11y-underline', underline)
    localStorage.setItem(STORE_KEY, JSON.stringify({ fontLevel, contrast, underline }))
  }, [fontLevel, contrast, underline])

  const reset = () => { setFontLevel(0); setContrast(false); setUnderline(false) }

  return (
    <>
      <button
        className="a11y-fab"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
          <circle cx="12" cy="3.5" r="2" fill="currentColor" />
          <path
            fill="currentColor"
            d="M21 7.5c0 .6-.4 1-1 1-2 .3-3.7.4-5 .4v3.3l2.2 6.6c.2.6-.1 1.2-.7 1.4-.6.2-1.2-.1-1.4-.7L12 15h-.1l-2.1 4.5c-.2.6-.9.9-1.5.7-.6-.2-.9-.8-.7-1.4L10 12.2V8.9c-1.3 0-3-.1-5-.4a1 1 0 0 1 .3-2c5 .8 6.4.8 11.4 0 .5 0 1 .4 1.3 1z"
          />
        </svg>
      </button>

      {open && (
        <div className="a11y-panel" ref={panelRef} role="dialog" aria-label="הגדרות נגישות">
          <div className="a11y-panel__head">
            <strong>נגישות</strong>
            <button className="a11y-x" aria-label="סגירה" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="a11y-row">
            <button onClick={() => setFontLevel((l) => Math.min(l + 1, FONT_STEPS.length - 1))} aria-label="הגדלת טקסט">א+ הגדלת טקסט</button>
            <button onClick={() => setFontLevel((l) => Math.max(l - 1, 0))} aria-label="הקטנת טקסט">א− הקטנת טקסט</button>
          </div>

          <button
            className={`a11y-toggle ${contrast ? 'is-on' : ''}`}
            aria-pressed={contrast}
            onClick={() => setContrast((v) => !v)}
          >
            ניגודיות גבוהה
          </button>
          <button
            className={`a11y-toggle ${underline ? 'is-on' : ''}`}
            aria-pressed={underline}
            onClick={() => setUnderline((v) => !v)}
          >
            הדגשת קישורים
          </button>

          <div className="a11y-panel__foot">
            <button className="a11y-link" onClick={() => { openLegal('accessibility'); setOpen(false) }}>
              הצהרת נגישות
            </button>
            <button className="a11y-reset" onClick={reset}>איפוס</button>
          </div>
        </div>
      )}

    </>
  )
}
