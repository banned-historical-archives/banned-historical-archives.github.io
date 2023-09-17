import EPub from 'epub';
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
import { merge_to_lines, pdfjsContentToOCRResult } from './utils';
import { JSDOM } from 'jsdom';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const epub = new EPub(path);
  await new Promise((resolve) => {
    epub.parse();
    epub.on('end', resolve);
  });

  const chapters = await Promise.all<{
    id: string;
    title: string;
    text: string;
  }>(
    epub.flow.map(
      (i) =>
        new Promise((resolve) =>
          epub.getChapter(i.id, (err, text) =>
            resolve({
              id: i.id,
              title: i.title,
              text,
            }),
          ),
        ),
    ),
  );

  return chapters.slice(3).filter(i => i.title).map((article) => {
    const dates = [{year: 2016}];
    const title = article.title;
    const merged_parts = Array.from(
      new JSDOM(article.text).window.document.querySelectorAll('p'),
    ).map((i) => ({
      text: i.innerHTML,
      type: ContentType.paragraph,
    }));
    return {
      title,
      parts: merged_parts,
      authors: ['戚本禹'],
      dates,
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: 0,
      page_end: 0,
    };
  });
}
