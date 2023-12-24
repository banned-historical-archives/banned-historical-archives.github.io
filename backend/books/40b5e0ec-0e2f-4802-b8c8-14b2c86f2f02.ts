export default {
  entity: {
    id: '40b5e0ec-0e2f-4802-b8c8-14b2c86f2f02',
    name: '“四人帮”死党毛远新在辽宁的主要罪行（1976.12辽宁）',
    internal: false,
    official: true,
    type: 'img',
    author: '1976.12辽宁',
    files: new Array(16)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/40b5e0ec-0e2f-4802-b8c8-14b2c86f2f02/${
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
        title: '“四人帮”死党毛远新在辽宁的主要罪行',
        authors: [],
        page_start: 1,
        page_end: 16,
        dates: [{ year: 1976, month: 12, day: 30 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/40b5e0ec-0e2f-4802-b8c8-14b2c86f2f02',
};
