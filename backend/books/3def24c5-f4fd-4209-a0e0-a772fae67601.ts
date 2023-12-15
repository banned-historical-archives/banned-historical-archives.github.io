export default {
  entity: {
    id: '3def24c5-f4fd-4209-a0e0-a772fae67601',
    name: '文革通讯（第147期）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/3def24c5-f4fd-4209-a0e0-a772fae67601/${
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
        title: '毛主席最新最高指示',
        authors: ['《文革通讯》编辑部'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 10, day: 13 }],
      },
      {
        title: '十月五日总理谈外交部运动',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 5 }],
      },
      {
        title: '周总理十月三日在京棉三厂的谈话纪要',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 3 }],
      },
      {
        title: '中央首长接见东北三省代表讲话',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 28 }],
      },
      {
        title: '康生、张春桥同志九月二十八日凌晨接见江苏代表团讲话摘要',
        authors: ['康生', '张春桥'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 28 }],
      },
      {
        title: '陶铸丑闻点滴',
        authors: ['《文革通讯》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 10, day: 13 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/3def24c5-f4fd-4209-a0e0-a772fae67601',
};
