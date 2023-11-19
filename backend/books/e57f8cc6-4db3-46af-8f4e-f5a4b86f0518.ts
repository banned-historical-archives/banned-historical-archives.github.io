export default {
  entity: {
    id: 'e57f8cc6-4db3-46af-8f4e-f5a4b86f0518',
    name: '东方红第41、42期',
    internal: false,
    official: false,
    type: 'img',
    author: '江苏无锡九·二红联会，市一中东方红公社',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e57f8cc6-4db3-46af-8f4e-f5a4b86f0518/${
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
        title: '战无不胜的毛泽东思想万岁！——毛主席最新指示汇编',
        authors: ['《东方红》编辑部'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1967, month: 11, day: 1 }],
      },
      {
        title: '砸烂地下学习',
        authors: ['《东方红》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 11, day: 1 }],
      },
      {
        title: '地下学习调查录',
        authors: ['《东方红》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 11, day: 1 }],
      },
      {
        title: '刺刀见红，挖私根',
        authors: ['《东方红》编辑部'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1967, month: 11, day: 2 }],
      },
      {
        title: '把吴镇新的黑话拿出来示众',
        authors: ['《东方红》编辑部'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1967, month: 11, day: 2 }],
      },
      {
        title: '不准把水搅浑',
        authors: ['《东方红》编辑部'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1967, month: 11, day: 2 }],
      },
      {
        title: '“240分”是卡住工农子女进一中的黑杠',
        authors: ['《东方红》编辑部'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1967, month: 11, day: 2 }],
      },
    ],
    ocr: { vsplit: 0.4 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/e57f8cc6-4db3-46af-8f4e-f5a4b86f0518',
};
