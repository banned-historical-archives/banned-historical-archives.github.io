export default {
  entity: {
    id: '6457c82f-95ab-4607-89b9-2d3431d117a1',
    name: '省委前主要领导人紧密配合“四人帮”篡党夺权言论摘编',
    internal: false,
    official: false,
    type: 'img',
    author: '中共安徽省委宣传部大批判组',
    files: new Array(28)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/6457c82f-95ab-4607-89b9-2d3431d117a1/${
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
        title: '省委前主要领导人紧密配合“四人帮”篡党夺权言论摘编',
        authors: ['中共安徽省委宣传部大批判组'],
        page_start: 1,
        page_end: 28,
        dates: [{ year: 1977, month: 8, day: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/6457c82f-95ab-4607-89b9-2d3431d117a1',
};
