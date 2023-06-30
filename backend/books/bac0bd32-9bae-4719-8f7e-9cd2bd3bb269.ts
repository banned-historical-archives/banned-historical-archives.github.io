export default {
  entity: {
    id: 'bac0bd32-9bae-4719-8f7e-9cd2bd3bb269',
    name: '红旗一九六一年第二十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/bac0bd32-9bae-4719-8f7e-9cd2bd3bb269.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '工业技术工作的几个问题',
        authors: ['韩光'],
        page_start: 3,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
      {
        title: '“和平队”的花招',
        authors: ['屠楠'],
        page_start: 10,
        page_end: 12,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
      {
        title: '美帝国主义对日本垄断资本的控制',
        authors: ['茗柯'],
        page_start: 12,
        page_end: 19,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
      {
        title: '我国农业生产上的轮作换茬制度',
        authors: ['高惠民'],
        page_start: 20,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
      {
        title: '关于自然科学基础理论课的教学工作',
        authors: ['李卓宝', '江丕权'],
        page_start: 27,
        page_end: 33,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
      {
        title: '在一个星期天里',
        authors: ['周立波'],
        page_start: 34,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 12 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/bac0bd32-9bae-4719-8f7e-9cd2bd3bb269.pdf',
};
