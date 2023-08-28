import { join } from 'path';
import * as pdfjsLib from './pdf.js';
import fs from 'fs-extra';
import { basename } from 'node:path/posix';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import ocr from '../ocr';
import {
  Book,
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
import { normalize } from '../utils';

export async function parse(
  maoistlegacy_dir: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const meta = parser_opt.meta;

  let size = 0;
  if (meta.pdf) {
    const doc = await pdfjsLib.getDocument(
      join(maoistlegacy_dir, `${parser_opt.id}/${parser_opt.id}.pdf`),
    ).promise;
    size = doc.numPages;
  } else {
    size = meta.imgs.length;
  }
  const res: ParserResult[] = [
    {
      title: meta.title,
      dates: meta.dates,
      is_range_date: false,
      authors: meta.creator || [],
      comments: [],
      comment_pivots: [],
      description: '',

      page_start: 1,
      page_end: size,
      origin: meta.source[0] || '',
      tags: meta.tags.map((i: string) => ({
        name: i,
        type: TagType.subject,
      })),
      parts: meta.parts,
    },
  ];
  return res;
}

/*
资料类型与处理方案：

文稿（有文本，无照片或pdf） -> 导入文库
文稿（有文本，有照片或pdf） -> 导入文库
文稿（无文本，有照片或pdf） -> 触发OCR -> 导入文库
漫画/插画/照片 -> 导入图片库

这里只处理前两种情况。
*/
export async function get_books(): Promise<Book[]> {
  const books: Book[] = [];
  const data_dir_path = join(__dirname, '../../public/archives11/data');
  const dir_list = fs.readdirSync(data_dir_path);
  for (const id of dir_list) {
    const meta = fs.readJSONSync(join(data_dir_path, `${id}/meta.json`));
    if (!meta.parts.length) continue;
    books.push({
      entity: {
        id: `maoistlegacy.de-${id}`,
        name: meta.title,
        author: meta.creator[0] || '',
        internal: false,
        official: false,
        type: meta.pdf ? 'pdf' : meta.imgs.length ? 'img' : 'unknown',
        files: meta.pdf
          ? `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives11/main/data/${id}/${id}.pdf`
          : meta.imgs
              .map(
                (i: any, idx: number) =>
                  `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives11/main/data/${id}/${
                    idx + 1
                  }.${i.split('.').pop()}`,
              )
              .join(','),
      },
      parser_option: {
        page_limits: [],
        meta,
        id,
      },
      parser: parse,
      parser_id: 'maoistlegacy-proofread',
      path: '/archives11/data',
    });
  }
  return books;
}
