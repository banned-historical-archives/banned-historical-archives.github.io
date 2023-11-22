export default {
  entity: {
    id: 'd51fcaf3-f134-4885-a05b-503a5435d86b',
    name: '财贸情况第十九期',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁省委革命委员会财贸组',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/d51fcaf3-f134-4885-a05b-503a5435d86b/${
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
        title: '理论讨论会情况（之三）',
        authors: ['辽宁省委革命委员会财贸组'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1976, month: 4, day: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/d51fcaf3-f134-4885-a05b-503a5435d86b',
};
