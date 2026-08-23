import { useState, useRef, useEffect } from 'react'
import { evaluate, format } from 'mathjs'
import { supabase } from '../supabaseClient'
import { useAuth } from '../context/AuthContext'

function BgModal({ onClose, onApply, userId }) {
  const [tab, setTab] = useState('url')
  const [url, setUrl] = useState('')
  const [preview, setPreview] = useState(null)
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState(null)
  const fileRef = useRef(null)

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
    const reader = new FileReader()
    reader.onload = ev => setPreview(ev.target.result)
    reader.readAsDataURL(f)
  }

  const handleApply = async () => {
    setUploadError(null)
    if (tab === 'url') {
      if (!url.trim()) return
      await saveBgUrl(url.trim())
      onApply(url.trim())
      onClose()
    } else {
      if (!file) return
      setUploading(true)
      try {
        const ext = file.name.split('.').pop()
        const path = `${userId}/bg.${ext}`
        const { error: upErr } = await supabase.storage
          .from('backgrounds')
          .upload(path, file, { upsert: true })
        if (upErr) throw upErr
        const { data } = supabase.storage.from('backgrounds').getPublicUrl(path)
        // Storage privado — usar signed URL
        const { data: signed, error: signErr } = await supabase.storage
          .from('backgrounds')
          .createSignedUrl(path, 60 * 60 * 24 * 365) // 1 año
        if (signErr) throw signErr
        await saveBgUrl(signed.signedUrl)
        onApply(signed.signedUrl)
        onClose()
      } catch (err) {
        setUploadError(err.message || 'Error al subir imagen')
      } finally {
        setUploading(false)
      }
    }
  }

  const saveBgUrl = async (bgUrl) => {
    await supabase.from('user_settings').upsert(
      { user_id: userId, bg_url: bgUrl, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    )
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      />

      {/* Panel */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: '#fff', borderRadius: '18px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 8px 40px #00000022',
        width: '100%', maxWidth: '360px',
        overflow: 'hidden',
      }}>
        {/* Top bar */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #3b82f6, #fbbf24, #ef4444)' }} />

        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontWeight: '800', fontSize: '0.9rem', color: '#1e293b' }}>Cambiar fondo</span>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#94a3b8' }}>✕</button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', background: '#f1f5f9', padding: '4px', borderRadius: '10px' }}>
            {[['url','URL'], ['upload','Subir archivo']].map(([t, label]) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1, padding: '5px', borderRadius: '7px', border: 'none',
                  fontWeight: '700', fontSize: '0.72rem', cursor: 'pointer',
                  background: tab === t ? '#fff' : 'transparent',
                  color: tab === t ? '#2563eb' : '#94a3b8',
                  boxShadow: tab === t ? '0 1px 4px #00000014' : 'none',
                  transition: 'all 0.15s',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 'url' ? (
            <div>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', display: 'block', marginBottom: '5px' }}>
                Pega la URL de la imagen
              </label>
              <input
                type="text"
                value={url}
                onChange={e => { setUrl(e.target.value); setPreview(e.target.value.trim()) }}
                placeholder="https://ejemplo.com/imagen.jpg"
                style={{
                  width: '100%', boxSizing: 'border-box',
                  padding: '8px 10px', borderRadius: '10px',
                  border: '1.5px solid #e2e8f0', outline: 'none',
                  fontSize: '0.78rem', color: '#1e293b', background: '#f8fafc',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
              />
            </div>
          ) : (
            <div>
              <label style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', display: 'block', marginBottom: '5px' }}>
                Selecciona una imagen
              </label>
              <div
                onClick={() => fileRef.current.click()}
                style={{
                  border: '2px dashed #bfdbfe', borderRadius: '12px',
                  padding: '20px', textAlign: 'center', cursor: 'pointer',
                  background: '#eff6ff', transition: 'all 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#bfdbfe'}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>📁</div>
                <div style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: '700' }}>Haz click o arrastra aquí</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', marginTop: '2px' }}>PNG, JPG, WEBP, GIF</div>
              </div>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
            </div>
          )}

          {/* Preview */}
          {preview && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: '700', marginBottom: '5px' }}>PREVISUALIZACIÓN</div>
              <img
                src={preview}
                alt="preview"
                style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          )}

          {uploadError && (
            <div style={{
              marginTop: '10px', padding: '8px 12px', borderRadius: '10px',
              background: '#fff1f2', border: '1.5px solid #fca5a5',
              fontSize: '0.72rem', color: '#dc2626', fontWeight: '600',
            }}>
              {uploadError}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            <button
              onClick={onClose}
              style={{
                flex: 1, padding: '8px', borderRadius: '10px',
                border: '1.5px solid #e2e8f0', background: '#f8fafc',
                color: '#64748b', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer',
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleApply}
              disabled={uploading || !(tab === 'url' ? url.trim() : file)}
              style={{
                flex: 1, padding: '8px', borderRadius: '10px', border: 'none',
                background: (!uploading && (tab === 'url' ? url.trim() : file))
                  ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                  : '#e2e8f0',
                color: (!uploading && (tab === 'url' ? url.trim() : file)) ? '#fff' : '#94a3b8',
                fontWeight: '700', fontSize: '0.78rem', cursor: uploading ? 'not-allowed' : 'pointer',
                boxShadow: (!uploading && (tab === 'url' ? url.trim() : file)) ? '0 3px 10px #3b82f644' : 'none',
                transition: 'all 0.15s',
              }}
            >
              {uploading ? 'Subiendo...' : 'Aplicar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BUTTONS = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '⌫', '='],
]

const SCI_BUTTONS = [
  ['sin', 'cos', 'tan', 'π'],
  ['log', 'ln', '√', '^'],
  ['(', ')', '!', 'e'],
]

function toMathExpr(expr) {
  return expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, 'pi')
    .replace(/√\(/g, 'sqrt(')
    .replace(/√(\d+)/g, 'sqrt($1)')
}

// Colores por tipo de botón
function getBtnStyle(btn, hovered) {
  const isEq  = btn === '='
  const isOp  = ['÷', '×', '−', '+'].includes(btn)
  const isAC  = btn === 'AC'
  const isBk  = btn === '⌫'
  const isPct = btn === '%' || btn === '±'

  if (isEq)  return {
    bg: hovered ? 'linear-gradient(135deg, #f59e0b, #f97316)' : 'linear-gradient(135deg, #fbbf24, #fb923c)',
    color: '#fff',
    shadow: hovered ? '0 6px 20px #f97316aa' : '0 3px 12px #fbbf2488',
    border: 'none',
  }
  if (isOp)  return {
    bg: hovered ? '#2563eb' : '#3b82f6',
    color: '#fff',
    shadow: hovered ? '0 4px 14px #3b82f688' : '0 2px 8px #3b82f644',
    border: 'none',
  }
  if (isAC)  return {
    bg: hovered ? '#dc2626' : '#ef4444',
    color: '#fff',
    shadow: hovered ? '0 4px 14px #ef444488' : '0 2px 8px #ef444444',
    border: 'none',
  }
  if (isBk)  return {
    bg: hovered ? '#f59e0b22' : '#fef3c7',
    color: '#d97706',
    shadow: 'none',
    border: '1.5px solid #fcd34d',
  }
  if (isPct) return {
    bg: hovered ? '#dbeafe' : '#eff6ff',
    color: '#2563eb',
    shadow: 'none',
    border: '1.5px solid #bfdbfe',
  }
  // números
  return {
    bg: hovered ? '#f1f5f9' : '#fff',
    color: '#1e293b',
    shadow: '0 1px 4px #00000014',
    border: '1.5px solid #e2e8f0',
  }
}

function getSciStyle(btn, hovered) {
  const blues = ['sin', 'cos', 'tan', 'log', 'ln', '(', ')']
  const reds  = ['√', '^', '!']
  const yellows = ['π', 'e']
  if (yellows.includes(btn)) return {
    bg: hovered ? '#fef08a' : '#fefce8',
    color: '#92400e',
    border: '1.5px solid #fde047',
  }
  if (reds.includes(btn)) return {
    bg: hovered ? '#fecaca' : '#fff1f2',
    color: '#dc2626',
    border: '1.5px solid #fca5a5',
  }
  return {
    bg: hovered ? '#dbeafe' : '#eff6ff',
    color: '#1d4ed8',
    border: '1.5px solid #bfdbfe',
  }
}

function CalcButton({ label, onClick }) {
  const [hov, setHov] = useState(false)
  const s = getBtnStyle(label, hov)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: s.bg,
        color: s.color,
        boxShadow: s.shadow,
        border: s.border || 'none',
        borderRadius: '12px',
        padding: '0.6rem 0',
        fontWeight: '700',
        fontSize: '0.85rem',
        transition: 'all 0.15s',
        transform: hov ? 'scale(0.96)' : 'scale(1)',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}

function SciButton({ label, onClick }) {
  const [hov, setHov] = useState(false)
  const s = getSciStyle(label, hov)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: s.bg,
        color: s.color,
        border: s.border,
        borderRadius: '9px',
        padding: '0.4rem 0',
        fontWeight: '600',
        fontSize: '0.7rem',
        transition: 'all 0.15s',
        transform: hov ? 'scale(0.96)' : 'scale(1)',
        cursor: 'pointer',
        fontFamily: 'monospace',
      }}
    >
      {label}
    </button>
  )
}

