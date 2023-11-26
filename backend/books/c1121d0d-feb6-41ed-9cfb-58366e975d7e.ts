export default {
  entity: {
    id: 'c1121d0d-feb6-41ed-9cfb-58366e975d7e',
    name: '“四人帮”在我省的黑干将罗锡康、张明、田子明、孙昌德及其资产阶级帮派同伙反动言论摘编',
    internal: false,
    official: false,
    type: 'img',
    author: '中共贵州省委宣传部',
    files: new Array(19)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c1121d0d-feb6-41ed-9cfb-58366e975d7e/${
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
        title: '在中央政治局会议上的讲话',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 19,
        dates: [{ year: 1978, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/c1121d0d-feb6-41ed-9cfb-58366e975d7e',
};
