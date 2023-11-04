export default {
  entity: {
    id: '4638be35-8cad-4f47-98a0-5af626d5d5c3',
    name: '关于华林森在毛主席逝世后到各区局游说的揭发材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共苏州市委大批判组',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/4638be35-8cad-4f47-98a0-5af626d5d5c3/${
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
        title: '关于华林森在毛主席逝世后到各区局游说的揭发材料',
        authors: ['中共苏州市委大批判组'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '华林森、邹学琪策划“八·六”、“八·一〇”水佐岗事件的真相',
        authors: ['中共苏州市委大批判组'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1976, month: 12 }],
      },
      {
        title: '华林森一九七六年十月七日在烽火机械厂座谈会上的讲话（纪录）',
        authors: ['华林森'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1976, month: 10, day: 7 }],
      },
      {
        title: '汪永珠一九七六年五月二十五日在区局宣传干部会议上的讲话',
        authors: ['汪永珠'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1976, month: 5, day: 25 }],
      },
      {
        title: '汪永珠一九七六年六月十一日在区局宣传干部会议上的讲话',
        authors: ['汪永珠'],
        page_start: 6,
        page_end: 7,
        dates: [{ year: 1976, month: 6, day: 11 }],
      },
      {
        title: '汪永珠在苏州市理论讨论会上的动员报告',
        authors: ['汪永珠'],
        page_start: 8,
        page_end: 10,
        dates: [{ year: 1976 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/4638be35-8cad-4f47-98a0-5af626d5d5c3',
};
