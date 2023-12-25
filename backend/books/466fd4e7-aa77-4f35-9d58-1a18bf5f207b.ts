export default {
  entity: {
    id: '466fd4e7-aa77-4f35-9d58-1a18bf5f207b',
    name: '长沙市深入揭发批判“四人帮”滔天罪行大会材料（1977.7.22湖南）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共长沙市委办公室，1977.7.22',
    files: new Array(28)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/466fd4e7-aa77-4f35-9d58-1a18bf5f207b/${
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
        title: '长沙市深入揭发批判“四人帮”滔天罪行大会材料',
        authors: ['中共长沙市委办公室'],
        page_start: 1,
        page_end: 28,
        dates: [{ year: 1977, month: 7, day: 22 }],
      },
    ],
    ocr: undefined,
    pdf_no_ocr: false,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/466fd4e7-aa77-4f35-9d58-1a18bf5f207b',
};
