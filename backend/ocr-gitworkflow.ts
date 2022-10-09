import { exec, execSync } from 'node:child_process'
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import https from 'https';
import { Transform } from 'stream';
import fs from 'node:fs';
import { parse } from './parser/automation';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';

const archive_id = 1;

const body = (process.env as any).BODY.trim();
const raw_title = (process.env as any).TITLE.trim();

async function download(url: string, target: string) {
  await new Promise<void>((resolve) =>
    https
      .request(url, function (response) {
        var data = new Transform();

        response.on('data', function (chunk) {
          data.push(chunk);
        });

        response.on('end', function () {
          fs.writeFileSync(target, data.read());
          resolve();
        });
      })
      .end(),
  );
}

export async function start() {
  if (raw_title.startsWith('{自动化文稿录入}')) {
    try {
      const body1 = body.substring(body.indexOf('```') + 3);
      const body2 = body1.substring(0, body1.indexOf('```'));
      const config = JSON5.parse(body2) as ParserOptionV2 & {
        id: string;
        source_name: string;
      };
      const id = config.id;
      const imgs = Array.from(body.matchAll(/\!\[.*?\]\(.*?\)/g)).map((i) =>
        (i as any)[0].replace(/^.*\(/, '').replace(/\)/, ''),
      );
      config.ext = extname(imgs[0]).replace('.', '');

      /**
       * 1. 修改 books.ts
       * 2. 下载图片到 public/books/archives${n}/${id}/${n}.${ext}
       * 3. 调用 parser，生成ocr_cache
       * 4. [gitworkflow] 在 archives${n} 中创建 pr
       * 5. [gitworkflow] 创建 pr，并在issue中回复 parser result
       */

      config.articles!.forEach((i) => {
        i.page_start = i.page_start || 1;
        i.page_end = i.page_end || imgs.length;
      });
      const booksts = fs.readFileSync(join(__dirname, 'books.ts')).toString();
      const temp = Array.from(booksts);
      temp.splice(
        booksts.indexOf('= [') + 3,
        0,
        `
  {
    entity: {
      id: '${id}',
      name: '${config.source_name!}',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(${imgs.length})
        .fill(0)
        .map(
          (i, idx) =>
            \`https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archive_id}/main/${id}/\${
              idx + 1
            }.jpg\`,
        )
        .join(','),
    },
    parser_option: {
      page_limits: [],
      ext: '${config.ext}',
      articles: ${JSON.stringify(config.articles)},
      ocr: ${JSON.stringify(config.ocr)},
      ocr_exceptions: ${JSON.stringify(config.ocr_exceptions || {})},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives${archive_id}/${id}'),
  },`,
      );
      fs.writeFileSync(join(__dirname, 'books.ts'), temp.join(''));

      let idx = 1;
      const targetDir = join(
        __dirname,
        `../public/books/archives${archive_id}/${id}`,
      );
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
      }
      for (let i of imgs) {
        await download(i, join(targetDir, `${idx}.${config.ext}`));
        ++idx;
      }
      console.log(
        JSON.stringify(
          await parse(targetDir, {
            page_limits: [],
            ext: config.ext,
            articles: config.articles!,
            ocr: config.ocr,
            ocr_exceptions: config.ocr_exceptions || {},
          }),
        ),
      );
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  } else {
    process.exit(2);
  }
}

if (!(process.env as any).TEST) {
  start();
}