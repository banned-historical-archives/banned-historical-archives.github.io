import { assert, expect, test, it, describe, beforeEach, beforeAll } from 'vitest';
import { join } from 'node:path';
import { extract_dates } from '../backend/parser/utils';
import { ContentType, ParserResult } from '../types';

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
  });
  it('format f', () => {
    expect(extract_dates('一九三二年十月二十日')).toMatchSnapshot();
    expect(extract_dates('一九三二年十月')).toMatchSnapshot();
    expect(extract_dates('一九三二年')).toMatchSnapshot();
  });
});
