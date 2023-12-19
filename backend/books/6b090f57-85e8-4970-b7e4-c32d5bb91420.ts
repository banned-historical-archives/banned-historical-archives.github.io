export default {
  entity: {
    id: '6b090f57-85e8-4970-b7e4-c32d5bb91420',
    name: '学习无产阶级专政理论的体会（1975.2）',
    internal: false,
    official: false,
    type: 'img',
    author: '余制波，1975.2',
    files: new Array(14)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6b090f57-85e8-4970-b7e4-c32d5bb91420/${
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
        title: '学习无产阶级专政理论的体会',
        authors: ['余制波'],
        page_start: 1,
        page_end: 14,
        dates: [{ year: 1975, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/6b090f57-85e8-4970-b7e4-c32d5bb91420',
};
