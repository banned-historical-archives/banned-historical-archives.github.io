import { assert, expect, test } from 'vitest';
import * as jinghuo_parser from '../backend/parser/jinghuo_parser';
import { join } from 'node:path';
import books from '../backend/books';
import { ContentType } from '../types';

test('comments pivot', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[20, 24]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('truncated comment', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[872, 875]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('multiline comment', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[1554, 1555]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('subtitle', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[243, 261]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('fix 愚公移山', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[637, 638]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('comment confusing brace', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[1650, 1655]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(true);
  expect(res).toMatchSnapshot();
});

test('comment pivot', async () => {
  const res = await jinghuo_parser.parse(
    books.find((i) => i.entity.id === 'maoxuan-jinghuo')!.path,
    { page_limits: [[1574, 1574]] },
  );
  expect(res[0].comment_pivots.length === res[0].comments.length).toBe(false);
  expect(res).toMatchSnapshot();
});
