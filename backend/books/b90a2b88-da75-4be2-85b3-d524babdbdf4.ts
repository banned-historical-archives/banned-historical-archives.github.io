export default {
  entity: {
    id: 'b90a2b88-da75-4be2-85b3-d524babdbdf4',
    name: '张铁生队北京广播学院在铁岭地区举办的播音员学习班的讲话（摘要）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/b90a2b88-da75-4be2-85b3-d524babdbdf4/${
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
        title: '张铁生队北京广播学院在铁岭地区举办的播音员学习班的讲话',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1976, month: 1, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/b90a2b88-da75-4be2-85b3-d524babdbdf4',
};
