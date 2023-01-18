export default {
  entity: {
    id: 'b6d68afa-47f6-48f4-922a-48a29a80c878',
    name: '中国古代史（下）（南京大学历史系1976年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '南京大学历史系1976年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/b6d68afa-47f6-48f4-922a-48a29a80c878.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第一章 明朝后期商品经济的发展和政治思想文化领域的斗争（公元1522——1626年）',
        authors: ['南京大学历史系'],
        page_start: 10,
        page_end: 89,
        dates: [{ year: 1976, month: 10 }],
      },
      {
        title:
          '第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第二章 明末清初“天崩地解”的农民革命战争和社会进步思潮（公元1627——1644年）',
        authors: ['南京大学历史系'],
        page_start: 90,
        page_end: 211,
        dates: [{ year: 1976, month: 10 }],
      },
      {
        title:
          '第五编 封建社会衰落阶段（从明朝后期到清朝前期——鸦片战争前） 第三章 清朝前期统一多民族国家的巩固和封建社会的没落（公元1664——1840年）',
        authors: ['南京大学历史系'],
        page_start: 212,
        page_end: 413,
        dates: [{ year: 1976, month: 10 }],
      },
      {
        title: '中国古代历史年表',
        authors: ['南京大学历史系'],
        page_start: 414,
        page_end: 415,
        dates: [{ year: 1976, month: 10 }],
      },
      {
        title: '编后记',
        authors: ['南京大学历史系'],
        page_start: 508,
        page_end: 509,
        dates: [{ year: 1977, month: 6 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.132, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/b6d68afa-47f6-48f4-922a-48a29a80c878.pdf',
};
