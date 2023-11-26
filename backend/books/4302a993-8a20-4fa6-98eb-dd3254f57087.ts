export default {
  entity: {
    id: '4302a993-8a20-4fa6-98eb-dd3254f57087',
    name: '王洪文付主席与中央读书班各组负责人的谈话纪要',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/4302a993-8a20-4fa6-98eb-dd3254f57087/${
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
        title: '王洪文付主席与中央读书班各组负责人的谈话纪要',
        authors: ['王洪文'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1973, month: 12, day: 31 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/4302a993-8a20-4fa6-98eb-dd3254f57087',
};
