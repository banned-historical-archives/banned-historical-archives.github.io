export default {
  entity: {
    id: 'f5841312-d8c2-4fcf-91a1-9f7c1074de05',
    name: '法兰西内战（人民出版社1971年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思，人民出版社1971年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/f5841312-d8c2-4fcf-91a1-9f7c1074de05.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '弗·恩格斯的导言',
        authors: ['恩格斯'],
        page_start: 7,
        page_end: 19,
        dates: [{ year: 1891, month: 3, day: 18 }],
      },
      {
        title: '国际工人协会总委员会关于普法战争的第一篇宣言',
        authors: ['马克思'],
        page_start: 20,
        page_end: 25,
        is_range_date: true,
        dates: [
          { year: 1870, month: 7, day: 19 },
          { year: 1870, month: 7, day: 23 },
        ],
      },
      {
        title: '国际工人协会总委员会关于普法战争的第二篇宣言',
        authors: ['马克思'],
        page_start: 26,
        page_end: 35,
        is_range_date: true,
        dates: [
          { year: 1870, month: 9, day: 6 },
          { year: 1870, month: 9, day: 9 },
        ],
      },
      {
        title: '法兰西内战',
        authors: ['马克思'],
        page_start: 37,
        page_end: 92,
        is_range_date: true,
        dates: [
          { year: 1871, month: 4 },
          { year: 1871, month: 5 },
        ],
      },
      {
        title: '《法兰西内战》初稿',
        authors: ['马克思'],
        page_start: 95,
        page_end: 173,
        is_range_date: true,
        dates: [
          { year: 1871, month: 4 },
          { year: 1871, month: 5 },
        ],
      },
      {
        title: '《法兰西内战》二稿',
        authors: ['马克思'],
        page_start: 174,
        page_end: 213,
        is_range_date: true,
        dates: [
          { year: 1871, month: 4 },
          { year: 1871, month: 5 },
        ],
      },
      { title: '注释', authors: [], page_start: 215, page_end: 241, dates: [] },
    ],
    ocr: { content_thresholds: [0, 0.09, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/f5841312-d8c2-4fcf-91a1-9f7c1074de05.pdf',
};
