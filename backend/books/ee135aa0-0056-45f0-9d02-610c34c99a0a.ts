export default {
  entity: {
    id: 'ee135aa0-0056-45f0-9d02-610c34c99a0a',
    name: '情况简报第49期',
    internal: false,
    official: false,
    type: 'img',
    author: '国家出版局政治部',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ee135aa0-0056-45f0-9d02-610c34c99a0a/${
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
        title: '一株未出笼的大毒草《资产阶级在共产党内》',
        authors: ['国家出版局政治部'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1977, month: 11, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/ee135aa0-0056-45f0-9d02-610c34c99a0a',
};
