export default {
  entity: {
    id: '3d5702d4-c8e2-4b0c-acdd-9d0b41d70602',
    name: '中央领导同志接见山东重点企业批林批孔汇报会议济南汽车厂代表时的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3d5702d4-c8e2-4b0c-acdd-9d0b41d70602/${
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
          '中央领导同志接见山东重点企业批林批孔汇报会议济南汽车厂代表时的讲话',
        authors: ['李先念', '苏振华', '纪登奎'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1974, month: 6, day: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/3d5702d4-c8e2-4b0c-acdd-9d0b41d70602',
};
