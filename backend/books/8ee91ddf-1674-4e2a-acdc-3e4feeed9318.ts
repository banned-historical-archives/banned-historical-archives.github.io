export default {
  entity: {
    id: '8ee91ddf-1674-4e2a-acdc-3e4feeed9318',
    name: '矛盾论 实践论（上海人民出版社1968年版）',
    internal: true,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8ee91ddf-1674-4e2a-acdc-3e4feeed9318.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '实践论',
        authors: ['毛泽东'],
        page_start: 5,
        page_end: 58,
        dates: [{ year: 1937, month: 7 }],
      },
      {
        title: '矛盾论',
        authors: ['毛泽东'],
        page_start: 59,
        page_end: 192,
        dates: [{ year: 1937, month: 8 }],
      },
    ],
    ocr: {
      content_thresholds: [0, 0.08, 0, 0],
      standard_paragraph_merge_strategy_threshold: 0.12,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/8ee91ddf-1674-4e2a-acdc-3e4feeed9318.pdf',
};
