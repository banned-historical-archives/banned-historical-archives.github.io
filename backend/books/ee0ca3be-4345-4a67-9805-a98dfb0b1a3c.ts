export default {
  entity: {
    id: 'ee0ca3be-4345-4a67-9805-a98dfb0b1a3c',
    name: '文革通讯第139期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/ee0ca3be-4345-4a67-9805-a98dfb0b1a3c/${
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
        title: '毛主席最新指示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 9 }],
      },
      {
        title:
          '周总理在国务院财贸口迎接国庆十八周年庆祝全面实现革命大联合的大会上讲话',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 26 }],
      },
      {
        title: '谢副总理、戚本禹同志接见学部大批判指挥部讲话',
        authors: ['谢富治', '戚本禹'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 27 }],
      },
      {
        title: '谢副总理对首都新闻界传达江青同志最新指示',
        authors: ['谢富治', '江青'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 22 }],
      },
      {
        title:
          '世界上最大的一次文斗引起了世界上最大的一场武斗——外国哥们者李敦白谈世界革命形势',
        authors: ['李敦白'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967 }],
      },
      {
        title:
          '在毛泽东思想光辉照耀下，世界马列主义力量迅速壮大——毛主席建党理论对世界革命作出极其重大贡献',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 10, day: 3 }],
      },
      {
        title: '毛主席的故事',
        authors: ['《文革通讯》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 10, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/ee0ca3be-4345-4a67-9805-a98dfb0b1a3c',
};
