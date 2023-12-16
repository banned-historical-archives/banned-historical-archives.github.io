export default {
  entity: {
    id: '5df52c0e-5f24-4ede-a2a8-8d81207d6b25',
    name: '王竹泉同志在南郊会议上的发言（1972.4山东）',
    internal: false,
    official: false,
    type: 'img',
    author: '王竹泉，1972.4',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/5df52c0e-5f24-4ede-a2a8-8d81207d6b25/${
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
        title: '王竹泉同志在南郊会议上的发言',
        authors: ['王竹泉'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1972, month: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/5df52c0e-5f24-4ede-a2a8-8d81207d6b25',
};
