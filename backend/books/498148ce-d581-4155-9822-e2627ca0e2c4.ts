export default {
  entity: {
    id: '498148ce-d581-4155-9822-e2627ca0e2c4',
    name: '军区党委扩大会议协商“十大”代表结果',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/498148ce-d581-4155-9822-e2627ca0e2c4/${
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
        title: '军区党委扩大会议协商“十大”代表结果',
        authors: ['军区党委'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1973 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/498148ce-d581-4155-9822-e2627ca0e2c4',
};
