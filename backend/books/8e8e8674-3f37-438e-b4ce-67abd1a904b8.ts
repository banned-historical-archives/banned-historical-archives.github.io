export default {
  entity: {
    id: '8e8e8674-3f37-438e-b4ce-67abd1a904b8',
    name: '“四人帮”的爪牙反革命分子韩金海部分罪行材料（1977.11.15湖北）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共济南市委清查办，1977.11.15',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8e8e8674-3f37-438e-b4ce-67abd1a904b8/${
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
        title: '“四人帮”的爪牙反革命分子韩金海部分罪行材料',
        authors: ['中共济南市委清查办'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1977, month: 11, day: 10 }],
      },
      {
        title: '韩金海反动言论摘录',
        authors: ['中共济南市委清查办'],
        page_start: 8,
        page_end: 13,
        dates: [{ year: 1977, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/8e8e8674-3f37-438e-b4ce-67abd1a904b8',
};
