export default {
  entity: {
    id: 'ff69a7c6-9559-4b80-98fa-cfbd3c072a56',
    name: '红旗一九六六年第六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ff69a7c6-9559-4b80-98fa-cfbd3c072a56.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '高举毛泽东思想伟大红旗积极参加社会主义文化大革命',
        authors: ['《解放军报》社论'],
        page_start: 3,
        page_end: 11,
        dates: [{ year: 1966 }],
      },
      {
        title: '工农兵群众批判吴晗反党反社会主义的政治立场和学术观点',
        authors: [],
        page_start: 12,
        page_end: 21,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '工农兵群众参加学术批判是划时代的大事',
        authors: ['红旗杂志评论员'],
        page_start: 22,
        page_end: 24,
        dates: [{ year: 1966 }],
      },
      {
        title: '评吴晗的《投枪集》',
        authors: ['史绍宾'],
        page_start: 25,
        page_end: 35,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.1, 0, 0.1],
    },
    ocr_exceptions: { '10': { vsplit: 0.35 }, '11': { vsplit: 0.35 } },
  },
  parser_id: 'automation',
  path: '/archives2/ff69a7c6-9559-4b80-98fa-cfbd3c072a56.pdf',
};
