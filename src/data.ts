import type { Recipe, WallItem } from './types'

/** Lo que "dice" la abuela mientras se graba (se escribe en vivo en pantalla). */
export const ABUELA_SPEECH =
  'Mija, el sancocho primero pone la gallina con agua bien tapadita, después le echa la yuca y el plátano cuando ya estén blanditos, un poquito de cilantro al final que no se le olvide…'

/** La misma frase, mostrada como transcripción cruda antes de que la IA la ordene. */
export const ABUELA_SPEECH_FULL =
  '“…mija, el sancocho primero pone la gallina con agua bien tapadita, después le echa la yuca y el plátano cuando ya estén blanditos, un poquito de cilantro al final que no se le olvide, y se come bien caliente que si no, no sabe igual…”'

/** Pasos que "piensa" la IA mientras estructura la receta. */
export const AI_STEPS: string[] = [
  'Detectando el plato y las porciones',
  'Separando los ingredientes',
  'Ordenando los pasos y el tiempo',
]

/** La receta que la IA arma a partir de la voz. */
export const SANCOCHO: Recipe = {
  title: 'Sancocho de gallina de la abuela Rosa',
  servings: '6',
  time: '1 h 40',
  difficulty: 'Fácil',
  ingredients: [
    '1 gallina en presas',
    '2 L de agua',
    'Yuca',
    'Plátano verde',
    'Mazorca',
    'Cilantro',
    'Cebolla y ajo',
    'Sal al gusto',
  ],
  steps: [
    'Pon la gallina con el agua bien tapada y deja hervir a fuego medio.',
    'Cuando ablande, agrega la yuca, el plátano y la mazorca.',
    'Cocina hasta que todo esté blandito.',
    'Echa el cilantro al final para que no se pase.',
    'Sirve bien caliente — “que si no, no sabe igual”.',
  ],
}

/** Recetas del muro familiar. La primera es la recién guardada. */
export const WALL_ITEMS: WallItem[] = [
  {
    id: 'sancocho',
    emoji: '🍲',
    thumb: 'radial-gradient(#ffe6b3,#f2c777)',
    title: 'Sancocho de gallina de la abuela Rosa',
    by: 'por la abuela Rosa · grabada por ti hoy',
    connection: 'se parece a tu “Ajiaco de la tía Marta”',
    isNew: true,
  },
  {
    id: 'arepas',
    emoji: '🫓',
    thumb: 'radial-gradient(#ffd9cf,#e79a86)',
    title: 'Arepas de la abuela Rosa',
    by: 'por la abuela Rosa · grabada por Mamá',
    connection: 'base de 3 recetas más',
  },
  {
    id: 'ajiaco',
    emoji: '🥘',
    thumb: 'radial-gradient(#d8e6c2,#a7c17e)',
    title: 'Ajiaco de la tía Marta',
    by: 'por la tía Marta · grabada por Juan',
    connection: 'mismo secreto: cilantro al final',
  },
  {
    id: 'natilla',
    emoji: '🍮',
    thumb: 'radial-gradient(#f3d1e0,#d68fb0)',
    title: 'Natilla de diciembre',
    by: 'por la abuela Rosa · grabada por Mamá',
  },
]
