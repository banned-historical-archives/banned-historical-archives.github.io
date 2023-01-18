export default {
  entity: {
    id: 'c7eaace4-1838-4662-90ba-7b703b05d6ff',
    name: '怎么办？（人民出版社1965年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1965年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/c7eaace4-1838-4662-90ba-7b703b05d6ff.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '怎么办？',
        authors: ['列宁'],
        page_start: 6,
        page_end: 185,
        is_range_date: true,
        dates: [{ year: 1901 }, { year: 1902, month: 2 }],
      },
      { title: '注释', authors: [], page_start: 186, page_end: 193, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.102, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/c7eaace4-1838-4662-90ba-7b703b05d6ff.pdf',
};
