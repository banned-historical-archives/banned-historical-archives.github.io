export default {
  entity: {
    id: 'dded2af3-8638-4d0a-a7de-416d229ead3b',
    name: '哲学小辞典（辩证唯物主义和历史唯物主义部分）（上海人民出版社1975年）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '上海《哲学小辞典》编写组，上海人民出版社1975年',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/dded2af3-8638-4d0a-a7de-416d229ead3b.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '哲学总论',
        authors: ['上海《哲学小辞典》编写组'],
        page_start: 20,
        page_end: 33,
        dates: [{ year: 1975, month: 5 }],
      },
      {
        title: '唯物主义和唯心主义',
        authors: ['上海《哲学小辞典》编写组'],
        page_start: 34,
        page_end: 167,
        dates: [{ year: 1975, month: 5 }],
      },
      {
        title: '辩证法和形而上学',
        authors: ['上海《哲学小辞典》编写组'],
        page_start: 168,
        page_end: 349,
        dates: [{ year: 1975, month: 5 }],
      },
      {
        title: '历史唯物主义和历史唯心主义',
        authors: ['上海《哲学小辞典》编写组'],
        page_start: 350,
        page_end: 536,
        dates: [{ year: 1975, month: 5 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.168, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/dded2af3-8638-4d0a-a7de-416d229ead3b.pdf',
};
