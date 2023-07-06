export default {
  entity: {
    id: '5e528b54-0fe4-4882-80d2-eb5d7592e9f8',
    name: '红旗一九六二年第五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5e528b54-0fe4-4882-80d2-eb5d7592e9f8.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '刚果的形势说明了什么',
        authors: ['郭济洲', '吴休'],
        page_start: 3,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 3, day: 1 }],
      },
      {
        title: '奴役，还是进步',
        authors: ['陈原'],
        page_start: 10,
        page_end: 13,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3, day: 1 }],
      },
      {
        title: '肯尼迪与牛奶',
        authors: ['岑桑'],
        page_start: 13,
        page_end: 14,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3, day: 1 }],
      },
      {
        title: '关于认识中的肯定否定问题——谈太阳系学说的一段历史',
        authors: ['龚育之'],
        page_start: 15,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3, day: 1 }],
      },
      {
        title: '我们的时代和卡德尔的“辩证法”',
        authors: ['吴江'],
        page_start: 19,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/5e528b54-0fe4-4882-80d2-eb5d7592e9f8.pdf',
};
