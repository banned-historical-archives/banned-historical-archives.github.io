export default {
  entity: {
    id: '0db69338-3cfd-4413-96ba-808746c120ea',
    name: '毛远新在省宣传工作会议上的讲话（1975.3.5辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/0db69338-3cfd-4413-96ba-808746c120ea/${
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
        title: '毛远新同志三月一日在省宣传工作会议上的讲话',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1975, month: 3, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/0db69338-3cfd-4413-96ba-808746c120ea',
};
