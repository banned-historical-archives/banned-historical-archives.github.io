import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import books from '../backend/books';
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

describe('wenji1', async () => {
  const book = books.find((i) => i.entity.id === 'wenji1')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('paragraph merge & comment merge', () => {
    expect(res[1]).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
});

describe('wenji2', async () => {
  const book = books.find((i) => i.entity.id === 'wenji2')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('paragraph merge & comment merge', () => {
    expect(res[0]).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('aligment', () => {
    expect(res.find(i => i.title === '关于差别和矛盾问题')).toMatchSnapshot();
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
});

describe('wenji3', async () => {
  const book = books.find((i) => i.entity.id === 'wenji3')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
});

describe('wenji4', async () => {
  const book = books.find((i) => i.entity.id === 'wenji4')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
});

describe('wenji5', async () => {
  const book = books.find((i) => i.entity.id === 'wenji5')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('wenji6', async () => {
  const book = books.find((i) => i.entity.id === 'wenji6')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('wenji7', async () => {
  const book = books.find((i) => i.entity.id === 'wenji7')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('wenji8', async () => {
  const book = books.find((i) => i.entity.id === 'wenji8')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('ensure dates', () => {
    expect(res.reduce((m, i) => m && i.dates.length > 0, true)).toBe(true);
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});