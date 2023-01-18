import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import books, { get_book } from '../backend/books';
import { ContentType, ParserResult } from '../types';

function n_comments_equals_n_pivots(res: ParserResult[]) {
  for (const i of res) {
    const temp: { [key: string]: boolean } = {};
    i.comment_pivots.forEach((j) => {
      temp[j.index] = true;
    });
    const matched = Object.keys(temp).length === i.comments.length;
    if (!matched) return false;
  }
  return true;
}

describe('xuanji1', async () => {
  const book = await get_book('xuanji1')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('alignment', () => {
    expect(res[1]).toMatchSnapshot();
  });
});

describe('xuanji2', async () => {
  const book = await get_book('xuanji2')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('xuanji3', async () => {
  const book = await get_book('xuanji3')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('xuanji4', async () => {
  const book = await get_book('xuanji4')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('description merge', () => {
    expect(
      res.filter((i) => i.title === '第十八集团军总司令给蒋介石的两个电报'),
    ).toMatchSnapshot();
  });
});

describe('xuanji5', async () => {
  const book = await get_book('xuanji5')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('alignment', () => {
    expect(res.filter(i => i.title === '中共中央关于西藏工作方针的指示')[0]).toMatchSnapshot();
    expect(res.filter(i => i.title === '永远保持艰苦奋斗的作风')[0]).toMatchSnapshot();
  });
});