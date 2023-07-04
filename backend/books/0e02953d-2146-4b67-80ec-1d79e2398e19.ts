export default {
  entity: {
    id: '0e02953d-2146-4b67-80ec-1d79e2398e19',
    name: '红旗一九六二年第二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0e02953d-2146-4b67-80ec-1d79e2398e19.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '反对美国反对派迫害美国共产党的暴行',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1962, month: 1, day: 16 }],
      },
      {
        title: '真理是具体的',
        authors: ['张世英'],
        page_start: 7,
        page_end: 14,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1, day: 16 }],
      },
      {
        title: '论自然科学中关于实践标准的若干问题',
        authors: ['何祚麻'],
        page_start: 15,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1, day: 16 }],
      },
      {
        title: '谦虚是恰如其分地反映实际',
        authors: ['吴介民'],
        page_start: 27,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1, day: 16 }],
      },
      {
        title: '关于国营企业中的职工代表大会制度',
        authors: ['李润之'],
        page_start: 35,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/0e02953d-2146-4b67-80ec-1d79e2398e19.pdf',
};
