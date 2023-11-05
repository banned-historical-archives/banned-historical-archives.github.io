export default {
  entity: {
    id: 'c312cc71-801b-493a-8e9a-510ec042eabf',
    name: '毛远新同志在省宣传工作会议上上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/c312cc71-801b-493a-8e9a-510ec042eabf/${
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
        title: '毛远新同志在省宣传工作会议上上的讲话',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1975, month: 3, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/c312cc71-801b-493a-8e9a-510ec042eabf',
};
