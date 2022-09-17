import { exec, execSync } from 'node:child_process'
import { join } from 'node:path';
import { writeFileSync } from 'node:fs';
import { LACResult, LACType } from '../types';
import { get_dirname } from './utils';

export default async function lac(text: string, dict?: string): Promise<LACResult[]> {
  text = text.replace(/\n/g, '');
  if (dict) {
    writeFileSync(join(get_dirname(), '../paddle/temp/temp.dict'), dict);
  }
  writeFileSync(join(get_dirname(), '../paddle/temp/temp.txt'), text);
  const lac_command = `docker run --rm --name dev -v $PWD/paddle:/paddle -t paddle-ocr-lac python /lac.py /paddle/temp/temp.txt ${
    dict ? '/paddle/temp/temp.dict' : ''
  }`;
  const raw = execSync(lac_command).toString();
  const [words, types]: [string[], LACType[]] = eval(raw.split('\n').filter(i => i[0] === '[')[0]);
  const res: {[key: string]: {
    count: number;
    type: LACType;
  }} = {};
  for (let i = 0;i < words.length; ++i) {
    const word = words[i];
    if (!res[word]) {
      res[word] = {
        count: 1,
        type: types[i],
      }
    } else {
      res[word].count++;
    }
  }
  return Object.keys(res).map(i => ({
    text: i,
    type: res[i].type,
    count: res[i].count,
  }));
}