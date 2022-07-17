import { exec, execSync } from 'node:child_process'
import { join } from 'node:path';
import { OCRResult } from '../types';

export default async function ocr(img: string): Promise<OCRResult[]> {
  const ocr_command = `docker run --rm --name dev -v $PWD/paddle:/paddle -t paddle-ocr-lac paddleocr --image_dir /paddle/temp/temp.png --lang ch --rec_model_dir /paddle/ch_PP-OCRv3_rec_infer --det_model_dir /paddle/ch_PP-OCRv3_det_infer --cls_model_dir /paddle/ch_ppocr_mobile_v2_cls_infer`;
  execSync(`cp ${img} ${join(__dirname, '../paddle/temp/temp.png')}`);
  const raw = execSync(ocr_command).toString();
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
  return res;
}