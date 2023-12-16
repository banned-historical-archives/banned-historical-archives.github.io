export default {
  entity: {
    id: '2d7a81d2-0b40-46b9-938f-0d6d3c8a8a7e',
    name: '揭发与批判第二期',
    internal: false,
    official: true,
    type: 'img',
    author: '省直单位革命大批判组',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/2d7a81d2-0b40-46b9-938f-0d6d3c8a8a7e/${
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
        title: '中共湖南省委、长沙市委召开大会传达贯彻党中央指示精神',
        authors: ['省直单位革命大批判组'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1974, month: 4, day: 11 }],
      },
      {
        title: '省委第二书记张平化同志的讲话',
        authors: ['张平化'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1974, month: 4, day: 11 }],
      },
      {
        title: '省军区政委张立宪同志的讲话',
        authors: ['张立宪'],
        page_start: 3,
        page_end: 3,
        dates: [{ year: 1974, month: 4, day: 11 }],
      },
      {
        title: '中共长沙市委书记张厚同志的讲话',
        authors: ['张厚'],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1974, month: 4, day: 11 }],
      },
      {
        title: '省革委会副主任胡勇同志的讲话',
        authors: ['胡勇'],
        page_start: 4,
        page_end: 5,
        dates: [{ year: 1974, month: 4, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/2d7a81d2-0b40-46b9-938f-0d6d3c8a8a7e',
};
