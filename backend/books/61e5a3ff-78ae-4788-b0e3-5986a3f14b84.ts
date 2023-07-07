export default {
  entity: {
    id: '61e5a3ff-78ae-4788-b0e3-5986a3f14b84',
    name: '红旗一九六二年第十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/61e5a3ff-78ae-4788-b0e3-5986a3f14b84.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '论总结农业生产经验',
        authors: ['马建犹'],
        page_start: 3,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 7, day: 16 }],
      },
      {
        title: '语言学习杂谈',
        authors: ['曹禹'],
        page_start: 10,
        page_end: 15,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 16 }],
      },
      {
        title: '谈谈共产党员的义务和权利',
        authors: ['苏沛', '刘家泽'],
        page_start: 16,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 16 }],
      },
      {
        title: '现代资产阶级的逻辑实证主义哲学',
        authors: ['任华'],
        page_start: 27,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 16 }],
      },
      {
        title: '关于诡辩论——读书札记',
        authors: ['邵铁真'],
        page_start: 36,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 16 }],
      },
      {
        title: '徒劳的“修漏补缺”——从腊斯克波恩之行看美国西德之间的裂痕',
        authors: ['席林生'],
        page_start: 40,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 7, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/61e5a3ff-78ae-4788-b0e3-5986a3f14b84.pdf',
};
