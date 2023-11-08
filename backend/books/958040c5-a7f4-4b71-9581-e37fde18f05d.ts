export default {
  entity: {
    id: '958040c5-a7f4-4b71-9581-e37fde18f05d',
    name: '山东省高级人民法院通告',
    internal: false,
    official: false,
    type: 'img',
    author: '山东省高级人民法院',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/958040c5-a7f4-4b71-9581-e37fde18f05d/${
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
        title: '山东省高级人民法院通告',
        authors: ['山东省高级人民法院'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1978, month: 11, day: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/958040c5-a7f4-4b71-9581-e37fde18f05d',
};
