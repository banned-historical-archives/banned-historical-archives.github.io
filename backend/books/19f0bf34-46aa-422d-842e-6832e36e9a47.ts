export default {
  entity: {
    id: '19f0bf34-46aa-422d-842e-6832e36e9a47',
    name: '北京笔记本',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/19f0bf34-46aa-422d-842e-6832e36e9a47/${
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
        title: '中央首长讲话',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [],
      },
      {
        title: '王洪文同志在上海的一次讲话',
        authors: ['王洪文'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1974, month: 3 }],
      },
      {
        title: '陈亚丁传达江青同志指示',
        authors: ['江青'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1970, month: 3, day: 17 }],
      },
      {
        title:
          '叶剑英在中央军委扩大会议上传达毛主席在一九七三年十二月政治局会议上的四次重要指示',
        authors: ['毛泽东'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1973, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/19f0bf34-46aa-422d-842e-6832e36e9a47',
};
