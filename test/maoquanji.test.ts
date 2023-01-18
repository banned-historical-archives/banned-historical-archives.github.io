import {
  assert,
  expect,
  test,
  it,
  describe,
  beforeEach,
  beforeAll,
} from 'vitest';
import { join } from 'node:path';
import { get_book } from '../backend/books';
import { ContentType, ParserResult } from '../types';

describe('maoquanji-title', async () => {
  for (let idx = 27; idx <= 52; ++idx) {
    const book = await get_book(`maoquanji${idx}`);
    const res = await book.parser(book.path, book.parser_option);
    it('title', () => {
      expect(res.map((i) => i.title)).toMatchSnapshot();
    });
  }
});
