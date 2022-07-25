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

describe('xuanji1', async () => {
  const book = books.find((i) => i.entity.id === 'xuanji1')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('xuanji2', async () => {
  const book = books.find((i) => i.entity.id === 'xuanji2')!;
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
  const book = books.find((i) => i.entity.id === 'xuanji3')!;
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
  const book = books.find((i) => i.entity.id === 'xuanji4')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});

describe('xuanji5', async () => {
  const book = books.find((i) => i.entity.id === 'xuanji5')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title & dates', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
    expect(res.map((i) => i.dates)).toMatchSnapshot();
  });
  it('comments & pivots', () => {
    expect(n_comments_equals_n_pivots(res)).toBe(true);
  });
});