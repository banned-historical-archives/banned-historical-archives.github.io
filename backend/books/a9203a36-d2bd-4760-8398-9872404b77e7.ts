export default {
  entity: {
    id: 'a9203a36-d2bd-4760-8398-9872404b77e7',
    name: '自我鉴定',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/a9203a36-d2bd-4760-8398-9872404b77e7/${
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
        title: '自我鉴定',
        authors: ['孙景祥'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1964 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/a9203a36-d2bd-4760-8398-9872404b77e7',
};
