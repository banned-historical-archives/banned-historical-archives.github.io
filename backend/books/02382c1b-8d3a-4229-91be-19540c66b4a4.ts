export default {
  entity: {
    id: '02382c1b-8d3a-4229-91be-19540c66b4a4',
    name: '苏振华同志在山东重点企业批林批孔汇报会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/02382c1b-8d3a-4229-91be-19540c66b4a4/${
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
  path: '/archives1/02382c1b-8d3a-4229-91be-19540c66b4a4',
};
