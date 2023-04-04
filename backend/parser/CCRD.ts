import { readFileSync } from 'fs';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
  TagType,
} from '../../types';
import { merge_to_lines, pdfjsContentToOCRResult } from './utils';
import { join, basename } from 'node:path/posix';
import fs from 'fs';
import { normalize } from '../utils';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const res: ParserResult[] = [];
  const root = path;
  for (let j of fs.readdirSync(normalize(`${root}`))) {
    for (let k of fs.readdirSync(normalize(`${root}/${j}`))) {
      for (let l of fs.readdirSync(normalize(`${root}/${j}/${k}`))) {
        const json = JSON.parse(
          fs.readFileSync(normalize(`${root}/${j}/${k}/${l}`)).toString(),
        );
        const originIdx = json.contents.findIndex(
          (x: any, t: any) =>
            (t === json.contents.length - 1 ||
              t === json.contents.length - 2) &&
            (x.type === 'source' || /^来源：/.test(x.text)),
        );
        const parts =
          originIdx >= 0 ? json.contents.slice(0, originIdx) : json.contents;
        res.push({
          title: json.title,
          authors: json.authors,
          dates: [
            {
              year: parseInt(json.date.split('-')[0]),
              month: parseInt(json.date.split('-')[1]) || undefined,
              day: parseInt(json.date.split('-')[2]) || undefined,
            },
          ],
          is_range_date: false,
          parts,
          comments: [],
          origin:
            originIdx >= 0
              ? json.contents[originIdx].text.replace(/^来源：/, '') +
                json.contents
                  .slice(originIdx + 1, json.contents.length)
                  .map((x: any) => x.text)
                  .join('')
              : '',
          comment_pivots: [],
          description: '',
          page_start: 0,
          page_end: 0,
        });
        // if ((res as any)[res.length - 1].origin.length> 300) {
        //   console.log((res as any)[res.length - 1].origin);
        //   debugger;
        // }
      }
    }
  }

  return res;
}
