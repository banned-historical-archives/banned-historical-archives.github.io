export default {
  entity: {
    id: '3173173f-15a1-4af0-af75-4b987b3fb35d',
    name: '王洪文同志的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3173173f-15a1-4af0-af75-4b987b3fb35d/${
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
        title: '王洪文同志的讲话',
        authors: ['王洪文'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1974, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/3173173f-15a1-4af0-af75-4b987b3fb35d',
};
