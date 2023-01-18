export default {
  entity: {
    id: 'b1daa337-79a3-40f9-ba73-7cbf948e0091',
    name: '伟大的创举（人民出版社1973年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1973年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/b1daa337-79a3-40f9-ba73-7cbf948e0091.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '伟大的创举',
        authors: ['列宁'],
        page_start: 4,
        page_end: 28,
        dates: [{ year: 1919, month: 6, day: 28 }],
      },
      { title: '注释', authors: [], page_start: 29, page_end: 30, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.1, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/b1daa337-79a3-40f9-ba73-7cbf948e0091.pdf',
};
