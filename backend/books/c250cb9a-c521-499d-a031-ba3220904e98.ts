export default {
  entity: {
    id: 'c250cb9a-c521-499d-a031-ba3220904e98',
    name: '张铁生在太原市湖滨会堂的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(42)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/c250cb9a-c521-499d-a031-ba3220904e98/${
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
        title: '张铁生在太原市湖滨会堂的讲话',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 42,
        dates: [{ year: 1976, month: 2, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/c250cb9a-c521-499d-a031-ba3220904e98',
};
