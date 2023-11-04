export default {
  entity: {
    id: '445b1649-baae-4e49-82d0-27aafe4d4907',
    name: '中央领导同志接见三三八团八连干部战士代表谈话纪要',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(42)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/445b1649-baae-4e49-82d0-27aafe4d4907/${
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
        title: '中央领导同志接见三三八团八连干部战士代表谈话纪要',
        authors: ['王洪文', '江青', '张春桥', '姚文元', '纪登奎'],
        page_start: 1,
        page_end: 42,
        dates: [{ year: 1974, month: 2, day: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/445b1649-baae-4e49-82d0-27aafe4d4907',
};
