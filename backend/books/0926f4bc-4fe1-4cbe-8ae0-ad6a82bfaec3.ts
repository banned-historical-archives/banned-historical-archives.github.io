export default {
  entity: {
    id: '0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3',
    name: '工资、价格和利润（人民出版社1974年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思，人民出版社1974年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '工资、价格和利润',
        authors: ['马克思'],
        page_start: 10,
        page_end: 66,
        is_range_date: true,
        dates: [
          { year: 1865, month: 5 },
          { year: 1865, month: 6, day: 27 },
        ],
      },
      { title: '注释', authors: [], page_start: 67, page_end: 69, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.084, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/0926f4bc-4fe1-4cbe-8ae0-ad6a82bfaec3.pdf',
};
