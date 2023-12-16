export default {
  entity: {
    id: '5e3d0e71-5662-48f8-a5cb-7a6a7c5e105f',
    name: '原形毕露（1976.10.6后）',
    internal: false,
    official: false,
    type: 'img',
    author: '上海大字报，1976.10.6后',
    files: new Array(2)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/5e3d0e71-5662-48f8-a5cb-7a6a7c5e105f/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      { title: '原形毕露', authors: [], page_start: 1, page_end: 2, dates: [] },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/5e3d0e71-5662-48f8-a5cb-7a6a7c5e105f',
};
