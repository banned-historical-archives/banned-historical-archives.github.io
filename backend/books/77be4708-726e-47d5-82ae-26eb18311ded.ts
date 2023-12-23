export default {
  entity: {
    id: '77be4708-726e-47d5-82ae-26eb18311ded',
    name: '“四人帮”反军乱军，破坏军队建设的反动言论（1978.2军）',
    internal: false,
    official: false,
    type: 'img',
    author: '中国人民解放军军事学院训练部，1978.2军',
    files: new Array(8)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77be4708-726e-47d5-82ae-26eb18311ded/${
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
        title: '“四人帮”反军乱军，破坏军队建设的反动言论',
        authors: ['中国人民解放军军事学院训练部'],
        page_start: 1,
        page_end: 8,
        dates: [{ year: 1978, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/77be4708-726e-47d5-82ae-26eb18311ded',
};
