# mapa-lunes-matcha

Mapa de relaciones de Mis lunes con aroma a matcha (Michiko Aoyama)

- Plantilla: `catalogo-proyectos/plantillas/mapa-libro/` (para cambiar el contenido, edita solo `data.js`)
- Comprobar los datos: `node comprobar_mapa.js`
- Reglas para agentes: `AGENTS.md`
- Especificación: `docs/spec.md`

## Vista previa Torija v1.2.0

Diseño Torija 1.0.0: cabecera carbón, controles lima, marfil y fuentes Cabinet Grotesk/Satoshi locales. Los colores estacionales, las ciudades y el modo oscuro preexistente se conservan. La introducción es desplegable y la leyenda está debajo del lienzo para no tapar nodos.

`data.js`, `script.js` y `style.css` permanecen intactos. El marco y los ajustes de accesibilidad se comparten con Café Tokio mediante `styles/mapa-torija.css` y `torija-ui.js`; la plantilla general del catálogo no se modifica.

- Abrir `index.html` o servir el directorio con un servidor estático.
- Preparar: `python3 scripts/preparar_web.py` (solo runtime en `dist/public/`).
- Pruebas: `python3 -m unittest discover -s tests` y `node comprobar_mapa.js`.
- D3 7.9.0 desde jsDelivr con integridad SRI; las fuentes no realizan conexiones externas.
- Web vigente: https://mapa-lunes-matcha.pplx.app/ . Publicación e integración en main pendientes de aprobación.
