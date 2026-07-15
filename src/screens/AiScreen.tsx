import { useEffect, useState } from 'react'
import { AI_STEPS, ABUELA_SPEECH_FULL, SANCOCHO } from '../data'
import { BackIcon, CheckIcon } from '../components/icons'

interface Props {
  active: boolean
  onBack: () => void
  onSave: () => void
}

/**
 * Pantalla 3: la IA "ordena" la transcripción. Al entrar, los pasos se
 * completan uno a uno y luego se revela la receta estructurada.
 */
export function AiScreen({ active, onBack, onSave }: Props) {
  const [doneCount, setDoneCount] = useState(0)
  const [processing, setProcessing] = useState(false)
  const [cardShown, setCardShown] = useState(false)

  useEffect(() => {
    if (!active) return
    setDoneCount(0)
    setCardShown(false)
    setProcessing(true)
    const timers: number[] = []
    let n = 0
    const step = () => {
      if (n < AI_STEPS.length) {
        n += 1
        setDoneCount(n)
        timers.push(window.setTimeout(step, 650))
      } else {
        setProcessing(false)
        setCardShown(true)
      }
    }
    timers.push(window.setTimeout(step, 500))
    return () => timers.forEach(clearTimeout)
  }, [active])

  return (
    <section className={'screen' + (active ? ' active' : '')} id="s-ai">
      <div className="topbar">
        <button className="back" onClick={onBack} aria-label="Volver">
          <BackIcon />
        </button>
        <div className="tt">De la voz a la receta</div>
        <div className="grow" />
        <div className="dots">
          <i />
          <i className="on" />
          <i />
        </div>
      </div>
      <div className="screen-body">
        <div className="raw">
          <span>Lo que dijo la abuela</span>
          {ABUELA_SPEECH_FULL}
        </div>
        <div className="ai-zone">
          <div className="thinking">
            {AI_STEPS.map((label, idx) => {
              const isDone = idx < doneCount
              return (
                <div key={label} className={'think-row' + (isDone ? ' done' : '')}>
                  <span className="chk">
                    {!isDone && processing ? <span className="spin" /> : <CheckIcon />}
                  </span>
                  {label}
                </div>
              )
            })}
          </div>

          <div className={'recipe-card' + (cardShown ? ' show' : '')}>
            <div className="rc-tab" />
            <div className="rc-top">
              <small>Receta de familia</small>
              <h3>{SANCOCHO.title}</h3>
              <div className="rc-meta">
                <div>
                  <b>{SANCOCHO.servings}</b> porciones
                </div>
                <div>
                  <b>{SANCOCHO.time}</b> aprox.
                </div>
                <div>
                  <b>{SANCOCHO.difficulty}</b> a fuego lento
                </div>
              </div>
            </div>
            <div className="rc-body">
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
        </div>
      </div>
      <div className="foot">
        <button className="btn" onClick={onSave} disabled={!cardShown}>
          Guardar en el muro
        </button>
      </div>
    </section>
  )
}
