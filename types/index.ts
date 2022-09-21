import type Publication from '../backend/entity/publication';

export enum ArticleCategory {
  centralFile = '中央文件',
  editorial = '重要报刊和社论',
  keyFigures = '关键人物文稿',
  keyPapersFromTheMasses = '群众运动重要文献',
}

export enum TagType {
  articleCategory = '文稿大类',
  articleType = '文稿类型',
  place = '地点',
  character = '人物',
  issuer = '发行机构',
  subject = '主题',
}

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
  alias?: string;
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
  tags?: {
    name: string,
    type: TagType
  }[];
  file_id?: string;

  title_raw?: string;
  date_raw?: string;
  parts_raw?: ContentPartRaw[];
};

export enum ArticleType {
  writings = '文章',
  mail = '书信',
  lecture = '发言',
  talk = '对话',
  declaration = '宣言',
  instruction = '指示',
  comment = '批示',
  telegram = '通讯',
}

export type OCRPosition = [number, number];
export type OCRResult = {
  // 坐标轴原点在左上角，y轴朝下
  // 左上，右上，右下，左下
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

export type Patch = {
  parts: {[idx: string]: string},
  comments: {[idx: string]: string},
  description: string,
}