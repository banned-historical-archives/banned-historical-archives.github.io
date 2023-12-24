export default {
  entity: {
    id: '91d32517-bb6e-4a58-b606-7eebc21e3bd6',
    name: '“四人帮”指使和支持夏邦银、朱洪霞、胡厚民在湖北武汉阴谋篡党夺权的罪行材料（1976.12湖北）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共武汉市委材料组，1976.12',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/91d32517-bb6e-4a58-b606-7eebc21e3bd6/${
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
        title:
          '“四人帮”指使和支持夏邦银、朱洪霞、胡厚民在湖北武汉阴谋篡党夺权的罪行材料',
        authors: ['中共武汉市委材料组'],
        page_start: 1,
        page_end: 13,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/91d32517-bb6e-4a58-b606-7eebc21e3bd6',
};
