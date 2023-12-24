export default {
  entity: {
    id: '47b2b4c4-e105-47c2-bb3a-7bdbcc25d245',
    name: '杨春甫同志在全省外贸工作会议上的讲话（1971.12.10辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '杨春甫，1971.12.10辽宁',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/47b2b4c4-e105-47c2-bb3a-7bdbcc25d245/${
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
        title: '杨春甫同志在全省外贸工作会议上的讲话',
        authors: ['杨春甫'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1971, month: 12, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/47b2b4c4-e105-47c2-bb3a-7bdbcc25d245',
};
