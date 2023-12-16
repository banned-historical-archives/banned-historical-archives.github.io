export default {
  entity: {
    id: '5d6f27d1-938f-428a-9980-04be9a9dcb20',
    name: '从去年的十件大事看“帮市委”的阴谋活动（1977.7.19）',
    internal: false,
    official: false,
    type: 'img',
    author: '孙景田，1977.7.19',
    files: new Array(35)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/5d6f27d1-938f-428a-9980-04be9a9dcb20/${
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
        title: '从去年的十件大事看“帮市委”的阴谋活动',
        authors: ['孙景田'],
        page_start: 1,
        page_end: 35,
        dates: [{ year: 1977, month: 7, day: 19 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/5d6f27d1-938f-428a-9980-04be9a9dcb20',
};
