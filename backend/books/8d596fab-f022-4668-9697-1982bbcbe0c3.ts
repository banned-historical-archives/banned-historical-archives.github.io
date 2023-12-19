export default {
  entity: {
    id: '8d596fab-f022-4668-9697-1982bbcbe0c3',
    name: '彻底批判“四人帮”破坏民兵建设的滔天罪行（1977.3湖北）',
    internal: false,
    official: false,
    type: 'img',
    author: '武汉市民兵代表大会，1977.3',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8d596fab-f022-4668-9697-1982bbcbe0c3/${
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
        title: '彻底批判“四人帮”破坏民兵建设的滔天罪行',
        authors: ['武汉市民兵代表大会'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1977, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8d596fab-f022-4668-9697-1982bbcbe0c3',
};
