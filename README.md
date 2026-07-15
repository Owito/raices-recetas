# 🌿 Raíces

**Guarda las recetas de tu familia con su propia voz.**

Prototipo navegable creado para el **Proyecto 5 de The Vibecoders League** (Platzi).
En vivo: **https://raices-prototipo.vercel.app**

---

## La idea

Las recetas de las abuelas no están escritas en ningún lado: viven en su memoria y en su voz.
Cuando ellas ya no están, esas recetas se van con ellas. **Raíces** las captura mientras cocinan,
usa IA para convertir lo que dicen en una receta ordenada, y las guarda en un muro compartido
por toda la familia.

- **Problema que resuelve:** la memoria culinaria de una familia se pierde porque nadie la escribió a tiempo.
- **Para quién es:** familias que cocinan de memoria y quieren heredar sus sabores, no perderlos.
- **A quién se le presenta:** a un equipo de producto que invierte en apps de comunidad y memoria familiar.

## Qué muestra el prototipo

Es un **prototipo navegable, sin backend ni datos reales** — el objetivo es comunicar la idea,
no operarla. El flujo tiene cinco pasos conectados y recorribles:

1. **Bienvenida** — presenta la idea y el problema.
2. **Grabar** — micrófono con cronómetro, onda de audio y transcripción que se escribe en vivo.
3. **La IA ordena** — la transcripción cruda se convierte, paso a paso, en una receta estructurada.
4. **Muro familiar** — la receta recién guardada queda anclada junto a las demás, con las conexiones entre ellas.
5. **Detalle** — la receta completa con un reproductor de "la voz original".

El panel de la izquierda (fuera del teléfono) es el *pitch*: el contexto que se enviaría antes de una reunión.

## Diseño

Paleta "cajón de especias" — achiote, azafrán y hierba sobre papel de receta — con una tipografía
serif de recetario dentro de una interfaz moderna. Mobile-first y con soporte para
`prefers-reduced-motion`.

## Stack

- **React 19** + **TypeScript** (modo estricto)
- **Vite** para el desarrollo y el empaquetado
- Sin dependencias de UI ni backend: todo el estado vive en el cliente

## Cómo correrlo

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # verifica tipos (tsc) y genera la build de producción en dist/
npm run preview   # sirve la build de producción localmente
```

## Estructura

```
src/
  main.tsx            Punto de entrada
  App.tsx             Orquesta las pantallas y el estado global (pantalla activa, toast, detalle)
  types.ts            Tipos del dominio (Screen, Recipe, WallItem)
  data.ts             Contenido: la voz de la abuela, la receta y el muro
  styles.css          Sistema de diseño y estilos
  components/
    Pitch.tsx         Panel de contexto (el pitch)
    Sprig.tsx         Marca de Raíces
    icons.tsx         Íconos SVG
  screens/
    WelcomeScreen.tsx Pantalla 1
    RecordScreen.tsx  Pantalla 2 (grabación simulada)
    AiScreen.tsx      Pantalla 3 (la IA estructura la receta)
    WallScreen.tsx    Pantalla 4 (muro familiar)
    RecipeDetail.tsx  Overlay de detalle
```

## Licencia

MIT.
