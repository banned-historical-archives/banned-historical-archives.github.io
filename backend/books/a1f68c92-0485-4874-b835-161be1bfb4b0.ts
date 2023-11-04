export default {
  entity: {
    id: 'a1f68c92-0485-4874-b835-161be1bfb4b0',
    name: '“四人帮”及其死党毛远新在民兵工作方面的反动言论摘录',
    internal: false,
    official: false,
    type: 'img',
    author: '通辽市人民武装部',
    files: new Array(17)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a1f68c92-0485-4874-b835-161be1bfb4b0/${
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
        title: '“四人帮”及其死党毛远新在民兵工作方面的反动言论摘录',
        authors: ['通辽市人民武装部'],
        page_start: 1,
        page_end: 17,
        dates: [{ year: 1977, month: 7 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/a1f68c92-0485-4874-b835-161be1bfb4b0',
};
