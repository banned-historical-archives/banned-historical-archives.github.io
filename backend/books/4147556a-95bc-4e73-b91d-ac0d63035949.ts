export default {
  entity: {
    id: '4147556a-95bc-4e73-b91d-ac0d63035949',
    name: '军区揭发“四人帮”反党集团罪行材料之三十七',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/4147556a-95bc-4e73-b91d-ac0d63035949/${
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
        title: '毛远新反动言论摘录',
        authors: ['沈阳军区'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/4147556a-95bc-4e73-b91d-ac0d63035949',
};
