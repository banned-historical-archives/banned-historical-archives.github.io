export default {
  entity: {
    id: 'e2379e66-bb47-400a-92d2-a65f1a1c626e',
    name: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e2379e66-bb47-400a-92d2-a65f1a1c626e/${
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
        title: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话',
        authors: ['陈锡联'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1974, month: 6, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/e2379e66-bb47-400a-92d2-a65f1a1c626e',
};
