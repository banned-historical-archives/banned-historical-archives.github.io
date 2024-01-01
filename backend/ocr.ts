import { exec, execSync } from 'node:child_process';
import * as pdfjsLib from './parser/pdf.js';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import fs from 'fs-extra';
import {
  OCRParameter,
  OCRParameterAdvanced,
  OCRParameterLegacy,
  OCRResult,
} from '../types';
import { sleep } from '../utils';
import pdf2image from './pdf2image';
import { normalize } from './utils';
import sizeOf from 'image-size';
import { tmpdir } from 'node:os';
import { merge_to_lines, pdfjsContentToOCRResult } from './parser/utils';

export default async function ocr({
  img,
  cache = true,
  pdf,
  page,
  cache_path,
  params,
}: {
  cache?: boolean;
  cache_path?: string;
  img?: string;
  pdf?: string;
  page?: number; // start from 1
  params: Partial<OCRParameter & OCRParameterAdvanced>;
}): Promise<{
  ocr_results: OCRResult[];
  dimensions: { height: number; width: number };
}> {
  const target = pdf ? await pdf : img!;
  const abs_target_path = isAbsolute(target)
    ? target
    : join(normalize(__dirname), `../public/books/${target}`);

  const last_dirname = dirname(target).split('/').slice(-1);
  cache_path = cache_path
    ? cache_path!
    : (join(
        normalize(__dirname),
        `ocr_cache/${last_dirname}/${basename(target).replace(
          /[^\d]/g,
          '',
        )}.json`,
      ) as string);
  if (cache && (await fs.pathExists(cache_path!))) {
    return JSON.parse((await fs.readFile(cache_path)).toString());
  }
  if (!(await fs.pathExists(dirname(cache_path)))) {
    await fs.ensureDir(dirname(cache_path));
  }
  let res: {
    ocr_results: OCRResult[];
    dimensions: { height: number; width: number };
  };

  if (pdf && params.extract_text_from_pdf) {
    const doc = await pdfjsLib.getDocument({
      url: pdf,
      cMapPacked: true,
      cMapUrl: './node_modules/pdfjs-dist/cmaps/',
    }).promise;
    let content_obj = await (await doc.getPage(page!)).getTextContent();
    const viewport = (await doc.getPage(page!)).getViewport({ scale: 1 });
    res = {
      dimensions: { width: viewport.width, height: viewport.height },
      ocr_results: pdfjsContentToOCRResult(content_obj, viewport.height).map(
        (i) => {
          // 去掉空格块
          i.text = i.text.replace(/ /g, '');
          return i;
        },
      ),
    };
  } else {
    const abs_ocr_target = pdf
      ? await pdf2image({ pdf_path: abs_target_path, page: page! - 1 })
      : abs_target_path;
    const dimensions = sizeOf(abs_ocr_target);

    const tmp_file = join(tmpdir(), Math.random().toString());
    await fs.writeFile(
      tmp_file,
      JSON.stringify({
        det_db_box_thresh: 0.2,
        // 'use_gpu': true,
        // 'gpu_mem': 7000,
        rec_model_dir: './paddle/ch_PP-OCRv4_rec_infer',
        det_model_dir: './paddle/ch_PP-OCRv4_det_infer',

        det_limit_side_len: 2496,
        drop_score: 0.3,

        ...params,
        image_dir: abs_ocr_target,
      }),
    );
    const ocr_command = `python3 ocr.py ${tmp_file}`;
    const raw = execSync(ocr_command, {
      cwd: process.env.OCR_EXEC_PATH!,
    }).toString();
    const t = JSON.parse(raw) as [
      [[number, number], [number, number], [number, number], [number, number]],
      [string, number],
    ][];

    res = {
      ocr_results: t[0].map((i: any) => ({
        text: i[1][0],
        box: i[0],
      })),
      dimensions: {
        height: dimensions.height!,
        width: dimensions.width!,
      },
    };
    pdf && (await fs.remove(abs_ocr_target));
  }
  await fs.writeFile(cache_path!, JSON.stringify(res));

  return res;
}
