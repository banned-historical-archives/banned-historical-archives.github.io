export default {
  entity: {
    id: '5692f6bb-48e9-4c7c-92b6-2560cdfcb30b',
    name: '关于阶级关系问题的讨论情况汇集',
    internal: false,
    official: false,
    type: 'img',
    author: '辽宁省委宣传组《宣传工作简报》一九七六年第五期',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/5692f6bb-48e9-4c7c-92b6-2560cdfcb30b/${
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
        title: '关于阶级关系问题的讨论情况汇集',
        authors: ['辽宁省委宣传组'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1976, month: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/5692f6bb-48e9-4c7c-92b6-2560cdfcb30b',
};
