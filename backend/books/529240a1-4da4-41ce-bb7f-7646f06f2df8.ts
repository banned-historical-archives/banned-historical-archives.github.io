export default {
  entity: {
    id: '529240a1-4da4-41ce-bb7f-7646f06f2df8',
    name: '陈伯达同志谈刘、邓问题（1966.10.25）',
    internal: true,
    official: false,
    type: 'img',
    author: '陈伯达，1966.10.25',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/529240a1-4da4-41ce-bb7f-7646f06f2df8/${
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
        title: '陈伯达在中央工作会议上的讲话',
        alias: '陈伯达同志谈刘、邓问题',
        authors: ['陈伯达'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1966, month: 10, day: 25 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/529240a1-4da4-41ce-bb7f-7646f06f2df8',
};
