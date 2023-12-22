export default {
  entity: {
    id: '37a72ce4-ce37-4442-8840-46b5dfb45c89',
    name: '张春桥一九七六年二月三日有感',
    internal: false,
    official: false,
    type: 'img',
    author: '张春桥，1976.2.3',
    files: new Array(1)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/37a72ce4-ce37-4442-8840-46b5dfb45c89/${
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
        title: '张春桥一九七六年二月三日有感',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1976, month: 2, day: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/37a72ce4-ce37-4442-8840-46b5dfb45c89',
};
