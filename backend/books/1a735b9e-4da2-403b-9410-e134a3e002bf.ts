export default {
  entity: {
    id: '1a735b9e-4da2-403b-9410-e134a3e002bf',
    name: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话（1974.6.27山东）',
    internal: false,
    official: false,
    type: 'img',
    author: '陈锡联，1974.6.27',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/1a735b9e-4da2-403b-9410-e134a3e002bf/${
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
        title: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话',
        authors: ['陈锡联'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1974, month: 6, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/1a735b9e-4da2-403b-9410-e134a3e002bf',
};
