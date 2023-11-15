export default {
  entity: {
    id: 'b148fbb2-bca8-4f82-87e8-0a1a338df7d6',
    name: '陈和发的罪证材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共江苏省委材料组',
    files: new Array(45)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/b148fbb2-bca8-4f82-87e8-0a1a338df7d6/${
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
        title: '陈和发的罪证材料',
        authors: ['中共江苏省委材料组'],
        page_start: 1,
        page_end: 45,
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/b148fbb2-bca8-4f82-87e8-0a1a338df7d6',
};
