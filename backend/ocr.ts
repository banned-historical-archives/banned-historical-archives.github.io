import { exec, execSync } from 'node:child_process'
import { join } from 'node:path';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { OCRResult } from '../types';
import { sleep } from '../utils';

/**
 * db shufflenet v2 py
 * ppocr v3
 */
export default async function ocr({
  img,
  rec_model = 'ch_ppocr_mobile_v2.0',
  rec_backend = 'onnx',
  det_model = 'ch_PP-OCRv3_det',
  det_backend = 'onnx',
  resized_shape = 1496,
  box_score_thresh = 0.3,
  min_box_size = 10,
  cache = true,
}: {
  box_score_thresh?: number;
  min_box_size?: number;
  resized_shape?: number;
  rec_model?: string;
  rec_backend?: string;
  det_model?: string;
  det_backend?: string;
  img: string;
  cache?: boolean;
}): Promise<OCRResult[]> {
  const cache_path = join(
    process.cwd().replace(/\\/g, '/'),
    `backend/ocr_cache/${img.split('/').join('.')}.json`,
  );
  if (cache && existsSync(cache_path)) {
    return JSON.parse(readFileSync(cache_path).toString());
  }
  const abs_img_path = join(process.cwd().replace(/\\/g, '/'), `public/books/${img}`);
  const ocr_command = `python3 backend/ocr.py ${abs_img_path} ${rec_model} ${rec_backend} ${det_model} ${det_backend} ${resized_shape} ${box_score_thresh} ${min_box_size}`;
  const raw = execSync(ocr_command).toString();

  const candidates: string[] = raw.split('\n');
  const t = JSON.parse(
    candidates[candidates.length - 2].replace(/"score": NaN\,/g, '"score": 0,'),
  );
  const res: OCRResult[] = t.map((i: any) => ({
    text: i.text,
    box: i.position,
  }));

  writeFileSync(cache_path, JSON.stringify(res));
  return res;
}