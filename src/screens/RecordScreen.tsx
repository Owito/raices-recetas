import { useEffect, useRef, useState } from 'react'
import { ABUELA_SPEECH } from '../data'
import { BackIcon } from '../components/icons'

interface Props {
  active: boolean
  onBack: () => void
  onNext: () => void
}

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

/**
 * Pantalla 2: grabación simulada. Al tocar el micrófono corre un cronómetro,
 * se anima la onda y la transcripción se escribe en vivo. Al detener, habilita
 * el paso a la IA.
 */
export function RecordScreen({ active, onBack, onNext }: Props) {
  const [recording, setRecording] = useState(false)
  const [secs, setSecs] = useState(0)
  const [transcript, setTranscript] = useState('')
  const [done, setDone] = useState(false)
  const timerRef = useRef<number | null>(null)
  const typingRef = useRef<number | null>(null)

  const clearTimers = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (typingRef.current !== null) {
      clearInterval(typingRef.current)
      typingRef.current = null
    }
  }

  // Limpia los intervalos si la pantalla se desmonta.
  useEffect(() => clearTimers, [])

  const toggle = () => {
    if (!recording) {
      setRecording(true)
      setSecs(0)
      setTranscript('')
      timerRef.current = window.setInterval(() => setSecs((s) => s + 1), 1000)
      let i = 0
      typingRef.current = window.setInterval(() => {
        i += 2
        setTranscript(ABUELA_SPEECH.slice(0, i))
        if (i >= ABUELA_SPEECH.length && typingRef.current !== null) {
          clearInterval(typingRef.current)
          typingRef.current = null
        }
      }, 45)
    } else {
      setRecording(false)
      clearTimers()
      setTranscript(ABUELA_SPEECH)
      setDone(true)
    }
  }

  const hint = recording
    ? 'Grabando… toca de nuevo para terminar'
    : done
      ? '¡Listo! Ya la escuchamos. Ordena la receta →'
      : 'Toca el micrófono para empezar a grabar'

  return (
    <section className={'screen' + (active ? ' active' : '')} id="s-record">
      <div className="topbar">
        <button className="back" onClick={onBack} aria-label="Volver">
          <BackIcon />
        </button>
        <div className="grow" />
        <div className="dots">
          <i className="on" />
          <i />
          <i />
        </div>
      </div>
      <div className="screen-body">
        <div className="rec-head">
          <h2>Cuéntame, abuela</h2>
          <p className="ask">Deja que hable mientras cocina. Nosotros la escuchamos.</p>
        </div>
        <div className="mic-stage">
          <button
            className={'mic-btn' + (recording ? ' live' : '')}
            onClick={toggle}
            aria-label={recording ? 'Detener' : 'Grabar'}
          >
            <span className="ring" />
            <span className="ring d" />
            {recording ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
              </svg>
            ) : (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="9" y="3" width="6" height="12" rx="3" fill="#fff" />
                <path d="M6 11a6 6 0 0012 0M12 17v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <div className="timer">{fmt(secs)}</div>
          <div className={'wave' + (recording ? ' live' : '')}>
            {Array.from({ length: 15 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="prompt-hint">{hint}</div>
        </div>
        <div className={'transcript' + (transcript === '' ? ' empty' : '')}>
          {transcript === '' ? (
            'La transcripción de su voz aparecerá aquí, palabra por palabra…'
          ) : (
            <>
              {transcript}
              {recording && <span className="cursor" />}
            </>
          )}
        </div>
      </div>
      <div className="foot">
        <button className="btn" onClick={onNext} disabled={!done}>
          Ordenar la receta con IA
        </button>
      </div>
    </section>
  )
}
