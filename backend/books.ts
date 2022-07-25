import {join} from 'node:path';
import {Book, ParserOption} from '../types';
import * as jinghuo_parser from './parser/jinghuo_parser';
import * as wansui_parser from './parser/wansui_parser';
import * as wenji_parser from './parser/wenji_parser';
import * as jqjianghua_parser from './parser/jqjianghua_parser';
import * as xuanji_parser from './parser/xuanji';

const books: Book[] = [
  {
    entity: {
      id: 'maoxuan-jinghuo',
      name: '毛泽东选集1-7（静火版）',
      internal: false,
      official: false,
      author: '静火',
      pdf: '/books/maoxuan-jinghuo.pdf',
    },
    parser_option: {
      page_limits: [
        [20, 1183],
        [1192, 1489],
        [1504, 1791],
      ],
    },
    parser: jinghuo_parser.parse,
    path: join(__dirname, '../public/books/maoxuan-jinghuo.pdf'),
  },
  {
    entity: {
      id: 'wansui1',
      name: '毛泽东思想万岁（1913-1943卷）',
      internal: false,
      official: false,
      author: '未知',
      pdf: '/books/wansui1a.pdf',
    },
    parser_option: {
      page_limits: [[9, 569]],
    },
    parser: wansui_parser.parse,
    path: join(__dirname, '../public/books/wansui1a.pdf'),
  },
  {
    entity: {
      id: 'wansui2',
      name: '毛泽东思想万岁（1943-1949卷）',
      internal: false,
      official: false,
      author: '未知',
      pdf: '/books/wansui2a.pdf',
    },
    parser_option: {
      page_limits: [[9, 542]],
    },
    parser: wansui_parser.parse,
    path: join(__dirname, '../public/books/wansui2a.pdf'),
  },
  {
    entity: {
      id: 'wansui3',
      name: '毛泽东思想万岁（1949-1957卷）',
      internal: false,
      official: false,
      author: '未知',
      pdf: '/books/wansui3a.pdf',
    },
    parser_option: {
      page_limits: [[9, 508]],
    },
    parser: wansui_parser.parse,
    path: join(__dirname, '../public/books/wansui3a.pdf'),
  },
  {
    entity: {
      id: 'wansui4',
      name: '毛泽东思想万岁（1958-1960卷）',
      internal: false,
      official: false,
      author: '未知',
      pdf: '/books/wansui4a.pdf',
    },
    parser_option: {
      page_limits: [[11, 674]],
    },
    parser: wansui_parser.parse,
    path: join(__dirname, '../public/books/wansui4a.pdf'),
  },
  {
    entity: {
      id: 'wansui5',
      name: '毛泽东思想万岁（1961-1968卷）',
      internal: false,
      official: false,
      author: '未知',
      pdf: '/books/wansui5a.pdf',
    },
    parser_option: {
      page_limits: [[16, 668]],
    },
    parser: wansui_parser.parse,
    path: join(__dirname, '../public/books/wansui5a.pdf'),
  },
  {
    entity: {
      id: 'wenji1',
      name: '毛泽东文集第一卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji1.pdf',
    },
    parser_option: {
      page_limits: [[14, 526]],
      page_width: 435.2,
      content_min_x: 74.5,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji1.pdf'),
  },
  {
    entity: {
      id: 'wenji2',
      name: '毛泽东文集第二卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji2.pdf',
    },
    parser_option: {
      page_limits: [[14, 481]],
      page_width: 393.2,
      content_min_x: 44.88,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji2.pdf'),
  },
  {
    entity: {
      id: 'wenji3',
      name: '毛泽东文集第三卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji3.pdf',
    },
    parser_option: {
      page_limits: [[12, 467]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji3.pdf'),
  },
  {
    entity: {
      id: 'wenji4',
      name: '毛泽东文集第四卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji4.pdf',
    },
    parser_option: {
      page_limits: [[15, 354]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji4.pdf'),
  },
  {
    entity: {
      id: 'wenji5',
      name: '毛泽东文集第五卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji5.pdf',
    },
    parser_option: {
      page_limits: [[14, 363]],
      page_width: 382,
      content_min_x: 45.84,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji5.pdf'),
  },
  {
    entity: {
      id: 'wenji6',
      name: '毛泽东文集第六卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji6.pdf',
    },
    parser_option: {
      page_limits: [[15, 527]],
      page_width: 449.5,
      content_min_x: 72.28,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji6.pdf'),
  },
  {
    entity: {
      id: 'wenji7',
      name: '毛泽东文集第七卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji7.pdf',
    },
    parser_option: {
      page_limits: [[10, 474]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji7.pdf'),
  },
  {
    entity: {
      id: 'wenji8',
      name: '毛泽东文集第八卷',
      internal: false,
      official: true,
      author: '中央文献研究室',
      pdf: '/books/wenji8.pdf',
    },
    parser_option: {
      page_limits: [[12, 457]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(__dirname, '../public/books/wenji8.pdf'),
  },
  {
    entity: {
      id: 'jqjianghua',
      name: '江青十年讲话汇编',
      internal: false,
      official: false,
      author: '',
      pdf: '/books/jqjianghua.pdf',
    },
    parser_option: {
      page_limits: [[7, 730], [736, 752]],
    },
    parser: jqjianghua_parser.parse,
    path: join(__dirname, '../public/books/jqjianghua.pdf'),
  },
  {
    entity: {
      id: 'xuanji1',
      name: '毛泽东选集第一卷(1967)',
      internal: false,
      official: true,
      author: '毛泽东',
      pdf: '/books/毛泽东选集(1967)1.pdf',
    },
    parser_option: {
      page_limits: [[12, 321]],
      name: 'xuanji1',
    },
    parser: xuanji_parser.parse,
    path: join(__dirname, '../public/books/毛泽东选集(1967)1.pdf'),
  },
];
export default books;