export default {
  entity: {
    id: '2991ba87-be67-4429-9bff-2476499b2126',
    name: '外交部揭发“四人帮”罪行材料',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/2991ba87-be67-4429-9bff-2476499b2126/${
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
        title: '外交部揭发“四人帮”罪行材料',
        authors: ['外交部'],
        page_start: 1,
        page_end: 3,
        dates: [],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/2991ba87-be67-4429-9bff-2476499b2126',
};
