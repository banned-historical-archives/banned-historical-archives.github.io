export default {
  entity: {
    id: 'f29a5aba-810b-42fd-883e-936b8433df2e',
    name: '红旗一九六三年第十九期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f29a5aba-810b-42fd-883e-936b8433df2e.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '伟大的中华人民共和国十四周年',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1963, month: 10, day: 1 }],
      },
      {
        title: '南斯拉夫是社会主义国家吗？——三评苏共中央的公开信',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 7,
        page_end: 28,
        dates: [{ year: 1963, month: 10, day: 1 }],
      },
      {
        title: '收获时节访小平易公社',
        authors: ['吴象', '张长珍', '姚文锦'],
        page_start: 29,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 10, day: 1 }],
      },
      {
        title: '关于发现问题和分析研究',
        authors: ['严中平'],
        page_start: 36,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 10, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/f29a5aba-810b-42fd-883e-936b8433df2e.pdf',
};
