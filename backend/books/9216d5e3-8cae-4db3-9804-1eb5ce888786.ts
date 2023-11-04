export default {
  entity: {
    id: '9216d5e3-8cae-4db3-9804-1eb5ce888786',
    name: '鲁迅对孔孟之道的批判',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/9216d5e3-8cae-4db3-9804-1eb5ce888786/${
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
        title: '鲁迅对孔孟之道的批判',
        authors: ['鲁迅'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1974, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/9216d5e3-8cae-4db3-9804-1eb5ce888786',
};
