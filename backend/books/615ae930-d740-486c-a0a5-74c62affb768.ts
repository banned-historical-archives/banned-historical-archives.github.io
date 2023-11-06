export default {
  entity: {
    id: '615ae930-d740-486c-a0a5-74c62affb768',
    name: '一九七七年湖北省农业学大寨会议典型材料',
    internal: false,
    official: false,
    type: 'img',
    author: '一九七七年湖北省农业学大寨会议秘书处',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/615ae930-d740-486c-a0a5-74c62affb768/${
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
          '彻底揭发批判“四人帮及其伸向湖北的黑手夏、朱、胡等人阴谋篡党夺权的反革命罪行',
        authors: ['古博'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1977, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/615ae930-d740-486c-a0a5-74c62affb768',
};
