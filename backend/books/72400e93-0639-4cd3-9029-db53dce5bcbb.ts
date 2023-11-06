export default {
  entity: {
    id: '72400e93-0639-4cd3-9029-db53dce5bcbb',
    name: '张铁生、刘继业的反动言论',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/72400e93-0639-4cd3-9029-db53dce5bcbb/${
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
        title: '张铁生、刘继业同志谈情况记录',
        authors: ['张铁生', '刘继业'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1976, month: 9, day: 9 }],
      },
      {
        title: '张铁生、刘继业同志同省知青办领导同志的谈话',
        authors: ['张铁生', '刘继业'],
        page_start: 5,
        page_end: 7,
        dates: [{ year: 1976, month: 9, day: 10 }],
      },
      {
        title: '张铁生同志最近的一次谈话',
        authors: ['张铁生', '刘继业'],
        page_start: 7,
        page_end: 9,
        dates: [{ year: 1976, month: 9, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/72400e93-0639-4cd3-9029-db53dce5bcbb',
};
