export default {
  entity: {
    id: '494b0658-a91c-4720-a8c7-2603c34050e0',
    name: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/494b0658-a91c-4720-a8c7-2603c34050e0/${
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
        title: '陈锡联同志在山东重点企业批林批孔汇报会议上的讲话',
        authors: ['陈锡联'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1974, month: 6, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/494b0658-a91c-4720-a8c7-2603c34050e0',
};
