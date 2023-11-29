export default {
  entity: {
    id: '19c859eb-3066-43fe-b334-0032dff3d71f',
    name: '彻底揭发批判“四人帮”批判文稿选刊（22）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(4)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/19c859eb-3066-43fe-b334-0032dff3d71f/${
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
        page_end: 5,
        dates: [{ year: 1977, month: 1 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/19c859eb-3066-43fe-b334-0032dff3d71f',
};
