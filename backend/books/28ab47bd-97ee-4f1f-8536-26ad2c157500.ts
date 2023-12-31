export default {
  entity: {
    id: '28ab47bd-97ee-4f1f-8536-26ad2c157500',
    name: '斩断“四人帮”伸进福建的魔爪——陈佳忠、郑重的罪行录（1976.12福建）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共福建省委党校大批判材料组，1976.12',
    files: new Array(23)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/28ab47bd-97ee-4f1f-8536-26ad2c157500/${
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
        title: '斩断“四人帮”伸进福建的魔爪——陈佳忠、郑重的罪行录',
        authors: ['中共福建省委党校大批判材料组'],
        page_start: 1,
        page_end: 23,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/28ab47bd-97ee-4f1f-8536-26ad2c157500',
};
