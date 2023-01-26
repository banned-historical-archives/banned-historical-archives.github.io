import { readFileSync } from 'fs';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../../types';
import { merge_to_lines, pdfjsContentToOCRResult } from '../utils';
import { normalize } from '../../utils';
import { join, basename } from 'node:path/posix';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const jq: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './jq.x')).toString(),
  );
  const whw: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './whw.x')).toString(),
  );
  const zcq: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './zcq.x')).toString(),
  );
  const ywy: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './ywy.x')).toString(),
  );
  const a: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './others-a.x')).toString(),
  );
  const b: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './others-b.x')).toString(),
  );
  const c: ParserResult[] = JSON.parse(
    readFileSync(join(normalize(__dirname), './others-c.x')).toString(),
  );
  return [...whw, ...jq, ...zcq, ...ywy, ...a, ...b, ...c];
}
