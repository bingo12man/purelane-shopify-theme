import base64
import re
from pathlib import Path

html_path = Path("reference/purelane-homepage.html")
output_dir = Path("reference/product-svg")

output_dir.mkdir(parents=True, exist_ok=True)

html = html_path.read_text(encoding="utf-8")

pattern = re.compile(
    r'--p-([a-z0-9]+):url\("data:image/svg\+xml;base64,([^"]+)"\);'
)

matches = pattern.findall(html)

if not matches:
    raise RuntimeError("No embedded Purelane product assets were found.")

for name, encoded in matches:
    svg_bytes = base64.b64decode(encoded)

    output_file = output_dir / f"{name}.svg"
    output_file.write_bytes(svg_bytes)

    print(f"Created {output_file}")

print(f"\nExtracted {len(matches)} product assets.")

