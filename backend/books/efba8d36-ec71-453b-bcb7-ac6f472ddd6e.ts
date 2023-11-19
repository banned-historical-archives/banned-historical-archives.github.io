export default {
  entity: {
    id: 'efba8d36-ec71-453b-bcb7-ac6f472ddd6e',
    name: '中央领导同志的揭示',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(45)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/efba8d36-ec71-453b-bcb7-ac6f472ddd6e/${
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
        title: '中央领导同志的揭示',
        authors: ['江青', '王洪文', '叶剑英', '张春桥', '姚文元'],
        page_start: 1,
        page_end: 45,
        dates: [{ year: 1974, month: 6, day: 14 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/efba8d36-ec71-453b-bcb7-ac6f472ddd6e',
};
