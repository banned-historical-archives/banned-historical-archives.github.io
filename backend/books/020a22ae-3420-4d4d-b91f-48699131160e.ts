export default {
  entity: {
    id: '020a22ae-3420-4d4d-b91f-48699131160e',
    name: '邓小平与孔孟之道（初编）',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(13)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/020a22ae-3420-4d4d-b91f-48699131160e/${
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
        title: '邓小平与孔孟之道（初编）',
        authors: ['北京大学清华大学材料组'],
        page_start: 1,
        page_end: 13,
        dates: [{ year: 1976, month: 5 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/020a22ae-3420-4d4d-b91f-48699131160e',
};
