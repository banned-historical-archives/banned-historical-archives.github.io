export default {
  entity: {
    id: 'e5f7eeae-956d-4fb5-b4d5-751f74168bf0',
    name: '中央领导同志在卅八军讲话记录',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(28)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e5f7eeae-956d-4fb5-b4d5-751f74168bf0/${
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
        title: '中央领导同志在卅八军讲话记录',
        authors: ['王洪文', '江青', '陈锡联', '纪登奎'],
        page_start: 1,
        page_end: 28,
        dates: [{ year: 1974, month: 7, day: 29 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/e5f7eeae-956d-4fb5-b4d5-751f74168bf0',
};
