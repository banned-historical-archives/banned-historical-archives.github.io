export default {
  entity: {
    id: 'ec6c5f74-be8d-444f-a739-aff2870d7826',
    name: '对苏联变修历史教训的一些看法',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ec6c5f74-be8d-444f-a739-aff2870d7826/${
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
        title: '对苏联变修历史教训的一些看法',
        authors: ['上海《国际问题资料》编辑组'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1976, month: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/ec6c5f74-be8d-444f-a739-aff2870d7826',
};
