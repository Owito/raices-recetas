# 🌿 Raíces — Guarda las recetas de tu familia con su propia voz

Las recetas de las abuelas **no están escritas en ningún lado**: viven en su memoria y en su voz. Cuando ellas ya no están, esas recetas se van con ellas. **Raíces** las captura mientras cocinan, usa IA para convertir lo que dicen en una receta ordenada, y las guarda en un **muro compartido** por toda la familia.

## 🎯 Qué comunica y a quién
Es un **prototipo navegable** que le presentaría a un equipo de producto que invierte en apps de comunidad y memoria familiar.

- **Problema que resuelve:** la memoria culinaria de una familia se pierde porque nadie la escribió a tiempo.
- **Para quién es:** familias que cocinan de memoria y quieren heredar sus sabores.

## 🧭 El flujo (5 pantallas conectadas y recorribles)
1. **Bienvenida** — presenta la idea y el problema.
2. **Grabar** — micrófono con cronómetro, onda de audio y transcripción en vivo.
3. **La IA ordena** — la transcripción cruda se vuelve, paso a paso, una receta.
4. **Muro familiar** — la receta queda anclada junto a las demás, con sus conexiones.
5. **Detalle** — la receta completa y un reproductor de "la voz original".

## ⚙️ Cómo se hizo
- **React 19 + TypeScript** (modo estricto) con **Vite**.
- Flujo separado en **componentes tipados** por pantalla; dominio modelado con tipos (`Screen`, `Recipe`, `WallItem`) y contenido centralizado.
- **Mobile-first**, con soporte para `prefers-reduced-motion`.
- **Sin backend ni datos reales**: el objetivo es comunicar la idea, no operarla.
- Desplegado en **Vercel**.

## 🔗 Enlaces
- ▶️ **Pruébalo (link público):** https://raices-prototipo.vercel.app
- 💻 **Código:** https://github.com/Owito/raices-recetas

> Cualquiera puede probarlo y dejar su 👍 (no necesita suscripción). ¡Gracias! 🙌
