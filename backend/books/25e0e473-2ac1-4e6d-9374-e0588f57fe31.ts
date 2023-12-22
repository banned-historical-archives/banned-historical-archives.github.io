export default {
  entity: {
    id: '25e0e473-2ac1-4e6d-9374-e0588f57fe31',
    name: '王竹泉同志讲话（1968山东）',
    internal: false,
    official: false,
    type: 'img',
    author: '王竹泉，时间约为1968',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/25e0e473-2ac1-4e6d-9374-e0588f57fe31/${
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
        title: '王竹泉同志讲话',
        authors: ['王竹泉'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1968 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/25e0e473-2ac1-4e6d-9374-e0588f57fe31',
};
