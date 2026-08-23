import React from 'react'

// ── CSS animaciones ────────────────────────────────────────────────────────
const styleEl = document.createElement('style')
styleEl.textContent = `
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
  @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
  .receta-card:hover { transform: translateY(-4px) scale(1.015); box-shadow: 0 16px 48px #d9770622 !important; }
  .receta-card { transition: transform 0.2s, box-shadow 0.2s; }
  .ing-tag:hover .ing-remove { opacity:1 !important; }
`
if (!document.head.querySelector('#receta-styles')) {
  styleEl.id = 'receta-styles'
  document.head.appendChild(styleEl)
}

const ACCENT   = '#f97316'   // naranja principal
const ACCENT2  = '#fbbf24'   // amarillo
const DARK     = '#0f0a04'
const SURFACE  = '#1a1108'
const SURFACE2 = '#211508'
const BORDER   = '#2d1f0a'

// ── Helpers API TheMealDB ─────────────────────────────────────────────────
const BASE = 'https://www.themealdb.com/api/json/v1/1'

async function fetchByIngredient(ing) {
  const r = await fetch(`${BASE}/filter.php?i=${encodeURIComponent(ing.trim())}`)
  const j = await r.json()
  return j.meals || []
}

async function fetchMealDetail(id) {
  const r = await fetch(`${BASE}/lookup.php?i=${id}`)
  const j = await r.json()
  return j.meals?.[0] || null
}

function intersectMeals(lists) {
  if (!lists.length) return []
  // Buscar meals que aparezcan en la mayor cantidad de listas de ingredientes
  const countMap = {}
  lists.flat().forEach(m => {
    countMap[m.idMeal] = countMap[m.idMeal]
      ? { ...countMap[m.idMeal], count: countMap[m.idMeal].count + 1 }
      : { ...m, count: 1 }
  })
  return Object.values(countMap)
    .sort((a, b) => b.count - a.count)
    .slice(0, 24)
}

// ── Componente SkeletonCard ───────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{
      background: SURFACE, border: `1px solid ${BORDER}`,
      borderRadius: 16, overflow: 'hidden',
      animation: 'shimmer 1.5s ease-in-out infinite',
    }}>
      <div style={{ height: 160, background: '#2d1f0a' }} />
      <div style={{ padding: '12px 14px' }}>
        <div style={{ height: 14, background: '#2d1f0a', borderRadius: 6, marginBottom: 8 }} />
        <div style={{ height: 10, background: '#1a1108', borderRadius: 6, width: '60%' }} />
      </div>
    </div>
  )
}

