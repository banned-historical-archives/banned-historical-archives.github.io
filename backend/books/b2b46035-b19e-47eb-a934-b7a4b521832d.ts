export default {
  entity: {
    id: 'b2b46035-b19e-47eb-a934-b7a4b521832d',
    name: '文革简况第四期',
    internal: false,
    official: false,
    type: 'img',
    author: '舟山水产学院九一五战斗团文革简况编辑小组',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b2b46035-b19e-47eb-a934-b7a4b521832d/${
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
        title: '张春桥同志接见舟山、金华革命造反派代表',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1967, month: 7, day: 2 }],
      },
      {
        title: '永远和你们心连心——致“九·一五”战斗团',
        authors: ['向东'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1967, month: 8, day: 10 }],
      },
      {
        title: '一年来的文化大革命简况介绍',
        authors: ['舟山水产学院九一五战斗团文革简况编辑小组'],
        page_start: 6,
        page_end: 7,
        dates: [{ year: 1967, month: 9, day: 12 }],
      },
      {
        title: '舟山消息',
        authors: ['舟山水产学院九一五战斗团文革简况编辑小组'],
        page_start: 7,
        page_end: 8,
        dates: [{ year: 1967, month: 9, day: 12 }],
      },
      {
        title: '祖国各地',
        authors: ['舟山水产学院九一五战斗团文革简况编辑小组'],
        page_start: 8,
        page_end: 9,
        dates: [{ year: 1967, month: 9, day: 12 }],
      },
      {
        title: '坚决拥护取缔反革命组织《5·16兵团》！',
        authors: ['舟山水产学院九一五战斗团文革简况编辑小组'],
        page_start: 9,
        page_end: 9,
        dates: [{ year: 1967, month: 9, day: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/b2b46035-b19e-47eb-a934-b7a4b521832d',
};
