import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function usePrompt(key) {
  const [text, setText] = useState(() => localStorage.getItem(`prompt_${key}`) || '')
  function save(val) {
    setText(val)
    localStorage.setItem(`prompt_${key}`, val)
  }
  return [text, save]
}

function CardPrompt({ cardKey, accentColor }) {
  const [text, save] = usePrompt(cardKey)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(text)

  function handleEdit() {
    setDraft(text)
    setEditing(true)
  }

  function handleSave() {
    save(draft)
    setEditing(false)
  }

  function handleCancel() {
    setDraft(text)
    setEditing(false)
  }

  return (
    <div
      style={{
        marginTop: 10,
        borderTop: `1px solid ${accentColor}22`,
        paddingTop: 10,
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Título */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 6,
      }}>
        <span style={{
          fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em',
          color: accentColor, fontFamily: 'monospace',
        }}>PROMPT</span>
        {!editing && (
          <button
            onClick={handleEdit}
            style={{
              background: 'none', border: `1px solid ${accentColor}44`,
              borderRadius: 5, padding: '2px 8px',
              fontSize: '0.5rem', color: accentColor + 'aa',
              cursor: 'pointer', fontFamily: 'monospace', letterSpacing: '0.1em',
            }}
          >
            {text ? 'EDITAR' : '+ AGREGAR'}
          </button>
        )}
      </div>

      {editing ? (
        <div>
          <textarea
            autoFocus
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="Escribe tu prompt aquí..."
            rows={3}
            style={{
              width: '100%', boxSizing: 'border-box',
              background: '#0a0f1a', border: `1px solid ${accentColor}44`,
              borderRadius: 8, padding: '8px 10px',
              color: '#e2e8f0', fontSize: '0.75rem', lineHeight: 1.6,
              resize: 'vertical', outline: 'none',
              fontFamily: 'sans-serif',
            }}
          />
          <div style={{ display: 'flex', gap: 6, marginTop: 6, justifyContent: 'flex-end' }}>
            <button onClick={handleCancel} style={{
              background: 'none', border: '1px solid #1e293b',
              borderRadius: 6, padding: '4px 12px',
              fontSize: '0.55rem', color: '#475569', cursor: 'pointer',
              fontFamily: 'monospace', letterSpacing: '0.1em',
            }}>CANCELAR</button>
            <button onClick={handleSave} style={{
              background: accentColor + '22', border: `1px solid ${accentColor}55`,
              borderRadius: 6, padding: '4px 12px',
              fontSize: '0.55rem', color: accentColor, cursor: 'pointer',
              fontFamily: 'monospace', letterSpacing: '0.1em', fontWeight: 700,
            }}>GUARDAR</button>
          </div>
        </div>
      ) : text ? (
        <p style={{
          margin: 0, fontSize: '0.75rem', color: '#94a3b8',
          lineHeight: 1.65, whiteSpace: 'pre-wrap',
        }}>{text}</p>
      ) : (
        <p style={{
          margin: 0, fontSize: '0.68rem', color: '#1e293b',
          fontStyle: 'italic',
        }}>Sin prompt — pulsa + AGREGAR</p>
      )}
    </div>
  )
}

function F1Card() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const accent = '#dc143c'

  return (
    <div
      style={{
        cursor: 'pointer',
        background: hovered
          ? 'linear-gradient(135deg, #1a0008, #2d0010)'
          : 'linear-gradient(135deg, #161b27, #1a1f30)',
        border: `1px solid ${hovered ? accent + '55' : '#2d374877'}`,
        boxShadow: hovered
          ? `0 8px 32px ${accent}33, 0 0 1px ${accent}44`
          : '0 2px 14px rgba(0,0,0,0.4)',
        borderRadius: 16,
        padding: '14px 16px',
        transition: 'all 0.25s',
        maxWidth: 340,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fila principal clicable */}
      <div
        className="flex items-center gap-3"
        onClick={() => navigate('/f1')}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{
          background: hovered
            ? `linear-gradient(135deg, ${accent}, #ff4560)`
            : `linear-gradient(135deg, ${accent}33, #7c000033)`,
          border: `1px solid ${accent}33`,
        }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            style={{ color: hovered ? '#fff' : accent }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 10h11M3 6h18M3 14h7m-7 4h4m9-8l3 3-3 3m-3-3h6" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="font-sw font-bold text-xs" style={{
            color: hovered ? '#ff6b6b' : '#94a3b8',
            letterSpacing: '0.12em', transition: 'color 0.2s',
          }}>FÓRMULA 1</div>
          <div className="font-mono-sw text-xs mt-0.5" style={{ color: '#64748b', letterSpacing: '0.06em', fontSize: '0.6rem' }}>
            LÍNEA DEL TIEMPO — 1950 A 2025
          </div>
        </div>
        <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
          style={{ color: accent + '55', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <CardPrompt cardKey="f1" accentColor={accent} />
    </div>
  )
}

function CalculadoraCard() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const accent = '#c084fc'

  return (
    <div
      style={{
        cursor: 'pointer',
        background: hovered
          ? 'linear-gradient(135deg, #1e1b4b, #2e1065)'
          : 'linear-gradient(135deg, #161b27, #1a1f30)',
        border: `1px solid ${hovered ? accent + '55' : '#2d374877'}`,
        boxShadow: hovered
          ? `0 8px 32px ${accent}33, 0 0 1px ${accent}44`
          : '0 2px 14px rgba(0,0,0,0.4)',
        borderRadius: 16,
        padding: '14px 16px',
        transition: 'all 0.25s',
        maxWidth: 340,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-3"
        onClick={() => navigate('/calculadora')}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{
          background: hovered
            ? 'linear-gradient(135deg, #7c3aed, #c084fc)'
            : `linear-gradient(135deg, #4c1d9833, #7c3aed33)`,
          border: `1px solid ${accent}33`,
        }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            style={{ color: hovered ? '#fff' : accent }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="font-sw font-bold text-xs" style={{
            color: hovered ? accent : '#94a3b8',
            letterSpacing: '0.12em', transition: 'color 0.2s',
          }}>CALCULADORA</div>
          <div className="font-mono-sw text-xs mt-0.5" style={{ color: '#64748b', letterSpacing: '0.06em', fontSize: '0.6rem' }}>
            CIENTÍFICA — TEXTO Y BOTONES
          </div>
        </div>
        <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
          style={{ color: accent + '55', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <CardPrompt cardKey="calculadora" accentColor={accent} />
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="font-mono-sw mb-1"
            style={{ color: '#f8717166', fontSize: '0.65rem', letterSpacing: '0.25em' }}>
            ARCHIVO PERSONAL — SECTOR WEB
          </div>
          <h1 className="font-sw font-bold"
            style={{
              fontSize: '1.4rem',
              letterSpacing: '0.08em',
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #f87171)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            ARCHIVOS DE ENTRENAMIENTO
          </h1>
          <div className="mt-4 h-px"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #c084fc44, transparent)' }} />
        </div>

        {/* Herramientas */}
        <div className="font-mono-sw mb-3" style={{ color: '#c084fc66', fontSize: '0.6rem', letterSpacing: '0.25em' }}>
          HERRAMIENTAS
        </div>
        <div className="flex flex-wrap gap-4">
          <CalculadoraCard />
          <F1Card />
        </div>

      </div>
    </div>
  )
}
