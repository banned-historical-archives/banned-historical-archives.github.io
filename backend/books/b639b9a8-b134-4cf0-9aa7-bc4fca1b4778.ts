export default {
  entity: {
    id: 'b639b9a8-b134-4cf0-9aa7-bc4fca1b4778',
    name: '姚文元同志传达毛主席的重要指示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/b639b9a8-b134-4cf0-9aa7-bc4fca1b4778/${
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
        title: '姚文元同志传达毛主席的重要指示',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1974, month: 1, day: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/b639b9a8-b134-4cf0-9aa7-bc4fca1b4778',
};
