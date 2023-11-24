export default {
  entity: {
    id: '65a24322-699c-480e-bb16-0c76ef541684',
    name: '外交部大字报摘抄',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/65a24322-699c-480e-bb16-0c76ef541684/${
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
        title: '外交部大字报摘抄',
        alias: '外交部动态',
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
  path: '/archives16/65a24322-699c-480e-bb16-0c76ef541684',
};
