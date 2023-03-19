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
import England from './England';
import Norway from './Norway';
import America from './America';
import Italy from './Italy';
import Austria from './Austria';
import Australia from './Australia';
import Japan from './Japan';
import Switzerland from './Switzerland';
import Canada from './Canada';

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
    ...England,
    ...Norway,
    ...America,
    ...Italy,
    ...Austria,
    ...Australia,
    ...Japan,
    ...Switzerland,
    ...Canada,
  ] as ParserResult[];
}
