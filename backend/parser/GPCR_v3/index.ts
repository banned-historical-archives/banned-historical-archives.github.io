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
import jq from './jq';
import a from './others-a';
import b from './others-a';
import c from './others-a';
import ywy from './ywy';
import whw from './whw';
import zcq from './zcq';
import lb from './lb';
import mzd from './mzd';
import zp from './zp';
import jpc from './jpc';
import zcq2 from './zcq2';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  return [
    ...mzd,
    ...lb,
    ...whw,
    ...jq,
    ...zcq,
    ...ywy,
    ...a,
    ...b,
    ...c,
    ...jpc,
    ...zcq2,
    ...zp,
  ] as ParserResult[];
}
