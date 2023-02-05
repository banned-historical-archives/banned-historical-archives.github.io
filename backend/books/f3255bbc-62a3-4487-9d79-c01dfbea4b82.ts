export default {
  entity: {
    id: 'f3255bbc-62a3-4487-9d79-c01dfbea4b82',
    name: '首长讲话（1967.9.11）',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥，新交大革命造反总部争朝夕战斗队翻印',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/f3255bbc-62a3-4487-9d79-c01dfbea4b82/${
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
        title: '张春桥同志在上海市革命委员会常委会上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 11 }],
      },
    ],
    ocr: { auto_vsplit: false, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/f3255bbc-62a3-4487-9d79-c01dfbea4b82',
};
