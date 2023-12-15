export default {
  entity: {
    id: '2de85a58-76e8-4bd8-b5e5-0b245bc4a5a8',
    name: '揭发批判赵万有结帮篡党操纵办公厅座谈会的罪行（1977.5.11四川）',
    internal: false,
    official: false,
    type: 'img',
    author: '孙景祥，1977.5.11',
    files: new Array(23)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/2de85a58-76e8-4bd8-b5e5-0b245bc4a5a8/${
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
        title: '揭发批判赵万有结帮篡党操纵办公厅座谈会的罪行',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 23,
        dates: [{ year: 1977, month: 5, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/2de85a58-76e8-4bd8-b5e5-0b245bc4a5a8',
};
