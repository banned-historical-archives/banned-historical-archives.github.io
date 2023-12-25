export default {
  entity: {
    id: '0174e492-2d34-482a-959b-3a42f0bdff16',
    name: '李伯秋反党言论摘编（1978.3）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共辽宁省委清查“四人帮”罪行小组编印，1978.3',
    files: new Array(22)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/0174e492-2d34-482a-959b-3a42f0bdff16/${
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
        title: '李伯秋反党言论摘编',
        authors: ['中共辽宁省委清查“四人帮”罪行小组'],
        page_start: 1,
        page_end: 22,
        dates: [{ year: 1978, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/0174e492-2d34-482a-959b-3a42f0bdff16',
};
