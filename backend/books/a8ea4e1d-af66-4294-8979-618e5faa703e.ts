export default {
  entity: {
    id: 'a8ea4e1d-af66-4294-8979-618e5faa703e',
    name: '路易·波拿巴的雾月十八日（人民出版社1972年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思，人民出版社1972年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/a8ea4e1d-af66-4294-8979-618e5faa703e.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '卡·马克思为本书第二版作的序言',
        authors: ['马克思'],
        page_start: 4,
        page_end: 6,
        dates: [{ year: 1869, month: 6, day: 23 }],
      },
      {
        title: '弗·恩格斯为本书第三版作的序言',
        authors: ['恩格斯'],
        page_start: 7,
        page_end: 8,
        dates: [{ year: 1885 }],
      },
      {
        title: '路易·波拿巴的雾月十八日',
        authors: ['马克思'],
        page_start: 10,
        page_end: 117,
        dates: [
          { year: 1851, month: 12 },
          { year: 1852, month: 3 },
        ],
      },
      { title: '注释', authors: [], page_start: 118, page_end: 125, dates: [] },
    ],
    ocr: { content_thresholds: [0.132, 0, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/a8ea4e1d-af66-4294-8979-618e5faa703e.pdf',
};
