export default {
  entity: {
    id: '7e4d07d6-ab50-45d8-9077-669d907918c7',
    name: '红旗一九六二年第七期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e4d07d6-ab50-45d8-9077-669d907918c7.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '社会主义扩大再生产的几个问题',
        authors: ['苏星'],
        page_start: 3,
        page_end: 11,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 4, day: 1 }],
      },
      {
        title: '不违农时是领导农业生产的一项重要原则',
        authors: ['章竞'],
        page_start: 12,
        page_end: 17,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4, day: 1 }],
      },
      {
        title: '扎扎实实地做好工作',
        authors: ['林一舟'],
        page_start: 18,
        page_end: 21,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4, day: 1 }],
      },
      {
        title: '进一步加强成本管理',
        authors: ['赵少平'],
        page_start: 22,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4, day: 1 }],
      },
      {
        title: '自然科学和实际应用',
        authors: ['何祚麻'],
        page_start: 26,
        page_end: 30,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4, day: 1 }],
      },
      {
        title: '中国农民战争的自发性和觉悟性问题',
        authors: ['宁可'],
        page_start: 31,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7e4d07d6-ab50-45d8-9077-669d907918c7.pdf',
};
