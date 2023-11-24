export default {
  entity: {
    id: '79ce4ba2-fd52-41d9-b53b-aba37694edb6',
    name: '敦促赵万有缴械投降',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(15)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/79ce4ba2-fd52-41d9-b53b-aba37694edb6/${
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
        title: '敦促赵万有缴械投降',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 15,
        dates: [{ year: 1977, month: 7, day: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/79ce4ba2-fd52-41d9-b53b-aba37694edb6',
};
