import { exec, execSync } from 'node:child_process';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import https from 'https';
import { Transform } from 'stream';
import fs, { readFileSync } from 'node:fs';
import { ArticleIndexes, BookIndexes, AutomationEntryOption } from '../types';
import JSON5 from 'json5';

const body = (process.env as any).BODY.trim();
const raw_title = (process.env as any).TITLE.trim();

export async function start() {
  if (body.startsWith('{OCR补丁}')) {
    let str = body.replace(/^\{OCR补丁\}/, '');
    str = str.substr(0, str.lastIndexOf('}') + 1);
    const obj = JSON5.parse(str) as {
      articleId: string;
      publicationId: string;
    };
    const a_indexes = JSON.parse(
      readFileSync(join(__dirname, '../article_indexes.json')).toString(),
    ) as ArticleIndexes;
    const b_indexes = JSON.parse(
      readFileSync(join(__dirname, '../book_indexes.json')).toString(),
    ) as BookIndexes;
    const candidates = a_indexes[obj.articleId].map((i) => b_indexes[i]);
    console.log(candidates.find((i) => i[0] == obj.publicationId)![2]);
    process.exit(0);
  }
  try {
    const body1: string = body.substring(0, body.lastIndexOf('```'));
    const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
    const config = JSON5.parse(body2) as AutomationEntryOption & {
      id: string;
      source_name: string;
    };
    config.archive_id = config.archive_id == undefined ? 1 : config.archive_id;
    if (config.archive_id >= 0) {
      console.log(config.archive_id);
    } else {
      console.log('bad archive id');
      process.exit(3);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

if (!(process.env as any).TEST) {
  start();
}
