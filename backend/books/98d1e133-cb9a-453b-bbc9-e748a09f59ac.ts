export default {
  entity: {
    id: '98d1e133-cb9a-453b-bbc9-e748a09f59ac',
    name: '国际问题资料第20期（1976.6.20上海）',
    internal: false,
    official: false,
    type: 'img',
    author: '上海《国际问题资料》编辑组，1976.6.20',
    files: new Array(12)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/98d1e133-cb9a-453b-bbc9-e748a09f59ac/${
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
        title: '苏联教育史上的两场大辩论',
        authors: ['上海《国际问题资料》编辑组'],
        page_start: 1,
        page_end: 12,
        dates: [{ year: 1976, month: 6, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/98d1e133-cb9a-453b-bbc9-e748a09f59ac',
};
