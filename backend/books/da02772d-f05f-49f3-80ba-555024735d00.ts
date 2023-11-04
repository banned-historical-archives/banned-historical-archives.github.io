export default {
  entity: {
    id: 'da02772d-f05f-49f3-80ba-555024735d00',
    name: '清华大学北京大学大字报选编增刊（二）',
    internal: false,
    official: false,
    type: 'img',
    author: '清华大学北京大学《大字报选编》小组',
    files: new Array(19)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/da02772d-f05f-49f3-80ba-555024735d00/${
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
        title: '邓小平同志时怎样背离马克思主义的（材料之一，初编）',
        authors: [
          '清华大学电子系',
          '清华大学力学系',
          '北京大学历史系',
          '北京大学哲学系',
        ],
        page_start: 2,
        page_end: 19,
        dates: [{ year: 1976, month: 2, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/da02772d-f05f-49f3-80ba-555024735d00',
};
