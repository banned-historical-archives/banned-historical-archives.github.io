export default {
  entity: {
    id: '987f953a-9243-422a-8b67-2fd03f523621',
    name: '红旗一九六三年第一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/987f953a-9243-422a-8b67-2fd03f523621.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '列宁主义和现代修正主义',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 10,
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
      {
        title: '革命的辩证法和对帝国主义的认识',
        authors: ['邵铁真'],
        page_start: 11,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
      {
        title: '既要重视政治，又要重视专业',
        authors: ['闻师润'],
        page_start: 19,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
      {
        title: '是共产主义呢，还是个人主义？',
        authors: ['牧惠'],
        page_start: 29,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
      {
        title: '不能把糟粕当作精华——谈评价我国文学遗产的一个问题',
        authors: ['公盾'],
        page_start: 35,
        page_end: 38,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
      {
        title: '社会主义再生产问题的讨论，在哪些方面前进了？',
        authors: ['苏星'],
        page_start: 39,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 5 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/987f953a-9243-422a-8b67-2fd03f523621.pdf',
};
