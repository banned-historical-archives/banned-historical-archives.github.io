import { join } from 'node:path/posix';
import { existsSync } from 'node:fs';
import { Book, ParserOption } from '../types';
import * as jinghuo_parser from './parser/jinghuo_parser';
import * as wansui_parser from './parser/wansui_parser';
import * as wenji_parser from './parser/wenji_parser';
import * as jqjianghua_parser from './parser/jqjianghua_parser';
import * as xuanji_parser from './parser/xuanji';
import * as jimi from './parser/jimi';
import * as wenku_parser from './parser/wenku';
import * as zhangchunqiao from './parser/zhangchunqiao';
import * as maoquanji from './parser/maoquanji';
import * as maoyuanxin1 from './parser/maoyuanxin1';
import * as maoyuanxin2 from './parser/maoyuanxin2';
import * as maoyuanxin3 from './parser/maoyuanxin3';
import * as maoyuanxin4 from './parser/maoyuanxin4';
import * as maoyuanxin5 from './parser/maoyuanxin5';
import * as jiangqing1 from './parser/jiangqing1';
import * as wanghongwen from './parser/wanghongwen';
import * as wanghongwen1 from './parser/wanghongwen1';
import * as wanghongwen2 from './parser/wanghongwen2';
import * as wanghongwen3 from './parser/wanghongwen3';
import * as wanghongwen4 from './parser/wanghongwen4';
import * as wanghongwen5 from './parser/wanghongwen5';
import * as wanghongwen6 from './parser/wanghongwen6';
import * as wanghongwen7 from './parser/wanghongwen7';
import * as wanghongwen8 from './parser/wanghongwen8';
import * as yaowenyuan1 from './parser/yaowenyuan1';
import * as yaowenyuan from './parser/yaowenyuan';
import * as zhangchunqiao1 from './parser/zhangchunqiao1';
import * as zhangchunqiao2 from './parser/zhangchunqiao2';
import * as zhangchunqiao3 from './parser/zhangchunqiao3';
import * as zhangchunqiao4 from './parser/zhangchunqiao4';
import * as zhangchunqiao5 from './parser/zhangchunqiao5';
import * as zhangchunqiao6 from './parser/zhangchunqiao6';
import * as zhangchunqiao7 from './parser/zhangchunqiao7';
import * as zhangchunqiao8 from './parser/zhangchunqiao8';
import * as zhangchunqiao9 from './parser/zhangchunqiao9';
import * as zhangchunqiao10 from './parser/zhangchunqiao10';
import * as zhangchunqiao11 from './parser/zhangchunqiao11';
import * as zhangchunqiao12 from './parser/zhangchunqiao12';
import * as zhangchunqiao13 from './parser/zhangchunqiao13';
import * as zhangchunqiao14 from './parser/zhangchunqiao14';
import * as zhangchunqiao15 from './parser/zhangchunqiao15';
import * as note1 from './parser/note1';
import * as piliu1 from './parser/piliu1';
import * as zzj1 from './parser/zzj1';
import { apply_patch, get_article_id } from '../utils';
import { tranditionalChineseToSimpleChinese } from '../utils/i18n';
import { exclude, normalize } from './utils';

