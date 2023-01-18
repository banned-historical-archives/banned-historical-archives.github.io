export default {
  entity: {
    id: '959447a7-19ca-480b-b042-22c56f4bdb03',
    name: '国家与革命（人民出版社1976年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1976年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/959447a7-19ca-480b-b042-22c56f4bdb03.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '国家与革命',
        authors: ['列宁'],
        page_start: 7,
        page_end: 121,
        is_range_date: true,
        dates: [
          { year: 1917, month: 8 },
          { year: 1917, month: 9 },
        ],
      },
      { title: '注释', authors: [], page_start: 123, page_end: 135, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.076, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/959447a7-19ca-480b-b042-22c56f4bdb03.pdf',
};
