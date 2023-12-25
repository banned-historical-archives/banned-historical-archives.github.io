export default {
  entity: {
    id: '281dab99-3d93-4c35-8bdc-10748f1bc5b0',
    name: '张铁生一九七六年二月三日在清华大学的讲话（1976.12）',
    internal: false,
    official: false,
    type: 'img',
    author: '张铁生，1976.12',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/281dab99-3d93-4c35-8bdc-10748f1bc5b0/${
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
        title: '张铁生一九七六年二月三日在清华大学的讲话',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1976, month: 2, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/281dab99-3d93-4c35-8bdc-10748f1bc5b0',
};
