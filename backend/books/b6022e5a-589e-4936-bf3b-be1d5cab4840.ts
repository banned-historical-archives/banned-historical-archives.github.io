export default {
  entity: {
    id: 'b6022e5a-589e-4936-bf3b-be1d5cab4840',
    name: '“四人帮”及其黑干将夏邦银、朱洪霞、胡厚民指使和支持庞道铭、曾庆浩、丁盘铭等人在黄石阴谋篡党夺权的反革命舆论材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共黄石市委材料组',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/b6022e5a-589e-4936-bf3b-be1d5cab4840/${
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
          '“四人帮”及其黑干将夏邦银、朱洪霞、胡厚民指使和支持庞道铭、曾庆浩、丁盘铭等人在黄石阴谋篡党夺权的反革命舆论材料',
        authors: ['中共黄石市委材料组'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1977, month: 2 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/b6022e5a-589e-4936-bf3b-be1d5cab4840',
};
