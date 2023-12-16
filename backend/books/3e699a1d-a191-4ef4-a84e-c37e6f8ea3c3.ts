export default {
  entity: {
    id: '3e699a1d-a191-4ef4-a84e-c37e6f8ea3c3',
    name: '周总理在中央工作会议第二次全体会议上的讲话（1973.5.26）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(15)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3e699a1d-a191-4ef4-a84e-c37e6f8ea3c3/${
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
        title: '周总理在中央工作会议第二次全体会议上的讲话',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 15,
        dates: [{ year: 1973, month: 5, day: 26 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/3e699a1d-a191-4ef4-a84e-c37e6f8ea3c3',
};
