export default {
  entity: {
    id: 'cd3e068f-aecb-4e44-b4b6-48ec349ed144',
    name: '新华社大字报（摘抄）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/cd3e068f-aecb-4e44-b4b6-48ec349ed144/${
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
        title: '新华社大字报（摘抄）',
        authors: [],
        page_start: 1,
        page_end: 2,
        dates: [],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/cd3e068f-aecb-4e44-b4b6-48ec349ed144',
};
