export default {
  entity: {
    id: '2c5d6287-d292-4d40-9407-26bc0b98d306',
    name: '张春桥同志讲话（1968.1.3）',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2c5d6287-d292-4d40-9407-26bc0b98d306/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '张春桥同志讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1968, month: 1, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/2c5d6287-d292-4d40-9407-26bc0b98d306',
};
