export default {
  entity: {
    id: '52d39946-737c-4593-b636-120ef0451d32',
    name: '愤怒控诉“四人帮”在仙游犯下的滔天罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '第二次全国农业学大寨会议秘书处',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/52d39946-737c-4593-b636-120ef0451d32/${
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
        title: '愤怒控诉“四人帮”在仙游犯下的滔天罪行',
        authors: ['中共福建省仙游县委员会'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1976, month: 12, day: 1 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/52d39946-737c-4593-b636-120ef0451d32',
};
