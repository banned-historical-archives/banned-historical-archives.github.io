export default {
  entity: {
    id: 'b8ece340-aa66-4c98-8752-78e89dcd433e',
    name: '在自治区第三次工业学大庆会议闭幕式上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/b8ece340-aa66-4c98-8752-78e89dcd433e/${
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
        title: '在自治区第三次工业学大庆会议闭幕式上的讲话',
        authors: ['汪锋'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1977, month: 10, day: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/b8ece340-aa66-4c98-8752-78e89dcd433e',
};
