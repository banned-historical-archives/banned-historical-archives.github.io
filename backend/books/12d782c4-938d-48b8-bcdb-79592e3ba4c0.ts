export default {
  entity: {
    id: '12d782c4-938d-48b8-bcdb-79592e3ba4c0',
    name: '“外简”摘抄（1976）',
    internal: false,
    official: false,
    type: 'img',
    author: '作者未知，抄者未知，时间约为1976',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/12d782c4-938d-48b8-bcdb-79592e3ba4c0/${
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
        title: '“外简”摘抄',
        authors: [],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1976 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/12d782c4-938d-48b8-bcdb-79592e3ba4c0',
};
