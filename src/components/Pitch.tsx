import { Sprig } from './Sprig'
import { ChevronIcon } from './icons'

/**
 * Panel de contexto (el "pitch"). Fuera del teléfono, explica qué problema
 * resuelve Raíces y a quién se le presentaría — el contexto que pide el reto.
 */
export function Pitch() {
  return (
    <div className="pitch">
      <div className="brandmark">
        <Sprig className="sprig" />
        <b>Raíces</b>
      </div>
      <div className="kicker">Prototipo · The Vibecoders League</div>
      <h1>
        Las recetas de la abuela no están escritas <em>en ningún lado.</em>
      </h1>
      <p className="lede">
        Están en su memoria y en su voz. <b>Raíces</b> las captura mientras cocina, la IA las ordena en una
        receta de verdad, y quedan guardadas en el muro de la familia — para siempre.
      </p>
      <div className="facts">
        <div>
          <span>El problema</span>
          <p>Cuando la abuela ya no está, sus recetas se van con ella. Nadie las escribió a tiempo.</p>
        </div>
        <div>
          <span>Para quién</span>
          <p>Familias que cocinan de memoria y quieren heredar sus sabores, no perderlos.</p>
        </div>
        <div>
          <span>A quién se lo presento</span>
          <p>A un equipo de producto que invierte en apps de comunidad y memoria familiar.</p>
        </div>
      </div>
      <p className="hint">
        <ChevronIcon />
        Recorre el prototipo: graba, deja que la IA la ordene y guárdala en el muro.
      </p>
    </div>
  )
}
