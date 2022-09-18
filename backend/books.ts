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
import * as maoyuanxin1 from './parser/maoyuanxin1';
import * as maoyuanxin3 from './parser/maoyuanxin3';
import * as maoyuanxin4 from './parser/maoyuanxin4';
import * as wanghongwen from './parser/wanghongwen';
import * as wanghongwen1 from './parser/wanghongwen1';
import * as wanghongwen2 from './parser/wanghongwen2';
import * as wanghongwen3 from './parser/wanghongwen3';
import * as wanghongwen4 from './parser/wanghongwen4';
import * as wanghongwen5 from './parser/wanghongwen5';
import * as wanghongwen6 from './parser/wanghongwen6';
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
import * as maoyuanxin2 from './parser/maoyuanxin2';
import * as note1 from './parser/note1';
import * as piliu1 from './parser/piliu1';
import * as zzj1 from './parser/zzj1';
import * as zhangchunqiao10 from './parser/zhangchunqiao10';
import * as zhangchunqiao11 from './parser/zhangchunqiao11';
import * as zhangchunqiao12 from './parser/zhangchunqiao12';
import * as zhangchunqiao13 from './parser/zhangchunqiao13';
import { apply_patch, get_article_id } from '../utils';
import { tranditionalChineseToSimpleChinese } from '../utils/i18n';
import { normalize } from './utils';

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
      name: '张春桥同志在上海市革命委员会扩大会议上的讲话纪要',
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
      name: '张春桥同志与华东局革命造反派座谈纪要',
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
      name: '张春桥同志关于二兵团上三司突然个别夺权的讲话',
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
