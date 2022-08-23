import { OCRResult } from "../../types";
import type { Item, ContentObj } from './pdf.js';

export function merge_to_lines(ocrResults: OCRResult[], threshold = 50) {
  const next = new Map<OCRResult, OCRResult>();
  const to_remove = new Map<OCRResult, boolean>();
  for (const a of ocrResults) {
    for (const b of ocrResults) {
      if (a == b) continue;
      if (next.get(a)) {
        continue;
      }
      const x_diff = Math.abs(b.box[0][0] - a.box[1][0]);
      const y_diff = Math.abs(b.box[0][1] - a.box[1][1]);
      if (x_diff + y_diff < threshold && !next.get(b)) {
        next.set(a, b);
        to_remove.set(b, true);
      }
    }
  }
  const lines: OCRResult[] = ocrResults
    .filter((i) => !to_remove.get(i))
    .map((i) => {
      let j = next.get(i);
      const r = i;
      while (j) {
        r.text += j.text;
        j = next.get(j);
      }
      return r;
    })
    .sort((a, b) => a.box[0][1] - b.box[0][1]);
  return lines;
}

export function pdfjsContentToOCRResult(obj: ContentObj, height: number):OCRResult[] {
  return obj.items
    .map((i) => {
      const x = i.transform[4];
      const y = height - i.transform[5];
      const r: OCRResult = {
        text: i.str,
        box: [
          [x, y],
          [x + i.width, y],
          [x + i.width, y + i.height],
          [x, y + i.height],
        ],
      };
      return r;
    })
    .filter((i) => i.text.length);
}