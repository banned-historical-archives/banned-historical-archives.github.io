export default {
  entity: {
    id: '0a1132cb-3f4d-4852-aa99-4c5410428503',
    name: '文革通讯第131期（1967.9.21浙江）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/0a1132cb-3f4d-4852-aa99-4c5410428503/${
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
        title: '毛主席关于今年国庆的指示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 9, day: 13 }],
      },
      {
        title: '毛主席在重庆的讲话',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1966, month: 5, day: 6 }],
      },
      {
        title: '紧跟毛主席的伟大战略部署',
        authors: ['《文革通讯》编辑部'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 21 }],
      },
      {
        title: '周总理接见广州贫联赴京代表',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 13 }],
      },
      {
        title: '一九六七年九月八日张春桥同志接见上海工总司成员讲话',
        authors: ['张春桥'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 8 }],
      },
      {
        title: '陶铸——赫鲁晓夫式的人物',
        authors: ['《文革通讯》编辑部'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 21 }],
      },
      {
        title: '彭德怀与刘少奇狗咬狗',
        authors: ['《文革通讯》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 21 }],
      },
      {
        title: '庐山发现特务网',
        authors: ['《文革通讯》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 21 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/0a1132cb-3f4d-4852-aa99-4c5410428503',
};
