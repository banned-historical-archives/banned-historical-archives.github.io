export default {
  entity: {
    id: '063008b8-a811-4b30-978c-74fcf347d1e0',
    name: '中央首长在中央工作会议第四次全体会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/063008b8-a811-4b30-978c-74fcf347d1e0/${
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
        title: '中央首长在中央工作会议第四次全体会议上的讲话',
        authors: ['周恩来', '张春桥', '纪登奎'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1973 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/063008b8-a811-4b30-978c-74fcf347d1e0',
};
