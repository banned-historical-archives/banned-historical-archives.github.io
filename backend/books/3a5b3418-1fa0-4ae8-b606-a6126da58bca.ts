export default {
  entity: {
    id: '3a5b3418-1fa0-4ae8-b606-a6126da58bca',
    name: '文革通讯第5期',
    internal: false,
    official: false,
    type: 'pdf',
    author:
      '红卫兵上海革命造反委员会与北京大学红卫兵《战上海》兵团合编，首都红卫兵星火燎原战斗队整理翻印',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/3a5b3418-1fa0-4ae8-b606-a6126da58bca.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '二月十九日主席批示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 2, day: 19 }],
      },
      {
        title: '张春桥同志区京和毛主席谈话摘录',
        authors: ['张春桥', '毛泽东'],
        page_start: 1,
        page_end: 2,
        is_range_date: true,
        dates: [
          { year: 1967, month: 2, day: 12 },
          { year: 1967, month: 2, day: 18 },
        ],
      },
      {
        title: '2月18日周总理接见财贸部局长以上干部讲话摘要',
        authors: ['周恩来'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 2, day: 18 }],
      },
      {
        title: '王力同志讲话',
        authors: ['王力'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1967, month: 2, day: 9 }],
      },
      {
        title: '首都通讯',
        authors: ['《文革通讯》编辑部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1967, month: 3, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/3a5b3418-1fa0-4ae8-b606-a6126da58bca.pdf',
};
