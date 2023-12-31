export default {
  entity: {
    id: 'c5f3b8b1-f3af-4086-82d7-0a16b8887ee5',
    name: '辽宁省文化局草稿',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/c5f3b8b1-f3af-4086-82d7-0a16b8887ee5/${
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
        title: '辽宁省文化局草稿',
        authors: ['辽宁省文化局'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1977, month: 9, day: 30 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/c5f3b8b1-f3af-4086-82d7-0a16b8887ee5',
};
