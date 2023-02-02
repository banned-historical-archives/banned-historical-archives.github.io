export default {
  entity: {
    id: '5b5666e3-7167-454e-abc8-0378cd928656',
    name: '为加强无产阶级专政而斗争——上海市革命委员会一九六七年六月二日决议',
    internal: false,
    official: true,
    type: 'img',
    author: '上海市革命委员会',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/5b5666e3-7167-454e-abc8-0378cd928656/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title:
          '为加强无产阶级专政而斗争——上海市革命委员会一九六七年六月二日决议',
        authors: ['上海市革命委员会'],
        page_start: 2,
        page_end: 5,
        ocr_exceptions: { '5': { auto_vsplit: false, vsplit: 0.5 } },
        dates: [{ year: 1967, month: 6, day: 2 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/5b5666e3-7167-454e-abc8-0378cd928656',
};
