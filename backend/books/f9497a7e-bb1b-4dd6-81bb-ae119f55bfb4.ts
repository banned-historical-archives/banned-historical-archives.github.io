export default {
  entity: {
    id: 'f9497a7e-bb1b-4dd6-81bb-ae119f55bfb4',
    name: '张铁生一九七六年八月廿九日在铁岭农学院应届毕业生大会上的讲话',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(24)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/f9497a7e-bb1b-4dd6-81bb-ae119f55bfb4/${
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
        title: '张铁生一九七六年八月廿九日在铁岭农学院应届毕业生大会上的讲话',
        authors: ['张铁生'],
        page_start: 1,
        page_end: 24,
        dates: [{ year: 1976, month: 8, day: 29 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/f9497a7e-bb1b-4dd6-81bb-ae119f55bfb4',
};
