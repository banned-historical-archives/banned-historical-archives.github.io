export default {
  entity: {
    id: '82346107-c0af-4240-9922-0bcf61c34a3a',
    name: '财贸情况第二十一期',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁省委革命委员会财贸组',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/82346107-c0af-4240-9922-0bcf61c34a3a/${
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
        title: '杜湛同志在全省财贸战线理论学习讨论会上的总结发言（提纲）',
        authors: ['辽宁省委革命委员会财贸组'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1976, month: 4, day: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/82346107-c0af-4240-9922-0bcf61c34a3a',
};
