export default {
  entity: {
    id: '167c1c48-45d0-4a35-8c61-c4283330c246',
    name: '财贸情况第十八期（1976.4.6辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁省委革命委员会财贸组，1976.4.6',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/167c1c48-45d0-4a35-8c61-c4283330c246/${
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
        title: '理论讨论会情况（之二）',
        authors: ['辽宁省委革命委员会财贸组'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1976, month: 4, day: 6 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/167c1c48-45d0-4a35-8c61-c4283330c246',
};
