export default {
  entity: {
    id: 'f0bfe975-04ef-41ae-8b97-9aa3361ecc42',
    name: '财贸情况第十七期',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁省委革命委员会财贸组',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/f0bfe975-04ef-41ae-8b97-9aa3361ecc42/${
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
        title: '理论讨论会情况（之一）',
        authors: ['辽宁省委革命委员会财贸组'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1976, month: 4, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/f0bfe975-04ef-41ae-8b97-9aa3361ecc42',
};
