export default {
  entity: {
    id: '0030b6ae-bc3a-4015-931f-4757447abb55',
    name: '“四人帮”篡改马克思主义哲学、政治经济学、科学社会主义理论反动言论摘编（1978.6上海）',
    internal: false,
    official: false,
    type: 'img',
    author: '上海市五七干校，1978.6',
    files: new Array(46)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/0030b6ae-bc3a-4015-931f-4757447abb55/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      {
        title:
          '“四人帮”篡改马克思主义哲学、政治经济学、科学社会主义理论反动言论摘编',
        authors: ['上海市五七干校'],
        page_start: 1,
        page_end: 46,
        dates: [{ year: 1978, month: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/0030b6ae-bc3a-4015-931f-4757447abb55',
};
