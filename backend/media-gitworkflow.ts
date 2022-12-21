import { join, basename, dirname, extname } from 'node:path/posix';
import fs from 'node:fs';
import { parse } from './parser/automation';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';
import axios from 'axios';
import { uuid } from '../utils';
import { Image, Music } from './entities';

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
  if (raw_title.startsWith('[自动化多媒体录入]')) {
    try {
      const body1: string = body.substring(0, body.lastIndexOf('```'));
      const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
      const config = JSON5.parse(body2) as {
        media: ((Partial<Image> | Partial<Music>) & {
          type?: 'img' | 'music';
          url?: string;
        })[];
        archive_id: number;
      };
      config.archive_id =
        config.archive_id == undefined ? 7 : config.archive_id;

      const urls: string[] = [];
      body
        .substring(body.lastIndexOf('```') + 3)
        .split('\n')
        .forEach((x: string) => {
          const format1 = Array.from(x.matchAll(/\[.*?\]\(.*?\)/g)).map((i) =>
            (i as any)[0].replace(/^.*\(/, '').replace(/\)/, ''),
          );
          if (format1.length) {
            urls.push(...format1);
          }
          const format2 = Array.from(x.matchAll(/src=".*">/g)).map((i) =>
            (i as any)[0].substr(5).replace(/">$/g, ''),
          );
          if (format2.length) {
            urls.push(...format2);
          }
        });

      if (urls.length !== config.media.length) {
        process.exit(2);
      }

      const promises: Promise<any>[] = [];
      const prepend: string[] = [];
      for (const i of config.media) {
        i.id = uuid();
        delete i.type;
        const url = urls.shift()!;
        const p =
          join(
            __dirname,
            `../public/archives${config.archive_id}/${i.id?.substring(0, 2)}/${
              i.id
            }`,
          ) + extname(url);
        if (!fs.existsSync(dirname(p))) {
          fs.mkdirSync(dirname(p));
        }
        promises.push(download(url, p));

        i.url = `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${
          config.archive_id
        }/main/${i.id?.substring(0, 2)}/${i.id}${extname(url)}`;
        prepend.push(`
  ${JSON.stringify(i)},`);
      }

      const imagests = fs.readFileSync(join(__dirname, 'images.ts')).toString();
      const temp = Array.from(imagests);
      temp.splice(imagests.indexOf('= [') + 3, 0, prepend.join(''));
      fs.writeFileSync(join(__dirname, 'images.ts'), temp.join(''));

      await Promise.all(promises);

      console.log(
        escapeData(
          '```\n' +
            JSON.stringify(
              config.media.map((i) => i.url),
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