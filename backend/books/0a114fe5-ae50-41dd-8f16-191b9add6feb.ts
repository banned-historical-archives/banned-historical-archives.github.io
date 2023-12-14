export default {
  entity: {
    id: '0a114fe5-ae50-41dd-8f16-191b9add6feb',
    name: '宝音同志在省揭批“四人帮”经验交流会上的发言（1977.11.26河北）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/0a114fe5-ae50-41dd-8f16-191b9add6feb/${
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
        title: '宝音同志在省揭批“四人帮”经验交流会上的发言',
        authors: ['宝音'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1977, month: 11, day: 13 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/0a114fe5-ae50-41dd-8f16-191b9add6feb',
};
