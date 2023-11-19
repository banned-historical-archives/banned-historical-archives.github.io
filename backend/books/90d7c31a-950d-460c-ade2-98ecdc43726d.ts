export default {
  entity: {
    id: '90d7c31a-950d-460c-ade2-98ecdc43726d',
    name: '中共中央关于党的第十次全国代表大会代表产生的决议方案',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/90d7c31a-950d-460c-ade2-98ecdc43726d/${
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
        title: '中共中央关于党的第十次全国代表大会代表产生的决议方案',
        authors: ['中共中央'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1973, month: 5, day: 25 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/90d7c31a-950d-460c-ade2-98ecdc43726d',
};
