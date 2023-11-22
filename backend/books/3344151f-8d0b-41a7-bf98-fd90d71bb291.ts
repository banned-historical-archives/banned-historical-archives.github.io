export default {
  entity: {
    id: '3344151f-8d0b-41a7-bf98-fd90d71bb291',
    name: '情况交流（10）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江省联总《情况交流》编辑组',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3344151f-8d0b-41a7-bf98-fd90d71bb291/${
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
        title:
          '庆祝工人阶级登上上层建筑领域斗、批、改政治舞台一周年大会张春桥同志讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1969, month: 7, day: 27 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/3344151f-8d0b-41a7-bf98-fd90d71bb291',
};
