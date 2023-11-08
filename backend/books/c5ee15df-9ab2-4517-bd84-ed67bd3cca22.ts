export default {
  entity: {
    id: 'c5ee15df-9ab2-4517-bd84-ed67bd3cca22',
    name: '张春桥在军委扩大会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(14)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/c5ee15df-9ab2-4517-bd84-ed67bd3cca22/${
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
        title: '张春桥在军委扩大会议上的讲话',
        alias: '张春桥同志的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 14,
        dates: [{ year: 1967, month: 4, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/c5ee15df-9ab2-4517-bd84-ed67bd3cca22',
};
