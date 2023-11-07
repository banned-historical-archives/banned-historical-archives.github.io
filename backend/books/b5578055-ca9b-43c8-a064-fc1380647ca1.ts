export default {
  entity: {
    id: 'b5578055-ca9b-43c8-a064-fc1380647ca1',
    name: '张春桥同志在南方十三省、市、自治区第二次血防工作会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '贵州省革命委员会办公室',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/b5578055-ca9b-43c8-a064-fc1380647ca1/${
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
        title: '张春桥同志在南方十三省、市、自治区第二次血防工作会议上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1970, month: 5, day: 29 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/b5578055-ca9b-43c8-a064-fc1380647ca1',
};
