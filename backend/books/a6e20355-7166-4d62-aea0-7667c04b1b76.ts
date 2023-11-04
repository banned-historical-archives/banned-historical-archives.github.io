export default {
  entity: {
    id: 'a6e20355-7166-4d62-aea0-7667c04b1b76',
    name: '彻底揭发批判“四人帮”及其在卫生部的亲信刘湘屏的反革命罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(19)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a6e20355-7166-4d62-aea0-7667c04b1b76/${
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
        title: '彻底揭发批判“四人帮”及其在卫生部的亲信刘湘屏的反革命罪行',
        authors: ['卫生部运动办公室'],
        page_start: 1,
        page_end: 19,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/a6e20355-7166-4d62-aea0-7667c04b1b76',
};
