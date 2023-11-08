export default {
  entity: {
    id: '10437c6b-5689-4e14-9cd1-0c081d8b2812',
    name: '毛主席有关指示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/10437c6b-5689-4e14-9cd1-0c081d8b2812/${
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
        title: '毛主席有关指示',
        authors: ['河北某部政治部'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1971, month: 12, day: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/10437c6b-5689-4e14-9cd1-0c081d8b2812',
};
