export default {
  entity: {
    id: '2093d17f-c46e-4652-8fb5-af6aa48880be',
    name: '文革通讯第148、149期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/2093d17f-c46e-4652-8fb5-af6aa48880be/${
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
        dates: [{ year: 1967, month: 10, day: 1 }],
      },
      {
        title: '中共中央通知',
        authors: ['中共中央'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 10, day: 7 }],
      },
      {
        title: '毛主席视察华北、中南和华东地区时的重要指示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967 }],
      },
      {
        title:
          '总理、伯达、富治同志接见四川成都“红卫兵成都部队”赴京代表团的讲话',
        authors: ['周恩来', '陈伯达', '谢富治'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 26 }],
      },
      {
        title: '中央首长接见东北三省代表讲话（续）',
        authors: ['周恩来', '杨成武', '康生', ''],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1967, month: 9, day: 28 }],
      },
      {
        title: '要好好改造资产阶级世界观',
        authors: ['陈伯达'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1967, month: 10, day: 1 }],
      },
      {
        title: '谢副总理十月五日在市革委会的讲话',
        authors: ['谢富治'],
        page_start: 5,
        page_end: 6,
        dates: [{ year: 1967, month: 10, day: 5 }],
      },
      {
        title:
          '根据毛主席指示中央举办部队干部学习班陈伯达、康生、杨成武、吴法宪、邱会作组成领导小组',
        authors: ['《文革通讯》编辑部'],
        page_start: 6,
        page_end: 6,
        dates: [{ year: 1967, month: 10, day: 14 }],
      },
      {
        title: '反革命修正主义分子、大野心家、大阴谋家罗瑞卿的二十大罪状',
        authors: ['《文革通讯》编辑部'],
        page_start: 6,
        page_end: 9,
        dates: [{ year: 1967, month: 10, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/2093d17f-c46e-4652-8fb5-af6aa48880be',
};
