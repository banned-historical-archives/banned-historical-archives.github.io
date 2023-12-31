export default {
  entity: {
    id: '496fc2fe-c2fe-440b-9546-cd53d287347f',
    name: '姚文元反动言论摘录（1978.3）',
    internal: false,
    official: false,
    type: 'img',
    author: '红旗杂志社材料组编，1978.3',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/496fc2fe-c2fe-440b-9546-cd53d287347f/${
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
        title: '姚文元反动言论摘录',
        authors: ['姚文元'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1978, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/496fc2fe-c2fe-440b-9546-cd53d287347f',
};
