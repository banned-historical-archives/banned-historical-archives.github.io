export default {
  entity: {
    id: 'cdf2ac6f-f323-4684-8de7-0814bc05b266',
    name: '文革通讯第134期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/cdf2ac6f-f323-4684-8de7-0814bc05b266/${
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
        page_end: 1,
        dates: [{ year: 1967, month: 9, day: 26 }],
      },
      {
        title: '林彪同志谈党性和派性',
        authors: ['林彪'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967 }],
      },
      {
        title: '在首都迎国庆动员大会上周总理等中央首长重要讲话',
        authors: ['周恩来', '陈伯达', '谢富治', '康生'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 20 }],
      },
      {
        title: '“陈毅同志还是要一批二保”',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [
          { year: 1967, month: 9, day: 14 },
          { year: 1967, month: 9, day: 16 },
        ],
      },
      {
        title: '周总理谈“5·16”反革命集团',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 18 }],
      },
      {
        title: '中央首长接见辽宁各地代表谈话纪要',
        authors: ['周恩来', '康生'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 19 }],
      },
      {
        title: '总理对哈市炮轰派的指示——总理联络员赵刚传达',
        authors: ['周恩来'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1967 }],
      },
      {
        title: '谢副总理、傅崇碧、吴德同志接见工代会委员',
        authors: ['谢富治', '傅崇碧', '吴德'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 16 }],
      },
      {
        title: '谢副总理的重要讲话',
        authors: ['谢富治'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 19 }],
      },
      {
        title: '“五一六”就是黑手！',
        authors: ['杨成武'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 9, day: 4 }],
      },
      {
        title: '首都消息',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 26 }],
      },
      {
        title: '祖国各地',
        authors: ['《文革通讯》编辑部'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 26 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/cdf2ac6f-f323-4684-8de7-0814bc05b266',
};
