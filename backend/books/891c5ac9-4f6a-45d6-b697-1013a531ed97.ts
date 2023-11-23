export default {
  entity: {
    id: '891c5ac9-4f6a-45d6-b697-1013a531ed97',
    name: '上海市中、小学教育革命纲要',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥，姚文元',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/891c5ac9-4f6a-45d6-b697-1013a531ed97/${
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
        title: '上海市中、小学教育革命纲要',
        authors: ['张春桥', '姚文元'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1969, month: 6, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/891c5ac9-4f6a-45d6-b697-1013a531ed97',
};
