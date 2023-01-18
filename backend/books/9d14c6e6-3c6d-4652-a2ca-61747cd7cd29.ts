export default {
  entity: {
    id: '9d14c6e6-3c6d-4652-a2ca-61747cd7cd29',
    name: '社会民主党在民主革命中的两种策略（人民出版社1971年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1971年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/9d14c6e6-3c6d-4652-a2ca-61747cd7cd29.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '社会民主党在民主革命中的两种策略',
        authors: ['列宁'],
        page_start: 7,
        page_end: 124,
        is_range_date: true,
        dates: [
          { year: 1905, month: 6 },
          { year: 1905, month: 7 },
        ],
      },
      { title: '注释', authors: [], page_start: 125, page_end: 130, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.108, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/9d14c6e6-3c6d-4652-a2ca-61747cd7cd29.pdf',
};
