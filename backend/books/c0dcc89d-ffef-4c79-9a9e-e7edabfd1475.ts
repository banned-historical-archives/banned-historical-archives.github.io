export default {
  entity: {
    id: 'c0dcc89d-ffef-4c79-9a9e-e7edabfd1475',
    name: '张家口市革命委员会关于发动群众讨论一批罪犯处理问题的通知',
    internal: true,
    official: true,
    type: 'img',
    author: '张家口市革命委员会',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c0dcc89d-ffef-4c79-9a9e-e7edabfd1475/${
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
        title: '张家口市革命委员会关于发动群众讨论一批罪犯处理问题的通知',
        authors: ['张家口市革命委员会'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1973, month: 12, day: 29 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/c0dcc89d-ffef-4c79-9a9e-e7edabfd1475',
};
