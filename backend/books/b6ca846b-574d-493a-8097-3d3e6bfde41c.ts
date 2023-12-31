export default {
  entity: {
    id: 'b6ca846b-574d-493a-8097-3d3e6bfde41c',
    name: '刘兆滋同志在市委、市革委会机关揭批“四人帮”罪行大会上的交代揭发材料',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(16)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/b6ca846b-574d-493a-8097-3d3e6bfde41c/${
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
          '刘兆滋同志在市委、市革委会机关揭批“四人帮”罪行大会上的交代揭发材料',
        authors: ['刘兆滋'],
        page_start: 1,
        page_end: 16,
        dates: [{ year: 1977, month: 6, day: 24 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/b6ca846b-574d-493a-8097-3d3e6bfde41c',
};
