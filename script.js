/* ============================================================
   Mapa de relaciones — interacción (D3 force graph)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Theme toggle ---------- */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  const sunIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moonIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function paintToggle() { themeBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon; }
  paintToggle();
  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    paintToggle();
    updateRingColors();
  });

  function ringColors() {
    return theme === 'dark'
      ? { tokio: '#8fc26a', kioto: '#7ea3c4', sidney: '#5cc0af', text: '#eef1e0', faint: '#7c8768' }
      : { tokio: '#4a6b2f', kioto: '#35506a', sidney: '#1c7d70', text: '#232a1c', faint: '#94957a' };
  }

  /* ---------- Data prep ---------- */
  const nodeById = new Map();
  const nodes = NODES.map((n) => ({ ...n }));
  nodes.forEach((n) => nodeById.set(n.id, n));

  const links = EDGES.map((e) => ({ ...e }));

  const degree = new Map();
  links.forEach((l) => {
    degree.set(l.source, (degree.get(l.source) || 0) + 1);
    degree.set(l.target, (degree.get(l.target) || 0) + 1);
  });

  const GROUP_LABEL = {
    cafe: 'Círculo del café', tokio: 'Red de Tokio', kioto: 'Red de Kioto',
    puente: 'Puente Tokio–Kioto', retorno: 'Recurrente / Sídney', lugar: 'Lugar',
  };
  const GROUP_COLOR = {
    cafe: '#4a6b2f', tokio: '#8a6b3f', kioto: '#35506a', puente: '#9c5b3f', retorno: '#1c7d70', lugar: '#6f5f49',
  };

  function nodeRadius(n) {
    if (n.type === 'place') return 26;
    const base = 13;
    const boost = n.id === 'maestro' || n.id === 'miho' || n.id === 'kippei' ? 8 : 0;
    return base + Math.min(degree.get(n.id) || 0, 6) * 1.6 + boost;
  }

  /* ---------- SVG setup ---------- */
  const stage = document.getElementById('graph-stage');
  const svg = d3.select('#graph-svg');
  const defs = svg.append('defs');

  const zoomLayer = svg.append('g').attr('class', 'zoom-layer');
  const linkLayer = zoomLayer.append('g').attr('class', 'link-layer');
  const nodeLayer = zoomLayer.append('g').attr('class', 'node-layer');

  let width = stage.clientWidth, height = stage.clientHeight;

  const zoom = d3.zoom()
    .scaleExtent([0.35, 3])
    .on('zoom', (event) => zoomLayer.attr('transform', event.transform));
  svg.call(zoom);

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    svg.attr('viewBox', [0, 0, width, height]);
    simulation.force('center', d3.forceCenter(width / 2, height / 2));
    simulation.alpha(0.3).restart();
  }
  window.addEventListener('resize', resize);

  /* ---------- Simulation ---------- */
  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id((d) => d.id).distance((l) => (l.type === 'implicit' ? 160 : 120)).strength(0.5))
    .force('charge', d3.forceManyBody().strength(-340))
    .force('center', d3.forceCenter(0, 0))
    .force('collide', d3.forceCollide((d) => nodeRadius(d) + 26))
    .force('x', d3.forceX().strength(0.025))
    .force('y', d3.forceY().strength(0.025));

  /* ---------- Links ---------- */
  const linkSel = linkLayer.selectAll('line')
    .data(links)
    .join('line')
    .attr('class', (d) => 'link ' + d.type)
    .attr('stroke-width', (d) => (d.type === 'explicit' ? 1.6 : 1.3));

  /* ---------- Nodes ---------- */
  const rc = ringColors();

  const nodeSel = nodeLayer.selectAll('g.node')
    .data(nodes)
    .join('g')
    .attr('class', 'node')
    .style('cursor', 'pointer')
    .call(
      d3.drag()
        .on('start', dragStart)
        .on('drag', dragged)
        .on('end', dragEnd)
    )
    .on('click', (event, d) => { event.stopPropagation(); selectNode(d.id); })
    .on('mouseenter', (event, d) => hoverNode(d.id, true))
    .on('mouseleave', (event, d) => hoverNode(d.id, false));

  nodeSel.each(function (d) {
    const g = d3.select(this);
    const r = nodeRadius(d);
    const ring = d.place === 'ambos' ? 'url(#grad-ambos)' : d.place === 'sidney' ? rc.sidney : d.place === 'kioto' ? rc.kioto : rc.tokio;

    if (d.type === 'place') {
      g.append('rect')
        .attr('class', 'place-shape')
        .attr('width', r * 1.35).attr('height', r * 1.35)
        .attr('x', -r * 0.675).attr('y', -r * 0.675)
        .attr('rx', 6)
        .attr('transform', 'rotate(45)')
        .attr('fill', d.color)
        .attr('stroke', ring)
        .attr('stroke-width', 3);
    } else {
      g.append('circle')
        .attr('r', r)
        .attr('fill', d.color)
        .attr('stroke', ring)
        .attr('stroke-width', 3);
    }

    g.append('text')
      .attr('class', 'node-label')
      .attr('y', r + 13)
      .attr('text-anchor', 'middle')
      .text(d.label || (d.name.length > 20 ? d.name.split(' (')[0] : d.name));
  });

  function refreshGradient() {
    defs.selectAll('#grad-ambos').remove();
    const g = defs.append('linearGradient').attr('id', 'grad-ambos').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '100%');
    const c = ringColors();
    g.append('stop').attr('offset', '0%').attr('stop-color', c.tokio);
    g.append('stop').attr('offset', '50%').attr('stop-color', c.tokio);
    g.append('stop').attr('offset', '50%').attr('stop-color', c.kioto);
    g.append('stop').attr('offset', '100%').attr('stop-color', c.kioto);
  }
  refreshGradient();

  function updateRingColors() {
    const c = ringColors();
    refreshGradient();
    nodeSel.each(function (d) {
      const ring = d.place === 'ambos' ? 'url(#grad-ambos)' : d.place === 'sidney' ? c.sidney : d.place === 'kioto' ? c.kioto : c.tokio;
      d3.select(this).select('circle, rect').attr('stroke', ring);
    });
  }

  simulation.on('tick', () => {
    linkSel
      .attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y);
    nodeSel.attr('transform', (d) => `translate(${d.x},${d.y})`);
  });

  function dragStart(event, d) { if (!event.active) simulation.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function dragEnd(event, d) { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }

  svg.on('click', () => clearSelection());

  /* ---------- Neighbourhood helpers ---------- */
  function neighboursOf(id) {
    const set = new Set([id]);
    links.forEach((l) => {
      const s = l.source.id || l.source, t = l.target.id || l.target;
      if (s === id) set.add(t);
      if (t === id) set.add(s);
    });
    return set;
  }

  function hoverNode(id, on) {
    if (activeId) return; // selection takes priority
    if (!on) { paintDim(null); return; }
    paintDim(neighboursOf(id));
  }

  function paintDim(activeSet) {
    nodeSel.classed('node-dimmed', (d) => activeSet && !activeSet.has(d.id));
    linkSel.classed('dimmed', (d) => {
      if (!activeSet) return false;
      const s = d.source.id || d.source, t = d.target.id || d.target;
      return !(activeSet.has(s) && activeSet.has(t));
    });
  }

  /* ---------- Selection & detail panel ---------- */
  let activeId = null;
  const detailEmpty = document.getElementById('detail-empty');
  const detailContent = document.getElementById('detail-content');
  const detailKicker = document.getElementById('detail-kicker');
  const detailName = document.getElementById('detail-name');
  const detailRole = document.getElementById('detail-role');
  const detailBio = document.getElementById('detail-bio');
  const detailCount = document.getElementById('detail-count');
  const detailConnections = document.getElementById('detail-connections');
  document.getElementById('close-detail').addEventListener('click', clearSelection);

  /* ---------- Legend collapse (mobile) ---------- */
  const legendEl = document.getElementById('legend');
  const legendToggle = document.getElementById('legend-toggle');
  legendToggle.addEventListener('click', () => {
    const expanded = legendEl.classList.toggle('expanded');
    legendToggle.setAttribute('aria-expanded', String(expanded));
  });

  function selectNode(id) {
    const d = nodeById.get(id);
    if (!d) return;
    activeId = id;
    paintDim(neighboursOf(id));

    detailEmpty.hidden = true;
    detailContent.hidden = false;

    const groupColor = GROUP_COLOR[d.group] || '#4a6b2f';
    detailKicker.textContent = GROUP_LABEL[d.group] || '';
    detailKicker.style.background = groupColor;
    detailName.textContent = d.name;

    let roleLine = d.role || '';
    detailRole.textContent = roleLine;
    detailBio.textContent = d.bio || '';

    const conns = links.filter((l) => (l.source.id || l.source) === id || (l.target.id || l.target) === id);
    detailCount.textContent = conns.length;
    detailConnections.innerHTML = '';
    conns.forEach((l) => {
      const sId = l.source.id || l.source, tId = l.target.id || l.target;
      const otherId = sId === id ? tId : sId;
      const other = nodeById.get(otherId);
      if (!other) return;
      const li = document.createElement('li');
      li.style.borderLeftColor = other.color;
      li.innerHTML = `<span class="conn-name">${other.name}</span><span class="conn-label">${l.label}</span><span class="conn-tag">${l.type === 'explicit' ? 'Explícito' : 'Implícito'} · ${l.chapter || ''}</span>`;
      li.addEventListener('click', (e) => { e.stopPropagation(); selectNode(otherId); centerOn(otherId); });
      detailConnections.appendChild(li);
    });

    updateChapterStripActive();
    centerOn(id);
  }

  function clearSelection() {
    activeId = null;
    paintDim(null);
    detailEmpty.hidden = false;
    detailContent.hidden = true;
    updateChapterStripActive();
  }

  function centerOn(id) {
    const d = nodeById.get(id);
    if (!d || d.x == null) return;
    const t = d3.zoomTransform(svg.node());
    const scale = Math.max(t.k, 1.05);
    const tx = width / 2 - d.x * scale;
    const ty = height / 2 - d.y * scale;
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
  }

  /* ---------- Chapter strip ---------- */
  const stripEl = document.getElementById('chapter-strip');
  CHAPTERS.forEach((ch) => {
    const btn = document.createElement('button');
    btn.className = 'chapter-chip';
    btn.dataset.char = ch.charId;
    btn.innerHTML = `
      <span class="chip-swatch" style="background:${ch.color}"></span>
      <span class="chip-num">Cap. ${ch.n} · ${ch.month}</span>
      <span class="chip-title">${ch.title}</span>
      <span class="chip-place">${ch.place === 'tokio' ? 'Tokio' : 'Kioto'}</span>
    `;
    btn.addEventListener('click', () => selectNode(ch.charId));
    stripEl.appendChild(btn);
  });
  function updateChapterStripActive() {
    stripEl.querySelectorAll('.chapter-chip').forEach((b) => {
      b.classList.toggle('active-chapter', activeId && b.dataset.char === activeId);
    });
  }

  /* ---------- Filters ---------- */
  let currentGroup = 'all';
  let currentLinkType = 'all';

  document.getElementById('group-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    currentGroup = btn.dataset.group;
    document.querySelectorAll('#group-filters .chip').forEach((c) => c.classList.toggle('active', c === btn));
    applyFilters();
  });

  document.getElementById('type-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    currentLinkType = btn.dataset.linktype;
    document.querySelectorAll('#type-filters .chip').forEach((c) => c.classList.toggle('active', c === btn));
    applyFilters();
  });

  function applyFilters() {
    const groupVisible = (d) => currentGroup === 'all' || d.group === currentGroup || d.type === 'place';

    nodeSel.style('display', (d) => (groupVisible(d) ? null : 'none'));
    linkSel.style('display', (d) => {
      const s = nodeById.get(d.source.id || d.source), t = nodeById.get(d.target.id || d.target);
      if (!groupVisible(s) || !groupVisible(t)) return 'none';
      if (currentLinkType !== 'all' && d.type !== currentLinkType) return 'none';
      return null;
    });
  }

  document.getElementById('reset-view').addEventListener('click', () => {
    currentGroup = 'all'; currentLinkType = 'all';
    document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
    document.querySelector('[data-group="all"]').classList.add('active');
    document.querySelector('[data-linktype="all"]').classList.add('active');
    document.getElementById('search').value = '';
    applyFilters();
    clearSelection();
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  });

  /* ---------- Search ---------- */
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { paintDim(activeId ? neighboursOf(activeId) : null); return; }
    const matches = nodes.filter((n) => n.name.toLowerCase().includes(q));
    if (matches.length) {
      const ids = new Set(matches.map((m) => m.id));
      paintDim(ids);
      if (matches.length === 1) {
        activeId = null;
        selectNode(matches[0].id);
      }
    } else {
      paintDim(new Set());
    }
  });

  /* ---------- Init ---------- */
  setTimeout(resize, 50);
  applyFilters();
})();
