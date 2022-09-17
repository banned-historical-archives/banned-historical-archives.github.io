import fitz
import sys

pdf_path = sys.argv[1]
page = sys.argv[2]
dpi = sys.argv[3]
output = sys.argv[4]

doc = fitz.open(pdf_path)
page = doc.load_page(int(page))
pix = page.get_pixmap(dpi = int(dpi))
pix.save(output)