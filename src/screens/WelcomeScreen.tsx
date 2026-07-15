import { Sprig } from '../components/Sprig'

interface Props {
  active: boolean
  onStart: () => void
}

/** Pantalla 1: presenta la idea y arranca el flujo. */
export function WelcomeScreen({ active, onStart }: Props) {
  return (
    <section className={'screen' + (active ? ' active' : '')} id="s-welcome">
      <div className="hero">
        <div className="wordmark">
          <Sprig className="sprig" />
          <b>Raíces</b>
        </div>
        <div className="card-peek">
          <div className="recipe-mini">
            <div className="tab" />
            <small>Receta de familia</small>
            <h5>Sancocho de la abuela Rosa</h5>
            <div className="ln" style={{ width: '88%' }} />
            <div className="ln" style={{ width: '70%' }} />
            <div className="ln" style={{ width: '80%' }} />
          </div>
        </div>
        <h2>
          Que ninguna receta se pierda con <em>quien la cocina.</em>
        </h2>
        <p className="sub">
          La abuela cuenta cómo lo hace. Raíces la escucha, la ordena y la guarda para toda la familia.
        </p>
        <span className="tag">Sin backend · una idea que se puede tocar</span>
      </div>
      <div className="foot">
        <button className="btn" onClick={onStart}>
          Empezar a guardar recetas
        </button>
      </div>
    </section>
  )
}
