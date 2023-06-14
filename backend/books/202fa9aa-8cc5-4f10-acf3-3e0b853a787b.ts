export default {
  entity: {
    id: '202fa9aa-8cc5-4f10-acf3-3e0b853a787b',
    name: '红旗一九六一年第五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/202fa9aa-8cc5-4f10-acf3-3e0b853a787b.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '在学术研究中坚持百花齐放百家争鸣的方针',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '我国社会主义建设中的劳动力问题',
        authors: ['马文瑞'],
        page_start: 8,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '阿尔巴尼亚人民胜利的斗争',
        authors: ['罗士高'],
        page_start: 19,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '调查研究的态度',
        authors: ['关锋'],
        page_start: 24,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '民主革命中的农民问题',
        authors: ['林一舟'],
        page_start: 29,
        page_end: 39,
        dates: [{ year: 1961, month: 3 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/202fa9aa-8cc5-4f10-acf3-3e0b853a787b.pdf',
};
