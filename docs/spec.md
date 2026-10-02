# Especificación — mapa-lunes-matcha

## Objetivo

Mostrar un mapa interactivo de las relaciones entre los personajes de «Mis lunes con aroma a matcha», de Michiko Aoyama, organizado por capítulos.

## Usuarios y uso

- Un lector de la novela, en el navegador del ordenador o del móvil.
- Se usa abriendo `index.html`, sin servidor ni dependencias.

## Funcionalidades

- [x] Grafo de personajes y relaciones.
- [x] Capítulos: Doce capítulos, uno por mes del año (por ejemplo, «El café de matcha del lunes», enero, Mutsuki). La paleta estacional es un recurso propio: la novela no asigna colores a los capítulos.
- [x] Lugares de la historia y leyenda de colores.
- [x] Paleta estacional para distinguir los doce meses.

## Fuera de alcance

- Edición de datos desde la interfaz: se editan en `data.js`.

## Datos

- `data.js` contiene `CONFIG` (textos de la página, lugares y colores de anillo, grupos, leyenda, icono y fuentes), `CHAPTERS`, `NODES` y `EDGES`. `comprobar_mapa.js` valida que las referencias sean coherentes. Las fuentes son reseñas públicas (booklog.jp, ameblo.jp, note.com, ddnavi.com y reseñas en inglés y español). No hay datos personales.

## Patrón

Mapa de relaciones de un libro (ver `catalogo-proyectos/componentes.md`), basado en la plantilla `catalogo-proyectos/plantillas/mapa-libro/`: `index.html` y `script.js` son los de la plantilla y no se tocan; lo propio de este libro está en `data.js` y la paleta en `style.css`.

## Criterios de aceptación

- Cada capítulo de la novela tiene su personaje y su color en el mapa.
- Los doce capítulos aparecen con su mes y su color.
