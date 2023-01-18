export default {
  entity: {
    id: '4a6c18bb-f796-45be-9fbd-46d7ce45fd94',
    name: '共产主义运动中的“左派”幼稚病（人民出版社1973年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1973年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/4a6c18bb-f796-45be-9fbd-46d7ce45fd94.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '共产主义运动中的“左派”幼稚病',
        authors: ['列宁'],
        page_start: 7,
        page_end: 99,
        is_range_date: true,
        dates: [
          { year: 1920, month: 4 },
          { year: 1920, month: 5 },
        ],
      },
      { title: '注释', authors: [], page_start: 100, page_end: 103, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.072, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/4a6c18bb-f796-45be-9fbd-46d7ce45fd94.pdf',
};
