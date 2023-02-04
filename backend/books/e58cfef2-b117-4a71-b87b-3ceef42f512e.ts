export default {
  entity: {
    id: 'e58cfef2-b117-4a71-b87b-3ceef42f512e',
    name: '周总理指示（1966.10.3）',
    internal: false,
    official: false,
    type: 'img',
    author: '周恩来，北京航空学院“东方红”红卫兵宣传毛泽东思想战斗队',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/e58cfef2-b117-4a71-b87b-3ceef42f512e/${
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
        title: '周总理指示',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1966, month: 10, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/e58cfef2-b117-4a71-b87b-3ceef42f512e',
};
