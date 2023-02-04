export default {
  entity: {
    id: 'ac0fac68-a423-427e-b6d4-96318f090c50',
    name: '十月九日晚七时半左右周总理、张春桥同志接见清华大学八个组织五个代表时的谈话（1966.10.9）',
    internal: false,
    official: true,
    type: 'img',
    author:
      '周恩来、张春桥，红旗向东战斗小组、动力系锅炉燃烧教研组、清华《红色服务员》《红矛》、清华红卫兵八一远征队、清华锅炉、燃烧、井冈山红卫兵宣传组、北航4系红卫兵、清华大学力104、清华大学船舶教研组',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/ac0fac68-a423-427e-b6d4-96318f090c50/${
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
        title: '周恩来张春桥接见清华大学八个组织的代表座谈纪要',
        alias:
          '十月九日晚七时半左右周总理、张春桥同志接见清华大学八个组织五个代表时的谈话',
        authors: ['周恩来', '张春桥'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1966, month: 10, day: 9 }],
      },
      {
        title: '周总理、张春桥同志谈话纪要',
        authors: ['周恩来', '张春桥'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1966, month: 10, day: 9 }],
      },
      {
        title: '周总理和张春桥同志同清华各红卫兵组织座谈要点',
        authors: ['周恩来', '张春桥'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1966, month: 10, day: 9 }],
      },
      {
        title: '总理的信',
        authors: ['周恩来'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1966, month: 9, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/ac0fac68-a423-427e-b6d4-96318f090c50',
};
