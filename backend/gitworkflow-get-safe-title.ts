import { exec, execSync } from 'node:child_process';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import https from 'https';
import { Transform } from 'stream';
import fs from 'node:fs';
import JSON5 from 'json5';

export async function start() {
  const body = (process.env as any).TITLE.trim();
  const res = (body.split(']')[1] || '')
    .replace(/[\\\'\"\.\-\(\)]/g, '')
    .split('\r')[0]
    .split('\n')[0];
  console.log(res || 'unknown');
}

if (!(process.env as any).TEST) {
  start();
}
