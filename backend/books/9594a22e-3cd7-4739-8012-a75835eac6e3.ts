export default {
  entity: {
    id: '9594a22e-3cd7-4739-8012-a75835eac6e3',
    name: '文革通讯第130期',
    internal: false,
    official: false,
    type: 'img',
    author: '《文革通讯》编辑部',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/9594a22e-3cd7-4739-8012-a75835eac6e3/${
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
        title: '周总理在中央常委碰头会议扩大会议上的讲话',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1967, month: 7, day: 26 }],
      },
      {
        title: '姚文元同志说：“大家可注意研究”',
        authors: ['姚文元'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 7 }],
      },
      {
        title: '国际文艺消息',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 20 }],
      },
      {
        title: '祖国各地',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/9594a22e-3cd7-4739-8012-a75835eac6e3',
};
