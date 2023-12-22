export default {
  entity: {
    id: '23cefa77-384a-42f6-a607-e652b94ae388',
    name: '中共中央候补委员杨坡兰同志在省级机关全体干部职工大会上的报告',
    internal: false,
    official: false,
    type: 'img',
    author: '杨坡兰，1974.2.17',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/23cefa77-384a-42f6-a607-e652b94ae388/${
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
        title: '杨坡兰在省级机关全体干部职工大会上的报告',
        alias: '中共中央候补委员杨坡兰同志在省级机关全体干部职工大会上的报告',
        authors: ['杨坡兰'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1974, month: 2, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/23cefa77-384a-42f6-a607-e652b94ae388',
};
