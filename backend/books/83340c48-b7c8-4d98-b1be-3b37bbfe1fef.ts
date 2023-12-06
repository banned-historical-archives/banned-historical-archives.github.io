export default {
  entity: {
    id: '83340c48-b7c8-4d98-b1be-3b37bbfe1fef',
    name: '梁效罪证材料',
    internal: false,
    official: false,
    type: 'img',
    author: '北京大学梁效专案组',
    files: new Array(193)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/83340c48-b7c8-4d98-b1be-3b37bbfe1fef/${
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
        title: '梁效罪证材料',
        authors: ['北京大学梁效专案组'],
        page_start: 1,
        page_end: 193,
        dates: [{ year: 1978, month: 8 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/83340c48-b7c8-4d98-b1be-3b37bbfe1fef',
};
