export default {
  entity: {
    id: '15525b22-16db-4171-b066-6bffba74cf65',
    name: '上海市党代会、人代会文件选编上册',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(21)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/15525b22-16db-4171-b066-6bffba74cf65/${
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
        title: '中共共产党上海市第四次代表大会简介',
        authors: [],
        page_start: 2,
        page_end: 3,
        is_range_date: true,
        dates: [
          { year: 1971, month: 1, day: 4 },
          { year: 1971, month: 1, day: 10 },
        ],
      },
      {
        title:
          '在党的“九大”路线指引下奋勇前进——中共共产党上海市第四次代表大会关于上海形势和党组织任务的决议',
        authors: [],
        page_start: 4,
        page_end: 21,
        dates: [{ year: 1971, month: 1, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/15525b22-16db-4171-b066-6bffba74cf65',
};
