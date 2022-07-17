import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import books from '../backend/books';
import { ContentType, ParserResult } from '../types';

describe('wansui1', async () => {
  const book = books.find((i) => i.entity.id === 'wansui1')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
  });
});

describe('wansui2', async () => {
  const book = books.find((i) => i.entity.id === 'wansui2')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
  });
});

describe('wansui3', async () => {
  const book = books.find((i) => i.entity.id === 'wansui3')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
  });
});

describe('wansui4', async () => {
  const book = books.find((i) => i.entity.id === 'wansui4')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
  });
});

describe('wansui5', async () => {
  const book = books.find((i) => i.entity.id === 'wansui5')!;
  const res = await book.parser(book.path, book.parser_option);
  it('title', () => {
    expect(res.map((i) => i.title)).toMatchSnapshot();
  });
});