export default function Calculadora() {
  const { user } = useAuth()
  const [mode, setMode]       = useState('buttons')
  const [display, setDisplay] = useState('')
  const [result, setResult]   = useState(null)
  const [error, setError]     = useState(null)
  const [history, setHistory] = useState([])
  const [textInput, setTextInput] = useState('')
  const [bgImage, setBgImage] = useState(null)
  const [showBgModal, setShowBgModal] = useState(false)
  const textRef = useRef(null)

  // Cargar fondo guardado del usuario
  useEffect(() => {
    if (!user) return
    supabase
      .from('user_settings')
      .select('bg_url')
      .eq('user_id', user.id)
      .single()
      .then(({ data }) => {
        if (data?.bg_url) setBgImage(data.bg_url)
      })
  }, [user])

  const handleBtn = (val) => {
    setError(null)
    if (val === 'AC') { setDisplay(''); setResult(null); return }
    if (val === '±')  { setDisplay(p => p.startsWith('-') ? p.slice(1) : '-' + p); return }
    if (val === '⌫')  { setDisplay(p => p.slice(0, -1)); return }
    if (val === '=')  { calcDisplay(); return }
    if (val === '%')  {
      try { setDisplay(String(evaluate(toMathExpr(display)) / 100)) }
      catch { setError('Error') }
      return
    }
    if (['sin','cos','tan','log','ln'].includes(val)) { setDisplay(p => p + val + '('); return }
    if (val === '√') { setDisplay(p => p + '√('); return }
    if (val === 'π') { setDisplay(p => p + 'π'); return }
    if (val === 'e') { setDisplay(p => p + 'e'); return }
    setDisplay(p => p + val)
  }

  const calcDisplay = () => {
    try {
      const r = evaluate(toMathExpr(display))
      const f = format(r, { precision: 10 })
      setResult(f)
      setHistory(h => [{ expr: display, result: f }, ...h].slice(0, 15))
    } catch { setError('Expresión inválida') }
  }

  const calcText = () => {
    setError(null); setResult(null)
    try {
      const r = evaluate(toMathExpr(textInput))
      const f = format(r, { precision: 10 })
      setResult(f)
      setHistory(h => [{ expr: textInput, result: f }, ...h].slice(0, 15))
    } catch { setError('No pude interpretar la expresión') }
  }

  const insertSnippet = (s) => {
    const el = textRef.current
    if (!el) return
    const st = el.selectionStart
    const next = textInput.slice(0, st) + s + textInput.slice(el.selectionEnd)
    setTextInput(next)
    setTimeout(() => { el.focus(); el.setSelectionRange(st + s.length, st + s.length) }, 0)
  }

  return (
    <div className="min-h-screen pt-16" style={{
      background: bgImage
        ? `url(${bgImage}) center/cover no-repeat fixed`
        : '#f8fafc',
    }}>
      {/* Overlay cuando hay imagen */}
      {bgImage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(1px)', zIndex: 0 }} />
      )}

      <div className="max-w-sm mx-auto px-3 py-6" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header + botón fondo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <h1 style={{
            fontSize: '1.1rem', fontWeight: '800', letterSpacing: '0.06em',
            background: 'linear-gradient(90deg, #2563eb, #f97316, #dc2626)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            margin: 0,
          }}>
            Calculadora Científica
          </h1>
          <button
            onClick={() => setShowBgModal(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '5px 10px', borderRadius: '9px', border: '1.5px solid #e2e8f0',
              background: bgImage ? 'rgba(255,255,255,0.85)' : '#fff',
              color: '#2563eb', fontWeight: '700', fontSize: '0.65rem',
              cursor: 'pointer', boxShadow: '0 1px 6px #00000012',
              backdropFilter: 'blur(4px)', transition: 'all 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#3b82f6'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
          >
            🖼 Cambiar fondo
          </button>
        </div>

        {/* Mode toggle */}
        <div className="flex gap-2 mb-4 p-1 rounded-xl" style={{ background: '#e2e8f0' }}>
          {[['buttons','Botones'],['text','Texto libre']].map(([m, label]) => (
            <button
              key={m}
              onClick={() => { setMode(m); setError(null); setResult(null) }}
              style={{
                flex: 1,
                padding: '0.4rem',
                borderRadius: '10px',
                border: 'none',
                fontWeight: '700',
                fontSize: '0.72rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: mode === m ? '#fff' : 'transparent',
                color: mode === m ? '#1d4ed8' : '#94a3b8',
                boxShadow: mode === m ? '0 1px 6px #00000018' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Calculator body */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 4px 32px #00000012, 0 1px 4px #00000008',
          overflow: 'hidden',
          border: '1.5px solid #e2e8f0',
        }}>
          {/* Color top bar */}
          <div style={{ height: '4px', background: 'linear-gradient(90deg, #3b82f6, #fbbf24, #ef4444)' }} />

          {mode === 'buttons' ? (
            <div style={{ padding: '14px' }}>
              {/* Display */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                border: '1.5px solid #e2e8f0',
                borderRadius: '14px',
                padding: '12px 14px',
                textAlign: 'right',
                marginBottom: '12px',
                minHeight: '70px',
              }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginBottom: '4px', minHeight: '14px', fontFamily: 'monospace' }}>
                  {display || ' '}
                </div>
                <div style={{
                  fontSize: result ? '1.6rem' : '1.1rem',
                  fontWeight: '800',
                  color: error ? '#dc2626' : result ? '#16a34a' : '#1e293b',
                  transition: 'all 0.15s',
                }}>
                  {error || result || (display ? '' : '0')}
                </div>
              </div>

              {/* Scientific buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '8px' }}>
                {SCI_BUTTONS.flat().map(btn => (
                  <SciButton key={btn} label={btn} onClick={() => handleBtn(btn)} />
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, #3b82f622, #fbbf2422, #ef444422)', margin: '8px 0' }} />

              {/* Main buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {BUTTONS.flat().map((btn, i) => (
                  <CalcButton key={i} label={btn} onClick={() => handleBtn(btn)} />
                ))}
              </div>
            </div>
          ) : (
            /* TEXT MODE */
            <div style={{ padding: '14px' }}>
              <p style={{ fontSize: '0.65rem', color: '#94a3b8', marginBottom: '8px', fontFamily: 'monospace' }}>
                Escribe el problema y presiona Enter
              </p>

              {/* Quick snippets */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                {['sin(','cos(','tan(','sqrt(','log(','ln(','^','pi','e','!','abs('].map(s => (
                  <button
                    key={s}
                    onClick={() => insertSnippet(s)}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '7px',
                      border: '1.5px solid #bfdbfe',
                      background: '#eff6ff',
                      color: '#1d4ed8',
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <textarea
                ref={textRef}
                value={textInput}
                onChange={e => setTextInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), calcText())}
                placeholder={'Ejemplos:\n  2^10 + sqrt(144)\n  sin(45 deg) * cos(30 deg)\n  log(1000) + ln(e^3)'}
                rows={4}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc',
                  color: '#1e293b',
                  padding: '10px 12px',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  resize: 'none',
                  outline: 'none',
                  lineHeight: '1.5',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 3px #3b82f618' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
              />

              <button
                onClick={calcText}
                style={{
                  marginTop: '10px',
                  width: '100%',
                  padding: '0.65rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: '0 3px 12px #3b82f644',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 18px #3b82f666' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px #3b82f644' }}
              >
                Calcular
              </button>

              {(result || error) && (
                <div style={{
                  marginTop: '10px',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  background: error ? '#fff1f2' : '#f0fdf4',
                  border: `1.5px solid ${error ? '#fca5a5' : '#86efac'}`,
                }}>
                  <div style={{ fontSize: '0.6rem', color: error ? '#dc2626' : '#16a34a', marginBottom: '4px', fontWeight: '700', letterSpacing: '0.08em' }}>
                    {error ? 'ERROR' : 'RESULTADO'}
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: error ? '#dc2626' : '#15803d' }}>
                    {error || result}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: '700', letterSpacing: '0.1em' }}>HISTORIAL</span>
              <button
                onClick={() => setHistory([])}
                style={{ fontSize: '0.65rem', color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}
              >
                Limpiar
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {history.map((h, i) => (
                <div
                  key={i}
                  onClick={() => mode === 'buttons' ? (setDisplay(h.expr), setResult(h.result)) : (setTextInput(h.expr), setResult(h.result))}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: '#fff',
                    border: '1.5px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#bfdbfe'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                >
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'monospace' }}>{h.expr}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2563eb' }}>{h.result}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal cambiar fondo */}
      {showBgModal && (
        <BgModal
          onClose={() => setShowBgModal(false)}
          onApply={src => setBgImage(src)}
          userId={user?.id}
        />
      )}
    </div>
  )
}
