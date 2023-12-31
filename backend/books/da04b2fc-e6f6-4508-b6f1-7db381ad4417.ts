export default {
  entity: {
    id: 'da04b2fc-e6f6-4508-b6f1-7db381ad4417',
    name: '市委张春桥等首长在团的工作座谈会上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(17)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/da04b2fc-e6f6-4508-b6f1-7db381ad4417/${
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
        title: '市委张春桥等首长在团的工作座谈会上的讲话',
        authors: ['张春桥', '姚文元', '王秀珍', '金祖敏'],
        page_start: 1,
        page_end: 17,
        dates: [{ year: 1972, month: 10, day: 16 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/da04b2fc-e6f6-4508-b6f1-7db381ad4417',
};
