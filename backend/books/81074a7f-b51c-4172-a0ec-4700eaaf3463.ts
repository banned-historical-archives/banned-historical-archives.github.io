export default {
  entity: {
    id: '81074a7f-b51c-4172-a0ec-4700eaaf3463',
    name: '红旗一九六三年第六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/81074a7f-b51c-4172-a0ec-4700eaaf3463.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '尼赫鲁标榜的“社会主义”是什么货色？',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 11,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
      {
        title: '关于资产阶级国有化',
        authors: ['有林'],
        page_start: 12,
        page_end: 21,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
      {
        title: '高尔基的革命传统和战斗精神',
        authors: ['以群'],
        page_start: 22,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
      {
        title: '我国社会主义统一的国内市场',
        authors: ['管大同'],
        page_start: 30,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
      {
        title: '一个很好的革命传统',
        authors: ['陈展超'],
        page_start: 38,
        page_end: 41,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
      {
        title: '正确地对待考据',
        authors: ['杨永志'],
        page_start: 41,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/81074a7f-b51c-4172-a0ec-4700eaaf3463.pdf',
};
