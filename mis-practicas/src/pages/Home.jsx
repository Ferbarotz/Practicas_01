import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function F1Card() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="inline-flex"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/f1')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, #1a0008, #2d0010)'
            : 'linear-gradient(135deg, #161b27, #1a1f30)',
          border: `1px solid ${hovered ? '#dc143c55' : '#2d374877'}`,
          boxShadow: hovered
            ? '0 8px 32px rgba(220,20,60,0.2), 0 0 1px #dc143c44'
            : '0 2px 14px rgba(0,0,0,0.4)',
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{
          background: hovered
            ? 'linear-gradient(135deg, #dc143c, #ff4560)'
            : 'linear-gradient(135deg, #dc143c33, #7c000033)',
          border: '1px solid #dc143c33',
        }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            style={{ color: hovered ? '#fff' : '#dc143c' }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 10h11M3 6h18M3 14h7m-7 4h4m9-8l3 3-3 3m-3-3h6" />
          </svg>
        </div>
        <div>
          <div className="font-sw font-bold text-xs" style={{
            color: hovered ? '#ff6b6b' : '#94a3b8',
            letterSpacing: '0.12em',
            transition: 'color 0.2s',
          }}>
            FÓRMULA 1
          </div>
          <div className="font-mono-sw text-xs mt-0.5" style={{ color: '#64748b', letterSpacing: '0.06em', fontSize: '0.6rem' }}>
            LÍNEA DEL TIEMPO — 1950 A 2024
          </div>
        </div>
        <svg className="w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-200"
          style={{ color: '#dc143c55', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

function CalculadoraCard() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="inline-flex"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/calculadora')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, #1e1b4b, #2e1065)'
            : 'linear-gradient(135deg, #161b27, #1a1f30)',
          border: `1px solid ${hovered ? '#c084fc55' : '#2d374877'}`,
          boxShadow: hovered
            ? '0 8px 32px rgba(192,132,252,0.2), 0 0 1px #c084fc44'
            : '0 2px 14px rgba(0,0,0,0.4)',
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{
          background: hovered
            ? 'linear-gradient(135deg, #7c3aed, #c084fc)'
            : 'linear-gradient(135deg, #4c1d9833, #7c3aed33)',
          border: '1px solid #c084fc33',
        }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            style={{ color: hovered ? '#fff' : '#c084fc' }}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="font-sw font-bold text-xs" style={{
            color: hovered ? '#c084fc' : '#94a3b8',
            letterSpacing: '0.12em',
            transition: 'color 0.2s',
          }}>
            CALCULADORA
          </div>
          <div className="font-mono-sw text-xs mt-0.5" style={{ color: '#64748b', letterSpacing: '0.06em', fontSize: '0.6rem' }}>
            CIENTÍFICA — TEXTO Y BOTONES
          </div>
        </div>
        <svg className="w-4 h-4 ml-2 flex-shrink-0 transition-transform duration-200"
          style={{ color: '#c084fc55', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
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
        <div className="flex flex-wrap gap-3">
          <CalculadoraCard />
          <F1Card />
        </div>

      </div>
    </div>
  )
}
