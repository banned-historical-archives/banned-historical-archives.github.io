export default {
  entity: {
    id: '223d6f79-9df5-4c4d-a67d-4dc9f5bf1a38',
    name: '刘正良的揭发交代和检查（1977.3湖南）',
    internal: false,
    official: false,
    type: 'img',
    author: '刘正良，1977.3',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/223d6f79-9df5-4c4d-a67d-4dc9f5bf1a38/${
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
        title: '刘正良的揭发交代和检查',
        authors: ['刘正良'],
        page_start: 1,
        page_end: 13,
        dates: [{ year: 1977, month: 1, day: 19 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/223d6f79-9df5-4c4d-a67d-4dc9f5bf1a38',
};
