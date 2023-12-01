export default {
  entity: {
    id: '3ec829b1-a175-4e6e-96e5-3440251c858a',
    name: '中国共产党广西壮族自治区委员会文件',
    internal: false,
    official: false,
    type: 'img',
    author: '中共广西壮族自治区委员会',
    files: new Array(44)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/3ec829b1-a175-4e6e-96e5-3440251c858a/${
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
        title: '转发桂林市公安局关于桂林几个反革命分子的罪证材料',
        authors: ['中共广西壮族自治区委员会'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1977, month: 1, day: 20 }],
      },
      {
        title: '桂林几个反革命分子的罪证材料',
        authors: ['广西壮族自治区桂林市公安局'],
        page_start: 3,
        page_end: 44,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/3ec829b1-a175-4e6e-96e5-3440251c858a',
};
