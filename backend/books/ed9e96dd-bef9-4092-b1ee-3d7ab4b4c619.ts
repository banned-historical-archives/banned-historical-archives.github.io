export default {
  entity: {
    id: 'ed9e96dd-bef9-4092-b1ee-3d7ab4b4c619',
    name: '红旗一九六五年第六期',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ed9e96dd-bef9-4092-b1ee-3d7ab4b4c619.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '支持多米尼加人民反对美国武装侵略的声明',
        authors: ['毛泽东'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1965, month: 5, day: 12 }],
      },
      {
        title: '在印度尼西亚阿丽亚哈姆社会科学学院的讲话',
        authors: ['彭真'],
        page_start: 5,
        page_end: 20,
        dates: [{ year: 1965 }],
      },
      {
        title: '关于新基本粒子观的对话',
        authors: ['坂田昌一'],
        page_start: 21,
        page_end: 33,
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '《关于新基本粒子观的对话》注释',
        authors: ['庆承瑞', '柳树滋'],
        page_start: 34,
        page_end: 41,
        dates: [{ year: 1965 }],
      },
      {
        title: '马克思论资本主义社会的工资、价格和利润',
        authors: ['王学文'],
        page_start: 42,
        page_end: 47,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/ed9e96dd-bef9-4092-b1ee-3d7ab4b4c619.pdf',
};
