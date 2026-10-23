import hashlib
from pathlib import Path
import re
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]


class TorijaTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        subprocess.run([sys.executable, str(ROOT / "scripts/preparar_web.py")], check=True, capture_output=True)

    def test_contenido_motor_y_paleta_originales_intactos(self):
        for line in (ROOT / "tests/baseline-sha256.txt").read_text().splitlines():
            digest, name = line.split()
            self.assertEqual(hashlib.sha256((ROOT / name).read_bytes()).hexdigest(), digest, name)

    def test_mapa_coherente(self):
        subprocess.run(["node", str(ROOT / "comprobar_mapa.js")], check=True, capture_output=True)

    def test_torija_y_dependencia_fijada(self):
        html = (ROOT / "index.html").read_text()
        self.assertIn('<body class="torija">', html)
        self.assertIn('class="torija-brand">Torija<', html)
        self.assertIn("Versión 1.2.0", html)
        self.assertIn('aria-label="Buscar un personaje o un lugar"', html)
        self.assertIn('class="map-intro"', html)
        self.assertIn('d3@7.9.0/dist/d3.min.js" integrity="sha384-', html)
        self.assertNotIn("fontshare.com", html)
        self.assertNotIn("fonts.googleapis.com", html)
        sheets = re.findall(r'<link rel="stylesheet" href="([^"]+)"', html)
        self.assertEqual(sheets[:3], ["styles/torija-fonts.css", "styles/torija-tokens.css", "styles/torija-components.css"])
        for path in sheets:
            self.assertTrue((ROOT / path).is_file())

    def test_fuentes_locales(self):
        fonts = list((ROOT / "styles/fonts").glob("*.woff2"))
        self.assertEqual(len(fonts), 6)
        for font in fonts:
            self.assertEqual(font.read_bytes()[:4], b"wOF2")

    def test_runtime_sin_documentacion(self):
        files = [p for p in (ROOT / "dist/public").rglob("*") if p.is_file()]
        self.assertEqual(len(files), 15)
        for file in files:
            self.assertIn(file.suffix, (".html", ".css", ".js", ".woff2"))
            relative = file.relative_to(ROOT / "dist/public")
            self.assertEqual(file.read_bytes(), (ROOT / relative).read_bytes())

    def test_presentacion_compartida_sin_html_dinamico(self):
        ui = (ROOT / "torija-ui.js").read_text()
        self.assertNotIn("innerHTML", ui)
        self.assertNotIn("eval(", ui)
        self.assertNotIn("fetch(", ui)
        self.assertIn("aria-label", ui)
        self.assertIn("keydown", ui)


if __name__ == "__main__":
    unittest.main()