const patch_dir = join(normalize(__dirname), '../patch/articles');
const books: Book[] = [
  {
    entity: {
      id: 'maoxuan-jinghuo',
      name: '毛泽东选集1-7(静火版)',
      internal: false,
      official: false,
      author: '静火',
      type: 'pdf',
      files: '/books/maoxuan-jinghuo.pdf',
    },
    parser_option: {
      page_limits: [
        [20, 1183],
        [1192, 1489],
        [1504, 1791],
      ],
    },
    parser: jinghuo_parser.parse,
    path: join(normalize(__dirname), '../public/books/maoxuan-jinghuo.pdf'),
  },
  {
    entity: {
      id: 'wansui1',
      name: '毛泽东思想万岁(1913-1943卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui1a.pdf',
    },
    parser_option: {
      page_limits: [[9, 569]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui1a.pdf'),
  },
  {
    entity: {
      id: 'wansui2',
      name: '毛泽东思想万岁(1943-1949卷)',
      internal: false,
      official: false,
      author: '未知',
      type: 'pdf',
      files: '/books/wansui2a.pdf',
    },
    parser_option: {
      page_limits: [[9, 542]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui2a.pdf'),
  },
  {
    entity: {
      id: 'wansui3',
      name: '毛泽东思想万岁(1949-1957卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui3a.pdf',
    },
    parser_option: {
      page_limits: [[9, 508]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui3a.pdf'),
  },
  {
    entity: {
      id: 'wansui4',
      type: 'pdf',
      name: '毛泽东思想万岁(1958-1960卷)',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui4a.pdf',
    },
    parser_option: {
      page_limits: [[11, 674]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui4a.pdf'),
  },
  {
    entity: {
      id: 'wansui5',
      name: '毛泽东思想万岁(1961-1968卷)',
      type: 'pdf',
      internal: false,
      official: false,
      author: '未知',
      files: '/books/wansui5a.pdf',
    },
    parser_option: {
      page_limits: [[16, 668]],
    },
    parser: wansui_parser.parse,
    path: join(normalize(__dirname), '../public/books/wansui5a.pdf'),
  },
  {
    entity: {
      id: 'wenji1',
      type: 'pdf',
      name: '毛泽东文集第一卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji1.pdf',
    },
    parser_option: {
      page_limits: [[14, 526]],
      page_width: 435.2,
      content_min_x: 74.5,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji1.pdf'),
  },
  {
    entity: {
      id: 'wenji2',
      name: '毛泽东文集第二卷(1999)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji2.pdf',
    },
    parser_option: {
      page_limits: [[14, 481]],
      page_width: 393.2,
      content_min_x: 44.88,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji2.pdf'),
  },
  {
    entity: {
      id: 'wenji3',
      type: 'pdf',
      name: '毛泽东文集第三卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji3.pdf',
    },
    parser_option: {
      page_limits: [[12, 467]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji3.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji4',
      name: '毛泽东文集第四卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji4.pdf',
    },
    parser_option: {
      page_limits: [[15, 354]],
      page_width: 442,
      content_min_x: 74.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji4.pdf'),
  },
  {
    entity: {
      type: 'pdf',
      id: 'wenji5',
      name: '毛泽东文集第五卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji5.pdf',
    },
    parser_option: {
      page_limits: [[14, 363]],
      page_width: 382,
      content_min_x: 45.84,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji5.pdf'),
  },
  {
    entity: {
      id: 'wenji6',
      type: 'pdf',
      name: '毛泽东文集第六卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji6.pdf',
    },
    parser_option: {
      page_limits: [[15, 527]],
      page_width: 449.5,
      content_min_x: 72.28,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji6.pdf'),
  },
  {
    entity: {
      id: 'wenji7',
      type: 'pdf',
      name: '毛泽东文集第七卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji7.pdf',
    },
    parser_option: {
      page_limits: [[10, 474]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji7.pdf'),
  },
  {
    entity: {
      id: 'wenji8',
      type: 'pdf',
      name: '毛泽东文集第八卷(1999)',
      internal: false,
      official: true,
      author: '中央文献研究室',
      files: '/books/wenji8.pdf',
    },
    parser_option: {
      page_limits: [[12, 457]],
      page_width: 389.5,
      content_min_x: 43.24,
    },
    parser: wenji_parser.parse,
    path: join(normalize(__dirname), '../public/books/wenji8.pdf'),
  },
  {
    entity: {
      id: 'jqjianghua',
      type: 'pdf',
      name: '江青十年讲话汇编',
      internal: false,
      official: false,
      author: '',
      files: '/books/jqjianghua.pdf',
    },
    parser_option: {
      page_limits: [
        [7, 730],
        [736, 752],
      ],
    },
    parser: jqjianghua_parser.parse,
    path: join(normalize(__dirname), '../public/books/jqjianghua.pdf'),
  },
  {
    entity: {
      id: 'xuanji1',
      type: 'pdf',
      name: '毛泽东选集第一卷(1967)',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)1.pdf',
    },
    parser_option: {
      page_limits: [[12, 321]],
      name: 'xuanji1',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)1.pdf'),
  },
  {
    entity: {
      id: 'xuanji2',
      name: '毛泽东选集第二卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)2.pdf',
    },
    parser_option: {
      page_limits: [[12, 441]],
      name: 'xuanji2',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)2.pdf'),
  },
  {
    entity: {
      id: 'xuanji3',
      name: '毛泽东选集第三卷(1967)',
      type: 'pdf',
      internal: false,
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)3.pdf',
    },
    parser_option: {
      page_limits: [[10, 329]],
      name: 'xuanji3',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)3.pdf'),
  },
  {
    entity: {
      id: 'xuanji4',
      name: '毛泽东选集第四卷(1967)',
      internal: false,
      official: true,
      type: 'pdf',
      author: '毛泽东',
      files: '/books/毛泽东选集(1967)4.pdf',
    },
    parser_option: {
      page_limits: [[10, 395]],
      name: 'xuanji4',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1967)4.pdf'),
  },
  {
    entity: {
      id: 'xuanji5',
      name: '毛泽东选集第五卷(1977)',
      internal: false,
      type: 'pdf',
      official: true,
      author: '毛泽东',
      files: '/books/毛泽东选集(1977)5.pdf',
    },
    parser_option: {
      page_limits: [[16, 513]],
      page_width: 602,
      content_min_x: 90,
      header_min_height: 17,
      name: 'xuanji5',
    },
    parser: xuanji_parser.parse,
    path: join(normalize(__dirname), '../public/books/毛泽东选集(1977)5.pdf'),
  },
  {
    entity: {
      id: 'yaowenyuan',
      name: '姚文元文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '姚文元',
      files: '/books/姚文元文录.pdf',
    },
    parser_option: {
      page_limits: [[12, 876]],
    },
    parser: yaowenyuan.parse,
    path: join(normalize(__dirname), '../public/books/姚文元文录.pdf'),
  },
  {
    entity: {
      id: 'maoquanji27',
      name: '毛泽东全集第27卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/27-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            50, 58, 61, 78, 86, 90, 92, 93, 94, 95, 96, 97, 98, 99, 131, 153,
            159, 163, 170, 176, 178, 187, 188, 198, 222, 231, 255, 256, 257,
            258, 259, 260, 261, 262, 263, 270, 273, 280, 281, 282, 283, 284,
            285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 297, 300, 309,
            310, 312, 314, 316, 319, 323, 324, 325, 326, 328, 329, 332, 336,
            337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349,
            350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362,
            363, 364, 365, 366, 367, 369, 399, 400, 409, 413, 416, 422, 426,
            428, 429, 442, 443, 449, 468, 486, 497, 518, 530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/27-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji28',
      name: '毛泽东全集第28卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/28-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 540],
          [
            42, 51, 55, 57, 61, 72, 85, 89, 90, 91, 92, 93, 94, 95, 96, 102,
            103, 116, 118, 120, 122, 125, 129, 132, 134, 139, 149, 160, 161,
            163, 173, 190, 198, 200, 201, 205, 207, 218, 219, 221, 223, 225,
            227, 228, 231, 237, 239, 241, 246, 257, 262, 265, 267, 268, 273,
            277, 279, 282, 289, 291, 293, 295, 298, 300, 302, 305, 309, 312,
            314, 324, 330, 332, 334, 335, 338, 340, 346, 348, 352, 354, 356,
            366, 375, 377, 379, 383, 393, 394, 399, 401, 407, 409, 412, 416,
            419, 425, 430, 432, 445, 453, 454, 455, 474, 476, 478, 481, 488,
            489, 490, 491, 492, 493, 494, 495, 496, 497, 503, 504, 510, 511,
            512, 513, 516, 517, 519, 525, 526, 530, 533,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/28-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji29',
      name: '毛泽东全集第29卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/29-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 37],
        ...exclude(
          [38, 547],
          [
            39, 44, 54, 56, 74, 76, 79, 93, 109, 124, 129, 150, 169, 171, 175,
            181, 183, 184, 185, 186, 187, 188, 189, 198, 200, 201, 202, 203,
            204, 214, 218, 220, 221, 237, 277, 278, 293, 327, 328, 329, 330,
            333, 369, 394, 400, 402, 411, 439, 448, 462, 473, 477, 479, 490,
            495, 497, 499, 501, 503, 505, 532, 536, 539, 540, 543,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/29-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji30',
      name: '毛泽东全集第30卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/30-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 36],
        ...exclude(
          [37, 541],
          [
            46, 59, 81, 104, 128, 130, 152, 191, 204, 215, 219, 235, 254, 260,
            263, 265, 267, 270, 275, 296, 298, 314, 330, 331, 332, 333, 348,
            349, 350, 361, 368, 369, 370, 371, 372, 388, 390, 398, 410, 411,
            455, 463, 469, 472, 473, 474, 483, 494, 497, 509, 513, 514, 524,
            530,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/30-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji31',
      name: '毛泽东全集第31卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/31-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 39],
        ...exclude(
          [40, 548],
          [
            41, 42, 45, 46, 56, 59, 64, 81, 92, 97, 99, 107, 139, 143, 162, 176,
            213, 216, 238, 300, 362, 363, 364, 376, 396, 440, 448, 449, 502,
            504, 505,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/31-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji32',
      name: '毛泽东全集第32卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/32-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 34],
        ...exclude(
          [35, 535],
          [
            50, 95, 96, 97, 111, 112, 114, 123, 125, 136, 149, 154, 165, 192,
            193, 198, 203, 205, 209, 212, 213, 214, 230, 231, 247, 250, 265,
            270, 272, 273, 274, 279, 282, 290, 309, 313, 314, 315, 316, 317,
            318, 319, 321, 322, 323, 324, 326, 338, 340, 350, 351, 359, 374,
            387, 391, 409, 411, 415, 417, 418, 426, 427, 437, 478, 479, 480,
            481, 482, 500, 501, 502, 503, 505, 506, 507, 508, 509, 510, 511,
            512, 513, 514, 515, 516, 517, 518, 519, 521, 522, 523, 524, 525,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/32-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji33',
      name: '毛泽东全集第33卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/33-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 31],
        ...exclude(
          [32, 537],
          [
            43, 53, 54, 71, 101, 126, 127, 128, 132, 133, 134, 137, 141, 142,
            150, 151, 152, 155, 156, 165, 174, 186, 187, 189, 190, 210, 222,
            225, 231, 232, 236, 241, 246, 262, 271, 282, 295, 305, 307, 312,
            320, 322, 323, 331, 332, 333, 337, 338, 351, 352, 359, 363, 364,
            365, 374, 375, 377, 381, 387, 409, 412, 414, 415, 432, 437, 438,
            449, 451, 456, 462, 463, 464, 466, 475, 479, 482, 484, 489, 496,
            498, 500, 502, 504, 512, 515, 516, 517, 520, 525, 526, 527, 528,
            529, 530, 531, 534,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/33-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji34',
      name: '毛泽东全集第34卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/34-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 529],
          [
            43, 44, 48, 57, 58, 59, 60, 63, 70, 73, 74, 75, 77, 83, 86, 89, 90,
            93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 107, 108, 111, 113, 148,
            150, 151, 161, 166, 168, 169, 170, 181, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 192, 199, 205, 206, 213, 214, 216, 227, 243,
            244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
            257, 258, 259, 263, 264, 265, 266, 267, 268, 269, 273, 278, 279,
            314, 321, 326, 327, 328, 331, 350, 355, 380, 392, 394, 396, 397,
            402, 403, 404, 405, 406, 411, 412, 414, 415, 425, 430, 438, 440,
            447, 455, 461, 472, 479, 496, 521,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/34-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji35',
      name: '毛泽东全集第35卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/35-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 25],
        ...exclude(
          [26, 533],
          [
            27, 28, 35, 45, 46, 49, 53, 54, 55, 58, 59, 61, 62, 66, 73, 91, 92,
            93, 94, 109, 116, 129, 131, 158, 159, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 183, 200, 209, 210, 211, 216, 218,
            219, 270, 272, 335, 371, 372, 385, 459, 460, 461, 462, 463, 464,
            465, 470, 471, 472, 473, 477, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/35-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji36',
      name: '毛泽东全集第36卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/36-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 23],
        ...exclude(
          [24, 528],
          [
            31, 32, 46, 47, 58, 67, 74, 75, 77, 80, 90, 92, 101, 104, 112, 127,
            128, 130, 132, 133, 139, 140, 142, 143, 144, 145, 146, 147, 148,
            149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 162, 163,
            164, 174, 184, 192, 193, 195, 199, 200, 201, 204, 205, 206, 207,
            219, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 241, 247,
            263, 264, 265, 297, 319, 342, 343, 344, 345, 346, 349, 352, 355,
            356, 360, 362, 363, 364, 366, 367, 368, 369, 370, 371, 372, 373,
            375, 376, 379, 381, 382, 388, 391, 392, 393, 394, 395, 419, 447,
            449, 474, 517, 518,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/36-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji37',
      name: '毛泽东全集第37卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/37-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 19],
        ...exclude(
          [20, 522],
          [
            25, 26, 27, 28, 30, 37, 38, 39, 40, 41, 42, 45, 46, 76, 88, 89, 90,
            91, 94, 98, 105, 106, 107, 108, 109, 110, 111, 112, 119, 120, 121,
            122, 146, 147, 148, 163, 167, 183, 186, 194, 195, 205, 214, 215,
            217, 218, 226, 228, 271, 275, 301, 351, 352, 356, 357, 358, 359,
            360, 361, 362, 363, 364, 365, 366, 425, 426, 464,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/37-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji38',
      name: '毛泽东全集第38卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/38-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [12, 25],
        ...exclude(
          [26, 532],
          [
            29, 33, 45, 60, 63, 68, 76, 84, 85, 95, 96, 97, 98, 99, 100, 101,
            102, 103, 104, 115, 118, 193, 217, 218, 219, 220, 221, 225, 238,
            239, 241, 264, 267, 294, 297, 298, 299, 300, 301, 302, 304, 314,
            334, 335, 336, 349, 350, 351, 352, 353, 367, 368, 369, 381, 384,
            386, 389, 394, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
            420, 421, 438, 455, 456, 457, 458, 511, 512, 523, 531,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/38-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji39',
      name: '毛泽东全集第39卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/39-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 24],
        ...exclude(
          [25, 529],
          [
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 45, 59, 60, 85, 117,
            118, 119, 120, 121, 122, 123, 124, 128, 151, 152, 159, 160, 161,
            162, 163, 164, 165, 166, 197, 198, 199, 200, 201, 202, 203, 204,
            223, 224, 225, 226, 227, 233, 234, 235, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 258, 259, 260, 261, 262, 263, 264, 271,
            290, 300, 307, 361, 363, 373, 379, 380, 381, 382, 383, 384, 385,
            420, 421, 422, 434, 443, 444, 445, 456, 457, 460, 466, 468, 483,
            487, 508, 509, 515, 518, 519, 521, 522, 523, 524, 525, 526, 527,
            528,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/39-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji40',
      name: '毛泽东全集第40卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/40-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 22],
        ...exclude(
          [23, 528],
          [
            25, 26, 27, 28, 29, 30, 31, 32, 33, 37, 50, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 163, 165, 167, 168, 170,
            171, 172, 173, 174, 175, 176, 177, 178, 182, 183, 184, 185, 186,
            187, 188, 189, 190, 191, 192, 193, 194, 196, 197, 198, 199, 201,
            203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,
            217, 218, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230,
            231, 232, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 245,
            246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
            259, 261, 270, 273, 274, 278, 279, 280, 281, 282, 283, 284, 293,
            303, 311, 322, 332, 333, 334, 392, 426, 427, 428, 429, 430, 431,
            481, 482, 483, 486, 519,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/40-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'maoquanji41',
      name: '毛泽东全集第41卷',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张迪杰',
      files:
        'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives0/main/mao-quanji/41-OCR.pdf',
    },
    parser_option: {
      page_limits: [
        [11, 26],
        ...exclude(
          [27, 532],
          [
            53, 54, 60, 71, 98, 99, 100, 101, 125, 126, 127, 128, 129, 130, 136,
            138, 141, 147, 150, 152, 160, 164, 186, 209, 322, 323, 328, 333,
            334, 335, 336, 337, 338, 358, 360, 361, 362, 445, 446, 447, 448,
            455, 456, 463, 503, 504, 505, 506, 507, 527,
          ],
        ),
      ],
    },
    parser: maoquanji.parse,
    path: join(
      normalize(__dirname),
      '../public/books/archives0/mao-quanji/41-OCR.pdf',
    ),
  },
  {
    entity: {
      id: 'wanghongwen',
      name: '王洪文文集',
      internal: false,
      type: 'pdf',
      official: true,
      author: '王洪文',
      files: '/books/王洪文文集.pdf',
    },
    parser_option: {
      page_limits: [[4, 66]],
    },
    parser: wanghongwen.parse,
    path: join(normalize(__dirname), '../public/books/王洪文文集.pdf'),
  },
  {
    entity: {
      id: 'zhangchunqiao',
      name: '春桥文录',
      internal: false,
      type: 'pdf',
      official: true,
      author: '张春桥',
      files: '/books/zhangchunqiao.pdf',
    },
    parser_option: {
      page_limits: [[5, 290]],
    },
    parser: zhangchunqiao.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao.pdf'),
  },
  {
    entity: {
      id: 'wenku',
      name: '中国文化大革命文库(第一版)',
      internal: false,
      type: 'db',
      official: false,
      author: '宋永毅',
      files: '',
    },
    parser_option: {
      page_limits: [],
    },
    parser: wenku_parser.parse,
    path: join(normalize(__dirname), '../public/TheGPCRdatabase'),
  },
  {
    entity: {
      id: 'maoyuanxin1',
      name: '毛远新破坏民兵建设的部分罪行材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map((i, idx) => `/books/maoyuanxin1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[5, 16]],
    },
    parser: maoyuanxin1.parse,
    path: join(normalize(__dirname), '../public/books/maoyuanxin1'),
  },
  {
    entity: {
      id: 'jimi',
      name: '机密档案中新发现的毛泽东讲话',
      internal: false,
      official: false,
      type: 'epub',
      author: '',
      files: `/books/机密档案中新发现的毛泽东讲话.epub`,
    },
    parser_option: {
      page_limits: [],
    },
    parser: jimi.parse,
    path: join(
      normalize(__dirname),
      '../public/books/机密档案中新发现的毛泽东讲话.epub',
    ),
  },
  {
    entity: {
      id: 'wanghongwen1',
      name: '王洪文同志在山东重点企业批林批孔汇报会议上的讲话',
      internal: false,
      official: false,
      type: 'img',
      author: '王洪文',
      files: new Array(8)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: wanghongwen1.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen1'),
  },
  {
    entity: {
      id: 'wanghongwen2',
      name: '关于无产阶级文化大革命问题',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(10)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen2/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 10]],
    },
    parser: wanghongwen2.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen2'),
  },
  {
    entity: {
      id: 'wanghongwen3',
      name: '王洪文同志在接见四川大足汽车厂在北京学习班同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(4)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen3/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: wanghongwen3.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen3'),
  },
  {
    entity: {
      id: 'wanghongwen4',
      name: '王洪文在沪东造船厂发动群众对敌斗争现场会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(2)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen4/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: wanghongwen4.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen4'),
  },
  {
    entity: {
      id: 'wanghongwen5',
      name: '工总司负责人王洪文同志一月十一日在长宁区俱乐部的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(4)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen5/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: wanghongwen5.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen5'),
  },
  {
    entity: {
      id: 'wanghongwen6',
      name: '市革会领导成员、工总司主要负责人王洪文同志一九六七年十二月廿二日下午在铁路文化宫大会上的重要讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(6)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen6/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: wanghongwen6.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen6'),
  },
  {
    entity: {
      id: 'zzj1',
      name: '中共中央政治局同志7月30日晚接见全国计划工作座谈会全体同志时的讲话',
      internal: true,
      official: true,
      author: '',
      type: 'pdf',
      files: '/books/zzj1.pdf',
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: zzj1.parse,
    path: join(normalize(__dirname), '../public/books/zzj1.pdf'),
  },
  {
    entity: {
      id: 'yaowenyuan1',
      name: '姚文元同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '姚文元',
      files: new Array(10)
        .fill(0)
        .map((i, idx) => `/books/yaowenyuan1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 10]],
    },
    parser: yaowenyuan1.parse,
    path: join(normalize(__dirname), '../public/books/yaowenyuan1'),
  },
  {
    entity: {
      id: 'zhangchunqiao1',
      name: '“四人帮”罪行材料（六）',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(4)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 4]],
    },
    parser: zhangchunqiao1.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao1'),
  },
  {
    entity: {
      id: 'zhangchunqiao2',
      name: '“四人帮”罪行材料（二）',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(10)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao2/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 10]],
    },
    parser: zhangchunqiao2.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao2'),
  },
  {
    entity: {
      id: 'piliu1',
      name: '坚决批倒批臭刘少奇反革命修正主义路线',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(13)
        .fill(0)
        .map((i, idx) => `/books/piliu1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 13]],
    },
    parser: piliu1.parse,
    path: join(normalize(__dirname), '../public/books/piliu1'),
  },
  {
    entity: {
      id: 'zhangchunqiao3',
      name: '张春桥主任一九七五年三月一日在全军各大单位政治部主任座谈会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(21)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao3/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 21]],
    },
    parser: zhangchunqiao3.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao3'),
  },
  {
    entity: {
      id: 'zhangchunqiao4',
      name: '关于日本问题的报告',
      internal: true,
      official: true,
      type: 'img',
      author: '张春桥',
      files: new Array(6)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao4/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 6]],
    },
    parser: zhangchunqiao4.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao4'),
  },
  {
    entity: {
      id: 'zhangchunqiao5',
      name: '张春桥同志重要报告',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(19)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao5/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[3, 19]],
    },
    parser: zhangchunqiao5.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao5'),
  },
  {
    entity: {
      id: 'note1',
      name: '未知笔记',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map((i, idx) => `/books/note1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: note1.parse,
    path: join(normalize(__dirname), '../public/books/note1'),
  },
  {
    entity: {
      id: 'zhangchunqiao6',
      name: '张春桥同志在上海市革命委员会报告会上的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(16)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao6/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 16]],
    },
    parser: zhangchunqiao6.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao6'),
  },
  {
    entity: {
      id: 'zhangchunqiao7',
      name: '张春桥同志十二月十日下午接见宣传系统代表讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao7/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: zhangchunqiao7.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao7'),
  },
  {
    entity: {
      id: 'zhangchunqiao8',
      name: '内部参考',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao8/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: zhangchunqiao8.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao8'),
  },
  {
    entity: {
      id: 'zhangchunqiao9',
      name: '张春桥同志接见福建部分赴京革命同学的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao9/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao9.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao9'),
  },
  {
    entity: {
      id: 'maoyuanxin2',
      name: '毛远新同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map((i, idx) => `/books/maoyuanxin2/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: maoyuanxin2.parse,
    path: join(normalize(__dirname), '../public/books/maoyuanxin2'),
  },
  {
    entity: {
      id: 'maoyuanxin3',
      name: '毛远新同志在辽革站赴京代表团揭发批判宋任穷会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(1)
        .fill(0)
        .map((i, idx) => `/books/maoyuanxin3/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: maoyuanxin3.parse,
    path: join(normalize(__dirname), '../public/books/maoyuanxin3'),
  },
  {
    entity: {
      id: 'maoyuanxin4',
      name: '毛远新一九七四年一月在团省委召开的“学习吴献忠座谈会”上的讲话（节录）',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(9)
        .fill(0)
        .map((i, idx) => `/books/maoyuanxin4/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[2, 9]],
    },
    parser: maoyuanxin4.parse,
    path: join(normalize(__dirname), '../public/books/maoyuanxin4'),
  },
  {
    entity: {
      id: 'zhangchunqiao10',
      name: '张春桥同志接见上海《红革会》与《工人革命造反总司令部》代表的谈话记录',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(8)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao10/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 8]],
    },
    parser: zhangchunqiao10.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao10'),
  },
  {
    entity: {
      id: 'zhangchunqiao11',
      name: '张春桥同志十一月二十五日在市革会扩大会议上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(5)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao11/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: zhangchunqiao11.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao11'),
  },
  {
    entity: {
      id: 'zhangchunqiao12',
      name: '张春桥同志二月二十五日与华东局革命造反派座谈纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao12/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao12.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao12'),
  },
  {
    entity: {
      id: 'zhangchunqiao13',
      name: '张春桥同志讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao13/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao13.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao13'),
  },
  {
    entity: {
      id: 'zhangchunqiao14',
      name: '在工总司召开的“坚决响应毛主席伟大号召，‘斗私批修’誓师大会”上张春桥同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(4)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao14/${idx + 1}.png`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 4]],
    },
    parser: zhangchunqiao14.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao14'),
  },
  {
    entity: {
      id: 'wanghongwen7',
      name: '上海市机电一局系统活学活用毛泽东思想积极分子代表大会上市革委会领导成员、工总司负责人王洪文同志的讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(5)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen7/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 5]],
    },
    parser: wanghongwen7.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen7'),
  },
  {
    entity: {
      id: 'zhangchunqiao15',
      name: '未知出处材料',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(3)
        .fill(0)
        .map((i, idx) => `/books/zhangchunqiao15/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 3]],
    },
    parser: zhangchunqiao15.parse,
    path: join(normalize(__dirname), '../public/books/zhangchunqiao15'),
  },
  {
    entity: {
      id: 'wanghongwen8',
      name: '王洪文副主席重要电话指示',
      internal: true,
      official: true,
      type: 'img',
      author: '王洪文',
      files: new Array(1)
        .fill(0)
        .map((i, idx) => `/books/wanghongwen8/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: wanghongwen8.parse,
    path: join(normalize(__dirname), '../public/books/wanghongwen8'),
  },
  {
    entity: {
      id: 'jiangqing1',
      name: '江青同志昨天接见江苏代表团的一段讲话',
      internal: true,
      official: true,
      type: 'img',
      author: '江青',
      files: new Array(1)
        .fill(0)
        .map((i, idx) => `/books/jiangqing1/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 1]],
    },
    parser: jiangqing1.parse,
    path: join(normalize(__dirname), '../public/books/jiangqing1'),
  },
  {
    entity: {
      id: 'maoyuanxin5',
      name: '毛远新同志在辽联赴京代表团座谈会上的讲话纪要',
      internal: true,
      official: true,
      type: 'img',
      author: '',
      files: new Array(2)
        .fill(0)
        .map((i, idx) => `/books/maoyuanxin5/${idx + 1}.jpg`)
        .join(','),
    },
    parser_option: {
      page_limits: [[1, 2]],
    },
    parser: maoyuanxin5.parse,
    path: join(normalize(__dirname), '../public/books/maoyuanxin5'),
  },
].map((i) => {
  const book: Book = {
    entity: i.entity,
    parser_option: i.parser_option as ParserOption,
    path: i.path,
    parser: async (path: string, opt: ParserOption) => {
      const res = await i.parser(path, opt);
      for (const article of res) {
        for (const part of article.parts) {
          part.text = tranditionalChineseToSimpleChinese(part.text);
        }
        for (let i = 0; i < article.comments.length; ++i) {
          article.comments[i] = tranditionalChineseToSimpleChinese(
            article.comments[i],
          );
        }
        article.description = tranditionalChineseToSimpleChinese(
          article.description,
        );
        const id = get_article_id(article);
        const p = join(patch_dir, `[${id}][${i.entity.id}].ts`);
        if (existsSync(p)) {
          const x = await import(p);
          for (const patch of x.default) {
            apply_patch(article, patch);
          }
        }
      }
      return res;
    },
  };
  return book;
});

export default books;
