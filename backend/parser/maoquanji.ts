import {join, basename} from 'node:path/posix';
import fs from 'fs-extra';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';
import pdf2image from '../pdf2image';
import { normalize } from '../utils';

const opt = {
};

type PartRaw = ({ page: number, x: number, merge_up?: boolean } & ContentPartRaw);
function extract_parts(
  ocr: OCRResult[],
  page: number,
): PartRaw[] {
  // 去掉页码
  ocr = ocr.filter(i => !/^[-\d—新名中一\.·，]+$/.test(i.text.trim()));
  const res:PartRaw[] = [];
  for (let i = 0; i < ocr.length; ++i) {
    const text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    res.push({
      page,
      text,
      x,
      type: ContentType.paragraph,
    });
  }
  const paragraphs = res.filter(i => i.type === ContentType.paragraph);
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (last && last.x < t.x && t.x - last.x > 50) {
      t.merge_up = false;
    } else if (next && next.x < t.x && t.x - next.x > 50) {
      t.merge_up = false;
    } else {
      t.merge_up = true;
    }
  }
  return res;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].merge_up && res[res.length - 1].type === parts[i].type) {
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
  pdf_path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const parts: PartRaw[] = [];

  for (let i = 0; i < parser_opt.page_limits.length; ++i) {
    const j = parser_opt.page_limits[i];
    for (let page = j[0]; page <= j[1]; ++page) {
      const ocrResults = (
        await ocr({
          pdf: pdf_path,
          page,
          cache_path: join(
            normalize(__dirname),
            `../ocr_cache/maoquanji${basename(pdf_path).replace(
              /[^\d]/g,
              '',
            )}/${page}.json`,
          ),
        })
      ).ocr_results
        .filter((i) => i.text && !/^[\d]+$/.test(i.text)) // 去页码
        .sort((a, b) => a.box[0][1] - b.box[0][1]);

      // 目录，正文中标题含有不能被准确识别的标注，所以以目录的标题为准
      if (i == 0) {

      } else { // 正文

      }
      console.log(page);
    }
  }
  
  return [];
}
