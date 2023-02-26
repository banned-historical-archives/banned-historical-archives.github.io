export default {
  entity: {
    id: 'maoxuan-jinghuo',
    name: '毛泽东选集1-7（静火版）',
    internal: false,
    official: false,
    author: '静火',
    type: 'pdf',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives9/main/books/maoxuan-jinghuo.pdf',
  },
  parser_option: {
    page_limits: [
      [20, 1183],
      [1192, 1489],
      [1504, 1791],
    ],
  },
  parser_id: 'jinghuo',
  path: '/archives9/books/maoxuan-jinghuo.pdf',
};
