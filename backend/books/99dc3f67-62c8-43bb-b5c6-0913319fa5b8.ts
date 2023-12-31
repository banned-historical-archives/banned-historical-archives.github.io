export default {
  entity: {
    id: '99dc3f67-62c8-43bb-b5c6-0913319fa5b8',
    name: '国际问题资料第16期（1976.5.17上海）',
    internal: false,
    official: false,
    type: 'img',
    author: '上海《国际问题资料》编辑组，1976.5.17',
    files: new Array(12)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/99dc3f67-62c8-43bb-b5c6-0913319fa5b8/${
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
        title: '列宁如何为改革国家机关而斗争',
        authors: ['上海《国际问题资料》编辑组'],
        page_start: 1,
        page_end: 12,
        dates: [{ year: 1976, month: 5, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/99dc3f67-62c8-43bb-b5c6-0913319fa5b8',
};
