export default {
  entity: {
    id: '5dbda43b-9276-4bad-9791-82d5af057bd9',
    name: '陈先瑞在军区党委扩大会议全体会议上的讲话（1973.6.8）',
    internal: false,
    official: false,
    type: 'img',
    author: '陈先瑞，1973.6.8',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/5dbda43b-9276-4bad-9791-82d5af057bd9/${
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
        title: '陈先瑞在军区党委扩大会议全体会议上的讲话',
        alias: '六月八日下午军区党委扩大会议全体会议陈先瑞同志讲话',
        authors: ['陈先瑞'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1973, month: 6, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/5dbda43b-9276-4bad-9791-82d5af057bd9',
};
