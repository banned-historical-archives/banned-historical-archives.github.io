export default {
  entity: {
    id: 'dcab666b-9d77-4eb9-bfd7-b9c5939b698b',
    name: '文革通讯第167期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/dcab666b-9d77-4eb9-bfd7-b9c5939b698b/${
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
        title: '毛主席在上海的情况',
        authors: ['《文革通讯》编辑部'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 10, day: 27 }],
      },
      {
        title: '总理接见毛里3塔尼亚外宾时和一翻译的谈话',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 17 }],
      },
      {
        title: '周总理十月十八日晚关于查封外联站核心组的二点指示',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 18 }],
      },
      {
        title: '陈伯达、戚本禹、叶群等中央首长审查交响乐《海港》并作出指示',
        authors: ['陈伯达', '戚本禹', '叶群'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 9 }],
      },
      {
        title: '伯达、文元同志在中央文革接见《解放军报》编辑小组时的讲话',
        authors: ['陈伯达', '姚文元'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 9, day: 23 }],
      },
      {
        title:
          '要革命就干得一点事，“斗私批修”不是抽象的——春桥同志10月10日接见舞蹈学校大联合委员会讲话',
        authors: ['张春桥'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 10 }],
      },
      {
        title: '谢副总理十月十九日市革委会上重要指示',
        authors: ['谢富治'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 10, day: 19 }],
      },
      {
        title: '谢副总理接见京西矿务局学习班全体学员的讲话',
        authors: ['谢富治'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1967, month: 10, day: 18 }],
      },
      {
        title: '中国人民解放军代总参谋长杨成武同志对测绘学院革命大联合的指示',
        authors: ['杨成武'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 10, day: 19 }],
      },
      {
        title: '吴法宪司令员重要讲话',
        authors: ['吴法宪'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 10, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/dcab666b-9d77-4eb9-bfd7-b9c5939b698b',
};
