export default {
  entity: {
    id: 'fdf2cbe3-cb90-4627-b813-b2b3e953a6ca',
    name: '胡厚民同志在湖北省革命委员会扩大会上的发言',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(17)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/fdf2cbe3-cb90-4627-b813-b2b3e953a6ca/${
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
        title: '胡厚民同志在湖北省革命委员会扩大会上的发言',
        authors: ['胡厚民'],
        page_start: 1,
        page_end: 17,
        dates: [{ year: 1969, month: 10, day: 22 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/fdf2cbe3-cb90-4627-b813-b2b3e953a6ca',
};
