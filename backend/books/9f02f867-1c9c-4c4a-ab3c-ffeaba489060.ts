export default {
  entity: {
    id: '9f02f867-1c9c-4c4a-ab3c-ffeaba489060',
    name: '叶剑英同志的讲话（1973.5.21）',
    internal: false,
    official: false,
    type: 'img',
    author: '叶剑英，1973.5.21',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/9f02f867-1c9c-4c4a-ab3c-ffeaba489060/${
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
        title: '叶剑英在军委直属全体会议上的讲话',
        alias: '叶剑英同志的讲话',
        authors: ['叶剑英'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1973, month: 5, day: 21 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/9f02f867-1c9c-4c4a-ab3c-ffeaba489060',
};
