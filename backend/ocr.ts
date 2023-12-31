import { exec, execSync } from 'node:child_process';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import fs from 'fs-extra';
import { OCRParameter, OCRParameterLegacy, OCRResult } from '../types';
import { sleep } from '../utils';
import pdf2image from './pdf2image';
import { normalize } from './utils';
import sizeOf from 'image-size';
import { tmpdir } from 'node:os';

/**
 * db shufflenet v2 py
 * ppocr v3
 */
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
  params: Partial<OCRParameter>
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
  const abs_ocr_target = pdf
    ? await pdf2image({ pdf_path: abs_target_path, page: page! - 1 })
    : abs_target_path;
  const dimensions = sizeOf(abs_ocr_target);

  const tmp_file = join(tmpdir(), Math.random().toString());
  await fs.writeFile(tmp_file, JSON.stringify({
    ...params,
    image_dir: abs_ocr_target,
  }));
  const ocr_command = `python3 ocr.py ${tmp_file}`;
  const raw = execSync(ocr_command, {
    cwd: process.env.OCR_EXEC_PATH!,
  }).toString();
  const t = JSON.parse(raw) as (([[
    [number,number],
    [number,number],
    [number,number],
    [number,number],
  ],[string, number]])[]);

  const res: {
    ocr_results: OCRResult[];
    dimensions: { height: number; width: number };
  } = {
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
  await fs.writeFile(cache_path!, JSON.stringify(res));

  return res;
}
