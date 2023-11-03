export default {
  entity: {
    id: '819092e6-b10d-4e80-85c5-b2b674336f25',
    name: '周总理关于新民主主义时期六次路线斗争历史的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(25)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/819092e6-b10d-4e80-85c5-b2b674336f25/${
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
        title: '周总理关于新民主主义时期六次路线斗争历史的讲话',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 25,
        dates: [
          { year: 1972, month: 6, day: 10 },
          { year: 1972, month: 6, day: 11 },
          { year: 1972, month: 6, day: 12 },
        ],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/819092e6-b10d-4e80-85c5-b2b674336f25',
};
