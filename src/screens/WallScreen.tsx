import { Fragment } from 'react'
import { WALL_ITEMS } from '../data'
import type { WallItem } from '../types'
import { BackIcon } from '../components/icons'

interface Props {
  active: boolean
  onBack: () => void
  onOpenDetail: () => void
  onInvite: () => void
}

function Card({ item, onClick }: { item: WallItem; onClick?: () => void }) {
  const inner = (
    <>
      <div className="thumb" style={{ background: item.thumb }}>
        {item.emoji}
      </div>
      <div className="info">
        <h4>{item.title}</h4>
        <p className="by">{item.by}</p>
        {item.connection && <span className="conn">{item.connection}</span>}
      </div>
    </>
  )
  // La receta recién guardada es interactiva (abre el detalle); las demás, no.
  return onClick ? (
    <button className="rcard new" onClick={onClick}>
      {inner}
    </button>
  ) : (
    <div className="rcard">{inner}</div>
  )
}

/** Pantalla 4: el muro familiar con la receta recién guardada anclada arriba. */
export function WallScreen({ active, onBack, onOpenDetail, onInvite }: Props) {
  return (
    <section className={'screen' + (active ? ' active' : '')} id="s-wall">
      <div className="topbar">
        <button className="back" onClick={onBack} aria-label="Volver">
          <BackIcon />
        </button>
        <div className="grow" />
        <div className="dots">
          <i />
          <i />
          <i className="on" />
        </div>
      </div>
      <div className="screen-body">
        <div className="wall-head">
          <div className="fam">
            <div className="avatars">
              <span style={{ background: '#c0442b' }}>R</span>
              <span style={{ background: '#5e7050' }}>M</span>
              <span style={{ background: '#e4a32c' }}>J</span>
              <span style={{ background: '#8a5a3c' }}>+</span>
            </div>
            <div>
              <h2>El muro de los García</h2>
              <p>13 recetas · 5 personas cocinando la memoria</p>
            </div>
          </div>
        </div>
        <div className="feed">
          {WALL_ITEMS.map((item) =>
            item.isNew ? (
              <Fragment key={item.id}>
                <span className="pill-new">Recién guardada</span>
                <Card item={item} onClick={onOpenDetail} />
              </Fragment>
            ) : (
              <Card key={item.id} item={item} />
            ),
          )}
        </div>
      </div>
      <div className="foot">
        <button className="btn ghost" onClick={onInvite}>
          Invitar a la familia a grabar
        </button>
      </div>
    </section>
  )
}
