export default {
  entity: {
    id: 'fc1f4280-a408-4802-b905-69179daca249',
    name: '雇佣劳动与资本（人民出版社1965年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思，人民出版社1965年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/fc1f4280-a408-4802-b905-69179daca249.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '出版说明',
        authors: [],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1964, month: 3 }],
      },
      {
        title: '雇佣劳动与资本',
        authors: ['马克思'],
        page_start: 7,
        page_end: 73,
        dates: [{ year: 1847, month: 12 }],
      },
      { title: '注释', authors: [], page_start: 75, page_end: 79, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.1, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/fc1f4280-a408-4802-b905-69179daca249.pdf',
};
