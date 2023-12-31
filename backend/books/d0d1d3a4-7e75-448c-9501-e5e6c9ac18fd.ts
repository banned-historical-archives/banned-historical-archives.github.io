export default {
  entity: {
    id: 'd0d1d3a4-7e75-448c-9501-e5e6c9ac18fd',
    name: '愤怒控诉“四人帮”迈开大步赶昔阳',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/d0d1d3a4-7e75-448c-9501-e5e6c9ac18fd/${
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
        title: '愤怒控诉“四人帮”迈开大步赶昔阳',
        authors: ['余活力'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/d0d1d3a4-7e75-448c-9501-e5e6c9ac18fd',
};
