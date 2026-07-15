/** Las cuatro pantallas del flujo guiado. El detalle de receta es un overlay aparte. */
export type Screen = 'welcome' | 'record' | 'ai' | 'wall'

/** Una receta ya estructurada por la IA. */
export interface Recipe {
  title: string
  servings: string
  time: string
  difficulty: string
  ingredients: string[]
  steps: string[]
}

/** Una tarjeta del muro familiar. */
export interface WallItem {
  id: string
  emoji: string
  /** Fondo del thumbnail (valor CSS de background). */
  thumb: string
  title: string
  by: string
  /** Nota de conexión con otras recetas del muro. */
  connection?: string
  isNew?: boolean
}
