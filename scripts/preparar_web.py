#!/usr/bin/env python3
"""Empaqueta únicamente los recursos web; no publica documentación."""
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
dest = root / "dist" / "public"
sources = [root / name for name in ("index.html", "style.css", "data.js", "script.js", "torija-ui.js")]
sources += [p for p in (root / "styles").rglob("*") if p.is_file()]
allowed = set()
for source in sources:
    if source.suffix not in (".html", ".css", ".js", ".woff2"):
        raise SystemExit(f"Recurso inesperado: {source}")
    relative = source.relative_to(root)
    target = dest / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)
    allowed.add(relative)
unexpected = {p.relative_to(dest) for p in dest.rglob("*") if p.is_file()} - allowed
if unexpected:
    raise SystemExit(f"Archivos ajenos al runtime: {unexpected}")
print(f"Web preparada: {dest} ({len(allowed)} recursos)")
