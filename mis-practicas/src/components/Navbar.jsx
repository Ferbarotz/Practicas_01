import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const [signingOut, setSigningOut] = useState(false)

  const handleSignOut = async () => {
    setSigningOut(true)
    await signOut()
    navigate('/login')
    setSigningOut(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{
        background: 'rgba(13,17,23,0.92)',
        borderBottom: '1px solid #2d3748',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
      }}>

      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, #3b82f6, #c084fc, #ef4444)' }} />

      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1d4ed822, #4c1d9522)',
              border: '1px solid #60a5fa44',
              boxShadow: '0 0 12px #60a5fa22'
            }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#60a5fa" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="#c084fc" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="#f87171" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-sw text-sm font-bold leading-none"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.12em'
              }}>
              MIS PRÁCTICAS
            </div>
            <div className="text-xs leading-none mt-0.5"
              style={{ color: '#f8717166', letterSpacing: '0.2em', fontFamily: 'Orbitron', fontSize: '0.55rem' }}>
              CODEX
            </div>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold transition-all duration-200 rounded-lg"
            style={{
              fontFamily: 'Orbitron',
              letterSpacing: '0.1em',
              color: '#60a5fa',
              border: '1px solid #60a5fa33',
              background: '#60a5fa0a',
              fontSize: '0.65rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#60a5fa18'
              e.currentTarget.style.borderColor = '#60a5fa'
              e.currentTarget.style.boxShadow = '0 0 14px #60a5fa33'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#60a5fa0a'
              e.currentTarget.style.borderColor = '#60a5fa33'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            INICIO
          </button>

          {user && (
            <>
              {/* Email badge */}
              <div style={{
                padding: '4px 10px', borderRadius: '8px',
                background: '#60a5fa11', border: '1px solid #60a5fa22',
                color: '#60a5fa88', fontSize: '0.6rem', fontFamily: 'monospace',
                maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {user.email}
              </div>

              {/* Sign out */}
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                style={{
                  padding: '5px 10px', borderRadius: '8px',
                  border: '1px solid #f8717133', background: 'transparent',
                  color: '#f87171', fontSize: '0.6rem', fontFamily: 'Orbitron',
                  letterSpacing: '0.1em', cursor: 'pointer', transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f8717111'
                  e.currentTarget.style.borderColor = '#f87171'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = '#f8717133'
                }}
              >
                {signingOut ? '...' : 'SALIR'}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #60a5fa22, transparent)' }} />
    </nav>
  )
}
