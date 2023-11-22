export default {
  entity: {
    id: '69285154-a226-4a15-aff8-78ffa2aee7eb',
    name: '杨春甫同志在十一月十七日全省电话会议上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/69285154-a226-4a15-aff8-78ffa2aee7eb/${
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
        title: '杨春甫同志在十一月十七日全省电话会议上的讲话',
        authors: ['杨春甫'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1972, month: 11, day: 17 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/69285154-a226-4a15-aff8-78ffa2aee7eb',
};
