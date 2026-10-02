#!/usr/bin/env node
// Comprueba que data.js es coherente: ids únicos y referencias que existen.
// Uso: node comprobar_mapa.js   (sale con código 1 si hay errores)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8') +
  '\n;globalThis.__d = { CONFIG, CHAPTERS, NODES, EDGES };', ctx);
const { CONFIG, CHAPTERS, NODES, EDGES } = ctx.__d;

const errores = [];
const ids = new Set();
const lugares = new Set(Object.keys(CONFIG.lugares || {}));
const grupos = new Set([...Object.keys(CONFIG.grupos || {}), 'lugar']);

for (const k of ['libro', 'autor']) if (!CONFIG[k]) errores.push(`CONFIG.${k} vacío`);
if (!lugares.size) errores.push('CONFIG.lugares no tiene ningún lugar');
for (const a of CONFIG.ambos || []) if (!lugares.has(a)) errores.push(`CONFIG.ambos usa un lugar inexistente: ${a}`);
for (const n of NODES) {
  if (!n.id) { errores.push(`Nodo sin id: ${n.name}`); continue; }
  if (ids.has(n.id)) errores.push(`id repetido: ${n.id}`);
  ids.add(n.id);
  if (!n.name) errores.push(`Nodo ${n.id} sin name`);
  if (n.place !== 'ambos' && !lugares.has(n.place)) errores.push(`Nodo ${n.id}: place "${n.place}" no está en CONFIG.lugares`);
  if (!grupos.has(n.group)) errores.push(`Nodo ${n.id}: group "${n.group}" no está en CONFIG.grupos`);
}
for (const d of CONFIG.destacados || []) if (!ids.has(d)) errores.push(`CONFIG.destacados: no existe ${d}`);
EDGES.forEach((e, i) => {
  for (const k of ['source', 'target']) if (!ids.has(e[k])) errores.push(`Vínculo ${i + 1}: ${k} "${e[k]}" no existe`);
  if (!['explicit', 'implicit'].includes(e.type)) errores.push(`Vínculo ${i + 1}: type debe ser explicit o implicit`);
});
CHAPTERS.forEach((c) => {
  if (!ids.has(c.charId)) errores.push(`Capítulo ${c.n}: charId "${c.charId}" no existe`);
  if (!lugares.has(c.place)) errores.push(`Capítulo ${c.n}: place "${c.place}" no está en CONFIG.lugares`);
});

console.log(`Mapa: ${NODES.length} nodos, ${EDGES.length} vínculos, ${CHAPTERS.length} capítulos`);
errores.forEach((e) => console.log('ERROR', e));
console.log(errores.length ? `${errores.length} errores` : 'OK');
process.exit(errores.length ? 1 : 0);
