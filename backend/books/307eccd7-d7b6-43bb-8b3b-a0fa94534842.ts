export default {
  entity: {
    id: '307eccd7-d7b6-43bb-8b3b-a0fa94534842',
    name: '1848年至1850年的法兰西阶级斗争（人民出版社1973年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思，人民出版社1973年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/307eccd7-d7b6-43bb-8b3b-a0fa94534842.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '恩格斯的导言',
        authors: ['恩格斯'],
        page_start: 7,
        page_end: 27,
        dates: [{ year: 1895, month: 3, day: 6 }],
      },
      {
        title: '1848年至1850年的法兰西阶级斗争',
        authors: ['马克思'],
        page_start: 29,
        page_end: 134,
        is_range_date: true,
        dates: [
          { year: 1850, month: 1 },
          { year: 1850, month: 11, day: 1 },
        ],
      },
      { title: '注释', authors: [], page_start: 135, page_end: 149, dates: [] },
      {
        title: '人名索引',
        authors: [],
        page_start: 151,
        page_end: 161,
        dates: [],
      },
    ],
    ocr: { content_thresholds: [0, 0.084, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/307eccd7-d7b6-43bb-8b3b-a0fa94534842.pdf',
};
