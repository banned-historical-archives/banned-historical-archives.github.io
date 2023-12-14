export default {
  entity: {
    id: '0c8985ac-73d9-4d5a-b8f2-39163484ac2a',
    name: '愤怒揭发“帮市委”在去年的阴谋活动（1977.8.23）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(47)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/0c8985ac-73d9-4d5a-b8f2-39163484ac2a/${
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
        title: '愤怒揭发“帮市委”在去年的阴谋活动',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 47,
        dates: [{ year: 1977, month: 8, day: 23 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/0c8985ac-73d9-4d5a-b8f2-39163484ac2a',
};
