export default {
  entity: {
    id: 'cd53a4fa-eeca-4660-8669-519c062cd046',
    name: '揭发与批判第一期',
    internal: false,
    official: false,
    type: 'img',
    author: '省直单位革命大批判组',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/cd53a4fa-eeca-4660-8669-519c062cd046/${
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
        title: '揭发与批判杨大易、景林的错误和罪行',
        authors: [
          '叶卫东',
          '雷志忠',
          '李铁凡',
          '唐忠富',
          '胡勇',
          '郭思廉',
          '陈安喜',
          '周国强',
          '佘定成',
          '甘德贵',
          '刘正良',
        ],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1974, month: 4, day: 10 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/cd53a4fa-eeca-4660-8669-519c062cd046',
};
