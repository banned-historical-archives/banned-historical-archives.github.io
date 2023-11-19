export default {
  entity: {
    id: 'e668b73a-e18d-4c7c-9f77-c6d06b671795',
    name: '钢工总通讯一九六八年一月五日',
    internal: false,
    official: false,
    type: 'img',
    author: '武汉钢总工宣传部',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e668b73a-e18d-4c7c-9f77-c6d06b671795/${
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
        title: '中共中央关于成立革命委员会几个问题的批复',
        authors: ['中共中央', '国务院', '中央军委', '中央文革'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 11, day: 7 }],
      },
      {
        title:
          '关于成立地专级、县级革命委员会筹备小组和革命委员会的审批权限的修改规定',
        authors: ['中共中央', '国务院', '中央军委', '中央文革'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967 }],
      },
      {
        title: '告读者',
        authors: ['武汉钢总工宣传部'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '中央文件',
        authors: ['中共中央', '中央文革'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 12, day: 2 }],
      },
      {
        title: '解放军战士谈斗私',
        authors: ['武汉钢总工宣传部'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '文化大革命的“十大好”',
        authors: ['武汉钢总工宣传部'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '要敢造自己的反',
        authors: ['红樱枪'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '对准“私”拼刺刀',
        authors: ['钢工总战斗员小方'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '毛泽东思想光辉照耀着“百万雄狮”受蒙蔽的群众',
        authors: ['武汉钢总工宣传部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '国际消息',
        authors: ['武汉钢总工宣传部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
      {
        title: '简讯几则',
        authors: ['武汉钢总工宣传部'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1968, month: 1, day: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/e668b73a-e18d-4c7c-9f77-c6d06b671795',
};
