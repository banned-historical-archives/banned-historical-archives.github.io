export default {
  entity: {
    id: '7eee72e7-217b-4d9e-8951-a336870eac45',
    name: '王张江姚言论集（1976.12上海）',
    internal: false,
    official: false,
    type: 'img',
    author: '1976.12上海',
    files: new Array(18)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/7eee72e7-217b-4d9e-8951-a336870eac45/${
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
        title: '王张江姚言论集',
        authors: ['王洪文', '江青', '姚文元', '张春桥'],
        page_start: 1,
        page_end: 18,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/7eee72e7-217b-4d9e-8951-a336870eac45',
};
