export default {
  entity: {
    id: '255cf4cb-cd67-45ab-b5e8-8240fdbad8f8',
    name: '社会主义从空想到科学的发展（人民出版社1967年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '恩格斯，人民出版社1967年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/255cf4cb-cd67-45ab-b5e8-8240fdbad8f8.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '马克思写的法文版序言',
        authors: ['马克思'],
        page_start: 5,
        page_end: 7,
        is_range_date: true,
        dates: [
          { year: 1880, month: 5, day: 4 },
          { year: 1880, month: 5, day: 5 },
        ],
      },
      {
        title: '德文第四版序言',
        authors: ['恩格斯'],
        page_start: 11,
        page_end: 11,
        dates: [{ year: 1891, month: 5, day: 12 }],
      },
      {
        title: '英文版序言',
        authors: ['恩格斯'],
        page_start: 12,
        page_end: 38,
        dates: [{ year: 1892, month: 4, day: 20 }],
      },
      {
        title: '社会主义从空想到科学的发展',
        authors: ['恩格斯'],
        page_start: 39,
        page_end: 81,
        is_range_date: true,
        dates: [
          { year: 1880, month: 1 },
          { year: 1880, month: 3 },
        ],
      },
      { title: '注释', authors: [], page_start: 82, page_end: 100, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.087, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/255cf4cb-cd67-45ab-b5e8-8240fdbad8f8.pdf',
};
