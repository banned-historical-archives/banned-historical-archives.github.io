export default {
  entity: {
    id: 'dc2e6975-55e0-4649-9ea2-57fff560e84c',
    name: '赛福鼎同志在自治区第三次工业学大庆会议上的开幕词',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/dc2e6975-55e0-4649-9ea2-57fff560e84c/${
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
        title: '赛福鼎同志在自治区第三次工业学大庆会议上的开幕词',
        authors: ['赛福鼎'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1977, month: 10, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/dc2e6975-55e0-4649-9ea2-57fff560e84c',
};
