export default {
  entity: {
    id: '063a6017-4454-4b32-bda0-d68af5c50c60',
    name: '未知',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/063a6017-4454-4b32-bda0-d68af5c50c60/${
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
        title: '纪登奎同志在北京对河南的讲话',
        authors: ['纪登奎'],
        page_start: 1,
        page_end: 1,
        dates: [],
      },
      {
        title:
          '王洪文、叶剑英、江青、张春桥、吴德接见总政《解放军报》和八一制片厂同志的讲话',
        authors: ['张春桥', '江青', '王洪文', '叶剑英'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1974, month: 9, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/063a6017-4454-4b32-bda0-d68af5c50c60',
};
