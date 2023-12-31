export default {
  entity: {
    id: 'a86a9484-f7e0-4b9f-b75c-0e9c3176a21d',
    name: '焦林义同志在广州民兵指挥部成立大会上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/a86a9484-f7e0-4b9f-b75c-0e9c3176a21d/${
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
        title: '焦林义同志在广州民兵指挥部成立大会上的讲话',
        authors: ['焦林义'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1974, month: 12, day: 16 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/a86a9484-f7e0-4b9f-b75c-0e9c3176a21d',
};
