import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (password !== confirm) { setError('Las contraseñas no coinciden'); return }
    if (password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres'); return }
    setLoading(true)
    const { error } = await signUp(email, password)
    setLoading(false)
    if (error) { setError(error.message); return }
    setSuccess(true)
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '9px 12px', borderRadius: '10px',
    border: '1.5px solid #e2e8f0', outline: 'none',
    fontSize: '0.85rem', color: '#1e293b', background: '#f8fafc',
    transition: 'border-color 0.15s',
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
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              fontSize: '1.3rem', fontWeight: '800', letterSpacing: '0.06em',
              background: 'linear-gradient(90deg, #2563eb, #f97316, #dc2626)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              MIS PRÁCTICAS
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px', fontWeight: '600' }}>
              Crea tu cuenta
            </div>
          </div>

          {success ? (
            <div style={{
              padding: '16px', borderRadius: '12px',
              background: '#f0fdf4', border: '1.5px solid #86efac',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>✅</div>
              <div style={{ fontWeight: '700', color: '#15803d', fontSize: '0.85rem' }}>¡Cuenta creada!</div>
              <div style={{ fontSize: '0.72rem', color: '#16a34a', marginTop: '4px' }}>
                Revisa tu email para confirmar la cuenta.
              </div>
              <Link to="/login" style={{
                display: 'block', marginTop: '14px', padding: '8px',
                borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: '#fff', fontWeight: '700', fontSize: '0.78rem', textDecoration: 'none',
              }}>
                Ir a iniciar sesión
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#64748b', marginBottom: '5px' }}>
                  Email
                </label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com" required style={inputStyle}
                  onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                  onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#64748b', marginBottom: '5px' }}>
                  Contraseña
                </label>
                <input
                  type="password" value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres" required style={inputStyle}
                  onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                  onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#64748b', marginBottom: '5px' }}>
                  Confirmar contraseña
                </label>
                <input
                  type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                  placeholder="Repite la contraseña" required style={inputStyle}
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
                type="submit" disabled={loading}
                style={{
                  width: '100%', padding: '10px', borderRadius: '12px', border: 'none',
                  background: loading ? '#e2e8f0' : 'linear-gradient(135deg, #f97316, #ef4444)',
                  color: loading ? '#94a3b8' : '#fff',
                  fontWeight: '700', fontSize: '0.85rem', cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: loading ? 'none' : '0 3px 12px #f9731644',
                  transition: 'all 0.15s',
                }}
              >
                {loading ? 'Creando cuenta...' : 'Crear cuenta'}
              </button>
            </form>
          )}

          {!success && (
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.75rem', color: '#94a3b8' }}>
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>
                Inicia sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
