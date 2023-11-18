export default {
  entity: {
    id: '5fa51571-713e-4e95-ac87-2bae26bc45b6',
    name: '文革通讯第145期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/5fa51571-713e-4e95-ac87-2bae26bc45b6/${
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
        title: '伟大统帅毛主席对彭、高、饶反党联盟的批判',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [
          { year: 1956 },
          { year: 1955, month: 3 },
          { year: 1966, month: 10, day: 24 },
          { year: 1959, month: 9, day: 8 },
          { year: 1962, month: 1, day: 27 },
        ],
      },
      {
        title: '高饶联盟的实际领袖是彭德怀',
        authors: ['《文革通讯》编辑部'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 11 }],
      },
      {
        title: '狼狈相依同为寇，心有灵犀一点通——刘少奇与饶漱石',
        authors: ['《文革通讯》编辑部'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 11 }],
      },
      {
        title: '大野心家高岗反革命丑史',
        authors: ['《文革通讯》编辑部'],
        page_start: 2,
        page_end: 4,
        dates: [{ year: 1967, month: 10, day: 11 }],
      },
      {
        title: '反党小说《刘志丹》是牛鬼蛇神的黑窝子',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1967, month: 10, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/5fa51571-713e-4e95-ac87-2bae26bc45b6',
};
