export default {
  entity: {
    id: '9921a12e-f453-4ffb-981e-066e2caef575',
    name: '关于赵万有的问题',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(22)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/9921a12e-f453-4ffb-981e-066e2caef575/${
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
        title: '关于赵万有的问题',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 22,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/9921a12e-f453-4ffb-981e-066e2caef575',
};
