import { join } from 'path';
import * as pdfjsLib from './pdf.js';
import { basename } from 'node:path/posix';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRParameterLegacy,
  OCRParameterAdvanced,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
  TagType,
  OCRParameter,
} from '../../types';
import { merge_to_lines, pdfjsContentToOCRResult } from './utils';
import { normalize } from '../utils';

type PartRaw = { page: number; x: number; merge_up?: boolean } & ContentPartRaw;
function extract_parts(
  ocr: OCRResult[],
  page: number,
  page_dimensions: { width: number; height: number },
  ocr_parameters: Partial<OCRParameter & OCRParameterAdvanced>,
): PartRaw[] {
  const res: PartRaw[] = [];
  for (let i = 0, last_x = 0; i < ocr.length; ++i) {
    let text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    res.push({
      page,
      text,
      x,
      type: ContentType.paragraph,
    });
    last_x = x;
  }
  const paragraphs = res.filter((i) => i.type === ContentType.paragraph);
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (ocr_parameters.differential_paragraph_merge_strategy_threshold) {
      if (
        last &&
        t.x - last.x >
          ocr_parameters.differential_paragraph_merge_strategy_threshold
      ) {
        t.merge_up = false;
      } else if (
        next &&
        t.x - next.x >
          ocr_parameters.differential_paragraph_merge_strategy_threshold
      ) {
        t.merge_up = false;
      } else {
        t.merge_up = true;
      }
    } else if (ocr_parameters.standard_paragraph_merge_strategy_threshold) {
      t.merge_up =
        t.x <
        page_dimensions.width *
          ocr_parameters.standard_paragraph_merge_strategy_threshold;
    }
  }
  return res;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (
      parts[i].merge_up &&
      res.length &&
      res[res.length - 1].type === parts[i].type
    ) {
      res[res.length - 1].text += parts[i].text;
    } else {
      res.push({
        type: parts[i].type,
        text: parts[i].text,
      });
    }
  }
  return res;
}

export async function parse(
  dirPathOrFilePath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  parser_opt.ocr = {
    det_db_box_thresh: 0.2,
    use_gpu: true,
    gpu_mem: 7000,
    rec_model_dir: './paddle/ch_PP-OCRv4_rec_infer',
    det_model_dir: './paddle/ch_PP-OCRv4_det_infer',

    det_limit_side_len: 2496,
    drop_score: 0.3,

    content_thresholds: [0.0, 0.0, 0.0, 0.0],
    line_merge_threshold: 30,
    standard_paragraph_merge_strategy_threshold: 0,
    differential_paragraph_merge_strategy_threshold: 30,
    auto_vsplit: true,
    vsplit: 0.5,
    ...parser_opt.ocr,
  };
  const res: ParserResult[] = [];
  for (const article of parser_opt.articles!) {
    const parts: PartRaw[] = [];
    for (let i = article.page_start; i <= article.page_end; ++i) {
      const merged_ocr_parameters: Partial<
        OCRParameter & OCRParameterAdvanced
      > = {
        ...(parser_opt.ocr || {}),
        ...(article.ocr ? article.ocr : {}),
        ...(article.ocr_exceptions ? article.ocr_exceptions[i] : {}),
        ...(parser_opt.ocr_exceptions ? parser_opt.ocr_exceptions[i] : {}),
      };
      let { ocr_results, dimensions } = await ocr(
        parser_opt.ext == 'pdf'
          ? {
              pdf: dirPathOrFilePath,
              page: i,
              cache_path: join(
                normalize(__dirname),
                `../ocr_cache/${basename(dirPathOrFilePath).replace(
                  /\.pdf$/,
                  '',
                )}/${i}.json`,
              ),
              params: merged_ocr_parameters,
            }
          : {
              img: dirPathOrFilePath + '/' + i + `.${parser_opt.ext}`,
              params: merged_ocr_parameters,
            },
      );

      const content_thresholds = merged_ocr_parameters.content_thresholds!;
      const line_merge_threshold = merged_ocr_parameters.line_merge_threshold!;

      // 还原OCR结果的坐标
      const size = dimensions;
      const content_thresholds_px = [
        content_thresholds[0] * size.height!,
        size.height! - content_thresholds[1] * size.height!,
        content_thresholds[2] * size.width!,
        size.width! - content_thresholds[3] * size.width!,
      ];
      ocr_results = ocr_results.filter(
        (i: OCRResult) =>
          i.box[0][0] >= content_thresholds_px[2] &&
          i.box[3][0] >= content_thresholds_px[2] &&
          i.box[1][0] <= content_thresholds_px[3] &&
          i.box[2][0] <= content_thresholds_px[3] &&
          i.box[0][1] >= content_thresholds_px[0] &&
          i.box[1][1] >= content_thresholds_px[0] &&
          i.box[2][1] <= content_thresholds_px[1] &&
          i.box[3][1] <= content_thresholds_px[1],
      );

      if (
        (merged_ocr_parameters.auto_vsplit && size.height < size.width) ||
        (!merged_ocr_parameters.auto_vsplit && merged_ocr_parameters.vsplit)
      ) {
        const left = ocr_results.filter((i) => {
          return (
            i.box[0][0] < size.width * merged_ocr_parameters.vsplit! &&
            i.box[3][0] < size.width * merged_ocr_parameters.vsplit!
          );
        });
        const right = ocr_results.filter((i) => {
          return (
            i.box[0][0] >= size.width * merged_ocr_parameters.vsplit! &&
            i.box[3][0] >= size.width * merged_ocr_parameters.vsplit!
          );
        });
        parts.push(
          ...extract_parts(
            merge_to_lines(left, line_merge_threshold).sort(
              (a, b) => a.box[0][1] - b.box[0][1],
            ),
            i,
            size,
            merged_ocr_parameters,
          ),
          ...extract_parts(
            merge_to_lines(right, line_merge_threshold).sort(
              (a, b) => a.box[0][1] - b.box[0][1],
            ),
            i,
            size,
            merged_ocr_parameters,
          ),
        );
      } else {
        parts.push(
          ...extract_parts(
            merge_to_lines(ocr_results, line_merge_threshold).sort(
              (a, b) => a.box[0][1] - b.box[0][1],
            ),
            i,
            size,
            merged_ocr_parameters,
          ),
        );
      }
    }
    const merged_parts = merge_parts(parts);
    res.push({
      title: article.title,
      alias: article.alias,
      parts: merged_parts,
      authors: article.authors,
      dates: article.dates,
      is_range_date: !!article.is_range_date,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: article.page_start,
      page_end: article.page_end,
    });
  }

  return res;
}
