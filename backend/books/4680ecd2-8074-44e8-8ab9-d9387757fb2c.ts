export default {
  entity: {
    id: '4680ecd2-8074-44e8-8ab9-d9387757fb2c',
    name: '控诉批判“四人帮”及其资产阶级帮派体系罪行发言汇编',
    internal: false,
    official: false,
    type: 'img',
    author: '中共潍坊市委大批判办公室',
    files: new Array(26)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/4680ecd2-8074-44e8-8ab9-d9387757fb2c/${
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
        title: '控诉批判“四人帮”及其资产阶级帮派体系罪行发言汇编',
        authors: ['中共潍坊市委大批判办公室'],
        page_start: 1,
        page_end: 26,
        dates: [{ year: 1977, month: 8, day: 13 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/4680ecd2-8074-44e8-8ab9-d9387757fb2c',
};
