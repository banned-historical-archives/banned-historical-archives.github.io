export default {
  entity: {
    id: '8c2dd4d2-d2f4-4c1a-821d-a70b6b88c030',
    name: '深揭猛批“四人帮”斩断黑手朱鸿霞（1977湖北）',
    internal: false,
    official: true,
    type: 'img',
    author: '1977年湖北省农业学大寨会议典型材料',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8c2dd4d2-d2f4-4c1a-821d-a70b6b88c030/${
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
        title: '深揭猛批“四人帮”斩断黑手朱鸿霞',
        authors: ['喻学超'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1977 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8c2dd4d2-d2f4-4c1a-821d-a70b6b88c030',
};
