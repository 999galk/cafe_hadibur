import { createContext, useContext, useState } from 'react'
import { a11yStatement, termsOfUse, business } from '../data/content.js'

const LegalContext = createContext(null)
export const useLegal = () => useContext(LegalContext)

const DOCS = { accessibility: a11yStatement, terms: termsOfUse }

export function LegalProvider({ children }) {
  const [doc, setDoc] = useState(null)

  const open = (type) => setDoc(DOCS[type] || null)
  const close = () => setDoc(null)

  const phoneTel = business.phone.replace(/[^0-9+]/g, '')

  return (
    <LegalContext.Provider value={{ open, close }}>
      {children}
      {doc && (
        <div className="a11y-modal" role="dialog" aria-modal="true" aria-label={doc.title}>
          <div className="a11y-modal__backdrop" onClick={close} />
          <div className="a11y-modal__box">
            <button className="a11y-x" aria-label="סגירה" onClick={close}>✕</button>
            <h2>{doc.title}</h2>
            {doc.updated && <p className="a11y-modal__date">{doc.updated}</p>}
            {doc.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {doc.showContact && business.phone && (
              <p>
                יצירת קשר בנושא נגישות: <a href={`tel:${phoneTel}`}>{business.phone}</a>
              </p>
            )}
          </div>
        </div>
      )}
    </LegalContext.Provider>
  )
}
