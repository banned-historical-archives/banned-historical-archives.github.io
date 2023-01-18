export default {
  entity: {
    id: '6869e951-bde4-44a1-8348-dc6fc27cc26a',
    name: '青年团的任务（人民出版社1973年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1973年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/6869e951-bde4-44a1-8348-dc6fc27cc26a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '青年团的任务',
        authors: ['列宁'],
        page_start: 4,
        page_end: 22,
        dates: [
          { year: 1920, month: 10, day: 5 },
          { year: 1920, month: 10, day: 6 },
          { year: 1920, month: 10, day: 7 },
        ],
      },
    ],
    ocr: { content_thresholds: [0, 0.079, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/6869e951-bde4-44a1-8348-dc6fc27cc26a.pdf',
};
