export default {
  entity: {
    id: '3d5982c2-265a-4ddc-bc10-46d17f434b3b',
    name: '邓兴国、崔大田、黄廉、周家喻反动言论摘录（1977.3.7四川）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共四川省委大批判组，1977.3.7',
    files: new Array(19)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3d5982c2-265a-4ddc-bc10-46d17f434b3b/${
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
        title: '邓兴国、崔大田、黄廉、周家喻反动言论摘录',
        authors: ['中共四川省委大批判组'],
        page_start: 1,
        page_end: 19,
        dates: [{ year: 1977, month: 3, day: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/3d5982c2-265a-4ddc-bc10-46d17f434b3b',
};
