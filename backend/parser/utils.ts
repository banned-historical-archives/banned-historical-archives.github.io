import { OCRResult } from "../../types";

export function merge_to_lines(ocrResults: OCRResult[], threshold = 50) {
  const next = new Map<OCRResult, OCRResult>();
  const to_remove = new Map<OCRResult, boolean>();
  for (const a of ocrResults) {
    for (const b of ocrResults) {
      if (a == b) continue;
      if (next.get(a)) {
        continue;
      }
      const x_diff = Math.abs(b.box[0][0] - a.box[1][0])
      const y_diff = Math.abs(b.box[0][1] - a.box[1][1])
      if (x_diff+y_diff < threshold) {
        next.set(a, b);
        to_remove.set(b, true);
      }
    }
  }
  const lines:OCRResult[] = ocrResults.filter(i => !to_remove.get(i)).map(i => {
    let j = next.get(i);
    const r = i;
    while (j) {
      r.text += j.text;
      j = next.get(j);
    }
    return r;
  });
  return lines;
}
