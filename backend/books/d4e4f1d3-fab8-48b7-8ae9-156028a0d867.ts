export default {
  entity: {
    id: 'd4e4f1d3-fab8-48b7-8ae9-156028a0d867',
    name: '中央军委命令（1967.1.28）',
    internal: false,
    official: true,
    type: 'img',
    author: '中央军委',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d4e4f1d3-fab8-48b7-8ae9-156028a0d867/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '中央军委八条命令',
        authors: [],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 1, day: 28 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d4e4f1d3-fab8-48b7-8ae9-156028a0d867',
};
