export default {
  entity: {
    id: '7d9e4ad9-ef0e-41c4-85e4-69c6f68aa5c8',
    name: '国际问题资料第17期',
    internal: false,
    official: false,
    type: 'img',
    author: '上海《国际问题资料》编辑组',
    files: new Array(18)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/7d9e4ad9-ef0e-41c4-85e4-69c6f68aa5c8/${
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
        title: '赫鲁晓夫社怎样篡党夺权的？',
        authors: ['上海师大历史系世界史组'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1976, month: 5, day: 18 }],
      },
      {
        title: '苏修叛徒集团上台的社会基础',
        authors: ['上海《国际问题资料》编辑组'],
        page_start: 10,
        page_end: 18,
        dates: [{ year: 1976, month: 5, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/7d9e4ad9-ef0e-41c4-85e4-69c6f68aa5c8',
};
