import type Publication from '../backend/entity/publication';

export enum ContentType {
  authors = 'authors',
  appellation = 'appellation',
  title = 'title',
  subtitle = 'subtitle',
  subdate = 'subdate',
  description = 'description',
  paragraph = 'paragraph',
  quotation = 'quotation',
  comment = 'comment',
}

export type ContentPartRaw = {
  text: string;
  type: ContentType;
};
export type ContentPart = {
  text: string;
  type: ContentType;
};

export type Date = {
  year?: number;
  month?: number;
  day?: number;
};

export type Pivot = {
  part_idx: number; // -1表示标题
  index: number; // -1表示标题, -99 表示未知
  offset: number; // -99 表示未知
}

export type ParserResult = {
  title: string;
  dates: Date[];
  is_range_date: boolean;
  authors: string[];
  parts: ContentPart[];
  comments: string[];
  comment_pivots: Pivot[];
  description: string;
  page_start: number;
  page_end: number;
  origin?: string; // 起源

  title_raw?: string;
  date_raw?: string;
  parts_raw?: ContentPartRaw[];
};

export enum ArticleType {
  writings = 'writings',
  instruction = 'instruction',
  talk = 'talk',
  lecture = 'lecture',
  declaration = 'declaration',
  telegram = 'telegram',
  mail = 'mail',
  comment = 'comment',
}

export type OCRPosition = [number, number];
export type OCRResult = {
  box: [OCRPosition, OCRPosition, OCRPosition, OCRPosition],
  text: string,
};
export type LACType =
  | 'n' // 普通名词
  | 'f' // 方位名词
  | 's' // 处所名词
  | 't' // 时间
  | 'nr' // 人名
  | 'ns' // 地名
  | 'nt' // 机构名
  | 'nw' // 作品名
  | 'nz' // 其他专名
  | 'v' // 普通动词
  | 'vd' // 动副词
  | 'vn' // 名动词
  | 'a' // 形容词
  | 'ad' // 副形词
  | 'an' // 名形词
  | 'd' // 副词
  | 'm' // 数量词
  | 'q' // 量词
  | 'r' // 代词
  | 'p' // 介词
  | 'c' // 连词
  | 'u' // 助词
  | 'xc' // 其他虚词
  | 'w' // 标点符号
  | 'PER' // 人名
  | 'LOC' // 地名
  | 'ORG' // 机构名
  | 'TIME'; // 时间

export type LACResult = {
  text: string;
  count: number;
  type: LACType;
};

export type ParserOption = {
  page_limits: [number, number][];
  page_width?: number;
  content_min_x?: number;
  name?: string;
  header_min_height?: number;
};

export type Book = {
  entity: Partial<Publication>;
  path: string;
  parser_option: ParserOption;
  parser: (path: string, opt: ParserOption) => Promise<ParserResult[]>;
};