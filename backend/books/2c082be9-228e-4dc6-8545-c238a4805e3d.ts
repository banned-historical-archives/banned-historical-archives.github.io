export default {
  entity: {
    id: '2c082be9-228e-4dc6-8545-c238a4805e3d',
    name: '张春桥同志在上海市革委“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话（1969.6.17）',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/2c082be9-228e-4dc6-8545-c238a4805e3d/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title:
          '张春桥同志在上海市革委“活学活用毛泽东思想、‘九大’文献讲用会”上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1969, month: 6, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/2c082be9-228e-4dc6-8545-c238a4805e3d',
};
