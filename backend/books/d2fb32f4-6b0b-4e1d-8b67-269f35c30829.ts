export default {
  entity: {
    id: 'd2fb32f4-6b0b-4e1d-8b67-269f35c30829',
    name: '苏振华同志在山东重点企业批林批孔汇报会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d2fb32f4-6b0b-4e1d-8b67-269f35c30829/${
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
        title: '苏振华同志在山东重点企业批林批孔汇报会议上的讲话',
        authors: ['苏振华'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1974, month: 6, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d2fb32f4-6b0b-4e1d-8b67-269f35c30829',
};
