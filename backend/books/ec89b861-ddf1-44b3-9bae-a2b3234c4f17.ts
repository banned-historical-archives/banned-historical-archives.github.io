export default {
  entity: {
    id: 'ec89b861-ddf1-44b3-9bae-a2b3234c4f17',
    name: '彻底揭发批判“四人帮“在江苏犯下的滔天罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '中共徐州市委大批判组',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/ec89b861-ddf1-44b3-9bae-a2b3234c4f17/${
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
        title: '彻底揭发批判“四人帮“在江苏犯下的滔天罪行',
        authors: ['中共徐州市委大批判组'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/ec89b861-ddf1-44b3-9bae-a2b3234c4f17',
};
