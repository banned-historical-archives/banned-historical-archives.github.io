export default {
  entity: {
    id: '19124a6f-febc-4e6a-97b9-ac4dd804b309',
    name: '红旗一九六一年第十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/19124a6f-febc-4e6a-97b9-ac4dd804b309.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '十年前学术界的一次调查研究工作',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 6,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '中国人民民主统一战线的特点',
        authors: ['李维汉'],
        page_start: 7,
        page_end: 28,
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '对目前音乐创作中几个问题的理解',
        authors: ['吕骥'],
        page_start: 29,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '“做笨事”',
        authors: ['闻师润'],
        page_start: 35,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '西德垄断资本和它的向外扩张',
        authors: ['严希'],
        page_start: 37,
        page_end: 45,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/19124a6f-febc-4e6a-97b9-ac4dd804b309.pdf',
};
