export default {
  entity: {
    id: 'eb812460-c721-4d42-8ef3-9094bfb30f77',
    name: '市委张春桥等首长在团的工作座谈会上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(17)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/eb812460-c721-4d42-8ef3-9094bfb30f77/${
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
        title: '市委张春桥等首长在团的工作座谈会上的讲话',
        authors: ['张春桥', '姚文元', '王秀珍'],
        page_start: 1,
        page_end: 17,
        dates: [{ year: 1972, month: 10, day: 16 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/eb812460-c721-4d42-8ef3-9094bfb30f77',
};
