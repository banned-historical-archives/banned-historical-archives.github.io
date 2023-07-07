export default {
  entity: {
    id: '8f08406e-8cf1-435f-81a3-bb56ff413de6',
    name: '红旗一九六二年第十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/8f08406e-8cf1-435f-81a3-bb56ff413de6.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '加速采掘工业的发展',
        authors: ['薄一波'],
        page_start: 3,
        page_end: 12,
        dates: [{ year: 1962, month: 7, day: 1 }],
      },
      {
        title: '“人民资本主义”的反动本质',
        authors: ['黄范章'],
        page_start: 13,
        page_end: 21,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 1 }],
      },
      {
        title: '资产阶级议会民主的虚伪性',
        authors: ['张友渔'],
        page_start: 22,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 1 }],
      },
      {
        title: '新的“挑战”和新的“选择”',
        authors: ['向阳'],
        page_start: 30,
        page_end: 33,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 1 }],
      },
      {
        title: '利害篇',
        authors: ['关锋'],
        page_start: 34,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 1 }],
      },
      {
        title: '艺术风格的独特性和多样性——文艺随笔',
        authors: ['冯其庸'],
        page_start: 36,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/8f08406e-8cf1-435f-81a3-bb56ff413de6.pdf',
};
