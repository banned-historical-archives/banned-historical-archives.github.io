export default {
  entity: {
    id: '02e7281e-cf73-430a-a726-1e96a1202f8e',
    name: '六月八日下午军区25次党委扩大会全体会议李德生同志的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(16)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/02e7281e-cf73-430a-a726-1e96a1202f8e/${
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
        title: '六月八日下午军区25次党委扩大会全体会议李德生同志的讲话',
        authors: ['李德生'],
        page_start: 1,
        page_end: 16,
        dates: [{ year: 1973, month: 6, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/02e7281e-cf73-430a-a726-1e96a1202f8e',
};
