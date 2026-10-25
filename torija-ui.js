/* Capa de presentación accesible. No cambia datos ni motor de simulación. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const syncThemeLabel = () => {
    const text = root.dataset.theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    themeButton.setAttribute('aria-label', text);
    themeButton.setAttribute('title', text);
  };
  syncThemeLabel();
  new MutationObserver(syncThemeLabel).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  const compact = matchMedia('(max-width: 640px)');
  const legend = document.getElementById('legend');
  const legendToggle = document.getElementById('legend-toggle');
  const syncLegend = () => {
    legend.classList.toggle('expanded', !compact.matches);
    legendToggle.setAttribute('aria-expanded', String(!compact.matches));
  };
  compact.addEventListener('change', syncLegend);
  syncLegend();

  const syncPressed = button => button.setAttribute('aria-pressed',
    String(button.classList.contains('active') || button.classList.contains('active-chapter')));
  const filterObserver = new MutationObserver(records => records.forEach(record => {
    if (record.target.matches('.chip, .chapter-chip')) syncPressed(record.target);
  }));
  ['group-filters', 'type-filters', 'chapter-strip'].forEach(id => {
    const container = document.getElementById(id);
    container.querySelectorAll('button').forEach(syncPressed);
    filterObserver.observe(container, { attributes:true, attributeFilter:['class'], subtree:true });
  });

  const activateWithKeyboard = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.dispatchEvent(new MouseEvent('click', { bubbles: true, view: window }));
    }
  };
  document.querySelectorAll('.node').forEach(node => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', `Ver ficha de ${node.querySelector('.node-label')?.textContent || 'personaje'}`);
    node.addEventListener('keydown', activateWithKeyboard);
  });
  const connections = document.getElementById('detail-connections');
  const adaptConnections = () => connections.querySelectorAll('li:not([tabindex])').forEach(li => {
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'button');
    li.setAttribute('aria-label', `Ver ficha de ${li.querySelector('.conn-name')?.textContent || 'personaje relacionado'}`);
    li.addEventListener('keydown', activateWithKeyboard);
  });
  new MutationObserver(adaptConnections).observe(connections, { childList: true });
  adaptConnections();

  /* Conservar la categoría de color, eligiendo texto claro u oscuro legible. */
  const kicker = document.getElementById('detail-kicker');
  const luminance = c => {
    const v = c.map(x => x / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
    return .2126 * v[0] + .7152 * v[1] + .0722 * v[2];
  };
  const fixKickerContrast = () => {
    const rgb = getComputedStyle(kicker).backgroundColor.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);
    if (!rgb || rgb.length !== 3) return;
    const bg = luminance(rgb), dark = luminance([41, 44, 35]), light = luminance([251, 250, 245]);
    const darkRatio = (bg + .05) / (dark + .05), lightRatio = (light + .05) / (bg + .05);
    let color = darkRatio >= lightRatio ? '#292c23' : '#fbfaf5';
    if (Math.max(darkRatio, lightRatio) < 4.5) color = (bg + .05) / .05 >= 1.05 / (bg + .05) ? '#000000' : '#ffffff';
    if (kicker.dataset.contrastColor !== color) {
      kicker.dataset.contrastColor = color;
      kicker.style.color = color;
    }
  };
  new MutationObserver(fixKickerContrast).observe(kicker, { attributes: true, attributeFilter: ['style'] });
})();
