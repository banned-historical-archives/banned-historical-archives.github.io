export default {
  entity: {
    id: 'fcd4f98d-789b-43d7-b468-453e2e756b34',
    name: '进一步，退两步（人民出版社1975年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1975年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/fcd4f98d-789b-43d7-b468-453e2e756b34.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '进一步，退两步',
        authors: ['列宁'],
        page_start: 8,
        page_end: 225,
        is_range_date: true,
        dates: [
          { year: 1904, month: 2 },
          { year: 1904, month: 5 },
        ],
      },
      { title: '注释', authors: [], page_start: 226, page_end: 237, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.124, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/fcd4f98d-789b-43d7-b468-453e2e756b34.pdf',
};
