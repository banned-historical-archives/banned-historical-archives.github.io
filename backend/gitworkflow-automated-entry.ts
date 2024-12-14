import { join, basename, dirname, extname } from 'node:path/posix';
import fs from 'node:fs';
import fsextra from 'fs-extra';
import {
  ArticleList,
  BookConfig,
  BookMetaData,
  Config,
  MusicConfig,
  MusicMetaData,
  AutomatedEntryBookOption,
  PictureConfig,
  ResourceMetaData,
  VideoConfig,
  AutomatedEntryOption,
} from '../types';
import JSON5 from 'json5';
import axios from 'axios';
import { uuid } from '../utils';
import { tmpdir } from 'node:os';
import { parse } from 'node:path';
const { fromBuffer } = require('file-type-cjs');

const body = ((process.env as any).BODY || '').trim();

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
  try {
    const body1: string = body.substring(0, body.lastIndexOf('```'));
    const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
    const config = JSON5.parse(body2) as AutomatedEntryOption;
    const id = uuid();
    config.archive_id = config.archive_id == undefined ? 1 : config.archive_id;
    const raw_dir = join(__dirname, `../raw/archives${config.archive_id}`);
    const raw_url = `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${config.archive_id}/main/`;
    const config_dir = join(
      __dirname,
      `../config/archives${config.archive_id}`,
    );
    const links = Array.from(body.matchAll(/\[.*?\]\(http.*?\)/g)).map((i) =>
      (i as any)[0].replace(/^.*\(/, '').replace(/\)/, ''),
    );

    let metadata: ResourceMetaData;
    let resource_config: Config;
    if (config.resource_type === 'book') {
      const files: string[] = [];
      for (const link of links) {
        const p = join(tmpdir(), basename(link));
        await download(link, p);

        const real_ext = (await fromBuffer(fs.readFileSync(p)))?.ext;
        if (!real_ext) process.exit(3);
        const new_path = join(tmpdir(), files.length + 1 + '.' + real_ext);
        fs.renameSync(p, new_path);
        files.push(new_path);
      }

      const is_pdf = files.length == 1 && files[0].endsWith('.pdf');
      const is_img_set =
        files.length > 0 &&
        files.reduce(
          (a, b) =>
            a &&
            (b.endsWith('.png') || b.endsWith('.jpg') || b.endsWith('.jpeg')),
          true,
        );

      if (!is_pdf && !is_img_set) {
        process.exit(4);
      }

      /**
       * 1. 新增 config/archives[n]/[id].ts
       * 2. 如果是图片集，下载图片到 raw/archives${n}/${id}/${img}
            如果是pdf 下载到 raw/archives${n}/${id}
       * 3. 在 archives${n} main 分支创建 pr
       * 4. 在 archives${n} config 分支创建 pr
       * config分支的合并会自动运行ocr生成ocr_cache->parsed->page build
       */

      config.articles!.forEach((i) => {
        i.page_start = i.page_start || 1;
        i.page_end = i.page_end || links.length;
      });

      metadata = {
        id,
        name: config.source_name!,
        internal: !!config.internal,
        official: !!config.official,
        type: is_pdf ? 'pdf' : is_img_set ? 'img' : 'unknown',
        author: config.author || '',
        files: files.map((i) =>
          is_pdf ? raw_url + id + '.pdf' : raw_url + id + '/' + basename(i),
        ),
      };
      resource_config = {
        resource_type: 'book',
        entity: metadata as BookMetaData,
        version: 2,
        parser_option: {
          articles: config.articles,
          ocr: {
            use_onnx: true,
            det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
            rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
            ...config.ocr,
          },
          ocr_exceptions: config.ocr_exceptions || {},
        },
        parser_id: 'automation',
        path: is_img_set ? id : is_pdf ? id + '.pdf' : '',
      } as BookConfig;
      for (const i of files) {
        if (is_img_set) {
          fsextra.ensureDirSync(join(raw_dir, `${id}`));
          fs.renameSync(i, join(raw_dir, `${id}/${basename(i)}`));
        } else {
          fs.renameSync(i, join(raw_dir, `${id}.pdf`));
        }
      }
    } else if (config.resource_type === 'music') {
      const filtered = { ...config } as any;
      delete filtered.archive_id;
      delete filtered.resource_type;
      metadata = filtered;
      resource_config = {
        resource_type: config.resource_type,
        entity: metadata as MusicMetaData,
        version: 2,
      } as MusicConfig;

      let lyric_idx = 0;
      let audio_idx = 0;
      for (const link of links) {
        const id = uuid();
        const p = join(raw_dir, id + extname(link));
        await download(link, p);
        if (!resource_config.entity.lyrics[lyric_idx].audios[audio_idx]) {
          audio_idx++;
        }
        if (!resource_config.entity.lyrics[lyric_idx].audios[audio_idx]) {
          audio_idx = 0;
          lyric_idx++;
        }
        resource_config.entity.lyrics[0].audios[0].url =
          raw_url + `${id}${extname(link)}`;
      }
    } else if (config.resource_type === 'picture') {
      const filtered = { ...config } as any;
      delete filtered.archive_id;
      delete filtered.resource_type;
      metadata = filtered;
      resource_config = {
        resource_type: config.resource_type,
        entity: metadata,
        version: 2,
      } as PictureConfig;
      const p = join(raw_dir, id);
      await download(links[0], p);
      const real_ext = (await fromBuffer(fs.readFileSync(p)))?.ext;
      fs.renameSync(p, join(raw_dir, id + '.' + real_ext));
      resource_config.entity.url = raw_url + id + '.' + real_ext;
    } else if (config.resource_type === 'video') {
      const filtered = { ...config } as any;
      delete filtered.archive_id;
      delete filtered.resource_type;
      metadata = filtered;
      resource_config = {
        resource_type: config.resource_type,
        entity: metadata,
        version: 2,
      } as VideoConfig;
      const p = join(raw_dir, id);
      await download(links[0], p);
      const real_ext = (await fromBuffer(fs.readFileSync(p)))?.ext;
      fs.renameSync(p, join(raw_dir, id + '.' + real_ext));
      resource_config.entity.url = raw_url + id + '.' + real_ext;
    } else {
      process.exit(5);
    }

    const file_content = `export default ${JSON.stringify(resource_config!)};`;
    fs.writeFileSync(join(config_dir, `${id}.ts`), file_content);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

if (!(process.env as any).TEST) {
  start();
}
