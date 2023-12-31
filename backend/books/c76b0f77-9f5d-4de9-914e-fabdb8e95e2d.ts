export default {
  entity: {
    id: 'c76b0f77-9f5d-4de9-914e-fabdb8e95e2d',
    name: '彻底揭发批判“四人帮”批判文稿选刊（22）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c76b0f77-9f5d-4de9-914e-fabdb8e95e2d/${
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
        title: '彻底揭发批判“四人帮”插手广州、搞乱广州的反革命罪行',
        authors: ['谭启明'],
        page_start: 1,
        page_end: 4,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/c76b0f77-9f5d-4de9-914e-fabdb8e95e2d',
};
