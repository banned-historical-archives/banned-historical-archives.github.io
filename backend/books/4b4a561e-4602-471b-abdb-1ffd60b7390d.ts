export default {
  entity: {
    id: '4b4a561e-4602-471b-abdb-1ffd60b7390d',
    name: '张铁生在兴城县欢迎他大学毕业回乡务农大会上的讲话（1976.11辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '张铁生，1976.11',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/4b4a561e-4602-471b-abdb-1ffd60b7390d/${
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
        title: '张铁生在兴城县欢迎他大学毕业回乡务农大会上的讲话',
        alias:
          '张铁生一九七六年十月十二日在兴城县欢迎他大学毕业回乡务农大会上的讲话',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1976, month: 10, day: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/4b4a561e-4602-471b-abdb-1ffd60b7390d',
};
