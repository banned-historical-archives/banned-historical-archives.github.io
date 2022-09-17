import { exec, execSync } from 'node:child_process'
import { join, isAbsolute, basename, dirname, extname } from 'node:path';
import fs from 'fs-extra';
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
  cache_path,
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
  cache_path?: string;
}): Promise<OCRResult[]> {
  cache_path = cache_path
    ? cache_path!
    : (join(
        process.cwd(),
        `backend/ocr_cache/${img.split('/')[0]}/${basename(img).replace(
          /[^\d]/g,
          '',
        )}.${extname(img).substring(1)}.json`,
      ) as string);
  if (cache && (await fs.pathExists(cache_path!))) {
    return JSON.parse((await fs.readFile(cache_path)).toString());
  }
  if (!(await fs.pathExists(dirname(cache_path)))) {
    await fs.ensureDir(dirname(cache_path));
  }
  const abs_img_path = isAbsolute(img)
    ? img
    : join(process.cwd(), `public/books/${img}`);
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

  await fs.writeFile(cache_path!, JSON.stringify(res));
  return res;
}