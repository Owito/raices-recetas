import { useEffect, useRef, useState } from 'react'
import { SANCOCHO } from '../data'
import { CloseIcon, PlayIcon } from '../components/icons'

interface Props {
  open: boolean
  onClose: () => void
}

const REST_BARS = [6, 13, 9, 16, 7]

/** Overlay con la receta completa y un reproductor simulado de la voz original. */
export function RecipeDetail({ open, onClose }: Props) {
  const [bars, setBars] = useState<number[]>(REST_BARS)
  const ivRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (ivRef.current !== null) clearInterval(ivRef.current)
    }
  }, [])

  const play = () => {
    if (ivRef.current !== null) clearInterval(ivRef.current)
    let ticks = 0
    ivRef.current = window.setInterval(() => {
      setBars((prev) => prev.map(() => 4 + Math.round((Math.sin(ticks + Math.random() * 3) + 1) * 8)))
      ticks += 1
      if (ticks > 28 && ivRef.current !== null) {
        clearInterval(ivRef.current)
        ivRef.current = null
        setBars(REST_BARS)
      }
    }, 90)
  }

  return (
    <div className={'detail' + (open ? ' open' : '')}>
      <div className="detail-hero" style={{ background: 'linear-gradient(160deg,#c0442b,#e4a32c)' }}>
        <button className="dclose" onClick={onClose} aria-label="Cerrar">
          <CloseIcon />
        </button>
        <small>Receta de familia · grabada hoy</small>
        <h3>{SANCOCHO.title}</h3>
        <button className="voice-play" onClick={play}>
          <span className="pl">
            <PlayIcon />
          </span>
          Escuchar la voz original
          <span className="voice-bars">
            {bars.map((h, i) => (
              <i key={i} style={{ height: `${h}px` }} />
            ))}
          </span>
        </button>
      </div>
      <div className="detail-body">
        <div className="rc-meta" style={{ marginBottom: 16 }}>
          <div>
            <b>{SANCOCHO.servings}</b> porciones
          </div>
          <div>
            <b>{SANCOCHO.time}</b>
          </div>
          <div>
            <b>{SANCOCHO.difficulty}</b>
          </div>
        </div>
        <h4>Ingredientes</h4>
        <ul className="ingredients">
          {SANCOCHO.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <h4>Pasos</h4>
        <ol className="steps">
          {SANCOCHO.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
