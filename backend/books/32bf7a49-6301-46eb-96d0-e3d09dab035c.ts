export default {
  entity: {
    id: '32bf7a49-6301-46eb-96d0-e3d09dab035c',
    name: '文革通讯第150期',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江工农兵美术大学毛泽东主义红卫兵战斗队、毛泽东主义红卫兵',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/32bf7a49-6301-46eb-96d0-e3d09dab035c/${
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
        title: '毛主席在长沙',
        authors: ['《文革通讯》编辑部'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 16 }],
      },
      {
        title:
          '总理、伯达、江青、谢富治、邓颖超、曹轶欧等同志同王大宾同志的讲话',
        authors: ['周恩来', '陈伯达', '江青', '邓颖超', '曹轶欧'],
        page_start: 2,
        page_end: 2,
        dates: [
          { year: 1967, month: 10, day: 1 },
          { year: 1967, month: 9, day: 30 },
        ],
      },
      {
        title: '张春桥同志十月七日在上海工总司“斗私，批修”誓师大会上的发言',
        authors: ['张春桥'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1967, month: 10, day: 7 }],
      },
      {
        title: '张春桥、姚文元同志与上海高校负责同志座谈纪要',
        authors: ['张春桥', '姚文元'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1967, month: 9, day: 29 }],
      },
      {
        title: '张春桥同志十月五日讲话',
        authors: ['张春桥'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1967, month: 10, day: 5 }],
      },
      {
        title:
          '马天水同志在公交系统高举毛泽东思想伟大红旗在无产阶级文化大革命中站好队立新功干部大会上的讲话',
        authors: ['马天水'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1967 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/32bf7a49-6301-46eb-96d0-e3d09dab035c',
};
