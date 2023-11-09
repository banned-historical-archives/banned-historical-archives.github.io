export default {
  entity: {
    id: '69958770-0c4f-4287-b974-679e0665a669',
    name: '揭发“四人帮”反党集团罪行材料摘编（一）',
    internal: false,
    official: false,
    type: 'img',
    author: '复旦大学政宣组',
    files: new Array(32)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/69958770-0c4f-4287-b974-679e0665a669/${
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
        title: '揭发“四人帮”反党集团罪行材料摘编（一）',
        authors: ['复旦大学政宣组'],
        page_start: 1,
        page_end: 32,
        dates: [{ year: 1976, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/69958770-0c4f-4287-b974-679e0665a669',
};
