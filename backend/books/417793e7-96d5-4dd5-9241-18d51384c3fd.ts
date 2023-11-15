export default {
  entity: {
    id: '417793e7-96d5-4dd5-9241-18d51384c3fd',
    name: '吴大胜大队罪证材料',
    internal: false,
    official: false,
    type: 'img',
    author: '江苏省委材料组',
    files: new Array(97)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/417793e7-96d5-4dd5-9241-18d51384c3fd/${
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
        title: '吴大胜大队罪证材料',
        authors: ['江苏省委材料组'],
        page_start: 1,
        page_end: 97,
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/417793e7-96d5-4dd5-9241-18d51384c3fd',
};
