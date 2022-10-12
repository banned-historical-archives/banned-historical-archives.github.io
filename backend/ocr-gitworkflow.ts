import { join, basename, dirname, extname } from 'node:path/posix';
import fs from 'node:fs';
import { parse } from './parser/automation';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';
import axios from 'axios';
import { uuid } from '../utils';

function toCommandValue(input: any): string {
  if (input === null || input === undefined) {
    return '';
  } else if (typeof input === 'string' || input instanceof String) {
    return input as string;
  }
  return JSON.stringify(input);
}

function escapeData(s: any): string {
  return toCommandValue(s)
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A');
}

function escapeProperty(s: any): string {
  return toCommandValue(s)
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
    .replace(/:/g, '%3A')
    .replace(/,/g, '%2C');
}

const body = (process.env as any).BODY.trim();
const raw_title = (process.env as any).TITLE.trim();

async function download(url: string, filePath: string) {
  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

export async function start() {
  if (raw_title.startsWith('[自动化文稿录入]')) {
    try {
      const body1: string = body.substring(0, body.lastIndexOf('```'));
      const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
      const config = JSON5.parse(body2) as ParserOptionV2 & {
        id?: string;
        source_name: string;
      };
      const id = uuid();
      config.id = id;
      config.archive_id =
        config.archive_id == undefined ? 1 : config.archive_id;
      const imgsOrPDFs = Array.from(body.matchAll(/\[.*?\]\(.*?\)/g)).map((i) =>
        (i as any)[0].replace(/^.*\(/, '').replace(/\)/, ''),
      );
      config.ext = extname(imgsOrPDFs[0]).replace('.', '');

      /**
       * 1. 修改 books.ts
       * 2. 如果是图片集，下载图片到 public/books/archives${n}/${id}/${n}.${ext}，如果是pdf 下载到 public/books/archives${n}/${id}.pdf
       * 3. 调用 parser，生成ocr_cache
       * 4. [gitworkflow] 在 archives${n} 中创建 pr
       * 5. [gitworkflow] 创建 pr，并在issue中回复 parser result
       */

      config.articles!.forEach((i) => {
        i.page_start = i.page_start || 1;
        i.page_end = i.page_end || imgsOrPDFs.length;
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
      files: ${
        config.ext == 'pdf'
          ? `'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${config.archive_id}/${id}.pdf',`
          : `new Array(${imgsOrPDFs.length})
        .fill(0)
        .map(
          (i, idx) =>
            \`https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${config.archive_id}/main/${id}/\${
              idx + 1
            }.${config.ext}\`,
        )
        .join(','),`
      }
    },
    parser_option: {
      page_limits: [],
      ext: '${config.ext}',
      articles: ${JSON.stringify(config.articles)},
      ocr: ${JSON.stringify(config.ocr)},
      ocr_exceptions: ${JSON.stringify(config.ocr_exceptions || {})},
    },
    parser: automation.parse,
    path: join(normalize(__dirname), '../public/books/archives${
      config.archive_id
    }/${id}${config.ext == 'pdf' ? '.pdf' : ''}'),
  },`,
      );
      fs.writeFileSync(join(__dirname, 'books.ts'), temp.join(''));

      const dirPath = join(
        __dirname,
        `../public/books/archives${config.archive_id}/${id}`,
      );
      const pdfFilePath = join(
        __dirname,
        `../public/books/archives${config.archive_id}/${id}.pdf`,
      );
      if (config.ext == 'pdf') {
        await download(imgsOrPDFs[0], pdfFilePath);
      } else {
        let idx = 1;
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath);
        }
        for (let i of imgsOrPDFs) {
          await download(i, join(dirPath, `${idx}.${config.ext}`));
          ++idx;
        }
      }

      console.log(
        escapeData(
          '```\n' +
            JSON.stringify(
              await parse(config.ext === 'pdf' ? pdfFilePath : dirPath, {
                page_limits: [],
                ext: config.ext,
                articles: config.articles!,
                ocr: config.ocr,
                ocr_exceptions: config.ocr_exceptions || {},
              }),
              null,
              2,
            ) +
            '\n```',
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