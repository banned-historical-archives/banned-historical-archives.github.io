export default {
  entity: {
    id: 'cd90233f-7648-4921-abd9-7601b3842a12',
    name: '先念同志在山童重点企业批林批孔汇报会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/cd90233f-7648-4921-abd9-7601b3842a12/${
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
        title: '先念同志在山童重点企业批林批孔汇报会议上的讲话',
        authors: ['李先念'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1974, month: 6, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/cd90233f-7648-4921-abd9-7601b3842a12',
};
