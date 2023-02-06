export default {
  entity: {
    id: 'd0c805a4-35e0-4bd5-958b-e73c4dd6c22c',
    name: '张春桥、姚文元同志在革命委员会扩大会议上的讲话（1967.3.12）',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥、姚文元',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/d0c805a4-35e0-4bd5-958b-e73c4dd6c22c/${
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
        title: '张春桥姚文元在上海市革命委员会扩大会议上的讲话',
        alias: '张春桥、姚文元同志在革命委员会扩大会议上的讲话',
        authors: ['张春桥', '姚文元'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 3, day: 12 }],
      },
    ],
    ocr: { auto_vsplit: false, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/d0c805a4-35e0-4bd5-958b-e73c4dd6c22c',
};
