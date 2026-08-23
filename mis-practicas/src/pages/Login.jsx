import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)
    if (error) { setError(error.message); return }
    navigate('/home')
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fefce8 50%, #fff1f2 100%)',
      padding: '16px',
    }}>
      <div style={{
        width: '100%', maxWidth: '360px',
        background: '#fff', borderRadius: '20px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 8px 40px #00000014',
        overflow: 'hidden',
      }}>
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #3b82f6, #fbbf24, #ef4444)' }} />

        <div style={{ padding: '28px 24px' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              fontSize: '1.3rem', fontWeight: '800', letterSpacing: '0.06em',
              background: 'linear-gradient(90deg, #2563eb, #f97316, #dc2626)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              MIS PRÁCTICAS
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px', fontWeight: '600' }}>
              Inicia sesión para continuar
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#64748b', marginBottom: '5px' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                style={{
                  width: '100%', boxSizing: 'border-box',
                  padding: '9px 12px', borderRadius: '10px',
                  border: '1.5px solid #e2e8f0', outline: 'none',
                  fontSize: '0.85rem', color: '#1e293b', background: '#f8fafc',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#64748b', marginBottom: '5px' }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%', boxSizing: 'border-box',
                  padding: '9px 12px', borderRadius: '10px',
                  border: '1.5px solid #e2e8f0', outline: 'none',
                  fontSize: '0.85rem', color: '#1e293b', background: '#f8fafc',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </div>

            {error && (
              <div style={{
                marginBottom: '14px', padding: '10px 12px', borderRadius: '10px',
                background: '#fff1f2', border: '1.5px solid #fca5a5',
                fontSize: '0.75rem', color: '#dc2626', fontWeight: '600',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '10px', borderRadius: '12px', border: 'none',
                background: loading ? '#e2e8f0' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: loading ? '#94a3b8' : '#fff',
                fontWeight: '700', fontSize: '0.85rem', cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 3px 12px #3b82f644',
                transition: 'all 0.15s',
              }}
            >
              {loading ? 'Entrando...' : 'Iniciar sesión'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.75rem', color: '#94a3b8' }}>
            ¿No tienes cuenta?{' '}
            <Link to="/register" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
