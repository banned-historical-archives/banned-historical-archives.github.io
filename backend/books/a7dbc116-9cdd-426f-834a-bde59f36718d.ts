export default {
  entity: {
    id: 'a7dbc116-9cdd-426f-834a-bde59f36718d',
    name: '红旗一九六〇年第十五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a7dbc116-9cdd-426f-834a-bde59f36718d.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '深入开展农村的社会主义、共产主义教育运动',
        authors: ['林铁'],
        page_start: 3,
        page_end: 7,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '巩固发展“两参一改三结合” 全面提高农业的管理水平',
        authors: ['王鹤峰'],
        page_start: 8,
        page_end: 17,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '充分利用野杂织维',
        authors: ['王达成'],
        page_start: 18,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '加速农业技术改造，深入开展农具改革运动',
        authors: ['宋维静'],
        page_start: 24,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '教育工作中的群众路线',
        authors: ['桂林栖'],
        page_start: 30,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '论对立面的统一',
        authors: ['关锋'],
        page_start: 35,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a7dbc116-9cdd-426f-834a-bde59f36718d.pdf',
};
