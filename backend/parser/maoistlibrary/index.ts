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
import Peru from './Peru';
import India from './India';
import Philippines from './Philippines';
import Turkey from './Turkey';
import Afghanistan from './Afghanistan';
import NorthKalimantan from './NorthKalimantan';
import Nepal from './Nepal';
import Brazil from './Brazil';
import Chile from './Chile';
import France from './France';

export async function parse(
  path: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  return [
    ...Peru,
    ...India,
    ...Philippines,
    ...Turkey,
    ...Afghanistan,
    ...NorthKalimantan,
    ...Nepal,
    ...Brazil,
    ...Chile,
  ] as ParserResult[];
}
