export default {
  entity: {
    id: 'f0014015-305c-42b6-8625-9ee84ed12d42',
    name: '章含之交代',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/f0014015-305c-42b6-8625-9ee84ed12d42/${
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
        title: '章含之交代',
        authors: ['章含之'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1976 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/f0014015-305c-42b6-8625-9ee84ed12d42',
};
