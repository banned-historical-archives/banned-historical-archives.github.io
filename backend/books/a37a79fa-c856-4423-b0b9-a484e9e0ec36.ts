export default {
  entity: {
    id: 'a37a79fa-c856-4423-b0b9-a484e9e0ec36',
    name: '红旗一九六四年第十一期',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a37a79fa-c856-4423-b0b9-a484e9e0ec36.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '发扬革命精神粉碎现代修正主义——五月二日在雅加达群众大会上演说的摘要',
        authors: ['迪·努·艾地'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1964 }],
      },
      {
        title: '沿着资本主义道路发展的南斯拉夫农业',
        authors: ['施东向'],
        page_start: 8,
        page_end: 24,
        dates: [{ year: 1964 }],
      },
      {
        title: '美国黑人的正义斗争必定胜利',
        authors: ['林文山', '郑公盾'],
        page_start: 25,
        page_end: 33,
        dates: [{ year: 1964 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '阶级斗争的生动教材——读《红色堡垒》',
        authors: ['黄秋耘'],
        page_start: 34,
        page_end: 36,
        dates: [{ year: 1964 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '大写社会主义英雄谱——读《武钢建设史话》',
        authors: ['宋爽'],
        page_start: 36,
        page_end: 38,
        dates: [{ year: 1964 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '怎样理解绝对真理、相对真理和实践标准——与何祚庥同志商榷',
        authors: ['陶德麟'],
        page_start: 39,
        page_end: 47,
        dates: [{ year: 1964 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a37a79fa-c856-4423-b0b9-a484e9e0ec36.pdf',
};
