export default {
  entity: {
    id: 'e21a0556-db6c-411b-ab46-6b86c1f635cf',
    name: '王张江姚言论集',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(18)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e21a0556-db6c-411b-ab46-6b86c1f635cf/${
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
        title: '王张江姚言论集',
        authors: ['王洪文', '江青', '姚文元', '张春桥'],
        page_start: 1,
        page_end: 18,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/e21a0556-db6c-411b-ab46-6b86c1f635cf',
};
