import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import {get_book} from '../backend/books';
import { ContentType, ParserResult } from '../types';

describe('jqjianghua', async () => {
  const book = await get_book('jqjianghua');
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates & authors', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
    expect(res.map((i) => i.authors)).toMatchSnapshot();
  });
});