import { exec, execSync } from 'node:child_process'
import { join } from 'node:path';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { OCRResult } from '../types';
import { sleep } from '../utils';

export default async function ocr(img: string, cache = true): Promise<OCRResult[]> {
  const cache_path = join(process.cwd(), `backend/ocr_cache/${img.split('/').join('.')}.json`);
  if (cache && existsSync(cache_path)) {
    return JSON.parse(readFileSync(cache_path).toString());
  }
  const lockFileName = `lock.jpg`;
  const lockFilePath = join(process.cwd(), `./paddle/temp/${lockFileName}`);
  while (existsSync(lockFilePath)) {
    console.log('waiting');
    await sleep(5000);
  }
  const ocr_command = `docker run --rm --name dev -v $PWD/paddle:/paddle -t paddle-ocr-lac paddleocr --image_dir /paddle/temp/${lockFileName} --lang ch --rec_model_dir /paddle/ch_PP-OCRv3_rec_infer --det_model_dir /paddle/ch_PP-OCRv3_det_infer --cls_model_dir /paddle/ch_ppocr_mobile_v2_cls_infer`;
  execSync(`cp ${join(process.cwd(), `public/books/${img}`)} ${lockFilePath}`);
  const raw = execSync(ocr_command).toString();
  unlinkSync(lockFilePath);

  const candidates: string[] = raw.split('\n').filter(i => /^\[[1234567890\/\ :]+\] ppocr INFO: \[/.test(i))
  const res: OCRResult[] = [];
  candidates.forEach((i) => {
    const box_a = i.indexOf('[[') + 1;
    const text_a = i.indexOf("'") + 1;
    res.push({
      box: JSON.parse(i.substr(box_a, i.indexOf(', (') - box_a)),
      text: i.substr(text_a, i.lastIndexOf("'") - text_a),
    });
  });

  writeFileSync(cache_path, JSON.stringify(res));
  return res;
}