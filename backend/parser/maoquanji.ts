import {join, basename} from 'path';
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
  for (const j of parser_opt.page_limits) {
    for (let page = j[0]; page <= j[1]; ++page) {
      const image_path = await pdf2image({
        pdf_path,
        page: page - 1,
      });
      const ocrResults = (
        await ocr({
          img: image_path,
          cache_path: join(
            __dirname,
            `../ocr_cache/maoquanji${basename(pdf_path).replace(
              /[^\d]/g,
              '',
            )}/${page}.png.json`,
          ),
        })
      )
        .filter((i) => i.text)
        .sort((a, b) => a.box[0][1] - b.box[0][1]);
      await fs.remove(image_path);
      console.log(page);
    }
  }
  
  return [];
}
