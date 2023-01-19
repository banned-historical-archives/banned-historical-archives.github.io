export default {
  entity: {
    id: 'd7149258-c04a-43f7-a5b5-6a649e3892e9',
    name: '1966.12.30-12.31英国人在北京街头看到的大字报',
    internal: true,
    official: true,
    type: 'img',
    author: '英国驻华外交官',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d7149258-c04a-43f7-a5b5-6a649e3892e9/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '1966.12.30-12.31英国人在北京街头看到的大字报',
        authors: ['英国驻华外交官'],
        page_start: 1,
        page_end: 2,
        dates: [
          { year: 1966, month: 12, day: 30 },
          { year: 1966, month: 12, day: 31 },
        ],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d7149258-c04a-43f7-a5b5-6a649e3892e9',
};
