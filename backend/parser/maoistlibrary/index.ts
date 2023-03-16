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
import peru from './peru';
import india from './india';
import philippines from './philippines';
import turkey from './turkey';
import afghanistan from './afghanistan';
import northKalimantan from './NorthKalimantan';
import nepal from './Nepal';
import brazil from './Brazil';
import chile from './Chile';
import france from './France';
import Danmark from './Denmark';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  return [
    ...peru,
    ...india,
    ...philippines,
    ...turkey,
    ...afghanistan,
    ...northKalimantan,
    ...nepal,
    ...brazil,
    ...chile,
    ...france,
    ...Danmark,
  ] as ParserResult[];
}
