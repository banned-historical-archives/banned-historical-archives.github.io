export default {
  entity: {
    id: 'a87e6586-d7ad-419a-8781-4b93dd7c13e0',
    name: '郑州市深揭狠批“四人帮”大会发言材料之四（1977.3.17）',
    internal: true,
    official: true,
    type: 'img',
    author: '市革委生产指挥部副指挥长 马力',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/a87e6586-d7ad-419a-8781-4b93dd7c13e0/${
            idx + 1
          }.png`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title:
          '愤怒揭发批判“四人帮”及其黑干将唐岐山破坏我市抓革命促生产的滔天罪行',
        authors: ['刘殷农专案组'],
        page_start: 1,
        page_end: 6,
        ocr_exceptions: {
          '1': { auto_vsplit: false },
          '6': { auto_vsplit: true },
        },
        dates: [{ year: 1977, month: 3, day: 17 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/a87e6586-d7ad-419a-8781-4b93dd7c13e0',
};
