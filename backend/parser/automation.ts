import { join } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRParameter,
  OCRParameterAdvanced,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
  TagType,
} from '../../types';
import { merge_to_lines } from './utils';

type PartRaw = { page: number; x: number; merge_up?: boolean } & ContentPartRaw;
function extract_parts(ocr: OCRResult[], page: number,page_dimensions: {width: number, height: number}, ocr_parameters: Partial<OCRParameter & OCRParameterAdvanced>): PartRaw[] {
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
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  parser_opt.ocr = {
    rec_model: 'ch_ppocr_mobile_v2.0',
    rec_backend: 'onnx',
    det_model: 'ch_PP-OCRv3_det',
    det_backend: 'onnx',
    resized_shape: 1496,
    box_score_thresh: 0.3,
    min_box_size: 10,
    content_thresholds: [0.0, 0.0, 0.0, 0.0],
    line_merge_threshold: 30,
    standard_paragraph_merge_strategy_threshold: 0,
    differential_paragraph_merge_strategy_threshold: 30,
    ...parser_opt.ocr,
  };
  const res: ParserResult[] = [];
  for (const article of parser_opt.articles!) {
    const parts: PartRaw[] = [];
    for (let i = article.page_start; i <= article.page_end; ++i) {
      const merged_ocr_parameters = {
        ...(parser_opt.ocr || {}),
        ...(parser_opt.ocr_exceptions ? parser_opt.ocr_exceptions[i] : {}),
      };
      let { ocr_results, dimensions } = await ocr({
        img: imgPath + '/' + i + `.${parser_opt.ext}`,
        ...merged_ocr_parameters,
      });

      const content_thresholds = merged_ocr_parameters.content_thresholds!;
      const line_merge_threshold = merged_ocr_parameters.line_merge_threshold!;
      const content_thresholds_px = [
        content_thresholds[0] * dimensions.height!,
        dimensions.height! - content_thresholds[1] * dimensions.height!,
        content_thresholds[2] * dimensions.width!,
        dimensions.width! - content_thresholds[3] * dimensions.width!,
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

      // 如果宽大于高，很可能一张图片中包含两页，将OCR结果从中间划开
      if (dimensions.height < dimensions.width) {
        const left = ocr_results.filter((i) => {
          return (
            i.box[0][0] < dimensions.width / 2 &&
            i.box[3][0] < dimensions.width / 2
          );
        });
        const right = ocr_results.filter((i) => {
          return (
            i.box[0][0] >= dimensions.width / 2 &&
            i.box[3][0] >= dimensions.width / 2
          );
        });
        parts.push(
          ...extract_parts(
            merge_to_lines(left, line_merge_threshold).sort((a, b) => a.box[0][1] - b.box[0][1]),
            i,
            dimensions,
            merged_ocr_parameters
          ),
          ...extract_parts(
            merge_to_lines(right, line_merge_threshold).sort((a, b) => a.box[0][1] - b.box[0][1]),
            i,
            dimensions,
            merged_ocr_parameters
          ),
        );
      } else {
        parts.push(
          ...extract_parts(
            merge_to_lines(ocr_results, line_merge_threshold).sort(
              (a, b) => a.box[0][1] - b.box[0][1],
            ),
            i,
            dimensions,
            merged_ocr_parameters
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