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
  issuer = '出版方/发行方',
  subject = '主题/事件',
  recorder = '记录',
  reviewer = '审核',
  translator = '翻译',
  reprint = '翻印/传抄',
}

export enum ImageTagType {
  place = 'place',
  character = 'character',
  subject = 'subject',
}

export enum ContentType {
  appellation = 'appellation',
  title = 'title',
  subtitle = 'subtitle',
  subtitle2 = 'subtitle2',
  subtitle3 = 'subtitle3',
  subtitle4 = 'subtitle4',
  subtitle5 = 'subtitle5',
  subdate = 'subdate',
  paragraph = 'paragraph',
  quotation = 'quotation',
  signature = 'signature',
  image = 'image',
  image_description = 'image_description',
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
  part_idx: number; // 从 0 开始
  index: number; // 注释编号
  offset: number; // 偏移量，从 0 开始，注释应该插入的index，比如'mzd[2]'的offset为3
};

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
    name: string;
    type: TagType;
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
  box: [OCRPosition, OCRPosition, OCRPosition, OCRPosition];
  text: string;
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

export type ParserOptionV2 = {
  archive_id?: number;
  internal?: boolean;
  official?: boolean;
  author?: string;
  articles?: {
    title: string;
    authors: string[]; // 作者
    dates: Date[]; // 时间 或者 时间范围 或者 多个时间点
    is_range_date?: boolean; // 如果为 true 表示一段时间，如果为false表示多/单个时间点
    alias?: string; // 标题别名
    ocr?: Partial<OCRParameter & OCRParameterAdvanced>; // 此参数比全局ocr参数的优先级高，默认为空
    ocr_exceptions?: {
      [key: string]: Partial<OCRParameter & OCRParameterAdvanced>;
    };
    tags?: { name: string; type: keyof typeof TagType }[];
    page_start: number;
    page_end: number;
  }[];
  ext?: string;
  ocr?: Partial<OCRParameter & OCRParameterAdvanced>; // ocr 全局参数
  ocr_exceptions?: {
    [key: string]: Partial<OCRParameter & OCRParameterAdvanced>;
  }; // 例外， 比如第三页的ocr参数与其他页面不同，默认为空，此参数比articles中的优先级高
};

export type ParserOption = ParserOptionV2 & {
  page_limits: [number, number][];

  /*legacy*/
  page_width?: number;
  content_min_x?: number;
  name?: string;
  header_min_height?: number;
};

export type OCRParameter = {
  rec_model: string;
  rec_backend: string;
  det_model: string;
  det_backend: string;
  resized_shape: number;
  box_score_thresh: number;
  min_box_size: number;
};

export type OCRParameterAdvanced = {
  line_merge_threshold: number; // 单位像素，如果小于这个阈值将被视为同一行
  standard_paragraph_merge_strategy_threshold: number; // 标准段落合并策略，超过 threshold * width 的表示新段落，否则向上合并
  differential_paragraph_merge_strategy_threshold: number; // 差分段落合并策略，x[i] - x[i-1] > threshold 的表示新段落，否则向上合并，单位像素
  content_thresholds: [number, number, number, number]; // 通常需要忽略在页面边缘的页眉，页码或者噪声，数组内4个数值分别表示上下左右相对于宽高的比例， 例如 [0.1,0,0,0] 表示忽略顶部占总高度百分之10的内容
  auto_vsplit: boolean; // 用于分页或者处理特殊的排版。如果为 ture，当页面宽度大于高度时，将ocr结果中页面中间(vsplit的位置)分开
  vsplit: number; // 如果设置为0.5，ocr结果将从页面宽度的50%处分割，如果为0表示不分割。当auto_vsplit为false且vsplit不为0时，表示任何页面都进行分割。
};

export type Book = {
  entity: Partial<Publication>;
  path: string;
  parser_option: ParserOption;
  parser_id: string;
  parser: (path: string, opt: ParserOption) => Promise<ParserResult[]>;
};

export type Patch = {
  parts: { [idx: string]: string };
  comments: { [idx: string]: string };
  description: string;
};

export type StringDiff = string;

export type PartDiff = {
  insertBefore?: ContentPart[];
  insertAfter?: ContentPart[];
  delete?: boolean;
  diff?: StringDiff;
  type?: ContentType;
};

export type CommentDiff = {
  insertBefore?: { id?: string; text: StringDiff }[];
  insertAfter?: { id?: string; text: StringDiff }[];
  delete?: boolean;
  diff?: StringDiff;
};

export type PatchV2 = {
  version: 2;
  parts: { [idx: string]: PartDiff };
  comments: { [idx: string]: CommentDiff };
  newComments?: string[];
  description?: StringDiff; // 如果为空字符串表示无变更，如果不存在，表示删除
};
