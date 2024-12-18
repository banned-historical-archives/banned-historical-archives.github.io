import { ArticleIndexes } from '../types';
import { get_article_indexes } from './get_article_indexes';

const { mkdirSync, existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

/*
const body = `{OCR补丁}
{
  "articleId": "123",
  "publicationId": "xuanji1",
  "patch": {
    "parts": {"a": "..."},
    "comments": {"a": "..."},
    "description": ""
  }
}`
*/
let body = (process.env as any).BODY.trim();

body = body.replace(/^\{OCR补丁\}/, '');
body = body.substr(0, body.lastIndexOf('}') + 1);
let final: {
  COMMIT_HASH: string;
  articleId: string;
  publicationId: string;
  patch: any;
};
let decoded = '';
const article_indexes = get_article_indexes();
try {
  const patch = JSON.parse(body) as {
    articleId: string;
    publicationId: string;
    patch: any;
  };
  final = {
    ...patch,
    COMMIT_HASH: process.env.COMMIT_HASH as string,
  };
  decoded = decodeURIComponent(JSON.stringify(final.patch)).replace(/\n/g, '');

  const candidates = article_indexes[patch.articleId];
  const archive_id = candidates.find((i) => i[0] == patch.publicationId)![2];
  console.log('archive_id', archive_id);
  const filepath = join(
    __dirname,
    `../ocr_patch/archives${archive_id}/[${final.articleId}][${final.publicationId}].ts`,
  );

  let content = `
export default [
];`;
  if (existsSync(filepath)) {
    content = readFileSync(filepath).toString();
  }
  const idx = content.lastIndexOf(']');

  content =
    content.slice(0, idx) + '  ' + JSON.stringify(final.patch) + ',\n];';
  console.log(filepath, content);
  writeFileSync(filepath, content);
} catch (e) {
  console.log('error', e);
  process.exit(2);
}
