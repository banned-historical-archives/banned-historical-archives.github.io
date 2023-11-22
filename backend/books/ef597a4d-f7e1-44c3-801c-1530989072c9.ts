export default {
  entity: {
    id: 'ef597a4d-f7e1-44c3-801c-1530989072c9',
    name: '匈牙利的反革命事件',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef597a4d-f7e1-44c3-801c-1530989072c9/${
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
        title: '匈牙利的反革命事件',
        authors: [],
        page_start: 1,
        page_end: 4,
        dates: [],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/ef597a4d-f7e1-44c3-801c-1530989072c9',
};
