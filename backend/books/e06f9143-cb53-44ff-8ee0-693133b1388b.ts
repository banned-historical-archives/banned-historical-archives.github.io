export default {
  entity: {
    id: 'e06f9143-cb53-44ff-8ee0-693133b1388b',
    name: '无产阶级革命和叛徒考茨基（人民出版社1964年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1964年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/e06f9143-cb53-44ff-8ee0-693133b1388b.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '无产阶级革命和叛徒考茨基',
        authors: ['列宁'],
        page_start: 6,
        page_end: 103,
        is_range_date: true,
        dates: [
          { year: 1918, month: 10 },
          { year: 1918, month: 11 },
        ],
      },
      { title: '注释', authors: [], page_start: 104, page_end: 109, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.132, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/e06f9143-cb53-44ff-8ee0-693133b1388b.pdf',
};
