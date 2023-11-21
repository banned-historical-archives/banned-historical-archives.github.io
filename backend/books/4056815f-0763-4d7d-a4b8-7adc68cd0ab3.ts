export default {
  entity: {
    id: '4056815f-0763-4d7d-a4b8-7adc68cd0ab3',
    name: '陈司令员毛远新在省委召开的整党建党座谈会上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/4056815f-0763-4d7d-a4b8-7adc68cd0ab3/${
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
        title: '陈司令员毛远新在省委召开的整党建党座谈会上的讲话',
        authors: ['陈锡联', '毛远新'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1969, month: 2, day: 24 }],
      },
      {
        title: '大会须知和组织纪律',
        authors: ['大业公社革命委员会'],
        page_start: 11,
        page_end: 11,
        dates: [{ year: 1969, month: 4, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/4056815f-0763-4d7d-a4b8-7adc68cd0ab3',
};
