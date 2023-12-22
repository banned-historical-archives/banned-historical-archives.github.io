export default {
  entity: {
    id: '37d27b52-129f-4f48-b39f-ed3a6cc67bd8',
    name: '石敬野同志讲话（1976.10.27）',
    internal: false,
    official: false,
    type: 'img',
    author: '石敬野，1976.10.27',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/37d27b52-129f-4f48-b39f-ed3a6cc67bd8/${
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
        title: '石敬野同志讲话',
        authors: ['石敬野'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1976, month: 10, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/37d27b52-129f-4f48-b39f-ed3a6cc67bd8',
};
