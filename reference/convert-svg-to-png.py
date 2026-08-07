from pathlib import Path
import cairosvg

source_dir = Path("reference/product-svg")
output_dir = Path("reference/product-png")

output_dir.mkdir(parents=True, exist_ok=True)

for svg_file in source_dir.glob("*.svg"):
    output_file = output_dir / f"{svg_file.stem}.png"

    cairosvg.svg2png(
        url=str(svg_file),
        write_to=str(output_file),
        output_width=1000
    )

    print(f"Created: {output_file}")