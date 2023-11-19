export default {
  entity: {
    id: '31afc5f2-50a2-451e-ac81-e5125b872696',
    name: '中央政治局关于修改宪章的请示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/31afc5f2-50a2-451e-ac81-e5125b872696/${
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
        title: '中央政治局关于修改宪章的请示',
        authors: ['中央政治局'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1973, month: 5, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/31afc5f2-50a2-451e-ac81-e5125b872696',
};
