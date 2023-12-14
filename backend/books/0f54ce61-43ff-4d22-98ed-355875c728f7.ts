export default {
  entity: {
    id: '0f54ce61-43ff-4d22-98ed-355875c728f7',
    name: '在中央工作会议第一次全体会议上周恩来同志的讲话（1973.5.20）',
    internal: true,
    official: false,
    type: 'img',
    author: '',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/0f54ce61-43ff-4d22-98ed-355875c728f7/${
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
        title: '在中央工作会议第一次全体会议上周恩来同志的讲话',
        authors: ['周恩来'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1973, month: 5, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/0f54ce61-43ff-4d22-98ed-355875c728f7',
};
