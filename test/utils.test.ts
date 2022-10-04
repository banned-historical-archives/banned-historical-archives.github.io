import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import { extract_dates } from '../backend/parser/utils';
import { ContentType, ParserResult } from '../types';
import { apply_patch_v2, bracket_left, bracket_right } from '../utils';

describe('extract_dates', async () => {
  it('format a', () => {
    expect(extract_dates('1911.10.10-1912.12.12')).toMatchSnapshot();
    expect(extract_dates('1911.10.10-12.12')).toMatchSnapshot();
    expect(extract_dates('1911.10.10-12')).toMatchSnapshot();
    expect(extract_dates('1911.10-12')).toMatchSnapshot();
  });
  it('format b', () => {
    expect(extract_dates('1911.10.10,11,12')).toMatchSnapshot();
    expect(extract_dates('1911.10,11,12')).toMatchSnapshot();
    expect(extract_dates('1911.10.21,10.22,11.23')).toMatchSnapshot();
    expect(extract_dates('1962.1.10,24,2.23')).toMatchSnapshot();
  });
  it('format c', () => {
    expect(extract_dates('1911.10.12')).toMatchSnapshot();
    expect(extract_dates('1911.10')).toMatchSnapshot();
    expect(extract_dates('1911')).toMatchSnapshot();
  });
  it('format d', () => {
    expect(extract_dates('一九三二年十月二十日至一九三三年十月二十日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月二十日至十二月二十日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月二十日至十二月')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月至十二月')).toMatchSnapshot();
  });
  it('format e', () => {
    expect(extract_dates('一九三二年十月二十日，二十一日，二十二日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月二十日，十一月十日，十一月十二日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月，十一月，十二月')).toMatchSnapshot();
    expect(extract_dates('1962年1月10日、24日，2月23日')).toMatchSnapshot();
  });
  it('format f', () => {
    expect(extract_dates('一九三二年十月二十日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月')).toMatchSnapshot();
    expect(extract_dates('一九三二年')).toMatchSnapshot();
  });
  it('format a with remove_unknowns', () => {
    expect(
      extract_dates(':191:1.1:0.10-1912.12.1:2', { remove_unknowns: true }),
    ).toMatchSnapshot();
  });
});

describe('apply_patch_v2', async () => {
  const result: ParserResult = {
    title: 'test',
    dates: [],
    is_range_date: false,
    parts: [
      {
        type: ContentType.paragraph,
        text: `mzd111jq222ywy`,
      },
      {
        type: ContentType.paragraph,
        text: `ZCQ`,
      },
    ],
    page_start: 0,
    page_end: 0,
    authors: ['test'],
    comments: ['MZD', 'JQ', 'ZCQ'],
    comment_pivots: [
      {
        part_idx: 0,
        index: 1,
        offset: 3,
      },
      {
        part_idx: 0,
        index: 2,
        offset: 8,
      },
      {
        part_idx: 1,
        index: 3,
        offset: 3,
      },
    ],
    description: 'asdf',
  };
  it('part modify', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertAfter: [],
            insertBefore: [],
            diff: '=20\t+1',
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('pivot modify', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertAfter: [],
            insertBefore: [],
            diff: '=4\t+5\t=16',
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('pivot modify2', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertAfter: [],
            insertBefore: [],
            diff: '=4\t+5\t=9\t+6\t=7',
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('part insert before + insert after', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertBefore: [{ type: ContentType.title, text: 'title' }],
            insertAfter: [{ type: ContentType.paragraph, text: 'signature' }],
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('part insert before + insert after + delete', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertBefore: [{ type: ContentType.title, text: 'title' }],
            insertAfter: [{ type: ContentType.paragraph, text: 'signature' }],
            delete: true,
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('part insert before + insert after + pivot modification', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            insertBefore: [{ type: ContentType.title, text: `title${bracket_left}23${bracket_right}` }],
            insertAfter: [{ type: ContentType.paragraph, text: 'signature' }],
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('comment modify + insert before after', () => {
    expect(
      apply_patch_v2(result, {
        parts: {},
        version: 2,
        comments: {
          '1': {
            insertAfter: [{text: 'after1'}],
            insertBefore: [{text: 'before1'}],
            diff: '=2\t+XX\t=1',
          }
        },
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('comment delete', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {},
        comments: {
          '2': {
            delete: true,
          }
        },
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('new comments', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {},
        comments: {},
        newComments: ['a', 'b', 'c'],
        description: '',
      }),
    ).toMatchSnapshot();
  });
  it('description remove', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {},
        comments: {},
      }),
    ).toMatchSnapshot();
  });
  it('description modification', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {},
        comments: {},
        description: '=2\t+111\t=2'
      }),
    ).toMatchSnapshot();
  });
  it('type modification', () => {
    expect(
      apply_patch_v2(result, {
        version: 2,
        parts: {
          '0': {
            type: ContentType.subtitle3,
          },
        },
        comments: {},
        description: '',
      }),
    ).toMatchSnapshot();
  });
});