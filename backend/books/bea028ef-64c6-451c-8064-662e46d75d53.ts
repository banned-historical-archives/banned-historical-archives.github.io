export default {
  entity: {
    id: 'bea028ef-64c6-451c-8064-662e46d75d53',
    name: '学习材料（99）',
    internal: false,
    official: false,
    type: 'img',
    author: '山东革命工人造反总指挥部济南总指挥部政宣部',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/bea028ef-64c6-451c-8064-662e46d75d53/${
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
        title: '张春桥、徐景贤等同志在上海市革委会扩大会议上的讲话',
        authors: ['张春桥', '徐景贤'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1968, month: 8, day: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/bea028ef-64c6-451c-8064-662e46d75d53',
};
