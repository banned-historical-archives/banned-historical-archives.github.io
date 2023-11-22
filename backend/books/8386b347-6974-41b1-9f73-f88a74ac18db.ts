export default {
  entity: {
    id: '8386b347-6974-41b1-9f73-f88a74ac18db',
    name: '关于艾道玉的问题',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8386b347-6974-41b1-9f73-f88a74ac18db/${
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
        title: '关于艾道玉的问题',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1977, month: 6, day: 19 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/8386b347-6974-41b1-9f73-f88a74ac18db',
};