// ── Componente RecipeDetail (modal) ───────────────────────────────────────
function RecipeDetail({ meal, onClose }) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ing && ing.trim()) ingredients.push({ ing, measure: measure?.trim() || '' })
  }

  const instructions = (meal.strInstructions || '')
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        backdropFilter: 'blur(4px)',
        animation: 'fadeUp 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: `linear-gradient(160deg, #1a1108, #120c04)`,
          border: `1px solid ${ACCENT}44`,
          borderRadius: 20,
          maxWidth: 760, width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: `0 24px 80px ${ACCENT}22`,
          scrollbarWidth: 'thin',
          scrollbarColor: `${ACCENT}33 transparent`,
        }}
      >
        {/* Imagen + header */}
        <div style={{ position: 'relative' }}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #1a110888 60%, transparent)',
            borderRadius: '20px 20px 0 0',
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 14, right: 14,
              background: '#00000088', border: `1px solid ${ACCENT}44`,
              borderRadius: '50%', width: 34, height: 34,
              color: '#fff', fontSize: '1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
          <div style={{ position: 'absolute', bottom: 16, left: 20, right: 60 }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
              {meal.strMeal}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              {meal.strCategory && (
                <span style={{
                  background: ACCENT + '33', border: `1px solid ${ACCENT}55`,
                  borderRadius: 20, padding: '3px 10px',
                  fontSize: '0.65rem', color: ACCENT, fontWeight: 700,
                }}>🍽 {meal.strCategory}</span>
              )}
              {meal.strArea && (
                <span style={{
                  background: ACCENT2 + '22', border: `1px solid ${ACCENT2}44`,
                  borderRadius: 20, padding: '3px 10px',
                  fontSize: '0.65rem', color: ACCENT2, fontWeight: 700,
                }}>🌍 {meal.strArea}</span>
              )}
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 28 }}>
            {/* Ingredientes */}
            <div>
              <div style={{
                fontSize: '0.6rem', fontWeight: 700, color: ACCENT,
                letterSpacing: '0.2em', marginBottom: 14, fontFamily: 'monospace',
              }}>🧅 INGREDIENTES ({ingredients.length})</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {ingredients.map((x, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '6px 10px',
                    background: i % 2 === 0 ? SURFACE2 : 'transparent',
                    borderRadius: 8,
                    borderLeft: `2px solid ${ACCENT}33`,
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>{x.ing}</span>
                    <span style={{ fontSize: '0.72rem', color: ACCENT2, fontWeight: 600 }}>{x.measure}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instrucciones */}
            <div>
              <div style={{
                fontSize: '0.6rem', fontWeight: 700, color: ACCENT,
                letterSpacing: '0.2em', marginBottom: 14, fontFamily: 'monospace',
              }}>📋 PREPARACIÓN</div>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {instructions.map((step, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                      background: ACCENT + '22', border: `1px solid ${ACCENT}55`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', fontWeight: 800, color: ACCENT, marginTop: 2,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.7 }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginTop: 24,
                background: '#ff000022', border: '1px solid #ff000055',
                borderRadius: 10, padding: '8px 16px',
                color: '#ff6b6b', fontSize: '0.72rem', fontWeight: 700,
                textDecoration: 'none', letterSpacing: '0.1em',
              }}
            >
              ▶ VER EN YOUTUBE
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Componente principal ─────────────────────────────────────────────────
export default function RecetaFacil() {
  const [input, setInput]         = React.useState('')
  const [ingredients, setIngredients] = React.useState([])
  const [results, setResults]     = React.useState([])
  const [loading, setLoading]     = React.useState(false)
  const [error, setError]         = React.useState(null)
  const [selected, setSelected]   = React.useState(null)   // meal detail
  const [detailLoading, setDetailLoading] = React.useState(false)
  const [searched, setSearched]   = React.useState(false)

  // Sugerencias rápidas
  const SUGGESTIONS = ['Pollo', 'Tomate', 'Huevo', 'Arroz', 'Pasta', 'Queso', 'Cebolla', 'Ajo', 'Patata', 'Atún']

  function addIngredient(val) {
    const clean = val.trim()
    if (!clean || ingredients.map(i => i.toLowerCase()).includes(clean.toLowerCase())) return
    setIngredients(prev => [...prev, clean])
    setInput('')
  }

  function removeIngredient(ing) {
    setIngredients(prev => prev.filter(i => i !== ing))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addIngredient(input)
    } else if (e.key === 'Backspace' && !input && ingredients.length) {
      removeIngredient(ingredients[ingredients.length - 1])
    }
  }

  async function handleSearch() {
    if (!ingredients.length) return
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const lists = await Promise.all(ingredients.map(fetchByIngredient))
      const merged = intersectMeals(lists)
      setResults(merged)
      if (!merged.length) setError('No encontramos recetas con esos ingredientes. Prueba con otros.')
    } catch {
      setError('Error al conectar con la API de recetas. Comprueba tu conexión.')
    } finally {
      setLoading(false)
    }
  }

  async function openDetail(meal) {
    setDetailLoading(true)
    const detail = await fetchMealDetail(meal.idMeal)
    setSelected(detail)
    setDetailLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: DARK, paddingTop: 64 }}>

      {/* ── HERO ── */}
      <div style={{
        background: `linear-gradient(160deg, #1a0d00, #120800, ${DARK})`,
        borderBottom: `1px solid ${BORDER}`,
        padding: '40px 24px 48px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decoración fondo */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 200, height: 200, borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT2}0f 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: ACCENT + '18', border: `1px solid ${ACCENT}33`,
            borderRadius: 20, padding: '4px 14px', marginBottom: 18,
          }}>
            <span style={{ fontSize: '0.85rem' }}>🍳</span>
            <span style={{ fontSize: '0.6rem', color: ACCENT, fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'monospace' }}>
              RECETA FÁCIL
            </span>
          </div>

          <h1 style={{
            margin: '0 0 10px',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            background: `linear-gradient(90deg, #fff 30%, ${ACCENT}, ${ACCENT2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            ¿Qué hay en tu nevera?
          </h1>
          <p style={{
            margin: '0 0 32px',
            fontSize: '0.95rem', color: '#78716c', lineHeight: 1.6,
          }}>
            Añade los ingredientes que tienes y te buscamos recetas al instante.
          </p>

          {/* ── INPUT INGREDIENTES ── */}
          <div style={{
            background: SURFACE,
            border: `1.5px solid ${BORDER}`,
            borderRadius: 16,
            padding: '14px 16px',
            marginBottom: 14,
            boxShadow: `0 4px 32px #00000044`,
          }}>
            {/* Tags + input */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: ingredients.length ? 12 : 0 }}>
              {ingredients.map(ing => (
                <span
                  key={ing}
                  className="ing-tag"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    background: ACCENT + '22', border: `1px solid ${ACCENT}55`,
                    borderRadius: 20, padding: '5px 12px',
                    fontSize: '0.78rem', color: ACCENT, fontWeight: 600,
                    position: 'relative',
                  }}
                >
                  {ing}
                  <button
                    className="ing-remove"
                    onClick={() => removeIngredient(ing)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: ACCENT, fontSize: '0.75rem', padding: 0,
                      lineHeight: 1, opacity: 0.6, transition: 'opacity 0.15s',
                    }}
                  >✕</button>
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>🥦</span>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={ingredients.length ? 'Añadir otro ingrediente...' : 'Escribe un ingrediente (ej: pollo, tomate...)'}
                style={{
                  flex: 1, background: 'none', border: 'none', outline: 'none',
                  color: '#f1f5f9', fontSize: '0.92rem',
                  caretColor: ACCENT,
                }}
              />
              <button
                onClick={() => addIngredient(input)}
                disabled={!input.trim()}
                style={{
                  background: input.trim() ? ACCENT : BORDER,
                  border: 'none', borderRadius: 10,
                  padding: '8px 16px', cursor: input.trim() ? 'pointer' : 'default',
                  color: input.trim() ? '#fff' : '#4b3a20',
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
              >
                + AÑADIR
              </button>
            </div>
          </div>

          {/* Sugerencias rápidas */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            <span style={{ fontSize: '0.6rem', color: '#57534e', alignSelf: 'center', fontFamily: 'monospace', letterSpacing: '0.1em' }}>SUGERENCIAS:</span>
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => addIngredient(s)}
                disabled={ingredients.map(i => i.toLowerCase()).includes(s.toLowerCase())}
                style={{
                  background: ingredients.map(i => i.toLowerCase()).includes(s.toLowerCase()) ? ACCENT + '22' : SURFACE2,
                  border: `1px solid ${ingredients.map(i => i.toLowerCase()).includes(s.toLowerCase()) ? ACCENT + '55' : BORDER}`,
                  borderRadius: 20, padding: '4px 12px',
                  fontSize: '0.7rem', color: ingredients.map(i => i.toLowerCase()).includes(s.toLowerCase()) ? ACCENT : '#78716c',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Botón buscar */}
          <button
            onClick={handleSearch}
            disabled={!ingredients.length || loading}
            style={{
              background: ingredients.length && !loading
                ? `linear-gradient(135deg, ${ACCENT}, #ea580c)`
                : BORDER,
              border: 'none', borderRadius: 14,
              padding: '14px 36px',
              color: ingredients.length && !loading ? '#fff' : '#4b3a20',
              fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.12em',
              cursor: ingredients.length && !loading ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: ingredients.length && !loading ? `0 8px 32px ${ACCENT}44` : 'none',
              transition: 'all 0.25s',
            }}
          >
            {loading ? (
              <>
                <svg style={{ width: 18, height: 18, animation: 'spin 1s linear infinite' }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                BUSCANDO RECETAS...
              </>
            ) : (
              <>
                <span style={{ fontSize: '1.1rem' }}>🔍</span>
                BUSCAR RECETAS
                {ingredients.length > 0 && (
                  <span style={{
                    background: '#ffffff33', borderRadius: 20,
                    padding: '2px 8px', fontSize: '0.65rem',
                  }}>{ingredients.length} ingrediente{ingredients.length > 1 ? 's' : ''}</span>
                )}
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 24px' }}>

        {/* Error */}
        {error && (
          <div style={{
            background: '#7c1d1d22', border: '1px solid #dc143c44',
            borderRadius: 12, padding: '14px 18px', marginBottom: 28,
            color: '#f87171', fontSize: '0.85rem', display: 'flex', gap: 10, alignItems: 'center',
          }}>
            <span style={{ fontSize: '1.2rem' }}>😕</span> {error}
          </div>
        )}

        {/* Skeletons cargando */}
        {loading && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 18 }}>
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Grid de recetas */}
        {!loading && results.length > 0 && (
          <>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 22, flexWrap: 'wrap', gap: 10,
            }}>
              <div>
                <div style={{ fontSize: '0.6rem', color: ACCENT, letterSpacing: '0.2em', marginBottom: 4, fontFamily: 'monospace' }}>
                  RESULTADOS
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f1f5f9' }}>
                  {results.length} receta{results.length > 1 ? 's' : ''} encontrada{results.length > 1 ? 's' : ''}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ingredients.map(ing => (
                  <span key={ing} style={{
                    background: ACCENT + '18', border: `1px solid ${ACCENT}33`,
                    borderRadius: 20, padding: '4px 10px',
                    fontSize: '0.65rem', color: ACCENT,
                  }}>✓ {ing}</span>
                ))}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 18,
            }}>
              {results.map((meal, idx) => (
                <div
                  key={meal.idMeal}
                  className="receta-card"
                  onClick={() => openDetail(meal)}
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    animation: `fadeUp 0.3s ease both`,
                    animationDelay: `${Math.min(idx * 40, 400)}ms`,
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={meal.strMealThumb + '/preview'}
                      alt={meal.strMeal}
                      loading="lazy"
                      style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                    />
                    {/* Badge coincidencias */}
                    {meal.count > 1 && (
                      <div style={{
                        position: 'absolute', top: 8, right: 8,
                        background: ACCENT, borderRadius: 20,
                        padding: '3px 8px',
                        fontSize: '0.55rem', fontWeight: 800, color: '#fff',
                      }}>
                        {meal.count}/{ingredients.length} ing.
                      </div>
                    )}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, #1a110888 30%, transparent)',
                    }} />
                  </div>
                  <div style={{ padding: '12px 14px 14px' }}>
                    <div style={{
                      fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9',
                      lineHeight: 1.3, marginBottom: 8,
                      display: '-webkit-box', WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>{meal.strMeal}</div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                      background: ACCENT + '18', borderRadius: 20, padding: '3px 9px',
                      fontSize: '0.6rem', color: ACCENT,
                    }}>
                      <span>👆</span> Ver receta completa
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Estado vacío inicial */}
        {!loading && !searched && (
          <div style={{ textAlign: 'center', paddingTop: 40 }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🥘</div>
            <div style={{ fontSize: '1rem', color: '#57534e', fontWeight: 600 }}>
              Añade ingredientes arriba para empezar
            </div>
            <div style={{ fontSize: '0.8rem', color: '#3d3530', marginTop: 6 }}>
              Puedes añadir varios ingredientes a la vez
            </div>
          </div>
        )}
      </div>

      {/* ── MODAL DETALLE ── */}
      {detailLoading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ fontSize: '2rem', animation: 'spin 1s linear infinite' }}>🍳</div>
        </div>
      )}

      {selected && !detailLoading && (
        <RecipeDetail meal={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
