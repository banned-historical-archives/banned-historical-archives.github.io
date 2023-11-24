export default {
  entity: {
    id: '68e8f0f3-b098-4604-9c27-1526b63d198a',
    name: '张春桥1972年9月5日题词',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/68e8f0f3-b098-4604-9c27-1526b63d198a/${
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
        title: '张春桥1972年9月5日题词',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1972, month: 9, day: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/68e8f0f3-b098-4604-9c27-1526b63d198a',
};
