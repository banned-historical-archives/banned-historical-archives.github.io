export default {
  entity: {
    id: '86944625-9c96-46b5-85bb-0cc38d69500c',
    name: '毛主席批示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/86944625-9c96-46b5-85bb-0cc38d69500c/${
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
        title: '毛主席批示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1975, month: 7, day: 25 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/86944625-9c96-46b5-85bb-0cc38d69500c',
};
