export default {
  entity: {
    id: 'a945ad37-d76d-4e21-8d58-7d3eea82b68d',
    name: '毛主席接见外宾谈话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/a945ad37-d76d-4e21-8d58-7d3eea82b68d/${
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
        title: '毛主席接见外宾谈话',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1975, month: 6, day: 21 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/a945ad37-d76d-4e21-8d58-7d3eea82b68d',
};
