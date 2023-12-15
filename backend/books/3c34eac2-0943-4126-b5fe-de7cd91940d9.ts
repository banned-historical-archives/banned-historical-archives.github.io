export default {
  entity: {
    id: '3c34eac2-0943-4126-b5fe-de7cd91940d9',
    name: '李伯秋同志在省委城市民兵工作会议上的讲话（1973.12.20辽宁）',
    internal: true,
    official: false,
    type: 'img',
    author: '李伯秋，1973.12.20',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c34eac2-0943-4126-b5fe-de7cd91940d9/${
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
        title: '李伯秋同志在省委城市民兵工作会议上的讲话',
        authors: ['李伯秋'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1973, month: 12, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/3c34eac2-0943-4126-b5fe-de7cd91940d9',
};
