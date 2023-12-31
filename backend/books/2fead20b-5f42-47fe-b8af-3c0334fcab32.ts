export default {
  entity: {
    id: '2fead20b-5f42-47fe-b8af-3c0334fcab32',
    name: '中共中央文件[1975]5号',
    internal: false,
    official: true,
    type: 'img',
    author: '中共中央',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/2fead20b-5f42-47fe-b8af-3c0334fcab32/${
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
        title: '中共中央通知',
        authors: ['中共中央'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1975, month: 2, day: 18 }],
      },
      {
        title: '毛主席指示',
        authors: ['毛泽东'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1975, month: 2, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/2fead20b-5f42-47fe-b8af-3c0334fcab32',
};
