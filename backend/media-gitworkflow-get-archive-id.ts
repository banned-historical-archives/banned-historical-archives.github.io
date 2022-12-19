import { exec, execSync } from 'node:child_process'
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import https from 'https';
import { Transform } from 'stream';
import fs from 'node:fs';
import { parse } from './parser/automation';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';

const body = (process.env as any).BODY.trim();
const raw_title = (process.env as any).TITLE.trim();

export async function start() {
  if (raw_title.startsWith('[自动化多媒体录入]')) {
    try {
      const body1: string = body.substring(0, body.lastIndexOf('```'));
      const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
      const config = JSON5.parse(body2);
      config.archive_id =
        config.archive_id == undefined ? 7 : config.archive_id;
      console.log(config.archive_id);
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