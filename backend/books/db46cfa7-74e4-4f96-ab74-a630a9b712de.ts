export default {
  entity: {
    id: 'db46cfa7-74e4-4f96-ab74-a630a9b712de',
    name: '陈永贵同志在南方水稻生产现场会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/db46cfa7-74e4-4f96-ab74-a630a9b712de/${
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
        title: '陈永贵同志在南方水稻生产现场会议上的讲话',
        authors: ['陈永贵'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1975, month: 6, day: 30 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/db46cfa7-74e4-4f96-ab74-a630a9b712de',
};
