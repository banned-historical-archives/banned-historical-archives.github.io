export default {
  entity: {
    id: 'd44d1f38-01f5-4df7-a3c1-b7eca571d4c2',
    name: '红旗一九六三年第二十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/d44d1f38-01f5-4df7-a3c1-b7eca571d4c2.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '两种根本对立的和平共处政策——六评苏共中央的公开信',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 22,
        dates: [{ year: 1963, month: 12, day: 12 }],
      },
      {
        title: '信用合作社在我国现阶段的历史使命',
        authors: ['邓子恢'],
        page_start: 23,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 12, day: 12 }],
      },
      {
        title: '新老殖民主义者争夺刚果的真相',
        authors: ['苑文'],
        page_start: 32,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 12, day: 12 }],
      },
      {
        title: '现代资产阶级的新实在论哲学',
        authors: ['任华'],
        page_start: 40,
        page_end: 47,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 12, day: 12 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/d44d1f38-01f5-4df7-a3c1-b7eca571d4c2.pdf',
};
