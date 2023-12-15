export default {
  entity: {
    id: '2c6bc06e-ad24-4316-816a-56c18ea5d9f1',
    name: '朝阳地委无产阶级专政理论问题讨论会简报（第20期）（1975.6.17）',
    internal: false,
    official: false,
    type: 'img',
    author: '王吉道，1975.6.17',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/2c6bc06e-ad24-4316-816a-56c18ea5d9f1/${
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
        title: '王吉道同志在地委无产阶级专政理论问题讨论会上的总结讲话',
        authors: ['王吉道'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1975, month: 6, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/2c6bc06e-ad24-4316-816a-56c18ea5d9f1',
};
