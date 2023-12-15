export default {
  entity: {
    id: '3c5a9dbd-88a8-4e82-b5d3-f1ba7a192680',
    name: '刘兴元传达毛主席五次重要指示（1974.1.6）',
    internal: false,
    official: false,
    type: 'img',
    author: '未知',
    files: new Array(24)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c5a9dbd-88a8-4e82-b5d3-f1ba7a192680/${
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
        title: '刘兴元传达毛主席五次重要指示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 24,
        dates: [{ year: 1974, month: 1, day: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/3c5a9dbd-88a8-4e82-b5d3-f1ba7a192680',
};
