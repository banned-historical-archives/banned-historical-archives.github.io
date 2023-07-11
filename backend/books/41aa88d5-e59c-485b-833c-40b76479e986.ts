export default {
  entity: {
    id: '41aa88d5-e59c-485b-833c-40b76479e986',
    name: '红旗一九六三年第五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/41aa88d5-e59c-485b-833c-40b76479e986.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于目前帝国主义矛盾发展的若干问题',
        authors: ['范承祥'],
        page_start: 3,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 3, day: 16 }],
      },
      {
        title: '论太谷县的农业技术改革',
        authors: ['陶鲁笳'],
        page_start: 21,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 3, day: 16 }],
      },
      {
        title: '题材多样化与作品的思想性',
        authors: ['景元'],
        page_start: 30,
        page_end: 33,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 3, day: 16 }],
      },
      {
        title: '谈开展批评与鼓励创作',
        authors: ['冯健男'],
        page_start: 34,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 3, day: 16 }],
      },
      {
        title: '诡辩论和辩证法的根本对立',
        authors: ['张世英'],
        page_start: 37,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 3, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/41aa88d5-e59c-485b-833c-40b76479e986.pdf',
};
