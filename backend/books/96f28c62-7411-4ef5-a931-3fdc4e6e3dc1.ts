export default {
  entity: {
    id: '96f28c62-7411-4ef5-a931-3fdc4e6e3dc1',
    name: '“初澜”资料选编（1977.6-7）',
    internal: false,
    official: false,
    type: 'img',
    author: '文化部批判组，1977.6-7',
    files: new Array(54)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/96f28c62-7411-4ef5-a931-3fdc4e6e3dc1/${
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
        title: '“初澜”资料选编',
        authors: ['文化部批判组'],
        page_start: 1,
        page_end: 54,
        dates: [{ year: 1977, month: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/96f28c62-7411-4ef5-a931-3fdc4e6e3dc1',
};
